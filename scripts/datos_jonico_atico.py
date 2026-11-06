"""Genera src/data/jonicoAtico.js (Parte IV de la tesis: el jónico-ático y la koiné) y actualiza en
src/data/inscriptions.json la etiqueta dialectal de las inscripciones cuya clasificación ha cambiado en el Excel.

Fuentes:
  · DVC_v5_FINAL.xlsx, hoja Datos (DIALECTO_MACRO = Jónico-Ático-Koiné; DIALECTO_SUB, DIALECTO_CERTEZA, Date, TEMA_MACRO,
    ALFABETO_GRUPO_v2).
  · PYTHON/SEABORN-ALTAIR/graficos_adscripcion.py (tablas jak, jon, ati y koi) y graficos_jonico_atico_koine.py (RASGOS).
  · PARTE IV. JÓNICO-ÁTICO Y KOINÉ_v<n>.docx (la de número más alto, o la de DOCX_JAK): rasgos de §4-§7 del cap. 9 y §4 de los caps. 10-12.

Uso:  py scripts/datos_jonico_atico.py
"""
import ast
import json
import os
import sys
import tempfile
from pathlib import Path

import pandas as pd

sys.stdout.reconfigure(encoding="utf-8")
RAIZ = Path(__file__).resolve().parents[1]
UVA = RAIZ.parent
GRAF = UVA / "PYTHON" / "SEABORN-ALTAIR"
EXCEL = UVA / "CAPÍTULOS TESIS" / "DVC_v5_FINAL.xlsx"
SALIDA = RAIZ / "src" / "data" / "jonicoAtico.js"
INSC = RAIZ / "src" / "data" / "inscriptions.json"

for v in ("OUT_DIR", "OUT_DIR_ALTAIR"):
    os.environ.setdefault(v, tempfile.gettempdir())
os.environ.setdefault("EXCEL_DVC", str(EXCEL))
sys.path.insert(0, str(GRAF))
sys.path.insert(0, str(Path(__file__).resolve().parent))
from datos_adscripcion import actualizar_indice, capitulos, clave_excel, claves_indice, crono, fecha, filas_js, temas  # noqa: E402
from comun import Excel, apartados, clave_js, es_titulo, indices, parrafos, rasgos_de, secciones, ultima  # noqa: E402

df = pd.read_excel(EXCEL, sheet_name="Datos")
jak = df[df["DIALECTO_MACRO"] == "Jónico-Ático-Koiné"]
TOTAL = len(jak)
assert TOTAL == capitulos()["jak"]["total"], TOTAL
cert = jak["DIALECTO_CERTEZA"].value_counts()
SEG = int(cert.get("Seguro", 0))

NOMBRE_SUB = {"Jónico-ático": "Sin precisar", "Ático": "Ático", "Jónico": "Jónico", "Koiné": "Koiné"}
COLOR_SUB = {"Jónico-ático": "#2a6a8e", "Ático": "#4a4e7a", "Jónico": "#3c9d8f", "Koiné": "#8a3a6a"}
subs = jak["DIALECTO_SUB"].value_counts()
SUBGRUPOS = [{"name": NOMBRE_SUB[k], "value": int(subs[k]), "color": COLOR_SUB[k]} for k in NOMBRE_SUB]
for k in ("jon", "ati", "koi"):
    nombre = {"jon": "Jónico", "ati": "Ático", "koi": "Koiné"}[k]
    assert int(subs[nombre]) == capitulos()[k]["total"], (k, subs[nombre])


alf = jak["ALFABETO_GRUPO_v2"].fillna("").astype(str).str.strip()
otros = jak[alf != ""]
assert len(otros) == 1 and str(otros.iloc[0]["No DVC"]).startswith("3708A"), otros["No DVC"].tolist()
SIGLO_IV = sum(d["n"] for d in crono(jak) if "IV" in d["period"] and "V–IV" not in d["period"] and "IV–III" not in d["period"])


def rasgos():
    arbol = ast.parse((GRAF / "graficos_jonico_atico_koine.py").read_text(encoding="utf-8"))
    nodo = next(n for n in arbol.body if isinstance(n, ast.Assign) and getattr(n.targets[0], "id", "") == "RASGOS")
    claves = ["sec", "rasgo", "jak", "otros", "comparten", "seguras", "dudosas"]
    return [{k: (v.replace("\n", " ") if isinstance(v, str) else v) for k, v in zip(claves, f)} for f in ast.literal_eval(nodo.value)]


J = lambda x: json.dumps(x, ensure_ascii=False)

# ── Topónimos y etnónimos (cap. 9, §2; TOPONIMOS y MAPAS["jak"] de graficos_jonico_atico_koine.py) ──
# (id, nombre, griego, lon, lat, desplazamiento del rótulo, ámbito, menciones [(clave, forma, tipo, segura)], nota).
# Sin coordenadas, los que la figura de la tesis no cartografía.
FILA = {clave_excel(r): r for _, r in df.iterrows() if clave_excel(r)}
T, E = "topónimo", "etnónimo"
LUGARES = [
    ("atenas", "Atenas", "Ἀθῆναι", 23.727, 37.984, (-0.10, -0.22), "Ática",
     [("Lhôte 23", "Ἀθηναῖος", E, True), ("Lhôte 52", "Ἀθήνησι", T, True)],
     "Lugar de origen o de residencia de Diógneto, que se presenta como ateniense, y de Isodemo, que pregunta por su residencia allí (cap. 11, §4.1; cap. 12, §4.2)."),
    ("ambracia", "Ambracia", "Ἀμβρακία", 20.985, 39.160, (0.22, 0.05), "Colonias corintias",
     [("Lhôte 106A", "ἐν Ἀμπρα[κίαι]", T, True), ("DVC 2265B", "Ἀπρα[κίαν]", T, False)],
     "Unos navegantes dudan entre permanecer en Ambracia o partir hacia Μεσσήνην; en la segunda consulta el topónimo está restituido."),
    ("apolonia", "Apolonia", "Ἀπολλωνία", 19.470, 40.720, (-0.22, 0.05), "Iliria",
     [("DVC 366A", "[εἰς] Ἀπολλωνίαν", T, True)], "En la costa iliria, destino de un viaje por mar (= I.Dodone Lhôte 97)."),
    ("siracusa", "Siracusa", "Συράκουσαι", 15.287, 37.076, (0.22, -0.10), "Sicilia",
     [("Lhôte 103A", "εἰς Συρακόσας", T, True)],
     "Aristón pregunta si le conviene y le es posible navegar a Siracusa para dirigirse después a la colonia; según Lhôte (2006: 219-220), es un ateniense que piensa trasladarse a ella."),
    ("alicia", "Alicia", "Ἀλυζία", 20.990, 38.640, (0.22, -0.12), "Acarnania",
     [("Lhôte 63", "ἐς Ἀλυζέαν", T, True)], "En Acarnania; el topónimo conserva la ᾱ de su forma local en una consulta jonia (πρήξει)."),
    ("adriatico", "Adriático", "Ἀδρίας", 17.300, 42.050, (0.0, -0.29), "Mar Adriático",
     [("Lhôte 100A", "ἐς Ἀδρίαν", T, True)],
     "El jonio Esquilino pregunta si le conviene navegar hacia el Adriático, en los años en que Dionisio el Viejo refundaba el emporio de Adria."),
    ("escione", "Escíone", "Σκιώνη", 23.445, 39.940, (0.10, 0.18), "Calcídica",
     [("DVC 3156B", "Σκιώνην", T, False)], "Solo si Σκιώνην es un topónimo y no un antropónimo."),
    ("cime", "Cime", "Κύμη", 24.100, 38.630, (-0.12, 0.10), "Eubea o Italia (identificación discutida)",
     [("DVC 35A", "Κυμαῖος", E, False)],
     "Porino, el Κυμαῖος de una consulta con mezcla dialectal, procede según Méndez Dosuna (2018a: 266 n. 4, 279) de la Cime de Eubea o, con más probabilidad, de la colonia eubea de Italia; Lhôte (2017b: 43) la sitúa en Eolia."),
    ("mesene", "Mesene o Mesina", "Μεσσήνη", None, None, (0, 0), "Identificación discutida",
     [("Lhôte 106A", "ἐς Μεσσήνην̣", T, False)], "Destino alternativo a Ambracia en la misma consulta; no se cartografía."),
    ("tisates", "Tisates", "Τισατε͂ς", None, None, (0, 0), "Ubicación desconocida",
     [("Lhôte 100A", "ἐς Τισατε͂ς", E, False)], "Etnónimo de lectura discutida (Πισᾶτες, según Castiglioni 2016), junto al Adriático."),
    ("libia", "Libia", "Λιβύη", None, None, (0, 0), "Fuera del mapa, más al sur",
     [("DVC 3742B", "εἰς Λιβυ[- - -]", T, False)], "Restituida; queda al sur de la ventana del mapa."),
]
TOPONYMS = []
for id_, nom, gr, lon, lat, off, amb, menc, nota in LUGARES:
    ms = [{"ref": k[4:] if k.startswith("DVC ") else "LOD " + k[6:], "form": fo, "date": fecha(FILA[k]["Date"]), "type": ti, "certain": se}
          for k, fo, ti, se in menc]
    TOPONYMS.append({"id": id_, "name": nom, "greek": gr, "lon": lon, "lat": lat, "off": list(off), "ambito": amb, "note": nota, "mentions": ms})
assert sum(len(t["mentions"]) for t in TOPONYMS) == 13 and sum(m["certain"] for t in TOPONYMS for m in t["mentions"]) == 7

# ── Anexo (JON_AT_KOINE_3_Inscripciones): las inscripciones del grupo con su texto, datación y clasificación ──
NOMBRE_ANEXO = {"Jónico-ático": "jónico-ático sin precisar", "Ático": "ático", "Jónico": "jónico", "Koiné": "koiné"}
CERT = {"Seguro": "s", "Dudoso": "d", "Solo nombre/alfabeto": "n"}
ANEXO = []
for _, r in jak.iterrows():
    k = clave_excel(r)
    ANEXO.append([k[4:] if k.startswith("DVC ") else "LOD " + k[6:], fecha(r["Date"]), r["Text"] if pd.notna(r["Text"]) else "",
                  CERT[r["DIALECTO_CERTEZA"]], NOMBRE_ANEXO[r["DIALECTO_SUB"]]])
sub = {k: jak[jak["DIALECTO_SUB"] == k] for k in ("Jónico", "Ático", "Koiné")}
# ── Texto de la Parte IV: rasgos del cap. 9 (§4-§7) y apartados de §4 de los caps. 10-12 ──
DOCX = Path(os.environ.get("DOCX_JAK") or ultima("PARTE IV. JÓNICO-ÁTICO-KOINÉ", "PARTE IV*_v*.docx"))
pars = parrafos(DOCX)
ex = Excel()


def hasta(i0, inicio):
    return next(i for i, (st, t) in enumerate(pars) if i > i0 and es_titulo(st) and t.startswith(inicio))


i9 = indices(pars, "4. CARACTER")
RASGOS_CAP9, CITADAS_CAP9 = rasgos_de(secciones(pars, i9, hasta(i9, "8. ANEXOS")), ex)
SECS = {}
for n, k in enumerate(("JON", "ATI", "KOI")):
    i0 = indices(pars, "4. LAS INSCRIPCIONES", n)
    SECS[k] = apartados(secciones(pars, i0, hasta(i0, "5. ANEXOS")))
TEXTOS_CAP9 = {clave_js(k): ex.col(ex.filas[k], "Text") for k in sorted(CITADAS_CAP9) if ex.col(ex.filas[k], "Text")}

partes = [
    "// Generado por scripts/datos_jonico_atico.py: no editar a mano.",
    "// Capítulos 9-12 de la tesis (Parte IV): el jónico-ático y la koiné. Fuentes: DVC_v5_FINAL.xlsx, hoja Datos",
    "// (DIALECTO_MACRO = Jónico-Ático-Koiné; DIALECTO_SUB, DIALECTO_CERTEZA, Date, TEMA_MACRO, ALFABETO_GRUPO_v2; Resúmenes, fila 184),",
    "// y las tablas de la tesis (graficos_adscripcion.py, graficos_jonico_atico_koine.py).",
    'import { ALFABETO_COLORS, C } from "../theme.js";',
    "",
    f"export const TOTAL_JAK = {TOTAL};",
    "// dudosas: las dudosas y las de solo nombre.",
    f"export const CERTEZA_JAK = {{ seguras: {SEG}, dudosas: {TOTAL - SEG} }};",
    "// Inscripciones del s. IV a.C. (sin las transiciones), para el título de la cronología.",
    f"export const SIGLO_IV_JAK = {SIGLO_IV};",
    "// Subgrupos (DIALECTO_SUB): koiné solo con prueba positiva (πράσσοι o fecha desde finales del s. IV a.C.).",
    f"export const SUBGRUPOS_JAK = {J(SUBGRUPOS)};",
    "// Cronología (columna Date, misma agrupación que los gráficos de la tesis).",
    f"export const CHRONO_DETAIL_JAK = {J(crono(jak))};",
    f"export const THEMES_JAK = {J(temas(jak))};",
    "// Alfabeto (ALFABETO_GRUPO_v2): todas reformadas o sin alfabeto identificable salvo 3708A (colonia elea, según los editores).",
    "export const ALF_JAK_PIE = [",
    f'  {{ id: "milesio", label: "Reformado o no identificado", value: {TOTAL - 1}, color: C.milesio }},',
    '  { id: "elide", label: "Colonia elea del Epiro (3708A)", value: 1, color: ALFABETO_COLORS.elide },',
    "];",
    f"export const ADSCRIPCION_JAK = {J(filas_js('jak'))};",
    f"export const ADSCRIPCION_JON = {J(filas_js('jon'))};",
    f"export const ADSCRIPCION_ATI = {J(filas_js('ati'))};",
    f"export const ADSCRIPCION_KOI = {J(filas_js('koi'))};",
    f"export const CHRONO_JON = {J(crono(sub['Jónico']))};",
    f"export const THEMES_JON = {J(temas(sub['Jónico']))};",
    f"export const CHRONO_ATI = {J(crono(sub['Ático']))};",
    f"export const THEMES_ATI = {J(temas(sub['Ático']))};",
    f"export const CHRONO_KOI = {J(crono(sub['Koiné']))};",
    f"export const THEMES_KOI = {J(temas(sub['Koiné']))};",
    "// Rasgos que separan el jónico-ático de los demás dialectos (tabla jak_9 del cap. 9): consultas con el rasgo visible.",
    f"export const RASGOS_TABLA_JAK = {J(rasgos())};",
    f"// Rasgos del cap. 9 (§4-§7) y apartados de §4 de los caps. 10-12: {DOCX.stem}.",
    f"export const RASGOS_JAK = {J(RASGOS_CAP9)};",
    f"export const RASGO_TEXTS_JAK = {J(TEXTOS_CAP9)};",
    f"export const SECCIONES_JON = {J(SECS['JON'])};",
    f"export const SECCIONES_ATI = {J(SECS['ATI'])};",
    f"export const SECCIONES_KOI = {J(SECS['KOI'])};",
    "// Topónimos y etnónimos del cap. 9, §2 (13 menciones de 11 lugares; figura jak_8_mapa_procedencias).",
    f"export const TOPONYMS_JAK = {J(TOPONYMS)}.map((t) => ({{ ...t, seg: t.mentions.filter((m) => m.certain).length,",
    "  dud: t.mentions.filter((m) => !m.certain).length, total: t.mentions.length }));",
    "// Las inscripciones del grupo: [clave, datación, texto, certeza (s, d, n), subgrupo].",
    f"export const ANEXO_JAK = {J(ANEXO)};",
    "",
]
SALIDA.write_text("\n".join(partes), encoding="utf-8")
print(f"jonicoAtico.js: {TOTAL} ({SEG} seguras), subgrupos {dict(subs)}, s. IV {SIGLO_IV}")

# ── inscriptions.json: etiquetas al día con el Excel y citas nuevas de las tablas de la Parte IV ──
citadas = {"DVC 2217A", "Lhôte 65B", "DVC 2899A", "DVC 3742B", "DVC 3156B", "DVC 214A", "DVC 424B", "DVC 1881A", "Lhôte 100A",
            "Lhôte 106A", "Lhôte 103A", "Lhôte 130A", "Lhôte 141A", "DVC 2493A", "DVC 2186A", "Lhôte 22A", "DVC 35A", "Lhôte 23", "Lhôte 52",
            "DVC 1411", "DVC 123"}
for t in ("jak", "jon", "ati", "koi"):
    citadas.update(claves_indice(filas_js(t)))
citadas.update(CITADAS_CAP9)
actualizar_indice(df, citadas)
