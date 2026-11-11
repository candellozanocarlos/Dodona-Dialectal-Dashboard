"""Genera src/data/anexos/<capítulo>.json: las inscripciones del tesalio, el beocio, el dórico general, el dórico
noroccidental y la Doris severior, con el texto de la edición, para la pestaña "Las inscripciones" de cada capítulo
(como los anexos del jónico-ático, la mezcla y las no jónico-áticas).

Fuente: DVC_v5_FINAL.xlsx, hoja Datos (DIALECTO_MACRO, DIALECTO_SUB, DIALECTO_CERTEZA, Date, Text, No DVC, Editions).
Cada fila: [clave, datación, texto, certeza (s, d, n), grupo].

Uso:  py scripts/datos_anexos.py
"""
import json
import re
import sys
from pathlib import Path

import pandas as pd

sys.stdout.reconfigure(encoding="utf-8")
RAIZ = Path(__file__).resolve().parents[1]
EXCEL = RAIZ.parent / "CAPÍTULOS TESIS" / "DVC_v5_FINAL.xlsx"
SALIDA = RAIZ / "src" / "data" / "anexos"
sys.path.insert(0, str(Path(__file__).resolve().parent))
import datos_adscripcion as DA  # noqa: E402

CERT = {"Seguro": "s", "Dudoso": "d", "Solo nombre/alfabeto": "n"}
# DIALECTO_MACRO → (archivo, {DIALECTO_SUB: grupo}); el orden del diccionario es el de los grupos en la vista.
CAPITULOS = {
    "tesalio": ("Tesalio", {"Tesalio (Pelasgiótide)": "Pelasgiótide", "Tesalio (Histiótide)": "Histiótide",
                            "Tesalio (Tesaliótide)": "Tesaliótide", "Tesalio (general)": "Región sin precisar"}),
    "beocio": ("Beocio", {"Beocio": "Beocio"}),
    "doricoGeneral": ("Dórico", {"Doris mitior": "Dórico general", "Dórico Magna Grecia": "Dórico de la Magna Grecia"}),
    "doricoNO": ("Dórico", {"Dórico NO": "Dórico noroccidental"}),
    "severior": ("Doris severior", {"Doris severior": "Doris severior"}),
}
# Los totales de cada capítulo, de src/data/corpus.js (TOTAL_TES, TOTAL_BEOC…).
_corpus = (RAIZ / "src" / "data" / "corpus.js").read_text(encoding="utf-8")
ESPERADOS = {k: int(re.search(rf"export const {t} = (\d+);", _corpus).group(1)) for k, t in
             (("tesalio", "TOTAL_TES"), ("beocio", "TOTAL_BEOC"), ("doricoGeneral", "TOTAL_DOR"), ("doricoNO", "TOTAL_DOR_NO"), ("severior", "TOTAL_SEV"))}


def clave(r):
    """Clave del dashboard: "123A" (DVC) o "LOD 89Aa" (Lhôte), como en datos_frontera.py."""
    if pd.isna(r["No DVC"]):
        m = re.search(r"Lhôte, no (\d+[a-z]?)\s*(?:\((?:Face|[Ii]nscription) ([A-Za-z]+)\))?", str(r["Editions"]))
        return "LOD " + m.group(1) + (m.group(2) or "")
    return DA.clave_excel(r).split(" (")[0][4:]


df = pd.read_excel(EXCEL, sheet_name="Datos")
SALIDA.mkdir(exist_ok=True)
for nombre, (macro, grupos) in CAPITULOS.items():
    x = df[(df["DIALECTO_MACRO"] == macro) & df["DIALECTO_SUB"].isin(grupos)]
    assert len(x) == ESPERADOS[nombre], (nombre, len(x))
    filas = [[clave(r), DA.fecha(r["Date"]), r["Text"] if pd.notna(r["Text"]) else "", CERT[r["DIALECTO_CERTEZA"]], grupos[r["DIALECTO_SUB"]]]
             for _, r in x.iterrows()]
    assert len({f[0] for f in filas}) == len(filas), nombre
    (SALIDA / f"{nombre}.json").write_text(json.dumps(filas, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"{nombre}: {len(filas)}")
