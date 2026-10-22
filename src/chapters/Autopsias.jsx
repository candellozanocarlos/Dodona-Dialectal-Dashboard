// Notas de autopsia de las laminillas examinadas en la Eforía de Antigüedades de Ioánina.
import { useState } from "react";
import { C, DIALECT_COLORS, DIALECT_INK, fade } from "../theme.js";
import { AUTOPSIAS_DATA } from "../data/autopsias.js";
import { linkInscriptionRefs, normGreekMarks, renderGreekText, wrapGreekHtml } from "../lib/text.jsx";
import { Stat, Tag } from "../components/ui.jsx";

// Grupos por la clasificación dialectal vigente (DIALECTO_MACRO/SUB de DVC_v5_FINAL.xlsx), con el dórico
// dividido en general y noroccidental como en los gráficos; `color` para filetes y fondos, `ink` para el texto.
const grupo = (label, key, color = DIALECT_COLORS[key]) => ({ label, color, ink: DIALECT_INK[key] || color });
const DIALECTS = {
  tesalio: grupo("Tesalio", "tesalio"),
  beocio: grupo("Beocio", "beocio"),
  severior: grupo("Doris severior", "severior"),
  dorico: grupo("Dórico general", "dorico"),
  doricoNO: grupo("Dórico noroccidental", "doricoNO"),
  noJonAt: grupo("No jónico-ático", "noJonAt"),
  jonicoAtico: grupo("Jónico-ático-koiné", "jonicoAtico"),
  mezcla: grupo("Mezcla dialectal", "mezcla"),
  sinClasificar: grupo("Sin clasificar", "otros", C.dim),
};
// Solo los grupos con alguna autopsia aparecen en las cifras y en las pestañas.
const PRESENTES = Object.entries(DIALECTS).filter(([k]) => AUTOPSIAS_DATA.some((a) => a.dialect === k));
const photoUrl = (p) => import.meta.env.BASE_URL + p;
// En la versión pública (Netlify) solo se muestran los facsímiles: no hay permiso para publicar las fotografías.
const SIN_FOTOS = import.meta.env.VITE_SIN_FOTOS === "true";
const years = [...new Set(AUTOPSIAS_DATA.map((a) => a.autopsy_year).filter(Boolean))].sort();
const yearLabel = (a) => a.autopsy_year ?? "fecha por confirmar";

// Texto con *cursivas* y citas enlazadas.
const renderInline = (str) => {
  const html = normGreekMarks(str)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/\*I\.Dodone (DVC|Lhôte)\*/g, "I.Dodone $1")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return <span dangerouslySetInnerHTML={{ __html: wrapGreekHtml(linkInscriptionRefs(html)) }} />;
};

const H3 = ({ children }) => (
  <h3 style={{ fontSize: 13, fontWeight: 600, color: C.muted, letterSpacing: 1.3, textTransform: "uppercase", margin: "0 0 10px" }}>{children}</h3>
);

export default function Autopsias({ switcher }) {
  const [tab, setTab] = useState("todas");
  const [selectedId, setSelectedId] = useState(AUTOPSIAS_DATA[0].id);
  const [uploaded, setUploaded] = useState({});   // fotos añadidas en esta sesión: { id: [{ name, src }] }
  const [broken, setBroken] = useState({});       // rutas de fotos que no se han podido cargar

  const filtered = tab === "todas" ? AUTOPSIAS_DATA : AUTOPSIAS_DATA.filter((a) => a.dialect === tab);
  const selected = filtered.find((a) => a.id === selectedId) || filtered[0];
  const col = DIALECTS[selected.dialect].color;
  const ink = DIALECTS[selected.dialect].ink;
  const count = (d) => AUTOPSIAS_DATA.filter((a) => a.dialect === d).length;
  const photos = (selected.photos || []).filter((p) => !broken[p] && (!SIN_FOTOS || p.includes("facsimil")));
  const session = uploaded[selected.id] || [];

  const handleUpload = (e) => {
    Array.from(e.target.files || []).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (ev) => setUploaded((prev) => ({
        ...prev, [selected.id]: [...(prev[selected.id] || []), { name: file.name, src: ev.target.result }],
      }));
      reader.readAsDataURL(file);
    });
    e.target.value = "";
  };

  return (
    <div style={{ minHeight: "100vh", background: C.bg }}>
      <div style={{ height: 4, background: `linear-gradient(90deg, ${C.terra}, ${C.tesalio}, ${C.beocio}, ${C.severior})` }} />
      {switcher}

      <header style={{ background: `linear-gradient(180deg, ${C.headerGrad1} 0%, ${C.headerGrad2} 60%, ${C.headerGrad3} 100%)`,
        borderBottom: `1px solid ${C.border}`, padding: "44px 24px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ display: "inline-block", padding: "3px 14px", borderRadius: 20, background: fade(C.terra, 0.09), color: C.terra,
            fontSize: 11.5, letterSpacing: 1.4, textTransform: "uppercase", fontWeight: 600, marginBottom: 14 }}>
            Autopsias en la Eforía de Antigüedades de Ioánina · {years[0]}–{years[years.length - 1]}
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 700, margin: "0 0 10px", letterSpacing: -0.5 }}>Notas de autopsia</h1>
          <p style={{ fontSize: 14.5, color: C.muted, maxWidth: 720, margin: "0 auto", lineHeight: 1.65 }}>
            Observaciones de autopsia directa sobre laminillas oraculares relevantes para los capítulos dialectales de la tesis.
            Cada ficha confronta la lectura editorial de <em>I.Dodone DVC</em> con lo observado <em>in situ</em>.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", maxWidth: 760, margin: "22px auto 0" }}>
            <Stat label="Autopsias" value={String(AUTOPSIAS_DATA.length)} sub="laminillas examinadas" accent={C.terra} />
            {PRESENTES.map(([k, d]) => <Stat key={k} label={d.label} value={String(count(k))} accent={d.ink} />)}
            <Stat label="Campañas" value={String(years.length)} accent={C.blue}
              sub={years.map((y) => `${AUTOPSIAS_DATA.filter((a) => a.autopsy_year === y).length} en ${y}`).join(" · ")} />
          </div>
        </div>
      </header>

      <nav style={{ display: "flex", gap: 4, justifyContent: "center", flexWrap: "wrap", padding: "18px 0 0",
        borderBottom: `1px solid ${C.border}`, background: "rgba(255,252,245,0.5)" }}>
        <Tag color={C.terra} active={tab === "todas"} onClick={() => setTab("todas")}>Todas ({AUTOPSIAS_DATA.length})</Tag>
        {PRESENTES.map(([k, d]) => (
          <Tag key={k} color={C.terra} active={tab === k} onClick={() => setTab(k)}>{d.label} ({count(k)})</Tag>
        ))}
      </nav>

      <main style={{ maxWidth: 1180, margin: "0 auto", padding: "32px 20px 80px" }}>
        <div className="autopsy-grid">
          <aside style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: 14, maxHeight: "75vh", overflowY: "auto" }}>
            <div style={{ fontFamily: "var(--fh)", fontSize: 12, color: C.muted, letterSpacing: 1.2, textTransform: "uppercase",
              padding: "4px 8px 10px", borderBottom: `1px solid ${C.border}`, marginBottom: 6 }}>Inscripciones · {filtered.length}</div>
            {filtered.map((a) => {
              const active = a.id === selected.id;
              const c = DIALECTS[a.dialect].color, ci = DIALECTS[a.dialect].ink;
              return (
                <button key={a.id} onClick={() => setSelectedId(a.id)} aria-current={active ? "true" : undefined} style={{
                  display: "block", width: "100%", textAlign: "left", background: active ? fade(c, 0.08) : "transparent",
                  borderLeft: `3px solid ${active ? c : "transparent"}`, padding: "10px 12px", marginBottom: 2,
                  borderRadius: "0 8px 8px 0", color: active ? C.heading : C.text }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 6 }}>
                    <span style={{ fontFamily: "var(--fh)", fontSize: 14.5, fontWeight: active ? 700 : 500 }}><i>I.Dodone DVC</i> {a.id}</span>
                    <span style={{ fontSize: 10.5, color: ci, fontWeight: 600, letterSpacing: 0.5, textTransform: "uppercase" }}>{DIALECTS[a.dialect].label}</span>
                  </div>
                  <div style={{ fontSize: 11.5, color: C.muted, marginTop: 2 }}>{a.date} · autopsia {yearLabel(a)}</div>
                </button>
              );
            })}
          </aside>

          <section style={{ background: "rgba(255,252,245,0.6)", border: `1px solid ${C.border}`, borderRadius: 12, padding: "28px 28px" }}>
            <div style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: 18, marginBottom: 22 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap", marginBottom: 6 }}>
                <h2 style={{ fontSize: 28, fontWeight: 700 }}><i>I.Dodone DVC</i> {selected.id}</h2>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", background: fade(col, 0.09),
                  color: ink, padding: "4px 10px", borderRadius: 4 }}>
                  {DIALECTS[selected.dialect].label}{selected.subdialect ? ` · ${selected.subdialect}` : ""}
                </span>
              </div>
              <div style={{ display: "flex", gap: 18, flexWrap: "wrap", fontSize: 12.5, color: C.muted }}>
                <span><b style={{ color: C.text }}>Datación:</b> {selected.date}</span>
                <span><b style={{ color: C.text }}>Inv.:</b> {selected.ami || "—"}{selected.siglum ? ` / ${selected.siglum}` : ""}</span>
                <span><b style={{ color: C.text }}>Autopsia:</b> {yearLabel(selected)}</span>
                {selected.related?.length > 0 && (
                  <span><b style={{ color: C.text }}>Cf.: </b>
                    {selected.related.map((r, i) => {
                      const has = AUTOPSIAS_DATA.some((a) => a.id === r);
                      return (
                        <span key={r}>
                          {has ? <button onClick={() => { setTab("todas"); setSelectedId(r); }}
                            style={{ color: C.gold, fontStyle: "italic", padding: 0, fontSize: 12.5, textDecoration: "underline dotted" }}>
                            <i>I.Dodone DVC</i> {r}</button> : <span><i>I.Dodone DVC</i> {r}</span>}
                          {i < selected.related.length - 1 ? ", " : ""}
                        </span>
                      );
                    })}
                  </span>
                )}
              </div>
            </div>

            <div style={{ marginBottom: 24 }}>
              <H3>Lectura · <em>I.Dodone DVC</em></H3>
              <pre lang="grc" className="greek-inscription" style={{ fontSize: 17, lineHeight: 1.85, color: C.heading, margin: 0,
                padding: "16px 20px", background: C.thHead, border: `1px solid ${C.border}`, borderRadius: 8, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                {renderGreekText(selected.text_dvc)}
              </pre>
            </div>

            <div style={{ marginBottom: 24 }}>
              <H3>Observaciones de autopsia</H3>
              <div style={{ fontSize: 14, lineHeight: 1.8, color: C.text, padding: "16px 20px", textAlign: "justify",
                background: "rgba(255,252,245,0.9)", borderLeft: `3px solid ${col}`, borderRadius: "0 8px 8px 0" }}>
                {renderInline(selected.carlos)}
              </div>
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10, gap: 8 }}>
                <H3>Fotografías</H3>
                <label style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: C.terra, cursor: "pointer",
                  padding: "5px 12px", border: `1px solid ${fade(C.terra, 0.25)}`, borderRadius: 16, background: fade(C.terra, 0.03),
                  fontFamily: "var(--fh)", fontWeight: 600 }}>
                  + Añadir foto (solo en esta sesión)
                  <input type="file" accept="image/*" multiple onChange={handleUpload} style={{ display: "none" }} />
                </label>
              </div>
              {photos.length === 0 && session.length === 0 ? (
                <div style={{ border: `1.5px dashed ${C.border}`, borderRadius: 10, padding: "36px 20px", textAlign: "center",
                  color: C.dim, fontSize: 13, fontStyle: "italic" }}>
                  No hay fotografías disponibles para esta inscripción.
                </div>
              ) : (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
                  {photos.map((src, i) => (
                    <figure key={src} style={{ margin: 0 }}>
                      <a href={photoUrl(src)} target="_blank" rel="noreferrer">
                        <img src={photoUrl(src)} alt={`I.Dodone DVC ${selected.id}, fotografía ${i + 1}`} loading="lazy"
                          onError={() => setBroken((b) => ({ ...b, [src]: true }))}
                          style={{ width: "100%", height: 160, objectFit: src.includes("facsimil") ? "contain" : "cover", background: "#fff", borderRadius: 8, border: `1px solid ${C.border}` }} />
                      </a>
                      <figcaption style={{ fontSize: 10.5, color: C.dim, marginTop: 4, textAlign: "center" }}>{src.includes("facsimil") ? "Facsímil (elaboración propia)" : `Archivo · ${i + 1}`}</figcaption>
                    </figure>
                  ))}
                  {session.map((p, i) => (
                    <figure key={`s-${i}`} style={{ margin: 0, position: "relative" }}>
                      <img src={p.src} alt={p.name} style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 8,
                        border: `1.5px dashed ${fade(C.terra, 0.25)}` }} />
                      <button aria-label="Quitar foto" onClick={() => setUploaded((prev) => ({ ...prev, [selected.id]: session.filter((_, j) => j !== i) }))}
                        style={{ position: "absolute", top: 6, right: 6, width: 22, height: 22, borderRadius: "50%", background: "rgba(0,0,0,0.55)",
                          color: "#fff", fontSize: 13, lineHeight: 1 }}>×</button>
                      <figcaption style={{ fontSize: 10.5, color: C.dim, marginTop: 4, textAlign: "center", fontStyle: "italic" }}>
                        Sesión · {p.name.length > 22 ? `${p.name.slice(0, 22)}…` : p.name}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>

        <p style={{ fontSize: 11.5, color: C.dim, textAlign: "center", marginTop: 36, fontStyle: "italic", maxWidth: 720, marginInline: "auto", lineHeight: 1.7 }}>
          Las observaciones recogen lo constatado durante las autopsias directas a las laminillas en la Eforía de Antigüedades de
          Ioánina. ΑΜΙ remite al número de inventario del Museo Arqueológico de Ioánina; M, al siglum de Méndez Dosuna.
        </p>
      </main>
    </div>
  );
}
