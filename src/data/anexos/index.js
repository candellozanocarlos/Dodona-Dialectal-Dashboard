// Inscripciones de los capítulos sin anexo propio en sus datos (scripts/datos_anexos.py), que se cargan al abrir la pestaña.
export const ANEXOS = {
  tesalio: () => import("./tesalio.json"),
  beocio: () => import("./beocio.json"),
  doricoGeneral: () => import("./doricoGeneral.json"),
  doricoNO: () => import("./doricoNO.json"),
  severior: () => import("./severior.json"),
};
