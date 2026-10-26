"""Genera src/data/doricoGeneral.js (vista del dórico general) y completa src/data/inscriptions.json.

Fuentes:
  · DVC_v5_FINAL.xlsx, hoja Datos (inscripciones del capítulo: DIALECTO_SUB “Doris mitior” y “Dórico Magna Grecia”).
  · DORICO_GENERAL_1_Redaccion_v64.docx: los rasgos son los apartados de §4-§7 con su texto y las inscripciones que citan.
  · PYTHON/SEABORN-ALTAIR/graficos_dorico_fonetica.py: matrices de valor diagnóstico y listas de notación y arcaísmos.
  · Topónimos: las menciones de §2 del capítulo (las mismas cifras que TOPONIMOS["dor"] de graficos_dialecto_pandas.py).

Uso:  py scripts/datos_dorico_general.py
"""
import io
import json
import re
import sys
import unicodedata
import zipfile
from pathlib import Path

import openpyxl
from lxml import etree

sys.stdout.reconfigure(encoding="utf-8")
RAIZ = Path(__file__).resolve().parents[1]
UVA = RAIZ.parent
EXCEL = UVA / "CAPÍTULOS TESIS" / "DVC_v5_FINAL.xlsx"
DOCX = UVA / "CAPÍTULOS TESIS" / "DÓRICO" / "1. DÓRICO GENERAL" / "DORICO_GENERAL_1_Redaccion_v64.docx"
GRAF = UVA / "PYTHON" / "SEABORN-ALTAIR"
SALIDA = RAIZ / "src" / "data" / "doricoGeneral.js"
INSC = RAIZ / "src" / "data" / "inscriptions.json"

# ── Excel (sin la caché de las tablas dinámicas, que openpyxl no lee) ──────────
def sin_pivots(path):
    src, buf = zipfile.ZipFile(path), io.BytesIO()
    dst = zipfile.ZipFile(buf, "w", zipfile.ZIP_DEFLATED)
    for it in src.infolist():
        if "pivot" in it.filename.lower():
            continue
        data = src.read(it.filename)
        if it.filename == "[Content_Types].xml" or it.filename.endswith(".rels"):
            data = re.sub(r"<(Override|Relationship)[^>]*pivot[^>]*/>", "", data.decode("utf8"), flags=re.I).encode("utf8")
        dst.writestr(it, data)
    dst.close(); buf.seek(0)
    return buf


wb = openpyxl.load_workbook(sin_pivots(EXCEL), data_only=True, read_only=True)
filas = [list(r) for r in wb["Datos"].iter_rows(values_only=True)]
H = {h: i for i, h in enumerate(filas[0]) if h}
col = lambda r, h: r[H[h]]
EX = {}
for r in filas[1:]:
    if r[0] is not None:
        EX.setdefault("DVC " + str(r[0]).split("\n")[0].strip(), r)
    else:
        m = re.search(r"Lhôte, no (\d+)\s*(?:\(Face ([A-Za-z]+)\))?", str(r[2] or ""))
        if m:
            EX.setdefault("Lhôte " + m.group(1) + (m.group(2) or ""), r)
LH2DVC = {}
for k, r in EX.items():
    if k.startswith("DVC "):
        for m in re.finditer(r"Lhôte, no (\d+)\s*(?:\(Face ([A-Za-z]+)\))?", str(r[2] or "")):
            LH2DVC.setdefault("Lhôte " + m.group(1) + (m.group(2) or ""), k)
CAP = {k: r for k, r in EX.items() if col(r, "DIALECTO_SUB") in ("Doris mitior", "Dórico Magna Grecia")}
assert len(CAP) == 176, len(CAP)

ROM = {"2": "II", "3": "III", "4": "IV", "5": "V", "6": "VI"}
TABD = {"α΄ μισό": "primera mitad del", "β΄ μισό": "segunda mitad del", "μέσα": "mediados del", "αρχές": "principios del",
        "τέλος": "finales del", "τελευταίο τέταρτο": "último cuarto del", "δ΄ τέταρτο": "último cuarto del",
        "γ΄ τέταρτο": "tercer cuarto del", "α΄ τέταρτο": "primer cuarto del", "β΄ τέταρτο": "segundo cuarto del"}


def fecha(d):
    s = re.sub("([\u0384'])(?=\\S)", lambda m: m.group(1) + " ", str(d or "").strip())
    s = s.replace("δ' ", "δ\u0384 ").replace("γ' ", "γ\u0384 ")
    if not s or s == "αδιάγνωστη":
        return "sin datación"
    m2 = re.fullmatch(r"(\d)-(\d)", s)
    if m2:
        return f"ss. {ROM[m2.group(1)]}-{ROM[m2.group(2)]} a.C."
    m = re.fullmatch(r"(\d)(?:, (.*))?", s)
    if not m:
        return s
    return f"{TABD[m.group(2)]} s. {ROM[m.group(1)]} a.C." if m.group(2) else f"s. {ROM[m.group(1)]} a.C."


def clave_js(k):          # “DVC 123A” → “123A”; “Lhôte 94” → “LOD 94” (claves de RASGO_TEXTS y de Ref)
    src, i = k.split(" ", 1)
    return i if src == "DVC" else f"LOD {i}"


def etiqueta(r):
    macro, sub = col(r, "DIALECTO_MACRO"), col(r, "DIALECTO_SUB")
    if not macro:
        return ""
    return macro if not sub or sub == macro else f"{macro} · {sub}"


# ── Texto de la v55 ───────────────────────────────────────────────────────────
W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
M_, AC, GR, PS, DA, CI = "\u0304", "\u0301", "\u0300", "\u0313", "\u0314", "\u0342"
_e = ["ε" + CI, "ε" + PS + CI, "ε" + DA + CI, "ε" + M_, "ε" + M_ + AC, "ε" + M_ + GR, "ε" + M_ + PS, "ε" + M_ + DA,
      "ε" + M_ + PS + GR, "ε" + M_ + DA + GR, "ε" + M_ + PS + AC, "ε" + M_ + DA + AC, "Ε" + PS + CI, "Ε" + DA + CI, "Ε" + M_, "Ε\u0306",
      "ο" + CI, "ο" + PS + CI, "ο" + DA + CI, "ο" + M_, "ο" + M_ + AC, "ο" + M_ + GR, "ο" + M_ + PS, "ο" + M_ + DA,
      "ο" + M_ + PS + GR, "ο" + M_ + DA + GR, "ο" + M_ + PS + AC, "ο" + M_ + DA + AC]
PUA = {0xE1B0 + i: v for i, v in enumerate(_e)}


def ptext(p):
    out = []
    for r in p.iter(W + "r"):
        for ch in r:
            if ch.tag == W + "t":
                out.append(ch.text or "")
            elif ch.tag == W + "tab":
                out.append(" ")
    # Sin las marcas de trabajo del capítulo ([VERIFICAR …], [CITA PENDIENTE]), que no se publican.
    t = re.sub(r"\s*\[(?:VERIFICAR|CITA PENDIENTE)[^\]]*\]", "", "".join(out))
    return unicodedata.normalize("NFC", t.translate(PUA))


doc = etree.fromstring(zipfile.ZipFile(DOCX).read("word/document.xml"))
parrafos = []
for p in doc.find(W + "body").iter(W + "p"):
    st = p.find(f"{W}pPr/{W}pStyle")
    st = st.get(W + "val") if st is not None else ""
    if st.startswith("TDC"):
        continue
    parrafos.append((st, ptext(p).strip()))
i0 = next(i for i, (s, t) in enumerate(parrafos) if s.startswith("Ttulo") and t.startswith("4. CARACTER"))
i1 = next(i for i, (s, t) in enumerate(parrafos) if s.startswith("Ttulo") and t.startswith("8. ANEXOS"))
secciones = []           # (número, título, [párrafos]) de los apartados con texto propio
for st, t in parrafos[i0:i1]:
    if st.startswith("Ttulo"):
        m = re.match(r"(\d+(?:\.\d+)*)\.\s+(.*)", t)
        secciones.append([m.group(1), m.group(2), []])
    elif t:
        secciones[-1][2].append(t)


def titulo(t):
    """Mayúsculas del título a minúsculas, salvo la inicial, en las letras latinas."""
    out, primera = [], True
    for ch in t:
        if "A" <= unicodedata.normalize("NFD", ch)[0] <= "Z":
            out.append(ch if primera else ch.lower())
            primera = False
        else:
            if ch.isalpha():
                primera = False
            out.append(ch)
    return "".join(out).replace(" Y ", " y ")


TOK = re.compile(r"I\.Dodone (DVC|Lhôte)\s*|(?<![\d§:.,/–-])\b(\d{1,4}(?:[AB][ab]?)?)\b(?![\d:/])")
EQ1 = re.compile(r"\(= I\.Dodone (?:DVC|Lhôte)[^()]*(?:\([^()]*\)[^()]*)*\)")
EQ2 = re.compile(r"= I\.Dodone (?:DVC|Lhôte)\s*\d+\w*")


def citas(texto):
    out = []
    for para in texto:
        para = EQ2.sub("", EQ1.sub("", para))
        corpus = None
        for sent in re.split(r"(?<!\bs\.)(?<!ss\.)(?<=[.;?])\s+(?=[A-ZÁÉÍÓÚ(])", para):
            for m in TOK.finditer(sent):
                if m.group(1):
                    corpus = m.group(1); continue
                pre = sent[max(0, m.start() - 12):m.start()]
                if corpus is None or re.search(r"(nn?\.|p\.|pp\.|§§?|ll?\.|n\.º|IG|SEG|SGDI|IC|Molossie|Thesp\.|fr\.|col\.|"
                                               r"Bekker|GG)\s*$", pre):
                    continue
                if re.search(r"\d{4}[a-f]?(: | y |; )\s*$", pre) or re.search(r"[A-Z][a-zé]+ \($", pre) \
                        or re.search(r"\b(las|los)\s$", pre):
                    continue
                k = f"{corpus} {m.group(2)}"
                k = k if k in EX else LH2DVC.get(k)
                if k and k not in out:
                    out.append(k)
    return out


CATS = {"4": "Fonología", "5": "Morfología", "6": "Sintaxis", "7": "Vocabulario"}
RASGOS, CITADAS = [], set()
for num, tit, texto in secciones:
    if not texto or num in ("4", "5"):          # las introducciones de §4 y §5 van aparte
        continue
    ks = citas(texto)
    CITADAS.update(ks)
    RASGOS.append({"id": len(RASGOS) + 1, "sec": "§" + num, "name": titulo(tit), "short": titulo(tit),
                   "cat": CATS[num[0]], "desc": " ".join(texto), "dvcs": [clave_js(k) for k in ks]})
INTRO = {num: " ".join(texto) for num, tit, texto in secciones if num in ("4", "5")}

# ── Datos de §3 (Excel) ────────────────────────────────────────────────────────
sys.path.insert(0, str(GRAF))
from graficos_dialecto_pandas import ORDEN_CRONO, parse_fecha  # noqa: E402
import graficos_dorico_fonetica as F  # noqa: E402

crono = {}
for r in CAP.values():
    c = parse_fecha(col(r, "Date"))
    crono[c] = crono.get(c, 0) + 1
CHRONO = [{"period": c, "n": crono[c]} for c in ORDEN_CRONO if c in crono]
temas = {}
for r in CAP.values():
    t = col(r, "TEMA_MACRO") or "Desconocido"
    t = "Desconocido / Sin clasificar" if t == "Desconocido" else t
    temas[t] = temas.get(t, 0) + 1
THEMES = sorted(({"name": k, "value": v} for k, v in temas.items()), key=lambda d: (-d["value"], d["name"]))
alf = {}
for k, r in CAP.items():
    a = col(r, "ALFABETO_GRUPO_v2") or "Reformado / Desconocido"
    alf.setdefault(a, []).append(k)
cert = {}
for r in CAP.values():
    c = col(r, "DIALECTO_CERTEZA")
    c = "Solo nombre o alfabeto" if c and c.startswith("Solo") else c
    cert[c] = cert.get(c, 0) + 1

# ── Notación, corintias y arcaísmos (graficos_dorico_fonetica.py) ──────────────
def k_graf(x):
    x = x.strip()
    return f"Lhôte {x[5:].strip()}" if x.startswith("Lhôte") else f"DVC {x}"


SIGLO = {k: F.siglo_fecha(col(r, "Date")) for k, r in CAP.items()}
notacion = [k_graf(x) for x in F.NOTACION_65]
assert all(k in CAP for k in notacion), [k for k in notacion if k not in CAP]
PERIODOS = ["VI", "VI-V", "V", "V-IV", "IV", "IV-III", "III", "Sin datar"]
NOTACION = []
for p in PERIODOS:
    tot = sum(1 for s in SIGLO.values() if s == p)
    if tot:
        con = [clave_js(k) for k in notacion if SIGLO[k] == p]
        NOTACION.append({"period": F.ROT_PERIODO[p], "con": len(con), "resto": tot - len(con), "dvcs": con})
ARCA = []
for nom, ps in [("s. VI", ["VI"]), ("Transición VI–V", ["VI-V"]), ("s. V", ["V"]), ("Transición V–IV", ["V-IV"]),
                ("s. IV", ["IV"]), ("Posterior o sin datar", ["IV-III", "III", "Sin datar"])]:
    fila = {"period": nom, "total": sum(1 for s in SIGLO.values() if s in ps)}
    for lab, lista in (("digIni", F.DIGAMMA_INI), ("digInter", F.DIGAMMA_INTER), ("aspEta", F.ASP_ETA), ("aspSigno", F.ASP_SIGNO)):
        fila[lab] = sum(1 for x in lista if SIGLO[k_graf(x)] in ps)
    ARCA.append(fila)
corintias = alf["Corintio"]
GRUPOS_COR = [
    ("excluye", "Un rasgo que excluye por sí solo el eolio", ["DVC 1393", "Lhôte 41"],
     "ὀπτίλλος en I.Dodone DVC 1393 y el participio ἐάσσαι en I.Dodone Lhôte 41."),
    ("paomai", "La familia de πάομαι", ["DVC 6A", "DVC 146A", "DVC 1381B"], "πέπατα<ι>, πεπαμένος y παμπασία."),
    ("nombre", "El antropónimo dórico Κλεπώ", ["DVC 2448A"], "Κλεπώ (Katsadima 2017: 132 nn. 14-15, 139)."),
    ("reservas", "Con reservas por el alfabeto o la lectura",
     ["DVC 3871", "DVC 1673B", "DVC 3612B", "DVC 2133B", "DVC 2368A", "DVC 825A", "DVC 3641A"],
     "Épsilon corintia aislada (3871, 1673B, 3612B), fragmento de una sola palabra (2133B), variante epirota o corcirense "
     "del alfabeto (2368A) y lectura discutida de κα con una datación que choca con la escritura arcaica (825A); en 3641A, κα̣ con la alfa insegura."),
]
usadas = {k for g in GRUPOS_COR for k in g[2]}
assert usadas <= set(corintias), usadas - set(corintias)
GRUPOS_COR.insert(3, ("seguras", "Rasgo común y alfabeto corintio: dórica segura", sorted(set(corintias) - usadas,
                      key=lambda k: (k.startswith("Lhôte"), int(re.search(r"\d+", k).group()))),
                      "Rasgos comunes al dórico y a otros dialectos (κα, ᾱ, digamma o ζώω), que el alfabeto corintio, ajeno al eolio, "
                      "basta para atribuir al dórico."))
assert len(GRUPOS_COR[3][2]) == 34, len(GRUPOS_COR[3][2])
DIAG_COLS = list(F.COLS)
DIAGNOSTICO = [{"sec": "§" + s, "rasgo": n, "vals": v, "otros": o, "cat": "Fonología"} for s, n, v, o in F.MATRIZ] + \
              [{"sec": "§" + s, "rasgo": n, "vals": v, "otros": o, "cat": "Morfología"} for s, n, v, o in F.MATRIZ_MORF]

# ── Topónimos (§2 y nn. 16-18, 23) ─────────────────────────────────────────────
LUGARES = [  # id, nombre, griego, lon, lat, desplazamiento del rótulo, ámbito, raíz de búsqueda, menciones [(clave, segura)], nota
    ("ambracia", "Ambracia", "Ἀμβρακία", 20.985, 39.160, (0.22, -0.05), "Colonias corintias", r"[Ἀἀ][μν]?[πβ]ρα|πρακ|Ἀμβρα",
     [("Lhôte 65A", 1), ("DVC 3549A", 1), ("DVC 1473A", 1), ("DVC 891B", 1), ("DVC 618A", 1), ("DVC 814A", 1), ("DVC 2089A", 1),
      ("DVC 3979B", 1), ("Lhôte 106A", 1), ("DVC 2265B", 0), ("DVC 1066B", 0), ("DVC 2295A", 0)],
     "Colonia corintia del último cuarto del s. VII a.C., capital de Pirro desde comienzos del s. III a.C. y primera escala de los "
     "peregrinos que se dirigían a Dodona. Es la ciudad dórica más citada, desde el ἐν Ἀνπρακία[ι] de I.Dodone DVC 3549A, uno de los "
     "textos más antiguos del corpus; el ἐ̣ν̣ Ἀνπρα[κίαν] de 814A documenta además ἐν con acusativo (Méndez Dosuna 2018b: 46 n. 147)."),
    ("corcira", "Corcira", "Κόρκυρα", 19.920, 39.620, (-0.22, 0.10), "Colonias corintias", r"Κορκυρ|Κόρκυρ|Κερκυρ",
     [("Lhôte 1", 1), ("Lhôte 2", 1), ("Lhôte 3", 1), ("Lhôte 4", 0), ("DVC 1088A", 1), ("DVC 1229B", 1), ("DVC 1768A", 1)],
     "Los corcirenses consultan en solitario en I.Dodone Lhôte 1 y 3, quizá en 4 (restituida), y junto con los oricios en "
     "I.Dodone Lhôte 2; consulta además Φείδης ὁ Κορκυραῖος (I.Dodone DVC 1088A), y la isla figura como destino en 1229B y 1768A. "
     "Lhôte (2006: 22, 363) llegó a considerar Dodona una suerte de santuario oficial de la isla."),
    ("faros", "Faros", "Φάρος", 16.600, 43.180, (0.22, 0.0), "Colonia paria del Adriático", r"[ΦΠ]άρ|Φαρ",
     [("DVC 228B", 1), ("DVC 463A", 1), ("DVC 3030A", 1), ("DVC 3517A", 1), ("DVC 2762A", 1), ("Lhôte 130A", 1), ("Lhôte 6B", 1),
      ("DVC 3280A", 1), ("DVC 3146A", 0)],
     "Fundada por colonos parios con el apoyo de Dionisio I en el 385/4 a.C., supera en menciones a cualquier ciudad occidental. "
     "Salvo la consulta de un ateniense (I.Dodone Lhôte 130A), la mayoría presenta rasgos dóricos, quizá de epirotas que se sumaron "
     "a la empresa colonial (Carbon 2017: 102). I.Dodone Lhôte 6B escribe el nombre antiguo, Πάρον; el ἐν Πάρω[ι] de I.Dodone DVC "
     "3146A puede designar la colonia o la isla del Egeo."),
    ("epidamno", "Epidamno", "Ἐπίδαμνος", 19.445, 41.320, (-0.22, 0.05), "Colonias corintias", r"Ἐπιδ",
     [("DVC 3", 1), ("Lhôte 99A", 1), ("DVC 3185", 1), ("DVC 2052A", 1), ("DVC 1345A", 0), ("DVC 1770B", 0), ("DVC 3965A", 0)],
     "Fundación común de Corcira y Corinto, aparece sobre todo como destino de comercio, desde la consulta arcaica [περὶ] ἐμπορίας "
     "ἰ̣ς Ἐπίδαμνον (I.Dodone DVC 3), en alfabeto corintio, hasta la pregunta de quien desea casarse con τὰν Ἐπιδαμνίαν γυναῖκα "
     "(2052A)."),
    ("olimpia", "Olimpia", "Ὀλυμπία", 21.630, 37.638, (-0.22, -0.12), "Peloponeso", r"Ὀλ|ολυ|Ὀλυ|υ̣μ̣πία|νπία",
     [("DVC 1207B", 1), ("DVC 2986A", 1), ("DVC 3509A", 1), ("DVC 4079A", 1), ("DVC 4080B", 1), ("DVC 1878A", 0)],
     "El lugar peloponesio más citado; las dos caras de I.Dodone DVC 4079A y 4080B, con el adlativo Ὀλυπίανδε, se entienden como "
     "pregunta y respuesta o como las dos alternativas de una misma consulta (Martín González 2021: 218). Quien pregunta por "
     "Olimpia puede ser un epirota que acude a los juegos."),
    ("nemea", "Nemea", "Νεμέα", 22.710, 37.810, (-0.20, -0.14), "Peloponeso", r"Νεμε",
     [("DVC 1358B", 1), ("DVC 2646B", 1), ("DVC 3294A", 1)], "Sede de los juegos nemeos, citada en tres consultas."),
    ("apolonia", "Apolonia", "Ἀπολλωνία", 19.470, 40.720, (-0.22, 0.0), "Colonias corintias", r"Ἀπολλων",
     [("DVC 366A", 1), ("Lhôte 50Aa", 1)],
     "Destino de un viaje por mar en I.Dodone DVC 366A y patria de Δεινοκλῆς Ἀπολλωνιάτας en I.Dodone Lhôte 50Aa."),
    ("megara", "Mégara", "Μέγαρα", 23.345, 37.995, (0.0, 0.18), "Peloponeso", r"Μεγαρ",
     [("Lhôte 86", 1), ("DVC 1858A", 0)], "El locativo Μεγαροῖ de I.Dodone Lhôte 86; la mención de I.Dodone DVC 1858A depende de una corrección editorial."),
    ("anactorio", "Anactorio", "Ἀνακτόριον", 20.930, 38.930, (0.22, -0.12), "Colonias corintias", r"Ἀνακτορ",
     [("Lhôte 46Bb", 1)], "Solo en la alternativa entre Elina y Anactorio de I.Dodone Lhôte 46Bb, consulta del dórico noroccidental."),
    ("corinto", "Corinto", "Κόρινθος", 22.880, 37.905, (-0.20, 0.14), "Peloponeso", r"Κόρινθ",
     [("DVC 3220A", 1)], "Destino de quien vende sus tierras antes de las Acciacas (εἰς Κόρινθον ἀποδαμῶ), en una consulta de rasgos noroccidentales."),
    ("hermione", "Hermíone", "Ἑρμιόνη", 23.250, 37.385, (-0.20, 0.02), "Peloponeso", r"Ἑρμιόν|Ερμιον",
     [("Lhôte 68B", 1)], "Εἰς Ἑρμιόνα de I.Dodone Lhôte 68B."),
    ("same", "Same", "Σάμη", 20.650, 38.250, (-0.22, -0.10), "Islas del Jónico", r"Σάμ",
     [("DVC 4072A", 1)], "Única mención de las demás islas del Jónico (Cefalonia); los exvotos documentan otras procedencias."),
    ("selasia", "Selasia", "Σελλασία", 22.440, 37.170, (0.12, -0.05), "Peloponeso", r"Σε̣?λ",
     [("DVC 2416A", 0)], "En Laconia; el [ἐ]ν Σε̣λ<λ>ασί[αι] de I.Dodone DVC 2416A descansa en una corrección editorial."),
]


# Forma de cada mención, tal como figura en el Excel (E = etnónimo o gentilicio).
FORMAS = {
    "Lhôte 65A": ("Ἀμβρακιά[τας]", "E"), "DVC 3549A": ("ἐν Ἀνπρακία[ι]", ""), "DVC 1473A": ("εἰς Ἀνπ[ρακίαν]", ""),
    "DVC 891B": ("Ἀνπρα̣[κίαν]", ""), "DVC 618A": ("[εἰς Ἀ]μ̣πρακία[ν]", ""), "DVC 814A": ("ἐ̣ν̣ Ἀνπρα[κίαν]", ""),
    "DVC 2089A": ("ἐν Ἀμπρα[κίαι]", ""), "DVC 3979B": ("Ἀ(μ)πρακ(ί)αν", ""), "Lhôte 106A": ("ἐν Ἀμπρα[κίαι]", ""),
    "DVC 2265B": ("Ἀπρα[κίαν]", ""), "DVC 1066B": ("Ἀμπ(ρακία)", ""), "DVC 2295A": ("Ἀ̣πρα[κίαν]", ""),
    "Lhôte 1": ("Κορκ[υραῖοι]", "E"), "Lhôte 2": ("τοὶ Κορκυραῖοι", "E"), "Lhôte 3": ("τοὶ Κ[ο]ρκυρα[ῖοι]", "E"),
    "Lhôte 4": ("[το]ὶ Κορ[κυραῖοι]", "E"), "DVC 1088A": ("ὁ Κορκυραῖος", "E"), "DVC 1229B": ("(ἰ)ς Κόρκ̣υ[ραν]", ""),
    "DVC 1768A": ("[εἰ]ς Κόρκ[υραν]", ""),
    "DVC 228B": ("ἐς Φάρον", ""), "DVC 463A": ("ἰς Φάρον", ""), "DVC 3030A": ("εἰς Φάρον", ""), "DVC 3517A": ("[ἰς] Φάρον", ""),
    "DVC 2762A": ("[εἰς] Φάρ(ον)", ""), "Lhôte 130A": ("Φάρωι", ""), "Lhôte 6B": ("ἐς Πάρον", ""), "DVC 3280A": ("Φάρ̣ος", ""),
    "DVC 3146A": ("ἐν Πάρω[ι]", ""),
    "DVC 3": ("ἰ̣ς Ἐπίδαμνον", ""), "Lhôte 99A": ("ἐ̅ς Ἐπίδαμνον", ""), "DVC 3185": ("ἐς Ἐπίδα[μνον]", ""),
    "DVC 2052A": ("τὰν Ἐπιδαμνίαν γυναῖκα", "E"), "DVC 1345A": ("[ἐν] Ἐπιδα", ""), "DVC 1770B": ("[εἰς Ἐ]πίδ̣[αμνον]", ""),
    "DVC 3965A": ("Ἐπιδ̣[άμνιος]", "E"),
    "DVC 1207B": ("ἐ̣ν̣ [Ὀλ]υ̣μ̣πία[ν]", ""), "DVC 2986A": ("(ἐ)ν [Ὀλ]υμπίαι", ""), "DVC 3509A": ("[ἐν] Ὀλυν[πίαι]", ""),
    "DVC 4079A": ("Ὀλυπίανδε", ""), "DVC 4080B": ("Ὀλ(υ)πίανδε", ""), "DVC 1878A": ("[ἐν Ὀλυ]νπία[ι]", ""),
    "DVC 1358B": ("Νεμέαι", ""), "DVC 2646B": ("[Ν]εμέαν", ""), "DVC 3294A": ("[ἐκ] Νεμέας", ""),
    "DVC 366A": ("Ἀπολλωνίαν", ""), "Lhôte 50Aa": ("Ἀπολλωνιάτας", "E"),
    "Lhôte 86": ("Μεγαροῖ", ""), "DVC 1858A": ("Μεγαρ[- - -]", ""), "Lhôte 46Bb": ("εἰς Ἀνακτόριον", ""),
    "DVC 3220A": ("εἰς Κόρινθον", ""), "Lhôte 68B": ("Εἰς Ἐρμιόνα", ""), "DVC 4072A": ("ἐν Σάμαι", ""),
    "DVC 2416A": ("[ἐ]ν Σε̣λ(λ)ασί[αι]", ""),
    "DVC 105B": ("ἐ̣ν Κορ[- - -]", ""), "DVC 193B": ("ἐν Κο[- - -]", ""), "DVC 3116A": ("εἰς Κ[ο]ρ[- - -]", ""),
}


def forma(k, raiz=None):
    return FORMAS[k][0]


TOPONYMS = []
for id_, nom, gr, lon, lat, off, amb, raiz, ments, nota in LUGARES:
    ms = []
    for k, seg in ments:
        f = forma(k)
        tipo = "etnónimo" if FORMAS[k][1] == "E" else "topónimo"
        ms.append({"ref": clave_js(k), "form": f, "date": fecha(col(EX[k], "Date")), "type": tipo, "certain": bool(seg)})
        CITADAS.add(k)
    TOPONYMS.append({"id": id_, "name": nom, "greek": gr, "lon": lon, "lat": lat, "off": list(off), "ambito": amb,
                     "note": nota, "mentions": ms})
assert sum(len(t["mentions"]) for t in TOPONYMS) == 53
EXCLUIDOS = [{"ref": clave_js(k), "form": forma(k, r"Κορ|Κόρ"), "why": "Κορ- restituido: puede ser Corcira o Corinto."}
             for k in ("DVC 105B", "DVC 193B", "DVC 3116A")]
CITADAS.update(("DVC 105B", "DVC 193B", "DVC 3116A"))

# ── Textos de las inscripciones citadas ────────────────────────────────────────
for g in GRUPOS_COR:
    CITADAS.update(g[2])
CITADAS.update(notacion)
TEXTS = {clave_js(k): col(EX[k], "Text") for k in sorted(CITADAS) if col(EX[k], "Text")}
INSCRIPCIONES = [{"ref": clave_js(k), "date": fecha(col(r, "Date")), "tema": col(r, "TEMA_MACRO") or "Desconocido",
                  "alf": col(r, "ALFABETO_GRUPO_v2") or "Reformado / Desconocido", "cert": col(r, "DIALECTO_CERTEZA"),
                  "sub": col(r, "DIALECTO_SUB")} for k, r in sorted(CAP.items(), key=lambda kv: (kv[0].startswith("Lhôte"),
                                                                                                    int(re.search(r"\d+", kv[0]).group())))]

# ── Escritura del módulo ──────────────────────────────────────────────────────
J = lambda x: json.dumps(x, ensure_ascii=False, indent=1)
partes = [
    "// Generado por scripts/datos_dorico_general.py: no editar a mano.",
    "// Fuentes: DVC_v5_FINAL.xlsx (hoja Datos; DIALECTO_SUB “Doris mitior” y “Dórico Magna Grecia”, 176 inscripciones,",
    "// Resúmenes fila 165), DORICO_GENERAL_1_Redaccion_v64 (§2-§7) y graficos_dorico_fonetica.py (matrices y listas de §4).",
    "",
    f"export const INTRO_FON_DOR = {J(INTRO['4'])};",
    f"export const INTRO_MORF_DOR = {J(INTRO['5'])};",
    "// Rasgos: cada apartado de §4-§7 con su texto y las inscripciones que cita (claves “123A” o “LOD 94”).",
    f"export const RASGOS_DOR = {J(RASGOS)};",
    f"export const RASGO_TEXTS_DOR = {J(TEXTS)};",
    "// Matriz de valor diagnóstico: 2 = lo excluye; 1 = en parte; 0 = rasgo compartido; -1 = no se trata.",
    f"export const DIAG_COLS_DOR = {J(DIAG_COLS)};",
    f"export const DIAGNOSTICO_DOR = {J(DIAGNOSTICO)};",
    "// §3: cronología (categorías de los gráficos de la tesis), temática (TEMA_MACRO), alfabeto (ALFABETO_GRUPO_v2) y certeza.",
    f"export const CHRONO_DETAIL_DOR = {J(CHRONO)};",
    f"export const THEMES_DOR = {J(THEMES)};",
    f"export const ALF_DOR = {J({k: [clave_js(x) for x in v] for k, v in alf.items()})};",
    f"export const CERTEZA_DOR = {J(cert)};",
    f"export const INSCRIPCIONES_DOR = {J(INSCRIPCIONES)};",
    "// §4.1.3: inscripciones que notan con Ε u Ο alguna vocal media larga, por período.",
    f"export const NOTACION_DOR = {J(NOTACION)};",
    "// §3: las 47 inscripciones del capítulo en alfabeto corintio (ALFABETO_GRUPO_v2), según lo que sostiene su adscripción.",
    f"export const CORINTIAS_DOR = {J([{'id': g[0], 'name': g[1], 'dvcs': [clave_js(k) for k in g[2]], 'note': g[3]} for g in GRUPOS_COR])};",
    "// §4.2.2-4.2.3: digamma y notación de la aspiración por período.",
    f"export const ARCAISMOS_DOR = {J(ARCA)};",
    "// §4.2.4: sigma simple frente a geminada (simples, geminadas), en el capítulo y en el corpus.",
    "export const SIGMA_DOR = { capitulo: { prasso: [6, 3], essetai: [9, 20] }, corpus: { prasso: [34, 79], essetai: [12, 40] } };",
    "// §2: topónimos y etnónimos (53 menciones; las mismas cifras que TOPONIMOS[\"dor\"] de graficos_dialecto_pandas.py).",
    f"export const TOPONYMS_DOR = {J(TOPONYMS)}.map((t) => ({{ ...t, seg: t.mentions.filter((m) => m.certain).length,",
    "  dud: t.mentions.filter((m) => !m.certain).length, total: t.mentions.length }));",
    f"export const TOPONYMS_EXCLUDED_DOR = {J(EXCLUIDOS)};",
    "export const TOPONYM_MENTIONS_DOR = TOPONYMS_DOR.flatMap((t) => t.mentions.map((m) => ({ ...m, place: t.name })));",
    "export const TOPONYM_BARS_DOR = TOPONYMS_DOR.slice().sort((a, b) => b.total - a.total || b.seg - a.seg)",
    "  .map((t) => ({ name: t.name, seguras: t.seg, dudosas: t.dud }));",
    "",
]
SALIDA.write_text("\n".join(partes), encoding="utf-8")

# inscriptions.json: añade las citadas que falten (“DVC 123A” / “Lhôte 94”: [datación, texto, dialecto]).
ins = json.loads(INSC.read_text(encoding="utf-8"))
n0 = len(ins)
for k in sorted(CITADAS | set(CAP)):
    if k not in ins and col(EX[k], "Text"):
        ins[k] = [fecha(col(EX[k], "Date")), col(EX[k], "Text"), etiqueta(EX[k])]
INSC.write_text(json.dumps(ins, ensure_ascii=False, indent=0), encoding="utf-8")
print(f"rasgos {len(RASGOS)} · textos {len(TEXTS)} · cronología {sum(c['n'] for c in CHRONO)} · temas {sum(t['value'] for t in THEMES)}"
      f" · topónimos {len(TOPONYMS)} · inscriptions.json {n0} → {len(ins)}")
for r in RASGOS:
    print(r["sec"], r["cat"][:4], r["name"], len(r["dvcs"]))
for t in TOPONYMS:
    print(t["name"], [(m["ref"], m["form"], m["type"]) for m in t["mentions"]])
