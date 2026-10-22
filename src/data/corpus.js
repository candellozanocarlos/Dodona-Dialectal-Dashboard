import { DIALECT_COLORS } from "../theme.js";

// Inscripciones del corpus de Dodona con clasificación dialectal (DVC_v5_FINAL.xlsx, hoja Resúmenes, filas 145-148, 05-06/10/2026:
// Lhôte 140 pasa de NO JON-ÁT a Dórico por el futuro ἐσσε͂ται, Lhôte 74 entra como jónico dudoso, 3356B pasa del dórico a NO JON-ÁT
// y, al no contarse Corcira entre los dialectos noroccidentales (Méndez Dosuna 1985; 2018b), 1346A y Lhôte 96A vuelven a NO JON-ÁT;
// fila 146: 90 y 160A pasan de NO JON-ÁT a Doris mitior por el alfabeto ítalo-dórico; fila 147: 548B, de Doris mitior a Dórico NO, sin cambio de macrogrupo;
// fila 148: 2160 pasa de la mezcla dialectal al jónico-ático-koiné y 135A, de la mezcla a NO JON-ÁT, tras la autopsia;
// fila 149, 08/10/2026: cuestiones de criterio C1-C19, 1.437; fila 150, 09/10/2026: segunda tanda de la revisión de atribuciones,
// con las inscripciones sin clasificar que tienen un rasgo visible y la salida de las que solo lo tienen en lo restituido);
// fila 156, 21/10/2026: revisión del dórico general (2128B, 2286A, 2876B y 4138B pasan a Doris mitior; 2876B estaba sin clasificar).
export const TOTAL_CORPUS = 1512;

// Inscripciones de cada capítulo.
export const TOTAL_TES = 75; // fila 150: salen 58B, 233B, 345B, 3005A (08/10) y 1158B, 2726A (09/10)
export const TOTAL_BEOC = 17;
export const TOTAL_SEV = 16;
// Dórico general: Doris mitior 172 + Dórico Magna Grecia 2 (DIALECTO_SUB); dórico noroccidental: Dórico NO (fila 156 de Resúmenes).
export const TOTAL_DOR = 174;
export const TOTAL_DOR_NO = 71;

// Macrogrupos dialectales del corpus (suman TOTAL_CORPUS), de mayor a menor; DIALECTO_MACRO del Excel (21/10/2026, fila 156).
// Como en los gráficos de la tesis, el macrogrupo Dórico (245) se divide según DIALECTO_SUB en dórico general
// (Doris mitior 172 + Dórico Magna Grecia 2 = 174) y noroccidental (Dórico NO, 71).
// Fuente única de los gráficos «… en contexto» de todos los capítulos; cada macrogrupo lleva su color de DIALECT_COLORS.
export const MACROGRUPOS = [
  { name: "No jónico-ático (sin precisar)", value: 880, color: DIALECT_COLORS.noJonAt },
  { name: "Dórico general", value: TOTAL_DOR, color: DIALECT_COLORS.dorico },
  { name: "Dórico noroccidental", value: TOTAL_DOR_NO, color: DIALECT_COLORS.doricoNO },
  { name: "Jónico-ático-koiné", value: 164, color: DIALECT_COLORS.jonicoAtico },
  { name: "Mezcla dialectal", value: 96, color: DIALECT_COLORS.mezcla },
  { name: "Tesalio", value: TOTAL_TES, color: DIALECT_COLORS.tesalio },
  { name: "Beocio", value: TOTAL_BEOC, color: DIALECT_COLORS.beocio },
  { name: "Doris severior", value: TOTAL_SEV, color: DIALECT_COLORS.severior },
  { name: "Otros", value: 19, color: DIALECT_COLORS.otros },
].sort((a, b) => b.value - a.value);

// Porcentaje del corpus dialectal con coma decimal: pct(75) → "5,0".
export const pct = (n, total = TOTAL_CORPUS, dec = 1) => (n / total * 100).toFixed(dec).replace(".", ",");
