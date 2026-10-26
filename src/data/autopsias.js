// Autopsias de laminillas en la Eforía de Antigüedades de Ioánina.
// Campos: id, dialect (grupo según la clasificación vigente de DVC_v5_FINAL.xlsx: tesalio, beocio,
// severior, dorico, doricoNO, jonicoAtico, mezcla, noJonAt o sinClasificar), date, ami (inventario), siglum,
// autopsy_year, text_dvc (lectura de I.Dodone DVC), carlos (observaciones de
// autopsia; *cursiva*), photos (rutas dentro de public/), related (otras caras).

// 186A, 187A y 190B son caras de la misma laminilla (M185 = ΑΜΙ 12294): comparten set fotográfico
export const FOTOS_M185 = Array.from({ length: 14 }, (_, i) => `assets/autopsias/M185/tsg-${5166 + i}.jpg`);

export const AUTOPSIAS_DATA = [
  // ═════════ TESALIO ═════════
  {
    id: "31A", dialect: "tesalio", date: "Mediados del s. IV a.C.",
    ami: "ΑΜΙ 12198", siglum: "M51", autopsy_year: 2024, related: ["32B"],
    text_dvc: "Αἰ τυχαία μοι ἁ ἑπι-\nτροπεία τὰν ἔχου\nτᾶμον Λυκκίδας;",
    carlos: "Lectura τᾶμον confirmada con seguridad frente a γᾶμον, lectura adoptada por Evangelidis (1935: 259, no 36) y seguida por *I.Dodone Lhôte* 28. La secuencia χο de ἔχου presenta letras de menor tamaño y la omicron, forma irregular, lo que apunta a alguna vacilación del lapicida en ese punto. La lectura ratifica el origen tesalio de la inscripción, sustentado además en ἔχου con cierre vocálico característico y en τυχαία como adjetivo de valor dialectal (cf. cap. tesalio, §6.8).",
    photos: ["assets/autopsias/31A/m51-31a-editado.jpg", "assets/autopsias/31A/m51-31a.jpg"],
  },
  {
    id: "75", dialect: "tesalio", date: "ss. V-IV a.C.",
    ami: "ΑΜΙ 12176", siglum: null, autopsy_year: 2024, related: [],
    text_dvc: "ποιτηρο͂-\nν ΓΑΡΟΤΕ-\nΟΥ ὅπερ τᾶμον καὶ εἴ 'σστ-\nι τύχα",
    carlos: "La autopsia confirmó la lectura del facsímil. La inscripción se grabó sobre la laminilla ya cortada y permite observar con claridad los trazos individuales de cada letra (puntos de inicio de cada incisión). No hay trazos a la derecha de τύχα, lo que invalida la reconstrucción τυχα<ῖος> propuesta por Eidinow (2019: 95): debe leerse el sustantivo τύχα aislado, como ya recoge la edición de *I.Dodone DVC*.",
    photos: [
      "assets/autopsias/75/m82-dvc-75-editado.jpg",
      "assets/autopsias/75/m82-1.jpg",
      "assets/autopsias/75/m82-2.jpg",
    ],
  },
  {
    id: "150A", dialect: "tesalio", date: "Mediados del s. V a.C. (ca. 450 a.C.)",
    ami: "—", siglum: null, autopsy_year: null, related: [],
    text_dvc: "Γενεᾶς ἔννεκα παιδός;",
    carlos: "La autopsia en la Eforía de Antigüedades de Ioánina confirmó que la forma de las letras se corresponde con el alfabeto epicórico tesalio, como proponen los editores de *I.Dodone DVC* frente a la atribución de Jeffery (1990: 233, nº 17) a un alfabeto arcaico de Dodona. El dato respalda la adscripción tesalia de la consulta y convierte a ἔννεκα en su testimonio tesalio más antiguo (cf. cap. tesalio, §3.2.2).",
    photos: [],
  },
  {
    id: "307A", dialect: "tesalio", date: "Segunda mitad del s. V a.C.",
    ami: "ΑΜΙ 12284", siglum: "M211", autopsy_year: 2025, related: ["306A", "308A"],
    text_dvc: "Φατύλο̅ι πὲρ γαϜρογί(ας)",
    carlos: "Escrita debajo de *I.Dodone DVC* 306A. El alfabeto no coincide con el de 306A, aunque los trazos sí, por lo que quizá se utilizó el mismo método de incisión. Letras muy irregulares. Los editores identifican un alfabeto eleo o eubeo, pero la forma de las letras corresponde al alfabeto tesalio, muy próximo al eubeo: la digamma y la rho con cola son compatibles con ambos, mientras que la lambda asimétrica y ascendente es exclusiva del tesalio y constituye, en esa época, el único rasgo que lo distingue del tipo calcídico-beocio. La digamma tiene forma de ⟨[⟩, que según Alonso Déniz no es epirota (cf. *I.Dodone DVC* 191 y 197). Méndez Dosuna (2018b: 44): la forma γαϜρογίας, junto con la apócope de περί, apunta al tesalio; el antropónimo podría ser entonces un genitivo tesalio en -οι < -οιο, no atestiguado en otros lugares (cf. 218 para el tipo γαϜρογία). Φατύλο̅ι es un hápax.",
    photos: [
      "assets/autopsias/306A-307A/facsimil-306a-307a.jpg",
    ],
  },
  {
    id: "934A", dialect: "tesalio", date: "Primera mitad del s. V a.C.",
    ami: "ΑΜΙ 12476", siglum: "M409", autopsy_year: 2025, related: [],
    text_dvc: "Περί νείκειος\nΘειοτιμίδας",
    carlos: "La letra final del antropónimo es una ⟨Α⟩, como ya proponía *I.Dodone Lhôte* 149: aunque la zona está erosionada, los trazos son inequívocos y el facsímil de *I.Dodone DVC* no los reproduce con precisión. La lectura descarta la alternativa ⟨Ε⟩, que los editores recogen con dudas, y la de Méndez Dosuna (2016: 126), que la proponía a partir del facsímil y consideraba el alfabeto posiblemente euboico, con un nombre de fonética jónico-ática. Las formas de las letras son propias del alfabeto epicórico tesalio, con rasgos de cierta evolución: sigma curva (Ϛ) junto a la de tres trazos, épsilon que tiende a la forma clásica, my simétrica y rho con cola (Jeffery 1990: 96). La sigma curva, característica del alfabeto tesalio de época clásica (Doulgeri-Intzesiloglou 2000: 304-305), no está atestiguada en beocio (Jeffery 1990: 89), de modo que el alfabeto descarta también la adscripción beocia de *I.Dodone Lhôte* 149 y permite asignar la inscripción al tesalio (cf. cap. tesalio, §4.1.1). La primera imagen es un facsímil de elaboración propia a partir de la autopsia.",
    photos: [
      "assets/autopsias/934A/facsimil-934a.jpg",
      "assets/autopsias/934A/tsg-5156.jpg",
      "assets/autopsias/934A/tsg-5157.jpg",
      "assets/autopsias/934A/tsg-5158.jpg",
      "assets/autopsias/934A/tsg-5159.jpg",
      "assets/autopsias/934A/tsg-5160.jpg",
      "assets/autopsias/934A/tsg-5161.jpg",
      "assets/autopsias/934A/tsg-5162.jpg",
      "assets/autopsias/934A/tsg-5163.jpg",
      "assets/autopsias/934A/tsg-5164.jpg",
      "assets/autopsias/934A/tsg-5165.jpg",
    ],
  },
  {
    id: "1340A", dialect: "tesalio", date: "Finales del s. V a.C.",
    ami: "ΑΜΙ 12688", siglum: "M513", autopsy_year: 2025, related: ["1339A"],
    text_dvc: "εἰ γ̣αοργ̣έ̣ω [κ]-\nαὶ ἔστι μο̣ι τυ-\nχαῖον",
    carlos: "La laminilla presenta tres pliegues que dejarían visible la cara B; la inscripción se distribuye entre el pliegue del medio y el inferior (donde queda la última línea). Los trazos son muy superficiales, hasta el punto de no apreciarse en las fotografías. Las letras son de menor tamaño que las de *I.Dodone DVC* 1339A. Si ambas inscripciones forman parte de una misma consulta, como sugieren *I.Dodone Lhôte* y Méndez Dosuna (2016: 126), no fueron grabadas por la misma mano o, al menos, no de la misma forma.",
    photos: ["assets/autopsias/1340A/ami-12688a.jpg", "assets/autopsias/1340A/ami-12688b.jpg"],
  },
  {
    id: "2103A", dialect: "tesalio", date: "Segunda mitad del s. V a.C.",
    ami: "ΑΜΙ 12803", siglum: "M749", autopsy_year: 2025, related: [],
    text_dvc: "[- - -]ν̣θος περ' ἐφόδου\n[- - -] μαχανᾶς [. .]Υ̣ΧΟ[.]",
    carlos: "Letras muy profundas y trazos claros. El facsímil de *I.Dodone DVC* es preciso, salvo en el espacio detrás de ΠΕΡ, que no es tan grande como indica; los números del museo tapan parcialmente las dos primeras letras. Los editores proponen el alfabeto de Eubea, pero la forma de las letras corresponde al alfabeto tesalio: la sigma de tres trazos aparece junto a la delta lunada, combinación que Johnston (2021: 116) considera distintiva del tesalio, y la chi es de tipo rojo. Johnston (2021: 113) ya había advertido que el alfabeto eubeo propuesto contrasta con el dialecto dórico de μαχανᾶς. La identificación del alfabeto es decisiva para la adscripción dialectal: la conservación de ᾱ y la apócope de περί, ajenas al jónico-ático, quedan así asociadas al tesalio, en el que la apócope es rasgo distintivo.",
    photos: [
      "assets/autopsias/2103A/facsimil-2103a.jpg",
    ],
  },
  {
    id: "2204A", dialect: "tesalio", subdialect: "Histiótide", date: "Finales del s. V a.C.",
    ami: "ΑΜΙ 12872", siglum: "M781", autopsy_year: 2025, related: [],
    text_dvc: "θεὸς τύχα· Ἀπολλο[- - - ἐπικοινῆται]\nΔιὶ Δουδωναιεῖ ἦ [- - -]\nΟΣ[- - -]",
    carlos: "Lectura Δουδωναιεῖ confirmada con su sorprendente mezcla de notaciones. Las grafías omega y omicron presentan un módulo reducido, y el trazado general apunta, además, a una datación posterior a la del resto de inscripciones de la región.",
    photos: [
      "assets/autopsias/2204A/img-20251016-wa0077.jpg",
      "assets/autopsias/2204A/img-20251016-wa0078.jpg",
      "assets/autopsias/2204A/img-20251016-wa0079.jpg",
      "assets/autopsias/2204A/img-20251016-wa0080.jpg",
    ],
  },
  {
    id: "2247A", dialect: "tesalio", date: "Finales del s. IV a.C.",
    ami: "ΑΜΙ 12890", siglum: "M793", autopsy_year: 2024, related: ["2246A"],
    text_dvc: "εἶ οὐ ἔσσεται;",
    carlos: "Lectura εἰ οὐ ἔσσεται de *I.Dodone DVC* confirmada. Por tanto, εἶ tesalio (= át. ἦ). Las formas de las letras no coinciden con las de *I.Dodone DVC* 2246A: la ípsilon presenta forma de V y la sigma cuatro trazos.",
    photos: ["assets/autopsias/2247A/m793-dvc-2247a-editado.jpg"],
  },
  {
    id: "3007A", dialect: "tesalio", subdialect: "Histiótide", date: "ss. V-IV a.C.",
    ami: "ΑΜΙ 13121", siglum: null, autopsy_year: 2024, related: ["3008A"],
    text_dvc: "π(ερ') ὕδ̣ατ̣(ο)ς : Τέ̅ϊος\nκαὶ Σθε̅σι",
    carlos: "Lectura ὕδατες confirmada; los editores del *I.Dodone DVC* corrigen en ὕδατος, pero la enmienda no es necesaria si se reconoce el cambio /o/ > /e/ en sílaba final propio de Histiótide. La línea 1 presenta sobre la iota un trazo que la cruza (posible chi en forma de cruz). En la línea 2, en la secuencia ΣΘΕΣΙ, hay una pequeña ⟨T⟩ que sobresale de la theta sin completarse: parece como si el lapicida hubiera vacilado entre escribir τ o θ y se hubiera arrepentido. La forma de la sigma varía a lo largo del soporte.",
    // 3007A y 3008A comparten cara: mismas fotos de la laminilla ΑΜΙ 13121
    photos: [
      "assets/autopsias/AMI-13121/facsimil-13121-cara-a.jpg",
      "assets/autopsias/AMI-13121/ami-13121-1.jpg",
    ],
  },
  {
    id: "3008A", dialect: "tesalio", date: "ss. V-IV a.C. (Candel Lozano 2026: 101-102 propone la primera mitad del s. IV a.C.)",
    ami: "ΑΜΙ 13121", siglum: null, autopsy_year: 2024, related: ["3007A"],
    text_dvc: "ἐ͂ ἐλ λιμένι χαλκοπο̅λέμεν;",
    carlos: "La inscripción es más reciente que *I.Dodone DVC* 3007A: algunos de sus trazos se superponen a ella. La autopsia reveló una segunda línea inédita en la que se lee τυχαῖα (cf. cap. tesalio, §§4.2.3 y 6.8). La forma de las letras de τυχαῖα coincide con la de la línea 1, en particular la forma de chi. No se aprecian trazos ni a la izquierda ni a la derecha, de modo que la segunda línea está completa. La edición completa de la inscripción figura en Candel Lozano (2026).",
    photos: [
      "assets/autopsias/AMI-13121/facsimil-3008a.jpg",
      "assets/autopsias/AMI-13121/facsimil-13121-cara-a.jpg",
      "assets/autopsias/AMI-13121/ami-13121-2.jpg",
      "assets/autopsias/AMI-13121/ami-13121-3.jpg",
      "assets/autopsias/AMI-13121/dsc-2416.jpg",
    ],
  },
  {
    id: "3113A", dialect: "tesalio", subdialect: "Pelasgiótide", date: "Finales del s. IV a.C.",
    ami: "ΑΜΙ 13086", siglum: null, autopsy_year: 2024, related: [],
    text_dvc: "[θεὸς τύχα]ν ἀγαθάν· Ζεῦ̣ Δ[ω]-\n[δωναῖε καὶ Δι]ώνη<ι>· Καλλιρόα ἐπερω-\n[τᾶι τὸν θεὸ]ν καὶ τὰν θεὸν περὶ τᾶς\n[- - - κορ]άουν τοῖς θεοῖς τοῖς θε-\n[- - -] αἰ ἔστιν οἱ βέλτιον καὶ\n[ἄμεινον - - - θ]εραπεύονσαν εἲ πὲρ τ-\n[- - -]ν̣ καὶ τᾶς παγκλαρ̣ίας\n[- - -] τ̣οῖ κατ<ε>ιγνείτοιο αἰ ἀρκέ-\n[σει - - -] εἲ σούσεται πὲρ τᾶς κό-\n[ρας - - -] γάμοιο Ἀν̣δρομά-\nχας",
    carlos: "Falta texto a la izquierda con seguridad. El tamaño de las omicron cambia a lo largo del soporte. El estado de conservación es peor del recogido en el *I.Dodone DVC*: se han perdido letras del extremo izquierdo en varias líneas. La sigma presenta forma lunar. Constituye el mejor ejemplo de dialecto tesalio en el corpus.",
    photos: [
      "assets/autopsias/3113A/1054-1.jpg",
      "assets/autopsias/3113A/1054-2.jpg",
      "assets/autopsias/3113A/1054-3.jpg",
      "assets/autopsias/3113A/1054-4.jpg",
    ],
  },
  // ═════════ BEOCIO ═════════
  {
    id: "186A", dialect: "beocio", date: "Segunda mitad del s. V a.C.",
    ami: "ΑΜΙ 12294", siglum: "M185", autopsy_year: 2025, related: ["187A", "190B"],
    text_dvc: "ἐ͂ καὶ ἐν Ὀρχομενο͂ι;",
    carlos: "Letras algo irregulares en el conjunto del soporte, pero la lectura del *I.Dodone DVC* queda confirmada. Las formas de las letras parecen las mismas en toda la laminilla, aunque varían la profundidad y el tamaño. Pese a estas variaciones, los trazos son compatibles con una misma mano, lo que refuerza la hipótesis de que *I.Dodone DVC* 186A, 187A y 190B forman parte de una consulta opistográfica unitaria (cf. Méndez Dosuna 2016: 121).",
    photos: FOTOS_M185,
  },
  {
    id: "187A", dialect: "beocio", date: "Segunda mitad del s. V a.C.",
    ami: "ΑΜΙ 12294", siglum: "M185", autopsy_year: 2025, related: ["186A", "190B"],
    text_dvc: "ἐ͂ καὶ hόπαι (ἱ)κανο͂ς φέρει;",
    carlos: "Misma mano y mismo soporte que *I.Dodone DVC* 186A y 190B. La rho presenta la peculiaridad de estar flanqueada por dos trazos verticales, configuración paralela a la documentada en *I.Dodone DVC* 3817B. Según Méndez Dosuna (2016: 121), 186A y 187A forman una sola pregunta disyuntiva (hόπᾱι κα νο͂ς φέρει), lectura adoptada en la tesis (cf. cap. beocio, §4.4.1).",
    photos: FOTOS_M185,
  },
  {
    id: "190B", dialect: "beocio", date: "Mediados del s. V a.C.",
    ami: "ΑΜΙ 12294", siglum: "M185", autopsy_year: 2025, related: ["186A", "187A"],
    text_dvc: "γᾶν Ϝοικε͂ι πότερα\nἐν Ὀπόεντι;",
    carlos: "La rho coincide con la de *I.Dodone DVC* 187A, las formas de alfa parecen iguales, y los trazos son muy parecidos en las tres caras. La segunda omicron de la línea 2 muestra un punto interior, característica habitual de la epigrafía pública del centro de Grecia y del Peloponeso, donde se trazaban las letras redondas con compás (cf. Martín González 2021: 250). El mismo rasgo aparece en *I.Dodone DVC* 296A. La digamma presenta forma de C con los extremos rectos (cf. Alonso Déniz 2022: 444), configuración ajena al alfabeto epirota.",
    photos: FOTOS_M185,
  },
  // ═════════ DORIS SEVERIOR ═════════
  {
    id: "268A", dialect: "severior", date: "Finales del s. V o principios del s. IV a.C.",
    ami: "ΑΜΙ 12953", siglum: "M204", autopsy_year: 2024, autor: null, related: ["269A", "270B", "271B"],
    text_dvc: "[θεὸς τύχα• ἐρωτ]ε͂ι ἁ πόλις\n[τῶν Δωδωνα]ίων τὸν Δί-\n[α τὸν Νᾶο]ν καὶ τὰν Δι-\n[ώναν περὶ τ]ῶ σαμείω τῷ\n[- - -]γενομένω τί\n[κα εἴη λώϊ]ον καὶ ἂμει-\n[νον - - -] ἢ̣ μηδὲν\n[- - - γέν]οιτο",
    carlos: "La secuencia ΩΣΑΜΕΙΩ es de lectura segura, lo que confirma el [τ]ῶ σαμείω de *I.Dodone DVC* y su vocalismo severior. La laminilla se partió a propósito: el corte es limpio y posterior a la escritura, puesto que hay letras en medio de él. Las inscripciones de la cara opuesta no permiten calcular la extensión de la laguna izquierda, dato decisivo para valorar las restituciones del etnónimo ([τῶν Δωδωνα]ίων en *I.Dodone DVC*, [Ταραντί]νων en CIOD y la objeción de Petrovic apud DOL). En la l. 7 no se lee la ⟨Ν⟩ final y en la l. 8 no se lee la última ⟨Ο⟩.",
    photos: ["assets/autopsias/268A/m204-dvc-268a-editado.jpg", "assets/autopsias/268A/m204-dvc-268a.jpg"],
  },
  {
    id: "3354A", dialect: "severior", date: "Finales del s. V a.C.",
    ami: "ΑΜΙ 13184", siglum: "M1125", autopsy_year: 2024, autor: null, related: ["3355B", "3356B"],
    text_dvc: "[θε]ός· Αὐτάριον Παρμενίσκω ἐ̣κ̣ Τάτα[ς - - -]\n[.]Ν Παρεσίναν Ζ̣ο̅ΐλαν [. .]ΡΕΟΙ Παρμε[- - -]\nΜ[. . . .]ΟΙ[. . .]ΝΟΝ[. . . 6 . . .] ἐρ̣γάζεσθαι [. .][- - -]",
    carlos: "Letras muy irregulares, trazadas de forma desigual, como si el redactor hubiera escrito en vilo. La irregularidad del ductus apunta a un redactor poco versado en la escritura y resulta compatible con la interpretación de Παρμενίσκω como lapsus de un escriba que vacila entre ⟨Ο⟩, ⟨ΟΥ⟩ y ⟨Ω⟩ en plena transición alfabética (Lhôte 2017a: 153).",
    photos: ["assets/autopsias/3354A/1125-dvc-3354a.jpg", "assets/autopsias/3354A/1125-dvc-3354a-1.jpg"],
  },
  // ═════════ NO JÓNICO-ÁTICO (5A, 135A y 1108A; hasta el 06/10/2026, en el grupo dórico) ═════════
  {
    id: "5A", dialect: "noJonAt", date: "Mediados del s. V a.C.",
    ami: "ΑΜΙ 12209", siglum: "M20", autopsy_year: 2024, related: [],
    text_dvc: "Κλεάνορι περὶ γενεᾶς\nπατρο̅ιό̅χο̅ ἐκ τᾶς νῦν\nἐόνθας γυναικός.",
    carlos: "Hay un trazo antes de la primera ⟨Κ⟩ que podría ser una ⟨Ι⟩ o una ⟨Γ⟩, y otro al principio de la segunda línea, en forma de iota tumbada hacia la derecha. Delante de ΕΟΝΘΑΣ hay un hueco que parece anterior a la inscripción. La lectura ΕΟΝΘΑΣ es segura (la épsilon se ve nítidamente con todos sus trazos), de modo que la autopsia confirma la edición de *I.Dodone DVC* frente a la de *I.Dodone Lhôte*, que la desmentía. La última línea presenta formas de letras distintas, por lo que podría ser una inscripción independiente. Dialecto dórico, con alfabeto de Dodona poco caracterizado. πατρο̅ιό̅χο̅ aparece en las leyes de Gortina como πατρο̅ιό̅κος, término occidental. Méndez Dosuna (2008: 74): Κλεάνορι no es un anacoluto, sino el beneficiario de la consulta. Méndez Dosuna (2018b: 47): ἐόνθας es muy problemático (participio femenino de εἰμί inédito; Evangelidis leyó Γόνθας). Alonso Déniz (comunicación oral, 2025) lo relaciona con ἐασσαι de 1193 y con las formas ΠΑΝΘΑ (< πάνσα) de Olimpia, por lo que podría ser una forma eleia.",
    photos: [
      "assets/autopsias/5A/facsimil-5a.jpg",
    ],
  },
  {
    id: "135A", dialect: "noJonAt", date: "Segunda mitad del s. V a.C.",
    ami: "ΑΜΙ 12240", siglum: "M153", autopsy_year: 2024, related: [],
    text_dvc: "ἦ Μιλήϊός τις ἐναν̣-\nτίος hόρο̅ δύνατ-\nαι Ϝοικε͂σαι;",
    carlos: "Letras muy regulares y esquemáticas, parecidas a las de las inscripciones públicas. En ϜΟΙΚΕ͂ΣΑΙ hay una beta corintia, no una épsilon; las de las líneas 1 y 3 son muy parecidas, aunque no idénticas. No es descartable el empleo de varias manos, aunque no lo parece. Alfabeto corintio arcaico: épsilon corintia en ἐνάντιος, sigma de cuatro ramas, digamma, ⟨Η⟩ como aspiración y e larga abierta, salvo en Ϝοικε͂σαι, que emplea la grafía arcaica ⟨Ε⟩. Μιλήϊός remite a Μιλήσιος, sin que esté claro si hay un lapsus o una aspiración de la sigma intervocálica hasta su desaparición; la palabra está escrita, además, en alfabeto milesio. La pérdida de la silbante es rasgo del laconio, eleo, chipriota y argivo, pero Méndez Dosuna (1985: 134-135) la considera un error del lapicida en casos paralelos de Dodona. El consultante vendría de una colonia corintia, y se supone una omisión de la sigma antes que una aspiración, desconocida en estas colonias. Nieto Izquierdo (2019: 108) la cita como ejemplo de pregunta total directa con ἦ.",
    photos: [
      "assets/autopsias/135A/facsimil-135a.jpg",
    ],
  },
  {
    id: "1108A", dialect: "noJonAt", date: "Mediados del s. V a.C.",
    ami: "ΑΜΙ 12521", siglum: "M454", autopsy_year: 2025, related: ["1109A"],
    text_dvc: "δρυὸς δ' ἀ-\nε̅θαλ(οῦ)ς ἐ͂ τύχ-\nοιμι ἐπικό-\nπτο̅ν hᾶι κα\nhιαρόν;",
    carlos: "Escrita encima de *I.Dodone DVC* 1109A, en estilo pseudo-esticódon. Como propone Lhôte, la ⟨Β⟩ de la segunda línea pertenece claramente a la inscripción siguiente y no a esta, por su posición, tamaño y profundidad. Los editores interpretan la última palabra, escrita en vertical al margen, como la última línea; Méndez Dosuna (2016: 126) propone que sea un texto independiente de otra mano, pues la forma de las letras no coincide, y sugiere δρυος ΔΑ ‹Κ›εφαλάς ‘las copas del roble’ frente a ἀε̅θαλ(οῦ)ς. Alfabeto corintio del tipo epirota. Si la ⟨Ε⟩ corintia de la segunda línea pertenece a 1109A, el texto sería ΔΑΦΑΛΑΣ (hápax explicable como δα- + φαλός ‘blanco’, un tipo de roble), porque la ⟨Θ⟩ con barra que leen los editores es inviable. Cabe relacionarla con 2951 + 2952, que menciona también un roble y un verbo de cortar. Méndez Dosuna (2024: 4.1): hιαρόν con vocalismo dórico.",
    photos: [
      "assets/autopsias/1108A-1109A/facsimil-1108a-1109a.jpg",
    ],
  },
  // ═════════ JÓNICO-ÁTICO-KOINÉ (2160, Διών⟨η⟩ν tras la autopsia; fila 148 de Resúmenes) ═════════
  {
    id: "2160", dialect: "jonicoAtico", date: "Segunda mitad del s. IV a.C.",
    ami: "ΑΜΙ 12907", siglum: "M764 + M766", autopsy_year: 2025, related: [],
    text_dvc: "[ὁ δεῖνα] ἐ̣ρωτᾶι τὸν Δί(α) τὸν Νάϊ(ο)ν̣ καὶ τὴν Διώνα[ν - - -]",
    carlos: "La lectura τὴν Διώνα(ν) de los editores es incorrecta: en la fotografía se aprecia que la última letra no es una ⟨Α⟩, sino una ⟨Ν⟩ sin terminar. El consultante escribe ΤΟΝ ΔΙΕ ΤΟΝ ΝΑΙΑΝ por error. Giannakis y Crespo (2019: 50) la consideran una mezcla de dórico y koiné (Διώνα + τὴν).",
    photos: [
      "assets/autopsias/2160/facsimil-2160.jpg",
    ],
  },
  // ═════════ SIN CLASIFICAR (306A, en la laminilla de 307A; 1109A, solo un antropónimo) ═════════
  {
    id: "306A", dialect: "sinClasificar", date: "Segunda mitad del s. V a.C.",
    ami: "ΑΜΙ 12284", siglum: "M211", autopsy_year: 2025, related: ["307A", "308A"],
    text_dvc: "ΗΑΡΓΑΙΑΝΝΑϜΟ ἐ͂ λόϊο(ν) βέ(λτιον)",
    carlos: "Se ha perdido un pequeño fragmento en la parte inferior de la laminilla. Lecturas seguras; la alfa de ΝΑϜΟ no se lee. Los editores atribuyen la inscripción al alfabeto de la Élide o de Eubea y proponen alternativamente ἦ Ἀργαίαν νάϜο o ἦ ἀρ γαῖαν ναϜο[ς]. Johnston (2021: 113) señala que el alfabeto propuesto contrasta con el dialecto dórico de la inscripción, sin justificarlo. Comparte laminilla con *I.Dodone DVC* 307A, escrita debajo, y 308A.",
    photos: [
      "assets/autopsias/306A-307A/facsimil-306a-307a.jpg",
    ],
  },
  {
    id: "1109A", dialect: "sinClasificar", date: "S. IV a.C.",
    ami: "ΑΜΙ 12521", siglum: "M454", autopsy_year: 2025, related: ["1108A"],
    text_dvc: "Ἀρ̣ι̣στόνικος\n[- - - - -]",
    carlos: "Escrita debajo de *I.Dodone DVC* 1108A. La ⟨Β⟩ de la segunda línea de 1108A pertenece en realidad a esta inscripción, y tres huecos después se lee ΤΑΝ. El texto quedaría así: Ἀρ̣ι̣στόνικος | - - - τὰν [- - -].",
    photos: [
      "assets/autopsias/1108A-1109A/facsimil-1108a-1109a.jpg",
    ],
  },
];
