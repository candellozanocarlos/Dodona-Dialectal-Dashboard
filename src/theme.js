// Paleta pergamino común a todos los capítulos. Los colores de región y de
// dialecto se reutilizan en gráficos, mapas y etiquetas.
export const C = {
  bg: "#f5f0e8",
  card: "rgba(120,90,40,0.05)",
  border: "rgba(120,90,40,0.15)",
  gold: "#8b6914",
  amber: "#a06a10",
  terra: "#a54030",
  green: "#2e7d46",
  blue: "#2a6a8e",
  beocio: "#8a6fa8",
  beocioDeep: "#6a5b89",
  beocioVowel: "#7b5ea7",
  severior: "#8a4a38",
  severiorDeep: "#6e3a2c",
  muted: "#7a7060",
  text: "#3a352e",
  dim: "#9a9080",
  heading: "#2c2720",
  thHead: "#ede8dc",
  ink: "#2f4858",            // Dodona y flechas en los mapas
  headerGrad1: "#f7f2ea",
  headerGrad2: "#f0ebe0",
  headerGrad3: "#ece6d8",
  regions: {
    pelasgiotis: "#2a6a8e",
    histiaiotis: "#a54030",
    thessaliotis: "#2e7d46",
    phthiotis: "#a06a10",
  },
};

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
