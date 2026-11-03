// Dialectos eólicos: el tesalio (Tesalio.jsx) y el beocio (Beocio.jsx), con un selector común como el del dórico.
import { useState } from "react";
import { C } from "../theme.js";
import { SectionNav } from "../components/ui.jsx";
import Tesalio from "./Tesalio.jsx";
import Beocio from "./Beocio.jsx";

const SUBSECCIONES = [
  { id: "tesalio", label: "El dialecto tesalio", color: C.tesalio },
  { id: "beocio", label: "El dialecto beocio", color: C.beocio },
];

export default function Eolicos({ switcher }) {
  // Los enlaces antiguos #beocio abren directamente el beocio.
  const [sub, setSub] = useState(window.location.hash === "#beocio" ? "beocio" : "tesalio");
  const subnav = <SectionNav label="Dialectos eólicos" items={SUBSECCIONES} value={sub} onChange={setSub} tint={C.tesalio} />;
  return sub === "beocio" ? <Beocio switcher={switcher} subnav={subnav} /> : <Tesalio switcher={switcher} subnav={subnav} />;
}
