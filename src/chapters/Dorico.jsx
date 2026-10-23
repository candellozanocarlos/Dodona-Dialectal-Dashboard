// Capítulo: el dórico en las laminillas oraculares de Dodona. Se organiza en subsecciones
// (SUBSECCIONES_DOR): dórico general (DoricoGeneral.jsx), dórico noroccidental (DoricoNO.jsx) y doris severior.
import { useState } from "react";
import { C, PROSE, colorSiglo, fade } from "../theme.js";
import { MACROGRUPOS, TOTAL_CORPUS, TOTAL_SEV, pct } from "../data/corpus.js";
import {
  ALF_SEV_PIE, CHRONO_DETAIL_SEV, DIAGNOSTIC_FORMS_SEV, EXCLUDED_SEV, FILIACION_SEV, GROUP_BARS_SEV, INSCRIPCIONES_SEV,
  LITERARY_SOURCES_SEV, MG_LIGHT, POLITICAL_LINKS_SEV, SEV_BY_ID, SEV_GROUPS, SEV_NO_EXCLUYE_MEDIA, SUBSECCIONES_DOR,
  THEMES_SEV, TOPONYMS_EXCLUDED_SEV, TOPONYMS_SEV, TOPONYM_BARS_SEV, TOPONYM_MENTIONS_SEV, VOWEL_SYSTEMS_SEV, VOWEL_VARIETIES_SEV,
} from "../data/dorico.js";
import { fmtDvc, renderDesc, renderGreekText } from "../lib/text.jsx";
import { Bars, DonutLegend, Temas } from "../components/charts.jsx";
import { DvcLabel, Ref } from "../components/Inscriptions.jsx";
import MagnaGraeciaMap from "../components/maps/MagnaGraeciaMap.jsx";
import DoricoGeneral from "./DoricoGeneral.jsx";
import DoricoNO from "./DoricoNO.jsx";
import { Card, ChapterLayout, EventTable, GreekBlock, RasgoExplorer, Select, Sec, SourceList, Stat, Stats, Table } from "../components/ui.jsx";

const TABS = [
  { id: "context", l: "Contexto histórico", i: "📜" },
  { id: "map", l: "Mapa y topónimos", i: "🗺️" },
  { id: "profile", l: "Perfil dialectal", i: "Δ" },
  { id: "vowels", l: "Vocalismo", i: "Ω" },
];

// Formas del corpus citadas de manera aislada (marcadas {{…}} en los textos):
// con true se muestran sin acentos ni espíritus (se conservan macrones, puntos
// subscritos, diéresis e iota suscrita); con false, tal como figuran en el capítulo.
const FORMAS_SIN_DIACRITICOS = false;
const quitarDiacriticos = (s) => String(s).normalize("NFD").replace(/[\u0300\u0301\u0313\u0314\u0342\u0343]/g, "").normalize("NFC");
const sevForm = (f) => FORMAS_SIN_DIACRITICOS ? quitarDiacriticos(f) : f;
const renderSev = (text) => renderDesc(String(text ?? "").replace(/\{\{(.+?)\}\}/g, (_, f) => sevForm(f)));

const Btn = ({ active, onClick, children }) => (
  <button onClick={onClick} aria-pressed={active} style={{
    background: active ? fade(C.severior, 0.14) : "transparent", border: `1px solid ${active ? fade(C.severior, 0.3) : C.border}`,
    borderRadius: 7, padding: "5px 12px", color: active ? C.severiorDeep : C.muted, fontSize: 12, fontWeight: active ? 600 : 400 }}>
    {children}
  </button>
);

// Texto íntegro de una inscripción severior con su comentario.
const SevInscriptionPanel = ({ id, onClose }) => {
  const ins = SEV_BY_ID[id];
  const g = SEV_GROUPS.find((x) => x.id === ins.group);
  return (
    <div style={{ marginTop: 10, background: "rgba(60,50,30,0.04)", border: `1px solid ${C.border}`, borderRadius: 8, padding: "14px 18px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 6 }}>
        <span style={{ fontFamily: "var(--fh)", fontSize: 14.5, fontWeight: 700, color: C.severiorDeep }}>
          {renderDesc(fmtDvc(ins.id))}
          <span style={{ fontFamily: "var(--fb)", fontWeight: 400, fontSize: 11.5, color: C.muted, marginLeft: 8 }}>({ins.date})</span>
        </span>
        <span style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <span style={{ padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 700, background: fade(g.color, 0.12),
            color: g.color, border: `1px solid ${fade(g.color, 0.27)}` }}>Grupo {g.id})</span>
          {ins.autopsia && <span style={{ padding: "2px 8px", borderRadius: 4, fontSize: 10, color: C.terra,
            background: fade(C.terra, 0.08), border: `1px solid ${fade(C.terra, 0.2)}` }}>Autopsia {ins.autopsia}</span>}
          <button onClick={onClose} aria-label="Cerrar" style={{ color: C.dim, fontSize: 16, padding: "0 4px" }}>×</button>
        </span>
      </div>
      <pre lang="grc" className="greek-inscription" style={{ margin: "10px 0", fontSize: 15, lineHeight: 1.85, color: C.heading, whiteSpace: "pre-wrap" }}>
        {renderGreekText(ins.text)}
      </pre>
      <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 8 }}>
        {ins.forms.map((f) => (
          <span key={f} className="greek" style={{ fontSize: 13, padding: "1px 8px", borderRadius: 4, background: fade(C.severior, 0.09),
            color: C.severiorDeep, border: `1px solid ${fade(C.severior, 0.2)}` }}>{renderGreekText(sevForm(f))}</span>
        ))}
        <span style={{ fontSize: 10.5, color: C.dim, alignSelf: "center" }}>
          {ins.tema} · alfabeto {ins.alf === "Reformado / Desconocido" ? "reformado o no identificado" : "de Magna Grecia / Sicilia"}
        </span>
      </div>
      <p style={PROSE}>{renderSev(ins.note)}</p>
      {ins.refs && <p style={{ ...PROSE, fontSize: 11, color: C.dim, marginTop: 6 }}>{renderDesc(ins.refs)}</p>}
    </div>
  );
};

export default function Dorico({ switcher }) {
  const [sub, setSub] = useState("general");
  const [tab, setTab] = useState("context");
  const [selGroup, setSelGroup] = useState(null);
  const [clickedId, setClickedId] = useState(null);
  const [selPlace, setSelPlace] = useState(null);
  const [anillo, setAnillo] = useState(false);
  const [mentionFilter, setMentionFilter] = useState("todas");

  const nSigloIV = INSCRIPCIONES_SEV.filter((i) => i.period.includes("s. IV") && !i.period.includes("–")).length;
  const totalMenciones = TOPONYM_MENTIONS_SEV.length;
  const segMenciones = TOPONYM_MENTIONS_SEV.filter((m) => m.certain).length;
  const nEtnonimos = TOPONYM_MENTIONS_SEV.filter((m) => m.type === "etnónimo").length;
  const place = TOPONYMS_SEV.find((t) => t.id === selPlace);
  const filteredMentions = TOPONYM_MENTIONS_SEV.filter((m) =>
    mentionFilter === "todas" ? true : mentionFilter === "dudosas" ? !m.certain : m.type === mentionFilter);

  const subnav = (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, flexWrap: "wrap",
      padding: "10px 20px", background: fade(C.severior, 0.05), borderBottom: `1px solid ${C.border}` }}>
      <span style={{ fontSize: 11.5, color: C.muted, fontFamily: "var(--fh)", fontStyle: "italic" }}>Variedades dóricas:</span>
      {SUBSECCIONES_DOR.map((s) => {
        const act = sub === s.id;
        return (
          <button key={s.id} onClick={() => setSub(s.id)} aria-pressed={act} style={{ background: act ? s.color : "transparent",
            color: act ? "#fff" : C.muted, border: `1px solid ${act ? s.color : C.border}`, borderRadius: 20,
            padding: "4px 14px", fontFamily: "var(--fh)", fontSize: 12.5, fontWeight: act ? 700 : 500 }}>{s.label}</button>
        );
      })}
    </div>
  );

  if (sub === "general") return <DoricoGeneral switcher={switcher} subnav={subnav} />;
  if (sub === "noroccidental") return <DoricoNO switcher={switcher} subnav={subnav} />;

  return (
    <ChapterLayout switcher={switcher} subnav={subnav} color={C.severior} accent={[C.terra, C.severior, C.blue, C.green]}
      title={<>La <em style={{ fontWeight: 700, color: C.severior }}>Doris severior</em> en las laminillas oraculares de Dodona</>}
      subtitle="Dórico de la Magna Grecia · Un único rasgo diagnóstico: ⟨Η⟩ y ⟨Ω⟩ en las vocales medias largas secundarias"
      stats={<>
        <Stat label="Inscripciones" value={String(TOTAL_SEV)} sub="ss. V–III a.C." accent={C.severior} />
        <Stat label="Corpus dialectal" value={`${pct(TOTAL_SEV)} %`} sub={`${TOTAL_SEV} de ${TOTAL_CORPUS}`} accent={C.terra} />
        <Stat label="Rasgo diagnóstico" value="1" sub="vocalismo severior" accent={C.blue} />
        <Stat label="Menciones occidentales" value={String(totalMenciones)} sub={`${TOPONYMS_SEV.length} nombres, ${segMenciones} seguras`} accent={C.severiorDeep} />
      </>}
      tabs={TABS} tab={tab} onTab={setTab}>

      {tab === "context" && <>
        <Sec title="Magna Grecia y Dodona" sub="Una franja de mar que funcionó como puente entre el Epiro y Occidente">
          <Card style={{ padding: "18px 22px" }}>
            <p style={{ ...PROSE, fontSize: 13, color: C.text, lineHeight: 1.8 }}>
              Situado en el extremo noroccidental de la Hélade, frente a la costa itálica, el Epiro miraba de forma natural hacia el
              mar Jónico y el Adriático, cuyo punto más angosto, el estrecho de Otranto, separa apenas unos setenta kilómetros las dos
              orillas. Lejos de constituir una barrera, esa franja de mar funcionó como un puente para el tránsito de personas y
              mercancías entre la Grecia continental y las colonias de la Italia meridional y de Sicilia (Lombardo 2017: 113;
              Giannakis 2024b: 97-98). La imagen de un Epiro aislado y periférico ha sido revisada (Castiglioni 2016: 113-114;
              Chapinal-Heras 2021: 24-25): el territorio estuvo en contacto continuado primero con las <i>poleis</i> del noroeste, como
              Acarnania, Ambracia o Corfú, y con las colonias del norte, como Apolonia y Epidamno, y después, a través de esas escalas,
              con Occidente. Las tumbas de Liatovouni, con ajuares de procedencia macedonia e itálica, y la cerámica de estilos
              diversos de Mavromandilia, muy cerca del santuario, confirman ese cuadro para época arcaica.
            </p>
          </Card>
        </Sec>

        <Sec title="Una variedad dialectal compartida" sub="Por qué el vocalismo identifica a un consultante foráneo, pero no su región">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
            <Card accent={C.severior}>
              <p style={PROSE}>
                Los dialectos dóricos del corpus se reparten entre el dórico <i>sensu lato</i>, mayoritario, y el noroccidental, propio del
                Epiro y de las regiones colindantes, ambos de vocalismo <i>mitior</i> (Filos 2018a: 241-242). Frente a ese fondo, un grupo
                reducido de inscripciones presenta el vocalismo de la <b style={{ color: C.severior }}><i>Doris severior</i></b>: las vocales medias
                largas secundarias conservaron el grado de apertura de las heredadas y se notaron con ⟨Η⟩ y ⟨Ω⟩, no con ⟨ΕΙ⟩ y ⟨ΟΥ⟩
                (Bartoněk 2015: 144-146).
              </p>
            </Card>
            <Card accent={C.amber}>
              <p style={PROSE}>
                El severior no es propio de una sola región: lo comparten Laconia y Mesenia, Cirene, la Élide, el cretense clásico y, en
                Occidente, Tarento, Heraclea, Locros Epicefirios y las fundaciones aqueas (Buck 1955: §25; Del Barrio Vega 1998: 258;
                2006: 20); el dórico de Sicilia, en cambio, es <i>mitior</i>. Basta, por tanto, para reconocer a un consultante dórico
                foráneo, pero solo un dato adicional (topónimo, antropónimo, alfabeto epicórico o léxico regional) permite afinar su
                procedencia. De esas áreas, solo la Magna Grecia está documentada con seguridad en Dodona y forma un bloque coherente;
                Laconia y la Élide se tratan entre los dialectos minoritarios.
              </p>
            </Card>
            <Card accent={C.blue}>
              <p style={PROSE}>
                El vínculo suele explicarse por la colonización, en la medida en que las nuevas fundaciones reproducían el dialecto de sus
                metrópolis (Giannakis 2024b: 103). Pero en Occidente el vocalismo no sigue la filiación colonial: Locros Epicefirios es
                severior frente al <i>mitior</i> de la Lócride, como las colonias aqueas de Crotona, Metaponto, Síbaris y Posidonia frente a
                Acaya. Lo más verosímil es que su severior sea una innovación debida al influjo de las colonias laconias vecinas,
                Tarento y Heraclea (Méndez Dosuna 1991: 34): el rasgo apunta al Occidente dórico en su conjunto antes que a una metrópoli.
              </p>
            </Card>
          </div>
        </Sec>

        <Sec title="Testimonios literarios" sub="Dodona como escala, real o simbólica, en el paso hacia Occidente">
          <SourceList sources={LITERARY_SOURCES_SEV} color={C.severior}
            conclusion="En conjunto, estos testimonios muestran que en época helenística y romana existía una tradición consolidada que hacía de Dodona una escala obligada, real o simbólica, en el paso hacia Occidente." />
        </Sec>

        <Sec title="Contexto político" sub="De Dionisio I a Pirro: la casa molosa y el Occidente dórico">
          <EventTable rows={POLITICAL_LINKS_SEV} color={C.severiorDeep} />
          <Card style={{ marginTop: 12 }}>
            <p style={PROSE}>
              El grueso del material severior del corpus es anterior a estas campañas y se concentra en el s. IV a.C., de modo que la
              intervención de Pirro no explica la presencia de consultantes occidentales en el santuario, sino que corona una relación
              ya consolidada. El estudio sistemático de esta conexión arranca con Vokotopoulou (1992), la primera en documentarla sobre
              base epigráfica, con un material entonces inédito en su mayor parte; la publicación íntegra del corpus en 2013 permite
              sustituir las impresiones de conjunto por un recuento verificable.
            </p>
          </Card>
        </Sec>

        <Sec title="Tres indicios del alcance occidental" sub="Ninguno de ellos permite, por sí solo, adscribir una consulta a un dialecto">
          <Stats>
            <Stat label="Literario e histórico" value={String(LITERARY_SOURCES_SEV.length + POLITICAL_LINKS_SEV.length)} sub="testimonios y vínculos" accent={C.amber} />
            <Stat label="Toponímico" value={String(totalMenciones)} sub={`menciones de ${TOPONYMS_SEV.length} nombres`} accent={C.severior} />
            <Stat label="Gráfico" value="17" sub="laminillas, al menos, en alfabeto ítalo-dórico o siciliano" accent={C.blue} />
          </Stats>
          <Card>
            <p style={PROSE}>
              Un topónimo puede figurar en la pregunta de un consultante ajeno a la ciudad mencionada, y el alfabeto epicórico, aunque
              remite de forma inequívoca a un área (signo Ͱ para la aspiración y gamma en forma de C; LSAG²: 183), informa sobre la
              tradición gráfica del texto y no sobre la variedad del consultante. A esas diecisiete laminillas se suma{" "}
              <Ref src="DVC" id="312B" />, atribuida a Sicilia por el término {renderGreekText(sevForm("γάναν"))} (át. γυνή). El criterio
              que organiza la tesis es el dialectal y, en este caso, se reduce a un rasgo único: la Magna Grecia es el marco del capítulo
              porque ninguna otra región de habla severior reúne en Dodona tradición literaria, nómina toponímica y repertorio alfabético propio.
            </p>
          </Card>
        </Sec>
      </>}

      {tab === "map" && <>
        <Sec title="Topónimos y etnónimos occidentales en el corpus"
          sub={`${TOPONYMS_SEV.length} nombres en ${totalMenciones} menciones: la nómina occidental es la más rica de todas las regiones representadas`}>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 6, marginBottom: 8 }}>
            <Btn active={!anillo} onClick={() => setAnillo(false)}>Total de menciones</Btn>
            <Btn active={anillo} onClick={() => setAnillo(true)}>Seguras frente a dudosas</Btn>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: "2 1 520px", minWidth: 0 }}>
              <MagnaGraeciaMap selected={selPlace} onSelect={setSelPlace} anillo={anillo} />
            </div>
            <div style={{ flex: "1 1 240px", minWidth: 0 }}>
              {!place && (
                <Card>
                  <div style={{ fontFamily: "var(--fh)", fontSize: 15, color: C.heading, marginBottom: 6 }}>Selecciona un lugar</div>
                  <p style={PROSE}>
                    El reparto es equilibrado y ningún centro destaca con claridad: encabezan la lista Heraclea, Crotona y Turios, con tres
                    menciones cada una, aunque Turios solo alcanza esa cifra con una mención dudosa.
                  </p>
                  <Stats style={{ marginTop: 12, marginBottom: 0 }}>
                    <Stat label="Seguras" value={String(segMenciones)} accent={C.severior} />
                    <Stat label="Dudosas" value={String(totalMenciones - segMenciones)} accent={MG_LIGHT} />
                  </Stats>
                </Card>
              )}
              {place && (
                <Card accent={place.seg ? C.severior : MG_LIGHT}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 6 }}>
                    <div>
                      <span style={{ fontFamily: "var(--fh)", fontSize: 19, fontWeight: 700, color: C.severiorDeep }}>{place.name}</span>
                      <span style={{ fontStyle: "italic", color: C.muted, marginLeft: 8, fontSize: 14 }}>{renderGreekText(place.greek)}</span>
                    </div>
                    <button onClick={() => setSelPlace(null)} aria-label="Cerrar" style={{ color: C.dim, fontSize: 18 }}>×</button>
                  </div>
                  {place.filiacion && <div style={{ fontSize: 11, color: C.dim, margin: "2px 0 10px" }}>{place.filiacion}</div>}
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, margin: "10px 0" }}>
                    {place.mentions.map((m) => (
                      <div key={m.ref + m.type} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 4, padding: "7px 10px", borderRadius: 6,
                        background: m.certain ? fade(C.severior, 0.07) : "rgba(120,90,40,0.04)",
                        border: `1px ${m.certain ? "solid" : "dashed"} ${m.certain ? fade(C.severior, 0.25) : C.border}` }}>
                        <span style={{ fontSize: 12, color: C.heading }}>{renderDesc(fmtDvc(m.ref))}</span>
                        <span style={{ fontSize: 9.5, color: m.certain ? C.severior : C.dim, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.6 }}>
                          {m.certain ? "segura" : "dudosa"}</span>
                        <span className="greek" style={{ fontSize: 14, color: C.severiorDeep }}>{renderGreekText(sevForm(m.form))}</span>
                        <span style={{ fontSize: 10.5, color: C.muted, fontStyle: "italic" }}>{m.type}</span>
                        <span style={{ fontSize: 10.5, color: C.dim, gridColumn: "1 / -1" }}>{m.date}</span>
                      </div>
                    ))}
                  </div>
                  <p style={{ ...PROSE, fontSize: 12 }}>{renderSev(place.note)}</p>
                </Card>
              )}
            </div>
          </div>
        </Sec>

        <Sec title="Menciones por lugar" sub={`Menciones seguras frente a restituidas o dudosas (n = ${totalMenciones})`}>
          <Bars horizontal data={TOPONYM_BARS_SEV} keys={["seguras", "dudosas"]} height={450} left={100} maxValue={3} unit="menciones"
            colors={{ seguras: C.severior, dudosas: MG_LIGHT }} labels={{ seguras: "Mención segura", dudosas: "Mención restituida o dudosa" }} />
          <Card style={{ marginTop: 8 }}>
            <p style={PROSE}>
              Con dos menciones figuran Tarento, Siracusa, Mesina y Regio, estas dos últimas solo con menciones restituidas o discutidas;
              con una sola mención segura, Metaponto, Síbaris, Hergetio, Hiponio y la propia Sicilia. Si bien los topónimos no denotan
              por sí solos el origen de los consultantes, sí prueban el radio de acción del oráculo, y los etnónimos lo señalan además de forma directa.
            </p>
          </Card>
        </Sec>

        <Sec title="Las menciones, una a una"
          sub={`${totalMenciones - nEtnonimos} topónimos y ${nEtnonimos} etnónimos; los etnónimos se concentran en las consultas públicas y los topónimos en las privadas de navegación y traslado`}>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
            {[["todas", "Todas"], ["topónimo", "Topónimos"], ["etnónimo", "Etnónimos"], ["dudosas", "Dudosas"]].map(([k, l]) => (
              <Btn key={k} active={mentionFilter === k} onClick={() => setMentionFilter(k)}>{l}</Btn>
            ))}
          </div>
          <Table color={C.severior} head={["Lugar", "Forma", "Inscripción", "Datación", "Tipo", "Certeza"]}
            rows={filteredMentions.map((m) => [
              <span style={{ fontFamily: "var(--fh)", fontWeight: 600, color: C.heading }}>{m.place}</span>,
              <span className="greek" style={{ fontSize: 14, color: C.severiorDeep }}>{renderGreekText(sevForm(m.form))}</span>,
              <span style={{ whiteSpace: "nowrap" }}>{renderDesc(fmtDvc(m.ref))}</span>,
              <span style={{ color: C.dim, fontSize: 11.5 }}>{m.date}</span>,
              <span style={{ color: C.muted, fontStyle: "italic" }}>{m.type}</span>,
              <span style={{ padding: "1px 7px", borderRadius: 4, fontSize: 10, fontWeight: 700, background: m.certain ? C.severior : "transparent",
                color: m.certain ? "#fff" : C.muted, border: `1px ${m.certain ? "solid" : "dashed"} ${m.certain ? C.severior : C.dim}` }}>
                {m.certain ? "segura" : "dudosa"}</span>,
            ])} />
        </Sec>

        <Sec title="Fuera del recuento" sub="Menciones descartadas por tratarse de antropónimos, teónimos o lecturas insostenibles">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 10 }}>
            {TOPONYMS_EXCLUDED_SEV.map((e) => (
              <Card key={e.ref}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 12, color: C.heading }}>{renderDesc(fmtDvc(e.ref))}</span>
                  <span className="greek" style={{ fontSize: 14, color: C.muted, textDecoration: "line-through", textDecorationColor: "rgba(120,90,40,0.35)" }}>
                    {renderGreekText(sevForm(e.form))}</span>
                </div>
                <p style={{ ...PROSE, fontSize: 11.5 }}>{renderSev(e.why)}</p>
              </Card>
            ))}
          </div>
        </Sec>
      </>}

      {tab === "profile" && <>
        <Sec title={<>La <i>Doris severior</i> en números</>} sub={`${TOTAL_SEV} inscripciones, el ${pct(TOTAL_SEV)} % del corpus dialectal, por detrás del beocio`}>
          <Stats>
            <Stat label="Inscripciones" value={String(TOTAL_SEV)} sub="con vocalismo severior" accent={C.severior} />
            <Stat label="Del s. IV a.C." value={String(nSigloIV)} sub={`de ${TOTAL_SEV}`} accent={C.amber} />
            <Stat label="Menciones de centros del área" value={`${FILIACION_SEV.severior} de ${FILIACION_SEV.total}`} sub="entre las de filiación colonial conocida" accent={C.blue} />
            <Stat label="Alfabeto ítalo-dórico" value="4" sub="I.Dodone DVC 1432, 2367, 2409A · I.Dodone Lhôte 5" accent={C.severiorDeep} />
          </Stats>
          <Card>
            <p style={PROSE}>
              La cifra supone una ampliación considerable del cuadro disponible, puesto que Tselikas (2018: 258-259) solo reconocía
              como severior dos consultas, I.Dodone DVC 1432 y 2409A. La escasez contrasta con la nómina toponímica occidental, la más
              rica del corpus, pero se atenúa si se atiende a la filiación colonial de las <i>poleis</i> mencionadas: si bien solo
              Tarento y Heraclea son fundaciones laconias, también las colonias aqueas de Crotona, Metaponto y Síbaris, y la locria
              Locros Epicefirios (de la que Hiponio es colonia), presentan vocalismo severior, de modo que la mayor parte de los centros
              itálicos citados pertenece al área del rasgo ({FILIACION_SEV.severior} de las {FILIACION_SEV.total} menciones de filiación
              conocida). Queda fuera sobre todo Sicilia, de vocalismo <i>mitior</i> ({FILIACION_SEV.mitior} menciones de Siracusa), junto
              con Regio y Mesina ({FILIACION_SEV.calcidica}), que recibieron primero colonos calcídicos de Eubea y después refugiados
              mesenios, cuyo dialecto no llegó a sobrevivir (Str. VI, 1, 6; Bartoněk 2015: 128); Turios, fundación panhelénica, aporta
              las {FILIACION_SEV.panhelenica} restantes.
            </p>
          </Card>
        </Sec>

        <Sec title={<><i>Doris severior</i> en contexto</>} sub="Macrogrupos dialectales del corpus de Dodona">
          <Bars horizontal data={MACROGRUPOS} highlight="Doris severior" height={300} left={200} />
        </Sec>

        <Sec title="Distribución cronológica"
          sub={`El grueso del material se concentra en el s. IV a.C. (${nSigloIV} de ${TOTAL_SEV}); el único testimonio posterior es I.Dodone DVC 3842`}>
          <Bars data={CHRONO_DETAIL_SEV.map((d) => ({ ...d, color: colorSiglo(d.period) }))} indexBy="period" keys={["n"]} height={280} rotate={-35} />
          <p style={{ ...PROSE, fontSize: 11.5, marginTop: 4 }}>
            Dos inscripciones del s. V (<Ref src="DVC" id="429B" /> y <Ref src="DVC" id="3354A" />), una de transición V-IV
            (<Ref src="DVC" id="268A" />), once del s. IV, una de transición IV-III (<Ref src="Lhôte" id="5" />) y una de la primera
            mitad del s. III (<Ref src="DVC" id="3842" />), en una posición comparable a la del testimonio tardío aislado que cierra
            las series del beocio y del tesalio.
          </p>
        </Sec>

        <Sec title="Temática de las consultas" sub={`Temas de consulta (n = ${TOTAL_SEV})`}>
          <Temas data={THEMES_SEV} color={C.severior} height={310} />
          <p style={{ ...PROSE, fontSize: 11.5, marginTop: 8 }}>
            Dos de las dieciséis inscripciones (el 12,5 %) no han podido clasificarse; en I.Dodone Lhôte 5, consulta pública sobre la
            prosperidad y los territorios de la ciudad, ello obedece a la naturaleza del texto y no a su conservación. Destacan las
            consultas religiosas y las relativas a la vida familiar o matrimonial, con tres testimonios cada una.
          </p>
        </Sec>

        <Sec title="Alfabeto"
          note="El 75 % de las inscripciones (12 de 16) emplean el alfabeto jónico reformado o un alfabeto que no puede identificarse. Las cuatro excepciones están escritas en alfabetos de la Magna Grecia y Sicilia: I.Dodone DVC 1432 e I.Dodone Lhôte 5, las dos únicas en las que el vocalismo severior se combina con un dato onomástico o toponímico inequívoco, e I.Dodone DVC 2367 y 2409A, con el signo de aspiración Ͱ propio de esa zona.">
          <DonutLegend data={ALF_SEV_PIE} height={220} valueColor={C.severior} />
        </Sec>

        <Sec title="Rasgo dialectal: el vocalismo severior"
          sub="Único rasgo diagnóstico del conjunto; las dieciséis inscripciones se agrupan según la solidez del testimonio (§4.1.2)">
          <Card style={{ marginBottom: 14, padding: "16px 20px" }}>
            <div style={{ fontFamily: "var(--fh)", fontSize: 17, fontWeight: 600, color: C.heading, marginBottom: 8 }}>
              Vocalismo severior: ⟨Η⟩ y ⟨Ω⟩ en las vocales medias largas secundarias
            </div>
            <p style={PROSE}>
              Las vocales medias largas secundarias, surgidas de contracción y de los alargamientos compensatorios, conservan el grado
              de apertura de las heredadas, /ɛː/ y /ɔː/, y se notan con ⟨Η⟩ y ⟨Ω⟩, frente a los dígrafos ⟨ΕΙ⟩ y ⟨ΟΥ⟩ del <i>mitior</i>.
              A diferencia del tesalio y del beocio, este conjunto carece de morfología, sintaxis o léxico privativos: los demás rasgos
              que concurren con el vocalismo confirman la filiación dórica sin precisarla, y la adscripción de las dieciséis laminillas
              descansa por entero en este rasgo.
            </p>
          </Card>

          <Bars horizontal data={GROUP_BARS_SEV} height={220} left={230} maxValue={8} />
          <p style={{ ...PROSE, fontSize: 11.5, margin: "4px 0 14px" }}>
            Las dieciséis laminillas no sostienen su adscripción con la misma fuerza, y esa desigualdad organiza la clasificación.
          </p>

          <div style={{ marginBottom: 16 }}>
            <Select value={selGroup ?? ""} color={C.severior} label="Grupo de solidez del testimonio"
              onChange={(v) => { setSelGroup(v || null); setClickedId(null); }}>
              <option value="">Selecciona un grupo de la clasificación</option>
              {SEV_GROUPS.map((g) => <option key={g.id} value={g.id}>{g.id}) {g.name} ({g.n})</option>)}
            </Select>
          </div>

          {selGroup && (() => {
            const g = SEV_GROUPS.find((x) => x.id === selGroup);
            return (
              <Card style={{ padding: "18px 22px", marginBottom: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "var(--fh)", fontSize: 28, fontWeight: 700, color: g.color, lineHeight: 1 }}>{g.id})</span>
                  <div style={{ flex: 1, minWidth: 200, fontFamily: "var(--fh)", fontSize: 16.5, fontWeight: 600, color: C.heading }}>{g.name}</div>
                  <span style={{ fontFamily: "var(--fh)", fontSize: 22, fontWeight: 700, color: g.color }}>
                    {g.n} <span style={{ fontSize: 11, fontWeight: 400, color: C.muted }}>inscr.</span></span>
                </div>
                <p style={{ ...PROSE, marginBottom: 14 }}>{renderSev(g.desc)}</p>
                <div style={{ fontSize: 10, color: C.dim, marginBottom: 5, textTransform: "uppercase", letterSpacing: 1.2 }}>Inscripciones · pulsa para ver el texto</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {INSCRIPCIONES_SEV.filter((i) => i.group === g.id).map((ins) => {
                    const on = clickedId === ins.id;
                    return (
                      <button key={ins.id} onClick={() => setClickedId(on ? null : ins.id)} aria-pressed={on} style={{
                        background: fade(g.color, on ? 0.16 : 0.07), border: `1px ${g.id === "e" ? "dashed" : "solid"} ${on ? g.color : fade(g.color, 0.25)}`,
                        borderRadius: 6, padding: "6px 10px", fontSize: 11.5, color: on ? C.heading : C.muted, fontWeight: on ? 600 : 400, textAlign: "left" }}>
                        <DvcLabel dvc={ins.id} />
                        <span className="greek" style={{ display: "block", fontSize: 13, color: C.severiorDeep, marginTop: 1 }}>{renderGreekText(sevForm(ins.forms[0]))}</span>
                      </button>
                    );
                  })}
                </div>
                {clickedId && SEV_BY_ID[clickedId]?.group === g.id && <SevInscriptionPanel id={clickedId} onClose={() => setClickedId(null)} />}
              </Card>
            );
          })()}

          {!selGroup && (
            <div>
              <div style={{ fontSize: 10, color: C.dim, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1.2 }}>
                Solidez del testimonio, de mayor a menor · pulsa para ver el grupo
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {SEV_GROUPS.map((g) => (
                  <button key={g.id} className="row-hover" onClick={() => setSelGroup(g.id)}
                    style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 8px", borderRadius: 6, textAlign: "left", width: "100%" }}>
                    <span style={{ width: 18, fontFamily: "var(--fh)", fontWeight: 700, color: g.color, flexShrink: 0 }}>{g.id})</span>
                    <span style={{ width: 210, fontSize: 12, color: C.text, flexShrink: 0 }}>{g.short}</span>
                    <span style={{ flex: 1, display: "flex", gap: 3 }}>
                      {INSCRIPCIONES_SEV.filter((i) => i.group === g.id).map((i) => (
                        <span key={i.id} title={fmtDvc(i.id)} style={{ flex: `0 0 calc(${100 / TOTAL_SEV}% - 3px)`, height: 20, borderRadius: 3,
                          background: g.color, opacity: g.id === "e" ? 0.55 : 0.9,
                          backgroundImage: g.id === "e" ? "repeating-linear-gradient(135deg, rgba(255,255,255,0.35) 0 3px, transparent 3px 6px)" : "none" }} />
                      ))}
                    </span>
                    <span style={{ width: 22, textAlign: "right", fontFamily: "var(--fh)", fontWeight: 700, color: g.color }}>{g.n}</span>
                  </button>
                ))}
              </div>
              <p style={{ ...PROSE, fontSize: 11.5, marginTop: 10 }}>
                Cada bloque es una inscripción. Solo en las dos del grupo a) el texto declara la procedencia del consultante y permite
                precisar su origen siciliano y tarentino; las tres del grupo b) apuntan a un área, no a un lugar, y en las once restantes
                no cabe obtener mayor concreción regional.
              </p>
            </div>
          )}
        </Sec>

        <Sec title="Matriz inscripción × criterio" sub="Qué respalda cada adscripción, según los criterios de §4.1.1-4.1.3"
          note="● criterio presente · ◐ vocalismo de lectura dudosa · ○ vocalismo que no permite descartar la Doris media. Indicio de área: rasgo que orienta hacia una región sin identificar una ciudad (signo Ͱ, onomástica suditálica, distribución de *-ονσ- > ⟨Ω⟩). Procedencia declarada: T = topónimo (Hergetio), E = etnónimo (tarentinos).">
          <Table color={C.severior} head={["Inscripción", "Grupo", "Vocalismo severior", "Excluye la Doris media", "Otros rasgos dóricos", "Alfabeto ítalo-dórico", "Indicio de área", "Procedencia"]}
            rows={INSCRIPCIONES_SEV.map((ins) => {
              const g = SEV_GROUPS.find((x) => x.id === ins.group);
              const dot = (on, col = g.color) => on
                ? <span style={{ display: "inline-block", width: 11, height: 11, borderRadius: "50%", background: col }} />
                : <span style={{ color: C.dim }}>·</span>;
              return [
                <span style={{ whiteSpace: "nowrap", fontFamily: "var(--fh)" }}>{renderDesc(fmtDvc(ins.id))}</span>,
                <span style={{ padding: "0 7px", borderRadius: 8, background: g.color, color: "#fff", fontSize: 10.5, fontWeight: 700 }}>{g.id}</span>,
                ins.crit.voc === "s" ? dot(true) : <span title="Lectura dudosa" style={{ display: "inline-block", width: 11, height: 11, borderRadius: "50%",
                  background: `linear-gradient(90deg, ${g.color} 50%, transparent 50%)`, border: `1px solid ${g.color}` }} />,
                ins.crit.media ? dot(true, C.blue) : <span title="No permite descartar la Doris media" style={{ display: "inline-block", width: 11, height: 11,
                  borderRadius: "50%", border: `1.5px solid ${C.amber}` }} />,
                dot(ins.crit.dor, C.terra),
                dot(ins.crit.alf, C.blue),
                ins.crit.area ? <span title={ins.crit.area} style={{ display: "inline-block", width: 11, height: 11, borderRadius: "50%", background: C.green }} /> : dot(false),
                <b style={{ color: C.severiorDeep }}>{ins.crit.proc === "topónimo" ? "T" : ins.crit.proc === "etnónimo" ? "E" : <span style={{ color: C.dim, fontWeight: 400 }}>·</span>}</b>,
              ];
            })} />
        </Sec>
      </>}

      {tab === "vowels" && <>
        <Sec title="Severior, media y mitior" sub="Tratamiento de las vocales medias largas en los tres tipos de vocalismo dórico">
          <div style={{ overflowX: "auto" }}>
            <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 12.5, minWidth: 560 }}>
              <thead><tr style={{ borderBottom: `2px solid ${C.border}` }}>
                <th style={{ padding: "9px 10px", textAlign: "left", fontFamily: "var(--fh)", color: C.heading, fontWeight: 600 }}>Origen de la vocal</th>
                {VOWEL_VARIETIES_SEV.map((v) => (
                  <th key={v.id} style={{ padding: "9px 10px", textAlign: "center", fontFamily: "var(--fh)", color: v.color, fontWeight: 700 }}>{v.name}</th>
                ))}
              </tr></thead>
              <tbody>{VOWEL_SYSTEMS_SEV.map((r, i) => (
                <tr key={r.proc} style={{ borderBottom: "1px solid rgba(120,90,40,0.08)", background: i === 0 ? "rgba(120,90,40,0.04)" : "transparent" }}>
                  <td style={{ padding: "8px 10px", color: C.text }}>{r.proc}</td>
                  {["sev", "media", "mit"].map((k) => {
                    const open = r[k] === "open";
                    return (
                      <td key={k} style={{ padding: "8px 10px", textAlign: "center" }}>
                        <span style={{ display: "inline-block", minWidth: 92, padding: "3px 8px", borderRadius: 5, fontFamily: "var(--fg)", fontSize: 14,
                          background: open ? fade(C.severior, 0.12) : fade(C.green, 0.1), color: open ? C.severiorDeep : C.green,
                          border: `1px solid ${open ? fade(C.severior, 0.25) : fade(C.green, 0.25)}` }}>{open ? "⟨Η⟩ ⟨Ω⟩" : "⟨ΕΙ⟩ ⟨ΟΥ⟩"}</span>
                      </td>
                    );
                  })}
                </tr>
              ))}</tbody>
            </table>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 10, marginTop: 14 }}>
            {VOWEL_VARIETIES_SEV.map((v) => (
              <Card key={v.id} accent={v.color}>
                <div style={{ fontFamily: "var(--fh)", fontWeight: 700, color: v.color, marginBottom: 4 }}>{v.name}</div>
                <p style={{ ...PROSE, fontSize: 12 }}>{v.who}</p>
              </Card>
            ))}
          </div>
          <Card style={{ marginTop: 12 }}>
            <p style={PROSE}>
              La terminología procede de Ahrens, que la tomó de los <i>scholia vetera</i> a Teócrito, donde se distingue entre un dórico
              antiguo, áspero (τραχεῖα), y uno nuevo, más suave (μαλθακωτέρα). Bartoněk (1966: 62) introdujo después el concepto de{" "}
              <i>Doris media</i>: conserva el grado de apertura heredado en las vocales del primer alargamiento compensatorio y presenta
              vocales cerradas en las contracciones isovocálicas y, cuando se producen, en el segundo y el tercer alargamientos. Se supuso
              en un principio que también el segundo alargamiento daba vocales abiertas en los dialectos «medios», pero Del Barrio Vega
              (1998: 258 n. 3), como antes Ruijgh (1984: 66 n. 20), demostró que su resultado es siempre cerrado, algo que el propio
              Bartoněk (2015: 146) confirmó. La teoría tradicional entiende el severior como el estado heredado y el mitior como
              innovación; Sheets (1979) y Ruijgh (1984) sostienen lo contrario: el severior sería la innovación.
            </p>
          </Card>
        </Sec>

        <Sec title={<>El corpus frente a la <i>Doris media</i></>} sub="Qué formas descartan la variedad intermedia y cuáles no (§4.1.3)">
          <Stats>
            <Stat label="Excluyen la Doris media" value={String(TOTAL_SEV - SEV_NO_EXCLUYE_MEDIA.length)} sub="vocalismo diagnóstico" accent={C.blue} />
            <Stat label="No la descartan" value={String(SEV_NO_EXCLUYE_MEDIA.length)} sub={SEV_NO_EXCLUYE_MEDIA.map(fmtDvc).join(" y ")} accent={C.amber} />
            <Stat label="Tercer alargamiento" value="0" sub="formas en el corpus" accent={C.muted} />
          </Stats>
          <Table color={C.severior} head={["Forma", "Inscripción", "Origen de la vocal", "Frente a la Doris media"]}
            rows={DIAGNOSTIC_FORMS_SEV.map((f) => [
              <span className="greek" style={{ fontSize: 14.5, color: C.severiorDeep }}>{renderGreekText(sevForm(f.form))}</span>,
              <span style={{ fontSize: 12 }}>{renderDesc(f.ids.map(fmtDvc).join(", ").replace(/, I\.Dodone DVC /g, ", "))}</span>,
              <span style={{ color: C.muted, fontStyle: f.doubtful ? "italic" : "normal" }}>{f.proc}</span>,
              <span style={{ padding: "1px 8px", borderRadius: 4, fontSize: 10.5, fontWeight: 700, whiteSpace: "nowrap",
                background: fade(f.diag === "si" ? C.blue : C.amber, 0.09), color: f.diag === "si" ? C.blue : C.amber,
                border: `1px solid ${fade(f.diag === "si" ? C.blue : C.amber, 0.2)}` }}>
                {f.diag === "si" ? "diagnóstica (media: ⟨ΕΙ⟩/⟨ΟΥ⟩)" : "no diagnóstica (media: ⟨Η⟩/⟨Ω⟩)"}</span>,
            ])} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 10, marginTop: 12 }}>
            <Card accent={C.amber}>
              <p style={{ ...PROSE, fontSize: 12 }}>{renderSev("El caso de {{ἦμεν}} resulta ilustrativo: la forma está bien documentada en Cos, isla de vocalismo intermedio (Zamora Salamanca 1991: 5-8), mientras que los dialectos mitior presentan de manera sistemática εἶμεν (Fócide, Lócride, Etolia, Epidauro). De las cuatro formas no diagnósticas, dos conviven con otras probatorias en la misma laminilla (I.Dodone DVC 2409A y 2367), de modo que solo I.Dodone DVC 3128 e I.Dodone Lhôte 5 no permiten descartar por vía vocálica la variedad intermedia.")}</p>
            </Card>
            <Card accent={C.muted}>
              <p style={{ ...PROSE, fontSize: 12 }}>{renderSev("Sobre {{χηρ-}}, Buck (1955: §25b) señala que χηρ- por χειρ- se documenta también en Delfos y Corinto, dialectos mitior, y lo atribuye en parte a un nominativo χήρ rehecho sobre los temas en -ηρ. De aceptarse, el tratamiento perdería valor probatorio incluso frente al mitior; se mantiene aquí dado el carácter parcial que el propio Buck concede a esa explicación.")}</p>
            </Card>
            <Card accent={C.blue}>
              <p style={{ ...PROSE, fontSize: 12 }}>
                El tercer alargamiento no está representado, lo cual es esperable: afecta a grupos con digamma y sus ejemplos se reducen
                casi a ξένος, κόρος y compuestos, a menudo onomásticos (Nieto Izquierdo 2001: 11). En Occidente apenas se documenta
                (<i>ibid.</i> 20 n. 38) y su valor clasificatorio es discutible, pues no puede probarse en Cos, Rodas, Calimna, Anafe ni
                Cnido (Nieto Izquierdo 2004: 90-91).
              </p>
            </Card>
          </div>
          <Card style={{ marginTop: 12, borderColor: fade(C.severior, 0.3) }}>
            <p style={{ ...PROSE, color: C.text }}>
              Catorce de las dieciséis laminillas presentan formas que excluyen la variedad intermedia. En I.Dodone Lhôte 5 el
              vocalismo, apoyado solo en el primer alargamiento, no bastaría por sí mismo, aunque el alfabeto y la identificación de
              Tarento aseguran la procedencia. Solo <Ref src="DVC" id="3128" /> apunta de forma positiva a la <i>Doris media</i>, al oponer dos
              grafías a dos vocales de origen distinto. El conjunto corresponde, pues, al <b style={{ color: C.severior }}>severior pleno</b>,
              con la única excepción posible de 3128; si se recuerda que entre los colonos de Sicilia hubo rodios y cretenses de
              vocalismo intermedio, la presencia de consultantes de esa procedencia no es inverosímil, aunque el material apenas permita identificarla.
            </p>
          </Card>
        </Sec>

        <Sec title="Límites del criterio" sub="Dos cautelas metodológicas condicionan el recuento">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 10, marginBottom: 14 }}>
            <Card accent={C.severior}>
              <div style={{ fontFamily: "var(--fh)", fontWeight: 700, color: C.severior, marginBottom: 4 }}>Cautela material</div>
              <p style={{ ...PROSE, fontSize: 12 }}>
                El rasgo solo es visible cuando la inscripción contiene alguna vocal media larga secundaria: un texto breve o mutilado
                puede ser severior sin que su vocalismo aflore. Las dieciséis inscripciones son, por tanto, un <b>límite inferior</b>.
              </p>
            </Card>
            <Card accent={C.blue}>
              <div style={{ fontFamily: "var(--fh)", fontWeight: 700, color: C.blue, marginBottom: 4 }}>Cautela gráfica</div>
              <p style={{ ...PROSE, fontSize: 12 }}>
                El rasgo solo es interpretable cuando ⟨Η⟩ y ⟨Ω⟩ han asumido su valor vocálico, ya que la mayoría de los alfabetos
                epicóricos no distinguen cantidad ni apertura en las vocales medias: la clasificación no puede remontarse más allá de
                finales del s. V a.C.
              </p>
            </Card>
          </div>
          <Bars data={CHRONO_DETAIL_SEV} indexBy="period" keys={SEV_GROUPS.map((g) => g.id)} height={320} rotate={-35}
            colors={Object.fromEntries(SEV_GROUPS.map((g) => [g.id, g.color]))}
            labels={Object.fromEntries(SEV_GROUPS.map((g) => [g.id, `${g.id}) ${g.short}`]))}
            bands={[{ from: "Finales s. V", to: "Transición V–IV", label: "Franja menos fiable" }]} />
          <p style={{ ...PROSE, fontSize: 11.5, marginTop: 4 }}>
            Tres de las dieciséis laminillas (<Ref src="DVC" id="429B" />, <Ref src="DVC" id="3354A" /> y <Ref src="DVC" id="268A" />) se
            datan en el s. V o en la transición al s. IV y caen en la franja en que el criterio resulta menos fiable; dos de ellas
            (3354A y 268A) pertenecen además al grupo e).
          </p>
        </Sec>

        <Sec title="Casos excluidos" sub="Inscripciones de apariencia o procedencia occidental que no documentan el rasgo">
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {EXCLUDED_SEV.map((e) => (
              <Card key={e.ref} accent={C.dim}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "var(--fh)", fontSize: 14, fontWeight: 700, color: C.heading }}>
                    {renderDesc(fmtDvc(e.ref))}
                    <span style={{ fontFamily: "var(--fb)", fontWeight: 400, fontSize: 11.5, color: C.muted, marginLeft: 8 }}>({e.date})</span>
                  </span>
                  <span style={{ padding: "2px 8px", borderRadius: 4, fontSize: 10, color: C.muted, border: `1px dashed ${C.dim}` }}>{e.tag}</span>
                </div>
                <GreekBlock size={14}>{e.text}</GreekBlock>
                <p style={{ ...PROSE, fontSize: 12, marginTop: 8 }}>{renderSev(e.desc)}</p>
              </Card>
            ))}
          </div>
        </Sec>
      </>}
    </ChapterLayout>
  );
}
