"""Genera src/data/introduccion.js (Introducción y Parte I de la tesis): el corpus por edición, los grupos dialectales con
su certeza, los alfabetos epicóricos y la cronología, con las mismas funciones y cifras que las figuras int_1 a int_4,
y el texto de la Introducción y de los capítulos 1-4 de la Parte I, que añade a inscriptions.json las inscripciones que cita.

Fuentes: DVC_v5_FINAL.xlsx, hoja Datos (DIALECTO_MACRO, DIALECTO_SUB, DIALECTO_CERTEZA, ALFABETO_GRUPO_v2, Date),
PYTHON/SEABORN-ALTAIR/graficos_introduccion.py (GRUPOS, N, grupo_de) e INTRODUCCIÓN Y PARTE I vigente (Introducción y caps. 1-4).

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
from comun import Excel, anadir_a_indice, indices, parrafos, secciones, titulo, ultima  # noqa: E402

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

# int_4: cronología por siglos y transiciones (§2.3.3)
serie = df["Date"].map(lambda x: siglo_macro(parse_fecha(x))).value_counts()
assert int(serie.sum()) == I.N["total"]
CRONO = [{"period": ROTULO_SIGLO[k], "n": int(serie[k]), "siglo": k} for k in ROTULO_SIGLO if k in serie.index]

# Introducción y Parte I (nueva estructura de la tesis, 19-20 nov. 2026): el texto de la Introducción, un solo texto sin
# apartados, y los capítulos 1-4 de la Parte I con sus apartados; el arco del corpus (§1.4, último párrafo) acompaña la
# cronología. La discusión de las fechas y la autoría van en los caps. 9.3 y 9.4, que el dashboard no recoge aún.
DOCX = ultima("PARTE I. INTRODUCCIÓN", "INTRODUCCIÓN Y PARTE I_v*.docx")
pars = parrafos(DOCX)
cuerpo = [t for _, t in pars]
i_int = indices(pars, "INTRODUCCIÓN")
i_conv = indices(pars, "CONVENCIONES")
INTRO = [t for st, t in pars[i_int + 1:i_conv] if t]
CAPS = [i for i, t in enumerate(cuerpo) if re.match(r"CAPÍTULO \d\. ", t)]
i_bib = indices(pars, "REFERENCIAS")
assert len(CAPS) == 4 and INTRO, (CAPS, len(INTRO))
ARREGLOS = {"carapanos": "Carapanos", "sammlung": "<i>Sammlung</i>", "hoffmann": "Hoffmann", "s. xx": "s. XX", "estado moloso": "Estado moloso",
            "I.dodone lhôte": "I.Dodone Lhôte", "I.dodone dvc": "I.Dodone DVC", "Dodona online": "<i>Dodona Online</i>"}
def nombre(t):
    t = titulo(t)
    for a, b in ARREGLOS.items():
        t = t.replace(a, b)
    return t
PARTE1 = []
for k, i0 in enumerate(CAPS):
    i1 = CAPS[k + 1] if k + 1 < len(CAPS) else i_bib
    secs = secciones(pars, i0 + 1, i1)
    PARTE1.append({"cap": k + 1, "titulo": nombre(re.sub(r"^CAPÍTULO \d\. ", "", cuerpo[i0])),
                   "secs": [{"sec": n, "name": nombre(t), "paras": ps} for n, t, ps in secs if ps]})
ARCO = next(p for c in PARTE1 for s_ in c["secs"] if s_["sec"] == "1.4" for p in s_["paras"] if p.startswith("En ese recorrido"))
# “más de nueve de cada diez inscripciones pertenecen a los ss. V y IV a.C. o a la transición entre ambos siglos”
n_v_iv = sum(d["n"] for d in CRONO if d["siglo"] in ("V", "V-IV", "IV"))
assert "nueve de cada diez" in ARCO and n_v_iv / I.N["total"] > 0.9, n_v_iv
# Al índice, las citas que renderDesc enlaza: “I.Dodone DVC 194A y 195B”.
REF = re.compile(r"I\.Dodone (DVC|Lhôte) (\d+\w*)((?:(?:,\s*|\s+[ye]\s+)\d+\w*)*)")
textos = INTRO + [p for c in PARTE1 for s_ in c["secs"] for p in s_["paras"]]
NUEVAS = anadir_a_indice({f"{c} {x}" for p in textos for c, a, b in REF.findall(p)
                          for x in [a, *re.findall(r"\d+\w*", b)]}, Excel())

partes = [
    "// Generado por scripts/datos_introduccion.py: no editar a mano.",
    "// Introducción y Parte I de la tesis: las cifras de las figuras int_1 a int_4 (graficos_introduccion.py), con los datos de",
    "// DVC_v5_FINAL.xlsx (hoja Datos), y el texto de la Introducción y de la Parte I.",
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
    f"// Introducción y Parte I ({DOCX.name}): el texto de la Introducción, los capítulos 1-4 con sus apartados y el arco del",
    "// corpus (último párrafo de §1.4).",
    f"export const INTRO_TXT = {J(INTRO)};",
    f"export const PARTE1_INT = {J(PARTE1)};",
    f"export const ARCO_TXT = {J(ARCO)};",
    "",
]
SALIDA.write_text("\n".join(partes), encoding="utf-8")
print("introduccion.js:", CORPUS[0], CERTEZA, len(ALFABETOS), "alfabetos,", len(CRONO), "periodos")
print(J(ALFABETOS)); print(J(CRONO))
print("Parte I:", DOCX.name, [s_["sec"] + " " + s_["name"] for c in PARTE1 for s_ in c["secs"]])
print("inscripciones añadidas al índice:", NUEVAS)
