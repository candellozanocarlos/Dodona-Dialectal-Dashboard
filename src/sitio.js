// Datos de la publicación: un solo lugar para la autoría, la cita y el DOI que muestran el pie y los metadatos.
export const AUTOR = "Carlos Candel Lozano";
export const INSTITUCION = "Universidad de Valladolid";
export const TESIS = "Las variedades dialectales de las laminillas oraculares de Dodona";
export const TITULO_SITIO = "Atlas dialectal de las laminillas oraculares de Dodona";
// Fecha de la compilación (vite.config.js), para que la versión citada no se quede atrás.
export const VERSION = new Intl.DateTimeFormat("es-ES", { month: "long", year: "numeric" }).format(new Date(__FECHA_COMPILACION__));
// DOI de Zenodo que agrupa todas las versiones y lleva siempre a la última.
export const DOI = "10.5281/zenodo.24130445";
export const CITA = { antes: "Candel Lozano, C. (2026). ", titulo: TITULO_SITIO, despues: " [Atlas interactivo]. Zenodo." };
export const LICENCIA = { nombre: "CC BY-NC-ND 4.0", url: "https://creativecommons.org/licenses/by-nc-nd/4.0/deed.es" };
