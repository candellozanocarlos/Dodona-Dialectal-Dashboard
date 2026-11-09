// Dórico general (cap. 4, DORICO_GENERAL_1_Redaccion_v61): contexto (§1-§2), mapa y topónimos (§2), perfil
// dialectal (§3-§7) y escritura (§3, §4.1.3, §4.2.2-4.2.4). Datos en data/doricoGeneral.js (generado desde el Excel).
import { useState } from "react";
import { ALFABETO_COLORS, C, DIALECT_COLORS, ORO, PROSE, colorSiglo, fade } from "../theme.js";
import { MACROGRUPOS, TOTAL_CORPUS, TOTAL_DOR, TOTAL_DOR_NO, TOTAL_SEV, miles, pct } from "../data/corpus.js";
import {
  ALF_DOR, ARCAISMOS_DOR, CERTEZA_DOR, CHRONO_DETAIL_DOR, CORINTIAS_DOR, DIAG_COLS_DOR, DIAGNOSTICO_DOR, INTRO_FON_DOR,
  INTRO_MORF_DOR, NOTACION_DOR, RASGOS_DOR, RASGO_TEXTS_DOR, SIGMA_DOR, THEMES_DOR, TOPONYMS_DOR, TOPONYMS_EXCLUDED_DOR,
  TOPONYM_BARS_DOR, TOPONYM_MENTIONS_DOR,
} from "../data/doricoGeneral.js";
import { fmtDvc, renderDesc, renderGreekText } from "../lib/text.jsx";
import { Bars, DonutLegend, Temas } from "../components/charts.jsx";

import DoricMap from "../components/maps/DoricMap.jsx";
import { Card, ChapterLayout, RasgoExplorer, Sec, Stat, Stats, SubNav, Table } from "../components/ui.jsx";
import { AdscripcionTable } from "../components/Adscripcion.jsx";
import { ADSCRIPCION_DOR } from "../data/adscripcion.js";

const DOR = DIALECT_COLORS.dorico;
const TABS = [
  { id: "context", l: "Contexto histórico", i: "📜" },
  { id: "map", l: "Mapa y topónimos", i: "🗺️" },
  { id: "profile", l: "Perfil dialectal", i: "Δ" },
  { id: "writing", l: "Escritura y notación", i: "Ε" },
];

const Btn = ({ active, onClick, children }) => (
  <button onClick={onClick} aria-pressed={active} style={{
    background: active ? fade(DOR, 0.12) : "transparent", border: `1px solid ${active ? fade(DOR, 0.3) : C.border}`,
    borderRadius: 7, padding: "5px 12px", color: active ? DOR : C.muted, fontSize: 12, fontWeight: active ? 600 : 400 }}>
    {children}
  </button>
);
// Los hijos se unen en una sola cadena para que renderDesc admita {"<i>…</i>"} dentro del texto.
const P = ({ children, style = {} }) => <p style={{ ...PROSE, ...style }}>{renderDesc([].concat(children).join(""))}</p>;
const Grid = ({ children, min = 260 }) => (
  <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`, gap: 12 }}>{children}</div>
);
const CardT = ({ title, accent = DOR, children }) => (
  <Card accent={accent}>
    <div style={{ fontFamily: "var(--fh)", fontWeight: 700, color: accent, marginBottom: 4 }}>{title}</div>
    {children}
  </Card>
);
const Chip = ({ dvc, color = DOR }) => (
  <span style={{ padding: "3px 8px", borderRadius: 5, fontSize: 11, background: fade(color, 0.07), border: `1px solid ${fade(color, 0.22)}` }}>
    {renderDesc(fmtDvc(dvc))}
  </span>
);

// Cifras derivadas (§3).
const nSeguras = CERTEZA_DOR.Seguro || 0;
const nDudosas = CERTEZA_DOR.Dudoso || 0;
const nNombre = CERTEZA_DOR["Solo nombre o alfabeto"] || 0;
const nSigloIV = CHRONO_DETAIL_DOR.filter((d) => /s\. IV/.test(d.period) && !/–/.test(d.period)).reduce((a, d) => a + d.n, 0);
const nSigloV = CHRONO_DETAIL_DOR.filter((d) => /s\. V(?!I)/.test(d.period) && !/–/.test(d.period)).reduce((a, d) => a + d.n, 0);
const nCorintias = ALF_DOR.Corintio.length;
const nNoJonAt = MACROGRUPOS.find((m) => m.name.startsWith("No jónico")).value;
const nDemostrado = TOTAL_DOR + TOTAL_DOR_NO + TOTAL_SEV;   // dórico demostrado (INTRODUCCIÓN, §3.3)
const totalMenciones = TOPONYM_MENTIONS_DOR.length;
const segMenciones = TOPONYM_MENTIONS_DOR.filter((m) => m.certain).length;
const nEtnonimos = TOPONYM_MENTIONS_DOR.filter((m) => m.type === "etnónimo").length;
const ALF_PIE = [
  { id: "reformado", label: "Reformado o no identificado", value: ALF_DOR["Reformado / Desconocido"].length, color: C.milesio },
  { id: "corintio", label: "Corintio (cf. la pestaña “Escritura y notación”)", value: nCorintias, color: ALFABETO_COLORS.corintio },
  { id: "mg", label: `Magna Grecia / Sicilia (${ALF_DOR["Magna Grecia / Sicilia"].map(fmtDvc).join(", ").replace(/, I\.Dodone DVC /g, ", ")})`,
    value: ALF_DOR["Magna Grecia / Sicilia"].length, color: ALFABETO_COLORS.magnaGrecia },
  { id: "epirota", label: `Epirota (${ALF_DOR.Epirota.map(fmtDvc).join(", ")})`, value: ALF_DOR.Epirota.length, color: ALFABETO_COLORS.epirota },
  { id: "dodona", label: `Local de Dodona (${ALF_DOR.Dodona.map(fmtDvc).join(", ")})`, value: ALF_DOR.Dodona.length, color: ALFABETO_COLORS.dodona },
  // 1993A, con -μες, pasa del eleo al dórico general (Resúmenes, fila 182, 2 nov. 2026).
  ...(ALF_DOR["Élide"] ? [{ id: "elide", label: `Élide (${ALF_DOR["Élide"].map(fmtDvc).join(", ")})`, value: ALF_DOR["Élide"].length, color: ALFABETO_COLORS.elide }] : []),
];
const ESTADO = {
  2: { g: "●", bg: DOR, fg: "#fff", l: "Lo excluye" }, 1: { g: "◐", bg: "#e3a79b", fg: C.heading, l: "Lo excluye en parte" },
  0: { g: "○", bg: "#d9ccad", fg: C.heading, l: "Rasgo compartido" }, [-1]: { g: "–", bg: "#efe7d2", fg: C.dim, l: "No se trata" },
};

export default function DoricoGeneral({ switcher, subnav }) {
  const [tab, setTab] = useState("context");
  const [sub, setSub] = useState("cifras");   // subpestaña de Perfil dialectal
  const [selPlace, setSelPlace] = useState(null);
  const [anillo, setAnillo] = useState(false);
  const [mentionFilter, setMentionFilter] = useState("todas");
  const place = TOPONYMS_DOR.find((t) => t.id === selPlace);
  const filtered = TOPONYM_MENTIONS_DOR.filter((m) =>
    mentionFilter === "todas" ? true : mentionFilter === "dudosas" ? !m.certain : m.type === mentionFilter);

  return (
    <ChapterLayout switcher={switcher} subnav={subnav} color={DOR} accent={[C.terra, DOR, C.gold, C.blue]}
      title={<>El <span style={{ fontWeight: 700, color: DOR }}>dórico</span> en las laminillas oraculares de Dodona</>}
      subtitle={<><i>Doris mitior</i> y dórico de la Magna Grecia · Rasgos comunes al griego occidental</>}
      stats={<>
        <Stat label="Inscripciones" value={String(TOTAL_DOR)} sub={`${TOTAL_DOR - 2} de la Doris mitior · 2 de la Magna Grecia`} accent={DOR} />
        <Stat label="Corpus dialectal" value={`${pct(TOTAL_DOR)} %`} sub={`${TOTAL_DOR} de ${miles(TOTAL_CORPUS)}`} accent={C.terra} />
        <Stat label="Rasgos estudiados" value={String(RASGOS_DOR.length)} sub="fonética, morfología, sintaxis y léxico" accent={C.green} />
        <Stat label="Cronología" value="ss. VI–III a.C." sub={`el ${pct(nSigloIV, TOTAL_DOR)} % del s. IV a.C.`} accent={C.blue} />
      </>}
      tabs={TABS} tab={tab} onTab={setTab}>

      {tab === "context" && <>
        <Sec title="El dórico y Dodona" sub="El grupo dialectal mayoritario de un santuario situado en territorio de habla dórica">
          <Grid>
            <CardT title="El griego occidental">
              <P>El dórico, o griego occidental, agrupa los dialectos hablados desde el Epiro hasta Rodas a través de la Grecia noroccidental, la mayor parte del Peloponeso y el Egeo meridional, y los de las colonias dorias de la Magna Grecia, Sicilia, la Propóntide, el mar Negro y Libia (Méndez Dosuna 2007a: 444-446). Es el grupo mayoritario del corpus (Méndez Dosuna 2018b: 34).</P>
            </CardT>
            <CardT title="Dos divisiones" accent={C.blue}>
              <P>La distinción entre griego noroccidental y dórico propio tiene un valor sobre todo geográfico: salvo ἐνς y sus continuadores, no hay rasgo común al dórico propio del que carezcan los noroccidentales (Méndez Dosuna 2007a: 445). A ella se superpone el reparto por el vocalismo entre la {"<i>Doris severior</i>"}, la {"<i>Doris media</i>"} y la {"<i>Doris mitior</i>"}; el epirota, el corintio y el dialecto de sus colonias son de vocalismo mitior, que es la norma de las consultas dóricas.</P>
            </CardT>
            <CardT title="Tres capítulos" accent={C.terra}>
              <P>Este capítulo reúne los rasgos comunes a todo el grupo y las {TOTAL_DOR} consultas de vocalismo mitior sin adscripción regional precisa; el del dórico noroccidental se ocupa del Epiro y de los rasgos propios del noroeste, y el de la {"<i>Doris severior</i>"}, de las consultas con ese vocalismo. La adscripción regional solo es posible cuando concurre un dato ajeno a la lengua, como un etnónimo, un topónimo o un alfabeto epicórico.</P>
            </CardT>
          </Grid>
        </Sec>

        <Sec title="Los territorios dóricos en torno al santuario" sub="Círculos concéntricos cuya densidad documental disminuye con la distancia (§2)">
          <Grid min={300}>
            <CardT title="Corcira">
              <P>Lhôte (2006: 22, 363) llegó a considerar Dodona una suerte de santuario oficial de la isla: los corcirenses consultan en solitario en I.Dodone Lhôte 1 y 3, quizá en 4, y junto con los oricios en I.Dodone Lhôte 2. Su variedad no se cuenta entre las noroccidentales, sino con el corintio y el megarense (Méndez Dosuna 1985: 378-379; 2018b: 45 n. 136), y sus consultas solo pasan al capítulo noroccidental si presentan un rasgo propio del noroeste.</P>
            </CardT>
            <CardT title="Ambracia" accent={C.terra}>
              <P>La colonia corintia, fundada en el último cuarto del s. VII a.C., fue el nexo comercial entre Corinto, el Epiro y Acarnania, la primera escala de los peregrinos y, desde comienzos del s. III a.C., la capital de Pirro. Es la ciudad dórica más citada en las laminillas, desde el ἐν Ἀνπρακία[ι] de I.Dodone DVC 3549A (primera mitad del s. VI a.C.); su onomástica combina nombres comunes con otros noroccidentales (Katsadima 2018: 168-172).</P>
            </CardT>
            <CardT title="Epidamno, Apolonia y Faros" accent={C.blue}>
              <P>Epidamno y Apolonia aparecen sobre todo como destinos de navegación y de comercio, desde la consulta arcaica I.Dodone DVC 3 (finales del s. VI a.C.). Faros, colonia paria fundada con el apoyo de Dionisio I en el 385/4 a.C., supera en menciones a cualquier ciudad occidental, y la mayoría de sus consultas presentan rasgos dóricos, quizá de epirotas que se sumaron a la empresa colonial (Carbon 2017: 102).</P>
            </CardT>
            <CardT title="El Peloponeso" accent={C.amber}>
              <P>Queda en un segundo plano: seis nombres en catorce menciones, encabezados por Olimpia, frente a las veintinueve de Corcira y las colonias corintias. Un topónimo no identifica por sí solo al consultante: quien pregunta por Olimpia o por Nemea puede ser un epirota que acude a los juegos, como sugiere el ἀκ̣ο̣νι̣τί de I.Dodone DVC 2986A.</P>
            </CardT>
            <CardT title="El Occidente dórico" accent={C.severior}>
              <P>Se reconoce sobre todo por el vocalismo severior. Las grandes fundaciones de Sicilia, de origen corintio y megarense, eran mitior, de modo que un siracusano escribía como un corcirense; solo I.Dodone DVC 312B, por γάναν, y 2445, por el cambio λθ &gt; νθ de διεξένθει, se adscriben a Occidente por rasgos lingüísticos, y otras tres por el alfabeto.</P>
            </CardT>
            <CardT title="Las rutas de acceso" accent={C.green}>
              <P>La ruta principal partía de Ambracia y remontaba el valle del Luros; otra salía del Glykys Limen y remontaba el Aqueronte (Chapinal-Heras 2021: 135-144). Las dos desembocaban en el ámbito de las colonias corintias, justo donde se concentran los topónimos dóricos de las laminillas, mientras que los pasos del Pindo servían sobre todo a tesalios y macedonios.</P>
            </CardT>
          </Grid>
        </Sec>

        <Sec title="Cómo se cuenta una consulta dórica" sub="El criterio del capítulo y su efecto en las cifras (§3)">
          <Stats>
            <Stat label="Dórico general" value={String(TOTAL_DOR)} sub="con un rasgo que excluye el eolio" accent={DOR} />
            <Stat label="No jónico-áticas" value={String(nNoJonAt)} sub="solo rasgos compartidos" accent={C.muted} />
            <Stat label="Dórico demostrado" value={String(nDemostrado)} sub={`con noroccidental y severior · ${pct(nDemostrado)} %`} accent={C.terra} />
            <Stat label="Alfabeto corintio" value={String(nCorintias)} sub="de las 91 del corpus" accent={ALFABETO_COLORS.corintio} />
          </Stats>
          <Card>
            <P>Una inscripción solo se cuenta como dórica cuando presenta al menos un rasgo que excluya los dialectos eólicos, porque algunos de los más frecuentes (la ᾱ, -τι, αἰ y κα) son comunes a ambos grupos. Se cuentan también las que emplean la familia de πάομαι y las escritas en alfabeto corintio con algún rasgo no jónico-ático visible. Las que solo documentan rasgos compartidos se reúnen aparte como no jónico-áticas: son {nNoJonAt}, el {pct(nNoJonAt)} % del corpus dialectal, y es verosímil que la mayoría procedan de consultantes dóricos, aunque el material no permite demostrarlo.</P>
          </Card>
        </Sec>
      </>}

      {tab === "map" && <>
        <Sec title="Topónimos y etnónimos dóricos en el corpus"
          sub={`${TOPONYMS_DOR.length} nombres en ${totalMenciones} menciones, ${segMenciones} de ellas seguras`}>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 6, marginBottom: 8 }}>
            <Btn active={!anillo} onClick={() => setAnillo(false)}>Total de menciones</Btn>
            <Btn active={anillo} onClick={() => setAnillo(true)}>Seguras frente a dudosas</Btn>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: "2 1 520px", minWidth: 0 }}>
              <DoricMap selected={selPlace} onSelect={setSelPlace} anillo={anillo} />
            </div>
            <div style={{ flex: "1 1 240px", minWidth: 0 }}>
              {!place && (
                <Card>
                  <div style={{ fontFamily: "var(--fh)", fontSize: 15, color: C.heading, marginBottom: 6 }}>Selecciona un lugar</div>
                  <P>Corcira y las colonias corintias, unidas al santuario por la ruta de Ambracia y por la navegación costera, reúnen veintinueve menciones (veintidós seguras), frente a las catorce del Peloponeso; Faros, colonia paria con consultantes dóricos, y Same completan la nómina.</P>
                  <Stats style={{ marginTop: 12, marginBottom: 0 }}>
                    <Stat label="Seguras" value={String(segMenciones)} accent={DOR} />
                    <Stat label="Dudosas" value={String(totalMenciones - segMenciones)} accent={ORO} />
                  </Stats>
                </Card>
              )}
              {place && (
                <Card accent={place.seg ? DOR : ORO}>
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
                      <div key={m.ref} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 4, padding: "7px 10px", borderRadius: 6,
                        background: m.certain ? fade(DOR, 0.06) : "rgba(120,90,40,0.04)",
                        border: `1px ${m.certain ? "solid" : "dashed"} ${m.certain ? fade(DOR, 0.25) : C.border}` }}>
                        <span style={{ fontSize: 12, color: C.heading }}>{renderDesc(fmtDvc(m.ref))}</span>
                        <span style={{ fontSize: 9.5, color: m.certain ? DOR : C.dim, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.6 }}>
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

        <Sec title="Menciones por lugar" sub={`Menciones seguras frente a restituidas o dudosas (n = ${totalMenciones})`}>
          <Bars horizontal data={TOPONYM_BARS_DOR} keys={["seguras", "dudosas"]} height={430} left={100} unit="menciones"
            colors={{ seguras: DOR, dudosas: ORO }} labels={{ seguras: "Mención segura", dudosas: "Mención restituida o dudosa" }} />
          <Card style={{ marginTop: 8 }}>
            <P>Ambracia encabeza la lista con doce menciones, tres de ellas posibles, seguida de Faros, Corcira y Epidamno. Las dudosas dependen de una restitución o de una identificación discutida, como el ἐν Πάρω[ι] de I.Dodone DVC 3146A, que puede designar la colonia o la isla del Egeo, o el [ἐ]ν Σε̣λ&lt;λ&gt;ασί[αι] de 2416A, que descansa en una corrección editorial.</P>
          </Card>
        </Sec>

        <Sec title="Las menciones, una a una"
          sub={`${totalMenciones - nEtnonimos} topónimos y ${nEtnonimos} etnónimos o gentilicios; los etnónimos se concentran en las consultas públicas de los corcirenses`}>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
            {[["todas", "Todas"], ["topónimo", "Topónimos"], ["etnónimo", "Etnónimos"], ["dudosas", "Dudosas"]].map(([k, l]) => (
              <Btn key={k} active={mentionFilter === k} onClick={() => setMentionFilter(k)}>{l}</Btn>
            ))}
          </div>
          <Table rowHeader={0} color={DOR} head={["Lugar", "Forma", "Inscripción", "Datación", "Tipo", "Certeza"]}
            rows={filtered.map((m) => [
              <span style={{ fontFamily: "var(--fh)", fontWeight: 600, color: C.heading }}>{m.place}</span>,
              <span className="greek" style={{ fontSize: 14, color: C.heading }}>{renderGreekText(m.form)}</span>,
              <span style={{ whiteSpace: "nowrap" }}>{renderDesc(fmtDvc(m.ref))}</span>,
              <span style={{ color: C.dim, fontSize: 11.5 }}>{m.date}</span>,
              <span style={{ color: C.muted, fontStyle: "italic" }}>{m.type}</span>,
              <span style={{ padding: "1px 7px", borderRadius: 4, fontSize: 10, fontWeight: 700, background: m.certain ? DOR : "transparent",
                color: m.certain ? "#fff" : C.muted, border: `1px ${m.certain ? "solid" : "dashed"} ${m.certain ? DOR : C.dim}` }}>
                {m.certain ? "segura" : "dudosa"}</span>,
            ])} />
        </Sec>

        <Sec title="Fuera del recuento" sub="Topónimos restituidos a partir de Κορ-, que pueden corresponder a Corcira o a Corinto">
          <Grid>
            {TOPONYMS_EXCLUDED_DOR.map((e) => (
              <Card key={e.ref}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 12, color: C.heading }}>{renderDesc(fmtDvc(e.ref))}</span>
                  <span className="greek" style={{ fontSize: 14, color: C.muted }}>{renderGreekText(e.form)}</span>
                </div>
                <P style={{ fontSize: 11.5 }}>{e.why}</P>
              </Card>
            ))}
          </Grid>
        </Sec>
      </>}

      {tab === "profile" && <>
        <SubNav color={DOR} value={sub} onChange={setSub} items={[
          ["cifras", "El dórico en números", "inscripciones, cronología, temática y alfabeto"],
          ["rasgos", "Rasgos dialectales", `${RASGOS_DOR.length} apartados del capítulo y su valor diagnóstico`],
        ]} />
        {sub === "cifras" && <>
        <Sec title="Las inscripciones del capítulo" sub={`${TOTAL_DOR} inscripciones, el ${pct(TOTAL_DOR)} % del corpus dialectal`}>
          <Stats>
            <Stat label="Seguras" value={String(nSeguras)} sub={`de ${TOTAL_DOR}`} accent={DOR} />
            <Stat label="Dudosas" value={String(nDudosas)} sub={nNombre ? `y ${nNombre} solo por el nombre o el alfabeto` : ""} accent={ORO} />
            <Stat label="Del s. IV a.C." value={String(nSigloIV)} sub={`${pct(nSigloIV, TOTAL_DOR)} %`} accent={C.amber} />
            <Stat label="Alfabeto corintio" value={String(nCorintias)} sub={`${pct(nCorintias, TOTAL_DOR)} %`} accent={ALFABETO_COLORS.corintio} />
          </Stats>
          <Card>
            <P>Entre las {TOTAL_DOR} figuran las dos del dórico de la Magna Grecia y Sicilia (I.Dodone DVC 312B y 2445) y cuatro consultas públicas de los dodoneos (I.Dodone DVC 295B, 2425A y 2952B, e I.Dodone Lhôte 14), que no documentan ningún rasgo propio del noroccidental. Sumadas las {TOTAL_DOR_NO} noroccidentales y las {TOTAL_SEV} de la {"<i>Doris severior</i>"}, el dórico reúne {nDemostrado} inscripciones, el {pct(nDemostrado)} % del corpus dialectal, sin contar las de mezcla con la koiné u otros dialectos.</P>
          </Card>
        </Sec>

        <Sec title="Adscripción de las consultas" sub="Bases de la adscripción, grado de certeza y consultas excluidas del capítulo">
          <AdscripcionTable data={ADSCRIPCION_DOR} color={DOR} />
        </Sec>

        <Sec title="Dórico general en contexto" sub="Macrogrupos dialectales del corpus de Dodona">
          <Bars horizontal data={MACROGRUPOS} highlight="Dórico general" height={300} left={200} />
        </Sec>

        <Sec title="Distribución cronológica"
          sub={`El s. IV a.C. reúne ${nSigloIV} inscripciones y el s. V a.C., ${nSigloV}; el peso del s. V se debe sobre todo a las consultas en alfabeto corintio`}>
          <Bars data={CHRONO_DETAIL_DOR.map((d) => ({ ...d, color: colorSiglo(d.period) }))} indexBy="period" keys={["n"]} height={300} rotate={-35} />
          <P style={{ fontSize: 11.5, marginTop: 4 }}>A diferencia del tesalio, cuyo material decrece de forma acusada en la segunda mitad del s. IV a.C., las inscripciones dóricas se mantienen en esa etapa (17, frente a 33 en su primera mitad y 9 a mediados) y continúan en el s. III a.C., una continuidad que concuerda con la de un dialecto hablado en el propio santuario y en su entorno.</P>
        </Sec>

        <Sec title="Temática de las consultas" sub={`Temas de consulta (n = ${TOTAL_DOR})`}>
          <Temas data={THEMES_DOR} color={DOR} height={380} />
          <P style={{ fontSize: 11.5, marginTop: 8 }}>Predominan los asuntos económicos o patrimoniales, 32 de los cuales emplean términos de la familia de πάομαι o el sustantivo πανκλαρία, aunque la relación es en buena parte circular, porque ese léxico es a menudo el único rasgo que permite contarlas como dóricas. El peso de los viajes, que en el tesalio solo cuentan con dos testimonios, concuerda con la red de rutas costeras.</P>
        </Sec>

        <Sec title="Alfabeto"
          note="Recuento según la autopsia y la revisión de los alfabetos. El alfabeto corintio basta para atribuir al dórico una consulta con un rasgo no jónico-ático visible, pero no por sí solo: de las 91 inscripciones del corpus en ese alfabeto, 43 se cuentan en este capítulo, nueve en el noroccidental y 39 quedan sin clasificar.">
          <DonutLegend data={ALF_PIE} height={230} valueColor={DOR} />
        </Sec>

        </>}
        {sub === "rasgos" && <>
        <Sec title="Rasgos dialectales del dórico"
          sub={`${RASGOS_DOR.length} apartados del capítulo, en su orden: fonética (§4), morfología (§5), sintaxis (§6) y léxico (§7); cada ficha reúne las inscripciones que el apartado cita`}>
          <Grid min={320}>
            <CardT title="Los rasgos fonéticos"><P style={{ fontSize: 12 }}>{INTRO_FON_DOR}</P></CardT>
            <CardT title="Los rasgos morfológicos" accent={C.blue}><P style={{ fontSize: 12 }}>{INTRO_MORF_DOR}</P></CardT>
          </Grid>
          <div style={{ marginTop: 14 }}>
            <RasgoExplorer rasgos={RASGOS_DOR} texts={RASGO_TEXTS_DOR} color={DOR} minAcum={4} />
          </div>
        </Sec>

        <Sec title="Valor diagnóstico" sub="Grupos dialectales de los que cada rasgo distingue una consulta dórica"
          note="● el grupo carece del rasgo, de modo que su presencia lo excluye · ◐ lo excluye solo en parte · ○ rasgo compartido · – el capítulo no lo trata. En “Otros” se nombran otras variedades, dóricas o no, que el rasgo excluye.">
          <Table color={DOR} rowHeader={1} head={["§", "Rasgo", ...DIAG_COLS_DOR]}
            rows={DIAGNOSTICO_DOR.map((d) => [
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
        </>}
      </>}

      {tab === "writing" && <>
        <Sec title="Las vocales medias largas y su notación"
          sub="Inscripciones que notan con Ε u Ο alguna vocal media larga, por período (§4.1.3)">
          <Bars data={NOTACION_DOR} indexBy="period" keys={["con", "resto"]} height={300} rotate={-20}
            colors={{ con: DOR, resto: "#d9ccad" }} labels={{ con: "Notan con Ε u Ο alguna vocal media larga", resto: "Resto (notación jónica o sin ejemplos)" }} />
          <Card style={{ marginTop: 8 }}>
            <P>Sesenta y seis de las {TOTAL_DOR} inscripciones notan con Ε u Ο alguna vocal media larga, primaria o secundaria, como ἐσσ̣ε͂ται de I.Dodone DVC 264A. La mayoría son del s. V a.C., pero no faltan textos del s. IV a.C. que combinan las letras del alfabeto jónico con la notación antigua de las vocales secundarias, como 3473A (ἐπερωτῆι y Διώναν, pero ἐσε͂ται) o I.Dodone Lhôte 94 (Ἀρχεφῶν y σωτηρία, pero κελομένο̄ το͂ y ἐσσε͂ται). En esas inscripciones de transición, la Ε y la Ο de las vocales secundarias, frente a la Η y la Ω de las heredadas, excluyen el vocalismo severior.</P>
          </Card>
        </Sec>

        <Sec title="El alfabeto corintio" sub={`Qué sostiene la adscripción de las ${nCorintias} inscripciones del capítulo escritas en ese alfabeto (§3)`}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {CORINTIAS_DOR.map((g, i) => {
              const col = [DOR, C.terra, C.blue, ALFABETO_COLORS.corintio, ORO][i];
              return (
                <Card key={g.id} accent={col}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8, marginBottom: 6 }}>
                    <span style={{ fontFamily: "var(--fh)", fontWeight: 400, color: col }}>{renderGreekText(g.name)}</span>
                    <span style={{ fontFamily: "var(--fh)", fontSize: 20, fontWeight: 700, color: col }}>{g.dvcs.length}</span>
                  </div>
                  <P style={{ fontSize: 12, marginBottom: 8 }}>{g.note}</P>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {g.dvcs.map((d) => <Chip key={d} dvc={d} color={col} />)}
                  </div>
                </Card>
              );
            })}
          </div>
        </Sec>

        <Sec title="Arcaísmos gráficos y fonéticos" sub="Digamma conservada (20 inscripciones) y notación de la aspiración (17), por período (§4.2.2-4.2.3)">
          <Table rowHeader={0} color={DOR} head={["Período", "Inscripciones del capítulo", "Digamma inicial", "Digamma intervocálica", "Aspiración con Η", "Aspiración con Ͱ"]}
            rows={[...ARCAISMOS_DOR, ARCAISMOS_DOR.reduce((t, r) => ({ period: "Total", total: t.total + r.total, digIni: t.digIni + r.digIni,
              digInter: t.digInter + r.digInter, aspEta: t.aspEta + r.aspEta, aspSigno: t.aspSigno + r.aspSigno }),
              { total: 0, digIni: 0, digInter: 0, aspEta: 0, aspSigno: 0 })].map((r) => [
              <b style={{ color: r.period === "Total" ? C.heading : C.text }}>{r.period}</b>, r.total,
              ...["digIni", "digInter", "aspEta", "aspSigno"].map((k) => r[k] ? <b style={{ color: DOR }}>{r[k]}</b> : <span style={{ color: C.dim }}>–</span>),
            ])} />
          <Card style={{ marginTop: 8 }}>
            <P>La digamma se mantiene hasta la primera mitad del s. IV a.C., como en el resto del dórico continental, y la aspiración se escribe con Η en las consultas en alfabeto corintio y con el signo Ͱ en las de la Magna Grecia y Sicilia (I.Dodone DVC 90 y 160A). Las formas del verbo ἐ(ϝ)άω con digamma intervocálica, como ἐϜο͂ν o ἔϜον, no se habían reconocido hasta Méndez Dosuna (2018b: 39-40).</P>
          </Card>
        </Sec>

        <Sec title="Sigma simple y geminada" sub="La sigma simple según la vocal precedente, en el capítulo y en el corpus (§4.2.4)">
          <Stats>
            <Stat label="πρᾱσσω (vocal larga)" value={`${SIGMA_DOR.capitulo.prasso[0]} de ${SIGMA_DOR.capitulo.prasso[0] + SIGMA_DOR.capitulo.prasso[1]}`}
              sub={`corpus: ${SIGMA_DOR.corpus.prasso[0]} de ${SIGMA_DOR.corpus.prasso[0] + SIGMA_DOR.corpus.prasso[1]}`} accent={DOR} />
            <Stat label="ἐσσεῖται (vocal breve)" value={`${SIGMA_DOR.capitulo.essetai[0]} de ${SIGMA_DOR.capitulo.essetai[0] + SIGMA_DOR.capitulo.essetai[1]}`}
              sub={`corpus: ${SIGMA_DOR.corpus.essetai[0]} de ${SIGMA_DOR.corpus.essetai[0] + SIGMA_DOR.corpus.essetai[1]}`} accent={C.blue} />
          </Stats>
          <Card>
            <P>Para Méndez Dosuna (2018b: 42), la mayoría de estas grafías son simplificaciones gráficas, aunque no descarta una degeminación real tras vocal larga, como la que García Ramón (2007b: 98) propone para el tesalio. Las cifras del capítulo, aunque escasas, apuntan en esa dirección: la sigma simple afecta a seis de las nueve formas de πρᾱσσω y solo a nueve de los veintinueve futuros de εἰμί.</P>
          </Card>
        </Sec>
      </>}
    </ChapterLayout>
  );
}
