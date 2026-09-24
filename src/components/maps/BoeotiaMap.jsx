// Mapa de Beocia con las ciudades que el corpus menciona o a las que apunta.
import { useState } from "react";
import { C } from "../../theme.js";
import { BO_KIND, BO_PLACES } from "../../data/beocio.js";
import { BO_LAND_PATH } from "./coastlines.js";
import { HALO, diamond, makeProj, polygonPoints } from "./geo.js";
import { MapLegend, MapSvg, Mountains, RefCities, RegionLabels, ScaleBar, SeaLabels, SourceNote } from "./MapBase.jsx";

const P = makeProj({ lon0: 22.40, lon1: 24.05, lat0: 37.98, lat1: 38.78 });

// Contorno aproximado del antiguo lago Copais (desecado a finales del s. XIX).
const COPAIS = [
  [22.945, 38.445], [22.985, 38.478], [23.04, 38.500], [23.10, 38.508], [23.16, 38.500],
  [23.205, 38.480], [23.228, 38.452], [23.205, 38.422], [23.145, 38.400], [23.08, 38.388],
  [23.02, 38.392], [22.972, 38.410],
];
const POLEIS = [
  { name: "Queronea", lon: 22.848, lat: 38.495, dx: -7, dy: -5, anchor: "end" },
  { name: "Lebadea",  lon: 22.876, lat: 38.436, dx: -7, dy: 4,  anchor: "end" },
  { name: "Coronea",  lon: 22.965, lat: 38.393, dx: -6, dy: 12, anchor: "end" },
  { name: "Haliarto", lon: 23.097, lat: 38.381, dx: 0,  dy: 14, anchor: "middle" },
  { name: "Acrefias", lon: 23.216, lat: 38.452, dx: 7,  dy: 4,  anchor: "start" },
  { name: "Platea",   lon: 23.273, lat: 38.217, dx: 7,  dy: 4,  anchor: "start" },
  { name: "Tanagra",  lon: 23.527, lat: 38.326, dx: 7,  dy: 4,  anchor: "start" },
  { name: "Tisbe",    lon: 22.970, lat: 38.255, dx: -7, dy: 4,  anchor: "end" },
];
const FUERA = [
  { name: "Delfos", lon: 22.501, lat: 38.482, dx: 7, dy: 4, anchor: "start" },
  { name: "Calcis", lon: 23.595, lat: 38.463, dx: 7, dy: -3, anchor: "start" },
];
const MONTES = [
  { name: "Parnaso", lon: 22.622, lat: 38.536 },
  { name: "Helicón", lon: 22.830, lat: 38.352 },
  { name: "Citerón", lon: 23.249, lat: 38.183 },
];
const REGIONES = [
  { t: "FÓCIDE", lon: 22.60, lat: 38.64 }, { t: "LÓCRIDE", lon: 23.00, lat: 38.70 },
  { t: "EUBEA", lon: 23.82, lat: 38.64 }, { t: "ÁTICA", lon: 23.60, lat: 38.10 },
];
const MARES = [
  { t: "Golfo de Corinto", lon: 22.66, lat: 38.16 },
  { t: "Golfo de Eubea", lon: 23.50, lat: 38.665 },
];

export default function BoeotiaMap({ selected = null, onSelect = () => {} }) {
  const [hover, setHover] = useState(null);
  const active = hover || selected;
  const [cx, cy] = P.p(23.095, 38.452);
  const [bx, by] = P.p(23.40, 38.405);

  return (
    <div>
      <MapSvg proj={P} land={BO_LAND_PATH} label="Mapa de Beocia con las ciudades relacionadas con el corpus de Dodona">
        <polygon points={polygonPoints(P, COPAIS)} fill="rgba(42,106,142,0.12)" stroke={C.blue} strokeOpacity={0.45}
          strokeWidth={0.9} strokeDasharray="4 3" />
        <text x={cx} y={cy + 4} textAnchor="middle"
          style={{ fontSize: 10.5, fill: C.blue, opacity: 0.75, fontFamily: "var(--fh)", fontStyle: "italic" }}>Lago Copais</text>
        <RegionLabels proj={P} items={REGIONES} />
        <SeaLabels proj={P} items={MARES} />
        <text x={bx} y={by} textAnchor="middle"
          style={{ fontSize: 15, fill: C.beocio, opacity: 0.32, fontFamily: "var(--fh)", fontStyle: "italic", letterSpacing: 6 }}>BEOCIA</text>
        <Mountains proj={P} items={MONTES} />
        <RefCities proj={P} items={POLEIS} />
        <RefCities proj={P} items={FUERA} faint />

        {BO_PLACES.map((pl) => {
          const [x, y] = P.p(pl.lon, pl.lat);
          const isAct = active === pl.id;
          const col = BO_KIND[pl.kind].color;
          const sel = () => onSelect(selected === pl.id ? null : pl.id);
          return (
            <g key={pl.id} tabIndex={0} role="button" aria-label={`${pl.name}: ${BO_KIND[pl.kind].label}`}
              onMouseEnter={() => setHover(pl.id)} onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(pl.id)} onBlur={() => setHover(null)} onClick={sel}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sel(); } }}
              style={{ cursor: "pointer", outline: "none" }}>
              {pl.kind === "mencion" && <>
                <circle cx={x} cy={y} r={isAct ? 9.5 : 8} fill={col} stroke="#fff" strokeWidth={1.6}
                  filter={isAct ? "url(#mapGlow)" : "none"} style={{ transition: "all 0.2s" }} />
                {!pl.certain && <circle cx={x} cy={y} r={13} fill="none" stroke={col} strokeWidth={1.2} strokeDasharray="3 2" />}
              </>}
              {pl.kind === "procedencia" &&
                <polygon points={diamond(x, y, isAct ? 9.5 : 8)} fill="rgba(255,255,255,0.7)" stroke={col} strokeWidth={2}
                  filter={isAct ? "url(#mapGlow)" : "none"} style={{ transition: "all 0.2s" }} />}
              {pl.kind === "contexto" &&
                <circle cx={x} cy={y} r={isAct ? 6 : 5} fill={C.text} stroke="#fff" strokeWidth={1.4} style={{ transition: "all 0.2s" }} />}
              {selected === pl.id && <circle cx={x} cy={y} r={17} fill="none" stroke={C.beocioDeep} strokeWidth={1.2} strokeDasharray="3 2" />}
              <text x={x + pl.dx} y={y + pl.dy} textAnchor={pl.anchor}
                style={{ fontSize: pl.kind === "contexto" ? 13 : 12.5, fontFamily: "var(--fh)",
                  fontWeight: isAct || pl.kind !== "procedencia" ? 700 : 600,
                  fill: pl.kind === "contexto" ? C.heading : col, ...HALO }}>{pl.name}</text>
            </g>
          );
        })}

        {/* Dodona, fuera del marco */}
        <line x1={78} y1={46} x2={30} y2={18} stroke={C.ink} strokeWidth={1.3} markerEnd="url(#mapArrow)" />
        <text x={84} y={44} style={{ fontSize: 12.5, fontWeight: 700, fill: C.ink, fontFamily: "var(--fh)" }}>Dodona</text>
        <text x={84} y={57} style={{ fontSize: 9.5, fill: C.muted, fontFamily: "var(--fb)", fontStyle: "italic" }}>≈ 260 km al noroeste</text>

        <ScaleBar proj={P} km={20} />
        <SourceNote proj={P}>Costa: © OpenStreetMap contributors (ODbL) · Copais: contorno aproximado del lago antiguo</SourceNote>
      </MapSvg>
      <MapLegend items={[
        { el: <circle cx="8" cy="8" r="5.5" fill={C.beocio} stroke="#fff" strokeWidth="1.2" />, l: "Mención en una laminilla" },
        { el: <><circle cx="8" cy="8" r="4" fill={C.beocio} /><circle cx="8" cy="8" r="7" fill="none" stroke={C.beocio} strokeDasharray="3 2" /></>, l: "Mención con adscripción regional discutida" },
        { el: <polygon points={diamond(8, 8, 6)} fill="rgba(255,255,255,0.7)" stroke={C.beocioDeep} strokeWidth="1.6" />, l: "Procedencia propuesta por rasgos lingüísticos" },
        { el: <circle cx="8" cy="8" r="4.5" fill={C.text} />, l: "Sin mención en el corpus" },
      ]} />
    </div>
  );
}
