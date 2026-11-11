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
const POR_GRUPO = 12;
const norm = (s) => String(s ?? "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const REJILLA = { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: 8, alignItems: "start" };

// Barra de certeza de un grupo: seguras, dudosas y de solo nombre.
const BarraCerteza = ({ filas }) => {
  const n = { s: 0, d: 0, n: 0 };
  filas.forEach((r) => { n[r[3]] += 1; });
  return (
    <span style={{ display: "flex", width: 120, height: 8, borderRadius: 4, overflow: "hidden", background: "rgba(120,90,40,0.08)", flexShrink: 0 }}
      title={`${n.s} seguras, ${n.d} dudosas, ${n.n} de solo nombre o alfabeto`}>
      {["s", "d", "n"].map((k) => n[k] > 0 && <span key={k} style={{ width: `${n[k] / filas.length * 100}%`, background: CERT_TXT[k][1], opacity: 0.75 }} />)}
    </span>
  );
};

// Un grupo del anexo, desplegable, con sus tarjetas en rejilla.
function GrupoAnexo({ nombre, filas, color, abierto }) {
  const [n, setN] = useState(POR_GRUPO);
  return (
    <details open={abierto} className="seccion" style={{ background: "rgba(255,252,245,0.5)", border: `1px solid ${C.border}`,
      borderLeft: `3px solid ${color}`, borderRadius: "0 10px 10px 0", padding: "10px 14px" }}>
      <summary style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
        <span style={{ fontFamily: "var(--fh)", fontSize: 15, fontWeight: 700, color: C.heading }}>{renderGreekText(nombre)}</span>
        <span style={{ fontSize: 12, color, fontWeight: 700 }}>{filas.length}</span>
        <BarraCerteza filas={filas} />
      </summary>
      <div style={{ ...REJILLA, marginTop: 10 }}>
        {filas.slice(0, n).map(([id, date, text, c, etq, rasgos]) => (
          <InscripcionCard key={id} color={color} d={{ id, date, text, certeza: c, etq: norm(etq) === norm(nombre) ? null : etq, rasgos }} />
        ))}
      </div>
      {n < filas.length && (
        <div style={{ textAlign: "center", marginTop: 10 }}>
          <button onClick={() => setN(filas.length)} style={{ padding: "5px 14px", borderRadius: 8, border: `1px solid ${C.border}`,
            color, fontFamily: "var(--fh)", fontSize: 12.5 }}>Mostrar las {filas.length - n} restantes</button>
        </div>
      )}
    </details>
  );
}

// rows: [clave, datación, texto, certeza, etiqueta, rasgos?]; o load: () => import(…) para cargarlas al abrir la pestaña.
// grupo: (fila) → nombre del grupo; orden: nombres en el orden de presentación (los demás, detrás, por tamaño).
export function Anexo({ rows: dadas = null, load = null, color, tint = color, grupo = null, orden = [] }) {
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
  const grupos = {};
  if (grupo) f.forEach((r) => { (grupos[grupo(r)] ??= []).push(r); });
  const nombres = Object.keys(grupos).sort((a, b) => {
    const ia = orden.indexOf(a), ib = orden.indexOf(b);
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib) || grupos[b].length - grupos[a].length;
  });
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
    {grupo && <>
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", fontSize: 11, color: C.muted, margin: "-4px 0 10px" }}>
        {["s", "d", "n"].map((k) => (
          <span key={k} style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ width: 10, height: 8, borderRadius: 2, background: CERT_TXT[k][1], opacity: 0.75 }} />{CERT_TXT[k][0]}
          </span>
        ))}
      </div>
      <div style={{ display: "grid", gap: 8 }}>
        {nombres.map((g, i) => <GrupoAnexo key={`${g}-${nq}-${cert}`} nombre={g} filas={grupos[g]} color={color} abierto={nq !== "" || i === 0} />)}
      </div>
    </>}
    {!grupo && <div style={{ display: "grid", gap: 8 }}>
      {f.slice(0, n).map(([id, date, text, c, etq, rasgos]) => (
        <InscripcionCard key={id} color={color} d={{ id, date, text, certeza: c, etq, rasgos }} />
      ))}
    </div>}
    {!grupo && n < f.length && (
      <div style={{ textAlign: "center", marginTop: 14 }}>
        <button onClick={() => setN(n + POR_PAGINA)} style={{ padding: "6px 16px", borderRadius: 8, border: `1px solid ${C.border}`,
          color, fontFamily: "var(--fh)", fontSize: 13 }}>Mostrar más ({f.length - n} restantes)</button>
      </div>
    )}
  </>;
}
