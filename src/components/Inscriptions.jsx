import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { C } from "../theme.js";
import { getInscription, hasInscription, renderGreekText } from "../lib/text.jsx";

// Cita de una inscripción; si está en el índice, muestra su texto al pasar el cursor.
export const Ref = ({ src, id, style = {} }) => {
  const key = `${src} ${id}`;
  const linked = hasInscription(key);
  return (
    <span style={style} className={linked ? "insc-ref" : undefined} data-insc={linked ? key : undefined}
      tabIndex={linked ? 0 : undefined} role={linked ? "button" : undefined}>
      <i>I.Dodone {src}</i> {id}
    </span>
  );
};

export const RefList = ({ dvcs = [] }) => (
  <span>
    {dvcs.map((d, i) => (
      <span key={`${d.src}-${d.id}`}>
        {i > 0 && ", "}
        <Ref src={d.src} id={d.id} />
      </span>
    ))}
  </span>
);

// Tarjeta con el texto de la inscripción citada. Aparece al pasar el cursor (o al
// enfocar con el teclado) y queda fija, desplegada bajo la cita, al pulsar. Se
// cierra con otro clic, fuera de la tarjeta, con × o con Escape. Dentro de botones
// (fichas que ya despliegan su texto) solo actúa el cursor.
const InscriptionCard = ({ ikey, top, left, pinned, onClose }) => {
  const ins = getInscription(ikey);
  if (!ins) return null;
  const vw = window.innerWidth;
  const width = Math.min(460, vw - 16);
  const x = Math.max(8 + window.scrollX, Math.min(left, window.scrollX + vw - width - 8));
  return (
    <div className="insc-pop" role="dialog" aria-label={`Texto de I.Dodone ${ikey}`}
      style={{ position: "absolute", top, left: x, width, zIndex: 1000,
        background: "rgba(255,252,245,0.98)", border: `1px solid ${C.border}`,
        borderLeft: `3px solid ${pinned ? C.terra : C.gold}`, borderRadius: 10,
        boxShadow: "0 10px 30px rgba(60,40,10,0.16)", padding: "12px 16px 10px",
        fontFamily: "var(--fb)", color: C.text, animation: "inscFade 0.15s ease" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
        <div style={{ fontFamily: "var(--fh)", fontSize: 15, fontWeight: 700, color: C.heading }}>
          <i>I.Dodone {ins.src}</i> {ins.id}
          {ins.eq && <span style={{ fontFamily: "var(--fb)", fontWeight: 400, fontSize: 11.5, color: C.muted }}>
            {" "}(= <i>I.Dodone DVC</i> {ins.eq.slice(4)})</span>}
        </div>
        {pinned && <button onClick={onClose} aria-label="Cerrar" style={{ color: C.dim, fontSize: 18, lineHeight: 1, padding: "0 2px" }}>×</button>}
      </div>
      <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>
        {[ins.date, ins.dialect].filter(Boolean).join(" · ")}
      </div>
      <pre lang="grc" className="greek-inscription" style={{ margin: "8px 0 2px", fontSize: 15.5, lineHeight: 1.75,
        color: C.heading, whiteSpace: "pre-wrap", maxHeight: 280, overflowY: "auto" }}>
        {renderGreekText(ins.text)}
      </pre>
      {!pinned && <div style={{ fontSize: 10, color: C.dim, textTransform: "uppercase", letterSpacing: 1, marginTop: 4 }}>
        Pulsa la cita para fijar el texto
      </div>}
    </div>
  );
};

// Capa global (una por aplicación) que escucha las citas .insc-ref del documento.
export function InscriptionLayer() {
  const [hover, setHover] = useState(null);
  const [pinned, setPinned] = useState(null);
  const hideTimer = useRef(null);

  useEffect(() => {
    const refOf = (t) => (t && t.closest ? t.closest(".insc-ref") : null);
    const inPop = (t) => Boolean(t && t.closest && t.closest(".insc-pop"));
    const place = (el) => {
      const r = el.getBoundingClientRect();
      return { ikey: el.dataset.insc, top: r.bottom + window.scrollY + 6, left: r.left + window.scrollX };
    };
    const toggle = (el) => {
      const p = place(el);
      setPinned((cur) => (cur && cur.ikey === p.ikey ? null : p));
      setHover(null);
    };
    const onOver = (e) => {
      const el = refOf(e.target);
      if (el || inPop(e.target)) clearTimeout(hideTimer.current);
      if (el) setHover(place(el));
    };
    const onOut = (e) => {
      if (refOf(e.target) || inPop(e.target)) {
        clearTimeout(hideTimer.current);
        hideTimer.current = setTimeout(() => setHover(null), 180);
      }
    };
    const onClick = (e) => {
      const el = refOf(e.target);
      if (el && !el.closest("button")) { e.preventDefault(); toggle(el); return; }
      if (!inPop(e.target)) setPinned(null);
    };
    const onKey = (e) => {
      if (e.key === "Escape") { setPinned(null); setHover(null); return; }
      const el = refOf(e.target);
      if (el && !el.closest("button") && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); toggle(el); }
    };
    const onFocus = (e) => { const el = refOf(e.target); if (el) setHover(place(el)); };
    const onBlur = (e) => { if (refOf(e.target)) setHover(null); };
    const onScroll = () => setHover(null);
    const timer = hideTimer;
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    document.addEventListener("focusin", onFocus);
    document.addEventListener("focusout", onBlur);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer.current);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("focusin", onFocus);
      document.removeEventListener("focusout", onBlur);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const cards = [];
  if (pinned) cards.push({ ...pinned, pinned: true });
  if (hover && (!pinned || hover.ikey !== pinned.ikey)) cards.push({ ...hover, pinned: false });
  return createPortal(
    cards.map((c) => <InscriptionCard key={`${c.pinned}-${c.ikey}`} {...c} onClose={() => setPinned(null)} />),
    document.body,
  );
}
