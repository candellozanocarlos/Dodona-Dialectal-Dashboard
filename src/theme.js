// Paleta pergamino común a todos los capítulos. Los colores de región y de
// dialecto se reutilizan en gráficos, mapas y etiquetas.
export const C = {
  bg: "#f5f0e8",
  card: "rgba(120,90,40,0.05)",
  border: "rgba(120,90,40,0.15)",
  gold: "#8b6914",           // acento general de la interfaz
  amber: "#a06a10",
  terra: "#a54030",
  green: "#2e7d46",
  blue: "#2a6a8e",
  // Colores de dialecto: los de los gráficos de la tesis (VIVO en graficos_dialecto_altair.py).
  tesalio: "#2e7d46",
  tesalioDeep: "#1f5a32",
  beocio: "#7b5ea7",
  beocioDeep: "#6a5b89",
  beocioVowel: "#7b5ea7",
  severior: "#7b2d26",
  severiorDeep: "#5e221d",
  muted: "#7a7060",
  text: "#3a352e",
  dim: "#9a9080",
  heading: "#2c2720",
  thHead: "#ede8dc",
  ink: "#2f4858",            // Dodona y flechas en los mapas
  milesio: "#d9ccad",        // alfabeto milesio: claro, para que resalten los epicóricos
  headerGrad1: "#f7f2ea",
  headerGrad2: "#f0ebe0",
  headerGrad3: "#ece6d8",
  // Tétradas tesalias: TETRADA_COLORES de los gráficos de la tesis (Ftiótide, sin inscripciones, conserva su ocre).
  regions: {
    pelasgiotis: "#4a6b85",
    histiaiotis: "#a65a48",
    thessaliotis: "#516f63",
    phthiotis: "#a06a10",
  },
};

// Color de cada dialecto o macrogrupo en los gráficos: los mismos que los gráficos de la
// tesis (MACRO_COLORES de PYTHON/SEABORN-ALTAIR/graficos_dialecto_altair.py), con el dórico
// dividido en general (doris mitior y Magna Grecia) y noroccidental. `ink` oscurece los
// colores claros cuando se usan como color de texto.
export const DIALECT_COLORS = {
  tesalio: C.tesalio,
  beocio: C.beocio,
  severior: C.severior,
  dorico: "#c0392b",
  doricoNO: "#e07a5f",
  jonicoAtico: C.blue,
  mezcla: "#c08a2e",
  noJonAt: "#b5a58a",
  otros: "#9a9080",
};
// Otras paletas de los gráficos de la tesis (graficos_dialecto_altair.py).
export const ORO = "#d9a441";   // lo dudoso o restituido
export const SIGLO_COLORS = {
  VI: "#4a4e7a", "VI-V": "#7b8fa8",   // s. VI y transición VI-V (SIGLO_COLORES de graficos_dialecto_altair.py, 21/10/2026)
  V: "#2a6a8e", "V-IV": "#3c9d8f", IV: "#d08c2a", "IV-III": "#b5523b", III: "#8a3a6a", "III-II": "#6a5b89", "Sin datar": "#b5a58a",
};
// Siglo de un periodo de las cronologías del dashboard (“1ª mit. s. V”, “Transición V–IV”, “ss. III–II”…).
export const sigloDe = (periodo) => {
  const p = String(periodo).replace("–", "-");
  const par = p.match(/(VI|IV|V|III|II)\s*-\s*(VI|IV|V|III|II)/);
  if (par) return `${par[1]}-${par[2]}`;
  const uno = p.match(/\b(VI|IV|V|III|II)\b/);
  return uno ? uno[1] : "Sin datar";
};
export const colorSiglo = (periodo) => SIGLO_COLORS[sigloDe(periodo)] || SIGLO_COLORS["Sin datar"];
export const ALFABETO_COLORS = {
  milesio: C.milesio, tesalio: C.tesalio, beocio: C.tesalio, dodona: "#2a6a8e", elide: "#a06a10", eubea: "#a54030",
  occidental: "#8a3a6a", magnaGrecia: "#a5482f", corintio: "#7b5ea7", otros: "#9a9080",
  epirota: "#4a5a8a", // como en graficos_articulo_iconic_altair.py; distinto del local de Dodona
};
// Temas de consulta (TEMA_COLORES de los gráficos de la tesis).
export const TEMA_COLORS = {
  "Religión": "#8a3a6a", "Amor / Familia / Matrimonio": "#c0587a", "Oficio / Comercio": "#a06a10", "Vida / Salud": "#2e7d46",
  "Dinero / Patrimonio": "#c9a227", "Viaje / Migración": "#2a6a8e", "Amigos / Enemigos": "#d17a3a", "Esclavitud": "#6e3a2c",
  "Justicia / Derecho": "#4a5a8a", "Honores / Deporte": "#3c9d8f", "Verdad / Conocimiento": "#7b5ea7", "Otros": "#9a9080",
  "Desconocido / Sin clasificar": "#cbbf9f",
};
// Notación de las vocales medias largas tesalias (rosco del capítulo): tesalia, mezcla, ática.
export const NOTACION_COLORS = { tesalia: "#00836A", mezcla: "#BFA761", atica: "#A10000" };
export const DIALECT_INK = { doricoNO: "#b4513a", mezcla: "#8a6118", noJonAt: "#7d6f55", otros: C.muted };

// Colores de las categorías de rasgos dialectales (todos los capítulos).
export const CAT_COLORS = { Fonología: C.green, Morfología: C.blue, Sintaxis: C.amber, Vocabulario: "#8a3a6a" };
export const CATS = Object.keys(CAT_COLORS);

// Párrafo de prosa dentro de tarjetas.
export const PROSE = { margin: 0, fontSize: 12.5, color: C.muted, lineHeight: 1.75, textAlign: "justify" };

// "#rrggbb" → rgba con la opacidad indicada.
export const fade = (hex, a) => {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
};
