// Anexos de inscripciones de los capítulos (jónico-ático, mezcla, minoritarios, no jónico-áticas): tarjeta con el texto
// de la edición y lista con buscador y filtro de certeza.
import { useEffect, useState } from "react";
import { C, PROSE, fade } from "../theme.js";
import { fmtDvc, renderDesc, renderGreekText } from "../lib/text.jsx";
import { Card } from "./ui.jsx";

const CERT_TXT = { s: ["segura", C.blue], d: ["dudosa", "#a0761c"], n: ["solo nombre o alfabeto", C.muted] };

// d = { id, date, text, certeza: "s" | "d" | "n", etq?, rasgos? }
export const InscripcionCard = ({ d, color }) => (
  <Card style={{ padding: "12px 16px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
      <span style={{ fontFamily: "var(--fh)", fontWeight: 700, fontSize: 13.5, color }}>
        {renderDesc(fmtDvc(d.id))} <span style={{ fontFamily: "var(--fb)", fontWeight: 400, fontSize: 11.5, color: C.muted }}>({d.date})</span>
      </span>
      <span style={{ fontSize: 10.5, padding: "1px 8px", borderRadius: 4, color: CERT_TXT[d.certeza][1],
        border: `1px solid ${fade(CERT_TXT[d.certeza][1], 0.3)}`, background: fade(CERT_TXT[d.certeza][1], 0.07) }}>
        {d.etq ? `${d.etq} · ` : ""}{CERT_TXT[d.certeza][0]}
      </span>
    </div>
    {d.rasgos && <div style={{ fontSize: 11.5, color: C.muted, marginTop: 4 }}>Rasgos visibles: {renderGreekText(d.rasgos)}</div>}
    <pre lang="grc" className="greek-inscription" style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.75, color: C.heading, whiteSpace: "pre-wrap" }}>
      {renderGreekText(d.text)}
    </pre>
  </Card>
);

const POR_PAGINA = 60;
const norm = (s) => String(s ?? "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

// rows: [clave, datación, texto, certeza, etiqueta, rasgos?]; o load: () => import(…) para cargarlas al abrir la pestaña.
export function Anexo({ rows: dadas = null, load = null, color, tint = color }) {
  const [cargadas, setCargadas] = useState(null);
  const [q, setQ] = useState("");
  const [cert, setCert] = useState("todas");
  const [n, setN] = useState(POR_PAGINA);
  useEffect(() => { if (load) load().then((m) => setCargadas(m.default)); }, [load]);
  const rows = dadas ?? cargadas;
  if (!rows) return <p style={{ ...PROSE, textAlign: "center" }}>Cargando…</p>;
  const nq = norm(q.trim());
  const f = rows.filter(([id, , text, c, etq, ras]) => (cert === "todas" || (cert === "s" ? c === "s" : c !== "s"))
    && (!nq || [fmtDvc(id), text, etq, ras].some((x) => norm(x).includes(nq))));
  const btn = (v, l) => (
    <button onClick={() => { setCert(v); setN(POR_PAGINA); }} aria-pressed={cert === v} style={{ padding: "4px 12px", borderRadius: 7, fontSize: 12,
      border: `1px solid ${cert === v ? fade(color, 0.4) : C.border}`, background: cert === v ? fade(tint, 0.16) : "transparent",
      color: cert === v ? color : C.muted, fontWeight: cert === v ? 600 : 400 }}>{l}</button>
  );
  return <>
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", marginBottom: 12 }}>
      <input value={q} onChange={(e) => { setQ(e.target.value); setN(POR_PAGINA); }} placeholder="Buscar por número, texto o clasificación (sin acentos)"
        aria-label="Buscar en el anexo" style={{ flex: "1 1 240px", padding: "6px 10px", borderRadius: 7, border: `1px solid ${C.border}`,
          background: "rgba(255,252,245,0.8)", fontFamily: "var(--fb)", fontSize: 13, color: C.text }} />
      {btn("todas", "Todas")}{btn("s", "Seguras")}{btn("d", "Dudosas y de solo nombre")}
      <span style={{ fontSize: 11.5, color: C.dim }}>{f.length} inscripciones</span>
    </div>
    <div style={{ display: "grid", gap: 8 }}>
      {f.slice(0, n).map(([id, date, text, c, etq, rasgos]) => (
        <InscripcionCard key={id} color={color} d={{ id, date, text, certeza: c, etq, rasgos }} />
      ))}
    </div>
    {n < f.length && (
      <div style={{ textAlign: "center", marginTop: 14 }}>
        <button onClick={() => setN(n + POR_PAGINA)} style={{ padding: "6px 16px", borderRadius: 8, border: `1px solid ${C.border}`,
          color, fontFamily: "var(--fh)", fontSize: 13 }}>Mostrar más ({f.length - n} restantes)</button>
      </div>
    )}
  </>;
}
