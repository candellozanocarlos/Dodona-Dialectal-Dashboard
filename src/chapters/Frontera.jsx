// Caps. 13-15: la mezcla dialectal (export Mezcla, parte propia del selector) y los dialectos minoritarios y las
// inscripciones no jónico-áticas (export default, con un selector común como el del dórico). Los datos salen de
// data/frontera.js (scripts/datos_frontera.py).
import { useState } from "react";
import { C, DIALECT_COLORS, DIALECT_INK, ORO, PROSE, colorSiglo } from "../theme.js";
import { MACROGRUPOS, TOTAL_CORPUS, miles, pct } from "../data/corpus.js";
import {
  ADSCRIPCION_MEZ, ADSCRIPCION_MIN, ADSCRIPCION_NJA, ALF_MEZ_PIE, ALF_NJA_PIE, ANEXO_MEZ, APARTADOS_MIN, BIBLIO_MEZ, CERTEZA_MEZ, CERTEZA_MIN,
  CERTEZA_NJA, CHRONO_MEZ, CHRONO_MIN, CHRONO_NJA, COMBINACIONES_MEZ, COMPATIBLES_NJA, COMPATIBLES_TXT_NJA, DIALECTOS_MIN, EXPLICACIONES_MEZ,
  INSCRIPCIONES_MIN, POR_QUE_NJA, RASGOS_NJA, RASGOS_TXT_NJA, THEMES_MEZ, THEMES_MIN, THEMES_NJA, TIPOLOGIA_MEZ, TIPOS_MEZ, TOTAL_MEZ,
  TOTAL_MIN, TOTAL_NJA,
} from "../data/frontera.js";
import { renderDesc, renderGreekText } from "../lib/text.jsx";
import { Bars, DonutLegend, Temas } from "../components/charts.jsx";
import { Ref } from "../components/Inscriptions.jsx";
import { Card, ChapterLayout, Sec, Secciones, SectionNav, Stat, Stats, SubNav, Table } from "../components/ui.jsx";
import { AdscripcionTable } from "../components/Adscripcion.jsx";
import { Anexo, InscripcionCard } from "../components/Anexo.jsx";

const MEZ = DIALECT_COLORS.mezcla, MEZ_INK = DIALECT_INK.mezcla;
const MIN = DIALECT_COLORS.otros, MIN_INK = "#6f6656";
const NJA = DIALECT_COLORS.noJonAt, NJA_INK = DIALECT_INK.noJonAt;
const NOMBRE = "#cbbf9f";   // solo nombre o alfabeto (CERTEZA_COLORES de los gráficos de la tesis)

const SUBSECCIONES = [
  { id: "minoritarios", label: "Dialectos minoritarios", color: MIN },
  { id: "nja", label: "Las inscripciones no jónico-áticas", color: NJA_INK },
];

const BIG = { ...PROSE, fontSize: 13, color: C.text, lineHeight: 1.8 };
const g = (s) => <span className="greek-run">{s}</span>;
const dudosas = (c) => c.dudosas + c.nombre;
const crono = (d) => d.map((x) => ({ ...x, color: colorSiglo(x.period) }));

// Barras apiladas por certeza (mez_1, min_1).
const PorCerteza = ({ data, color, left = 220, height }) => (
  <Bars horizontal data={data} keys={["segura", "dudosa", "nombre"]} indexBy="name" height={height ?? 70 + 40 * data.length} left={left}
    colors={{ segura: color, dudosa: ORO, nombre: NOMBRE }} labels={{ segura: "segura", dudosa: "dudosa", nombre: "solo nombre o alfabeto" }} />
);

const Cifras = ({ total, cert, color, nombre = "solo nombre" }) => (
  <Stats>
    <Stat label="Inscripciones" value={String(total)} accent={color} sub={`el ${pct(total)} % del corpus dialectal`} />
    <Stat label="Seguras" value={String(cert.seguras)} sub={`el ${pct(cert.seguras, total)} %`} accent={C.blue} />
    <Stat label="Dudosas" value={String(cert.dudosas)} sub={`el ${pct(cert.dudosas, total)} %`} accent={ORO} />
    <Stat label={`De ${nombre}`} value={String(cert.nombre)} sub={`el ${pct(cert.nombre, total)} %`} accent={C.muted} />
  </Stats>
);

// ══ Cap. 13: la mezcla dialectal ═══════════════════════════════════
export function Mezcla({ switcher, subnav = null }) {
  const [tab, setTab] = useState("context");
  const [sub, setSub] = useState("cifras");
  const cs = CHRONO_MEZ.filter((d) => d.period.includes("s. IV") && !d.period.includes("–")).reduce((a, d) => a + d.n, 0);
  return (
    <ChapterLayout switcher={switcher} subnav={subnav} color={MEZ_INK} accent={[C.terra, MEZ, C.blue, C.green]}
      title={<>La <em style={{ fontWeight: 700, color: MEZ_INK }}>mezcla dialectal</em> en las laminillas oraculares de Dodona</>}
      subtitle="Rasgos de dos grupos dialectales que no pueden convivir en uno solo · Tipología, explicaciones y mezclas aparentes"
      stats={<>
        <Stat label="Inscripciones" value={String(TOTAL_MEZ)} sub="ss. V–II a.C." accent={MEZ_INK} />
        <Stat label="Corpus dialectal" value={`${pct(TOTAL_MEZ)} %`} sub={`${TOTAL_MEZ} de ${miles(TOTAL_CORPUS)}`} accent={C.terra} />
        <Stat label="Dudosas o de solo nombre" value={`${pct(dudosas(CERTEZA_MEZ), TOTAL_MEZ)} %`} sub={`${dudosas(CERTEZA_MEZ)} de ${TOTAL_MEZ}`} accent={ORO} />
        <Stat label="Con el jónico-ático" value={String(TOTAL_MEZ - 1)} sub="todas salvo una" accent={C.blue} />
      </>}
      tabs={[
        { id: "context", l: "Concepto y criterio", i: "§" },
        { id: "profile", l: "Perfil dialectal", i: "Μ" },
        { id: "interp", l: "Explicaciones", i: "Ω" },
        { id: "anexo", l: "Las inscripciones", i: "Ψ" },
      ]} tab={tab} onTab={setTab}>

      {tab === "context" && <>
        <Sec title="La mezcla dialectal en las laminillas" sub="Textos privados y breves de consultantes llegados de lugares muy distintos">
          <Card style={{ padding: "18px 22px" }}>
            <p style={BIG}>
              El corpus contiene {TOTAL_MEZ} inscripciones que reúnen rasgos de dos dialectos que no pueden convivir en uno solo, o un nombre
              propio con la forma de un dialecto distinto del que emplea el resto del texto: el {pct(TOTAL_MEZ)} % de las inscripciones con
              alguna característica dialectal, una proporción sin paralelo en la epigrafía oficial que se explica por la naturaleza de las
              laminillas y por un santuario cuya lengua local, el dórico del Noroeste, no era la de la mayoría de quienes lo visitaban. Lhôte
              (2006: 377) dedicó a los casos de mezcla y a la influencia de la koiné dos breves apartados, Méndez Dosuna (2018a: 273-276)
              advirtió que algunas mezclas son lecturas equivocadas, y Crespo y Giannakis (2019) hicieron el primer estudio sistemático, con
              unas noventa consultas híbridas que Giannakis (2024a: 39-42, 52-60) amplió a 103 y explicó como el primer estadio de la koiné.
            </p>
          </Card>
        </Sec>
        <Sec title="El criterio de la tesis" sub="Rasgos visibles de dos grupos que no pueden convivir en un único dialecto">
          <Card>
            <p style={PROSE}>
              Hay mezcla cuando una misma inscripción presenta rasgos visibles de dos grupos incompatibles, como el dórico {g("κα")} junto
              al jónico-ático {g("εἰ")}, o la fórmula {g("τύχα ἀγαθά")} junto a {g("τύχη")}, {g("ἔσται")} o {g("ἐπερωτᾶι")}; la definición
              coincide con la de Méndez Dosuna (2018a: 273-276) y no presupone ninguna explicación. Quedan fuera cinco situaciones que solo en
              apariencia son mezclas: la vacilación gráfica dentro de un dialecto (la alternancia de ΕΙ y ΟΥ con Η y Ω en las consultas
              tesalias), la pregunta y la respuesta escritas en caras o por manos distintas, la alternancia de alfabetos, la combinación de
              variedades de un mismo grupo, como el jónico y la koiné, y los rasgos que comparten los dos dialectos supuestos, como las
              contracciones que el dórico noroccidental tiene en común con la koiné (Méndez Dosuna 2018b: 49). Se cuentan, en cambio, como
              dudosas las consultas cuyo único elemento no jónico-ático es la fórmula o el nombre de Dione, y como de solo nombre las que
              descansan en un antropónimo.
            </p>
            <p style={{ ...PROSE, marginTop: 10 }}>
              La koiné solo se reconoce con una prueba positiva (un rasgo propio o una fecha desde finales del s. IV a.C.), de modo que el
              componente que la bibliografía llama koiné es, en la mayoría de las mezclas, jónico-ático: de las 75 que combinan el dórico con
              rasgos jónico-áticos sin precisar, solo 18 se fechan desde finales del s. IV a.C., y once pertenecen al s. V a.C. De las 113
              mezclas de Crespo y Giannakis (2019) y Giannakis (2024a), 64 lo son también aquí y 49 reciben otra clasificación, mientras que
              34 de las de la tesis no figuran en sus listas. La autopsia de 27 de las laminillas ha corregido facsímiles, ha mostrado manos
              distintas y plomos reutilizados y ha eliminado la mezcla en consultas como <Ref src="DVC" id="2160" /> (segunda mitad del
              s. IV a.C.) y <Ref src="DVC" id="2225A" /> (primera mitad del s. IV a.C.).
            </p>
          </Card>
        </Sec>
      </>}

      {tab === "context" && (
        <Sec title="Las mezclas de Crespo y Giannakis (2019) y Giannakis (2024a)"
          sub={`Las ${BIBLIO_MEZ.length} inscripciones que presentan como mezclas, incluidas las que solo mencionan en nota, y su clasificación en la tesis`}>
          <Table color={MEZ_INK} sticky maxHeight={520} fontSize={12} rowHeader={0}
            head={["Inscripción", "Cronología", "Mezcla según los autores", "Páginas", "Clasificación en la tesis"]}
            rows={BIBLIO_MEZ.map((b) => [renderDesc(b.ref), <span style={{ color: C.muted }}>{b.date}</span>, b.autores,
              <span style={{ color: C.muted }}>{b.pags}</span>,
              <span style={{ color: b.tesis.startsWith("Mezcla") ? MEZ_INK : C.heading, fontWeight: b.tesis.startsWith("Mezcla") ? 600 : 400 }}>{b.tesis}</span>])} />
        </Sec>
      )}

      {tab === "profile" && <>
        <SubNav color={MEZ_INK} value={sub} onChange={setSub} items={[
          ["cifras", "La mezcla dialectal en números", "adscripción, combinaciones, cronología, temática y alfabeto"],
          ["tipos", "Tipos de mezcla", `${TIPOS_MEZ.length} tipos según el lugar del elemento ajeno`],
        ]} />
        {sub === "cifras" && <>
          <Sec title="La mezcla dialectal en el corpus de Dodona">
            <Cifras total={TOTAL_MEZ} cert={CERTEZA_MEZ} color={MEZ_INK} />
            <Card>
              <p style={PROSE}>
                Dos de cada tres mezclas son dudosas o descansan en un nombre, la proporción más alta del corpus después de la de los dialectos
                minoritarios: una mezcla exige dos rasgos y no uno, y basta con que cualquiera de ellos dependa de una letra insegura, de una
                restitución o de una forma de doble lectura, como el [ἐπερ]ωτᾶι de <Ref src="DVC" id="3869B" /> (primera mitad del
                s. IV a.C.) o el Χ̣ιόνη de <Ref src="DVC" id="33B" /> (ss. V-IV a.C.). En las de solo nombre, como la esclava Ἀριστοβούλαν
                de <Ref src="DVC" id="2383A" /> (ss. V-IV a.C.), la mezcla informa sobre la circulación de los nombres y no sobre la lengua
                de quien escribe.
              </p>
            </Card>
          </Sec>

          <Sec title="Adscripción de las consultas" sub="Bases de la adscripción, grado de certeza y consultas que la bibliografía cuenta como mezclas">
            <AdscripcionTable data={ADSCRIPCION_MEZ} color={MEZ_INK} />
          </Sec>

          <Sec title="Dialectos que se combinan" sub="Todas las mezclas salvo una tienen el jónico-ático como componente; los dialectos no jónico-áticos apenas se mezclan entre sí"
            note="La excepción es I.Dodone DVC 1025A+B (finales del s. IV a.C.), que combina, con reservas, la Doris severior y la Doris mitior.">
            <PorCerteza data={COMBINACIONES_MEZ} color={MEZ_INK} />
          </Sec>

          <Sec title="La mezcla dialectal en contexto" sub="Macrogrupos dialectales del corpus de Dodona">
            <Bars horizontal data={MACROGRUPOS} highlight="Mezcla dialectal" height={300} left={200} />
          </Sec>

          <Sec title="Distribución cronológica" sub={`El s. IV a.C. reúne ${cs} de las ${TOTAL_MEZ} mezclas; las anteriores a finales de ese siglo no pueden contener koiné`}>
            <Bars data={crono(CHRONO_MEZ)} indexBy="period" keys={["n"]} height={300} rotate={-35} />
          </Sec>

          <Sec title="Temática de las consultas" sub="Comercio y viajes, como corresponde a consultantes que se movían entre comunidades de dialecto distinto">
            <Temas data={THEMES_MEZ} color={MEZ} height={330} />
          </Sec>

          <Sec title="Alfabeto" note="Ninguna mezcla está escrita en alfabeto corintio ni en otro alfabeto epicórico bien identificado: las consultas epicóricas que parecían mezclas eran ejemplos de alternancia de alfabetos.">
            <DonutLegend data={ALF_MEZ_PIE} height={220} valueColor={MEZ_INK} />
          </Sec>
        </>}
        {sub === "tipos" && <>
          <Sec title="Tipos de mezcla dialectal en el corpus" sub="Dónde se encuentra el elemento ajeno al dialecto del texto"
            note="Cada consulta se cuenta en un solo tipo, el de su elemento más característico. En las dos últimas columnas, las consultas seguras y las dudosas o de solo nombre.">
            <Table color={MEZ_INK} rowHeader={1} head={["§", "Tipo", "Elemento no jónico-ático", "Elemento jónico-ático", "Explicación más probable", "Seguras", "Dudosas"]}
              rows={TIPOS_MEZ.map((t) => [
                <span style={{ color: C.muted }}>{t.sec}</span>, <span style={{ fontFamily: "var(--fh)" }}>{t.tipo}</span>, g(t.noja), g(t.ja),
                <span style={{ color: C.muted }}>{t.expl}</span>,
                <b style={{ color: MEZ_INK }}>{t.seguras}</b>, <span style={{ color: "#a0761c" }}>{t.dudosas}</span>,
              ])} />
          </Sec>
          <Sec title="Las mezclas según su tipo">
            <Bars horizontal data={TIPOS_MEZ.map((t) => ({ name: t.tipo, segura: t.seguras, dudosa: t.dudosas }))} keys={["segura", "dudosa"]}
              colors={{ segura: MEZ_INK, dudosa: ORO }} labels={{ segura: "segura", dudosa: "dudosa o de solo nombre" }} height={300} left={260} />
          </Sec>
          <Sec title="Las mezclas, tipo a tipo" sub="Los apartados de §4 del capítulo, con sus inscripciones: pulsa para desplegar cada uno">
            <Secciones items={TIPOLOGIA_MEZ} color={MEZ_INK} />
          </Sec>
        </>}
      </>}

      {tab === "anexo" && <>
        <Sec title="Las inscripciones con mezcla dialectal" sub="Texto de la edición, datación y clasificación de la tesis">
          <Anexo rows={ANEXO_MEZ} color={MEZ_INK} tint={MEZ} />
        </Sec>
      </>}

      {tab === "interp" && <>
        <Sec title="Explicaciones de la mezcla e implicaciones para el oráculo">
          <Card style={{ padding: "18px 22px" }}>
            <p style={BIG}>
              La mezcla no se distribuye al azar. Una de cada cinco se limita a la fórmula de apertura o al nombre de la diosa, la parte más
              pública y fija de la consulta, que pudo copiarse, aprenderse de oídas o redactarla el personal del santuario; casi la mitad presenta
              formas jónico-áticas en consultas dóricas, reflejo de una norma de prestigio en la escritura de los propios hablantes de dórico, y
              el resto se reparte entre palabras aisladas, formas híbridas, nombres propios y unas pocas mezclas con el noroccidental, la{" "}
              <i>Doris severior</i>, el tesalio y el beocio.
            </p>
          </Card>
        </Sec>
        <Sec title="Tres conclusiones para el conocimiento del oráculo">
          {[
            ["La koiné llegó tarde a Dodona", <>Las mezclas anteriores a finales del s. IV a.C., que son la mayoría, combinan el dórico con el ático o el jónico; la koineización solo se observa en las consultas helenísticas, en las que el dórico se repliega a las fórmulas y a los dioses. Entre las más antiguas figuran <Ref src="Lhôte" id="133A" /> (mediados del s. V a.C.), una consulta beocia con ταῦτα, y <Ref src="DVC" id="729A" /> y <Ref src="DVC" id="1410" /> (finales del s. V a.C.).</>],
            ["El personal del santuario no explica la mayoría", <>Su intervención es verosímil en algunos casos, pero la mayor parte de las mezclas es obra de consultantes que escribían su propia lengua con las formas de prestigio de su entorno.</>],
            ["La mezcla llegó con los consultantes", <>Muchos procedían de zonas en que la convivencia de dialectos era cotidiana, como las colonias de población mixta del Occidente o el propio Epiro. Las consultas públicas de los caones (<Ref src="Lhôte" id="11" />, último cuarto del s. IV a.C.) y de los heracleotas (<Ref src="Lhôte" id="6A" />, último cuarto del s. V a.C.) muestran la mezcla en la lengua de una comunidad. Dodona fue menos el lugar en que los dialectos se mezclaron que el lugar en que la mezcla quedó por escrito.</>],
          ].map(([t, d]) => (
            <Card key={t} accent={MEZ}>
              <div style={{ fontFamily: "var(--fh)", fontSize: 14.5, fontWeight: 700, color: MEZ_INK, marginBottom: 6 }}>{t}</div>
              <p style={PROSE}>{d}</p>
            </Card>
          ))}
        </Sec>
        <Sec title="Las explicaciones, una a una" sub="Los apartados de §5 del capítulo: pulsa para desplegar cada uno">
          <Secciones items={EXPLICACIONES_MEZ} color={MEZ_INK} />
        </Sec>
      </>}
    </ChapterLayout>
  );
}

// ══ Cap. 14: los dialectos minoritarios ════════════════════════════
const GRUPOS_MIN = {
  mac: {
    t: "Macedonio", dialectos: ["Macedonio"], apartados: "§3", texto: <>
      Dos consultas de la primera mitad del s. IV a.C., y en las dos el indicio decisivo es el nombre. En{" "}
      <Ref src="DVC" id="2493A" /> (principios del s. IV a.C.), Méndez Dosuna (2007g: 283-284) propuso el origen macedonio por exclusión
      y por los futuros ἔσσονται y ζώσοντι, que él mismo admitió después como posibles futuros dóricos encubiertos (2018a: 292); la
      adscripción descansa sobre todo en Κεβάλιος, con la β por φ que los antiguos atribuían a los macedonios. En{" "}
      <Ref src="DVC" id="94" /> (primer cuarto del s. IV a.C.) solo hay un nombre, Ἄλβειος, forma macedonia de Ἀλφειός. El hipocorístico
      Κέββας de <Ref src="DVC" id="480B" /> admite un origen macedonio o ilirio y queda sin clasificar. Los macedonios de la segunda mitad
      del s. IV a.C. escribirían en koiné, y sus consultas no pueden distinguirse.
    </>,
  },
  pel: {
    t: "Dialectos del Peloponeso", sub: "eleo, acayo, laconio", dialectos: ["Acayo", "Eleo"], apartados: "§4", texto: <>
      El acayo no se distingue en textos breves de los demás dialectos dóricos, y el único criterio es el alfabeto de las colonias de la
      Magna Grecia, con iota de tres trazos, san y delta redondeada: cinco consultas lo unen a un rasgo no jónico-ático visible, como{" "}
      <Ref src="DVC" id="968A" /> (finales del s. VI a.C.), una de las más antiguas del corpus, y <Ref src="DVC" id="109A" /> se cuenta
      solo por el alfabeto. Ninguna consulta conserva un rasgo eleo inequívoco: de las seis que los editores asignan al alfabeto de la
      Élide, cinco son no jónico-áticas y <Ref src="DVC" id="1993A" />, con rasgos contrarios al eleo, se cuenta en el dórico general;
      quedan dos eleas dudosas, la ζ por δ de [Ἱ]πόζαμο&lt;ς&gt; en <Ref src="DVC" id="4145B" />, quizá de la frontera entre Acaya y la
      Élide, y μαστείι en <Ref src="Lhôte" id="29" />, que admite una explicación dórica. Las propuestas laconias no se sostienen.
    </>,
  },
  otr: {
    t: "Otros testimonios", sub: "rodio, textos no griegos y otras variedades", dialectos: ["Rodio", "Textos no griegos"], apartados: "§5", texto: <>
      El rodio de <Ref src="Lhôte" id="89Aa" /> (s. IV a.C.), la consulta del comerciante que Lhôte (2006: 186-188) atribuyó a una
      colonia siciliana, depende del infinitivo ἔμειν, que Méndez Dosuna (2007b: 143) explica como una errata; el χρῆυνται de{" "}
      <Ref src="DVC" id="172A" />, cuyo único paralelo procede de Telos, se cuenta entre las no jónico-áticas. La única adscripción
      segura del capítulo es la de <Ref src="DVC" id="27A" /> (principios del s. V a.C.), y lo es en sentido negativo: la secuencia no
      puede leerse como griego. El ΑΠΟΡΕΙΤΑΝ de <Ref src="DVC" id="3977A" />, que los editores corrigen en un genitivo de los epirotas,
      queda sin clasificar. El corintio, el jónico oriental y el eubeo, que la distribución de la tesis prevé aquí, se estudian en el
      dórico general, en el jónico y en la mezcla, como la consulta del eretrio Ὀνήριμος (<Ref src="DVC" id="2217A" />).
    </>,
  },
};

function Minoritarios({ switcher, subnav }) {
  const [tab, setTab] = useState("context");
  const [grupo, setGrupo] = useState("mac");
  const gr = GRUPOS_MIN[grupo];
  const ant = CHRONO_MIN.filter((d) => /s\. V\b|s\. VI|VI–V/.test(d.period) && !d.period.includes("V–IV")).reduce((a, d) => a + d.n, 0);
  return (
    <ChapterLayout switcher={switcher} subnav={subnav} color={MIN_INK} accent={[C.terra, MIN, C.blue, C.green]}
      title={<>Los <em style={{ fontWeight: 700, color: MIN_INK }}>dialectos minoritarios</em> en las laminillas oraculares de Dodona</>}
      subtitle="Macedonio, eleo, acayo, rodio y textos no griegos · El alcance del oráculo más allá del Epiro"
      stats={<>
        <Stat label="Inscripciones" value={String(TOTAL_MIN)} sub="ss. VI–IV a.C." accent={MIN_INK} />
        <Stat label="Corpus dialectal" value={`${pct(TOTAL_MIN)} %`} sub={`${TOTAL_MIN} de ${miles(TOTAL_CORPUS)}`} accent={C.terra} />
        <Stat label="Dudosas o de solo nombre" value={`${pct(dudosas(CERTEZA_MIN), TOTAL_MIN)} %`} sub="la proporción más alta de la tesis" accent={ORO} />
        <Stat label="Anteriores al 400 a.C." value={String(ant)} sub={`de ${TOTAL_MIN}`} accent={C.blue} />
      </>}
      tabs={[
        { id: "context", l: "Los dialectos minoritarios", i: "§" },
        { id: "profile", l: "Perfil dialectal", i: "Α" },
        { id: "grupos", l: "Dialectos y consultas", i: "Ω" },
      ]} tab={tab} onTab={setTab}>

      {tab === "context" && <>
        <Sec title="Consultantes de regiones alejadas del santuario" sub="Variedades representadas por uno o dos textos">
          <Card style={{ padding: "18px 22px" }}>
            <p style={BIG}>
              Doce inscripciones no pertenecen al jónico-ático, ni al dórico de las colonias corintias y del Noroeste, ni al tesalio o al
              beocio: se reparten entre el acayo, con seis, el eleo y el macedonio, con dos cada uno, y el rodio, con una, y se cuenta con ellas
              una inscripción que no parece escrita en griego. Lhôte (2006) reconoció una consulta rodia, otra en alfabeto aqueo de la Magna
              Grecia y un texto que relacionó con el norpiceno, y dibujó un área de influencia del oráculo de la que quedaban fuera el
              Peloponeso y Macedonia; Méndez Dosuna (2018a: 266, 272) observa que la nueva edición apenas ha alterado ese mapa, aunque ha aportado
              candidatos macedonios, uno eretrio, formas relacionadas con el eleo y textos en alfabeto aqueo que Johnston (2021: 114) atribuye a
              aqueos de Acaya o de sus colonias.
            </p>
          </Card>
        </Sec>
        <Sec title="Lo que mide el número de inscripciones">
          <Card>
            <p style={PROSE}>
              La cifra mide la visibilidad de estos dialectos más que su presencia, y debe entenderse, como en la <i>Doris severior</i>, como un
              límite inferior. Hasta finales del s. V a.C. los alfabetos epicóricos permiten reconocer a los consultantes, y por eso las consultas
              aqueas y las atribuidas a la Élide se concentran en los ss. VI y V a.C.; con el alfabeto jónico esa vía desaparece, y como estos
              dialectos comparten con el dórico del entorno la mayoría de los rasgos de las consultas ({g("ᾱ")}, {g("κα")}, {g("αἰ")}, las
              contracciones de la fórmula), en el s. IV a.C. solo los antropónimos y alguna forma aislada delatan a sus hablantes.
            </p>
            <p style={{ ...PROSE, marginTop: 10 }}>
              La relación entre el número de inscripciones y la importancia histórica de cada región es inversa en más de un caso: Macedonia, la
              Élide o Esparta, con vínculos políticos o religiosos más estrechos con el santuario, son las que menos huella dialectal dejan,
              mientras que los aqueos de la Magna Grecia, ausentes de las fuentes literarias sobre Dodona, son los más fáciles de reconocer
              gracias a su alfabeto. Los testimonios dibujan sobre todo la red marítima del Occidente, la misma de las consultas en{" "}
              <i>Doris severior</i>, y buena parte de estos consultantes debe de esconderse entre las inscripciones no jónico-áticas.
            </p>
          </Card>
          <div style={{ marginTop: 12 }}><Secciones items={APARTADOS_MIN.filter((x) => x.sec === "§6")} color={MIN_INK} /></div>
        </Sec>
      </>}

      {tab === "profile" && <>
        <Sec title="Los dialectos minoritarios en el corpus de Dodona">
          <Cifras total={TOTAL_MIN} cert={CERTEZA_MIN} color={MIN_INK} nombre="solo nombre o alfabeto" />
          <Card>
            <p style={PROSE}>
              En todas la adscripción descansa en un solo rasgo, en un antropónimo o en el alfabeto. La única segura,{" "}
              <Ref src="DVC" id="27A" />, lo es en sentido negativo; de las nueve dudosas, cinco unen el alfabeto aqueo a un rasgo no
              jónico-ático visible, dos descansan en una forma aislada de interpretación discutida y dos en indicios que solo apuntan a una región
              si se acepta una lectura concreta.
            </p>
          </Card>
        </Sec>
        <Sec title="Adscripción de las consultas" sub="Bases de la adscripción, grado de certeza y consultas atribuidas a estos dialectos que se cuentan en otros grupos">
          <AdscripcionTable data={ADSCRIPCION_MIN} color={MIN_INK} />
        </Sec>
        <Sec title="Dialectos del grupo">
          <PorCerteza data={DIALECTOS_MIN} color={MIN} left={150} />
        </Sec>
        <Sec title="Los dialectos minoritarios en contexto" sub="Macrogrupos dialectales del corpus de Dodona; los dialectos minoritarios figuran como “Otros”">
          <Bars horizontal data={MACROGRUPOS} highlight="Otros" height={300} left={200} />
        </Sec>
        <Sec title="Distribución cronológica" sub="Las que se identifican por el alfabeto son anteriores al 400 a.C.; las del s. IV a.C., por formas o antropónimos">
          <Bars data={crono(CHRONO_MIN)} indexBy="period" keys={["n"]} height={260} rotate={-35} />
        </Sec>
        <Sec title="Temática" sub="Consultas privadas sobre la vida cotidiana; ninguna procede de una comunidad">
          <Temas data={THEMES_MIN} color={MIN} height={240} />
        </Sec>
      </>}

      {tab === "grupos" && <>
        <SubNav color={MIN_INK} value={grupo} onChange={setGrupo} items={Object.entries(GRUPOS_MIN).map(([id, x]) => [id, x.t,
          `${x.sub ? `${x.sub} · ` : ""}${INSCRIPCIONES_MIN.filter((d) => x.dialectos.includes(d.dialecto)).length} inscripciones`])} />
        <Sec title={gr.t}>
          <Card><p style={PROSE}>{gr.texto}</p></Card>
        </Sec>
        <Sec title="Los apartados del capítulo" sub="Pulsa para desplegar cada uno">
          <Secciones items={APARTADOS_MIN.filter((x) => x.sec === gr.apartados || x.sec.startsWith(`${gr.apartados}.`))} color={MIN_INK} />
        </Sec>
        <Sec title="Inscripciones" sub="Texto de la edición y clasificación de la tesis">
          <div style={{ display: "grid", gap: 10 }}>
            {INSCRIPCIONES_MIN.filter((d) => gr.dialectos.includes(d.dialecto)).map((d) => <InscripcionCard key={d.id} d={{ ...d, etq: d.dialecto.toLowerCase() }} color={MIN_INK} />)}
          </div>
        </Sec>
      </>}
    </ChapterLayout>
  );
}

// ══ Cap. 15: las inscripciones no jónico-áticas ════════════════════
// El anexo (844 textos, unos 150 kB) solo se carga al abrir la pestaña.
const cargarAnexoNJA = () => import("../data/anexoNoJonAt.json");

function NoJonAt({ switcher, subnav }) {
  const [tab, setTab] = useState("context");
  const [sub, setSub] = useState("cifras");
  const s4 = CHRONO_NJA.filter((d) => d.period.includes("s. IV") && !d.period.includes("–")).reduce((a, d) => a + d.n, 0);
  return (
    <ChapterLayout switcher={switcher} subnav={subnav} color={NJA_INK} accent={[C.terra, NJA, C.blue, C.green]}
      title={<>Las inscripciones <em style={{ fontWeight: 700, color: NJA_INK }}>no jónico-áticas</em> en las laminillas oraculares de Dodona</>}
      subtitle="Un rasgo ajeno al jónico-ático y a la koiné, pero ninguno que permita atribuirlas a un dialecto concreto"
      stats={<>
        <Stat label="Inscripciones" value={String(TOTAL_NJA)} sub="ss. VI–II a.C." accent={NJA_INK} />
        <Stat label="Corpus dialectal" value={`${pct(TOTAL_NJA)} %`} sub={`${TOTAL_NJA} de ${miles(TOTAL_CORPUS)}`} accent={C.terra} />
        <Stat label="Seguras" value={`${pct(CERTEZA_NJA.seguras, TOTAL_NJA)} %`} sub="excluyen el jónico-ático" accent={C.blue} />
        <Stat label="Dórico probable" value="328-494" sub="con el dórico demostrado (267)" accent={DIALECT_COLORS.dorico} />
      </>}
      tabs={[
        { id: "context", l: "Por qué hay tantas", i: "§" },
        { id: "profile", l: "Perfil dialectal", i: "ᾱ" },
        { id: "anexo", l: "Las inscripciones", i: "Ω" },
      ]} tab={tab} onTab={setTab}>

      {tab === "context" && <>
        <Sec title="Un grupo definido por un criterio negativo" sub="El grupo más numeroso del corpus, que no es un dialecto">
          <Card style={{ padding: "18px 22px" }}>
            <p style={BIG}>
              Con {TOTAL_NJA} inscripciones, el {pct(TOTAL_NJA)} % de las que presentan características dialectales, las no jónico-áticas
              reúnen las consultas que documentan al menos un rasgo ajeno al jónico-ático y a la koiné, pero ninguno que permita atribuirlas a un
              dialecto concreto. La bibliografía atribuye al dórico la mayor parte de las laminillas (Crespo y Giannakis 2019: 48; Giannakis
              2024a: 43; Méndez Dosuna 2024, §4), pero reconoce que en muchas la identificación del dialecto resulta muy difícil o imposible, y
              ya Lhôte (2006: 363-379) reservó un grupo propio para el dórico de procedencia indeterminada. La categoría no contradice que el
              dórico predomine en el corpus: separa lo que puede demostrarse de lo que solo resulta probable.
            </p>
          </Card>
        </Sec>
        <Sec title="Por qué hay tantas inscripciones no jónico-áticas">
          {[
            ["El método", <>El criterio de los rasgos que excluyen el eolio trasladó a este grupo 243 consultas que la clasificación de partida atribuía al dórico, y la revisión de las inscripciones sin clasificar añadió más de cuatrocientas: 585 de las {TOTAL_NJA} carecían de clasificación al comienzo del trabajo. El criterio de la apócope πέρ retiró, en cambio, treinta consultas en que πέρ precede a una laguna.</>],
            ["El estado de los textos", <>Con una media de 3,6 palabras legibles por inscripción y una mediana de dos, quedan por debajo del jónico-ático y la koiné (4,6), del tesalio (4,7) y del dórico general (5,2), y muy lejos de la mezcla (7,5). Una invocación como Ζεῦ Νᾶε καὶ Διώνα (<Ref src="DVC" id="81B" />, mediados del s. IV a.C.) o una pregunta reducida a κα [- - -] (<Ref src="DVC" id="2888B" />, segunda mitad del s. V a.C.) excluyen el jónico-ático, pero no ofrecen ningún otro dato.</>],
            ["La naturaleza de los rasgos", <>Los más frecuentes son conservaciones que el jónico-ático perdió y que comparten los demás dialectos: 606 inscripciones (el 71,8 %) presentan un único tipo de rasgo, y las fórmulas aportan buena parte de ellos, pues en 130 (el 15,4 %) τύχα, ἀγαθά o Διώνα son los únicos rasgos visibles.</>],
          ].map(([t, d]) => (
            <Card key={t} accent={NJA}>
              <div style={{ fontFamily: "var(--fh)", fontSize: 14.5, fontWeight: 700, color: NJA_INK, marginBottom: 6 }}>{t}</div>
              <p style={PROSE}>{d}</p>
            </Card>
          ))}
          <div style={{ marginTop: 12 }}><Secciones items={POR_QUE_NJA} color={NJA_INK} /></div>
        </Sec>
      </>}

      {tab === "profile" && <>
        <SubNav color={NJA_INK} value={sub} onChange={setSub} items={[
          ["cifras", "Las inscripciones no jónico-áticas en números", "adscripción, cronología, temática y alfabeto"],
          ["rasgos", "Rasgos no jónico-áticos", `${RASGOS_NJA.length} rasgos y su ámbito dialectal según Buck (1955)`],
          ["compatibles", "Los dialectos compatibles", "cruce de los rasgos de cada inscripción"],
        ]} />
        {sub === "cifras" && <>
          <Sec title="Las inscripciones no jónico-áticas en el corpus de Dodona">
            <Cifras total={TOTAL_NJA} cert={CERTEZA_NJA} color={NJA_INK} />
            <Card>
              <p style={PROSE}>
                La seguridad se refiere a la exclusión del jónico-ático, no a la adscripción a un dialecto concreto. En las dudosas, la letra
                diagnóstica es insegura, la forma admite otra lectura, como ΑΥΤΑΙ en <Ref src="DVC" id="1630A" /> (primera mitad del
                s. V a.C.), que puede ser αὐτᾶι o αὐταί, carece de un contexto legible, como ἄλλαν en <Ref src="DVC" id="1562A" /> (segunda
                mitad del s. V a.C.), o tiene letras restituidas; las dos de solo nombre, <Ref src="DVC" id="9A" /> y <Ref src="DVC" id="256A" />, descansan en Ἐθνιάδας y Τ̣ιμολαΐδας.
              </p>
            </Card>
          </Sec>
          <Sec title="Adscripción de las consultas" sub="Bases de la adscripción, grado de certeza y consultas excluidas del grupo">
            <AdscripcionTable data={ADSCRIPCION_NJA} color={NJA_INK} />
          </Sec>
          <Sec title="Las inscripciones no jónico-áticas en contexto" sub="Macrogrupos dialectales del corpus de Dodona">
            <Bars horizontal data={MACROGRUPOS} highlight="No jónico-ático (sin precisar)" height={300} left={200} />
          </Sec>
          <Sec title="Distribución cronológica" sub={`El s. IV a.C. reúne ${s4} inscripciones; el peso del s. V a.C., con textos más breves, es algo menor que en el dórico general`}>
            <Bars data={crono(CHRONO_NJA)} indexBy="period" keys={["n"]} height={300} rotate={-35} />
          </Sec>
          <Sec title="Temática de las consultas" sub="Casi un tercio no puede clasificarse por su contenido, reflejo del estado de los textos">
            <Temas data={THEMES_NJA} color={NJA_INK} height={330} />
          </Sec>
          <Sec title="Alfabeto" note="Las consultas en alfabeto corintio con un rasgo no jónico-ático visible se cuentan en el dórico general, y las de alfabeto aqueo, entre las aqueas; la relación entre alfabeto y dialecto no es automática.">
            <DonutLegend data={ALF_NJA_PIE} height={240} valueColor={NJA_INK} />
          </Sec>
        </>}
        {sub === "rasgos" && (
          <Sec title="Rasgos no jónico-áticos visibles en el grupo" sub={`Ámbito dialectal de cada rasgo y su documentación en las ${TOTAL_NJA} inscripciones`}
            note="Sección de Buck (1955) en la primera columna; el ámbito de περ' y de τουτ- se discute en el capítulo. En los ejemplos, el número remite a I.Dodone DVC salvo indicación. Una inscripción puede figurar en varias filas.">
            <Table color={NJA_INK} rowHeader={1} head={["§", "Rasgo", "Ámbito dialectal", "Ejemplos", "Inscripciones"]}
              rows={RASGOS_NJA.map((r) => [
                <span style={{ color: C.muted }}>{r.sec}</span>, <span style={{ fontFamily: "var(--fh)" }}>{renderGreekText(r.rasgo)}</span>,
                <span style={{ color: C.muted }}>{r.ambito}</span>, g(r.ejemplos),
                <span><b style={{ color: NJA_INK }}>{r.n}</b> <span style={{ color: C.dim, fontSize: 11 }}>({pct(r.n, TOTAL_NJA)} %)</span></span>,
              ])} />
            <div style={{ marginTop: 14 }}><Secciones items={RASGOS_TXT_NJA} color={NJA_INK} /></div>
          </Sec>
        )}
        {sub === "compatibles" && <>
          <Sec title="Dialectos compatibles con los rasgos de cada inscripción" sub="Cruce de la distribución dialectal (Buck 1955) de todos los rasgos visibles de cada consulta"
            note="Se consideran los dialectos con presencia segura en el corpus o en su entorno: el dórico en sentido amplio, el beocio, el tesalio (la Histiótide aparte, por κα), el lesbio y el arcadio-chipriota. Cada inscripción figura en una sola fila.">
            <Bars horizontal data={COMPATIBLES_NJA.map((d) => ({ name: d.dialectos, value: d.n, color: NJA }))} height={440} left={280} />
          </Sec>
          <Sec title="Rasgos que determinan cada grupo">
            <Table color={NJA_INK} rowHeader={0} head={["Dialectos compatibles", "Rasgos que lo determinan", "Inscripciones"]}
              rows={COMPATIBLES_NJA.map((d) => [d.dialectos, g(d.rasgos),
                <span><b style={{ color: NJA_INK }}>{d.n}</b> <span style={{ color: C.dim, fontSize: 11 }}>({pct(d.n, TOTAL_NJA)} %)</span></span>])} />
            <Card style={{ marginTop: 14 }}>
              <p style={PROSE}>
                La mayor parte del grupo procede con toda verosimilitud de consultantes dóricos, pero solo una parte puede delimitarse con
                argumentos lingüísticos: 61 inscripciones excluyen todo el tesalio y el lesbio y apuntan al dórico o al beocio, y otras 166, con
                κα, solo dejan abierta además la Histiótide. Por eso el dórico probable no admite una cifra única: a las 267 del dórico demostrado
                pueden sumarse esas 61 y, con más reservas, las 166, de modo que se sitúa entre 328 y 494 inscripciones. Las cuatro en que πέρ
                aparece junto a κα, como <Ref src="DVC" id="315A" /> (s. V a.C.) o <Ref src="DVC" id="2667A" /> (mediados del s. V a.C.), son
                compatibles con el dórico, pero también con el tesalio de Histiótide.
              </p>
            </Card>
            <div style={{ marginTop: 14 }}><Secciones items={COMPATIBLES_TXT_NJA} color={NJA_INK} /></div>
          </Sec>
        </>}
      </>}

      {tab === "anexo" && (
        <Sec title="Las inscripciones no jónico-áticas" sub="Texto de la edición, datación y certeza; en las dudosas, el motivo">
          <Anexo load={cargarAnexoNJA} color={NJA_INK} tint={NJA} />
        </Sec>
      )}
    </ChapterLayout>
  );
}

export default function Frontera({ switcher }) {
  const [sub, setSub] = useState("minoritarios");
  const subnav = <SectionNav label="Dialectos minoritarios e inscripciones no jónico-áticas" items={SUBSECCIONES} value={sub}
    onChange={setSub} tint={NJA} />;
  const View = sub === "nja" ? NoJonAt : Minoritarios;
  return <View switcher={switcher} subnav={subnav} />;
}
