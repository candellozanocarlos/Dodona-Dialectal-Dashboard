// Introducción de la tesis y Parte I (nueva estructura, 19-20 nov. 2026): la Introducción, el santuario y el oráculo
// (Parte I, caps. 1-2), las laminillas y sus ediciones (caps. 3-4), la metodología (cap. 6) y las cifras del corpus.
// La autoría de las consultas y la discusión de las fechas pertenecen a los caps. 9.3 y 9.4, y no se tratan aquí.
import { useState } from "react";
import { ALFABETO_COLORS, C, DIALECT_COLORS, ORO, PROSE, SIGLO_COLORS, fade } from "../theme.js";
import { MACROGRUPOS, miles, pct } from "../data/corpus.js";
import { ALFABETOS_INT, ARCO_TXT, CERTEZA_INT, CHRONO_INT, CORPUS_INT, GRUPOS_INT, INTRO_TXT, PARTE1_INT, TOTAL_EPICORICAS, TOTAL_INSCRIPCIONES } from "../data/introduccion.js";
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
  { id: "introduccion", l: "Introducción", i: "📜" },
  { id: "santuario", l: "El santuario y el oráculo", i: "Ζ" },
  { id: "laminillas", l: "Las laminillas y sus ediciones", i: "Λ" },
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
const Fichas = ({ items }) => <Rejilla>{items.map(([t, d]) => <Bloque key={t} t={renderDesc(t)}>{renderDesc(d)}</Bloque>)}</Rejilla>;

// Apartados de un capítulo de la Parte I con su texto íntegro (INTRODUCCIÓN Y PARTE I vigente).
const cap = (n) => PARTE1_INT.find((c) => c.cap === n);
const Apartados = ({ caps }) => (
  <Secciones color={COLOR} items={caps.flatMap((n) => cap(n).secs).map((x) => ({ ...x, name: renderDesc(x.name) }))} />
);

// ── La estructura de la tesis (Introducción, §8 del texto; CONTENIDO_v24) ──
// Las secciones del cap. 7 enlazan con la parte del atlas que las recoge. Capítulos numerados de forma continua (1-4, 5-7 y 8-10).
const ESTRUCTURA = [
  { parte: "Parte I", t: "Las laminillas oraculares de Dodona", caps: [
    ["1", "El santuario de Dodona"], ["2", "El oráculo de Dodona"], ["3", "Características de las laminillas"], ["4", "Ediciones y córpora"]] },
  { parte: "Parte II", t: "Estudio dialectal", caps: [
    ["1", "Estado de la cuestión"], ["2", "Metodología y criterios de adscripción"], ["3", "Grupos dialectales"]],
    grupos: [
      ["3.1", "Los dialectos dóricos", DIALECT_COLORS.dorico, "dorico"],
      ["3.2", "Los dialectos eólicos", DIALECT_COLORS.tesalio, "eolicos"],
      ["3.3", "El jónico-ático y la koiné", DIALECT_COLORS.jonicoAtico, "jonico-atico"],
      ["3.4", "Otros dialectos", "#56677a", "minoritarios"],
      ["3.5", "La mezcla dialectal", DIALECT_COLORS.mezcla, "mezcla"],
      ["3.6", "Las inscripciones no jónico-áticas", DIALECT_COLORS.noJonAt, "minoritarios"],
    ] },
  { parte: "Parte III", t: "Síntesis y conclusiones", caps: [
    ["1", "Panorama y aportaciones"], ["2", "Implicaciones para la historia del santuario"], ["3", "Líneas abiertas"]] },
];

const Estructura = () => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: 12 }}>
    {ESTRUCTURA.map((p) => (
      <Card key={p.parte} accent={COLOR} style={{ padding: "14px 18px" }}>
        <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: COLOR, fontWeight: 700 }}>{p.parte}</div>
        <div style={{ fontFamily: "var(--fh)", fontSize: 16, fontWeight: 700, color: C.heading, margin: "2px 0 10px" }}>{p.t}</div>
        <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 5 }}>
          {p.caps.map(([n, t]) => (
            <li key={n} style={{ fontSize: 12.5, color: C.text, display: "flex", gap: 8 }}>
              <span style={{ color: C.dim, minWidth: 14 }}>{n}.</span>{t}
            </li>
          ))}
        </ol>
        {p.grupos && (
          <div style={{ display: "grid", gap: 4, marginTop: 8, paddingLeft: 22 }}>
            {p.grupos.map(([n, t, col, id]) => (
              <a key={n} href={`#${id}`} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: C.muted, textDecoration: "none" }}>
                <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: "50%", background: col, flexShrink: 0 }} />
                <span style={{ color: C.dim }}>{n}</span><span style={{ borderBottom: `1px dotted ${fade(col, 0.6)}` }}>{t}</span>
              </a>
            ))}
          </div>
        )}
      </Card>
    ))}
  </div>
);

// §3.2.4 de la introducción (cap. 6.5): el rasgo que justifica la adscripción en cada grupo.
const CRITERIOS = [
  ["El dórico", "dorico", <>Solo se cuenta como dórica la inscripción con un rasgo que excluya los dialectos eólicos, porque la ᾱ, la /t/ ante /i/, κα, αἰ o la apócope son compartidos por el beocio o el tesalio: el futuro dórico, -μες, -ντι o ἕρπω, y además la familia de πάομαι, el artículo τοί, los adverbios en -ει y en -κα, ὀπτίλλος y ζώω. Las consultas en alfabeto corintio con un rasgo no jónico-ático visible se cuentan en el dórico general.</>],
  ["El tesalio y el beocio", "tesalio", <>Se reconocen por una constelación de rasgos propios: en el tesalio, ΕΙ y ΟΥ por las vocales medias largas, -νν-, κε y κίς, los infinitivos temáticos en -μεν y un léxico característico; en el beocio, /ai̯/ &gt; /ɛː/, /e/ &gt; /i/ ante vocal y δ(δ) de *dj. Algunos rasgos sitúan la consulta en una región (κε y κίς, la Pelasgiótide; κα o μά, la Histiótide).</>],
  ["El jónico-ático y la koiné", "jonicoAtico", <>Forman un solo grupo, porque en la mayoría de las consultas no pueden distinguirse. Basta un rasgo jónico-ático visible, como η por ᾱ, εἰ y ἄν frente a αἰ y κα, ἔσται, -σι o -ναι; la koiné solo se reconoce con un rasgo propio o una fecha desde finales del s. IV a.C.</>],
  ["La mezcla dialectal", "mezcla", <>Rasgos visibles de dos grupos que no pueden convivir en un único dialecto, como κα junto a εἰ; la categoría no presupone una explicación, y son dudosas las mezclas en que la fórmula dórica solo convive con ἐπερωτᾶι, como <Ref src="DVC" id="2423B" /> (mediados del s. IV a.C.).</>],
  ["Las inscripciones no jónico-áticas", "noJonAt", <>Un grupo definido por un criterio negativo: algún rasgo ajeno al jónico-ático, pero ninguno que permita atribuirlas a un dialecto concreto. No contradicen el predominio del dórico, sino que separan lo que puede demostrarse de lo que solo resulta probable.</>],
  ["Otros dialectos", "otros", <>El macedonio, el eleo, el acayo o el rodio, con un rasgo propio, un antropónimo o un alfabeto bien identificado de la región junto a un rasgo no jónico-ático visible; se cuenta también la única inscripción que no parece escrita en griego, <Ref src="DVC" id="27A" /> (principios del s. V a.C.).</>],
];

// Parte I, caps. 1 y 2: síntesis de cada apartado, con las palabras y las citas del texto; el texto íntegro va en PARTE1_INT.
const SANTUARIO = [
  ["1.1. El Epiro y el valle de Dodona", "Una región montañosa que cierran el Pindo al este, frente a Macedonia y Tesalia, los montes Acroceraunios al norte, el mar Jónico al oeste y el golfo de Ambracia al sur. El santuario ocupa el valle de Tcharacovitsa, al pie del monte Tómaro, en el principal cruce de caminos del interior del Epiro, lo que explica que el oráculo atrajera tanto a los habitantes del interior como a los de las colonias de la costa (Piccinini 2017: 31; Frank 2026: 20)."],
  ["1.2. Los pueblos del Epiro y las colonias de la costa", "Salvo en las colonias, la población no se organizó en <i>poleis</i> hasta la transición a la época helenística, sino en <i>ethne</i>: la tradición distingue a tesprotos, caones y molosos, junto a otros grupos como los casopeos, los atamanes o los paraveos. Desde los textos más antiguos, las laminillas entre ellos, el Epiro escribe en griego, en una variedad del dórico del Noroeste. En la costa, Corinto fundó Corcira y, con ella o en solitario, Apolonia, Epidamno, Anactorio, Léucade y Ambracia."],
  ["1.3. Del santuario tesproto al centro del Estado moloso", "La actividad religiosa es segura desde finales del s. VIII a.C., y durante toda la época arcaica Dodona fue un santuario al aire libre, con el roble sagrado rodeado de calderos sobre trípodes; de mediados del s. VI a.C. datan las laminillas más antiguas (Lhôte 2006: 11-15). Perteneció en origen a los tesprotos y pasó a los molosos a finales del s. V o a comienzos del s. IV a.C., cuando empezó su monumentalización."],
  ["1.4. Dodona en época helenística y romana", "El reinado de Pirro (297-272 a.C.) marcó su apogeo, con el <i>bouleuterion</i>, el pritaneo, el gran teatro y las Naia. Los etolios lo saquearon en el 219 a.C. (Plb. 4.67.3), y con la destrucción del 167 a.C. terminó, según Lhôte (2006: 11-15), la costumbre de escribir las consultas en plomo; el culto cesó con la prohibición de Teodosio en el 391 d.C."],
];
const ORACULO = [
  ["2.1. La antigüedad y el prestigio del oráculo", "Homero se refiere ya al oráculo en sus dos poemas, y en momentos clave del relato (Il. 16.233-235; Od. 14.327-330), y Heródoto (2.52.2) dice que se lo tenía por el más antiguo de los oráculos griegos. El mismo Heródoto (2.54-57) recoge dos relatos sobre su fundación, y Éforo (citado por Str. 7.7.10) lo consideraba una fundación de los pelasgos."],
  ["2.2. Los dioses y el personal del santuario", "El dios era Zeus Naio, al que acompañaba Dione como σύνναος y, en algunas consultas, Temis. Los sacerdotes eran los <i>selloi</i>, y junto a ellos actuaban las sacerdotisas llamadas πελειάδες, “palomas”. I.Dodone DVC 984A (principios del s. IV a.C.) registra una ofrenda μάντει καὶ ἱερομνάμονι, referencia a miembros concretos del personal del oráculo (Gartziou-Tatti 2017: 147-149)."],
  ["2.3. Los procedimientos oraculares", "Las fuentes literarias hablan del roble, las palomas, los calderos de bronce, el exvoto de los corcirenses o el sorteo, el único que una parte de la bibliografía reconoce en las laminillas, como I.Dodone DVC 1170A (mediados del s. IV a.C.), que termina con τοῦτον ἀνελέτω (Parker 2015: 111-112). La mayoría de los estudios recientes admite que en Dodona coexistieron varios métodos."],
  ["2.4. Consultas públicas y privadas", "Las consultas públicas, formuladas por ciudades, <i>koina</i> o <i>ethne</i>, son escasas: solo 32 de los 4.216 textos de la edición de 2013 se consideran, con reservas, públicos. La inmensa mayoría son consultas privadas sobre el matrimonio y la descendencia, los negocios y el trabajo, los viajes, la salud, la esclavitud o la religión privada."],
];

// Parte I, cap. 3.
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
const HALLAZGOS = [
  ["La colección de Carapanos", "No se conservó íntegra. Un lote importante acabó en Berlín, donde se guarda un centenar de laminillas en muy mal estado, y el resto pasó al Museo Arqueológico Nacional de Atenas, donde Lhôte (2006: 8-10) calculó, tras examinarlo en 1998, que se habían perdido de forma irremediable dos tercios de lo que reproducen los facsímiles de 1878, a causa de la corrosión que sufre el plomo una vez expuesto al aire."],
  ["El número de laminillas", "Según los cálculos de Vokotopoulou (1987: 82-85), el número total de laminillas halladas supera las 2.500, muchas de ellas pequeños fragmentos, muy lejos de los cerca de 8.000 fragmentos que llegaron a mencionarse."],
];
const CONTEXTO = [
  ["Un contexto perdido", "Carapanos no registró el lugar ni las condiciones en que apareció cada pieza, y la edición de 2013 solo indica el año de la campaña. Para suplir esa carencia, Stavroula Konstantopoulou estudia en su tesis doctoral en curso los cuadernos de excavación de Evangelidis, cuyas notas siguen inéditas."],
  ["La laminilla de Ζορκίς", "Es la única con información precisa sobre su contexto: la consulta de una mujer sobre la vista de su nieto, hallada en 2015 en los cimientos del propileo de la Ἱερὰ οἰκία, en el estrato de construcción del segundo recinto, del s. IV a.C., que constituye su <i>terminus ante quem</i>."],
  ["Dos consecuencias", "La cronología del corpus depende casi por entero de la forma de las letras, y gana valor el estudio material de las laminillas: el análisis isotópico de cuatro ejemplares de Berlín mostró que el plomo de tres procedía de las minas del Laurion, y solo el examen directo del plomo permite distinguir las manos de una misma laminilla y el orden en que se grabaron sus textos."],
];
const CARACTERISTICAS = [
  ["Material, forma y medidas", "Hojas finas de plomo de forma más o menos rectangular, que miden entre unos 2 y 16,5 cm de longitud y entre 1 y 7 cm de anchura (Papadopoulou y Vasileiou 2021: 227; Frank 2026: 7); unas pocas son de bronce (Chapinal-Heras 2021: 34). Su elección se ha relacionado con sus asociaciones mágicas, pero los estudios recientes la atribuyen, como ya Parke (1967: 101), a razones prácticas: era barato, fácil de grabar y reutilizable y podía plegarse para ocultar y transportar el texto (Bowden 2026: 60-63; Angliker 2026: 86-87, 92)."],
  ["Escritura y plegado", "Las letras no suelen superar los 1-1,5 mm de altura, y las consultas ocupan por lo general entre dos y cuatro líneas (Tselikas 2018: 250; Papadopoulou y Vasileiou 2021: 229, 232). Una vez escrita, la laminilla se plegaba o se enrollaba con el texto hacia dentro, y muchas se han encontrado todavía así (Lhôte 2006: 2; Tselikas 2018: 250)."],
  ["Reutilización y conservación", "La reutilización es la norma: muchas laminillas son palimpsestos, y no es raro que una misma pieza conserve tres o cuatro inscripciones en cada cara, de manos y épocas distintas (Tselikas 2018: 250; Méndez Dosuna 2024, §2). Según el recuento de Bowden (2026: 63-64), lo más frecuente es que conserve dos, la media es de 3,3 y una de ellas llega a trece."],
  ["Los textos de una laminilla", "El principal es la consulta, a la que pueden acompañar, en la cara exterior de la laminilla plegada, el nombre del consultante, un título que resume el asunto, como Πὲρ προβατείας en I.Dodone Lhôte 80, o una letra aislada que servía, según Robert (1883), de número de orden. Algunas consultas ocupan las dos caras, como la de Esquitas en I.Dodone DVC 194A y 195B (ambas del s. IV a.C.)."],
  ["Las respuestas", "Son muy escasas. Muchos textos que se habían tomado por respuestas son en realidad consultas o títulos, y Martín González (2021: 223) solo acepta con relativa seguridad la de I.Dodone DVC 108B (segundo cuarto del s. IV a.C.), Ἐπὶ γῆι σχέθε̣ : τελέο̅ς, y como probables otras dos."],
  ["El formulario", "Las consultas suelen abrirse con una invocación del tipo θεὸς τύχα ἀγαθά, a la que siguen el nombre del consultante, un verbo de consulta y el nombre de los dioses. La pregunta total, con ἦ, πότερον o αἰ/εἰ, plantea si una acción es preferible a otra, y la parcial, con τίνι, busca la divinidad a la que hay que dirigirse (Lhôte 2006: 336-341; Méndez Dosuna 2008: 70)."],
];
const DESTINO = [
  ["Después de la consulta", "Las laminillas aparecieron dispersas por el recinto sagrado, sin un depósito ritual específico, y no hay acuerdo sobre lo que se hacía con ellas. Lhôte (2006: XI, XV, 359-362) propuso que se enterraban al pie del roble sagrado, lo que Méndez Dosuna (2008: 56) considera poco verosímil; Bonnechere (2026: 127-129) rechaza que el santuario las archivara, y Bowden (2026: 66-71) propone que se dejaban a la vista, como testimonio de la visita."],
  ["Su papel en la consulta", "Sigue abierto: las laminillas que solo conservan un nombre o un título demuestran, según Bonnechere (2026: 133-135), que al menos una parte de las preguntas se formulaba de viva voz, y la laminilla sería entonces una costumbre local, quizá una garantía para no olvidar la pregunta ante el profeta."],
];

// Parte I, cap. 4.
const EDICIONES = [
  { event: <i>Dodone et ses ruines</i>, date: "1878", agent: "C. Carapanos, con la ayuda de Foucart",
    desc: "Dio a conocer un procedimiento oracular sin paralelos. Sus transcripciones han quedado anticuadas, pero las láminas de facsímiles del segundo volumen siguen siendo indispensables, porque buena parte de la colección se ha perdido desde entonces (Lhôte 2006: 2-3)." },
  { event: "Reseñas y primeras reediciones", date: "1883-1899", agent: "Pomtow; Robert; O. Hoffmann",
    desc: "Pomtow (1883) agrupó por primera vez las consultas por temas, Robert (1883) interpretó las letras aisladas como números de orden, y Hoffmann incluyó los textos en la <i>Sammlung der griechischen Dialekt-Inschriften</i> (<i>SGDI</i> 1557-1598), donde, por exigencia de la obra, los ordenó por dialectos (Lhôte 2006: 3-4, 22)." },
  { event: "Publicaciones selectivas", date: "s. XX", agent: "Evangelidis, Dakaris, Vokotopoulou, Christidis",
    desc: "Las laminillas de Evangelidis y de Dakaris solo se conocieron por publicaciones selectivas y muy sumarias, a menudo sin facsímil (Lhôte 2006: 4-5; Tselikas 2018: 249); otras se recogieron en los estudios de Parke (1967) y Eidinow (2007). Méndez Dosuna (1985: 19) reclamó con urgencia una edición fiable del corpus." },
  { event: <i>I.Dodone Lhôte</i>, date: "2006", agent: "É. Lhôte",
    desc: "<i>Les lamelles oraculaires de Dodone</i> reúne todas las laminillas publicadas hasta entonces: 167 números, más tres <i>bis</i>, con unos doscientos textos. Es una edición crítica que revisa las lecturas, en muchos casos sobre los originales, ordena el corpus por temas y lo completa con estudios de conjunto (Lhôte 2006: 6-7, 22-25, 327-422; Méndez Dosuna 2008: 54-55)." },
  { event: <i>I.Dodone DVC</i>, date: "2013", agent: "S. Dakaris, I. Vokotopoulou y A.-Ph. Christidis; la completó S. Tselikas",
    desc: "Sobre todo, las laminillas de las campañas de Evangelidis de 1929-1932 y 1935: unas 1.250 laminillas que contienen 4.216 textos, y cada texto recibe un número y la letra de la cara en que se encuentra (Tselikas 2017: 35; 2018: 249-250). Multiplicó por veinte el material conocido (Parker 2016: 71-72; Frank 2026: 6-7). Carece de la introducción que debían haber escrito los editores y de fotografías (Tselikas 2017: 36; 2018: 249 n. 2), y sus fechas no se justifican y tienden a ser demasiado altas (Méndez Dosuna 2016: 119; Lhôte 2017b: 41; Méndez Dosuna 2024, §3)." },
  { event: "Dodona Online", date: "en curso", agent: "P. Bonnechere y un equipo internacional",
    desc: "Una reedición crítica de las laminillas, que se divide hoy en una selección comentada de textos, <i>CIOD</i>, y una reedición completa, I.Dodone Online (Méndez Dosuna 2016: 119 n. 4; Frank 2026: 7 n. 13)." },
];
const INVESTIGACION = [
  ["Dos etapas", "Tras la primera visión de conjunto de Parke (1967) siguió un largo silencio, que rompieron el corpus de Lhôte (2006), el libro de Eidinow (2007) y la monografía de Dieterle (2007). La publicación de I.Dodone DVC multiplicó después los estudios, de la historia del santuario de Piccinini (2017) a la monografía de Chapinal-Heras (2021), hoy la obra de referencia, y los volúmenes de Bowden y Eidinow (2026) y de Frank (2026)."],
  ["Una fuente histórica", "Donde más ha avanzado la investigación desde 2013 es en la lectura de las consultas como fuente histórica, que ha permitido estudiar la economía (Hinsch 2022), la infancia y la familia (Laes 2020), las mujeres (Katsadima 2017; Frank 2026), la agricultura y la relación con el medio natural (Schliephake 2026) o los motivos y la experiencia de quienes peregrinaban al santuario (Chapinal-Heras 2026)."],
];

export default function Introduccion({ switcher }) {
  const [tab, setTab] = useState("introduccion");
  const [sub, setSub] = useState("grupos");
  const nSiglo = (k) => CHRONO_INT.find((d) => d.siglo === k).n;
  const s4 = nSiglo("IV"), s5 = nSiglo("V");

  return (
    <ChapterLayout switcher={switcher} color={COLOR} accent={[C.terra, COLOR, C.gold, C.green]}
      title={<>Las variedades dialectales de las <em style={{ fontWeight: 700, color: COLOR }}>laminillas oraculares</em> de Dodona</>}
      subtitle="Introducción y Parte I · El santuario, el oráculo, las laminillas y sus ediciones, la metodología y el corpus en cifras"
      stats={<>
        <Stat label="Inscripciones" value={miles(TOTAL_INSCRIPCIONES)} sub="I.Dodone DVC e I.Dodone Lhôte" accent={COLOR} />
        <Stat label="Con rasgos dialectales" value={miles(CLAS)} sub={`el ${pct(CLAS, TOTAL_INSCRIPCIONES)} % del corpus`} accent={C.terra} />
        <Stat label="Adscripción segura" value={`${pct(CERTEZA_INT.seguras, CLAS)} %`} sub={`${miles(CERTEZA_INT.seguras)} de ${miles(CLAS)}`} accent={C.green} />
        <Stat label="Cronología" value="ss. VI–II a.C." sub={`el ${pct(s4, TOTAL_INSCRIPCIONES)} % del s. IV a.C.`} accent={C.gold} />
      </>}
      tabs={TABS} tab={tab} onTab={setTab}>

      {tab === "introduccion" && <>
        <Sec title="Introducción" sub="Un corpus epigráfico singular para estudiar la variación dialectal del griego antiguo">
          <Card style={{ padding: "18px 22px", display: "grid", gap: 12 }}>
            {INTRO_TXT.map((p) => <p key={p.slice(0, 50)} style={BIG}>{renderDesc(p)}</p>)}
          </Card>
        </Sec>
        <Sec title="La estructura de la tesis" sub="Tres partes; las secciones de los grupos dialectales enlazan con su parte del atlas"
          note="La numeración de los capítulos y apartados es provisional.">
          <Estructura />
        </Sec>
      </>}

      {tab === "santuario" && <>
        <Sec title="El santuario de Dodona" sub="Parte I, cap. 1">
          <Fichas items={SANTUARIO} />
        </Sec>
        <Sec title="El oráculo de Dodona" sub="Parte I, cap. 2">
          <Fichas items={ORACULO} />
        </Sec>
        <Sec title="Los capítulos 1 y 2, apartado por apartado" sub="El texto íntegro: pulsa para desplegar cada uno">
          <Apartados caps={[1, 2]} />
        </Sec>
      </>}

      {tab === "laminillas" && <>
        <Sec title="Características de las laminillas" sub="Parte I, cap. 3">
          <Stats>
            <Stat label="Laminillas halladas" value="Más de 2.500" sub="muchas, pequeños fragmentos, según los cálculos de Vokotopoulou (1987: 82-85)" accent={COLOR} />
            <Stat label="Textos editados en 2013" value="4.216" sub="en unas 1.250 laminillas (Tselikas 2017: 35; 2018: 249-250)" accent={C.terra} />
            <Stat label="Inscripciones por laminilla" value="3,3" sub="de media; lo más frecuente son dos y una llega a trece (Bowden 2026: 63-64)" accent={C.gold} />
            <Stat label="Laminillas completas" value="10 %" sub="en torno a esa proporción (Tselikas 2017: 36)" accent={C.green} />
          </Stats>
        </Sec>
        <Sec title="Las excavaciones" sub="De Carapanos a la interrupción de los trabajos en 2006 (§3.1)">
          <EventTable rows={EXCAVACIONES} color={COLOR} />
          <div style={{ marginTop: 12 }}><Fichas items={HALLAZGOS} /></div>
        </Sec>
        <Sec title="Un corpus sin contexto arqueológico" sub="Lo que se ha perdido y lo que el estudio material puede recuperar (§3.2)">
          <Fichas items={CONTEXTO} />
        </Sec>
        <Sec title="Material, forma y textos" sub="El soporte, los textos de una laminilla y el formulario de las consultas (§3.3 y §3.4)">
          <Fichas items={CARACTERISTICAS} />
        </Sec>
        <Sec title="El uso de las laminillas y su destino" sub="§3.5">
          <Fichas items={DESTINO} />
        </Sec>
        <Sec title="Ediciones y córpora" sub="De los facsímiles de 1878 a la reedición en curso (Parte I, cap. 4)"
          note="Quedan inéditas, además de las laminillas de Berlín, las de la segunda serie de campañas de Evangelidis y las de las excavaciones posteriores, cuyo número no se conoce: según los datos de la Eforía de Antigüedades de Ioánina que recoge Frank (2026: 6 n. 11), se cuentan por decenas y no por millares, mientras que Bonnechere (2026: 124 n. 5), que cita también a la Eforía, habla de unas 4.000.">
          <EventTable rows={EDICIONES} color={COLOR} />
        </Sec>
        <Sec title="Las laminillas en la investigación histórica" sub="§4.6">
          <Fichas items={INVESTIGACION} />
        </Sec>
        <Sec title="Los capítulos 3 y 4, apartado por apartado" sub="El texto íntegro: pulsa para desplegar cada uno">
          <Apartados caps={[3, 4]} />
        </Sec>
      </>}

      {tab === "metodo" && <>
        <Sec title="Metodología y criterios de adscripción" sub="cap. 6 · Una inscripción solo se atribuye a un dialecto con una prueba positiva">
          <Card style={{ padding: "18px 22px" }}>
            <p style={BIG}>
              La adscripción no es un dato que el corpus ofrezca de antemano, sino el resultado de decidir, inscripción por inscripción, qué se
              lee, qué rasgos son visibles, qué valor tienen y qué dialectos dejan abiertos. Un rasgo está atestiguado cuando es visible en el
              texto y no se limita a un antropónimo; lo restituido por el editor no cuenta, y la prueba ha de hallarse en el propio texto, aunque
              otra cara de la laminilla permita conocer el dialecto de otro de sus textos. Todas las lecturas se han revisado sobre las ediciones,
              los facsímiles y, cuando ha sido posible, las propias laminillas: el examen directo de los originales en el Museo Arqueológico de
              Ioánina (Eforía de Antigüedades) ha permitido descartar, por ejemplo, la mezcla de <Ref src="DVC" id="2160" /> (segunda mitad del
              s. IV a.C.), que resultaba de una lectura equivocada.
            </p>
          </Card>
        </Sec>
        <Sec title="Criterios por grupo dialectal" sub="cap. 6.5">
          <Rejilla>
            {CRITERIOS.map(([t, k, d]) => <Bloque key={t} t={t} accent={DIALECT_COLORS[k]}>{d}</Bloque>)}
          </Rejilla>
        </Sec>
        <Sec title="Alfabeto, grados de certeza y revisión" sub="caps. 6.6, 6.8 y 6.9">
          <Rejilla>
            <Bloque t="El alfabeto">
              Es un indicio de la tradición de escritura del texto y por sí solo no sirve para la adscripción; apoya, en cambio,
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
              <Stat label="Dórico demostrado" value={String(DEMOSTRADO)} sub={`el ${pct(DEMOSTRADO, CLAS)} %; probable, 344-510`} accent={C.terra} />
            </Stats>
            <Card>
              <p style={PROSE}>
                Las no jónico-áticas reúnen casi seis de cada diez inscripciones clasificadas: no son un dialecto, sino el reflejo de las
                condiciones del corpus. El dórico demostrado, con rasgos que excluyen los dialectos eólicos o con un rasgo no jónico-ático apoyado
                por el alfabeto, suma {DEMOSTRADO} inscripciones, y el probable, que añade una parte de las no jónico-áticas, se sitúa entre 344 y
                510. El tesalio, con {nDialecto(["Tesalio"])}, es el tercer dialecto mejor representado, muy por encima del beocio
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
          <Sec title="El arco del corpus" sub="cap. 1.4; la fiabilidad de las fechas se discute en el cap. 9.4">
            <Card><p style={PROSE}>{renderDesc(ARCO_TXT)}</p></Card>
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
