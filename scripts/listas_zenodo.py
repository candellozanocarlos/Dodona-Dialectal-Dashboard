"""Escribe en listas/ las inscripciones de cada grupo dialectal, en CSV,
a partir de los datos del atlas (src/data), para depositarlas en Zenodo con cada versión.

Uso:  py scripts/listas_zenodo.py
"""
import csv
import json
import re
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[1]
DATOS = RAIZ / "src" / "data"
SALIDA = RAIZ / "listas"
CERTEZA = {"s": "segura", "d": "dudosa", "n": "solo nombre o alfabeto"}
CAB = ["inscripcion", "datacion_edicion", "texto_edicion", "certeza"]


def constante(archivo, nombre):
    """Valor de `export const NOMBRE = ...` en un archivo de src/data (literal JSON)."""
    t = (DATOS / archivo).read_text(encoding="utf-8")
    inicio = t.index(f"export const {nombre} = ") + len(f"export const {nombre} = ")
    return json.JSONDecoder().raw_decode(t, inicio)[0]


def ref(clave):
    """'123A' → 'I.Dodone DVC 123A'; 'LOD 89Aa' → 'I.Dodone Lhôte 89Aa'."""
    return "I.Dodone Lhôte " + clave[4:] if clave.startswith("LOD ") else "I.Dodone DVC " + clave


def escribir(nombre, cabecera, filas):
    with open(SALIDA / f"{nombre}.csv", "w", encoding="utf-8-sig", newline="") as f:
        w = csv.writer(f)
        w.writerow(cabecera)
        w.writerows(filas)
    print(f"{nombre}: {len(filas)}")
    return len(filas)


SALIDA.mkdir(exist_ok=True)
total = 0
for nombre, archivo in [("dorico_general", "doricoGeneral"), ("dorico_noroccidental", "doricoNO"),
                        ("doris_severior", "severior"), ("tesalio", "tesalio"), ("beocio", "beocio")]:
    filas = json.loads((DATOS / "anexos" / f"{archivo}.json").read_text(encoding="utf-8"))
    total += escribir(nombre, CAB + ["grupo"], [[ref(k), d, t, CERTEZA[c], g] for k, d, t, c, g in filas])
total += escribir("jonico_atico_koine", CAB + ["variedad"],
                  [[ref(k), d, t, CERTEZA[c], v] for k, d, t, c, v in constante("jonicoAtico.js", "ANEXO_JAK")])
total += escribir("otros_dialectos", CAB + ["dialecto"],
                  [[ref(x["id"]), x["date"], x["text"], CERTEZA[x["certeza"]], x["dialecto"]]
                   for x in constante("frontera.js", "INSCRIPCIONES_MIN")])
total += escribir("mezcla_dialectal", CAB + ["combinacion"],
                  [[ref(k), d, t, CERTEZA[c], m] for k, d, t, c, m in constante("frontera.js", "ANEXO_MEZ")])
nja = json.loads((DATOS / "anexoNoJonAt.json").read_text(encoding="utf-8"))
total += escribir("no_jonico_aticas", CAB + ["motivo_de_la_duda", "rasgos"],
                  [[ref(k), d, t, CERTEZA[c], m, r] for k, d, t, c, m, r in nja])
esperado = int(re.search(r"export const TOTAL_CORPUS = (\d+)", (DATOS / "corpus.js").read_text(encoding="utf-8")).group(1))
assert total == esperado, f"Las listas suman {total} y el corpus clasificado tiene {esperado}"

print(f"Total clasificado: {total} (= TOTAL_CORPUS)")
