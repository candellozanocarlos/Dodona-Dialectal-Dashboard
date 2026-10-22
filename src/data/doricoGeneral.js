// Generado por scripts/datos_dorico_general.py: no editar a mano.
// Fuentes: DVC_v5_FINAL.xlsx (hoja Datos; DIALECTO_SUB «Doris mitior» y «Dórico Magna Grecia», 174 inscripciones,
// Resúmenes fila 156), DORICO_GENERAL_1_Redaccion_v55 (§2-§7) y graficos_dorico_fonetica.py (matrices y listas de §4).

export const INTRO_FON_DOR = "Los rasgos fonéticos que el dórico comparte con el resto del griego occidental están bien representados en las laminillas, pero rara vez bastan para atribuir una consulta al grupo. La mayoría son arcaísmos que el dórico conserva junto con otros dialectos no jónico-áticos, como la conservación de ᾱ heredada o de /t/ ante /i/, de modo que solo excluyen el jónico-ático; otros, como la contracción de α + ε en η, separan el dórico del tesalio y del lesbio, pero no del beocio. Entre ellos, solo la desinencia -ντι de tercera persona del plural, que se examina aquí junto con el resto de los casos de /t/ conservada ante /i/, excluye todo el grupo eólico, y por esa razón los criterios de adscripción expuestos en §3 descansan sobre todo en rasgos morfológicos y léxicos. Su interés reside, ante todo, en lo que revelan sobre la cronología de la escritura y la diversidad de los redactores. Los tratamientos propios del griego noroccidental, como la contracción de εο en ου, la grafía ἰς por εἰς, στ por σθ o la abreviación de -ωι en -οι, y el vocalismo severior se estudian en sus capítulos respectivos.";
export const INTRO_MORF_DOR = "Como en la fonética, la mayor parte de los rasgos morfológicos del dórico son arcaísmos heredados o selecciones que comparte con otros dialectos, y entre los que sirven para identificar las consultas solo el futuro dórico es una innovación exclusiva del griego occidental. Su valor para la clasificación depende, en consecuencia, de los dialectos con los que se compartan: la desinencia -μες separa el dórico del jónico-ático y del eolio, mientras que el infinitivo atemático en -μεν, el artículo τοί o la partícula κα solo lo separan del jónico-ático. La desinencia -ντι de tercera persona del plural y la flexión contracta de ἐπερωτάω y κοινάομαι se han examinado con la fonética (cf. §4.2.1 y §4.1.2.1).";
// Rasgos: cada apartado de §4-§7 con su texto y las inscripciones que cita (claves «123A» o «LOD 94»).
export const RASGOS_DOR = [
 {
  "id": 1,
  "sec": "§4.1.1",
  "name": "Conservación de /ᾱ/ heredada",
  "short": "Conservación de /ᾱ/ heredada",
  "cat": "Fonología",
  "desc": "El dórico conserva, como el resto de los dialectos griegos salvo el jónico-ático, la ᾱ del griego común, que en jónico pasó a η y en ático solo se mantuvo tras ε, ι y ρ. Es el rasgo dórico más visible de las laminillas, porque afecta a las palabras de las fórmulas con que se abren y se cierran las preguntas, τύχα ἀγαθά, Διώνα, Διώναι y Διώναν, γενεά o παμπασία, a sustantivos como γᾶν (I.Dodone DVC 430, primera mitad del s. IV a.C.; 1244, segunda mitad del s. IV a.C.) o ἁ γυνά (1193A, principios del s. IV a.C.; 2980, primera mitad del s. IV a.C.), a formas verbales como τέθνακε (2980) o σαμᾶναι (542A, principios del s. IV a.C.) y a los antropónimos masculinos en -ας, como Πεσεύας en 3109A (mediados del s. IV a.C.), Κερδύλλας en 1369B (segunda mitad del s. IV a.C.) o Μενέστας en 3325A (finales del s. V a.C.). La η solo aparece en lugar de la ᾱ heredada en el étnico Μιλήϊος de I.Dodone DVC 135A (segunda mitad del s. V a.C.), formado sobre el nombre jonio de Mileto, mientras que ἐναυπαγήσατο de I.Dodone Lhôte 94 (primera mitad del s. IV a.C.), por ejemplo, conserva la ᾱ de la raíz de πάγνυμι frente al ático ἐναυπηγήσατο. En los términos que designan instituciones jurídicas o sociales la forma dórica es constante. Las formas de παμπασία en las que se lee la vocal conservan siempre la ᾱ, como περὶ παμπασίας de I.Dodone DVC 428B (principios del s. IV a.C.), περὶ <παμ>πασ̣ίας̣ de 261B (mediados del s. IV a.C.) o πανπασίου de 2514 (principios del s. IV a.C.), y lo mismo ocurre con el compuesto ἐπίπασι[ς] de 430 y con ἐπιπασίου de 4141A (primera mitad del s. IV a.C.). Es significativo, además, que el teónimo Διώνα conserve la ᾱ también en consultas redactadas en otros dialectos, a veces como único rasgo dórico, quizá porque, como suponen Crespo y Giannakis, Διώνη era inexistente o rara en los demás dialectos, y que lo mismo ocurra con παμπασία, cuya única forma con η aparece en una consulta de mezcla dialectal. Su valor diagnóstico es, sin embargo, limitado. La conservación de ᾱ no separa el dórico de los dialectos eólicos, que también la conservan, y ni siquiera frente al jónico-ático es una prueba concluyente, porque las fórmulas con ᾱ aparecen también en las consultas de mezcla dialectal, como la que se abre con θεὸς τύχα ἀ̣γαθά y escribe más adelante κατὰ γῆ[ν], con la η del jónico-ático (I.Dodone DVC 2039A, segunda mitad del s. IV a.C.). Méndez Dosuna (2018b: 35-36) ha observado que las formas dóricas inesperadas tienden a concentrarse en las fórmulas introductorias, quizá porque los consultantes se servían de un modelo redactado en el dialecto del santuario. Por esa razón, la ᾱ solo permite contar una inscripción entre las no jónico-áticas, como I.Dodone DVC 320A (ss. V-IV a.C.), θεὸς τύχα· [ὁ δεῖνα ἐπερωτῆι - - -], o, entre los textos completos, 84 (finales del s. V a.C.), que solo la conservan en la fórmula inicial, y ni siquiera eso cuando aparece en una restitución o en un antropónimo (cf. la introducción, §3.2.2-3.2.3).",
  "dvcs": [
   "430",
   "1244",
   "1193A",
   "2980",
   "542A",
   "3109A",
   "1369B",
   "3325A",
   "135A",
   "LOD 94",
   "428B",
   "261B",
   "2514",
   "4141A",
   "2039A",
   "320A",
   "84"
  ]
 },
 {
  "id": 2,
  "sec": "§4.1.2.1",
  "name": "La contracción de α + ε > η",
  "short": "La contracción de α + ε > η",
  "cat": "Fonología",
  "desc": "En griego occidental, en beocio y en arcadio, la contracción de α con ε o con el diptongo ει da η, frente a la ᾱ del jónico-ático y del tesalio. Así dórico νικῆν, νικῆτε frente al ático νικᾶν, νικᾶτε. El lesbio, cuyos verbos contractos siguen la flexión atemática, no ofrece formas contractas de este tipo. Andrés-Alba (2021: 48-49) ha subrayado, además, que en los dialectos de vocalismo mitior esa η no puede proceder del paso de los verbos en -άω a la flexión en -έω, que habría dado una /eː/ notada ΕΙ, de modo que remonta a una contracción de α + ε. Es la contracción mejor documentada del capítulo, porque afecta a los verbos con que se formulan las preguntas, ἐπερωτάω, ἐρωτάω y κοινάομαι, este último equivalente dórico del ático κοινόομαι. La forma contracta se lee en once inscripciones: por ejemplo ἐπερωτῆι en I.Dodone DVC 3473A (primera mitad del s. IV a.C.), ἐρω̣[τ]ῆι en 2648A (finales del s. IV a.C.), o ἐπικοινῆται en 1369B (segunda mitad del s. IV a.C.), además del infinitivo νικῆν de I.Dodone DVC 4 (s. IV a.C.). En otras doce la desinencia está restituida, como en ἐπικοιν[ῆται] de I.Dodone DVC 1088A (finales del s. V a.C.). Solo dos inscripciones del capítulo parecen apartarse de esta norma, y ninguna de forma segura. En I.Dodone DVC 160A (finales del s. V a.C.), inscripción que presenta un alfabeto de la Magna Grecia o de Sicilia, los editores restituyen [ὁ δεῖνα ἐπερωτ]ᾶι, pero solo se conserva la secuencia final -αι, compatible también con [ἐπικοινῆτ]αι, la restitución propuesta en CIOD. En I.Dodone DVC 929A (primera mitad del s. V a.C.), en alfabeto corintio, el infinitivo κοινᾶν de ἐ͂ κοινᾶν δε͂ presenta, en cambio, una ᾱ; sin embargo, en CIOD se propone entender ἐ͂ κοινάν δε͂ [- - -], con una laguna a la derecha y el adjetivo κοινάν en lugar del infinitivo de los editores, puesto que en un texto corintio se esperaría el infinitivo κοινῆν y no κοινᾶν. Dos grupos de grafías merecen atención. La desinencia se escribe -ῆ, sin iota, en ἐπερωτῆ de I.Dodone DVC 2508A y ἐρωτῆ̣ de 3661A, y -εῖ en ἐπερωτεῖ de I.Dodone Lhôte 121A. Lhôte (2006: 397-398) interpretó las formas de este último tipo como testimonio del paso de ἐρωτάω a la flexión en -έω, pero Méndez Dosuna (2018b: 44) ha argumentado que no lo prueban, puesto que pueden resultar de la abreviación del diptongo largo de ἐρωτῆι y ἐπερωτῆι, fenómeno mucho más frecuente. La cronología de las grafías apoya esta segunda explicación. Las tres formas del capítulo son de la primera mitad del s. IV a.C. o posteriores, es decir, del período en que el diptongo /ɛːi/ se reducía por dos vías, la pérdida del segundo elemento, que reflejan las grafías sin iota, y la abreviación del primero, que en ático se manifiesta en la notación ΕΙ de las desinencias desde el s. IV a.C., como documenta el propio Lhôte (2006: 388-390). La abreviación en -ει se documenta, además, en el subjuntivo διεξένθει de I.Dodone DVC 2445 (mediados del s. IV a.C.), en el que no cabe pensar en la flexión en -έω. El paso a la flexión en -έω está documentado, con todo, en [ἐπ]ερωτέο̣ντι de I.Dodone DVC 3777 (segunda mitad del s. IV a.C.), de modo que el ἐπερωτεῖ de I.Dodone Lhôte 121A admite en principio las dos lecturas. La cuestión se examina con la flexión verbal (§5.2.5).",
  "dvcs": [
   "3473A",
   "2648A",
   "1369B",
   "4",
   "1088A",
   "160A",
   "929A",
   "2508A",
   "3661A",
   "LOD 121A",
   "2445",
   "3777"
  ]
 },
 {
  "id": 3,
  "sec": "§4.1.2.2",
  "name": "La contracción de ᾱ + ο/ω > ᾱ",
  "short": "La contracción de ᾱ + ο/ω > ᾱ",
  "cat": "Fonología",
  "desc": "La secuencia ᾱο / ᾱω contrae en ᾱ en griego occidental, en lesbio y en la mayor parte de los testimonios tesalios, frente a εω / ω del jónico-ático y frente al beocio, que tiende a conservar la secuencia sin contraer (cf. §3.1.5 del capítulo beocio). Las formas son menos numerosas de lo que cabría esperar, porque las inscripciones oraculares apenas atestiguan el genitivo plural de la primera declinación. El genitivo plural en -ᾶν solo se lee en θεᾶν de I.Dodone DVC 608A (s. V a.C.), en la alternativa entre dioses y diosas (θεο͂ν ε̄̓̀ θεᾶν), y el genitivo masculino en -ᾱ, en dos patronímicos: Αἰνέα de 2648A (finales del s. IV a.C.) y Ἀρχωνίδα de I.Dodone Lhôte 123 (s. IV a.C.), en Ἀρχέβιος ὁ Ἀρχωνίδα υἱός y Σώσανδρος ὁ Ἀρχωνίδα δοῦλος, que Méndez Dosuna (1985: 92) ya aducía como ejemplo del genitivo epirota en -ᾱ. El tratamiento es coherente, y no se documenta ninguna forma sin contraer de tipo beocio. Su valor diagnóstico es, sin embargo, limitado, puesto que excluye el jónico-ático y el beocio, pero no el lesbio ni la mayor parte del tesalio.",
  "dvcs": [
   "608A",
   "2648A",
   "LOD 123"
  ]
 },
 {
  "id": 4,
  "sec": "§4.1.2.3",
  "name": "Vocales en hiato",
  "short": "Vocales en hiato",
  "cat": "Fonología",
  "desc": "A diferencia de las contracciones isovocálicas εε y οο, comunes a la mayoría de los dialectos, las de vocales de timbre distinto se limitan con frecuencia al ático. El dórico no contrae en general εο y εα en ου y η, como hace el ático, sino que conoce varios tratamientos: en el noroccidental, en corintio, en megarense y en aqueo se conservan en hiato, mientras que en buena parte del dórico, como el laconio, el heracleota, el argivo o el cretense, predomina la sinicesis “por la izquierda” seguida de la formación de una yod, que da grafías ιο, ια y, con alargamiento compensatorio, ιω en heracleota. Otros dialectos conocen la sinicesis “por la derecha”, εο > ευ, frecuente en las islas dóricas y documentada también en el continente, y la hiféresis de una de las dos vocales. La contracción de εο en ου, que Méndez Dosuna (2018b: 49) considera un proceso autóctono del Noroeste, se examina en el capítulo siguiente. El hiato es el tratamiento más frecuente en las inscripciones dóricas del corpus. Se mantiene en los participios ναυκλαρέο̄ν de I.Dodone DVC 1182A, Ϝοικέο̄ν̣ de 1380A y [γ]αο<ρ>γέο̄ν de 3612B, las tres de la primera mitad del s. V a.C., en los presentes Ϝο̣ικέω de 3315A (ss. V-IV a.C.), συνϜοικέω de 1193A (principios del s. IV a.C.) y ποέο̄μες de 2747A (segunda mitad del s. V a.C.), en el futuro νικασέω de 2521A (primera mitad del s. IV a.C.), en los dativos de participio πλέοντι de 228B (principios del s. IV a.C.), 1244 (segunda mitad del s. IV a.C.) y 3946B (segunda mitad del s. IV a.C.), [α]ἰτέοντι de 3517A (segunda mitad del s. IV a.C.) y [ἐπ]ερωτέο̣ντι de 3777, en πωλέω<ν>τι de I.Dodone Lhôte 101B (s. IV a.C.), en el optativo Ϝοικέοιε[ν] de la consulta pública de los corcirenses, I.Dodone Lhôte 1 (primera mitad del s. IV a.C.), en ἀδελφεόν de I.Dodone Lhôte 56 (s. IV a.C.), en el adverbio ἀσφαλέω[ς] de la consulta de los dodoneos I.Dodone DVC 2425A (primera mitad del s. IV a.C.), frente al ático ἀσφαλῶς, y en los genitivos de temas en -s Ἀριστοκλέος de I.Dodone Lhôte 123 y θέρεος de I.Dodone DVC 228B. La sinicesis εο > ευ, que está documentada en todo el dominio dórico, solo aparece en el participio ὠνεύμενοι de I.Dodone DVC 2593A (primera mitad del s. IV a.C.). Del mismo proceso da testimonio indirecto la grafía ultracorrecta εὀχομένοις por εὐχομένοις de I.Dodone DVC 3363B (primera mitad del s. IV a.C.). Según Méndez Dosuna (2016: 137), Delfos y, sobre todo, Corcira son las procedencias más probables de esta consulta. Ambos testimonios se ajustan, por lo demás, a la cronología de Buck (1955: §42.5), que no encontraba la grafía ευ por εο en las inscripciones antes del s. IV a.C. Más compleja es la grafía ηυ por εω del participio ἐποικοδομῆυν de I.Dodone Lhôte 118B (s. IV a.C.), que tiene dos paralelos en el corpus, el subjuntivo χρῆυνται de I.Dodone DVC 172A (= I.Dodone Lhôte 144, finales del s. V a.C.) y ν[α]<υ>κλαρη[ῦ]ν̣ de I.Dodone Lhôte 93 (ss. IV-III a.C.). Lhôte (2006: 392-393) atribuyó estas grafías a una “metátesis de cantidad inversa” (εω > ηο) seguida del cierre del segundo elemento (ηο > ηυ), un cambio sin paralelos que Méndez Dosuna (2008: 66; 2018b: 42) y Alonso Déniz (2017: 129-130) consideran inverosímil. El propio Alonso Déniz (2017: 130-131), siguiendo a Bechtel, propone en su lugar una analogía morfológica: en un dialecto en que -εοντ- había pasado a -ευντ-, el nominativo del participio se habría rehecho sobre el modelo v̄ν : v̆ντος de φέρων : φέροντος, con vocal larga en el nominativo y breve en los demás casos, de modo que ἐποικοδομεῦντος habría generado un nominativo análogo ἐποικοδομῆυν, como los nominativos Τιμοκρηῦν y Ἑρμοκρηῦν de Telos; para χρῆυνται supone una remodelación semejante del subjuntivo (2017: 134-135). La propuesta explica que dos de las tres formas sean nominativos de participio, pero exige un dialecto con -ευντ- por -εοντ-. En las inscripciones noroccidentales la sinicesis εο > ευ apenas sale de los antropónimos y de algún término religioso, y la flexión verbal conserva el hiato o contrae en ου, mientras que, en las islas dóricas, como Rodas, Cos o Tera, la grafía ευ por εο es frecuente desde el s. III a.C.; a ese ámbito remiten los nominativos de Telos y la atribución de I.Dodone Lhôte 118B a Rodas que propone Striano (2017: 144-153). Las laminillas matizan, con todo, ese reparto, puesto que la consulta de los dodoneos I.Dodone DVC 1089B (ss. V-IV a.C.), que se cuenta en el capítulo siguiente, escribe [ἱ]στορεῦ[ν]τ̣ι, con la misma secuencia, de modo que tampoco puede descartarse la procedencia epirota que Lhôte (2006: 368) proponía con dudas. Lo único seguro es que se trata de una consulta dórica de procedencia incierta (cf. §2). La sinicesis por la izquierda, por su parte, solo podría documentarse, con alargamiento compensatorio de tipo heracleota, en ἐπαιτίωντι de I.Dodone Lhôte 126 (s. IV a.C.), si se acepta la interpretación de Lhôte (2006: 260-261) como variante de ἐπαιτέοντι. La hiféresis, en fin, afecta al primer miembro de los compuestos en Θεο-, como Θέλυτος en I.Dodone DVC 15A (= I.Dodone Lhôte 36, s. V a.C.), y al antropónimo femenino Κλεπο̄̀ι de I.Dodone DVC 2448A (primera mitad del s. V a.C.). Los datos confirman la diversidad de tratamientos que Lhôte (2006: 394) ya había advertido en su corpus. Ninguno es sistemático ni privativo de una región, y pueden convivir en textos de una misma comunidad: las tres consultas públicas en que intervienen los corcirenses, todas del s. IV a.C., escriben el optativo de tres maneras distintas: con hiato, Ϝοικέοιε[ν] en I.Dodone Lhôte 1; con contracción, ὁμονοοῖεν en 3 (primera mitad del s. IV a.C.); y con sinicesis, οἰκεῦεγ en 2 (segunda mitad del s. IV a.C.). Con todo, el predominio del hiato concuerda con lo que cabe esperar en el entorno del santuario, el Noroeste y las colonias corintias, donde la sinicesis con formación de yod es rara, de modo que, si la interpretación de Lhôte es correcta, I.Dodone Lhôte 126 procedería de otra zona del dominio dórico.",
  "dvcs": [
   "1182A",
   "1380A",
   "3612B",
   "3315A",
   "1193A",
   "2747A",
   "2521A",
   "228B",
   "1244",
   "3946B",
   "3517A",
   "3777",
   "LOD 101B",
   "LOD 1",
   "LOD 56",
   "2425A",
   "LOD 123",
   "2593A",
   "3363B",
   "LOD 118B",
   "172A",
   "LOD 93",
   "1089B",
   "LOD 126",
   "15A",
   "2448A",
   "LOD 3",
   "LOD 2"
  ]
 },
 {
  "id": 5,
  "sec": "§4.1.3",
  "name": "Las vocales medias largas y su notación",
  "short": "Las vocales medias largas y su notación",
  "cat": "Fonología",
  "desc": "Los dialectos dóricos del entorno de Dodona, el epirota y los demás noroccidentales, el corintio y el de sus colonias, pertenecen a la doris mitior (cf. §1), que distingue las vocales medias largas cerradas /eː/ y /oː/, surgidas de los alargamientos compensatorios y de las contracciones isovocálicas, de las abiertas /ɛː/ y /ɔː/ heredadas del griego común. Una vez adoptado el alfabeto jónico, las primeras se notan con los dígrafos ΕΙ y ΟΥ y las segundas con Η y Ω. Antes de esa adopción, la mayoría de los alfabetos epicóricos emplean Ε y Ο para todas las vocales medias, breves y largas, mientras que el corintio dispone de dos signos para las anteriores: la llamada épsilon corintia (Β) nota /e/ y /ɛː/, y Ε nota la /eː/ de cualquier origen, incluida la procedente del antiguo diptongo /ei/; en Corcira y en Anactorio esta última se escribe, en cambio, ΒΙ. El corpus documenta las tres situaciones. En alfabeto corintio, I.Dodone DVC 2977B (segunda mitad del s. V a.C.) y 3325A (finales del s. V a.C.) reservan la épsilon corintia para la /e/ breve y emplean Ε para la /eː/, la primera en ὀφε̄́λε̄ν (= ὀφείλειν) y la segunda en ἄμε̄νον (= ἄμεινον), una notación que, para Kostopoulos (2023: 125), es prueba del vocalismo mitior del corintio. La segunda inscripción está escrita en la variante corcirense de ese alfabeto. I.Dodone Lhôte 66A (último cuarto del s. V a.C.) muestra, en cambio, la introducción de la notación jónica en un alfabeto corintio, que se reconoce por la épsilon corintia, la sigma de cuatro trazos, la theta cruzada, la ípsilon arcaica y la ji en forma de X, aunque la gamma recuerda más a la del alfabeto argivo. Escribe con Η la /ɛː/ de ὑγιής y con ΕΙ el diptongo antiguo de εἴη, y Lhôte (2006: 153, 370) atribuye esa Η a una influencia temprana del alfabeto jónico, como la que se conoce en Atenas y en Delfos antes del 403/2 a.C. Varias consultas escritas en alfabetos arcaicos distinguen, por otra parte, la /oː/ secundaria, que notan con ΟΥ, de la /ɔː/ heredada, que notan con Ο: I.Dodone DVC 414A (finales del s. VI a.C.) escribe αὐτοῦ, de contracción, frente a hο̄ς y οὔπο̄; I.Dodone DVC 1426A (primera mitad del s. V a.C.) contiene ἐπάγουσα frente a [θυ]γ̣άτε̄ρ, y I.Dodone Lhôte 51 (primera mitad del s. V a.C.), a pesar de estar escrita por entero en alfabeto corintio arcaico (épsilon corintia, gamma lunada y san), contiene [κ]υούσα<ς>, cuyo dígrafo ΟΥ considera Lhôte (2006: 128) propio de las inscripciones corintias antiguas. Es un uso temprano que comparten la ley colonial de los locrios occidentales de Caleo (IG IX1²(3) 718; ca. 500-475 a.C.), que escribe ΕΙ para la /eː/ secundaria y ΟΥ para la /oː/ de alargamiento compensatorio, como en εἶμεν y τοὺς, frente a Ε y Ο para las vocales primarias y para la /oː/ de la contracción ο + ο (δαμο͂), y el epigrama del polyandrion de Ambracia (SEG 41:540A; ca. 550 a.C.), con ΟΥ en τοὺσδε y ἐσλούς. Entre las 174 inscripciones de adscripción dórica, 66 notan con Ε u Ο alguna vocal media larga, primaria, como en ἐ͂ (= ἦ), λο̄́ϊον o ἀγομένο̄[ι] de I.Dodone DVC 4161B (finales del s. V a.C.), o secundaria, como en ἐσσ̣ε͂ται de I.Dodone DVC 264A (mediados del s. V a.C.) o en el genitivo θἠματίο̄ de I.Dodone DVC 4. La mayoría son del s. V a.C., pero no faltan textos del s. IV a.C. que combinan las letras del alfabeto jónico con la notación antigua de las vocales secundarias. I.Dodone DVC 3473A (primera mitad del s. IV a.C.) escribe con Η y Ω ἐπερωτῆι y Διώναν, pero con Ε el futuro ἐσε͂ται; 1244 (segunda mitad del s. IV a.C.), ἦ con Η, pero οἰκε͂ν con Ε; e I.Dodone Lhôte 94 emplea Ω y Η en Ὦ, Ἀρχεφῶν, ἐναυπαγήσατο y σωτηρία, pero Ο en el genitivo κελομένο̄ το͂ Ἀπόλλωνος, frente a la Ω del mismo Ἀπόλλωνος, y Ε en ἐσσε͂ται. La notación con Ε del antiguo diptongo /ei/ es, en cambio, rara: Kostopoulos (2023: 142 n. 73) solo cuenta diez casos en el corpus, entre ellos σο̄θε͂μες de I.Dodone DVC 419A (primera mitad del s. V a.C.), αὐτε͂ de 1246A (finales del s. V a.C.) y 3315A (ss. V-IV a.C.) y ἐπε̄́γον[τι] de 4079A (finales del s. V a.C.), y advierte que palabras tan frecuentes como ἔπειτα o εἰ no se escriben nunca de ese modo. Estos datos tienen algunas consecuencias. La primera es que, en la mayoría de esas inscripciones, que no emplean Η ni Ω, la escritura no permite determinar el vocalismo, de modo que su adscripción a la doris mitior descansa en otros rasgos, como el léxico, y no en la fonética; en las de transición, en cambio, la Ε y la Ο de las vocales secundarias, frente a la Η y la Ω de las heredadas, excluyen el vocalismo severior. La segunda es que las inscripciones de transición reproducen una secuencia conocida en jónico, donde ΕΙ era la grafía habitual de /eː/ desde finales del s. V a.C., mientras que ΟΥ no se impuso en el genitivo temático hasta finales del s. IV a.C. La coexistencia de Η y Ε en un mismo texto puede responder, por tanto, a una convención gráfica de transición y no a una diferencia fonológica. La notación antigua plantea, además, un problema de interpretación, porque la Ε puede corresponder a /e/, a /eː/ o a /ɛː/. Como advierte Méndez Dosuna (2018b: 37 n. 48), en las consultas que no emplean signos específicos para las vocales medias largas una grafía como ΕΣ(Σ)ΕΤΑΙ es ambigua, porque admite tanto el futuro dórico contracto ἐσσεῖται como un futuro no contracto ἔσ(σ)εται. El alcance de esta ambigüedad para la identificación del futuro dórico se examina en la morfología verbal (§5.2.3). El tercer alargamiento compensatorio, por último, no se esperaba en estos dialectos, que mantuvieron sin cambios la vocal ante los grupos de sigma, líquida o nasal con digamma, y el capítulo no lo documenta: el hόρο̄ de I.Dodone DVC 135A, por ejemplo, conserva la ο breve de ὅρος (< *ὅρϝος), frente al jónico οὖρος.",
  "dvcs": [
   "2977B",
   "3325A",
   "LOD 66A",
   "414A",
   "1426A",
   "LOD 51",
   "LOD 3",
   "4161B",
   "264A",
   "4",
   "3473A",
   "1244",
   "LOD 94",
   "419A",
   "1246A",
   "3315A",
   "4079A",
   "135A"
  ]
 },
 {
  "id": 6,
  "sec": "§4.2.1",
  "name": "No asibilación de /ti/",
  "short": "No asibilación de /ti/",
  "cat": "Fonología",
  "desc": "El griego occidental, como el beocio y el tesalio, conserva la /t/ ante /i/ en una serie de formas en que el jónico-ático, el lesbio y el arcadochipriota asibilan en /s/: dórico δίδωτι, ϝίκατι, ποτί y Ποτειδάν frente al ático δίδωσι, εἴκοσι, πρός y Ποσειδῶν. El rasgo afecta también a la desinencia de tercera persona del plural, que el dórico mantiene como -ντι, mientras que el beocio y el tesalio presentan -νθι y el lesbio la asibila. En las inscripciones del capítulo, la /t/ se conserva en φατί de I.Dodone DVC 2977B (segunda mitad del s. V a.C.), en el sustantivo ἀκαθαρτίαν (ático ἀκαθαρσία) de I.Dodone Lhôte 14 (ss. IV-III a.C.), una de las consultas de los dodoneos, en las formas de ποτί, como ποτθέμενος de I.Dodone Lhôte 41 (último cuarto del s. VI a.C.), πὸτ τὸν ἀδελφεόν de I.Dodone Lhôte 56 (s. IV a.C.) o ποτ' ἄνδρα de I.Dodone DVC 2508A (mediados del s. III a.C.), y en la desinencia de tercera persona del plural, en ἐπερωτο͂ντι y μαστεύοντι de I.Dodone DVC 4 (s. IV a.C.), ἐπερω<ν>τῶντι de I.Dodone DVC 295B (mediados del s. IV a.C.), ἐπερωτῶντ[ι] de 2425A (primera mitad del s. IV a.C.), [ἐπερωτ]ῶντι de 2952B (finales del s. IV a.C.), [ἐπ]ερωτέο̣ντι de 3777 (segunda mitad del s. IV a.C.) y Ἐπερωτῶντι de I.Dodone Lhôte 14. La conservación de /t/ no separa el dórico del beocio ni del tesalio, que también la mantienen en ϝίκατι o ποτί, de modo que solo la desinencia verbal tiene valor diagnóstico frente al eolio. Su identificación exige, sin embargo, cautela, porque la secuencia -οντι coincide con el dativo singular de los participios, muy frecuente en las fórmulas oraculares. La mayoría de las formas en -οντι son, en efecto, dativos de participio, como πλέοντι en I.Dodone DVC 228B, 1244 y 3946B, μένοντι en 551A (mediados del s. IV a.C.), ἀμβαί̣νοντ(ι) en 3109A (mediados del s. IV a.C.) o [α]ἰτέοντι en 3517A, y solo se han tenido en cuenta aquellas cuya sintaxis demuestra que son terceras personas del plural. Por esa misma razón, consultas como I.Dodone DVC 3472A (segunda mitad del s. IV a.C.), con μένοντι, o 76 (finales del s. IV a.C.), con πράσ<σ>οντι, no se cuentan como dóricas. De ahí que la mayor parte de los testimonios seguros procedan de consultas colectivas, sobre todo de las de los dodoneos.",
  "dvcs": [
   "2977B",
   "LOD 14",
   "LOD 41",
   "LOD 56",
   "2508A",
   "4",
   "295B",
   "2425A",
   "2952B",
   "3777",
   "228B",
   "1244",
   "551A",
   "3109A",
   "3517A",
   "3472A",
   "76"
  ]
 },
 {
  "id": 7,
  "sec": "§4.2.2",
  "name": "La conservación de digamma",
  "short": "La conservación de digamma",
  "cat": "Fonología",
  "desc": "La /w/ inicial se conservó en la mayoría de los dialectos dóricos hasta el s. IV a.C., mientras que la intervocálica desapareció antes y solo se escribe en las inscripciones más antiguas; las islas dóricas del Egeo la habían perdido ya en época arcaica. En varios dialectos, como el laconio, el cretense, el argivo, el eleo o el corcirense, la grafía Β por ϝ refleja, en fecha posterior, una pronunciación fricativa. Diecinueve inscripciones del capítulo conservan la digamma, todas anteriores a mediados del s. IV a.C., salvo quizá I.Dodone Lhôte 56, fechada sin más precisión en el s. IV a.C., y la mayoría en alfabeto corintio. En posición inicial aparece en Ϝοι de I.Dodone Lhôte 41 (último cuarto del s. VI a.C.), Ϝισ̣[τορεῖ] de I.Dodone DVC 3732A (finales del s. VI a.C.), Ϝοεκέτας de 2368A (ss. VI-V a.C.), Ϝοικέο̄ν̣ de 1380A y <γ>αϜοργε͂ν de 2133B (ambas de la primera mitad del s. V a.C.), Ϝοικε͂σαι de 135A (segunda mitad del s. V a.C.), Ϝο̣ικέω de 3315A (ss. V-IV a.C.), συνϜοικέω de 1193A (principios del s. IV a.C.), Ϝοικέοιε[ν] de la consulta de los corcirenses I.Dodone Lhôte 1 (primera mitad del s. IV a.C.) y Ϝοίκαδε de I.Dodone Lhôte 56 (s. IV a.C.), y aparece también en los fragmentos ϜΟΡ de I.Dodone DVC 138A y Ϝός de 139A (ambas de la primera mitad del s. V a.C.). Por su parte, la intervocálica se conserva en siete ocasiones. Una de ellas es ἐπιζο̄́Ϝοι de I.Dodone DVC 413B (finales del s. VI a.C.). Las seis restantes son formas del verbo ἐ(ϝ)άω, que la investigación anterior no había reconocido: ἐϜο͂ν en I.Dodone DVC 309B (mediados del s. V a.C.) y 4150A (finales del s. VI a.C.), ἔϜον en I.Dodone DVC 15A (s. V a.C.), ε̄̓́Ϝο̄ν en I.Dodone Lhôte 35A y 37 (ambas del tercer cuarto del s. V a.C.) y ἐϜο͂ντες en I.Dodone DVC 963 (principios del s. V a.C.); frente a ellas, I.Dodone DVC 2593A (primera mitad del s. IV a.C.) presenta ya ἐῶντες, sin digamma. Su distribución cronológica coincide con la que se conoce para el dórico continental: la digamma se mantiene hasta la primera mitad del s. IV a.C. La de συνϜοικέω, en I.Dodone DVC 1193A, apoya su atribución a Corcira (cf. §5.2.6), y la digamma en forma de C de I.Dodone Lhôte 56, característica de la Magna Grecia y de Sicilia según Lhôte (2006: 139-140), excluye un redactor epirota y explica que la inscripción figure entre las de alfabeto occidental del capítulo (cf. §3). Ninguna inscripción del capítulo escribe, en cambio, Β por ϝ, una grafía que se examina en el capítulo siguiente. La conservación de la digamma tiene, por lo demás, escaso valor diagnóstico, porque es un arcaísmo común a la mayoría de los dialectos del continente, eólicos incluidos. Su presencia permite, a lo sumo, descartar las islas dóricas del Egeo, que la habían perdido en época arcaica, mientras que su ausencia no es relevante, dado que en el s. IV a.C. ya no se conservaba de forma general.",
  "dvcs": [
   "LOD 56",
   "LOD 41",
   "3732A",
   "2368A",
   "1380A",
   "2133B",
   "135A",
   "3315A",
   "1193A",
   "LOD 1",
   "138A",
   "139A",
   "413B",
   "309B",
   "4150A",
   "15A",
   "LOD 35A",
   "LOD 37",
   "963",
   "2593A"
  ]
 },
 {
  "id": 8,
  "sec": "§4.2.3",
  "name": "La aspiración",
  "short": "La aspiración",
  "cat": "Fonología",
  "desc": "Los dialectos dóricos conservan la aspiración inicial, a diferencia del eleo y del cretense, que la pierden, y la notan con Η en los alfabetos epicóricos. Tras la adopción del alfabeto jónico, en el que Η pasó a notar /ɛː/, la aspiración deja por lo general de escribirse. En algunos dialectos, como el locrio o el délfico, las palabras gramaticales más frecuentes tienden a perderla. Las consultas antiguas escriben la aspiración con regularidad. En el capítulo la notan con Η catorce inscripciones, todas en alfabeto corintio, como σύνhοδος de I.Dodone DVC 411A (finales del s. VI a.C.), hο̄ς de 414A (finales del s. VI a.C.), hάπερ de 15A (s. V a.C.), hισσαμένα̣ de 541B (primera mitad del s. V a.C.), hο̄́σπε̣[ρ] de 1380A (primera mitad del s. V a.C.), hοδὸ<ν> de 1148A (mediados del s. V a.C.), hιλαξάμενος de 1393 (mediados del s. V a.C.), hα[πτο]μένα[ς] de 2549A (mediados del s. V a.C.), hόρο̄ de 135A (segunda mitad del s. V a.C.), hὰ de 146A (ss. V-IV a.C.) y de I.Dodone Lhôte 67A (tercer cuarto del s. V a.C.) y Ηέρμο̄ν de I.Dodone Lhôte 41. En las escritas con el alfabeto de la Magna Grecia y de Sicilia, en el que Η valía /ɛː/, la aspiración se nota con el signo Ͱ, en hε̄́ρο̄ι y hευρεῖ<ν> de I.Dodone DVC 90 (finales del s. IV a.C.) y en [h]ωραῖοι y hυε̣το̣[ὶ] de 160A (finales del s. V a.C.). Fuera de esos casos, la conservación de la aspiración solo puede deducirse de la fonética sintáctica, y tres inscripciones del capítulo ofrecen testimonios indirectos: la aspirada de θἠματίο̄ (= τοῦ ἡματίου) en I.Dodone DVC 4, la de χὀ̣ ἐνιαυτὸς en 2445, que Méndez Dosuna (2018b: 41 n. 91) interpreta como elisión de κα ante ὁ y no como crasis, y la de τουθἤνεκα en 1153A (finales del s. V a.C.). La falta de aspiración es, en cambio, rara y todos los testimonios plantean dudas. Podría faltar en κὀδοί de I.Dodone DVC 15A, mientras que hάπερ, en la misma inscripción, la conserva, pero la lectura es muy insegura. En I.Dodone DVC 481 (primera mitad del s. V a.C.), también en alfabeto corintio, ninguna de las formas que la requerirían, como ἁ, ε̄̔ρο̄́ο̄ν o ἱλαζόμενος, la conserva, frente a otras inscripciones en alfabeto corintio en las que sí se conserva, como en hε̄ρ[ο̄́ο̄ν] de I.Dodone DVC 3828A (ss. VI-V a.C.). La aspiración informa así, sobre todo, de la procedencia de algunos consultantes. El signo Ͱ remite sin ambigüedad a la escritura de la Magna Grecia y de Sicilia, y en I.Dodone DVC 90 convive con el dígrafo de hευρεῖ<ν>, de modo que el consultante procedía de una ciudad occidental de vocalismo mitior y no de Tarento ni de Heraclea, de vocalismo severior.",
  "dvcs": [
   "411A",
   "414A",
   "15A",
   "541B",
   "1380A",
   "1148A",
   "1393",
   "2549A",
   "135A",
   "146A",
   "LOD 67A",
   "LOD 41",
   "90",
   "160A",
   "4",
   "2445",
   "1153A",
   "481",
   "3828A"
  ]
 },
 {
  "id": 9,
  "sec": "§4.2.4",
  "name": "-σσ- y la simplificación de las geminadas",
  "short": "-σσ- y la simplificación de las geminadas",
  "cat": "Fonología",
  "desc": "El dórico, como la mayoría de los dialectos, presenta -σσ- donde el ático tiene -ττ-, en palabras como πράσσω o θάλασσα, y conserva sin simplificar la secuencia -σσ- de grupos originarios, como en el futuro ἐσσεῖται. En las inscripciones dóricas la geminada se conserva en πράσσοιμες de I.Dodone DVC 20A (ss. V-IV a.C.), [πρ]άσσοι de 1088A (finales del s. V a.C.), πράσσ[οι] de 3325A (finales del s. V a.C.), ἐάσσαι de 1193A e I.Dodone Lhôte 41 y en la mayoría de los futuros en ἐσσ-. No obstante, no siempre se conserva: así πράσ<σ>οι de I.Dodone DVC 6A (mediados del s. V a.C.), πράσ<σ>οιμι de 1380A (primera mitad del s. V a.C.) y 2418B (segunda mitad del s. IV a.C.), πράσ<σ>ων de 261B (mediados del s. IV a.C.), πράσ<σ>οι<ν> de 2593A (primera mitad del s. IV a.C.), πράσ<σ>ο<ι>μες de 4142A (primera mitad del s. IV a.C.) y θάλασ<σ>αν de 430 (primera mitad del s. IV a.C.), y el futuro se escribe con una sola sigma en ἐσε͂ται de I.Dodone DVC 442A (finales del s. V a.C.), 3297A (segunda mitad del s. IV a.C.) y 3473A (primera mitad del s. IV a.C.), ἐσεῖτ[αι] de 990A (s. V a.C.) y 1377B (ss. V-IV a.C.), ἐσεῖται de 2049B (mediados del s. IV a.C.) y 2372A (finales del s. IV a.C.), [ἐ]σ̣εῖται de 2651A (primera mitad del s. IV a.C.) y ἐ̣σε[ῖ]ται de 4138B (s. IV a.C.). Para Méndez Dosuna (2018b: 42 y nn. 96-98), la mayoría de estas grafías son simplificaciones gráficas, frecuentes en las inscripciones antiguas, aunque no descarta que, en algunos casos, la sigma simple refleje una degeminación real tras vocal larga, como la que García Ramón (2007b: 98) ha propuesto para el tesalio a partir de un principio de distribución entre -σσ- y -σ- que el autor documenta también en jónico y en griego helenístico. Las cifras del capítulo, aunque escasas, son compatibles con esa interpretación, puesto que la sigma simple afecta a seis de las nueve formas de πρᾱσσω, con vocal larga, en que la grafía es visible, y solo a nueve de los veintinueve futuros de εἰμί, con vocal breve. En el conjunto del corpus la diferencia es menor, puesto que la sigma simple afecta a 34 de las 113 formas de πρᾱσσω y a 12 de los 52 futuros de εἰμί, y la simplificación alcanza también a θάλασ<σ>αν, con vocal breve. Las cifras son demasiado escasas para resolver la cuestión, pero apuntan, como las del tesalio (cf. el capítulo dedicado a ese dialecto, §3.2.5), a una tendencia a degeminar la secuencia tras vocal larga, en la línea de lo expuesto por García Ramón, que no excluye que una parte de estas grafías sean simplificaciones gráficas como las que supone Méndez Dosuna.",
  "dvcs": [
   "20A",
   "1088A",
   "3325A",
   "1193A",
   "LOD 41",
   "6A",
   "1380A",
   "2418B",
   "261B",
   "2593A",
   "4142A",
   "430",
   "442A",
   "3297A",
   "3473A",
   "990A",
   "1377B",
   "2049B",
   "2372A",
   "2651A",
   "4138B"
  ]
 },
 {
  "id": 10,
  "sec": "§4.2.5",
  "name": "ζ < *j-, *dj, *gj, *gʷj",
  "short": "ζ < *j-, *dj, *gj, *gʷj",
  "cat": "Fonología",
  "desc": "La mayoría de los dialectos, el dórico entre ellos, notan con ζ el resultado de *j- inicial y de los grupos *dj, *gj y *gʷj, frente al δδ del beocio, el eleo, el cretense, el laconio y, según un único testimonio, el tesalio (cf. §3.2.4 del capítulo tesalio). Las inscripciones dóricas ofrecen numerosos ejemplos, como ζο͂ι y Ζεῦ en I.Dodone DVC 414A (finales del s. VI a.C.), ἐπιζο̄́Ϝοι en 413B (finales del s. VI a.C.), ζο͂ι en 1459B (principios del s. V a.C.), ζο̄́οντος en 73 (finales del s. V a.C.), ζαμία en 1153A (finales del s. V a.C.), ἐργαζομένωι en 1369B (segunda mitad del s. IV a.C.) y 2445 (mediados del s. IV a.C.), ἐ[ργά]ζηται en 2648A (finales del s. IV a.C.), Ζεῦ en I.Dodone Lhôte 94 (primera mitad del s. IV a.C.) y el presente λάζεται en I.Dodone Lhôte 73A (ss. IV-III a.C.). El rasgo no permite distinguir entre los consultantes dóricos, pero sí excluye que los del capítulo procedan de las áreas de δ(δ), como el laconio y el cretense. La única grafía que se aparta de la norma es la del antropónimo Ῥαζία de I.Dodone DVC 73, en el que Curbera (2013: 431) ve una ζ por δ de carácter popular, documentada sobre todo en eleo, pero también en aqueo, rodio o cretense, y ajena al ámbito noroccidental. Tselikas (2018: 256) considera ilirios los dos nombres de la consulta, Ῥαζία y Τείτυκος, de modo que se trataría de consultantes de lengua no griega, aunque la consulta esté redactada en dórico.",
  "dvcs": [
   "414A",
   "413B",
   "1459B",
   "73",
   "1153A",
   "1369B",
   "2445",
   "2648A",
   "LOD 94",
   "LOD 73A"
  ]
 },
 {
  "id": 11,
  "sec": "§4.2.6",
  "name": "λτ, λθ > ντ, νθ",
  "short": "λτ, λθ > ντ, νθ",
  "cat": "Fonología",
  "desc": "El paso de λ a ν ante dental se documenta en las inscripciones y en la literatura dóricas del Peloponeso, de Sicilia y de la Magna Grecia, en Corcira, en arcadio y, de forma esporádica, en inscripciones tardías de Delfos y de Creta. En el griego noroccidental es raro, y fuera de Delfos solo aparece en antropónimos en Φιντ- que Méndez Dosuna (1985: 136) atribuye a influencias supradialectales en la onomástica. En las inscripciones del capítulo, el cambio solo se documenta en el subjuntivo διεξένθει de I.Dodone DVC 2445 (mediados del s. IV a.C.), mientras que βέλτιον conserva la λ en I.Dodone DVC 19A (ss. V-IV a.C.) y en I.Dodone Lhôte 112 (ss. IV-III a.C.) y 117A (s. IV a.C.). Méndez Dosuna (2018b: 43, 50) incluye el cambio, frecuente en el sur de Italia y raro en la Grecia noroccidental, entre los rasgos que apuntan a un origen itálico de los consultantes, junto con el vocalismo severior y la notación de la aspiración con el signo Ͱ. El cambio coincide con el vocalismo severior en tres consultas, con βέντιον en I.Dodone DVC 1395A (primera mitad del s. IV a.C.) y 2409A (mediados del s. IV a.C.) y con βέντι[ον] y ἐξενθε͂ν en 3128 (mediados del s. IV a.C.), y esa coincidencia refuerza la lectura. Su valor para localizar un texto es, con todo, limitado. El cambio se documenta también en Corcira, en el Peloponeso y en Sicilia, y aparece en consultas de otros grupos dialectales, de modo que por sí solo no basta para situar una inscripción en el sur de Italia. Carbon (2017: 109 n. 77) atribuye, de hecho, I.Dodone DVC 2445 a un dórico de Corcira o de las colonias sicilianas e itálicas. En esta inscripción, que no ofrece otros indicios de procedencia, el cambio es el único argumento para suponer un consultante occidental (cf. §2), de modo que esa adscripción es solo probable.",
  "dvcs": [
   "2445",
   "19A",
   "LOD 112",
   "LOD 117A",
   "1395A",
   "2409A",
   "3128"
  ]
 },
 {
  "id": 12,
  "sec": "§4.3.1",
  "name": "ἱαρός y Ἄρταμις",
  "short": "ἱαρός y Ἄρταμις",
  "cat": "Fonología",
  "desc": "El adjetivo ἱαρός es la forma regular en las inscripciones antiguas de todos los dialectos occidentales y del beocio, y quizá también del tesalio (cf. §3.3.1 del capítulo tesalio), frente al ἱερός del jónico-ático y del arcadochipriota y al ἶρος del lesbio; las formas con ἱερ- de los textos dóricos recientes se deben a la koiné. El nombre de Ártemis presenta el vocalismo Ἄρταμις en todos los dialectos occidentales salvo el cretense y en beocio, mientras que el tesalio conoce también la forma con épsilon. En las inscripciones del capítulo, el vocalismo ἱαρ- solo se documenta en ἱαρῶ de I.Dodone DVC 3871 (segunda mitad del s. IV a.C.), una consulta en la que la épsilon corintia del θεός inicial convive con el alfabeto jónico. El nombre de Ártemis podría leerse en Ἀρτάμι[τι] de I.Dodone DVC 541B (primera mitad del s. V a.C.), en alfabeto corintio, pero Méndez Dosuna (2018b: 46 n. 142) considera improbable que la diosa aparezca en la consulta y entiende la forma como el dativo del nombre de la consultante, que restituye Ἀρτάμι[τι] o, por ejemplo, Ἀρταμι[δώρωι]; también en ese caso el antropónimo conservaría el vocalismo dórico del teónimo. Ninguno de los dos rasgos separa el dórico del beocio, ni con seguridad del tesalio; su valor se limita a excluir el jónico-ático y la koiné, que acabaría imponiendo ἱερός y Ἄρτεμις también en los textos dóricos recientes.",
  "dvcs": [
   "3871",
   "541B"
  ]
 },
 {
  "id": 13,
  "sec": "§5.1.1",
  "name": "Apócope general de preposiciones",
  "short": "Apócope general de preposiciones",
  "cat": "Morfología",
  "desc": "El dórico apocopa con regularidad ἀνά y παρά, como la mayoría de los dialectos no jónico-áticos, mientras que κατά y ποτί solo pierden la vocal final ante consonante dental, sobre todo ante las formas del artículo; ante otras consonantes, la preposición apocopada se asimila a la inicial siguiente en tesalio y, a veces, en beocio y en laconio. La apócope, que el jónico-ático casi desconoce en las inscripciones, es muy desigual según el dialecto y la preposición: la tienen ἀν y πάρ todos los demás dialectos, κάτ y πότ casi todos los occidentales, además del beocio y el tesalio, y el tesalio la extiende también a ἀπ, ἐπ y ὑπ, de modo que es el dialecto donde llega más lejos, mientras que el beocio solo la conoce en esas tres preposiciones y solo ante oclusiva labial sorda, como en ἔππασις (cf. §7.1; §4.1 y §4.1.1 del capítulo del tesalio; §4.1.1 del capítulo del beocio). Además, las formas apocopadas son más frecuentes en las inscripciones antiguas que en las recientes, porque la koiné favorece las formas plenas. En las inscripciones del capítulo, la apócope afecta a ἀνά en ἀμβαί̣νοντ(ι) de I.Dodone DVC 3109A (mediados del s. IV a.C.); a παρά en πὰρ Γογγύλ̣[ου] de 3946B (segunda mitad del s. IV a.C.) y en el compuesto πάρμονος, que aparece en [γενεὰ]μ πάρμον[ον] de 3828A (ss. VI-V a.C.) y en ἔρσεν [γ]ένος πάρμο[νον] de 4161B (finales del s. V a.C.); y a ποτί en ποτθέμενος y ποτ τᾶι ἐάσσαι de I.Dodone Lhôte 41 (último cuarto del s. VI a.C.) y en πὸτ τὸν ἀδελφεόν de I.Dodone Lhôte 56 (s. IV a.C.). Ante vocal, la preposición no se apocopa, sino que se elide, como en ποτ' ἄνδρα de I.Dodone DVC 2508A (mediados del s. III a.C.) o en el compuesto κατόνασις de I.Dodone Lhôte 2 (segunda mitad del s. IV a.C.). Las formas del capítulo se ajustan, por tanto, a las restricciones del griego occidental: κατά y ποτί solo pierden la vocal ante dental, y ninguna consulta presenta las formas asimiladas de κάτ y πότ ante otras consonantes, rasgo exclusivo del tesalio. Lhôte (2006: 380) ya advertía que la apócope está bien documentada en el Epiro y en las colonias corintias, pero que no es sistemática, y, en efecto, las mismas consultas emplean περί, κατά y ποτί plenas en otros contextos, como el περὶ θἠματίο̄ de I.Dodone DVC 4 (s. IV a.C.), el κατὰ χόραν de 15A (s. V a.C.) y 1380A o el κατὰ γᾶν καὶ κατὰ θάλασ<σ>αν de 430.",
  "dvcs": [
   "3109A",
   "3946B",
   "3828A",
   "4161B",
   "LOD 41",
   "LOD 56",
   "2508A",
   "LOD 2",
   "4",
   "15A",
   "1380A",
   "430"
  ]
 },
 {
  "id": 14,
  "sec": "§5.1.2",
  "name": "Apócope de περί > πέρ",
  "short": "Apócope de περί > πέρ",
  "cat": "Morfología",
  "desc": "La apócope de περί tiene una distribución mucho más restringida. Fuera del tesalio, que la emplea con regularidad, πέρ solo se documenta en lesbio literario, délfico y en eleo, y en unos pocos antropónimos de Lócride, Creta y Laconia. Lhôte (2006: 380) la contaba entre los rasgos del Epiro a partir de cuatro consultas de su corpus, pero Méndez Dosuna (2018b: 36 n. 36) advierte que las consultas que él considera epirotas o dóricas podrían ser tesalias. Seis inscripciones del capítulo presentan la forma apocopada: [πὲ]ρ̣ πανπασίας de I.Dodone DVC 1297A (primera mitad del s. IV a.C.), πὲρ {παν}πανπασίου de 2514 (principios del s. IV a.C.), πὲρ γενεᾶς de 4161B (finales del s. V a.C.), πὲ<ρ> Πελ[- - -] de 1673B (ss. VI-V a.C.), Πὲρ ΜΥΔΡΑΣΠΙΤΑ de I.Dodone Lhôte 140 (ss. V-IV a.C.) y, en I.Dodone DVC 2173A (primera mitad del s. IV a.C.), πὲρ γενε[ᾶς πὲρ] παμάτω̣ν, que alterna en el mismo texto con περὶ καρπο̣[ῦ] y περὶ ἐπ[ι]βωλῶν. Estos testimonios no bastan para resolver la cuestión. Cinco de las seis inscripciones no combinan πέρ con ningún rasgo que excluya el tesalio: I.Dodone DVC 1297A, 2173A y 2514 se cuentan como dóricas por la familia de πάομαι, que es de carácter dórico, aunque se documenta, de forma aislada, en los dialectos eólicos, y que aparece junto a πέρ en el Ἀετίναι πὲρ πανπασία<ς> γίνυτο de I.Dodone DVC 1060A (mediados del s. V a.C.), con el mismo sintagma que I.Dodone DVC 1297A. Por su parte, I.Dodone DVC 1673B contiene una épsilon corintia aislada, que no basta para identificar el alfabeto, aunque apunta al dórico; e I.Dodone Lhôte 140 se cuenta por un futuro dórico ΕΣΣΕΤΑΙ que admite también la lectura eólica ἔσσεται (cf. §5.2.3). Solo en I.Dodone DVC 4161B el presente γίνεται, frente al γίνυμαι del tesalio y del beocio, apunta contra ambos dialectos. La forma no era, con todo, ajena a las consultas dóricas: la emplean dos consultas noroccidentales, una de ellas en alfabeto corintio, y una escrita en doris severior, en textos con rasgos que excluyen el tesalio, y la alternancia con περί de I.Dodone DVC 2173A recuerda la que se observa en la consulta tesalia I.Dodone DVC 3113A (finales del s. IV a.C.), en la que conviven la forma dialectal y la de la koiné (cf. §4.1.1 del capítulo tesalio). Por esa razón, las seis inscripciones se mantienen en este capítulo, pero solo I.Dodone DVC 4161B se cuenta como segura: en las otras cinco la adscripción dórica descansa en un indicio que no excluye por sí solo el tesalio, de modo que se consideran dudosas.",
  "dvcs": [
   "1297A",
   "2514",
   "4161B",
   "1673B",
   "LOD 140",
   "2173A",
   "1060A",
   "3113A"
  ]
 },
 {
  "id": 15,
  "sec": "§5.1.3",
  "name": "πεδά",
  "short": "πεδά",
  "cat": "Morfología",
  "desc": "Algunos dialectos dóricos, como el argólico, el cretense y el tereo, emplean πεδά en lugar de μετά y comparten esta preposición con el lesbio, el beocio y el arcadio, mientras que el griego noroccidental solo conoce μετά. En el capítulo, πεδά se documenta en dos consultas en alfabeto corintio, πεδαφέρο̄ de I.Dodone DVC 1346A (principios del s. V a.C.) y πεδεν<εν>κο̄́[ν] de 4150A (finales del s. VI a.C.). Ninguna inscripción del capítulo emplea μετά. Como πεδά es ajena al dórico noroccidental, Méndez Dosuna (2018b: 45 y n. 136) atribuye con reservas a Corcira las consultas que la emplean, puesto que la epigrafía de la isla documenta un πεδα[- - -] a principios del s. III a.C. (IG IX1 691), aunque las inscripciones posteriores, con influencia externa, ya emplean μετά. La procedencia concuerda con el alfabeto corintio de las dos laminillas y, aunque el rasgo es compartido con el lesbio y el beocio, ese alfabeto, ajeno a los dialectos eólicos, permite atribuirlas con seguridad al dórico, si bien no a una zona concreta como Corcira.",
  "dvcs": [
   "1346A",
   "4150A"
  ]
 },
 {
  "id": 16,
  "sec": "§5.2.1",
  "name": "Desinencia -μες (1.ª pl.)",
  "short": "Desinencia -μες (1.ª pl.)",
  "cat": "Morfología",
  "desc": "El griego occidental conserva en la primera persona del plural activa la desinencia -μες, frente al -μεν del jónico-ático y de los dialectos eólicos. Junto con el futuro dórico y la contracción de α + ε en η, es uno de los pocos rasgos presentes en las laminillas que separan el dórico del tesalio. En las inscripciones del capítulo se documenta en catorce consultas, la mayoría en optativo y dentro de las fórmulas habituales: πράσσοιμες de I.Dodone DVC 20A (ss. V-IV a.C.), [πράσ]σοιμες de 3405B (finales del s. V a.C.) y πράσ<σ>ο<ι>μες de 4142A (primera mitad del s. IV a.C.), que trasladan al plural la fórmula λώϊόν κα πράσσοιμι, [τυγχ]ά̣νοιμες de 2389A (primera mitad del s. IV a.C.) y [- - -]οιμες de 1022A (principios del s. IV a.C.). En otros tiempos y modos aparecen σο̄θε͂μες de I.Dodone DVC 419A (primera mitad del s. V a.C.), ποέο̄μες de 2747A (segunda mitad del s. V a.C.), [ἐ]γδῶμες de 1569B (ss. V-IV a.C.), νικῶμες de 3103A (primera mitad del s. IV a.C.), [ἄγο̄]μες de 2488A (segunda mitad del s. V a.C.), ἄ<γ>ο̄μες de 2720A (s. V a.C.) y λέγομες de I.Dodone Lhôte 105Ba (s. IV a.C.), y en [ἔλ]θωμες̣ de I.Dodone DVC 731B (s. IV a.C.) y en el -ουμες de 1866B (finales del s. V a.C.) la desinencia es casi lo único legible. La desinencia no conoce excepciones en las consultas del capítulo. El único -μεν de una inscripción con un rasgo occidental, τυνχάνοιμεν de I.Dodone DVC 3393A (mediados del s. V a.C.), en alfabeto epirota, convive con el teónimo Ἀρτάμιδος, que es también beocio (cf. §4.3.1), y la consulta se cuenta, por esa razón, entre las no jónico-áticas. Las consultas tesalias emplean, en cambio, -μεν, como μα[στε]ύουμεν de I.Dodone DVC 3274A (primera mitad del s. IV a.C.), de modo que la desinencia basta para separar los dos dialectos cuando el texto la conserva.",
  "dvcs": [
   "20A",
   "3405B",
   "4142A",
   "2389A",
   "1022A",
   "419A",
   "2747A",
   "1569B",
   "3103A",
   "2488A",
   "2720A",
   "LOD 105Ba",
   "731B",
   "1866B",
   "3393A",
   "3274A"
  ]
 },
 {
  "id": 17,
  "sec": "§5.2.2",
  "name": "Infinitivo atemático en -μεν",
  "short": "Infinitivo atemático en -μεν",
  "cat": "Morfología",
  "desc": "El dórico forma el infinitivo de los verbos atemáticos y de los aoristos pasivos con -μεν (δόμεν, ἦμεν, frente al ático δοῦναι, εἶναι), una desinencia que comparte con el tesalio y el beocio, y en Rodas, Creta, el Epiro y Sicilia se documenta también -μειν (-μην en Creta), cruce de -μεν con la desinencia temática. Frente a -μεν, el jónico-ático y el arcadochipriota tienen -ναι (εἶναι, δοῦναι) y el lesbio -μεναι (ἔμμεναι, δόμεναι); el beocio y el tesalio de Pelasgiótide extienden además -μεν a los verbos temáticos (φερέμεν, ὑπαρχέμεν). En las inscripciones del capítulo, la desinencia solo se documenta en γνῶμεν de I.Dodone Lhôte 105Ba (s. IV a.C.), junto a λέγομες, y en [δ]όμεν de I.Dodone DVC 3871 (segunda mitad del s. IV a.C.). Como la desinencia es también eólica, solo excluye el jónico-ático, y las consultas que la presentan como único rasgo, como I.Dodone DVC 3356B (ss. V-IV a.C.), con ἀπίμεν, δόμεν y ἀποδόμεν, o 2481A (segunda mitad del s. IV a.C.), con ἀποδιδόμεν, se cuentan entre las no jónico-áticas. Ninguna inscripción del capítulo presenta la variante -μειν.",
  "dvcs": [
   "LOD 105Ba",
   "3871",
   "3356B",
   "2481A"
  ]
 },
 {
  "id": 18,
  "sec": "§5.2.3",
  "name": "El futuro dórico",
  "short": "El futuro dórico",
  "cat": "Morfología",
  "desc": "El futuro dórico en -σέω, que resulta del cruce del futuro sigmático con el futuro contracto en -έω, es la única innovación exclusiva del griego occidental entre los rasgos que permiten identificar las consultas dóricas. En los dialectos de vocalismo mitior, la contracción de ε con ε y ει da /eː/, de modo que el futuro de εἰμί es ἐσσεῖται, frente al ἐσσῆται de la doris severior y al futuro no contracto de los dialectos eólicos (cf. §4.1.3). El futuro de εἰμί domina el material. En el capítulo se lee en treinta y una inscripciones: veintiuna escriben el dígrafo ΕΙ, como ἐσσεῖται de I.Dodone DVC 1153A (finales del s. V a.C.), 1369B (segunda mitad del s. IV a.C.), 2508A (mediados del s. III a.C.) y 2948A (mediados del s. IV a.C.) o de I.Dodone Lhôte 62 (s. IV a.C.) y 73A (ss. IV-III a.C.), con la sigma simple en cinco de ellas (cf. §4.2.4); siete lo escriben con Ε, como ἐσσ̣ε͂ται de I.Dodone DVC 264A (mediados del s. V a.C.), ἐσε͂ται de 3473A (primera mitad del s. IV a.C.) o ἐσσε͂ται de I.Dodone Lhôte 94 (primera mitad del s. IV a.C.) y 140 (ss. V-IV a.C.); y en las tres restantes, I.Dodone DVC 2448A (primera mitad del s. V a.C.), 4115A (segunda mitad del s. IV a.C.) y 4138B (s. IV a.C.), la forma está restituida, aunque en el ἐ̣σε[ῖ]ται de la última el hueco solo admite el diptongo del futuro dórico. Los demás verbos solo ofrecen el activo νικασέω de I.Dodone DVC 2521A (primera mitad del s. IV a.C.), con el hiato εω sin contraer, y σωσεῖτα[ι] de 3946B (segunda mitad del s. IV a.C.). Los futuros con ου del tipo λαψοῦμαι, con la contracción εο > ου, son propios del noroccidental y se examinan en el capítulo siguiente. Las siete formas escritas con Ε plantean, en cambio, un problema de lectura. En las consultas que no disponen de signos propios para las vocales medias largas, una grafía como ΕΣ(Σ)ΕΤΑΙ puede corresponder tanto al futuro dórico ἐσσεῖται como al futuro no contracto ἔσσεται de los dialectos eólicos. Lhôte (2006: 398-399 y n. 80), que se plantea también la lectura no contracta ἔσσεται en I.Dodone Lhôte 94 y 140, la descarta por dos razones: ambas consultas son de una época en que la notación de /eː/ con ΕΙ todavía no era obligatoria, de modo que la Ε puede estar escribiendo la vocal contracta (ἐσσεῖται), y los demás futuros de εἰμί del corpus (ἐσσεῖται en I.Dodone Lhôte 62, 73A, 89B y 112) eran contractos, de modo que lo esperable es que estos también lo sean. El primer argumento vale para seis de las siete formas, que son del s. V a.C. o de la primera mitad del s. IV a.C., pero no para I.Dodone DVC 3297A, de la segunda mitad del s. IV a.C., en la que la ambigüedad persiste. En I.Dodone Lhôte 94, además, como en I.Dodone DVC 3473A, las vocales heredadas se escriben con Η y Ω, de modo que la Ε del futuro nota con toda probabilidad la /eː/ secundaria y la forma es ἐσσεῖται (cf. §4.1.3). La cuestión no es menor, porque en cinco consultas, I.Dodone DVC 264A, 442A, 531A y 3297A e I.Dodone Lhôte 140, el futuro es el único rasgo que permite contarlas como dóricas, de modo que su adscripción depende de esta lectura.",
  "dvcs": [
   "1153A",
   "1369B",
   "2508A",
   "2948A",
   "LOD 62",
   "LOD 73A",
   "264A",
   "3473A",
   "LOD 94",
   "LOD 140",
   "2448A",
   "4115A",
   "4138B",
   "2521A",
   "3946B",
   "LOD 89B",
   "LOD 112",
   "3297A",
   "442A",
   "531A"
  ]
 },
 {
  "id": 19,
  "sec": "§5.2.4",
  "name": "-ξ- en los futuros y aoristos de los verbos en -ζω",
  "short": "-ξ- en los futuros y aoristos de los verbos en -ζω",
  "cat": "Morfología",
  "desc": "El griego occidental extiende la -ξ- de los temas velares al futuro y al aoristo de todos los verbos en -ζω, con independencia de su origen (ἐργάξασθαι, ἀγωνίξατο, frente al ático ἐργάσασθαι, ἠγωνίσατο), una innovación que comparte con el tesalio, en parte con el beocio y con el arcadio. En las inscripciones del capítulo, la -ξ- se documenta en ἀνδροποδίξατο de I.Dodone Lhôte 123 (s. IV a.C.) y en hιλαξάμενος de I.Dodone DVC 1393 (mediados del s. V a.C.), aoristo de ἱλάσκομαι. Sobre este último aoristo se creó, según Méndez Dosuna (2018b: 39), un presente analógico ἱλάζομαι, siguiendo la analogía δικαξάμενος : δικαζόμενος. Este presente se documenta en ἱλαζόμενος de I.Dodone DVC 481 (primera mitad del s. V a.C.), frente al ἱλασκόμενος de otras consultas. Es una de las novedades que el corpus aporta a la morfología dórica, y muestra hasta qué punto la -ξ- se había convertido en la marca del aoristo de estos verbos. El rasgo, compartido con el tesalio y el arcadio, no basta, en cambio, para identificar una consulta como dórica.",
  "dvcs": [
   "LOD 123",
   "1393",
   "481"
  ]
 },
 {
  "id": 20,
  "sec": "§5.2.5",
  "name": "El paso de los verbos en -αω a la flexión en -εω",
  "short": "El paso de los verbos en -αω a la flexión en -εω",
  "cat": "Morfología",
  "desc": "Varios dialectos dóricos trasladan los verbos en -αω a la flexión en -εω, como muestran el etolio νικεόντοις, el délfico συλεόντες o el locrio ἐπιτιμέων, aunque el cambio no es sistemático. En las inscripciones del capítulo, el paso solo está asegurado en [ἐπ]ερωτέο̣ντι de I.Dodone DVC 3777 (segunda mitad del s. IV a.C.). El ἐπερωτεῖ de I.Dodone Lhôte 121A (ss. IV-III a.C.) no lo prueba, en cambio, por las razones expuestas en §4.1.2.1. Las formas en -εω son, con todo, minoritarias frente a las contractas, como el ἐπερωτῶντι de las consultas de los dodoneos o el ἐπερωτο͂ντι de I.Dodone DVC 4.",
  "dvcs": [
   "3777",
   "LOD 121A",
   "4"
  ]
 },
 {
  "id": 21,
  "sec": "§5.2.6",
  "name": "Otras formas verbales",
  "short": "Otras formas verbales",
  "cat": "Morfología",
  "desc": "El participio femenino de εἰμί presenta en arcadio, mesenio y epirota la forma ἔασσα, que comparte el micénico, frente al ἔσσα del lesbio, el epidaurio y el trecenio, al ἔνσα y ἔονσα del tesalio y al ἔουσα del jónico. La forma ἔσσα, que se lee también en el dórico literario, en un fragmento atribuido a Epicarmo (Epich. fr. 298 [VERIFICAR edición], que cita Clem.Al. Strom. 6.2.8.3), se lee además en el trecenio (IG IV 757.32, Trecén, 146 a.C.) y tiene un correlato en el sustantivo ἐσσία, que Platón documenta como variante de οὐσία (Pl. Cra. 401c). En el capítulo se lee en ποτ τᾶι ἐάσσαι de I.Dodone Lhôte 41 y en ἐάσσαι de I.Dodone DVC 1193A (principios del s. IV a.C.). Méndez Dosuna (2016: 128) atribuye I.Dodone DVC 1193A a Corcira por la forma de la digamma de συνϜοικέω y por el paralelo de I.Dodone Lhôte 41, escrita en alfabeto corintio. El presente ζώω, propio del dórico, se opone al ζῶ, ζῇς del ático, con el infinitivo ζῆν, como en τοῦ εἶναί τε καὶ ζῆν ἕνεκα (Pl. R. 369d), pero no es exclusivo del grupo occidental. Es la forma de la épica, como en ζώει τε καὶ ἔστιν (Od. 24.263) o en ζώειν καὶ ὁρᾶν φάος ἠελίοιο (Il. 24.558), de la lírica, con el ζώει de Pi. O. 2.25, y del jónico, tanto literario (Hdt. 7.46) como epigráfico, como muestra el εἵως ἂν ζώηι de un decreto de Tasos (IG XII8 262.12; 412/11 a.C.). Entre los dialectos occidentales la documentan las manumisiones de Delfos, en la fórmula ἄχρι κα ζώηι, como en SGDI II 1855.7 (176 a.C.), mientras que el cretense, que trata el grupo *gʷj como δ (cf. §4.2.5), escribe δώω, como en las formas δο̄́οι y δο̄́ο̄ντι de las leyes de Gortina (IC IV 72, col. IV 21 y 27; ca. 480-450 a.C.), al igual que el beocio. Por ello, ζώω separa el dórico del ático y de la koiné y, por su ζ, también del beocio y del cretense, que escriben δώω, pero no del jónico ni de la mayoría de los demás dialectos. En las inscripciones del capítulo se documenta en cuatro consultas, todas antiguas: ἐπιζο̄́Ϝοι de I.Dodone DVC 413B y ζο͂ι de 414A, ambas de finales del s. VI a.C. y en alfabeto corintio, ζο͂ι de 1459B (principios del s. V a.C.), junto a γενεᾶς, y el participio ζο̄́οντος de 73 (finales del s. V a.C.), en una consulta que se abre con τύχα ἀγαθά. En las dos primeras no es el verbo el que permite atribuir la consulta al dórico, sino el alfabeto corintio; en I.Dodone DVC 1459B y 73, que se cuentan como dudosas, ζώω excluye el ático y el beocio, y es la ᾱ de γενεᾶς y de la fórmula τύχα ἀγαθά la que apunta, además, contra el jónico (cf. §3). Por otra parte, el presente λάζομαι, en lugar de λαμβάνω, aparece en ὃ λάζεταί νιν de I.Dodone Lhôte 73A (ss. IV-III a.C.).",
  "dvcs": [
   "LOD 41",
   "1193A",
   "413B",
   "414A",
   "1459B",
   "73",
   "LOD 73A"
  ]
 },
 {
  "id": 22,
  "sec": "§5.3.1",
  "name": "El artículo τοί, ταί",
  "short": "El artículo τοί, ταί",
  "cat": "Morfología",
  "desc": "El nominativo plural del artículo conserva en griego occidental, salvo en cretense, la forma heredada τοί, ταί, que comparten el beocio y, en Fársalo, el tesalio, frente al οἱ, αἱ del jónico-ático, rehecho sobre el singular. En el Epiro, la forma se documenta, aunque rara vez. En las inscripciones del capítulo solo aparece el masculino: τοὶ ἀλαοί de I.Dodone DVC 1375B (primera mitad del s. IV a.C.), τοὶ ἐν τῶ[ι] Ἀπόλλων[ος] de 2203B (mediados del s. IV a.C.), τοὶ παῖδες de 2980 (primera mitad del s. IV a.C.) y τοὶ Κορκυραῖοι καὶ τοὶ Ὠρίκιοι y τοὶ Κ[ο]ρκυρα[ῖοι] de las consultas públicas I.Dodone Lhôte 2 (segunda mitad del s. IV a.C.) y 3 (primera mitad del s. IV a.C.). Ninguna de ellas presenta rasgos beocios, de modo que el artículo, aunque no excluye por sí solo ese dialecto, apunta en todas al dórico.",
  "dvcs": [
   "1375B",
   "2203B",
   "2980",
   "LOD 2",
   "LOD 3"
  ]
 },
 {
  "id": 23,
  "sec": "§5.3.2",
  "name": "Pronombres personales y anafóricos",
  "short": "Pronombres personales y anafóricos",
  "cat": "Morfología",
  "desc": "El dórico conserva varias formas pronominales que el jónico-ático ha perdido o renovado: el dativo ἐμίν, el acusativo τυ, con la /t/ originaria (cf. §4.2.1), el nominativo plural ἁμές y los anafóricos νιν y (ϝ)οι. El dativo ἐμίν es la forma en -ν propia del griego occidental, que alterna con ἐμοί y μοι y que la poesía dórica emplea también en τίν; τυ, con la τ- heredada en lugar de la σ- del jónico-ático, se atestigua como acusativo en la poesía dórica y en Epidauro, que emplea también νιν; y ἁμές, ὑμές son las formas del griego occidental, frente a los eolios ἄμμες, ὕμμες y a los jónico-áticos ἡμεῖς, ὑμεῖς. El dativo ἐμίν se lee en καὶ ἐμὶν de I.Dodone Lhôte 94 (primera mitad del s. IV a.C.) y quizá en el [ἐμ]ὶν restituido de I.Dodone DVC 792B (s. IV a.C.); ἁμές, en ὥσπερ ἁμὲς de 1375B (primera mitad del s. IV a.C.); y νιν, en ὃ λάζεταί νιν de I.Dodone Lhôte 73A (ss. IV-III a.C.). Más dudosa es la lectura de I.Dodone DVC 481 (primera mitad del s. V a.C.), donde los editores leen ἁ νόσος ἔλαβέ μιν, con un μιν que parece limitarse a los dialectos literarios, frente al νιν de otras consultas del capítulo. Si se leyera, como plantea Méndez Dosuna (2018b: 40 n. 74), ἔλαβ᾽ ἐμίν, con la elisión sin marcar, la laminilla sería un testimonio más del dativo ἐμίν, y el más antiguo de los del capítulo. Es, con todo, una hipótesis incierta, porque obligaría a entender ἐμίν como un dativo con ἔλαβε, una construcción sin paralelos frente al acusativo habitual, y porque la laminilla, que ya se cuenta entre las dóricas por otros rasgos, no necesita este indicio. El dativo anafórico conserva la digamma en γενεά ϝοι de I.Dodone Lhôte 41 y la pierde en οἱ de I.Dodone DVC 1234 (segunda mitad del s. III a.C.) y 2651A (primera mitad del s. IV a.C.). A ellas se suma el empleo de αὐτός con valor reflexivo, como en αὐτοῦ καὶ γενεᾶς de I.Dodone DVC 414A (finales del s. VI a.C.). Son formas escasas, porque las consultas se redactan casi siempre en tercera persona y con el nombre del consultante, pero su distribución es coherente: salvo el anafórico οἱ, común a la mayoría de los dialectos, todas aparecen en inscripciones con otros rasgos dóricos.",
  "dvcs": [
   "LOD 94",
   "792B",
   "1375B",
   "LOD 73A",
   "481",
   "LOD 41",
   "1234",
   "2651A",
   "414A"
  ]
 },
 {
  "id": 24,
  "sec": "§5.3.3",
  "name": "El demostrativo οὗτος",
  "short": "El demostrativo οὗτος",
  "cat": "Morfología",
  "desc": "En el demostrativo οὗτος, algunos dialectos generalizan a toda la flexión el tema τουτ- del masculino y el neutro, como el délfico τοῦτα, τούτας o el eubeo τοῦτα, frente al ático ταῦτα, ταύτας. Buck (1955: §124) añade que las formas τοῦτοι, ταῦται del nominativo plural, calcadas de τοί, ταί, se documentan en Cos, Delfos, Rodas y Selinunte, y que el beocio y el eubeo generalizan el diptongo ου en toda la flexión (en eubeo, τοῦτα, τούτει). Lhôte (2006: 396-397) consideró epirota la generalización del tema τουτ-, pero Méndez Dosuna (2018b: 44) la tiene por un rasgo dórico general. En las inscripciones del capítulo solo figura τ̣ούταν de I.Dodone DVC 1148A (mediados del s. V a.C.), en alfabeto corintio, que Méndez Dosuna (2016: 127) interpreta como genitivo plural, en concordancia con hοδὸ<ν> y regido por τύχοιμι, mientras que I.Dodone DVC 4 (s. IV a.C.) escribe ταύταν, como el ático. Como el tema τουτ- es también eubeo y délfico, el rasgo excluye el ático, pero no basta para atribuir una consulta al Epiro.",
  "dvcs": [
   "1148A",
   "4"
  ]
 },
 {
  "id": 25,
  "sec": "§5.3.4",
  "name": "Otras formas nominales",
  "short": "Otras formas nominales",
  "cat": "Morfología",
  "desc": "El sustantivo que designa la nave (= ático ναῦς, νεώς) ofrece formas interesantes en varios textos dóricos del corpus. Una de ellas es el acusativo νᾶν de I.Dodone DVC 1182A (primera mitad del s. V a.C.), en alfabeto corintio, donde un tal Χαροπίας pregunta si podría tener éxito como armador de una nave: Χαροπίαι ἐ͂ τυνχάνοι κα ναυκλαρέο̄ν νᾶν; El texto es dórico por la partícula κα y por la ausencia de contracción en ναυκλαρέο̄ν, además de por el alfabeto de tipo corintio, de modo que no tendría nada de particular de no ser por νᾶν, una forma que no puede achacarse a otra variedad. Parece, en efecto, el resultado regular de la forma heredada según la ley de Stang, por la que la semivocal se pierde con alargamiento compensatorio de la vocal precedente, a diferencia del acusativo ático ναῦν, formado por analogía sobre el nominativo ναῦς. Herodiano atribuye νᾶν a los dorios, que, según él, prescindían de la υ (Hdn.Gr. 1.328), y de ella hace derivar un nominativo hiperdórico νᾶς (Hdn.Gr. 2.553; cf. 1.400); fuera de esas noticias, no se conocía en ningún texto epigráfico ni literario. El acusativo νᾶ, en cambio, es el resultado regular de la contracción de νᾶα (< *νᾶϝα), que se lee ya en Baquílides (B. 16.89) y que se rehízo sobre el resto del paradigma (νᾱϝός, νᾱϝί). Se documenta en I.Dodone Lhôte 94 (primera mitad del s. IV a.C.), la consulta de Arquéfon, que ha construido una nave por mandato de Apolo (τὰν νᾶ : ἃν ἐναυπαγήσατο) y pregunta si habrá salvación para él y para su nave (τᾶι ναῒ) si salda sus deudas; el dativo es también regular. El acusativo analógico ναῦν, que se lee ya en Píndaro (Pi. P. 4.245), no es tampoco exclusivo del ático y aparece en varias consultas del corpus, como I.Dodone DVC 1005A (principios del s. IV a.C.), 302B (mediados del s. IV a.C.), 2629B (finales del s. IV a.C.) y 1554A (s. IV a.C.). En I.Dodone DVC 302B el consultante escribió primero ΝΑΝ y añadió después una Υ sobre la línea, quizá un indicio de que la forma espontánea era la dórica y de que la corrigió en favor de la ática. En el nombre del hijo, las inscripciones del capítulo solo documentan el tipo temático υἱός, que es también el único conocido en los dialectos del Noroeste, como en Ἀρχέβιος ὁ Ἀρχωνίδα υἱὸς de I.Dodone Lhôte 123 (s. IV a.C.) y περὶ τοῦ υἱοῦ de I.Dodone Lhôte 73A (ss. IV-III a.C.). El otro tipo, atemático, con tema en -υ- (υἱύς, genitivo υἱέος), es el heredado y, como señala Méndez Dosuna (1985: 188), retrocede en todo el ámbito griego ante la forma tematizada. Su único posible reflejo en Dodona es el genitivo ὑέος de I.Dodone DVC 974A (principios del s. IV a.C.), que no se cuenta en el capítulo y que Méndez Dosuna (2018b: 43 n. 116) admite leer también como un nominativo ὑϝός. Ninguna consulta del capítulo documenta, por último, las formas dóricas de los numerales, como πρᾶτος, frente al ático πρῶτος, que comparte con el beocio y cuya ᾱ no tiene una explicación segura, τέτορες, frente al ático τέτταρες, o ἕβδεμος, frente a ἕβδομος, ambas con vocal anaptíctica.",
  "dvcs": [
   "1182A",
   "1",
   "2",
   "LOD 94",
   "1005A",
   "302B",
   "2629B",
   "1554A",
   "LOD 123",
   "LOD 73A",
   "974A"
  ]
 },
 {
  "id": 26,
  "sec": "§5.4.1",
  "name": "Adverbios de lugar en -ει",
  "short": "Adverbios de lugar en -ει",
  "cat": "Morfología",
  "desc": "Los adverbios de lugar en -ει (αὐτεῖ, ὅπει, ἀλλεῖ), equivalentes de los jónico-áticos en -ου, son propios del griego occidental y continúan el locativo singular de la flexión pronominal indoeuropea (*-ei̯), mientras que el -ου del jónico-ático procede del genitivo (Scarborough 2023: 207). Estas formas no son, sin embargo, diagnósticas del dórico, porque el beocio tiene adverbios en -ει de dos orígenes. Por una parte, los adverbios de modo en -η (át. -ῃ, como αὐτῇ), cuya vocal pasó a escribirse ΕΙ cuando la /ɛː/ heredada se cerró (cf. §3.1.3 del capítulo del beocio); por otra, aunque solo en dos inscripciones, el propio sufijo locativo, en ει (IG VII 3054.14) y en αυτι (< *αυτει, SEG 43:212a.5) [VERIFICAR en el PHI], que Scarborough (2023: 207) atribuye quizá a la influencia del noroccidental. Una secuencia como ΑΥΤΕΙ puede ser, por tanto, también beocia. El adverbio se documenta en αὐτεῖ de I.Dodone DVC 501B (ss. V-IV a.C.), 634A (segunda mitad del s. V a.C.), 1154A (finales del s. V a.C.), 1234 (segunda mitad del s. III a.C.), 2197B (finales del s. V a.C.), 2408B (s. V a.C.), 3064A (segunda mitad del s. IV a.C.) y 3431A (segunda mitad del s. V a.C.) y de I.Dodone Lhôte 92B (s. IV a.C.), en [αὐτ]εῖ de la consulta de los dodoneos I.Dodone DVC 2425A (primera mitad del s. IV a.C.), y, escrito con Ε, en αὐτε͂ de 1246A (finales del s. V a.C.) y 3315A (ss. V-IV a.C.); ὅπει, en 1244 (segunda mitad del s. IV a.C.) y 3661A (primera mitad del s. IV a.C.); y ἀλλεῖ, en Ἀλλεῖ̣ de 4115A (segunda mitad del s. IV a.C.) y, escrito con Ε, en ἐ͂ ἀλλε͂ μαντεύ̣[εσθαι] de 2128B (segunda mitad del s. V a.C.). La frecuencia del rasgo se debe a la fórmula con que el consultante pregunta si le conviene quedarse donde está, αὐτεῖ μένειν, que se lee, con variantes, en I.Dodone DVC 501B, 634A, 1246A, 2408B, 3064A y 3315A y en la consulta de los dodoneos 2425A, y que forma el contrapunto de las preguntas sobre viajes y traslados (cf. §3). Su peso en la clasificación es, por eso mismo, considerable, pero depende del contexto. Cuando αὐτεῖ acompaña a μένειν, el sentido locativo es seguro, lo que descarta el adverbio de modo en -ῃ. Ese sentido no excluye por sí solo el beocio, pero el locativo en -ει solo se documenta allí en dos inscripciones, y quizá por influencia noroccidental, de modo que en consultas breves sin rasgos beocios, como I.Dodone DVC 1246A o 2408B, donde es el único rasgo, apunta con mucha probabilidad al dórico y basta para contarlas como tales, como ocurre también con el ἀλλε͂ de I.Dodone DVC 2128B, al que el infinitivo μαντεύ̣[εσθαι] da el sentido de “consultar en otro lugar”. Cuando aparece solo, en cambio, como en I.Dodone DVC 1154A, su valor es dudoso, porque también puede ser, aunque es rara, la forma beocia.",
  "dvcs": [
   "501B",
   "634A",
   "1154A",
   "1234",
   "2197B",
   "2408B",
   "3064A",
   "3431A",
   "LOD 92B",
   "2425A",
   "1246A",
   "3315A",
   "1244",
   "3661A",
   "4115A",
   "2128B"
  ]
 },
 {
  "id": 27,
  "sec": "§5.4.2",
  "name": "Adverbios temporales en -κα",
  "short": "Adverbios temporales en -κα",
  "cat": "Morfología",
  "desc": "Los adverbios temporales en -κα son otra formación característica del griego occidental, incluidos el eleo, el cretense y el délfico, y del beocio; así ὅκα, πόκα, τόκα (= ático ὅτε, πότε, τότε). En las inscripciones del capítulo solo se documenta τόκα, en τόκα ἑὼν de I.Dodone Lhôte 123 (s. IV a.C.), una consulta que no puede ser beocia, porque el beocio escribiría -κλεῖος en lugar de Ἀριστοκλέος (Buck 1955: §108a) e ἰών en lugar de ἑών (Buck 1955: §9.2). La escasez de estas formas se explica por el propio género de las consultas, que se refieren al futuro con fórmulas fijas, como εἰς τὸν ἔπειτα χρόνον, y rara vez necesitan un adverbio temporal.",
  "dvcs": [
   "LOD 123"
  ]
 },
 {
  "id": 28,
  "sec": "§5.5",
  "name": "La partícula modal κα y la conjunción αἰ",
  "short": "La partícula modal κα y la conjunción αἰ",
  "cat": "Morfología",
  "desc": "La partícula modal κα y la conjunción condicional αἰ son propias de los dialectos dóricos, frente al ἄν y al εἰ del jónico-ático y del arcadio. Ninguna de las dos es, sin embargo, exclusiva del dórico: αἰ es también lesbia, tesalia y beocia, y κα, beocia y propia del tesalio de la Histiótide, mientras que el lesbio y el tesalio de la Pelasgiótide y de la Tesaliótide emplean κε. La partícula modal κα es el rasgo no jónico-ático más frecuente del corpus, en el que se lee en unas 370 inscripciones, 42 de ellas de adscripción dórica. Se concentra en las fórmulas τίνι κα θεῶν θύων y λώϊόν κα πράσσοι, en las preguntas disyuntivas con πότερά κα, como πότερά κα Ϝοεκέτας τύχοιμι de I.Dodone DVC 2368A (ss. VI-V a.C.), y en las construcciones de optativo potencial, como ἐ͂ τύχοιμ̣ί κα de 1148A o ἐ͂ τυνχάνοι κα de 1182A. Ante vocal, la partícula se elide, como en βέλτιόμ μοι κ' εἴη de I.Dodone Lhôte 117A (s. IV a.C.) o, con la aspiración de la palabra siguiente, en el χὀ̣ ἐνιαυτὸς de I.Dodone DVC 2445 (cf. §4.2.3). La conjunción αἰ es mucho menos frecuente y solo se lee en diez inscripciones del capítulo, como αἰ τὰ δίκαια μαστεύοντι de I.Dodone DVC 4 (s. IV a.C.), αἰ νικασέω τὰν δίκ[αν] de 2521A o αἴ τις σύνhοδος de 411A (finales del s. VI a.C.), y en la combinación αἴ κα, equivalente del ático ἐάν, de I.Dodone Lhôte 94; las disyuntivas αἴτε, en I.Dodone DVC 138A (primera mitad del s. V a.C.) y 3064A, completan el inventario. Por su frecuencia, κα es el indicio más útil para reconocer una consulta no jónico-ática, pero no para atribuirla al dórico, puesto que la comparten el beocio y la Histiótide, y αἰ, más rara, tampoco excluye el eolio. La combinación híbrida εἴ κα, que Buck (1955: §134.2c) considera la norma de las inscripciones occidentales tardías, porque la sustitución de αἰ por εἰ precedió a la de κα por ἄν, no se documenta en el capítulo. Su empleo como introductor de las interrogativas totales se examina con la sintaxis (§6).",
  "dvcs": [
   "2368A",
   "1148A",
   "1182A",
   "LOD 117A",
   "2445",
   "4",
   "2521A",
   "411A",
   "LOD 94",
   "138A",
   "3064A"
  ]
 },
 {
  "id": 29,
  "sec": "§6.1",
  "name": "ἦ y αἰ en las interrogativas totales",
  "short": "ἦ y αἰ en las interrogativas totales",
  "cat": "Sintaxis",
  "desc": "En la prosa ática, la interrogativa total directa se introduce con ἦ o con ἆρα, y la indirecta, con εἰ. La interpretación tradicional de las laminillas suponía que ese reparto se había neutralizado: Lhôte (2006: 339, §74) enumera πότερον, πότερα, αἰ y εἰ como variantes de la partícula ἦ de la fórmula y considera αἰ la forma más común de la conjunción interrogativa, el equivalente del ático εἰ. Nieto Izquierdo (2019) ha mostrado, en cambio, que la neutralización es solo aparente. Ni εἰ ni αἰ introducen interrogativas directas, puesto que los ejemplos aducidos son interrogativas indirectas cuyo verbo introductor se ha omitido porque la situación de la consulta lo hace evidente. En el dominio dórico, además, la única partícula de las interrogativas totales indirectas es ἦ, mientras que αἰ, cuando no depende de un verbo de pregunta, introduce la prótasis de una condicional cuya apódosis se omite; solo en las consultas tesalias introduce αἰ interrogativas indirectas (cf. §5.3 del capítulo tesalio). Los datos del capítulo confirman el uso regular de ἦ, que se lee en casi cincuenta inscripciones y se restituye en otras ocho. En las consultas de los ss. VI y V a.C. se escribe con Ε, de acuerdo con la notación antigua de las vocales medias largas (cf. §4.1.3), como en ἐ͂ τύχοιμ̣ί κα de I.Dodone DVC 1148A (mediados del s. V a.C.) o en ἐ͂ τυνχάνοι κα de 1182A (primera mitad del s. V a.C.), y con Η desde finales del s. V a.C., como en ἦ Μιλήϊός τις ἐναν̣τίος de I.Dodone DVC 135A (segunda mitad del s. V a.C.) o en ἦ τέθνακε Ἀριστώνυμος de 2980 (primera mitad del s. IV a.C.). La mayoría de esas preguntas carecen de verbo introductor y adoptan la forma de una interrogativa directa, a menudo en primera persona, como Ἦ ἀφέρπῃ Ϝοίκαδε πὸτ τὸν ἀδελφεόν de I.Dodone Lhôte 56 (s. IV a.C.) o Ἦ ἀπιοῦσα ἄλλ[ο] τί μοι ἀγαθὸν ἐσσεῖται de I.Dodone Lhôte 62 (s. IV a.C.). En otras, en cambio, ἦ sigue a un verbo de consulta: ἐπ[ικ]οινῆται en I.Dodone DVC 228B (principios del s. IV a.C.), ἐπερωτῶντ[ι] en 2425A (primera mitad del s. IV a.C.), ἐρω̣[τ]ῆι en 2648A (finales del s. IV a.C.) y ἐπερωτῆι en 3473A (primera mitad del s. IV a.C.), así como Ἐπερωτῶντι en I.Dodone Lhôte 14 (ss. IV-III a.C.), Ἰστορεῖ en 73A (ss. IV-III a.C.), Ἐπιστορεῖ en 115 (s. IV a.C.) y Ἐπερωτεῖ en 121A (ss. IV-III a.C.). Además, en I.Dodone DVC 2049B (mediados del s. IV a.C.), 3109A (mediados del s. IV a.C.) y 3946B (segunda mitad del s. IV a.C.) el verbo o la partícula están restituidos. El carácter subordinado de esas preguntas no siempre puede demostrarse, porque las consultas alternan con libertad la tercera persona del estilo indirecto y la primera del consultante, como hace I.Dodone DVC 1369B (segunda mitad del s. IV a.C.), que tras ἐπικοινῆται Κερδύλλας pregunta ἐσσεῖταί μοι λώϊον. El único indicio seguro es el reflexivo indirecto, que remite al sujeto de la oración principal. Nieto Izquierdo (2019: 111) lo reconoce en el αὐτοῖς de la consulta de los dodoneos I.Dodone DVC 2425A, ἐπερωτῶντ[ι] Δωδωναῖοι τὸν θεὸν ἦ ἀσφαλέω[ς] ἐστὶ μένειν [αὐτ]εῖ καὶ αὐτοῖς [κ]αὶ χρήμασι, aunque admite que el pronombre puede deberse también a una pregunta directa reformulada en tercera persona, y lo considera seguro en la consulta noroccidental de I.Dodone Lhôte 9 (primera mitad del s. II a.C.), en la que el pronombre reflexivo de ἦ α[ὐ]τ<ο>ιαυτοῖς συμπολειτεύουσι concuerda con el plural del verbo ἐπερωτῶντι y no con su sujeto gramatical, τὸ κοινόν. La conjunción αἰ es mucho más rara y solo se lee en diez inscripciones del capítulo (cf. §5.5), de las cuales tres, I.Dodone DVC 474A (primera mitad del s. V a.C.), 1234 (segunda mitad del s. III a.C.) y 3325A (finales del s. V a.C.), no permiten analizar la construcción, porque la partícula o su contexto están restituidos. En las demás, αἰ admite siempre la interpretación condicional. En I.Dodone Lhôte 94 (primera mitad del s. IV a.C.), αἴ κα (rasura) καὶ τὰ χρέα ἀποδ<ώ>σω es la prótasis de una condicional cuya apódosis es la propia pregunta, σωτηρία μοι ἐσσε͂ται καὶ ἐμὶν καὶ τᾶι ναῒ, y en I.Dodone DVC 2401 (principios del s. V a.C.), ἄνελ(ε) τὸν κλᾶρον αἰ καρ[π]ο̄́σατο depende de un imperativo, en la instrucción para extraer una suerte, con la misma estructura que el αἰ δὲ μηδεὶς τούτων κέκλοβε, τουτονί de I.Dodone DVC 2222A (ss. V-IV a.C.). Otras tres consultas consisten solo en una prótasis, cuya apódosis el consultante deja implícita: αἴ τις σύνhοδος de I.Dodone DVC 411A (finales del s. VI a.C.), que Nieto Izquierdo (2019: 114 n. 2) interpreta como una prótasis de este tipo, αἰ νικασέω τὰν δίκ[αν] de 2521A (primera mitad del s. IV a.C.) y αἰ με̄̀ [ἄγο̄]μες … ε̄̓̀ ἀφέ{σ}ντες de 2488A (segunda mitad del s. V a.C.). Solo dos inscripciones parecen apartarse de este reparto, y en ninguna de las dos de forma concluyente. En I.Dodone DVC 4 (s. IV a.C.), αἰ sigue al verbo de consulta, ἐπερωτο͂ντι τὸν θεὸν αἰ τὰ δίκαια μαστεύοντι ταύταν νικῆν, y los editores la interpretan como una interrogativa indirecta; Nieto Izquierdo (2019: 113 n. 3) entiende, en cambio, que la cláusula con αἰ es la prótasis de una condicional y que la pregunta en sentido estricto es el infinitivo, sin partícula, con la corrección ταῦτα{ν} νικῆν. En I.Dodone DVC 73 (finales del s. V a.C.), Ῥαζία ἐπέθετο αἰ διαλλαγὰ μέλλει γενέσθαι, αἰ con indicativo sigue a un verbo finito, y Eidinow (2007: 102) la traduce como una interrogativa indirecta dependiente de ἐπέθετο; pero ἐπιτίθημι no tiene paralelos en el corpus como verbo de consulta, y el sentido de “depositar” la laminilla, no menos posible, deja la cláusula con αἰ como una prótasis independiente. Además, la adscripción de esta consulta al dórico descansa solo en el participio ζο̄́οντος (cf. §5.2.6), y Giannakis (2024a: 40) la cuenta entre las de mezcla dialectal. Ninguna inscripción del capítulo emplea εἰ, ni como conjunción condicional ni como partícula interrogativa. Los datos se ajustan, por tanto, a la distribución propuesta por Nieto Izquierdo: ἦ introduce tanto las interrogativas directas como las indirectas, y αἰ, que nunca introduce con seguridad una interrogativa indirecta, conserva el valor condicional del dórico. En ese aspecto, las consultas dóricas se distinguen de las tesalias, en las que αἰ sí introduce interrogativas indirectas, de modo que la sintaxis de la partícula, y no solo su forma, separa los dos dialectos.",
  "dvcs": [
   "1148A",
   "1182A",
   "135A",
   "2980",
   "LOD 56",
   "LOD 62",
   "228B",
   "2425A",
   "2648A",
   "3473A",
   "LOD 14",
   "LOD 73A",
   "LOD 115",
   "LOD 121A",
   "2049B",
   "3109A",
   "3946B",
   "1369B",
   "LOD 9",
   "474A",
   "1234",
   "3325A",
   "LOD 94",
   "2401",
   "2222A",
   "411A",
   "2521A",
   "2488A",
   "4",
   "73"
  ]
 },
 {
  "id": 30,
  "sec": "§6.2",
  "name": "La partícula modal κα y los modos de la pregunta",
  "short": "La partícula modal κα y los modos de la pregunta",
  "cat": "Sintaxis",
  "desc": "La partícula κα desempeña en dórico las mismas funciones que el ático ἄν (cf. §5.5): acompaña al optativo potencial y al subjuntivo eventual. Algunos dialectos, sin embargo, la emplean también con el optativo en las condicionales y en otras subordinadas, como hacía a veces Homero, y conservan el optativo en las condicionales que la mayoría de las inscripciones, incluidas las jónico-áticas, han sustituido por el subjuntivo. En las inscripciones del capítulo, la construcción más frecuente es el optativo potencial con κα de la fórmula τίνι κα θεῶν, como en [Θ]ρασύβο̄λος τίνι κα θεο͂ν θύσ[ας] καὶ hιλαξάμενος το̄̀ς ὀπτίλλο̄[ς] ὑγιέστερος γένοιτο de I.Dodone DVC 1393 (mediados del s. V a.C.), en Τίνι {Ι} κα θεο͂ν εὐξάμενος πράξαι de I.Dodone Lhôte 67A (tercer cuarto del s. V a.C.) o en las consultas públicas de los corcirenses, que ponen el verbo en plural (Ϝοικέοιε[ν] en I.Dodone Lhôte 1, primera mitad del s. IV a.C.; οἰκεῦεγ y τελέθοι en 2, segunda mitad del s. IV a.C.; ὁμονοοῖεν en 3, primera mitad del s. IV a.C.). El mismo optativo con κα aparece en las disyuntivas con πότερα, como πότερά κα τυγχάνοιμι de I.Dodone DVC 22A (primera mitad del s. IV a.C.) o πότερά κα Ϝοεκέτας τύχοιμι de 2368A (ss. VI-V a.C.), en las preguntas introducidas por ἦ, como [θυ]γ̣άτε̄ρ ἐ͂ τύχοι κα [κό]ρας ἐπάγουσα de 1426A (primera mitad del s. V a.C.), y en las que se apoyan en el comparativo de la fórmula, como λο̄́ϊόν κα πράσ<σ>οι de 6A (mediados del s. V a.C.) o βέλτιόμ μοι κ' εἴη de I.Dodone Lhôte 117A (s. IV a.C.). En la interrogativa parcial indirecta περὶ <παμ>πασ̣ίας̣ ὅ τι κα τυνχάν[οι]μι πράσ<σ>ων de I.Dodone DVC 261B (mediados del s. IV a.C.), la partícula acompaña también al optativo potencial. Como ya advirtió Lhôte (2006: 345, §82), el optativo sin κα tiene en las consultas el mismo valor que el optativo con la partícula, y las dos construcciones alternan en las mismas fórmulas. En el capítulo, el optativo sin κα se lee en τίνι θεῶν ἢ ἡρώων θύων ἢ εὐχόμενος εὐτυχοῖ de I.Dodone DVC 998B (finales del s. IV a.C.), en καὶ λώϊον [πρ]άσσοι de 1088A (finales del s. V a.C.), en πότερα ὠνεύμενοι ἢ ἐῶντες λώϊον πράσ<σ>οι<ν> de 2593A (primera mitad del s. IV a.C.) y en la relativa ἧ<ι> τύχοιμι de 1234 (segunda mitad del s. III a.C.). La alternancia no responde, por tanto, a una diferencia de sentido, sino a la variación libre de un formulario que el consultante adaptaba a su pregunta. El subjuntivo aparece en dos usos. El deliberativo, sin partícula, se emplea en las preguntas sobre lo que conviene hacer, como Ἦ ἀφέρπῃ Ϝοίκαδε de I.Dodone Lhôte 56 (s. IV a.C.) o ἦ πάσωμαι de I.Dodone DVC 3330A (ss. V-IV a.C.). El eventual, con κα, se lee en la prótasis αἴ κα … ἀποδ<ώ>σω de I.Dodone Lhôte 94, regular en todos los dialectos, y, según la lectura de Lhôte (2006: 98, n.º 36), en la disyuntiva Θέλυτος πότερά κα κατὰ χόραν ἔχο̄ν τὰν γυναῖκα ἔχο̄ (= I.Dodone DVC 15A; s. V a.C.), donde los editores de I.Dodone DVC leen ἔχον en los dos lugares. Si se acepta la lectura de Lhôte, la construcción es la más notable del capítulo, porque el ático clásico no ofrece ejemplos de subjuntivo con partícula modal en una interrogativa indirecta para expresar el futuro, como señala Lhôte (2006: 344-345, §81), y Nieto Izquierdo (2019: 113-114) observa que κα con subjuntivo no es habitual con πότερα, τίς o πῶς, que suelen construirse con subjuntivo deliberativo, con optativo o con indicativo. Salvo la propia partícula κα, la sintaxis de los modos en las consultas dóricas coincide, en suma, con la del resto del griego, y el formulario explica la mayor parte de las variantes. Las únicas construcciones que se apartan del uso ático, el valor solo condicional de αἰ y, si la lectura de Lhôte es correcta, el subjuntivo eventual con κα tras πότερα, no bastan por sí solas para identificar una consulta como dórica, pero sí confirman que los redactores de estas inscripciones seguían las pautas sintácticas de su propio dialecto.",
  "dvcs": [
   "1393",
   "LOD 67A",
   "LOD 1",
   "LOD 2",
   "LOD 3",
   "22A",
   "2368A",
   "1426A",
   "6A",
   "LOD 117A",
   "261B",
   "998B",
   "1088A",
   "2593A",
   "1234",
   "LOD 56",
   "3330A",
   "LOD 94"
  ]
 },
 {
  "id": 31,
  "sec": "§7.1",
  "name": "La familia de πάομαι",
  "short": "La familia de πάομαι",
  "cat": "Vocabulario",
  "desc": "El verbo πάομαι, “adquirir”, cuyo perfecto πέπαμαι se utiliza con el sentido de “poseer”, corresponde al jónico-ático κτάομαι, κέκτημαι, y forma una familia de derivados con el mismo radical πᾱ-, como el sustantivo πᾶμα, equivalente del ático κτῆμα, el abstracto παμπασία, “conjunto de los bienes”, y el compuesto ἐπίπασις, equivalente del ático ἐπίκτησις. Según Buck (1955: §49.5a), estas formas, frecuentes en el dórico literario, se empleaban en lugar de κτῆμα y sus afines en la mayoría de los dialectos, quizá en todos, salvo el jónico-ático. Lhôte (2006: 402) considera dórica esta familia, que tiene por rara fuera de ese dialecto y que se documenta con especial abundancia en las laminillas, y Méndez Dosuna (2018b: 45) la cuenta entre los rasgos léxicos típicos del dórico (cf. §3). Es el término dórico mejor representado del capítulo, en el que se documenta en treinta y seis inscripciones. El verbo aparece en el perfecto πέπατα<ι> de I.Dodone DVC 6A (mediados del s. V a.C.) y en su participio πεπαμένος, que se lee en la misma inscripción y en 22A (primera mitad del s. IV a.C.), 146A (ss. V-IV a.C.), 1366B (primera mitad del s. V a.C.), 2418B (segunda mitad del s. IV a.C.), 3677A (segunda mitad del s. V a.C.) y 4092A (segunda mitad del s. V a.C.), así como en I.Dodone Lhôte 117A y 118B (ambas del s. IV a.C.); en el pluscuamperfecto 'πέπατο de I.Dodone DVC 2027B (s. IV a.C.), quizá también en [ἐ]πέπατο de 2238A (mediados del s. V a.C.); en la primera persona πέπαμ[αι] de 3261B (finales del s. V a.C.); en el presente 'πίπαμαι de 2028A (primera mitad del s. IV a.C.) y en el tema πιπάσκομαι de πιπασκομένωι, en 19A (ss. V-IV a.C.), y de πιπασκόμε(νος), en 1591A (primera mitad del s. IV a.C.). También aparece en los aoristos de subjuntivo πάσομαι de I.Dodone DVC 608A (s. V a.C.) y πάσωμαι de 3330A (ss. V-IV a.C.). Entre los sustantivos predomina παμπασία, también escrito πανπασία, sobre todo en la fórmula περὶ παμπασίας de I.Dodone DVC 428B (principios del s. IV a.C.), 1381B (primera mitad del s. V a.C.) o 2815A (segunda mitad del s. V a.C.), entre otras, que se restituye en [περὶ] πα<μ>πασί[ας] de 2876B (segunda mitad del s. IV a.C.), y aparece también en acusativo, como en <παμ>πασίαν de 2286A (finales del s. V a.C.); le siguen el genitivo plural παμάτων de 2173A (primera mitad del s. IV a.C.), ἐπίπασι[ς] de 430 (primera mitad del s. IV a.C.), ἐπιπασίου de 4141A (primera mitad del s. IV a.C.) y el antropónimo Φιλοπάμονι de 3336A (finales del s. V a.C.), equivalente del ático Φιλοκτήμων. La frecuencia de esta familia guarda relación con la temática del capítulo, en el que las consultas sobre asuntos económicos o patrimoniales son las más numerosas (cf. §3), y con la estructura de las fórmulas, en las que el participio πεπαμένος expresa la condición del consultante, como en πράσ<σ>οιμι πεπαμένος τὰν οἰκίαν de I.Dodone DVC 2418B o en Ἦ αὐτὸς πεπαμένος τὰν ἐ<μ> πόλι οἰκίαν καὶ τὸ χωρίον de I.Dodone Lhôte 117A. Según la tipología de García Ramón (2018: 58-60), se trata de un término compartido con otros dialectos y ausente del ático, y su valor como criterio de adscripción, discutido en §3, depende de su concentración en las consultas dóricas, puesto que fuera de ellas solo se documenta en la consulta tesalia o beocia I.Dodone DVC 1060A (mediados del s. V a.C.), con πὲρ πανπασία<ς> (cf. §5.1.2), en la consulta en koiné 4054B (ss. V-IV a.C.) y en dos de mezcla dialectal, 2110A (primera mitad del s. V a.C.) y 3316A (ss. V-IV a.C.) (cf. §4.1.1), aunque el dato es en parte circular, ya que este léxico basta para contar una consulta como dórica. Fuera del dórico, la familia tiene un paralelo claro en Beocia, donde designa el derecho a adquirir bienes raíces. Los decretos de proxenía beocios de los ss. IV-II a.C. conceden a los próxenos ese derecho con la fórmula εἶμεν αὐτοῖ γᾶς κὴ Ϝοικίας ἔππασιν, o ἔμπασιν. Se explicaba ἔππασις como variante fonética de ἔμπασις (= ático ἔγκτησις), pero las laminillas de Dodona, con ἐπίπασις, su derivado ἐπιπάσιον y un subjuntivo de ἐπιπᾶσθαι (equivalente del ático ἐπικτῆσθαι), llevaron a Méndez Dosuna (2007f: 295-296) a reconocer en ella la forma apocopada de ἐπίπασις (= ático ἐπίκτησις), el mismo sustantivo que se lee en ἐπίπασι[ς] de I.Dodone DVC 430 y en ἐπιπασίου de 4141A (ambas de la primera mitad del s. IV a.C.). El paralelo beocio confirma que la familia no es exclusiva del dórico, como ya señalaba Buck (1955: §49.5a). Lo que sí parece propio del beocio es la formación concreta ἔππασις, con apócope de la preposición. Las dos formas del capítulo, ἐπίπασι[ς] y su derivado ἐπιπασίου, conservan la preposición plena y no plantean ese problema, pero la lectura ἐπίππᾱσις de I.Dodone DVC 313A, que se examina en el capítulo dedicado al beocio (§4.1.1), sería, de aceptarse, un testimonio de esa formación beocia.",
  "dvcs": [
   "6A",
   "22A",
   "146A",
   "1366B",
   "2418B",
   "3677A",
   "4092A",
   "LOD 117A",
   "LOD 118B",
   "2027B",
   "2238A",
   "3261B",
   "2028A",
   "19A",
   "1591A",
   "608A",
   "3330A",
   "428B",
   "1381B",
   "2815A",
   "2876B",
   "2286A",
   "2173A",
   "430",
   "4141A",
   "3336A",
   "1060A",
   "4054B",
   "2110A",
   "3316A",
   "313A"
  ]
 },
 {
  "id": 32,
  "sec": "§7.2",
  "name": "ἕρπω",
  "short": "ἕρπω",
  "cat": "Vocabulario",
  "desc": "El verbo ἕρπω, que en ático significa “arrastrarse”, es en dórico un simple equivalente de ἔρχομαι, “ir”, documentado también en argivo, como en el ἧρπε εἰς τὸ ἱερόν de los iámata de Epidauro (IG IV²(1) 121; ca. 350-300 a.C.), y en arcadochipriota. En las inscripciones del capítulo se documenta en el dativo de participio [ἰς] Φάρον ἕρπο[ντι] de I.Dodone DVC 3517A (segunda mitad del s. IV a.C.), en el subjuntivo deliberativo del compuesto Ἦ ἀφέρπῃ Ϝοίκαδε πὸτ τὸν ἀδελφεόν de I.Dodone Lhôte 56 (s. IV a.C.) y, de forma fragmentaria, en ἕρπ[- - -] de I.Dodone DVC 792B (s. IV a.C.), donde el verbo es, junto con la fórmula [τύ]χα ἀγα[θ]ά, el único indicio dórico de la consulta. Las consultas noroccidentales atestiguan también la forma ἐν Παδή̣αν ἕρπων, en I.Dodone DVC 3032 (ss. V-IV a.C.), y la expresión ἐν τοῖ ἕρποντι ἐνιαυτοῖ, “en el año próximo”, de 3220A (mediados del s. III a.C.), en la que el participio ha adquirido el valor temporal de “venidero”. El término aparece siempre con el sentido de un desplazamiento concreto, en consultas sobre viajes o cambios de residencia, y nunca con el valor de “arrastrarse” del ático. Es, por tanto, un término dialectal compartido con otros dialectos, pero con un significado ajeno al ático, aunque su difusión en arcadochipriota impide considerarlo exclusivo del dórico.",
  "dvcs": [
   "3517A",
   "LOD 56",
   "792B",
   "3032",
   "3220A"
  ]
 },
 {
  "id": 33,
  "sec": "§7.3",
  "name": "ὀπτίλλος",
  "short": "ὀπτίλλος",
  "cat": "Vocabulario",
  "desc": "El sustantivo ὀπτίλλος, “ojo”, equivalente del ático ὀφθαλμός, es uno de los dorismos léxicos más característicos. Se documenta también en los iámata de Epidauro (IG IV²(1) 121), que emplean ὄπτιλλον, ὀπτίλλου y τοὺς ὀπτίλλους y el compuesto ἁτερόπτιλλος, “tuerto”, y en la prosa dórica del pitagórico Metopo (Metop. ap. Stob. 3.1.115), y Plutarco lo da como la palabra dórica de la región para el ojo, a propósito de Atenea Optilítide (Plu. Lyc. 11.4). En las inscripciones del capítulo se lee en το̄̀ς ὀπτίλλο̄[ς] de I.Dodone DVC 1393 (mediados del s. V a.C.) y en [ὀ]π̣τίλο̄ν de 1921A (segunda mitad del s. V a.C.), escrito con una sola λ. En I.Dodone DVC 730B (finales del s. V a.C.), [ὀπ]τίλλο̄ν̣ está restituido en parte, y en 1466B (principios del s. IV a.C.) los editores restituyen ὀπτ[ίλλους], que Méndez Dosuna (2018b: 45) recoge con interrogación. Dado que el término no está atestiguado en ningún otro dialecto, su mera presencia en una inscripción basta para atribuir esas consultas al dórico. Cabe destacar que las tres apariciones seguras se refieren con toda probabilidad a enfermedades de los ojos, el mismo contexto en que se emplea en los iámata de Epidauro.",
  "dvcs": [
   "1393",
   "1921A",
   "730B",
   "1466B"
  ]
 },
 {
  "id": 34,
  "sec": "§7.4",
  "name": "σάτει",
  "short": "σάτει",
  "cat": "Vocabulario",
  "desc": "En I.Dodone DVC 228B (principios del s. IV a.C.), en la que Ἀριστόδαμος pregunta por un viaje por mar a Faros, se lee ἦ λώϊον καὶ ἄμεινον ΣΑΤΕΙ πλέοντι [κατὰ θάλασσ]αν καὶ ἐς Φάρον τοῦ θέρεος. Los editores imprimen ΣΑΤΕΙ en mayúsculas por considerarlo ininteligible, aunque recogen la propuesta de Méndez Dosuna (2018b: 38), que lo interpreta como una variante del adverbio dórico σᾶτες, “este año” (< *kjāwetes). El adverbio se documenta en la expresión pleonástica ἐς τὸν σᾶτες ἐνιαυτόν de una inscripción de Gela (IG XIV 256, s. III a.C.), y Hesiquio lo atribuye a los dorios. Sus correspondientes en otros dialectos son el micénico za-we-te, el jónico σῆτες y el ático τῆτες. La pareja σάτει / σᾶτες, con desinencia de locativo en la primera y de acusativo en la segunda, recuerda la de αἰϝεί, la forma de la mayoría de los dialectos, frente al αἰϝές del laconio y del heracleota. Así, el corpus documenta por primera vez la forma σάτει, variante de σᾶτες, en una inscripción con otros rasgos dóricos como ἐπ[ικ]οινῆται. La consulta adquiere un sentido preciso: el consultante pregunta si le conviene navegar este año y llegar a Faros en verano. Carbon (2017: 103-104) entiende que se trata de un viaje en dos etapas, primero a Corcira y luego, en verano, a Faros, y atribuye la consulta a un epirota o a un habitante de una colonia corintia de la región, lo que concuerda con los demás rasgos dóricos del texto.",
  "dvcs": [
   "228B"
  ]
 },
 {
  "id": 35,
  "sec": "§7.5",
  "name": "γα(ϝ)οργέω",
  "short": "γα(ϝ)οργέω",
  "cat": "Vocabulario",
  "desc": "El compuesto γα(ϝ)οργέω, equivalente del ático γεωργέω, y su derivado γα(ϝ)οργία (= át. γεωργία) designan el trabajo del campo en todos los dialectos, de modo que lo que los distingue es la forma de la palabra y no su significado. El jónico-ático y la koiné emplean γεωργέω, que en Dodona se lee en I.Dodone DVC 1155B (ἦ γειοργε͂ν), 1987B (γεο̣̄ργεῖν) y 2291A (γεωργῶ, junto al acusativo dórico γᾶν), todas del s. IV a.C. Entre los dialectos que conservan γα- inicial, el beocio presenta γαεργός y γαϝεργός en una inscripción de Tespias de ca. 230 a.C. (I.Thesp. 54.6, 11 y 27), y de los laconios recoge Hesiquio el término γαβεργός · ἀγροῦ μισθωτής “arrendatario de un campo”. El tesalio, por su parte, coincide con el dórico en la forma γαοργ-, que se documenta fuera de Dodona en el infinitivo γαοργεῖμεν de IG IX2 1229.16-17 (Falana, principios del s. II a.C.) y dentro del santuario en las consultas tesalias, como el γ̣αοργ̣έ̣ω de I.Dodone DVC 1340A (finales del s. V a.C.) y el γαοργέουμ̣[εν] de 3002B (primera mitad del s. IV a.C.), cuya desinencia con ου es tesalia. Por ello la forma γαοργ- no basta para distinguir el tesalio del dórico. En las inscripciones del capítulo aparece en <γ>αϜοργε͂ν de I.Dodone DVC 2133B (primera mitad del s. V a.C.), con la digamma conservada (cf. §4.2.2), y en [γ]αο<ρ>γέο̄ν de 3612B (primera mitad del s. V a.C.), con el hiato εο (cf. §4.1.2.3). En ninguna de las dos es el término el que permite atribuir la consulta al dórico, sino el alfabeto corintio, que en la primera se reconoce con alguna dificultad y en la segunda se reduce a una épsilon corintia aislada, por lo que ambas se cuentan como dudosas (cf. §3). El verbo se lee también en las consultas de doris severior, como el γαοργῆ<ν> de I.Dodone DVC 1432 (segunda mitad del s. IV a.C.), y en otras no jónico-áticas, como el γαϜορ̣γέο̄ν de 275A (mediados del s. V a.C.).",
  "dvcs": [
   "1155B",
   "1987B",
   "2291A",
   "1340A",
   "3002B",
   "2133B",
   "3612B",
   "1432",
   "275A"
  ]
 },
 {
  "id": 36,
  "sec": "§7.6",
  "name": "Otros términos",
  "short": "Otros términos",
  "cat": "Vocabulario",
  "desc": "Los demás términos dignos de mención son de interpretación incierta o no exclusivos del dórico. El primero es γάναν de I.Dodone DVC 312B (finales del s. V a.C.), en la secuencia γάναν καὶ το͂ν γενεο͂ν, que los editores, siguiendo el testimonio de Gregorio de Corinto (Greg.Cor. p. 345 [VERIFICAR edición], según el DGE s. v. γάνα), interpretan como una variante de γυνή propia de Sicilia. Sobre ese término descansa la atribución de la consulta a Occidente (cf. §2) y la inscripción conservaría el único testimonio epigráfico de la forma. El adjetivo ἔρσην, en ἔρσενες de I.Dodone DVC 542A (principios del s. IV a.C.) y en ἔρσεν [γ]ένος de 4161B (finales del s. V a.C.), suele contarse entre los rasgos dóricos del corpus por oposición al ático ἄρρην, pero el vocalismo ερσ- es también jónico y lesbio, de modo que solo excluye el ático. El sustantivo γνέφας de I.Dodone DVC 4 (s. IV a.C.) es un hápax, que los editores relacionan con κνέφαλλον, “borra de lana”, porque la consulta trata de una prenda (περὶ θἠματίο̄), mientras que Curbera (2013, s. v. Γνέφας) lo interpreta como un antropónimo. También es de significado incierto διαλυτήα, que se lee en περὶ τᾶς δια̣λυτήα[ς] de I.Dodone DVC 1088A (finales del s. V a.C.), la consulta de un corcirense llamado Φείδης, y en el ἄ̣νευ διαλυτε̄́ας de 2407A (segunda mitad del s. V a.C.); los editores lo relacionan con διάλυσις, “disolución, acuerdo”, y Chaniotis (2018: 331) entiende esa consulta como una petición sobre un arbitraje o una reconciliación que se resolvería por sorteo. Por último, el adjetivo ἀλαός, “ciego”, que los editores leen en ὥσπερ ἁμὲς τοὶ ἀλαοί de I.Dodone DVC 1375B (primera mitad del s. IV a.C.), es exclusivo de la poesía, y Méndez Dosuna (2016: 129; 2018b: 46 n. 145) propone entender τοὶ ἄλ<λ>οι, con la confusión frecuente entre Α y Λ. Queda fuera de este apartado el supuesto genitivo plural ἐϜο͂ν, “bienes”, que Lhôte (2006: 401-402) reconocía en varias consultas corintias, pues, como se ha visto (§4.2.2), se trata en realidad de formas de ἐ(ϝ)άω, como el propio autor reconoce en CIOD. El léxico confirma, en conjunto, el perfil que ofrecen la fonética y la morfología: la mayor parte de los términos característicos son compartidos con otros dialectos no jónico-áticos y solo ὀπτίλλος y σάτει pueden considerarse dorismos exclusivos, aunque la frecuencia de la familia de πάομαι y de ἕρπω en las consultas dóricas, frente a su ausencia casi completa en las demás, les confiere un valor indicativo que justifica su empleo, con las cautelas expuestas, en la clasificación.",
  "dvcs": [
   "312B",
   "542A",
   "4161B",
   "4",
   "1088A",
   "2407A",
   "1375B"
  ]
 }
];
export const RASGO_TEXTS_DOR = {
 "1": "Ἦ ἄλλαν μαστεύων;",
 "1005A": "[ἦ ὠνέωμ]α̣ι ναῦν καὶ ἐργάζωμαι κατὰ θάλασσαν;",
 "1022A": "[- - -]οιμές κα ΣΑ[.][- - -]",
 "105B": "[ὁ δεῖνα ἐ]π̣[ε]ρωτᾶι [πό]τε̣ρον ἐ̣ν Κορ[- - -] \n[- - -] ἐλθε(ῖ)ν ἐν̣πορε(υό)μενος [- - -] \n[- - -][. .] ποιεῖ",
 "1060A": "Ἀετίναι πὲρ παν-\nπασία(ς) γίνυτο",
 "1066B": "Ἀμπ(ρακία)",
 "1088A": "θεὸς τύχα· ἐπικοιν[ῆται] Φείδης ὁ Κορ-\nκυραῖος τῶι Δ̣ιὶ τῶι Να[ΐωι καὶ τ]ᾶι Διώναι \nπερὶ τᾶς δια̣λυτήα[ς . . . .]ΟΤΑΠΑΛΕΑΝ \nἀντεγράψ[α]το ἦ τυχ[αῖον] ΥΝ[. . .]ΗΥΝ[.] \nκαὶ λώϊον [πρ]άσσοι",
 "1089B": "θεὸς τ̣ύχα̣• Δωδω[ναῖοι ἱ]στορεῦ[ν]-\nτ̣ι Δία Νάϊον καὶ Διώ[ναν αἰ] τὸ σαμῆόν \nἐστι παιδὶ κλάριο[ν . . . .]Ν",
 "1148A": "ἐ͂ τύχοιμ̣ί κα \nτὰν hοδὸ(ν) τ̣ούταν;",
 "1153A": "ἦ καὶ ζαμία τις ἐσσεῖται \nτουθἤνεκα;",
 "1154A": "αὐτεῖ",
 "1155B": "ἦ γειοργε͂ν;",
 "1182A": "Χαροπίαι \nἐ͂ τυνχάνοι \nκα ναυκλαρέ-\nο̅ν νᾶν;",
 "1193A": "[---] καὶ πότερα κασι̣[γνήται] \nἐάσσαι συνϜοικέω \nαὑτος ἁ γυνὰ",
 "1207B": "πότερα ἐ̣ν̣ [Ὀλ]υ̣μ̣πία[ν - - -];",
 "1229B": "αἰ (ἰ)ς Κόρκ̣υ[ραν ἰὼν - - -] \nΔία̣ Νάϊο[ν - - -]",
 "1234": "[θεὸς ἀγαθ]ᾶι τύχαι - ἐπ[ικ]ην[ῆται] Αἰθαλὶς Διὶ καὶ Διώ̣να[ι]\n[αἰ μένειν] οἱ λώϊον καὶ ἄμειν[ό]ν ἐστι αὐτεῖ κατὰ χώ̣[ρ]αν \nὥσπερ καὶ νῦν ἐστι [ἢ ὁρμ]ᾶν ἧ(ι) τύχοιμι",
 "1244": "ἦ περὶ γᾶν \nπλέοντι \nὅπει κα \nοἰκε͂ν;",
 "1246A": "αὐτε͂ μέν̣[ο̅];",
 "1297A": "[πὲ]ρ̣ πανπα-\nσίας",
 "1340A": "εἰ γ̣αοργ̣έ̣ω [κ]-\nαὶ ἔστι μο̣ι τυ-\nχαῖον",
 "1345A": "[ὁ δεῖνα ἐπερωτᾶ]ι ἦ̣ ζό̅η [ἐν] Ἐπιδα",
 "1346A": "πότερα πεδαφέρο̅ Νέο̅νι;",
 "1358B": "Ζε[ῦ] ἦ Νεμέαι οἰκ[ῶν π]ό[τ]ερον Θυέστου [.]Ι[. .];",
 "135A": "ἦ Μιλήϊός τις ἐναν̣-\nτίος hόρο̅ δύνατ-\nαι Ϝοικε͂σαι;",
 "1366B": "πεπαμένος",
 "1369B": "ἐπικοινῆται Κερδύλλας τῶι Διὶ τῶι Νάωι καὶ Διώναι \nἐσσεῖταί μοι λώϊον ἐν τῶι αὐτῶι ἐργαζομένωι \nκαὶ ὑγί(ει)α",
 "1375B": "τὸν Νάϊον καὶ τὰν Διώναν \nὥσπερ ἁμὲς τοὶ ἀλαοί",
 "1377B": "Νικὸ̅ [.]ΛΑΟΙ[- - -]-\nνα θύσασα Ε[. .][- - -] \n[- - - - - - - - - - - -]\n[. .]ΣΘΑΙ ἐσεῖτ[αι] ΕΕΛ[. . .][- - -] \nτίνα θεραπίαν̣ ΕΟ[. . .][- - -]",
 "1380A": "Θεό̣ς. Τύχα. \nἘν ὀ̅ρικο͂ι κα \nλο͂ιον πράσ(σ)οι-\nμι κατὰ χό̅ραν ἒ̅ \nhό̅σπε̣[ρ] ν̣ῦν \nϜοικέο̅ν̣ ;",
 "1381B": "περὶ π̣ανπ-\nασίας",
 "138A": "[- - - τίνι κα θε]ο͂ν εὐχόμενοι \n[- - -]ΟΝ αἴτε δίχα ϜΟΡ\n[- - - - -]",
 "1393": "[Θ]ρασύβο̅λος τίνι κα θεο͂ν θύσ- [ας] καὶ hιλαξάμενος τὸ̅ς ὀπτίλλο̅- [ς] ὑγιέστερος γένοιτο.",
 "1395A": "[Ζ]εῦ Νάϊε καὶ [Διώνα, ὁ δεῖνα] \nτίνα κα θεῶν ποτθέμεν[ο]ς̣ \nβέντιον εἴη καὶ ἦ ἐλεύθερ[ός] \nποκ' ἔσσωμαι;",
 "139A": "[- - -]ΑΕΣΑ κα θύσας \n[- - -] πο͂ς κα ἔχο̅ ἄλγος \n[- - -][. .]ΕϜΟΣ ἀπὸ αὐτο͂ Ϝὸς \n[- - -]Ο̣Σ̣ : ἐ͂ αἰτία \n[- - -][.] θεο͂ν καὶ ποτ̣ανθέο̅ν",
 "1426A": "[θυ]γ̣άτε̅ρ ἐ͂ τύχοι κα \n[κό]ρας ἐπάγουσα;",
 "1432": "Ἀγελόχωι ἐξ \nΗεργετίω Hο-\nρμημένωι \nἄμεινόν ἐστι \nγαοργῆ(ν);",
 "1459B": "γενεᾶς \nἐ͂ ζο͂ι (ἒ̅) μέ̅;",
 "1466B": "[- - - τύχ]α̣ ἀγαθ[ὰ - - -] \n[- - -]ΑΝ[.]ΑΝ̣[- - -] \n[- - -]ΠΛΑΣΔ[- - -] \n[- - -] οὐδ' ΙΕ[- - -] \n[- - - ἀδελ]φεὰν [- - -]\n[- - -]Ε̣ ὀπτ[ίλλους - - -]\n[- - -]ΙΟΕΙΚΑ̣[- - -] \n[- - -]ΦΙΛΟΙ[- - -]",
 "146A": "[- - -]ΑΝ hὰ ἐπρίατο \n[- - -]Ν̣ καὶ πεπαμένος",
 "1473A": "εἰς Ἀνπ[ρακίαν - - -]",
 "1504B": "[ἦ ἐντὸς] ἄ[σ]τεός κα ο̣[ἰκέων - - -];",
 "1554A": "ναῦν ἦ ἐξα[ρτύνηι - - -];",
 "1569B": "[ἐ]γδῶμες ὅσα Ι[. .]ΕΑΣ;",
 "1591A": "[ἦ ἀ]νδροπόδια πιπασκόμε(νος);",
 "15A": "Θέλυτος πότερά κα κατὰ χόραν \nἔχον τὰν γυναῖκα ἔχον κὀδοί\nhάπερ νῦν ἒ καὶ ἔϜον ;",
 "160A": "[ὁ δεῖνα ἐπερωτ]ᾶι τίνι κα θε[ῶν θύων - - -] \n[- - - h]ωραῖοι hυε̣το̣[ὶ - - -]\n[- - -] κ̣αρποὶ ἔ[σσονται - - -]\n[- - -]ΝⱵΗ",
 "1673B": "[τύχαι ἀγαθ]ᾶι· πὲ(ρ) Πελ[- - -] \n[- - - ἐμ]πο̣ρίας [. .][- - -]\n[- - -] ἀφθ(ον)είας Ι[- - -]",
 "172A": "[οἱ δεῖνες ἐπικοινῶνται τῶι Διὶ] τῶι Νάωι καὶ τᾶι Διώναι ἦ μὴ \nχρῆυνται Δωρίωι τῶ[ι] ψυχαγωγῶι ;",
 "1768A": "Λ̣ΛΟΥΙ[- - - εἰ]-\nς Κόρκ[υραν - - -] \nσὺν Ε[- - -]",
 "1770B": "[περὶ ἐμ]π̣ορία[ς] \n[εἰς Ἐ]πίδ̣[αμνον] \n[- - -][.]ΤΩΝ[. . .]",
 "1858A": "Ἀπολλ[- - - ἐπερωτῆι - - -]\nΜεγαρ[- - -]",
 "1866B": "τύχαν̣ ἀγ[αθάν· - - -] \nΔ[.]Ο̣ΡΚΕΝ[.]Ε[- - -]- \nουμες",
 "1878A": "[ἐν Ὀλυ]νπία[ι - - -]",
 "1921A": "Ἄθλο̅ν [ἐπερωτε͂ι τίνι κα θεο͂ν ε]-\nὐχόμε[νος - - - περὶ ὀ]-\nπ̣τίλο̅ν [- - -]",
 "193B": "Λάφιλος ἐπικωιν[ῆται τῶι Διὶ]\nεἰ διατρίβοντι ἐν Κο[- - - λώϊον] \nἐσῆται \nὃν τρόπον ἐνθυμ[εῖται] \nἢ ἄλλο τι πράσ(σ)οντ[ι]",
 "1987B": "γεο̣̅ργεῖν [. .][- - -]",
 "19A": "βέλτιον πιπασ- κομένωι γυναῖκα",
 "2": "[ἐ͂ Δε̅ν]οκλε͂ς - - -",
 "2027B": "θεὸς ἀγαθὰν τύχαν· ἦ μὴ 'πέπατο \nΤΟ ἡμίονος Μ[.]ΛΗ Βάτων ἢ ὠνητὸν θε-\nὸς ἀγαθὰ(ν) τύχαν ἄριστα [. .]Ε[. . .]Ε[. . .];",
 "2028A": "περὶ τῶν προβάτων \nἦ 'πίπαμαι",
 "2039A": "θεὸς τύχα ἀ̣γαθά· Δία̣ [Νάϊον καὶ Διώναν ἐπερωτῆι] \nΦιλώνυμος τίνι θεῶ[ν θύων λώϊον καὶ ἄμεινον] \nπράσσοι καὶ κατὰ γῆ[ν ἐργάζηται]",
 "2049B": "[ὁ δεῖνα ἱστορ]εῖ ἦ ἐσεῖται Τιμολα̣-\n[. . . .] ὄνασις [.]Α[. . . .7 . . . τίνι] \nκα θε̣[ῶ]ν θύων̣ καὶ [εὐχόμενος]",
 "2052A": "ὦ πολυτίματον Ζεῦ Νάϊε, ἦ λώϊ-\nόν κα πράσσοιμι τὰν Ἐπιδαμ-\nνίαν γυναῖκα ἀγόμενος αὐτῶι;",
 "2089A": "ἦ νικάσω [- - -]\nἐν Ἀμπρα[κίαι - - -];",
 "20A": "[- - -] τίνι κα θεῶν ε̣[ὐχόμενοι] \n[λώϊον καὶ ἄμεινον] πράσσοιμες;",
 "2110A": "[.]ΑΣΟ[- - -] \nἐπερω[τ]ᾶ[ι Δία Νάϊον] ΣΥ[- - -] \nπερὶ πανπα[σ]ίας [τίν]ι θεῶν εὐχο̣[μ]-\nένωι καὶ θύ̣[ο]ντ[ι λ]ώϊον καὶ βέλ-\nτιον ἔσται",
 "2128B": "Ἐ̅ ἀλλε̂ μαντεύ̣[εσθαι]",
 "2133B": "(γ)αϜοργε͂-\nν",
 "2173A": "Σύπελος πὲρ γενε[ᾶς πὲρ] \nπαμάτω̣ν περὶ καρπο̣[ῦ καὶ] \nπερὶ ἐπ[ι]βωλῶν",
 "2197B": "[- - - ἄμεινον κ]αὶ λό̅ϊον πρά-\n[σσοι - - -]νι καὶ αὐτεῖ",
 "2203B": "[- - -]ν̣τες τοὶ ἐν τῶ[ι] Ἀπόλλων[ος - - -]\n[- - -][.]Ω ὁ πάλος",
 "2222A": "αἰ δὲ μηδεὶς τούτων κέκλο-\nβε τουτονί",
 "2238A": "[- - - ἐ]πέπατο [- - -]",
 "2243B": "πότερ(ά) κα τύχο(ι)μι ΑΤΙΕΙΚΙΟ;",
 "2265B": "ἐπερ[ω]τᾶ[ι ὁ δεῖνα Δί]-\nα Νᾶον κα[ὶ τὴν Διώ]-\n[νη]ν κατὰ [- - -]\nΝΟ[.] Ἀπρα[κίαν ἐλ]-\nθό̅ν",
 "2286A": "(παμ)πασίαν ὑπὸ ΚΑ \nΣ̣ΟΜ̣ΙΔ̣Α τὰ̣ν ἐν\n[- - - - - - - -]",
 "228B": "θεὸς τύχα ἀγαθά• \nἈριστόδαμος ἐπ[ικ]οινῆται Διὶ \nΝαΐωι καὶ Διώναι καὶ θεῶν <ἦ> \nἦ λώϊον καὶ ἄμεινον ΣΑΤΕΙ \nπλέοντι [κατὰ θάλασσ]αν καὶ ἐς \nΦάρον \nτοῦ θέρεος",
 "2291A": "ἐπερωτῆ (τ)ὸν Δία καὶ Διώ̣[ναν ὁ δεῖνα ἦ τὰν] \nγᾶν γεωργῶ",
 "2295A": "σώζω[ν] [. . . .7 . . .] Ἀ̣πρα-\n[κίαν - - -]Ρ̣ΧΕΜΕ \n[- - -]",
 "22A": "περὶ Κορυ(δ)ά̣λλας καὶ τῶν Κορυδάλλα-\nς παίδων πότερά κα τυγχάνοιμι \nπεπαμένος [κ]αθ̣άπερ πατήρ;",
 "2368A": "πότερά κα Ϝοεκέτας \nτύχοιμι τὰν ἐπιμ̣(έλειαν);",
 "2372A": "[- - - Ζεῦ] Νάϊε ΤΑΔΙΑ \n[- - -]αν ἦ ἐσεῖται;",
 "2389A": "[ἦ κα τυγχ]ά̣νοιμες Κλεαρε[- - -];",
 "2401": "[τίνι θεῶν εὐχο]μένα κα τ<χ>ύχοι Π[. . .]Ε̣Μ̣ΑΤ[.][- - -]\n[- - -][.]ΟΙ : hυγί(ει)α [κ]αὶ ΑΠΟΣΣ[. .]ΑΣΙΣΤ[- - -] \n[- - -]Α τε καὶ χά[ρ]ις καὶ κέρδ(εα) ḥό̣σα ΤΕΕ : ΚΑ[- - -] \n[- - -] ἄνελ(ε) τὸν κλᾶρον αἰ καρ[π]ό̅σατο ΤΕ[- - -]",
 "2407A": "θ̣εὸς τύχαν ἀγαθάν· ἐ͂ συ=ν=χο̅ρέ̅σας \nἄ̣νευ διαλυτέ̅ας ΗΑ[.]ΠΕ[.]Ο[. .]Ν;",
 "2408B": "ἐ͂ α̣ὐτεῖ μένο̅;",
 "2409A": "Ἄρχιππος ἐπερωτῆι τὸν Δία καὶ τὰν Διώναν \nπερὶ τῶ hιαρῶ ἀργυρίω τῶ τᾶς Ἀθαναίας πότερα \nκατθύσνηι πᾶν αἰ μέλλει βέντιον ἦμεν \nἢ οὔ",
 "2416A": "[- - - ἐ]ν Σε̣λ(λ)ασί[αι - - -]",
 "2418B": "θεὸ[ς] τύχαν ἀγαθάν· ἐπικοινῆται Τροχίλος τὸν [- - - λώϊόν κα] \nπράσ(σ)οιμι πεπαμένος τὰν οἰκίαν [. . . . 8 . . . .]ΤΑ[- - - ἰ]-\nςς τὸν ἔπειτα χρόνον",
 "2425A": "θεὸς τύχα· \nἐπερωτῶντ[ι] Δωδω-\nναῖοι τὸν θεὸν ἦ ἀ-\nσφαλέω[ς] ἐστὶ μένειν \n[αὐτ]εῖ καὶ αὐτοῖς \n[κ]αὶ χρήμασι",
 "2445": "(θ)εὸς τύ[χ]α· ἦ αὐτῶι \nμοι ἐργαζομέν̣ωι \nλώϊον καὶ ἄμεινο̣-\n<ο>ν ἐπεὶ χὀ̣ ἐνιαυτὸς \nδιεξένθει;",
 "2448A": "Κλεπὸ̅ι ἐ͂ ἄλλα̣[ν ἀγομένο̅ι λό̅ϊον ἐσσε͂ται];",
 "2481A": "θεὸς τύχα· παρηγγύασε Ἀνδρόνι[κ]ος Ἀ-\nλκιδά̣μονι Δεινοδίκαι τοῦ χώρου τ̣ὸ ἐκ-\nφόριον ἀποδιδόμεν ἐπ' Ἀριστέαν̣ ἀρυτ-\nᾶν;",
 "2488A": "αἰ μὲ̅ [ἄγο̅]μες [- - -]\nἒ̅ ἀφέ<σ>ν̣τ̣ες [- - -]\nτὰν τύχα[ν - - -]",
 "2508A": "ἐπερωτῆ Θέων τὸν Δία τὸν Νά̣ϊον καὶ \nΔιώναν πότερα οἰκῆσαι Θαλείαι τᾶι θυγατρὶ ποτ' ἄνδρα \nλώϊον καὶ ἄμεινον ἐσσεῖται καὶ γενεὰ \nαὐτᾶι ἐσσεῖται",
 "2514": "θεός· Σάμιος πὲρ <παν> \nπανπασίου",
 "2521A": "αἰ νικασέω τὰν δίκ[αν]",
 "2549A": "[ἐ͂] τύχοι κα Μάτρ[ο̅ν ἐπὶ] τὸ φῦμ[α] χε͂ρα \nΠαιανίας ἐ̣πιβαλ[λούσα]ς̣ τὸ ἐν τᾶι λέρπα(ι) \nκαὶ hα[πτο]μένα[ς];",
 "2593A": "παμπασίας̣ \nπότερα ὠνεύμ-\nενοι ἢ ἐῶντες \nλώϊον πράσ(σ)οι(ν);",
 "261B": "περὶ (παμ)πασ̣ίας̣ ὅ τι κα τ-\nυνχάν[οι]μι πράσ(σ)ων",
 "2629B": "[τύ]χα ἀ[γαθὰ θ]εός· ἦ Δα[- - -] \n[. . . 6 . . .] ν[α]ῦν ἐξα[ρτύειν - - - Διὶ] \n[Ν]αΐωι;",
 "2646B": "[- - -][. . . .] [Ν]εμέαν [.][- - -]",
 "2648A": "θεός· ἐρω̣[τ]ῆι Ἀναξίω̣ν Α̣ἰνέα τὰν Δ̣[ιώναν]\nἦ λώϊον κ̣α̣ὶ ἄμεινο̣ν ἐσσεῖτα[ι αὐτῶι ἐκ] \nτᾶς λαχα[ν]ε̣ία̣ς [ἃ]ν̣ ἐ[ργά]ζηται [- - -]\nΑΙΛΙΕ[. . . .]Ν[- - -]",
 "264A": "[- - - πε]ρὶ γενεᾶς \n[- - -][.] ἐσσ̣ε͂ται",
 "2651A": "[- - - λώϊο]ν καὶ ἄμε̅νόν οἱ [- - -]\n[- - - ἐ]σ̣εῖται [- - -]",
 "2720A": "[- - -]ΣΤ[- - -] \n[- - -] ἄ(γ)ο̅μες [- - -]\n[- - -]Ν̣ΤΕΧΗΣΟΣ̣[- - -] \n[- - -]Ο̣Υ",
 "2747A": "ἒ̅ τί ποέο̅μες; \nπ[ο]έο̅μ(ες)",
 "275A": "πότερά κα τύχ-\nοιμι γαϜορ̣γέο̅ν;",
 "2762A": "ἐπερωτῆ Ματερίνα \nΔία Νᾶον καὶ Διώναν \nἦ ἀσφάλ̣ε̣ια εἰς δίμη-\nνον (ν)αυτι(λλο)μένου \n[. .] αὐτὸς κ̣αὶ [εἰς] Φάρ(ον) \nεἰς ἐ̣π[ίλοι]πον [γα]ο̣ργέ̣ο̅ν",
 "2815A": "Ξεν[. . .] [π]ε̣ρὶ \nπανπασίας",
 "2876B": "[περὶ] πα(μ)πασί[ας]",
 "2948A": "ἦ οὐ πιστὸς ἐσσεῖται οὐδὲ [- - -] \nοὐ πιστὸς ἐσσεῖται οὐ[δὲ - - -];",
 "2952B": "[θεὸς ἀγαθὰ τ]ύχα· \n[τὸν Δία ἐπερωτ]ῶντι Δωδω-\n[ναῖοι περὶ τ]οῦ ἐπικορίου \n[- - -][.]ΟΝ",
 "295B": "ἐπερω<ν>τῶντι Δωδων̣[αῖοι - - -]-\nΝΟΝ Δία Νάϊον καὶ Δ[ι]ώνα[ν - - -] \nΔαματρίων ε(ὐ)χό[μ]ε̣ν̣οι [- - -]",
 "2977B": "θεὸς τύχα : ΦΑΤΙΟΝΙΑΙΤ̣ΟΡ Γοργίαν \nὀφέ̅λε̅ν : ΗΗΗΗ;",
 "2980": "ἦ τέθνακε Ἀριστώνυμο̣ς [καὶ ὡς τεθ]-\nνακ̣ότ[ι] τοὶ παῖδες καὶ ἁ γυνὰ τ[ελεῖν] \nτὰ νόμιμα ὡς τεθ̣νακότι;",
 "2986A": "ἐ͂ οὐ νικάσ̣[ω] \nἀκ̣ο̣νι̣τὶ (ἐ)ν [Ὀλ[-\nυμπίαι;",
 "3": "[περὶ] ἐμπορίας ἰ̣ς Ἐπίδαμνον.",
 "3002B": "ἦ γαοργέουμ̣[εν];",
 "302B": "[πότ]ερα ναυκλαρεῖν ἄμεινον ναῦν \n[ὠνεο]μένους;",
 "3030A": "θεὸς τύχα· ἐπικοινεῖται Θεοκλείδας τῶι Διὶ τῶι Ναΐωι καὶ τᾶι Δι(ώ)να \nΠΡΑΣΣΑΜΟΙ ἦ εἰς Φάρον πλεύσας εὐτυχοῖμί κα καὶ χρημάτων \nὄνασις ἐσσεῖται",
 "3032": "αἰ Μεννίσκο̣(ς) ΗΝΝΕΙ[. .] ἐν Παδή̣αν ἕρπων\nκαὶ ΔΙΑ[. .]ΙΑΛ[. . .]Η[. .] πὸτ ξενοδόκαν κα λώϊ-\nον [. .]ΑΣ[. .]ΕΙΝ τόνδε̣ [. . .] μοι τὸγ κλᾶρομ",
 "3064A": "αὐτεῖ ἐ͂ μέν̣[οντα - - - ἒ̅ ἰ]-\nό̣ντα ἄλλοσ[ε - - -]\nαἴτε ΑΝ[.][- - -];",
 "309B": "Ε[. . .5 . .]ΛΑΙΒ̣[. . .]ΝΙ \nἐϜο͂ν",
 "3103A": "[θεὸς ἀγαθὰν] τύχαν· ἅμιλ[λαν - - -]\n[- - -]Ω νικῶμες οὕτα[ν - - -]\n[- - -][.]χίσσειν",
 "3109A": "[ἐπ]ερωτῆι Πεσ̣εύας Δία Νᾶον καὶ Διώ̣[ναν] \n[ἦ] λώϊον καὶ ἄμεινον ἐσσεῖται αὐτῶι [καὶ] \nὀ̣χυρὸν εἰς τὰν ἐποικ[ία]ν πορευομέν[ωι] \nκαὶ <α̣> ἀμβαί̣νοντ(ι) τά(χ)ιστα",
 "3113A": "[θεὸς τύχα]ν ἀγαθάν· Ζεῦ̣ Δ[ω]-\n[δωναῖε καὶ Δι]ώνη<ι>· Καλλιρόα ἐπερω-\n[τᾶι τὸν θεὸ]ν καὶ τὰν θεὸν περὶ τᾶς \n[- - - κορ]άουν τοῖς θεοῖς τοῖς θε-\n[- - -] αἰ ἔστιν οἱ βέλτιον καὶ \n[ἄμεινον - - - θ]εραπεύονσαν εἲ πὲρ τ-\n[- - -]ν̣ καὶ τᾶς παγκλαρ̣ίας \n[- - -] τ̣οῖ κατ<ε>ιγνείτοιο αἰ ἀρκέ-\n[σει - - -] εἲ σούσεται πὲρ τᾶς κό-\n[ρας - - -] γάμοιο Ἀν̣δρομά-\n χας",
 "3116A": "[π]ὲρ τᾶς καταστάσεο[ς - - -]\nΑΕΟΣ καὶ αὐτίκα καὶ ἐν τ̣[ὸν ἔπειτα χρόνον - - -]\nκαὶ παρμονὰ κ̣αὶ εἰς Κ[ο]ρ[- - -]",
 "3128": "[---]λ̣λωνίδαι \n[---]οι μέλλει βέντι \n[ον] καὶ ὄναιον ἦμεν \nγαοργέ̣οντι τὸν χῶρον \nτοῦτόν μοι τὸν κλα̅ρο\nν ἐξενθε̅ν",
 "312B": "[- - -] γάναν καὶ το͂ν γενεο͂ν",
 "313A": "Θιὸς τύχα ἀγαθὰ : Βο̅κόλο̅ κὴ Πολυμνάστη \nτί κα δράοντοιν hυγία κὴ γενιὰ κ' ἀνδρογένεια \nγινύο[ι]το κ̣ὴ παραμόνιμος ἰοιὸ[ς] κ̣ὴ χρε̅μάτων \nἐπιγγ[ύ]ασις κ̣ὴ τῶν ἰόντων ὄνασις",
 "3146A": "[θεὸς τύχ]α ἀ[γα]θά· [ὁ δεῖνα] \n[τίνα κ]α θεῶν ἢ θεᾶν θερ-\n[απεύων σ]ώιζοιτο ἐν Πάρω[ι] \n[- - - σώι]ζοιτο τὰν ὥραν \n[- - -]τείας καὶ ἔργα \n[- - - ἐργά]ζοιτο;",
 "3185": "[περὶ ἐμπορί]α̣ς ἐς Ἐπίδα[μνον]",
 "320A": "θεὸς τύχα· [ὁ δεῖνα ἐπερωτῆι - - -]",
 "3220A": "ἦ λοῖόν μο̣[ί] κ̣α καὶ ἄμειν[ον] \nΝΕΙΑ αἴ κ[α] τὰ χωρία πωλ(έ)-\nων εἰς Κόρινθον ἀποδαμῶ \nἐν τοῖ ἕρποντι ἐνιαυτοῖ πρὸ \nἈκτίων κα[ὶ] ἦ ἀσφάλεια \nΩΝ ἐσσε[ῖ]ται ἀποδαμοῦν-\n[τ]ι αὐτο(ῖ);",
 "3261B": "[θ]εόν· [- - -] \nπέπαμ[αι - - -] \nΠΕ[. .]Ο[.][- - -]",
 "3274A": "ΑΜΟΙΓΑΣ ἇι μα[στε]-\nύουμεν",
 "3280A": "ἐ͂ οὐδὲν Φάρ̣ος;",
 "3294A": "[- - -][. . . .] ἄμεινον \n[- - - ἐκ] Νεμέας ὠνού-\n[μενον - - - ἢ τ]ὰν ἔχω ἔχειν \n[- - - λ]ό̅ϊ(ο)ν καὶ ἄμειν-\n[ον καὶ αὐτίκα καὶ] εἰς τὸν ἔπειτα (χρόνον)",
 "3297A": "[ἦ γεν]εᾶς ἐσε͂ταί μοι κατ̣όνασες;",
 "3315A": "θεὸς τύχα· ἦ αὐτε͂ μένων \nΑΧΕ νῦν ὧδε Ϝο̣ικέω;",
 "3316A": "τύχα ἀγα[θά]· \n[ὁ]μό̣λογος \nπανπε̅σί[α]",
 "3325A": "θεὸς [τ]ύχαν· [αἰ α]ὐλη<υ>τοῦ χορὸν \nλό̅ϊον καὶ ἄμε̅νόν κα πράσσ[οι] \nΜενέστας",
 "3330A": "ἦ πάσωμαι [- - -];",
 "3336A": "πανπασίας Α[- - -] \nΦιλοπάμονι [- - -]",
 "3356B": "Παρμενίσκος κέληται ἐλεύθερον ἀπίμεν [- - -]\nΑΓΛΕ[. .]ΗΝΕ[.]ΡΑ[. . .5 . .]ΩΤ̣Ι δόμεν [.]Ε[. . .5 . .][- - -]\nΑΤ̣Α[. . .5 . .]Ν[. .]Α[. . . 6 . . .] ἀργύριον ἀποδόμεν [- - -]",
 "3363B": "[τίνι κα] θεῶν εὀχομένοις \n[γένοιτο εὐ]τυχία καὶ ὑγίεια;",
 "3393A": "[- - - θ]εᾶς Ἀρτάμιδος \n[- - -] τυνχάνοιμεν",
 "3405B": "[τύχαν ἀγαθάν]· ἦ τρέσ̣α̣[ν]τες \n[λώϊόν κα πράσ]σοιμες;",
 "3431A": "γᾶν ἐ͂ αὐτεῖ [- - -]\nἒ̅ ἄλλαν π[ρίωμαι];",
 "3472A": "Ἀγαθᾶι τύχα[ι]. \nἘπικοινῆται Παρμενείδ-\nας τῶι Δι[ὶ] τῶι Νάωι καὶ τᾶι \nΔιώναι λῷϊον καὶ ἄμ- [ει]νον οἴκ[ο]ι μένοντι.",
 "3473A": "ἐπερωτῆι Σιλαν[ὸς τὸν Δία τὸν Νάϊον] \nκαὶ τὰν Διώναν πε[ρὶ παρμονᾶς ἦ τὸν οἰ]-\nκ̣έταν τ̣ὸν ἀπείλα̣[φα - - -]\nτὸν ἀπ' Ἀκτίου ἐπριάμ̣[αν - - -] \nΔωδωναίο[ι]ς ὅσαπερ [- - - καὶ] \nἦ ἐσε͂ται πα[ράμονος - - -]",
 "3509A": "[ἦ ἐν] Ὀλυν[πίαι - - -];",
 "3517A": "[ὁ δεῖνα ἐπερωτῆι τ]ὸν Δία τὸν Νά[ϊον - - -] \n[- - -] αὐτῶι Ν[- - -] \n[- - -]ἀγορᾶ<α>ς [ἰς] Φάρον ἕρπο[ντι - - -] \n[- - - καὶ α]ἰτέοντι τὰν δω[ρεὰν - - -]",
 "3549A": "[- - -] ἐν Ἀνπρακία[ι - - -]",
 "3612B": "[ἐ͂ γ]αο(ρ)γέο̅ν [.]Α[. . .][- - -];",
 "3661A": "[θεός]· ἐρωτῆ̣ [ὁ δεῖνα - - -]\n[.] ἦ οὐ τὰ Π[. . .5 . .][- - -] \n[.]ΤΙΛΛΙΩΝ[. .]Α[. .]ΔΕ[- - - ἄμ]-\nεινον ὅπει νοεῖ [- - - ἰς τὸ]-\n[ν] ἔπι̣τα χ[ρ]ό[νον]",
 "366A": "[εἰς] Ἀπολλωνίαν πλεύσας ἧι ἀλάστων τῆ-\n[ιδ]ε ὄντων πυνθάνοιτο;",
 "3677A": "ἐ͂ μὲ̅ πεπαμέ̣νος \nτ' ἔπακρ̣α;",
 "3732A": "[- - -]σ̣ιππος Ϝισ̣[τορεῖ - - -]\n[- - -]Ε[.]ΑΣΑΕΘΕ[- - -]\n[- - -] καὶ τὸν ΝΟ̣[- - -]",
 "3777": "[οἱ δεῖνες ἐπ]ερωτέο̣ντι [Δία] τὸν [Νάϊον - - -] \n[- - -]ΤΟΤ[- - -]",
 "3828A": "[τίνι κα θε]ο͂ν ἒ̅ hε̅ρ[ό̅ο̅ν εὐχόμενος] \n[γενεὰ]μ πάρμον[ον ἔχοι];",
 "3871": "θεός - τύχα· Χοιρίνα ἐρωτ[ῆι - - -]-\nΕ ἐπὶ τὸν ὄλβον τᾶς θεοῦ τὸ Τ[- - -] \nτᾶς ματρὸς πότερα ὡς ὁσία[ν - - -] \n[δ]όμεν ἱαρῶ ΤΟ[.]Σ̣Ο̣Ν[. .]Ν[.][- - -]",
 "3946B": "θεὸς [τ]ύχα• [ἐπερωτῆι ὁ δεῖνα τὸν Δία] \nτὸν Νάϊον καὶ [τὰν Διώναν] \nἦ πλέοντι ἐν [- - -]\nτὰ πὰρ Γογγύλ̣[ου - - -] \nκαὶ σωσεῖτα[ι - - -]",
 "3965A": "ἦ τις Ἐπιδ̣[άμνιος - - -] \nἢ οἴκαδι ἀ[- - -];",
 "3979B": "θεός· Ἀ(μ)πρακ(ί)αν Ι[- - -]",
 "4": "θεὸς τύχα : γνέφας : Ἀνάγυλλα \nΣίβυλλα : ἐπερωτο̂ντι τὸν θεὸν \nαἰ τὰ δίκαια μαστεύοντι ταύ-\nταν νικῆν περὶ θἠματίο̅",
 "4054B": "θεοὶ τύχη \nπερὶ π[α]μπ-\nασίας",
 "4072A": "ἦ ἐν Σάμαι πορ̣[ευόμενος];",
 "4079A": "[- - -]Α ἐ͂ λό̅ϊον \n[καὶ ἄμε̅νο]ν Ὀλυπίανδε \n[ἕρποντι] καὶ ἐπέ̅γον-\n[τι αὐτῶι] ἐσσε͂[ται];",
 "4080B": "Ὀλ(υ)πίανδε [περ]-\nιμένε̅ν",
 "4092A": "ἐ͂ πεπαμέ(ν)ος ἄμ[εινον - - -];",
 "4115A": "Ἀλλεῖ̣ Ε [---] \nθεμένα \n[ἔσσ]εταί μοι \n[γ]εν̣ε̣ὰ̣",
 "411A": "αἴ τις \nσύνhοδος",
 "4138B": "Γάθυλλος ἦ Ο̣[- - -] \n[.] τραπ(ο)μ[ένωι λώϊον καὶ ἄμεινον] \nἐ̣σε[ῖ]ται α̣[ὐτῶι];",
 "413B": "ἐπιζό̅Ϝοι̣",
 "4141A": "[πε]ρὶ τοῦ ἐπιπασίου ἐπ̣[ερωτῆι ὁ δεῖνα - - -]\n[κ]αὶ ἁ γυνὰ λώϊον κ[αὶ ἄμεινον - - -]",
 "4142A": "[- - - τ]ὰ̣ν Φαινομένα̣[ν - - -] \n[- - - λώϊόν κα] πράσ(σ)ο(ι)μες ἢ Ε[.][- - -]",
 "414A": "αὐτοῦ καὶ γε-\nνεᾶς hο̅ς οὔπο̅ \nζο͂ι καὶ Ζεῦ ζο͂ι",
 "4150A": "[- - - πό]τερά κα [- - -]\n[- - -] τύχοι [.][- - -]\n[- - -] πεδεν(εν)κὸ̅[ν - - -]\n[- - -]Ν ἐϜο͂ν Α[- - -]",
 "4151B": "[- - -]τὰν ἐπασ̣ι[ν - - -] \n[- - -][. . . .]ΙΟ[. . .][- - -]\n[- - - - - - - - - - - - - - - - - ] \n[- - -] καὶ Τ[. .]Η[. . .][- - -]",
 "415A": "[- - - τ]ίνι κα̣ θε̣[ο͂ν θύο̅ν - - -]",
 "4161B": "θεὸς τύχαν ἀγαθάν· Δόσι̣ πὲρ γενεᾶς \nγυναῖκα ἀγομένο̅[ι] γίνεται ἔρσεν [γ]-\nένος πάρμο[νον] [. .]Ε[. . .]ΕΝ[. . .5 . .]Ε[. . .] \nκαὶ ἀ[γο]μέν[ο̅ι - - -]",
 "419A": "το͂ν πόνο̅ν̣ [.]ΕΡΑ[. . .] \nσο̅θε͂μες;",
 "428B": "θεὸς τύχαν ἀγ[αθάν]• \nπερὶ παμπασίας",
 "430": "ἦ ἐνπορευομένωι καὶ \nκατὰ γᾶν καὶ κατὰ θάλασ(σ)-\nαν καὶ λώϊον καὶ ἄμεινο[ν] \nκαὶ χ(ρ)ημάτων ἐπίπασι[ς];",
 "442A": "ἐ͂ μέν̣ο̅ν [- - - λό̅ϊον καὶ ἄμε̅νον] \nἐσε͂ται;",
 "463A": "ἦ ἰς Φάρον Ϝοικέων;",
 "474A": "ΕΠΙΤΑ[- - - ἐπερωτῆι Δία Νάϊον καὶ Διώναν] \nαἰ τᾶι [- - -]",
 "481": "[θεὸς τύχα ἀ]γα[θά•] Δικαῖος τ̣ὸ̣ν̣ θ̣[εὸν ἐπερωτῆι] περὶ τᾶ(ς) : σο̣̅[τε̅ρίας - - -] \n[- - - π]ότε[ρ]α ἁ νόσος ἔλαβέ μιν [. . .5 . .]Α καὶ τ̣[ί] ἐστι τοῦτο [.][- - -]\n[- - -]ΝΟΝ ἒ̅ ἑ̅ρό̅ο̅ν ἱλαζόμενός [τινα] καὶ ἀπότροπον ποέ̅σα[ς - - -]",
 "501B": "[- - -] αὐτεῖ μένε[ιν]",
 "531A": "[- - -] ἐσσε͂ται [- - -]",
 "541B": "Ἀρτάμι[τι] \nἐ͂ τύχοιμ[ί κα] \nhισσαμένα̣;",
 "542A": "[- - - παῖδες] ἔρσενες καὶ \n[- - - θύω]ν τίνι κα θεῶι ἢ ἥρ-\n[ωι - - - κ]αὶ σαμᾶναι τὸν θεόν",
 "551A": "[. . . .]δωι μένοντι λώϊον \n[καὶ ἄ]με(ι)νον [ἐ]σσεῖτα(ι) στά-\n[δι]ον;",
 "608A": "[π]ερὶ χρε̅μάτων \n[τίνι] θεο͂ν ἒ̅ θεᾶν εὐχό-\n[μεν]ο[ς] πάσομαι αὐτό(ς);",
 "618A": "[- - - εἰς Ἀ]μ̣πρακία[ν - - -]",
 "634A": "ἐ͂ αὐτεῖ [μένο̅];",
 "6A": "ἐ͂ πέπατα(ι) καὶ πεπαμέ-\nνος λό̅ϊόν κα πράσ(σ)οι",
 "73": "Θεὸς τύχα ἀγαθά \nῬαζία ἐπέθετο \nαἰ διαλλαγὰ μέλλει \nγενέσθαι ἀπο Τει̣-\nτύκ̣ο̅ ζό̅οντος καὶ ἀποχώρησ<ις>.",
 "730B": "ἐπε[ρο̅τε͂ι ὁ δεῖνα τί]-\nνι κα [θεο͂ν εὐχομέν]-\nο̅ι καὶ θ[ύοντι περὶ ὀπ]-\nτίλλο̣̅ν̣ [ὑγίεια γένοιτο καὶ] \nεὐτυ[χοῖ]",
 "731B": "[- - - ἔλ]θωμες̣ [- - -]",
 "76": "ἐπερωτῆ Ἀκλαπιάδας τὸν Δία τὸν Νᾶον καὶ τ[ὰν Δι]-\nώναν ἦ λώϊον καὶ ἄμεινον ἀπολυομένωι παῖδα̣ [. . . .]\nκαὶ ἄλλο τι πράσ(σ)οντι",
 "792B": "[θεὸς τύ]χα ἀγα[θ]ά· Κλ[- - -] \n[- - - - - - - - -]\n[- - - - - - - - -]\n[- - -]ες ἕρπ[- - -] \n[- - -] καὶ Α[- - -] \n[- - - ἐμ]ὶν αὐτῶι [- - -]",
 "814A": "ἐ̣ν̣ Ἀνπρα[κίαν - - -]",
 "825A": "ἐ͂ κα φ̣έρ-\nε̅ ἵππι-\nον;",
 "84": "[θ]εὸς τύχα ἀγαθά• \n[ο]ὐκ αἴτιος Δαύλιος \n[τ]οῦ θανάτο̅ τοῦ [Ἑ]ρ-\nμαίο̅",
 "891B": "[- - -] Ἀνπρα̣[κίαν - - -]",
 "90": "[ὁ δεῖνα ἐπερωτῆι] τὸν Δία περὶ τᾶς θυσ̣-\n[ίας - - -]Σ τίνι κα τρόπω hέ̅ρο̅ι \n[θύων - - -]ΝΟΤΑ δύναμαι hευρεῖ(ν)",
 "929A": "ἐ͂ κοινᾶν δε͂;",
 "963": "ἐ͂ ἐϜο͂ντες;",
 "974A": "[Ζ]εῦ Νᾶε [καὶ Διώνα - - -] \nΜ[.]ΠΕ[. .][- - -] \nπότερά κα [- - -]\nὑέος ὃν̣ Ε̣[- - -] \nἈ̣ρχία̣ς",
 "990A": "[- - -] ἐσεῖτ[αι - - -]",
 "998B": "[. . .]έων περὶ <παν̣>-\nπανπασίας τίνι θε-\nῶν ἢ ἡρώων θύων ἢ ε-\nὐχόμενος εὐτυχοῖ;",
 "LOD 1": "[Θεός. Ἐπικοινῶτ]αι Κορκ[υραῖοι τῶι Διὶ τῶι Ναίωι] \n[καὶ τᾶι Διώναι τί]νι κα θεῶν [ἢ ἡρώων θύοντες καὶ] \n[εὐχόμενοι τὰν πόλιν κάλ]λιστα καὶ ἀ[σφαλέστατα] \n[-------------] Ϝοικέοιε[ν].",
 "LOD 101B": "Οὐκ ἔστι ἀσφάλεια, ἀλλὰ πωλέω(ν)τι πάντα ;",
 "LOD 105Ba": "[………………]ΙΟΙ . ΚΑΙΑΜΑΤΙ λέγομες \n[…………..λέγο]μες : γνῶμεν τὸ ἀλαθές",
 "LOD 106A": "[---] . ΣΑΤ̣ [--]\n[---] ΔΩΗΠ [---]\n[---] ΕΙΤΩΙΚΑ̣ [----]\n[---] ΙΕ̣Υ̣ΜΑΡ . [---] \n[--π]ρὸς ἡμᾶ[ς ---] \n[περὶ ἐργα]σίης καὶ εἰ π[ορευώμε]-\nθ̣α ἐς Μεσσήνην̣ [7-8 lettres] \nΠΟ̣Υ ἢ ἐν Ἀμπρα[κίαι μέν]-\nωμεν καὶ εἰ ΠΡ [------] \nΝΕΩΜΕΝΑΝΗ . [----]\n[----] ΗΤΑΝ [------] \n[----] ΚΑ [------]",
 "LOD 112": "Ἦ συμπείθον[τι] \nαὐτῶι ὑπὲρ τ[ο]-\nῦ πράγματος, ὅ[ν]-\nτινά κα τρόπ̣[ον] \n[δ]ύ̣να̣ται (?) ἄλ-\nκιμον, βέλτιο[ν] \nκαὶ ἄμεινον \nΠυστακίωνι <ἐ>-\nσσεῖται ;",
 "LOD 115": "Θεός. Τύχα ἀγαθά. Ἐπ-\nιστορεῖ Γλαυκίας τὸν Δία τὸ-\nν Ναῖον καὶ τὰν Διώναν πε-\nρὶ πανπασίας ἦ ἐστὶ…. \nΤΕ καὶ περὶ ΑΝΟΣΚΑΙΑ...",
 "LOD 117A": "Ἦ αὐτὸς πεπαμένος τὰν ἐ(μ) πόλι οἰκίαν καὶ τὸ χωρί-\nον βέλτιόμ μοι κ' εἴη καὶ πολυωφελέ(σ)τε(ρ)ον ;",
 "LOD 118B": "καὶ αὐτὶ̣ κ̣άκιστον, ἔπειτα χρ̣[όν]-\nον ἦ αὐτὰν μόναν πεπαμένος \nκαὶ ἐποικοδομῆυν;",
 "LOD 121A": "Ἐπερωτεῖ Ἄγις (ou Ἇγις) Δία Νάον [καὶ Διώναν] \nὑπὲρ τῶν στρωμάτων κ[αὶ τῶν προσ]-\nκεφαλαίων τὰ ἀπωλόλ̣[εκε…..] \nἦ τῶν ἔξωθέν τις ἀνέκ[λεψε].",
 "LOD 123": "[Θ]ε̣ός. Τύχα ἀγαθά. Οὐκ ἀνδροποδίξατο Ἀρχωνίδας \nτὰν Ἀριστοκλέος ἄοζον οὐδὲ Ἀρχέβιος ὁ Ἀρχωνίδα υ-\nἱὸς οὐδὲ Σώσανδρος ὁ Ἀρχωνίδα δοῦλος τόκα ἑὼν \nἢ τᾶς γυναικός ;",
 "LOD 126": "Θεός. Τύχα. \nΛυκόφρων Α̣ΑΤΕΚΑΝΕ (vacat) \nΟ̣Α̣Μ̣Υ̣Λ̣ΑΝΤΟΤΑΝΑΣ̣ΟΡ̣Ι̣Γ̣ΓΑΙΟΙ \nἐπαιτίωντι καὶ ὑπ̣αὶ̣ πλαγᾶς \nτᾶς Λυκόφρονος τέθνακε.",
 "LOD 130A": "Ἐξάκων ἐρωτᾶι τὸν Δία καὶ τὰν Διώναν \nεἰ λῶιον αὐτῶι οἰκο͂ντι ἐμ Φάρωι.",
 "LOD 14": "Ἐπερωτῶντι Δωδωναῖοι τὸν \nΔία καὶ τὰν Διώναν ἦ δι' ἀνθρώ-\nπου τινὸς ἀκαθαρτίαν ὁ θεὸς \nτὸ<ν> χειμῶνα παρέχει.",
 "LOD 140": "Πὲρ ΜΥΔΡΑΣΠΙΤΑ.. \n-σάνδρο̅ γενεᾶς · \nἐσσε͂ται ;",
 "LOD 2": "[Θ]εός. Ἐπικοινῶνται τοὶ Κορκυ-\nραῖοι καὶ τοὶ Ὠρίκιοι τῶι Διὶ τῶι Ναί-\nωι καὶ τᾶι Διώναι τίνι κα θεῶν ἢ ἠ-\nρώων θύοντες καὶ εὐχόμενοι τὰ-\nν̣ πόλιν κ̣άλλιστα οἰκεῦεγ καὶ ἀσφα-\nλέστατα καὶ εὐκαρπία σφιν καὶ πο-\nλυκαρπία τελέθοι καὶ κατόνασις παν-\nτὸς τὠγαθοῦ καρποῦ.",
 "LOD 3": "Θεόν. Τ[ύ]χαν ἀ̣γαθά̣[ν]. \nἘπ[ι]κοινῶνται τοὶ Κ[ο]ρκυρα[ῖοι τῶι Δὶ τῶι] \nΝάωι καὶ τᾶι Δ[ι]ώναι τίνι κα [θ]εῶν [ἢ] \nἡρώων θύον[τ]ες καὶ εὐχ[ό]μ̣ενο<ι> \nὁμονοοῖεν ἐ[π]ὶ τὠγαθόν.",
 "LOD 35A": "ἔ̅Ϝο̅ν τυνχάνο̅ ;",
 "LOD 37": "Θεός. Τύχα ἔ̅Ϝο̅ν ;",
 "LOD 4": "Θεός. [ Ἐπι]κοινῶνται [το]ὶ Κορ[κυραῖοι τῶι Διὶ Ναίωι καὶ τᾶι \nΔιώναι τίνι κα θεῶν ἢ ἡρώων θύοντες κ. τ. λ.]",
 "LOD 41": "Ηέρμο̅ν τίνα \nκα θεο͂ν ποτθέ-\nμενος γενεά Ϝ-\nοι γένοιτο ἐκ Κ-\nρε̅ταίας ὀνά-\nσιμος ποτ τᾶι ἐ\nάσσαι ;",
 "LOD 46Bb": "Ἦ εἰς Ἐλίναν ΠΕΡΙΕΛΟ̣[--------] \nἢ εἰς Ἀνακτόριον [----------]\nἢ πωλοῦντες τὸν [-------]",
 "LOD 50Aa": "Ἐπ<ι>στορεῖται Δεινοκλῆς Ἀπολλωνιάτας τὸν Δία καὶ \nτὰν Διώναν περὶ γενεᾶς τ[ί]ν[ι] κα θεῶν θύων καὶ εὐχόμενος \nφυ{Η}τέβοι καὶ γένοιτό κ' ἄρα γ[ενεά].",
 "LOD 51": "Περὶ τᾶς γυν-\nαικὸ(ς) [κ]υούσα(ς) ΤΟΙ (?)",
 "LOD 56": "Ἦ ἀφέρπῃ Ϝοίκαδε πὸτ \nτὸν ἀδελφεόν ;",
 "LOD 62": "Ἦ ἀπιοῦσα ἄλλ[ο] τί μοι ἀγαθὸν \nἐσσεῖται ; \nΔΙΟΙ...Τ.ΤΚ..",
 "LOD 65A": "[Εὐκλ]ῆ̣ς(e.g.) Ἀμβρακιά-\n[τας] Διὶ Νάωι καὶ Δη-\n[ώναι] περὶ ὑγιείας αὑτ[ο]ῦ \n[καὶ] τῶν ὑπαρχόντων \nκαὶ εἰς τὸν ἔπειτα \n[χρ]όνον τίνας θεῶν \n[ἱ]λασκόμενος λῶιον \nκαὶ ἄμεινον πρά-\n[ξει] ;",
 "LOD 66A": "Α̣ΣΣΧ̣. \n[τί]νι κα θεο͂[ν] \n[ἢ ἡρ]ό̅ο̅ν εὐχ[ό]-\nμενος ὑγιὴς εἴη.",
 "LOD 67A": "Τίνι {Ι} κα θεο͂ν εὐξάμενος πράξαι \nhὰ ἐπὶ νόο̅ι ἔχε̅ ;",
 "LOD 68B": "Εἰς Ἐρμι-\nόνα ὁρμά-\nσα-\n{α}ντι",
 "LOD 6B": "Ἦ μετὰ τῶν Παρίων ἐς Πάρον \n[μοι οἰ]κέοντι ἐς τὸν Ἰόνιον \nκόλπον λῶιον καὶ ἄμ̣εινον ;",
 "LOD 73A": "Θεός. Τύχα. Ἰστορεῖ Λεόντιος περὶ τοῦ υἱοῦ\nΛέοντος ἦ ἐσσεῖται ὑγεῖα τοῦ νοσήμα-\nτος τοῦ ἐπὶ μ[ασ]τοῦ (?) ὃ λάζεταί νιν.",
 "LOD 86": "[-------]\n[-------]\n[-------]\n[-------]\nκαὶ ἐ͂ ἄμενό̅ν \nμοι μετὰ Διο-\n[τί]μο̅ ἐργαζομέ-\nνωι Μεγαροῖ.",
 "LOD 89B": "Θεός. Τύχαν ἀγαθάν. [Διὶ Ν]αίωι ἐ[πε]ρωτῆι \nΧΙΔΟΣ πότερον [ἐ]σσεῖ[ταί] τι ἀγαθ̣ὸν τᾶς γυν-\n{ν}αικὸς ταύτας πάρα ΜΟ . . .ΜΟΝΕΝΤΕΧΕΙΚΑΙΚΡΚ\nΝΩΝΟΣΝΗΕΝΙΔΑΙ . ΝΕΡΟΝ . . . ταῦτα",
 "LOD 9": "Ἐπερωτῶντι τὸ κοινὸν τῶν [..]\n-ων Δία Νάον καὶ Διώναν ἦ α[ὐ]-\nτὶ αὐτοῖς συμπολειτεύουσι \nμετὰ Μολοσσῶν ἀσφαλῆ ἦι.",
 "LOD 92B": "Αὐτεῖ οἰκεῖ-\nν καὶ ἐξέχεσ-\nθαι.",
 "LOD 93": "Θεός. Τύχαι ἀγαθᾶ[ι. Ἐπι]κο(ι)νῆτα[ι] Ἱππόστρατος τῶι Δὶ τῶι Νάωι καὶ \nτᾶι Διώναι ἦ μὴ ν[α]<υ>κλαρη[ῦ]ν̣ λῶιογ καὶ ἂμμεινομ πράσσοιμι.",
 "LOD 94": "Ὦ Ζεῦ καὶ Θέμι καὶ Διώνα Ναῖοι : Ἀρχεφῶν \nτὰν νᾶ : ἃν ἐναυπαγήσατο κελο-\nμένο̅ το͂ Ἀπόλλωνος ἔχω κατὰ χώ-\nραν καὶ σωτηρία μοι ἐσσε͂ται καὶ ἐμὶν \nκαὶ τᾶι ναῒ αἴ κα (rasura) καὶ τὰ χρέα ἀποδ(ώ)σω ;",
 "LOD 99A": "Ἐμπορουόμενοι (ou -μένο̅ι)\nἐ̅ς Ἐπίδαμνον ;"
};
// Matriz de valor diagnóstico: 2 = lo excluye; 1 = en parte; 0 = rasgo compartido; -1 = no se trata.
export const DIAG_COLS_DOR = [
 "Jónico-ático",
 "Lesbio",
 "Tesalio",
 "Beocio",
 "Otros"
];
export const DIAGNOSTICO_DOR = [
 {
  "sec": "§4.1.1",
  "rasgo": "ᾱ heredada conservada",
  "vals": [
   1,
   0,
   0,
   0,
   -1
  ],
  "otros": "",
  "cat": "Fonología"
 },
 {
  "sec": "§4.1.2.1",
  "rasgo": "αε > η",
  "vals": [
   2,
   2,
   2,
   0,
   -1
  ],
  "otros": "",
  "cat": "Fonología"
 },
 {
  "sec": "§4.1.2.2",
  "rasgo": "ᾱο, ᾱω > ᾱ",
  "vals": [
   2,
   0,
   0,
   2,
   -1
  ],
  "otros": "",
  "cat": "Fonología"
 },
 {
  "sec": "§4.2.1",
  "rasgo": "/t/ ante /i/",
  "vals": [
   2,
   2,
   0,
   0,
   2
  ],
  "otros": "arcadochipriota",
  "cat": "Fonología"
 },
 {
  "sec": "§4.2.1",
  "rasgo": "-ντι (3.ª pl.)",
  "vals": [
   2,
   2,
   2,
   2,
   -1
  ],
  "otros": "",
  "cat": "Fonología"
 },
 {
  "sec": "§4.2.2",
  "rasgo": "Digamma conservada",
  "vals": [
   -1,
   0,
   0,
   0,
   2
  ],
  "otros": "islas dóricas del Egeo",
  "cat": "Fonología"
 },
 {
  "sec": "§4.2.3",
  "rasgo": "Aspiración conservada",
  "vals": [
   -1,
   -1,
   -1,
   -1,
   2
  ],
  "otros": "eleo, cretense",
  "cat": "Fonología"
 },
 {
  "sec": "§4.2.5",
  "rasgo": "ζ < *j-, *dj",
  "vals": [
   0,
   -1,
   1,
   2,
   2
  ],
  "otros": "eleo, cretense, laconio",
  "cat": "Fonología"
 },
 {
  "sec": "§4.2.6",
  "rasgo": "λθ > νθ",
  "vals": [
   2,
   2,
   2,
   2,
   -1
  ],
  "otros": "",
  "cat": "Fonología"
 },
 {
  "sec": "§4.3.1",
  "rasgo": "ἱαρός, Ἄρταμις",
  "vals": [
   2,
   2,
   0,
   0,
   2
  ],
  "otros": "koiné",
  "cat": "Fonología"
 },
 {
  "sec": "§5.1.1",
  "rasgo": "Apócope de preposiciones",
  "vals": [
   2,
   0,
   1,
   0,
   -1
  ],
  "otros": "",
  "cat": "Morfología"
 },
 {
  "sec": "§5.1.2",
  "rasgo": "πέρ por περί",
  "vals": [
   2,
   2,
   0,
   2,
   -1
  ],
  "otros": "",
  "cat": "Morfología"
 },
 {
  "sec": "§5.1.1",
  "rasgo": "ποτί por πρός",
  "vals": [
   2,
   -1,
   0,
   0,
   -1
  ],
  "otros": "",
  "cat": "Morfología"
 },
 {
  "sec": "§5.1.3",
  "rasgo": "πεδά por μετά",
  "vals": [
   2,
   0,
   -1,
   0,
   2
  ],
  "otros": "dórico noroccidental",
  "cat": "Morfología"
 },
 {
  "sec": "§5.2.1",
  "rasgo": "-μες (1.ª pl.)",
  "vals": [
   2,
   2,
   2,
   2,
   -1
  ],
  "otros": "",
  "cat": "Morfología"
 },
 {
  "sec": "§5.2.2",
  "rasgo": "Infinitivo atemático -μεν",
  "vals": [
   2,
   -1,
   0,
   0,
   -1
  ],
  "otros": "",
  "cat": "Morfología"
 },
 {
  "sec": "§5.2.3",
  "rasgo": "Futuro dórico",
  "vals": [
   2,
   2,
   2,
   2,
   -1
  ],
  "otros": "",
  "cat": "Morfología"
 },
 {
  "sec": "§5.2.4",
  "rasgo": "-ξ- en los verbos en -ζω",
  "vals": [
   2,
   -1,
   0,
   1,
   -1
  ],
  "otros": "",
  "cat": "Morfología"
 },
 {
  "sec": "§5.2.6",
  "rasgo": "Participio ἔασσα",
  "vals": [
   2,
   2,
   2,
   -1,
   2
  ],
  "otros": "epidaurio, trecenio",
  "cat": "Morfología"
 },
 {
  "sec": "§5.2.6",
  "rasgo": "Presente ζώω",
  "vals": [
   1,
   -1,
   -1,
   2,
   2
  ],
  "otros": "cretense",
  "cat": "Morfología"
 },
 {
  "sec": "§5.3.1",
  "rasgo": "Artículo τοί, ταί",
  "vals": [
   2,
   -1,
   1,
   0,
   2
  ],
  "otros": "cretense",
  "cat": "Morfología"
 },
 {
  "sec": "§5.3.3",
  "rasgo": "Tema τουτ-",
  "vals": [
   1,
   -1,
   -1,
   -1,
   -1
  ],
  "otros": "",
  "cat": "Morfología"
 },
 {
  "sec": "§5.4.1",
  "rasgo": "Adverbios en -ει",
  "vals": [
   2,
   -1,
   -1,
   1,
   -1
  ],
  "otros": "",
  "cat": "Morfología"
 },
 {
  "sec": "§5.4.2",
  "rasgo": "Adverbios en -κα",
  "vals": [
   2,
   -1,
   -1,
   0,
   -1
  ],
  "otros": "",
  "cat": "Morfología"
 },
 {
  "sec": "§5.5",
  "rasgo": "Partícula κα",
  "vals": [
   2,
   2,
   1,
   0,
   2
  ],
  "otros": "arcadio",
  "cat": "Morfología"
 },
 {
  "sec": "§5.5",
  "rasgo": "Conjunción αἰ",
  "vals": [
   2,
   0,
   0,
   0,
   2
  ],
  "otros": "arcadio",
  "cat": "Morfología"
 }
];
// §3: cronología (categorías de los gráficos de la tesis), temática (TEMA_MACRO), alfabeto (ALFABETO_GRUPO_v2) y certeza.
export const CHRONO_DETAIL_DOR = [
 {
  "period": "Finales s. VI",
  "n": 7
 },
 {
  "period": "Transición VI–V",
  "n": 3
 },
 {
  "period": "Princ. s. V",
  "n": 5
 },
 {
  "period": "1ª mit. s. V",
  "n": 18
 },
 {
  "period": "Med. s. V",
  "n": 7
 },
 {
  "period": "2ª mit. s. V",
  "n": 14
 },
 {
  "period": "Finales s. V",
  "n": 19
 },
 {
  "period": "s. V (gen.)",
  "n": 5
 },
 {
  "period": "Transición V–IV",
  "n": 11
 },
 {
  "period": "Princ. s. IV",
  "n": 7
 },
 {
  "period": "1ª mit. s. IV",
  "n": 25
 },
 {
  "period": "Med. s. IV",
  "n": 9
 },
 {
  "period": "2ª mit. s. IV",
  "n": 13
 },
 {
  "period": "Finales s. IV",
  "n": 5
 },
 {
  "period": "s. IV (gen.)",
  "n": 19
 },
 {
  "period": "Transición IV–III",
  "n": 4
 },
 {
  "period": "Med. s. III",
  "n": 1
 },
 {
  "period": "2ª mit. s. III",
  "n": 1
 },
 {
  "period": "Sin datar",
  "n": 1
 }
];
export const THEMES_DOR = [
 {
  "name": "Dinero / Patrimonio",
  "value": 37
 },
 {
  "name": "Viaje / Migración",
  "value": 27
 },
 {
  "name": "Desconocido / Sin clasificar",
  "value": 23
 },
 {
  "name": "Amor / Familia / Matrimonio",
  "value": 21
 },
 {
  "name": "Vida / Salud",
  "value": 17
 },
 {
  "name": "Oficio / Comercio",
  "value": 16
 },
 {
  "name": "Religión",
  "value": 13
 },
 {
  "name": "Esclavitud",
  "value": 6
 },
 {
  "name": "Otros",
  "value": 5
 },
 {
  "name": "Amigos / Enemigos",
  "value": 3
 },
 {
  "name": "Honores / Deporte",
  "value": 2
 },
 {
  "name": "Justicia / Derecho",
  "value": 2
 },
 {
  "name": "Verdad / Conocimiento",
  "value": 2
 }
];
export const ALF_DOR = {
 "Reformado / Desconocido": [
  "4",
  "19A",
  "20A",
  "22A",
  "73",
  "228B",
  "237A",
  "261B",
  "264A",
  "295B",
  "312B",
  "419A",
  "428B",
  "430",
  "442A",
  "501B",
  "531A",
  "542A",
  "551A",
  "608A",
  "634A",
  "730B",
  "731B",
  "792B",
  "990A",
  "998B",
  "1022A",
  "1028A",
  "1088A",
  "1121A",
  "1153A",
  "1154A",
  "1193A",
  "1234",
  "1244",
  "1246A",
  "1297A",
  "1366B",
  "1369B",
  "1375B",
  "1377B",
  "1459B",
  "1569B",
  "1591A",
  "1866B",
  "1921A",
  "2027B",
  "2028A",
  "2033B",
  "2049B",
  "2128B",
  "2173A",
  "2197B",
  "2203B",
  "2238A",
  "2286A",
  "2372A",
  "2389A",
  "2408B",
  "2418B",
  "2425A",
  "2445",
  "2484A",
  "2488A",
  "2508A",
  "2514",
  "2521A",
  "2593A",
  "2639B",
  "2648A",
  "2651A",
  "2720A",
  "2747A",
  "2802B",
  "2873A",
  "2876B",
  "2948A",
  "2952B",
  "2980",
  "3064A",
  "3103A",
  "3109A",
  "3183B",
  "3222B",
  "3261B",
  "3297A",
  "3315A",
  "3330A",
  "3336A",
  "3363B",
  "3405B",
  "3431A",
  "3473A",
  "3517A",
  "3661A",
  "3677A",
  "3777",
  "3946B",
  "4079A",
  "4092A",
  "4115A",
  "4138B",
  "4141A",
  "4142A",
  "4161B",
  "LOD 1",
  "LOD 101B",
  "LOD 105Ba",
  "LOD 112",
  "LOD 115",
  "LOD 117A",
  "LOD 118B",
  "LOD 121A",
  "LOD 123",
  "LOD 126",
  "LOD 14",
  "LOD 140",
  "LOD 2",
  "LOD 3",
  "LOD 62",
  "LOD 73A",
  "LOD 89B",
  "LOD 92B",
  "LOD 94"
 ],
 "Corintio": [
  "6A",
  "15A",
  "135A",
  "138A",
  "139A",
  "146A",
  "309B",
  "411A",
  "413B",
  "414A",
  "415A",
  "474A",
  "481",
  "541B",
  "825A",
  "929A",
  "963",
  "1148A",
  "1182A",
  "1346A",
  "1380A",
  "1381B",
  "1393",
  "1426A",
  "1504B",
  "1673B",
  "2133B",
  "2243B",
  "2368A",
  "2401",
  "2448A",
  "2549A",
  "2977B",
  "3325A",
  "3612B",
  "3732A",
  "3828A",
  "3871",
  "4150A",
  "4151B",
  "LOD 35A",
  "LOD 37",
  "LOD 41",
  "LOD 51",
  "LOD 66A",
  "LOD 67A"
 ],
 "Magna Grecia / Sicilia": [
  "90",
  "160A",
  "LOD 56"
 ],
 "Epirota": [
  "2815A"
 ]
};
export const CERTEZA_DOR = {
 "Seguro": 131,
 "Dudoso": 38,
 "Solo nombre o alfabeto": 5
};
export const INSCRIPCIONES_DOR = [
 {
  "ref": "4",
  "date": "s. IV a.C.",
  "tema": "Justicia / Derecho",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "6A",
  "date": "mediados del s. V a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "15A",
  "date": "s. V a.C.",
  "tema": "Amor / Familia / Matrimonio",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "19A",
  "date": "ss. V-IV a.C.",
  "tema": "Desconocido",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "20A",
  "date": "ss. V-IV a.C.",
  "tema": "Religión",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "22A",
  "date": "primera mitad del s. IV a.C.",
  "tema": "Esclavitud",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "73",
  "date": "finales del s. V a.C.",
  "tema": "Esclavitud",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "90",
  "date": "finales del s. IV a.C.",
  "tema": "Religión",
  "alf": "Magna Grecia / Sicilia",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "135A",
  "date": "segunda mitad del s. V a.C.",
  "tema": "Religión",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "138A",
  "date": "primera mitad del s. V a.C.",
  "tema": "Religión",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "139A",
  "date": "primera mitad del s. V a.C.",
  "tema": "Vida / Salud",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "146A",
  "date": "ss. V-IV a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "160A",
  "date": "finales del s. V a.C.",
  "tema": "Oficio / Comercio",
  "alf": "Magna Grecia / Sicilia",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "228B",
  "date": "principios del s. IV a.C.",
  "tema": "Viaje / Migración",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "237A",
  "date": "s. IV a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "261B",
  "date": "mediados del s. IV a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "264A",
  "date": "mediados del s. V a.C.",
  "tema": "Amor / Familia / Matrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "295B",
  "date": "mediados del s. IV a.C.",
  "tema": "Otros",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "309B",
  "date": "mediados del s. V a.C.",
  "tema": "Desconocido",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "312B",
  "date": "finales del s. V a.C.",
  "tema": "Amor / Familia / Matrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Dórico Magna Grecia"
 },
 {
  "ref": "411A",
  "date": "finales del s. VI a.C.",
  "tema": "Amor / Familia / Matrimonio",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "413B",
  "date": "finales del s. VI a.C.",
  "tema": "Vida / Salud",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "414A",
  "date": "finales del s. VI a.C.",
  "tema": "Amor / Familia / Matrimonio",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "415A",
  "date": "finales del s. VI a.C.",
  "tema": "Religión",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "419A",
  "date": "primera mitad del s. V a.C.",
  "tema": "Vida / Salud",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "428B",
  "date": "principios del s. IV a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "430",
  "date": "primera mitad del s. IV a.C.",
  "tema": "Oficio / Comercio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "442A",
  "date": "finales del s. V a.C.",
  "tema": "Viaje / Migración",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "474A",
  "date": "primera mitad del s. V a.C.",
  "tema": "Desconocido",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "481",
  "date": "primera mitad del s. V a.C.",
  "tema": "Vida / Salud",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "501B",
  "date": "ss. V-IV a.C.",
  "tema": "Viaje / Migración",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "531A",
  "date": "primera mitad del s. IV a.C.",
  "tema": "Desconocido",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "541B",
  "date": "primera mitad del s. V a.C.",
  "tema": "Amor / Familia / Matrimonio",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "542A",
  "date": "principios del s. IV a.C.",
  "tema": "Amor / Familia / Matrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "551A",
  "date": "mediados del s. IV a.C.",
  "tema": "Viaje / Migración",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "608A",
  "date": "s. V a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "634A",
  "date": "segunda mitad del s. V a.C.",
  "tema": "Viaje / Migración",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "730B",
  "date": "finales del s. V a.C.",
  "tema": "Vida / Salud",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "731B",
  "date": "s. IV a.C.",
  "tema": "Viaje / Migración",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "792B",
  "date": "s. IV a.C.",
  "tema": "Desconocido",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "825A",
  "date": "s. IV a.C.",
  "tema": "Honores / Deporte",
  "alf": "Corintio",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "929A",
  "date": "primera mitad del s. V a.C.",
  "tema": "Amigos / Enemigos",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "963",
  "date": "principios del s. V a.C.",
  "tema": "Desconocido",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "990A",
  "date": "s. V a.C.",
  "tema": "Desconocido",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "998B",
  "date": "finales del s. IV a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "1022A",
  "date": "principios del s. IV a.C.",
  "tema": "Desconocido",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "1028A",
  "date": "segunda mitad del s. IV a.C.",
  "tema": "Religión",
  "alf": "Reformado / Desconocido",
  "cert": "Solo nombre",
  "sub": "Doris mitior"
 },
 {
  "ref": "1088A",
  "date": "finales del s. V a.C.",
  "tema": "Amigos / Enemigos",
  "alf": "Reformado / Desconocido",
  "cert": "Solo nombre/alfabeto",
  "sub": "Doris mitior"
 },
 {
  "ref": "1121A",
  "date": "principios del s. IV a.C.",
  "tema": "Amor / Familia / Matrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "1148A",
  "date": "mediados del s. V a.C.",
  "tema": "Viaje / Migración",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "1153A",
  "date": "finales del s. V a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "1154A",
  "date": "finales del s. V a.C.",
  "tema": "Viaje / Migración",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "1182A",
  "date": "primera mitad del s. V a.C.",
  "tema": "Oficio / Comercio",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "1193A",
  "date": "principios del s. IV a.C.",
  "tema": "Amor / Familia / Matrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "1234",
  "date": "segunda mitad del s. III a.C.",
  "tema": "Viaje / Migración",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "1244",
  "date": "segunda mitad del s. IV a.C.",
  "tema": "Viaje / Migración",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "1246A",
  "date": "finales del s. V a.C.",
  "tema": "Viaje / Migración",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "1297A",
  "date": "primera mitad del s. IV a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "1346A",
  "date": "principios del s. V a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "1366B",
  "date": "primera mitad del s. V a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "1369B",
  "date": "segunda mitad del s. IV a.C.",
  "tema": "Oficio / Comercio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "1375B",
  "date": "primera mitad del s. IV a.C.",
  "tema": "Vida / Salud",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "1377B",
  "date": "ss. V-IV a.C.",
  "tema": "Vida / Salud",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "1380A",
  "date": "primera mitad del s. V a.C.",
  "tema": "Viaje / Migración",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "1381B",
  "date": "primera mitad del s. V a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "1393",
  "date": "mediados del s. V a.C.",
  "tema": "Vida / Salud",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "1426A",
  "date": "primera mitad del s. V a.C.",
  "tema": "Amor / Familia / Matrimonio",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "1459B",
  "date": "principios del s. V a.C.",
  "tema": "Vida / Salud",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "1504B",
  "date": "primera mitad del s. V a.C.",
  "tema": "Viaje / Migración",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "1569B",
  "date": "ss. V-IV a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "1591A",
  "date": "primera mitad del s. IV a.C.",
  "tema": "Esclavitud",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "1673B",
  "date": "ss. VI-V a.C.",
  "tema": "Oficio / Comercio",
  "alf": "Corintio",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "1866B",
  "date": "finales del s. V a.C.",
  "tema": "Desconocido",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "1921A",
  "date": "segunda mitad del s. V a.C.",
  "tema": "Vida / Salud",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "2027B",
  "date": "s. IV a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "2028A",
  "date": "primera mitad del s. IV a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2033B",
  "date": "s. IV a.C.",
  "tema": "Desconocido",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2049B",
  "date": "mediados del s. IV a.C.",
  "tema": "Religión",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2128B",
  "date": "segunda mitad del s. V a.C.",
  "tema": "Religión",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "2133B",
  "date": "primera mitad del s. V a.C.",
  "tema": "Oficio / Comercio",
  "alf": "Corintio",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "2173A",
  "date": "primera mitad del s. IV a.C.",
  "tema": "Oficio / Comercio",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "2197B",
  "date": "finales del s. V a.C.",
  "tema": "Viaje / Migración",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2203B",
  "date": "mediados del s. IV a.C.",
  "tema": "Religión",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2238A",
  "date": "mediados del s. V a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "2243B",
  "date": "primera mitad del s. V a.C.",
  "tema": "Desconocido",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2286A",
  "date": "finales del s. V a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2368A",
  "date": "ss. VI-V a.C.",
  "tema": "Esclavitud",
  "alf": "Corintio",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "2372A",
  "date": "finales del s. IV a.C.",
  "tema": "Desconocido",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2389A",
  "date": "primera mitad del s. IV a.C.",
  "tema": "Desconocido",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2401",
  "date": "principios del s. V a.C.",
  "tema": "Religión",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2408B",
  "date": "s. V a.C.",
  "tema": "Viaje / Migración",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2418B",
  "date": "segunda mitad del s. IV a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2425A",
  "date": "primera mitad del s. IV a.C.",
  "tema": "Viaje / Migración",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2445",
  "date": "mediados del s. IV a.C.",
  "tema": "Oficio / Comercio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Dórico Magna Grecia"
 },
 {
  "ref": "2448A",
  "date": "primera mitad del s. V a.C.",
  "tema": "Amor / Familia / Matrimonio",
  "alf": "Corintio",
  "cert": "Solo nombre",
  "sub": "Doris mitior"
 },
 {
  "ref": "2484A",
  "date": "mediados del s. IV a.C.",
  "tema": "Desconocido",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2488A",
  "date": "segunda mitad del s. V a.C.",
  "tema": "Desconocido",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "2508A",
  "date": "mediados del s. III a.C.",
  "tema": "Amor / Familia / Matrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2514",
  "date": "principios del s. IV a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "2521A",
  "date": "primera mitad del s. IV a.C.",
  "tema": "Justicia / Derecho",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2549A",
  "date": "mediados del s. V a.C.",
  "tema": "Vida / Salud",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2593A",
  "date": "primera mitad del s. IV a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2639B",
  "date": "ss. V-IV a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2648A",
  "date": "finales del s. IV a.C.",
  "tema": "Oficio / Comercio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2651A",
  "date": "primera mitad del s. IV a.C.",
  "tema": "Desconocido",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2720A",
  "date": "s. V a.C.",
  "tema": "Amor / Familia / Matrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "2747A",
  "date": "segunda mitad del s. V a.C.",
  "tema": "Desconocido",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2802B",
  "date": "primera mitad del s. IV a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2815A",
  "date": "segunda mitad del s. V a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Epirota",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2873A",
  "date": "primera mitad del s. IV a.C.",
  "tema": "Desconocido",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2876B",
  "date": "segunda mitad del s. IV a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "2948A",
  "date": "mediados del s. IV a.C.",
  "tema": "Amigos / Enemigos",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2952B",
  "date": "finales del s. IV a.C.",
  "tema": "Religión",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2977B",
  "date": "segunda mitad del s. V a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "2980",
  "date": "primera mitad del s. IV a.C.",
  "tema": "Vida / Salud",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "3064A",
  "date": "segunda mitad del s. IV a.C.",
  "tema": "Viaje / Migración",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "3103A",
  "date": "primera mitad del s. IV a.C.",
  "tema": "Honores / Deporte",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "3109A",
  "date": "mediados del s. IV a.C.",
  "tema": "Viaje / Migración",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "3183B",
  "date": "ss. V-IV a.C.",
  "tema": "Viaje / Migración",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "3222B",
  "date": "sin datación",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "3261B",
  "date": "finales del s. V a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "3297A",
  "date": "segunda mitad del s. IV a.C.",
  "tema": "Amor / Familia / Matrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "3315A",
  "date": "ss. V-IV a.C.",
  "tema": "Viaje / Migración",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "3325A",
  "date": "finales del s. V a.C.",
  "tema": "Oficio / Comercio",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "3330A",
  "date": "ss. V-IV a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "3336A",
  "date": "finales del s. V a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "3363B",
  "date": "primera mitad del s. IV a.C.",
  "tema": "Vida / Salud",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "3405B",
  "date": "finales del s. V a.C.",
  "tema": "Viaje / Migración",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "3431A",
  "date": "segunda mitad del s. V a.C.",
  "tema": "Oficio / Comercio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "3473A",
  "date": "primera mitad del s. IV a.C.",
  "tema": "Esclavitud",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "3517A",
  "date": "segunda mitad del s. IV a.C.",
  "tema": "Viaje / Migración",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "3612B",
  "date": "primera mitad del s. V a.C.",
  "tema": "Oficio / Comercio",
  "alf": "Corintio",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "3661A",
  "date": "primera mitad del s. IV a.C.",
  "tema": "Desconocido",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "3677A",
  "date": "segunda mitad del s. V a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "3732A",
  "date": "finales del s. VI a.C.",
  "tema": "Desconocido",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "3777",
  "date": "segunda mitad del s. IV a.C.",
  "tema": "Desconocido",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "3828A",
  "date": "ss. VI-V a.C.",
  "tema": "Amor / Familia / Matrimonio",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "3871",
  "date": "segunda mitad del s. IV a.C.",
  "tema": "Religión",
  "alf": "Corintio",
  "cert": "Solo nombre/alfabeto",
  "sub": "Doris mitior"
 },
 {
  "ref": "3946B",
  "date": "segunda mitad del s. IV a.C.",
  "tema": "Viaje / Migración",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "4079A",
  "date": "finales del s. V a.C.",
  "tema": "Viaje / Migración",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "4092A",
  "date": "segunda mitad del s. V a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "4115A",
  "date": "segunda mitad del s. IV a.C.",
  "tema": "Amor / Familia / Matrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "4138B",
  "date": "s. IV a.C.",
  "tema": "Desconocido",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "4141A",
  "date": "primera mitad del s. IV a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "4142A",
  "date": "primera mitad del s. IV a.C.",
  "tema": "Desconocido",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "4150A",
  "date": "finales del s. VI a.C.",
  "tema": "Viaje / Migración",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "4151B",
  "date": "principios del s. V a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "4161B",
  "date": "finales del s. V a.C.",
  "tema": "Amor / Familia / Matrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "LOD 1",
  "date": "primera mitad del s. IV a.C.",
  "tema": "Otros",
  "alf": "Reformado / Desconocido",
  "cert": "Solo nombre/alfabeto",
  "sub": "Doris mitior"
 },
 {
  "ref": "LOD 2",
  "date": "segunda mitad del s. IV a.C.",
  "tema": "Otros",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "LOD 3",
  "date": "primera mitad del s. IV a.C.",
  "tema": "Otros",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "LOD 14",
  "date": "ss. IV-III a.C.",
  "tema": "Otros",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "LOD 35A",
  "date": "tercer cuarto del s. V a.C.",
  "tema": "Amor / Familia / Matrimonio",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "LOD 37",
  "date": "tercer cuarto del s. V a.C.",
  "tema": "Amor / Familia / Matrimonio",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "LOD 41",
  "date": "último cuarto del s. VI a.C.",
  "tema": "Amor / Familia / Matrimonio",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "LOD 51",
  "date": "primera mitad del s. V a.C.",
  "tema": "Amor / Familia / Matrimonio",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "LOD 56",
  "date": "s. IV a.C.",
  "tema": "Viaje / Migración",
  "alf": "Magna Grecia / Sicilia",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "LOD 62",
  "date": "s. IV a.C.",
  "tema": "Esclavitud",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "LOD 66A",
  "date": "último cuarto del s. V a.C.",
  "tema": "Vida / Salud",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "LOD 67A",
  "date": "tercer cuarto del s. V a.C.",
  "tema": "Vida / Salud",
  "alf": "Corintio",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "LOD 73A",
  "date": "ss. IV-III a.C.",
  "tema": "Vida / Salud",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "LOD 89B",
  "date": "s. IV a.C.",
  "tema": "Oficio / Comercio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "LOD 92B",
  "date": "s. IV a.C.",
  "tema": "Viaje / Migración",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "LOD 94",
  "date": "primera mitad del s. IV a.C.",
  "tema": "Oficio / Comercio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "LOD 101B",
  "date": "s. IV a.C.",
  "tema": "Oficio / Comercio",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "LOD 105Ba",
  "date": "s. IV a.C.",
  "tema": "Oficio / Comercio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "LOD 112",
  "date": "ss. IV-III a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "LOD 115",
  "date": "s. IV a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "LOD 117A",
  "date": "s. IV a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "LOD 118B",
  "date": "s. IV a.C.",
  "tema": "Dinero / Patrimonio",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "LOD 121A",
  "date": "ss. IV-III a.C.",
  "tema": "Verdad / Conocimiento",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "LOD 123",
  "date": "s. IV a.C.",
  "tema": "Verdad / Conocimiento",
  "alf": "Reformado / Desconocido",
  "cert": "Seguro",
  "sub": "Doris mitior"
 },
 {
  "ref": "LOD 126",
  "date": "s. IV a.C.",
  "tema": "Vida / Salud",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 },
 {
  "ref": "LOD 140",
  "date": "ss. V-IV a.C.",
  "tema": "Religión",
  "alf": "Reformado / Desconocido",
  "cert": "Dudoso",
  "sub": "Doris mitior"
 }
];
// §4.1.3: inscripciones que notan con Ε u Ο alguna vocal media larga, por período.
export const NOTACION_DOR = [
 {
  "period": "s. VI",
  "con": 4,
  "resto": 3,
  "dvcs": [
   "413B",
   "414A",
   "4150A",
   "LOD 41"
  ]
 },
 {
  "period": "Transición VI–V",
  "con": 1,
  "resto": 2,
  "dvcs": [
   "3828A"
  ]
 },
 {
  "period": "s. V",
  "con": 48,
  "resto": 20,
  "dvcs": [
   "6A",
   "73",
   "135A",
   "138A",
   "139A",
   "264A",
   "309B",
   "312B",
   "419A",
   "442A",
   "481",
   "541B",
   "608A",
   "634A",
   "730B",
   "929A",
   "963",
   "1148A",
   "1182A",
   "1246A",
   "1346A",
   "1380A",
   "1393",
   "1426A",
   "1459B",
   "1921A",
   "2128B",
   "2133B",
   "2197B",
   "2401",
   "2408B",
   "2448A",
   "2488A",
   "2549A",
   "2720A",
   "2747A",
   "2977B",
   "3325A",
   "3431A",
   "3612B",
   "3677A",
   "4079A",
   "4092A",
   "4161B",
   "LOD 35A",
   "LOD 37",
   "LOD 66A",
   "LOD 67A"
  ]
 },
 {
  "period": "Transición V–IV",
  "con": 3,
  "resto": 8,
  "dvcs": [
   "1377B",
   "3315A",
   "LOD 140"
  ]
 },
 {
  "period": "s. IV",
  "con": 10,
  "resto": 68,
  "dvcs": [
   "4",
   "90",
   "531A",
   "825A",
   "1244",
   "2651A",
   "3064A",
   "3297A",
   "3473A",
   "LOD 94"
  ]
 },
 {
  "period": "Transición IV–III",
  "con": 0,
  "resto": 4,
  "dvcs": []
 },
 {
  "period": "s. III",
  "con": 0,
  "resto": 2,
  "dvcs": []
 },
 {
  "period": "Sin datar",
  "con": 0,
  "resto": 1,
  "dvcs": []
 }
];
// §3: las 46 inscripciones del capítulo en alfabeto corintio (ALFABETO_GRUPO_v2), según lo que sostiene su adscripción.
export const CORINTIAS_DOR = [
 {
  "id": "excluye",
  "name": "Un rasgo que excluye por sí solo el eolio",
  "dvcs": [
   "1393",
   "LOD 41"
  ],
  "note": "ὀπτίλλος en I.Dodone DVC 1393 y el participio ἐάσσαι en I.Dodone Lhôte 41."
 },
 {
  "id": "paomai",
  "name": "La familia de πάομαι",
  "dvcs": [
   "6A",
   "146A",
   "1381B"
  ],
  "note": "πέπατα<ι>, πεπαμένος y παμπασία."
 },
 {
  "id": "nombre",
  "name": "El antropónimo dórico Κλεπώ",
  "dvcs": [
   "2448A"
  ],
  "note": "Κλεπώ (Katsadima 2017: 132 nn. 14-15, 139)."
 },
 {
  "id": "seguras",
  "name": "Rasgo común y alfabeto corintio: dórica segura",
  "dvcs": [
   "15A",
   "135A",
   "138A",
   "139A",
   "309B",
   "411A",
   "413B",
   "414A",
   "415A",
   "474A",
   "481",
   "541B",
   "929A",
   "963",
   "1148A",
   "1182A",
   "1346A",
   "1380A",
   "1426A",
   "1504B",
   "2243B",
   "2401",
   "2549A",
   "2977B",
   "3325A",
   "3732A",
   "3828A",
   "4150A",
   "4151B",
   "LOD 35A",
   "LOD 37",
   "LOD 51",
   "LOD 66A",
   "LOD 67A"
  ],
  "note": "Rasgos comunes al dórico y a otros dialectos (κα, ᾱ, digamma o ζώω), que el alfabeto corintio, ajeno al eolio, basta para atribuir al dórico."
 },
 {
  "id": "reservas",
  "name": "Con reservas por el alfabeto o la lectura",
  "dvcs": [
   "3871",
   "1673B",
   "3612B",
   "2133B",
   "2368A",
   "825A"
  ],
  "note": "Épsilon corintia aislada (3871, 1673B, 3612B), fragmento de una sola palabra (2133B), variante epirota o corcirense del alfabeto (2368A) y lectura discutida de κα con una datación que choca con la escritura arcaica (825A)."
 }
];
// §4.2.2-4.2.3: digamma y notación de la aspiración por período.
export const ARCAISMOS_DOR = [
 {
  "period": "s. VI",
  "total": 7,
  "digIni": 2,
  "digInter": 2,
  "aspEta": 3,
  "aspSigno": 0
 },
 {
  "period": "Transición VI–V",
  "total": 3,
  "digIni": 1,
  "digInter": 0,
  "aspEta": 1,
  "aspSigno": 0
 },
 {
  "period": "s. V",
  "total": 68,
  "digIni": 5,
  "digInter": 5,
  "aspEta": 9,
  "aspSigno": 1
 },
 {
  "period": "Transición V–IV",
  "total": 11,
  "digIni": 1,
  "digInter": 0,
  "aspEta": 1,
  "aspSigno": 0
 },
 {
  "period": "s. IV",
  "total": 78,
  "digIni": 3,
  "digInter": 0,
  "aspEta": 0,
  "aspSigno": 1
 },
 {
  "period": "Posterior o sin datar",
  "total": 7,
  "digIni": 0,
  "digInter": 0,
  "aspEta": 0,
  "aspSigno": 0
 }
];
// §4.2.4: sigma simple frente a geminada (simples, geminadas), en el capítulo y en el corpus.
export const SIGMA_DOR = { capitulo: { prasso: [6, 3], essetai: [9, 20] }, corpus: { prasso: [34, 79], essetai: [12, 40] } };
// §2: topónimos y etnónimos (53 menciones; las mismas cifras que TOPONIMOS["dor"] de graficos_dialecto_pandas.py).
export const TOPONYMS_DOR = [
 {
  "id": "ambracia",
  "name": "Ambracia",
  "greek": "Ἀμβρακία",
  "lon": 20.985,
  "lat": 39.16,
  "off": [
   0.22,
   -0.05
  ],
  "ambito": "Colonias corintias",
  "note": "Colonia corintia del último cuarto del s. VII a.C., capital de Pirro desde comienzos del s. III a.C. y primera escala de los peregrinos que se dirigían a Dodona. Es la ciudad dórica más citada, desde el ἐν Ἀνπρακία[ι] de I.Dodone DVC 3549A, uno de los textos más antiguos del corpus; el ἐ̣ν̣ Ἀνπρα[κίαν] de 814A documenta además ἐν con acusativo (Méndez Dosuna 2018b: 46 n. 147).",
  "mentions": [
   {
    "ref": "LOD 65A",
    "form": "Ἀμβρακιά[τας]",
    "date": "ss. IV-III a.C.",
    "type": "etnónimo",
    "certain": true
   },
   {
    "ref": "3549A",
    "form": "ἐν Ἀνπρακία[ι]",
    "date": "primera mitad del s. VI a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "1473A",
    "form": "εἰς Ἀνπ[ρακίαν]",
    "date": "primera mitad del s. V a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "891B",
    "form": "Ἀνπρα̣[κίαν]",
    "date": "finales del s. V a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "618A",
    "form": "[εἰς Ἀ]μ̣πρακία[ν]",
    "date": "principios del s. IV a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "814A",
    "form": "ἐ̣ν̣ Ἀνπρα[κίαν]",
    "date": "primera mitad del s. IV a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "2089A",
    "form": "ἐν Ἀμπρα[κίαι]",
    "date": "segunda mitad del s. IV a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "3979B",
    "form": "Ἀ(μ)πρακ(ί)αν",
    "date": "s. IV a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "LOD 106A",
    "form": "ἐν Ἀμπρα[κίαι]",
    "date": "s. IV a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "2265B",
    "form": "Ἀπρα[κίαν]",
    "date": "ss. IV-III a.C.",
    "type": "topónimo",
    "certain": false
   },
   {
    "ref": "1066B",
    "form": "Ἀμπ(ρακία)",
    "date": "s. IV a.C.",
    "type": "topónimo",
    "certain": false
   },
   {
    "ref": "2295A",
    "form": "Ἀ̣πρα[κίαν]",
    "date": "s. IV a.C.",
    "type": "topónimo",
    "certain": false
   }
  ]
 },
 {
  "id": "corcira",
  "name": "Corcira",
  "greek": "Κόρκυρα",
  "lon": 19.92,
  "lat": 39.62,
  "off": [
   -0.22,
   0.1
  ],
  "ambito": "Colonias corintias",
  "note": "Los corcirenses consultan en solitario en I.Dodone Lhôte 1 y 3, quizá en 4 (restituida), y junto con los oricios en I.Dodone Lhôte 2; consulta además Φείδης ὁ Κορκυραῖος (I.Dodone DVC 1088A), y la isla figura como destino en 1229B y 1768A. Lhôte (2006: 22, 363) llegó a considerar Dodona una suerte de santuario oficial de la isla.",
  "mentions": [
   {
    "ref": "LOD 1",
    "form": "Κορκ[υραῖοι]",
    "date": "primera mitad del s. IV a.C.",
    "type": "etnónimo",
    "certain": true
   },
   {
    "ref": "LOD 2",
    "form": "τοὶ Κορκυραῖοι",
    "date": "segunda mitad del s. IV a.C.",
    "type": "etnónimo",
    "certain": true
   },
   {
    "ref": "LOD 3",
    "form": "τοὶ Κ[ο]ρκυρα[ῖοι]",
    "date": "primera mitad del s. IV a.C.",
    "type": "etnónimo",
    "certain": true
   },
   {
    "ref": "LOD 4",
    "form": "[το]ὶ Κορ[κυραῖοι]",
    "date": "s. IV a.C.",
    "type": "etnónimo",
    "certain": false
   },
   {
    "ref": "1088A",
    "form": "ὁ Κορκυραῖος",
    "date": "finales del s. V a.C.",
    "type": "etnónimo",
    "certain": true
   },
   {
    "ref": "1229B",
    "form": "(ἰ)ς Κόρκ̣υ[ραν]",
    "date": "ss. V-IV a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "1768A",
    "form": "[εἰ]ς Κόρκ[υραν]",
    "date": "s. IV a.C.",
    "type": "topónimo",
    "certain": true
   }
  ]
 },
 {
  "id": "faros",
  "name": "Faros",
  "greek": "Φάρος",
  "lon": 16.6,
  "lat": 43.18,
  "off": [
   0.22,
   0.0
  ],
  "ambito": "Colonia paria del Adriático",
  "note": "Fundada por colonos parios con el apoyo de Dionisio I en el 385/4 a.C., supera en menciones a cualquier ciudad occidental. Salvo la consulta de un ateniense (I.Dodone Lhôte 130A), la mayoría presenta rasgos dóricos, quizá de epirotas que se sumaron a la empresa colonial (Carbon 2017: 102). I.Dodone Lhôte 6B escribe el nombre antiguo, Πάρον; el ἐν Πάρω[ι] de I.Dodone DVC 3146A puede designar la colonia o la isla del Egeo.",
  "mentions": [
   {
    "ref": "228B",
    "form": "ἐς Φάρον",
    "date": "principios del s. IV a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "463A",
    "form": "ἰς Φάρον",
    "date": "principios del s. IV a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "3030A",
    "form": "εἰς Φάρον",
    "date": "segunda mitad del s. V a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "3517A",
    "form": "[ἰς] Φάρον",
    "date": "segunda mitad del s. IV a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "2762A",
    "form": "[εἰς] Φάρ(ον)",
    "date": "primera mitad del s. III a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "LOD 130A",
    "form": "Φάρωι",
    "date": "primer cuarto del s. IV a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "LOD 6B",
    "form": "ἐς Πάρον",
    "date": "primer cuarto del s. IV a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "3280A",
    "form": "Φάρ̣ος",
    "date": "ss. V-IV a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "3146A",
    "form": "ἐν Πάρω[ι]",
    "date": "segunda mitad del s. IV a.C.",
    "type": "topónimo",
    "certain": false
   }
  ]
 },
 {
  "id": "epidamno",
  "name": "Epidamno",
  "greek": "Ἐπίδαμνος",
  "lon": 19.445,
  "lat": 41.32,
  "off": [
   -0.22,
   0.05
  ],
  "ambito": "Colonias corintias",
  "note": "Fundación común de Corcira y Corinto, aparece sobre todo como destino de comercio, desde la consulta arcaica [περὶ] ἐμπορίας ἰ̣ς Ἐπίδαμνον (I.Dodone DVC 3), en alfabeto corintio, hasta la pregunta de quien desea casarse con τὰν Ἐπιδαμνίαν γυναῖκα (2052A).",
  "mentions": [
   {
    "ref": "3",
    "form": "ἰ̣ς Ἐπίδαμνον",
    "date": "finales del s. VI a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "LOD 99A",
    "form": "ἐ̅ς Ἐπίδαμνον",
    "date": "mediados del s. V a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "3185",
    "form": "ἐς Ἐπίδα[μνον]",
    "date": "mediados del s. V a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "2052A",
    "form": "τὰν Ἐπιδαμνίαν γυναῖκα",
    "date": "principios del s. IV a.C.",
    "type": "etnónimo",
    "certain": true
   },
   {
    "ref": "1345A",
    "form": "[ἐν] Ἐπιδα",
    "date": "s. V a.C.",
    "type": "topónimo",
    "certain": false
   },
   {
    "ref": "1770B",
    "form": "[εἰς Ἐ]πίδ̣[αμνον]",
    "date": "ss. V-IV a.C.",
    "type": "topónimo",
    "certain": false
   },
   {
    "ref": "3965A",
    "form": "Ἐπιδ̣[άμνιος]",
    "date": "finales del s. IV a.C.",
    "type": "etnónimo",
    "certain": false
   }
  ]
 },
 {
  "id": "olimpia",
  "name": "Olimpia",
  "greek": "Ὀλυμπία",
  "lon": 21.63,
  "lat": 37.638,
  "off": [
   -0.22,
   -0.12
  ],
  "ambito": "Peloponeso",
  "note": "El lugar peloponesio más citado; las dos caras de I.Dodone DVC 4079A y 4080B, con el adlativo Ὀλυπίανδε, se entienden como pregunta y respuesta o como las dos alternativas de una misma consulta (Martín González 2021: 218). Quien pregunta por Olimpia puede ser un epirota que acude a los juegos.",
  "mentions": [
   {
    "ref": "1207B",
    "form": "ἐ̣ν̣ [Ὀλ]υ̣μ̣πία[ν]",
    "date": "primera mitad del s. IV a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "2986A",
    "form": "(ἐ)ν [Ὀλ]υμπίαι",
    "date": "primera mitad del s. IV a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "3509A",
    "form": "[ἐν] Ὀλυν[πίαι]",
    "date": "primera mitad del s. IV a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "4079A",
    "form": "Ὀλυπίανδε",
    "date": "finales del s. V a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "4080B",
    "form": "Ὀλ(υ)πίανδε",
    "date": "finales del s. V a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "1878A",
    "form": "[ἐν Ὀλυ]νπία[ι]",
    "date": "s. IV a.C.",
    "type": "topónimo",
    "certain": false
   }
  ]
 },
 {
  "id": "nemea",
  "name": "Nemea",
  "greek": "Νεμέα",
  "lon": 22.71,
  "lat": 37.81,
  "off": [
   -0.2,
   -0.14
  ],
  "ambito": "Peloponeso",
  "note": "Sede de los juegos nemeos, citada en tres consultas.",
  "mentions": [
   {
    "ref": "1358B",
    "form": "Νεμέαι",
    "date": "finales del s. V a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "2646B",
    "form": "[Ν]εμέαν",
    "date": "s. IV a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "3294A",
    "form": "[ἐκ] Νεμέας",
    "date": "s. IV a.C.",
    "type": "topónimo",
    "certain": true
   }
  ]
 },
 {
  "id": "apolonia",
  "name": "Apolonia",
  "greek": "Ἀπολλωνία",
  "lon": 19.47,
  "lat": 40.72,
  "off": [
   -0.22,
   0.0
  ],
  "ambito": "Colonias corintias",
  "note": "Destino de un viaje por mar en I.Dodone DVC 366A y patria de Δεινοκλῆς Ἀπολλωνιάτας en I.Dodone Lhôte 50Aa.",
  "mentions": [
   {
    "ref": "366A",
    "form": "Ἀπολλωνίαν",
    "date": "mediados del s. IV a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "LOD 50Aa",
    "form": "Ἀπολλωνιάτας",
    "date": "segunda mitad del s. IV a.C.",
    "type": "etnónimo",
    "certain": true
   }
  ]
 },
 {
  "id": "megara",
  "name": "Mégara",
  "greek": "Μέγαρα",
  "lon": 23.345,
  "lat": 37.995,
  "off": [
   0.0,
   0.18
  ],
  "ambito": "Peloponeso",
  "note": "El locativo Μεγαροῖ de I.Dodone Lhôte 86; la mención de I.Dodone DVC 1858A depende de una corrección editorial.",
  "mentions": [
   {
    "ref": "LOD 86",
    "form": "Μεγαροῖ",
    "date": "primer cuarto del s. IV a.C.",
    "type": "topónimo",
    "certain": true
   },
   {
    "ref": "1858A",
    "form": "Μεγαρ[- - -]",
    "date": "segunda mitad del s. V a.C.",
    "type": "topónimo",
    "certain": false
   }
  ]
 },
 {
  "id": "anactorio",
  "name": "Anactorio",
  "greek": "Ἀνακτόριον",
  "lon": 20.93,
  "lat": 38.93,
  "off": [
   0.22,
   -0.12
  ],
  "ambito": "Colonias corintias",
  "note": "Solo en la alternativa entre Elina y Anactorio de I.Dodone Lhôte 46Bb, consulta del dórico noroccidental.",
  "mentions": [
   {
    "ref": "LOD 46Bb",
    "form": "εἰς Ἀνακτόριον",
    "date": "segunda mitad del s. IV a.C.",
    "type": "topónimo",
    "certain": true
   }
  ]
 },
 {
  "id": "corinto",
  "name": "Corinto",
  "greek": "Κόρινθος",
  "lon": 22.88,
  "lat": 37.905,
  "off": [
   -0.2,
   0.14
  ],
  "ambito": "Peloponeso",
  "note": "Destino de quien vende sus tierras antes de las Acciacas (εἰς Κόρινθον ἀποδαμῶ), en una consulta de rasgos noroccidentales.",
  "mentions": [
   {
    "ref": "3220A",
    "form": "εἰς Κόρινθον",
    "date": "mediados del s. III a.C.",
    "type": "topónimo",
    "certain": true
   }
  ]
 },
 {
  "id": "hermione",
  "name": "Hermíone",
  "greek": "Ἑρμιόνη",
  "lon": 23.25,
  "lat": 37.385,
  "off": [
   -0.2,
   0.02
  ],
  "ambito": "Peloponeso",
  "note": "Εἰς Ἑρμιόνα de I.Dodone Lhôte 68B.",
  "mentions": [
   {
    "ref": "LOD 68B",
    "form": "Εἰς Ἐρμιόνα",
    "date": "segunda mitad del s. IV a.C.",
    "type": "topónimo",
    "certain": true
   }
  ]
 },
 {
  "id": "same",
  "name": "Same",
  "greek": "Σάμη",
  "lon": 20.65,
  "lat": 38.25,
  "off": [
   -0.22,
   -0.1
  ],
  "ambito": "Islas del Jónico",
  "note": "Única mención de las demás islas del Jónico (Cefalonia); los exvotos documentan otras procedencias.",
  "mentions": [
   {
    "ref": "4072A",
    "form": "ἐν Σάμαι",
    "date": "ss. V-IV a.C.",
    "type": "topónimo",
    "certain": true
   }
  ]
 },
 {
  "id": "selasia",
  "name": "Selasia",
  "greek": "Σελλασία",
  "lon": 22.44,
  "lat": 37.17,
  "off": [
   0.12,
   -0.05
  ],
  "ambito": "Peloponeso",
  "note": "En Laconia; el [ἐ]ν Σε̣λ<λ>ασί[αι] de I.Dodone DVC 2416A descansa en una corrección editorial.",
  "mentions": [
   {
    "ref": "2416A",
    "form": "[ἐ]ν Σε̣λ(λ)ασί[αι]",
    "date": "s. IV a.C.",
    "type": "topónimo",
    "certain": false
   }
  ]
 }
].map((t) => ({ ...t, seg: t.mentions.filter((m) => m.certain).length,
  dud: t.mentions.filter((m) => !m.certain).length, total: t.mentions.length }));
export const TOPONYMS_EXCLUDED_DOR = [
 {
  "ref": "105B",
  "form": "ἐ̣ν Κορ[- - -]",
  "why": "Κορ- restituido: puede ser Corcira o Corinto."
 },
 {
  "ref": "193B",
  "form": "ἐν Κο[- - -]",
  "why": "Κορ- restituido: puede ser Corcira o Corinto."
 },
 {
  "ref": "3116A",
  "form": "εἰς Κ[ο]ρ[- - -]",
  "why": "Κορ- restituido: puede ser Corcira o Corinto."
 }
];
export const TOPONYM_MENTIONS_DOR = TOPONYMS_DOR.flatMap((t) => t.mentions.map((m) => ({ ...m, place: t.name })));
export const TOPONYM_BARS_DOR = TOPONYMS_DOR.slice().sort((a, b) => b.total - a.total || b.seg - a.seg)
  .map((t) => ({ name: t.name, seguras: t.seg, dudosas: t.dud }));
