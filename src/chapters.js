// Registro de capítulos. Para añadir uno nuevo:
//   1. crea src/data/<capitulo>.js con sus datos;
//   2. crea src/chapters/<Capitulo>.jsx (recibe `switcher` y usa ChapterLayout);
//   3. añade aquí su entrada. El orden es el del selector superior.
import { lazy } from "react";
import { C, DIALECT_COLORS } from "./theme.js";

export const CHAPTERS = [
  { id: "tesalio", label: "Tesalio", color: C.tesalio, Component: lazy(() => import("./chapters/Tesalio.jsx")) },
  { id: "beocio", label: "Beocio", color: C.beocio, Component: lazy(() => import("./chapters/Beocio.jsx")) },
  { id: "dorico", label: "Dórico", color: DIALECT_COLORS.dorico, Component: lazy(() => import("./chapters/Dorico.jsx")) },
  { id: "autopsias", label: "Autopsias", color: C.terra, Component: lazy(() => import("./chapters/Autopsias.jsx")) },
];
