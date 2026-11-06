"""Genera src/data/autopsias.js (vista de las autopsias) y src/data/autopsiasFotos.js (fotografías, solo para la versión local).

Fuentes:
  · INTRODUCCIÓN_v<n>.docx (la de número más alto), anexo §3.4: un párrafo por laminilla, con sus fragmentos, la fecha y las
    observaciones de cada inscripción.
  · DVC_v5_FINAL.xlsx, hoja Datos: lectura, datación y clasificación vigente de cada inscripción.
  · scripts/fotos_autopsias.json: rutas de las fotografías y los facsímiles (dentro de public/) por inscripción. Solo los
    facsímiles se publican; las fotografías dependen de la autorización de la Eforía de Antigüedades de Ioánina.

Uso:  py scripts/datos_autopsias.py
"""
import json
import re
from pathlib import Path

from comun import DATOS, Excel, clave_js, es_titulo, fecha, parrafos, ultima

DOCX = ultima("INTRODUCCIÓN", "INTRODUCCIÓN_v*.docx")
FOTOS = json.loads((Path(__file__).parent / "fotos_autopsias.json").read_text(encoding="utf-8"))
ex = Excel()
pars = parrafos(DOCX)
i0 = next(i for i, (s, t) in enumerate(pars) if es_titulo(s) and t.startswith("3.4. ANEXO"))
i1 = next(i for i, (s, t) in enumerate(pars) if i > i0 and es_titulo(s) and t.startswith("REFERENCIAS"))

CAB = re.compile(r"^(M\d+(?: \+ M\d+)*) \(AMI ([^)]*)\): ")
INS = re.compile(r"I\.Dodone (DVC|Lhôte) (\d+[A-Za-z+]*) \(([^)]*)\)\. ")
LISTA = re.compile(r"I\.Dodone (DVC|Lhôte) ((?:\d+[A-Za-z+]*(?:, | y )?)+)")


def grupo(macro, sub):
    """Clasificación vigente → grupo de la vista y subgrupo que se muestra junto a él."""
    if not macro:
        return "sinClasificar", None
    if macro == "Dórico":
        return ("doricoNO", None) if sub == "Dórico NO" else ("dorico", None)
    if macro == "Tesalio":
        m = re.search(r"\((\w+)\)", sub or "")
        return "tesalio", (m.group(1) if m and m.group(1) != "general" else None)
    if macro == "Jónico-Ático-Koiné":
        return "jonicoAtico", (None if sub == "Jónico-ático" else sub)
    return {"Beocio": "beocio", "Doris severior": "severior", "Mezcla dialectal": "mezcla", "NO JON-ÁT": "noJonAt", "Otros": "otros"}[macro], None


def ficha(k, obs=None, datada=None):
    fila = ex.filas.get(k)
    if fila is None:
        print("  sin fila en el Excel:", k)
    col = (lambda h: ex.col(fila, h)) if fila else (lambda h: None)
    g, sub = grupo(col("DIALECTO_MACRO"), col("DIALECTO_SUB"))
    d = datada or fecha(col("Date"))
    return {"id": clave_js(k), "dialect": g, "sub": sub, "date": d[0].upper() + d[1:], "text": col("Text") or "", "obs": obs}


def observacion(t):
    # Sin citas bibliográficas de la introducción sobreentendidas: las remisiones internas llevan su capítulo.
    return re.sub(r"\bCf\. §", "Cf. introducción, §", t).strip()


LAMINILLAS, INTRO, CAMPANAS, anio = [], [], {}, None
for st, t in pars[i0 + 1:i1]:
    if es_titulo(st):
        anio = int(re.search(r"20\d\d", t).group())
        continue
    m = CAB.match(t)
    if not m:
        if anio:
            CAMPANAS[anio] = t
        elif t:
            INTRO.append(t)
        continue
    siglum, ami, cuerpo = m.group(1), m.group(2), t[m.end():]
    ms = list(INS.finditer(cuerpo))
    # Antes de la primera inscripción: la lista de la laminilla, su estado y la fecha.
    cab = cuerpo[:ms[0].start()] if ms else cuerpo
    fm = re.search(r"Autopsia: ([^.]*)\.\s*$", cab)
    lst = LISTA.match(cab)
    todas = []
    for corpus, resto in LISTA.findall(cab[:lst.end()]) if lst else []:
        todas += [f"{corpus} {x}" for x in re.findall(r"\d+[A-Za-z+]*", resto)]
    nota = cab[lst.end() if lst else 0:fm.start() if fm else len(cab)].strip(" .")
    obs = {}
    for j, x in enumerate(ms):
        k = f"{x.group(1)} {x.group(2)}"
        obs[k] = (observacion(cuerpo[x.end():ms[j + 1].start() if j + 1 < len(ms) else len(cuerpo)]), x.group(3))
        if k not in todas:
            todas.append(k)
    fichas = [ficha(k, *obs.get(k, (None, None))) for k in todas]
    fotos = [p for k in todas for p in FOTOS.get(clave_js(k), [])]
    LAMINILLAS.append({"key": siglum, "siglum": siglum, "ami": "ΑΜΙ " + re.sub(r"AMI ", "", ami), "anio": anio,
                       "fecha": fm.group(1) if fm else str(anio), "nota": (nota + ".") if nota else "", "items": fichas,
                       "facsimiles": sorted({p for p in fotos if "facsimil" in p})})

# 150A: autopsia citada en el capítulo del tesalio (§3.2.2) que el anexo §3.4 no recoge.
LAMINILLAS.append({"key": "150A", "siglum": None, "ami": None, "anio": None, "fecha": None, "nota": "", "facsimiles": [], "items": [
    ficha("DVC 150A", "La autopsia en la Eforía de Antigüedades de Ioánina confirmó que la forma de las letras se corresponde con el alfabeto "
          "epicórico tesalio, como proponen los editores de I.Dodone DVC frente a la atribución de Jeffery (1990: 233, n.º 17) a un alfabeto "
          "arcaico de Dodona. El dato respalda la adscripción tesalia de la consulta y convierte a ἔννεκα en su testimonio tesalio más antiguo "
          "(cf. cap. 7, §3.2.2).")]})

n = {a: [lam for lam in LAMINILLAS if lam["anio"] == a] for a in (2024, 2025)}
for a, esperado in ((2024, (45, 169, 127)), (2025, (26, 101, 92))):
    cifras = (len(n[a]), sum(len(x["items"]) for x in n[a]), sum(1 for x in n[a] for f in x["items"] if f["obs"]))
    assert cifras == esperado, (a, cifras, esperado)   # las cifras que da el propio anexo (§3.4.1 y §3.4.2)

J = lambda x: json.dumps(x, ensure_ascii=False)
(DATOS / "autopsias.js").write_text("\n".join([
    "// Generado por scripts/datos_autopsias.py: no editar a mano.",
    f"// Texto: {DOCX.stem}, anexo §3.4; lectura, datación y clasificación: DVC_v5_FINAL.xlsx (hoja Datos).",
    f"export const INTRO_AUTOPSIAS = {J(INTRO)};",
    f"export const CAMPANAS_AUTOPSIAS = {J(CAMPANAS)};",
    "// Una entrada por laminilla; obs = null: inscripción sin observaciones propias.",
    f"export const LAMINILLAS_AUTOPSIA = {J(LAMINILLAS)};",
    "",
]), encoding="utf-8")
foto_lam = {lam["key"]: [p for f in lam["items"] for p in FOTOS.get(f["id"], []) if "facsimil" not in p] for lam in LAMINILLAS}
(DATOS / "autopsiasFotos.js").write_text("\n".join([
    "// Generado por scripts/datos_autopsias.py: no editar a mano. Fotografías de cada laminilla (rutas dentro de public/), solo en la versión local.",
    f"export default {J({k: list(dict.fromkeys(v)) for k, v in foto_lam.items() if v})};",
    "",
]), encoding="utf-8")
print(f"autopsias.js: {len(LAMINILLAS)} laminillas; 2024 {len(n[2024])}, 2025 {len(n[2025])}; {sum(len(x['items']) for x in LAMINILLAS)} inscripciones")
