import { ALFABETO_COLORS, C, NOTACION_COLORS } from "../theme.js";

// Datos del capítulo sobre el dialecto tesalio.

// ── Alfabeto (§2; columna ALFABETO_GRUPO_v2 del Excel): milesio o sin alfabeto
// epicórico reconocible + alfabeto tesalio (150A, 307A, 934A, 1143A, 2000B, 2103A;
// 307A y 2103A, reasignados por autopsia frente a los editores: Candel Lozano, en
// prensa), de Dodona (17B, 93B, 145A), eubeo (948A) y occidental (1351A). Suma: TOTAL_TES.
export const ALF_TES = {
  milesio: 64,
  tesalio: 6,
  dodona: 3,
  eubea: 1,
  otros: 1,
};

export const ALF_TES_PIE = [
  { id: "milesio", label: "Reformado o no identificado", value: ALF_TES.milesio, color: C.milesio },
  { id: "tesalio", label: "Tesalio", value: ALF_TES.tesalio, color: ALFABETO_COLORS.tesalio },
  { id: "dodona", label: "Dodona", value: ALF_TES.dodona, color: ALFABETO_COLORS.dodona },
  { id: "eubea", label: "Eubea", value: ALF_TES.eubea, color: ALFABETO_COLORS.eubea },
  { id: "occidental", label: "Occidental", value: ALF_TES.otros, color: ALFABETO_COLORS.occidental },
];

// Cronología según la columna Date del Excel (DIALECTO_SUB); la transición
// V–IV («5-4») se cuenta aparte, no dentro del s. IV.
export const REGIONS_TES = [
  { id: "pelasgiotis", name: "Pelasgiótide", short: "Pelasg.", en: "Pelasgiotis", value: 12,
    chronoV: 5, chronoVIV: 2, chronoIV: 4, chronoPost: 1 },
  { id: "histiaiotis", name: "Histiótide", short: "Histiot.", en: "Histiaiotis", value: 9,
    chronoV: 2, chronoVIV: 2, chronoIV: 5, chronoPost: 0 },
  { id: "thessaliotis", name: "Tesaliótide", short: "Tesaliot.", en: "Thessaliotis", value: 6,
    chronoV: 1, chronoVIV: 1, chronoIV: 4, chronoPost: 0 },
];

// Inscripciones de cada tétrada (§7): { id, src, date, text, desc }.
export const REGION_INSCRIPTIONS_TES = {
  pelasgiotis: [
    { id: "2761B", src: "DVC", date: "s. V a.C.", text: "[. .]Ρ[- - - περ'] \nὀρέχσιο[ς - - -] \nκίνι [κε θεῶν εὐχόμενος - - -]", desc: "κίνι, κε + κίς — Méndez Dosuna (2016: 133): adscripción a Pelasgiótide por κίνι y alfabeto rojo (χσ = ξ)" },
    { id: "2544B", src: "DVC", date: "mediados del s. V a.C.", text: "[ὁ δεῖνα ἐπερωτᾶι - - -] κίννι κε φ[ε]ο͂ν̣ [εὐχόμενος - - -]" },
    { id: "1433A", src: "DVC", date: "segunda mitad del s. V a.C.", text: "θεὸς τύχα· Φε̅δίας : π̣ὲρ [.][- - -]\nκίνι κε θ[ε]ο͂ν : εὐχόμενο[ς - - -]" },
    { id: "3545B", src: "DVC", date: "finales del s. V a.C.", text: "[- - -]Σ· κί̣νι κε θ[εο͂ν εὐχόμενος - - -]\n[- - -]ΟΠΟΣΚΑ[- - -] \n[- - - μ]αντήαν [.][- - -]", desc: "κίνι, κε — combinación diagnóstica de Pelasgiótide" },
    { id: "1465A", src: "DVC", date: "finales del s. V a.C.", text: "[- - -] τοῖ ἱαρο̣ῖο : τοῖ ἐμπέδο̣ι \n[- - -] κ̣αὶ κεν(ε)ὸ̣ν ἀγαγόμενος \n[- - -] οἴκοι καὶ θαραπεύο̅"},
    { id: "159A", src: "DVC", date: "finales s. V – principios s. IV a.C.", text: "Πυρκοτέλεις ἱστορ[εῖ Δία Νάϊον καὶ Διό̅ναν περὶ φρε]-\nάτο̅ν ὀρύξξειν εἶ φιάλλε̅[ι]", desc: "Πυρκοτέλεις — vocalismo ⟨ΕΙ⟩" },
    { id: "328", src: "DVC", date: "principios del s. IV a.C.", text: "πὲρ πανκλαρία(ς) αἰ γίνυ-\nτε̅ καὶ γυναῖκα ἄγετε̅", desc: "γίνυτε̅, ἄγετε̅ — posible -τει de Pelasgiótide con monoptongación temprana (Méndez Dosuna 2018a: 286); adscripción dudosa" },
    { id: "34", src: "Lhôte", date: "ss. V-IV a.C.", text: "῏Ε ἀτέραν ἄγο̅μει ;", desc: "ἄγομει — posible -μει por -μαι (Méndez Dosuna 2018a: 286; 2024: 4.3); adscripción dudosa" },
    { id: "1416A", src: "DVC", date: "primera mitad del s. IV a.C.", text: "Μελανθίων : θεο͂ν κίννι \nεὐχόμενος Ε[. . . . .9 . . . .];", desc: "Μελανθίων — κίννι, vocalismo ⟨Η⟩/⟨Ω⟩" },
    { id: "556A", src: "DVC", date: "finales del s. IV a.C.", text: "θεὸς τύχα ἀγαθά• ἐρωτᾶι Ἀ-\nγιλαΐδας καὶ οἱ συγγενέες \nπὲρ τοῦ ἀρρωστέ̅ματος τ-\nῶν ὀφθαλμῶν τῶν οἱ π-\nατέρες ἀρρωστήσαεν \nαἰ ἔστι κίννι κε θεῶν \nδρᾶντες̣ τοῖς λοιποῖς \nστάμα γενηθείε̅ \nκαὶ ὑγίεια", desc: "ἐρωτᾶι Ἀγιλαΐδας — κίννι, πέρ, 3ª pl. -εν" },
    { id: "3113A", src: "DVC", date: "finales del s. IV a.C.", text: "[θεὸς τύχα]ν ἀγαθάν· Ζεῦ̣ Δ[ω]-\n[δωναῖε καὶ Δι]ώνη<ι>· Καλλιρόα ἐπερω-\n[τᾶι τὸν θεὸ]ν καὶ τὰν θεὸν περὶ τᾶς \n[- - - κορ]άουν τοῖς θεοῖς τοῖς θε-\n[- - -] αἰ ἔστιν οἱ βέλτιον καὶ \n[ἄμεινον - - - θ]εραπεύονσαν εἲ πὲρ τ-\n[- - -]ν̣ καὶ τᾶς παγκλαρ̣ίας \n[- - -] τ̣οῖ κατ<ε>ιγνείτοιο αἰ ἀρκέ-\n[σει - - -] εἲ σούσεται πὲρ τᾶς κό-\n[ρας - - -] γάμοιο Ἀν̣δρομά-\n χας", desc: "Καλλιρόα — κατίγνειτος, [κορ]άουν, -νσ- retenida" },
    { id: "8B", src: "Lhôte", date: "ss. III-II a.C.", text: "Ἐπικοινᾶται Μον[δ]α̣ιατᾶν τὸ κοινὸν Δὶ Νάωι καὶ Διώναι{ς} πὲρ τοῖ [ἀρ]γύρροι τᾶς Θέμιστος αἰ ἀ⟨ν⟩εκτ[ό]ν ἐστι τᾶ Θέμι⟨σ⟩τι καὶ βέλτιον ἐσκιχρέμεν.", desc: "Μονδαιατᾶν τὸ κοινόν — inf. -μεν, ἐπικοινᾶται" },
  ],
  histiaiotis: [
    { id: "17B", src: "DVC", date: "ss. V-IV a.C.", text: "αἰ κα μὰ ἔχο", desc: "αἰ κα μὰ ἔχο — κα + negación μά" },
    { id: "191A", src: "DVC", date: "mediados del s. IV a.C.", text: "αἰ σύ̣μ̣φορέν ἐστι [- - - τὰν] \nἐπιβουλὰν Φιλίπ[που - - - ἀμοι]-\nβὰν αἴ κα διδοῖν", desc: "διδοῖν — opt. 3ª pl. -οιν; σύμφορέν — /o/ > /e/" },
    { id: "1351A", src: "DVC", date: "primera mitad del s. V a.C.", text: "καὶ πὲρ τᾶν κοράο̅ν \nτᾶν μειόνο̅ν αἰ ὅ̅σπερ \nπρό̅τας ἀπεδείξατε", desc: "ἀπεδείξατε — /o/ > /e/; προ͂τας; secuencia ᾱω; πέρ" },
    { id: "1988B", src: "DVC", date: "s. IV a.C.", text: "μὰ πρᾶξ̣αι", desc: "μὰ πρᾶξ̣αι — negación μά; inf. aor. -σαι" },
    { id: "2015B", src: "DVC", date: "primera mitad del s. IV a.C.", text: "σουτειρί-\n[α] πα(ι)δίεν", desc: "παιδίεν — /o/ > /e/; σουτειρία — elevación ⟨ΟΥ⟩" },
    { id: "2204A", src: "DVC", date: "finales del s. V a.C.", text: "θεὸς τύχα· Ἀπολλο[- - - ἐπικοινῆται] \nΔιὶ Δουδωναιεῖ ἦ [- - -]\n ΟΣ[- - -]", desc: "Δουδωναίει (los editores acentúan Δουδωναιεῖ) — dativo con /o/ > /e/ en sílaba final (cf. §3.1.1 y §7.2)" },
    { id: "3007A", src: "DVC", date: "ss. V-IV a.C.", text: "π(ερ') ὕδ̣ατ̣(ο)ς : Τέ̅ϊος \nκαὶ Σθε̅σι", desc: "ὕδατες (los editores corrigen ὕδατ(ο)ς) — /o/ > /e/; lectura confirmada en autopsia" },
    { id: "3042A", src: "DVC", date: "mediados del s. IV a.C.", text: "[- - -]\n[- - -] ἔσστι δυνατὲν \n[- - -]", desc: "δυνατὲν — /o/ > /e/" },
    { id: "3687A", src: "DVC", date: "principios del s. IV a.C.", text: "[ὁ δεῖνα ἐπερωτᾶι τί]νι κα θεοῦν εἴει \n[- - -]Μ[- - -] \n[- - - τύ]χαν [- - -]", desc: "τίνι κα θεοῦν — κα + τίς, criterio diagnóstico de Histiótide" },
  ],
 
  thessaliotis: [
    { id: "18B", src: "DVC", date: "ss. V-IV a.C.", text: "τίνι κε θεῶ[ν] [ . . . 5 . . . ]Ε[- - -]\n[. .]ΕΛΕ[. . . . ] καὶ τυν(χ)άνοι;", desc: "τίνι κε θεῶν — combinación κε + τίς, rasgo diagnóstico de Tesaliótide" },
    { id: "293B", src: "DVC", date: "s. V a.C.", text: "[ὁ δεῖνα ἐπερο̅τᾶι τὸν Δία τὸ]ν Νά̣ϊο̣ν [- - -]\n[- - - τ]ίν̣ι κε θεο̣͂[ν θύο̅ν - - -]", desc: "[τ]ίνι κε θεῶν — κε + τίς con la restitución [τ] de los editores (con κις correspondería a Pelasgiótide); κε excluye el beocio" },
    { id: "992A", src: "DVC", date: "segunda mitad del s. IV a.C.", text: "Μέννη ἐρωτᾶι τὸν θεὸν \nτίνα κε θεῶν θεραπεύων \nἄριστα πράσσοι", desc: "Μέννη — κε + τίς (único rasgo tesalio seguro; adscripción con reservas); ἐρωτᾶι con contracción -αε- > ᾱ; ἄριστα sin síncopa" },
    { id: "1134A", src: "DVC", date: "primera mitad del s. IV a.C.", text: "[Ζεῦ Νάϊ]ε Εὐανάξα πράσ(σ)ο[νσα] \n[κὰτ νοσεί]ματος τίννι κε θε̣[οῦν] \n[ἀν(α)τιθ]ένσα ὑγιεὶς γέν[οιτο];", desc: "τίννι κε θεοῦν — geminada hiperdialectal τίννι; -νσ- conservado en [ἀν(α)τιθ]ένσα; vocalismo ⟨ΕΙ⟩/⟨ΟΥ⟩" },
    { id: "1446B", src: "DVC", date: "s. IV a.C.", text: "[ὁ δεῖνα] τίνι κε̣ [θεῶν εὐχόμενος - - -];", desc: "τίνι κε θεῶν — combinación κε + τίς, diagnóstico de Tesaliótide" },
    { id: "2024A", src: "DVC", date: "primera mitad del s. IV a.C.", text: "θεός• \nΔαμαίνετος πὲρ Προξέ-\nνου πο͂ς κε ἐ̣κ Μελιτείας σωθῆ \nκαὶ τίνι θεῶν ἢ δαιμόνων \nεὐχόμενος σωθῆ διὰ θαχέων \nκαὶ τῶι θεῶ[ι] δῶρον ἀποφέρε̅ι;", desc: "Προξένου — único testimonio del gen. temático -ου (coincide con la koiné); κε y τίνι en oraciones distintas; πέρ. La notación ⟨Η⟩/⟨Ω⟩ es compatible con el vocalismo tesalio (cf. §3.1.1), pero ἐκ ante consonante y τῶι θεῶ[ι] son ajenos al tesalio (Méndez Dosuna 2018a: 274, 286, n. 56): adscripción con reservas." },
  ],
};

// Cronología de las inscripciones tesalias (suma: TOTAL_TES). Los dos testimonios
// de los ss. III-II son las dos caras de I.Dodone Lhôte 8.
export const CHRONO_DETAIL_TES = [
  { period: "Princ. s. V", n: 1 },
  { period: "1ª mit. s. V", n: 7 },
  { period: "Med. s. V", n: 5 },
  { period: "2ª mit. s. V", n: 4 },
  { period: "Finales s. V", n: 10 },
  { period: "s. V (gen.)", n: 3 },
  { period: "Transición V–IV", n: 7 },
  { period: "Princ. s. IV", n: 4 },
  { period: "1ª mit. s. IV", n: 12 },
  { period: "Med. s. IV", n: 7 },
  { period: "2ª mit. s. IV", n: 3 },
  { period: "Finales s. IV", n: 4 },
  { period: "s. IV (gen.)", n: 6 },
  { period: "ss. III–II", n: 2 },
];

// Temática de las consultas (§2; suma: TOTAL_TES).
export const THEMES_TES = [
  { name: "Desconocido / Sin clasificar", value: 17 },
  { name: "Religión", value: 14 },
  { name: "Oficio / Comercio", value: 11 },
  { name: "Amor / Familia / Matrimonio", value: 10 },
  { name: "Vida / Salud", value: 10 },
  { name: "Dinero / Patrimonio", value: 5 },
  { name: "Otros", value: 3 },
  { name: "Viaje / Migración", value: 2 },
  { name: "Amigos / Enemigos", value: 2 },
  { name: "Justicia / Derecho", value: 1 },
];

// ── Contexto histórico (§1)
export const LITERARY_SOURCES_TES = [
  { author: "Estrabón (VII, 1, 2-3)", type: "Geografía", desc: "Refiere que el oráculo fue trasladado desde Tesalia a Dodona siguiendo un designio de Apolo, después de que sus gentes prendieran fuego al oráculo." },
  { author: "Escolios D a Il. XVI, 234", type: "Leyenda de fundación", desc: "Un tesalio de nombre Ἑλλός, hijo de Θεσσαλός, epónimo de los tesalios, se disponía a talar el roble del santuario cuando el árbol le habló y le hizo desistir; con el tiempo se convirtió en epónimo de los sacerdotes del lugar, los Ἑλλοί (Piccinini 2017: 116). Una versión paralela de Próxeno de Epiro (FGrHist 703 F7) sustituye al leñador por el pastor epirota Mardilas, en un intento de vincular la fundación con el pueblo epirota (Chapinal-Heras 2021: 209)." },
  { author: "Filóxeno", type: "Escolio a Il. XVI, 233-234 (fr. 402a Theodoridis)", desc: "A propósito de Il. XVI, 233-235, afirma que existían dos Dodonas, una en Tesprotia, sede del oráculo del roble, y otra en Tesalia, donde Aquiles sitúa a Zeus. Esteban de Bizancio (Ἐθνικά, s.v. Δωδώνη) objeta que en esos versos se menciona a los Σέλλοι y que, por tanto, han de referirse a la Dodona de Tesprotia; el comentario revela, con todo, la existencia de un asentamiento tesalio con ese nombre." },
  { author: "Suidas (hist. tesalio)", type: "Citado por Str. VII, 7, 12", desc: "Asegura que la polis, el roble y el oráculo estaban originalmente en Escotusa, en la Pelasgiótide, y se trasladaron después al Epiro, con unas mujeres que serían las futuras sacerdotisas; de ahí el epíteto de pelásgico que recibe Zeus en la Ilíada. Estrabón califica el relato de fabuloso (μυθώδεις) y añade que Suidas lo compuso para congraciarse con los tesalios." },
  { author: "Cineas (embajador de Pirro I)", type: "Citado por Str. VII, 7, 12", desc: "También sitúa la fundación de Dodona en Tesalia; Estrabón se limita a calificar su relato de aún más fabuloso (μυθωδέστερον). Sirvió en la corte de Pirro I del Epiro, cuya madre, Ftía, era hija del tesalio Menón de Fársalo y pertenecía a un antiguo linaje de la Acaya Ftiótide que se decía descendiente de Heracles; según Plutarco, Pirro lo llamó a su corte como embajador, quizá también para apuntalar el relato del origen tesalio del oráculo." },
  { author: "Píndaro (s. V a.C.)", type: "P.Oxy. 2442 (peán fragmentario)", desc: "Fragmento de un peán en un papiro de Oxirrinco que, según Piccinini (2017: 114-122), enlaza los orígenes míticos de Dodona con Tesalia. Sería un encargo de los Alévadas, la casa que dominaba Tesalia y protectora de Píndaro, dentro de la política de los ταγοί tesalios, que explotaron la llegada de Neoptólemo a Tesprotia y Dodona y la relación entre Aquiles y Zeus Dodoneo." },
];

export const POLITICAL_LINKS_TES = [
  { event: "Peán pindárico", date: "s. V a.C.", agent: "Alévadas", desc: "Encargo de los gobernantes tesalios que explotaban la conexión mítica Neoptólemo–Aquiles–Zeus Dodoneo." },
  { event: "Moneda de Larisa", date: "400-340 a.C.", agent: "Larisa", desc: "Anverso: Alevas con leyenda ΑΛΕ. Reverso: águila con rayo (símbolos de Molosia/Dodona) y leyenda ΕΛΛΑ (¿Helloi/Selloi?). Cf. Aston (2024: 333-334)." },
  { event: "Dedicación tras victoria", date: "274 a.C.", agent: "Pirro I", desc: "Tras vencer a Antígono Gonatas, Pirro consagra los escudos gálatas en el santuario de Atenea Itonia, en Tesalia, y los macedonios en Dodona (Plu. Pyrrh. 26, 9-10; Paus. I, 13, 2-3); las diferencias entre ambos epigramas responden a la voluntad de ganarse a los tesalios (Raynor 2019: 312-318)." },
];

// ── Lugares del mapa de Tesalia (§1-§2 y §7) ─────────────────────
// kind: "mencion" (topónimo en una laminilla), "region" (nombre de región),
// "procedencia" (origen declarado de una consulta) o "contexto" (sin mención en
// el corpus, pero citado en el capítulo). Coordenadas del yacimiento antiguo o de
// la localidad moderna que lo ocupa (ToposText; Hansen y Nielsen 2004).
export const TH_KIND = {
  mencion:     { label: "Mención en una laminilla", color: C.tesalio },
  region:      { label: "Nombre de la región", color: C.tesalio },
  procedencia: { label: "Procedencia declarada de una consulta", color: C.amber },
  contexto:    { label: "Sin mención en el corpus", color: "#5b564d" },
};

export const TH_PLACES = [
  { id: "farcadon", kind: "mencion", certain: true, name: "Farcadón", greek: "Φαρκαδών", tetrada: "Histiótide",
    lon: 22.0105, lat: 39.5673, dx: 12, dy: 4, anchor: "start",
    mentions: [
      { ref: "490B", form: "εἰς Φρακαδ[όνα]", date: "s. V a.C." },
      { ref: "233B", form: "Φαρκαδόνι", date: "principios del s. IV a.C." },
      { ref: "1339A", form: "ἐν Φαρκαδόνι", date: "s. IV a.C." },
      { ref: "92A", form: "ἰς Φαρκ[αδόνα]", date: "ss. IV-III a.C." },
    ],
    note: "Es el topónimo tesalio más mencionado del corpus. Las ciudades más citadas son las de Histiótide, la región tesalia colindante con el Epiro, al oeste. Méndez Dosuna (2016: 128-129) considera, como los editores, que I.Dodone DVC 1339A y 1340A (εἶ γαοργέω … αἰ ἔστι μοι τυχαῖον) forman una sola consulta, pero la autopsia muestra que los trazos de 1340A, de menor tamaño y muy superficiales, difieren de los de 1339A: si son una misma consulta, no parece que las grabara la misma mano." },
  { id: "trica", kind: "mencion", certain: true, name: "Trica", greek: "Τρίκκα", tetrada: "Histiótide",
    lon: 21.7679, lat: 39.5550, dx: -12, dy: 4, anchor: "end",
    mentions: [
      { ref: "40B", form: "ἐς Τρίκκας", date: "principios del s. IV a.C." },
      { ref: "2784A", form: "εἰς Τρί[κκαν]", date: "segunda mitad del s. IV a.C." },
      { ref: "2786B", form: "Τρίκ(κα)", date: "segunda mitad del s. IV a.C." },
    ],
    note: "Actual Trícala, principal ciudad de Histiótide, ya mencionada por Homero (Il. II, 729) como sede de los hijos de Asclepio. En I.Dodone DVC 40B, ἐς Τρίκκας es el único testimonio seguro de ἐκ > ἐς ante consonante (§3.2.3). Según Méndez Dosuna (2018a: 280), el viaje desde Trica (ca. 180 km) o desde Eginio, la actual Kalambaka (ca. 150 km), no llevaría más de cinco días; desde Larisa o Fársalo (ca. 250 km), unos siete u ocho." },
  { id: "eginio", kind: "mencion", certain: true, name: "Eginio", greek: "Αἰγίνιον", tetrada: "Histiótide",
    lon: 21.6296, lat: 39.7053, dx: -12, dy: 4, anchor: "end",
    mentions: [{ ref: "303B", form: "ἐν Αἰγινίωι", date: "mediados del s. IV a.C." }],
    note: "Frank (2026: 269 n. 278) la cita como otra ciudad de la zona noroccidental de Tesalia, junto a Farcadón y Trica, sin precisar su emplazamiento. Se sitúa aquí en la actual Kalambaka, en Histiótide, según el cálculo de Méndez Dosuna (2018a: 280), que la cita, con Trica, como punto de partida de un viaje a Dodona de no más de cinco días (ca. 150 km). La consulta no tiene rasgos dialectales propios: su adscripción descansa solo en el topónimo." },
  { id: "tetonio", kind: "mencion", certain: false, name: "Tetonio", greek: "Θετώνιον", tetrada: "Tesaliótide",
    lon: 22.1603, lat: 39.3222, dx: -12, dy: 4, anchor: "end",
    mentions: [{ ref: "2537A", form: "Θ̣ΕΤΟΝΙΟ[- - -]", date: "segunda mitad del s. IV a.C." }],
    note: "Referencia más que probable, única ciudad de Tesaliótide con posible representación en el corpus. De Tetonio procede también IG IX2 257 (s. V a.C.), con la fórmula κε̅ν ταγᾶ κε̅ν ἀταγίαι (§6.3)." },
  { id: "feras", kind: "mencion", certain: true, name: "Feras", greek: "Φεραί", tetrada: "Pelasgiótide",
    lon: 22.7460, lat: 39.3800, dx: 12, dy: 4, anchor: "start",
    mentions: [{ ref: "2940B", form: "πὲρ πόλιος Φεραίας", date: "primera mitad del s. IV a.C." }],
    note: "Mención segura, con el adjetivo gentilicio en lugar del genitivo (§5.2); según Aston (2024: 338), la mención más antigua de un topónimo tesalio en el corpus. Fuera de las laminillas, un decreto de proxenía del koinon de los molosos (anterior al 330 a.C.) honra a Lagetas, tesalio de Feras (Cabanes y Hatzopoulos 2020: nº 32)." },
  // Acaya Ftiótide (periecia, no tétrada); coordenadas de Pleiades (540941 y 540749).
  { id: "melitea", kind: "mencion", certain: false, name: "Melitea", greek: "Μελίταια", tetrada: "Acaya Ftiótide",
    lon: 22.4567, lat: 39.0384, dx: -12, dy: 4, anchor: "end",
    mentions: [{ ref: "2024A", form: "ἐ̣κ Μελιτείας", date: "primera mitad del s. IV a.C." }],
    note: "Ciudad de la Acaya Ftiótide, la periecia que se extendía entre el Otris y el golfo Maliaco, fuera de las tétradas. En I.Dodone DVC 2024A, adscrita con reservas a Tesaliótide, Damaíneto pregunta cómo podrá ponerse a salvo Próxeno ἐκ Μελιτείας; la consulta combina rasgos tesalios con elementos ajenos al dialecto (§7.1). Melitea figura también entre los topónimos del dórico noroccidental." },
  { id: "equino", kind: "mencion", certain: false, name: "Equino", greek: "Ἐχῖνος", tetrada: "Acaya Ftiótide",
    lon: 22.7239, lat: 38.8934, dx: 12, dy: -4, anchor: "start",
    mentions: [{ ref: "345B", form: "ἐν Ἐχίνο̅ι", date: "segundo cuarto del s. V a.C." }],
    note: "Identificación discutida. Los editores de DVC la sitúan en la costa septentrional del golfo Maliaco, en la Acaya Ftiótide; Méndez Dosuna (2018b: 46 n. 147), Chapinal-Heras (2021: 181) y Frank (2026: 268 n. 272) la identifican, en cambio, con la Equino de Acarnania. La consulta no tiene rasgos dialectales propios, de modo que su adscripción al tesalio, dudosa, descansa solo en el topónimo." },
  { id: "tesalia", kind: "region", certain: false, name: "Tesalia", greek: "Θεσσαλία", tetrada: "",
    lon: 22.30, lat: 39.95, dx: 12, dy: 4, anchor: "start",
    mentions: [
      { ref: "552A", form: "ἢ Θεσσαλίαν̣", date: "mediados del s. IV a.C." },
      { ref: "3738A", form: "ἐν Θεσ[σαλί]α(ι)", date: "primera mitad del s. IV a.C." },
    ],
    note: "En I.Dodone DVC 3738A se reconstruye el nombre de Tesalia, y en 552A se lee Θεσσαλίαν, pero CIOD lo interpreta como nombre de mujer (en el contexto de una cláusula de παραμονή) y no como la región (Frank 2026: 269 n. 275); Chapinal-Heras (2021: 181) lo da con interrogante, ¿Pandosia?, y Domínguez (2018: 120 n. 98) lo restituye con Pandosia. Por eso ambas menciones se cuentan como dudosas." },
  { id: "mondaya", kind: "procedencia", certain: true, name: "Mondaya", greek: "Μονδαία", tetrada: "Perrebia",
    lon: 21.9338, lat: 39.9677, dx: -12, dy: 4, anchor: "end",
    mentions: [{ ref: "LOD 8B", form: "Μον[δ]α̣ιατᾶν τὸ κοινόν", date: "ss. III-II a.C." }],
    note: "Consulta pública del koinon de los mondayatas, el único testimonio tesalio inequívocamente posterior al s. IV a.C. Aunque Mondaya se encontraba en Perrebia, el dialecto de la consulta es el de Pelasgiótide (Méndez Dosuna 2018a: 285-286), región a la que se adscribe la inscripción." },
  { id: "larisa", kind: "contexto", certain: true, name: "Larisa", greek: "Λάρισα", tetrada: "Pelasgiótide",
    lon: 22.4191, lat: 39.6390, dx: 10, dy: 4, anchor: "start", mentions: [],
    note: "Capital de Pelasgiótide y polis tesalia más influyente, sede de los Alévadas. Una moneda de Larisa (400-340 a.C.) con el águila y el rayo y la leyenda ΕΛΛΑ podría aludir a Dodona (Aston 2024: 333-334), y en la propia Larisa se halló un decreto del koinon de los molosos que corona al demo de Larisa y a sus jueces en Dodona. No aparece como topónimo en las laminillas." },
  { id: "escotusa", kind: "contexto", certain: true, name: "Escotusa", greek: "Σκοτοῦσσα", tetrada: "Pelasgiótide",
    lon: 22.5630, lat: 39.3800, dx: -8, dy: -7, anchor: "end", mentions: [],
    note: "Según el historiador tesalio Suidas, citado por Estrabón (VII, 7, 12), la polis, el roble y el oráculo estaban originalmente en Escotusa y se trasladaron después al Epiro; Estrabón califica el relato de fantasioso (μυθώδεις)." },
  { id: "farsalo", kind: "contexto", certain: true, name: "Fársalo", greek: "Φάρσαλος", tetrada: "Tesaliótide",
    lon: 22.3833, lat: 39.2950, dx: 0, dy: 17, anchor: "middle", mentions: [],
    note: "Patria de Menón, cuya hija Ftía fue la madre de Pirro I. En Dodona se conserva una copa de bronce del s. IV a.C. dedicada por un ciudadano de Fársalo (Παναίτιος Φαρσάλιος). No aparece como topónimo en las laminillas." },
  { id: "metropolis", kind: "contexto", certain: true, name: "Metrópolis", greek: "Μητρόπολις", tetrada: "Histiótide",
    lon: 21.8390, lat: 39.3450, dx: -8, dy: 13, anchor: "end", mentions: [],
    note: "Procede de ella la convención de los Basaidas (SEG 36:548, s. III a.C.), uno de los dos únicos textos de extensión suficiente del tesalio de Histiótide antes de la publicación del corpus de Dodona (§7.2)." },
];

// Menciones por lugar (§1): Farcadón 4, Trica 3, Eginio 1, Tetonio 1, Feras 1, Melitea 1, Equino 1, [Tesalia] 2 (552A y 3738A, dudosas).
export const TOPONYMS_TES = TH_PLACES
  .filter((p) => p.kind === "mencion" || p.kind === "region")
  .map((p) => ({ name: p.kind === "region" ? `[${p.name}]` : p.name, value: p.mentions.length, tetrada: p.tetrada || "Tesalia" }));

// Rasgos de cada tétrada (§7).
export const REGION_TRAITS_TES = {
  pelasgiotis: {
    capital: "Larisa",
    inscripciones: "12",
    intro: "El corpus conserva doce inscripciones adscritas al dialecto tesalio de Pelasgiótide, dos de ellas con reservas (I.Dodone DVC 328 e I.Dodone Lhôte 34): I.Dodone DVC 2761B (s. V a.C.), 3545B (finales del s. V a.C.), 2544B (mediados del s. V a.C.), 1433A (segunda mitad del s. V a.C.), 1465A (finales del s. V a.C.), 159A (ss. V-IV a.C.), 328 (principios del s. IV a.C.), 1416A (primera mitad del s. IV a.C.), 556A y 3113A (finales del s. IV a.C.), I.Dodone Lhôte 34 (ss. V-IV a.C.) e I.Dodone Lhôte 8B (ss. III-II a.C.), esta última de Mondaya, en Perrebia, pero en dialecto de Pelasgiótide. Es la región mejor documentada del corpus, tanto en número de inscripciones como en variedad de rasgos, lo que refleja la posición de Larisa como la polis tesalia más influyente. El criterio diagnóstico principal es la combinación de la partícula modal κε con el pronombre interrogativo-indefinido κίς, frente al τίς de Tesaliótide e Histiótide: aparece con la forma simple κίνι en I.Dodone DVC 2761B, 3545B y 1433A y con la geminada κίννι en 2544B y 556A; 1416A conserva κίννι sin la partícula modal.",
    rasgos: [
      { label: "Criterio diagnóstico: κε + κίς", text: "La combinación de la partícula modal κε con el pronombre interrogativo-indefinido κίς es el marcador regional más fiable. Las formas sin geminada (κίνι) alternan con las hiperdialectales (κίννι), pero ninguna laminilla combina ambas grafías. Esta oposición κίς (Pelasgiótide) frente a τίς (Tesaliótide e Histiótide) es, junto con la partícula modal, el criterio de adscripción regional más seguro del corpus." },
      { label: "Fonética: -αι > -ει en desinencias verbales", text: "El paso -αι > -ει en las desinencias verbales está documentado en la epigrafía de Pelasgiótide (cf. las formas en -σειν de IG IX2 517). El corpus ofrece un testimonio en I.Dodone DVC 159A, que presenta ὀρύξξειν (= ático ὀρύξαι); Méndez Dosuna (2018a: 286) señala que podría tratarse también de un infinitivo de futuro, aunque la interpretación como aoristo es la más probable. Un posible segundo testimonio es ἄγο̄μει en I.Dodone Lhôte 34, interpretable como subjuntivo de presente medio-pasivo con el mismo paso (Méndez Dosuna 2024: 4.3). Méndez Dosuna (2018a: 286) apunta un tercero en γίνυτε̅ y ἄγετε̅ de I.Dodone DVC 328, que podrían reflejar la desinencia -τει con una monoptongación temprana. Ninguno de los dos testimonios es seguro: en Lhôte 34 la forma admite otras explicaciones, y en 328 la notación ⟨Ε⟩ carece de paralelos en tesalio para formas de este tipo; por ello, ambas inscripciones se adscriben a Pelasgiótide solo con reservas." },
      { label: "Fonética: ἱαρ-", text: "El corpus aporta el que es también el testimonio más antiguo del vocablo para el tesalio: ἱαροῖο en I.Dodone DVC 1465A (Pelasgiótide, finales del s. V a.C.). La concurrencia en un mismo texto de ἱαρ- y la desinencia de genitivo propia de Pelasgiótide -οιο refuerza la credibilidad dialectal del vocalismo, pues ambos rasgos son tesalios y difícilmente explicables por contaminación dórica." },
      { label: "Morfología: gen. sg. temático -οι/-οιο", text: "El genitivo singular temático en -οι/-οιο es el rasgo más específico de Pelasgiótide, frente al -ου de Tesaliótide. El corpus ofrece cuatro posibles testimonios: τοῖ ἱαροῖο τοῖ ἐμπέδοι en I.Dodone DVC 1465A (finales del s. V a.C.), τ̣οῖ κατ<ε>ιγνείτοιο y γάμοιο en 3113A (finales del s. IV a.C.), πὲρ τοῖ ἀρρωστέ̅ματος en 556A, según la lectura de Méndez Dosuna (2016: 125; 2018a: 274, n. 19), pues los editores leen τοῦ, y πὲρ το<ῖ> [ἀρ]γύρροι en I.Dodone Lhôte 8B, donde la desinencia es corrección editorial. Solo los dos primeros son, por tanto, seguros." },
      { label: "Morfología: infinitivo temático en -μεν", text: "Buck (1955: §155.1) lo recoge como característica de Pelasgiótide, y Blümel (1982: §224) lo documenta con seguridad solo en Pelasgiótide y Perrebia. En el corpus: ἐσκιχρέμεν en I.Dodone Lhôte 8B y χαλκοπο̅λε͂μεν en I.Dodone DVC 3008A. Lhôte 8B muestra otros rasgos claros de Pelasgiótide; en 3008A, sin otros rasgos regionales, la sola desinencia invita a postular también un origen pelasgiota. Si se acepta la interpretación de ἁμοῖ (rasgo 30), también I.Dodone DVC 3274A presentaría un rasgo de esta región." },
      { label: "Morfología: nom. pl. artículo οἱ", text: "La forma οἱ del artículo en nominativo plural (frente al τοί del tesalio occidental) es un rasgo diferenciador de Pelasgiótide. El único testimonio del corpus es I.Dodone DVC 556A, que presenta οἱ συγγενέες y οἱ πατέρες en las líneas 2 y 4 respectivamente." },
    ],
  },
  histiaiotis: {
    capital: "Farcadón / Trica",
    inscripciones: "9",
    intro: "El corpus conserva nueve inscripciones adscritas al dialecto tesalio de Histiótide: I.Dodone DVC 1351A (primera mitad del s. V a.C.), 2204A (finales del s. V a.C.), 2015B (primera mitad del s. IV a.C.), 191A y 3042A (mediados del s. IV a.C.), 3687A (principios del s. IV a.C.), 1988B (s. IV a.C.) y 17B y 3007A, datadas entre los ss. V y IV a.C. Como señala Méndez Dosuna (2018a: 286), son uno de los hallazgos más relevantes del corpus: la documentación de esta variedad se reducía a la convención de los Basaidas de Metrópolis (SEG 36:548, s. III a.C.) y al fragmentario acuerdo de simpoliteia entre Gonfos y Tamias (SEG 37:494, ca. 230-200 a.C.).",
    rasgos: [
      { label: "Criterio diagnóstico: κα + τίς", text: "La partícula modal κα (frente al κε de Tesaliótide y Pelasgiótide), combinada con el pronombre interrogativo-indefinido τίς (y no κίς) cuando este aparece, identifica las inscripciones de Histiótide. La combinación completa solo se documenta en I.Dodone DVC 3687A ([τί]νι κα θεοῦν). En 17B (αἰ κα μὰ ἔχο), 191A (αἴ κα διδοῖν) y 217A (πράσσοι κα) la partícula aparece sin el pronombre, y κα es un rasgo compartido con el dórico; por ello, la adscripción de 217A a Histiótide que propone Méndez Dosuna (2018a: 280, n. 33) es posible, pero no segura, y no se incluye en el recuento regional." },
      { label: "Fonética: /o/ > /e/ en sílabas finales", text: "Paso /o/ > /e/ en sílabas finales tras fonemas dentales y palatales, fenómeno desconocido en las demás regiones tesalias. Está documentado en seis inscripciones del corpus: Δουδωναίει (= ático Δωδωναίωι) en I.Dodone DVC 2204A, ἀπεδείξατε (= ático ἀπεδείξατο) en 1351A, δυνατέν en 3042A, παιδίεν en 2015B, σύμφορέν en 191A y ὕδατες en 3007A, que los editores corrigen a ὕδατος pero que no requiere enmienda si se reconoce el cambio dialectal; la autopsia de 2024 confirmó la lectura. Méndez Dosuna (2018a: 287) propone además que ὄσπερ (= ático ὥσπερ) en 1351A podría ser un caso de psilosis en palabras gramaticales, también documentado en la convención de los Basaidas." },
      { label: "Negación μά (= ático μή)", text: "La negación μά (= ático μή), rasgo propio de Histiótide frente al μεί documentado en las demás regiones tesalias, aparece con claridad en I.Dodone DVC 1988B (μὰ πρᾶξαι). También aparece en I.Dodone DVC 3205A: los editores proponen que μά equivalga aquí a la partícula coordinante ática δέ, pero es preferible la lectura como negación (Méndez Dosuna 2018a: 284; cf. §6.6). Asimismo, podría aparecer en I.Dodone DVC 17B, αἰ κα μὰ ἔχο, donde los editores la reconocen (adscripción que acepta Méndez Dosuna 2018a: 286), y en 2985A, αἰ δὲ μὰ [- - - ἄμ]εινον, pero la falta de contexto y de otros rasgos dialectales aconseja tratar estos ejemplos con reservas." },
      { label: "Morfología: optativo 3ª pl. -οιν", text: "Desinencia -οιν para el optativo de 3ª persona del plural: διδοῖν en I.Dodone DVC 191A (= ático διδοῖεν), documentada también en la convención de los Basaidas (SEG 36:548, Metrópolis, finales del s. III a.C.)." },
      { label: "Morfología: infinitivo de aoristo -σαι", text: "Desinencia -σαι del infinitivo de aoristo: πρᾶξαι en I.Dodone DVC 1988B, frente al -σειν propio de Pelasgiótide, diferencia morfológica que separa ambas variedades (Méndez Dosuna 2018a: 287)." },
    ],
  },
  thessaliotis: {
    capital: "Fársalo",
    inscripciones: "6",
    intro: "El corpus conserva seis inscripciones adscritas al dialecto tesalio de Tesaliótide: I.Dodone DVC 18B (ss. V-IV a.C.), 293B (s. V a.C.), 1134A (primera mitad del s. IV a.C.), 1446B (s. IV a.C.), 2024A (primera mitad del s. IV a.C.) y 992A (segunda mitad del s. IV a.C.), si bien las dos últimas plantean reservas. Crespo y Giannakis (2019: 54) ven en 2024A una mezcla dialectal con el dórico noroccidental por la notación ⟨Η⟩/⟨Ω⟩, argumento que pierde fuerza, pues esa grafía es compatible con el sistema tesalio (cf. §3.1.1), y la inscripción nota además con ⟨Ο⟩ y ⟨Ε⟩ las vocales largas de πο͂ς y ἀποφέρε̅ι, vacilación frecuente en los textos tesalios del corpus. Con todo, Méndez Dosuna (2018a: 274, 286, n. 56) señala otros elementos ajenos al tesalio (ἐκ ante consonante y el dativo τῶι θεῶ[ι]), de modo que la adscripción no puede darse por segura. En 992A, el único rasgo tesalio seguro es la combinación κε + τίς.",
    rasgos: [
      { label: "Criterio diagnóstico: κε + τίς", text: "El rasgo más fiable para identificar las inscripciones de esta región es la combinación de la partícula modal κε con el pronombre interrogativo-indefinido τίς. Esta combinación aparece en las seis inscripciones del grupo: τίνι κε θεῶ[ν] en I.Dodone DVC 18B, [τ]ίνι κε θεο͂[ν] en I.Dodone DVC 293B (con la restitución [τ] de los editores; con κις, la inscripción correspondería a Pelasgiótide), τίννι κε θε[οῦν] en I.Dodone DVC 1134A, τίνι κε [θεῶν] en I.Dodone DVC 1446B, τίνα κε θεῶν en I.Dodone DVC 992A y, con el pronombre y la partícula en oraciones distintas, πο͂ς κε … καὶ τίνι θεῶν en I.Dodone DVC 2024A. La forma τίννι con geminada hiperdialectal en I.Dodone DVC 1134A es significativa: muestra que el fenómeno de la geminación no etimológica documentado en Pelasgiótide (κίννι) tiene también representación en Tesaliótide." },
      { label: "Morfología: gen. sg. temático -ου", text: "I.Dodone DVC 2024A aporta el único testimonio del corpus del genitivo singular temático en -ου, rasgo diferenciador de Tesaliótide frente al -οι/-οιο de Pelasgiótide. La forma es Προξένου, en el sintagma Δαμαίνετος πὲρ Προξένου; coincide, sin embargo, con la de la koiné, por lo que su valor diagnóstico es limitado. La inscripción presenta además la apócope πέρ (cf. §4.1.1)." },
    ],
  },
};


export const VOWEL_NOTATION_TES = [
  { type: "⟨ΕΙ⟩ ⟨ΟΥ⟩ sin ⟨Η⟩ ⟨Ω⟩", n: 8, desc: "Notación tesalia estándar", color: NOTACION_COLORS.tesalia,
    dvcs: [
      { src: "DVC", id: "31A" }, { src: "DVC", id: "159A" }, { src: "DVC", id: "1134A" }, { src: "DVC", id: "1509B" },
      { src: "DVC", id: "2015B" }, { src: "DVC", id: "2247A" }, { src: "DVC", id: "3274A" }, { src: "DVC", id: "3687A" },
    ] },
  { type: "⟨ΕΙ⟩ ⟨ΟΥ⟩ + ⟨Η⟩ ⟨Ω⟩", n: 8, desc: "Mezcla de notaciones", color: NOTACION_COLORS.mezcla,
    dvcs: [
      { src: "DVC", id: "217A" }, { src: "DVC", id: "219B" }, { src: "DVC", id: "1340A" },
      { src: "DVC", id: "2204A" }, { src: "DVC", id: "3002B" }, { src: "DVC", id: "3055A" },
      { src: "DVC", id: "3113A" }, { src: "Lhôte", id: "80A" },
    ] },
  { type: "⟨Η⟩ ⟨Ω⟩ sin ⟨ΕΙ⟩ ⟨ΟΥ⟩", n: 5, desc: "Notación ática / koiné", color: NOTACION_COLORS.atica,
    dvcs: [
      { src: "DVC", id: "556A" }, { src: "DVC", id: "992A" }, { src: "DVC", id: "1416A" },
      { src: "DVC", id: "3545B" }, { src: "Lhôte", id: "8B" },
    ] },
];

export const VOWEL_EXAMPLES_TES = [
  { src: "DVC", id: "31A", cat: 1, date: "mediados del s. IV a.C.", region: "—", form: "ἔχου (= ático ἔχω)" },
  { src: "DVC", id: "159A", cat: 1, date: "ss. V-IV a.C.", region: "Pelasg.", form: "Πυρκοτέλεις (= ático -τέλης)" },
  { src: "DVC", id: "1134A", cat: 1, date: "primera mitad del s. IV a.C.", region: "Tesaliot.", form: "ὑγιεὶς (= ático ὑγιής)" },
  { src: "DVC", id: "1509B", cat: 1, date: "s. IV a.C.", region: "—", form: "ἐνγενεῖτα[ι] (= ático ἐγγένηται)" },
  { src: "DVC", id: "2015B", cat: 1, date: "primera mitad del s. IV a.C.", region: "Histiot.", form: "σουτειρί[α] (= ático σωτηρία)" },
  { src: "DVC", id: "2247A", cat: 1, date: "finales del s. IV a.C.", region: "—", form: "εἶ (= ático ἦ)" },
  { src: "DVC", id: "3274A", cat: 1, date: "primera mitad del s. IV a.C.", region: "—", form: "μα[στε]ύουμεν" },
  { src: "DVC", id: "3687A", cat: 1, date: "principios del s. IV a.C.", region: "—", form: "[τί]νι κα θεοῦν εἴει" },
  { src: "DVC", id: "217A", cat: 2, date: "mediados del s. IV a.C.", region: "Histiot.?", form: "Δου[δουναῖον], [χρημ]άτων, ἦ" },
  { src: "DVC", id: "219B", cat: 2, date: "segunda mitad del s. IV a.C.", region: "—", form: "θεοῦ, σωτηρί[ας]" },
  { src: "DVC", id: "1340A", cat: 2, date: "finales del s. V a.C.", region: "Histiot.?", form: "εἶ γ̣αοργ̣έ̣ω" },
  { src: "DVC", id: "2204A", cat: 2, date: "finales del s. V a.C.", region: "Histiot.?", form: "Δουδωναίει ἦ" },
  { src: "DVC", id: "3002B", cat: 2, date: "primera mitad del s. IV a.C.", region: "—", form: "ἦ γαοργέουμ̣[εν]"  },
  { src: "DVC", id: "3055A", cat: 2, date: "mediados del s. IV a.C.", region: "—", form: "Διώνα, ἐκ Κούας" },
  { src: "DVC", id: "3113A", cat: 2, date: "finales del s. IV a.C.", region: "Pelasg.", form: "εἶ, σούσεται, [Δι]ώνη<ι>" },
  { src: "Lhôte", id: "80A", cat: 2, date: "primera mitad del s. IV a.C.", region: "—", form: "Ἐρουτᾶι, Διώναν, ὠφέλιμον" },
  { src: "DVC", id: "556A", cat: 3, date: "finales del s. IV a.C.", region: "Pelasg.", form: "ἀρρωστήσαεν, ὀφθαλμῶν" },
  { src: "DVC", id: "992A", cat: 3, date: "segunda mitad del s. IV a.C.", region: "Tesaliot.", form: "Μέννη, θεῶν" },
  { src: "DVC", id: "1416A", cat: 3, date: "primera mitad del s. IV a.C.", region: "Pelasg.", form: "Μελανθίων" },
  { src: "DVC", id: "3545B", cat: 3, date: "finales del s. V a.C.", region: "Pelasg.", form: "[μ]αντήαν" },
  { src: "Lhôte", id: "8B", cat: 3, date: "ss. III-II a.C.", region: "Pelasg.", form: "Νάωι, Διώναι{ς}" },
];

// ── Rasgos dialectales (§3-§6), numerados en el orden del capítulo.

export const RASGOS_TES = [
  // ═══ FONOLOGÍA (1–11) ═══
  // §3.1.1  Cierre de vocales medias largas
  { id: 1, name: "Cierre de vocales medias largas", short: "Vocales medias largas",
    desc: "El rasgo más identificable del tesalio en época histórica: tras la adopción del alfabeto jónico reformado, desde la segunda mitad del s. V a.C., las vocales medias largas, cualquiera que fuera su origen, pasaron a notarse con los dígrafos ⟨ΕΙ⟩ y ⟨ΟΥ⟩, donde el ático emplea ⟨Η⟩ y ⟨Ω⟩. Excluidas las consultas en alfabeto epicórico y las que no contienen vocales medias largas, 21 inscripciones tesalias del corpus presentan alguna grafía específica: 8 solo ⟨ΕΙ⟩/⟨ΟΥ⟩, 8 combinan los dígrafos con ⟨Η⟩/⟨Ω⟩ y 5 emplean solo ⟨Η⟩/⟨Ω⟩ (de forma sistemática, en sentido estricto, solo I.Dodone DVC 992A, con reservas, y 3545B). Los dígrafos, presentes en 16 de las 21, son el sistema mayoritario, en coherencia con la epigrafía tesalia; pero ⟨Η⟩ o ⟨Ω⟩ aparecen en 13 de las 21 (el 62 %), frente a un 34 % aproximado en las inscripciones tesalias que discute Blümel (1982: 33-35). La alternancia no responde a la cronología y se documenta en las tres regiones atestiguadas. Se explica por el carácter informal y privado de las consultas, al margen de la koiné dialectal escrita que imponía la epigrafía oficial (Helly 2018: 361-362), y apoya la propuesta de Scarborough (2014) de que las vocales medias largas tesalias eran medias, /e̞ː/ y /o̞ː/, que ninguna de las dos grafías jónicas representaba con exactitud.",
    cat: "Fonología", dvcs: ["31A","159A","2204A","1134A","1509B","3002B","3274A","2015B","217A","219B","3113A","2247A","1340A","3055A", "3687A", "LOD 80A"] },
  // §3.1.2.1  -ᾱω- sin contraer
  { id: 2, name: "Secuencia -ᾱω- sin contraer", short: "-ᾱω- sin contraer",
    desc: "El tesalio vacila en el tratamiento de -ᾱω-: la epigrafía conoce tanto la secuencia inalterada (κοινάουν, IG IX2 461a; Ἡρακλειστάουν, I.Atrax 78) como la contracta (τοῦν πολίταν, SEG 56:363; τᾶν Φαλανναιᾶν, IG IX2 1228), y el genitivo plural del artículo femenino es siempre contracto (τᾶν), como en beocio. En el corpus predomina la secuencia sin contraer, en cuatro de las cinco inscripciones con formas pertinentes: πὲρ τᾶν κοράο̅ν τᾶν μειόνο̅ν en I.Dodone DVC 1351A (Histiótide, primera mitad del s. V a.C.), πὲρ τᾶ(ν) κοράο̅ν en 2587B (finales del s. V a.C.), [κορ]άουν en 3113A (Pelasgiótide, finales del s. IV a.C.), con la notación ⟨ΟΥ⟩, y πὲρ το̅ν Ϝοικιατάο̅ν en 2000B (mediados del s. V a.C.), que Méndez Dosuna (2018a: 282) no descarta que sea beocia, aunque ϝοικιάταις en IG IX2 257 (Tetonio) refuerza la hipótesis tesalia. Solo I.Dodone Lhôte 8B (ss. III-II a.C.) presenta la forma contracta Μον[δ]α̣ιατᾶν. La diferencia con la epigrafía tesalia podría deberse a la mayor antigüedad de las laminillas (el testimonio contracto es precisamente el más reciente), aunque no cabe descartar el registro informal ni el sesgo de un material tan escaso. El artículo τᾶν es contracto ya en 1351A, indicio de que la contracción afectó antes a las formas gramaticalizadas que a los sustantivos.",
    cat: "Fonología", dvcs: ["1351A","2587B","2000B","3113A"] },
  // §3.1.2.2  -αε- > ᾱ
  { id: 3, name: "Contracción de -αε- en ᾱ", short: "-αε- > ᾱ",
    desc: "La secuencia -αε- contrae en η en griego occidental (dórico ἐπερωτῆι, ἐπικοινῆται), mientras que en tesalio, como en jónico-ático y en los demás dialectos eolios, da ᾱ (νικᾶν, IG IX2 234; ἐρωτᾶι, IG IX2 517). Dentro del corpus, el rasgo tiene valor diagnóstico frente al dórico local, aunque no frente a la koiné, que comparte ἐρωτᾶι. Los cuatro testimonios presentan la forma contracta: ἐρωτᾶι en I.Dodone DVC 556A (Pelasgiótide, finales del s. IV a.C.) y 992A (Tesaliótide, segunda mitad del s. IV a.C.), Ἐρουτᾶι en I.Dodone Lhôte 80A (ca. 375 a.C.), que combina la contracción con la notación ⟨ΟΥ⟩, y ἐπικοινᾶται en I.Dodone Lhôte 8B (Pelasgiótide, ss. III-II a.C.). Como recuerda Méndez Dosuna (2018a: 282), para Pelasgiótide se ha postulado un presente atemático *ἐρώταμι (3ª sg. ἐρώτᾰι), de modo que el ἐρωτᾶι de 556A podría no reflejar contracción; pero ἐρωτᾶι aparece también en 992A, de Tesaliótide (con las reservas que plantea su adscripción), y la convergencia de ambos datos indica que la contracción es el mecanismo regular del tesalio.",
    cat: "Fonología", dvcs: ["556A","992A","LOD 8B","LOD 80A"] },
  // §3.1.3  Síncopa de vocales átonas
  { id: 4, name: "Síncopa de vocales átonas", short: "Síncopa",
    desc: "La síncopa de vocales átonas es uno de los rasgos más característicos del tesalio, invocado a menudo como indicio de un acento intensivo inicial. El testimonio más claro es Ἄπλον (= ático Ἄπολλον) en I.Dodone DVC 224A (mediados del s. IV a.C.), consulta que combina rasgos tesalios con otros de la koiné: la forma sincopada del teónimo es una de las isoglosas tesalias más reconocibles (Ἄπλουνι, IG IX2 1025.5, Feras; Ἄπλουνος, SEG 56:635.31, Larisa). Los editores restituyen también Ἄπλο̅[νι] en I.Dodone DVC 2726A (segunda mitad del s. V a.C.), pero la secuencia visible admite igualmente una forma de ἁπλόος, de modo que esta consulta no se cuenta entre las tesalias. Otros dos posibles testimonios son ἄσστα (= ἄριστα) en 3921 (primera mitad del s. IV a.C.), con pérdida de /i/ y asimilación de /r/ a la sibilante, y ἄστα̣ en 4128B (primera mitad del s. IV a.C.), con sibilante simple, aunque el estado fragmentario de esta última impide una adscripción segura. La interpretación se apoya en los numerosos antropónimos tesalios en ἀσ(σ)το- (< ἀριστο-), como Ἀστόμαχος o Ἀσστοκράτειος; la forma plena ἄριστα de 992A (Tesaliótide) refleja la misma coexistencia de variantes que la epigrafía tesalia.",
    cat: "Fonología", dvcs: ["224A","3921","4128B"] }, // 2726A sale del recuento (fila 150)
  // §3.2.1.1  Nasal geminada procedente de *-ns-
  { id: 5, name: "Nasal geminada procedente de *-ns-", short: "Geminada *-ns-",
    desc: "El tesalio, como el lesbio, gemina la sonante en los grupos heredados de sonante y silbante (*-ns- > -νν-), donde los demás dialectos conocen el primer alargamiento compensatorio; la epigrafía lo documenta también con otras sonantes (ἐξαποστελλάντουν, SEG 57:510; ἐμμί, SEG 64:499). El corpus ofrece un único ejemplo: el infinitivo de aoristo ὑγιάνναι (= ático ὑγιᾶναι < *ὑγιάν-σαι) en I.Dodone DVC 103A (finales del s. V a.C.). La escasez no sorprende, pues las raíces susceptibles de este tratamiento son pocas: en esencia, infinitivos de aoristo sigmático de temas en nasal, algunos verbos como φθέρρω y formas nominales como σελάννα.",
    cat: "Fonología", dvcs: ["103A"] },
  // §3.2.1.2  Conservación del grupo secundario -ns- en posición interior
  { id: 6, name: "Conservación del grupo secundario -ns- interior", short: "-νσ- secundario conservado",
    desc: "A diferencia del grupo heredado (rasgo 5), el grupo -νσ- secundario en posición interior se mantiene en tesalio, frente al lesbio, que desarrolla un diptongo, y al beocio, que alarga la vocal precedente. El corpus ofrece tres testimonios, todos participios femeninos de presente: [θ]εραπεύονσ̣αν en I.Dodone DVC 3113A (Pelasgiótide, finales del s. IV a.C.), de lectura segura; […]ένσα en 1134A (primera mitad del s. IV a.C.), que los editores restituyen [ἀν(α)τιθ]ένσα y Méndez Dosuna (2018a: 281) propone, con dudas, [ὀντιθ]ένσα; y [θυό]νσα(ι) en 1909B (s. IV a.C.), de raíz restituida. Que todos procedan de participios no es casual, pues es en ese paradigma donde el grupo secundario es más productivo. El tercer tratamiento tesalio, la simplificación sin alargamiento de -νσ- final (τὸς ταγός, SEG 56:638), no está atestiguado en Dodona.",
    cat: "Fonología", dvcs: ["3113A","1134A","1909B"] },
  // §3.2.2  Geminación de nasales no etimológicas
  { id: 7, name: "Geminación de nasales no etimológicas (κίννι, τίννι, ἔννεκα)", short: "νν no etimológica",
    desc: "La existencia de geminadas regulares (ἔμμεν, μειννός) generó en tesalio un patrón oposicional /VRR/ frente al /VːR/ de la koiné, que condujo a la creación «mecánica» de geminadas no etimológicas (García Ramón 2018: 52-53). En el corpus se manifiesta en el dativo del interrogativo-indefinido: κίννι en Pelasgiótide (I.Dodone DVC 2544B, mediados del s. V a.C.; 1416A, primera mitad del s. IV a.C.; 556A, finales del s. IV a.C.) y τίννι en Tesaliótide (1134A). Las formas simples son más del doble de frecuentes, nueve frente a cuatro: κίνι (1433A, 2761B, 3545B), τίνι (18B, 1446B, 2024A y 219B; 3687A en Histiótide) y el acusativo τίνα (992A); ninguna laminilla alterna ambas grafías. A ellas se suma ἔννεκα en 150A (ca. 450 a.C.), en alfabeto tesalio según los editores, el testimonio tesalio más antiguo de la forma, anterior a la inscripción de Larisa del s. II a.C. (SEG 57:510) y al testimonio lesbio de época imperial. Estas fechas, entre mediados del s. V y finales del s. IV a.C., son muy anteriores al período de revitalización gráfica en que García Ramón (2007a) sitúa el hiperdialectalismo: las laminillas no contradicen su propuesta, sino que la complementan al mostrar el fenómeno vivo ya entre consultantes privados.",
    cat: "Fonología", dvcs: ["150A","2544B","1416A","556A","1134A"] },
  // §3.2.3  ἐκ > ἐς ante consonante
  { id: 8, name: "ἐκ > ἐς ante consonante", short: "ἐκ > ἐς",
    desc: "El ático emplea ἐκ ante consonante, mientras que el tesalio, como el beocio, emplea ἐς (ἐς τοῖ νόμοι, SEG 31:577; ἐς πόλιος, SEG 43:311). El único testimonio seguro del corpus es ἐς Τρίκκας en I.Dodone DVC 40B (principios del s. IV a.C.), de texto fragmentario. Dos inscripciones tesalias presentan, en cambio, ἐκ ante consonante: ἐκ Μελιτείας en 2024A (primera mitad del s. IV a.C.) y ἐκ Κούας en 3055A (mediados del s. IV a.C.), ambas con una mezcla de rasgos tesalios y no tesalios que impide saber si ἐκ refleja el dialecto o la interferencia del dórico noroccidental del entorno de Dodona. Con tan pocos datos, y todos parciales o ambiguos, no es posible valorar el alcance del rasgo.",
    cat: "Fonología", dvcs: ["40B"] },
  // §3.2.4  *dj > ζ
  { id: 9, name: "*dj > ζ (Ζεύς)", short: "ζ < *dj",
    desc: "Buck (1955: §85) incluía el tesalio entre los dialectos con ⟨ΔΔ⟩, como el beocio, pero su único ejemplo, ἐξξανακά(δ)δε̅ν (IG IX2 257, Tetonio), procede de una inscripción de dialectalidad cuestionable. Blümel (1982: 118-124) documenta ⟨ΣΣ⟩ en verbos en -ζω de Pelasgiótide (ἐνεφανίσσοεν, IG IX2 517), junto al resultado habitual ⟨Ζ⟩ (Θεόζοτος), ⟨ΖΔ⟩ en una inscripción de Histiótide (δικαζδέτου, SEG 37:494) y ⟨ΡΔ⟩ en antropónimos de Fársalo y Metrópolis: cada región parece haber conocido una solución distinta. El corpus aporta Ζεύς en I.Dodone DVC 2940B (¿Pelasgiótide?, primera mitad del s. IV a.C.) y Ζεῦ̣ Δ[ωδωναῖε] en 3113A (Pelasgiótide, finales del s. IV a.C.), coherentes con el ⟨Ζ⟩ mayoritario de Pelasgiótide. Se trata, sin embargo, del mismo teónimo, en posición inicial y en fórmulas de invocación donde no cabe excluir la influencia del dialecto del santuario, y el corpus no ofrece ejemplos de ⟨ΔΔ⟩, ⟨ΣΣ⟩ o ⟨ΖΔ⟩ ni testimonios de Tesaliótide o Histiótide.",
    cat: "Fonología", dvcs: ["2940B","3113A"] },
  // §3.2.5  Degeminación de -σσ- reciente
  { id: 10, name: "Degeminación de -σσ- reciente", short: "Degeminación -σσ-",
    desc: "En I.Dodone DVC 1134A (Tesaliótide, primera mitad del s. IV a.C.), la forma πράσ(σ)ο[νσα], escrita con una sola sigma, contrasta con la geminada de τίννι en la línea siguiente. Méndez Dosuna (2018a: 281) sugiere que podría tratarse de la degeminación de -σσ- reciente tras vocal larga que García Ramón (2007b: 98) postula para el tesalio. La explicación es atractiva, pero descansa en un único ejemplo y en una grafía que puede deberse a un simple descuido, frecuente en un registro informal (de hecho, los editores suplen la segunda sigma), por lo que el rasgo debe considerarse no atestiguado con seguridad en el corpus.",
    cat: "Fonología", dvcs: ["1134A"] },
  // §3.3.1  ἱαρός / ἱερός
  { id: 11, name: "ἱαρός / ἱερός", short: "ἱαρ-",
    desc: "El griego occidental, el beocio y el tesalio comparten ἱαρός, frente a ἱερός del ático, el jónico y el arcado-chipriota, e ἱρός/ἶρος del lesbio y el jónico oriental. Blümel (1982: 51) consideró ἱερός la forma tesalia genuina y atribuyó el aislado ἱαρουτοῖς (IG IX2 461b.37, Cranón) al influjo noroccidental, pero hoy se conocen tres testimonios dialectales con ἱαρ- (ἱαρουτοῖς; ἱαρώτα, I. Vallée Enipeus 73.7, Fársalo, s. IV a.C.; Ἀγχιάρος, SEG 51:711.68, Cranón), y Méndez Dosuna (2018a: 282-283) admite que ἱαρο- parece genuinamente tesalio. El corpus aporta el testimonio más antiguo: ἱαροῖο en I.Dodone DVC 1465A (Pelasgiótide, finales del s. V a.C.), con la desinencia -οιο propia de Pelasgiótide. La misma inscripción tiene θαραπεύο̅, con un cambio ε > α que Helly (2018: 367) sitúa en el occidente de Tesalia, pero Méndez Dosuna advierte que ambos vocalismos responden a procesos independientes; de hecho, 3113A conserva [θ]εραπεύονσ̣αν.",
    cat: "Fonología", dvcs: ["1465A"] },
  // ═══ MORFOLOGÍA (12–20) ═══
  // §4.1.1  Apócope: περί > πέρ
  { id: 12, name: "Apócope de preposiciones: περί > πέρ", short: "Apócope πέρ",
    desc: "El tesalio presenta el sistema de apócope preposicional más amplio del griego antiguo: junto a ἀν y πάρ, comunes a casi todos los dialectos no jónico-áticos, y κάτ y πότ, compartidas con el griego occidental y el beocio, las formas πέρ y, sobre todo, ἀπ, ἐπ y ὐπ son privativamente tesalias, con la única excepción de πέρ en délfico y eleo. En las consultas tesalias solo está atestiguada la apócope de περί, en 17 inscripciones de diferentes épocas y regiones, desde I.Dodone DVC 948A (primera mitad del s. V a.C.) hasta I.Dodone Lhôte 8B (ss. III-II a.C.); entre ellas, 2103A (περ᾽ ἐφόδου), que solo el alfabeto tesalio identificado en la autopsia permite adscribir a este dialecto, y 3007A, con la transposición ΠΡΕ. No se cuentan las consultas que, pese a la adscripción tesalia de los editores, solo presentan la apócope (I.Dodone DVC 32B, 2132A, 2653A, 3688A y 1352A e I.Dodone Lhôte 80B), ni 1060A, contada con el beocio. La forma plena περί aparece en I.Dodone DVC 103A y 934A y convive con πέρ en 3113A, donde la forma plena de la tercera línea podría deberse a la koiné: su redactor se debate entre el dialecto y la koiné, como muestra también su vacilación en la notación de las vocales largas. En cuanto a κατά, la lectura κα(μ)μ[α]ρτυρεύσε̅ que Méndez Dosuna (2016: 133) propone para I.Dodone DVC 2254 exige un proceso καταμ- > καμμα- no documentado en la epigrafía tesalia.",
    cat: "Morfología", dvcs: ["948A","2000B","1351A","3259A","1433A","307A","2103A","2587B","3007A","3150A","328","2024A","2940B","3192A","3113A","556A","LOD 8B"] },
  // §4.1.2  Preposición ὀν-
  { id: 13, name: "Preposición ὀν- (= ἀνά)", short: "ὀν- = ἀνά",
    desc: "Como preverbio y preposición, el tesalio emplea ὀν- en lugar de ἀν- (ὀγγράψαντας, IG IX2 517; ὀνεθείκαεν, I.Atrax 108). El corpus ofrece dos posibles testimonios: ὀνέθεσα en I.Dodone DVC 4119B (primera mitad del s. IV a.C.), cuya lectura cuestiona Méndez Dosuna (2018a: 282), pues la forma tesalia esperable es ὀνέθεικα; y, más probable, 336A (segunda mitad del s. IV a.C.), εἶ οἰκο(νο)μίξο̅μεν τὸ λειτορεῖον;, cuya adscripción tesalia garantiza el hápax λειτορεῖον. Allí Méndez Dosuna (2016: 124-125; 2018a: 282) rechaza la interpretación de los editores y lee ὀ⟨γ⟩κομίξο̅μεν (= ático ἀνακομίσωμεν), con una gamma incompleta. Ambos testimonios merecen reservas, pero resulta significativo que la forma plena ἀνά no aparezca en ninguna consulta tesalia, en consonancia con la epigrafía dialectal, donde ὀν- es sistemático (aunque ἀνα- se documenta bajo el influjo de la koiné, como en ἀναγκασέτει, SEG 64:501).",
    cat: "Morfología", dvcs: ["4119B","336A"] },
  // §4.2.1  Desinencia -μεν (1ª pl.)
  { id: 14, name: "1ª persona pl. en -μεν", short: "1ª pl. -μεν",
    desc: "Frente a -μες del griego occidental, los dialectos orientales y eolios emplean -μεν en la 1ª persona del plural (ἐπινοείσουμεν, IG IX2 517; ἐκρίνναμεν, SEG 43:311). El corpus ofrece tres testimonios: I.Dodone DVC 336A (segunda mitad del s. IV a.C.), con una 1ª pl. en -μεν cualquiera que sea la lectura adoptada; μα[στε]ύουμεν en 3274A (primera mitad del s. IV a.C.), con la notación ⟨ΟΥ⟩; y ἦ γαοργέουμ̣[εν] en 3002B (primera mitad del s. IV a.C.). Como -μεν es común a varios dialectos, su valor diagnóstico depende de otros rasgos tesalios de la misma inscripción: el léxico (λειτορεῖον) y ὀν- en 336A, la notación ⟨ΟΥ⟩ en 3274A y 3002B. No se cuenta 4162B, cuya desinencia -μεν, compartida con el jónico-ático, es su único rasgo dialectal.",
    cat: "Morfología", dvcs: ["336A","3274A","3002B"] },
  // §4.2.2  Desinencia -εν (3ª pl. aor.)
  { id: 15, name: "-εν por -ν en 3ª pl. aoristo", short: "3ª pl. aor. -εν",
    desc: "La 3ª persona del plural del aoristo presenta en tesalio la desinencia secundaria -εν en lugar del -ν resultante de *-ντ. El dossier epigráfico (Morpurgo Davies 1965: 237-238; Blümel 1982: 195-198; García Ramón 2008: 197) reúne doce ejemplos, como ὀνεθείκαεν (IG IX2 244.4; Fársalo, s. IV a.C.), junto a una variante -ιεν restringida a Pelasgiótide (ἐδώκαιεν, SEG 23:422.3, Feras; ἐστάσαιεν, IGC 9, 1.32, Larisa). El único testimonio del corpus es ἀρρωστήσαεν en I.Dodone DVC 556A (Pelasgiótide, finales del s. IV a.C.), uno de los escasísimos aoristos sigmáticos con -εν del tesalio, cuyo único paralelo directo es ἐσστάσαεν en I.Atrax 102 (Pelasgiótide, primera mitad del s. IV a.C.). Procede de la región en que conviven -εν e -ιεν, pero un único ejemplo no permite precisar la distribución de ambas variantes.",
    cat: "Morfología", dvcs: ["556A"] },
  // §4.2.3  Infinitivos temáticos en -μεν
  { id: 16, name: "Infinitivos temáticos en -μεν", short: "Inf. -μεν",
    desc: "La extensión del infinitivo atemático -μεν a los verbos temáticos, característica de los dialectos eolios, tiene en tesalio una distribución restringida: Buck (1955: §155.1) la recoge como rasgo de Pelasgiótide (κοινανεῖμεν, SEG 43:310; γαοργεῖμεν, IG IX2 1229) y Blümel (1982: §224) la documenta con seguridad solo en Pelasgiótide y Perrebia. El corpus ofrece dos formas: ἐσκιχρέμεν en I.Dodone Lhôte 8B (Pelasgiótide, ss. III-II a.C.) y χαλκοπο̅λε͂μεν en I.Dodone DVC 3008A (ss. V-IV a.C.; primera mitad del s. IV a.C. según Candel Lozano 2026: 101-102), infinitivo del hápax χαλκοπωλέω, con la vocal larga de contracción que exige un infinitivo tesalio de verbo contracto (Méndez Dosuna 2018a: 283). Como el beocio también extiende -μεν a los contractos, la adscripción tesalia de 3008A se apoya en λιμήν con el sentido de «mercado» (rasgo 25) y en el vocalismo de τυχαῖα (no beocio *τυχῆα), leído en una segunda línea inédita identificada en la autopsia (rasgo 31). Sin otros rasgos regionales, la sola desinencia invita a postular también un origen pelasgiota para 3008A.",
    cat: "Morfología", dvcs: ["3008A","LOD 8B"] },
  // §4.2.4  Futuros y aoristos en -ξ-
  { id: 17, name: "Futuros y aoristos en -ξ- (verbos en -άζω/-ίζω)", short: "-ξ- en fut. y aor.",
    desc: "La extensión de -ξ- al futuro y al aoristo de los verbos en -άζω/-ίζω es característica del griego occidental y, junto a él, del tesalio, el beocio (en parte) y el arcadio. Los testimonios tesalios más sólidos proceden de Pelasgiótide y datan del s. III a.C. en adelante (ψαφιξαμένας, IG IX2 517; φρο[ν]τίξειν, SEG 41:510; ἐψαφίξατο, SEG 31:572 y SEG 43:311). Blümel (1982: §203) duda de ἐργάξατο (IG IX2 602 y 1027b) por razones paleográficas y sugiere que la forma genuinamente tesalia sería -σσ-, con una -ξ- tardía de origen noroccidental; García Ramón (2007b: 96-97) concluye, en cambio, que el rasgo era general en Tesalia. El corpus ofrece dos testimonios de lectura segura: el infinitivo de futuro δικάξεσθαι en I.Dodone DVC 224A (mediados del s. IV a.C.), consulta con rasgos tesalios (Ἄπλον) y de koiné que encaja con la hipótesis de Blümel, y οἰκο(νο)μίξο̅μεν / ὀ⟨γ⟩κομίξο̅μεν (futuro o subjuntivo de aoristo) en 336A (segunda mitad del s. IV a.C.), de adscripción tesalia sólida y sin contaminación aparente, más difícil de explicar desde esa hipótesis, salvo que proceda de Pelasgiótide. Con dos testimonios de naturaleza tan distinta, el corpus no permite decidir si el rasgo se debe a la influencia de la koiné o tiene un origen genuinamente tesalio.",
    cat: "Morfología", dvcs: ["224A","336A"] },
  // §4.2.5  γίνυμαι por γίγνομαι
  { id: 18, name: "γίνυμαι por γίγνομαι", short: "γίνυμαι",
    desc: "El verbo γίγνομαι presenta en tesalio y en beocio una flexión atemática, γίνυμαι, que la interpretación tradicional explica como neoformación analógica sobre los presentes en -νυ- y una propuesta más reciente relaciona con el cierre de /o/ en /u/ ([ˈginumai], reanalizado como γί-νυ-μαι). En Tesalia se documenta desde el s. III a.C. (γινύειτει, IG IX2 517; γινυμέναι, Metrópolis) hasta el s. I a.C. El corpus ofrece siete inscripciones con formas de este paradigma, además de la beocia I.Dodone DVC 313A (γινύο[ι]το): [γ]ίνυται en 162B (finales del s. V a.C.), γίνυται en 3673B (s. IV a.C.), γίνυτα(ι) en 38A (primer cuarto del s. IV a.C.), γίνυτ[ο] en 1676A (s. IV a.C.), γίνυτο en 1060A (mediados del s. V a.C.), el aoristo γένυτ[ο] en 1649A (ss. V-IV a.C.) y γίνυτε̅ en 328 (principios del s. IV a.C.). Para ninguna puede descartarse un origen beocio (Méndez Dosuna 2018a: 284): en 38A, 162B y 3673B la desinencia -ται conserva αι, que en beocio se nota ⟨Η⟩ una vez adoptado el alfabeto jonio, lo que apunta al tesalio sin excluir el beocio, y los optativos de 1060A, 1649A y 1676A, que los editores atribuyen a la monoptongación beocia οι > υ, tampoco permiten decidir. El rasgo tiene, pues, un valor diagnóstico limitado, y solo la concurrencia con rasgos privativos decide, como la apócope πέρ en 328. Así, 38A y 162B se cuentan como dobles con el tesalio; 1060A (que también tiene πέρ, pero cuyo γίνυτο admite la interpretación beocia), 1649A, 1676A y 3673B, como dobles con el beocio; y 328, solo con el tesalio.",
    cat: "Morfología", dvcs: ["162B","3673B","38A","1676A","1060A","1649A","328"] },
  // §4.2.6  ἔνθι (3ª pl. de εἰμί)
  { id: 19, name: "3ª pl. ἔνθι (= ático εἰσί)", short: "ἔνθι = εἰσί",
    desc: "El tesalio, como el beocio, presenta θ en las desinencias de 3ª persona del plural activa, por influjo analógico de -μεθα y -σθε (Buck 1955: §139.2): κατοικείουνθι (IG IX2 514, Larisa). La forma ἔνθι (= ático εἰσί) está atestiguada en dos inscripciones de Larisa (IGC 9, 1; SEG 64:501). El corpus ofrece un único testimonio, I.Dodone DVC 3809B (primera mitad del s. IV a.C.), ἔνθι· θεός, prácticamente ininteligible. Los editores lo entienden como respuesta del oráculo («es posible; dios») a la pregunta de 3807A, pero Martín González (2021: 220-221) objeta que esa pregunta («a qué dios hacer sacrificios y honrar») no admite tal respuesta; si el texto está completo, podría tratarse de una pregunta formulada como afirmación, con la invocación al dios al final. La desinencia -νθι es común al tesalio y al beocio, pero como ἔνθι solo está documentada en inscripciones tesalias, la adscripción tesalia es la hipótesis más fundada.",
    cat: "Morfología", dvcs: ["3809B"] },
  // §4.3.1  Ordinal πρῶτος
  { id: 20, name: "Ordinal πρῶτος (πρό̅τας)", short: "πρό̅τας",
    desc: "El tesalio, junto con el lesbio y el jónico-ático, presenta πρῶτος para el ordinal «primero», frente al πρᾶτος del beocio y los dialectos occidentales. El corpus ofrece un único testimonio: I.Dodone DVC 1351A (Histiótide, primera mitad del s. V a.C.), con la forma πρό̅τας en el sintagma ὄ̅σπερ πρό̅τας ἀπεδείξατε.",
    cat: "Morfología", dvcs: ["1351A"] },
  // ═══ SINTAXIS (21–23) ═══
  // §5.1  Pronombre interrogativo-indefinido como relativo indefinido
  { id: 21, name: "Pron. interr.-indef. como relativo indef.", short: "Interr. → rel. indef.",
    desc: "En tesalio, el pronombre interrogativo-indefinido τίς/κίς puede asumir la función del relativo indefinido ὅστις, por lo general junto a la partícula modal: κίς κε γινύειτει (= ático ὅστις ἂν γίγνηται) en IG IX2 517 (Buck 1955: §131), mientras que en los demás dialectos este uso es tardío y esporádico. El corpus ofrece un ejemplo en I.Dodone DVC 556A (Pelasgiótide, finales del s. IV a.C.): αἰ ἔστι κίννι κε θεῶν δρᾶντες τοῖς λοιποῖς στάμα γενηθείε̅ καὶ ὑγίεια, donde, según Méndez Dosuna (2018a: 284), ἔστι κίννι κε equivale al ático ἔστιν ὅτῳ ἄν: «si ofreciendo un sacrificio a algún dios».",
    cat: "Sintaxis", dvcs: ["556A"] },
  // §5.2  Adjetivo gentilicio en lugar del genitivo
  { id: 22, name: "Adjetivo gentilicio en lugar de genitivo", short: "Adj. gentilicio",
    desc: "El uso del adjetivo gentilicio concertado en lugar del genitivo es característico de los tres dialectos eolios, tanto en patronímicos (Ἐπικράτεις Ἐπικρατίδαιος, IG IX2 517) como en la designación de territorios cívicos (ἡ Φεραική, ἡ Σκοτουσσαία, ἡ Φαρσαλική; Helly 1995: 161). El corpus ofrece un único testimonio: πὲρ πόλιος Φεραίας (= ático περὶ τῆς πόλεως Φεραίων) en I.Dodone DVC 2940B (primera mitad del s. IV a.C.), con el adjetivo en lugar del genitivo del nombre de la ciudad de Feras.",
    cat: "Sintaxis", dvcs: ["2940B"] },
  // §5.3  αἰ como introductor de interrogativas indirectas totales
  { id: 23, name: "αἰ en interrogativas indirectas totales", short: "αἰ interr. indir.",
    desc: "Nieto Izquierdo (2019) ha mostrado que en las laminillas ἦ introduce interrogativas directas e indirectas en el dominio dórico, mientras que αἰ solo introduce interrogativas indirectas totales en las consultas tesalias; el αἰ dórico y el εἰ ático son, en cambio, prótasis de condicionales con la apódosis omitida. En las consultas tesalias, εἶ (= ático ἦ) parece reservarse para las interrogativas directas (I.Dodone DVC 336A, 1340A, 2247A y 3113A); en 1340A conviven ambos: εἶ γαοργέω, αἰ ἔστι μοι τυχαῖον. El corpus ofrece tres testimonios seguros, todos con otros marcadores tesalios: I.Dodone Lhôte 8B (ss. III-II a.C.), con el verbo introductor ἐπικοινᾶται y el infinitivo ἐσκιχρέμεν; I.Dodone Lhôte 80A (ca. 375 a.C.), Ἐρουτᾶι Κλεούτας … αἰ ἐστι αὐτο͂ προβατεύοντι ὄναιον καὶ ὠφέλιμον, que I.Dodone Lhôte entendía como interrogativa directa; e I.Dodone DVC 948A (primera mitad del s. V a.C.), πὲρ τᾶς γυναικὸς αἰ τυν(χάνοιμι), con el verbo sobrentendido y la apócope πέρ. Se excluyen 3479A, que Nieto Izquierdo incluye por el antropónimo Πορτῖνος, pero cuyo futuro [πρα]ξοῦμες, con -μες, es dórico (rasgo 14), y 1352A, de estructura paralela a la de 948A, pero sin otro rasgo tesalio que la apócope. El rasgo no cuenta por ahora con paralelos en la epigrafía de Tesalia.",
    cat: "Sintaxis", dvcs: ["LOD 8B","LOD 80A","948A"] },
  // ═══ VOCABULARIO (24–31) ═══
  // §6.1  τᾶμον
  { id: 24, name: "τᾶμον (adverbio «en el momento presente»)", short: "τᾶμον",
    desc: "El adverbio τᾶμον «en el momento presente» es exclusivo del tesalio. Se conocía por cuatro testimonios en dos inscripciones de Larisa: en IG IX2 517 (214 a.C.) aparece sustantivado (τὸ τᾶμον) y en SEG 64:501 (219 a.C.), tres veces (τὰς τᾶμον ἐνεσπορμένας, τὸν τᾶμον ἐτταμένος, τὸς τᾶμον ἔχοντας). El corpus ofrece dos testimonios anteriores: I.Dodone DVC 75 (ss. V-IV a.C.), ὅπερ τᾶμον, y 31A (mediados del s. IV a.C.), ἁ ἐπιτροπεία τὰν ἔχου τᾶμον Λυκκίδας («la tutela que ahora tengo yo, Lícidas»). En Dodona τᾶμον complementa a otro término, pero nunca va precedido de artículo, lo que sería compatible con la conservación de su valor adverbial originario: Beekes (2010: s.v. τῆμος) lo relaciona con el épico τῆμος (dór. τᾶμος), del que sería una nominalización (τό + τᾶμος). Las laminillas documentarían así la fase más antigua del proceso; en SEG 64:501, en posición atributiva entre artículo y participio, parece funcionar aún como modificador adverbial, de modo que solo IG IX2 517 ofrecería una sustantivación en sentido estricto.",
    cat: "Vocabulario", dvcs: ["75","31A"] },
  // §6.2  λιμήν
  { id: 25, name: "λιμήν («mercado», no «puerto»)", short: "λιμήν",
    desc: "En tesalio y en chipriota, λιμήν tiene el valor especializado de «mercado, plaza de mercado», y no de «puerto»: es, en la tipología de García Ramón (2018: 58-60), un término compartido con otros dialectos, pero con un valor semántico diferenciado. Está atestiguado en IG IX2 517 (ἐν τὸν λιμένα) y en Dión Crisóstomo: οἱονεὶ τὴν ἀγορὰν ἐκάλει λιμένα, Θετταλῶν ἀκούσας. El corpus ofrece un único testimonio: ἐλ λιμένι χαλκοπο̅λε͂μεν | τυχαῖα; en I.Dodone DVC 3008A, consulta sobre si «es propicio ejercer el comercio del bronce en el mercado». La adscripción tesalia descansa en la convergencia de λιμήν, del infinitivo en -μεν (rasgo 16) y del vocalismo de τυχαῖα, leído en una segunda línea inédita identificada en la autopsia (rasgo 31). El testimonio adelanta este uso dialectal a una fecha anterior a la de los testimonios disponibles y a la de Dión Crisóstomo.",
    cat: "Vocabulario", dvcs: ["3008A"] },
  // §6.3  ταγά
  { id: 26, name: "ταγά (cargo o período del ταγός)", short: "ταγά",
    desc: "El sustantivo ταγά designa el cargo o el período de ejercicio del ταγός, la magistratura más característica de Tesalia. Aparece en la fórmula κε̅ν ταγᾶ κε̅ν ἀταγίαι (= ático ἐν πολέμῳ καὶ εἰρήνῃ) de IG IX2 257 (Tetonio, s. V a.C.), aunque Colvin (1999: 289) lo deriva de τάσσω («en tiempo de guerra»), y reaparece en boca de la espartana Lampito (Ar. Lys. 105, ἐκ τᾶς ταγᾶς), de modo que no era exclusivo del tesalio. El único testimonio del corpus es I.Dodone DVC 3150A (s. IV a.C.), [π]ὲρ : ταγ̣ᾶς. Los editores la consideran laconia o tesalia, pero la combinación de ambos elementos permite decidir: la apócope πέρ excluye el laconio, que además no está atestiguado en el corpus, y ταγά, sin testimonios en eleo ni en délfico, excluye los dos únicos dialectos que comparten πέρ con el tesalio. La laminilla puede adscribirse al tesalio, aunque su estado fragmentario no permite ir más allá.",
    cat: "Vocabulario", dvcs: ["3150A"] },
  // §6.4  κατίγνειτος
  { id: 27, name: "κατίγνειτος («hermano», arcaísmo léxico)", short: "κατίγνειτος",
    desc: "Arcaísmo léxico tesalio, paralelo al homérico κασίγνητος «hermano», bien atestiguado en textos no poéticos (κατιγνείτοιο, IG IX2 894.3, Larisa, s. IV a.C.; τοὶ κατιγνείτοι, SEG 31:575, Larisa, 171 a.C.). Su presencia en chipriota (ka-si-ke-ne-to, ka-si-ke-ne-ta), con asibilación regular, indica que ambas formas pertenecen al fondo léxico más antiguo del griego (García Ramón 2004: 255). El único testimonio fiable del corpus es τ̣οῖ κατ<ε>ιγνείτοιο en I.Dodone DVC 3113A (Pelasgiótide, finales del s. IV a.C.), en genitivo con la desinencia -οιο de Pelasgiótide. Las reconstrucciones [κατιγ]ν̣ε͂ταν en 3756A, sin rasgos tesalios, y κασι̣[γνήται] en 1193A, con asibilación, no pueden citarse como testimonios válidos.",
    cat: "Vocabulario", dvcs: ["3113A"] },
  // §6.5  λειτορεῖον
  { id: 28, name: "λειτορεῖον (hápax, de la familia de λείτορας)", short: "λειτορεῖον",
    desc: "Hápax cuyo único testimonio es I.Dodone DVC 336A (segunda mitad del s. IV a.C.), tras οἰκο(νο)μίξο̅μεν / ὀ⟨γ⟩κομίξο̅μεν (rasgo 13). Su sentido es incierto: a partir de otras formaciones en -εῖον, Méndez Dosuna (2016: 124-125; 2018a: 284) propone «víctima de un sacrificio» (cf. ἱερεῖον), «asignación económica de un sacerdote» (cf. πρεσβεῖον, τροφεῖον) o «residencia del sacerdote» (cf. μαντεῖον, πρυτανεῖον), y se inclina por la segunda a la vista de τὴν ἱερεωσύνην ἀνακομιεῖται «recuperará su sacerdocio» (SEG 29:127, Atenas). Inequívoca es, en cambio, su adscripción tesalia: pertenece a la familia de λείτουρ / λείτορας «sacerdote», λειτορεύω «ejercer el sacerdocio» y λειτορεία «sacerdocio», bien documentada en la epigrafía tesalia. Es, por tanto, una formación dialectal atestiguada por primera vez en el corpus.",
    cat: "Vocabulario", dvcs: ["336A"] },
  // §6.6  μά
  { id: 29, name: "μά: ¿coordinante (= ático δέ) o negación (= ático μή)?", short: "μά",
    desc: "Pocas partículas pueden considerarse propiamente tesalias; una de ellas es la coordinante μά, equivalente exacto del ático δέ (αἰ μά κε = ático εἰ δ' ἄν, SEG 64:501). Los editores la reconocen en I.Dodone DVC 3205A (primera mitad del s. IV a.C.), αἴτε μὰ ἄλλο̅ι τινὶ θεο͂ν εὐχομέ[νο̅ι - - -], pero la interpretación plantea dos inconvenientes: εἴτε δέ es una combinación muy poco frecuente en ático (Méndez Dosuna 2018a: 284) y la construcción tesalia lleva siempre la partícula modal κα/κε. Es preferible entender μά como la negación (= ático μή) propia de Histiótide, frente al μεί de las demás regiones (cf. αἰ μεί en SEG 64:501). No hay, por tanto, ejemplos en el corpus de la partícula coordinante μά.",
    cat: "Vocabulario", dvcs: ["3205A"] },
  // §6.7  ἁμοῖ
  { id: 30, name: "ἁμοῖ (adverbio de lugar)", short: "ἁμοῖ",
    desc: "En I.Dodone DVC 3274A (primera mitad del s. IV a.C.), los editores leen ΑΜΟΙΓΑΣ ἇι μα[στε]ύουμεν e interpretan ἀμοιγάς, por ἀμοιβάς, con notación hipercorrecta de una fricativa. Méndez Dosuna (2016: 136; 2018a: 284-285) rechaza esta explicación, forzada y que deja el texto sin sentido, y propone leer, a sugerencia de García Ramón, ἁμοῖ γᾶς αἰ μα[στε]ύουμεν, «si debemos buscar en algún lugar de la tierra». ἁμοῖ sería el correlativo del ático ἁμοῦ (cf. ἁμοῦ γέ που, Lys. 24, 20), con apócope del genitivo temático *ἁμοῖο > ἁμοῖ, proceso propio de Pelasgiótide documentado también en οἷ «donde» (SEG 43:311, Escotusa). La propuesta es tentativa, pero convincente, y apuntaría a Pelasgiótide, aunque la inscripción no ofrece otros rasgos regionales que lo confirmen.",
    cat: "Vocabulario", dvcs: ["3274A"] },
  // §6.8  τυχαῖος
  { id: 31, name: "τυχαῖος, -α, -ον («auspicioso»)", short: "τυχαῖος",
    desc: "El adjetivo τυχαῖος, -α, -ον, sin otros testimonios epigráficos, está bien documentado en el corpus (I.Dodone DVC 31A, 221B, 1340A, 3005A, 3008A y 3192A), y sus atestaciones seguras aparecen en consultas con rasgos tesalios. Las autopsias de 2024 en la Eforía de Antigüedades de Ioánina identificaron en 3008A una segunda línea inédita con τυχαῖα, neutro plural predicativo de un infinitivo sujeto (Smyth 1956: §1985), como el τυχαῖον de 1340A, publicada en Candel Lozano (2026). En la literatura, τυχαῖος aparece desde el s. I d.C. con el sentido de «fortuito, casual», pero en Dodona significa otra cosa: «heureux» (I.Dodone Lhôte), «fortunate» (Parke 1967: 266), «καλότυχος» (I.Dodone DVC) o «attainable, feasible» (Méndez Dosuna 2016: 129). El paralelo más instructivo es el cognado τυχηρός, que en Aristófanes (Ach. 250; Th. 305) tiene el valor de «propicio» en contextos de oración ritual, contemporáneos de las laminillas; de ahí que el sentido más adecuado sea «que trae buena suerte, auspicioso», en línea con Eidinow (2019: 95). Como λιμήν (rasgo 25), sería un término no exclusivo del tesalio, pero con un significado específico: para la noción de «auspicioso», el ático literario habría preferido τυχηρός y el tesalio, τυχαῖος.",
    cat: "Vocabulario", dvcs: ["31A","221B","1340A","3005A","3008A","3192A"] },

];


export const RASGO_TEXTS_TES = {
  "1509B": "ἐνγενεῖτα[ι]",
  "1060A": "Ἀετίναι πὲρ παν-\nπασία(ς) γίνυτο",
  "1649A": "θεὸς τύχ̣[α• ὁ δεῖνα ἐπερωτᾶι - - -]\nἐ͂ γένυτ[ο - - -]",
  "3259A": "ΗΥΒ[- - -] \nπὲρ[.][- - -] \nΝΣΑ[- - -] \nτί κε [- - -]\nφέ[ροι - - -]",
  "1433A": "θεὸς τύχα· Φε̅δίας : π̣ὲρ [.][- - -]\nκίνι κε θ[ε]ο͂ν : εὐχόμενο[ς - - -]",
  "307A": "Φατύλο̅ι πὲρ γαϜρογί(ας)",
  "2103A": "[- - -]ν̣θος περ' ἐφόδου \n[- - -] μαχανᾶς [. .]Υ̣ΧΟ[.]",
  "31A": "[ed. I.Dodone DVC]\nΑἰ τυχαία μοι ἁ ἑπι-\nτροπεία τὰν ἔχου \nτᾶμον Λυκκίδας ;\n[I.Dodone Lhôte 28B]\nΑἰ τυχαία μοι ἁ ἐπι-\nτροπεία τὰν ἔχου\nγάμο̅ν Λυκκίδας;",
  "38A": "αἴτε οὐδε-\nμία κόρα μοι \nγίνυτα(ι)",
  "40B": "[- - -]ΑΙ ἐς Τρίκκας",
  "75": "[ed. I.Dodone DVC]\nποιτηρο͂-\nν ΓΑΡΟΤΕ-\nΟΥ ὅπερ τᾶμον καὶ εἴ 'σστ-\nι τύχα\n[Eidinow 2019: 95; restitución que la autopsia no confirma]\nποιτηρο͂-\nν ΓΑΡΟΤΕ-\nΟΥ ὅπερ τᾶμον καὶ εἴ 'σστ-\nι τυχα<ῖος>",
  "103A": "[γυ]ν̣αικὶ περὶ το͂ν ὀφθαλμο͂ν \n[ἐ͂] δυνατὸν ὑγιάνναι;",
  "150A": "Γενεᾶς ἔννεκα παιδός;",
  "159A": "Πυρκοτέλεις ἱστορ[εῖ Δία Νάϊον καὶ Διό̅ναν περὶ φρε]-\nάτο̅ν ὀρύξξειν εἶ φιάλλε̅[ι]",
  "162B": "[- - -]ΟΛΕΥΤ[- - -] \n[- - -]Β̣Α [γ]ίνυται Ε[- - -]",
  "217A": "[- - - ἐπερωτῆι] τὸν Δία τὸν Δου-\n[δουναῖον - - -]ος λώϊον κἄμειν-\n[ον - - - χρημ]άτων ἦ τυνχά-\n[νοι - - -] εἰ πράσσοι κα",
  "219B": "θε[ός•] Ἰφι(κρ)άτης̣ [ἐπερωτᾶι τὸν Δία τὸν Νάϊον] \nτίνι θεοῦ εὐχό[μενος - - - περὶ] \nοἰκίας καὶ σωτηρί[ας]",
  "221B": "εἰ τὰν ἔχο̅ τυχαία;",
  "224A": "θεὸς τύχη Ἄπλον• \nΝίκων δ' ἐρ[ω]τᾶι τὸ(ν) θε̣[ὸν] (εἰ) σώ̣σ<θ>εται τὴν δίκη(ν) ἣμ \nμέλλει δικάξεσθα̣ι εἰ καταδικᾶται",
  "328": "πὲρ πανκλαρία(ς) αἰ γίνυ-\nτε̅ καὶ γυναῖκα ἄγετε̅",
  "336A": "[ed. I.Dodone DVC]\nεἶ οἰκο(νο)μίξο̅με-\nν τὸ λειτορεῖον;\n[Méndez Dosuna 2016: 124-125; 2018a: 282]\nεἶ ὀ⟨γ⟩κομίξο̅με-\nν τὸ λειτορεῖον;",
  "556A": "[ed. I.Dodone DVC]\nθεὸς τύχα ἀγαθά• ἐρωτᾶι Ἀ-\nγιλαΐδας καὶ οἱ συγγενέες \nπὲρ τοῦ ἀρρωστέ̅ματος τ-\nῶν ὀφθαλμῶν τῶν οἱ π-\nατέρες ἀρρωστήσαεν \nαἰ ἔστι κίννι κε θεῶν \nδρᾶντες̣ τοῖς λοιποῖς \nστάμα γενηθείε̅ \nκαὶ ὑγίεια\n[Méndez Dosuna 2016: 125; 2018a: 274, n. 19]\nθεὸς τύχα ἀγαθά• ἐρωτᾶι Ἀ-\nγιλαΐδας καὶ οἱ συγγενέες \nπὲρ τοῖ ἀρρωστέ̅ματος τ-\nῶν ὀφθαλμῶν τῶν οἱ π-\nατέρες ἀρρωστήσαεν \nαἰ ἔστι κίννι κε θεῶν \nδρᾶντες̣ τοῖς λοιποῖς \nστάμα γενηθείε̅ \nκαὶ ὑγίεια",
  "992A": "Μέννη ἐρωτᾶι τὸν θεὸν \nτίνα κε θεῶν θεραπεύων \nἄριστα πράσσοι",
  "1134A": "[ed. I.Dodone DVC]\n[Ζεῦ Νάϊ]ε Εὐανάξα πράσ(σ)ο[νσα] \n[κὰτ νοσεί]ματος τίννι κε θε̣[οῦν] \n[ἀν(α)τιθ]ένσα ὑγιεὶς γέν[οιτο];\n[Méndez Dosuna 2018a: 281, con dudas]\n[Ζεῦ Νάϊ]ε Εὐανάξα πράσ(σ)ο[νσα] \n[κὰτ νοσεί]ματος τίννι κε θε̣[οῦν] \n[ὀντιθ]ένσα ὑγιεὶς γέν[οιτο];",
  "1340A": "εἰ γ̣αοργ̣έ̣ω [κ]-\nαὶ ἔστι μο̣ι τυ-\nχαῖον",
  "1351A": "καὶ πὲρ τᾶν κοράο̅ν \nτᾶν μειόνο̅ν αἰ ὅ̅σπερ \nπρό̅τας ἀπεδείξατε",
  "1416A": "Μελανθίων : θεο͂ν κίννι \nεὐχόμενος Ε[. . . . .9 . . . .];",
  "1465A": "[- - -] τοῖ ἱαρο̣ῖο : τοῖ ἐμπέδο̣ι \n[- - -] κ̣αὶ κεν(ε)ὸ̣ν ἀγαγόμενος \n[- - -] οἴκοι καὶ θαραπεύο̅",
  "1676A": "[ἦ γενε]ὰ γίνυτ[ο];",
  "1909B": "[τᾶι δείναι θυό]νσα(ι) \n[κίννι κε θ]εο͂ν \n[γενεὰ γέν]οιτο;",
  "2000B": "πὲρ το͂-\nν Ϝοικ-\nιατάο̅ν",
  "2015B": "σουτειρί-\n[α] πα(ι)δίεν",
  "2024A": "θεός• \nΔαμαίνετος πὲρ Προξέ-\nνου πο͂ς κε ἐ̣κ Μελιτείας σωθῆ \nκαὶ τίνι θεῶν ἢ δαιμόνων \nεὐχόμενος σωθῆ διὰ θαχέων \nκαὶ τῶι θεῶ[ι] δῶρον ἀποφέρε̅ι;",
  "2204A": "θεὸς τύχα· Ἀπολλο[- - - ἐπικοινῆται] \nΔιὶ Δουδωναιεῖ ἦ [- - -]\n ΟΣ[- - -]",
  "2247A": "εἶ οὐ ἔσσεται;",
  "2254": "θεὸς τύχα(ν) ἀγ̣αθά[ν]· \nΑΝ Λιβύσαβός κα μ[α]-\nρτυρεύσε̅ ἐν τᾶ δί(κ)α \nποτὶ Χοιρίαν;",
  "2544B": "[ὁ δεῖνα ἐπερωτᾶι - - -] κίννι κε φ[ε]ο͂ν̣ [εὐχόμενος - - -]",
  "2587B": "πὲρ τᾶ(ν) κοράο̅ν",
  "2726A": "ἦ εὐχό̣[μενος κα καὶ θύων]\n Ἄπλο̅[νι λώϊον πράσσοιμι];",
  "2940B": "Ζεύς• \nπὲρ πόλιος \nΦεραίας σο̅-\nτηρίας",
  "3002B": "ἦ γαοργέουμ̣[εν];",
  "3008A": "[ed. I.Dodone DVC]\nἐ͂ ἐλ λιμένι χαλκοπο̅λέμεν;\n[Candel Lozano 2026: 101-102, tras la autopsia de 2024]\nἐ͂ ἐλ λιμένι χαλκοπο̅λε͂μεν\nτυχαῖα;",
  "3007A": "[ed. I.Dodone DVC]\nπ(ερ') ὕδ̣ατ̣(ο)ς : Τέ̅ϊος \nκαὶ Σθε̅σι\n[Candel Lozano, autopsia de 2024]\nπρε ὕδ̣ατ̣ες : Τέ̅ϊος \nκαὶ Σθε̅σι",
  "3055A": "[Ζεῦ Νάϊ]ε Διώνα Θέμι, ἐ͂ γε̣ν̣[εὰ ἐσσεῖται ἐρ]-\n[σεντέρ]α ἐκ Κούας Θέγειτος ΗΛ[- - -];",
  "3113A": "[θεὸς τύχα]ν ἀγαθάν· Ζεῦ̣ Δ[ω]-\n[δωναῖε καὶ Δι]ώνη<ι>· Καλλιρόα ἐπερω-\n[τᾶι τὸν θεὸ]ν καὶ τὰν θεὸν περὶ τᾶς \n[- - - κορ]άουν τοῖς θεοῖς τοῖς θε-\n[- - -] αἰ ἔστιν οἱ βέλτιον καὶ \n[ἄμεινον - - - θ]εραπεύονσαν εἲ πὲρ τ-\n[- - -]ν̣ καὶ τᾶς παγκλαρ̣ίας \n[- - -] τ̣οῖ κατ<ε>ιγνείτοιο αἰ ἀρκέ-\n[σει - - -] εἲ σούσεται πὲρ τᾶς κό-\n[ρας - - -] γάμοιο Ἀν̣δρομά-\n χας",
  "3150A": "[π]ὲρ : ταγ̣ᾶς",
  "3192A": "πὲρ τᾶς ἱα[ρ]α̣τείας ΑΝ[. . .] \nΚλέωνι ε(ἴ)περ ΑΛ[. . . 6 . . .] \nΕΡ[.]ΝΟ[.] Ἀ̣γίο̣χος ΣΑ τ-\nυχα̣ιότερο[ν] καὶ λώϊον \nτὰν τᾶι (Ἀ)ρτέμιδι",
  "3205A": "αἴτε μὰ ἄλλο̅ι τινὶ θεο͂ν εὐχομέ[νο̅ι - - -]\nὑγρὸς γένοιτο",
  "3274A": "[ed. I.Dodone DVC]\nΑΜΟΙΓΑΣ ἇι μα[στε]-\nύουμεν\n[Méndez Dosuna 2016: 136; 2018a: 284-285]\nἁμοῖ γᾶς αἰ μα[στε]-\nύουμεν",
  "3673B": "[- - -] ἀνθθέμ[ενος - - -] \n[- - -] γίνυται [- - -]",
  "3687A": "[ὁ δεῖνα ἐπερωτᾶι τί]νι κα θεοῦν εἴει \n[- - -]Μ[- - -] \n[- - - τύ]χαν [- - -]",
  "3809B": "ἔνθι· \nθεός",
  "3921": "ἐ͂ ἄσστα;",
  "4119B": "[- - -][.] ὀνέθεσα",
  "4128B": "[- - -] ποιῶν ἄστα̣ [- - -]",
  "948A": "Πὲρ τᾶς γυν-\nαικὸς αἰ τυν(χάνοιμι).",
  "3005A": "[- - -] τυχαῖον Α[- - -]",
  "LOD 8B": "Ἐπικοινᾶται Μον[δ]α̣ιατᾶν τὸ κοινὸν Δὶ Νάωι καὶ Διώναι{ς} πὲρ \nτο⟨ῖ⟩ [ἀρ]γύρροι τᾶς Θέμιστος αἰ ἀ⟨ν⟩εκτ[ό]ν ἐστι τᾶ Θέμι-\n⟨σ⟩τι καὶ βέλτιον ἐσκιχρέμεν.",
  "LOD 80A": "Ἐρουτᾶι Κλεούτας τὸν Δία καὶ τὰν \nΔιώναν αἴ ἐστι αὐτο͂ προβατεύοντι \nὄναιον καὶ ὠφέλιμον.",
};
