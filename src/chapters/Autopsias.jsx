// Autopsias de las laminillas en la Eforía de Antigüedades de Ioánina: una ficha por laminilla (anexo §3.4 de la introducción).
import { useEffect, useState } from "react";
import { C, DIALECT_COLORS, DIALECT_INK, fade } from "../theme.js";
import { CAMPANAS_AUTOPSIAS, INTRO_AUTOPSIAS, LAMINILLAS_AUTOPSIA as LAMINILLAS } from "../data/autopsias.js";
import { renderDesc, renderGreekText } from "../lib/text.jsx";
import { Pie, Stat, Tag } from "../components/ui.jsx";

// Grupos por la clasificación vigente, con el dórico dividido en general y noroccidental como en los gráficos; `color` para
// filetes y fondos, `ink` para el texto.
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
  otros: grupo("Otros", "otros"),
  sinClasificar: grupo("Sin clasificar", "otros", C.dim),
};
const FICHAS = LAMINILLAS.flatMap((l) => l.items);
const count = (d) => FICHAS.filter((a) => a.dialect === d).length;
// Solo los grupos con alguna autopsia aparecen en las cifras y en las pestañas.
const PRESENTES = Object.entries(DIALECTS).filter(([k]) => count(k) > 0);
const dialectos = (l) => [...new Set(l.items.map((a) => a.dialect))];
const YEARS = [...new Set(LAMINILLAS.map((l) => l.anio).filter(Boolean))].sort();
const photoUrl = (p) => import.meta.env.BASE_URL + p;
// La versión pública solo muestra los facsímiles: no hay permiso para publicar las fotografías (ni sus rutas).
const SIN_FOTOS = import.meta.env.VITE_SIN_FOTOS === "true";

// Clave interna "123A" (DVC) o "LOD 88" (Lhôte) → nombre del corpus en cursiva y número.
const corpus = (id) => (id.startsWith("LOD ") ? "I.Dodone Lhôte" : "I.Dodone DVC");
const numero = (id) => (id.startsWith("LOD ") ? id.slice(4) : id);
const Sigla = ({ id }) => <><i>{corpus(id)}</i> {numero(id)}</>;

const H3 = ({ children }) => (
  <h3 style={{ fontSize: 13, fontWeight: 600, color: C.muted, letterSpacing: 1.3, textTransform: "uppercase", margin: "0 0 10px" }}>{children}</h3>
);

// Rótulo de la laminilla: "M51 · ΑΜΙ 12198"; sin inventario, la sigla de sus inscripciones.
const Titulo = ({ l }) => (l.siglum
  ? <>{l.siglum} · {l.ami}</>
  : <>{l.items.map((a, i) => <span key={a.id}>{i ? ", " : ""}<Sigla id={a.id} /></span>)}</>);
const lista = (l) => {
  const lod = l.items.filter((a) => a.id.startsWith("LOD ")), dvc = l.items.filter((a) => !a.id.startsWith("LOD "));
  return [dvc.length ? <span key="d"><i>I.Dodone DVC</i> {dvc.map((a) => a.id).join(", ")}</span> : null,
    lod.length ? <span key="l">{dvc.length ? "; " : ""}<i>I.Dodone Lhôte</i> {lod.map((a) => a.id.slice(4)).join(", ")}</span> : null];
};

export default function Autopsias({ switcher }) {
  const [tab, setTab] = useState("todas");
  const [selectedKey, setSelectedKey] = useState(LAMINILLAS[0].key);
  const [fotos, setFotos] = useState({});
  useEffect(() => { if (!SIN_FOTOS) import("../data/autopsiasFotos.js").then((m) => setFotos(m.default)); }, []);

  const filtered = tab === "todas" ? LAMINILLAS : LAMINILLAS.filter((l) => l.items.some((a) => a.dialect === tab));
  const selected = filtered.find((l) => l.key === selectedKey) || filtered[0];
  const imagenes = [...selected.facsimiles, ...(fotos[selected.key] || [])];
  const nObs = FICHAS.filter((a) => a.obs).length;

  return (
    <div style={{ minHeight: "100vh", background: C.bg }}>
      <div style={{ height: 4, background: `linear-gradient(90deg, ${C.terra}, ${C.tesalio}, ${C.beocio}, ${C.severior})` }} />
      {switcher}

      <header style={{ background: `linear-gradient(180deg, ${C.headerGrad1} 0%, ${C.headerGrad2} 60%, ${C.headerGrad3} 100%)`,
        borderBottom: `1px solid ${C.border}`, padding: "44px 24px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ display: "inline-block", padding: "3px 14px", borderRadius: 20, background: fade(C.terra, 0.09), color: C.terra,
            fontSize: 11.5, letterSpacing: 1.4, textTransform: "uppercase", fontWeight: 600, marginBottom: 14 }}>
            Autopsias en la Eforía de Antigüedades de Ioánina · {YEARS[0]}–{YEARS[YEARS.length - 1]}
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 700, margin: "0 0 10px", letterSpacing: -0.5 }}>Notas de autopsia</h1>
          <p style={{ fontSize: 14.5, color: C.muted, maxWidth: 760, margin: "0 auto", lineHeight: 1.65 }}>
            {INTRO_AUTOPSIAS[0].split(". Cada laminilla")[0]}.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", maxWidth: 760, margin: "22px auto 0" }}>
            <Stat label="Laminillas" value={String(LAMINILLAS.length)} sub={`${FICHAS.length} inscripciones, ${nObs} con observaciones propias`} accent={C.terra} />
            {PRESENTES.map(([k, d]) => <Stat key={k} label={d.label} value={String(count(k))} accent={d.ink} />)}
            <Stat label="Campañas" value={String(YEARS.length)} accent={C.blue}
              sub={YEARS.map((y) => `${LAMINILLAS.filter((l) => l.anio === y).length} laminillas en ${y}`).join(" · ")} />
          </div>
        </div>
      </header>

      <nav aria-label="Filtrar por grupo dialectal" style={{ display: "flex", gap: 4, justifyContent: "center", flexWrap: "wrap", padding: "18px 0 0",
        borderBottom: `1px solid ${C.border}`, background: "rgba(255,252,245,0.5)" }}>
        <Tag color={C.terra} active={tab === "todas"} onClick={() => setTab("todas")}>Todas ({LAMINILLAS.length} laminillas)</Tag>
        {PRESENTES.map(([k, d]) => (
          <Tag key={k} color={C.terra} active={tab === k} onClick={() => setTab(k)}>{d.label} ({count(k)})</Tag>
        ))}
      </nav>

      <main id="contenido" tabIndex={-1} style={{ maxWidth: 1180, margin: "0 auto", padding: "32px 20px 40px" }}>
        <div className="autopsy-grid">
          <aside style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: 14, maxHeight: "75vh", overflowY: "auto" }}>
            <div style={{ fontFamily: "var(--fh)", fontSize: 12, color: C.muted, letterSpacing: 1.2, textTransform: "uppercase",
              padding: "4px 8px 10px", borderBottom: `1px solid ${C.border}`, marginBottom: 6 }}>Laminillas · {filtered.length}</div>
            {filtered.map((l) => {
              const active = l.key === selected.key;
              const c = DIALECTS[dialectos(l)[0]].color;
              return (
                <button key={l.key} onClick={() => setSelectedKey(l.key)} aria-current={active ? "true" : undefined} style={{
                  display: "block", width: "100%", textAlign: "left", background: active ? fade(c, 0.08) : "transparent",
                  borderLeft: `3px solid ${active ? c : "transparent"}`, padding: "10px 12px", marginBottom: 2,
                  borderRadius: "0 8px 8px 0", color: active ? C.heading : C.text }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 6 }}>
                    <span style={{ fontFamily: "var(--fh)", fontSize: 14.5, fontWeight: active ? 700 : 500 }}><Titulo l={l} /></span>
                    <span style={{ fontSize: 11, color: C.muted, whiteSpace: "nowrap" }}>{l.anio ? `autopsia ${l.anio}` : ""}</span>
                  </div>
                  {l.siglum && <div style={{ fontSize: 12, color: C.text, marginTop: 2 }}>{lista(l)}</div>}
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 3 }}>
                    {dialectos(l).map((d) => (
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
                {selected.fecha && <span><b style={{ color: C.text }}>Autopsia:</b> {selected.fecha}</span>}
              </div>
              {selected.nota && <p style={{ fontSize: 13.5, lineHeight: 1.75, color: C.text, margin: "12px 0 0" }}>{renderDesc(selected.nota)}</p>}
            </div>

            {selected.items.map((a) => {
              const d = DIALECTS[a.dialect];
              return (
                <article key={a.id} style={{ marginBottom: 26, paddingBottom: 20, borderBottom: `1px dashed ${C.border}` }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap", marginBottom: 10 }}>
                    <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}><Sigla id={a.id} /></h3>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", background: fade(d.color, 0.09),
                      color: d.ink, padding: "3px 9px", borderRadius: 4 }}>
                      {d.label}{a.sub ? ` · ${a.sub}` : ""}
                    </span>
                    <span style={{ fontSize: 12.5, color: C.muted }}>{a.date}</span>
                  </div>
                  {a.text && <>
                    <H3>Lectura · <em>{corpus(a.id)}</em></H3>
                    <pre lang="grc" className="greek-inscription" style={{ fontSize: 17, lineHeight: 1.85, color: C.heading, margin: "0 0 16px",
                      padding: "14px 20px", background: C.thHead, border: `1px solid ${C.border}`, borderRadius: 8, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                      {renderGreekText(a.text)}
                    </pre>
                  </>}
                  {a.obs ? <>
                    <H3>Observaciones de autopsia</H3>
                    <div style={{ fontSize: 14, lineHeight: 1.8, color: C.text, padding: "14px 20px", textAlign: "justify",
                      background: "rgba(255,252,245,0.9)", borderLeft: `3px solid ${d.color}`, borderRadius: "0 8px 8px 0" }}>
                      {renderDesc(a.obs)}
                    </div>
                  </> : <p style={{ fontSize: 12.5, color: C.dim, fontStyle: "italic", margin: 0 }}>Sin observaciones propias.</p>}
                </article>
              );
            })}

            <H3>{SIN_FOTOS ? "Facsímiles" : "Fotografías y facsímiles"}</H3>
            {imagenes.length === 0 ? (
              <div style={{ border: `1.5px dashed ${C.border}`, borderRadius: 10, padding: "26px 20px", textAlign: "center", color: C.dim, fontSize: 13, fontStyle: "italic" }}>
                {SIN_FOTOS ? "Esta laminilla no tiene facsímil propio; las fotografías no se publican porque su difusión depende de la autorización de la Eforía de Antigüedades de Ioánina."
                  : "No hay fotografías disponibles para esta laminilla."}
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
                {imagenes.map((src, i) => {
                  const fac = src.includes("facsimil");
                  return (
                    <figure key={src} style={{ margin: 0 }}>
                      <a href={photoUrl(src)} target="_blank" rel="noreferrer">
                        <img src={photoUrl(src)} alt={`Laminilla ${selected.siglum || selected.key}, ${fac ? "facsímil" : `fotografía ${i + 1}`}`} loading="lazy"
                          style={{ width: "100%", height: 160, objectFit: fac ? "contain" : "cover", background: "#fff", borderRadius: 8, border: `1px solid ${C.border}` }} />
                      </a>
                      <figcaption style={{ fontSize: 10.5, color: C.dim, marginTop: 4, textAlign: "center" }}>{fac ? "Facsímil (elaboración propia)" : `Fotografía ${i + 1}`}</figcaption>
                    </figure>
                  );
                })}
              </div>
            )}
          </section>
        </div>

        <p style={{ fontSize: 12, color: C.dim, textAlign: "center", marginTop: 30, maxWidth: 760, marginInline: "auto", lineHeight: 1.7 }}>
          {Object.values(CAMPANAS_AUTOPSIAS).join(" ")} M y ΑΜΙ remiten a los números de inventario del museo y arqueológico.
        </p>
        <Pie color={C.terra} />
      </main>
    </div>
  );
}
