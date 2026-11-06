"""Genera src/data/adscripcion.js (tablas de adscripción del noroccidental, el dórico general, el tesalio, el beocio y
la Doris severior) a partir de CAPITULOS de PYTHON/SEABORN-ALTAIR/graficos_adscripcion.py, la fuente de las tablas de la
tesis. datos_jonico_atico.py reutiliza filas_js() para las de la Parte IV.

Uso:  py scripts/datos_adscripcion.py
"""
import ast
import json
import re
import sys
from pathlib import Path

import pandas as pd

sys.stdout.reconfigure(encoding="utf-8")
RAIZ = Path(__file__).resolve().parents[1]
UVA = RAIZ.parent
FUENTE = UVA / "PYTHON" / "SEABORN-ALTAIR" / "graficos_adscripcion.py"
SALIDA = RAIZ / "src" / "data" / "adscripcion.js"
INSC = RAIZ / "src" / "data" / "inscriptions.json"


def capitulos():
    """CAPITULOS de graficos_adscripcion.py sin importar el módulo (que necesita Altair y las fuentes)."""
    arbol = ast.parse(FUENTE.read_text(encoding="utf-8"))
    nodo = next(n for n in arbol.body if isinstance(n, ast.Assign) and getattr(n.targets[0], "id", "") == "CAPITULOS")
    return eval(compile(ast.Expression(nodo.value), str(FUENTE), "eval"), {"dict": dict})


CURSIVA = ("Doris severior", "Doris media")


def _cursiva(t, koine=False):
    for x in CURSIVA + (("koiné",) if koine else ()):
        t = re.sub(r"(?<![>\w])" + x, f"<i>{x}</i>", t)
    return t


def _claves(insc):
    """“DVC 237A, 261B; Lhôte 101B” → (["237A", "261B", "LOD 101B"], notas entre paréntesis)."""
    claves, notas = [], []
    for trozo in insc.replace("\n", " ").split("¶"):
        for grupo in trozo.split(";"):
            grupo = grupo.strip()
            m = re.match(r"(DVC|Lhôte)\s+(.*)", grupo)
            if m:
                src, resto = m.groups()
            elif claves:
                src, resto = ("Lhôte" if claves[-1].startswith("LOD") else "DVC"), grupo
            else:
                return None, None
            for item in re.split(r",\s*(?![^()]*\))", resto):
                item = item.strip()
                n = re.match(r"(\w+)\s*(?:\((.*)\))?$", item)
                if not n:
                    return None, None
                claves.append(n.group(1) if src == "DVC" else f"LOD {n.group(1)}")
                if n.group(2):
                    notas.append(n.group(2))
    return claves, notas


def _nota(t):
    t = t.replace("\n", " ").replace("¶", "; ")
    t = re.sub(r"véase §\d+-§\d+|véase la tabla de rasgos", "véanse los rasgos dialectales", t)
    t = t.replace("el capítulo siguiente", "el capítulo del noroccidental")
    t = re.sub(r"\s*\(§[\d.]+\)", "", t)
    return re.sub(r"\bDVC (?=\d)", "I.Dodone DVC ", t)


def filas_js(clave, koine=False):
    """Filas del dashboard ({base, dvcs | nota, clas, n, tipo}) de la tabla `clave` de la tesis."""
    out = []
    for base, insc, clas, n, tipo in capitulos()[clave]["filas"]:
        if tipo == "sec":
            continue
        base = re.sub(r"\s*\(§[\d.]+\)", "", base.replace("\n", " "))
        fila = {"base": base}
        dvcs, notas = _claves(insc) if insc.startswith(("DVC", "Lhôte")) else (None, None)
        if "¶" in insc and "\n" in clas:
            # Dos grupos con clasificaciones distintas: la segunda lleva entre paréntesis sus inscripciones (y notas).
            primero, segundo = insc.split("¶")
            c1, c2 = [x.strip() for x in clas.split("\n")]
            d1, notas = _claves(primero)
            d2, n2 = _claves(segundo)
            vis = [k.replace("LOD ", "Lhôte ") for k in d2] + n2
            clas = f"{c1}; {c2} ({', '.join(vis)})"
        else:
            clas = clas.replace("\n", " ")
        if dvcs:
            notas = [x for x in notas if x not in base]   # sin repetir lo que ya dice la base
            if notas:
                fila["base"] = f"{base} ({', '.join(notas)})"
            fila["dvcs"] = dvcs
        else:
            fila["nota"] = _nota(insc)
        fila["base"] = _cursiva(fila["base"], koine)
        fila.update(clas=_cursiva(clas, koine), n=n, tipo=tipo)
        out.append(fila)
    return out


# ── Utilidades compartidas por los generadores (datos_jonico_atico.py, datos_frontera.py) ──
def crono(x):
    """Cronología con la agrupación de los gráficos de la tesis (columna Date)."""
    from graficos_dialecto_pandas import ORDEN_CRONO, parse_fecha
    c = x["Date"].map(parse_fecha).value_counts()
    return [{"period": p, "n": int(c[p])} for p in ORDEN_CRONO if p in c]


def temas(x):
    t = x["TEMA_MACRO"].fillna("Desconocido").replace(r"(?i)^desconocido.*", "Desconocido / Sin clasificar", regex=True)
    c = t.value_counts()
    return [{"name": k, "value": int(v)} for k, v in sorted(c.items(), key=lambda kv: (-kv[1], kv[0]))]


def claves_indice(filas):
    """Claves de inscriptions.json ("DVC 353B", "Lhôte 109") de las filas de una tabla de adscripción."""
    return {("Lhôte " + k[4:]) if k.startswith("LOD ") else "DVC " + k for f in filas for k in f.get("dvcs", [])}


def clave_excel(r):
    if pd.notna(r["No DVC"]):
        return "DVC " + str(r["No DVC"]).split("\n")[0].strip()
    m = re.search(r"Lhôte, no (\d+)\s*(?:\(Face ([A-Za-z]+)\))?", str(r["Editions"] or ""))
    return "Lhôte " + m.group(1) + (m.group(2) or "") if m else None


def etiqueta(r):
    macro, s = r["DIALECTO_MACRO"], r["DIALECTO_SUB"]
    if pd.isna(macro):
        return ""
    return macro if pd.isna(s) or s == macro else f"{macro} · {s}"


# Fechas de la edición, en español.
ROM = {"2": "II", "3": "III", "4": "IV", "5": "V", "6": "VI"}
TABD = {"α΄ μισό": "primera mitad del", "β΄ μισό": "segunda mitad del", "μέσα": "mediados del", "αρχές": "principios del",
        "τέλος": "finales del", "τελευταίο τέταρτο": "último cuarto del", "δ΄ τέταρτο": "último cuarto del",
        "γ΄ τέταρτο": "tercer cuarto del", "α΄ τέταρτο": "primer cuarto del", "β΄ τέταρτο": "segundo cuarto del"}


def fecha(d):   # la misma conversión que datos_dorico_general.py
    s = re.sub("([΄'])(?=\\S)", lambda m: m.group(1) + " ", str(d if pd.notna(d) else "").strip())
    s = s.replace("δ' ", "δ΄ ").replace("γ' ", "γ΄ ").replace("'", "΄").replace("΄", "΄")
    s = s.replace("΄", "΄")
    if not s or s == "αδιάγνωστη":
        return "sin datación"
    m2 = re.fullmatch(r"(\d)-(\d)", s)
    if m2:
        return f"ss. {ROM[m2.group(1)]}-{ROM[m2.group(2)]} a.C."
    m = re.fullmatch(r"(\d)(?:, (.*))?", s)
    if not m:
        return s
    return f"{TABD.get(m.group(2), m.group(2))} s. {ROM[m.group(1)]} a.C." if m.group(2) else f"s. {ROM[m.group(1)]} a.C."


def actualizar_indice(df, citadas):
    """inscriptions.json: etiqueta dialectal al día con el Excel y entrada nueva para cada cita de `citadas` que falte."""
    EX = {}
    for _, r in df.iterrows():
        k = clave_excel(r)
        # Una inscripción puede tener varias filas (doble adscripción): vale la primera con clasificación.
        if k and (k not in EX or (pd.isna(EX[k]["DIALECTO_MACRO"]) and pd.notna(r["DIALECTO_MACRO"]))):
            EX[k] = r
    ins = json.loads(INSC.read_text(encoding="utf-8"))
    cambios = []
    ALIAS = {"No jónico-ático": "NO JON-ÁT"}   # formas abreviadas que ya usa el índice
    for k, v in ins.items():
        if k in EX and len(v) >= 3:
            r = EX[k]
            macro = "" if pd.isna(r["DIALECTO_MACRO"]) else r["DIALECTO_MACRO"]
            s = "" if pd.isna(r["DIALECTO_SUB"]) else r["DIALECTO_SUB"]
            viejo = v[2].split(" · ")
            # Solo si cambia el macrogrupo, o el subgrupo cuando la etiqueta lo indica: el resto conserva su forma.
            if ALIAS.get(viejo[0], viejo[0]) != macro or (len(viejo) > 1 and viejo[1] != s):
                e = etiqueta(r)
                cambios.append((k, v[2], e)); v[2] = e
    nuevas = []
    for k in sorted(citadas):
        if k not in ins and k in EX and pd.notna(EX[k]["Text"]):
            ins[k] = [fecha(EX[k]["Date"]), EX[k]["Text"], etiqueta(EX[k])]
            nuevas.append(k)
    INSC.write_text(json.dumps(ins, ensure_ascii=False, indent=0), encoding="utf-8")
    print(f"inscriptions.json: {len(cambios)} etiquetas actualizadas; {len(nuevas)} citas nuevas: {', '.join(nuevas)}")
    for k in nuevas[:5]:
        print("  ", k, ins[k][0], "|", ins[k][2])
    for c in cambios:
        print("  ", *c, sep=" | ")


def main():
    nombres = {"dno": "NO", "dor": "DOR", "tes": "TES", "beo": "BEOC", "sev": "SEV"}
    partes = [
        "// Generado por scripts/datos_adscripcion.py: no editar a mano.",
        "// Tablas de adscripción de cada capítulo (§ «… en números»): bases de la adscripción, certeza y consultas excluidas.",
        "// Fuente: PYTHON/SEABORN-ALTAIR/graficos_adscripcion.py (CAPITULOS), las mismas tablas de la tesis, con los datos de",
        "// DVC_v5_FINAL.xlsx (hoja Datos, DIALECTO_SUB y DIALECTO_CERTEZA; Resúmenes, fila 187, 4 nov. 2026) y la columna CARLOS.",
        "// tipo: \"seg\" (segura), \"dud\" (dudosa), \"nom\" (solo nombre o alfabeto), \"exc\" (excluida del capítulo).",
        "// dvcs: claves del dashboard (\"353B\", \"LOD 109\"); nota: texto en lugar de la lista.",
        "",
    ]
    caps = capitulos()
    for clave, nombre in nombres.items():
        filas = filas_js(clave, koine=clave in ("dor", "sev"))
        dentro = sum(f["n"] for f in filas if f["tipo"] != "exc")
        assert dentro == caps[clave]["total"], (clave, dentro, caps[clave]["total"])
        partes.append(f"export const ADSCRIPCION_{nombre} = {json.dumps(filas, ensure_ascii=False)};")
    SALIDA.write_text("\n".join(partes) + "\n", encoding="utf-8")
    print("adscripcion.js:", ", ".join(f"{k} {caps[k]['total']}" for k in nombres))


if __name__ == "__main__":
    main()
