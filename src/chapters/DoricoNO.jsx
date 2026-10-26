// Dórico noroccidental (cap. 5, DORICO_NO_1_Redaccion_v48): contexto (§1-§2), mapa y comunidades (§2), perfil
// dialectal (§3-§7) y escritura (§2-§4). Datos en data/doricoNO.js (generado desde el Excel y la v41).
import { useState } from "react";
import { ALFABETO_COLORS, C, DIALECT_COLORS, DIALECT_INK, ORO, PROSE, colorSiglo, fade } from "../theme.js";
import { MACROGRUPOS, TOTAL_CORPUS, TOTAL_DOR_NO, miles, pct } from "../data/corpus.js";
import {
  ALF_NO, CERTEZA_NO, CHRONO_DETAIL_NO, CONCLUSION_NO, CONTRACCION_NO, DIAG_COLS_NO, DIAGNOSTICO_NO, ESCRITURA_NO,
  INTRO_FON_NO, INTRO_MORF_NO, RASGOS_NO, RASGO_TEXTS_NO, TABLA_RASGOS_NO, THEMES_NO, TOPONYMS_NO, TOPONYM_BARS_NO,
  TOPONYM_MENTIONS_NO,
} from "../data/doricoNO.js";
import { fmtDvc, renderDesc, renderGreekText } from "../lib/text.jsx";
import { Bars, DonutLegend, Temas } from "../components/charts.jsx";
import DoricMap from "../components/maps/DoricMap.jsx";
import { NO_LAND_PATH } from "../components/maps/coastlines.js";
import { Card, ChapterLayout, RasgoExplorer, Sec, Stat, Stats, SubNav, Table } from "../components/ui.jsx";

const NO = DIALECT_COLORS.doricoNO;
const INK = DIALECT_INK.doricoNO;
const TABS = [
  { id: "context", l: "Contexto histórico", i: "📜" },
  { id: "map", l: "Mapa y comunidades", i: "🗺️" },
  { id: "profile", l: "Perfil dialectal", i: "Δ" },
  { id: "writing", l: "Escritura y contracción", i: "Ε" },
];

const Btn = ({ active, onClick, children }) => (
  <button onClick={onClick} aria-pressed={active} style={{
    background: active ? fade(NO, 0.14) : "transparent", border: `1px solid ${active ? fade(NO, 0.35) : C.border}`,
    borderRadius: 7, padding: "5px 12px", color: active ? INK : C.muted, fontSize: 12, fontWeight: active ? 600 : 400 }}>
    {children}
  </button>
);
// Los hijos se unen en una sola cadena para que renderDesc admita {"<i>…</i>"} dentro del texto.
const P = ({ children, style = {} }) => <p style={{ ...PROSE, ...style }}>{renderDesc([].concat(children).join(""))}</p>;
const Grid = ({ children, min = 260 }) => (
  <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`, gap: 12 }}>{children}</div>
);
const CardT = ({ title, accent = INK, children }) => (
  <Card accent={accent}>
    <div style={{ fontFamily: "var(--fh)", fontWeight: 700, color: accent, marginBottom: 4 }}>{title}</div>
    {children}
  </Card>
);

// Mapa: ventana del Noroeste (costa generada con scripts/coastline.py, 19,0-23,5 E y 38,0-41,0 N).
const VISTA_NO = { lon0: 19.0, lon1: 23.5, lat0: 38.0, lat1: 41.0 };
const MARES_NO = [{ t: "Mar Jónico", lon: 19.55, lat: 38.55 }, { t: "Golfo de Corinto", lon: 22.25, lat: 38.22 }];
const REGIONES_NO = [
  { t: "EPIRO", lon: 21.0, lat: 40.2 }, { t: "ILIRIA", lon: 19.95, lat: 40.85 },
  { t: "ETOLIA", lon: 21.75, lat: 38.72 }, { t: "TESALIA", lon: 22.15, lat: 39.75 },
];
const NOTAS_NO = ["El tamaño del símbolo es proporcional al número de menciones.",
  "No se sitúan los arctanes (I.Dodone Lhôte 167B) ni Padea (I.Dodone DVC 3032), de ubicación desconocida."];

// Cifras derivadas (§3).
const nSeguras = CERTEZA_NO.Seguro || 0;
const nDudosas = CERTEZA_NO.Dudoso || 0;
const nNombre = CERTEZA_NO["Solo nombre o alfabeto"] || 0;
const nSigloIV = CHRONO_DETAIL_NO.filter((d) => /s\. IV/.test(d.period) && !/–/.test(d.period)).reduce((a, d) => a + d.n, 0);
const nSigloV = CHRONO_DETAIL_NO.filter((d) => /s\. V\b/.test(d.period) && !/–/.test(d.period)).reduce((a, d) => a + d.n, 0);
const totalMenciones = TOPONYM_MENTIONS_NO.length;
const segMenciones = TOPONYM_MENTIONS_NO.filter((m) => m.certain).length;
const nEtnonimos = TOPONYM_MENTIONS_NO.filter((m) => m.type === "etnónimo").length;
const nContraccion = CONTRACCION_NO.reduce((a, c) => a + c.seguras + c.dudosas, 0);
const ALF_PIE = [
  { id: "reformado", label: "Reformado o no identificado", value: (ALF_NO["Reformado / Desconocido"] || []).length, color: C.milesio },
  { id: "corintio", label: "Corintio (cf. la pestaña “Escritura y contracción”)", value: (ALF_NO.Corintio || []).length, color: ALFABETO_COLORS.corintio },
  { id: "dodona", label: "Local de Dodona", value: (ALF_NO.Dodona || []).length, color: ALFABETO_COLORS.dodona },
];
const ESTADO = {
  2: { g: "●", bg: NO, fg: "#fff", l: "Lo excluye" }, 1: { g: "◐", bg: "#f2b8a6", fg: C.heading, l: "Lo excluye en parte" },
  0: { g: "○", bg: "#d9ccad", fg: C.heading, l: "Rasgo compartido" }, [-1]: { g: "–", bg: "#efe7d2", fg: C.dim, l: "No se trata" },
};
const certChip = (cert) => {
  const seg = cert === "Seguro";
  return <span style={{ padding: "1px 7px", borderRadius: 4, fontSize: 10, fontWeight: 700, background: seg ? NO : "transparent",
    color: seg ? "#fff" : C.muted, border: `1px ${seg ? "solid" : "dashed"} ${seg ? NO : C.dim}` }}>{seg ? "segura" : "dudosa"}</span>;
};

export default function DoricoNO({ switcher, subnav }) {
  const [tab, setTab] = useState("context");
  const [sub, setSub] = useState("cifras");   // subpestaña de Perfil dialectal
  const [selPlace, setSelPlace] = useState(null);
  const [anillo, setAnillo] = useState(false);
  const [mentionFilter, setMentionFilter] = useState("todas");
  const place = TOPONYMS_NO.find((t) => t.id === selPlace);
  const filtered = TOPONYM_MENTIONS_NO.filter((m) =>
    mentionFilter === "todas" ? true : mentionFilter === "dudosas" ? !m.certain : m.type === mentionFilter);

  return (
    <ChapterLayout switcher={switcher} subnav={subnav} color={INK} accent={[C.terra, NO, C.gold, C.blue]}
      title={<>El <span style={{ fontWeight: 700, color: INK }}>dórico noroccidental</span> en las laminillas oraculares de Dodona</>}
      subtitle="Epiro, Acarnania y la Grecia central · El dialecto del santuario, conservador y difícil de aislar"
      stats={<>
        {/* Recuentos de §3 del capítulo (DORICO_NO_1_Redaccion_v48; DVC_v5_FINAL.xlsx, DIALECTO_SUB “Dórico NO”, fila 165 de Resúmenes). */}
        <Stat label="Inscripciones" value={String(TOTAL_DOR_NO)} sub={`${nSeguras} seguras · ${nDudosas} dudosas · ${nNombre} solo por el nombre`} accent={INK} />
        <Stat label="Corpus dialectal" value={`${pct(TOTAL_DOR_NO)} %`} sub={`${TOTAL_DOR_NO} de ${miles(TOTAL_CORPUS)}`} accent={C.terra} />
        <Stat label="Rasgos propios" value={String(TABLA_RASGOS_NO.length)} sub="frente al resto del dórico" accent={C.green} />
        <Stat label="Cronología" value="ss. VI–II a.C." sub={`el ${pct(nSigloIV, TOTAL_DOR_NO)} % del s. IV a.C.`} accent={C.blue} />
      </>}
      tabs={TABS} tab={tab} onTab={setTab}>

      {tab === "context" && <>
        <Sec title="El griego noroccidental y Dodona" sub="El dialecto del santuario y, con toda probabilidad, el de la mayoría de sus visitantes (§1)">
          <Grid>
            <CardT title="El griego noroccidental">
              <P>Es la variedad dórica hablada desde la costa del mar Jónico, en el Epiro y Acarnania, por la orilla norte del golfo de Corinto, en Etolia, la Lócride occidental y la Fócide, hasta la Lócride oriental, además de la Dóride; de ella procedían también los fundadores de Locros Epicefirios (Méndez Dosuna 2014: 518). Conservadora, comparte con el resto del dórico la práctica totalidad de sus rasgos y es más un área de convergencia que un grupo dialectal originario (Méndez Dosuna 1985: 508-510).</P>
            </CardT>
            <CardT title="Un dialecto difícil de aislar" accent={C.blue}>
              <P>Lhôte (2006: 365) no encuentra un solo rasgo exclusivo de los epirotas, y Tselikas (2018: 258) observa que la mayoría de las consultas dóricas, que atribuye a epirotas, solo presentan rasgos comunes a todo el dórico. Filos (2018a: 228-229) separa los rasgos que distinguen el noroccidental del dórico propio, pero ninguno aparece por igual en todas las regiones: en el Epiro solo el dativo en -οι y, de forma muy escasa, el dativo plural en -οις.</P>
            </CardT>
            <CardT title="La koiná noroccidental" accent={C.terra}>
              <P>A lo largo del s. III a.C., la liga etolia favoreció una {"<i>koiná</i>"} de base dórica con préstamos de la {"<i>koiné</i>"} jónico-ática, que difumina las diferencias locales (Filos 2018a: 229-233). Epirotas y acarnanios evitaron, sin embargo, dos de sus rasgos más característicos, el dativo plural en -οις y ἐν con acusativo, quizá para distanciarse de los etolios (Méndez Dosuna 2014: 523).</P>
            </CardT>
          </Grid>
        </Sec>

        <Sec title="El Epiro y el Noroeste en las laminillas" sub="Las comunidades del Noroeste que consultan el oráculo o aparecen en las consultas (§2)">
          <Grid min={300}>
            <CardT title="El Epiro">
              <P>Territorio montañoso organizado en {"<i>ethne</i>"}, entre los que dominaban tesprotos, caones y molosos, y no en {"<i>poleis</i>"} hasta la época helenística. El santuario, tesproto en origen, pasó a los molosos a finales del s. V o comienzos del s. IV a.C.; el saqueo de los etolios en el 219 a.C. (Plb. 4.67.3) y la destrucción del Epiro por Emilio Paulo en el 167 a.C. (Plb. 30.15) enmarcan el final de la serie.</P>
            </CardT>
            <CardT title="Las consultas públicas" accent={C.blue}>
              <P>Los dodoneos consultan en seis ocasiones, y lo hacen también los caones, los molosos, los atamanes, los fanoteos, Casope, los bilíones y Onquesmo, además de un {"<i>koinon</i>"} que, en vísperas de la conquista romana, pregunta si le conviene hacer causa común con los molosos (I.Dodone Lhôte 9). La consulta de los διαιτοί, I.Dodone DVC 1368A (ss. V-IV a.C.), se tiene por ejemplo canónico del dialecto epirota.</P>
            </CardT>
            <CardT title="Acarnania y la Grecia central" accent={C.terra}>
              <P>Acarnania está bien representada, con Tirreo, Alicia, Ástaco y Accio. Etolia apenas aparece, por la hostilidad casi permanente entre etolios y epirotas, y las Lócrides y la Fócide, atraídas por Delfos (Giannakis 2024a: 36 n. 2), solo dejan la mención de la Lócride opuntia; Melitea, en la Acaya Ftiótide, aparece en una consulta con rasgos tesalios.</P>
            </CardT>
            <CardT title="Las colonias corintias" accent={ALFABETO_COLORS.corintio}>
              <P>El corintio y el epirota pertenecían a la {"<i>Doris mitior</i>"}, y sus textos solo se distinguen por el alfabeto. Corcira no se cuenta entre los dialectos noroccidentales (Méndez Dosuna 1985: 378-379), de modo que sus consultas solo pasan a este capítulo si presentan un rasgo propio del noroeste; el alfabeto corintio apunta al dórico, pero no permite saber si en el Epiro se escribía en él.</P>
            </CardT>
          </Grid>
        </Sec>

        <Sec title="Cómo se cuenta una consulta noroccidental" sub="El criterio del capítulo y su efecto en las cifras (§3)">
          <Stats>
            <Stat label="Dórico noroccidental" value={String(TOTAL_DOR_NO)} sub="con un rasgo propio del noroeste" accent={INK} />
            <Stat label="Seguras" value={String(nSeguras)} sub={`de ${TOTAL_DOR_NO}`} accent={NO} />
            <Stat label="Dudosas" value={String(nDudosas + nNombre)} sub={`${nNombre} solo por el nombre`} accent={ORO} />
            <Stat label="Comunidades y lugares" value={String(TOPONYMS_NO.length)} sub={`${totalMenciones} menciones, ${segMenciones} seguras`} accent={C.blue} />
          </Stats>
          <Card>
            <P>Se cuentan aquí las inscripciones que presentan al menos uno de los rasgos propios del noroccidental o atribuidos al Epiro. La procedencia no basta: de las consultas que mencionan comunidades y lugares del Noroeste solo ocho se cuentan en el capítulo, porque la mayoría solo documenta rasgos comunes a todo el dórico, y por la misma razón muchas consultas de epirotas figuran en el dórico general. El recuento es, por ello, un límite inferior.</P>
          </Card>
        </Sec>
      </>}

      {tab === "map" && <>
        <Sec title="Comunidades y lugares del Noroeste en el corpus"
          sub={`${TOPONYMS_NO.length} nombres en ${totalMenciones} menciones, ${segMenciones} de ellas seguras`}
          note="Ambracia, Anactorio, Apolonia y Epidamno, aunque se sitúan en la costa del Epiro, de Acarnania y de Iliria, son colonias corintias: se examinan con Corcira en el dórico general, y sus menciones no se cuentan aquí.">
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 6, marginBottom: 8 }}>
            <Btn active={!anillo} onClick={() => setAnillo(false)}>Total de menciones</Btn>
            <Btn active={anillo} onClick={() => setAnillo(true)}>Seguras frente a dudosas</Btn>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: "2 1 520px", minWidth: 0 }}>
              <DoricMap selected={selPlace} onSelect={setSelPlace} anillo={anillo} places={TOPONYMS_NO} color={NO}
                view={VISTA_NO} land={NO_LAND_PATH} mares={MARES_NO} regiones={REGIONES_NO} notas={NOTAS_NO}
                label="Mapa de las comunidades y los lugares del Noroeste mencionados en el corpus de Dodona" />
            </div>
            <div style={{ flex: "1 1 240px", minWidth: 0 }}>
              {!place && (
                <Card>
                  <div style={{ fontFamily: "var(--fh)", fontSize: 15, color: C.heading, marginBottom: 6 }}>Selecciona un lugar</div>
                  <P>La mayoría de las menciones corresponde al Epiro, con quince nombres y veintitrés menciones, entre las que destacan las seis consultas de los dodoneos; le sigue Acarnania, con cinco nombres y doce menciones, cinco de ellas de Accio. De la Grecia central solo aparecen la Lócride opuntia y Melitea.</P>
                  <Stats style={{ marginTop: 12, marginBottom: 0 }}>
                    <Stat label="Seguras" value={String(segMenciones)} accent={NO} />
                    <Stat label="Dudosas" value={String(totalMenciones - segMenciones)} accent={ORO} />
                  </Stats>
                </Card>
              )}
              {place && (
                <Card accent={place.seg ? NO : ORO}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 6 }}>
                    <div>
                      <span style={{ fontFamily: "var(--fh)", fontSize: 19, fontWeight: 700, color: C.heading }}>{place.name}</span>
                      <span style={{ fontStyle: "italic", color: C.muted, marginLeft: 8, fontSize: 14 }}>{renderGreekText(place.greek)}</span>
                    </div>
                    <button onClick={() => setSelPlace(null)} aria-label="Cerrar" style={{ color: C.dim, fontSize: 18 }}>×</button>
                  </div>
                  <div style={{ fontSize: 11, color: C.dim, margin: "2px 0 10px" }}>{place.ambito}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, margin: "10px 0" }}>
                    {place.mentions.map((m) => (
                      <div key={m.ref + m.form} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 4, padding: "7px 10px", borderRadius: 6,
                        background: m.certain ? fade(NO, 0.07) : "rgba(120,90,40,0.04)",
                        border: `1px ${m.certain ? "solid" : "dashed"} ${m.certain ? fade(NO, 0.3) : C.border}` }}>
                        <span style={{ fontSize: 12, color: C.heading }}>{renderDesc(fmtDvc(m.ref))}</span>
                        <span style={{ fontSize: 9.5, color: m.certain ? INK : C.dim, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.6 }}>
                          {m.certain ? "segura" : "dudosa"}</span>
                        <span className="greek" style={{ fontSize: 14, color: C.heading }}>{renderGreekText(m.form)}</span>
                        <span style={{ fontSize: 10.5, color: C.muted, fontStyle: "italic" }}>{m.type}</span>
                        <span style={{ fontSize: 10.5, color: C.dim, gridColumn: "1 / -1" }}>{m.date}</span>
                      </div>
                    ))}
                  </div>
                  <P style={{ fontSize: 12 }}>{place.note}</P>
                </Card>
              )}
            </div>
          </div>
        </Sec>

        <Sec title="Menciones por comunidad o lugar" sub={`Menciones seguras frente a restituidas o dudosas (n = ${totalMenciones})`}>
          <Bars horizontal data={TOPONYM_BARS_NO} keys={["seguras", "dudosas"]} height={560} left={120} unit="menciones"
            colors={{ seguras: NO, dudosas: ORO }} labels={{ seguras: "Mención segura", dudosas: "Mención restituida o dudosa" }} />
          <Card style={{ marginTop: 8 }}>
            <P>Las menciones dudosas dependen de una restitución o de una identificación discutida, como la de los molosos en I.Dodone DVC 110A, la de Elea en I.Dodone Lhôte 113, que descansa en la corrección de Méndez Dosuna (2007e: 182-185), o las de Accio en I.Dodone DVC 3473A y 3607B. No se cuentan los διαιτοί, que son magistrados y no una comunidad, ni las Acciacas de I.Dodone DVC 3220A, que nombra la fiesta y no el lugar.</P>
          </Card>
        </Sec>

        <Sec title="Las menciones, una a una"
          sub={`${totalMenciones - nEtnonimos} topónimos y ${nEtnonimos} etnónimos; los etnónimos se concentran en las consultas públicas`}>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
            {[["todas", "Todas"], ["topónimo", "Topónimos"], ["etnónimo", "Etnónimos"], ["dudosas", "Dudosas"]].map(([k, l]) => (
              <Btn key={k} active={mentionFilter === k} onClick={() => setMentionFilter(k)}>{l}</Btn>
            ))}
          </div>
          <Table rowHeader={0} color={NO} head={["Lugar", "Forma", "Inscripción", "Datación", "Tipo", "Certeza"]}
            rows={filtered.map((m) => [
              <span style={{ fontFamily: "var(--fh)", fontWeight: 600, color: C.heading }}>{m.place}</span>,
              <span className="greek" style={{ fontSize: 14, color: C.heading }}>{renderGreekText(m.form)}</span>,
              <span style={{ whiteSpace: "nowrap" }}>{renderDesc(fmtDvc(m.ref))}</span>,
              <span style={{ color: C.dim, fontSize: 11.5 }}>{m.date}</span>,
              <span style={{ color: C.muted, fontStyle: "italic" }}>{m.type}</span>,
              <span style={{ padding: "1px 7px", borderRadius: 4, fontSize: 10, fontWeight: 700, background: m.certain ? NO : "transparent",
                color: m.certain ? "#fff" : C.muted, border: `1px ${m.certain ? "solid" : "dashed"} ${m.certain ? NO : C.dim}` }}>
                {m.certain ? "segura" : "dudosa"}</span>,
            ])} />
        </Sec>
      </>}

      {tab === "profile" && <>
        <SubNav color={NO} value={sub} onChange={setSub} items={[
          ["cifras", "El dórico noroccidental en números", "inscripciones, cronología, temática y alfabeto"],
          ["rasgos", "Rasgos dialectales", `${RASGOS_NO.length} apartados del capítulo y su valor diagnóstico`],
        ]} />
        {sub === "cifras" && <>
        <Sec title="Las inscripciones del capítulo" sub={`${TOTAL_DOR_NO} inscripciones, el ${pct(TOTAL_DOR_NO)} % del corpus dialectal`}>
          <Stats>
            <Stat label="Seguras" value={String(nSeguras)} sub={`de ${TOTAL_DOR_NO}`} accent={NO} />
            <Stat label="Dudosas" value={String(nDudosas)} sub={nNombre ? `y ${nNombre} solo por el nombre` : ""} accent={ORO} />
            <Stat label="Del s. IV a.C." value={String(nSigloIV)} sub={`${pct(nSigloIV, TOTAL_DOR_NO)} %`} accent={C.amber} />
            <Stat label="Del s. V a.C." value={String(nSigloV)} sub={`${pct(nSigloV, TOTAL_DOR_NO)} %`} accent={C.blue} />
          </Stats>
          <Card>
            <P>La contracción de εο en ου, en veinte inscripciones, y la grafía ἰς por εἰς, en dieciséis, sostienen la mayor parte de las adscripciones; los demás rasgos solo aparecen en unas pocas consultas. Varias adscripciones descansan en indicios débiles y se cuentan como dudosas: un rasgo menor, como παρά con acusativo de situación, una lectura insegura o restituida, o un indicio que no es exclusivo del noroccidental, como la onomástica en Θευ- y Κλευ-.</P>
          </Card>
        </Sec>

        <Sec title="Dórico noroccidental en contexto" sub="Macrogrupos dialectales del corpus de Dodona">
          <Bars horizontal data={MACROGRUPOS} highlight="Dórico noroccidental" height={300} left={200} />
        </Sec>

        <Sec title="Distribución cronológica"
          sub={`El s. IV a.C. reúne ${nSigloIV} inscripciones y el s. V a.C., ${nSigloV}; el material reciente es más abundante que en el dórico general`}>
          <Bars data={CHRONO_DETAIL_NO.map((d) => ({ ...d, color: colorSiglo(d.period) }))} indexBy="period" keys={["n"]} height={300} rotate={-35} />
          <P style={{ fontSize: 11.5, marginTop: 4 }}>El único texto arcaico es la consulta comercial de I.Dodone DVC 3 (finales del s. VI a.C.), en alfabeto corintio. Del s. III a.C. en adelante se cuentan, entre otras, I.Dodone DVC 471A y 3220A, I.Dodone Lhôte 8A y 47 y la consulta del koinon de I.Dodone Lhôte 9, de la primera mitad del s. II a.C.</P>
        </Sec>

        <Sec title="Temática de las consultas" sub={`Temas de consulta (n = ${TOTAL_DOR_NO})`}>
          <Temas data={THEMES_NO} color={NO} height={340} />
          <P style={{ fontSize: 11.5, marginTop: 8 }}>Destacan, a la par, los viajes o cambios de residencia y la religión, con doce consultas cada uno, seguidos de los asuntos económicos o patrimoniales (11). La categoría “Otros”, formada sobre todo por asuntos políticos, refleja el peso de las consultas públicas de comunidades del Noroeste, que suman cinco de sus seis inscripciones (I.Dodone DVC 1368A, 2364A y 2519B, e I.Dodone Lhôte 9 y 13).</P>
        </Sec>

        <Sec title="Alfabeto"
          note="Recuento según la autopsia y la revisión de los alfabetos (ALFABETO_GRUPO_v2); las del alfabeto local de Dodona son I.Dodone DVC 1015A y 1368A (Lhôte 2006: 367). El alfabeto no se ha tomado como criterio de adscripción noroccidental, porque podría proceder tanto del Epiro como de Corcira o de Ambracia.">
          <DonutLegend data={ALF_PIE} height={210} valueColor={INK} />
        </Sec>

        </>}
        {sub === "rasgos" && <>
        <Sec title="Rasgos que sostienen la adscripción" sub="Formas que distinguen una consulta noroccidental del resto del dórico y su documentación en el capítulo"
          note="En la última columna, las consultas del capítulo con el rasgo de adscripción segura y, entre paréntesis, las de adscripción dudosa. La sinicesis εο > ευ y los antropónimos en Θευ- y Κλευ- no figuran, porque son comunes a todo el dórico.">
          <Table color={NO} rowHeader={1} head={["§", "Rasgo", "Forma noroccidental", "Resto del dórico", "Otros dialectos con el rasgo", "Consultas"]}
            rows={TABLA_RASGOS_NO.map((r) => [
              <span style={{ color: C.dim, fontSize: 11 }}>{r.sec}</span>,
              <span style={{ color: C.heading }}>{renderGreekText(r.rasgo)}</span>,
              <span className="greek" style={{ fontSize: 13.5, color: C.heading }}>{renderGreekText(r.forma)}</span>,
              <span>{renderGreekText(r.resto)}</span>,
              <span style={{ color: C.muted }}>{renderGreekText(r.otros)}</span>,
              <span style={{ display: "inline-block", minWidth: 44, padding: "2px 8px", borderRadius: 5, textAlign: "center", fontWeight: 700,
                background: fade(NO, 0.15 + 0.6 * (r.seg + r.dud) / 20), color: (r.seg + r.dud) > 9 ? "#fff" : C.heading }}>
                {r.seg}{r.dud ? ` (${r.dud})` : ""}</span>,
            ])} />
        </Sec>

        <Sec title="Rasgos dialectales del noroccidental"
          sub={`${RASGOS_NO.length} apartados del capítulo, en su orden: fonética (§4), morfología (§5), sintaxis (§6) y léxico (§7); cada ficha reúne las inscripciones que el apartado cita`}>
          <Grid min={320}>
            <CardT title="Los rasgos fonéticos"><P style={{ fontSize: 12 }}>{INTRO_FON_NO}</P></CardT>
            <CardT title="Los rasgos morfológicos" accent={C.blue}><P style={{ fontSize: 12 }}>{INTRO_MORF_NO}</P></CardT>
          </Grid>
          <div style={{ marginTop: 14 }}>
            <RasgoExplorer rasgos={RASGOS_NO} texts={RASGO_TEXTS_NO} color={NO} minAcum={4} />
          </div>
        </Sec>

        <Sec title="Valor diagnóstico" sub="Grupos dialectales de los que cada rasgo distingue una consulta noroccidental"
          note="● el grupo carece del rasgo, de modo que su presencia lo excluye · ◐ lo excluye solo en parte · ○ rasgo compartido · – el capítulo no lo trata. En “Otros” se nombran otras variedades que comparten el rasgo (Buck 1955: §42.1, §42.5, §106.2, §107.3, §135.4, §136.2; Lhôte 2006: 381).">
          <Table color={NO} rowHeader={1} head={["§", "Rasgo", ...DIAG_COLS_NO]}
            rows={DIAGNOSTICO_NO.map((d) => [
              <span style={{ color: C.dim, fontSize: 11 }}>{d.sec}</span>,
              <span style={{ color: C.heading }}>{renderGreekText(d.rasgo)}</span>,
              ...d.vals.map((v, i) => {
                const e = ESTADO[v];
                const txt = i === d.vals.length - 1 && d.otros ? d.otros : e.g;
                return <span title={e.l} style={{ display: "inline-block", minWidth: 34, padding: "2px 8px", borderRadius: 5, textAlign: "center",
                  background: e.bg, color: e.fg, fontSize: txt === e.g ? 14 : 10.5, fontWeight: 700 }}>{txt}</span>;
              }),
            ])} />
        </Sec>

        <Sec title="En definitiva" sub="La conclusión del capítulo">
          <Card accent={INK}><P>{CONCLUSION_NO}</P></Card>
        </Sec>
        </>}
      </>}

      {tab === "writing" && <>
        <Sec title="La contracción de εο en ου" sub={`Las ${nContraccion} inscripciones con la contracción, por período y certeza de la adscripción (§4.1.2.3)`}>
          <Bars data={CONTRACCION_NO} indexBy="period" keys={["seguras", "dudosas"]} height={280} rotate={-15}
            colors={{ seguras: NO, dudosas: ORO }} labels={{ seguras: "Adscripción segura", dudosas: "Adscripción dudosa" }} />
          <Card style={{ marginTop: 8 }}>
            <P>Es el rasgo noroccidental mejor documentado. Se lee desde la primera mitad del s. V a.C., mucho antes de que pueda pensarse en la influencia de la koiné, y sus primeros testimonios están escritos en alfabeto corintio, lo que apoya la explicación de Méndez Dosuna (2018b: 49) como un proceso autóctono del noroeste, muy activo en la flexión verbal. En el s. IV a.C. afecta sobre todo a los futuros, como πραξοῦντι de la consulta de los bilíones, y el testimonio más reciente es ἀποδαμῶ de I.Dodone DVC 3220A (mediados del s. III a.C.).</P>
          </Card>
        </Sec>

        <Sec title="El alfabeto corintio y el alfabeto local" sub="Las nueve inscripciones del capítulo en alfabeto corintio y las dos del alfabeto local de Dodona, con el rasgo que las adscribe (§2-§3)">
          <Grid min={300}>
            {ESCRITURA_NO.map((e) => {
              const col = e.alf === "Dodona" ? ALFABETO_COLORS.dodona : ALFABETO_COLORS.corintio;
              return (
                <Card key={e.ref} accent={col}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: 12.5, color: C.heading }}>{renderDesc(fmtDvc(e.ref))}</span>
                    {certChip(e.cert)}
                  </div>
                  <div style={{ fontSize: 10.5, color: C.dim, marginBottom: 6 }}>{e.date} · alfabeto {e.alf === "Dodona" ? "local de Dodona" : "corintio"}</div>
                  <div className="greek" style={{ fontSize: 14, color: C.heading, marginBottom: 6 }}>{renderGreekText(e.rasgo)}</div>
                  <P style={{ fontSize: 11.5 }}>{e.note}</P>
                </Card>
              );
            })}
          </Grid>
          <Card style={{ marginTop: 10 }}>
            <P>Todas las inscripciones corintias del capítulo tienen algún rasgo noroccidental, y los cinco testimonios más antiguos de la contracción de εο en ου (I.Dodone DVC 329A, 1228A, 2242A y 2507, e I.Dodone Lhôte 88) se cuentan entre ellas. Como ninguna presenta un rasgo exclusivo del Epiro, el alfabeto no permite saber si en la región se escribía en él: un texto corintio puede proceder de Corcira, del Epiro o de las regiones vecinas.</P>
          </Card>
        </Sec>
      </>}
    </ChapterLayout>
  );
}
