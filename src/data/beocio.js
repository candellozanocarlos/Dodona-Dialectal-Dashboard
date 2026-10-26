import { ALFABETO_COLORS, C } from "../theme.js";
import { TOTAL_BEOC, TOTAL_TES } from "./corpus.js";

// Datos del capítulo sobre el dialecto beocio.

// Cronología (§2; suma: TOTAL_BEOC): 10 del s. V, 2 de la transición V-IV,
// 4 del s. IV e I.Dodone Lhôte 10 (ss. III-II a.C.).
export const CHRONO_DETAIL_BEOC = [
  { period: "1ª mit. s. V", n: 1 },
  { period: "Med. s. V", n: 2 },
  { period: "2ª mit. s. V", n: 4 },
  { period: "Finales s. V", n: 1 },
  { period: "s. V (gen.)", n: 2 },
  { period: "Transición V–IV", n: 2 },
  { period: "1ª mit. s. IV", n: 1 },
  { period: "Med. s. IV", n: 1 },
  { period: "s. IV (gen.)", n: 2 },
  { period: "ss. III–II", n: 1 },
];

// Cronología comparada tesalio/beocio sobre periodos comunes: agrupa los tramos de
// ambas cronologías (princ. + 1ª mit.; 2ª mit. + finales) para hacerlos comparables.
// Cada serie suma su total (tesalio: CHRONO_DETAIL_TES = 79; beocio: 17).
export const CHRONO_COMPARE_TES_BEOC = [
  { period: "1ª mit. s. V",   tes: 9,  beoc: 1 },
  { period: "Med. s. V",      tes: 5,  beoc: 2 },
  { period: "2ª mit. s. V",   tes: 14, beoc: 5 },
  { period: "s. V (gen.)",    tes: 3,  beoc: 2 },
  { period: "Trans. V–IV",    tes: 7,  beoc: 2 },
  { period: "1ª mit. s. IV",  tes: 17, beoc: 1 },
  { period: "Med. s. IV",     tes: 7,  beoc: 1 },
  { period: "2ª mit. s. IV",  tes: 7,  beoc: 0 },
  { period: "s. IV (gen.)",   tes: 8,  beoc: 2 },
  { period: "ss. III–II",     tes: 2,  beoc: 1 },
].map(d => ({
  ...d,
  tesPct: +(d.tes / TOTAL_TES * 100).toFixed(1),
  beocPct: +(d.beoc / TOTAL_BEOC * 100).toFixed(1),
}));

// Temática de las consultas (§2; suma: TOTAL_BEOC).
export const THEMES_BEOC = [
  { name: "Desconocido / Sin clasificar", value: 3 },
  { name: "Amor / Familia / Matrimonio", value: 3 },
  { name: "Viaje / Migración", value: 2 },
  { name: "Oficio / Comercio", value: 2 },
  { name: "Dinero / Patrimonio", value: 2 },
  { name: "Honores / Deporte", value: 1 },
  { name: "Vida / Salud", value: 1 },
  { name: "Justicia / Derecho", value: 1 },
  { name: "Religión", value: 1 },
  { name: "Otros", value: 1 },
];

export const LITERARY_SOURCES_BEOC = [
  { author: "Éforo (Ephor. FHG 70 F119, apud Str. IX, 2, 4)", type: "Historia, s. IV a.C.",
    desc: "Origen de la τριποδηφορία: beocios y pelasgos consultan el oráculo durante un conflicto con los tracios. Tras un incidente con una profetisa arrojada a la hoguera, el dios ordena a los beocios enviar anualmente un trípode sustraído subrepticiamente de un santuario beocio, cubierto con un manto durante la noche. Desde ese momento, solo los beocios recibirían sus oráculos de boca de los <i>selloi</i>, y no de las <i>peleiades</i>." },
  { author: "Eurípides, Erecteo (423/2 a.C.)", type: "Tragedia",
    desc: "Alusión al μίασμα δρυός, que la tradición identifica con el crimen cometido por los tebanos contra el oráculo de Dodona (proverbio Βοιωτοῖς μαντεύσαις <i>infra</i>). La referencia velada presupone que el relato era ya perfectamente conocido por el público ateniense en la época, lo que confirma que la conexión entre Beocia y Dodona tenía una larga historia (Piccinini 2017: 103-104)." },
  { author: "Appendix proverbiorum (s.v. μίασμα δρυός)", type: "Paremiografía",
    desc: "Proverbio Βοιωτοῖς μαντεύσαις (“oráculos para beocios”): referencia paremiográfica al episodio de la profetisa arrojada a un caldero hirviendo. Conserva la memoria del sacrilegio que, según la tradición, motivó la institución de la τριποδηφορία." },
    { author: "Pausanias (IX, 8, 1)", type: "Periégesis, s. II d.C.",
    desc: "Relato sobre el santuario de Deméter y Core en la ciudad beocia de Potnias: cada año se introducían en el recinto sagrado (Megara) cerditos que, según la tradición, reaparecían al año siguiente en Dodona. El propio Pausanias se muestra escéptico, pero la alusión podría guardar relación con un pasado cultual compartido en épocas muy remotas, quizá vinculado a ritos de fertilidad (Chapinal-Heras 2021: 129-130)." },
  { author: "Tablilla micénica de Tebas (TH X 105.3)", type: "Micénico",
    desc: "Posible conexión entre el término <i>pe-re-wi-jo</i> y las <i>peleiades</i>, las sacerdotisas del oráculo de Dodona: Bartoněk (2003: 588) lo relacionó con una divinidad animal vinculada a πέλεια “paloma” y Valdés Guía (2005: 94-95) lo interpretó como “intendente del santuario de Peleia”. La relación es especulativa, pues las <i>peleiades</i> no aparecen en las fuentes antes de Heródoto, pero sería un indicio de vínculos anteriores a la primera documentación histórica." },
  { author: "Éforo (FHG 70 F20 a-b)", type: "Historia, s. IV a.C.",
    desc: "Recomendación oracular de Dodona a los peregrinos de ofrecer sacrificios al río Aqueloo, cuyo culto está bien documentado en el altar del Anfiareo de Oropo, en la frontera entre Beocia y el Ática." },
];

export const POLITICAL_LINKS_BEOC = [
  { event: "Delio", date: "424 a.C.", agent: "Atenas vs. Beocia",
    desc: "Derrota ateniense ante las tropas beocias; inicio de una serie de acusaciones mutuas de impiedad entre ambas comunidades." },
  { event: "Institución de la τριποδηφορία", date: "último cuarto s. V a.C.", agent: "Koinón beocio",
    desc: "Piccinini (2017: 104-111): la acusación ateniense de sacrilegio contra los beocios habría motivado la creación del rito del trípode. Doble función: expiación del crimen y reafirmación de los lazos con el santuario más antiguo del mundo griego. El ritual coincide con la consolidación de la liga federal beocia bajo liderazgo tebano; sirve para reforzar la cohesión interna de las comunidades integradas en la liga." },
  { event: "Trípode de los lequeos", date: "s. V a.C.", agent: "πόλις Λεχωΐων",
    desc: "Restos de un trípode del s. V a.C. hallados en Dodona, dos de cuyas patas conservan la inscripción Διὶ δῶρον ἀνέθηκε πόλις Λεχωΐων (I.Molossie 13). El emplazamiento de la ciudad de los lequeos es desconocido. Confirmación parcial de la tradición de la τριποδηφορία, aunque su regularidad anual no puede verificarse." },
  { event: "Proxenías", date: "—", agent: "Koinon de los epirotas · Oropo",
    desc: "El koinon de los epirotas concede la proxenía a Simalio, un beocio (I.Molossie 75), y a Teóxeno, habitante de Orcómeno (I.Molossie 56); en sentido inverso, la polis de Oropo la concede a Daípo, un epirota (I.Molossie 263)." },
];

// Alfabeto (§2): 14 en milesio o sin alfabeto epicórico reconocible; 3 en alfabeto
// beocio (186A, 187A y 190B, misma laminilla y misma mano según la autopsia de 2025).
export const ALF_BEOC = {
  milesio: 14,
  beocio: 3,
};

export const ALF_BEOC_PIE = [
  { id: "milesio", label: "Reformado o no identificado", value: ALF_BEOC.milesio, color: C.milesio },
  { id: "beocio", label: "Beocio (186A · 187A · 190B)", value: ALF_BEOC.beocio, color: ALFABETO_COLORS.beocio },
];

// ── Rasgos dialectales (§3-§6), numerados en el orden del capítulo.
export const RASGOS_BEOC = [
  // ═══ FONOLOGÍA (1–8) ═══
  // §3.1.1  Monoptongación /ai̯/ > /εː/
  { id: 1, cat: "Fonología", name: "Monoptongación /ai̯/ > /εː/ ⟨Η⟩", short: "⟨Η⟩ < αι",
    desc: "Monoptongación del antiguo diptongo /ai̯/ en una vocal larga media abierta /εː/, notada habitualmente ⟨Η⟩ tras la adopción del alfabeto jónico. Ampliamente documentada en la epigrafía continental de Beocia desde finales del s. V a.C., con testimonios tempranos como la leyenda ΘΕΒΗΟΝ (por Θηβαίων), presente en una moneda datada en el último cuarto del s. V a.C., y formas como τῆ Ματέρι τῆ Μεγάλη (IG VII 3379, Queronea, s. III a.C.). El corpus ofrece dos testimonios seguros. El primero en orden cronológico, I.Dodone DVC 4157A (finales s. V a.C.), presenta la forma verbal αρκτη (= ático ἀρκῆται), en la que la desinencia -τη refleja la monoptongación de /ai̯/ > /εː/ en posición final. El segundo, y más representativo, es I.Dodone DVC 313A (primera mitad s. IV a.C.), el ejemplo de mayor riqueza del beocio en el corpus: la conjunción κὴ (= ático καί) aparece tres veces y, en la primera línea, el antropónimo Πολυμνάστη atestigua la misma evolución. Los editores proponen entenderlo como nominativo singular femenino, pero esperaríamos una terminación en -ᾱ y no en -η; la lectura correcta es un dativo (= ático Πολυμνάσται) que ha sufrido la monoptongación. En esta inscripción ⟨Η⟩ conserva además su valor epicórico de aspiración /h/ (hυγία), de modo que el grafema funciona simultáneamente con dos valores. Un posible tercer testimonio, Ἐσκύ[λος] (por Αἰσκύλος) en I.Dodone DVC 1462 (primera mitad del s. IV a.C.), con ⟨Ε⟩ en lugar de ⟨Η⟩, no se cuenta: la inscripción no presenta ningún rasgo beocio claro y Curbera (2013: 426) restituye un nombre de raíz Σκυ- con épsilon protética. La cronología del cambio, consolidado hacia el 400 a.C., refuerza independientemente la redatación de 313A propuesta por Méndez Dosuna (2016: 123) frente a la datación más alta de los editores de I.Dodone DVC. Por el contrario, las formas de γίνυμαι de I.Dodone DVC 38A (γίνυτα(ι)), 162B ([γ]ίνυται) y 3673B (γίνυται) conservan ⟨ΑΙ⟩ en la desinencia -ται, donde un consultante beocio que escribiera con el alfabeto milesio habría notado ⟨Η⟩ (-τη). Este vocalismo apunta al tesalio, pero no permite excluir el beocio, que mantiene la grafía del diptongo en sus inscripciones más antiguas (Buck 1955: §26), sobre todo en el caso de 162B, de finales del s. V a.C.; por ello, las tres se consideran de doble adscripción.",
    dvcs: ["4157A", "313A"] },
  // §3.1.2  /e/ > /i/ en posición prevocálica
  { id: 2, cat: "Fonología", name: "/e/ > /i/ en posición prevocálica", short: "ε > ι prevocálica",
    desc: "/e/ > /i/ en posición prevocálica, que afecta sistemáticamente a las secuencias /ea/ y /eo/ y produce formas como θιός (= ático θεός) en IG VII 2817 (Hieto, ca. 246 a.C.) o πωλίοντας (< πωλέοντας) en SEG 32:450 (Acrefias, finales s. III-principios s. II a.C.). Méndez Dosuna (1993b) ha propuesto que estas grafías no reflejan una elevación vocálica como se pensaba, sino un proceso de sinicesis de la /e/ antevocálica (/eo/ > /e̯o/) seguido de la formación de una yod (/e̯o/ > /i̯o/), representada con ⟨Ι⟩ como ocurre en griego moderno. El corpus ofrece cuatro instancias distribuidas en dos inscripciones: I.Dodone DVC 313A (primera mitad s. IV a.C.) presenta θιός (< θεός) en la invocación inicial, γενιὰ (< γενεά) e ἰόντων (< ἐόντων); a ellas se añade γενιᾶς (< γενεᾶς) en I.Dodone DVC 4157A (finales del s. V a.C.). Los cuatro testimonios son coherentes entre sí, no existen grafías contrarias al fenómeno y la cronología se ajusta a los datos de la epigrafía beocia continental, que atestigua el rasgo desde época arcaica.",
    dvcs: ["313A", "4157A"] },
  // §3.1.3  Cierre /εː/ heredada > /eː/
  { id: 3, cat: "Fonología", name: "Cierre /εː/ heredada > /eː/ ⟨ΕΙ⟩", short: "Cierre /εː/ heredada > ⟨ΕΙ⟩",
    desc: "La antigua /εː/ heredada del sistema severior experimenta un cierre a /eː/ tras la monoptongación de /ai̯/ > /εː/, representada con ⟨ΕΙ⟩ una vez adoptado el alfabeto milesio. El corpus ofrece cuatro testimonios en tres inscripciones: εἴει (= ático εἴη) con ⟨ΕΙ⟩ y ἀ[ρ]κε͂τη (= ático ἀρκήται) con ⟨Ε⟩ en I.Dodone DVC 4157A (finales s. V a.C.), que coexisten como doble notación del mismo fonema; el antropónimo ΕὐϜέτειρος̣ (= át. ΕὐϜέτηρος, sufijo *-tēr-) en I.Dodone DVC 1344A (primera mitad s. V a.C.), de valor incierto al reducirse la inscripción a este único nombre; y χρε̄μάτων en I.Dodone DVC 313A (primera mitad s. IV a.C.), que conserva todavía la grafía epicórica ⟨Ε⟩ para la /εː/ heredada. I.Dodone DVC 4157A es el testimonio más valioso: la coexistencia de las dos notaciones en una misma inscripción la sitúa en la fase de transición entre el sistema epicórico y el alfabeto milesio, en paralelo con I.Dodone DVC 313A",
    dvcs: ["4157A", "1344A", "313A"] },
  // §3.1.4  Monoptongación /oi̯/ > /y/
  { id: 4, cat: "Fonología", name: "Monoptongación /oi̯/ > /y/ ⟨Υ⟩", short: "οι > υ",
    desc: "La monoptongación del diptongo /oi̯/ es uno de los rasgos más característicos del vocalismo beocio, si bien se trata del proceso más tardío de la cadena vocálica del dialecto. En el alfabeto epicórico se documenta desde comienzos del s. V a.C. la escritura ⟨ΟΕ⟩ como estadio intermedio, en formas como Κοέρανος (= ático Κοίρανος) en IG VII2 3, 86 (Tanagra, 426 a.C.). La notación ⟨Υ⟩ aparece esporádicamente desde el s. IV a.C. y se impone con regularidad solo a partir de la segunda mitad del s. III a.C., generalizándose al final de ese mismo siglo. El cambio no opera ante vocal, donde el diptongo se conserva: así, en formas como Βοιωτῦς (IG VII 2829, Hieto, ca. 260-246 a.C.) permanece inalterado. Se han propuesto cuatro testimonios de esta monoptongación en el material de Dodona: γίνυτο en I.Dodone DVC 1060A (mediados del s. V a.C.; su adscripción beocia descansa en esta posible monoptongación, mientras que la apócope πέρ de la misma laminilla, πὲρ πανπασία(ς), apunta al tesalio, por lo que se considera de doble adscripción) y en I.Dodone DVC 1676A (s. IV a.C.), ambos interpretados como el optativo de presente 3ª persona del singular de γίνυμαι (= ático γίγνοιτο), γένυτ[ο] en I.Dodone DVC 1649A (finales s. V – principios s. IV a.C.), interpretado como aoristo de optativo de la misma raíz (= ático γένοιτο) y κυνὸν (= ático κοινόν) en I.Dodone Lhôte 10. Los cuatro testimonios plantean dificultades. En cuanto a las formas γίνυτο y γένυτ[ο], la cronología de las tres laminillas es demasiado temprana para un fenómeno cuya generalización gráfica no se produce hasta el s. III a.C. A esta dificultad cronológica se suma una segunda observación: casi todos los presuntos casos de ⟨Υ⟩ por ⟨ΟΙ⟩ se concentran en formas del paradigma de γίνυμαι. Por otra parte, en I.Dodone DVC 313A (primera mitad s. IV a.C.), la inscripción con más rasgos beocios del corpus, la 3ª persona del optativo de γίνυμαι es γινυο<ι>το, donde el diptongo parece conservarse. Por tanto, la coexistencia en el corpus de γινυο<ι>το (I.Dodone DVC 313A), γίνυτο (I.Dodone DVC 1060A y 1676A) y γένυτ[ο] (I.Dodone DVC 1649A) es difícilmente explicable si todas estas formas reflejan el mismo cambio fonológico: γίνυτο y γένυτο pueden deberse a una extensión analógica del tema de presente al de optativo o a una confusión entre ambos, de modo que no constituyen evidencias inequívocas del proceso. Respecto de la forma κυνὸν (= ático κοινόν) en I.Dodone Lhôte 10, como el propio editor apunta, la inscripción presenta varias formas ajenas al dialecto beocio como των y no τάων o πᾶσι y no παντέσσι. Por ello, propone entender la inscripción como una consulta de un koinón epirota de época helenística que presentara este vocalismo moderno análogo al beocio. La evidencia del corpus para la grafía υ por οι es problemática y, tomada en su conjunto, no ofrece un testimonio robusto del fenómeno. En consecuencia, su valor diagnóstico en las laminillas de Dodona es significativamente menor que el de los rasgos precedentes.",
    dvcs: ["1060A", "1649A", "1676A", "LOD 10"] },
  // §3.1.5  No contracción de -ᾱο-
  { id: 5, cat: "Fonología", name: "No contracción de -ᾱο-", short: "-ᾱο- sin contraer",
    desc: "El beocio, a diferencia del lesbio, y con mayor regularidad que el tesalio, donde conviven las formas contractas y las no contractas (rasgo nº 2 del tesalio), tiende a mantener sin contraer la secuencia -ᾱο-. El ejemplo paradigmático es el genitivo singular de los sustantivos masculinos de primera declinación, con formas como ταμίαο (IG VII 3172, Orcómeno, 222-200 a.C.) o ἱαράρχαο (IG VII 3377.4, Queronea, s. II a.C.). El corpus de Dodona aporta dos testimonios. El primero, y más significativo, procede de I.Dodone DVC 313A (primera mitad s. IV a.C.), cuya δράοντοιν, participio de presente en dual de δράω, presenta una evidente secuencia -ᾱο- sin contraer en una inscripción plagada de rasgos beocios. El segundo testimonio es más problemático: en I.Dodone DVC 296A (segunda mitad s. V a.C.) encontramos Μυρδιό̄(ν)δᾱο, antropónimo masculino en genitivo singular. Los editores proponen entenderlo como genitivo singular de un nombre masculino de tema en -ᾱ formado con el sufijo -ώνδας (variante beocia de -άνδας), en el que la secuencia -ᾱ + -ο del genitivo queda sin contraer. La mención de la ciudad beocia de Oropo (Ὀρο̄πόνδε) en la cuarta línea apunta igualmente al beocio, aunque la adscripción dialectal de la inscripción en su conjunto es incierta. En conjunto, los datos son coherentes con lo que conocemos del beocio, donde la no contracción de -ᾱο- constituye la norma general, frente al tesalio, que vacila entre ambas soluciones, y al lesbio, que contrae regularmente a -ᾱ. La forma δράοντοιν de I.Dodone DVC 313A es el testimonio más claro; el caso de I.Dodone DVC 296A es más problemático, puesto que la retención de -ᾱο-, si bien no es lo común, está atestiguada también en tesalio, aunque la mención de Oropo en la misma inscripción apunta más bien hacia una procedencia beocia.",
    dvcs: ["313A", "296A"] },
  // §3.2.1  *j-, *dj > δ(δ)
  { id: 6, cat: "Fonología", name: "*j-, *dj > δ(δ)", short: "*j-/*dj > δ(δ)",
    desc: "El beocio, junto con el laconio, el eleo y el cretense, desarrolla como resultado de los grupos consonánticos *j-, *dj, *gj y *gwj el sonido oclusivo dental sonoro geminado /dd/, notado habitualmente ⟨ΔΔ⟩ y en ocasiones, por simplificación, ⟨Δ⟩ simple. Este resultado se opone al de la mayoría de dialectos griegos, entre ellos el jónico-ático, que presentan ⟨Z⟩ para transcribir el sonido /zd/ (el lesbio tiene el grupo consonántico ⟨ΣΔ⟩ con el mismo valor fonético), y constituye uno de los rasgos fonéticos más sobresalientes del beocio. Así, en la epigrafía beocia encontramos formas como γραμματίδδοντος (< ático γραμματίζοντος) en IG VII 4127 (Acrefias, primera mitad s. II a.C.) o περίδδυγα (= ático περίζυγα) en IG VII2 3, 34 (Tanagra, 260-250 a.C.). El corpus de Dodona aporta tres formas con esta evolución, procedentes de inscripciones de probable adscripción beocia. El primer testimonio es δατεύο̄ (= ático ζητεύω) en I.Dodone DVC 3017B (mediados o finales del s. V a.C.); la inscripción no presenta ningún otro rasgo dialectal, pero el tratamiento de la *dj inicial apunta al beocio. El segundo testimonio es δικάδ(δ)ε̄ται (= ático δικάζηται) en I.Dodone DVC 3478A (mediados del s. IV a.C.), inscripción que consta únicamente de esta palabra y presenta la grafía arcaica para la /eː/ (la forma beocia esperable en alfabeto milesio sería δικάδδειτη), por lo que la adscripción es igualmente dudosa. El último testimonio es κομίδ(δ)εσθαι (= ático κομίζεσθαι) en I.Dodone Lhôte 27A (s. V a.C.); Lhôte excluyó originalmente el origen beocio de la inscripción a causa de la forma γυναῖκα, que consideraba ajena al dialecto (donde esperaríamos βανά), pero Méndez Dosuna (2007b: 141-142) ha argumentado que βανά es un término poético empleado por Corina y que la forma beocia estándar sigue el tipo γυνή, γυναικός, y el antropónimo Ὀνάσιμος es muy frecuente en Beocia, por lo que la exclusión carece de base sólida. Ninguno de los tres textos conserva rasgos dialectales adicionales que permitan verificar de forma independiente la adscripción beocia, lo que obliga a formular las conclusiones con cautela. Con todo, cabe destacar que los tres testimonios presentan ⟨Δ⟩ simple, sin que ninguno atestigüe la grafía doble ⟨ΔΔ⟩, que es la más frecuente en los textos beocios; esta preferencia por la notación simple es probablemente una mera simplificación gráfica sin correlato fonológico, esperable en el contexto informal de las laminillas oraculares.",
    dvcs: ["3017B", "3478A", "LOD 27A"] },
  // §3.2.2  Psilosis en palabras gramaticales
  { id: 7, cat: "Fonología", name: "Psilosis en palabras gramaticales", short: "Psilosis (ὡς, ὅπως)",
    desc: "El beocio es, por lo general, un dialecto que no sufre psilosis y mantiene el signo ⟨H⟩ para la aspiración hasta mediados del s. IV a.C. Sin embargo, el corpus de Dodona presenta un conjunto de formas en palabras gramaticales que carecen de la esperada aspiración. En I.Dodone DVC 296A (segunda mitad s. V a.C.) aparece ὅπως sin aspiración en la línea 2, mientras que la línea 3 de la misma laminilla escribe hό̄ρας con ⟨H⟩. En I.Dodone DVC 4157A (finales s. V a.C.), el adverbio ὡς en ὁ̄ς κα α[ρ]κε͂τη y ὁ̄ς εἴει carece igualmente de aspiración. Por su parte, ἰοιό[ς] dentro de I.Dodone DVC 313A aparece sin aspiración, mientras que en la segunda línea de la misma inscripción encontramos hυγία. Ante estos datos, hay dos explicaciones posibles. La primera es de carácter gráfico: en el período de transición al alfabeto milesio, el grafema ⟨H⟩ oscilaba entre su valor epicórico de /h/ y su nuevo valor de /εː/, de modo que los consultantes vacilaban en su utilización. La segunda explicación parece más plausible: en algunas inscripciones beocias arcaicas el artículo ὁ aparece sin ⟨H⟩, y la forma ὃς (= ὡς) coexiste con la usual hὸς, lo que apunta a que las palabras gramaticales de mayor frecuencia de uso eran especialmente susceptibles de perder la aspiración. Si atendemos a los ejemplos del corpus, quitando el problemático ἰοιό[ς], la psilosis aparece en dos palabras gramaticales que se ajustan bien a esta explicación (ὅπως y ὡς). La psilosis de ὡς está atestiguada además en una inscripción métrica beocia, Hansen, CEG I 446 = I.Thespies 465/466 (450-430 a.C.), donde aparece ὃς χ' ἅδαν πίε̄ (= ático ὅπως ἂν ἅδην πίῃ).",
    dvcs: ["296A", "4157A", "313A"] },
  // §3.3  ¿ἰοιό[ς] (= át. υἱός) en DVC 313A?
  { id: 8, cat: "Fonología", name: "¿ἰοιό[ς] (= át. υἱός) en I.Dodone DVC 313A?", short: "ἰοιό[ς] (313A)",
    desc: "La inscripción I.Dodone DVC 313A (primera mitad s. IV a.C.) presenta, en su tercera línea, la forma ἰοιό[ς] (= ático υἱός, “hijo”), cuyo vocalismo plantea un problema de difícil resolución. Los editores de I.Dodone DVC relacionan ἰοιό[ς] con la forma τῶ ιουιῶ (= ático τοῦ υἱοῦ) de IG VII 3377.6 (Queronea, s. II a.C.), con ⟨ΙΟΥ⟩ por ⟨ΟΥ⟩, fenómeno que en beocio se da a partir del s. III a.C. delante de consonantes apicales (τιούχαν = ático τύχαν en IG VII 3351, Queronea, s. II a.C.). Este sería el único caso donde la grafía ⟨ΙΟΥ⟩ se daría en otro contexto fonético. Sin embargo, Méndez Dosuna (1984) y Brixhe (1985) explicaron independientemente esta grafía como resultado de un fenómeno de elisión del artículo (τῶ ουιῶ > τ' ουιῶ > τ' ιουιῶ), donde la forma ιουιῶ se explica por el contacto con la apical del artículo. Esta explicación no se aplica a 313A, que carece de artículo, por lo que el paralelo de los editores no es acertado. Méndez Dosuna (2018a: 290) propone en su lugar que ⟨Ο⟩ en ἰοιό[ς] podría representar ⟨Υ⟩, confusión documentada en inscripciones beocias, sobre todo de la zona de Tespias: σκόφοι y δοώδεκα por σκύφοι y δυώδεκα (I.Thespies 38, ca. 386 a.C.), Ὀλονπίων y Μικόλα (Alonso Déniz 2016: 68). Si además la falta de aspiración es un error del consultante (<h>οιό[ς] = hυιός), cabe postular un origen tespio para la inscripción, la hipótesis que la tesis considera más satisfactoria. Otras posibilidades apuntadas por el autor son una conexión con el micénico i-jo (= (h)iós), relacionado por Ruipérez (1992) con el primer elemento de Ἰοκάστη, o una contaminación entre el usual υἱός y la forma ϝhiός atestiguada en CEG 362.6 (Cleonas, ca. 560 a.C.). Todas estas hipótesis tienen carácter conjetural y la cuestión debe quedar, por el momento, abierta.",
    dvcs: ["313A"] },
  // ═══ MORFOLOGÍA (9–15) ═══
  // §4.1.1  Apócope de preposiciones
  { id: 9, cat: "Morfología", name: "Apócope de preposiciones", short: "Apócope prep.",
    desc: "La apócope de las preposiciones es un rasgo característico de los dialectos griegos a excepción del jónico-ático. El beocio conoce, junto con la práctica totalidad del griego, las formas apocopadas ἀν (< ἀνά) y πάρ (< παρά), y comparte con el griego occidental y el tesalio las formas κάτ (< κατά) y πότ (< ποτί), atestiguadas habitualmente ante consonante dental y, en particular, ante formas del artículo. Ante otras consonantes, las apocopadas suelen presentarse en beocio asimiladas a la inicial siguiente, como atestigua Blümel (1982: §145) en formas como πὸκ κατόπτας (SEG 43:205, Coronea, s. III a.C.) o πὸδ Δάφνη (IG VII2 3, 15; Tanagra, finales s. III a.C.). Frente al sistema más amplio del tesalio, que extiende la apócope a περί, ἀπό, ἐπί y ὑπό, el beocio solo conoce la apócope de las tres últimas preposiciones únicamente ante palabra que comienza por oclusiva labial sorda, con asimilación regresiva al primer fonema de la palabra siguiente (Méndez Dosuna 2007f: 304-305). En el corpus de Dodona, los testimonios disponibles se concentran en una única laminilla, I.Dodone DVC 313A (primera mitad s. IV a.C.). La consulta presenta, en primer lugar, παραμόνιμος, forma en la que la preposición παρα- aparece sin apocopar (Méndez Dosuna 2018a: 290 llama la atención sobre un detalle paleográfico: la segunda alfa parece haber sido añadida con posterioridad en el espacio entre la rho y la mu, lo que apuntaría a un proceso de autocorrección por parte del redactor). En contraste, la misma inscripción ofrece en la cuarta línea la secuencia ΕΠΙΓΓΑΣΙΣ. Los editores proponen restituir ἐπιγγ[ύ]ασις (= ático ἐπεγγύησις, 'garantía'), pero esta lectura presenta dificultades fonológicas (presupone la elevación de /e/ a /i/ ante nasal, fenómeno propio del arcadio-chipriota sin paralelos en beocio) y paleográficas (el espacio resulta insuficiente para acomodar la ípsilon postulada). Méndez Dosuna (2016: 124) propone leer ἐπίππᾱσις, donde las dos supuestas gammas serían en realidad dos pis a las que les falta el trazo vertical derecho, cruce entre la plena ἐπίπᾱσις (= ático ἐπίκτησις, 'adquisición suplementaria') y la apocopada ἔππᾱσις, esta última documentada con regularidad en numerosos decretos de proxenía beocios. Prauscello (2019: 144) acepta la explicación fonética, pero propone un único error del lapicida (⟨ΓΓ⟩ por una ⟨Π⟩ simple: ἐπίπᾱσις). Las fotografías de la Eforía de Antigüedades de Ioánina muestran dos signos legibles como gamma, pero con trazos superiores compatibles con dos pi incompletas: la tesis adopta ἐπίππᾱσις, aunque la cuestión no puede darse por cerrada. En conjunto, la aportación del material dodoneo a este fenómeno es modesta y se reduce, en el mejor de los casos, a confirmar la pervivencia en el s. IV a.C. de la apócope condicionada de ἐπί ante labial.",
    dvcs: ["313A"] },
  // §4.2.1  γίνυμαι por γίγνομαι
  { id: 10, cat: "Morfología", name: "γίνυμαι atemático por γίγνομαι", short: "γίνυμαι",
    desc: "El tesalio y el beocio comparten una flexión atemática del verbo γίγνομαι, transferido a la clase de los verbos en -νυμι. En la epigrafía beocia el verbo aparece en numerosas inscripciones: así γίνυτη (IG VII 1737; Tespias, finales s. III a.C.) o παργινύωνθη (IG VII 207; Egóstena, 223-201 a.C.). El único testimonio que puede atribuirse con seguridad al beocio es la 3ª persona del singular del optativo de presente γίνυο‹ι›το en I.Dodone DVC 313A (primera mitad s. IV a.C.), dado que la inscripción presenta numerosos y variados rasgos beocios tratados en apartados anteriores. Por otra parte, en el capítulo del tesalio (§4.2.5) se han discutido las seis inscripciones del corpus cuyas formas de este paradigma admiten tanto adscripción tesalia como beocia: I.Dodone DVC 38A, 162B, 1060A, 1649A, 1676A y 3673B. En tres de ellas (38A, 162B y 3673B), la conservación de αι en -ται apunta al tesalio, aunque no basta para excluir el beocio; en I.Dodone DVC 328, en cambio, la apócope πέρ, impropia del beocio, decanta la adscripción hacia el tesalio. En conclusión, dejando a un lado los testimonios de adscripción dudosa, el caso de I.Dodone DVC 313A, la inscripción con más rasgos beocios del corpus, sí constituye un testimonio especialmente valioso para la documentación de este rasgo en el dialecto beocio. El valor radica en la datación de la inscripción en la primera mitad del s. IV a.C., lo que la sitúa por delante de los testimonios beocios continentales (todos del s. III a.C.) y atestigua el rasgo en una fecha sensiblemente anterior a la que ofrecen los corpora beocios. El corpus oracular ofrece, así, una atestación temprana del rasgo y apunta a que la flexión atemática estaba ya plenamente consolidada en el dialecto beocio en el s. IV a.C., con anterioridad al periodo en que la epigrafía oficial empieza a documentarla de manera sistemática.",
    dvcs: ["313A", "38A", "162B", "1060A", "1649A", "1676A", "3673B"] },
  // §4 (introducción)  3ª pl. ἔνθι (= át. εἰσί)
  { id: 11, cat: "Morfología", name: "3ª pl. ἔνθι (= át. εἰσί)", short: "ἔνθι",
    desc: "La desinencia -νθι de la 3ª persona del plural es común al beocio y al tesalio. Su único testimonio en el corpus, ἔνθι (= ático εἰσί) en I.Dodone DVC 3809B (primera mitad del s. IV a.C.), se adscribe al tesalio, pues la forma ἔνθι está atestiguada en la epigrafía tesalia, pero no en la beocia: véase el rasgo nº 19 del tesalio.",
    dvcs: ["3809B"] },
  // §4.5  Partícula modal κα
  { id: 12, cat: "Morfología", name: "Partícula modal κα", short: "Partícula κα",
    desc: "La partícula modal presenta formas distintas según el dialecto y constituye uno de los criterios de clasificación dialectal más fiables del griego antiguo: ἄν es exclusiva del jónico-ático y el arcadio, κε(ν) es propia del lesbio y el chipriota, y κα caracteriza a los dialectos del griego occidental (Molinos Tejada 1992: 328-329). El tesalio no es uniforme en este punto: κε aparece en Pelasgiótide y Tesaliótide, mientras que κα es el rasgo diagnóstico de Histiótide. El beocio comparte con el griego occidental el uso de κα, lo que lo separa del tesalio de Pelasgiótide y lo alinea, en este rasgo concreto, con el tesalio de Histiótide. El corpus atestigua κα en tres inscripciones de adscripción beocia segura: κα δατεύο̄ en I.Dodone DVC 3017B (mediados o finales del s. V a.C.); ὁ̄ς κα α[ρ]κε͂τη en I.Dodone DVC 4157A (finales del s. V a.C.); y κα δράοντοιν en I.Dodone DVC 313A (primera mitad del s. IV a.C.). Los tres testimonios son coherentes entre sí y cuadran con los datos de la epigrafía beocia, donde κα está atestiguada de forma continuada desde el s. VI a.C.",
    dvcs: ["3017B", "4157A", "313A"] },
  // §4.3.1  Pervivencia del número dual
  { id: 13, cat: "Morfología", name: "Pervivencia del número dual", short: "Dual",
    desc: "El beocio es el único dialecto del grupo eólico que preserva el dual como categoría gramatical activa en los textos epigráficos hasta el s. III a.C., frente al progresivo declive que esta categoría experimenta en el resto de dialectos eólicos y en ático a lo largo del s. IV a.C. La epigrafía continental lo atestigua tanto en formas nominales como λέβητε δύο (I.Thespies 38, ca. 386 a.C.) como en formas verbales como ἀνεθέτᾱν (IG VII 4160, Acrefias, primera mitad s. III a.C.). El único testimonio del corpus es el participio δράοντοιν en I.Dodone DVC 313A (primera mitad s. IV a.C.), genitivo-dativo dual del participio de presente activo de δράω, que encaja perfectamente con la presencia de los dos consultantes Βο̄κόλο̄ κὴ Πολυμνάστη al comienzo de la inscripción. La presencia de esta forma de dual entra en consonancia con los datos que conocemos de la epigrafía beocia y atestigua que el número dual se mantuvo vigente en el dialecto beocio también en contextos informales.",
    dvcs: ["313A"] },
  // §4.3.2  Dativo singular temático en -οι
  { id: 14, cat: "Morfología", name: "Dativo singular temático en -οι", short: "Dat. sg. -οι",
    desc: "El dativo singular de los temas en -o presenta en beocio la desinencia -οι, que lo distingue tanto del ático-jónico (-ωι > -ῳ) como de las otras dos variedades del eólico. Buck (1955: §106.2) señala que -ωι, la desinencia mayoritaria en el conjunto del griego antiguo, convive en beocio con -οι, forma compartida con el arcadio y el eleo y documentada también de manera tardía en inscripciones de diversas regiones del norte de Grecia, entre ellas el propio Epiro. Blümel (1982: 243-244) ha mostrado que el punto de partida beocio es igualmente una desinencia subyacente /oːi̯/, como prueban formas con -ωι en inscripciones del período de transición entre el alfabeto epicórico y el milesio como αὐτῶι en IG VII 2408 (Tebas, s. IV a.C.) o πολέμωι en SEG 25:553 (Onquesto, s. IV a.C.). A este resultado le siguen las monoptongaciones características del vocalismo beocio: /oi̯/ > /yː/ (escrito -υ, documentado desde principios del s. III a.C.) y, más tarde, /yː/ > /iː/ (escrito -ει, atestiguado desde mediados del s. III a.C. en Lebadea y Queronea). El corpus ofrece dos testimonios. El más inequívoco, en apariencia, es el de I.Dodone DVC 186A (segunda mitad s. V a.C.), inscripción de texto brevísimo: ἒ̄ καὶ ἐν Ὀρχομενο͂ι. La forma presenta la desinencia -οι esperada en beocio; sin embargo, dado que el alfabeto epicórico no distingue cantidad vocálica, esta grafía es ambigua entre una desinencia /oːi̯/ (equivalente al ático -ωι) y la desinencia propiamente beocia /oi̯/. Aunque la desinencia -οι no es exclusiva del beocio, la referencia toponomástica beocia y su relación con otras inscripciones con rasgos beocios dentro de la misma laminilla (I.Dodone DVC 187A y 190B) apuntalan su adscripción dialectal beocia. El segundo testimonio procede de I.Dodone DVC 313A (primera mitad s. IV a.C.). La forma Βο̄κόλο̄, dativo singular analizado en §3.1.4, presenta la desinencia -ο, sin la iota esperable en beocio. Como señala Méndez Dosuna (2018a: 289), esta desinencia es rara en beocio, dialecto en el que -οι es la forma ampliamente dominante, por lo que no puede descartarse una omisión involuntaria del lapicida. En todo caso, tampoco es descartable que la grafía refleje un estadio incipiente de la monoptongación del diptongo /oi̯/ en posición final, si bien la cronología del proceso hace que esta interpretación sea difícil de sostener. En conjunto, la aportación del corpus al conocimiento de este rasgo resulta modesta. El dativo en -οι de I.Dodone DVC 186A es coherente con la norma beocia, aunque su peso argumentativo queda limitado por la ambigüedad gráfica del alfabeto epicórico y por el hecho de que la adscripción beocia de la laminilla descansa principalmente en el topónimo, no en la desinencia. El caso de I.Dodone DVC 313A plantea, en cambio, una dificultad interpretativa de distinto orden: la desinencia atestiguada se aparta de lo esperado en beocio y su análisis depende de si se postula una omisión involuntaria del lapicida o un reflejo incipiente de la cadena de monoptongaciones, hipótesis esta última que la cronología del proceso hace difícil de sostener.",
    dvcs: ["186A", "313A"] },
  // §4.4.1  Adverbios en -ᾱι
  { id: 15, cat: "Morfología", name: "Adverbios en -ᾱι", short: "Adv. -ᾱι",
    desc: "En los dialectos griegos no jónico-áticos, los adverbios de valor locativo-modal forman una serie en -ᾱι (o -ᾱ). El sufijo, que Buck (1955: §132.5) describe como 'place where, whither, and especially manner', genera formaciones del tipo ἀλλᾶι ('de otro modo, en otro lugar') en cretense y corcireo, παντᾶι ('en todas direcciones') en heracleota, o αἶ y ὄπαι ('donde, de cualquier modo que') en cretense, donde además funcionan como conjunciones finales. I.Dodone DVC 187A (segunda mitad s. V a.C.) conserva el adverbio hόπᾱι (= át. ὅπῃ), cuya aspiración se ha tratado ya en §3.2.2. La lectura de la laminilla ha sido objeto de debate: los editores del I.Dodone DVC recogenἐ͂ καὶ hόπαι (ἱ)κανο͂ς φέρει ('o a donde sea provechoso'), pero Méndez Dosuna (2016: 121) señala dos objeciones a esta lectura. Por un lado, la ausencia de la aspiración inicial esperada en ἱκανο͂ς; por otro, la construcción impersonal u omisión del sujeto en ἱκανο͂ς φέρει, que no tiene paralelo documentado. Frente a ello, Méndez Dosuna (2016: 121) propone, siguiendo la sugerencia de Tsantsanoglou, que 186A y 187A forman una sola pregunta, y lee la secuencia como una disyunción: ἒ̄ καὶ ἐν Ὀρχομενο͂ι / ἒ̄ καὶ hόπᾱι κα νο͂ς φέρει, es decir, 'o bien en Orcómeno, o bien adondequiera que su inclinación le lleve', con un paralelo documentado en Hdt. 9.120 (αὐτοῦ τοῦ στρατηγοῦ ταύτῃ νόος ἔφερε). La serie de adverbios en -ᾱι, productiva en numerosos dialectos del griego, no estaba documentada hasta la fecha en la epigrafía beocia. El hόπᾱι de I.Dodone DVC 187A constituiría, así, el primer testimonio epigráfico de esta formación en una inscripción beocia. Con todo, el valor diagnóstico de la forma debe matizarse. Su carácter aislado en el corpus impide determinar si nos encontramos ante un rasgo vivo en el beocio del s. V a.C. o ante una formación marginal, y la adscripción beocia de la propia inscripción depende de su lectura conjunta con I.Dodone DVC 186A y de criterios paleográficos: las autopsias muestran que la paleografía y la profundidad de los trazos de 186A y 187A apuntan a una misma mano, con las letras esperables en un alfabeto beocio del s. V a.C.",
    dvcs: ["187A"] },
  // ═══ SINTAXIS (16) ═══
  // §5.1  Oraciones finales con ὥς κα + subjuntivo
  { id: 16, cat: "Sintaxis", name: "Oraciones finales con ὥς κα + subjuntivo", short: "ὥς κα + subj.",
    desc: "Las oraciones finales del griego antiguo se construyen, en la mayoría de los dialectos, con verbo en subjuntivo precedido de una conjunción (ὅπως, ὡς o ἵνα) y, opcionalmente, una partícula modal. El recurso al optativo en oraciones finales independientes es marginal: Buck (1955: §176.4) solo lo documenta en algunas inscripciones heracleotas (hως μὴ καταλυμακωθὴς ἀδηλωθείη, IG XIV 645 I.53) y lesbias (ὥς κε... ἐμμένοιεν, IG XII,2 6). La combinación ὥς κα + subjuntivo, sin ser exclusiva de un dialecto, está particularmente bien representada en beocio: la epigrafía continental la documenta desde fechas tempranas en la inscripción métrica arcaica de Tespias Hansen, CEG 1 446 (= IThesp. 465/466, 450-430 a.C.), donde aparece la cláusula ὃς χ' ἅδαν πίε̄ (= át. ὅπως ἂν ἅδην πίῃ), y se mantiene viva hasta época helenística, como atestigua ὥς κα δοκιμάδδε[ι] en IG VII 3172 (Orcómeno, 222-200 a.C.). El único testimonio del corpus es I.Dodone DVC 4157A (finales s. V a.C.), inscripción cuyo problema de interpretación afecta directamente al rasgo. Los editores leen περὶ γενιᾶς : ὁ̄ς κα ἀ[ρ]κετὴ : ὁ̄ς εἴει y diagnostican una mezcla de formas dóricas y la forma ática ἀ[ρ]κετὴ, asumiendo que la conjunción ὡς aparece repetida en una construcción que no terminan de delimitar sintácticamente. Méndez Dosuna (2016: 137) propone una lectura sustancialmente distinta: περὶ γενιᾶς : ὁ̄ς κα α[ρ]κε͂τη : ὁ̄ς εἴει, equivalente al ático περὶ γενεᾶς ὡς ἂν ἀρκῆται, ὡς εἴη. Bajo esta interpretación, la inscripción no contiene mezcla dialectal: todas las formas son consistentemente beocias y el texto se articula en torno a dos oraciones finales que dependen de un verbo de consulta sobreentendido (del tipo ἐπερωτᾶι o ἐπικοινᾶται). La primera oración final, ὁ̄ς κα α[ρ]κε͂τη, atestigua la construcción ὥς κα + subjuntivo, en consonancia con los testimonios beocios continentales. La segunda oración final, ὁ̄ς εἴει, no se construye con subjuntivo, sino con un optativo en función final (εἴει = át. εἴη), fenómeno extremadamente raro en la epigrafía dialectal griega. La presencia de un optativo final en una inscripción del s. V a.C., y sobre todo su aparición junto con un subjuntivo final en una misma oración, hace de I.Dodone DVC 4157A un testimonio sobresaliente del conjunto. La asimetría modal podría responder al hecho de que la primera cláusula expresa una finalidad expresa (con un verbo cuyo sujeto requiere intervención efectiva, ἀρκε͂τη, con el sentido de 'proteger'), mientras que la segunda refleja una eventualidad más indeterminada compatible con el optativo; alternativamente, podría tratarse de una variación estilística entre las dos oraciones coordinadas. En conjunto, la aportación del corpus es modesta en términos cuantitativos (un único testimonio) pero cualitativamente significativa: I.Dodone DVC 4157A confirma la productividad de la construcción ὥς κα + subjuntivo en beocio y aporta, además, un testimonio temprano y sin paralelo de optativo en oración final yuxtapuesta con un subjuntivo.",
    dvcs: ["4157A"] },
  // ═══ VOCABULARIO (17–18) ═══
  // §6  Verbo λῶ (= ático θέλω)
  { id: 17, cat: "Vocabulario", name: "Verbo λῶ (= ático θέλω)", short: "λῶ (= ático θέλω)", 
    desc: "El verbo λῶ (= ático θέλω), que aparece en textos epigráficos y literarios de origen dórico, no está atestiguado en otros dialectos ni en ninguna otra inscripción del corpus. Por tanto, si I.Dodone DVC 296A (450-425 a.C.) fuera una consulta beocia, λῶντες constituiría el primer testimonio de que λῶ no es exclusivo del dórico y pudo utilizarse en otros dialectos, al menos en el registro informal.",
    dvcs: ["296A"] },
  // §6  Onomástica: Πε̣ρίκκη
  { id: 18, cat: "Vocabulario", name: "Onomástica: Πε̣ρίκκη", short: "Περίκκη (215A)",
    desc: "El corpus no contiene formulaciones como las halladas en las inscripciones de origen tesalio que permitan postular un léxico beocio específico.\n\nLo que sí proporciona el corpus es algún dato de interés en el plano de la onomástica. El caso más significativo es Πε̣ρίκκη en I.Dodone DVC 215A (ss. V-IV a.C.), inscripción que se reduce a este único antropónimo. Esta forma recuerda a los antropónimos beocios asigmáticos con geminación hipocorística -κκ- (= ático Περικλῆς) característica del beocio (Curbera 2013: 423; la misma geminación aparece en Μέννη, I.Dodone DVC 992A). Sin embargo, la terminación -η es problemática, puesto que estos nominativos asigmáticos nunca la presentan en beocio: las terminaciones conocidas son -ε (arcaica), -ει (beocia estándar, así Μέννει, IG VII 2427, Tebas, poco antes del 350 a.C.; o Φίλλει, IG VII 3182, Orcómeno), -εις (más reciente) o -ης (koiné) (Blanc 2024: 255-256). En cualquier caso, no es descartable que el consultante quisiera escribir Περίκκει sin emplear con precisión el alfabeto reformado.\n\nEl corpus oracular no amplía el inventario léxico del beocio ni permite documentar términos privativos del dialecto hasta ahora desconocidos, a diferencia del dialecto tesalio.",
    dvcs: ["215A"] },

];

export const RASGO_TEXTS_BEOC = {
  "38A":   "αἴτε οὐδε-\nμία κόρα μοι \nγίνυτα(ι)",
  "162B":  "[- - -]ΟΛΕΥΤ[- - -] \n[- - -]Β̣Α [γ]ίνυται Ε[- - -]",
  "293B":  "[ὁ δεῖνα ἐπερο̅τᾶι τὸν Δία τὸ]ν Νά̣ϊο̣ν [- - -]\n[- - - τ]ίν̣ι κε θεο̣͂[ν θύο̅ν - - -]",
  "1509B": "ἐνγενεῖτα[ι]",
  "186A":  "[ed. I.Dodone DVC]\nἐ͂ καὶ ἐν Ὀρχομενο͂ι;\n[Méndez Dosuna 2016: 121; 2018a: 290, que une 186A y 187A en una sola pregunta]\nἐ͂ καὶ ἐν Ὀρχομενο͂ι\nἐ͂ καὶ hόπᾱι κα νο͂ς φέρει;",
  "187A":  "[ed. I.Dodone DVC]\nἐ͂ καὶ hόπαι (ἱ)κανο͂ς φέρει;\n[Méndez Dosuna 2016: 121; 2018a: 290, que une 186A y 187A en una sola pregunta]\nἐ͂ καὶ ἐν Ὀρχομενο͂ι\nἐ͂ καὶ hόπᾱι κα νο͂ς φέρει;",
  "190B":  "γᾶν Ϝοικε͂ι πότερα \nἐν Ὀπόεντι;",
  "215A":  "Πε̣ρίκκη",
  "296A":  "θ[ε]ὸς τύχαν ἀ[γαθάν]• \nΜυρδιό̅(ν)δαο : ὅπο̅ς νι[κ]ῆν ὄντ' <ἐς> κῆσε \nἐν ἐνάτας hό̅ρας : δόε̣[ν] αἰ λῶντες [αἰ δὲ μὴ] \nὈρο̅πόνδε με̅δὲν ἴτο̅;",
  "313A":  "Θιὸς τύχα ἀγαθὰ : Βο̅κόλο̅ κὴ Πολυμνάστη \nτί κα δράοντοιν hυγία κὴ γενιὰ κ' ἀνδρογένεια \nγινύο[ι]το κ̣ὴ παραμόνιμος ἰοιὸ[ς] κ̣ὴ χρε̅μάτων \nἐπιγγ[ύ]ασις κ̣ὴ τῶν ἰόντων ὄνασις",
  "328":   "πὲρ πανκλαρία(ς) αἰ γίνυ-\nτε̅ καὶ γυναῖκα ἄγετε̅",
  "1060A": "Ἀετίναι πὲρ παν-\nπασία(ς) γίνυτο",
  "1344A": "ΕὐϜέτειρος̣",
  "1649A": "θεὸς τύχ̣[α• ὁ δεῖνα ἐπερωτᾶι - - -]\nἐ͂ γένυτ[ο - - -]",
  "1676A": "[ἦ γενε]ὰ γίνυτ[ο];",
  "3017B": "[θε]ὸς τ[ύ]χα· περὶ πα[μπασί]-\n[ας] ἐ͂ κα δατεύο̅;",
  "3478A": "[- - -] δικάδ(δ)ε̅ται",
  "3673B": "[- - -] ἀνθθέμ[ενος - - -] \n[- - -] γίνυται [- - -]",
  "3809B": "ἔνθι· \nθεός",
  "4157A": "[ed. I.Dodone DVC]\nπερὶ γενιᾶς : ὅ̅ς κα ἀ[ρ]κετὴ : ὁ̅ς εἴει\n[Méndez Dosuna 2016: 137]\nπερὶ γενιᾶς : ὂ̅ς κα ἀ[ρ]κε͂τη : ὀ̅ς εἴει",
  "LOD 10": "[Ἐπικοινῆται τὸ - - -] κυνὸν (?) περὶ τᾶ̣ν Κ\n[ - - - - - - - - - - - - - ]ΣΑΡΙΑΣ καὶ ἐπὶ πᾶσι\n[ - - - - - - - - - - - - - ]ΟΣΡΕΜΙΑ τῶν συντ[ε]-\n[λέων (?) - - - - - - - - ] ΧΠΙΝ κα δίκαον (?) τίν-\n[ειν (?) - - - - - - - - - ] ΤΙΟΝ ξένο<ν> ἐό[ντα] (?)",
  "LOD 27A": "Ὀνασίμο̅ι ἄμει-\nνον τὰν γυναῖκα\nκομίδεσθαι ;",
};

// Fenómenos vocálicos (§3.1): número de formas atestiguadas.
export const VOWEL_PHENOM_BEOC = [
  { type: "Monoptongación /ai̯/ > /εː/ ⟨Η⟩", n: 5, desc: "κὴ (×3) y Πολυμνάστη en I.Dodone DVC 313A; α[ρ]κε͂τη en I.Dodone DVC 4157A", color: C.green,
    dvcs: [{ src: "DVC", id: "313A" }, { src: "DVC", id: "4157A" }] },
  { type: "/e/ > /i/ prevocálica", n: 4, desc: "θιός, γενιὰ, ἰόντων (313A); γενιᾶς (4157A)", color: C.blue,
    dvcs: [{ src: "DVC", id: "313A" }, { src: "DVC", id: "4157A" }] },
  { type: "Cierre /εː/ heredada > /eː/ ⟨ΕΙ⟩", n: 4, desc: "εἴει, α[ρ]κε͂τη (4157A); ΕὐϜέτειρος̣ (1344A); χρε̄μάτων (313A)", color: C.beocioVowel,
    dvcs: [{ src: "DVC", id: "4157A" }, { src: "DVC", id: "1344A" }, { src: "DVC", id: "313A" }] },
  { type: "Monoptongación οι > υ", n: 4, desc: "γίνυτο, γένυτο y κυνὸν — todos los testimonios son problemáticos (véase rasgo dialectal nº 4)", color: C.terra,
    dvcs: [{ src: "DVC", id: "1060A" }, { src: "DVC", id: "1649A" }, { src: "DVC", id: "1676A" }, { src: "Lhôte", id: "10" }] },
];


export const VOWEL_EXAMPLES_BEOC = [
  { id: "4157A", src: "DVC", date: "Finales s. V a.C.", form: "α[ρ]κε͂τη (< ἀρκῆται)", phenom: "Monoptongación /ai̯/", color: C.green },
  { id: "313A", src: "DVC", date: "1ª mit. s. IV a.C.", form: "κὴ (< καί); Πολυμνάστη (< Πολυμνάσται, dat.)", phenom: "Monoptongación /ai̯/", color: C.green },
  { id: "4157A", src: "DVC", date: "Finales s. V a.C.", form: "γενιᾶς (< γενεᾶς)", phenom: "/e/ > /i/ prevocálica", color: C.blue },
  { id: "313A", src: "DVC", date: "1ª mit. s. IV a.C.", form: "θιός (< θεός); γενιὰ (< γενεά); ἰόντων (< ἐόντων)", phenom: "/e/ > /i/ prevocálica", color: C.blue },
  { id: "1344A", src: "DVC", date: "1ª mit. s. V a.C.", form: "ΕὐϜέτειρος̣ (sufijo *-tēr- con ⟨ΕΙ⟩); antropónimo aislado", phenom: "⟨ΕΙ⟩ < /εː/ heredada", color: C.beocioVowel },
  { id: "4157A", src: "DVC", date: "Finales s. V a.C.", form: "εἴει (< εἴη) con ⟨ΕΙ⟩ para /εː/ heredada; α[ρ]κε͂τη con ⟨Ε⟩ para /εː/ heredada (notación arcaica) — doble notación de /εː/ heredada", phenom: "⟨ΕΙ⟩ < /εː/ heredada", color: C.beocioVowel },
  { id: "313A", src: "DVC", date: "1ª mit. s. IV a.C.", form: "χρε̄μάτων: grafía ⟨Ε⟩ para /εː/ heredada (notación arcaica)", phenom: "⟨ΕΙ⟩ < /εː/ heredada", color: C.beocioVowel },
  { id: "1060A", src: "DVC", date: "Mediados s. V a.C.", form: "γίνυτο (< γίνοιτο) — interpretación problemática (véase rasgo dialectal nº 4); la apócope πέρ de la laminilla apunta al tesalio", phenom: "οι > υ", color: C.terra },
  { id: "1649A", src: "DVC", date: "finales s. V – principios s. IV a.C.", form: "γένυτο (< γένοιτο) — interpretación problemática (véase rasgo dialectal nº 4)", phenom: "οι > υ", color: C.terra },
  { id: "1676A", src: "DVC", date: "s. IV a.C.", form: "γίνυτ[ο] (< γίνοιτο) — interpretación problemática (véase rasgo dialectal nº 4)", phenom: "οι > υ", color: C.terra },
  { id: "10",    src: "Lhôte", date: "ss. III-II a.C.", form: "κυνὸν (< κοινόν) — convive con palabras que presentan rasgos ajenos al dialecto beocio", phenom: "οι > υ", color: C.terra },
];

// Matriz inscripción × rasgo, derivada de RASGOS_BEOC (sin datos duplicados).
// Filas ordenadas por nº de rasgos acumulados; 313A encabeza la lista.
export const MATRIX_BEOC = (() => {
  const map = {};
  RASGOS_BEOC.forEach(r => r.dvcs.forEach(d => { (map[d] = map[d] || new Set()).add(r.id); }));
  return Object.entries(map)
    .map(([dvc, ids]) => ({ dvc, ids }))
    .sort((a, b) => b.ids.size - a.ids.size || String(a.dvc).localeCompare(String(b.dvc), undefined, { numeric: true }));
})();

// Línea temporal de la transición gráfica en el corpus beocio: inscripciones con
// notación identificable de /εː/ (y valores de ⟨Η⟩), ordenadas por datación.
// Formas del corpus sin diacríticos (solo macrones), según la convención de la tesis.
export const GRAFIA_TIMELINE_BEOC = [
  { id: "1344A", date: "primera mitad s. V a.C.",
    grafias: [
      { g: "⟨ΕΙ⟩", val: "/εː/ heredada · notación reformada", ej: "ΕὐϜέτειρος̣", color: C.blue },
    ],
    note: "Testimonio temprano del dígrafo, de valor incierto: la inscripción se reduce a este antropónimo y la identificación con el sufijo *-tēr- (Méndez Dosuna 2018a: 288) no puede verificarse con rasgos adicionales." },
  { id: "4157A", date: "finales s. V a.C.",
    grafias: [
      { g: "⟨Ε⟩", val: "/εː/ heredada · notación arcaica", ej: "α[ρ]κε͂τη", color: C.amber },
      { g: "⟨Η⟩", val: "/εː/ < /ai̯/ · notación reformada", ej: "-τη (desinencia)", color: C.green },
      { g: "⟨ΕΙ⟩", val: "/εː/ heredada · notación reformada", ej: "εἴει", color: C.blue },
    ],
    note: "Vacilación interna: una misma palabra (α[ρ]κε͂τη) combina la grafía arcaica ⟨Ε⟩ en el tema y la reformada ⟨Η⟩ en la desinencia, junto a εἴει con ⟨ΕΙ⟩. Uno de los testimonios más valiosos de la fase de transición." },
  { id: "313A", date: "primera mitad s. IV a.C.",
    grafias: [
      { g: "⟨Η⟩ = /h/", val: "aspiración · valor epicórico", ej: "hυγία", color: C.muted },
      { g: "⟨Η⟩", val: "/εː/ < /ai̯/ · notación reformada", ej: "κή, Πολυμνάστη", color: C.green },
      { g: "⟨Ε⟩", val: "/εː/ heredada · notación arcaica", ej: "χρε̄μάτων", color: C.amber },
      { g: "⟨Ω⟩", val: "/ɔː/ · notación reformada", ej: "χρε̄μάτων", color: C.beocio },
    ],
    note: "El grafema ⟨Η⟩ funciona con dos valores en una misma inscripción (aspiración y /εː/) y conviven grafías arcaicas y reformadas. Estas vacilaciones sustentan la redatación de Méndez Dosuna (2016: 123) frente a la propuesta de los editores (segunda mitad s. V a.C.)." },
];

// Lugares con relación documentada con el corpus (capítulo beocio, §1-§2).
// kind: "mencion" (topónimo en una laminilla), "procedencia" (origen propuesto
// a partir de rasgos lingüísticos) o "contexto" (sin mención en el corpus).
export const BO_PLACES = [
  { id: "orcomeno", kind: "mencion", certain: true, name: "Orcómeno", greek: "Ὀρχομενός",
    lon: 22.977, lat: 38.493, dx: 10, dy: -9, anchor: "start",
    mentions: [{ ref: "186A", form: "ἐν Ὀρχομενο͂ι", date: "segunda mitad del s. V a.C.", type: "topónimo" }],
    note: "Única mención segura de una ciudad beocia en el corpus. Méndez Dosuna (2016: 121) propone que I.Dodone DVC 186A y 187A forman una sola consulta, “o bien en Orcómeno, o bien adondequiera que su pensamiento le lleve”, y la autopsia confirma que ambas inscripciones son de la misma mano.",
    fuera: "Fuera de las laminillas, el koinón de los epirotas concedió la proxenía a Teóxeno, habitante de Orcómeno." },
  { id: "oropo", kind: "mencion", certain: false, name: "Oropo", greek: "Ὠρωπός",
    lon: 23.770, lat: 38.322, dx: 10, dy: 4, anchor: "start",
    mentions: [{ ref: "296A", form: "Ὀρο̅πόνδε", date: "segunda mitad del s. V a.C.", type: "topónimo (adverbio de dirección)" }],
    note: "Polis situada en el límite entre el Ática y Beocia, bajo control ateniense ca. 338-322 a.C. y después del koinon beocio; Papazarkadas (2016: 122) y Papakonstantinou (2024: 384-385) la cuentan entre las ciudades beocias más destacadas. La mención de Oropo junto con νι[κ]ῆν parece aludir a los juegos de las Anfiaraeas, de los que sería la referencia más antigua.",
    fuera: "Fuera de las laminillas, Oropo concedió la proxenía a Daípo, un epirota." },
  { id: "tespias", kind: "procedencia", certain: false, name: "Tespias", greek: "Θεσπιαί",
    lon: 23.155, lat: 38.300, dx: 0, dy: 17, anchor: "middle",
    mentions: [{ ref: "313A", form: "ἰοιὸ[ς]", date: "primera mitad del s. IV a.C.", type: "procedencia propuesta" }],
    note: "La grafía ⟨Ο⟩ por ⟨Υ⟩ de ἰοιὸ[ς] (= át. υἱός), especialmente productiva en Tespias (σκόφοι, δοώδεκα en I.Thespies 38; Ὀλονπίων, Μικόλα), permite postular este origen para I.Dodone DVC 313A, la inscripción con más rasgos beocios del corpus (Méndez Dosuna 2018a: 290; Alonso Déniz 2016: 68).",
    fuera: "" },
  { id: "tebas", kind: "contexto", certain: true, name: "Tebas", greek: "Θῆβαι",
    lon: 23.319, lat: 38.321, dx: 9, dy: 5, anchor: "start",
    mentions: [],
    note: "Sin mención en el corpus. La consolidación del koinón beocio bajo la hegemonía tebana, a partir del 420 a.C., es el contexto en que Piccinini (2017: 104-111) sitúa el origen de la τριποδηφορία; la tradición atribuye a los tebanos el sacrilegio contra la profetisa de Dodona (μίασμα δρυός) al que alude Eurípides en el Erecteo.",
    fuera: "" },
];

export const BO_KIND = {
  mencion:     { label: "Mención en una laminilla", color: C.beocio },
  procedencia: { label: "Procedencia propuesta por rasgos lingüísticos", color: C.beocioDeep },
  contexto:    { label: "Sin mención en el corpus", color: "#5b564d" },
};
