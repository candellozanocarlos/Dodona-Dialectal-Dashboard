import { C } from "../theme.js";

// Datos del capítulo sobre el dialecto tesalio.

// ── Alfabeto (§2): milesio o sin alfabeto epicórico reconocible + alfabeto
// tesalio (150A, 934A, 1143A, 2000B), de Dodona (17B, 93B, 145A), eleo (307A),
// eubeo (948A) y occidental (1351A). Suma: TOTAL_TES.
export const ALF_TES = {
  milesio: 76,
  tesalio: 4,
  dodona: 3,
  elide: 1,
  eubea: 1,
  otros: 1,
};

export const ALF_TES_PIE = [
  { id: "milesio", label: "Milesio o sin alfabeto epicórico", value: ALF_TES.milesio, color: C.milesio },
  { id: "tesalio", label: "Tesalio", value: ALF_TES.tesalio, color: C.terra },
  { id: "dodona", label: "Dodona", value: ALF_TES.dodona, color: C.blue },
  { id: "elide", label: "Élide", value: ALF_TES.elide, color: C.green },
  { id: "eubea", label: "Eubea", value: ALF_TES.eubea, color: C.amber },
  { id: "occidental", label: "Occidental", value: ALF_TES.otros, color: C.muted },
];

export const REGIONS_TES = [
  { id: "pelasgiotis", name: "Pelasgiótide", short: "Pelasg.", en: "Pelasgiotis", value: 11,
    chronoV: 5, chronoIV: 5, chronoPost: 1 },
  { id: "histiaiotis", name: "Histiótide", short: "Histiot.", en: "Histiaiotis", value: 9,
    chronoV: 2, chronoIV: 7, chronoPost: 0 },
  { id: "thessaliotis", name: "Tesaliótide", short: "Tesaliot.", en: "Thessaliotis", value: 5,
    chronoV: 0, chronoIV: 5, chronoPost: 0 },
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
    { id: "34", src: "Lhôte", date: "ss. V-IV a.C.", text: "῏Ε ἀτέραν ἄγο̅μει ;", desc: "ἄγομει — Méndez Dosuna (2024: 4.3): adscripción a Pelasgiótide por -αι > -ει" },
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
    { id: "2204A", src: "DVC", date: "finales del s. V a.C.", text: "θεὸς τύχα· Ἀπολλο[- - - ἐπικοινῆται] \nΔιὶ Δουδωναιεῖ ἦ [- - -]\n ΟΣ[- - -]", desc: "Δουδωναιεῖ — dativo con /o/ > /e/ en sílaba final (cf. §3.1.1 y §7.2)" },
    { id: "3007A", src: "DVC", date: "ss. V-IV a.C.", text: "π(ερ') ὕδ̣ατ̣(ο)ς : Τέ̅ϊος \nκαὶ Σθε̅σι", desc: "ὕδατες (los editores corrigen ὕδατ(ο)ς) — /o/ > /e/; lectura confirmada en autopsia" },
    { id: "3042A", src: "DVC", date: "mediados del s. IV a.C.", text: "[- - -]\n[- - -] ἔσστι δυνατὲν \n[- - -]", desc: "δυνατὲν — /o/ > /e/" },
    { id: "3687A", src: "DVC", date: "principios del s. IV a.C.", text: "[ὁ δεῖνα ἐπερωτᾶι τί]νι κα θεοῦν εἴει \n[- - -]Μ[- - -] \n[- - - τύ]χαν [- - -]", desc: "τίνι κα θεοῦν — κα + τίς, criterio diagnóstico de Histiótide" },
  ],
 
  thessaliotis: [
    { id: "18B", src: "DVC", date: "ss. V-IV a.C.", text: "τίνι κε θεῶ[ν] [ . . . 5 . . . ]Ε[- - -]\n[. .]ΕΛΕ[. . . . ] καὶ τυν(χ)άνοι;", desc: "τίνι κε θεῶν — combinación κε + τίς, rasgo diagnóstico de Tesaliótide" },
    { id: "992A", src: "DVC", date: "segunda mitad del s. IV a.C.", text: "Μέννη ἐρωτᾶι τὸν θεὸν \nτίνα κε θεῶν θεραπεύων \nἄριστα πράσσοι", desc: "Μέννη — κε + τίς; ἐρωτᾶι con contracción -αε- > ᾱ; ἄριστα sin síncopa" },
    { id: "1134A", src: "DVC", date: "primera mitad del s. IV a.C.", text: "[Ζεῦ Νάϊ]ε Εὐανάξα πράσ(σ)ο[νσα] \n[κὰτ νοσεί]ματος τίννι κε θε̣[οῦν] \n[ἀν(α)τιθ]ένσα ὑγιεὶς γέν[οιτο];", desc: "τίννι κε θεοῦν — geminada hiperdialectal τίννι; -νσ- conservado en [ἀν(α)τιθ]ένσα; vocalismo ⟨ΕΙ⟩/⟨ΟΥ⟩" },
    { id: "1446B", src: "DVC", date: "s. IV a.C.", text: "[ὁ δεῖνα] τίνι κε̣ [θεῶν εὐχόμενος - - -];", desc: "τίνι κε θεῶν — combinación κε + τίς, diagnóstico de Tesaliótide" },
    { id: "2024A", src: "DVC", date: "primera mitad del s. IV a.C.", text: "θεός• \nΔαμαίνετος πὲρ Προξέ-\nνου πο͂ς κε ἐ̣κ Μελιτείας σωθῆ \nκαὶ τίνι θεῶν ἢ δαιμόνων \nεὐχόμενος σωθῆ διὰ θαχέων \nκαὶ τῶι θεῶ[ι] δῶρον ἀποφέρε̅ι;", desc: "Προξένου — único testimonio del gen. temático -ου (rasgo de Tesaliótide); κε + τίνι; πέρ. La notación ⟨Η⟩/⟨Ω⟩ es compatible con el vocalismo tesalio (cf. §3.1.1), por lo que la mezcla dialectal propuesta por Crespo y Giannakis (2019: 54) queda desestimada." },
  ],
};

// Cronología de las inscripciones tesalias (suma: TOTAL_TES). Los dos testimonios
// de los ss. III-II son las dos caras de I.Dodone Lhôte 8.
export const CHRONO_DETAIL_TES = [
  { period: "Princ. s. V", n: 1 },
  { period: "1ª mit. s. V", n: 10 },
  { period: "Med. s. V", n: 5 },
  { period: "2ª mit. s. V", n: 4 },
  { period: "Finales s. V", n: 11 },
  { period: "s. V (gen.)", n: 3 },
  { period: "Transición V–IV", n: 8 },
  { period: "Princ. s. IV", n: 5 },
  { period: "1ª mit. s. IV", n: 16 },
  { period: "Med. s. IV", n: 7 },
  { period: "2ª mit. s. IV", n: 3 },
  { period: "Finales s. IV", n: 4 },
  { period: "s. IV (gen.)", n: 7 },
  { period: "ss. III–II", n: 2 },
];

// Temática de las consultas (§2; suma: TOTAL_TES).
export const THEMES_TES = [
  { name: "Desconocido / Sin clasificar", value: 23 },
  { name: "Religión", value: 15 },
  { name: "Amor / Familia / Matrimonio", value: 11 },
  { name: "Oficio / Comercio", value: 11 },
  { name: "Vida / Salud", value: 9 },
  { name: "Dinero / Patrimonio", value: 6 },
  { name: "Viaje / Migración", value: 4 },
  { name: "Otros", value: 3 },
  { name: "Amigos / Enemigos", value: 2 },
  { name: "Esclavitud", value: 1 },
  { name: "Justicia / Derecho", value: 1 },
];

// ── Contexto histórico (§1)
export const LITERARY_SOURCES_TES = [
  { author: "Estrabón (VII, 1)", type: "Geografía", desc: "Narra que el oráculo fue trasladado desde Tesalia a Dodona siguiendo un designio de Apolo, después de que sus gentes prendieran fuego al oráculo." },
  { author: "Escolios D a Il. XVI, 234", type: "Leyenda de fundación", desc: "Un tesalio de nombre Ἑλλός, hijo de Θεσσαλός, epónimo de los tesalios, se disponía a talar el roble del santuario cuando la encina le habló y desistió; con el tiempo se convirtió en epónimo de los sacerdotes del lugar, los Ἑλλοί (Piccinini 2017: 116). Una versión paralela de Próxeno de Epiro (FGrHist 703 F7) sustituye al leñador por el pastor epirota Mardylas, en un intento de vincular la fundación con el pueblo epirota (Chapinal-Heras 2021: 209)." },
  { author: "Filóxeno", type: "Escolio a Il. XVI, 233-234 (fr. 402a Theodoridis)", desc: "Afirma que existían dos Dodonas, una en Tesprotia y otra en Tesalia: la primera alberga el oráculo con el roble sagrado; desde la segunda habría invocado Aquiles a Zeus. Esteban de Bizancio (s.v. Δωδώνη) le rebate señalando que la mención de los Σέλλοι en Il. 16.234-235 remite inequívocamente a la Dodona epirota." },
  { author: "Suidas (hist. tesalio)", type: "Citado por Str. VII, 7, 12", desc: "Asegura que la polis, el roble y el oráculo estaban originalmente en Escotusa (Pelasgiótide, Tesalia) y se trasladaron posteriormente al Epiro, llevándose también a las sacerdotisas. Estrabón califica el relato de fantasioso (μυθώδεις) e indica que su función era buscar el favor de la corte tesalia." },
  { author: "Cineas (embajador de Pirro I)", type: "Citado por Str. VII, 7, 12", desc: "También sitúa la fundación de Dodona en Tesalia. Sirvió en la corte del rey Pirro I del Epiro, cuya madre Ftía era hija del tesalio Menón de Farsalia y pertenecía a una ilustre casa real de Aquea Ftiótide. Estrabón lo califica de aún más fantasioso (μυθωδέστερον) que Suidas." },
  { author: "Píndaro (s. V a.C.)", type: "P.Oxy. 2442 (peán fragmentario)", desc: "Fragmento de papiro de Oxirrinco que enlaza los orígenes míticos de Dodona con Tesalia a través de la genealogía Neoptólemo-Aquiles-Zeus Dodoneo. Posiblemente encargado por los Alévadas, gobernantes tesalios y patrones del poeta (Piccinini 2017: 114-122)." },
];

export const POLITICAL_LINKS_TES = [
  { event: "Peán pindárico", date: "s. V a.C.", agent: "Alévadas", desc: "Encargo de los gobernantes tesalios que explotaban la conexión mítica Neoptólemo–Aquiles–Zeus Dodoneo." },
  { event: "Moneda de Larisa", date: "400-340 a.C.", agent: "Larisa", desc: "Anverso: Alevas con leyenda AΛΕ. Reverso: águila con rayo (símbolos de Molosia/Dodona) y leyenda ΕΛΛΑ (¿Helloi/Selloi?). Cf. Aston (2024: 333-334)." },
  { event: "Dedicación tras victoria", date: "274 a.C.", agent: "Pirro I", desc: "Dos escudos macedonios como botín: uno dedicado en Dodona y otro en Tesalia, con diferencias formularias para afianzar lazos (Raynor 2019)." },
];

// ── Lugares del mapa de Tesalia (§1-§2 y §7) ─────────────────────
// kind: "mencion" (topónimo en una laminilla), "region" (nombre de región),
// "procedencia" (origen declarado de una consulta) o "contexto" (sin mención en
// el corpus, pero citado en el capítulo). Coordenadas del yacimiento antiguo o de
// la localidad moderna que lo ocupa (ToposText; Hansen y Nielsen 2004).
export const TH_KIND = {
  mencion:     { label: "Mención en una laminilla", color: C.gold },
  region:      { label: "Nombre de la región", color: C.gold },
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
    note: "Es el topónimo tesalio más mencionado del corpus. Las ciudades más citadas son las de Histiótide, la región tesalia colindante con el Epiro, al oeste. I.Dodone DVC 1339A parece relacionada con 1340A (εἰ γαοργέω … τυχαῖον), aunque la autopsia muestra que ambas no fueron grabadas por la misma mano o, al menos, no del mismo modo." },
  { id: "trica", kind: "mencion", certain: true, name: "Trica", greek: "Τρίκκα", tetrada: "Histiótide",
    lon: 21.7679, lat: 39.5550, dx: -12, dy: 4, anchor: "end",
    mentions: [
      { ref: "40B", form: "ἐς Τρίκκας", date: "principios del s. IV a.C." },
      { ref: "2784A", form: "εἰς Τρί[κκαν]", date: "segunda mitad del s. IV a.C." },
      { ref: "2786B", form: "Τρίκ(κα)", date: "segunda mitad del s. IV a.C." },
    ],
    note: "Actual Trícala, principal ciudad de Histiótide, ya mencionada por Homero (Il. II, 729) como sede de los hijos de Asclepio. En I.Dodone DVC 40B, ἐς Τρίκκας es el único testimonio seguro de ἐξ > ἐς ante consonante (§3.2.3). Según Méndez Dosuna (2018a: 280), el viaje desde Trica (ca. 180 km) o desde Eginio, la actual Kalambaka (ca. 150 km), no llevaría más de cinco días; desde Larisa o Farsalo (ca. 250 km), unos siete u ocho." },
  { id: "tetonio", kind: "mencion", certain: false, name: "Tetonio", greek: "Θετώνιον", tetrada: "Tesaliótide",
    lon: 22.1603, lat: 39.3222, dx: -12, dy: 4, anchor: "end",
    mentions: [{ ref: "2537A", form: "Θ̣ΕΤΟΝΙΟ[- - -]", date: "segunda mitad del s. IV a.C." }],
    note: "Referencia más que probable, única ciudad de Tesaliótide con posible representación en el corpus. De Tetonio procede también IG IX2 257 (s. V a.C.), con la fórmula κε̅ν ταγᾶ κε̅ν ἀταγίαι (§6.3)." },
  { id: "feras", kind: "mencion", certain: true, name: "Feras", greek: "Φεραί", tetrada: "Pelasgiótide",
    lon: 22.7460, lat: 39.3800, dx: 12, dy: 4, anchor: "start",
    mentions: [{ ref: "2940B", form: "πὲρ πόλιος Φεραίας", date: "primera mitad del s. IV a.C." }],
    note: "Mención segura, con el adjetivo gentilicio en lugar del genitivo (§5.2); según Aston (2024: 338), la mención más antigua de un topónimo tesalio en el corpus. Fuera de las laminillas, un decreto de proxenía del koinon de los molosos (anterior al 330 a.C.) honra a Lagetas, tesalio de Feras (Cabanes y Hatzopoulos 2020: nº 32)." },
  { id: "tesalia", kind: "region", certain: false, name: "Tesalia", greek: "Θεσσαλία", tetrada: "",
    lon: 22.30, lat: 39.95, dx: 12, dy: 4, anchor: "start",
    mentions: [{ ref: "3738A", form: "ἐν Θεσ[σαλί]α(ι)", date: "primera mitad del s. IV a.C." }],
    note: "En I.Dodone DVC 3738A se reconstruye el nombre de Tesalia." },
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
  { id: "farsalo", kind: "contexto", certain: true, name: "Farsalo", greek: "Φάρσαλος", tetrada: "Tesaliótide",
    lon: 22.3833, lat: 39.2950, dx: 0, dy: 17, anchor: "middle", mentions: [],
    note: "Patria de Menón, cuya hija Ftía fue la madre de Pirro I. En Dodona se conserva una copa de bronce del s. IV a.C. dedicada por un ciudadano de Farsalo (Παναιτίος Φαρσάλιος). No aparece como topónimo en las laminillas." },
  { id: "metropolis", kind: "contexto", certain: true, name: "Metrópolis", greek: "Μητρόπολις", tetrada: "Histiótide",
    lon: 21.8390, lat: 39.3450, dx: -8, dy: 13, anchor: "end", mentions: [],
    note: "Procede de ella la convención de los Basaidas (SEG 36:548, s. III a.C.), uno de los dos únicos textos de extensión suficiente del tesalio de Histiótide antes de la publicación del corpus de Dodona (§7.2)." },
];

// Menciones por lugar (§1): Farcadón 4, Trica 3, Tetonio 1, Feras 1, [Tesalia] 1.
export const TOPONYMS_TES = TH_PLACES
  .filter((p) => p.kind === "mencion" || p.kind === "region")
  .map((p) => ({ name: p.kind === "region" ? `[${p.name}]` : p.name, value: p.mentions.length, tetrada: p.tetrada || "Tesalia" }));

// Rasgos de cada tétrada (§7).
export const REGION_TRAITS_TES = {
  pelasgiotis: {
    capital: "Larisa",
    inscripciones: "11",
    intro: "El corpus conserva once inscripciones adscritas al dialecto tesalio de Pelasgiótide: I.Dodone DVC 2761B y 3545B (s. V a.C.), 2544B (mediados del s. V a.C.), 1433A (segunda mitad del s. V a.C.), 1465A (finales del s. V a.C.), 159A (finales del s. V o principios del s. IV a.C.), 1416A (primera mitad del s. IV a.C.), 556A y 3113A (finales del s. IV a.C.), I.Dodone Lhôte 34 (ss. V-IV a.C.) e I.Dodone Lhôte 8B (ss. III-II a.C.). Es la región mejor documentada del corpus, tanto en número de inscripciones como en variedad de rasgos, lo que refleja la posición de Larisa como la polis tesalia más influyente. El criterio diagnóstico principal es la combinación de la partícula modal κε con el pronombre interrogativo-indefinido κίς, frente al τίς de Tesaliótide e Histiótide: aparece con la forma simple κίνι en I.Dodone DVC 2761B, 3545B y 1433A y con la geminada hiperdialectal κίννι en 2544B y 556A; 1416A conserva κίννι sin la partícula modal.",
    rasgos: [
      { label: "Criterio diagnóstico: κε + κίς", text: "La combinación de la partícula modal κε con el pronombre interrogativo-indefinido κίς es el marcador regional más fiable. Las formas sin geminada (κίνι) alternan con las hiperdialectales (κίννι), pero ninguna laminilla combina ambas grafías. Esta oposición κίς (Pelasgiótide) frente a τίς (Tesaliótide e Histiótide) es, junto con la partícula modal, el criterio de adscripción regional más seguro del corpus." },
      { label: "Fonética: -αι > -ει en desinencias verbales", text: "El paso -αι > -ει en las desinencias verbales está documentado en la epigrafía de Pelasgiótide (cf. las formas en -σειν de IG IX2 517). El corpus ofrece un testimonio en I.Dodone DVC 159A, que presenta ὀρύξξειν (= ático ὀρύξαι); Méndez Dosuna (2018a: 286) señala que podría tratarse también de un infinitivo de futuro, aunque la interpretación como aoristo es la más probable. Un posible segundo testimonio es ἄγο̄μει en I.Dodone Lhôte 34, interpretable como subjuntivo de presente medio-pasivo con el mismo paso (Méndez Dosuna 2024: 4.3)." },
      { label: "Fonética: ἱαρ-", text: "El corpus aporta el que es también el testimonio más antiguo del vocablo para el tesalio: ἱαροῖο en I.Dodone DVC 1465A (Pelasgiótide, s. V a.C.). La concurrencia en un mismo texto de ἱαρ- y la desinencia de genitivo propia de Pelasgiótide -οιο refuerza la credibilidad dialectal del vocalismo, pues ambos rasgos son tesalios y difícilmente explicables por contaminación dórica." },
      { label: "Morfología: gen. sg. temático -οι/-οιο", text: "El genitivo singular temático en -οι/-οιο diferencia Pelasgiótide del resto de regiones tesalias, que emplean -ου. El corpus ofrece cuatro testimonios: τοῖ ἱαροῖο τοῖ ἐμπέδοι en I.Dodone DVC 1465A (finales del s. V a.C.), τοῖ κατ⟨ε⟩ιγνειτοῖο y γαμοῖο en I.Dodone DVC 3113A (finales del s. IV a.C.), πὲρ τοῖ ἀρρωστε̄́ματος en I.Dodone DVC 556A y πὲρ τοῖ [ἀρ]γύρροι en I.Dodone Lhôte 8B." },
      { label: "Morfología: infinitivo temático en -μεν", text: "Buck (1955: §155.1) lo recoge como característica de Pelasgiótide, y Blümel (1982: §224) lo documenta con seguridad solo en Pelasgiótide y Perrebia. En el corpus: ἐσκιχρέμεν en I.Dodone Lhôte 8B y χαλκοπωλε͂μεν en I.Dodone DVC 3008A. Lhôte 8B muestra otros rasgos claros de Pelasgiótide; en 3008A, sin otros rasgos regionales, la sola desinencia invita a postular también un origen pelasgiota." },
      { label: "Morfología: nom. pl. artículo οἱ", text: "La forma οἱ del artículo en nominativo plural (frente al τοί del tesalio occidental) es un rasgo diferenciador de Pelasgiótide. El único testimonio del corpus es I.Dodone DVC 556A, que presenta οἱ συγγενέες y οἱ πατέρες en las líneas 2 y 4 respectivamente." },
    ],
  },
  histiaiotis: {
    capital: "Farcadón / Trica",
    inscripciones: "9",
    intro: "El corpus conserva nueve inscripciones adscritas al dialecto tesalio de Histiótide: I.Dodone DVC 1351A (primera mitad del s. V a.C.), 2204A (finales del s. V a.C.), 2015B (primera mitad del s. IV a.C.), 191A y 3042A (mediados del s. IV a.C.), 3687A (principios del s. IV a.C.), 1988B (s. IV a.C.) y 17B y 3007A, de cronología incierta entre los ss. V y IV a.C. Como señala Méndez Dosuna (2018a: 286), son uno de los hallazgos más relevantes del corpus: la documentación de esta variedad se reducía a la convención de los Basaidas de Metrópolis (SEG 36:548, s. III a.C.) y al fragmentario acuerdo de simpoliteia entre Gonfos e Itonio (SEG 37:494, ca. 230-200 a.C.).",
    rasgos: [
      { label: "Criterio diagnóstico: κα + τίς", text: "La partícula modal κα (frente al κε de Tesaliótide y Pelasgiótide) combinada con el pronombre interrogativo τίς identifica las inscripciones de Histiótide. Esta combinación aparece en I.Dodone DVC 17B (αἰ κα μά ἔχο), 3687A (τίνι κα θεοῦν), 191A (αἰ κα διδοῖν) y 217A (πράσσοι κα)." },
      { label: "Fonética: /o/ > /e/ en sílabas finales", text: "Cambio /o/ > /e/ en sílabas finales tras fonemas dentales y palatales, fenómeno desconocido en las demás regiones tesalias. Está documentado en seis inscripciones del corpus: Δουδωναιεῖ (= ático Δωδωναίωι) en I.Dodone DVC 2204A, ἀπεδείξατε (= ático ἀπεδείξατο) en 1351A, δυνατέν en 3042A, παιδίεν en 2015B, σύμφορέν en 191A y ὕδατες en 3007A, que los editores corrigen a ὕδατος pero que no requiere enmienda si se reconoce el cambio dialectal; la autopsia de 2024 confirmó la lectura. Méndez Dosuna (2018a: 287) propone además que ὄσπερ (= ático ὥσπερ) en 1351A podría ser un caso de psilosis en palabras gramaticales, también documentado en la convención de los Basaidas." },
      { label: "Fonética: negación μά (= ático μή)", text: "La negación μά (= ático μή), rasgo propio de Histiótide frente al μεί documentado en las demás regiones tesalias, aparece con claridad en I.Dodone DVC 1988B (μὰ πρᾶξαι). También aparece en I.Dodone DVC 3205A: los editores proponen que μά equivalga aquí a la partícula coordinante ática δέ, pero es preferible la lectura como negación (Méndez Dosuna 2018a: 284; cf. §6.6). Asimismo, podría aparecer también en I.Dodone DVC 17B αἰ κα μὰ ἔχο e I.Dodone DVC 2985A αἰ δε μά [- - - ἄμ]εινόν pero la falta de contexto y de otros rasgos dialectales aconseja tratar estos ejemplos con reservas." },
      { label: "Morfología: optativo 3ª pl. -οιν", text: "Desinencia -οιν para el optativo de 3ª persona del plural: διδοῖν en I.Dodone DVC 191A (= ático διδοῖεν), documentada también en la convención de los Basaidas (SEG 36:548, Metrópolis, finales del s. III a.C.)." },
      { label: "Morfología: infinitivo de aoristo -σαι", text: "Desinencia -σαι del infinitivo de aoristo: πρᾶξαι en I.Dodone DVC 1988B, frente al -σειν propio de Pelasgiótide, diferencia morfológica que separa ambas variedades (Méndez Dosuna 2018a: 287)." },
    ],
  },
  thessaliotis: {
    capital: "Farsalo",
    inscripciones: "5",
    intro: "El corpus conserva cinco inscripciones adscritas con certeza al dialecto tesalio de Tesaliótide: I.Dodone DVC 18B (ss. V-IV a.C.), 1134A (primera mitad del s. IV a.C.), 1446B y 2024A (ambas de la primera mitad o mediados del s. IV a.C.) y 992A (segunda mitad del s. IV a.C.). Aunque Crespo y Giannakis (2019: 54) señalan en I.Dodone DVC 2024A una mezcla dialectal con el dórico noroccidental por la notación ⟨Η⟩/⟨Ω⟩, esa grafía es compatible con el vocalismo tesalio (cf. §3.1.1); la inscripción muestra además ⟨Ο⟩ y ⟨Ε⟩ para vocales largas (πο͂ς, ἀποφέρε̄ι), la vacilación habitual en los textos tesalios del corpus.",
    rasgos: [
      { label: "Criterio diagnóstico: κε + τίς", text: "El rasgo más fiable para identificar las inscripciones de esta región es la combinación de la partícula modal κε con el pronombre interrogativo-indefinido τίς. Esta combinación aparece en las cinco inscripciones del grupo: τίνι κε θεῶ[ν] en I.Dodone DVC 18B, τίννι κε θε[οῦν] en I.Dodone DVC 1134A, τίνι κε [θεῶν] en I.Dodone DVC 1446B, τίνα κε θεῶν en I.Dodone DVC 992A y κε junto con τίνι θεῶν en I.Dodone DVC 2024A. La forma τίννι con geminada hiperdialectal en I.Dodone DVC 1134A es significativa: muestra que el fenómeno de la geminación no etimológica documentado en Pelasgiótide (κίννι) tiene también representación en Tesaliótide." },
      { label: "Morfología: gen. sg. temático -ου", text: "I.Dodone DVC 2024A aporta el único testimonio del corpus del genitivo singular temático en -ου, rasgo diferenciador de Tesaliótide frente al -οι/-οιο de Pelasgiótide. La forma es Προξένου, en el sintagma Δαμαίνετος πὲρ Προξένου. La inscripción presenta además la apócope πέρ (cf. §4.1.1) y la misma combinación κε + τίνι diagnóstica de la región." },
    ],
  },
};


export const VOWEL_NOTATION_TES = [
  { type: "⟨ΕΙ⟩ ⟨ΟΥ⟩ sin ⟨Η⟩ ⟨Ω⟩", n: 7, desc: "Notación tesalia estándar", color: C.green,
    dvcs: [
      { src: "DVC", id: "31A" }, { src: "DVC", id: "159A" }, { src: "DVC", id: "1134A" },
      { src: "DVC", id: "2015B" }, { src: "DVC", id: "2247A" }, { src: "DVC", id: "3274A" }, { src: "DVC", id: "3687A" },
    ] },
  { type: "⟨ΕΙ⟩ ⟨ΟΥ⟩ + ⟨Η⟩ ⟨Ω⟩", n: 8, desc: "Mezcla de notaciones", color: "#b07520",
    dvcs: [
      { src: "DVC", id: "217A" }, { src: "DVC", id: "219B" }, { src: "DVC", id: "1340A" },
      { src: "DVC", id: "2204A" }, { src: "DVC", id: "3002B" }, { src: "DVC", id: "3055A" },
      { src: "DVC", id: "3113A" }, { src: "Lhôte", id: "80A" },
    ] },
  { type: "⟨Η⟩ ⟨Ω⟩ sin ⟨ΕΙ⟩ ⟨ΟΥ⟩", n: 5, desc: "Notación ática / koiné", color: "#b04535",
    dvcs: [
      { src: "DVC", id: "556A" }, { src: "DVC", id: "992A" }, { src: "DVC", id: "1416A" },
      { src: "DVC", id: "3545B" }, { src: "Lhôte", id: "8B" },
    ] },
];

export const VOWEL_EXAMPLES_TES = [
  { src: "DVC", id: "31A", cat: 1, date: "mediados del s. IV a.C.", region: "—", form: "ἔχου (= ático ἔχω)" },
  { src: "DVC", id: "159A", cat: 1, date: "finales del s. V o principios del s. IV a.C.", region: "Pelasg.", form: "Πυρκοτέλεις (= ático -τέλης)" },
  { src: "DVC", id: "1134A", cat: 1, date: "primera mitad del s. IV a.C.", region: "Tesaliot.", form: "ὑγιείς (= ático ὑγιής)" },
  { src: "DVC", id: "2015B", cat: 1, date: "primera mitad del s. IV a.C.", region: "Histiot.", form: "σουτειρί[α] (= ático σωτηρία)" },
  { src: "DVC", id: "2247A", cat: 1, date: "finales del s. IV a.C.", region: "—", form: "εἶ (=ático ἦ)" },
  { src: "DVC", id: "3274A", cat: 1, date: "primera mitad del s. IV a.C.", region: "—", form: "μα[στε]ύουμεν" },
  { src: "DVC", id: "3687A", cat: 1, date: "principios del s. IV a.C.", region: "—", form: "[τί]νι κα θεοῦν εἴει" },
  { src: "DVC", id: "217A", cat: 2, date: "mediados del s. IV a.C.", region: "Histiot.?", form: "Δου[δουναῖον] + ἦ" },
  { src: "DVC", id: "219B", cat: 2, date: "segunda mitad del s. IV a.C.", region: "—", form: "τίνι θεοῦ (= ático θεῷ) + σωτηρί[ας]" },
  { src: "DVC", id: "1340A", cat: 2, date: "finales del s. V a.C.", region: "Histiot.?", form: "εἶ + γαοργέω" },
  { src: "DVC", id: "2204A", cat: 2, date: "finales del s. V a.C.", region: "Histiot.?", form: "Δουδωναίει (dativo híbrido)" },
  { src: "DVC", id: "3002B", cat: 2, date: "primera mitad del s. IV a.C.", region: "—", form: "γαοργέουμ̣[εν] + ἦ"  },
  { src: "DVC", id: "3055A", cat: 2, date: "ca. 350 a.C.", region: "—", form: "Κούας (= Κώιας?) + Διώνα" },
  { src: "DVC", id: "3113A", cat: 2, date: "finales del s. IV a.C.", region: "Pelasg.", form: "εἶ, σούσεται + [Δι]ώνηι" },
  { src: "Lhôte", id: "80A", cat: 2, date: "ca. 375 a.C.", region: "—", form: "ἐρουτᾶι + Διώναν, ὠφέλιμον" },
  { src: "DVC", id: "556A", cat: 3, date: "finales del s. IV a.C.", region: "Pelasg.", form: "ἀρρωστήσαεν + ἀρρωστεματος" },
  { src: "DVC", id: "992A", cat: 3, date: "segunda mitad del s. IV a.C.", region: "Tesaliot.", form: "τίνα κε θεῶν, Μέννη — ⟨Η⟩/⟨Ω⟩ sistemáticos; κε es su único rasgo tesalio" },
  { src: "DVC", id: "1416A", cat: 3, date: "primera mitad del s. IV a.C.", region: "Pelasg.", form: "Μελανθίων + θεο͂ν" },
  { src: "DVC", id: "3545B", cat: 3, date: "finales del s. V a.C.", region: "Pelasg.", form: "κίνι, [μ]αντήαν — ⟨Η⟩/⟨Ω⟩ sistemáticos, sin dígrafos" },
  { src: "Lhôte", id: "8B", cat: 3, date: "ss. III-II a.C.", region: "Pelasg.", form: "Νάωι, Διώναι{ς} — posible dialecto dórico local del santuario" },
];

// ── Rasgos dialectales (§3-§6), numerados en el orden del capítulo.

export const RASGOS_TES = [
  // ═══ FONOLOGÍA (1–10) ═══
  // §3.1.1  Cierre de vocales medias largas
  { id: 1, name: "Elevación de vocales medias largas", short: "Elevación vocálica",
    desc: "Rasgo fonológico central del tesalio: tras la adopción del alfabeto jónico reformado (s. IV a.C.), las vocales medias largas se notan con los dígrafos ⟨ΕΙ⟩ y ⟨ΟΥ⟩ independientemente de su origen etimológico, donde el ático usa ⟨Η⟩ y ⟨Ω⟩. En el corpus de Dodona, 20 inscripciones tesalias muestran alguna grafía específica para las vocales largas: 7 presentan solo ⟨ΕΙ⟩/⟨ΟΥ⟩, 8 combinan ambos sistemas y 5 usan ⟨Η⟩/⟨Ω⟩ sin dígrafos (en sentido estricto, solo I.Dodone DVC 992A y 3545B de forma sistemática). En total, 13 de las 20 (el 65 %) muestran ⟨Η⟩ o ⟨Ω⟩, frente al 34 % de las inscripciones tesalias que discute Blümel (1982: 32-34). La alternancia, que no depende de la cronología ni de la región, apoya la propuesta de Scarborough (2014) de que las vocales medias largas tesalias eran medias /e̞ː/ y /o̞ː/, que ninguna de las dos grafías jónicas representaba con exactitud.",
    cat: "Fonología", dvcs: ["31A","159A","2204A","1134A","3002B","3274A","2015B","217A","219B","3113A","2247A","1340A","3055A", "3687A", "LOD 80A"] },
  // §3.1.2  ᾱω sin contraer
  { id: 2, name: "Secuencia ᾱω sin contraer", short: "ᾱω sin contraer",
    desc: "El tesalio muestra vacilación en el tratamiento de -ᾱω-: mientras la epigrafía oficial tardía tiende a la contracción en ᾱ, el corpus de Dodona refleja preferentemente la secuencia inalterada. Cuatro de las cinco inscripciones con formas relevantes conservan la secuencia sin contraer: κοράων en I.Dodone DVC 1351A (Histiótide, primera mitad del s. V a.C.) y 2587B (finales del s. V a.C.); [κορ]άουν en 3113A (Pelasgiótide, finales del s. IV a.C.), donde además se produce el cierre ω > ου; y το͂ν Ϝοικιατάο͂ν en 2000B. Solo I.Dodone Lhôte 8B (III-II a.C.) presenta la contracción Μονδαιατᾶν, lo que podría apoyar un argumento cronológico: las laminillas anteriores al s. III reflejarían un estado más arcaico del dialecto.",
    cat: "Fonología", dvcs: ["1351A","2587B","2000B","3113A"] },
  // §3.1.2  αε > ᾱ
  { id: 3, name: "Contracción de αε en ᾱ", short: "αε > ᾱ",
    desc: "La secuencia -αε- contrae regularmente en ᾱ, rasgo compartido con el dórico. Los cuatro testimonios del corpus son uniformes. Tres corresponden a la forma verbal ἐρωτᾱι (< ἐρωτά-ει), fórmula introductoria de las consultas: I.Dodone DVC 556A (Pelasgiótide, finales del s. IV a.C.), I.Dodone DVC 992A (Tesaliótide, 2ª mit. IV) e I.Dodone Lhôte 80A (ca. 375). Esta última es especialmente relevante: ἐρουτᾱι muestra simultáneamente la contracción -αε- > ᾱ y el cierre vocálico ω > ου (cf. §3.1.1). El cuarto testimonio es ἐπικοινᾱται (< ἐπικοινά-εται) en I.Dodone Lhôte 8B (Pelasgiótide, III-II). Méndez Dosuna (2018a: 282) señala que para Pelasgiótide se ha postulado una flexión atemática (ἐρώτᾰι < *ἐρώτα-ι) como explicación alternativa de 556A; pero ἐπικοινᾶται no admite esa interpretación y ἐρωτᾶι aparece también en 992A, de Tesaliótide, de modo que la contracción -αε- > ᾱ es el mecanismo regular del dialecto.",
    cat: "Fonología", dvcs: ["556A","992A","LOD 8B","LOD 80A"] },
  // §3.1.3  Síncopa de vocales átonas
  { id: 4, name: "Síncopa de vocales átonas", short: "Síncopa",
    desc: "La síncopa de vocales en sílabas átonas es uno de los rasgos más característicos del tesalio, invocado habitualmente como indicio de un acento intensivo inicial. El corpus ofrece tres testimonios: Ἄπλο̄[νι] (= Ἀπόλλωνι) en I.Dodone DVC 2726A (segunda mitad del s. V a.C.), el más seguro, coincide con la forma habitual del teónimo en la epigrafía tesalia (cf. Ἀπλουνι en IG IX,2 1025.5, Feras); ἄσστα (= ἄριστα) en I.Dodone DVC 3921 (primera mitad del s. IV a.C.), con síncopa de /i/ y asimilación /r/ > /s/; y ἄστα̣ en I.Dodone DVC 4128B (primera mitad del s. IV a.C.), la misma forma con sigma simple, aunque el estado fragmentario de esta última impide una adscripción segura. La forma plena ἄριστα en I.Dodone DVC 992A (Tesaliótide) no contradice la identificación, sino que refleja la coexistencia de variantes sincopadas y plenas documentada en toda la epigrafía tesalia. La síncopa ἀριστο- > ἀσ(σ)τοº es recurrente en antropónimos tesalios (Ἀσστοκράτειος, Ἀστόμαχος).",
    cat: "Fonología", dvcs: ["2726A","3921","4128B"] },
  // §3.2.1  Geminada de *-ns-
  { id: 5, name: "Geminada nasal de *-ns-", short: "Geminada *-ns-",
    desc: "El tesalio, junto con el lesbio, geminó la nasal ante sibilante heredada (*-ns- > -νν-) en lugar de producir el primer alargamiento compensatorio generalizado en los demás dialectos. El único ejemplo del corpus de Dodona es ὑγιάνναι (= ático ὑγιᾶναι < *ὑγιάν-σαι), infinitivo aoristo activo en I.Dodone DVC 103A: «¿es posible sanar sus ojos?». Que no aparezcan más ejemplos no resulta sorprendente, pues las raíces susceptibles de sufrir este tratamiento (infinitivos de aoristo sigmático de temas en nasal, algunos verbos como φθέρρω, formas nominales como σελάννα) son escasas.",
    cat: "Fonología", dvcs: ["103A"] },
  // §3.2.1  Retención -ns- secundaria
  { id: 6, name: "Retención de -ns- secundaria", short: "Retención -ns-",
    desc: "A diferencia del grupo *-ns- heredado, que geminó (v. rasgo 5), el grupo -ns- secundario en posición interior se conserva inalterado en tesalio, lo que lo distingue de los otros dialectos eolios. El corpus ofrece tres testimonios, todos en formas de participio femenino de presente: [θ]εραπεύονσ̣αν en I.Dodone DVC 3113A (Pelasgiótide, finales del s. IV a.C.); [θυό]νσα⟨ι⟩ en I.Dodone DVC 1909B; y [-ε]νσα en I.Dodone DVC 1134A, restituido como [ἀν(α)τίθ]ένσα (editores de I.Dodone DVC) o [ὀντιθ]ένσα (Méndez Dosuna 2018a: 282), lectura incierta pero que en cualquier caso refleja el -νσ- inalterado.",
    cat: "Fonología", dvcs: ["3113A","1134A","1909B"] },
  // §3.2.2  νν no etimológica
  { id: 7, name: "νν no etimológica (ἔννεκα, κίννι, τίννι)", short: "νν hiperdialectal",
    desc: "Geminadas no etimológicas generadas por un patrón oposicional tesalio /VRR/ frente a jónico-ático /VːR/ (García Ramón 2018: 52-53). En el corpus se documentan: (a) ἔννεκα (I.Dodone DVC 150A, mediados del s. V a.C.), el testimonio tesalio más antiguo de la forma, escrito en alfabeto epicórico tesalio, anterior a los testimonios lesbios literarios; (b) κίννι en Pelasgiótide (2544B, 1416A, 556A) y τίννι en Tesaliótide (1134A), dativo del pronombre interrogativo con geminada hiperdialectal. Coexisten con las formas simples, algo más frecuentes (siete frente a cuatro): κίνι (2761B, 1433A, 3545B), τίνι (2024A, 219B, 1446B) y el acusativo τίνα (992A), sin que ninguna laminilla alterne ambas grafías. La hipótesis del hiperdialectalismo tardío (García Ramón 2007a), formulada sobre inscripciones de Larisa del s. II a.C., se aplica con reservas a estos testimonios del ss. V-IV, que muestran el fenómeno en un estadio más antiguo.",
    cat: "Fonología", dvcs: ["150A","2544B","1416A","556A","1134A"] },
  // §3.2.3  ἐξ > ἐς ante consonante
  { id: 8, name: "ἐξ > ἐς ante consonante", short: "ἐξ > ἐς",
    desc: "El tesalio simplifica ἐξ en ἐς ante consonante, rasgo compartido con el beocio y documentado en la epigrafía tesalia oficial (cf. ἐς τοῖ νόμοι, SEG 31:577; ἐς πόλιος, SEG 43:311). En el corpus, el único testimonio seguro es ἐς Τρίκκας en I.Dodone DVC 40B (principios del s. IV a.C.). Dos inscripciones posiblemente tesalias presentan, sin embargo, ἐκ ante consonante: ἐκ Μελιτείας en I.Dodone DVC 2024A y ἐκ Κούας en I.Dodone DVC 3055A, ambas con rasgos dialectales mixtos que dificultan su adscripción. La escasez de testimonios y las limitaciones de cada uno impiden extraer conclusiones firmes.",
    cat: "Fonología", dvcs: ["40B"] },
  // §3.2.4  *dj > ζ
  { id: 9, name: "ζ de *dj (Ζεύς)", short: "ζ < *dj",
    desc: "El tratamiento de *dj es heterogéneo según la región tesalia. Buck (1955: §85) incluía el tesalio en el grupo con resultado ⟨ΔΔ⟩, pero el único ejemplo (ἐξξανακά(δ)δε̄ν, IG IX,2 257, Tetonio, Tesaliótide) procede de una inscripción de dialectalidad cuestionable. Blümel (1982: 118-124) documenta ⟨ΣΣ⟩ en verbos en -ζω de Pelasgiótide, ⟨ΖΔ⟩ en una inscripción de Histiótide, y ⟨ΡΔ⟩ en antropónimos de Farsalo y Metrópoli. El corpus de Dodona aporta Ζεύς (I.Dodone DVC 2940B) y Ζεῦ Δωδωναῖε (I.Dodone DVC 3113A), ambas inscripciones de adscripción tesalia reforzada por otros rasgos, lo que es coherente con el resultado ⟨Ζ⟩ dominante en Pelasgiótide. El corpus apunta a que ⟨Ζ⟩ era la solución más extendida, con ⟨ΔΔ⟩ y ⟨ΖΔ⟩ como variantes locales de distribución y atestiguación limitadas.",
    cat: "Fonología", dvcs: ["2940B","3113A"] },
  // §3.3.1  ἱαρός / ἱερός
  { id: 10, name: "ἱαρo- (reflejo de *Hish₂rós)", short: "ἱαρo- dialectal",
    desc: "La distribución de ἱαρός / ἱερός es una de las isoglosas léxico-fonológicas más debatidas. Blümel (1982: 51) consideró ἱερός la forma genuinamente tesalia, pero la evidencia posterior apunta a que ἱαρ- es auténticamente tesalia, al menos en determinadas regiones. I.Dodone DVC 1465A (Pelasgiótide, s. V a.C.) presenta ἱαροῖο con la desinencia de genitivo -οιο propia de Pelasgiótide, lo que constituye el testimonio más antiguo de ἱαρ- en tesalio (los otros tres, recogidos por Scarborough 2023: 200, son de los ss. IV-II a.C.) y refuerza la credibilidad dialectal del vocalismo: ambos rasgos son tesalios y difícilmente explicables por contaminación dórica. Méndez Dosuna (2018a: 282-283) advierte que el vocalismo de ἱαρ- no tiene relación con el de θαραπεύω (apertura vocálica en occidente de Tesalia, cf. Helly 2018: 367), ya que son procesos independientes.",
    cat: "Fonología", dvcs: ["1465A"] },
  // ═══ MORFOLOGÍA (11–19) ═══
  // §4.1.1  Apócope: περί > πέρ
  { id: 11, name: "Apócope de preposiciones: περί (πέρ) y ¿κατά?", short: "Apócope prep. πέρ/κατά",
    desc: "El tesalio presenta el sistema de apócope preposicional más amplio del griego antiguo (Buck 1955: §95). La forma πέρ (< περί) es privativa del tesalio, el délfico y el eleo, a diferencia de ἀν, πάρ, κάτ y πότ, que son comunes a casi todos los dialectos no jónico-áticos. El corpus ofrece 11 ocurrencias de la forma apocopada en 10 inscripciones, a lo largo de casi dos siglos (primera mitad del s. V a ss. III-II a.C.) y en diferentes regiones: πὲρ τᾶν κοράο͂ν τᾶν μειόνο͂ν (I.Dodone DVC 1351A, primera mitad del s. V a.C., Histiótide); πὲρ το͂ν Ϝοικιατάο͂ν (I.Dodone DVC 2000B, mediados del s. V a.C.); πὲρ τᾶ(ν) κοράο͂ν (I.Dodone DVC 2587B, finales del s. V a.C.); πὲρ το͂ν πρ[οβατο͂ν] (I.Dodone DVC 3688A, s. IV a.C.); πὲρ τᾶς γυναικός (I.Dodone DVC 32B, primera mitad del s. IV a.C.); πὲρ Προξένου (I.Dodone DVC 2024A, primera mitad del s. IV a.C.); πὲρ πόλιος Φεραίας (I.Dodone DVC 2940B, primera mitad del s. IV a.C.); εἲ πὲρ τ[---] y πὲρ τᾶς κό[ρας] (I.Dodone DVC 3113A, finales del s. IV a.C., dos instancias); πὲρ το͂υ ἀρρωστέ̄ματος (I.Dodone DVC 556A, finales del s. IV a.C., Pelasgiótide); πὲρ τo<ῖ> [ἀρ]γύρροι (I.Dodone Lhôte 8B, ss. III-II a.C., Pelasgiótide). La forma plena περί aparece en I.Dodone DVC 103A y 934A, y coexiste con πέρ en la propia I.Dodone DVC 3113A: la forma plena de la tercera línea podría deberse a la influencia de la koiné, mientras que las dos apocopadas posteriores reflejan la forma dialectal. Que esto ocurra en una inscripción que vacila también en la notación de las vocales largas (cf. §3.1.1) apunta a un redactor que se debate entre el dialecto tesalio y la koiné. En cuanto a la apócope de κατά, Méndez Dosuna (2016: 133) propone una lectura alternativa de I.Dodone DVC 2254 (finales del s. V a.C.) según la cual KA al inicio de la segunda línea no sería la partícula modal, sino parte de una forma κα(μ)μ[α]ρτυρεύσε (= ático καταμαρτυρεύσῃ) con apócope de κατά > κὰτ y posterior asimilación καμº; sin embargo, este proceso καταμº > καμμαº no está documentado en la epigrafía tesalia. La apócope de κατά, bien documentada en la epigrafía tesalia continental, queda sin testimonio directo y seguro en las consultas de Dodona.",
    cat: "Morfología", dvcs: ["2000B","1351A","2587B","3688A","2024A","2940B","32B","3113A","556A","LOD 8B","2254"] },
  // §4.1.2  Preposición ὀν-
  { id: 12, name: "Preposición ὀν- (= ἀνά)", short: "ὀν- = ἀνά",
    desc: "El tesalio presenta como forma del preverbio y preposición ἀνº (< ἀνά) la variante ον-. El fenómeno está bien documentado en formas como ὀγγράψαντας (IG IX,2 517.44; Larisa, Pelasgiótide, 214 a.C.) y ὀνεθείκαεν (I.Atrax 108; Átrax, Pelasgiótide, 250-200 a.C.). El corpus de Dodona ofrece dos posibles testimonios de esta forma. El primero es I.Dodone DVC 4119B [- - -] ὀνέθεσα (primera mitad del s. IV a.C.). Méndez Dosuna (2018a: 282), sin embargo, considera la lectura sospechosa: la forma esperable en tesalio para este compuesto no es ὀνέθεσα sino ὀνέθεικα (cf. 3ª pl. ὀνεθείκαεν). El segundo testimonio, y el más probable, procede de I.Dodone DVC 336A ει οικο(νο)μιξμεν το λειτορεῖον; (segunda mitad del s. IV a.C.). La adscripción tesalia de la consulta viene determinada por la presencia de λειτορεῖον, hápax relacionado con los términos λείτορας / λειτορεύω que solo aparecen en inscripciones tesalias. Los editores del corpus interpretan ΟΙΚΟΜΙΞΟΜΕΝ como οἰκο(νο)μίξομεν (< *οἰκονομίζω), pero Méndez Dosuna (2016: 124-125; 2018a: 282) rechaza esta solución  y propone leer ὀ<γ>κομίξομεν (= ático ἀνακομίσωμεν). En conjunto, los dos testimonios del corpus merecen sus reservas. Con todo, resulta significativo que la forma plena ἀνά no aparezca en ninguna consulta tesalia del corpus. Esta ausencia cuadra bien con los datos de la epigrafía tesalia continental, donde ὀν- es la forma sistemática en las inscripciones dialectales",
    cat: "Morfología", dvcs: ["4119B","336A"] },
  // §4.2.1  Desinencia -μεν (1ª pl.)
  { id: 13, name: "1ª persona pl. en -μεν", short: "1ª pl. -μεν",
    desc: "Desinencia -μεν para la 1ª persona del plural, característica de los dialectos orientales y eólicos frente a -μες del griego occidental (Buck 1955: §138.3). Los únicos testimonios continentales tesalios son ἐπινοείσουμεν (IG IX,2 517; Larisa, 214 a.C.) y εκριννα​μεν (SEG 43:311; Escotusa, 197-185 a.C.). El corpus ofrece dos testimonios. El primero es I.Dodone DVC 336A (segunda mitad del s. IV a.C.), discutido en §4.1.2: independientemente de la lectura adoptada (editores o Méndez Dosuna), se trata de una 1ª pl. con -μεν. El segundo es μα[στε]ύουμεν en I.Dodone DVC 3274A (primera mitad del s. IV a.C.), que presenta además el cierre vocálico ω > ου característico del dialecto (cf. §3.1.1). El valor diagnóstico de -μεν depende en ambos casos de la presencia de otros rasgos tesalios en la misma inscripción: en 336A, el léxico (λειτορεῖον) y ὀν- (cf. §4.1.2); en 3274A, el vocalismo ⟨ΟΥ⟩ por ⟨Ω⟩.",
    cat: "Morfología", dvcs: ["336A","3274A"] },
  // §4.2.2  Desinencia -εν (3ª pl. aor.)
  { id: 14, name: "-εν por -ν en 3ª pl. aoristo", short: "3ª pl. aor. -εν",
    desc: "La 3ª persona del plural del aoristo presenta en tesalio la desinencia secundaria -εν en lugar del -ν resultante de la reducción regular del grupo *-ντ. El dossier epigráfico del fenómeno, recopilado inicialmente por Morpurgo Davies (1965: 237-238) y ampliado sucesivamente por Blümel (1982: 195-198) y García Ramón (2008: 197), cuenta con doce ejemplos de la desinencia -εν en inscripciones tesalias, entre los que destaca el aoristo ὀνεθείκαεν (IG IX,2 244.4; Farsalo, Tesaliótide, s. IV a.C.). Junto a -εν, está documentada una variante -ιεν, restringida geográficamente a Pelasgiótide, con ejemplos como ἐδώκαιεν (SEG 23, 422.3; Feras, s. IV a.C.) y εστασαιεν (IGC 9, 1.32; Larisa, finales s. III a.C.). El único testimonio del corpus es ἀρρωστήσαεν en I.Dodone DVC 556A (Pelasgiótide, finales s. IV a.C.). Esta forma es, junto a ἐστάσαεν en SEG 35:494 (Átrax, Pelasgiótide, s. III a.C.), la única forma de aoristo sigmático con la desinencia -εν atestiguada en tesalio. Resulta significativo que el testimonio del corpus proceda precisamente de Pelasgiótide, región donde están documentados tanto el sufijo -εν como -ιεν, si bien este testimonio aislado no permite aportar más información sobre la utilización de uno u otro.",
    cat: "Morfología", dvcs: ["556A"] },
  // §4.2.3  Infinitivos temáticos en -μεν
  { id: 15, name: "Infinitivos temáticos en -μεν", short: "Inf. -μεν",
    desc: "La extensión de la desinencia de infinitivo atemático -μεν a los verbos temáticos es uno de los rasgos más característicos de los dialectos eolios. En tesalio, sin embargo, su distribución geográfica es más restringida: Buck (1955: §155.1) recoge el sufijo como característica de Pelasgiótide, con ejemplos como κοινανεῖμεν (SEG 43, 310.5-6; Escotusa, s. IV-III a.C.) y γαοργεῖμεν (IG IX,2 1229.16-17; Falana, principios s. II a.C.). Por su parte, Blümel (1982: §224) concluye que la desinencia -μεν para infinitivos tanto atemáticos como temáticos está documentada con seguridad únicamente en Pelasgiótide y Perrebia. El corpus ofrece dos testimonios, ambos en inscripciones adscritas precisamente a Pelasgiótide, lo que es plenamente coherente con la distribución regional del rasgo. El primero es ἐσκιχρέμεν en I.Dodone Lhôte 8B (Pelasgiótide, s. III-II a.C.). El segundo es χαλκοπο̄λε͂μεν en I.Dodone DVC 3008A (primera mitad del s. IV a.C.), infinitivo del hápax χαλκοπωλέω ('ser comerciante de bronce'). La adscripción tesalia de la inscripción viene confirmada además por la presencia del término λιμήν con el significado dialectal de 'mercado' (cf. rasgo 24). La autopsia de la laminilla en la Eforía de Antigüedades de Ioánina ha permitido también identificar una segunda línea, hasta ahora inédita, que contiene el vocablo τυχαία (cf. rasgo 30); véase Candel Lozano (2026) para la edición completa. La presencia de esta particular desinencia en I.Dodone DVC 3008A invita a postular un origen pelasgiota también para esta inscripción.",
    cat: "Morfología", dvcs: ["3008A","LOD 8B"] },
  // §4.2.4  Aoristos en -ξ-
  { id: 16, name: "Aoristos en -ξ- (verbos en -άζω/-ίζω)", short: "Aor. -ξ-",
    desc: "La extensión de -ξ- al futuro y al aoristo de los verbos en -άζω/-ίζω es característica del griego occidental y, junto a él, del tesalio, el beocio (en parte) y el arcadio. Los testimonios más sólidos proceden todos de Pelasgiótide y se fechan a partir del s. III a.C.: ψαφιξαμένας, ψα[φ]ίξασθει[ν] (IG IX,2 517; Larisa, 214 a.C.), φρο]ντίξειν (SEG 41:510.4; Larisa, s. III a.C.), ἐψαφίξατο (SEG 31:572; Cranón, ca. 200 a.C.) y SEG 43:311 (Escotusa, 197-185 a.C.). Blümel (1982: §203) se muestra cauto respecto de estas evidencias: cuestiona la autenticidad de ἐργάξατο (IG IX,2 602 y 1027b; s. V a.C.) por razones paleográficas y sugiere que la forma genuinamente tesalia podría haber sido en realidad -σσ-, como en lesbio, siendo los ejemplos tardíos de -ξ- resultado de influencia noroccidental. García Ramón (2007b: 6-7), sin embargo, concluye que su repetida presencia en Pelasgiótide indica que el rasgo era general en todo Tesalia, aunque el resto del territorio no ofrezca evidencia directa. El corpus ofrece dos testimonios. El primero es δικάξεσθαι en I.Dodone DVC 224A (mediados s. IV a.C.), inscripción que presenta rasgos tesalios (Ἄπλον) junto a elementos de la koiné. El segundo es οἰκο<νο>μίξο̄μεν / ὀ⟨γ⟩κομίξομεν en I.Dodone DVC 336A (segunda mitad del s. IV a.C.), inscripción cuya adscripción al dialecto tesalio no ofrece duda alguna (cf. §4.1.2). El caso de I.Dodone DVC 224A, con claros rasgos de koiné, encaja con la hipótesis de Blümel de una -ξ- ajena al tesalio que penetra en textos con influencia dialectal externa; el de I.Dodone DVC 336A, en cambio, es una inscripción de adscripción tesalia sólida sin contaminación aparente, lo que resulta más difícil de explicar desde esa misma hipótesis (aunque si se tratara de una inscripción de Pelasgiótide se resolvería la aparente contradicción). En definitiva, el corpus no permite, con solo dos testimonios y de naturaleza tan diferente, dilucidar si la extensión del rasgo se debe a la influencia de la koiné o tiene un origen genuinamente tesalio.",
    cat: "Morfología", dvcs: ["224A","336A"] },
  // §4.2.5  γίνυμαι por γίγνομαι
  { id: 17, name: "γίνυμαι atemático", short: "γίνυμαι",
    desc: "El verbo γίγνομαι presenta en tesalio y en beocio una flexión atemática, γίνυμαι. La forma está documentada en la epigrafía tesalia continental desde el s. III a.C., con ejemplos como γινύειτει (IG IX,2 517.22-23; Larisa, finales s. III a.C.) o γινυμέναι (BCH 1970: 161ss.; Metrópolis, s. III a.C.), y pervive hasta el s. I a.C., cuando es desplazada por γίνομαι (Blümel 1982: §53.2). El rasgo es compartido con el beocio, donde está igualmente bien atestiguado. El corpus de Dodona ofrece cinco inscripciones con formas de este paradigma: [γ]ίνυται en I.Dodone DVC 162B (finales s. V a.C.) y 3673B (s. IV a.C.), γίνυτα(ι) en I.Dodone DVC 38A (primer cuarto del s. IV a.C.), γίνυτι[αι] en I.Dodone DVC 1676A (s. IV a.C.) y γινυτ en I.Dodone DVC 328 (principios s. IV a.C.). Sin embargo, para ninguna de ellas puede descartarse un origen beocio. La dificultad de distinción se agrava porque ambos dialectos comparten el rasgo de manera sistemática y las inscripciones en cuestión son extremadamente cortas o fragmentarias, sin otros rasgos privativos que permitan una adscripción segura. En consecuencia, γίνυμαι tiene un valor diagnóstico limitado en el corpus y no puede emplearse de manera aislada como criterio de identificación dialectal: solo la aparición conjunta con rasgos privativos de uno u otro dialecto permitiría decantarse por una adscripción, y ninguna de las cinco inscripciones del corpus ofrece, por desgracia, ese contexto.",
    cat: "Morfología", dvcs: ["162B","3673B","38A","1676A","328"] },
  // §4.2.6  ἔνθι (3ª pl. εἰμί)
  { id: 18, name: "3ª pl. ἔνθι (= ático εἴσι)", short: "ἔνθι = εἴσι",
    desc: "El tesalio, junto con el beocio, presenta θ en las desinencias de 3ª persona del plural activa, fenómeno que Buck (1955: §139.2) atribuye a la influencia analógica de -μεθα y -σθε y que está bien documentado en la epigrafía tesalia continental: cf. κατοικείουνθι (IG IX,2 514; Larisa, Pelasgiótide, fecha desconocida). La forma ἔνθι, equivalente dialectal del ático εἰσί, está atestiguada en Tesalia en dos inscripciones: IGC 9,1 (Larisa, Pelasgiótide, finales del s. III a.C.) y SEG 64:501 (Larisa, Pelasgiótide, 219 a.C.). El corpus ofrece un único testimonio: I.Dodone DVC 3809B (primera mitad del s. IV a.C.), cuyo texto, ἔνθι· θεός, es prácticamente ininteligible (Méndez Dosuna 2018a: 283). La extrema brevedad del texto y la ausencia de cualquier otro rasgo dialectal identificable no permiten resolver con certeza si la forma es tesalia o beocia, pues la desinencia -νθι es compartida por ambos dialectos. Con todo, dado que ἔνθι está documentada en inscripciones tesalias y no beocias, su adscripción al tesalio resulta la hipótesis más fundada.",
    cat: "Morfología", dvcs: ["3809B"] },
  // §4.3.1  Ordinal πρῶτος
  { id: 19, name: "Ordinal πρῶτος (προ͂τας)", short: "προ͂τας",
    desc: "El tesalio, junto con el lesbio, presenta la forma πρῶτος para el ordinal «primero», que se opone al πρᾶτος del beocio y los dialectos occidentales (Buck 1955: §114.1; Blümel 1982: §290). El corpus ofrece un único testimonio: I.Dodone DVC 1351A (Histiótide, primera mitad del s. V a.C.), donde aparece la forma προ͂τας en el sintagma ὅσπερ προ͂τας ἀπεδείξατε.",
    cat: "Morfología", dvcs: ["1351A"] },
  // ═══ SINTAXIS (20–22) ═══
  // §5.1  Pron. interr.-indef. como relativo indef.
  { id: 20, name: "Pron. interr.-indef. como relativo indef.", short: "Interr. → rel. indef.",
    desc: "En tesalio, el pronombre interrogativo-indefinido τίς/κίς puede asumir la función de relativo indefinido ὅστις, generalmente junto a la partícula modal κε. Buck (1955: §131) documenta este uso como rasgo regular del dialecto con ejemplos como κίς κε γινύειτει (= ático ὅστις ἂν γίγνηται) o φυλᾶς ποίας κε βέλλειτει (= ático φυλῆς ὁποίας ἂν βούληται) en IG IX,2 517 (Larisa, Pelasgiótide, 214 a.C.). El corpus ofrece un único ejemplo seguro en I.Dodone DVC 556A (Pelasgiótide, finales del s. IV a.C.): αἰ ἔστι κίννι κε θεῶν δρᾶντες τοῖς λοιποῖς στάμα γενηθείε̄ καὶ ὑγίεια, donde Méndez Dosuna (2018a: 284) propone que κίννι κε equivale al ático ὅτῳ ἄν, con el pronombre interrogativo-indefinido (en su variante con geminada hiperdialectal) funcionando como relativo indefinido.",
    cat: "Sintaxis", dvcs: ["556A"] },
  // §5.2  Adjetivo gentilicio en lugar del genitivo
  { id: 21, name: "Adjetivo gentilicio en lugar de genitivo", short: "Adj. gentilicio",
    desc: "Rasgo característico de los dialectos eolios (Buck 1955: §168): el adjetivo gentilicio concuerda con el sustantivo en lugar del genitivo esperado. Está documentado en la epigrafía tesalia tanto en patronímicos (Ἐπικράτεις Ἐπικρατίδαιος, IG IX,2 517; Larisa, 214 a.C.) como en designaciones de territorios cívicos (ἡ Φεραική γῆ, ἡ Σκοτουσσαία; Helly 1995: 161). El corpus ofrece un único testimonio en I.Dodone DVC 2940B (primera mitad del s. IV a.C.): πὲρ πόλιος Φεραίας, donde el gentilicio Φεραίας (= 'de Feras') sustituye al genitivo Φεραίων.",
    cat: "Sintaxis", dvcs: ["2940B"] },
  // §5.3  αἰ en interrogativas indirectas totales
  { id: 22, name: "αι en interrogativas indirectas totales", short: "αι interr. indir.",
    desc: "El uso de αι (= ático εἰ) como introductor de interrogativas indirectas totales en consultas de adscripción tesalia es un rasgo identificado por Nieto Izquierdo (2019). El corpus ofrece cuatro testimonios seguros, todos respaldados por otros marcadores dialectales tesalios: I.Dodone Lhôte 8B (Pelasgiótide, ss. III-II a.C.), con el verbo introductor ἐπικοινᾱται explícito y el infinitivo atemático ἐσκιχρέμεν; I.Dodone Lhôte 80A (ca. 375 a.C.), donde ἐρουτᾱι Κλεούτας pregunta αἰ ἔστι αὐτο͂ προβατεύοντι ὄ̄ναιον καὶ ὠφέλιμον; I.Dodone DVC 948A (primera mitad del s. V a.C.), con la apócope πέρ como marcador tesalio y el verbo de pregunta sobrentendido; e I.Dodone DVC 1352A (primera mitad del s. V a.C.), cuya estructura πὲρ γυναικὸς αἰ ἔχε̅ ἒ̅ μὲ̅ Πάρμονος es paralela a la de 948A y está respaldada por la apócope πέρ y su posición en la misma laminilla que 1351A (Histiótide). I.Dodone DVC 3479A, incluida por Nieto Izquierdo (2019: 113) por el antropónimo Πορτῖνος, se excluye aquí por sus rasgos dóricos: πραξοῦμες es un futuro dórico con la desinencia -μες, ajena al tesalio, que emplea sistemáticamente -μεν (cf. rasgo 13); su αἰ debe entenderse como el condicional con apódosis omitida propio de las consultas dóricas.",
    cat: "Sintaxis", dvcs: ["LOD 8B","LOD 80A","948A","1352A"] },
  // ═══ VOCABULARIO (23–30) ═══
  // §6.1  τᾶμον
  { id: 23, name: "τᾶμον (adverbio 'en el momento presente')", short: "τᾶμον",
    desc: "El adverbio τᾶμον 'en el momento presente, actualmente' es uno de los términos más reconocibles del léxico tesalio. En la epigrafía continental aparece en IG IX,2 517 (Larisa, Pelasgiótide, 214 a.C.), donde se sustantiva con artículo (τὸ τᾶμον, τὰς τᾶμον), y en SEG 64:501 (Larisa, Pelasgiótide, 219 a.C.) hasta en tres ocasiones con el mismo valor. El corpus de Dodona ofrece dos testimonios: I.Dodone DVC 75 y I.Dodone DVC 31A. A diferencia de los testimonios continentales, en Dodona τᾶμον no aparece directamente precedido del artículo, lo que podría indicar que conserva aquí su valor adverbial original. Beekes (2010: s.v. τῆμος) relaciona la forma tesalia con el adverbio épico τῆμος 'entonces, en ese momento' (dór. τᾶμος), del que sería una nominalización: τό + τᾶμος.",
    cat: "Vocabulario", dvcs: ["75","31A"] },
  // §6.2  λιμήν
  { id: 24, name: "λιμήν ('mercado', no 'puerto')", short: "λιμήν",
    desc: "En tesalio y en chipriota, λιμήν presenta un valor semántico especializado: 'mercado, plaza de mercado', alejado del significado habitual del término en el resto del griego, donde designa el puerto. Se trata, según la tipología de García Ramón (2018), de un término compartido con otros dialectos pero con un valor semántico diferenciado. El testimonio más elocuente es Dión Crisóstomo (11.24): οἱονεὶ τὴν ἀγορὰν ἐκάλει λιμένα, Θετταλῶν ἀκούσας ('como si llamara al ágora puerto, habiéndolo escuchado de los tesalios'). El corpus ofrece un único testimonio: ἐλ λιμένι χαλκοπο̄λε͂μεν en I.Dodone DVC 3008A (primera mitad del s. IV a.C.), consulta sobre ejercer el comercio del bronce en el mercado. La autopsia realizada en la Eforía de Antigüedades de Ioánina en 2024 identificó además una segunda línea inédita con el vocablo τυχαία (cf. rasgo 30), lo que refuerza la adscripción tesalia y adelanta la documentación de este uso semántico a una cronología anterior a la de los testimonios continentales.",
    cat: "Vocabulario", dvcs: ["3008A"] },
  // §6.3  ταγά
  { id: 25, name: "ταγά (magistratura del ταγός)", short: "ταγά",
    desc: "El sustantivo ταγά designa el cargo o el período de ejercicio del ταγός, magistratura más característica de la organización política tesalia. Aparece en la fórmula κε̅ν ταγᾶ κε̅ν ἀταγίαι (= ático ἐν πολέμῳ καὶ εἰρήνῃ) de IG IX2 257 (Tetonio, Tesaliótide, s. V a.C.), donde ταγά y ἀταγία designan respectivamente el estado de guerra y de paz. Colvin (1999: 289) ha propuesto que ταγά no deriva directamente de ταγός sino de τάσσω con el sentido de 'tiempo de guerra'. Cabe señalar que el término aparece también en boca de la espartana Lampito en Ar. Lys. 105 (ἐκ τᾶς ταγᾶς), lo que sugiere que su uso no era exclusivo del tesalio. El corpus ofrece un único testimonio, I.Dodone DVC 3150A (s. IV a.C.): [π]ὲρ : ταγ̣ᾶς. Los editores consideran la laminilla laconia o tesalia; la apócope πὲρ, exclusiva del tesalio en el corpus, inclina la balanza hacia la adscripción tesalia, aunque el estado fragmentario del texto no permite ir más allá.",
    cat: "Vocabulario", dvcs: ["3150A"] },
  // §6.4  κατίγνειτος
  { id: 26, name: "κατίγνειτος ('hermano', arcaísmo léxico)", short: "κατίγνειτος",
    desc: "Arcaísmo léxico del tesalio para 'hermano', análogo al homérico κασίγνητος y al jónico-ático κασιγνήτης. Bien atestiguado en la epigrafía tesalia en textos sin naturaleza poética: κατιγνείτοιο (IG IX,2 894.3; Larisa, Pelasgiótide, s. IV a.C.) y τοὶ κατιγνείτοι (SEG 31:575; Larisa, Pelasgiótide, 171 a.C.). García Ramón (2004: 255) señala que su presencia en chipriota (ka-si-ke-ne-to, ka-si-ke-ne-ta), con asibilación regular, apunta a que ambas formas pertenecen al fondo léxico más antiguo del griego, conservado en dos dominios geográficamente marginales. El único testimonio epigráficamente fiable del corpus es I.Dodone DVC 3113A; la reconstrucción [κατιγ]ν̣ε͂ταν en I.Dodone DVC 3756A carece de apoyo sólido.",
    cat: "Vocabulario", dvcs: ["3113A"] },
  // §6.5  λειτορεῖον
  { id: 27, name: "λειτορεῖον (hápax, rel. con λείτορας)", short: "λειτορεῖον",
    desc: "Hápax absoluto del corpus, relacionado con el campo semántico de λείτορας 'sacerdote', λειτορεύω 'ejercer de sacerdote' y λειτορεία 'sacerdocio', términos bien atestiguados en la epigrafía tesalia. Su valor semántico es incierto: Méndez Dosuna (2016: 124-125; 2018a: 284), que lee ὀ⟨γ⟩κομίξομεν (= ático ἀνακομίσωμεν) frente al οἰκο(νο)μίξομεν de los editores, propone que designe la «víctima de un sacrificio» (cf. ἱερεῖον), la «asignación económica de un sacerdote» (cf. πρεσβεῖον, τροφεῖον) o la «residencia del sacerdote» (cf. μαντεῖον), y se inclina por la segunda a la vista de τὴν ἱερεωσύνην ἀνακομιεῖται «recuperará su sacerdocio»; el contexto no permite decidir. La presencia en la misma inscripción del preverbio ὀν- (= ἀνά), de la desinencia -μεν de 1ª pl. y del aoristo en -ξ- (rasgo 16) refuerza la adscripción tesalia del texto.",
    cat: "Vocabulario", dvcs: ["336A"] },
  // §6.6  μά
  { id: 28, name: "μά (partícula negativa, = ático μή)", short: "μά = μή",
    desc: "Los editores del corpus proponen reconocer en I.Dodone DVC 3205A la partícula coordinante tesalia μά (= ático δέ) en la secuencia αἴτε μὰ ἄλλο̅ι τινὶ θεο͂ν εὐχομέ[νο̅ι]. Sin embargo, Méndez Dosuna (2018a: 284) rechaza esta interpretación: εἴτε δέ es una combinación muy poco frecuente en ático, y en tesalio la partícula aparece siempre con la modal κα/κε (αἰ μά κε); considera preferible leer μά como la negación (= ático μή) característica del dialecto de Histiótide, frente a μεί en el resto de regiones. La tesis sigue la interpretación de Méndez Dosuna y concluye que no hay ejemplos seguros en el corpus de la partícula coordinante μά = ático δέ, documentada en cambio con seguridad en la epigrafía tesalia continental (cf. αἴ μά κε en SEG 64:501, Larisa, 219 a.C.).",
    cat: "Vocabulario", dvcs: ["3205A"] },
  // §6.7  ἁμοῖ
  { id: 29, name: "ἁμοῖ (adverbio de lugar)", short: "ἁμοῖ",
    desc: "En I.Dodone DVC 3274A (primera mitad del s. IV a.C.), los editores leen ΑΜΟΙΓΑΣ αι μα[στε]ύουμεν e interpretan la secuencia inicial como el nombre propio Αμοιγάς. Méndez Dosuna (2016: 136; 2018a: 285) rechaza esta explicación por forzada e ininteligible y propone leer en su lugar ἁμοῖ γᾶς αι μα[στε]ύουμεν: 'si debemos buscar [tierra] en algún lugar'. El adverbio ἁμοῖ sería el correlativo tesalio del ático ἁμοῦ 'en algún lugar' (cf. Ar. Lys. 24), cuya forma en -οι se explicaría como apócope del genitivo temático singular *ἁμοῖο > ἁμοῖ, proceso documentado también en οἷ en SEG 43, 311.A.72 y B.60 (Escotusa, 197-185 a.C.).",
    cat: "Vocabulario", dvcs: ["3274A"] },
  // §6.8  τυχαῖος
  { id: 30, name: "τυχαῖος, -α, -ον ('auspicioso')", short: "τυχαῖος",
    desc: "El adjetivo τυχαῖος, -α, -ον aparece en el corpus con el valor de 'auspicioso, que trae buena suerte', distinto del sentido de 'fortuito, casual' atestiguado en la prosa literaria tardía. Méndez Dosuna (2016: 129) señaló que las instancias más claras corresponden a consultas probablemente tesalias. La autopsia realizada en la Eforía de Antigüedades de Ioánina en 2024 en el marco de esta tesis permitió identificar una segunda línea inédita en I.Dodone DVC 3008A con el vocablo τυχαία, publicada con edición completa en Candel Lozano (2026), lo que añade un nuevo testimonio y refuerza la hipótesis de una mayor difusión del término en Tesalia. Las atestaciones seguras (I.Dodone DVC 31A, 221B, 1340A, 3192A y ahora 3008A) se encuentran todas en inscripciones con rasgos tesalios. Eidinow (2019: 95) caracteriza τυχαῖος en Dodona como expresión de una cualidad deseable poseída por situaciones o personas. El paralelo más instructivo es el cognado τυχηρός, que en Ar. Ach. 250 y Th. 305 funciona en contextos de oración ritual con el valor de 'propicio, bajo buenos auspicios', contemporáneamente a las laminillas de Dodona.",
    cat: "Vocabulario", dvcs: ["31A","221B","1340A","3005A","3008A","3192A"] },

];


export const RASGO_TEXTS_TES = {
  "31A": "Αἰ τυχαία μοι ἁ ἑπι-\nτροπεία τὰν ἔχου \nτᾶμον Λυκκίδας ;",
  "38A": "αἴτε οὐδε-\nμία κόρα μοι \nγίνυτα(ι)",
  "40B": "[- - -]ΑΙ ἐς Τρίκκας",
  "75": "ποιτηρο͂-\nν ΓΑΡΟΤΕ-\nΟΥ ὅπερ τᾶμον καὶ εἴ 'σστ-\nι τύχα",
  "103A": "[γυ]ν̣αικὶ περὶ το͂ν ὀφθαλμο͂ν \n[ἐ͂] δυνατὸν ὑγιάνναι;",
  "150A": "Γενεᾶς ἔννεκα παιδός;",
  "159A": "Πυρκοτέλεις ἱστορ[εῖ Δία Νάϊον καὶ Διό̅ναν περὶ φρε]-\nάτο̅ν ὀρύξξειν εἶ φιάλλε̅[ι]",
  "162B": "[- - -]ΟΛΕΥΤ[- - -] \n[- - -]Β̣Α [γ]ίνυται Ε[- - -]",
  "217A": "[- - - ἐπερωτῆι] τὸν Δία τὸν Δου-\n[δουναῖον - - -]ος λώϊον κἄμειν-\n[ον - - - χρημ]άτων ἦ τυνχά-\n[νοι - - -] εἰ πράσσοι κα",
  "219B": "θε[ός•] Ἰφι(κρ)άτης̣ [ἐπερωτᾶι τὸν Δία τὸν Νάϊον] \nτίνι θεοῦ εὐχό[μενος - - - περὶ] \nοἰκίας καὶ σωτηρί[ας]",
  "221B": "εἰ τὰν ἔχο̅ τυχαία;",
  "224A": "θεὸς τύχη Ἄπλον• \nΝίκων δ' ἐρ[ω]τᾶι τὸ(ν) θε̣[ὸν] (εἰ) σώ̣σ<θ>εται τὴν δίκη(ν) ἣμ \nμέλλει δικάξεσθα̣ι εἰ καταδικᾶται",
  "328": "πὲρ πανκλαρία(ς) αἰ γίνυ-\nτε̅ καὶ γυναῖκα ἄγετε̅",
  "336A": "εἶ οἰκο(νο)μίξο̅με-\nν τὸ λειτορεῖον;",
  "556A": "θεὸς τύχα ἀγαθά• ἐρωτᾶι Ἀ-\nγιλαΐδας καὶ οἱ συγγενέες \nπὲρ τοῦ ἀρρωστέ̅ματος τ-\nῶν ὀφθαλμῶν τῶν οἱ π-\nατέρες ἀρρωστήσαεν \nαἰ ἔστι κίννι κε θεῶν \nδρᾶντες̣ τοῖς λοιποῖς \nστάμα γενηθείε̅ \nκαὶ ὑγίεια",
  "992A": "Μέννη ἐρωτᾶι τὸν θεὸν \nτίνα κε θεῶν θεραπεύων \nἄριστα πράσσοι",
  "1134A": "[Ζεῦ Νάϊ]ε Εὐανάξα πράσ(σ)ο[νσα] \n[κὰτ νοσεί]ματος τίννι κε θε̣[οῦν] \n[ἀν(α)τιθ]ένσα ὑγιεὶς γέν[οιτο];",
  "1340A": "εἰ γ̣αοργ̣έ̣ω [κ]-\nαὶ ἔστι μο̣ι τυ-\nχαῖον",
  "1351A": "καὶ πὲρ τᾶν κοράο̅ν \nτᾶν μειόνο̅ν αἰ ὅ̅σπερ \nπρό̅τας ἀπεδείξατε",
  "1352A": "πὲρ γυναικὸς αἰ ἔχ-\nε̅ ἒ̅ μὲ̅ Πάρμονος",
  "1416A": "Μελανθίων : θεο͂ν κίννι \nεὐχόμενος Ε[. . . . .9 . . . .];",
  "1465A": "[- - -] τοῖ ἱαρο̣ῖο : τοῖ ἐμπέδο̣ι \n[- - -] κ̣αὶ κεν(ε)ὸ̣ν ἀγαγόμενος \n[- - -] οἴκοι καὶ θαραπεύο̅",
  "1676A": "[ἦ γενε]ὰ γίνυτ[ο];",
  "1909B": "[τᾶι δείναι θυό]νσα(ι) \n[κίννι κε θ]εο͂ν \n[γενεὰ γέν]οιτο;",
  "32B": "Πὲρ τᾶς γυν-\nαικὸς καὶ\nαὕτα ἔχει\nἀσφαλ[έω]ς ;",
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
  "3008A": "ἐ͂ ἐλ λιμένι χαλκοπο̅λε͂μεν\nτυχαῖα;",
  "3055A": "[Ζεῦ Νάϊ]ε Διώνα Θέμι, ἐ͂ γε̣ν̣[εὰ ἐσσεῖται ἐρ]-\n[σεντέρ]α ἐκ Κούας Θέγειτος ΗΛ[- - -];",
  "3113A": "[θεὸς τύχα]ν ἀγαθάν· Ζεῦ̣ Δ[ω]-\n[δωναῖε καὶ Δι]ώνη<ι>· Καλλιρόα ἐπερω-\n[τᾶι τὸν θεὸ]ν καὶ τὰν θεὸν περὶ τᾶς \n[- - - κορ]άουν τοῖς θεοῖς τοῖς θε-\n[- - -] αἰ ἔστιν οἱ βέλτιον καὶ \n[ἄμεινον - - - θ]εραπεύονσαν εἲ πὲρ τ-\n[- - -]ν̣ καὶ τᾶς παγκλαρ̣ίας \n[- - -] τ̣οῖ κατ<ε>ιγνείτοιο αἰ ἀρκέ-\n[σει - - -] εἲ σούσεται πὲρ τᾶς κό-\n[ρας - - -] γάμοιο Ἀν̣δρομά-\n χας",
  "3150A": "[π]ὲρ : ταγ̣ᾶς",
  "3192A": "πὲρ τᾶς ἱα[ρ]α̣τείας ΑΝ[. . .] \nΚλέωνι ε(ἴ)περ ΑΛ[. . . 6 . . .] \nΕΡ[.]ΝΟ[.] Ἀ̣γίο̣χος ΣΑ τ-\nυχα̣ιότερο[ν] καὶ λώϊον \nτὰν τᾶι (Ἀ)ρτέμιδι",
  "3205A": "αἴτε μὰ ἄλλο̅ι τινὶ θεο͂ν εὐχομέ[νο̅ι - - -]\nὑγρὸς γένοιτο",
  "3274A": "ΑΜΟΙΓΑΣ ἇι μα[στε]-\nύουμεν",
  "3673B": "[- - -] ἀνθθέμ[ενος - - -] \n[- - -] γίνυται [- - -]",
  "3687A": "[ὁ δεῖνα ἐπερωτᾶι τί]νι κα θεοῦν εἴει \n[- - -]Μ[- - -] \n[- - - τύ]χαν [- - -]",
  "3688A": "πὲρ το͂ν πρ[οβάτο̅ν]",
  "3809B": "ἔνθι· \nθεός",
  "3921": "ἐ͂ ἄσστα;",
  "4119B": "[- - -][.] ὀνέθεσα",
  "4128B": "[- - -] ποιῶν ἄστα̣ [- - -]",
  "948A": "Πὲρ τᾶς γυν-\nαικὸς αἰ τυν(χάνοιμι).",
  "3005A": "[- - -] τυχαῖον Α[- - -]",
  "LOD 8B": "Ἐπικοινᾶται Μον[δ]α̣ιατᾶν τὸ κοινὸν Δὶ Νάωι καὶ Διώναι{ς} πὲρ \nτο⟨ῖ⟩ [ἀρ]γύρροι τᾶς Θέμιστος αἰ ἀ⟨ν⟩εκτ[ό]ν ἐστι τᾶ Θέμι-\n⟨σ⟩τι καὶ βέλτιον ἐσκιχρέμεν.",
  "LOD 80A": "Ἐρουτᾶι Κλεούτας τὸν Δία καὶ τὰν \nΔιώναν αἴ ἐστι αὐτο͂ προβατεύοντι \nὄναιον καὶ ὠφέλιμον.",
};
