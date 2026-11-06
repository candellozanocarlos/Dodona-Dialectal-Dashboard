"""Genera src/data/doricoNO.js (vista del dórico noroccidental) y completa src/data/inscriptions.json.

Fuentes:
  · DVC_v5_FINAL.xlsx, hoja Datos (inscripciones del capítulo: DIALECTO_SUB “Dórico NO”, 75).
  · PARTE II. LOS DIALECTOS DÓRICOS REVISADO <n>.docx (la de número más alto), cap. 5: los rasgos son los apartados de §4-§7
    con su texto y las inscripciones que citan.
  · PYTHON/SEABORN-ALTAIR/graficos_dorico_noroccidental_rasgos.py: tabla de rasgos (dno_9) y matrices (dno_10, dno_11).
  · Topónimos: las menciones de §2 del capítulo (las mismas cifras que TOPONIMOS["dno"] de graficos_dialecto_pandas.py).

Uso:  py scripts/datos_dorico_noroccidental.py
"""
import json
import os
import re
import sys
from pathlib import Path

from comun import CATS, DATOS, GRAF, Excel, clave_js, citas as _citas, etiqueta as _etiqueta, fecha, indices, parrafos as leer, parte2, rasgos_de, secciones as cortar

DOCX = parte2()
SALIDA = Path(os.environ.get("SALIDA_NO", DATOS / "doricoNO.js"))
INSC = Path(os.environ.get("INSC_NO", DATOS / "inscriptions.json"))

ex = Excel()
EX, LH2DVC, col = ex.filas, ex.lh2dvc, ex.col
CAP = {k: r for k, r in EX.items() if col(r, "DIALECTO_SUB") == "Dórico NO"}
assert len(CAP) == 75, len(CAP)   # 76 hasta el 26/10/2026 (424B pasa al ático, fila 166)


def etiqueta(r):
    return _etiqueta(col(r, "DIALECTO_MACRO"), col(r, "DIALECTO_SUB"))


# ── Texto del capítulo (§4-§7): el noroccidental es el segundo capítulo de la Parte II ──
pars = leer(DOCX)
i0 = indices(pars, "4. CARACTER", 1)
i1 = next(i for i, (s, t) in enumerate(pars) if i > i0 and s.startswith("Ttulo") and t.startswith("8. ANEXOS"))
CONCLUSION = next(t for s, t in pars[i0:i1] if t.startswith("En definitiva, el dórico noroccidental"))
secciones = cortar([(s, t) for s, t in pars if t != CONCLUSION], i0, i1 - 1)
RASGOS, CITADAS = rasgos_de(secciones, ex)
INTRO = {num: " ".join(texto) for num, tit, texto in secciones if num in ("4", "5")}

# ── Datos de §3 (Excel) ────────────────────────────────────────────────────────
sys.path.insert(0, str(GRAF))
from graficos_dialecto_pandas import ORDEN_CRONO, parse_fecha  # noqa: E402
import graficos_dorico_noroccidental_rasgos as R  # noqa: E402

crono = {}
for r in CAP.values():
    c = parse_fecha(col(r, "Date"))
    crono[c] = crono.get(c, 0) + 1
CHRONO = [{"period": c, "n": crono[c]} for c in ORDEN_CRONO if c in crono]
assert sum(c["n"] for c in CHRONO) == 75
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
assert cert == {"Seguro": 36, "Dudoso": 38, "Solo nombre o alfabeto": 1}, cert   # 26/10: 2364A y 3048A, seguras

# ── Tabla de rasgos y matrices (graficos_dorico_noroccidental_rasgos.py) ───────
TABLA = [{"sec": "§" + s, "rasgo": n.replace("\n", " "), "forma": f, "resto": re_.replace("\n", " "),
          "otros": o.replace("\n", " "), "seg": sg, "dud": du} for s, n, f, re_, o, sg, du in R.RASGOS]
DIAG_COLS = list(R.COLS)
DIAGNOSTICO = [{"sec": "§" + s, "rasgo": n.replace("\n", " "), "vals": v, "otros": o, "cat": "Fonología"} for s, n, v, o in R.MATRIZ_FON] + \
              [{"sec": "§" + s, "rasgo": n.replace("\n", " "), "vals": v, "otros": o, "cat": "Morfología"} for s, n, v, o in R.MATRIZ_MORF]

# ── La contracción de εο en ου (§4.1.2.3) por período ─────────────────────────
CONTRACCION = ["DVC 2242A", "DVC 1228A", "DVC 329A", "Lhôte 88", "DVC 2507", "DVC 334B", "DVC 3378B", "DVC 1958B", "DVC 2782A",
               "DVC 2364A", "DVC 143A", "DVC 2361B", "DVC 3132A", "DVC 2251B", "DVC 3479A", "DVC 1989A", "DVC 340A", "Lhôte 95B",
               "Lhôte 46Bb", "DVC 3220A"]
assert all(k in CAP for k in CONTRACCION), [k for k in CONTRACCION if k not in CAP]
PERIODO = {"5": "s. V", "5-4": "Transición V–IV", "4": "s. IV", "4-3": "Transición IV–III", "3": "s. III", "3-2": "ss. III–II"}
CONTR = []
for p in PERIODO.values():
    ks = [k for k in CONTRACCION if PERIODO[re.match(r"\d(?:-\d)?", str(col(CAP[k], "Date")).strip()).group()] == p]
    if ks:
        seg = [k for k in ks if col(CAP[k], "DIALECTO_CERTEZA") == "Seguro"]
        CONTR.append({"period": p, "seguras": len(seg), "dudosas": len(ks) - len(seg), "dvcs": [clave_js(k) for k in ks]})
assert sum(c["seguras"] + c["dudosas"] for c in CONTR) == 20

# ── Escritura: alfabeto corintio y alfabeto local (§2-§3) ──────────────────────
ESCRITURA = [  # clave, rasgo noroccidental que sostiene la adscripción, nota
    ("DVC 2242A", "μαντευσούμενος (εο > ου)", "El único texto del capítulo con el sistema corintio completo: épsilon corintia para /e/ y /ɛː/ y Ε para /eː/ (Méndez Dosuna 2018b: 43). La autopsia de 2025 confirmó la lectura."),
    ("DVC 329A", "πεδαϜοικο͂ν (εο > ου)", "Con πεδά, ajeno al Noroeste: Méndez Dosuna (2018b: 45 y n. 136) la atribuye con reservas a Corcira, y se mantiene en el capítulo solo por la contracción."),
    ("DVC 1228A", "[πρα]ξο̅͂μες (εο > ου)", "Lectura dudosa de Méndez Dosuna (2018b: 49), frente al [πρά]ξομες de la edición; el texto conserva el hiato en οἰκέο<ι>μές. Épsilon corintia solo para la /e/ breve."),
    ("DVC 1245A", "ἐν τὸ<ν> πρ̣[ότ]ερον χρό[νον] (ἐν con acusativo)", "Con valor temporal; el acusativo depende de la terminación de πρ̣[ότ]ερον."),
    ("DVC 2507", "ἐσσο̅͂<ν>ται (εο > ου)", "Si se acepta la corrección de Méndez Dosuna (2018b: 49) del ἔσσο<ν>ται de la edición; presenta también πὲ<ρ>."),
    ("DVC 3", "ἰ̣ς Ἐπίδαμνον (ἰς por εἰς)", "Consulta comercial de finales del s. VI a.C., en alfabeto corintio arcaico; Lhôte lee ἐ̣ς."),
    ("DVC 3179B", "σαμε͂ον (ηι sin abreviar)", "Solo si la Ε nota σαμῆον; la lectura no es segura."),
    ("DVC 3625A", "ἐ̣πιμελε͂σται (στ por σθ)", "El único ejemplo seguro de στ por σθ; la épsilon corintia alterna de forma vacilante con Ε."),
    ("Lhôte 88", "ἀποδάμο̅ν (εο > ου)", "Lhôte lee ἀποδάμον, con hiféresis; solo la épsilon corintia es característica. La autopsia de 2025 confirmó la lectura y el facsímil de Evangelidis."),
    ("DVC 1015A", "ἰς δία̣ιταν (ἰς por εἰς)", "Una de las dos del capítulo en el alfabeto local de Dodona, con 1368A."),
    ("DVC 1368A", "ἰς τὸ πρυτανῆον (ἰς por εἰς; ηι sin abreviar)", "La consulta de los διαιτοί, en el alfabeto local de Dodona según Lhôte (2006: 367), que lo tiene por garantía del origen epirota del consultante, y Antonello y Equestri (2018: 102)."),
]
assert {k for k, *_ in ESCRITURA} == set(alf["Corintio"]) | set(alf["Dodona"]), set(alf["Corintio"]) | set(alf["Dodona"])
ESCR = [{"ref": clave_js(k), "date": fecha(col(EX[k], "Date")), "alf": col(EX[k], "ALFABETO_GRUPO_v2"),
         "cert": col(EX[k], "DIALECTO_CERTEZA"), "rasgo": r_, "note": n} for k, r_, n in ESCRITURA]
CITADAS.update(k for k, *_ in ESCRITURA)

# ── Topónimos y etnónimos (§2 y nn. 16-18, 27, 37) ─────────────────────────────
E, T = "etnónimo", "topónimo"
LUGARES = [  # id, nombre, griego, lon, lat, rótulo (dx, dy en grados), ámbito, menciones [(clave, segura, forma, tipo)], nota
    ("dodoneos", "Dodoneos", "Δωδωναῖοι", 20.788, 39.546, (0.10, -0.10), "Epiro · comunidad del santuario",
     [("DVC 1089B", 1, "Δωδω[ναῖοι]", E), ("DVC 2425A", 1, "Δωδωναῖοι", E), ("DVC 295B", 1, "Δωδων̣[αῖοι]", E),
      ("DVC 2952B", 1, "Δωδω[ναῖοι]", E), ("DVC 2519B", 1, "Δ<ι>ωδωναῖοι", E), ("Lhôte 14", 1, "Δωδωναῖοι", E)],
     "La comunidad del santuario, que formaba una tribu, tesprota primero y molosa después (Lhôte 2013: 36-37), consulta en seis "
     "ocasiones. Solo dos de esas consultas (I.Dodone DVC 1089B y 2519B, con σαμῆον) se cuentan en este capítulo; las demás no "
     "presentan ningún rasgo propio del noroccidental y figuran en el dórico general."),
    ("molosos", "Molosos", "Μολοσσοί", 21.05, 39.78, (0.10, 0.05), "Epiro",
     [("DVC 4195A", 1, "Μολοσσ[οὶ]", E), ("Lhôte 9", 1, "μετὰ Μολοσσῶν", E), ("DVC 110A", 0, "Μολοσ[- - -]", E)],
     "Consultan en I.Dodone DVC 4195A (finales del s. V a.C.) y aparecen como aliados posibles en la consulta del koinon de "
     "I.Dodone Lhôte 9, en vísperas de la conquista romana."),
    ("caones", "Caones", "Χάονες", 20.08, 39.91, (-0.09, 0.07), "Epiro · Caonia",
     [("Lhôte 11", 1, "ἁ πόλις ἁ τῶν Χαόνων", E)],
     "Según Lhôte (2013: 68), ἁ πόλις ἁ τῶν Χαόνων designa el Estado de los caones y no la ciudad de Fénice. La consulta figura "
     "entre las mezclas dialectales."),
    ("atamanes", "Atamanes", "Ἀθαμᾶνες", 21.40, 39.48, (0.09, 0.0), "Epiro · Atamania",
     [("DVC 4016A", 1, "Ἀθ̣[α]μᾶ̣ν̣[ες]", E)],
     "Consulta pública de la primera mitad del s. IV a.C.; carece de rasgos que excluyan el eolio y figura entre las no jónico-áticas."),
    ("dexaireatas", "Dexaireatas", "Δεξαιρεᾶται", 20.40, 40.12, (0.09, 0.0), "Caonia (ubicación aproximada)",
     [("DVC 1070A", 1, "Δεξαιρ̣εᾶται", E)],
     "En CIOD, Lhôte identifica a los dexaireatas con los Δέξαροι caones de Esteban de Bizancio y los entiende como el objeto de "
     "la consulta de una tribu molosa, no como los consultantes."),
    ("fanoteos", "Fanoteos", "Φανοτεῖς", 20.42, 39.70, (-0.09, -0.05), "Epiro · Caonia",
     [("DVC 3822B", 1, "Φαν̣οτε̣ῖ[ς]", E)],
     "Los editores restituyen Φαν̣οτε̣ῖ[ς], una forma ática que Lhôte considera imposible; en CIOD se propone Φαν̣οτ̣ϝ̣[ες] o "
     "Φαν̣οτ̣ε̣[ς], el étnico de Fánote (cf. Lhôte 2013: 105-106)."),
    ("casope", "Casope", "Κασσώπη", 20.67, 39.15, (0.09, 0.0), "Epiro · Tesprotia",
     [("DVC 363A", 1, "Κασ(σ)ο̅π[αῖοι]", E)], "Consulta pública de la segunda mitad del s. V a.C."),
    ("biliones", "Bilíones", "Βυλλίονες", 19.73, 40.54, (0.09, 0.0), "Iliria meridional",
     [("DVC 2364A", 1, "Βυλλίονες", E)],
     "Pueblo ilirio helenizado del interior de Apolonia. Su consulta (I.Dodone DVC 2364A = I.Dodone Lhôte 7) se cuenta en el "
     "capítulo por la contracción de πραξοῦντι."),
    ("onquesmo", "Onquesmo", "Ὀγχεσμός", 20.00, 39.875, (-0.09, -0.06), "Epiro · Caonia",
     [("Lhôte 13", 1, "[----]εσμαῖοι", E)],
     "El puerto caonio de la actual Sarandë; la consulta pública (I.Dodone Lhôte 13) presenta ἐν con acusativo en ἐν τὰν αὐτῶ̣ν."),
    ("orico", "Órico", "Ὠρικός", 19.47, 40.37, (-0.09, 0.0), "Epiro septentrional",
     [("Lhôte 2", 1, "τοὶ Ὠρίκιοι", E), ("DVC 1380A", 1, "Ἐν ὀ̅ρικο͂ι", T)],
     "Los oricios consultan junto con los corcirenses en I.Dodone Lhôte 2; la consulta de I.Dodone DVC 1380A (= I.Dodone Lhôte 54), "
     "en alfabeto corintio, es la única en que Lhôte (2006: 365) admite que un epirota escribe en ese alfabeto."),
    ("atintanes", "Atintanes", "Ἀτιντᾶνες", 20.30, 40.38, (0.09, 0.03), "Epiro septentrional · Iliria",
     [("Lhôte 161", 1, "[Ἀ]τ̣ιντᾶνες", E)],
     "Su nombre es lo único que se lee en I.Dodone Lhôte 161 (s. IV a.C.); el sufijo -ᾶνες es el más característico de los étnicos "
     "epirotas (Filos 2018b: 296-297)."),
    ("arctanes", "Arctanes", "Ἀρκτᾶνες", None, None, (0, 0), "Epiro (sin localizar)",
     [("Lhôte 167", 1, "Ἀρκ̣τὰν", E)], "Étnico que lleva un consultante en I.Dodone Lhôte 167B (ss. IV-III a.C.)."),
    ("tirreo", "Tirreo", "Θύρρειον", 21.05, 38.83, (0.09, 0.02), "Acarnania",
     [("DVC 39A", 1, "πὸτ τὸ Θ̣ύρ(ρ)ε[ιον]", T), ("DVC 1729A", 1, "Θύρ(ρ)ειον", T), ("DVC 1523B", 0, "[- - -]Θύρ(ρ)ε[ιον]", T)],
     "Ciudad acarnania citada en I.Dodone DVC 39A y 1729A y, quizá, en 1523B."),
    ("alicia", "Alicia", "Ἀλυζία", 20.98, 38.68, (0.09, -0.02), "Acarnania",
     [("DVC 1861A", 1, "[ἐν] Ἀλυζείαι", T)],
     "Ciudad acarnania, como Ástaco (Tselikas 2018: 260), aunque Chapinal-Heras (2021: 181) la sitúa en Etolia."),
    ("astaco", "Ástaco", "Ἀστακός", 21.08, 38.53, (0.09, -0.03), "Acarnania", [("DVC 2086", 1, "[ἐν] Ἀστακῶ[ι]", T)],
     "Ciudad acarnania de la costa del mar Jónico."),
    ("accio", "Accio", "Ἄκτιον", 20.77, 38.95, (-0.09, -0.02), "Acarnania",
     [("DVC 1156B", 1, "ἐ̣[ν] Ἀκ̣τίωι", T), ("DVC 1930B", 1, "ἐ̣π' Ἄκτιο[ν]", T), ("Lhôte 113", 1, "ἀπ' Ἀκτίου", T),
      ("DVC 3473A", 0, "τὸν ἀπ' Ἀκτίου", T), ("DVC 3607B", 0, "[- - -]ΑΚΤ[- - -]", T)],
     "El lugar acarnanio más citado. Desde su puerto debía zarpar el κέλης de Dorilao con el σκύφος de Sátiro, según la lectura "
     "de Méndez Dosuna (2007e: 182-185) de I.Dodone Lhôte 113; las menciones de I.Dodone DVC 3473A y 3607B son dudosas."),
    ("acarnania", "Acarnania", "Ἀκαρνανία", 21.40, 38.95, (0.09, 0.03), "Acarnania (la región)",
     [("DVC 2014A", 1, "εἰς Ἀκαρνανίαν", T), ("DVC 2354A", 1, "εἰς Ἀκαρνανία[ν]", T)],
     "Destino de viaje en dos consultas, ambas con εἰς y acusativo, la construcción propia del Epiro y de Acarnania (Méndez "
     "Dosuna 2016: 135-136; 2018b: 47)."),
    ("elina", "Elina", "Ἐλίνα", 20.26, 39.45, (-0.09, 0.0), "Epiro · Tesprotia",
     [("Lhôte 46Bb", 1, "εἰς Ἐλίναν", T)],
     "En la alternativa entre Elina y Anactorio de I.Dodone Lhôte 46Bb, consulta del capítulo por la contracción de πωλοῦντες."),
    ("elea", "Elea", "Ἐλέα", 20.55, 39.33, (0.09, -0.04), "Epiro · Tesprotia",
     [("Lhôte 113", 0, "ἐν Ἐλέαι", T)],
     "La mención descansa en la corrección ἐν Ἐλέα<ν> de Méndez Dosuna (2007e: 182-185); Vecchio la sitúa en el valle del Cocito."),
    ("padea", "Padea", "Παδέα", None, None, (0, 0), "Ubicación desconocida",
     [("DVC 3032", 1, "ἐν Παδή̣αν", T)], "Destino de Menisco en I.Dodone DVC 3032, con ἐν y acusativo; se desconoce su ubicación."),
    # 26/10/2026, dudosas: Quemara (2012A) y Ofinio (82A)
    ("quemara", "Quemara", "Χεμάριοι", 19.745, 40.10, (-0.09, 0.0), "Epiro · Caonia (costa acroceraunia)",
     [("DVC 2012A", 0, "ἐγ Χε̅μαρίων", E)],
     "Étnico de la consulta sobre el establecimiento ἐγ Χεμαρίων (I.Dodone DVC 2012A = I.Dodone Lhôte 131). Dakaris, "
     "Christidis y Vokotopoulou (1993: 59-60) lo identifican con Quemara, en la costa de los montes Acroceraunios, entre "
     "Órico y Onquesmo; Lhôte (2006: 274-275) duda de que el lugar llevara ya ese nombre. Mención dudosa."),
    ("ofinio", "Ofinio", "Ὀφίνιον", None, None, (0, 0), "Ubicación desconocida",
     [("DVC 82A", 0, "τὸ ἐν Ὀφινίωι", T)],
     "Lugar del σαμῆον de I.Dodone DVC 82A. Los editores lo toman por un topónimo o un étnico no documentado; Lhôte, en "
     "CIOD, restituye Ὀφι[ο]νίωι, el santuario del héroe Ofión. Mención dudosa."),
    ("locride", "Lócride opuntia", "Ὀποῦς", 22.95, 38.65, (0.0, 0.10), "Grecia central",
     [("DVC 3917A", 1, "[ἐν Ὀπ]όεντι", T), ("DVC 4132A", 0, "[- - -]οντιοι", E)],
     "La excepción más notable en la Grecia central, cuyos consultantes acudían sobre todo a Delfos (Giannakis 2024a: 36 n. 2)."),
    # Melitea (2024A) va con el tesalio: Acaya Ftiótide, periecia de Tesalia (26 oct. 2026).
]
TOPONYMS = []
for id_, nom, gr, lon, lat, off, amb, ments, nota in LUGARES:
    ms = []
    for k, seg, f, tipo in ments:
        assert k in EX, k
        ms.append({"ref": clave_js(k if k != "Lhôte 167" else "Lhôte 167B"), "form": f, "date": fecha(col(EX[k], "Date")),
                   "type": tipo, "certain": bool(seg)})
        CITADAS.add(k)
    TOPONYMS.append({"id": id_, "name": nom, "greek": gr, "lon": lon, "lat": lat, "off": list(off), "ambito": amb,
                     "note": nota, "mentions": ms})
assert len(TOPONYMS) == 23 and sum(len(t["mentions"]) for t in TOPONYMS) == 39   # 26/10: + Quemara y Ofinio; − Melitea
assert sum(m["certain"] for t in TOPONYMS for m in t["mentions"]) == 31

# ── Textos de las inscripciones citadas ────────────────────────────────────────
CITADAS = {k for k in CITADAS if k in EX}
TEXTS = {clave_js(k): col(EX[k], "Text") for k in sorted(CITADAS) if col(EX[k], "Text")}
INSCRIPCIONES = [{"ref": clave_js(k), "date": fecha(col(r, "Date")), "tema": col(r, "TEMA_MACRO") or "Desconocido",
                  "alf": col(r, "ALFABETO_GRUPO_v2") or "Reformado / Desconocido", "cert": col(r, "DIALECTO_CERTEZA")}
                 for k, r in sorted(CAP.items(), key=lambda kv: (kv[0].startswith("Lhôte"), int(re.search(r"\d+", kv[0]).group())))]

# ── Escritura del módulo ──────────────────────────────────────────────────────
J = lambda x: json.dumps(x, ensure_ascii=False, indent=1)
partes = [
    "// Generado por scripts/datos_dorico_noroccidental.py: no editar a mano.",
    "// Fuentes: DVC_v5_FINAL.xlsx (hoja Datos; DIALECTO_SUB “Dórico NO”, 76 inscripciones, Resúmenes fila 165),",
    f"// {DOCX.stem} (cap. 5, §2-§7) y graficos_dorico_noroccidental_rasgos.py (tabla dno_9 y matrices dno_10-dno_11).",
    "",
    f"export const INTRO_FON_NO = {J(INTRO['4'])};",
    f"export const INTRO_MORF_NO = {J(INTRO['5'])};",
    f"export const CONCLUSION_NO = {J(CONCLUSION)};",
    "// Rasgos: cada apartado de §4-§7 con su texto y las inscripciones que cita (claves “123A” o “LOD 94”).",
    f"export const RASGOS_NO = {J(RASGOS)};",
    f"export const RASGO_TEXTS_NO = {J(TEXTS)};",
    "// Tabla de rasgos (dno_9): consultas del capítulo con el rasgo, de adscripción segura (seg) y dudosa (dud).",
    f"export const TABLA_RASGOS_NO = {J(TABLA)};",
    "// Matrices de valor diagnóstico (dno_10 y dno_11): 2 = lo excluye; 1 = en parte; 0 = rasgo compartido; -1 = no se trata.",
    f"export const DIAG_COLS_NO = {J(DIAG_COLS)};",
    f"export const DIAGNOSTICO_NO = {J(DIAGNOSTICO)};",
    "// §3: cronología (categorías de los gráficos de la tesis), temática (TEMA_MACRO), alfabeto (ALFABETO_GRUPO_v2) y certeza.",
    f"export const CHRONO_DETAIL_NO = {J(CHRONO)};",
    f"export const THEMES_NO = {J(THEMES)};",
    f"export const ALF_NO = {J({k: [clave_js(x) for x in v] for k, v in alf.items()})};",
    f"export const CERTEZA_NO = {J(cert)};",
    f"export const INSCRIPCIONES_NO = {J(INSCRIPCIONES)};",
    "// §4.1.2.3: las veinte inscripciones con la contracción de εο en ου, por período y certeza de la adscripción.",
    f"export const CONTRACCION_NO = {J(CONTR)};",
    "// §2-§3: las nueve inscripciones en alfabeto corintio y la del alfabeto local de Dodona, con el rasgo que las adscribe.",
    f"export const ESCRITURA_NO = {J(ESCR)};",
    "// §2: comunidades y lugares del Noroeste (22 nombres, 38 menciones, 32 seguras; TOPONIMOS[\"dno\"] de graficos_dialecto_pandas.py).",
    f"export const TOPONYMS_NO = {J(TOPONYMS)}.map((t) => ({{ ...t, seg: t.mentions.filter((m) => m.certain).length,",
    "  dud: t.mentions.filter((m) => !m.certain).length, total: t.mentions.length }));",
    "export const TOPONYM_MENTIONS_NO = TOPONYMS_NO.flatMap((t) => t.mentions.map((m) => ({ ...m, place: t.name })));",
    "export const TOPONYM_BARS_NO = TOPONYMS_NO.slice().sort((a, b) => b.total - a.total || b.seg - a.seg)",
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
if "Lhôte 167B" not in ins:
    r = EX["Lhôte 167"]
    ins["Lhôte 167B"] = [fecha(col(r, "Date")), str(col(r, "Text")).split("Face B", 1)[1].strip(), etiqueta(r)]
INSC.write_text(json.dumps(ins, ensure_ascii=False, indent=0), encoding="utf-8")
print(f"rasgos {len(RASGOS)} · textos {len(TEXTS)} · cronología {sum(c['n'] for c in CHRONO)} · temas {sum(t['value'] for t in THEMES)}"
      f" · topónimos {len(TOPONYMS)} · inscriptions.json {n0} → {len(ins)}")
for r in RASGOS:
    print(r["sec"], r["cat"][:4], r["name"], len(r["dvcs"]))
