"""Genera src/data/frontera.js y src/data/anexoNoJonAt.json (zonas de frontera: la mezcla dialectal, los dialectos
minoritarios y las inscripciones no jónico-áticas, caps. 13-15 de la tesis) y añade a src/data/inscriptions.json las
inscripciones de sus tablas de adscripción que aún no están en el índice.

Fuentes:
  · DVC_v5_FINAL.xlsx, hoja Datos (DIALECTO_MACRO = Mezcla dialectal, Otros y NO JON-ÁT; DIALECTO_SUB, DIALECTO_CLEAN,
    DIALECTO_CERTEZA, Date, TEMA_MACRO, ALFABETO_GRUPO_v2, Text y la columna Carlos; Resúmenes, fila 186, 3 nov. 2026).
  · PYTHON/SEABORN-ALTAIR/graficos_mezcla.py (COMBINACION, TIPOS, tabla «mez»), graficos_minoritarios.py (DIALECTO,
    tabla «min») y graficos_no_jonico_aticas.py (RASGOS, COMPATIBLES, tabla «nja»): las mismas cifras que las figuras.
  · MEZCLA_1_Redaccion, MINORITARIOS_1_Redaccion y NO_JON_AT_1_Redaccion (la versión más alta): tablas de los anexos y
    texto de los apartados que la vista muestra desplegables.

Uso:  py scripts/datos_frontera.py
"""
import json
import os
import re
import sys
import tempfile
import unicodedata
from pathlib import Path

import docx
import pandas as pd

sys.stdout.reconfigure(encoding="utf-8")
RAIZ = Path(__file__).resolve().parents[1]
UVA = RAIZ.parent
GRAF = UVA / "PYTHON" / "SEABORN-ALTAIR"
EXCEL = UVA / "CAPÍTULOS TESIS" / "DVC_v5_FINAL.xlsx"
SALIDA = RAIZ / "src" / "data" / "frontera.js"
ANEXO = RAIZ / "src" / "data" / "anexoNoJonAt.json"
CAPS = UVA / "CAPÍTULOS TESIS"
PARTE5 = "PARTE V. MEZCLA, MINORITARIOS Y NO JON-ÁT/"   # desde el 16 nov. 2026, los caps. 13-15 están en esta carpeta


def ultima(carpeta, patron):
    """La versión de número más alto de un capítulo (MEZCLA_1_Redaccion_v14.docx…)."""
    return max((CAPS / carpeta).glob(patron), key=lambda p: int(re.search(r"_v(\d+)\.docx$", p.name).group(1)))


def tabla(doc, i):
    """Filas (sin la cabecera) de la tabla i de un capítulo, con el texto de cada celda."""
    return [[unicodedata.normalize("NFC", TRABAJO.sub("", c.text).strip().translate(PUA)) for c in r.cells] for r in docx.Document(doc).tables[i].rows[1:]]


def clave_cap(t):
    """«I.Dodone DVC 24A (= I.Dodone Lhôte 114)» → "24A"; «I.Dodone Lhôte 92A» → "LOD 92A"."""
    m = re.match(r"I\.Dodone (DVC|Lhôte) (\S+)", t)
    return m.group(2) if m.group(1) == "DVC" else "LOD " + m.group(2)

for v in ("OUT_DIR", "OUT_DIR_ALTAIR"):
    os.environ.setdefault(v, tempfile.gettempdir())
os.environ.setdefault("EXCEL_DVC", str(EXCEL))
sys.path.insert(0, str(GRAF))
sys.path.insert(0, str(Path(__file__).resolve().parent))
import graficos_adscripcion as A  # noqa: E402
import graficos_mezcla as MEZ  # noqa: E402  (añade «mez» a A.CAPITULOS)
import graficos_minoritarios as MIN  # noqa: E402  (añade «min»)
import graficos_no_jonico_aticas as NJA  # noqa: E402  (añade «nja»)
import datos_adscripcion as DA  # noqa: E402
from comun import PUA, TRABAJO, apartados, es_titulo, indices, parrafos, secciones  # noqa: E402

DA.capitulos = lambda: A.CAPITULOS   # filas_js() lee las tablas de los tres capítulos, que no están en el AST
J = lambda x: json.dumps(x, ensure_ascii=False)
L = lambda s: " ".join(str(s).split())   # sin los saltos de línea de las tablas-imagen
CERT = {"Seguro": "s", "Dudoso": "d", "Solo nombre/alfabeto": "n"}

df = pd.read_excel(EXCEL, sheet_name="Datos")
G = {k: df[df["DIALECTO_MACRO"] == m] for k, m in (("mez", "Mezcla dialectal"), ("min", "Otros"), ("nja", "NO JON-ÁT"))}
for k, mod in (("mez", MEZ), ("min", MIN), ("nja", NJA)):
    c = G[k]["DIALECTO_CERTEZA"].value_counts()
    assert len(G[k]) == mod.N["total"] and all(int(c.get(x, 0)) == mod.N[x] for x in CERT), (k, len(G[k]), dict(c))


def certeza(x):
    c = x["DIALECTO_CERTEZA"].value_counts()
    return {"seguras": int(c.get("Seguro", 0)), "dudosas": int(c.get("Dudoso", 0)), "nombre": int(c.get("Solo nombre/alfabeto", 0))}


def apiladas(x, col, mapa, orden):
    """Barras por certeza (segura, dudosa, solo nombre) de cada categoría, como mez_1 y min_1."""
    x = x.assign(cat=x[col].map(mapa))
    assert x["cat"].notna().all(), x.loc[x["cat"].isna(), col].unique()
    return [{"name": c, **{k: int(((x["cat"] == c) & (x["DIALECTO_CERTEZA"] == e)).sum())
                          for e, k in (("Seguro", "segura"), ("Dudoso", "dudosa"), ("Solo nombre/alfabeto", "nombre"))}}
            for c in orden]


def clave(r):
    """Clave del dashboard: "123A" (DVC) o "LOD 89Aa" (Lhôte)."""
    if pd.isna(r["No DVC"]):   # también «no 137 (Inscription a)» y «no 42a (Face A)», como en los anexos de la tesis
        m = re.search(r"Lhôte, no (\d+[a-z]?)\s*(?:\((?:Face|[Ii]nscription) ([A-Za-z]+)\))?", str(r["Editions"]))
        return "LOD " + m.group(1) + (m.group(2) or "")
    k = DA.clave_excel(r).split(" (")[0]   # «2018A (M722)»: sin el número de inventario
    return k[4:]


# ── Cap. 13: la mezcla dialectal ──────────────────────────────────
alf_mez = G["mez"]["ALFABETO_GRUPO_v2"].fillna("").astype(str).str.strip()
otros = G["mez"][alf_mez != ""]
assert len(otros) == 0, otros["No DVC"].tolist()   # fila 195: 1012A pasa al jónico
DOC_MEZ = ultima(PARTE5 + "MEZCLA DIALECTAL", "MEZCLA_1_Redaccion_v*.docx")
# Anexo 6.1: la clasificación de cada mezcla con la terminología del capítulo (la certeza, del Excel).
# Las tablas del texto (§4-§5) van antes de las del anexo: se busca la primera de cabecera «Inscripción | Texto».
A_MEZ = next(i for i, t in enumerate(docx.Document(DOC_MEZ).tables) if [c.text.strip() for c in t.rows[0].cells][:2] == ["Inscripción", "Texto"])
CLAS_MEZ = {clave_cap(a): re.sub(r"\s*\((dudosa|solo por un nombre)\)$", "", d) for a, _, _, d in tabla(DOC_MEZ, A_MEZ)}
ANEXO_MEZ = []
for _, r in G["mez"].iterrows():
    k = clave(r)
    ANEXO_MEZ.append([k, DA.fecha(r["Date"]), r["Text"] if pd.notna(r["Text"]) else "", CERT[r["DIALECTO_CERTEZA"]], CLAS_MEZ[k]])
assert len(CLAS_MEZ) == len(ANEXO_MEZ) == MEZ.N["total"]
# Anexo 7.3, tabla 13: las 61 inscripciones que son mezclas para Crespo y Giannakis (2019), Giannakis (2024a) y la tesis.
COINCIDEN_MEZ = [{"ref": a, "date": b, "autores": c, "pags": d, "tesis": e} for a, b, c, d, e in tabla(DOC_MEZ, A_MEZ + 2)]
assert len(COINCIDEN_MEZ) == 61 and all(b["tesis"].startswith("Mezcla") for b in COINCIDEN_MEZ), len(COINCIDEN_MEZ)
TIPOS = [{"sec": s, "tipo": L(t), "noja": L(a), "ja": L(b), "expl": L(e), "seguras": n1, "dudosas": n2}
         for s, t, a, b, e, n1, n2 in MEZ.TIPOS]


def indice_tabla(doc, cabecera):
    return next(i for i, t in enumerate(docx.Document(doc).tables) if [c.text.strip() for c in t.rows[0].cells] == cabecera)


def claves_celda(t):
    """«I.Dodone DVC 556A, 2024A y 3113A; I.Dodone Lhôte 80A» → ["556A", "2024A", "3113A", "LOD 80A"]."""
    out = []
    for trozo in t.split(";"):
        m = re.search(r"I\.Dodone (DVC|Lhôte) (.*)", trozo)
        for n in re.findall(r"\b\d+[A-Za-z]*(?:[+-][A-Z])?", m.group(2)):
            out.append(n if m.group(1) == "DVC" else "LOD " + n)
    return out


# Tablas 1-5 (§4, figuras mez_10 a mez_14 de graficos_mezcla.py): las mezclas aparentes, una ficha por inscripción,
# agrupadas por el motivo que las deshace (los apartados §4.1-§4.5); la clasificación, del Excel.
SUFIJO = {"**": " (solo por un nombre)", "*": " (dudosa)"}


def con_certeza(t):
    for a, b in SUFIJO.items():
        if t.endswith(a):
            return t[:-len(a)] + b
    return t


APARENTES_MEZ = []
for nombre, grupos in MEZ.T4.items():
    titulo = MEZ.TITULOS_T[nombre].replace("Mezclas aparentes: ", "")
    titulo = titulo[0].upper() + titulo[1:]
    for rotulo, filas in grupos:
        for sigla, atribuida, formas in filas:
            lhote = sigla.startswith("Lhôte")
            APARENTES_MEZ.append({"grupo": titulo, "subgrupo": rotulo, "ref": ("I.Dodone " if lhote else "I.Dodone DVC ") + sigla,
                                  "dvcs": ["LOD " + sigla.split()[1] if lhote else sigla], "supuesta": atribuida,
                                  "motivo": unicodedata.normalize("NFC", formas), "tesis": con_certeza(MEZ.clasificacion(df, sigla))})
assert len(APARENTES_MEZ) == 52 + 3, len(APARENTES_MEZ)   # las 52 de la bibliografía y tres que solo comentan los editores

# Tabla 14 (§7.3): las divergencias con Crespo y Giannakis. Bloque A, las 52 mezclas de los autores que la tesis
# clasifica de otro modo, bajo una fila de banda por motivo (§4.1-§4.5: 12, 7, 5, 10 y 18); bloque B, las 34 que no recogen.
DIV = tabla(DOC_MEZ, indice_tabla(DOC_MEZ, ["Inscripción", "Cronología", "Crespo y Giannakis", "Esta tesis", "Motivo"]))
iB = next(i for i, f in enumerate(DIV) if f[0].startswith("B."))
assert DIV[0][0].startswith("A.")
DIVERGENCIAS_MEZ, grupo = [], None
for ins, fecha_, cyg, tes, mot in DIV[1:iB]:
    if ins == fecha_ == cyg:   # fila de banda: «Lecturas corregidas (§4.3): 5»
        grupo = re.sub(r"\s*\(§[\d.]+\): \d+$", "", ins)
        continue
    pm = re.fullmatch(r"(.*?) \((20\d\d.*)\)", cyg)
    DIVERGENCIAS_MEZ.append({"grupo": grupo, "ref": ins, "date": fecha_, "autores": pm.group(1) if pm else cyg,
                             "pags": pm.group(2) if pm else "", "tesis": tes, "motivo": mot})
_n = {}
for d in DIVERGENCIAS_MEZ:
    _n[d["grupo"]] = _n.get(d["grupo"], 0) + 1
assert list(_n.values()) == [12, 7, 5, 10, 18], _n
NO_RECOGIDAS_MEZ = [{"ref": a, "date": b, "autores": c, "tesis": d, "motivo": e} for a, b, c, d, e in DIV[iB + 1:]]
assert len(NO_RECOGIDAS_MEZ) == 34 and len(DIVERGENCIAS_MEZ) == 52
# Las 113 de la bibliografía: las 61 coincidencias y las 52 divergencias.
BIBLIO_MEZ = COINCIDEN_MEZ + [{k_: d[k_] for k_ in ("ref", "date", "autores", "pags", "tesis")} for d in DIVERGENCIAS_MEZ]
assert len(BIBLIO_MEZ) == 113 and not any(d["tesis"].startswith("Mezcla de") for d in DIVERGENCIAS_MEZ)
assert {clave_cap(d["ref"]) for d in DIVERGENCIAS_MEZ} <= {a["dvcs"][0] for a in APARENTES_MEZ}

# Tabla 6 (§4.6, figuras mez_14b): las 24 mezclas examinadas en autopsia, por su resultado principal.
AUTOPSIAS_MEZ = [{"grupo": r, "items": [{"id": "LOD " + s_.split()[1] if s_.startswith("Lhôte") else s_,
                                        "obs": unicodedata.normalize("NFC", o), "anio": a} for s_, o, a in filas]} for r, filas in MEZ.T_AUT]
assert sum(len(g["items"]) for g in AUTOPSIAS_MEZ) == 24
# Las autopsias no se publican: van a un archivo aparte, fuera del repositorio (.gitignore), que solo usa la versión local.
(SALIDA.parent / "autopsiasMezcla.js").write_text(
    "// Tabla 6 (§4.6): las mezclas examinadas en autopsia, por resultado. Solo para la versión local del atlas.\n"
    f"export const AUTOPSIAS_MEZ = {J(AUTOPSIAS_MEZ)};\n", encoding="utf-8")

# ── Cap. 14: los dialectos minoritarios ───────────────────────────
INSC_MIN = []
for _, r in G["min"].iterrows():
    INSC_MIN.append({"id": clave(r), "date": DA.fecha(r["Date"]), "text": r["Text"], "dialecto": MIN.DIALECTO[r["DIALECTO_CLEAN"]],
                     "certeza": CERT[r["DIALECTO_CERTEZA"]]})
INSC_MIN.sort(key=lambda d: (MIN.ORDEN.index(d["dialecto"]), "ds".index(d["certeza"]) if d["certeza"] in "ds" else 2))

# ── Cap. 15: las inscripciones no jónico-áticas ───────────────────
ALF_NJA = {   # ALFABETO_GRUPO_v2 → (id, rótulo, clave de ALFABETO_COLORS)
    "Élide": "Élide (según los editores)", "Magna Grecia / Sicilia": "Magna Grecia o Sicilia",
    "Dodona": "Local de Dodona (Lhôte)", "Epirota": "Epirota", "Occidental / Calcídica": "Occidental o calcídico",
    "Mégara / Sición": "Mégara o Sición", "Eubea": "Euboico", "Otros": "Sin identificar",
}
COLOR_ALF = {"Élide": "elide", "Magna Grecia / Sicilia": "magnaGrecia", "Dodona": "dodona", "Epirota": "epirota",
             "Occidental / Calcídica": "occidental", "Mégara / Sición": "otros", "Eubea": "eubea", "Otros": "otros"}
alf = G["nja"]["ALFABETO_GRUPO_v2"].fillna("Reformado / Desconocido").replace(r"^\s*$", "Reformado / Desconocido", regex=True)
c_alf = alf.value_counts()
ALF_PIE = [f'  {{ id: "milesio", label: "Reformado o no identificado", value: {int(c_alf["Reformado / Desconocido"])}, color: C.milesio }},']
ALF_PIE += [f'  {{ id: "{COLOR_ALF[k]}-{i}", label: "{ALF_NJA[k]}", value: {int(c_alf[k])}, color: ALFABETO_COLORS.{COLOR_ALF[k]} }},'
            for i, k in enumerate(sorted((k for k in c_alf.index if k in ALF_NJA), key=lambda k: -c_alf[k]))]
assert sum(int(c_alf[k]) for k in c_alf.index) == NJA.N["total"] and set(c_alf.index) <= set(ALF_NJA) | {"Reformado / Desconocido"}
RASGOS = [{"sec": s, "rasgo": L(r), "ambito": L(a), "ejemplos": L(e), "n": n} for s, r, a, e, n in NJA.RASGOS]
COMPAT = [{"dialectos": L(d).replace("de la tabla de rasgos", "de los anteriores"), "rasgos": L(r), "n": n} for d, r, n in NJA.COMPATIBLES]

# Tabla de adscripción: los treinta πέρ ante laguna, que la tesis remite al §4, salen del Excel (columna Carlos).
ADS_NJA = DA.filas_js("nja")
per = df[df["Carlos"].astype(str).str.contains("criterio de πέρ", na=False) & df["DIALECTO_MACRO"].isna()]
for f in ADS_NJA:
    if f.get("nota") == "véase §4":
        assert len(per) == f["n"], len(per)
        del f["nota"]
        f["dvcs"] = [clave(r) for _, r in per.iterrows()]
ADS_MEZ = DA.filas_js("mez")
for f in ADS_MEZ:
    if "nota" in f:
        f["nota"] = f["nota"].replace("véase la tabla de tipos", "véase “Tipos de mezcla”")

# Anexo (§6 del cap. 15): las 844, con la base de la adscripción de las dudosas y la de solo nombre.
DOC_NJA = ultima(PARTE5 + "NO JON-ÁT", "NO_JON_AT_1_Redaccion_v*.docx")
RASGOS_ANEXO = {clave_cap(a): c for a, _, c, _ in tabla(DOC_NJA, 0)}
motivo = {k: f["base"] for f in ADS_NJA if f["tipo"] in ("dud", "nom") for k in f.get("dvcs", [])}
anexo = []
for _, r in G["nja"].iterrows():
    k = clave(r)
    # La tabla de la tesis cita alguna cara de Lhôte sin la letra (Lhôte 141 = 141Bb en el Excel).
    m = motivo.get(k) or motivo.get(k.rstrip("ABab") if k.startswith("LOD ") else k, "")
    ras = RASGOS_ANEXO.get(k) or RASGOS_ANEXO.get(k.rstrip("ABab") if k.startswith("LOD ") else k, "")
    anexo.append([k, DA.fecha(r["Date"]), r["Text"] if pd.notna(r["Text"]) else "", CERT[r["DIALECTO_CERTEZA"]], m, ras])
dud = [a for a in anexo if a[3] != "s"]
assert len(dud) == NJA.N["Dudoso"] + NJA.N["Solo nombre/alfabeto"] and all(a[4] for a in dud), [a[0] for a in dud if not a[4]]
assert len(RASGOS_ANEXO) == len(anexo) and all(a[5] for a in anexo), [a[0] for a in anexo if not a[5]]
ANEXO.write_text(json.dumps(anexo, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")

# ── Texto de los capítulos: apartados que la vista muestra desplegables ──
def tramo(docx, inicio, fin):
    pars = parrafos(docx, tablas=False)
    i0 = indices(pars, inicio)
    i1 = next(i for i, (st, t) in enumerate(pars) if i > i0 and es_titulo(st) and t.startswith(fin))
    return apartados(secciones(pars, i0, i1))


DOC_MIN = ultima(PARTE5 + "DIALECTOS MINORITARIOS", "MINORITARIOS_1_Redaccion_v*.docx")
TIPOLOGIA_MEZ = tramo(DOC_MEZ, "5. TIPOLOG", "6. ESCRITURA") + tramo(DOC_MEZ, "4. LAS MEZCLAS APARENTES", "5. TIPOLOG")
for x in TIPOLOGIA_MEZ:   # sin los rótulos de las tablas-imagen («Tabla 6»)
    x["paras"] = [p for p in x["paras"] if not re.fullmatch(r"Tabla \d+", p)]
# Desde la v36 la explicación de cada tipo cierra su apartado del §5; el §6 conserva la escritura y la fecha (§6.1) y la recapitulación (§6.2).
EXPLICACIONES_MEZ = [x for x in tramo(DOC_MEZ, "6. ESCRITURA", "7. ANEXOS") if x["sec"] != "§6.2"]
APARTADOS_MIN = tramo(DOC_MIN, "3. EL MACEDONIO", "7. ANEXOS")
RASGOS_TXT_NJA = tramo(DOC_NJA, "4. LOS RASGOS", "5. LOS DIALECTOS")
COMPATIBLES_TXT_NJA = tramo(DOC_NJA, "5. LOS DIALECTOS", "6. ANEXO")
POR_QUE_NJA = tramo(DOC_NJA, "2. POR QU", "3. LAS INSCRIPCIONES")
for x in POR_QUE_NJA:   # la tabla del §4 del capítulo, que aquí es la de la subpestaña de los rasgos
    x["paras"] = [p.replace("la tabla de rasgos", "la tabla del §4") for p in x["paras"]]

partes = [
    "// Generado por scripts/datos_frontera.py: no editar a mano.",
    "// Capítulos 13-15 de la tesis (zonas de frontera): la mezcla dialectal, los dialectos minoritarios y las inscripciones",
    "// no jónico-áticas. Fuentes: DVC_v5_FINAL.xlsx, hoja Datos (DIALECTO_MACRO, DIALECTO_SUB, DIALECTO_CLEAN, DIALECTO_CERTEZA,",
    "// Date, TEMA_MACRO, ALFABETO_GRUPO_v2; Resúmenes, fila 195), y las tablas de graficos_mezcla.py, graficos_minoritarios.py",
    "// y graficos_no_jonico_aticas.py. Certeza: seguras, dudosas y de solo nombre (o alfabeto).",
    'import { ALFABETO_COLORS, C } from "../theme.js";',
    "",
    "// ── Cap. 13: la mezcla dialectal",
    f"export const TOTAL_MEZ = {len(G['mez'])};",
    f"export const CERTEZA_MEZ = {J(certeza(G['mez']))};",
    "// Dialectos que se combinan (DIALECTO_SUB con la terminología del cap. 13, §2.3), por certeza (mez_1).",
    f"export const COMBINACIONES_MEZ = {J(apiladas(G['mez'], 'DIALECTO_SUB', MEZ.COMBINACION, MEZ.ORDEN))};",
    f"export const CHRONO_MEZ = {J(DA.crono(G['mez']))};",
    f"export const THEMES_MEZ = {J(DA.temas(G['mez']))};",
    "// Alfabeto (ALFABETO_GRUPO_v2): todas reformadas o sin identificar salvo 1012A.",
    "export const ALF_MEZ_PIE = [",
    f'  {{ id: "milesio", label: "Reformado o no identificado", value: {len(G["mez"]) - 1}, color: C.milesio }},',
    '  { id: "otros", label: "Sin precisar por los editores (1012A)", value: 1, color: ALFABETO_COLORS.otros },',
    "];",
    "// Tipos de mezcla (§5, mez_9): seguras y, aparte, dudosas y de solo nombre.",
    f"export const TIPOS_MEZ = {J(TIPOS)};",
    f"export const ADSCRIPCION_MEZ = {J(ADS_MEZ)};",
    "// Anexo 7.1: [clave, datación, texto, certeza (s, d, n), clasificación del capítulo].",
    f"export const ANEXO_MEZ = {J(ANEXO_MEZ)};",
    "// Anexo 7.3: las mezclas de Crespo y Giannakis (2019) y Giannakis (2024a), con su clasificación en la tesis.",
    f"export const BIBLIO_MEZ = {J(BIBLIO_MEZ)};",
    "// Tabla 14: las 52 de los autores que la tesis clasifica de otro modo (bloque A), agrupadas por el motivo (§4.1-§4.5),",
    "// y las 34 mezclas de la tesis que no recogen (bloque B).",
    f"export const DIVERGENCIAS_MEZ = {J(DIVERGENCIAS_MEZ)};",
    f"export const NO_RECOGIDAS_MEZ = {J(NO_RECOGIDAS_MEZ)};",
    "// Tablas 1-5 (§4): las mezclas aparentes, una por inscripción, agrupadas por el motivo que las deshace.",
    f"export const APARENTES_MEZ = {J(APARENTES_MEZ)};",
    f"// Texto de {DOC_MEZ.stem}: §5 (tipología y explicación de cada tipo), §4 (mezclas aparentes) y §6.1 (escritura y fecha).",
    f"export const TIPOLOGIA_MEZ = {J(TIPOLOGIA_MEZ)};",
    f"export const EXPLICACIONES_MEZ = {J(EXPLICACIONES_MEZ)};",
    "",
    "// ── Cap. 14: los dialectos minoritarios (DIALECTO_MACRO = Otros)",
    f"export const TOTAL_MIN = {len(G['min'])};",
    f"export const CERTEZA_MIN = {J(certeza(G['min']))};",
    f"export const DIALECTOS_MIN = {J(apiladas(G['min'], 'DIALECTO_CLEAN', MIN.DIALECTO, MIN.ORDEN))};",
    f"export const CHRONO_MIN = {J(DA.crono(G['min']))};",
    f"export const THEMES_MIN = {J(DA.temas(G['min']))};",
    f"export const ADSCRIPCION_MIN = {J(DA.filas_js('min'))};",
    "// Las doce inscripciones (anexo 7.1), con el texto del Excel; certeza: s, d, n.",
    f"export const INSCRIPCIONES_MIN = {J(INSC_MIN)};",
    f"// Texto de {DOC_MIN.stem}: §3-§6.",
    f"export const APARTADOS_MIN = {J(APARTADOS_MIN)};",
    "",
    "// ── Cap. 15: las inscripciones no jónico-áticas (DIALECTO_MACRO = NO JON-ÁT); el anexo (§6: clave, datación, texto,",
    "// certeza, motivo de la duda y rasgos visibles), en anexoNoJonAt.json",
    f"export const TOTAL_NJA = {len(G['nja'])};",
    f"export const CERTEZA_NJA = {J(certeza(G['nja']))};",
    f"export const CHRONO_NJA = {J(DA.crono(G['nja']))};",
    f"export const THEMES_NJA = {J(DA.temas(G['nja']))};",
    "export const ALF_NJA_PIE = [", *ALF_PIE, "];",
    "// Rasgos visibles (nja_9; sección de Buck 1955) y dialectos compatibles (nja_10): número de inscripciones.",
    f"export const RASGOS_NJA = {J(RASGOS)};",
    f"export const COMPATIBLES_NJA = {J(COMPAT)};",
    f"export const ADSCRIPCION_NJA = {J(ADS_NJA)};",
    f"// Texto de {DOC_NJA.stem}: §2, §4 y §5.",
    f"export const POR_QUE_NJA = {J(POR_QUE_NJA)};",
    f"export const RASGOS_TXT_NJA = {J(RASGOS_TXT_NJA)};",
    f"export const COMPATIBLES_TXT_NJA = {J(COMPATIBLES_TXT_NJA)};",
    "",
]
SALIDA.write_text("\n".join(partes), encoding="utf-8")
print(f"frontera.js: mezcla {len(G['mez'])}, minoritarios {len(G['min'])}, no jónico-áticas {len(G['nja'])}; anexo {len(anexo)}")

# ── inscriptions.json: las inscripciones de las tablas y las citadas en Frontera.jsx ──
citadas = {"DVC 81B", "DVC 2888B", "DVC 315A", "DVC 987B", "DVC 2667A", "DVC 2176", "DVC 1630A", "DVC 1562A", "DVC 257A",
            "DVC 304B", "DVC 2098A", "DVC 2481A", "DVC 1613A", "DVC 1131B", "DVC 2848A", "DVC 3869B", "DVC 33B", "DVC 2383A",
            "DVC 1376A", "DVC 3523B", "DVC 1025A+B", "Lhôte 133A", "DVC 729A", "DVC 1410", "Lhôte 11", "Lhôte 6A",
            "DVC 1012A", "DVC 2160", "DVC 2225A", "DVC 480B", "DVC 3977A", "DVC 2217A", "DVC 172A", "DVC 1993A", "DVC 2496B"}
for t in ("mez", "min", "nja"):
    citadas.update(DA.claves_indice(DA.filas_js(t) if t != "nja" else ADS_NJA))
citadas.update(DA.claves_indice([{"dvcs": [a[0] for a in ANEXO_MEZ] + [clave_cap(b["ref"]) for b in BIBLIO_MEZ]}]))
citadas.update(("Lhôte " + d["id"][4:]) if d["id"].startswith("LOD ") else "DVC " + d["id"] for d in INSC_MIN)
DA.actualizar_indice(df, citadas)
