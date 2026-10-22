// Piezas de interfaz compartidas por todos los capítulos.
import { useState } from "react";
import { C, CAT_COLORS, CATS, PROSE, fade } from "../theme.js";
import { asRef, fmtDvc, renderDesc, renderGreekText } from "../lib/text.jsx";
import { DvcLabel, Ref } from "./Inscriptions.jsx";

export const Stat = ({ label, value, sub = "", accent = C.gold, noCase = false }) => (
  <div style={{ background: "linear-gradient(180deg, rgba(255,252,245,0.85) 0%, rgba(255,252,245,0.55) 100%)",
    border: `1px solid ${C.border}`, borderTop: `3px solid ${accent}`, borderRadius: "0 0 10px 10px",
    padding: "16px 14px", textAlign: "center", flex: "1 1 0", minWidth: 120,
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
    <div style={{ fontFamily: "var(--fh)", fontSize: String(value).length > 24 ? 14.5 : String(value).length > 10 ? 19 : 26,
      fontWeight: 700, color: accent, lineHeight: 1.2, overflowWrap: "break-word" }}>{value}</div>
    <div style={{ fontSize: 9.5, color: C.muted, marginTop: 5, textTransform: noCase ? "none" : "uppercase",
      letterSpacing: noCase ? 0.3 : 1.4 }}>{label}</div>
    {sub && <div style={{ fontSize: 10.5, color: C.dim, marginTop: 3 }}>{typeof sub === "string" ? renderDesc(sub) : sub}</div>}
  </div>
);

export const Stats = ({ children, style = {} }) => (
  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 14, ...style }}>{children}</div>
);

export const Sec = ({ title, sub = "", children = null, note = "" }) => (
  <section style={{ marginBottom: 48 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 2 }}>
      <div style={{ width: 3, height: 22, borderRadius: 2, background: C.gold, flexShrink: 0, opacity: 0.5 }} />
      <h2 style={{ fontSize: 21, fontWeight: 600 }}>{title}</h2>
    </div>
    {sub && <p style={{ fontSize: 12, color: C.muted, margin: "0 0 14px", fontStyle: "italic", paddingLeft: 13 }}>
      {typeof sub === "string" ? renderDesc(sub) : sub}</p>}
    {children}
    {note && <Card style={{ marginTop: 14 }}><p style={{ ...PROSE, color: C.text }}>{renderDesc(note)}</p></Card>}
  </section>
);

// Tarjeta de pergamino; con `accent`, lleva un filete de color a la izquierda.
export const Card = ({ children, accent = null, style = {} }) => (
  <div style={{ background: "rgba(255,252,245,0.6)", border: `1px solid ${C.border}`,
    borderLeft: accent ? `3px solid ${accent}` : `1px solid ${C.border}`,
    borderRadius: accent ? "0 10px 10px 0" : 10, padding: "14px 18px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.03)", ...style }}>
    {children}
  </div>
);

export const Tag = ({ children, active = false, onClick, color = C.gold }) => (
  <button onClick={onClick} aria-pressed={active} style={{
    background: active ? fade(color, 0.13) : "transparent",
    border: `1px solid ${active ? fade(color, 0.3) : "transparent"}`,
    borderRadius: 8, padding: "9px 16px", color: active ? color : C.muted,
    fontFamily: "var(--fh)", fontSize: 13.5, fontWeight: active ? 700 : 400,
    boxShadow: active ? `0 2px 8px ${fade(color, 0.1)}` : "none",
    transform: active ? "translateY(-1px)" : "none",
  }}>{children}</button>
);

// Desplegable con la flecha en el color del capítulo.
export const Select = ({ value, onChange, color = C.gold, label, children }) => (
  <select value={value} aria-label={label} onChange={(e) => onChange(e.target.value)}
    style={{ width: "100%", padding: "11px 36px 11px 14px", borderRadius: 8, border: `1px solid ${C.border}`,
      background: "rgba(255,252,245,0.8)", fontFamily: "var(--fb)", fontSize: 13.5, color: C.text,
      cursor: "pointer", appearance: "none",
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12'%3E%3Cpath d='M2 4l4 4 4-4' fill='none' stroke='%23${color.slice(1)}' stroke-width='1.5'/%3E%3C/svg%3E")`,
      backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}>
    {children}
  </select>
);

// Tabla sencilla: cabeceras + filas de celdas (texto o nodos).
export const Table = ({ head, rows, color = C.gold, sticky = false, maxHeight = null, fontSize = 12.5 }) => (
  <div style={{ overflowX: "auto", maxHeight, overflowY: maxHeight ? "auto" : undefined }}>
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize }}>
      <thead><tr>
        {head.map((h) => (
          <th key={h} style={{ padding: "8px 10px", textAlign: "left", color, fontFamily: "var(--fh)", fontWeight: 600,
            fontSize: 11.5, whiteSpace: "nowrap", background: C.thHead, boxShadow: `inset 0 -2px 0 ${C.border}`,
            position: sticky ? "sticky" : undefined, top: 0, zIndex: 2 }}>{h}</th>
        ))}
      </tr></thead>
      <tbody>{rows.map((cells, i) => (
        <tr key={i} style={{ borderBottom: "1px solid rgba(120,90,40,0.08)", background: i % 2 === 0 ? "rgba(255,252,245,0.4)" : "transparent" }}>
          {cells.map((c, j) => <td key={j} style={{ padding: "7px 10px", verticalAlign: "top" }}>{c}</td>)}
        </tr>
      ))}</tbody>
    </table>
  </div>
);

// Fuentes literarias: [{ author, type, desc }].
export const SourceList = ({ sources, color, conclusion = "" }) => (
  <>
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {sources.map((s) => (
        <Card key={s.author} accent={color}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
            <span style={{ fontSize: 13, fontWeight: 700, color, fontFamily: "var(--fh)" }}>{renderGreekText(s.author)}</span>
            <span style={{ fontSize: 11, color: C.dim, fontStyle: "italic" }}>{s.type}</span>
          </div>
          <p style={PROSE}>{renderDesc(s.desc)}</p>
        </Card>
      ))}
    </div>
    {conclusion && <Card style={{ marginTop: 12 }}><p style={{ ...PROSE, fontSize: 12, fontStyle: "italic" }}>{conclusion}</p></Card>}
  </>
);

// Vínculos políticos: [{ event, date, agent, desc }].
export const EventTable = ({ rows, color }) => (
  <Table color={color} fontSize={13} head={["Evento", "Fecha", "Agentes", "Descripción"]}
    rows={rows.map((r) => [
      <span style={{ fontWeight: 500 }}>{renderGreekText(r.event)}</span>,
      <span style={{ color: C.dim, fontSize: 12, whiteSpace: "nowrap" }}>{r.date}</span>,
      <span style={{ color, fontSize: 12.5 }}>{renderGreekText(r.agent)}</span>,
      <span style={{ color: C.muted, fontSize: 12, lineHeight: 1.6 }}>{renderDesc(r.desc)}</span>,
    ])} />
);

// Texto íntegro de una inscripción.
export const GreekBlock = ({ title, children, size = 15 }) => (
  <div style={{ marginTop: 10, background: "rgba(60,50,30,0.04)", border: `1px solid ${C.border}`, borderRadius: 8, padding: "14px 18px" }}>
    {title && <div style={{ fontSize: 10, color: C.dim, marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>{title}</div>}
    <pre lang="grc" className="greek-inscription" style={{ margin: 0, fontSize: size, lineHeight: 1.85, color: C.heading, whiteSpace: "pre-wrap" }}>
      {renderGreekText(children)}
    </pre>
  </div>
);

// ── Rasgos dialectales ───────────────────────────────────────────
// rasgos: [{ id, cat, name, short, desc, dvcs: ["123A", "LOD 8B", …] }]; texts: { dvc: texto }.
// minAcum: rasgos que ha de reunir una inscripción para figurar en «Inscripciones con más rasgos acumulados».
export function RasgoExplorer({ rasgos, texts, color, minAcum = 2 }) {
  const [sel, setSel] = useState(null);
  const [clicked, setClicked] = useState(null);
  const perDvc = {};
  rasgos.forEach((r) => r.dvcs.forEach((d) => { (perDvc[d] = perDvc[d] || []).push(r.short); }));
  const top = Object.entries(perDvc).filter(([, rs]) => rs.length >= minAcum).sort((a, b) => b[1].length - a[1].length);
  const maxN = Math.max(...rasgos.map((r) => r.dvcs.length));
  const r = rasgos.find((x) => x.id === sel);
  const catColor = r ? CAT_COLORS[r.cat] : null;

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Select value={sel ?? ""} color={color} label="Rasgo dialectal"
          onChange={(v) => { setSel(v ? Number(v) : null); setClicked(null); }}>
          <option value="">— Selecciona un rasgo dialectal —</option>
          {CATS.map((cat) => (
            <optgroup key={cat} label={cat}>
              {rasgos.filter((x) => x.cat === cat).map((x) => <option key={x.id} value={x.id}>{x.id}. {x.name} ({x.dvcs.length})</option>)}
            </optgroup>
          ))}
        </Select>
      </div>

      {r && (
        <Card style={{ padding: "18px 22px", marginBottom: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--fh)", fontSize: 28, fontWeight: 700, color, lineHeight: 1 }}>{r.id}</span>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontFamily: "var(--fh)", fontSize: 17, fontWeight: 600, color: C.heading }}>{renderGreekText(r.name)}</div>
              <span style={{ display: "inline-block", padding: "2px 9px", borderRadius: 4, fontSize: 10, marginTop: 3, fontWeight: 600,
                background: fade(catColor, 0.1), color: catColor, border: `1px solid ${fade(catColor, 0.2)}` }}>{r.cat}</span>
            </div>
            <button onClick={() => { setSel(null); setClicked(null); }} aria-label="Volver al listado" style={{ color: C.dim, fontSize: 18 }}>×</button>
          </div>
          <p style={{ ...PROSE, marginBottom: 14 }}>{renderDesc(r.desc)}</p>
          <div style={{ fontSize: 10, color: C.dim, marginBottom: 5, textTransform: "uppercase", letterSpacing: 1.2 }}>
            Inscripciones · pulsa para ver el texto
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {r.dvcs.map((dvc) => {
              const on = clicked === dvc;
              const n = perDvc[dvc].length;
              return (
                <button key={dvc} onClick={() => setClicked(on ? null : dvc)} aria-pressed={on} style={{
                  background: fade(catColor, on ? 0.15 : 0.08), border: `1px solid ${on ? catColor : fade(catColor, 0.2)}`,
                  borderRadius: 6, padding: "6px 10px", fontSize: 11.5, color: on ? C.heading : C.muted, fontWeight: on ? 600 : 400 }}>
                  <DvcLabel dvc={dvc} />
                  {n > 1 && <span title={`${n} rasgos en total`} style={{ marginLeft: 5, padding: "0 5px", borderRadius: 8,
                    background: color, color: "#fff", fontSize: 9, fontWeight: 700, lineHeight: "16px" }}>{n}</span>}
                </button>
              );
            })}
          </div>
          {clicked && <GreekBlock title={fmtDvc(clicked)}>{texts[clicked] ?? "Texto no disponible."}</GreekBlock>}
        </Card>
      )}

      {!r && (
        <div>
          <div style={{ fontSize: 10, color: C.dim, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1.2 }}>
            Frecuencia de atestiguación por rasgo · pulsa para ver el detalle
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {[...rasgos].sort((a, b) => b.dvcs.length - a.dvcs.length).map((x) => (
              <button key={x.id} className="row-hover" onClick={() => setSel(x.id)}
                style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 8px", borderRadius: 6, textAlign: "left" }}>
                <span style={{ width: 22, fontSize: 10, color: C.dim, textAlign: "right", fontFamily: "var(--fh)", flexShrink: 0 }}>{x.id}</span>
                <span style={{ width: 170, fontSize: 11.5, color: C.text, flexShrink: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {renderGreekText(x.short)}</span>
                <span style={{ flex: 1, height: 20, background: "rgba(120,90,40,0.06)", borderRadius: 3, overflow: "hidden" }}>
                  <span style={{ display: "block", width: `${x.dvcs.length / maxN * 100}%`, height: "100%", borderRadius: 3,
                    background: `linear-gradient(90deg, ${fade(CAT_COLORS[x.cat], 0.25)}, ${fade(CAT_COLORS[x.cat], 0.56)})` }} />
                </span>
                <span style={{ width: 20, fontSize: 12, fontWeight: 700, color, fontFamily: "var(--fh)", textAlign: "right", flexShrink: 0 }}>{x.dvcs.length}</span>
                <span style={{ width: 8, height: 8, borderRadius: 2, background: CAT_COLORS[x.cat], flexShrink: 0, opacity: 0.7 }} />
              </button>
            ))}
          </div>
          <CatLegend rasgos={rasgos} />
        </div>
      )}

      <div style={{ marginTop: 20 }}>
        <div style={{ fontSize: 10, color: C.dim, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1.2 }}>
          Inscripciones con más rasgos acumulados
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {top.map(([dvc, rs]) => (
            <Card key={dvc} style={{ padding: "10px 14px", minWidth: 160, flex: "0 1 auto" }}>
              <div style={{ fontFamily: "var(--fh)", fontSize: 15, fontWeight: 700, color, marginBottom: 4 }}>
                {renderDesc(fmtDvc(dvc))}
                <span style={{ marginLeft: 8, padding: "1px 7px", borderRadius: 8, background: C.green, color: "#fff",
                  fontSize: 10, fontWeight: 700, fontFamily: "var(--fb)", verticalAlign: "middle" }}>{rs.length} rasgos</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                {rs.map((x) => (
                  <span key={x} style={{ fontSize: 9.5, padding: "1px 6px", borderRadius: 4, background: fade(color, 0.08),
                    color: C.muted, border: `1px solid ${fade(color, 0.14)}` }}>{renderGreekText(x)}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export const CatLegend = ({ rasgos = null }) => (
  <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 12, flexWrap: "wrap" }}>
    {CATS.map((cat) => (
      <span key={cat} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10.5, color: C.muted }}>
        <span style={{ width: 8, height: 8, borderRadius: 2, background: CAT_COLORS[cat], opacity: 0.7 }} />
        {cat}{rasgos && ` (${rasgos.filter((r) => r.cat === cat).length})`}
      </span>
    ))}
  </div>
);

// ── Estructura de un capítulo ────────────────────────────────────
export const ChapterSwitcher = ({ chapters, current, onChange }) => (
  <nav aria-label="Capítulos" style={{ display: "flex", justifyContent: "center", gap: 4, padding: "12px 8px 0",
    flexWrap: "wrap", background: "rgba(255,252,245,0.5)", borderBottom: `1px solid ${C.border}` }}>
    {chapters.map((o) => {
      const active = current === o.id;
      return (
        <button key={o.id} onClick={() => onChange(o.id)} aria-current={active ? "page" : undefined} style={{
          background: active ? o.color : "transparent", color: active ? "#fff" : C.muted,
          border: `1px solid ${active ? o.color : C.border}`, borderBottom: "none", borderRadius: "10px 10px 0 0",
          padding: "10px 26px", fontFamily: "var(--fh)", fontSize: 13.5, fontWeight: active ? 700 : 500, letterSpacing: 0.5,
          boxShadow: active ? `0 -2px 8px ${fade(o.color, 0.15)}` : "none" }}>
          {o.label}
        </button>
      );
    })}
  </nav>
);

/**
 * Marco común de un capítulo: fondo, barra de acento, selector de capítulos,
 * cabecera con cifras, pestañas y pie con las ediciones del corpus.
 */
export function ChapterLayout({ switcher, color, accent, title, subtitle, stats, tabs, tab, onTab, subnav = null, children }) {
  return (
    <div className="fade-in" style={{ minHeight: "100vh",
      background: `linear-gradient(170deg, ${C.headerGrad1} 0%, ${C.headerGrad2} 40%, ${C.headerGrad3} 100%)` }}>
      <div style={{ maxWidth: 940, margin: "0 auto", padding: "0 0 60px" }}>
        <div style={{ height: 4, background: `linear-gradient(90deg, ${accent.join(", ")})` }} />
        {switcher}
        {subnav}
        <header style={{ padding: "28px 24px 24px", borderBottom: `1px solid ${C.border}`,
          background: "linear-gradient(180deg, rgba(255,252,245,0.75) 0%, rgba(255,252,245,0.5) 100%)" }}>
          <div style={{ textAlign: "center", marginBottom: 22 }}>
            <h1 style={{ fontSize: 32, fontWeight: 400, margin: "0 0 8px", lineHeight: 1.2, letterSpacing: -0.3 }}>{title}</h1>
            <p style={{ fontSize: 12.5, color: C.muted, lineHeight: 1.5, letterSpacing: 0.3 }}>{subtitle}</p>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>{stats}</div>
        </header>
        <nav style={{ display: "flex", gap: 4, justifyContent: "center", flexWrap: "wrap", margin: "18px 16px 0",
          background: "rgba(255,252,245,0.55)", borderRadius: 12, padding: 5, border: `1px solid ${C.border}` }}>
          {tabs.map((t) => (
            <Tag key={t.id} color={color} active={tab === t.id} onClick={() => onTab(t.id)}>
              <span style={{ marginRight: 6 }} aria-hidden="true">{t.i}</span>{t.l}
            </Tag>
          ))}
        </nav>
        <main style={{ padding: "30px 20px" }}>
          {children}
          <footer style={{ marginTop: 56, paddingTop: 24, borderTop: `1px solid ${C.border}` }}>
            <div style={{ fontSize: 9, letterSpacing: 4, textTransform: "uppercase", color, fontWeight: 600, marginBottom: 8 }}>Fuentes del corpus</div>
            <p style={{ fontSize: 11, color: C.muted, lineHeight: 1.9 }}>
              Dakaris, S., Vokotopoulou, I. &amp; Christidis, A.-Ph. (2013). <i>Τα χρηστήρια ελάσματα της Δωδώνης των ανασκαφών Δ. Ευαγγελίδη</i> (<i>I.Dodone DVC</i>)<br />
              Lhôte, É. (2006). <i>Les lamelles oraculaires de Dodone</i> (<i>I.Dodone Lhôte</i>)
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}

// Ficha lateral de un lugar del mapa: { name, greek, kind, certain, mentions: [{ ref, form, date, type? }], note, fuera? }.
export const PlaceCard = ({ place, kinds, color, onClose, empty }) => {
  if (!place) return <Card>{empty}</Card>;
  const col = kinds[place.kind].color;
  return (
    <Card accent={col}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 6 }}>
        <div>
          <span style={{ fontFamily: "var(--fh)", fontSize: 19, fontWeight: 700, color: col }}>{place.name}</span>
          <span style={{ fontStyle: "italic", color: C.muted, marginLeft: 8, fontSize: 14 }}>{renderGreekText(place.greek)}</span>
        </div>
        <button onClick={onClose} aria-label="Cerrar" style={{ color: C.dim, fontSize: 18 }}>×</button>
      </div>
      <div style={{ fontSize: 11, color: C.dim, margin: "2px 0 10px" }}>
        {kinds[place.kind].label}{place.certain === false ? " · referencia probable o discutida" : ""}{place.tetrada ? ` · ${place.tetrada}` : ""}
      </div>
      {place.mentions.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 6, margin: "10px 0" }}>
          {place.mentions.map((m) => (
            <div key={m.ref} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 4, padding: "7px 10px", borderRadius: 6,
              background: fade(color, 0.07), border: `1px solid ${fade(color, 0.25)}` }}>
              <span style={{ fontSize: 12, color: C.heading }}><Ref {...asRef(m.ref)} /></span>
              <span style={{ fontSize: 10.5, color: C.dim }}>{m.date}</span>
              <span className="greek" style={{ fontSize: 14.5, color: C.heading, gridColumn: "1 / -1" }}>{renderGreekText(m.form)}</span>
              {m.type && <span style={{ fontSize: 10.5, color: C.muted, fontStyle: "italic", gridColumn: "1 / -1" }}>{m.type}</span>}
            </div>
          ))}
        </div>
      )}
      <p style={{ ...PROSE, fontSize: 12 }}>{renderDesc(place.note)}</p>
      {place.fuera && <p style={{ ...PROSE, fontSize: 11.5, marginTop: 8, fontStyle: "italic", color: C.dim }}>{place.fuera}</p>}
    </Card>
  );
};
