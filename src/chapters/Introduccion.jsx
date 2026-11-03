// Introducción de la tesis (caps. 1-3): el santuario, las laminillas, la metodología y las cifras del corpus.
import { useState } from "react";
import { ALFABETO_COLORS, C, DIALECT_COLORS, ORO, PROSE, SIGLO_COLORS } from "../theme.js";
import { MACROGRUPOS, miles, pct } from "../data/corpus.js";
import { ALFABETOS_INT, CERTEZA_INT, CHRONO_INT, CORPUS_INT, GRUPOS_INT, TOTAL_EPICORICAS, TOTAL_INSCRIPCIONES } from "../data/introduccion.js";
import { Bars } from "../components/charts.jsx";
import { Ref } from "../components/Inscriptions.jsx";
import { Card, ChapterLayout, Sec, Stat, Stats, SubNav } from "../components/ui.jsx";

const COLOR = C.blue;   // el de las figuras de la introducción: no tiene color de dialecto
const SIN = C.milesio;
const NOMBRE = "#cbbf9f";
const BIG = { ...PROSE, fontSize: 13, color: C.text, lineHeight: 1.8 };
const CLAS = CORPUS_INT[0].con;
const nDialecto = (s) => MACROGRUPOS.filter((m) => s.includes(m.name)).reduce((a, m) => a + m.value, 0);
const DEMOSTRADO = nDialecto(["Dórico general", "Dórico noroccidental", "Doris severior"]);

const TABS = [
  { id: "santuario", l: "El santuario", i: "📜" },
  { id: "laminillas", l: "Las laminillas", i: "Λ" },
  { id: "metodo", l: "Metodología", i: "Μ" },
  { id: "cifras", l: "El corpus en cifras", i: "Σ" },
];

const Bloque = ({ t, children, accent = COLOR }) => (
  <Card accent={accent}>
    <div style={{ fontFamily: "var(--fh)", fontSize: 14.5, fontWeight: 700, color: C.heading, marginBottom: 6 }}>{t}</div>
    <p style={PROSE}>{children}</p>
  </Card>
);
const Rejilla = ({ children }) => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: 12 }}>{children}</div>
);

// §3.2.4: el rasgo que justifica la adscripción en cada grupo.
const CRITERIOS = [
  ["El dórico", "dorico", <>Solo se cuenta como dórica la inscripción con un rasgo que excluya los dialectos eólicos, porque la ᾱ, la /t/ ante /i/, κα, αἰ o la apócope son compartidos por el beocio o el tesalio: el futuro dórico, -μες, -ντι o ἕρπω, y además la familia de πάομαι, el artículo τοί, los adverbios en -ει y en -κα, ὀπτίλλος y ζώω. Las consultas en alfabeto corintio con un rasgo no jónico-ático visible se cuentan en el dórico general.</>],
  ["El tesalio y el beocio", "tesalio", <>Se reconocen por una constelación de rasgos propios: en el tesalio, ΕΙ y ΟΥ por las vocales medias largas, -νν-, κε y κίς, los infinitivos temáticos en -μεν y un léxico característico; en el beocio, /ai̯/ &gt; /ɛː/, /e/ &gt; /i/ ante vocal y δ(δ) de *dj. Algunos rasgos sitúan la consulta en una región (κε y κίς, la Pelasgiótide; κα o μά, la Histiótide).</>],
  ["El jónico-ático y la koiné", "jonicoAtico", <>Forman un solo grupo, porque en la mayoría de las consultas no pueden distinguirse. Basta un rasgo jónico-ático visible, como η por ᾱ, εἰ y ἄν frente a αἰ y κα, ἔσται, -σι o -ναι; la koiné solo se reconoce con un rasgo propio o una fecha desde finales del s. IV a.C.</>],
  ["La mezcla dialectal", "mezcla", <>Rasgos visibles de dos grupos que no pueden convivir en un único dialecto, como κα junto a εἰ; la categoría no presupone una explicación, y son dudosas las mezclas en que la fórmula dórica solo convive con ἐπερωτᾶι, como <Ref src="DVC" id="2423B" /> (mediados del s. IV a.C.).</>],
  ["Las inscripciones no jónico-áticas", "noJonAt", <>Un grupo definido por un criterio negativo: algún rasgo ajeno al jónico-ático, pero ninguno que permita atribuirlas a un dialecto concreto. No contradicen el predominio del dórico, sino que separan lo que puede demostrarse de lo que solo resulta probable.</>],
  ["Los dialectos minoritarios", "otros", <>El macedonio, el eleo, el acayo o el rodio, con un rasgo propio, un antropónimo o un alfabeto bien identificado de la región junto a un rasgo no jónico-ático visible; se cuenta también la única inscripción que no parece escrita en griego, <Ref src="DVC" id="27A" /> (principios del s. V a.C.).</>],
];

export default function Introduccion({ switcher }) {
  const [tab, setTab] = useState("santuario");
  const [sub, setSub] = useState("grupos");
  const s4 = CHRONO_INT.find((d) => d.siglo === "IV").n, s5 = CHRONO_INT.find((d) => d.siglo === "V").n;

  return (
    <ChapterLayout switcher={switcher} color={COLOR} accent={[C.terra, COLOR, C.gold, C.green]}
      title={<>Las variedades dialectales de las <em style={{ fontWeight: 700, color: COLOR }}>laminillas oraculares</em> de Dodona</>}
      subtitle="El santuario, el corpus y la metodología"
      stats={<>
        <Stat label="Inscripciones" value={miles(TOTAL_INSCRIPCIONES)} sub="I.Dodone DVC e I.Dodone Lhôte" accent={COLOR} />
        <Stat label="Con rasgos dialectales" value={miles(CLAS)} sub={`el ${pct(CLAS, TOTAL_INSCRIPCIONES)} % del corpus`} accent={C.terra} />
        <Stat label="Adscripción segura" value={`${pct(CERTEZA_INT.seguras, CLAS)} %`} sub={`${miles(CERTEZA_INT.seguras)} de ${miles(CLAS)}`} accent={C.green} />
        <Stat label="Cronología" value="ss. VI–II a.C." sub={`el ${pct(s4, TOTAL_INSCRIPCIONES)} % del s. IV a.C.`} accent={C.gold} />
      </>}
      tabs={TABS} tab={tab} onTab={setTab}>

      {tab === "santuario" && <>
        <Sec title="Presentación" sub="Un corpus epigráfico singular para estudiar la variación dialectal del griego antiguo">
          <Card style={{ padding: "18px 22px" }}>
            <p style={BIG}>
              Desde mediados del s. VI a.C. hasta el s. II a.C., miles de consultantes grabaron en finas hojas de plomo las preguntas que
              dirigían a Zeus Naios y a Dione, en los dialectos y en los alfabetos de quienes las formulaban. La publicación en 2013 de las
              laminillas de las excavaciones de Evangelidis, que multiplicó por veinte el material conocido, ha hecho del santuario un lugar
              privilegiado para estudiar la variación dialectal: en un mismo espacio y en unos mismos siglos conviven el dórico del Noroeste, el
              de las colonias corintias y el de la Magna Grecia, el tesalio, el beocio, el jónico, el ático y la koiné. Las consultas son, sin
              embargo, breves, fragmentarias y formulares, y la tesis las clasifica con criterios explícitos que distinguen lo que el texto
              demuestra de lo que solo hace probable, con una calificación de certeza para cada adscripción.
            </p>
          </Card>
        </Sec>
        <Sec title="El santuario de Dodona" sub="Contexto histórico y geográfico (capítulo 1)">
          <Rejilla>
            <Bloque t="El Epiro y el valle de Dodona">
              Una región montañosa cerrada por el Pindo al este, frente a Macedonia y Tesalia, cuyas vías naturales de contacto se abrían hacia
              el oeste y el sur. Su clima frío y lluvioso dejó huella en la tradición: la <i>Ilíada</i> llama a Dodona δυσχείμερος (Il. 2.750;
              16.234).
            </Bloque>
            <Bloque t="Los pueblos del Epiro">
              Hasta la transición a la época helenística, la población no se organizó en <i>poleis</i>, salvo en las colonias de la costa, sino
              en <i>ethne</i>: la tradición distingue a tesprotos, caones y molosos, junto a otros grupos como casopeos, atamanes o parauaios
              (Chapinal-Heras 2021: 15-21).
            </Bloque>
            <Bloque t="El santuario hasta la época clásica">
              Los antiguos lo tenían por el oráculo más antiguo de los griegos (Hdt. 2.52.2), y lo conocen ya los poemas homéricos. La actividad
              religiosa solo es segura desde finales del s. VIII a.C.; durante la época arcaica fue un santuario al aire libre, con el roble
              sagrado rodeado de calderos sobre trípodes (Chapinal-Heras 2021: 24-27).
            </Bloque>
            <Bloque t="Época helenística y romana">
              El reinado de Pirro (297-272 a.C.) marcó su apogeo, con el bouleuterion, el pritaneo, el gran teatro y los Naia, que a comienzos
              del s. II a.C. alcanzaron la categoría de juegos estefanitas. Los etolios lo saquearon en el 219 a.C., y en el 167 a.C. las tropas
              de Emilio Paulo arrasaron el Epiro (Plb. 4.67.3; 30.15).
            </Bloque>
            <Bloque t="El oráculo y su ámbito">
              El dios era Zeus Naios, al que acompañaba Dione como σύνναος (Str. 7.7.12). Las fuentes atribuyen al oráculo procedimientos muy
              diversos (el roble, las palomas, los calderos, el sorteo), y el sorteo es el único que una parte de la bibliografía reconoce en las
              propias laminillas (Parker 2015: 111-112).
            </Bloque>
          </Rejilla>
        </Sec>
      </>}

      {tab === "laminillas" && <>
        <Sec title="Las laminillas oraculares" sub="Excavaciones, ediciones y características (capítulo 2)">
          <Rejilla>
            <Bloque t="Excavaciones y ediciones">
              Carapanos excavó el santuario en 1875-1877 y publicó 42 laminillas en <i>Dodone et ses ruines</i> (1878). Las de Evangelidis y
              Dakaris solo se conocieron por publicaciones selectivas hasta la edición de 2013 (<i>I.Dodone DVC</i>), que se suma al corpus de
              Lhôte (2006, <i>I.Dodone Lhôte</i>).
            </Bloque>
            <Bloque t="Material, forma y medidas">
              Hojas finas de plomo, de entre 2 y 16,5 cm de longitud y entre 1 y 7 cm de anchura, con letras que no suelen superar 1-1,5 mm y
              consultas de dos a cuatro líneas; una vez escritas se plegaban o se enrollaban con el texto hacia dentro (Papadopoulou y Vasileiou
              2021: 227-232).
            </Bloque>
            <Bloque t="Los textos de una laminilla">
              Junto a la consulta pueden aparecer el nombre del consultante, un título que resume el asunto o una letra aislada, quizá un número
              de orden (Robert 1883). Las respuestas son muy escasas: Martín González (2021: 223) solo acepta con relativa seguridad la de{" "}
              <Ref src="DVC" id="108B" /> (segundo cuarto del s. IV a.C.).
            </Bloque>
            <Bloque t="La autoría">
              Ninguna fuente describe cómo se redactaban las consultas. La mayoría de los estudiosos considera que los consultantes escribían
              sus propias preguntas, por la variedad de alfabetos y dialectos (Méndez Dosuna 2018b: 36; Crespo y Giannakis 2019: 57), y la
              cuestión tiene consecuencias directas para el estudio dialectal.
            </Bloque>
          </Rejilla>
        </Sec>
        <Sec title="Inscripciones del corpus con características dialectales"
          sub={`n = ${miles(TOTAL_INSCRIPCIONES)} inscripciones; solo un tercio conserva algún rasgo que permita pronunciarse sobre su dialecto`}>
          <Bars horizontal data={CORPUS_INT} keys={["con", "sin"]} indexBy="name" height={200} left={170}
            colors={{ con: COLOR, sin: SIN }} labels={{ con: "Con características dialectales", sin: "Sin rasgo dialectal visible" }} />
          <Card style={{ marginTop: 8 }}>
            <p style={PROSE}>
              La proporción es mucho más alta entre las inscripciones que solo recoge <i>I.Dodone Lhôte</i> (el{" "}
              {pct(CORPUS_INT[2].con, CORPUS_INT[2].con + CORPUS_INT[2].sin)} %) que entre las de <i>I.Dodone DVC</i> (el{" "}
              {pct(CORPUS_INT[1].con, CORPUS_INT[1].con + CORPUS_INT[1].sin)} %). Solo alrededor del 10 % de las laminillas de la edición de
              2013 se conserva completo (Tselikas 2017: 36; Giannakis 2024a: 37).
            </p>
          </Card>
        </Sec>
        <Sec title="Distribución cronológica de las inscripciones del corpus"
          sub={`Según las fechas de las ediciones: el s. IV a.C. reúne ${miles(s4)} inscripciones y el s. V a.C., ${miles(s5)}`}>
          <Bars data={CHRONO_INT.map((d) => ({ ...d, color: SIGLO_COLORS[d.siglo] || SIGLO_COLORS["Sin datar"] }))} indexBy="period" keys={["n"]}
            height={300} rotate={-30} format={miles} />
        </Sec>
      </>}

      {tab === "metodo" && <>
        <Sec title="Metodología y criterios de adscripción" sub="Una inscripción solo se atribuye a un dialecto con una prueba positiva">
          <Card style={{ padding: "18px 22px" }}>
            <p style={BIG}>
              La adscripción no es un dato que el corpus ofrezca de antemano, sino el resultado de decidir, inscripción por inscripción, qué se
              lee, qué rasgos son visibles, qué valor tienen y qué dialectos dejan abiertos. Un rasgo está atestiguado cuando es visible en el
              texto y no se limita a un antropónimo; lo restituido por el editor no cuenta, y la prueba ha de hallarse en el propio texto, aunque
              otra cara de la laminilla permita conocer el dialecto de quien la escribió. Todas las lecturas se han revisado sobre las ediciones,
              los facsímiles y, cuando ha sido posible, las propias laminillas: la autopsia en Ioánina (2024 y 2025) ha eliminado, por ejemplo, la
              mezcla de <Ref src="DVC" id="2160" /> (segunda mitad del s. IV a.C.).
            </p>
          </Card>
        </Sec>
        <Sec title="Criterios por grupo dialectal">
          <Rejilla>
            {CRITERIOS.map(([t, k, d]) => <Bloque key={t} t={t} accent={DIALECT_COLORS[k]}>{d}</Bloque>)}
          </Rejilla>
        </Sec>
        <Sec title="Alfabeto, onomástica y grados de certeza">
          <Rejilla>
            <Bloque t="El alfabeto">
              Es un indicio de la tradición de escritura de quien graba la laminilla y por sí solo no sirve para la adscripción; apoya, en cambio,
              un rasgo visible: con un rasgo no jónico-ático, el alfabeto corintio, ajeno a los dialectos eólicos, lleva la consulta al dórico
              general.
            </Bloque>
            <Bloque t="Grados de certeza">
              Segura, cuando el rasgo es visible, no admite otra interpretación razonable y no depende de una lectura discutida; dudosa, cuando
              descansa en una letra insegura, una lectura alternativa o una forma sin contexto; y de solo nombre o alfabeto, cuando su única base
              es un antropónimo, un étnico o la escritura.
            </Bloque>
            <Bloque t="Un proceso de revisión">
              La clasificación resulta de varias revisiones completas del corpus: los criterios redujeron de forma drástica el número de
              inscripciones dóricas y dieron lugar al grupo de las no jónico-áticas, y la revisión de las inscripciones sin clasificar elevó las
              que tienen características dialectales de 946 a más de 1.400.
            </Bloque>
          </Rejilla>
        </Sec>
      </>}

      {tab === "cifras" && <>
        <SubNav color={COLOR} value={sub} onChange={setSub} items={[
          ["grupos", "Grupos dialectales y certeza", `las ${miles(CLAS)} inscripciones con características dialectales`],
          ["alfabetos", "Alfabetos epicóricos", `${TOTAL_EPICORICAS} inscripciones con un alfabeto identificado`],
        ]} />
        {sub === "grupos" && <>
          <Sec title="Cifras y panorama dialectal del corpus">
            <Stats>
              <Stat label="Seguras" value={miles(CERTEZA_INT.seguras)} sub={`el ${pct(CERTEZA_INT.seguras, CLAS)} %`} accent={C.blue} />
              <Stat label="Dudosas" value={String(CERTEZA_INT.dudosas)} sub={`el ${pct(CERTEZA_INT.dudosas, CLAS)} %`} accent={ORO} />
              <Stat label="De solo nombre o alfabeto" value={String(CERTEZA_INT.nombre)} sub={`el ${pct(CERTEZA_INT.nombre, CLAS)} %`} accent={C.muted} />
              <Stat label="Dórico demostrado" value={String(DEMOSTRADO)} sub={`el ${pct(DEMOSTRADO, CLAS)} %; probable, 328-494`} accent={C.terra} />
            </Stats>
            <Card>
              <p style={PROSE}>
                Las no jónico-áticas reúnen casi seis de cada diez inscripciones clasificadas: no son un dialecto, sino el reflejo de las
                condiciones del corpus. El dórico demostrado, con rasgos que excluyen los dialectos eólicos o con un rasgo no jónico-ático apoyado
                por el alfabeto, suma {DEMOSTRADO} inscripciones, y el probable, que añade una parte de las no jónico-áticas, se sitúa entre 328 y
                494. El tesalio, con {nDialecto(["Tesalio"])}, es el tercer dialecto mejor representado, muy por encima del beocio
                ({nDialecto(["Beocio"])}), pese a que la tradición literaria vincula a Beocia con el santuario con más fuerza. La proporción de
                dudosas crece con la precisión de la adscripción: cuanto más precisa es, menor es la base textual que la sostiene.
              </p>
            </Card>
          </Sec>
          <Sec title="Grupos dialectales del corpus y grado de certeza"
            sub="En color pleno, las seguras; en oro, las dudosas, y en gris, las de solo nombre o alfabeto"
            note="Ocho inscripciones tienen una doble adscripción (siete entre el tesalio y el beocio y una entre el tesalio y el jónico) y se cuentan una sola vez, en el grupo de su adscripción principal.">
            <Bars horizontal data={GRUPOS_INT} keys={["segura", "dudosa", "nombre"]} indexBy="name" height={420} left={220}
              colors={{ segura: COLOR, dudosa: ORO, nombre: NOMBRE }} labels={{ segura: "segura", dudosa: "dudosa", nombre: "solo nombre o alfabeto" }} />
          </Sec>
          <Sec title="Los grupos dialectales en contexto" sub="Macrogrupos del corpus, con el dórico dividido en general y noroccidental, como en los capítulos">
            <Bars horizontal data={MACROGRUPOS} height={300} left={200} />
          </Sec>
        </>}
        {sub === "alfabetos" && (
          <Sec title="Alfabetos epicóricos identificados en el corpus"
            note="El alfabeto apoya un rasgo visible, pero por sí solo no basta para la adscripción; el resto del corpus emplea el alfabeto jónico reformado o uno que no puede identificarse.">
            <Bars horizontal data={ALFABETOS_INT.map((a) => ({ ...a, color: ALFABETO_COLORS[a.clave] }))} height={380} left={180} />
          </Sec>
        )}
      </>}
    </ChapterLayout>
  );
}
