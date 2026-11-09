// Utilidades de texto: griego politónico y citas de inscripciones enlazadas.
import INSCRIPTION_CORPUS from "../data/inscriptions.json";
import { RASGO_TEXTS_BEOC, RASGO_TEXTS_TES } from "../data/lecturas.js";

// Fragmentos griegos: letras griegas (incluida Ⱶ) con sus marcas combinantes; una
// h/H latina que funciona como signo de aspiración delante de letra griega se
// incluye en el fragmento para que también se dibuje en Cardo.
// eslint-disable-next-line no-misleading-character-class -- las marcas combinantes forman parte de la clase a propósito
const GREEK_RUN_RE = /((?:[hH](?=[\u0370-\u03FF\u1F00-\u1FFF]))?(?:[\u0370-\u03FF\u1F00-\u1FFF\u2C75\u2C76][\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]*)+)/gu;

// Normaliza el circunflejo latino (U+0302) y la tilde (U+0303) que aparecen tras
// algunas letras griegas en los textos de las ediciones a la perispómena griega
// (U+0342). No afecta a los caracteres latinos.
const GREEK_WRONG_CIRC_RE = /([\u0370-\u03FF\u1F00-\u1FFF][\u0300-\u036F]*?)[\u0302\u0303]/gu;
export const normGreekMarks = (str) => String(str).replace(GREEK_WRONG_CIRC_RE, "$1\u0342").normalize("NFC");

export const wrapGreekHtml = (html) => normGreekMarks(html).replace(
  GREEK_RUN_RE,
  '<span class="greek-run" lang="grc">$1</span>',
);

// Línea que rotula una edición dentro de un texto con varias: “[ed. I.Dodone DVC]”,
// “[Méndez Dosuna 2016: 137]”. Empieza por letra latina y no lleva griego, para no
// confundirla con lagunas o restituciones del propio texto (“[- - -]”, “[γυ]ναικί”).
const EDITION_LABEL_RE = /^\[([A-Za-zÀ-ÿ][^\]Ͱ-Ͽἀ-῿]*)\]$/;

const renderEditionLabel = (label, key) => (
  <span className="ed-label" key={key}>
    {label.split(/(I\.Dodone (?:DVC|Lhôte)|CIOD)/).map((s, i) => (i % 2 ? <i key={i}>{s}</i> : s))}
  </span>
);

export const renderGreekText = (text) => {
  if (text == null) return null;
  if (typeof text !== "string") return text;
  const lines = text.split("\n");
  if (lines.some((l) => EDITION_LABEL_RE.test(l.trim()))) {
    // Texto con varias ediciones: cada rótulo en su propia línea, seguido de su texto.
    const parts = [];
    lines.forEach((line, i) => {
      const m = line.trim().match(EDITION_LABEL_RE);
      if (m) { parts.push(renderEditionLabel(m[1], `ed-${i}`)); return; }
      parts.push(<span key={`ln-${i}`}>{renderGreekRuns(line)}{i < lines.length - 1 && "\n"}</span>);
    });
    return parts;
  }
  return renderGreekRuns(text);
};

const renderGreekRuns = (text) => {
  text = normGreekMarks(text);
  const parts = [];
  let last = 0;
  for (const match of text.matchAll(GREEK_RUN_RE)) {
    const [chunk] = match;
    const index = match.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));
    parts.push(<span className="greek-run" lang="grc" key={`grc-${index}-${chunk}`}>{chunk}</span>);
    last = index + chunk.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
};

// "123A" → "I.Dodone DVC 123A"; "LOD 8B" → "I.Dodone Lhôte 8B".
export const fmtDvc = (dvc) => dvc.startsWith("LOD") ? `I.Dodone Lhôte ${dvc.replace("LOD ", "")}` : `I.Dodone DVC ${dvc}`;
// "LOD 8B" → { src: "Lhôte", id: "8B" }; "123A" → { src: "DVC", id: "123A" }.
export const asRef = (dvc) => dvc.startsWith("LOD") ? { src: "Lhôte", id: dvc.replace("LOD ", "") } : { src: "DVC", id: dvc };

// ── Índice de inscripciones citadas ─────────────────────────────
// Clave “DVC 123A” / “Lhôte 8B” → [datación, texto, dialecto, equivalencia DVC].
// Para las inscripciones con lectura propia en los capítulos (lecturas.js)
// se muestra esa lectura.
export const hasInscription = (key) => Boolean(INSCRIPTION_CORPUS[key]);

export const getInscription = (key) => {
  const rec = INSCRIPTION_CORPUS[key];
  if (!rec) return null;
  const i = key.indexOf(" ");
  const src = key.slice(0, i), id = key.slice(i + 1);
  const legacy = src === "Lhôte" ? `LOD ${id}` : id;
  const override = RASGO_TEXTS_TES[legacy] || RASGO_TEXTS_BEOC[legacy];
  return { src, id, date: rec[0], text: override || rec[1], dialect: rec[2]?.replace("NO JON-ÁT", "No jónico-ático"), eq: rec[3] && rec[3] !== key ? rec[3] : null };
};

const INSC_ID = "\\d+[A-Za-z]{0,2}";
const INSC_REF_RE = new RegExp(`I\\.Dodone (DVC|Lhôte) (${INSC_ID})(?![A-Za-z0-9])((?:(?:,\\s*|\\s+[ye]\\s+)${INSC_ID}(?![A-Za-z0-9]))*)`, "g");
const inscSpan = (key, inner) =>
  `<span class="insc-ref" data-insc="${key}" tabindex="0" role="button" aria-label="Ver el texto de la inscripción ${key}">${inner}</span>`;

// Convierte cada cita “I.Dodone DVC 123A” (y las listas “123A, 124B y 125”) en un
// enlace que muestra el texto al pasar el cursor y lo fija al pulsar.
export const linkInscriptionRefs = (html) => html
  .replace(INSC_REF_RE, (m, src, first, rest) => {
    const key = `${src} ${first}`;
    const head = `<em>I.Dodone ${src}</em> ${first}`;
    const tail = rest.replace(new RegExp(INSC_ID + "(?![A-Za-z0-9])", "g"),
      (x) => (INSCRIPTION_CORPUS[`${src} ${x}`] ? inscSpan(`${src} ${x}`, x) : x));
    return (INSCRIPTION_CORPUS[key] ? inscSpan(key, head) : head) + tail;
  })
  .replace(/I\.Dodone (DVC|Lhôte)(?!<\/em>)/g, "<em>I.Dodone $1</em>")
  // Los demás corpus, también en cursiva (CIOD, IG, SEG), salvo que el texto ya los marque.
  .replace(/(?<![\w>])(CIOD|IG|SEG)(?![\w<])/g, "<em>$1</em>");

// Texto con citas enlazadas y griego en Cardo. Admite HTML sencillo (<i>, <b>).
export const renderDesc = (text) => {
  const html = linkInscriptionRefs(String(text ?? ""));
  return <span dangerouslySetInnerHTML={{ __html: wrapGreekHtml(html) }} />;
};
