import { DIALECT_COLORS } from "../theme.js";

// Inscripciones del corpus de Dodona con clasificación dialectal (DVC_v5_FINAL.xlsx, hoja Resúmenes, filas 145-148, 05-06/10/2026:
// Lhôte 140 pasa de NO JON-ÁT a Dórico por el futuro ἐσσε͂ται, Lhôte 74 entra como jónico dudoso, 3356B pasa del dórico a NO JON-ÁT
// y, al no contarse Corcira entre los dialectos noroccidentales (Méndez Dosuna 1985; 2018b), 1346A y Lhôte 96A vuelven a NO JON-ÁT;
// fila 146: 90 y 160A pasan de NO JON-ÁT a Doris mitior por el alfabeto ítalo-dórico; fila 147: 548B, de Doris mitior a Dórico NO, sin cambio de macrogrupo;
// fila 148: 2160 pasa de la mezcla dialectal al jónico-ático-koiné y 135A, de la mezcla a NO JON-ÁT, tras la autopsia;
// fila 149, 08/10/2026: cuestiones de criterio C1-C19, 1.437; fila 150, 09/10/2026: segunda tanda de la revisión de atribuciones,
// con las inscripciones sin clasificar que tienen un rasgo visible y la salida de las que solo lo tienen en lo restituido);
// fila 156, 21/10/2026: revisión del dórico general (2128B, 2286A, 2876B y 4138B pasan a Doris mitior; 2876B estaba sin clasificar).
// fila 157, 22/10/2026: 3641A pasa de sin clasificar a Doris mitior (dudosa) por el alfabeto corintio y κα̣.
// filas 158-165, 22-25/10/2026: decisiones sobre las cuestiones pendientes y revisión de atribuciones (detalle en
// Resúmenes); fila 165, 25/10/2026: 3116A pasa al noroccidental y se suprime la fila de Lhôte 74, que es DVC 1155B;
// fila 166, 26/10/2026: 424B pasa del noroccidental al ático (dudosa), sin cambio del total;
// fila 171, 27/10/2026: 3641A pasa de dudosa a segura (Doris mitior), sin cambio de grupos ni de totales;
// filas 175-176, 27-28/10/2026: revisión del jónico-ático y la koiné (Parte IV): 1006B a NO JON-ÁT; 2506, 3142A, 4054B,
// 2383A y 3033A a la mezcla; 4162B al tesalio (doble con el jónico): jónico-ático-koiné 144, mezcla 98, tesalio 80.
// Filas 177-181 (28/10-1/11/2026): tercera tanda del jónico-ático, 1417B dudosa, 262B a NO JON-ÁT (1.456; JAK 136).
// Filas 182-184, 2/11/2026: dialectos minoritarios (cap. 14): 382A, 2357B, 2374A, 2670B, 2830B, 172A y 989A a NO JON-ÁT;
// 968A, 2821A y 2822A al acayo; 1993A al dórico general; 2217A al jónico; 3977A sin clasificar (Otros 17 → 11).
// Filas 185-186, 3/11/2026: revisión de las no jónico-áticas dudosas (cap. 15): 109A al acayo (solo alfabeto), 257A y
// 574A al dórico general, 304B sin clasificar (NO JON-ÁT 848 → 844; Otros 12; 1.455).
export const TOTAL_CORPUS = 1455;

// Inscripciones de cada capítulo.
export const TOTAL_TES = 80; // 75 hasta el 23/10; entran como dudosas 1158B (23/10) y 1352A, 3034B y 995A (24/10, fila 164); 4162B, doble con el jónico (28/10, fila 176)
export const TOTAL_BEOC = 17;
export const TOTAL_SEV = 16;
// Dórico general: Doris mitior 171 + Dórico Magna Grecia 2 (DIALECTO_SUB); dórico noroccidental: Dórico NO (fila 166 de Resúmenes).
// Fila 173, 27/10/2026: 1673B, 3612B y 3871 pasan de Doris mitior a NO JON-ÁT (dórico general 176 → 173; no jónico-áticas 839 → 842).
// Fila 182, 2/11/2026: entra 1993A (-μες; antes eleo): Doris mitior 172 + Dórico Magna Grecia 2 = 174.
// Fila 186, 3/11/2026: entran 257A y 574A: Doris mitior 174 + Dórico Magna Grecia 2 = 176.
export const TOTAL_DOR = 176;
export const TOTAL_DOR_NO = 75;

// Macrogrupos dialectales del corpus (suman TOTAL_CORPUS), de mayor a menor; DIALECTO_MACRO del Excel (3/11/2026, fila 186).
// Como en los gráficos de la tesis, el macrogrupo Dórico (251) se divide según DIALECTO_SUB en dórico general
// (Doris mitior 174 + Dórico Magna Grecia 2 = 176) y noroccidental (Dórico NO, 75).
// Fuente única de los gráficos “… en contexto” de todos los capítulos; cada macrogrupo lleva su color de DIALECT_COLORS.
export const MACROGRUPOS = [
  { name: "No jónico-ático (sin precisar)", value: 844, color: DIALECT_COLORS.noJonAt },
  { name: "Dórico general", value: TOTAL_DOR, color: DIALECT_COLORS.dorico },
  { name: "Dórico noroccidental", value: TOTAL_DOR_NO, color: DIALECT_COLORS.doricoNO },
  { name: "Jónico-ático-koiné", value: 137, color: DIALECT_COLORS.jonicoAtico },
  { name: "Mezcla dialectal", value: 98, color: DIALECT_COLORS.mezcla },
  { name: "Tesalio", value: TOTAL_TES, color: DIALECT_COLORS.tesalio },
  { name: "Beocio", value: TOTAL_BEOC, color: DIALECT_COLORS.beocio },
  { name: "Doris severior", value: TOTAL_SEV, color: DIALECT_COLORS.severior },
  { name: "Otros", value: 12, color: DIALECT_COLORS.otros },
].sort((a, b) => b.value - a.value);

// Porcentaje del corpus dialectal con coma decimal: pct(75) → "5,0".
export const pct = (n, total = TOTAL_CORPUS, dec = 1) => (n / total * 100).toFixed(dec).replace(".", ",");
// Cifra con el punto de los miles, como en la tesis: miles(1463) → "1.463".
export const miles = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
