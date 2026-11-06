// Comprobaciones antes de publicar (npm run check; con --dist, también el resultado de la compilación pública):
// totales que suman, citas que existen, textos visibles sin marcas de trabajo y ninguna fotografía de autopsia en dist.
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const datos = (f) => import(pathToFileURL(path.join(RAIZ, "src/data", f)).href);
const json = (f) => JSON.parse(readFileSync(path.join(RAIZ, "src/data", f), "utf8"));
const errores = [];
const igual = (etq, a, b) => { if (a !== b) errores.push(`${etq}: ${a} ≠ ${b}`); };
const suma = (xs, k = "n") => xs.reduce((a, x) => a + x[k], 0);

const c = await datos("corpus.js"), I = await datos("introduccion.js"), T = await datos("tesalio.js"), B = await datos("beocio.js"),
  S = await datos("dorico.js"), G = await datos("doricoGeneral.js"), N = await datos("doricoNO.js"), J = await datos("jonicoAtico.js"),
  F = await datos("frontera.js"), A = await datos("autopsias.js");
const INS = json("inscriptions.json"), NJA = json("anexoNoJonAt.json");

// ── Totales ──
igual("macrogrupos", suma(c.MACROGRUPOS, "value"), c.TOTAL_CORPUS);
igual("clasificadas de la introducción", I.CORPUS_INT[0].con, c.TOTAL_CORPUS);
igual("corpus completo", I.CORPUS_INT[0].con + I.CORPUS_INT[0].sin, I.TOTAL_INSCRIPCIONES);
igual("grupos con su certeza", I.GRUPOS_INT.reduce((a, g) => a + g.segura + g.dudosa + g.nombre, 0), c.TOTAL_CORPUS);
igual("cronología del corpus", suma(I.CHRONO_INT), I.TOTAL_INSCRIPCIONES);
for (const [etq, total, crono, temas] of [
  ["tesalio", c.TOTAL_TES, T.CHRONO_DETAIL_TES, T.THEMES_TES], ["beocio", c.TOTAL_BEOC, B.CHRONO_DETAIL_BEOC, B.THEMES_BEOC],
  ["Doris severior", c.TOTAL_SEV, S.CHRONO_DETAIL_SEV, S.THEMES_SEV], ["dórico general", c.TOTAL_DOR, G.CHRONO_DETAIL_DOR, G.THEMES_DOR],
  ["noroccidental", c.TOTAL_DOR_NO, N.CHRONO_DETAIL_NO, N.THEMES_NO], ["jónico-ático", J.TOTAL_JAK, J.CHRONO_DETAIL_JAK, J.THEMES_JAK],
  ["mezcla", F.TOTAL_MEZ, F.CHRONO_MEZ, F.THEMES_MEZ], ["minoritarios", F.TOTAL_MIN, F.CHRONO_MIN, F.THEMES_MIN],
  ["no jónico-áticas", F.TOTAL_NJA, F.CHRONO_NJA, F.THEMES_NJA],
]) {
  igual(`cronología: ${etq}`, suma(crono), total);
  igual(`temática: ${etq}`, suma(temas, "value"), total);
}
igual("anexo del jónico-ático", J.ANEXO_JAK.length, J.TOTAL_JAK);
igual("anexo de la mezcla", F.ANEXO_MEZ.length, F.TOTAL_MEZ);
igual("anexo de las no jónico-áticas", NJA.length, F.TOTAL_NJA);
igual("subgrupos del jónico-ático", suma(J.SUBGRUPOS_JAK, "value"), J.TOTAL_JAK);

// ── Citas: toda inscripción citada ha de estar en el índice ──
const clave = (d) => (d.startsWith("LOD ") ? `Lhôte ${d.slice(4)}` : `DVC ${d}`);
const cita = (d, donde) => { if (!INS[clave(d)]) errores.push(`cita sin texto en inscriptions.json: ${clave(d)} (${donde})`); };
for (const [etq, rasgos] of [["tesalio", T.RASGOS_TES], ["beocio", B.RASGOS_BEOC], ["dórico", G.RASGOS_DOR], ["noroccidental", N.RASGOS_NO], ["jónico-ático", J.RASGOS_JAK]]) {
  for (const r of rasgos) for (const d of r.dvcs) cita(d, etq);
}
const JSXS = [...readdirSync(path.join(RAIZ, "src/chapters")).map((f) => `src/chapters/${f}`), "src/components/ui.jsx"];
for (const f of JSXS) {
  const t = readFileSync(path.join(RAIZ, f), "utf8");
  for (const m of t.matchAll(/<Ref src="(DVC|Lhôte)" id="([^"]+)"/g)) if (!INS[`${m[1]} ${m[2]}`]) errores.push(`cita sin texto: ${m[1]} ${m[2]} (${f})`);
}

// ── Textos visibles ──
const PROHIBIDO = [
  [/\bExcel\b|\bResúmenes\b|tabla de rasgos|ALFABETO_GRUPO|DIALECTO_(?:MACRO|SUB|CERTEZA)|TEMA_MACRO/, "herramientas de trabajo"],
  [/\[(VERIFICAR|PENDIENTE|CITA PENDIENTE)/, "marca de trabajo"],
  [/\bsiglos? (?!XX)[IVX]|dodonense/, "“siglo” o “dodonense”"],
  [/ — /, "raya"],
  [/[«»]/, "comillas angulares"],
  [/[-]/, "griego en el Área de Uso Privado"],
];
const visita = (v, ruta) => {
  if (typeof v === "string") { for (const [re, etq] of PROHIBIDO) if (re.test(v)) errores.push(`${etq} en ${ruta}: ${v.match(re)[0]} · ${v.slice(Math.max(0, v.search(re) - 30), v.search(re) + 40)}`); return; }
  if (Array.isArray(v)) v.forEach((x, i) => visita(x, `${ruta}[${i}]`));
  else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) visita(x, `${ruta}.${k}`);
};
for (const [n, m] of Object.entries({ corpus: c, introduccion: I, tesalio: T, beocio: B, dorico: S, doricoGeneral: G, doricoNO: N, jonicoAtico: J, frontera: F, autopsias: A })) {
  for (const [k, v] of Object.entries(m)) visita(v, `${n}.${k}`);
}
visita(NJA, "anexoNoJonAt");
for (const f of JSXS) {
  // Texto visible de las vistas, sin los comentarios del código.
  const t = readFileSync(path.join(RAIZ, f), "utf8").replace(/\{\/\*[\s\S]*?\*\/\}|\/\/[^\n]*/g, "");
  visita(t, f);
}

// ── Autopsias: toda imagen citada existe; las cifras del anexo cuadran ──
for (const l of A.LAMINILLAS_AUTOPSIA) for (const p of l.facsimiles) if (!existsSync(path.join(RAIZ, "public", p))) errores.push(`facsímil inexistente: ${p}`);

// ── Compilación pública ──
if (process.argv.includes("--dist")) {
  const dist = path.join(RAIZ, "dist");
  const archivos = readdirSync(dist, { recursive: true, withFileTypes: true }).filter((e) => e.isFile()).map((e) => path.join(e.parentPath, e.name));
  for (const a of archivos) {
    if (/\.(jpe?g|png|tiff?|heic|webp)$/i.test(a) && !path.basename(a).startsWith("facsimil-")) errores.push(`fotografía en dist: ${path.relative(dist, a)}`);
    if (/autopsiasFotos/.test(path.basename(a))) errores.push(`rutas de fotografías en dist: ${path.basename(a)}`);
    if (/\.(js|css|html)$/.test(a) && /fonts\.(googleapis|gstatic)\.com/.test(readFileSync(a, "utf8"))) errores.push(`petición a Google Fonts en ${path.basename(a)}`);
  }
  console.log(`dist: ${archivos.length} archivos, ${(archivos.reduce((s, a) => s + readFileSync(a).length, 0) / 1e6).toFixed(1)} MB`);
}

if (errores.length) {
  console.error(`${errores.length} problemas:\n` + errores.map((e) => "  · " + e).join("\n"));
  process.exit(1);
}
console.log("Comprobaciones superadas.");
