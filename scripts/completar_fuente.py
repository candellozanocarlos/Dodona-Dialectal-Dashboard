"""Añade a la fuente DodonaCardo los glifos de griego, fonética y variantes epigráficas que usan los textos y aún no tiene,
copiándolos de Cardo (SIL OFL 1.1). Lista lo que no encuentre.

Uso:  py scripts/completar_fuente.py <ruta de Cardo-Regular.ttf> [<ruta de Cardo-Italic.ttf>]
"""
import sys
import unicodedata
from pathlib import Path

from fontTools.ttLib import TTFont

sys.stdout.reconfigure(encoding="utf-8")
RAIZ = Path(__file__).resolve().parents[1]
FUENTES = RAIZ / "src" / "assets" / "fonts"


def interesa(ch):
    o = ord(ch)
    return 0x250 <= o <= 0x2AF or 0x2D0 <= o <= 0x2D1 or 0x370 <= o <= 0x3FF or 0x1F00 <= o <= 0x1FFF or 0x300 <= o <= 0x36F or o >= 0xF0000


usados = set()
for p in list((RAIZ / "src" / "data").glob("*")) + list((RAIZ / "src" / "chapters").glob("*")) + [RAIZ / "src" / "components" / "ui.jsx"]:
    usados |= {c for c in unicodedata.normalize("NFC", p.read_text(encoding="utf-8")) if interesa(c)}


def copiar(destino, origen, nombre, vistos=None):
    """Copia un glifo TrueType, con sus componentes si es compuesto, y sus métricas."""
    if nombre in destino["glyf"].glyphs:
        return
    g = origen["glyf"][nombre]
    if g.isComposite():
        for comp in g.components:
            copiar(destino, origen, comp.glyphName)
    destino["glyf"][nombre] = g
    destino["hmtx"][nombre] = origen["hmtx"][nombre]
    orden = destino.getGlyphOrder()
    if nombre not in orden:
        destino.setGlyphOrder(orden + [nombre])


for archivo, ttf in zip(("DodonaCardo-Regular.woff2", "DodonaCardo-Italic.woff2"), sys.argv[1:]):
    f = TTFont(FUENTES / archivo)
    o = TTFont(ttf)
    cf, co = f.getBestCmap(), o.getBestCmap()
    faltan = sorted(c for c in usados if ord(c) not in cf)
    anadidos, sin = [], []
    for c in faltan:
        if ord(c) in co:
            nombre = co[ord(c)]
            copiar(f, o, nombre)
            for t in f["cmap"].tables:
                if t.isUnicode() and (ord(c) < 0x10000 or t.format == 12):
                    t.cmap[ord(c)] = nombre
            anadidos.append(c)
        else:
            sin.append(c)
    f["maxp"].numGlyphs = len(f.getGlyphOrder())
    f.flavor = "woff2"
    f.save(FUENTES / archivo)
    print(archivo, "añadidos:", [f"U+{ord(c):04X}" for c in anadidos], "· sin glifo en Cardo:", [f"U+{ord(c):04X}" for c in sin])
