// Capítulos 9-12: el jónico-ático y la koiné en las laminillas oraculares de Dodona.
import { useState } from "react";
import { C, DIALECT_COLORS, ORO, PROSE, colorSiglo, fade } from "../theme.js";
import { MACROGRUPOS, TOTAL_CORPUS, miles, pct } from "../data/corpus.js";
import {
  ADSCRIPCION_ATI, ADSCRIPCION_JAK, ADSCRIPCION_JON, ADSCRIPCION_KOI, ALF_JAK_PIE, ANEXO_JAK, CERTEZA_JAK, CHRONO_ATI, CHRONO_DETAIL_JAK,
  CHRONO_JON, CHRONO_KOI, RASGOS_JAK, RASGOS_TABLA_JAK, RASGO_TEXTS_JAK, SECCIONES_ATI, SECCIONES_JON, SECCIONES_KOI, SIGLO_IV_JAK, SUBGRUPOS_JAK,
  THEMES_ATI, THEMES_JAK, THEMES_JON, THEMES_KOI, TOPONYMS_JAK, TOTAL_JAK,
} from "../data/jonicoAtico.js";
import { fmtDvc, renderDesc, renderGreekText } from "../lib/text.jsx";
import { Bars, DonutLegend, Temas } from "../components/charts.jsx";
import { Ref } from "../components/Inscriptions.jsx";
import { Card, ChapterLayout, EventTable, RasgoExplorer, Sec, Secciones, SourceList, Stat, Stats, SubNav } from "../components/ui.jsx";
import { AdscripcionTable } from "../components/Adscripcion.jsx";
import { Anexo } from "../components/Anexo.jsx";
import DoricMap from "../components/maps/DoricMap.jsx";
import { JAK_LAND_PATH } from "../components/maps/coastlines.js";

const COLOR = DIALECT_COLORS.jonicoAtico;

const TABS = [
  { id: "context", l: "Contexto histórico", i: "§" },
  { id: "map", l: "Mapa y topónimos", i: "◎" },
  { id: "profile", l: "Perfil dialectal", i: "Η" },
  { id: "subgrupos", l: "Jónico, ático y koiné", i: "Ω" },
  { id: "anexo", l: "Las inscripciones", i: "Ψ" },
];

// Mapa de los topónimos y etnónimos (cap. 9, §2), con la ventana de la figura de la tesis (jak_8_mapa_procedencias).
const VISTA_JAK = { lon0: 14.0, lon1: 24.6, lat0: 35.0, lat1: 42.5 };
const MARES_JAK = [{ t: "Mar Jónico", lon: 18.3, lat: 38.2 }, { t: "Mar Egeo", lon: 24.3, lat: 36.4 }];
const REGIONES_JAK = [{ t: "EPIRO", lon: 20.9, lat: 39.95 }, { t: "PELOPONESO", lon: 22.2, lat: 37.45 },
  { t: "ITALIA", lon: 16.2, lat: 40.7 }, { t: "SICILIA", lon: 14.75, lat: 37.4 }];
const NOTAS_JAK = ["El tamaño del símbolo es proporcional al número de menciones.",
  "Sin cartografiar: Mesene o Mesina, el etnónimo Τισατε͂ς y Libia, que queda más al sur."];
const MENCIONES_JAK = TOPONYMS_JAK.flatMap((t) => t.mentions.map((m) => ({ ...m, place: t.name })));
const SEG_JAK = MENCIONES_JAK.filter((m) => m.certain).length;

// Menciones de un lugar (o de todos, con `lugar`): inscripción, forma, tipo y certeza, como en el mapa del dórico.
const MencionesLista = ({ mentions, lugar = false }) => (
  <div style={{ display: "grid", gridTemplateColumns: lugar ? "repeat(auto-fill, minmax(240px, 1fr))" : "1fr", gap: 6, margin: "10px 0" }}>
    {mentions.map((m) => (
      <div key={`${m.ref}-${m.form}`} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 4, padding: "7px 10px", borderRadius: 6,
        background: m.certain ? fade(COLOR, 0.06) : "rgba(120,90,40,0.04)",
        border: `1px ${m.certain ? "solid" : "dashed"} ${m.certain ? fade(COLOR, 0.25) : C.border}` }}>
        <span style={{ fontSize: 12, color: C.heading }}>{renderDesc(fmtDvc(m.ref))}</span>
        <span style={{ fontSize: 9.5, color: m.certain ? COLOR : C.dim, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.6 }}>
          {m.certain ? "segura" : "dudosa"}</span>
        <span className="greek" style={{ fontSize: 14, color: C.heading }}>{renderGreekText(m.form)}</span>
        <span style={{ fontSize: 10.5, color: C.muted, fontStyle: "italic" }}>{lugar ? `${m.place} · ${m.type}` : m.type}</span>
        <span style={{ fontSize: 10.5, color: C.dim, gridColumn: "1 / -1" }}>{m.date}</span>
      </div>
    ))}
  </div>
);

const n = (s) => SUBGRUPOS_JAK.find((x) => x.name === s).value;

// Capítulos 10-12: datos de cada subgrupo y una síntesis de su comentario.
const SUBGRUPOS = {
  jon: {
    nombre: "jónico", cap: "Capítulo 10", color: "#3c9d8f", total: n("Jónico"), adscripcion: ADSCRIPCION_JON, crono: CHRONO_JON,
    temas: THEMES_JON, secciones: SECCIONES_JON,
    texto: <>
      Se separa del ático por la η tras ε, ι y ρ, el hiato de εο, εω y εε, la geminada σσ, las desinencias -αται, -ατο y, en el
      jónico de Asia Menor, el tercer alargamiento compensatorio (εἰρωτᾶι), como en <Ref src="Lhôte" id="100A" />, la consulta del
      comerciante Esquilino, y <Ref src="DVC" id="1881A" />. El ἐντελέες sin contraer de <Ref src="DVC" id="2319A" /> hace jonio un
      texto que Crespo y Giannakis (2019: 53 n. 2) contaban como mezcla de jónico y koiné, y el ὠφελέατ[ο] de{" "}
      <Ref src="DVC" id="206A" /> lo es también, aunque los editores lo atribuyan a la koiné. <Ref src="DVC" id="4162B" />, con -μεν,
      se cuenta en el tesalio como doble adscripción. El único consultante del corpus al que puede atribuirse con fundamento un
      origen eubeo es el Ὀνήριμος de <Ref src="DVC" id="2217A" />, con el rotacismo eretrio en su nombre; la consulta se cuenta como
      jónica segura porque el artículo τὴν̣ asegura el jónico-ático (cap. 10, §4.6).
    </>,
  },
  ati: {
    nombre: "ático", cap: "Capítulo 11", color: "#4a4e7a", total: n("Ático"), adscripcion: ADSCRIPCION_ATI, crono: CHRONO_ATI,
    temas: THEMES_ATI, secciones: SECCIONES_ATI,
    texto: <>
      Lo identifican la ᾱ tras ε, ι y ρ, la contracción de εο y εω y, en algunas consultas, ττ, οὖν y la monoptongación de ηι en ει.
      Los consultantes áticos rara vez declaran su origen, y solo uno, Diógneto, se presenta como ateniense (<Ref src="Lhôte" id="23" />).
      Otros pueden relacionarse con Atenas por el dialecto y la prosopografía, con la cautela que impone la abundancia de fuentes
      atenienses, como el Fanóstrato de <Ref src="DVC" id="123" />, si es el rico ateniense del círculo de Timoteo (Chaniotis 2017: 64), o
      el esclavo Kittos de <Ref src="DVC" id="1411" />, si es el herrero de una lista ateniense de fíalas (McArthur 2019: 274-279). A
      diferencia de las jonias, solo cuatro de las diecisiete consultas tratan del trabajo, el comercio o los viajes.{" "}
      <Ref src="DVC" id="424B" /> se cuenta como jónico-ática sin precisar, porque πο̅ς no excluye el jónico en las inscripciones
      (Buck 1955: §68.4).
    </>,
  },
  koi: {
    nombre: "koiné", cap: "Capítulo 12", color: "#8a3a6a", total: n("Koiné"), adscripcion: ADSCRIPCION_KOI, crono: CHRONO_KOI,
    temas: THEMES_KOI, secciones: SECCIONES_KOI,
    texto: <>
      Solo se cuenta como koiné la consulta con un rasgo propio o fechada desde finales del s. IV a.C. sin rasgos exclusivos del
      ático o del jónico. Ese límite se apoya en la cronología de la propia koiné: sus rasgos aparecen en los documentos macedonios desde
      mediados del s. IV a.C., su fijación se sitúa en torno al congreso de Corinto del 338/7 a.C. y su difusión llega con las conquistas
      de Alejandro. Cinco consultas lo son por la fecha, como la de Isodemo (<Ref src="Lhôte" id="52" />) o la de
      Θεόφαντος (<Ref src="DVC" id="2510" />), y otras dos son dudosas: <Ref src="Lhôte" id="65B" />, que solo conserva εἴ ἐστι, y{" "}
      <Ref src="DVC" id="2899A" />, cuyo único rasgo jónico-ático, ἐπερωτᾶι, es común con el tesalio. La única con un rasgo propio, el
      híbrido πράσσοι de <Ref src="DVC" id="3033A" />, se cuenta como mezcla porque su consultante lleva un nombre dórico.
    </>,
  },
};

// ── Contexto histórico (§2 de los capítulos 9-12): síntesis, testimonios literarios y acontecimientos ──
const BIG = { ...PROSE, fontSize: 13, color: C.text, lineHeight: 1.8 };
const CONTEXTO = {
  grupo: {
    nav: "El grupo jónico-ático", navSub: "capítulo 9 · la unidad del grupo y unos consultantes lejanos", color: COLOR,
    titulo: "El jónico, el ático y la koiné", sub: "Un grupo dialectal unitario de fronteras difusas",
    intro: <>
      El jónico y el ático forman un grupo dialectal unitario, que Buck (1955: 8) incluye, junto al eolio y al arcadochipriota, en la
      división oriental del griego y que comparte un conjunto de innovaciones prehistóricas, entre ellas la anteriorización de la ᾱ
      heredada, que se fecha hacia el 1000 a.C., en vísperas de la colonización ática de Jonia. La frontera entre ambos se difuminó con
      el tiempo: tras las guerras médicas el ático desplazó al jónico como dialecto de mayor prestigio y, del contacto entre atenienses y
      jonios en la liga de Delos, surgió el llamado gran ático, mientras que el eubeo comparte con el ático tantas innovaciones que
      Colvin (2007: 35-36) observa que el grupo podría llamarse con igual razón ático-eubeo-jónico. La koiné parte de ese gran ático,
      pero no se identifica con ningún dialecto anterior: su forma más característica es un híbrido como πράσσω, que no es ni ático
      (πράττω) ni jonio (πρήσσω).
    </>,
    bloques: [
      ["Tres variedades difíciles de separar", <>
        Para los documentos de la época en que se fijó la koiné, Crespo (2010a: 144) señala que la escasez y la brevedad de los textos,
        la identidad gráfica de las posibles diferencias fonéticas y la parquedad de rasgos que distinguen el ático de la koiné impiden
        decidir si las grafías reproducen el ático usado fuera del Ática, el gran ático o la koiné. Las laminillas, todavía más breves,
        comparten ese límite, y solo cuando conservan un rasgo exclusivo de una variedad pueden atribuirse a ella.
      </>],
      ["Consultantes que venían de lejos", <>
        Ni el Epiro ni sus vecinos hablaban jónico o ático, y las regiones donde se hablaban, como Jonia, Eubea o el Ática, apenas dejan
        huella en los topónimos de las consultas. Es raro que el consultante declare su patria, salvo excepciones como Porino, el
        Κυμαῖος de <Ref src="DVC" id="35A" /> (segunda mitad del s. IV a.C.), y el ateniense Diógneto de <Ref src="Lhôte" id="23" />{" "}
        (segunda mitad del s. IV a.C.). Los lugares que mencionan son sobre todo destinos de viajes por el Jónico y el Adriático, por las
        mismas vías que seguían los dóricos de las colonias (véase “Mapa y topónimos”).
      </>],
    ],
  },
  jon: {
    nav: "El jónico", navSub: "capítulo 10 · Eubea, Jonia y Dodona", color: "#3c9d8f",
    titulo: "Eubea, Jonia y Dodona", sub: "Una relación antigua, pero indirecta",
    intro: <>
      Los eubeos fueron, según Piccinini (2017: 45-49), los primeros griegos de fuera del Epiro que entraron en contacto con el santuario,
      y su presencia en el bajo Adriático y en el Jónico desde el s. VIII a.C. sería clave para que Dodona saliera de su ámbito regional en
      la segunda mitad del s. VII a.C., aunque se trata de una reconstrucción indirecta. En la época de las laminillas, en cambio, los
      consultantes jonios llegaban de lugares muy distintos, desde Asia Menor hasta las colonias de Occidente, sin que ninguna ciudad jonia
      mantuviera con el oráculo una relación pública comparable a la de Atenas.
    </>,
    fuentes: [
      { author: "Heródoto IV, 33, 1-2", type: "Historia, s. V a.C.",
        desc: "Las ofrendas de los hiperbóreos pasaban de pueblo en pueblo hasta el Adriático y, hacia el sur, los dodoneos eran los primeros griegos en recibirlas; desde Dodona bajaban al golfo Malíaco y recorrían Eubea de ciudad en ciudad hasta Caristo, de donde pasaban a Tenos y a Delos. Moscati Castelnuovo (2005: 143-146) y Piccinini (2017: 46-48) ven en ese relevo un rito paneubeo, del que quedaba excluida Andros, y lo relacionan con el final de la guerra lelantina, hacia mediados del s. VII a.C." },
      { author: "Filócoro y Hesíodo (Str. VII, 7, 10)", type: "Geografía, s. I a.C.",
        desc: "Filócoro sostenía que la región de Dodona se había llamado Helopia, como una parte de Eubea, apoyándose en unos versos de Hesíodo. El nombre no prueba una relación directa, porque Helopia se llamaban también una ciudad de la Dolopia y un lugar del territorio de Tespias." },
      { author: "Plutarco, Licofrón, Pausanias y Pseudo-Escimno", type: "Relatos de fundación",
        desc: "Los eretrios habrían habitado Corcira antes de la llegada del corintio Caricrates (Plu. Quaest. Graec. 11 = Mor. 293a-b); los abantes de Elefénor, la isla de Otronos y Amantia (Lyc. Alex. 1034-1046); locrios y abantes habrían fundado Tronio (Paus. V, 22, 3-4), y unos eubeos desviados a su regreso de Troya, Órico (Ps.-Scymn. 441-443). La arqueología no confirma ningún asentamiento eubeo estable: fueron navegantes de paso y no colonos." },
      { author: "Heródoto II, 55-57", type: "Historia, s. V a.C.",
        desc: "Heródoto, un jonio de Halicarnaso, recogió de boca de las sacerdotisas de Dodona, Promenea, Timárete y Nicandra, la versión local del origen del oráculo, la de la paloma negra llegada desde la Tebas de Egipto, y la contrastó con el relato de los sacerdotes de Tebas." },
    ],
    bloques: [
      ["El rastro de Eubea en las laminillas", <>
        Es mucho más tenue de lo que esas tradiciones harían esperar, porque el eubeo se distingue mal del ático, con el que comparte ττ,
        ρρ, ξένος y la monoptongación de ηι en ει (Buck 1955: §39.a, §186). El antropónimo Ὀνήριμος de <Ref src="DVC" id="2217A" />{" "}
        (segunda mitad del s. IV a.C.), con el rotacismo de Eretria, apunta a la isla (Méndez Dosuna 2016: 131), y no cabe descartar un
        autor eretrio en <Ref src="DVC" id="214A" /> ni en <Ref src="DVC" id="424B" />, cuyo verbo puede ser también el βόλομαι de Eretria.
        Los editores atribuyen al alfabeto eubeo once inscripciones, ninguna con rasgos jónicos, y la autopsia ha mostrado que al menos dos,{" "}
        <Ref src="DVC" id="2103A" /> y <Ref src="DVC" id="307A" />, están escritas en alfabeto tesalio.
      </>],
      ["Comerciantes y navegantes jonios", <>
        El εἰρωτᾶι de <Ref src="DVC" id="1881A" /> (principios del s. IV a.C.) y de <Ref src="Lhôte" id="100A" /> (primer cuarto del
        s. IV a.C.) remite al jónico minorasiático. Esquilino pregunta en esta última si le conviene navegar hacia el Adriático, en los
        años en que Dionisio el Viejo refundaba el emporio de Adria, y unos navegantes dudan entre quedarse en Ambracia o partir hacia
        Μεσσήνην en <Ref src="Lhôte" id="106A" /> (s. IV a.C.); siete de las trece consultas jonias se refieren al trabajo o al comercio.
      </>],
    ],
  },
  ati: {
    nav: "El ático", navSub: "capítulo 11 · Atenas y Dodona", color: "#4a4e7a",
    titulo: "Atenas y Dodona", sub: "La relación mejor documentada de un estado de habla jónico-ática con el santuario",
    intro: <>
      Atenas es el estado de habla jónico-ática cuya relación con Dodona mejor puede seguirse, desde el s. V a.C. hasta época
      helenística. Ninguna fuente sitúa a atenienses en Dodona antes de Temístocles, el interés de la ciudad crece desde mediados del
      s. V a.C. y alcanza su punto culminante en el s. IV a.C., y las diecisiete consultas áticas del corpus se distribuyen de la misma
      manera, con cuatro del s. V a.C., tres de la transición y diez del s. IV a.C. El número de atenienses hubo de ser mayor, porque
      muchas consultas jónico-áticas sin precisar pudieron salir de sus manos.
    </>,
    eventos: [
      { event: "Temístocles en Molosia", date: "tras su ostracismo", agent: "Temístocles, Admeto",
        desc: "Huyó a Corcira y de allí a Molosia, donde se acogió como suplicante al rey Admeto (Th. I, 136); según Plutarco, el oráculo le indicó dirigirse al homónimo del dios, el Gran Rey (Plu. Them. 28, 5)." },
      { event: "Intervención en Acarnania", date: "mediados del s. V a.C.", agent: "Atenas",
        desc: "Las relaciones se estrechan con la presencia ateniense en Acarnania (Th. I, 108, 5; II, 68)." },
      { event: "Ciudadanía ateniense de Táripas", date: "ca. 428-424 a.C.", agent: "Táripas, Alcetas, Aribas",
        desc: "El rey moloso, educado en Atenas, recibió la ciudadanía, que se concedió después a su hijo Alcetas y se recordó en el 343/2 a.C. a su nieto Aribas, refugiado en Atenas tras ser expulsado por Filipo II (Iust. XVII, 3, 9-13; Plu. Pyrrh. 1, 4; Cabanes 2020: 147)." },
      { event: "Dedicatoria de una victoria naval", date: "s. V a.C.", agent: "los atenienses",
        desc: "Ἀθεναῖοι ἀπὸ Πελοπον[ν]εσίον ναυμαχίᾳ νικέσαντες ἀ[νέθεσαν], en alfabeto ático anterior a la reforma (Carapanos 1878: 47, n.º 20 = I.Molossie 8). La batalla no puede precisarse: se han propuesto Cecrifalea (459-458 a.C.), la de Formión en Patras (429 a.C.) y la intervención en Síbota (433 a.C.) (Cabanes 2020: 209; Piccinini 2017: 144-145)." },
      { event: "Respuestas leídas por Demóstenes", date: "348/7 a.C.", agent: "el pueblo ateniense",
        desc: "Dos respuestas del Zeus de Dodona ordenan enviar teoros, sacrificar tres bueyes a Zeus Naios y uno a Dione, dedicar una mesa de bronce junto a la ofrenda del pueblo ateniense y celebrar sacrificios públicos a Dioniso (D. XXI, 51-54)." },
      { event: "La estatua de Dione", date: "años de Olimpíade", agent: "Atenas, Olimpíade",
        desc: "Según Hipérides, el dios ordenó embellecer la estatua de Dione, y la ciudad le hizo un rostro nuevo, le preparó un rico adorno y envió una procesión con un sacrificio costoso, lo que provocó las quejas de Olimpíade, que reclamaba como suya Molosia (Hyp. Eux. 24-26)." },
      { event: "Trigo del Epiro", date: "ca. 330 a.C.", agent: "Leócrates, Cleopatra",
        desc: "Leócrates, huido de Atenas tras Queronea, compró trigo a la reina Cleopatra en el Epiro y lo llevó a Léucade y a Corinto (Lycurg. Leocr. 26), cuando la región exportaba grano (Cabanes 2020: 141)." },
    ],
    fuentes: [
      { author: "Esquilo, Sófocles y Eurípides", type: "Tragedia, s. V a.C.",
        desc: "Dodona es un hito geográfico en las Suplicantes (A. Supp. 256-259), interviene en la historia de Ío en el Prometeo encadenado (A. Pr. 659-661, 829-835) y desempeña un papel decisivo en las Traquinias, que conocen la encina, las peleíades y los Selloi (S. Tr. 171-172, 1166-1168); la Andrómaca de Eurípides presupone un público familiarizado con la Molosia (Piccinini 2017: 142-144)." },
      { author: "Demóstenes, Dinarco y Jenofonte", type: "Oratoria y tratados, s. IV a.C.",
        desc: "Demóstenes alude a los oráculos de Dodona favorables a la ciudad (D. XVIII, 253; XIX, 299) y Dinarco hace leer uno que advertía contra sus dirigentes (Din. I, 78); Jenofonte aconseja consultar a Dodona y a Delfos antes de su reforma financiera con la misma fórmula de las laminillas, εἰ λῷον καὶ ἄμεινον εἴη ἂν τῇ πόλει (X. Vect. 6, 2-3)." },
      { author: "Plutarco y Pausanias", type: "Biografía y periégesis",
        desc: "Las sacerdotisas de Dodona habrían advertido a la ciudad que guardara las alturas de Ártemis (Plu. Phoc. 28, 4); el oráculo que habría ordenado colonizar Sicilia, entendido como una exhortación a la expedición del 415 a.C. (Paus. VIII, 11, 12), procede con toda probabilidad de una colección de oráculos (Piccinini 2017: 144 n. 57)." },
    ],
    bloques: [
      ["El culto de Dodona en Atenas", <>
        Las cuentas del Erecteo del 409/8 y del 408/7 a.C. mencionan un altar de Dione, un sitial del teatro de Dioniso está dedicado a la
        diosa en el s. IV a.C. y en el s. I a.C. se dedicaba todavía en la Acrópolis un altar a Zeus Naios; un decreto del 263/2 a.C.
        recuerda que el santuario de Bendis en el Pireo se fundó de acuerdo con una respuesta de Dodona (Piccinini 2017: 137-140).
      </>],
      ["Las ofrendas de los atenienses", <>
        Las ofrendas muestran la devoción privada: entre los bronces hallados en el santuario figura la placa de un cofrecillo con la
        dedicatoria Διὶ Ναΐῳ Φιλῖνος Ἀθηναῖος (I.Molossie 25), y el atleta Μηνόδωρος Γναίου Ἀθηναῖος venció dos veces en los Naia de
        Dodona, según la base de su estatua en Delos (I.Molossie 257).
      </>],
      ["Atenienses seguros y posibles en las laminillas", <>
        Lhôte (2006: XIII) observó que, a partir de ca. 400 a.C., acuden a Dodona atenienses en número considerable, pero solo uno lo declara:
        Diógneto, hijo de Aristomedes, se presenta como ateniense en <Ref src="Lhôte" id="23" />. Los demás se relacionan con Atenas por
        indicios de distinta solidez: Isodemo pregunta si le conviene casarse mientras reside en Atenas (<Ref src="Lhôte" id="52" />); Aristón, de
        lengua ática, pregunta por un viaje a Siracusa (<Ref src="Lhôte" id="103A" />); el esclavo Kittos (<Ref src="DVC" id="1411" />) podría
        ser el mismo que aparece en una lista ateniense de fíalas (McArthur 2019: 274-279), y Fanóstrato pregunta por su amistad con un
        Ifícrates que Chaniotis (2017: 64) identifica con el general ateniense (<Ref src="DVC" id="123" />). Lhôte (2006: 16, 293) considera
        también atenienses a Exacón (<Ref src="Lhôte" id="130A" />), por su dialecto, y a Nike (<Ref src="Lhôte" id="141A" />); ambos textos, con
        alguna forma dórica, se cuentan entre las mezclas.
      </>],
    ],
  },
  koi: {
    nav: "La koiné", navSub: "capítulo 12 · formación y llegada al Epiro", color: "#8a3a6a",
    titulo: "La formación de la koiné y su llegada al Epiro", sub: "Del gran ático a la lengua común de los griegos",
    intro: <>
      La koiné es, en esencia, una variedad ampliada e internacional del ático, con una fuerte influencia jonia (Colvin 2007: 65). Sus
      raíces se remontan a la Atenas posterior a las guerras médicas, y el paso decisivo fue su adopción por la corte macedonia. Esa lengua
      pudo llegar al Epiro, que desde mediados del s. IV a.C. se hallaba en la órbita de Macedonia, pero la cercanía no llevó la koiné a
      sus documentos: no es descabellado que hubiera hablantes de koiné entre los consultantes desde finales del s. IV a.C., y las siete
      consultas de koiné del corpus son todas de esa fecha o posteriores, pero el material no sostiene una koiné en Dodona en el s. V a.C.
      ni en la primera mitad del s. IV a.C.
    </>,
    eventos: [
      { event: "Liga de Delos", date: "478/7 a.C.", agent: "Atenas y los jonios",
        desc: "El ático desplaza al jónico como dialecto de prestigio, y el contacto en la flota, las cleruquías y el comercio da lugar al gran ático, que renuncia a sus rasgos más locales (Bubenik 2014: 278-279; Colvin 2007: 65)." },
      { event: "El ático, lengua de la liga", date: "s. V a.C.", agent: "Atenas y sus aliados",
        desc: "El decreto de la moneda, los pesos y las medidas se graba en ático en ciudades de otros dialectos (Crespo 2006: 94-96; 2014a: 310-311), y los tratados citan en ático el juramento de la otra parte (Crespo 2004: 109-110, 116-117)." },
      { event: "Acuerdos en ático fuera de Atenas", date: "ca. 370-360 a.C.", agent: "Tegea, Argos",
        desc: "El ático registra acuerdos entre estados griegos, mientras en el Peloponeso surgen koinai regionales con formas híbridas (Crespo 2014b: 57-58, 65-66)." },
      { event: "Lengua oficial de Macedonia", date: "Filipo II (360/59-336 a.C.)", agent: "los temenidas",
        desc: "El ático de la administración se convierte en la lengua oficial del reino (Bubenik 2014: 279; Brixhe y Panayotou 1988: 246; Hatzopoulos 2018: 300-301); sus rasgos aparecen en las inscripciones más antiguas halladas en Macedonia (Crespo 2012: 122 n. 10), como la carta de Filipo II a los katlestai hallada cerca de Olevéni (IG X,2,2 1), que Hatzopoulos (1982: 21-42) fecha en el 345 a.C. y Arena (2003: 81-82) atribuye, con cautela, a Filipo V y al 206 a.C., y la delimitación del territorio de Filipos por Alejandro (SEG 34:664; 330 a.C.)." },
      { event: "Congreso de Corinto", date: "338/7 a.C.", agent: "Filipo II, Atenas",
        desc: "El juramento de los atenienses como miembros de la liga, IG II² 236, con κατὰ [θ]άλασ[σαν], es el primer documento con la σσ de la koiné; Crespo (2010a: 142-145; 2010b: 132-134) atribuye su fijación a una elección consciente de la corte de Filipo II." },
      { event: "Alejandro el Moloso y Olimpíade", date: "342-331 a.C.", agent: "Filipo II, Alejandro, Olimpíade",
        desc: "Filipo entrega a Alejandro, criado en Pela, la Casopia y las ciudades eleas, y el reino moloso llega al golfo de Ambracia; tras su muerte en Italia, Olimpíade gobierna Molosia, que queda en estrecha dependencia de Macedonia (Cabanes 2020: 147, 149)." },
      { event: "La lengua común de los griegos", date: "desde finales del s. IV a.C.", agent: "Alejandro y sus sucesores",
        desc: "La koiné se convierte en la lengua oficial de un territorio inmenso; el término κοινὴ διάλεκτος procede probablemente de los gramáticos alejandrinos de los ss. III-II a.C. (Colvin 2007: 63; Bubenik 2014: 279-280)." },
    ],
    bloques: [
      ["Macedonia, el Epiro y el santuario", <>
        Las fuentes emparentaban el habla de los macedonios con la de etolios y epirotas (Méndez Dosuna 2012: 133-134), y Estrabón recuerda
        que algunos llamaban Macedonia a todo el territorio hasta Corcira (Str. VII, 7, 8). Los macedonios acudían también al santuario:
        Méndez Dosuna (2012: 144-145) atribuye al macedonio la pregunta de Κεβάλιος en <Ref src="DVC" id="2493A" /> (principios del
        s. IV a.C.), y Pirro dedicó en Dodona los escudos de los macedonios vencidos (Paus. I, 13, 3).
      </>],
      ["La koiné en los documentos y en las consultas", <>
        Las inscripciones del Epiro de los ss. III y II a.C. están escritas sobre todo en la koiná noroccidental, y los textos en koiné son muy
        escasos hasta época imperial (Filos 2018a: 231-232); las monedas del koinon mantienen Ἀπειρωτᾶν hasta el 167 a.C. y ningún
        consultante epirota se expresa solo en koiné (Lhôte 2006: 14-15). En las consultas de los dorios, la koiné penetra en rasgos
        aislados, como εἰ en el híbrido εἴ κα de <Ref src="DVC" id="2186A" /> (s. IV a.C.) o la contracción de ἐπερωτᾶι en{" "}
        <Ref src="Lhôte" id="22A" /> (ss. III-II a.C.). La única consulta de koiné cuyo consultante puede situarse es la de Isodemo, que
        pregunta por su residencia en Atenas (<Ref src="Lhôte" id="52" />), de modo que ninguna permite atribuir la koiné a un macedonio o a
        un epirota.
      </>],
    ],
  },
};

// Contexto de una variedad: síntesis, acontecimientos, testimonios literarios y otros bloques, como en los demás capítulos.
const ContextoHistorico = ({ c }) => <>
  <Sec title={c.titulo} sub={c.sub}>
    <Card style={{ padding: "18px 22px" }}><p style={BIG}>{c.intro}</p></Card>
  </Sec>
  {c.eventos && (
    <Sec title="Contexto político" sub="Acontecimientos que marcan la relación con el santuario y la difusión de la variedad">
      <EventTable rows={c.eventos} color={c.color} />
    </Sec>
  )}
  {c.fuentes && (
    <Sec title="Testimonios literarios">
      <SourceList sources={c.fuentes} color={c.color} />
    </Sec>
  )}
  <Sec title="En las laminillas y en el santuario">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: 12 }}>
      {c.bloques.map(([t, d]) => (
        <Card key={t} accent={c.color}>
          <div style={{ fontFamily: "var(--fh)", fontSize: 14.5, fontWeight: 700, color: C.heading, marginBottom: 6 }}>{t}</div>
          <p style={PROSE}>{d}</p>
        </Card>
      ))}
    </div>
  </Sec>
</>;

const th = { padding: "7px 10px", textAlign: "left", color: COLOR, fontFamily: "var(--fh)", fontSize: 11.5, borderBottom: `2px solid ${C.border}` };
const td = { padding: "6px 10px", fontSize: 12, borderBottom: "1px solid rgba(120,90,40,0.08)", verticalAlign: "top" };

export default function JonicoAtico({ switcher }) {
  const [tab, setTab] = useState("context");
  const [sub, setSub] = useState("cifras");
  const [grupo, setGrupo] = useState("jon");
  const [ctx, setCtx] = useState("grupo");   // subpestaña del contexto histórico
  const [selPlace, setSelPlace] = useState(null);
  const place = TOPONYMS_JAK.find((t) => t.id === selPlace);
  const g = SUBGRUPOS[grupo];

  return (
    <ChapterLayout switcher={switcher} color={COLOR} accent={[C.terra, COLOR, C.blue, C.green]}
      title={<>El <em style={{ fontWeight: 700, color: COLOR }}>jónico-ático</em> y la koiné en las laminillas oraculares de Dodona</>}
      subtitle="El grupo en su conjunto y el jónico, el ático y la koiné"
      stats={<>
        <Stat label="Inscripciones" value={String(TOTAL_JAK)} sub="ss. V–II a.C." accent={COLOR} />
        <Stat label="Corpus dialectal" value={`${pct(TOTAL_JAK)} %`} sub={`${TOTAL_JAK} de ${miles(TOTAL_CORPUS)}`} accent={C.terra} />
        <Stat label="Seguras" value={String(CERTEZA_JAK.seguras)} sub={`${CERTEZA_JAK.dudosas} dudosas o de solo nombre`} accent={C.blue} />
        <Stat label="Koiné" value={String(n("Koiné"))} sub="con prueba positiva" accent="#8a3a6a" />
      </>}
      tabs={TABS} tab={tab} onTab={setTab}>

      {tab === "context" && <>
        <SubNav color={CONTEXTO[ctx].color} value={ctx} onChange={setCtx}
          items={Object.entries(CONTEXTO).map(([id, x]) => [id, x.nav, x.navSub])} />
        <ContextoHistorico c={CONTEXTO[ctx]} />
      </>}

      {tab === "map" && <>
        <Sec title="Topónimos y etnónimos en las consultas jónico-áticas y de koiné"
          sub={`${MENCIONES_JAK.length} menciones de ${TOPONYMS_JAK.length} lugares, ${SEG_JAK} de ellas seguras`}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: "2 1 520px", minWidth: 0 }}>
              <DoricMap selected={selPlace} onSelect={setSelPlace} places={TOPONYMS_JAK} color={COLOR} view={VISTA_JAK} land={JAK_LAND_PATH}
                mares={MARES_JAK} regiones={REGIONES_JAK} notas={NOTAS_JAK}
                label="Mapa de los topónimos y etnónimos mencionados en las consultas jónico-áticas y de koiné" />
            </div>
            <div style={{ flex: "1 1 240px", minWidth: 0 }}>
              {!place && (
                <Card>
                  <div style={{ fontFamily: "var(--fh)", fontSize: 15, color: C.heading, marginBottom: 6 }}>Selecciona un lugar</div>
                  <p style={PROSE}>
                    Los lugares dibujan sobre todo rutas marítimas: Apolonia, Ambracia, Alicia, Siracusa y el Adriático son destinos de viajes
                    de consultantes que navegaban por el Jónico y el Adriático, por las mismas vías que los dóricos de las colonias. Fuera de
                    esas rutas solo figuran los lugares de origen o de residencia de dos consultantes, Atenas y Cime, y quizá Escíone, en la
                    Calcídica.
                  </p>
                  <Stats style={{ marginTop: 12, marginBottom: 0 }}>
                    <Stat label="Seguras" value={String(SEG_JAK)} accent={COLOR} />
                    <Stat label="Dudosas" value={String(MENCIONES_JAK.length - SEG_JAK)} accent={ORO} />
                  </Stats>
                </Card>
              )}
              {place && (
                <Card accent={place.seg ? COLOR : ORO}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 6 }}>
                    <div>
                      <span style={{ fontFamily: "var(--fh)", fontSize: 19, fontWeight: 700, color: C.heading }}>{place.name}</span>
                      <span style={{ fontStyle: "italic", color: C.muted, marginLeft: 8, fontSize: 14 }}>{renderGreekText(place.greek)}</span>
                    </div>
                    <button onClick={() => setSelPlace(null)} aria-label="Cerrar" style={{ color: C.dim, fontSize: 18 }}>×</button>
                  </div>
                  <div style={{ fontSize: 11, color: C.dim, margin: "2px 0 10px" }}>{place.ambito}</div>
                  <MencionesLista mentions={place.mentions} />
                  <p style={{ ...PROSE, fontSize: 12 }}>{renderDesc(place.note)}</p>
                </Card>
              )}
            </div>
          </div>
        </Sec>
        <Sec title="Menciones por lugar" sub={`Menciones seguras frente a restituidas o dudosas (n = ${MENCIONES_JAK.length})`}>
          <Bars horizontal data={[...TOPONYMS_JAK].sort((a, b) => b.total - a.total || b.seg - a.seg).map((t) => ({ name: t.name, seguras: t.seg, dudosas: t.dud }))}
            keys={["seguras", "dudosas"]} height={340} left={130} unit="menciones"
            colors={{ seguras: COLOR, dudosas: ORO }} labels={{ seguras: "Mención segura", dudosas: "Mención restituida o dudosa" }} />
        </Sec>
        <Sec title="Las menciones, una a una">
          <MencionesLista mentions={MENCIONES_JAK} lugar />
        </Sec>
      </>}

      {tab === "anexo" && (
        <Sec title="Las inscripciones jónico-áticas y de koiné" sub="Texto de la edición, datación y subgrupo">
          <Anexo rows={ANEXO_JAK} color={COLOR} />
        </Sec>
      )}

      {tab === "profile" && <>
        <SubNav color={COLOR} value={sub} onChange={setSub} items={[
          ["cifras", "El jónico-ático y la koiné en números", "adscripción, subgrupos, cronología, temática y alfabeto"],
          ["rasgos", "Rasgos dialectales", `${RASGOS_TABLA_JAK.length} rasgos que separan el grupo de los demás dialectos`],
        ]} />
        {sub === "cifras" && <>
          <Sec title="El jónico-ático y la koiné en el corpus de Dodona">
            <Stats>
              <Stat label="Inscripciones" value={String(TOTAL_JAK)} accent={COLOR} sub={`el ${pct(TOTAL_JAK)} % del corpus dialectal`} />
              <Stat label="Dudosas o de solo nombre" value={`${pct(CERTEZA_JAK.dudosas, TOTAL_JAK)} %`} sub={`${CERTEZA_JAK.dudosas} de ${TOTAL_JAK}`} accent={C.amber} />
              <Stat label="Sin precisar" value={String(n("Sin precisar"))} sub="jónico, ático o koiné" accent={C.muted} />
            </Stats>
            <Card>
              <p style={PROSE}>
                La bibliografía llama koiné a casi todas estas consultas, incluidas las del s. V a.C. Con el criterio de la tesis (una
                consulta solo es de koiné si tiene un rasgo propio o si su fecha, desde finales del s. IV a.C., no deja lugar al ático o al
                jónico), la koiné del corpus se reduce a siete consultas, frente a las cien que Giannakis (2024a: 40-41) da como
                escritas solo en koiné: las demás son jónico-áticas sin precisar, áticas o jonias, carecen de rasgo jónico-ático visible
                o son mezclas. Lo que crece en el
                s. IV a.C. es el número de consultas jónico-áticas, no el de textos en koiné.
              </p>
            </Card>
          </Sec>

          <Sec title="Adscripción de las consultas" sub="Bases de la adscripción, grado de certeza y consultas excluidas del capítulo">
            <AdscripcionTable data={ADSCRIPCION_JAK} color={COLOR} />
          </Sec>

          <Sec title="Subgrupos" sub="Jónico, ático y koiné, y las consultas jónico-áticas cuya variedad no puede precisarse">
            <Bars horizontal data={SUBGRUPOS_JAK} height={220} left={130} />
          </Sec>

          <Sec title="El jónico-ático y la koiné en contexto" sub="Macrogrupos dialectales del corpus de Dodona">
            <Bars horizontal data={MACROGRUPOS} highlight="Jónico-ático-koiné" height={300} left={200} />
          </Sec>

          <Sec title="Distribución cronológica" sub={`El s. IV a.C. reúne ${SIGLO_IV_JAK} de las ${TOTAL_JAK} inscripciones; la koiné solo aparece desde finales de ese siglo`}>
            <Bars data={CHRONO_DETAIL_JAK.map((d) => ({ ...d, color: colorSiglo(d.period) }))} indexBy="period" keys={["n"]} height={300} rotate={-35} />
          </Sec>

          <Sec title="Temática de las consultas" sub="Predominan las relativas al trabajo y al comercio, lo que concuerda con la presencia de comerciantes y marinos">
            <Temas data={THEMES_JAK} color={COLOR} height={330} />
          </Sec>

          <Sec title="Alfabeto"
            note="Todas las inscripciones del grupo emplean el alfabeto jónico reformado o uno que no puede identificarse, salvo I.Dodone DVC 3708A, que los editores atribuyen a una colonia elea del Epiro pese a su γεο̅εργέο̅ y su ἔσσται. Varias conservan la notación ática anterior al 403/2 a.C., con Ε y Ο para las vocales largas.">
            <DonutLegend data={ALF_JAK_PIE} height={220} valueColor={COLOR} />
          </Sec>
        </>}
        {sub === "rasgos" && <>
          <Sec title="Rasgos del jónico-ático y de la koiné" sub="Formas que distinguen una consulta jónico-ática y su documentación en el grupo"
            note="En las dos últimas columnas, las consultas con el rasgo visible de adscripción segura y dudosa; una consulta puede tener varios rasgos.">
            <div style={{ overflowX: "auto" }}>
              <table style={{ borderCollapse: "collapse", width: "100%", minWidth: 720 }}>
                <thead>
                  <tr>{["§", "Rasgo", "Forma jónico-ática", "Forma de los demás", "Otros dialectos con el rasgo", "Seguras", "Dudosas"].map((h) => <th key={h} style={th}>{h}</th>)}</tr>
                </thead>
                <tbody>
                  {RASGOS_TABLA_JAK.map((r) => (
                    <tr key={r.rasgo}>
                      <td style={{ ...td, color: C.muted }}>{r.sec}</td>
                      <td style={{ ...td, fontFamily: "var(--fh)", color: C.heading }}>{r.rasgo}</td>
                      <td style={td}><span className="greek-run">{r.jak}</span></td>
                      <td style={td}><span className="greek-run">{r.otros}</span></td>
                      <td style={{ ...td, color: C.muted }}>{r.comparten}</td>
                      <td style={{ ...td, textAlign: "center", fontWeight: 700, color: COLOR }}>{r.seguras}</td>
                      <td style={{ ...td, textAlign: "center", color: C.amber }}>{r.dudosas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Sec>
          <Sec title="Los rasgos, uno a uno" sub={`Los ${RASGOS_JAK.length} apartados del capítulo 9 (§4-§7), con su explicación y las inscripciones que citan`}>
            <RasgoExplorer rasgos={RASGOS_JAK} texts={RASGO_TEXTS_JAK} color={COLOR} />
          </Sec>
        </>}
      </>}

      {tab === "subgrupos" && <>
        <SubNav color={g.color} value={grupo} onChange={setGrupo} items={[
          ["jon", "El jónico", `capítulo 10 · ${n("Jónico")} inscripciones`],
          ["ati", "El ático", `capítulo 11 · ${n("Ático")} inscripciones`],
          ["koi", "La koiné", `capítulo 12 · ${n("Koiné")} inscripciones`],
        ]} />
        <Sec title={`${g.cap}. El ${g.nombre === "koiné" ? "la koiné" : g.nombre}`.replace("El la", "La")}>
          <Stats>
            <Stat label="Inscripciones" value={String(g.total)} sub={`el ${pct(g.total, TOTAL_JAK)} % del grupo`} accent={g.color} />
            <Stat label="Corpus dialectal" value={`${pct(g.total)} %`} sub={`${g.total} de ${miles(TOTAL_CORPUS)}`} accent={C.terra} />
          </Stats>
          <Card><p style={PROSE}>{g.texto}</p></Card>
        </Sec>
        <Sec title="Adscripción" sub="Bases de la adscripción, grado de certeza y consultas excluidas">
          <AdscripcionTable data={g.adscripcion} color={g.color} />
        </Sec>
        <Sec title="Distribución cronológica">
          <Bars data={g.crono.map((d) => ({ ...d, color: colorSiglo(d.period) }))} indexBy="period" keys={["n"]} height={260} rotate={-35} />
        </Sec>
        <Sec title="Temática">
          <Temas data={g.temas} color={g.color} height={260} />
        </Sec>
        <Sec title="Las inscripciones" sub={`Los apartados de §4 del ${g.cap.toLowerCase()}: pulsa para desplegar cada uno`}>
          <Secciones items={g.secciones} color={g.color} />
        </Sec>
      </>}
    </ChapterLayout>
  );
}
