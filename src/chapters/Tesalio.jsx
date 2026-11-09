// Capítulo: el dialecto tesalio en las laminillas oraculares de Dodona.
import { useState } from "react";
import { C, NOTACION_COLORS, PROSE, SIGLO_COLORS, colorSiglo } from "../theme.js";
import { MACROGRUPOS, TOTAL_CORPUS, TOTAL_TES, miles, pct } from "../data/corpus.js";
import {
  ALF_TES, ALF_TES_PIE, CHRONO_DETAIL_TES, LITERARY_SOURCES_TES, RASGOS_TES, RASGO_TEXTS_TES,
  REGIONS_TES, REGION_INSCRIPTIONS_TES, REGION_TRAITS_TES, THEMES_TES, TH_KIND, TH_PLACES, TOPONYMS_TES,
  VOWEL_EXAMPLES_TES, VOWEL_NOTATION_TES,
} from "../data/tesalio.js";
import { renderDesc, renderGreekText } from "../lib/text.jsx";
import { Bars, Donut, DonutLegend, Temas } from "../components/charts.jsx";
import { Ref, RefList } from "../components/Inscriptions.jsx";
import ThessalyMap from "../components/maps/ThessalyMap.jsx";
import { Card, ChapterLayout, PlaceCard, RasgoExplorer, Sec, SourceList, Stat, Stats, SubNav, Table } from "../components/ui.jsx";
import CompartidosTesBeoc from "./CompartidosTesBeoc.jsx";
import { AdscripcionTable } from "../components/Adscripcion.jsx";
import { ADSCRIPCION_TES } from "../data/adscripcion.js";

const TABS = [
  { id: "context", l: "Contexto histórico", i: "📜" },
  { id: "map", l: "Mapa y regiones", i: "🗺️" },
  { id: "profile", l: "Perfil dialectal", i: "Θ" },
  { id: "vowels", l: "Vocalismo", i: "Ε" },
  { id: "shared", l: "Compartidos con beocio", i: "🤝" },
];
const REGION_COLORS = { pelasgiotis: C.regions.pelasgiotis, histiaiotis: C.regions.histiaiotis, thessaliotis: C.regions.thessaliotis };

// Tabla de Scarborough (2014: 1538).
const NOTATION_ROWS = [
  ["*ē", "⟨Ε⟩", "⟨ΕΙ⟩", "⟨Η⟩"],
  ["*ĕ + ĕ", "⟨Ε⟩", "⟨ΕΙ⟩", "⟨ΕΙ⟩"],
  ["*ĕ", "⟨Ε⟩", "⟨Ε⟩", "⟨Ε⟩"],
  ["*ei̯", "⟨ΕΙ⟩", "⟨ΕΙ⟩", "⟨ΕΙ⟩"],
  ["*ō", "⟨Ο⟩", "⟨ΟΥ⟩", "⟨Ω⟩"],
  ["*ŏ + ŏ", "⟨Ο⟩", "⟨ΟΥ⟩", "⟨ΟΥ⟩"],
  ["*ŏ", "⟨Ο⟩", "⟨Ο⟩", "⟨Ο⟩"],
  ["*ou̯", "⟨ΟΥ⟩", "⟨ΟΥ⟩ / ⟨Υ⟩", "⟨ΟΥ⟩"],
  ["*ai̯", "⟨ΑΙ⟩", "⟨ΑΙ⟩", "⟨ΑΙ⟩"],
];

const THEORIES = [
  { author: "Buck (1955); Bechtel (1921)", title: "Explicación clásica: vocales cerradas",
    desc: "⟨ΕΙ⟩ y ⟨ΟΥ⟩ tendrían el mismo valor que en ático, vocales largas cerradas /eː/ y /oː/: la adopción del alfabeto jónico implicaría la de sus valores fonéticos. Bechtel (1921: 136) propuso una elevación paralela de las medias largas heredadas, que daría un sistema de tipo severior con cinco vocales largas, pero cerradas. El sistema resultante sería radicalmente asimétrico respecto de las breves y acumularía vocales en la zona alta y anterior del espacio vocálico." },
  { author: "Bartoněk (1962; 1966)", title: "Cadena de desplazamientos",
    desc: "Descartada la explicación del cierre beocio (la monoptongación de /ai̯/) como modelo aplicable al tesalio, Bartoněk propuso que una elevación de /aː/ empujó las demás vocales largas hacia posiciones más altas, de modo que las medias largas heredadas acabaron siendo cerradas /eː/ y /oː/." },
  { author: "Scarborough (2014; 2023)", title: "Vocales medias",
    desc: "⟨ΕΙ⟩ y ⟨ΟΥ⟩ representarían vocales medias /e̞ː/ y /o̞ː/, no cerradas: un sistema de cinco vocales largas en el que las medias conservan su naturaleza central. La elección de los dígrafos fue sistémica, no fonética: (1) transparencia morfofonológica (⟨Ε⟩ : ⟨ΕΙ⟩, ⟨Ο⟩ : ⟨ΟΥ⟩); (2) marcación explícita de la cantidad; (3) compatibilidad fonética si, como propone Allen (1959), el sistema breve tesalio era “top-skewed”. Vacilaciones como las de IG IX2 426 (Φρασιμήδας junto a θείκα) indican que ninguna de las dos grafías equivalía exactamente al fonema tesalio." },
];

export default function Tesalio({ switcher, subnav }) {
  const [tab, setTab] = useState("context");
  const [sub, setSub] = useState("cifras");   // subpestaña de Perfil dialectal
  const [region, setRegion] = useState(null);
  const [place, setPlace] = useState(null);
  const selRegion = REGIONS_TES.find((r) => r.id === region);
  const nRegional = REGIONS_TES.reduce((a, r) => a + r.value, 0);

  return (
    <ChapterLayout switcher={switcher} subnav={subnav} color={C.tesalio} accent={[C.terra, C.tesalio, C.amber, C.blue]}
      title={<>El dialecto <em style={{ fontWeight: 700, color: C.tesalio }}>tesalio</em> en las laminillas oraculares de Dodona</>}
      subtitle="Análisis lingüístico del corpus oracular · Fonología, morfología, sintaxis y léxico"
      stats={<>
        <Stat label="Inscripciones" value={String(TOTAL_TES)} sub="ss. V–II a.C." accent={C.tesalio} />
        <Stat label="Corpus dialectal" value={`${pct(TOTAL_TES)} %`} sub={`${TOTAL_TES} de ${miles(TOTAL_CORPUS)}`} accent={C.terra} />
        <Stat label="Rasgos" value={String(RASGOS_TES.length)} sub="identificados" accent={C.blue} />
        <Stat label="Tétradas" value="3 / 4" sub="documentadas" accent={C.tesalio} />
      </>}
      tabs={TABS} tab={tab} onTab={setTab}>

      {tab === "context" && <>
        <Sec title="Tesalia y Dodona" sub="Una relación antigua entre la región tesalia y el santuario epirota">
          <Card style={{ padding: "18px 22px" }}>
            <p style={{ ...PROSE, fontSize: 13, color: C.text, lineHeight: 1.8 }}>
              Tesalia es una región histórica muy próxima al Epiro. Aunque la cordillera del Pindo actúa como frontera natural,
              se conocen rutas desde Tesalia al santuario desde época arcaica, y las fuentes antiguas atestiguan una tradición
              que vinculaba Dodona con Tesalia a través de mitos, política dinástica y relaciones diplomáticas. La relación es
              rastreable también en la epigrafía: si se tiene en cuenta la posición del oráculo en área dórica,{" "}
              <b style={{ color: C.tesalio }}>el tesalio es el dialecto “extranjero” más veces atestiguado</b> en el corpus
              oracular y el tercero mejor representado, por detrás del dórico y del jónico-ático-koiné.
            </p>
          </Card>
        </Sec>

        <Sec title="Testimonios literarios" sub="Fuentes antiguas sobre la conexión Tesalia–Dodona">
          <SourceList sources={LITERARY_SOURCES_TES} color={C.tesalio}
            conclusion="Estos testimonios, aunque con un claro componente propagandístico, revelan en su conjunto una antigua relación entre Tesalia y el santuario. El más antiguo, el peán pindárico (si se acepta la interpretación propuesta), apunta a que en época clásica existía ya una tradición consolidada que permitía relacionar Dodona con Tesalia." />
        </Sec>

        <Sec title="Testimonios epigráficos fuera de las laminillas" sub="Inscripciones no oraculares de Dodona y Tesalia">
          <Card>
            <p style={PROSE}>
              Entre las inscripciones no oraculares de Dodona figuran un decreto de proxenía del koinon de los molosos
              (anterior al 330 a.C.) en favor de Lagetas, tesalio de Feras, y un fragmentario decreto de epigamia
              concedido a un tesalio en época del koinon de los epirotas (232-167 a.C.). Se conservan además dos
              etnónimos tesalios: el de un ciudadano de Fársalo en una copa de bronce del s. IV a.C. (Παναίτιος
              Φαρσάλιος) y el de Δόκιμος Λαρισαῖος, testigo en un decreto de manumisión. En la propia Larisa se halló
              un decreto del koinon de los molosos que corona al demo de Larisa y a sus jueces en Dodona
              (Cabanes y Hatzopoulos 2020: nº 21, 32, 58, 84 y 268).
            </p>
          </Card>
        </Sec>
      </>}

      {tab === "map" && <>
        <Sec title="Tesalia: tétradas y topónimos del corpus"
          sub="Pulsa una tétrada para ver su perfil dialectal o un lugar para ver sus menciones">
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: "2 1 520px", minWidth: 0 }}>
              <ThessalyMap region={region} onRegion={setRegion} place={place} onPlace={setPlace} />
            </div>
            <div style={{ flex: "1 1 240px", minWidth: 0 }}>
              <PlaceCard place={TH_PLACES.find((p) => p.id === place)} kinds={TH_KIND} color={C.tesalio}
                onClose={() => setPlace(null)} empty={<>
                  <div style={{ fontFamily: "var(--fh)", fontSize: 15, color: C.heading, marginBottom: 6 }}>Selecciona un lugar</div>
                  <p style={PROSE}>
                    Los topónimos tesalios del corpus son numerosos, solo por detrás de los de la Magna Grecia y Sicilia y de los
                    del Epiro y zonas colindantes. Hay testimonios de tres de las cuatro tétradas: Farcadón, Trica y Eginio en Histiótide,
                    una referencia más que probable a Tetonio en Tesaliótide y una segura a Feras en Pelasgiótide. Fuera de las
                    tétradas, en la Acaya Ftiótide, aparecen Melitea y, con una identificación discutida, Equino.
                  </p>
                  <Stats style={{ marginTop: 12, marginBottom: 0 }}>
                    <Stat label="Menciones" value={String(TOPONYMS_TES.reduce((a, t) => a + t.value, 0))} sub="de lugares tesalios" accent={C.tesalio} />
                    <Stat label="Tétradas" value="3 / 4" sub="con inscripciones" accent={C.tesalio} />
                  </Stats>
                </>} />
            </div>
          </div>
        </Sec>

        <Sec title="Topónimos tesalios en el corpus" sub="Menciones por lugar">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
            <div style={{ flex: "1 1 340px" }}>
              <Bars horizontal data={TOPONYMS_TES} height={280} color={C.tesalio} left={120} unit="menciones" />
            </div>
            <div style={{ flex: "1 1 240px" }}>
              <Card>
                <p style={PROSE}>
                  Las ciudades más mencionadas son las de Histiótide, la región colindante con el Epiro: Farcadón (cuatro
                  veces) y Trica (tres), a las que se suma Eginio (<Ref src="DVC" id="303B" />). En <Ref src="DVC" id="3738A" /> se reconstruye
                  además el nombre de Tesalia, y en <Ref src="DVC" id="552A" /> se lee Θεσσαλίαν, aunque en CIOD se toma por antropónimo; de la
                  Acaya Ftiótide proceden las menciones de Melitea (<Ref src="DVC" id="2024A" />) y, con dudas, de Equino
                  (<Ref src="DVC" id="345B" />), que parte de la bibliografía identifica con la ciudad acarnania. Si bien
                  los topónimos no denotan el origen de los consultantes, sí son una prueba indudable del radio de acción del oráculo.
                </p>
              </Card>
            </div>
          </div>
        </Sec>

        <Sec title="Las cuatro tétradas" sub="Pulsa una tétrada en el mapa o en la lista para ver su detalle">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
            <div style={{ flex: "1 1 280px", minWidth: 240 }}>
              <Donut height={240} data={REGIONS_TES.map((r) => ({ id: r.id, label: r.name, value: r.value, color: REGION_COLORS[r.id] }))} />
            </div>
            <div style={{ flex: "1 1 240px" }}>
              {REGIONS_TES.map((r) => (
                <button key={r.id} onClick={() => setRegion(region === r.id ? null : r.id)} aria-pressed={region === r.id}
                  style={{ display: "flex", alignItems: "center", gap: 8, width: "100%", marginBottom: 6, padding: "6px 10px", borderRadius: 6,
                    background: region === r.id ? C.card : "transparent", border: `1px solid ${region === r.id ? C.border : "transparent"}` }}>
                  <span style={{ width: 11, height: 11, borderRadius: 3, background: REGION_COLORS[r.id] }} />
                  <span style={{ flex: 1, textAlign: "left", fontSize: 13, fontWeight: 600, color: C.text }}>{r.name}</span>
                  <span style={{ fontSize: 11, color: C.dim }}>({Math.round(r.value / nRegional * 100)} %)</span>
                  <span style={{ fontSize: 18, fontWeight: 700, color: C.tesalio, fontFamily: "var(--fh)" }}>{r.value}</span>
                </button>
              ))}
              <p style={{ ...PROSE, fontSize: 11.5, marginTop: 8 }}>
                {nRegional} de las {TOTAL_TES} inscripciones tesalias presentan rasgos regionales; el resto carece de marcadores
                identificables. La falta de testimonios de Ftiótide no permite concluir que no hubiera consultantes de esa tétrada:
                refleja, sobre todo, la brevedad de los textos. Las menciones de Melitea y Equino corresponden a la Acaya
                Ftiótide, periecia que no formaba parte de la tétrada.
              </p>
            </div>
          </div>
          <Card style={{ marginTop: 14 }}>
            <p style={{ ...PROSE, color: C.text }}>
              La división de Tesalia en cuatro tétradas (Histiótide, Pelasgiótide, Tesaliótide y Ftiótide) se atribuye a
              Alevas el Rojo, en el s. VI a.C. Pese a ella, el alfabeto tesalio, estrechamente emparentado con el beocio, se extendió
              por todo el territorio sin diferencias regionales significativas, y las inscripciones tesalias en alfabeto jónico
              muestran una notación homogénea de las vocales medias largas. Pelasgiótide es la región mejor documentada, lo que refleja la posición de
              Larisa como la polis tesalia más influyente.
            </p>
          </Card>
        </Sec>

        {selRegion && (() => {
          const t = REGION_TRAITS_TES[selRegion.id];
          const col = REGION_COLORS[selRegion.id];
          return (
            <Sec title={`⤷ ${selRegion.name}`} sub={`${selRegion.value} inscripciones · capital: ${t.capital}`}>
              <Stats>
                <Stat label="Inscripciones" value={selRegion.value} accent={col} />
                <Stat label="s. V a.C." value={selRegion.chronoV} />
                <Stat label="Transición V–IV" value={selRegion.chronoVIV} />
                <Stat label="s. IV a.C." value={selRegion.chronoIV} />
                {selRegion.chronoPost > 0 && <Stat label="Posterior al s. IV" value={selRegion.chronoPost} />}
              </Stats>
              <Card style={{ marginBottom: 10 }}><p style={{ ...PROSE, color: C.text }}>{renderDesc(t.intro)}</p></Card>
              <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 16 }}>
                {t.rasgos.map((r, i) => (
                  <Card key={r.label} accent={i === 0 ? col : null} style={{ padding: "9px 14px" }}>
                    <div style={{ fontSize: 11.5, fontWeight: 700, color: i === 0 ? col : C.amber, marginBottom: 3, fontFamily: "var(--fh)" }}>
                      {renderGreekText(r.label)}</div>
                    <p style={{ ...PROSE, fontSize: 12, color: C.text }}>{renderDesc(r.text)}</p>
                  </Card>
                ))}
              </div>
              <Table rowHeader={0} color={C.tesalio} head={["Inscripción", "Texto", "Datación", "Rasgos"]}
                rows={REGION_INSCRIPTIONS_TES[selRegion.id].map((ins) => [
                  <span style={{ whiteSpace: "nowrap" }}><Ref src={ins.src} id={ins.id} /></span>,
                  <span className="greek" style={{ whiteSpace: "pre-line", fontSize: 13 }}>{renderGreekText(ins.text)}</span>,
                  <span style={{ color: C.dim, fontSize: 11.5 }}>{ins.date}</span>,
                  <span style={{ color: C.muted, fontSize: 11.5 }}>{ins.desc ? renderDesc(ins.desc) : ""}</span>,
                ])} />
            </Sec>
          );
        })()}

        <Sec title="Cronología por tétrada" sub={`Composición de las ${nRegional} inscripciones con adscripción regional`}
          note="Los testimonios de Histiótide y Tesaliótide se concentran en el s. IV a.C., mientras que Pelasgiótide reúne la mayor parte de los suyos en el s. V a.C. Las inscripciones datadas en la transición entre los ss. V y IV a.C. se cuentan aparte. El único testimonio posterior al s. IV es I.Dodone Lhôte 8B (ss. III-II a.C.), procedente de Mondaya, en Perrebia, pero en dialecto de Pelasgiótide.">
          <Bars data={REGIONS_TES} keys={["chronoV", "chronoVIV", "chronoIV", "chronoPost"]} height={260}
            colors={{ chronoV: SIGLO_COLORS.V, chronoVIV: SIGLO_COLORS["V-IV"], chronoIV: SIGLO_COLORS.IV, chronoPost: SIGLO_COLORS["III-II"] }}
            labels={{ chronoV: "s. V a.C.", chronoVIV: "Transición V–IV", chronoIV: "s. IV a.C.", chronoPost: "Posterior al s. IV a.C." }} />
        </Sec>
      </>}

      {tab === "profile" && <>
        <SubNav color={C.tesalio} value={sub} onChange={setSub} items={[
          ["cifras", "El dialecto tesalio en números", "inscripciones, cronología, temática y alfabeto"],
          ["rasgos", "Rasgos dialectales", `${RASGOS_TES.length} rasgos, en el orden del capítulo`],
        ]} />
        {sub === "cifras" && <>
        <Sec title="El tesalio, dialecto “extranjero” más representado">
          <Stats>
            <Stat label="Inscripciones tesalias" value={String(TOTAL_TES)} accent={C.tesalio} sub={`el ${pct(TOTAL_TES)} % del corpus dialectal`} />
            <Stat label="En el corpus" value="3.er dialecto" sub="tras el dórico y el jónico-ático-koiné" accent={C.amber} />
            <Stat label="Tétradas representadas" value="3 / 4" sub="Pelasg. · Histiót. · Tesaliót." />
          </Stats>
          <Card>
            <p style={PROSE}>
              Piccinini (2017: 111-122) y Chapinal-Heras (2021: 133) han planteado que la relación entre Tesalia y Dodona habría sido
              más superficial que la de otras regiones como Beocia, por el carácter propagandístico de los testimonios literarios y
              la escasez de topónimos tesalios en el corpus. El análisis conjunto de las evidencias lleva a matizar esa visión: tanto
              el contenido de las laminillas, que mencionan asentamientos y comunidades tesalias, como sus rasgos dialectales son
              indicios sólidos de una <b style={{ color: C.text }}>vinculación profunda y continuada</b> entre el oráculo y Tesalia.
            </p>
          </Card>
        </Sec>

        <Sec title="Adscripción de las consultas" sub="Bases de la adscripción, grado de certeza y consultas excluidas del capítulo">
          <AdscripcionTable data={ADSCRIPCION_TES} color={C.tesalio} />
        </Sec>

        <Sec title="Tesalio en contexto" sub="Macrogrupos dialectales del corpus de Dodona">
          <Bars horizontal data={MACROGRUPOS} highlight="Tesalio" height={300} left={200} />
        </Sec>

        <Sec title="Distribución cronológica"
          sub="El grueso del material se concentra entre finales del s. V y la primera mitad del s. IV a.C.; decrece de forma acusada en la segunda mitad del s. IV, y los únicos testimonios posteriores son los dos textos de I.Dodone Lhôte 8 (ss. III-II a.C.), entre ellos la consulta pública de Mondaya (8B)">
          <Bars data={CHRONO_DETAIL_TES.map((d) => ({ ...d, color: colorSiglo(d.period) }))} indexBy="period" keys={["n"]} height={300} rotate={-35} />
        </Sec>

        <Sec title="Temática de las consultas" sub="Temas de consulta de las inscripciones tesalias">
          <Temas data={THEMES_TES} color={C.tesalio} height={360} />
          <p style={{ ...PROSE, fontSize: 11.5, marginTop: 8 }}>
            Predominan las preguntas de índole religiosa, seguidas de las relativas a actividades laborales o comerciales y de las
            familiares y matrimoniales; {THEMES_TES[0].value} inscripciones no han podido clasificarse por su temática.
          </p>
        </Sec>

        <Sec title="Alfabeto"
          note={`El ${pct(ALF_TES.milesio, TOTAL_TES)} % de las inscripciones tesalias (${ALF_TES.milesio} de ${TOTAL_TES}) emplean el alfabeto milesio o no presentan un alfabeto epicórico reconocible. El resto se distribuye entre el alfabeto tesalio (${ALF_TES.tesalio}), que deriva de los de Eubea y Beocia, por lo que la diferenciación es a menudo difícil; el de Dodona (${ALF_TES.dodona}), y testimonios aislados en alfabeto eubeo y occidental. Entre las de alfabeto tesalio figuran I.Dodone DVC 307A y 2103A, que los editores atribuyen al alfabeto eleo o eubeo: la autopsia muestra en 307A la lambda asimétrica ascendente, exclusiva del tesalio, y en 2103A la combinación de sigma de tres trazos y delta lunada, con chi roja, de modo que la adscripción de 2103A al tesalio depende precisamente del alfabeto; en 934A, la sigma curva (Ϛ) descarta el alfabeto beocio (Candel Lozano, en prensa). La clasificación de 1351A como occidental es la de los editores; Méndez Dosuna (2018a: 287) señala que el alfabeto es compatible con el tesalio salvo por el uso de ⟨Ξ⟩ en lugar de la ⟨Χ⟩ esperable en un alfabeto rojo, variante que podría ser característica de Histiótide.`}>
          <DonutLegend data={ALF_TES_PIE} height={230} valueColor={C.tesalio} />
        </Sec>

        </>}
        {sub === "rasgos" && <>
        <Sec title="Rasgos dialectales tesalios" sub={`${RASGOS_TES.length} rasgos identificados en el corpus, en el orden del capítulo: fonética (§3), morfología (§4), sintaxis (§5) y léxico (§6)`}>
          <RasgoExplorer rasgos={RASGOS_TES} texts={RASGO_TEXTS_TES} color={C.tesalio} />
        </Sec>
        </>}
      </>}

      {tab === "vowels" && <>
        <Sec title="Notación de las vocales medias largas" sub="Inscripciones tesalias con grafías identificables para las vocales largas (§3.1.1.1)">
          <Stats>{VOWEL_NOTATION_TES.map((v) => <Stat key={v.type} label={v.type} value={v.n} sub={v.desc} accent={v.color} noCase />)}</Stats>
          <DonutLegend data={VOWEL_NOTATION_TES.map((v) => ({ id: v.type, label: v.type, value: v.n, color: v.color, desc: v.desc, dvcs: v.dvcs }))}
            height={280} valueColor={C.tesalio} renderSub={(d) => <RefList dvcs={d.dvcs} />} />
        </Sec>

        <Sec title={`Detalle de las ${VOWEL_EXAMPLES_TES.length} inscripciones`} sub="Formas con notación de vocales largas">
          <Table rowHeader={0} sticky maxHeight={480} color={C.tesalio} head={["Inscripción", "Grupo", "Datación", "Región", "Formas"]}
            rows={VOWEL_EXAMPLES_TES.map((r) => {
              const col = [null, NOTACION_COLORS.tesalia, NOTACION_COLORS.mezcla, NOTACION_COLORS.atica][r.cat];
              return [
                <span style={{ whiteSpace: "nowrap" }}><Ref src={r.src} id={r.id} /></span>,
                <span style={{ padding: "2px 7px", borderRadius: 4, fontSize: 10, color: col, border: `1px solid ${col}55`, whiteSpace: "nowrap" }}>
                  {renderGreekText(["", "ΕΙ/ΟΥ", "Mixta", "Η/Ω"][r.cat])}</span>,
                <span style={{ color: C.muted, fontSize: 11.5 }}>{r.date}</span>,
                <span style={{ color: C.muted, fontSize: 11.5 }}>{r.region}</span>,
                <span style={{ fontStyle: "italic" }}>{renderGreekText(r.form)}</span>,
              ];
            })} />
        </Sec>

        <Sec title="Sistema de notación vocálica" sub="Evolución ortográfica del tesalio (Scarborough 2014: 1538)">
          <Table rowHeader={0} color={C.tesalio} head={["Fuente etimológica", "Alfabeto tesalio arcaico", "Alfabeto tesalio reformado", "Ático posterior al 403"]}
            rows={NOTATION_ROWS.map((row) => row.map((cell, j) => (
              <span className={j ? "greek" : undefined} style={{ fontSize: j ? 15 : 13, fontWeight: j === 2 ? 700 : 400,
                color: j === 0 ? C.amber : j === 2 ? C.green : C.text }}>{renderGreekText(cell)}</span>
            )))} />
        </Sec>

        <Sec title="Teorías sobre el vocalismo tesalio" sub="Interpretaciones de la notación de las vocales medias largas (§3.1.1.2)">
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {THEORIES.map((t) => (
              <Card key={t.title}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: C.tesalio, fontFamily: "var(--fh)" }}>{t.title}</span>
                  <span style={{ fontSize: 11, color: C.muted }}>· {t.author}</span>
                </div>
                <p style={{ ...PROSE, color: C.text }}>{renderDesc(t.desc)}</p>
              </Card>
            ))}
          </div>
        </Sec>

        <Sec title="Conclusiones"
          note="La norma gráfica dominante en las consultas tesalias es la de los dígrafos ⟨ΕΙ⟩ y ⟨ΟΥ⟩ (16 de 23 inscripciones), en coherencia con la epigrafía tesalia desde la adopción del alfabeto jónico reformado. La alternancia con ⟨Η⟩ y ⟨Ω⟩ no depende de la cronología (los tres grupos se concentran en el s. IV a.C.) ni de la región. La proporción de laminillas con ⟨Η⟩ o ⟨Ω⟩ (15 de 23, el 65 %) es muy superior a la de la epigrafía tesalia (en torno al 34 % de las inscripciones que discute Blümel 1982: 33-35), lo que se explica por el carácter informal y privado de las consultas, al margen de la koiné dialectal escrita que imponían los lapicidas oficiales (Helly 2018: 361-362), y quizá por la interferencia del dórico del santuario. Las laminillas reflejan así la práctica gráfica espontánea de los hablantes y, con ella, la ambigüedad fonológica que postula Scarborough (2014): unas vocales medias /e̞ː/ y /o̞ː/ que ninguna de las dos grafías jónicas representaba con exactitud." />
      </>}

      {tab === "shared" && <CompartidosTesBeoc desde="tesalio" />}
    </ChapterLayout>
  );
}
