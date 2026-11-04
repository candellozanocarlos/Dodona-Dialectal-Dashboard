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

// Una ficha por laminilla (siglum M o, si falta, AMI), con sus inscripciones en orden y las fotos de todas ellas.
const num = (id) => (id.startsWith("LOD ") ? 10000 : 0) + parseInt(id.replace(/\D/g, ""), 10);
const mnum = (s) => parseInt((s || "").replace(/^\D*/, ""), 10) || 99999;
const clave = (a) => a.siglum || (a.ami && a.ami !== "—" ? a.ami : a.id);
const LAMINILLAS = Object.values(AUTOPSIAS_DATA.reduce((acc, a) => {
  (acc[clave(a)] ||= { key: clave(a), items: [] }).items.push(a);
  return acc;
}, {})).map((l) => {
  const items = [...l.items].sort((x, y) => num(x.id) - num(y.id));
  return {
    ...l, items,
    siglum: items.map((a) => a.siglum).find(Boolean) || null,
    ami: items.map((a) => a.ami).find((x) => x && x !== "—") || null,
    year: items.map((a) => a.autopsy_year).find(Boolean) || null,
    dialects: [...new Set(items.map((a) => a.dialect))],
    photos: [...new Set(items.flatMap((a) => a.photos || []))],
  };
}).sort((a, b) => (a.year || 9999) - (b.year || 9999) || mnum(a.siglum) - mnum(b.siglum));

// Texto con *cursivas* y citas enlazadas.
const renderInline = (str) => {
  const html = normGreekMarks(str)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/\*I\.Dodone (DVC|Lhôte)\*/g, "I.Dodone $1")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return <span dangerouslySetInnerHTML={{ __html: wrapGreekHtml(linkInscriptionRefs(html)) }} />;
};

// Clave interna "123A" (DVC) o "LOD 88" (Lhôte) -> nombre del corpus en cursiva y número.
const corpus = (id) => (id.startsWith("LOD ") ? "I.Dodone Lhôte" : "I.Dodone DVC");
const numero = (id) => (id.startsWith("LOD ") ? id.slice(4) : id);
const Sigla = ({ id }) => <><i>{corpus(id)}</i> {numero(id)}</>;

const H3 = ({ children }) => (
  <h3 style={{ fontSize: 13, fontWeight: 600, color: C.muted, letterSpacing: 1.3, textTransform: "uppercase", margin: "0 0 10px" }}>{children}</h3>
);

// Rótulo de la laminilla: "M51 · ΑΜΙ 12198"; sin inventario, las sigla de sus inscripciones.
const Titulo = ({ l }) => (l.siglum || l.ami
  ? <>{l.siglum}{l.siglum && l.ami ? " · " : ""}{l.ami}</>
  : <>{l.items.map((a, i) => <span key={a.id}>{i ? ", " : ""}<Sigla id={a.id} /></span>)}</>);
const lista = (l) => {
  const lod = l.items.filter((a) => a.id.startsWith("LOD ")), dvc = l.items.filter((a) => !a.id.startsWith("LOD "));
  return [dvc.length ? <span key="d"><i>I.Dodone DVC</i> {dvc.map((a) => a.id).join(", ")}</span> : null,
    lod.length ? <span key="l">{dvc.length ? "; " : ""}<i>I.Dodone Lhôte</i> {lod.map((a) => a.id.slice(4)).join(", ")}</span> : null];
};

export default function Autopsias({ switcher }) {
  const [tab, setTab] = useState("todas");
  const [selectedKey, setSelectedKey] = useState(LAMINILLAS[0].key);
  const [uploaded, setUploaded] = useState({});   // fotos añadidas en esta sesión: { laminilla: [{ name, src }] }
  const [broken, setBroken] = useState({});       // rutas de fotos que no se han podido cargar

  const filtered = tab === "todas" ? LAMINILLAS : LAMINILLAS.filter((l) => l.items.some((a) => a.dialect === tab));
  const selected = filtered.find((l) => l.key === selectedKey) || filtered[0];
  const count = (d) => AUTOPSIAS_DATA.filter((a) => a.dialect === d).length;
  const photos = selected.photos.filter((p) => !broken[p] && (!SIN_FOTOS || p.includes("facsimil")));
  const session = uploaded[selected.key] || [];

  const handleUpload = (e) => {
    Array.from(e.target.files || []).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (ev) => setUploaded((prev) => ({
        ...prev, [selected.key]: [...(prev[selected.key] || []), { name: file.name, src: ev.target.result }],
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
            Cada ficha confronta la lectura editorial de <em>I.Dodone DVC</em> (o de <em>I.Dodone Lhôte</em>) con lo observado <em>in situ</em>.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", maxWidth: 760, margin: "22px auto 0" }}>
            <Stat label="Laminillas" value={String(LAMINILLAS.length)} sub={`${AUTOPSIAS_DATA.length} inscripciones con observaciones`} accent={C.terra} />
            {PRESENTES.map(([k, d]) => <Stat key={k} label={d.label} value={String(count(k))} accent={d.ink} />)}
            <Stat label="Campañas" value={String(years.length)} accent={C.blue}
              sub={years.map((y) => `${LAMINILLAS.filter((l) => l.year === y).length} laminillas en ${y}`).join(" · ")} />
          </div>
        </div>
      </header>

      <nav style={{ display: "flex", gap: 4, justifyContent: "center", flexWrap: "wrap", padding: "18px 0 0",
        borderBottom: `1px solid ${C.border}`, background: "rgba(255,252,245,0.5)" }}>
        <Tag color={C.terra} active={tab === "todas"} onClick={() => setTab("todas")}>Todas ({LAMINILLAS.length} laminillas)</Tag>
        {PRESENTES.map(([k, d]) => (
          <Tag key={k} color={C.terra} active={tab === k} onClick={() => setTab(k)}>{d.label} ({count(k)})</Tag>
        ))}
      </nav>

      <main style={{ maxWidth: 1180, margin: "0 auto", padding: "32px 20px 80px" }}>
        <div className="autopsy-grid">
          <aside style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: 14, maxHeight: "75vh", overflowY: "auto" }}>
            <div style={{ fontFamily: "var(--fh)", fontSize: 12, color: C.muted, letterSpacing: 1.2, textTransform: "uppercase",
              padding: "4px 8px 10px", borderBottom: `1px solid ${C.border}`, marginBottom: 6 }}>Laminillas · {filtered.length}</div>
            {filtered.map((l) => {
              const active = l.key === selected.key;
              const c = DIALECTS[l.dialects[0]].color;
              return (
                <button key={l.key} onClick={() => setSelectedKey(l.key)} aria-current={active ? "true" : undefined} style={{
                  display: "block", width: "100%", textAlign: "left", background: active ? fade(c, 0.08) : "transparent",
                  borderLeft: `3px solid ${active ? c : "transparent"}`, padding: "10px 12px", marginBottom: 2,
                  borderRadius: "0 8px 8px 0", color: active ? C.heading : C.text }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 6 }}>
                    <span style={{ fontFamily: "var(--fh)", fontSize: 14.5, fontWeight: active ? 700 : 500 }}><Titulo l={l} /></span>
                    <span style={{ fontSize: 11, color: C.muted, whiteSpace: "nowrap" }}>{l.year ? `autopsia ${l.year}` : ""}</span>
                  </div>
                  <div style={{ fontSize: 12, color: C.text, marginTop: 2 }}>{lista(l)}</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 3 }}>
                    {l.dialects.map((d) => (
                      <span key={d} style={{ fontSize: 10, color: DIALECTS[d].ink, fontWeight: 600, letterSpacing: 0.5, textTransform: "uppercase" }}>{DIALECTS[d].label}</span>
                    ))}
                  </div>
                </button>
              );
            })}
          </aside>

          <section style={{ background: "rgba(255,252,245,0.6)", border: `1px solid ${C.border}`, borderRadius: 12, padding: "28px 28px" }}>
            <div style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: 18, marginBottom: 22 }}>
              <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 6 }}><Titulo l={selected} /></h2>
              <div style={{ display: "flex", gap: 18, flexWrap: "wrap", fontSize: 12.5, color: C.muted }}>
                <span><b style={{ color: C.text }}>Inscripciones:</b> {lista(selected)}</span>
                {selected.year && <span><b style={{ color: C.text }}>Autopsia:</b> {selected.year}</span>}
              </div>
            </div>

            {selected.items.map((a) => {
              const d = DIALECTS[a.dialect];
              return (
                <article key={a.id} style={{ marginBottom: 26, paddingBottom: 20, borderBottom: `1px dashed ${C.border}` }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap", marginBottom: 10 }}>
                    <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}><Sigla id={a.id} /></h3>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", background: fade(d.color, 0.09),
                      color: d.ink, padding: "3px 9px", borderRadius: 4 }}>
                      {d.label}{a.subdialect ? ` · ${a.subdialect}` : ""}
                    </span>
                    <span style={{ fontSize: 12.5, color: C.muted }}>{a.date}</span>
                  </div>
                  <H3>Lectura · <em>{corpus(a.id)}</em></H3>
                  <pre lang="grc" className="greek-inscription" style={{ fontSize: 17, lineHeight: 1.85, color: C.heading, margin: "0 0 16px",
                    padding: "14px 20px", background: C.thHead, border: `1px solid ${C.border}`, borderRadius: 8, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                    {renderGreekText(a.text_dvc)}
                  </pre>
                  <H3>Observaciones de autopsia</H3>
                  <div style={{ fontSize: 14, lineHeight: 1.8, color: C.text, padding: "14px 20px", textAlign: "justify",
                    background: "rgba(255,252,245,0.9)", borderLeft: `3px solid ${d.color}`, borderRadius: "0 8px 8px 0" }}>
                    {renderInline(a.carlos)}
                  </div>
                </article>
              );
            })}

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10, gap: 8 }}>
                <H3>Fotografías</H3>
                {!SIN_FOTOS && <label style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: C.terra, cursor: "pointer",
                  padding: "5px 12px", border: `1px solid ${fade(C.terra, 0.25)}`, borderRadius: 16, background: fade(C.terra, 0.03),
                  fontFamily: "var(--fh)", fontWeight: 600 }}>
                  + Añadir foto (solo en esta sesión)
                  <input type="file" accept="image/*" multiple onChange={handleUpload} style={{ display: "none" }} />
                </label>}
              </div>
              {photos.length === 0 && session.length === 0 ? (
                <div style={{ border: `1.5px dashed ${C.border}`, borderRadius: 10, padding: "36px 20px", textAlign: "center",
                  color: C.dim, fontSize: 13, fontStyle: "italic" }}>
                  No hay fotografías disponibles para esta laminilla.
                </div>
              ) : (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
                  {photos.map((src, i) => (
                    <figure key={src} style={{ margin: 0 }}>
                      <a href={photoUrl(src)} target="_blank" rel="noreferrer">
                        <img src={photoUrl(src)} alt={`Laminilla ${selected.siglum || selected.key}, fotografía ${i + 1}`} loading="lazy"
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
                      <button aria-label="Quitar foto" onClick={() => setUploaded((prev) => ({ ...prev, [selected.key]: session.filter((_, j) => j !== i) }))}
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
          Ioánina, agrupadas por laminilla. M y ΑΜΙ remiten a los números de inventario del Museo Arqueológico de Ioánina.
        </p>
      </main>
    </div>
  );
}
