import { Suspense, useEffect, useState } from "react";
import { CHAPTERS } from "./chapters.js";
import { C } from "./theme.js";
import { ChapterSwitcher } from "./components/ui.jsx";
import { InscriptionLayer } from "./components/Inscriptions.jsx";

// El capítulo activo se guarda en la URL (#tesalio, #beocio…) para poder enlazarlo.
const fromHash = () => CHAPTERS.find((c) => c.id === window.location.hash.slice(1))?.id ?? CHAPTERS[0].id;

export default function App() {
  const [current, setCurrent] = useState(fromHash);
  useEffect(() => {
    const onHash = () => setCurrent(fromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const go = (id) => { window.location.hash = id; window.scrollTo(0, 0); };
  const { Component } = CHAPTERS.find((c) => c.id === current);

  return (
    <>
      <Suspense fallback={<p style={{ padding: 40, textAlign: "center", color: C.muted }}>Cargando…</p>}>
        <Component key={current} switcher={<ChapterSwitcher chapters={CHAPTERS} current={current} onChange={go} />} />
      </Suspense>
      <InscriptionLayer />
    </>
  );
}
