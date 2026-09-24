import { C } from "../theme.js";

// Inscripciones del corpus de Dodona con clasificación dialectal.
export const TOTAL_CORPUS = 947;

// Inscripciones de cada capítulo.
export const TOTAL_TES = 86;
export const TOTAL_BEOC = 18;
export const TOTAL_SEV = 16;

// Macrogrupos dialectales del corpus (suman TOTAL_CORPUS), de mayor a menor.
// Fuente única de los gráficos «… en contexto» de todos los capítulos.
export const MACROGRUPOS = [
  { name: "No jonio-ático (sin precisar)", value: 428, color: "#b5a58a" },
  { name: "Dórico", value: 151, color: C.terra },
  { name: "Jónico-ático-koiné", value: 135, color: C.blue },
  { name: "Mezcla dialectal", value: 98, color: C.amber },
  { name: "Tesalio", value: TOTAL_TES, color: C.green },
  { name: "Beocio", value: TOTAL_BEOC, color: C.beocio },
  { name: "Doris severior", value: TOTAL_SEV, color: C.severior },
  { name: "Otros", value: 15, color: "#888888" },
].sort((a, b) => b.value - a.value);

// Porcentaje del corpus dialectal con coma decimal: pct(86) → "9,1".
export const pct = (n, total = TOTAL_CORPUS, dec = 1) => (n / total * 100).toFixed(dec).replace(".", ",");
