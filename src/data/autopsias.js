// Autopsias de laminillas en la Eforía de Antigüedades de Ioánina.
// Campos: id, dialect (clave del capítulo), date, ami (inventario), siglum,
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
    id: "934A", dialect: "tesalio", date: "Primera mitad del s. V a.C.",
    ami: "ΑΜΙ 12476", siglum: "M409", autopsy_year: 2025, related: [],
    text_dvc: "Περί νείκειος\nΘειοτιμίδας",
    carlos: "La letra final del antropónimo es una ⟨A⟩, como ya proponía *I.Dodone Lhôte* 149. La zona, aunque erosionada, no admite la lectura alternativa ⟨E⟩ sugerida con dudas en el *I.Dodone DVC* ni la propuesta por Méndez Dosuna (2016: 126); los trazos son inequívocos y el facsímil del *I.Dodone DVC* no los refleja con precisión. La sigma final presenta forma de ç (lunar), de modo que el soporte combina distintas formas para una misma letra. El alfabeto resulta compatible con el epicórico tesalio.",
    photos: [
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
    carlos: "Lectura εἰ οὐ ἔσσεται de *I.Dodone DVC* confirmada. Por tanto, εἶ tesalio (= át. ἦ). Las formas de las letras no coinciden con las de *I.Dodone DVC* 2246A: la ypsilon presenta forma de V y la sigma cuatro trazos.",
    photos: ["assets/autopsias/2247A/m793-dvc-2247a-editado.jpg"],
  },
  {
    id: "3007A", dialect: "tesalio", subdialect: "Histiótide", date: "ss. V-IV a.C.",
    ami: "ΑΜΙ 13121", siglum: null, autopsy_year: 2024, related: ["3008A"],
    text_dvc: "π(ερ') ὕδ̣ατ̣(ο)ς : Τέ̅ϊος\nκαὶ Σθε̅σι",
    carlos: "Lectura ὕδατες confirmada; los editores del *I.Dodone DVC* corrigen en ὕδατος, pero la enmienda no es necesaria si se reconoce el cambio /o/ > /e/ en sílaba final propio de Histiótide. La línea 1 presenta sobre la iota un trazo que la cruza (posible chi en forma de cruz). En la línea 2, en la secuencia ΣΘΕΣΙ, hay una pequeña ⟨T⟩ que sobresale de la theta sin completarse: parece como si el lapicida hubiera vacilado entre escribir τ o θ y se hubiera arrepentido. La forma de la sigma varía a lo largo del soporte.",
    // 3007A y 3008A comparten cara: mismas fotos de la laminilla ΑΜΙ 13121
    photos: [
      "assets/autopsias/AMI-13121/ami-13121-1.jpg",
    ],
  },
  {
    id: "3008A", dialect: "tesalio", date: "Primera mitad del s. IV a.C.",
    ami: "ΑΜΙ 13121", siglum: null, autopsy_year: 2024, related: ["3007A"],
    text_dvc: "ἐ͂ ἐλ λιμένι χαλκοπο̅λέμεν;",
    carlos: "La inscripción es más reciente que *I.Dodone DVC* 3007A: algunos de sus trazos se superponen a ella. La autopsia reveló una segunda línea inédita en la que se lee τυχαία (cf. cap. tesalio, §§4.2.3 y 6.8). La forma de las letras de τυχαία coincide con la de la línea 1, en particular la forma de chi. No se aprecian trazos ni a la izquierda ni a la derecha, de modo que la segunda línea está completa. La edición completa de la inscripción figura en Candel Lozano (2026).",
    photos: [
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
    id: "190B", dialect: "beocio", date: "Segunda mitad del s. V a.C.",
    ami: "ΑΜΙ 12294", siglum: "M185", autopsy_year: 2025, related: ["186A", "187A"],
    text_dvc: "γᾶν Ϝοικε͂ι πότερα\nἐν Ὀπόεντι;",
    carlos: "La rho coincide con la de *I.Dodone DVC* 187A, las formas de alpha parecen iguales, y los trazos son muy parecidos en las tres caras. La segunda omicron de la línea 2 muestra un punto interior, característica habitual de la epigrafía pública del centro de Grecia y del Peloponeso, donde se trazaban las letras redondas con compás (cf. Martín González 2021: 250). El mismo rasgo aparece en *I.Dodone DVC* 296A. La digamma presenta forma de C con los extremos rectos (cf. Alonso Déniz 2022: 444), configuración ajena al alfabeto epirota.",
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
];
