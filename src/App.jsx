import { Component as ReactComponent, Suspense, lazy, useEffect, useState } from "react";
import { CHAPTERS } from "./chapters.js";
import { C } from "./theme.js";
import { ChapterSwitcher } from "./components/ui.jsx";
import { InscriptionLayer } from "./components/Inscriptions.jsx";
import { TITULO_SITIO } from "./sitio.js";

// La parte activa se guarda en la URL (#dorico, #eolicos…) para poder enlazarla; #tesalio y #beocio, de los enlaces
// anteriores, abren los dialectos eólicos, y #frontera, la mezcla. Sin hash (o con #inicio) se ve la pantalla de inicio.
const ALIAS = { tesalio: "eolicos", beocio: "eolicos", frontera: "mezcla" };
const INICIO = "inicio";
const Inicio = lazy(() => import("./chapters/Inicio.jsx"));
const fromHash = () => {
  const h = window.location.hash.slice(1);
  if (!h || h === INICIO) return INICIO;
  return CHAPTERS.find((c) => c.id === (ALIAS[h] ?? h))?.id ?? INICIO;
};

// Si no se puede cargar una parte (red, o una versión nueva desplegada con la página abierta), se ofrece recargar en lugar de una pantalla en blanco.
class ErrorDeCarga extends ReactComponent {
  state = { error: false };
  static getDerivedStateFromError() { return { error: true }; }
  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div role="alert" style={{ padding: 40, textAlign: "center", color: C.muted }}>
        <p>No se ha podido cargar esta sección.</p>
        <button onClick={() => window.location.reload()} style={{ marginTop: 12, padding: "8px 18px", border: `1px solid ${C.border}`, borderRadius: 8, color: C.terra }}>Recargar la página</button>
      </div>
    );
  }
}

export default function App() {
  const [current, setCurrent] = useState(fromHash);
  useEffect(() => {
    const onHash = () => { setCurrent(fromHash()); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const go = (id) => { window.location.hash = id; window.scrollTo(0, 0); };
  const parte = CHAPTERS.find((c) => c.id === current);
  const label = parte?.label;
  useEffect(() => { document.title = label ? `${label} · ${TITULO_SITIO}` : TITULO_SITIO; }, [label]);

  return (
    <>
      {/* El enrutado usa el hash: el salto al contenido enfoca <main> sin cambiar la URL. */}
      <a className="salto" href="#contenido" onClick={(e) => { e.preventDefault(); document.getElementById("contenido")?.focus(); }}>Saltar al contenido</a>
      <ErrorDeCarga key={current}>
        <Suspense fallback={<p role="status" style={{ padding: 40, textAlign: "center", color: C.muted }}>Cargando…</p>}>
          {parte
            ? <parte.Component switcher={<ChapterSwitcher chapters={CHAPTERS} current={current} onChange={go} onHome={() => go(INICIO)} />} />
            : <Inicio chapters={CHAPTERS} onEnter={go} />}
        </Suspense>
      </ErrorDeCarga>
      <InscriptionLayer />
    </>
  );
}
