"""Genera src/data/introduccion.js (introducción de la tesis, caps. 1-3): el corpus por edición, los grupos dialectales con
su certeza, los alfabetos epicóricos y la cronología, con las mismas funciones y cifras que las figuras int_1 a int_4,
y el texto del capítulo 2 (las laminillas), que añade a inscriptions.json las inscripciones que cita.

Fuentes: DVC_v5_FINAL.xlsx, hoja Datos (DIALECTO_MACRO, DIALECTO_SUB, DIALECTO_CERTEZA, ALFABETO_GRUPO_v2, Date),
PYTHON/SEABORN-ALTAIR/graficos_introduccion.py (GRUPOS, N, grupo_de) y la INTRODUCCIÓN vigente (§2.1-§2.4).

Uso:  py scripts/datos_introduccion.py
"""
import json
import os
import re
import sys
import tempfile
from pathlib import Path

import pandas as pd

sys.stdout.reconfigure(encoding="utf-8")
RAIZ = Path(__file__).resolve().parents[1]
UVA = RAIZ.parent
GRAF = UVA / "PYTHON" / "SEABORN-ALTAIR"
EXCEL = UVA / "CAPÍTULOS TESIS" / "DVC_v5_FINAL.xlsx"
SALIDA = RAIZ / "src" / "data" / "introduccion.js"

for v in ("OUT_DIR", "OUT_DIR_ALTAIR"):
    os.environ.setdefault(v, tempfile.gettempdir())
os.environ.setdefault("EXCEL_DVC", str(EXCEL))
sys.path.insert(0, str(GRAF))
import graficos_dialecto_altair as al  # noqa: E402
import graficos_introduccion as I  # noqa: E402
from graficos_dialecto_pandas import ROTULO_SIGLO, parse_fecha, siglo_macro  # noqa: E402
from comun import Excel, anadir_a_indice, apartados, indices, parrafos, secciones, ultima  # noqa: E402

J = lambda x: json.dumps(x, ensure_ascii=False)
df = pd.read_excel(EXCEL, sheet_name="Datos")
assert len(df) == I.N["total"], len(df)

# int_1: inscripciones con y sin características dialectales, por edición
solo_lhote = df["No DVC"].isna()
CORPUS = []
for etq, x in (("Corpus completo", df), ("I.Dodone DVC", df[~solo_lhote]), ("Solo en I.Dodone Lhôte", df[solo_lhote])):
    con = int(x["DIALECTO_MACRO"].notna().sum())
    CORPUS.append({"name": etq, "con": con, "sin": len(x) - con})
assert CORPUS[0]["con"] == I.N["clasificadas"]

# int_2: grupos dialectales con su certeza, en el orden de la antigua tabla 1
cl = df[df["DIALECTO_MACRO"].notna()].copy()
cl["grupo"] = cl.apply(I.grupo_de, axis=1)
GRUPOS = []
for etq, g in I.GRUPOS:
    x = cl[cl["grupo"] == g]
    c = x["DIALECTO_CERTEZA"].value_counts()
    GRUPOS.append({"name": etq.replace("\n", " "), "segura": int(c.get("Seguro", 0)), "dudosa": int(c.get("Dudoso", 0)),
                   "nombre": int(c.get("Solo nombre/alfabeto", 0)), "color": al.MACRO_COLORES[g]})
assert sum(g["segura"] + g["dudosa"] + g["nombre"] for g in GRUPOS) == I.N["clasificadas"]
CERTEZA = {k: int((cl["DIALECTO_CERTEZA"] == e).sum()) for k, e in
           (("seguras", "Seguro"), ("dudosas", "Dudoso"), ("nombre", "Solo nombre/alfabeto"))}
assert CERTEZA == {"seguras": I.N["Seguro"], "dudosas": I.N["Dudoso"], "nombre": I.N["Solo nombre/alfabeto"]}

# int_3: alfabetos epicóricos identificados
s = df["ALFABETO_GRUPO_v2"].dropna()
s = s[~s.isin(["Reformado / Desconocido", "Milesio / Desconocido"])].value_counts()
assert int(s.sum()) == I.N["epicoricos"]
COLOR_ALF = {"Corintio": "corintio", "Dodona": "dodona", "Élide": "elide", "Eubea": "eubea", "Magna Grecia / Sicilia": "magnaGrecia",
             "Occidental / Calcídica": "occidental", "Tesalio / Beocio": "tesalio", "Tesalio": "tesalio", "Beocio": "beocio",
             "Epirota": "epirota"}
ROTULO_ALF = {"Dodona": "Local de Dodona", "Magna Grecia / Sicilia": "Magna Grecia o Sicilia", "Occidental / Calcídica": "Occidental o calcídico",
              "Tesalio / Beocio": "Tesalio o beocio", "Mégara / Sición": "Mégara o Sición", "Eubea": "Euboico", "Otros": "Otros"}
ALFABETOS = [{"name": ROTULO_ALF.get(k, k), "value": int(v), "clave": COLOR_ALF.get(k, "otros")} for k, v in s.items()]

# int_4: cronología por siglos y transiciones (§2.3.4)
serie = df["Date"].map(lambda x: siglo_macro(parse_fecha(x))).value_counts()
assert int(serie.sum()) == I.N["total"]
CRONO = [{"period": ROTULO_SIGLO[k], "n": int(serie[k]), "siglo": k} for k in ROTULO_SIGLO if k in serie.index]

# Capítulo 2, las laminillas: los apartados con su texto; el de la cronología (§2.3.4) va aparte, con sus cifras.
DOCX = ultima("INTRODUCCIÓN", "INTRODUCCIÓN_v*.docx")
pars = parrafos(DOCX)
i0 = indices(pars, "2.1.")
secs = secciones(pars, i0, next(i for i in range(i0, len(pars)) if pars[i][1].startswith("CAPÍTULO 3")))
CRONO_TXT = next(ps for n, _, ps in secs if n == "2.3.4")
for d in CRONO:   # las cifras de §2.3.4 han de ser las del Excel
    assert f"{d['n']:,}".replace(",", ".") in CRONO_TXT[0], d
LAMINILLAS = [{**a, "name": a["name"].replace("carapanos", "Carapanos").replace("i.dodone dvc", "I.Dodone DVC")}
              for a in apartados([x for x in secs if x[0] != "2.3.4"])]
# Al índice, las citas que renderDesc enlaza: “I.Dodone DVC 194A y 195B”.
REF = re.compile(r"I\.Dodone (DVC|Lhôte) (\d+\w*)((?:(?:,\s*|\s+[ye]\s+)\d+\w*)*)")
NUEVAS = anadir_a_indice({f"{c} {x}" for _, _, ps in secs for p in ps for c, a, b in REF.findall(p)
                          for x in [a, *re.findall(r"\d+\w*", b)]}, Excel())

partes = [
    "// Generado por scripts/datos_introduccion.py: no editar a mano.",
    "// Introducción de la tesis (caps. 1-3): las cifras de las figuras int_1 a int_4 (graficos_introduccion.py), con los datos de",
    "// DVC_v5_FINAL.xlsx (hoja Datos), y el texto del capítulo 2.",
    "",
    f"export const TOTAL_INSCRIPCIONES = {I.N['total']};",
    f"export const TOTAL_EPICORICAS = {I.N['epicoricos']};",
    "// int_1: inscripciones con y sin características dialectales, por edición.",
    f"export const CORPUS_INT = {J(CORPUS)};",
    "// int_2: grupos dialectales (orden de la antigua tabla 1) con su certeza y el color de su macrogrupo.",
    f"export const GRUPOS_INT = {J(GRUPOS)};",
    f"export const CERTEZA_INT = {J(CERTEZA)};",
    "// int_3: alfabetos epicóricos (ALFABETO_GRUPO_v2); clave: color de ALFABETO_COLORS.",
    f"export const ALFABETOS_INT = {J(ALFABETOS)};",
    "// int_4: cronología por siglos y transiciones; siglo: clave de SIGLO_COLORS.",
    f"export const CHRONO_INT = {J(CRONO)};",
    f"// Capítulo 2 ({DOCX.name}): apartados de las laminillas y texto de la cronología (§2.3.4).",
    f"export const SECCIONES_LAM = {J(LAMINILLAS)};",
    f"export const CRONOLOGIA_TXT = {J(CRONO_TXT)};",
    "",
]
SALIDA.write_text("\n".join(partes), encoding="utf-8")
print("introduccion.js:", CORPUS[0], CERTEZA, len(ALFABETOS), "alfabetos,", len(CRONO), "periodos")
print(J(ALFABETOS)); print(J(CRONO))
print("capítulo 2:", DOCX.name, [a["sec"] + " " + a["name"] for a in LAMINILLAS])
print("inscripciones añadidas al índice:", NUEVAS)
