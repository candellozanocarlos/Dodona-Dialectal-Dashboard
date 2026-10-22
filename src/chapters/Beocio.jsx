// Capítulo: el dialecto beocio en las laminillas oraculares de Dodona.
import { useState } from "react";
import { C, CAT_COLORS, PROSE, colorSiglo, fade } from "../theme.js";
import { MACROGRUPOS, TOTAL_BEOC, TOTAL_CORPUS, TOTAL_TES, pct } from "../data/corpus.js";
import {
  ALF_BEOC, ALF_BEOC_PIE, BO_KIND, BO_PLACES, CHRONO_DETAIL_BEOC, GRAFIA_TIMELINE_BEOC, LITERARY_SOURCES_BEOC,
  MATRIX_BEOC, POLITICAL_LINKS_BEOC, RASGOS_BEOC, RASGO_TEXTS_BEOC, THEMES_BEOC, VOWEL_EXAMPLES_BEOC, VOWEL_PHENOM_BEOC,
} from "../data/beocio.js";
import { fmtDvc, renderDesc, renderGreekText } from "../lib/text.jsx";
import { Bars, DonutLegend, Temas } from "../components/charts.jsx";
import { Ref, RefList } from "../components/Inscriptions.jsx";
import BoeotiaMap from "../components/maps/BoeotiaMap.jsx";
import {
  Card, CatLegend, ChapterLayout, EventTable, PlaceCard, RasgoExplorer, Sec, SourceList, Stat, Stats, Table,
} from "../components/ui.jsx";
import CompartidosTesBeoc from "./CompartidosTesBeoc.jsx";

const TABS = [
  { id: "context", l: "Contexto histórico", i: "📜" },
  { id: "map", l: "Mapa y topónimos", i: "🗺️" },
  { id: "profile", l: "Perfil dialectal", i: "Β" },
  { id: "vowels", l: "Vocalismo", i: "Ε" },
  { id: "shared", l: "Compartidos con tesalio", i: "🤝" },
];

// Evoluciones vocálicas del beocio (§3.1).
const SYSTEM_ROWS = [
  ["*ai̯", "/ai̯/", "/ɛː/", "⟨ΑΕ⟩ (epicórica), ⟨Η⟩ (milesia)"],
  ["*ei̯", "/eː/", "/eː/ > /iː/", "⟨ΕΙ⟩, luego ⟨Ι⟩"],
  ["*ē", "/ɛː/", "/eː/", "⟨Ε⟩ (epicórica), ⟨ΕΙ⟩ (milesia)"],
  ["e + vocal", "/eo/, /ea/", "/io/, /ia/ (o /i̯o/)", "⟨ΙΟ⟩, ⟨ΙΑ⟩"],
  ["*oi̯", "/oi̯/", "/oe̯/ > /yː/", "⟨ΟΕ⟩, luego ⟨Υ⟩"],
];

export default function Beocio({ switcher }) {
  const [tab, setTab] = useState("context");
  const [place, setPlace] = useState(null);

  return (
    <ChapterLayout switcher={switcher} color={C.beocio} accent={[C.terra, C.beocio, C.blue, C.green]}
      title={<>El dialecto <em style={{ fontWeight: 700, color: C.beocio }}>beocio</em> en las laminillas oraculares de Dodona</>}
      subtitle="Análisis lingüístico del corpus oracular · Fonología, morfología, sintaxis y léxico"
      stats={<>
        <Stat label="Inscripciones" value={String(TOTAL_BEOC)} sub="ss. V–II a.C." accent={C.beocio} />
        <Stat label="Corpus dialectal" value={`${pct(TOTAL_BEOC)} %`} sub={`${TOTAL_BEOC} de ${TOTAL_CORPUS}`} accent={C.terra} />
        <Stat label="Rasgos" value={String(RASGOS_BEOC.length)} sub="identificados" accent={C.blue} />
        <Stat label="Topónimo beocio seguro" value="1" sub="Orcómeno (186A)" accent={C.beocioDeep} />
      </>}
      tabs={TABS} tab={tab} onTab={setTab}>

      {tab === "context" && <>
        <Sec title="Beocia y Dodona" sub="La relación mejor documentada en las fuentes antiguas, pese a la distancia geográfica">
          <Card style={{ padding: "18px 22px" }}>
            <p style={{ ...PROSE, fontSize: 13, color: C.text, lineHeight: 1.8 }}>
              La relación entre Beocia y el santuario de Dodona es, sin duda, la mejor documentada en las fuentes antiguas, a
              pesar de que la distancia entre ambas es mayor que la que separa el Epiro de Tesalia o Acarnania: Beocia no limita
              con el Epiro ni comparte con él ninguna ruta natural obvia. El contraste con la epigrafía es notable: las laminillas
              en dialecto beocio son{" "}<b style={{ color: C.beocio }}>mucho menos numerosas que las tesalias</b> ({TOTAL_BEOC} frente
              a {TOTAL_TES}), de modo que el beocio figura entre los dialectos con menor representación del corpus. Tesalia, cuya
              conexión con Dodona reposa sobre bases literarias más tenues, ha dejado en el santuario una huella epigráfica mucho mayor.
            </p>
          </Card>
        </Sec>

        <Sec title="Testimonios literarios" sub="Fuentes antiguas sobre la conexión Beocia–Dodona">
          <SourceList sources={LITERARY_SOURCES_BEOC} color={C.beocio}
            conclusion="El conjunto de referencias literarias cruzadas muestra una fuerte relación bien conocida ya en época clásica. Dada «una cierta predilección por el arcaísmo» en las fuentes (Chapinal-Heras 2021: 129-130), la mejor explicación no es tanto la existencia de lazos desde la Edad Oscura como la voluntad consciente del koinon beocio de vincular ambos lugares en el período clásico, como refuerzo de la identidad colectiva de sus miembros, de manera similar a como la dinastía eácida instrumentalizó los vínculos míticos con Tesalia." />
        </Sec>

        <Sec title="Contexto político" sub="La τριποδηφορία y el koinon beocio: instrumentalización del vínculo con Dodona">
          <EventTable rows={POLITICAL_LINKS_BEOC} color={C.beocioDeep} />
        </Sec>
      </>}

      {tab === "map" && <>
        <Sec title="Beocia: geografía y topónimos del corpus"
          sub="Ciudades beocias mencionadas en las laminillas o relacionadas con ellas · Pulsa un símbolo para ver el detalle">
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: "2 1 520px", minWidth: 0 }}>
              <BoeotiaMap selected={place} onSelect={setPlace} />
            </div>
            <div style={{ flex: "1 1 240px", minWidth: 0 }}>
              <PlaceCard place={BO_PLACES.find((p) => p.id === place)} kinds={BO_KIND} color={C.beocio}
                onClose={() => setPlace(null)} empty={<>
                  <div style={{ fontFamily: "var(--fh)", fontSize: 15, color: C.heading, marginBottom: 6 }}>Selecciona un lugar</div>
                  <p style={PROSE}>
                    Frente a la multitud de topónimos tesalios, el corpus solo contiene un topónimo beocio seguro, Orcómeno, al que se
                    suma Oropo, polis fronteriza con el Ática. Tespias figura como procedencia propuesta de <Ref src="DVC" id="313A" /> por
                    su grafía, y Tebas como referencia histórica, sin mención en las laminillas.
                  </p>
                  <Stats style={{ marginTop: 12, marginBottom: 0 }}>
                    <Stat label="Topónimos" value="2" sub="Orcómeno · Oropo" accent={C.beocio} />
                    <Stat label="Procedencia propuesta" value="1" sub="Tespias" accent={C.beocioDeep} />
                  </Stats>
                </>} />
            </div>
          </div>
          <Card style={{ marginTop: 14 }}>
            <p style={PROSE}>
              A diferencia del tesalio, las laminillas beocias no permiten distinguir variedades regionales: solo{" "}
              <Ref src="DVC" id="313A" /> apunta, por su grafía, a una zona concreta (Tespias). Por eso el mapa no distingue áreas
              dialectales, sino las ciudades que el corpus menciona o a las que apunta, junto a las principales póleis de referencia.
            </p>
          </Card>
        </Sec>

        <Sec title="Topónimos beocios en el corpus" sub="Menciones en las laminillas y procedencia propuesta">
          <Table color={C.beocio} head={["Lugar", "Forma", "Inscripción", "Datación", "Relación con el corpus"]}
            rows={BO_PLACES.filter((p) => p.mentions.length).flatMap((p) => p.mentions.map((m) => [
              <button onClick={() => setPlace(p.id)} style={{ fontFamily: "var(--fh)", fontWeight: 600, color: BO_KIND[p.kind].color, padding: 0 }}>{p.name}</button>,
              <span className="greek" style={{ fontSize: 14, color: C.beocioDeep }}>{renderGreekText(m.form)}</span>,
              <span style={{ whiteSpace: "nowrap" }}><Ref src="DVC" id={m.ref} /></span>,
              <span style={{ color: C.dim, fontSize: 12 }}>{m.date}</span>,
              <span style={{ color: C.muted, fontSize: 12 }}>
                {p.kind === "procedencia" ? "Procedencia propuesta (grafía)" : p.certain ? "Topónimo, adscripción segura" : "Topónimo, adscripción regional discutida"}
              </span>,
            ]))} />
          <Card style={{ marginTop: 14 }}>
            <p style={PROSE}>
              Frente a la multitud de topónimos tesalios, llama la atención que en todo el corpus solo exista{" "}
              <b style={{ color: C.beocio }}>un topónimo beocio seguro</b>: Orcómeno en <Ref src="DVC" id="186A" />. También aparece
              Oropo en <Ref src="DVC" id="296A" />, polis situada en el límite entre el Ática y Beocia que Papazarkadas (2016: 122) y
              Papakonstantinou (2024: 384-385) cuentan entre las ciudades beocias más destacadas. El contraste entre la riqueza de la
              tradición literaria y la escasez de referencias geográficas en las laminillas es uno de los rasgos más llamativos del corpus beocio.
            </p>
          </Card>
        </Sec>
      </>}

      {tab === "profile" && <>
        <Sec title="El beocio en el corpus de Dodona">
          <Stats>
            <Stat label="Inscripciones beocias" value={String(TOTAL_BEOC)} accent={C.beocio} sub={`el ${pct(TOTAL_BEOC)} % del corpus dialectal`} />
            <Stat label="Tesalias por cada beocia" value={`${(TOTAL_TES / TOTAL_BEOC).toFixed(1).replace(".", ",")} : 1`} sub={`${TOTAL_TES} frente a ${TOTAL_BEOC}`} accent={C.muted} />
            <Stat label="Con rasgos sobresalientes" value="5" sub="313A, 4157A, Lhôte 27, 186A, 187A" accent={C.amber} />
          </Stats>
          <Card>
            <p style={PROSE}>
              La cifra es, además, susceptible de reducirse: tesalio y beocio comparten un número considerable de rasgos y algunas
              inscripciones podrían clasificarse en uno u otro dialecto. Méndez Dosuna (2018a: 288) señala que los textos con rasgos
              beocios verdaderamente sobresalientes se reducen a <Ref src="DVC" id="313A" />, <Ref src="DVC" id="4157A" /> e{" "}
              <Ref src="Lhôte" id="27" />, a los que añade <Ref src="DVC" id="186A" /> y <Ref src="DVC" id="187A" /> por la mención de
              Orcómeno. Su aportación al conocimiento del beocio es, en sus palabras, <i>«relatively modest»</i>: no aporta rasgos
              que no fueran ya conocidos, aunque sí constituye un valioso complemento en un registro informal y privado.
            </p>
          </Card>
        </Sec>

        <Sec title="Beocio en contexto" sub="Macrogrupos dialectales del corpus de Dodona">
          <Bars horizontal data={MACROGRUPOS} highlight="Beocio" height={300} left={200} />
        </Sec>

        <Sec title="Distribución cronológica"
          sub="El grueso del material pertenece al s. V a.C. (10 inscripciones), frente a 4 del s. IV y 2 de la transición V-IV; el único testimonio posterior es I.Dodone Lhôte 10 (ss. III-II a.C.), de adscripción dudosa">
          <Bars data={CHRONO_DETAIL_BEOC.map((d) => ({ ...d, color: colorSiglo(d.period) }))} indexBy="period" keys={["n"]} height={280} rotate={-35} />
        </Sec>

        <Sec title="Temática de las consultas" sub="Temas de consulta de las inscripciones beocias">
          <Temas data={THEMES_BEOC} color={C.beocio} height={330} />
          <p style={{ ...PROSE, fontSize: 11.5, marginTop: 8 }}>
            No existe una categoría dominante: 3 de las 17 inscripciones (el 18 %) no han podido clasificarse, proporción comparable
            a la del corpus tesalio (23 %), y ninguna temática supera los tres testimonios. La ausencia de un tema predominante refleja,
            más que una característica del grupo dialectal, las limitaciones de un corpus reducido.
          </p>
        </Sec>

        <Sec title="Alfabeto"
          note={`El ${pct(ALF_BEOC.milesio, TOTAL_BEOC)} % de las inscripciones beocias (${ALF_BEOC.milesio} de ${TOTAL_BEOC}) están escritas en el alfabeto milesio o no presentan ningún alfabeto epicórico reconocible. Las tres excepciones son I.Dodone DVC 186A, 187A y 190B, con características del alfabeto beocio, que se encuentran en la misma laminilla: la autopsia realizada en la Eforía de Antigüedades de Ioánina en 2025 permitió comprobar que presentan trazos idénticos y que forman parte de una misma consulta o, al menos, fueron escritas por la misma mano.`}>
          <DonutLegend data={ALF_BEOC_PIE} height={220} valueColor={C.beocio} />
        </Sec>

        <Sec title="Rasgos dialectales beocios" sub={`${RASGOS_BEOC.length} rasgos identificados en el corpus, en el orden del capítulo`}>
          <RasgoExplorer rasgos={RASGOS_BEOC} texts={RASGO_TEXTS_BEOC} color={C.beocio} />
        </Sec>

        <Sec title="Matriz inscripción × rasgo"
          sub="Convergencia de rasgos por inscripción: la densidad de I.Dodone DVC 313A asegura su adscripción"
          note="Cada columna corresponde a un rasgo (numeración del listado superior); el color indica la categoría. La concentración de rasgos en I.Dodone DVC 313A contrasta con el resto del corpus beocio, donde la mayoría de las adscripciones descansa en uno o dos rasgos, cuando no en un único antropónimo o topónimo.">
          <div style={{ overflowX: "auto" }}>
            <table style={{ borderCollapse: "collapse", fontSize: 11.5, minWidth: 620 }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${C.border}` }}>
                  <th style={{ padding: "6px 10px", textAlign: "left", color: C.beocio, fontFamily: "var(--fh)", fontSize: 11,
                    position: "sticky", left: 0, background: "#fdfaf3", zIndex: 1 }}>Inscripción</th>
                  {RASGOS_BEOC.map((r) => (
                    <th key={r.id} title={r.short} style={{ padding: "6px 4px", minWidth: 26, color: CAT_COLORS[r.cat],
                      fontFamily: "var(--fh)", fontSize: 11, cursor: "help" }}>{r.id}</th>
                  ))}
                  <th style={{ padding: "6px 8px", color: C.muted, fontSize: 10 }}>Σ</th>
                </tr>
              </thead>
              <tbody>
                {MATRIX_BEOC.map((row, i) => (
                  <tr key={row.dvc} style={{ borderBottom: "1px solid rgba(120,90,40,0.08)", background: i % 2 === 0 ? "rgba(255,252,245,0.5)" : "transparent" }}>
                    <td style={{ padding: "5px 10px", whiteSpace: "nowrap", fontFamily: "var(--fh)", fontWeight: row.ids.size >= 3 ? 700 : 400,
                      color: row.ids.size >= 3 ? C.beocio : C.text, position: "sticky", left: 0, background: i % 2 === 0 ? "#fbf7ef" : "#fdfaf3", zIndex: 1 }}>
                      {renderDesc(fmtDvc(row.dvc))}</td>
                    {RASGOS_BEOC.map((r) => (
                      <td key={r.id} style={{ padding: "5px 4px", textAlign: "center" }}>
                        {row.ids.has(r.id) && <span title={`${r.id}. ${r.short}`} style={{ display: "inline-block", width: 10, height: 10,
                          borderRadius: 3, background: CAT_COLORS[r.cat], opacity: 0.85 }} />}
                      </td>
                    ))}
                    <td style={{ padding: "5px 8px", textAlign: "center", fontWeight: 700, fontFamily: "var(--fh)",
                      color: row.ids.size >= 3 ? C.beocio : C.muted }}>{row.ids.size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <CatLegend />
        </Sec>
      </>}

      {tab === "vowels" && <>
        <Sec title="El sistema vocálico beocio" sub="Punto de partida compartido con tesalio y lesbio, y evolución propia acelerada">
          <Card style={{ padding: "18px 22px" }}>
            <p style={{ ...PROSE, fontSize: 13, color: C.text, lineHeight: 1.8, marginBottom: 12 }}>
              El beocio parte, como el tesalio y el lesbio, de un vocalismo de tipo <em>severior</em>: las vocales medias largas procedentes
              de alargamientos compensatorios y contracciones isovocálicas tienen el mismo grado de apertura que las heredadas. Sobre esa
              base, el beocio desarrolló una evolución vocálica de particular celeridad a lo largo de los períodos clásico y helenístico
              temprano, anticipando en buena medida la trayectoria de la koiné, y su epigrafía adapta la grafía de forma continua a los
              cambios de pronunciación.
            </p>
            <p style={{ ...PROSE, fontSize: 13, color: C.text, lineHeight: 1.8, marginBottom: 12 }}>
              Las monoptongaciones estaban en curso, e incluso consumadas en algunos casos, antes de la introducción del alfabeto jónico
              en la primera mitad del s. IV a.C.: el nuevo alfabeto no marca el inicio de los cambios, sino el momento en que la grafía
              puede registrarlos. El primero es la monoptongación de <b>/ei̯/ &gt; /eː/</b> (⟨ΕΙ⟩ e ⟨Ι⟩ alternan ya en el s. V a.C., y en el
              s. III ⟨Ι⟩ es casi general, reflejo de /iː/). A comienzos del s. IV a.C. se documenta la de <b>/ai̯/ &gt; /ae̯/ &gt; /ɛː/</b>,
              notada primero ⟨ΑΕ⟩ y luego ⟨Η⟩; esta nueva /ɛː/ empuja el cierre de la /ɛː/ heredada, que pasa a notarse ⟨ΕΙ⟩, mientras la
              /eː/ procedente de /ei̯/ se cierra en /iː/ (⟨Ι⟩).
            </p>
            <p style={{ ...PROSE, fontSize: 13, color: C.text, lineHeight: 1.8 }}>
              En el eje posterior, /ɔː/ permanece estable (⟨Ω⟩ en el alfabeto reformado) y /ou̯/ se simplifica en /oː/ y, desde el s. IV,
              se confunde con /uː/ (⟨ΟΥ⟩). El diptongo /oi̯/ pasa por /oe̯/ hasta /yː/, notado ⟨Υ⟩: es el cambio más tardío de la cadena y el
              que plantea mayores problemas de interpretación en el corpus.
            </p>
          </Card>
          <Card style={{ marginTop: 14 }}>
            <p style={{ ...PROSE, fontStyle: "italic" }}>
              No todas estas evoluciones están atestiguadas en el corpus, pero los testimonios disponibles son coherentes con lo que se
              conoce por otras fuentes, sin divergencias respecto de los patrones esperados.
            </p>
          </Card>
        </Sec>

        <Sec title="Fenómenos vocálicos beocios" sub="Formas atestiguadas en el corpus para cada fenómeno (§3.1)">
          <Stats>{VOWEL_PHENOM_BEOC.map((v) => <Stat key={v.type} label={v.type} value={v.n} sub={v.desc} accent={v.color} noCase />)}</Stats>
          <DonutLegend data={VOWEL_PHENOM_BEOC.map((v) => ({ id: v.type, label: v.type, value: v.n, color: v.color, desc: v.desc, dvcs: v.dvcs }))}
            height={260} unit="formas" valueColor={C.beocio} renderSub={(d) => <RefList dvcs={d.dvcs} />} />
        </Sec>

        <Sec title="Detalle de las inscripciones" sub="Formas fonológicamente relevantes del corpus beocio">
          <Table sticky maxHeight={480} color={C.beocio} head={["Inscripción", "Fenómeno", "Datación", "Formas"]}
            rows={VOWEL_EXAMPLES_BEOC.map((r) => [
              <span style={{ whiteSpace: "nowrap" }}><Ref src={r.src} id={r.id} /></span>,
              <span style={{ padding: "2px 7px", borderRadius: 4, fontSize: 10, color: r.color, background: fade(r.color, 0.09),
                border: `1px solid ${fade(r.color, 0.25)}`, whiteSpace: "nowrap" }}>{renderGreekText(r.phenom)}</span>,
              <span style={{ color: C.muted, fontSize: 11.5 }}>{r.date}</span>,
              <span style={{ fontStyle: "italic" }}>{renderGreekText(r.form)}</span>,
            ])} />
        </Sec>

        <Sec title="Evoluciones vocálicas del beocio" sub="Resultados y grafías frente al ático">
          <Table color={C.beocio} head={["Origen", "Ático", "Beocio", "Grafía"]}
            rows={SYSTEM_ROWS.map((row) => row.map((cell, j) => (
              <span className={j ? "greek" : undefined} style={{ fontSize: j ? 14 : 13, fontWeight: j === 2 ? 700 : 400,
                color: j === 0 ? C.amber : j === 2 ? C.beocio : C.text }}>{renderGreekText(cell)}</span>
            )))} />
        </Sec>

        <Sec title="La transición gráfica en el corpus"
          sub="Notación de /ɛː/ y valores de ⟨Η⟩ en las tres inscripciones clave, por datación"
          note="Las tres inscripciones dibujan la transición del alfabeto epicórico al milesio: la convivencia de grafías arcaicas y reformadas en una misma laminilla (I.Dodone DVC 4157A y 313A) sustenta la datación en la primera mitad del s. IV a.C. propuesta por Méndez Dosuna (2016: 123) para 313A, frente a la de los editores de I.Dodone DVC, y aconseja la misma fecha para 4157A.">
          <div style={{ position: "relative", paddingLeft: 26 }}>
            <div style={{ position: "absolute", left: 9, top: 6, bottom: 6, width: 2, borderRadius: 2,
              background: `linear-gradient(180deg, ${fade(C.amber, 0.35)}, ${fade(C.beocio, 0.4)})` }} />
            {GRAFIA_TIMELINE_BEOC.map((ins) => (
              <div key={ins.id} style={{ position: "relative", marginBottom: 18 }}>
                <div style={{ position: "absolute", left: -23, top: 6, width: 12, height: 12, borderRadius: "50%",
                  background: C.beocio, border: "2.5px solid #fdfaf3", boxShadow: `0 0 0 1.5px ${fade(C.beocio, 0.35)}` }} />
                <Card style={{ padding: "12px 16px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap", marginBottom: 8 }}>
                    <span style={{ fontFamily: "var(--fh)", fontSize: 15, fontWeight: 700, color: C.beocio }}><Ref src="DVC" id={ins.id} /></span>
                    <span style={{ fontSize: 11.5, color: C.muted, fontStyle: "italic" }}>{ins.date}</span>
                  </div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
                    {ins.grafias.map((g) => (
                      <span key={g.g + g.ej} title={g.val} style={{ display: "inline-flex", alignItems: "center", gap: 6, cursor: "help",
                        border: `1px solid ${fade(g.color, 0.33)}`, background: fade(g.color, 0.08), borderRadius: 7, padding: "3px 9px", fontSize: 12 }}>
                        <b className="greek" style={{ color: g.color, fontSize: 13.5 }}>{g.g}</b>
                        <span className="greek" style={{ fontSize: 12.5 }}>{renderGreekText(g.ej)}</span>
                      </span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 8, fontSize: 10, color: C.dim }}>
                    {ins.grafias.map((g) => (
                      <span key={g.g + g.val} style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                        <span style={{ width: 7, height: 7, borderRadius: 2, background: g.color, opacity: 0.8 }} />{renderGreekText(`${g.g}: ${g.val}`)}
                      </span>
                    ))}
                  </div>
                  <p style={{ ...PROSE, fontSize: 11.5 }}>{renderDesc(ins.note)}</p>
                </Card>
              </div>
            ))}
          </div>
        </Sec>

        <Sec title="Conclusiones"
          note="El vocalismo beocio está representado en el corpus por tres fenómenos seguros: la monoptongación /ai̯/ > /ɛː/ notada ⟨Η⟩ (κή y Πολυμνάστη en I.Dodone DVC 313A; ἀ[ρ]κε͂τη en 4157A), el paso /e/ > /i/ ante vocal (θιός, γενιά, ἰόντων en 313A; γενιᾶς en 4157A) y el cierre de la /ɛː/ heredada con notación ⟨ΕΙ⟩ (εἴει en 4157A; ΕὐϜέτειρος en 1344A). La presunta monoptongación /oi̯/ > /yː/ en γίνυτο (1060A, 1676A), γένυτο (1649A) y κυνόν (I.Dodone Lhôte 10) no cuenta con evidencia robusta: la cronología es demasiado alta, casi todos los ejemplos pertenecen a un solo paradigma y la inscripción más beocia del corpus (313A) muestra el optativo γινύο[ι]το con el diptongo conservado. El corpus confirma los rasgos conocidos por la epigrafía beocia; su aportación es modesta, pero valiosa como complemento del registro epigráfico formal." />
      </>}

      {tab === "shared" && <CompartidosTesBeoc desde="beocio" />}
    </ChapterLayout>
  );
}
