"""Genera la costa (y, opcionalmente, áreas recortadas a ella) de un mapa regional
como trazados SVG listos para src/components/maps/coastlines.js.

Proyección equirrectangular con corrección por el coseno de la latitud media,
la misma que usan los componentes de mapa (src/components/maps/geo.js).

Uso:
    python scripts/coastline.py costa.geojson NOMBRE lon0 lon1 lat0 lat1 [areas.json]

    areas.json (opcional): {"clave": [[lon, lat], ...], ...}; cada polígono se
    recorta a la costa y se exporta en NOMBRE_AREAS.

Requiere shapely (pip install shapely). El geojson debe contener polígonos de
tierra en lon/lat (p. ej. Natural Earth 10 m, dominio público).
"""
import json
import math
import sys

from shapely.geometry import Polygon, box, shape
from shapely.ops import unary_union

W = 760          # ancho del viewBox de todos los mapas
TOLERANCIA = 0.004   # simplificación en grados (~400 m)


def trazado(geom, proj):
    polys = [geom] if geom.geom_type == "Polygon" else list(getattr(geom, "geoms", []))
    partes = []
    for p in polys:
        if p.is_empty or p.geom_type != "Polygon":
            continue
        for anillo in [p.exterior, *p.interiors]:
            pts = [proj(x, y) for x, y in anillo.coords]
            partes.append("M" + "L".join(f"{x:.1f},{y:.1f}" for x, y in pts) + "Z")
    return "".join(partes)


def main():
    geojson, nombre, lon0, lon1, lat0, lat1 = sys.argv[1], sys.argv[2], *map(float, sys.argv[3:7])
    kx = math.cos(math.radians((lat0 + lat1) / 2))
    s = W / ((lon1 - lon0) * kx)
    proj = lambda lon, lat: ((lon - lon0) * kx * s, (lat1 - lat) * s)

    feats = json.load(open(geojson, encoding="utf-8"))["features"]
    tierra = unary_union([shape(f["geometry"]) for f in feats])
    # Margen de 0,05° para que el borde de la ventana no dibuje costa falsa.
    ventana = box(lon0 - 0.05, lat0 - 0.05, lon1 + 0.05, lat1 + 0.05)
    tierra = tierra.intersection(ventana).simplify(TOLERANCIA, preserve_topology=True)

    h = round((lat1 - lat0) * s)
    print(f"// Ventana {lon0}–{lon1} E, {lat0}–{lat1} N · viewBox 0 0 {W} {h}")
    print(f'export const {nombre}_LAND_PATH = "{trazado(tierra, proj)}";')

    if len(sys.argv) > 7:
        areas = json.load(open(sys.argv[7], encoding="utf-8"))
        salida = {k: trazado(Polygon(v).intersection(tierra), proj) for k, v in areas.items()}
        print(f"export const {nombre}_AREAS = {json.dumps(salida, ensure_ascii=False)};")


if __name__ == "__main__":
    main()
