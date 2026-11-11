"""Utilidades compartidas por los generadores de datos (scripts/datos_*.py): rutas, Excel y lectura de los capítulos."""
import io
import json
import os
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
CAPS = UVA / "CAPÍTULOS TESIS"
EXCEL = CAPS / "DVC_v5_FINAL.xlsx"
GRAF = UVA / "PYTHON" / "SEABORN-ALTAIR"
DATOS = RAIZ / "src" / "data"


def ultima(carpeta, patron, marca=r"_v(\d+)\.docx$"):
    """La versión de número más alto de un documento de la tesis."""
    return max((CAPS / carpeta).glob(patron), key=lambda p: int(re.search(marca, p.name).group(1)))


def parte2():
    """La Parte II vigente, que reúne los capítulos 4, 5 y 6."""
    return Path(os.environ.get("DOCX_DOR") or ultima("PARTE II. DIALECTOS DÓRICOS", "PARTE II*REVISADO *.docx", r"REVISADO (\d+)"))


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
    dst.close()
    buf.seek(0)
    return buf


class Excel:
    """Hoja Datos, por clave “DVC 123A” / “Lhôte 94”, con la equivalencia Lhôte → DVC de las que figuran en las dos ediciones."""

    def __init__(self):
        wb = openpyxl.load_workbook(sin_pivots(EXCEL), data_only=True, read_only=True)
        filas = [list(r) for r in wb["Datos"].iter_rows(values_only=True)]
        self.H = {h: i for i, h in enumerate(filas[0]) if h}
        self.filas, self.lh2dvc = {}, {}
        for r in filas[1:]:
            if r[0] is not None:
                self.filas.setdefault("DVC " + str(r[0]).split("\n")[0].split(" (")[0].strip(), r)   # «2018A (M722)»: sin el inventario
            else:
                m = re.search(r"Lhôte, no (\d+)\s*(?:\(Face ([A-Za-z]+)\))?", str(r[2] or ""))
                if m:
                    self.filas.setdefault("Lhôte " + m.group(1) + (m.group(2) or ""), r)
        for k, r in self.filas.items():
            if k.startswith("DVC "):
                for m in re.finditer(r"Lhôte, no (\d+)\s*(?:\(Face ([A-Za-z]+)\))?", str(r[2] or "")):
                    self.lh2dvc.setdefault("Lhôte " + m.group(1) + (m.group(2) or ""), k)

    def col(self, r, h):
        return r[self.H[h]]


def clave_js(k):
    """“DVC 123A” → “123A”; “Lhôte 94” → “LOD 94” (claves de RASGO_TEXTS y de Ref)."""
    src, i = k.split(" ", 1)
    return i if src == "DVC" else f"LOD {i}"


def etiqueta(macro, sub):
    if not macro:
        return ""
    return macro if not sub or sub == macro else f"{macro} · {sub}"


ROM = {"2": "II", "3": "III", "4": "IV", "5": "V", "6": "VI"}
TABD = {"α΄ μισό": "primera mitad del", "β΄ μισό": "segunda mitad del", "μέσα": "mediados del", "αρχές": "principios del",
        "τέλος": "finales del", "τελευταίο τέταρτο": "último cuarto del", "δ΄ τέταρτο": "último cuarto del",
        "γ΄ τέταρτο": "tercer cuarto del", "α΄ τέταρτο": "primer cuarto del", "β΄ τέταρτο": "segundo cuarto del"}


def fecha(d):
    """Fecha de la edición (griego moderno y siglos en cifras), en español."""
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


# ── Texto de los capítulos (.docx) ─────────────────────────────────────────────
W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
M_, AC, GR, PS, DA, CI = "\u0304", "\u0301", "\u0300", "\u0313", "\u0314", "\u0342"
_e = ["ε" + CI, "ε" + PS + CI, "ε" + DA + CI, "ε" + M_, "ε" + M_ + AC, "ε" + M_ + GR, "ε" + M_ + PS, "ε" + M_ + DA,
      "ε" + M_ + PS + GR, "ε" + M_ + DA + GR, "ε" + M_ + PS + AC, "ε" + M_ + DA + AC, "Ε" + PS + CI, "Ε" + DA + CI, "Ε" + M_, "Ε\u0306",
      "ο" + CI, "ο" + PS + CI, "ο" + DA + CI, "ο" + M_, "ο" + M_ + AC, "ο" + M_ + GR, "ο" + M_ + PS, "ο" + M_ + DA,
      "ο" + M_ + PS + GR, "ο" + M_ + DA + GR, "ο" + M_ + PS + AC, "ο" + M_ + DA + AC]
# Precompuestos del Área de Uso Privado de Cardo: griego con macrón y perispómena, i̯ y u̯ (Unicode normal en la web). Las variantes
# epigráficas (U+F0011 épsilon corintia, U+F0081 lambda, U+F00D7 chi) se conservan: están en la fuente DodonaCardo.
PUA = {0xE1B0 + i: v for i, v in enumerate(_e)} | {0xE548: "i\u032F", 0xE727: "u\u032F"}
# Marcas de trabajo de los capítulos y figuras, que no se publican.
TRABAJO = re.compile(r"\s*\[(?:VERIFICAR|CITA PENDIENTE|PENDIENTE)[^\]]*\]")
PIE_FIGURA = re.compile(r"^(?:Figura|Tabla) \d+[.:]")


def ptext(p, cursiva=False):
    """Texto de un párrafo; con `cursiva`, las cursivas como <i> (renderDesc ya pone las de I.Dodone DVC y Lhôte, y necesita esas citas sin marcas)."""
    out = []
    for r in p.iter(W + "r"):
        t = "".join((ch.text or "") if ch.tag == W + "t" else " " if ch.tag == W + "tab" else "" for ch in r)
        i = r.find(f"{W}rPr/{W}i")
        if cursiva and t.strip() and i is not None and i.get(W + "val") not in ("0", "false"):
            t = f"<i>{t}</i>"
        out.append(t)
    t = re.sub(r"</i>(\s*)<i>", r"\1", "".join(out))
    t = re.sub(r"<i>([^<]*I\.Dodone[^<]*)</i>", r"\1", t)
    return unicodedata.normalize("NFC", TRABAJO.sub("", t).translate(PUA))


def parrafos(docx, tablas=True):
    """[(estilo, texto)] del cuerpo de un .docx, sin el índice ni los pies de figura; fuera de los títulos, con las cursivas como <i>.
    Con tablas=False se omiten los párrafos de las tablas de Word (las del texto se ven en el documento, no en el dashboard)."""
    doc = etree.fromstring(zipfile.ZipFile(docx).read("word/document.xml"))
    out = []
    for p in doc.find(W + "body").iter(W + "p"):
        if not tablas and any(a.tag == W + "tc" for a in p.iterancestors()):
            continue
        st = p.find(f"{W}pPr/{W}pStyle")
        st = st.get(W + "val") if st is not None else ""
        if st.startswith("TDC"):
            continue
        t = ptext(p).strip()
        if not PIE_FIGURA.match(t):
            out.append((st, ptext(p, not es_titulo(st)).strip()))
    return out


def es_titulo(st):
    return st.startswith(("Ttulo", "Heading"))


def indices(pars, inicio, n=0):
    """Posición del n-ésimo encabezado que empieza por `inicio` (los capítulos de una parte repiten la numeración)."""
    return [i for i, (s, t) in enumerate(pars) if es_titulo(s) and t.startswith(inicio)][n]


def secciones(pars, i0, i1):
    """[número, título, [párrafos]] de los apartados entre dos encabezados."""
    out = []
    for st, t in pars[i0:i1]:
        if es_titulo(st):
            m = re.match(r"(\d+(?:\.\d+)*)\.\s+(.*)", t)
            out.append([m.group(1), m.group(2), []])
        elif t and out:
            out[-1][2].append(t)
    return out


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
    t = "".join(out).replace(" Y ", " y ")
    for nombre in ("Dodona", "Doris", "Élide", "Peloponeso", "Eubea", "Jonia", "Atenas", "Epiro", "Macedonia", "Tesalia", "Beocia"):
        t = re.sub(rf"\b{nombre.lower()}\b", nombre, t)
    return re.sub(r"\bs\. ([ivx]+) a\.c\.", lambda m: f"s. {m.group(1).upper()} a.C.", t)


TOK = re.compile(r"I\.Dodone (DVC|Lhôte)\s*|(?<![\d§:.,/–-])\b(\d{1,4}(?:[AB][abc]?)?)\b(?![\d:/])")
EQ1 = re.compile(r"\(= I\.Dodone (?:DVC|Lhôte)[^()]*(?:\([^()]*\)[^()]*)*\)")
EQ2 = re.compile(r"= I\.Dodone (?:DVC|Lhôte)\s*\d+\w*")


def citas(texto, ex):
    """Inscripciones citadas en una lista de párrafos, en orden: las claves “DVC 123A” o “Lhôte 94” que existen en el Excel."""
    out = []
    for para in texto:
        para = EQ2.sub("", EQ1.sub("", re.sub(r"</?i>", "", para)))
        corpus = None
        for sent in re.split(r"(?<!\bs\.)(?<!ss\.)(?<=[.;?])\s+(?=[A-ZÁÉÍÓÚ(])", para):
            for m in TOK.finditer(sent):
                if m.group(1):
                    corpus = m.group(1)
                    continue
                pre = sent[max(0, m.start() - 12):m.start()]
                if corpus is None or re.search(r"(nn?\.|p\.|pp\.|§§?|ll?\.|n\.º|IG|SEG|SGDI|IC|Molossie|Thesp\.|fr\.|col\.|"
                                               r"Bekker|GG)\s*$", pre):
                    continue
                if re.search(r"\d{4}[a-f]?(: | y |; )\s*$", pre) or re.search(r"[A-Z][a-zé]+ \($", pre) \
                        or re.search(r"\b(las|los)\s$", pre):
                    continue
                k = f"{corpus} {m.group(2)}"
                k = k if k in ex.filas else ex.lh2dvc.get(k)
                if k and k not in out:
                    out.append(k)
    return out


CATS = {"4": "Fonología", "5": "Morfología", "6": "Sintaxis", "7": "Vocabulario"}


def rasgos_de(secs, ex, cats=CATS, saltar=("4", "5")):
    """Rasgos del RasgoExplorer ({ id, sec, name, short, cat, desc, dvcs }): un apartado por rasgo, con las inscripciones que cita."""
    rasgos, citadas = [], set()
    for num, tit, texto in secs:
        if not texto or num in saltar:   # las introducciones de §4 y §5 van aparte
            continue
        ks = citas(texto, ex)
        citadas.update(ks)
        rasgos.append({"id": len(rasgos) + 1, "sec": "§" + num, "name": titulo(tit), "short": titulo(tit),
                       "cat": cats[num[0]], "desc": " ".join(texto), "dvcs": [clave_js(k) for k in ks]})
    return rasgos, citadas


def apartados(secs):
    """Apartados con su texto para <Secciones>: { sec, name, paras }."""
    return [{"sec": "§" + n, "name": titulo(t), "paras": ps} for n, t, ps in secs if ps]


def anadir_a_indice(citadas, ex):
    """inscriptions.json: añade las inscripciones citadas que falten (“DVC 123A”: [datación, texto, dialecto])."""
    ruta = DATOS / "inscriptions.json"
    ins = json.loads(ruta.read_text(encoding="utf-8"))
    nuevas = []
    for k in sorted(citadas):
        if k not in ins and k in ex.filas and ex.col(ex.filas[k], "Text"):
            r = ex.filas[k]
            ins[k] = [fecha(ex.col(r, "Date")), ex.col(r, "Text"), etiqueta(ex.col(r, "DIALECTO_MACRO"), ex.col(r, "DIALECTO_SUB"))]
            nuevas.append(k)
    ruta.write_text(json.dumps(ins, ensure_ascii=False, indent=0), encoding="utf-8")
    return nuevas
