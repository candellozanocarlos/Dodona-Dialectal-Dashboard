// Registro de capítulos. Para añadir uno nuevo:
//   1. crea src/data/<capitulo>.js con sus datos;
//   2. crea src/chapters/<Capitulo>.jsx (recibe `switcher` y usa ChapterLayout);
//   3. añade aquí su entrada. El orden es el del selector superior.
import { lazy } from "react";
import { C, DIALECT_COLORS, DIALECT_INK } from "./theme.js";

// Etiquetas y orden de las partes de la tesis (CONTENIDO_v13), sin el número de parte.
export const CHAPTERS = [
  { id: "introduccion", label: "Introducción", color: C.blue, Component: lazy(() => import("./chapters/Introduccion.jsx")) },
  { id: "dorico", label: "Dialectos dóricos", color: DIALECT_COLORS.dorico, Component: lazy(() => import("./chapters/Dorico.jsx")) },
  { id: "eolicos", label: "Dialectos eólicos", color: C.tesalio, Component: lazy(() => import("./chapters/Eolicos.jsx")) },
  { id: "jonico-atico", label: "Jónico-ático y koiné", color: DIALECT_COLORS.jonicoAtico, Component: lazy(() => import("./chapters/JonicoAtico.jsx")) },
  { id: "mezcla", label: "Mezcla dialectal", color: DIALECT_COLORS.mezcla,
    Component: lazy(() => import("./chapters/Frontera.jsx").then((m) => ({ default: m.Mezcla }))) },
  { id: "minoritarios", label: "Minoritarios y no jónico-áticas", color: DIALECT_INK.noJonAt, Component: lazy(() => import("./chapters/Frontera.jsx")) },
  { id: "autopsias", label: "Autopsias", color: C.terra, Component: lazy(() => import("./chapters/Autopsias.jsx")) },
];
