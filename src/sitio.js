// Datos de la publicación: un solo lugar para la autoría, la cita y la URL que muestran el pie y los metadatos.
export const AUTOR = "Carlos Candel Lozano";
export const INSTITUCION = "Universidad de Valladolid";
export const TESIS = "Las variedades dialectales de las laminillas oraculares de Dodona";
export const TITULO_SITIO = "Atlas dialectal de las laminillas oraculares de Dodona";
export const URL_SITIO = "https://atlasdialectaldodona.netlify.app";
// Fecha de la compilación (vite.config.js), para que la versión citada no se quede atrás.
export const VERSION = new Intl.DateTimeFormat("es-ES", { month: "long", year: "numeric" }).format(new Date(__FECHA_COMPILACION__));
export const CITA = { antes: "Candel Lozano, C. (2026). ", titulo: TITULO_SITIO, despues: "." };
export const LICENCIA = { nombre: "CC BY-NC-ND 4.0", url: "https://creativecommons.org/licenses/by-nc-nd/4.0/deed.es" };
