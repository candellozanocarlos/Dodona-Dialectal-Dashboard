// Introducción de la tesis (caps. 1-3): el santuario, las laminillas, la metodología y las cifras del corpus.
import { useState } from "react";
import { ALFABETO_COLORS, C, DIALECT_COLORS, ORO, PROSE, SIGLO_COLORS } from "../theme.js";
import { MACROGRUPOS, miles, pct } from "../data/corpus.js";
import { ALFABETOS_INT, CERTEZA_INT, CHRONO_INT, CORPUS_INT, CRONOLOGIA_TXT, GRUPOS_INT, SECCIONES_LAM, TOTAL_EPICORICAS, TOTAL_INSCRIPCIONES } from "../data/introduccion.js";
import { renderDesc } from "../lib/text.jsx";
import { Bars } from "../components/charts.jsx";
import { Ref } from "../components/Inscriptions.jsx";
import { Card, ChapterLayout, EventTable, Sec, Secciones, Stat, Stats, SubNav } from "../components/ui.jsx";

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

const OBJETIVOS = [
  ["Criterios de adscripción", "Establecer unos criterios explícitos y homogéneos, adaptados a textos breves, fragmentarios y formulares, que distingan lo que una inscripción demuestra de lo que solo hace probable y midan el grado de certeza de cada adscripción."],
  ["Clasificación del corpus", "Clasificar con esos criterios todas las inscripciones que conservan algún rasgo dialectal visible y cuantificar la presencia de cada dialecto, también por siglos y, cuando el texto lo permite, por regiones."],
  ["Descripción de las variedades", "Describir los rasgos de cada variedad y contrastarlos con la documentación epigráfica de su región y con la bibliografía, con especial atención a las peor conocidas, como el griego del Epiro o el tesalio de Histiótide."],
  ["Alfabeto y autopsia", "Examinar la relación entre alfabeto y dialecto y revisar, mediante la autopsia de las laminillas, las lecturas que deciden la adscripción de un texto."],
  ["Mezcla y koiné", "Estudiar la mezcla dialectal y la difusión de la koiné, así como el peso de las fórmulas y del propio santuario, para valorar en qué medida el dialecto de una consulta permite reconocer el de quien la formuló."],
];

// Capítulo 2: síntesis de cada apartado, con las palabras y las citas del capítulo; el texto íntegro va en SECCIONES_LAM.
const EXCAVACIONES = [
  { event: "Identificación del yacimiento", date: "s. XIX", agent: "T. L. Donaldson, C. Wordsworth",
    desc: "El emplazamiento exacto de Dodona se desconocía hasta el s. XIX. Donaldson identificó las ruinas a partir de su gran teatro, y Wordsworth, que visitó el lugar en 1832, defendió poco después la misma propuesta." },
  { event: "Primeras excavaciones", date: "1875-1877", agent: "C. Carapanos",
    desc: "Unos sondeos en el verano de 1875, excavaciones clandestinas durante el invierno y la excavación sistemática de 1876 y 1877, con el Epiro todavía bajo dominio otomano. Sus hallazgos incluían 42 laminillas inscritas, dispersas, según Carapanos, entre las ruinas del templo de Zeus a unos tres metros de profundidad (Lhôte 2006: 1-2; Papadopoulou y Vasileiou 2021: 227; Frank 2026: 7)." },
  { event: "Campaña de Soteriadis", date: "1920", agent: "G. Soteriadis",
    desc: "Una breve campaña, anterior a la reanudación de las excavaciones en 1929 (Chapinal-Heras 2021: 8; Tselikas 2018: 249)." },
  { event: "Excavaciones de Evangelidis", date: "1929-1959", agent: "D. Evangelidis, con la Sociedad Arqueológica de Atenas",
    desc: "Campañas entre 1929 y 1932, en 1935 y entre 1952 y 1959. De ellas procede el grueso del material: más de 1.600 laminillas en las de 1929-1935 y otras 420 en las de 1952-1959, halladas sobre todo en el área de la Ἱερὰ οἰκία y en un depósito situado al oeste de ella, que contenía numerosas consultas arcaicas y de comienzos de la época clásica (Chapinal-Heras 2021: 8; Tselikas 2017: 35; 2018: 249; Papadopoulou y Vasileiou 2021: 227)." },
  { event: "Excavaciones posteriores", date: "hasta 2006", agent: "S. Dakaris; Ch. Tzouvara-Souli, A. Vlachopoulou y K. Gravani",
    desc: "Dakaris, que dirigió las excavaciones tras la muerte de Evangelidis, halló unas setenta laminillas en el área del <i>bouleuterion</i>; le sucedieron los demás, hasta que los trabajos se interrumpieron en 2006 (Chapinal-Heras 2021: 8; Tselikas 2017: 35; Papadopoulou y Vasileiou 2021: 227)." },
  { event: "Memoria del Mundo", date: "2023", agent: "UNESCO",
    desc: "El conjunto se incorporó al registro “Memoria del Mundo”. La mayor parte de las laminillas se conserva en el Museo Arqueológico de Ioánina (Papadopoulou y Vasileiou 2021: 226; Frank 2026: 6 n. 12)." },
];

const EDICIONES = [
  { event: <i>Dodone et ses ruines</i>, date: "1878", agent: "C. Carapanos, con la ayuda de Foucart",
    desc: "Dio a conocer un procedimiento oracular sin paralelos. Sus transcripciones han quedado anticuadas, pero las láminas de facsímiles del segundo volumen siguen siendo indispensables, porque buena parte de la colección se ha perdido desde entonces (Lhôte 2006: 2-3)." },
  { event: "Primeras reediciones", date: "1883-1899", agent: "Pomtow; O. Hoffmann",
    desc: "Pomtow (1883) agrupó por primera vez las consultas por temas, y Hoffmann incluyó los textos en la <i>Sammlung der griechischen Dialekt-Inschriften</i> (<i>SGDI</i> 1557-1598), donde, por exigencia de la obra, los ordenó por dialectos (Lhôte 2006: 3-4, 22)." },
  { event: "Publicaciones selectivas", date: "s. XX", agent: "Evangelidis, Dakaris, Vokotopoulou, Christidis",
    desc: "Las laminillas de Evangelidis y de Dakaris solo se conocieron por publicaciones selectivas y muy sumarias, a menudo sin facsímil, en los <i>Praktika</i> de la Sociedad Arqueológica de Atenas y en los <i>Epeirotika Chronika</i> (Lhôte 2006: 4-5; Tselikas 2018: 249). Méndez Dosuna (1985: 19) reclamó con urgencia una edición fiable del corpus." },
  { event: <i>I.Dodone Lhôte</i>, date: "2006", agent: "É. Lhôte",
    desc: "<i>Les lamelles oraculaires de Dodone</i> reúne todas las laminillas publicadas hasta entonces: 167 números, más tres <i>bis</i>, con unos doscientos textos. Es una edición crítica que revisa las lecturas, en muchos casos sobre los originales, ordena el corpus por temas y lo completa con estudios de conjunto (Lhôte 2006: 6-7, 22-25, 327-422; Méndez Dosuna 2008: 54-55)." },
  { event: <i>I.Dodone DVC</i>, date: "2013", agent: "S. Dakaris, I. Vokotopoulou y A.-Ph. Christidis; la completó S. Tselikas",
    desc: "Las laminillas de las campañas de Evangelidis de 1929-1932 y 1935, con números de inventario hasta el 1380: unas 1.250 laminillas que contienen 4.216 textos, y cada texto recibe un número y la letra de la cara en que se encuentra (Tselikas 2017: 35; 2018: 249-250). Multiplicó por veinte el material conocido (Parker 2016: 71-72; Frank 2026: 6-7). Carece de la introducción que debían haber escrito los editores y de fotografías (Tselikas 2017: 36; 2018: 249 n. 2), y sus fechas no se justifican y tienden a ser demasiado altas (Méndez Dosuna 2016: 119; Lhôte 2017b: 41; Méndez Dosuna 2024, §3)." },
  { event: "Dodona Online", date: "en curso", agent: "P. Bonnechere y un equipo internacional",
    desc: "Una reedición crítica de las laminillas, que se divide hoy en una selección comentada de textos, CIOD, y una reedición completa, <i>I.Dodone Online</i> (Méndez Dosuna 2016: 119 n. 4; Frank 2026: 7 n. 13)." },
];

const HALLAZGOS = [
  ["La colección de Carapanos", "No se conservó íntegra. Un lote importante acabó en Berlín, donde se guarda un centenar de laminillas en muy mal estado, y el resto pasó al Museo Arqueológico Nacional de Atenas, donde Lhôte (2006: 8-10) calculó, tras examinarlo en 1998, que se habían perdido de forma irremediable dos tercios de lo que reproducen los facsímiles de 1878, a causa de la corrosión que sufre el plomo una vez expuesto al aire."],
  ["El número de laminillas", "Según los cálculos de Vokotopoulou, el número total de laminillas halladas supera las 2.500, muchas de ellas pequeños fragmentos (Tselikas 2017: 35; 2018: 249), muy lejos de los cerca de 8.000 fragmentos que llegaron a mencionarse (Méndez Dosuna 2008: 52)."],
];

const CARACTERISTICAS = [
  ["Material, forma y medidas", "Hojas finas de plomo de forma más o menos rectangular, que miden entre unos 2 y 16,5 cm de longitud y entre 1 y 7 cm de anchura; unas pocas son de bronce (Papadopoulou y Vasileiou 2021: 227; Frank 2026: 7; Chapinal-Heras 2021: 34). El plomo era barato, fácil de grabar y reutilizable, y debió de importarse, porque en el Epiro no había minas de plata, de cuya explotación procedía (Papadopoulou y Vasileiou 2021: 229; Chapinal-Heras 2021: 35)."],
  ["Escritura y plegado", "Las letras no suelen superar los 1-1,5 mm de altura, y las consultas ocupan por lo general entre dos y cuatro líneas (Tselikas 2018: 250; Papadopoulou y Vasileiou 2021: 229, 232). Una vez escrita, la laminilla se plegaba o se enrollaba con el texto hacia dentro, y muchas se han encontrado todavía así (Lhôte 2006: 2; Tselikas 2018: 250)."],
  ["Reutilización y conservación", "La reutilización es la norma: muchas laminillas son palimpsestos, y no es raro que una misma pieza conserve tres o cuatro inscripciones en cada cara, de manos y épocas distintas (Tselikas 2018: 250; Méndez Dosuna 2024, §2). Según el recuento de Bowden (2025: 63-64), lo más frecuente es que conserve dos, la media es de 3,3 y una de ellas llega a trece. En torno al 10 % de las laminillas se conserva completo (Tselikas 2017: 36), y apenas 1.323 textos lo están lo bastante para permitir un análisis detallado de su contenido (Bonnechere 2017: 74)."],
  ["Los textos de una laminilla", "El principal es la consulta, a la que pueden acompañar, en la cara exterior de la laminilla plegada, el nombre del consultante, un título que resume el asunto, como el Πὲρ προβατείας de I.Dodone Lhôte 80 (primera mitad del s. IV a.C.), o una letra aislada que servía, según la interpretación de Robert (1883), de número de orden (Lhôte 2006: 350-355; Tselikas 2018: 250). Algunas consultas ocupan las dos caras, como la de Esquitas en I.Dodone DVC 194A y 195B (ambas del s. IV a.C.)."],
  ["Las respuestas", "Son muy escasas. Muchos textos que se habían tomado por respuestas son en realidad consultas o títulos, y Martín González (2021: 223) solo acepta con relativa seguridad la de I.Dodone DVC 108B (segundo cuarto del s. IV a.C.), Ἐπὶ γῆι σχέθε̣ : τελέο̄ς, y como probables otras dos; las listas de dioses y ofrendas pueden interpretarse tanto como respuestas como consultas."],
  ["El formulario", "Las consultas suelen abrirse con una invocación del tipo θεὸς τύχα ἀγαθά, a la que siguen el nombre del consultante, un verbo de consulta, como ἐπερωτάω, ἐπικοινάομαι, ἐρωτάω o ἱστορέω, y el nombre de los dioses: ὁ δεῖνα ἐπερωτῆι τὸν Δία τὸν Νάϊον καὶ τὰν Διώναν (Lhôte 2006: 336-349; Tselikas 2018: 250-251; Frank 2026: 10 n. 25)."],
  ["Las preguntas", "La pregunta total, introducida por ἦ, πότερον o αἰ/εἰ, plantea si una acción es preferible a otra, y la parcial, con τίνι, busca la divinidad a la que hay que dirigirse (Lhôte 2006: 336-341; Méndez Dosuna 2008: 70). Abundan también las consultas reducidas a περί y un genitivo, como el frecuentísimo περὶ γενεᾶς (Parker 2016: 73; Frank 2026: 10-11). Pueden redactarse en primera o en tercera persona, y no es raro que ambas alternen en un mismo texto (Méndez Dosuna 2008: 63; 2024, §3)."],
];

const AUTORIA = [
  ["El silencio de las fuentes", "Ninguna fuente antigua describe cómo se redactaban las consultas, y las literarias no mencionan siquiera el uso de laminillas de plomo (Martín González 2021: 205). Quién las grababa ha de deducirse de las propias laminillas, y la respuesta tiene consecuencias directas para el estudio dialectal: si el consultante escribía su pregunta, la lengua del texto es la suya; si la dictaba, el texto puede reflejar también el habla de quien la escribió."],
  ["Los consultantes", "La mayoría de los estudiosos considera que, por regla general, los consultantes escribían sus propias preguntas. El argumento principal es la variedad de alfabetos y dialectos, que no se explicaría con facilidad si las hubiera redactado el personal del santuario (Méndez Dosuna 2018b: 36; Crespo y Giannakis 2019: 57; Martín González 2021: 205-206; Chapinal-Heras 2021: 117), y a él se suman la escritura, informal y a menudo cursiva, y la frecuencia de las faltas de ortografía y de las irregularidades sintácticas (Martín González 2021: 206)."],
  ["Escribas y personal del santuario", "Otros autores han subrayado la intervención de escribas o funcionarios: según Méndez Dosuna (2018a: 276), los iletrados dictaban a un letrado local, cuyas formas dóricas aparecen sobre todo en las primeras palabras de los textos, y Crespo y Giannakis (2019: 47-48) cuentan entre las dificultades para identificar el dialecto de una consulta el dictado a escribas locales que pudieron “editar” el del consultante. Esas formas no exigirían, sin embargo, un escriba local, porque pudieron copiarse de un modelo (Méndez Dosuna 2008: 69; 2018b: 36) o aprenderse de oídas (Tselikas 2018: 255)."],
  ["Los textos anexos", "La intervención del personal sí está documentada en ellos: Lhôte (2006: 114-116, 332, 354-355, 366-367) le atribuye varios títulos, nombres y respuestas grabados en el reverso de las laminillas. Johnston (2021: 111, 113-114) advierte, con todo, que esas atribuciones son verosímiles, pero no seguras, y que el único tipo de texto que con toda probabilidad grababa el personal, la letra que indicaba el orden de la consulta, no se documenta antes del s. IV a.C."],
  ["Alfabetización y consultantes", "La variedad dialectal de las laminillas y la presencia de consultantes de condición modesta sugieren que la proporción de quienes sabían escribir un texto breve era mayor de lo que se cree (Chapinal-Heras 2021: 170). Las laminillas dan voz, además, a grupos que apenas aparecen en otras fuentes: junto a hombres libres de muy distinta condición consultan mujeres, solas o con sus maridos, esclavos que preguntan por su libertad y extranjeros cuya lengua materna no era el griego (Katsadima 2017; Chapinal-Heras 2021: 170-171; Frank 2026: 1-2)."],
];

const INVESTIGACION = [
  ["La elección del plomo", "Se ha relacionado a menudo con sus asociaciones mágicas, por analogía con las <i>defixiones</i>, pero los estudios recientes la atribuyen a razones prácticas: era barato y abundante y, a diferencia de los óstraca, podía plegarse para ocultar y transportar el texto (Bowden 2025: 60-63; Angliker 2025: 86-87, 92)."],
  ["Después de la consulta", "Las laminillas aparecieron dispersas por el recinto sagrado, sin un depósito ritual específico (Chapinal-Heras 2021: 34, 117-118; Martín González 2021: 206), y no hay acuerdo sobre lo que se hacía con ellas. Lhôte (2006: XI, XV, 359-362) propuso que los consultantes las enterraban al pie del roble sagrado, lo que Méndez Dosuna (2008: 56, 63) considera poco verosímil; Bonnechere (2025: 127-129) rechaza que el santuario las archivara, y Bowden (2025: 66-71) propone que se dejaban a la vista, como testimonio de la visita, y que el personal las retiraba de vez en cuando a un depósito."],
  ["Su papel en la consulta", "Sigue abierto: las laminillas que solo conservan un nombre o un título demuestran, según Bonnechere (2025: 133-135), que al menos una parte de las preguntas se formulaba de viva voz, y la laminilla sería entonces una costumbre local, quizá una garantía para no olvidar la pregunta ante el profeta. Las letras aisladas que se interpretan desde Robert (1883) como números de orden faltan en la inmensa mayoría de los textos (Bonnechere 2025: 135-136)."],
  ["Una fuente histórica", "Donde más ha avanzado la investigación desde 2013 es en la lectura de las consultas como fuente histórica. Documentan sobre todo preocupaciones privadas y, en una proporción mínima, cuestiones políticas (Bonnechere 2017; 2025: 128), y han permitido estudiar la economía (Hinsch 2022), la infancia y la familia (Laes 2020), las mujeres (Katsadima 2017; Frank 2026), la agricultura y la relación con el medio natural (Schliephake 2025) o los motivos y la experiencia de quienes peregrinaban al santuario (Chapinal-Heras 2025)."],
];

const Fichas = ({ items }) => <Rejilla>{items.map(([t, d]) => <Bloque key={t} t={t}>{renderDesc(d)}</Bloque>)}</Rejilla>;

export default function Introduccion({ switcher }) {
  const [tab, setTab] = useState("santuario");
  const [sub, setSub] = useState("grupos");
  const nSiglo = (k) => CHRONO_INT.find((d) => d.siglo === k).n;
  const s4 = nSiglo("IV"), s5 = nSiglo("V");

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
        <Sec title="Objetivos" sub="Identificar y caracterizar las variedades dialectales de las laminillas y valorar lo que revela su distribución">
          <Rejilla>
            {OBJETIVOS.map(([t, d]) => <Bloque key={t} t={t}>{d}</Bloque>)}
          </Rejilla>
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
          <Stats>
            <Stat label="Laminillas halladas" value="Más de 2.500" sub="muchas, pequeños fragmentos (Tselikas 2017: 35; 2018: 249)" accent={COLOR} />
            <Stat label="Textos editados en 2013" value="4.216" sub="en unas 1.250 laminillas (Tselikas 2017: 35; 2018: 249-250)" accent={C.terra} />
            <Stat label="Inscripciones por laminilla" value="3,3" sub="de media; lo más frecuente son dos y una llega a trece (Bowden 2025: 63-64)" accent={C.gold} />
            <Stat label="Laminillas completas" value="10 %" sub="en torno a esa proporción (Tselikas 2017: 36)" accent={C.green} />
          </Stats>
        </Sec>
        <Sec title="Las excavaciones" sub="De Carapanos a la interrupción de los trabajos en 2006 (§2.1)">
          <EventTable rows={EXCAVACIONES} color={COLOR} />
          <div style={{ marginTop: 12 }}><Fichas items={HALLAZGOS} /></div>
        </Sec>
        <Sec title="Las ediciones" sub="De los facsímiles de 1878 a la reedición en curso (§2.2)"
          note="Quedan inéditas, además de las laminillas de Berlín, las de la segunda serie de campañas de Evangelidis y las de las excavaciones posteriores, cuyo número se ha exagerado con frecuencia: según los datos de la Eforía de Antigüedades de Ioánina que recoge Frank (2026: 6 n. 11), se cuentan por decenas y no por millares. Bonnechere (2025: 124 n. 5), que cita también a la Eforía, habla, en cambio, de unas 4.000.">
          <EventTable rows={EDICIONES} color={COLOR} />
        </Sec>
        <Sec title="Características de las laminillas" sub="El soporte, los textos y el formulario de las consultas (§2.3.1 y §2.3.2)">
          <Fichas items={CARACTERISTICAS} />
        </Sec>
        <Sec title="La autoría y los consultantes" sub="Quién grababa las consultas, según la bibliografía (§2.3.3)"
          note="La bibliografía reciente tiende a admitir que las dos prácticas coexistieron, aunque discrepa sobre el peso de cada una (Méndez Dosuna 2018a: 276; 2024, §2-3; Bonnechere 2025: 130-131; Flower 2025: 216-217).">
          <Fichas items={AUTORIA} />
        </Sec>
        <Sec title="Las laminillas en la investigación" sub="Su uso en el santuario y su valor como fuente (§2.4)">
          <Fichas items={INVESTIGACION} />
        </Sec>
        <Sec title="El capítulo, apartado por apartado" sub="El texto de §2.1 a §2.4: pulsa para desplegar cada uno; el de la cronología (§2.3.4) está en “El corpus en cifras”">
          <Secciones items={SECCIONES_LAM.map((x) => ({ ...x, name: renderDesc(x.name) }))} color={COLOR} />
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
              que tienen características dialectales de 946 a 1.438.
            </Bloque>
          </Rejilla>
        </Sec>
      </>}

      {tab === "cifras" && <>
        <SubNav color={COLOR} value={sub} onChange={setSub} items={[
          ["grupos", "Grupos dialectales y certeza", `las ${miles(CLAS)} inscripciones con características dialectales`],
          ["cronologia", "Cronología", `${miles(s4)} inscripciones del s. IV a.C. y ${miles(s5)} del s. V a.C.`],
          ["alfabetos", "Alfabetos epicóricos", `${TOTAL_EPICORICAS} inscripciones con un alfabeto identificado`],
        ]} />
        {sub === "grupos" && <>
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
        {sub === "cronologia" && <>
          <Sec title="Distribución cronológica de las inscripciones del corpus"
            sub={`Según las fechas de las ediciones: el s. IV a.C. reúne ${miles(s4)} inscripciones y el s. V a.C., ${miles(s5)}`}>
            <Stats>
              <Stat noCase label="s. IV a.C." value={miles(s4)} sub={`el ${pct(s4, TOTAL_INSCRIPCIONES)} %`} accent={COLOR} />
              <Stat noCase label="s. V a.C." value={miles(s5)} sub={`el ${pct(s5, TOTAL_INSCRIPCIONES)} %`} accent={C.terra} />
              <Stat noCase label="Transición entre ambos" value={miles(nSiglo("V-IV"))} sub={`el ${pct(nSiglo("V-IV"), TOTAL_INSCRIPCIONES)} %`} accent={C.gold} />
              <Stat noCase label="Sin datación" value={miles(nSiglo("Sin datar"))} sub={`el ${pct(nSiglo("Sin datar"), TOTAL_INSCRIPCIONES)} %`} accent={C.muted} />
            </Stats>
            <Bars data={CHRONO_INT.map((d) => ({ ...d, color: SIGLO_COLORS[d.siglo] || SIGLO_COLORS["Sin datar"] }))} indexBy="period" keys={["n"]}
              height={300} rotate={-30} format={miles} />
          </Sec>
          <Sec title="Las fechas del corpus" sub="De dónde salen y hasta qué punto son fiables (§2.3.4)">
            <Card style={{ display: "grid", gap: 10 }}>
              {CRONOLOGIA_TXT.map((p) => <p key={p.slice(0, 40)} style={PROSE}>{renderDesc(p)}</p>)}
            </Card>
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
