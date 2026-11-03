// Tabla de adscripción de un capítulo (data/adscripcion.js): bases, certeza y consultas excluidas.
import { C, ORO, fade } from "../theme.js";
import { asRef, hasInscription, renderDesc } from "../lib/text.jsx";
import { Table } from "./ui.jsx";

// "I.Dodone DVC 353B, 3690B; I.Dodone Lhôte 109", con cada número enlazado si está en el índice.
const Lista = ({ dvcs }) => {
  const grupos = ["DVC", "Lhôte"].map((src) => [src, dvcs.map(asRef).filter((r) => r.src === src)]).filter(([, l]) => l.length);
  return grupos.map(([src, l], g) => (
    <span key={src}>
      {g > 0 && "; "}<i>I.Dodone {src}</i>{" "}
      {l.map((r, i) => {
        const key = `${r.src} ${r.id}`, linked = hasInscription(key);
        return <span key={r.id}>{i > 0 && ", "}<span className={linked ? "insc-ref" : undefined} data-insc={linked ? key : undefined}
          tabIndex={linked ? 0 : undefined} role={linked ? "button" : undefined}>{r.id}</span></span>;
      })}
    </span>
  ));
};

const fila = (r, color, max) => {
  const bg = r.tipo === "seg" ? fade(color, 0.2 + 0.7 * r.n / max) : r.tipo === "exc" ? "#d9ccad" : fade(ORO, 0.3 + 0.5 * Math.min(1, r.n / 15));
  return [
    <span style={{ color: C.heading }}>{renderDesc(r.base)}</span>,
    r.dvcs ? <Lista dvcs={r.dvcs} /> : <span style={{ color: C.muted, fontStyle: "italic" }}>{r.nota}</span>,
    <span style={{ color: C.muted }}>{renderDesc(r.clas)}</span>,
    <span style={{ display: "inline-block", minWidth: 44, padding: "2px 8px", borderRadius: 5, textAlign: "center", fontWeight: 700,
      background: bg, color: r.tipo === "seg" && r.n / max > 0.45 ? "#fff" : C.heading }}>{r.n}</span>,
  ];
};

export const AdscripcionTable = ({ data, color }) => {
  const dentro = data.filter((r) => r.tipo !== "exc"), fuera = data.filter((r) => r.tipo === "exc");
  const max = Math.max(...dentro.map((r) => r.n));
  const head = ["Base de la adscripción", "Inscripciones", "Clasificación", "Consultas"];
  return <>
    <Table color={color} rowHeader={0} valign="middle" head={head} rows={dentro.map((r) => fila(r, color, max))} />
    {fuera.length > 0 && <>
      <div style={{ margin: "14px 0 6px", fontFamily: "var(--fh)", fontStyle: "italic", fontWeight: 600, fontSize: 13, color }}>Inscripciones excluidas del capítulo</div>
      <Table color={color} rowHeader={0} valign="middle" head={["Motivo", "Inscripciones", "Se cuentan en", "Consultas"]} rows={fuera.map((r) => fila(r, color, max))} />
    </>}
  </>;
};
