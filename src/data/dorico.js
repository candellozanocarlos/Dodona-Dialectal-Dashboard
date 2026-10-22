import { ALFABETO_COLORS, C, DIALECT_COLORS, ORO } from "../theme.js";

// Datos del capítulo sobre el dórico: subsecciones y doris severior (el dórico general, en doricoGeneral.js).

// En los textos, {{…}} marca las formas del corpus citadas de manera aislada
// (véase FORMAS_SIN_DIACRITICOS en chapters/Dorico.jsx).

// Color claro del severior para las menciones dudosas.
// Menciones restituidas o dudosas: el ocre (ORO) de los gráficos de la tesis.
export const MG_LIGHT = ORO;

// ── Subsecciones del dórico, en el orden de la tesis (cap. 4 dórico general, 5 noroccidental, 6 severior) ──
export const SUBSECCIONES_DOR = [
  { id: "general", label: "Dórico general", color: DIALECT_COLORS.dorico },
  { id: "noroccidental", label: "Dórico noroccidental", color: DIALECT_COLORS.doricoNO },
  { id: "severior", label: "Doris severior", color: C.severior },
];

// ── Clasificación de las 16 inscripciones según la solidez del testimonio (§4.1.2)
export const SEV_GROUPS = [
  { id: "a", n: 2, color: C.severiorDeep,
    name: "Vocalismo severior y dato explícito de procedencia",
    short: "Vocalismo + procedencia declarada",
    desc: "Son las dos únicas laminillas en las que el texto declara por sí mismo el origen del consultante, y en las que ese dato converge además con los criterios expuestos en §4.1.1. Constituyen el núcleo probatorio del conjunto, puesto que la inferencia dialectal queda respaldada por elementos ajenos al propio vocalismo: la tradición gráfica y la identidad o la procedencia de quien consulta. Comparten con las dos del grupo b) el alfabeto ítalo-dórico, pero solo aquí el texto nombra el lugar de origen." },
  { id: "b", n: 3, color: C.severior,
    name: "Vocalismo severior e indicio de área, sin procedencia declarada",
    short: "Vocalismo + indicio de área",
    desc: "El vocalismo concurre con algún rasgo que orienta hacia una región, pero ninguno identifica una ciudad ni permite atribuir la consulta a un consultante de origen conocido. Se trata, en dos casos, del signo Ͱ y de la onomástica del sur de Italia, y en el tercero, de un tratamiento fonético cuya distribución dialectal está muy restringida. La diferencia respecto del grupo anterior no es de grado en la seguridad del vocalismo, que aquí resulta igual de firme, sino en la naturaleza del indicio: apunta a un área y no a un lugar." },
  { id: "c", n: 7, color: "#b07a68",
    name: "Vocalismo diagnóstico frente a la Doris media, sin dato de procedencia",
    short: "Vocalismo diagnóstico, sin procedencia",
    desc: "La forma conservada procede de una contracción o del segundo alargamiento compensatorio, de manera que el vocalismo no solo descarta el mitior, sino también la variedad intermedia (§4.1.3). Ninguna ofrece, en cambio, dato alguno de procedencia, y los rasgos dóricos que las acompañan (la partícula κα, la conjunción αἰ, los compuestos con ποτί o la conservación de ᾱ heredada) son comunes al griego noroccidental y al dórico en general, por lo que refuerzan la coherencia dialectal del texto sin precisar su región." },
  { id: "d", n: 1, color: "#9a8e78",
    name: "Vocalismo compatible con el severior, pero no diagnóstico",
    short: "Compatible, no diagnóstico",
    desc: "El único testimonio del grupo ocupa una posición singular, hasta el punto de que su vocalismo apunta más a la variedad intermedia que a la Doris severior plena: la ⟨Η⟩ del primer alargamiento excluye el mitior, pero la ⟨Ε⟩ de la contracción admite una lectura arcaizante o de tipo Doris media. Figura entre las dieciséis porque su vocalismo descarta el mitior, no porque documente de forma positiva el severior." },
  { id: "e", n: 3, color: "#a89c8c",
    name: "Vocalismo severior dudoso",
    short: "Vocalismo dudoso",
    desc: "En estas tres laminillas la adscripción dialectal provoca dudas, ya sea porque la forma admite una explicación fonética alternativa, ya porque el argumento que la sostiene resulta circular." },
];

// Las 16 inscripciones. text = lectura de la edición; period = tramo cronológico;
// group = clasificación del capítulo (§4.1.2).
// crit = criterios de §4.1.1-4.1.3 para la matriz:
//   voc: "s" seguro / "d" dudoso · media: true si el vocalismo excluye la doris media
//   dor: otros rasgos dóricos · alf: alfabeto ítalo-dórico · proc: dato de procedencia
export const INSCRIPCIONES_SEV = [
  // ── a) ──
  { id: "1432", group: "a", date: "segunda mitad del s. IV a.C.", period: "2ª mit. s. IV",
    tema: "Oficio / Comercio", alf: "Magna Grecia / Sicilia",
    crit: { voc: "s", media: true, dor: false, alf: true, proc: "topónimo" },
    forms: ["ἐξ Ηεργετίω", "γαοργῆ(ν)", "Hορμημένωι"],
    text: "Ἀγελόχωι ἐξ \nΗεργετίω Hο-\nρμημένωι \nἄμεινόν ἐστι \nγαοργῆ(ν);",
    note: "Consulta de un tal Agéloco procedente de Hergetio, en el interior de Sicilia ({{ἐξ Ηεργετίω}}). Presenta el genitivo temático en -ω del propio topónimo y el infinitivo {{γαοργῆ(ν)}}, ambos con vocalismo severior, a los que se suma el participio {{Hορμημένωι}}; la aspiración se nota mediante el signo Ͱ, propio de la zona. La consulta reviste un interés particular para la dialectología siciliana, puesto que frente a la convergencia de corte mitior que suele postularse para la isla, sostenida sobre el vocalismo de las grandes fundaciones costeras, Agéloco escribe en severior pleno. Puede que Hergetio, una pequeña localidad del interior, fuera ajena a ese eje costero y mantuviera el vocalismo severior original.",
    refs: "Méndez Dosuna (2008: 64, 75; 2024: §4.1); Giannakis (2024b: 122); Mimbrera Olarte (2012: 101)" },
  { id: "LOD 5", group: "a", date: "ss. IV-III a.C.", period: "Transición IV–III",
    tema: "Desconocido / Sin clasificar", alf: "Magna Grecia / Sicilia",
    crit: { voc: "s", media: false, dor: false, alf: true, proc: "etnónimo" },
    forms: ["τὰ χη̣ρῶι"],
    text: "Θεό[ς]. Τύχαι ἀγαθᾶι. [Ἐπερωτῆι] \nhα πόλις - hα τῶν Ταραν[τίνων] \nτὸν Δία τὸν Ναῖον καὶ τ[ὰν Διώναν] \nπερὶ παντυχίας καὶ π[ερὶ χωρίων ?] \nτὰ χη̣ρῶι καὶ περὶ τῶν [---]",
    note: "Consulta pública de Tarento, que se identifica a sí misma ({{hα πόλις - hα τῶν Ταραν[τίνων]}}) e interroga a Zeus Naio y a Dione sobre su prosperidad y, si la restitución es correcta, sobre sus territorios. Presenta la forma {{τὰ χη̣ρῶι}} (át. χειροῖ), reveladora del mismo vocalismo, si bien conviene advertir que procede del primer alargamiento compensatorio y que, por sí sola, no bastaría para descartar la variedad intermedia (§4.1.3). La aspiración se nota también con Ͱ y la pi presenta el segundo trazo vertical acortado, característico de Laconia y de las colonias dorias del sur de Italia, en particular de Tarento. Vokotopoulou (1992: 78) la sitúa en el último cuarto del s. IV a.C.",
    refs: "Giannakis (2024b: 117); Vokotopoulou (1992: 78)" },
  // ── b) ──
  { id: "2367", group: "b", date: "segunda mitad del s. IV a.C.", period: "2ª mit. s. IV",
    tema: "Religión", alf: "Magna Grecia / Sicilia",
    crit: { voc: "s", media: true, dor: true, alf: true, proc: null, area: "Ͱ + onomástica" },
    forms: ["λαμψῶμαι", "ἐπιχηρῆι"],
    text: "θεὸς τύχα ἀγαθά· Ἐπίλυτος ἐπερωτῆι τὸν Δία τὸν Νάϊον \nκαὶ τὰν Διώναν τί κα ποιῶν εὐτ̣υχιοῖ καὶ τίνι θεῶν θύσας \nκαὶ πότερα τὰν τέχναν hὰν ἐπαιδεύθην ἐργάζωμαι ἢ ποτ' ἄλ-\nλο τι hορμάσω καὶ ἦ λαμψῶμαι αἴ κ̣' ἐπιχηρῆι καὶ πότερα τὰν \nΦαινομέναν γυναῖκα λάβω ἢ ἄλλαν καὶ πότερα καὶ δὴ \nλάβω ἢ ποτιμένω",
    note: "La consulta más extensa del conjunto es también la que reúne un repertorio más amplio, y la única cuyo indicio regional es a la vez onomástico y paleográfico. El vocalismo lo garantiza el futuro contracto {{λαμψῶμαι}}, al que se suma {{ἐπιχηρῆι}} (át. ἐπιχειρῇ), paralelo exacto del {{χη̣ρῶι}} tarentino. A ellos se añaden el subjuntivo {{hορμάσω}}, con ᾱ dórica frente al át. ὁρμήσω, la notación sistemática de la aspiración ({{hὰν}}, {{hορμάσω}}), la partícula modal {{κα}}, la conjunción {{αἰ}} y la falta de asibilación de {{ποτιμένω}}. Giannakis (2024b: 128) subraya que el signo empleado para la aspiración es el mismo Ͱ de la Magna Grecia, que la omega presenta trazo apuntado, de menor módulo y algo elevada respecto del resto de las letras, y que el antropónimo {{Ἐπίλυτος}} está bien documentado en el sur de Italia (LGPN IIIA, s.v.), de modo que la laminilla apunta a esa área por tres vías convergentes. Ninguna de ellas, sin embargo, precisa la ciudad, y el antropónimo, por sí solo, no basta para fijar el origen de quien lo lleva (§4.1.1). La consulta encadena dos preguntas sucesivas, procedimiento para el que se ha aducido el paralelo de Jenofonte en Delfos; la alternancia de tercera y primera persona (ἐπερωτῆι … ἐργάζωμαι … λάβω) la atribuye Nieto Izquierdo (2019: 109) a la intervención del personal del santuario.",
    refs: "Méndez Dosuna (2018b: 44; 2024: §3); Giannakis (2024b: 128)" },
  { id: "2409A", group: "b", date: "mediados del s. IV a.C.", period: "Med. s. IV",
    tema: "Dinero / Patrimonio", alf: "Magna Grecia / Sicilia",
    crit: { voc: "s", media: true, dor: true, alf: true, proc: null, area: "signo Ͱ" },
    forms: ["περὶ τῶ hιαρῶ ἀργυρίω τῶ", "ἦμεν"],
    text: "Ἄρχιππος ἐπερωτῆι τὸν Δία καὶ τὰν Διώναν \nπερὶ τῶ hιαρῶ ἀργυρίω τῶ τᾶς Ἀθαναίας πότερα \nκατθύσνηι πᾶν αἰ μέλλει βέντιον ἦμεν \nἢ οὔ",
    note: "Ofrece la secuencia {{περὶ τῶ hιαρῶ ἀργυρίω τῶ}}, con tres genitivos temáticos consecutivos, y el infinitivo {{ἦμεν}}. El texto presenta además la conjunción {{αἰ}} y {{βέντιον}}. El rasgo por el que la laminilla se incluye en este grupo es la notación de la aspiración con el signo Ͱ en {{hιαρῶ}}, el mismo que emplean I.Dodone DVC 1432, I.Dodone Lhôte 5 y I.Dodone DVC 2367, y que remite al repertorio gráfico de la Magna Grecia y Sicilia. Conviene precisar, con todo, que el peso probatorio del vocalismo descansa aquí sobre el genitivo temático, puesto que {{ἦμεν}} procede del primer alargamiento compensatorio y no descarta por sí mismo la variedad intermedia (§4.1.3).",
    refs: "Tselikas (2018: 256); Méndez Dosuna (2018a: 272); Chaniotis (2013: 20)" },
  { id: "3461B", group: "b", date: "primera mitad del s. IV a.C.", period: "1ª mit. s. IV",
    tema: "Religión", alf: "Reformado / Desconocido",
    crit: { voc: "s", media: true, dor: false, alf: false, proc: null, area: "*-ονσ- > ⟨Ω⟩" },
    forms: ["θύωσα"],
    text: "[ἀγ]αθὰ τύχα· Φιλα[- - - ἐπερ]-\n[ωτ]ῆ τὸν Δία καὶ [τὰν Διώναν τίνι κα] \n[θε]ῶν θύωσα ἢ [εὐχομένα ἄμεινον] \n[π]ράσσοι τὰν αὐ[- - -]",
    note: "Ofrece el participio {{θύωσα}} (át. θύουσα), con vocalismo severior resultante del segundo alargamiento compensatorio (&lt; *θύονσα), según ya vio Méndez Dosuna (2018b: 43). El indicio que la sitúa en este grupo no es gráfico ni onomástico, sino estrictamente fonético: el tratamiento en ⟨Ω⟩ de *-ονσ- interior se documenta solo en beocio, laconio y heracleota, frente al mantenimiento del grupo en cretense y argivo occidental y frente al diptongo del cirenaico (Del Barrio Vega 2006: 11). Descartado el beocio por el resto de los rasgos del texto, la forma orienta hacia el área laconia y sus colonias occidentales, que es precisamente la que perfila el conjunto del capítulo. Katsadima (2017: 132 nn. 14-15) subraya, además, que la consulta la formula una mujer, que se menciona a sí misma.",
    refs: "Méndez Dosuna (2018b: 43); Del Barrio Vega (2006: 11); Katsadima (2017: 132)" },
  // ── c) ──
  { id: "3554B", group: "c", date: "mediados del s. IV a.C.", period: "Med. s. IV",
    tema: "Amor / Familia / Matrimonio", alf: "Reformado / Desconocido",
    crit: { voc: "s", media: true, dor: true, alf: false, proc: null },
    forms: ["ἐσσῆται"],
    text: "θεὸς τύχα· ἐπερω̣[τ]ῆ Μενέστας \nΔία Νάϊον καὶ [Διώ]ναν ἦ ἐσσῆται \nαὐτῶι ἐρσεντέρα γενεὰ ἐκ τᾶς \nγυναι[κὸ]ς [τᾶς] νῦν ΚΑΙ̣[- - -]",
    note: "Presenta el futuro dórico {{ἐσσῆται}} y, como elemento confirmatorio, el adjetivo {{ἐρσεντέρα}}, que Tselikas (2018: 258) y Méndez Dosuna (2018b: 43) cuentan entre los rasgos dóricos, aunque ἔρσην se documenta también en jónico, de modo que prueba un ámbito no ático antes que específicamente dórico (át. ἄρσην). Nieto Izquierdo (2019: 106-108) la aduce como ejemplo de interrogativa total indirecta introducida por {{ἦ}}, rasgo sintáctico dórico, ya que en ático esta partícula se reserva para las interrogativas directas.",
    refs: "Méndez Dosuna (2018b: 43); Tselikas (2018: 258)" },
  { id: "1395A", group: "c", date: "primera mitad del s. IV a.C.", period: "1ª mit. s. IV",
    tema: "Esclavitud", alf: "Reformado / Desconocido",
    crit: { voc: "s", media: true, dor: true, alf: false, proc: null },
    forms: ["ἔσσωμαι"],
    text: "[Ζ]εῦ Νάϊε καὶ [Διώνα, ὁ δεῖνα] \nτίνα κα θεῶν ποτθέμεν[ο]ς̣ \nβέντιον εἴη καὶ ἦ ἐλεύθερ[ός] \nποκ' ἔσσωμαι;",
    note: "Consulta de un esclavo sobre a qué dios dirigirse y sobre su eventual manumisión. La forma {{ἔσσωμαι}}, que los editores consideraron problemática por esperarse el futuro dórico ἐσσέομαι, se explica sin dificultad como futuro dórico contracto, ἐσσῶμαι, con vocalismo severior. Méndez Dosuna (2018b: 43) no descarta, con todo, que la grafía se deba a un esclavo poco familiarizado con la notación de las vocales largas. El texto presenta además el adverbio {{ποκ'}}, la partícula modal {{κα}}, el compuesto {{ποτθέμεν[ο]ς̣}} y {{βέντιον}}.",
    refs: "Méndez Dosuna (2018b: 43)" },
  { id: "3842", group: "c", date: "primera mitad del s. III a.C.", period: "1ª mit. s. III",
    tema: "Amor / Familia / Matrimonio", alf: "Reformado / Desconocido",
    crit: { voc: "s", media: true, dor: true, alf: false, proc: null },
    forms: ["ἐσσῆ[ται]"],
    text: "[- - - ἐπερ]ωτῆι Καρίων τὸν Δία καὶ τὰν \n[Διώναν - - -]ΝΟΝ τὸν παῖ(δα) Αἰσχίναν \n[- - -]ΡΑΣ βέντιον α[ὐ]τῶι ἐσσῆ-\n[ται - - -] καὶ ε[ἰς τὸν λ]οιπὸν χρόνον",
    note: "El testimonio más reciente del conjunto repite la combinación de {{ἐσσῆ[ται]}} con {{βέντιον}}. Dado el estado fragmentario del texto y el carácter restituido de la forma diagnóstica, es la laminilla del grupo cuya caracterización descansa sobre una base más exigua.",
    refs: "" },
  { id: "429B", group: "c", date: "finales del s. V a.C.", period: "Finales s. V",
    tema: "Amor / Familia / Matrimonio", alf: "Reformado / Desconocido",
    crit: { voc: "s", media: true, dor: false, alf: false, proc: null },
    forms: ["τῶ Διονυσίω"],
    text: "[- - - λώϊο]ν καὶ ἄ̣μει[ν]ον [- - -]\n[- - - περὶ θυγ]ατρὸς τῶ Διονυσίω [- - -] \n[- - -] καὶ περὶ τᾶς γυναι[κὸς - - -]\n[- - - πο]τθεμένα γ[υ]ν̣αῖκα [- - -]",
    note: "Presenta el genitivo severior {{τῶ Διονυσίω}}, en una consulta sobre el matrimonio de una hija o sobre unas segundas nupcias. Es posible que aparezca el compuesto {{[πο]τθεμένα}}.",
    refs: "Laes (2020: 188 n. 35)" },
  { id: "975B", group: "c", date: "segunda mitad del s. IV a.C.", period: "2ª mit. s. IV",
    tema: "Viaje / Migración", alf: "Reformado / Desconocido",
    crit: { voc: "s", media: true, dor: false, alf: false, proc: null },
    forms: ["πὲρ τῶ πλ[ῶ]"],
    text: "θ̣εό̣ς· Ἐξαίνετ[ος ἐπερω]-\nτῆι τὸν Δία καὶ τὰ[ν Διώναν] \nπὲρ τῶ πλ[ῶ αἰ ἴδοι] \nτ[ὰ]ν̣ πατρωΐα[ν γᾶν πο]-\nκα",
    note: "Ofrece la secuencia severior {{πὲρ τῶ πλ[ῶ]}} en la consulta de un tal {{Ἐξαίνετ[ος]}}. El antropónimo está bien documentado en Sicilia, si bien no es exclusivo de esta zona. La forma diagnóstica depende, con todo, de una restitución.",
    refs: "Giannakis (2024b: 105)" },
  { id: "1985A", group: "c", date: "mediados del s. IV a.C.", period: "Med. s. IV",
    tema: "Dinero / Patrimonio", alf: "Reformado / Desconocido",
    crit: { voc: "s", media: true, dor: false, alf: false, proc: null },
    forms: ["πανπασίω"],
    text: "θεὸς τύχα· περὶ \nπανπασίω",
    note: "Contiene el genitivo {{πανπασίω}}, derivado de παμπασία, término de origen dórico muy frecuente en el corpus. La forma masculina o neutra está atestiguada por lo demás solo en I.Dodone Lhôte 116, donde aparece como {{πανπασί}} en alfabeto epicórico y no resulta, por tanto, diagnóstica.",
    refs: "Méndez Dosuna (2024: §4.1)" },
  { id: "2525A", group: "c", date: "finales del s. IV a.C.", period: "Finales s. IV",
    tema: "Vida / Salud", alf: "Reformado / Desconocido",
    crit: { voc: "s", media: true, dor: false, alf: false, proc: null },
    forms: ["περὶ τῶ σ̣ώματος"],
    text: "ἐρωτῆι δὲ κ̣αὶ περὶ τῶ σ̣ώματος \n[τί] κα ποιήσας hυγιαίνω",
    note: "Presenta el genitivo severior {{περὶ τῶ σ̣ώματος}}, junto con la partícula modal {{κα}} y la conservación de la aspiración en {{hυγιαίνω}}. Es destacable que el signo ⟨Η⟩ nota aquí tanto la aspiración como la vocal media larga abierta de {{ποιήσας}}. El inicio {{ἐρωτῆι δὲ καί}} indica que se trata de una consulta suplementaria.",
    refs: "Chaniotis (2016: §207)" },
  // ── d) ──
  { id: "3128", group: "d", date: "mediados del s. IV a.C.", period: "Med. s. IV",
    tema: "Oficio / Comercio", alf: "Reformado / Desconocido",
    crit: { voc: "s", media: false, dor: true, alf: false, proc: null },
    forms: ["ἦμεν", "ἐξενθε̅ν"], mediaCandidate: true,
    text: "[---]λ̣λωνίδαι \n[---]οι μέλλει βέντι \n[ον] καὶ ὄναιον ἦμεν \nγαοργέ̣οντι τὸν χῶρον \nτοῦτόν μοι τὸν κλα̅ρο\nν ἐξενθε̅ν",
    note: "Ocupa una posición singular en el conjunto, hasta el punto de que su vocalismo apunta más a la variedad intermedia que a la Doris severior plena. El texto ofrece el infinitivo {{ἦμεν}}, con ⟨Η⟩ procedente del primer alargamiento compensatorio, pero también {{ἐξενθε̅ν}} (át. ἐξελθεῖν) con ⟨Ε⟩, cuya vocal larga es resultado de contracción. Si bien es probable que la grafía ⟨Ε⟩ responda a una notación arcaizante indiferenciada, propia de un redactor que todavía no distingue con regularidad las vocales medias largas, también es posible que la alternancia sea significativa y refleje una distinción real en el sistema de quien escribe: una vocal media larga abierta /ɛː/ en {{ἦμεν}} y una cerrada /eː/, surgida de la contracción, en {{ἐξενθε̅ν}}. Esa distribución (vocal abierta en el primer alargamiento y cerrada en la contracción) es la que define la Doris media. Ruijgh (1984: 66-67), al explicar los dialectos de la Doris media, documenta otras inscripciones con el mismo patrón hacia el 350 a.C. (⟨Η⟩ para las vocales del primer alargamiento y ⟨Ε⟩ para las de contracción) y lo interpreta como el rastro de una fusión a medio completar: en las regiones de sustrato protoaqueo, entre ellas Laconia, Mesenia y Creta, las vocales cerradas del primer alargamiento se fundieron pronto con η y ω, mientras que las nacidas de la contracción de εε y οο, posterior y común a todo el dórico, no se fundieron con ellas hasta una segunda oleada, más tardía; los dialectos que la completaron alcanzaron el severior y los que no permanecieron en el estadio media. En consecuencia, la ⟨Η⟩ de {{ἦμεν}} excluye el mitior, pero la adscripción a la Doris severior plena no puede sostenerse: la laminilla documentaría un estadio anterior al de las demás del capítulo y es el mejor candidato del corpus a la variedad intermedia. El texto presenta además {{βέντι[ον]}} (λτ &gt; ντ) y el propio {{ἐξενθε̅ν}} (λθ &gt; νθ), rasgos comunes al griego noroccidental y al dórico en general.",
    refs: "Ruijgh (1984: 66-67); Tselikas (2018: 257)" },
  // ── e) ──
  { id: "212B", group: "e", date: "mediados del s. IV a.C.", period: "Med. s. IV",
    tema: "Desconocido / Sin clasificar", alf: "Reformado / Desconocido",
    crit: { voc: "d", media: true, dor: false, alf: false, proc: null },
    forms: ["[ἐ]σ̣ῆτ[αι]"],
    text: "[- - - - - - - - - - - -]\nκαὶ Ζεῦ Δωδων[αῖε] \nἈρτέμων κυν[ῆται - - - λώϊ]-\nον καὶ ἄμειν[ον - - -]\n[.] [ἐ]σ̣ῆτ[αι]",
    note: "La forma {{[ἐ]σ̣ῆτ[αι]}} podría interpretarse también como el jónico σῆτες (= dórico σᾶτες), lo que remitiría a un consultante de otro ámbito dialectal.",
    refs: "DGE s.v. σῆτες" },
  { id: "268A", group: "e", date: "finales del s. V o principios del s. IV a.C.", period: "Transición V–IV",
    tema: "Religión", alf: "Reformado / Desconocido", autopsia: 2024,
    crit: { voc: "d", media: true, dor: false, alf: false, proc: null },
    forms: ["[τ]ῶ σαμείω"],
    text: "[ed. I.Dodone DVC]\n[θεὸς τύχα• ἐρωτ]ε͂ι ἁ πόλις \n[τῶν Δωδωνα]ίων τὸν Δί-\n[α τὸν Νᾶο]ν καὶ τὰν Δι-\n[ώναν περὶ τ]ῶ σαμείω τῷ \n[- - -]γενομένω τί \n[κα εἴη λώϊ]ον καὶ ἂμει-\n[νον - - -] ἢ̣ μηδὲν \n[- - - γέν]οιτο"
      + "\n[Lhôte y Carbon apud CIOD (2022)]\n[θεός · ἐρωτ]εῖ ἁ πόλις \n[ἁ Ταραντί]νων (?) τὸν Δί-\n[α τὸν Ναῖο]ν καὶ τὰν Δι-\n[ώναν πὲρ τ]ῶ σαμείω τῷ \n[ἐν οὐρανῶι] (?) γενομένω τί \n[κα εἴη λῶι]ον καὶ ἄμει-\n[νον ἢ πράξα]ι (?) μηδὲν \n[λῶιον γέν]οιτο (?)"
      + "\n[Petrovic apud DOL, ll. 1-2]\n… ἁ πόλις \n[(ἁ) τῶν - - -]Ι̣ΩΝ …",
    note: "Es el caso más instructivo del grupo y su interés excede lo vocálico. La secuencia {{[τ]ῶ σαμείω}}, de lectura confirmada en la autopsia llevada a cabo en la Eforía de Antigüedades de Ioánina en 2024, parece ofrecer dos genitivos de vocalismo severior. La forma σαμεῖον está atestiguada únicamente en Mesenia (IG V¹ 1390; IG V¹ 1430), lo que refuerza la interpretación severior y apunta, en principio, a un ámbito peloponesio, si bien el poblamiento mesenio de Regio y Mesina impide descartar un origen italiano. El problema reside en la restitución del sujeto de la consulta: los editores reconstruyen {{ἁ πόλις [τῶν Δωδωνα]ίων}}, lo que convertiría el texto en una consulta de la propia comunidad del santuario, mientras que Carbon y Lhôte apud CIOD, apoyándose en el carácter severior de {{τῶ σαμείω}}, restituyen {{[Ταραντί]νων}} y atribuyen la consulta a los tarentinos. Petrovic, que también la clasifica como Doris severior, observa que la restitución de los editores excede el espacio disponible en la laguna y que el trazo vertical leído como iota podría pertenecer a una nu o a una eta, por lo que propone {{ἁ πόλις [(ἁ) τῶν - - -]Ι̣ΩΝ}} sin pronunciarse sobre el etnónimo. La cuestión permanece abierta, pero cabe recordar que conservamos una consulta de los tarentinos (I.Dodone Lhôte 5) con una formulación semejante.",
    refs: "Chapinal-Heras (2021: 46 n. 315); Petrovic apud DOL" },
  { id: "3354A", group: "e", date: "finales del s. V a.C.", period: "Finales s. V",
    tema: "Esclavitud", alf: "Reformado / Desconocido", autopsia: 2024,
    crit: { voc: "d", media: true, dor: false, alf: false, proc: null },
    forms: ["Παρμενίσκω"],
    text: "[θε]ός· Αὐτάριον Παρμενίσκω ἐ̣κ̣ Τάτα[ς - - -] \n[.]Ν Παρεσίναν Ζ̣ο̅ΐλαν [. .]ΡΕΟΙ Παρμε[- - -] \nΜ[. . . .]ΟΙ[. . .]ΝΟΝ[. . . 6 . . .] ἐρ̣γάζεσθαι [. .][- - -]",
    note: "Presenta {{Αὐτάριον Παρμενίσκω}}, donde {{Παρμενίσκω}} podría ser un genitivo patronímico con vocalismo severior. Lhôte aduce, sin embargo, que la inscripción, que él data hacia el 400-375 a.C., no muestra un vocalismo severior, sino que se trata de un lapsus de escritura: el texto pertenece al período de transición alfabética y el consultante vacila entre ⟨Ο⟩, ⟨ΟΥ⟩ y ⟨Ω⟩, mientras que emplea la eta con corrección. La autopsia llevada a cabo en la Eforía de Antigüedades de Ioánina confirma la irregularidad del ductus, con letras trazadas de forma muy desigual, lo que apunta a un redactor poco versado en la escritura y sustenta la propuesta de Lhôte.",
    refs: "Lhôte (2017a: 153); Meyer (2017: 151-154)" },
];
export const SEV_BY_ID = Object.fromEntries(INSCRIPCIONES_SEV.map(i => [i.id, i]));

// Cronología (§3; suma: TOTAL_SEV).
export const CHRONO_ORDER_SEV = ["Finales s. V", "Transición V–IV", "1ª mit. s. IV", "Med. s. IV",
  "2ª mit. s. IV", "Finales s. IV", "Transición IV–III", "1ª mit. s. III"];
export const CHRONO_DETAIL_SEV = CHRONO_ORDER_SEV.map(period => {
  const row = { period, n: 0, a: 0, b: 0, c: 0, d: 0, e: 0 };
  INSCRIPCIONES_SEV.filter(i => i.period === period).forEach(i => { row.n += 1; row[i.group] += 1; });
  return row;
});

// Temática (§3; suma: TOTAL_SEV).
export const THEMES_SEV = Object.entries(INSCRIPCIONES_SEV.reduce((acc, i) => {
  acc[i.tema] = (acc[i.tema] || 0) + 1; return acc;
}, {})).map(([name, value]) => ({ name, value }))
  .sort((a, b) => b.value - a.value || a.name.localeCompare(b.name));

// Alfabeto (§3; suma: TOTAL_SEV).
export const ALF_SEV_PIE = [
  { id: "milesio", label: "Reformado o no identificado", value: 12, color: C.milesio },
  { id: "italo", label: "Magna Grecia / Sicilia (I.Dodone DVC 1432, 2367, 2409A · I.Dodone Lhôte 5)", value: 4, color: ALFABETO_COLORS.magnaGrecia },
];

// ── Contexto histórico (§2) ──────────────────────────────────
export const LITERARY_SOURCES_SEV = [
  { author: "Cicerón (Div. I, 1, 3)", type: "Filosofía, s. I a.C.",
    desc: "Testimonio de carácter general: Cicerón se pregunta de forma retórica qué colonia envió Grecia a Eolia, Jonia, Asia, Sicilia o Italia sin consultar el oráculo pitio, el dodoneo o el de Amón." },
  { author: "Dionisio de Halicarnaso (Ant. Rom. I, 19, 2-3)", type: "Historiografía, s. I a.C.",
    desc: "Un oráculo en verso atribuido a Dodona ordena a los pelasgos partir en busca de la tierra saturnia de los sículos y de la Cótila de los aborígenes, «donde flota una isla». Un tal Lucio Malio afirmaba haber visto el texto grabado en caracteres antiguos sobre uno de los trípodes del recinto de Zeus. Se trata de una construcción etiológica al servicio de la prehistoria griega de Roma, cuyo destino es la Sabina y el Lacio: documenta la vinculación de Dodona con Italia en general, no con la Magna Grecia en sentido estricto." },
  { author: "Dionisio de Halicarnaso (Ant. Rom. I, 50, 4; 51, 1)", type: "Historiografía, s. I a.C.",
    desc: "Eneas remonta con los suyos desde el golfo de Ambracia hasta Dodona para consultar el oráculo antes de pasar a Italia, en un trayecto de dos jornadas que se ajusta con notable precisión a los cerca de 80 km que separan ambos puntos (Chapinal-Heras 2021: 136 y 165-166)." },
  { author: "Estrabón (VI, 1, 5); Livio (VIII, 24, 1)", type: "Geografía e historiografía",
    desc: "Antes de su campaña itálica, Alejandro I el Moloso recibe en Dodona la advertencia de guardarse de Pandosia y del río Aqueronte. El rey entiende que se trata de los homónimos epirotas y halla la muerte junto a la Pandosia y el Aqueronte de la península itálica." },
  { author: "Pausanias (I, 12, 5)", type: "Periégesis, s. II d.C.",
    desc: "Al narrar la derrota naval de Pirro ante los cartagineses en Sicilia en el 276 a.C., retoma el pasaje homérico sobre la impericia naval de los epirotas (Hom. <i>Od.</i> XI, 122)." },
];

export const POLITICAL_LINKS_SEV = [
  { event: "Dionisio I y Alcetas I", date: "comienzos s. IV a.C.", agent: "Siracusa · casa molosa",
    desc: "Dionisio I de Siracusa acoge en el exilio al moloso Alcetas I, hijo de Táripas, y con su ayuda establece una alianza con los ilirios que permite su restauración en el trono. Se teje así un vínculo entre el tirano siracusano y la casa que controlaba el santuario (Anello 1996: 407; Castiglioni 2016: 125)." },
  { event: "Alejandro I el Moloso en Italia", date: "2ª mitad s. IV a.C.", agent: "Eácidas · Tarento",
    desc: "Lleva su ejército a Italia a instancias de Tarento y firma alianzas con metapontinos, peucetios y romanos (Iust. XII, 2, 12; los Poediculi son los peucetios de Apulia, no los habitantes de Posidonia-Pesto). La dinastía eácida orienta hacia Occidente la misma política que cultivó con Tesalia." },
  { event: "Expediciones de Pirro I", date: "280 y 278 a.C.", agent: "Eácidas · Tarento",
    desc: "Expedición itálica en el 280 a.C. y desastrosa campaña siciliana en el 278 a.C." },
  { event: "Escudo de I.Molossie 48", date: "280 a.C. (prob.)", agent: "Pirro, epirotas y tarentinos",
    desc: "Escudo romano de bronce dedicado a Zeus Naio con la inscripción [Βασιλεὺ]ς Πύρρο[ς καὶ] Ἠπειρ[ῶ]ται καὶ Τ[αραντῖνοι] ἀπὸ Ῥωμαίων καὶ [τῶν] συμμάχων, botín que con probabilidad procede de la batalla de Heraclea (Lévêque 1957: 331). Se desconoce su lugar exacto de hallazgo (Chapinal-Heras 2021: 82)." },
  { event: "Proxenía a los acragantinos", date: "ss. IV-III a.C.", agent: "Molosos · Acragas",
    desc: "Copia de un documento (I.Molossie 37) por el que, tras la llegada de tres habitantes de Acragas, los molosos conceden la proxenía a todos los acragantinos. El vínculo con el Occidente dórico se formaliza también en el plano diplomático." },
];

// ── Topónimos y etnónimos occidentales (§2) ──────────────────
// 14 nombres en 24 menciones. off = desplazamiento de la etiqueta en grados.
// metro = filiación colonial (§3):
//   severior  = área del rasgo (laconias Tarento y Heraclea; aqueas Crotona,
//               Metaponto y Síbaris; locria Hiponio)
//   mitior    = Siracusa y, en general, Sicilia
//   calcidica = Regio y Mesina (colonos calcídicos y después refugiados mesenios)
//   panhelenica = Turios
export const TOPONYMS_SEV = [
  { id: "heraclea", metro: "severior", name: "Heraclea", greek: "Ἡράκλεια", lon: 16.670, lat: 40.210, off: [-0.26, 0.04],
    filiacion: "Colonia tarentina (Lucania)",
    note: "Solo I.Dodone DVC 3111 se refiere con seguridad a la Heraclea de Lucania (Lombardo 2016: 138). La identificación de I.Dodone Lhôte 6A y de I.Dodone DVC 3079A con esa misma ciudad es probable, aunque no segura, dado el gran número de centros homónimos (Giannakis 2024b: 119-120). Quedan fuera del recuento la restitución {{[ἐ]ν hη[ρακλείαι]}} de I.Dodone DVC 160A y los testimonios con Ἡρακ- de I.Dodone DVC 515A, 517B y 1852B, demasiado fragmentarios (Giannakis 2024b: 119).",
    mentions: [
      { ref: "3111", form: "ἐξ Ἡρακληΐας", date: "mediados del s. IV a.C.", type: "topónimo", certain: true },
      { ref: "LOD 6A", form: "περὶ Ἡρακλέας … Ἡρακλεο̣τᾶν", date: "finales del s. V a.C.", type: "etnónimo", certain: true },
      { ref: "3079A", form: "[Ἡρ]ακληΐων", date: "primera mitad del s. IV a.C.", type: "etnónimo", certain: true },
    ] },
  { id: "crotona", metro: "severior", name: "Crotona", greek: "Κρότων", lon: 17.127, lat: 39.081, off: [0.18, -0.16],
    filiacion: "Fundación aquea",
    note: "Las menciones de I.Dodone DVC 24A y 26B se encuentran en la misma laminilla y proceden de la misma mano. Chaniotis (2013: 19) entiende 26B como etiqueta de 24A y, más tarde (2017: 58), como una de las dos respuestas alternativas de un procedimiento cleromántico. Johnston (2021: 114) atribuye la escritura de I.Dodone DVC 319 al alfabeto aqueo.",
    mentions: [
      { ref: "24A", form: "ἰς Κρ(ό)το̅να", date: "finales del s. V a.C.", type: "topónimo", certain: true },
      { ref: "26B", form: "ἐν Κρότο̅νι", date: "finales del s. V a.C.", type: "topónimo", certain: true },
      { ref: "319", form: "[Κ]ρ̣ότο̅νι", date: "mediados del s. V a.C.", type: "topónimo", certain: true },
    ] },
  { id: "turios", metro: "panhelenica", name: "Turios", greek: "Θούριοι", lon: 16.440, lat: 39.760, off: [-0.24, 0.12],
    filiacion: "Fundación panhelénica",
    note: "La {{Θουρία}} de I.Dodone DVC 2554B podría tratarse de la colonia mesenia de ese nombre, por lo que se cuenta como dudosa.",
    mentions: [
      { ref: "959A", form: "τῶι Θουρίωι", date: "segunda mitad del s. IV a.C.", type: "etnónimo", certain: true },
      { ref: "967B", form: "Θούριον", date: "mediados del s. V a.C.", type: "topónimo", certain: true },
      { ref: "2554B", form: "ἐν τᾶι Θ[ου]ρία", date: "mediados del s. IV a.C.", type: "topónimo", certain: false },
    ] },
  { id: "tarento", metro: "severior", name: "Tarento", greek: "Τάρας", lon: 17.247, lat: 40.464, off: [0.18, 0.10],
    filiacion: "Colonia laconia",
    note: "Los tarentinos figuran en la consulta pública de I.Dodone Lhôte 5, una de las dos inscripciones severior con dato explícito de procedencia. En I.Dodone DVC 3111, Nicómaco pregunta si le irá mejor trasladándose de Heraclea a Tarento, un traslado de una colonia a otra.",
    mentions: [
      { ref: "LOD 5", form: "hα τῶν Ταραν[τίνων]", date: "ss. IV-III a.C.", type: "etnónimo", certain: true },
      { ref: "3111", form: "ἐς Τ[ά]ραντα", date: "mediados del s. IV a.C.", type: "topónimo", certain: true },
    ] },
  { id: "siracusa", metro: "mitior", name: "Siracusa", greek: "Συράκουσαι", lon: 15.287, lat: 37.076, off: [0.18, -0.14],
    filiacion: "Colonia corintia (Doris mitior)",
    note: "Siracusa, de colonización corintia, se mantuvo en el ámbito del mitior, como Sicilia en general. La excepción del corpus es {{ἐξ Ηεργετίω}} de I.Dodone DVC 1432, localidad del interior ajena al eje costero.",
    mentions: [
      { ref: "280A", form: "ἐς Συρακό[σ]ας", date: "s. V a.C.", type: "topónimo", certain: true },
      { ref: "LOD 103A", form: "εἰς Συρακόσας", date: "principios del s. IV a.C.", type: "topónimo", certain: true },
    ] },
  { id: "mesina", metro: "calcidica", name: "Mesina", greek: "Μεσσήνη", lon: 15.554, lat: 38.194, off: [-0.24, 0.18],
    filiacion: "Colonia calcídica, repoblada con mesenios",
    note: "D'Ercole (2019: 15, 16 n. 65) interpreta la {{Μεσσήνην̣}} de I.Dodone Lhôte 106 como la Mesenia peloponesia, en una consulta colectiva de ambraciotas sobre un traslado por motivos de trabajo; Chapinal-Heras (2021: 183) la relaciona con I.Dodone DVC 3496 y la identifica con Mesina.",
    mentions: [
      { ref: "LOD 106", form: "ἐς Μεσσήνην̣", date: "s. IV a.C.", type: "topónimo", certain: false },
      { ref: "3496", form: "ἐν Μ[- - -]", date: "mediados del s. IV a.C.", type: "topónimo", certain: false },
    ] },
  { id: "regio", metro: "calcidica", name: "Regio", greek: "Ῥήγιον", lon: 15.661, lat: 38.111, off: [-0.24, -0.24],
    filiacion: "Colonia calcídica, repoblada con mesenios",
    note: "En I.Dodone DVC 2766A los editores restituyen el antropónimo {{Ῥεγῖνος}} y no el etnónimo colectivo que sigue Lhôte. En I.Dodone DVC 3256 (= I.Dodone Lhôte 155) los editores leen el antropónimo {{Αὐτοκρ[- - -]}}, mientras que Lhôte restituye {{Αὐτοὶ Ῥ[εγῖνοι]}}; fue esta laminilla la que sirvió a Lhôte para restituir el etnónimo de 2766A, de modo que el argumento es en buena medida reversible (Giannakis 2024b: 119). Rizzo (2017: 730) subraya que la identificación descansa solo en la forma de la rho inicial y Moustakis (2020: 186 n. 47) la considera muy incierta; Johnston (2021: 113) reconoce en 2766A a un colono eubeo, coherente con el origen calcídico de Regio. Ambas se cuentan entre las menciones dudosas.",
    mentions: [
      { ref: "2766A", form: "Ῥε̅γῖν̣[οι]", date: "primera mitad del s. V a.C.", type: "etnónimo", certain: false },
      { ref: "3256", form: "Αὐτοὶ Ῥ[ε̅γῖνοι] (rest.)", date: "mediados del s. V a.C.", type: "etnónimo", certain: false },
    ] },
  { id: "metaponto", metro: "severior", name: "Metaponto", greek: "Μεταπόντιον", lon: 16.818, lat: 40.382, off: [0.20, -0.22],
    filiacion: "Fundación aquea",
    note: "Los editores sugieren que el consultante, el metapontino Arquias, explicita su procedencia por la lejanía de su patria respecto del oráculo.",
    mentions: [
      { ref: "2333B", form: "Μεταποντῖνος", date: "segunda mitad del s. IV a.C.", type: "etnónimo", certain: true },
    ] },
  { id: "sibaris", metro: "severior", name: "Síbaris", greek: "Σύβαρις", lon: 16.560, lat: 39.660, off: [0.20, -0.20],
    filiacion: "Fundación aquea",
    note: "Consulta sobre un viaje a Síbaris, en el grupo de las preguntas de navegación y traslado.",
    mentions: [
      { ref: "LOD 133A", form: "ἐ(ς) Σ[ύ]βαριν", date: "mediados del s. V a.C.", type: "topónimo", certain: true },
    ] },
  { id: "hiponio", metro: "severior", name: "Hiponio", greek: "Ἱππώνιον", lon: 16.100, lat: 38.676, off: [0.18, -0.14],
    filiacion: "Colonia locria",
    note: "Identificación de Lhôte y Giannakis (2024b: 114), actual Vibo Valentia.",
    mentions: [
      { ref: "2168", form: "Hιππο̅νίο̅[ι]", date: "mediados del s. V a.C.", type: "topónimo", certain: true },
    ] },
  { id: "hergetio", name: "Hergetio", greek: "Ἐργέτιον", lon: 14.640, lat: 37.239, off: [0.18, 0.10],
    filiacion: "Localidad del interior de Sicilia",
    note: "Giannakis (2024b: 122) la sitúa en la parte sudoriental de la isla, al norte de Hibla Herea (actual Ragusa). La grafía con aspiración inicial de la laminilla confirma las formas Sergétion o Sergention de la tradición literaria (Vokotopoulou 1992: 87 n. 20). Es la única mención toponímica de una inscripción severior.",
    mentions: [
      { ref: "1432", form: "ἐξ Ηεργετίω", date: "segunda mitad del s. IV a.C.", type: "topónimo", certain: true },
    ] },
  { id: "bari", name: "Bari", greek: "Βάριον", lon: 16.872, lat: 41.117, off: [0.18, 0.10],
    filiacion: "",
    note: "El {{Βαρί[ωι - - -]}} de I.Dodone DVC 562B podría corresponder con la actual Bari (Giannakis 2024b: 110).",
    mentions: [
      { ref: "562B", form: "ἐν Βαρί[ωι]", date: "segunda mitad del s. IV a.C.", type: "topónimo", certain: false },
    ] },
  { id: "sicilia", name: "Sicilia", greek: "Σικελία", lon: 14.05, lat: 37.55, off: [0, -0.288], region: true,
    filiacion: "",
    note: "Pregunta sobre la conveniencia de navegar a Sicilia.",
    mentions: [
      { ref: "4154B", form: "ἐς Σικ[ελίαν]", date: "ss. V-IV a.C.", type: "topónimo", certain: true },
    ] },
  { id: "italia", name: "Italia", greek: "Ἰταλία", lon: 15.70, lat: 41.30, off: [0, -0.288], region: true,
    filiacion: "",
    note: "Lectura mucho más dudosa que las restantes.",
    mentions: [
      { ref: "LOD 133Ba", form: "Ἰταλῶι", date: "s. IV a.C.", type: "etnónimo", certain: false },
    ] },
].map(t => ({
  ...t,
  seg: t.mentions.filter(m => m.certain).length,
  dud: t.mentions.filter(m => !m.certain).length,
  total: t.mentions.length,
}));

// Filas planas para la tabla de menciones y el gráfico apilado.
export const FILIACION_SEV = (() => {
  const con = TOPONYMS_SEV.filter(t => t.metro);
  const n = (m) => con.filter(t => t.metro === m).reduce((acc, t) => acc + t.total, 0);
  return { total: con.reduce((acc, t) => acc + t.total, 0), severior: n("severior"), mitior: n("mitior"),
    calcidica: n("calcidica"), panhelenica: n("panhelenica") };
})();
export const TOPONYM_MENTIONS_SEV = TOPONYMS_SEV.flatMap(t => t.mentions.map(m => ({ ...m, place: t.name })));
export const TOPONYM_BARS_SEV = TOPONYMS_SEV.slice()
  .sort((a, b) => b.total - a.total || b.seg - a.seg)
  .map(t => ({ name: t.name, seguras: t.seg, dudosas: t.dud }));

// Menciones descartadas del recuento (§2).
export const TOPONYMS_EXCLUDED_SEV = [
  { ref: "3134A", form: "Ἡρακλείος", why: "Antropónimo, tras la corrección de los editores a la interpretación de I.Dodone Lhôte 17 (Lombardo 2016: 141)." },
  { ref: "746A", form: "Ἡρα̣κλ̣[έα]", why: "Antropónimo." },
  { ref: "3003A", form: "[Ἡρ]άκλεα", why: "Antropónimo." },
  { ref: "806B", form: "Ἡ̣ρ̣ακλ̣ῆ̣[ι]", why: "Teónimo." },
  { ref: "160A", form: "[ἐ]ν hη[ρακλείαι]", why: "Restitución harto aventurada de ΝⱵΗ, sin ningún otro elemento que apunte en esta dirección." },
  { ref: "LOD 126", form: "Ὀριγγαῖοι", why: "Tribu no documentada, cuya existencia pone en duda el propio editor; el cierre εο > ιω de ἐπαιτίωντι es esperable también en epirota (Méndez Dosuna 2008: 76)." },
];

// ── Vocalismo (§4.1.1-4.1.3) ─────────────────────────────────
// Tratamiento de las vocales medias largas en los tres tipos de vocalismo dórico.
export const VOWEL_SYSTEMS_SEV = [
  { proc: "Vocales largas heredadas (/ɛː/, /ɔː/)", sev: "open", media: "open", mit: "open" },
  { proc: "Primer alargamiento compensatorio", sev: "open", media: "open", mit: "closed" },
  { proc: "Contracciones isovocálicas", sev: "open", media: "closed", mit: "closed" },
  { proc: "Segundo alargamiento compensatorio", sev: "open", media: "closed", mit: "closed" },
  { proc: "Tercer alargamiento compensatorio", sev: "open", media: "closed", mit: "closed" },
];
export const VOWEL_VARIETIES_SEV = [
  { id: "sev", name: "Doris severior", color: C.severior,
    who: "Laconia y Mesenia, Cirene, la Élide, el cretense de época clásica y, en Occidente, Tarento, Heraclea de Lucania, Locros Epicefirios y las fundaciones aqueas de Crotona, Metaponto, Síbaris y Posidonia." },
  { id: "media", name: "Doris media", color: C.amber,
    who: "Argivo occidental, tereo, rodio, Cos y otras islas dorias del sureste del Egeo, ciudades dorias del suroeste de Asia Menor, panfilio y quizá chipriota (Del Barrio Vega 2006: 20)." },
  { id: "mit", name: "Doris mitior", color: C.green,
    who: "El dórico sensu lato y el noroccidental del corpus, así como Siracusa y, en general, Sicilia." },
];

// Formas del corpus frente a la doris media (§4.1.3).
// diag = "no" (primer alargamiento: la doris media también tiene ⟨Η⟩/⟨Ω⟩),
//        "si" (contracción o segundo alargamiento: la doris media tendría ⟨ΕΙ⟩/⟨ΟΥ⟩)
export const DIAGNOSTIC_FORMS_SEV = [
  { form: "ἦμεν", ids: ["2409A", "3128"], proc: "Primer alargamiento", diag: "no" },
  { form: "τὰ χη̣ρῶι", ids: ["LOD 5"], proc: "Primer alargamiento", diag: "no" },
  { form: "ἐπιχηρῆι", ids: ["2367"], proc: "Primer alargamiento", diag: "no" },
  { form: "τῶ Διονυσίω", ids: ["429B"], proc: "Contracción (gen. temático)", diag: "si" },
  { form: "πὲρ τῶ πλ[ῶ]", ids: ["975B"], proc: "Contracción (gen. temático)", diag: "si" },
  { form: "περὶ τῶ hιαρῶ ἀργυρίω τῶ", ids: ["2409A"], proc: "Contracción (gen. temático)", diag: "si" },
  { form: "πανπασίω", ids: ["1985A"], proc: "Contracción (gen. temático)", diag: "si" },
  { form: "περὶ τῶ σ̣ώματος", ids: ["2525A"], proc: "Contracción (gen. temático)", diag: "si" },
  { form: "ἐξ Ηεργετίω", ids: ["1432"], proc: "Contracción (gen. temático)", diag: "si" },
  { form: "γαοργῆ(ν)", ids: ["1432"], proc: "Contracción (infinitivo)", diag: "si" },
  { form: "Hορμημένωι", ids: ["1432"], proc: "Contracción (participio)", diag: "si" },
  { form: "ἔσσωμαι", ids: ["1395A"], proc: "Contracción (futuro dórico)", diag: "si" },
  { form: "ἐσσῆται / ἐσσῆ[ται]", ids: ["3554B", "3842"], proc: "Contracción (futuro dórico)", diag: "si" },
  { form: "λαμψῶμαι", ids: ["2367"], proc: "Contracción (futuro dórico)", diag: "si" },
  { form: "θύωσα", ids: ["3461B"], proc: "Segundo alargamiento", diag: "si" },
  { form: "[ἐ]σ̣ῆτ[αι]", ids: ["212B"], proc: "Contracción (futuro), lectura dudosa", diag: "si", doubtful: true },
  { form: "[τ]ῶ σαμείω", ids: ["268A"], proc: "Contracción (gen. temático), lectura dudosa", diag: "si", doubtful: true },
  { form: "Παρμενίσκω", ids: ["3354A"], proc: "Contracción (gen. temático), lectura dudosa", diag: "si", doubtful: true },
];
// Inscripciones cuyo vocalismo no permite descartar la doris media (§4.1.3).
export const SEV_NO_EXCLUYE_MEDIA = INSCRIPCIONES_SEV.filter(i => !i.crit.media).map(i => i.id); // I.Dodone DVC 3128 e I.Dodone Lhôte 5
// Reparto por grupo probatorio (§4.1.2) para el gráfico de barras.
export const GROUP_BARS_SEV = SEV_GROUPS.map(g => ({
  name: `${g.id}) ${g.short}`, id: g.id, value: g.n, color: g.color,
}));

// Casos ajenos al capítulo pese a su apariencia o procedencia occidental.
export const EXCLUDED_SEV = [
  { ref: "1012A", date: "finales del s. V a.C.", tag: "Vocalismo severior ilusorio",
    text: "περὶ τῶ ἀνδριάντος \nτῶ ἐκ τῶ ἱερῶ τῶ Ἀρτέ-\nμιδως̣",
    desc: "La ⟨Ω⟩ de {{τῶ ἱερῶ}} reaparece en {{Ἀρτέμιδως}}, donde representa sin ambigüedad una /o/ breve: el redactor emplea el grafema de forma indiferenciada para ambos valores. A ello se añaden el genitivo Ἀρτέμιδως y la raíz ἱερ-, que apuntan a un ámbito jónico. Méndez Dosuna (2018a: 277) propone un origen en Delos, Paros o Tasos, donde ⟨Ω⟩ y ⟨Ο⟩ se intercambian en algunas inscripciones arcaicas o un error de un consultante poco familiarizado con el alfabeto jónico reformado; Crespo y Giannakis (2019: 50 y 53 n. 1) llegan a una conclusión equivalente." },
  { ref: "90", date: "finales del s. IV a.C.", tag: "Escritura ítalo-dórica, vocalismo mitior",
    text: "[ὁ δεῖνα ἐπερωτῆι] τὸν Δία περὶ τᾶς θυσ̣-\n[ίας - - -]Σ τίνι κα τρόπω hέ̅ρο̅ι \n[θύων - - -]ΝΟΤΑ δύναμαι hευρεῖ(ν)",
    desc: "Emplea el signo Ͱ y conserva la grafía arcaica {{hέ̅ρο̅ι}}, pero presenta {{hευρεῖ(ν)}} con el dígrafo ⟨ΕΙ⟩, ajeno al severior." },
  { ref: "160A", date: "finales del s. V a.C.", tag: "Escritura ítalo-dórica, sin forma diagnóstica",
    text: "[ὁ δεῖνα ἐπερωτ]ᾶι τίνι κα θε[ῶν θύων - - -] \n[- - - h]ωραῖοι hυε̣το̣[ὶ - - -]\n[- - -] κ̣αρποὶ ἔ[σσονται - - -]\n[- - -]ΝⱵΗ",
    desc: "El empleo simultáneo de eta, omega y del signo específico de aspiración apunta a la misma área, pero ninguna de las formas conservadas resulta diagnóstica." },
  { ref: "1363A", date: "primera mitad del s. IV a.C.", tag: "Infinitivo en -ῆν, explicable por el noroccidental",
    text: "ἰς Καρχαδόνα κα τυγ[χ]άνοιμι κα(τ)α-\nπλῆν ἐ[κ]εῖ καὶ κωεκ[ῶ]ν ἐμπο[ρευόμε]-\nνον [ἐπὶ] σωτηρίαι αὐ̣[τ]οῦ̣ καὶ να[ὸς] \nκαὶ χρ[η]μάτων;",
    desc: "Consulta sobre un viaje comercial a Cartago. El infinitivo {{κα(τ)απλῆν}} podría interpretarse como severior, pero los infinitivos contractos en -ῆν están documentados también en el griego noroccidental (cf. οἰκῆν, καπελεύην), por lo que resulta preferible atribuir el texto a esa área." },
  { ref: "2546A", date: "segunda mitad del s. IV a.C.", tag: "Infinitivo en -ῆν en un texto de fisonomía heterogénea",
    text: "Ζ̣εῦ Νάϊε καὶ Διώ̣[να] \nκαὶ σύνναιο̣ι, εἰ λώ̣[ϊον] \nκαὶ ἄμεινον ἔσ̣[ται] \n[τ]ὸν Σ̣τέφανον [. . .] \n[. . . .] πλῆν [. .]Σ[. . .5 . .]",
    desc: "El infinitivo {{πλῆν}} es el único elemento alegable en favor del severior y admite la misma explicación que {{κα(τ)απλῆν}} en I.Dodone DVC 1363A; convive, además, con formas de koiné como {{εἰ}} y {{ἔσ̣[ται]}}, por lo que se ha propuesto una mezcla dialectal." },
  { ref: "312B", date: "finales del s. V a.C.", tag: "Léxico siciliano, sin vocalismo severior",
    text: "[- - -] γάναν καὶ το͂ν γενεο͂ν",
    desc: "Atribuida a Sicilia por el término {{γάναν}} (át. γυνή), propio de esa zona (Greg.Cor. §345)." },
  { ref: "2445", date: "mediados del s. IV a.C.", tag: "Rasgo occidental no exclusivo",
    text: "(θ)εὸς τύ[χ]α· ἦ αὐτῶι \nμοι ἐργαζομέν̣ωι \nλώϊον καὶ ἄμεινο̣-\n<ο>ν ἐπεὶ χὀ̣ ἐνιαυτὸς \nδιεξένθει;",
    desc: "El paso λθ > νθ de {{διεξένθει}} figura entre los rasgos comunes del griego noroccidental y del dórico en general (Tselikas 2018: 257), aunque Carbon (2017: 109 n. 77) atribuye el texto a un dórico «quizá de Corfú o de las colonias sicilianas e itálicas». Sin vocalismo severior." },
];

// El dórico general (rasgos de §4-§7, cifras de §3, topónimos de §2 y escritura) está en doricoGeneral.js,
// que genera scripts/datos_dorico_general.py desde el Excel y DORICO_GENERAL_1_Redaccion_v55.
