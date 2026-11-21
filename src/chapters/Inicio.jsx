// Pantalla de inicio: presenta el atlas, su relación con la tesis y lo que contiene. Tres animaciones: una laminilla que
// se despliega y se graba letra a letra hasta mostrar sus rasgos dialectales, el mapa de los lugares que nombran las
// consultas y las cifras del corpus. Con prefers-reduced-motion todo aparece en su estado final (index.css, “Inicio”).
import { useEffect, useRef, useState } from "react";
import { C, DIALECT_COLORS, fade } from "../theme.js";
import { MACROGRUPOS, TOTAL_CORPUS, TOTAL_DOR, TOTAL_DOR_NO, TOTAL_SEV, TOTAL_TES, TOTAL_BEOC, miles } from "../data/corpus.js";
import { TOTAL_INSCRIPCIONES } from "../data/introduccion.js";
import { getInscription, normGreekMarks, renderDesc } from "../lib/text.jsx";
import { Ref } from "../components/Inscriptions.jsx";
import { Pie } from "../components/ui.jsx";
import { JAK_LAND_PATH } from "../components/maps/coastlines.js";
import { makeProj, star } from "../components/maps/geo.js";
import { AUTOR, DOI, INSTITUCION, TESIS, TITULO_SITIO } from "../sitio.js";
import "./inicio.css";

const ORO = C.gold;
const DOR = DIALECT_COLORS.dorico;
const macro = (n) => MACROGRUPOS.find((m) => m.name === n).value;

// Aparece (añade la clase "visto") cuando el elemento entra en la ventana; sin IntersectionObserver, al momento.
function useVisto(margen = "0px") {
  const ref = useRef(null);
  const [visto, setVisto] = useState(() => typeof IntersectionObserver === "undefined");
  useEffect(() => {
    const el = ref.current;
    if (!el || visto) return undefined;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisto(true); io.disconnect(); } }, { rootMargin: margen, threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, [margen, visto]);
  return [ref, visto];
}
const sinMovimiento = () => typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

// ── La laminilla: I.Dodone DVC 4, con el texto de la edición ─────────────
// Rasgos de la inscripción según el dórico general (cap. 7.1.1): la ᾱ, -ντι sin asibilación, αἰ y α + ε > η.
const LAMINILLA = "DVC 4";
const RASGOS = [
  { n: 1, forma: "τύχα", txt: <>ᾱ, frente a la η del jónico-ático</> },
  { n: 2, forma: "-ντι", txt: <>-ντι sin asibilación, frente a -ουσι</> },
  { n: 3, forma: "αἰ", txt: <>la conjunción αἰ, frente a εἰ</> },
  { n: 4, forma: "νικῆν", txt: <>α + ε &gt; η, frente a νικᾶν</> },
];
const rasgoDe = (w) => {
  const p = w.replace(/[^\p{L}\p{M}]/gu, "");
  if (p === "τύχα") return 1;
  if (/ντι$/u.test(p)) return 2;
  if (p === "αἰ") return 3;
  if (p === "νικῆν") return 4;
  return 0;
};
const PASO = 38;            // ms por letra
const INICIO_GRABADO = 1100;

function Laminilla() {
  const ins = getInscription(LAMINILLA);
  const [vuelta, setVuelta] = useState(0);
  const lam = useRef(null);
  const lineas = normGreekMarks(ins.text).split("\n").map((l) => l.replace(/\s+$/, ""));
  let k = 0;
  const filas = lineas.map((l) => l.split(/(\s+)/).map((w) => {
    const letras = (w.match(/\P{M}\p{M}*/gu) || []).map((g) => ({ g, d: INICIO_GRABADO + (k++) * PASO }));
    return { w, r: /\S/.test(w) ? rasgoDe(w) : 0, letras };
  }));
  const fin = INICIO_GRABADO + k * PASO;
  const dRasgo = (n) => fin + 350 + (n - 1) * 520;
  const dSello = dRasgo(RASGOS.length) + 500;
  // Brillo del plomo que sigue al cursor.
  const mueve = (e) => {
    const r = lam.current?.getBoundingClientRect();
    if (!r) return;
    lam.current.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    lam.current.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };
  return (
    <figure key={vuelta} className="ini-lam-fig" aria-label={`Texto de I.Dodone DVC 4: ${ins.text}`}>
      <div ref={lam} className="ini-lam" onPointerMove={mueve}>
        <div className="ini-lam-pliegue" aria-hidden="true" />
        <pre lang="grc" className="ini-lam-texto" aria-hidden="true">
          {filas.map((ws, i) => (
            <span key={i} className="ini-lam-linea">
              {ws.map(({ r, letras }, j) => {
                const cont = letras.map(({ g, d }, x) => <span key={x} className="ini-l" style={{ animationDelay: `${d}ms` }}>{g}</span>);
                return r
                  ? <span key={j} className="ini-rasgo" style={{ animationDelay: `${dRasgo(r)}ms` }}>
                      {cont}<sup className="ini-num" style={{ animationDelay: `${dRasgo(r)}ms` }}>{r}</sup>
                    </span>
                  : <span key={j}>{cont}</span>;
              })}
              {"\n"}
            </span>
          ))}
        </pre>
        <div className="ini-sello" style={{ animationDelay: `${dSello}ms` }} aria-hidden="true">Dórico general</div>
      </div>
      <figcaption className="ini-lam-pie">
        <div className="ini-lam-ref">
          <Ref src="DVC" id="4" /> <span style={{ color: C.dim }}>({ins.date}), texto de la edición</span>
        </div>
        <ol className="ini-rasgos">
          {RASGOS.map((x) => (
            <li key={x.n} style={{ animationDelay: `${dRasgo(x.n)}ms` }}>
              <span className="ini-rasgos-n">{x.n}</span><span className="greek-run">{x.forma}</span>: {x.txt}
            </li>
          ))}
        </ol>
        <button className="ini-repetir" style={{ animationDelay: `${dSello + 400}ms` }} onClick={() => setVuelta((v) => v + 1)}>
          ↻ Volver a grabarla
        </button>
      </figcaption>
    </figure>
  );
}

// ── Cifras que cuentan hacia arriba ───────────────────────────────────
function Cifra({ valor, pre = "", txt, color, visto }) {
  const [n, setN] = useState(0);
  const quieto = sinMovimiento();
  useEffect(() => {
    if (!visto || quieto) return undefined;
    let raf;
    const t0 = performance.now(), dur = 1800;
    const paso = (t) => {
      const x = Math.min(1, (t - t0) / dur);
      setN(Math.round(valor * (1 - (1 - x) ** 3)));
      if (x < 1) raf = requestAnimationFrame(paso);
    };
    raf = requestAnimationFrame(paso);
    return () => cancelAnimationFrame(raf);
  }, [visto, valor, quieto]);
  return (
    <div className="ini-cifra">
      <div className="ini-cifra-n" style={{ color }}>{pre}{miles(quieto ? valor : n)}</div>
      <div className="ini-cifra-t">{txt}</div>
    </div>
  );
}

function Cifras() {
  const [ref, visto] = useVisto();
  return (
    <section ref={ref} className="ini-cifras" aria-label="El corpus en cifras">
      <Cifra visto={visto} valor={TOTAL_INSCRIPCIONES} txt={<>inscripciones en <i>I.Dodone DVC</i> e <i>I.Dodone Lhôte</i></>} color={C.blue} />
      <Cifra visto={visto} valor={TOTAL_CORPUS} txt="conservan algún rasgo dialectal visible" color={C.terra} />
      <Cifra visto={visto} valor={1250} pre="≈ " txt={<>laminillas de plomo en <i>I.Dodone DVC</i></>} color={C.ink} />
      <div className="ini-cifra">
        <div className="ini-cifra-n" style={{ color: ORO }}>ss. VI-II <small>a.C.</small></div>
        <div className="ini-cifra-t">según las ediciones; ninguna laminilla es con seguridad posterior al 167 a.C.</div>
      </div>
    </section>
  );
}

// ── Mapa: los lugares que nombran las consultas ──────────────────────
const VISTA = { lon0: 14.0, lon1: 24.6, lat0: 35.0, lat1: 42.5 };   // la de JAK_LAND_PATH
const P = makeProj(VISTA);
const [DX, DY] = P.p(20.788, 39.546);
// Se recorta el mar vacío del norte y del sur: la ventana visible va de 42,3 a 36,4 N.
const Y0 = P.p(0, 42.3)[1], ALTO = P.p(0, 36.4)[1] - Y0;
const MARES = [["Mar Adriático", 17.1, 41.9, -32], ["Mar Jónico", 18.6, 37.6, 0], ["Mar Egeo", 24.0, 38.9, 0]];
const GENERICOS = new Set(["Dodoneos", "Adriático", "Sicilia", "Italia", "Libia", "Tesalia"]);
const GRUPOS_MAPA = [
  ["Dórico general", DIALECT_COLORS.dorico], ["Dórico noroccidental", DIALECT_COLORS.doricoNO], ["Doris severior", DIALECT_COLORS.severior],
  ["Tesalio", DIALECT_COLORS.tesalio], ["Beocio", DIALECT_COLORS.beocio], ["Jónico-ático y koiné", DIALECT_COLORS.jonicoAtico],
];
// Los toponimos de los mapas de cada capítulo, cargados al acercarse el mapa (son los datos de los capítulos).
const cargarLugares = () => Promise.all([
  import("../data/doricoGeneral.js"), import("../data/doricoNO.js"), import("../data/dorico.js"),
  import("../data/tesalio.js"), import("../data/beocio.js"), import("../data/jonicoAtico.js"),
]).then(([G, N, S, T, B, J]) => {
  const fuentes = [
    [G.TOPONYMS_DOR, 0], [N.TOPONYMS_NO, 1], [S.TOPONYMS_SEV, 2],
    [T.TH_PLACES.filter((t) => ["mencion", "procedencia"].includes(t.kind)), 3],
    [B.BO_PLACES.filter((t) => ["mencion", "procedencia"].includes(t.kind)), 4], [J.TOPONYMS_JAK, 5],
  ];
  const vistos = new Set();
  const out = [];
  for (const [lista, g] of fuentes) {
    for (const t of lista) {
      if (typeof t.lon !== "number" || GENERICOS.has(t.name) || vistos.has(t.name)) continue;
      if (t.lon < VISTA.lon0 || t.lon > VISTA.lon1 || t.lat < VISTA.lat0 || t.lat > VISTA.lat1) continue;
      vistos.add(t.name);
      const [x, y] = P.p(t.lon, t.lat);
      const dx = x - DX, dy = y - DY, dist = Math.hypot(dx, dy);
      if (dist < 6) continue;
      const lado = out.length % 2 ? 1 : -1;
      const cx = (x + DX) / 2 - (dy / dist) * dist * 0.22 * lado, cy = (y + DY) / 2 + (dx / dist) * dist * 0.22 * lado;
      out.push({ name: t.name, g, x, y, d: `M${DX.toFixed(1)},${DY.toFixed(1)} Q${cx.toFixed(1)},${cy.toFixed(1)} ${x.toFixed(1)},${y.toFixed(1)}`, dist });
    }
  }
  return out.sort((a, b) => a.dist - b.dist);
});

function Mapa() {
  const [ref, cerca] = useVisto("400px");
  const [ref2, visto] = useVisto();
  const [lugares, setLugares] = useState(null);
  const [activo, setActivo] = useState(null);
  useEffect(() => { if (cerca && !lugares) cargarLugares().then(setLugares).catch(() => setLugares([])); }, [cerca, lugares]);
  const n = (g) => (lugares || []).filter((l) => l.g === g).length;
  return (
    <div ref={ref}>
      <div ref={ref2} className={`ini-mapa${visto && lugares ? " visto" : ""}`}>
        <svg viewBox={`0 ${Y0.toFixed(0)} ${P.w} ${ALTO.toFixed(0)}`} role="img" aria-label="Mapa de los lugares que nombran las consultas, unidos a Dodona">
          <defs>
            <radialGradient id="iniMar" cx="50%" cy="45%" r="70%">
              <stop offset="0%" stopColor="#f1f2ec" /><stop offset="100%" stopColor="#e3e7e2" />
            </radialGradient>
          </defs>
          <rect y={Y0} width={P.w} height={ALTO} fill="url(#iniMar)" />
          <path d={JAK_LAND_PATH} fill="#f3ecdc" stroke="#b9ae94" strokeWidth={0.7} strokeLinejoin="round" />
          {MARES.map(([t, lon, lat, rot]) => {
            const [x, y] = P.p(lon, lat);
            return <text key={t} x={x} y={y} transform={`rotate(${rot} ${x} ${y})`} textAnchor="middle" className="ini-mar">{t}</text>;
          })}
          {(lugares || []).map((l, i) => {
            const col = GRUPOS_MAPA[l.g][1];
            const d = 200 + i * 45;
            const on = activo === null || activo === l.g;
            return (
              <g key={l.name} style={{ opacity: on ? 1 : 0.12, transition: "opacity .3s" }}>
                <path id={`iniArco${i}`} d={l.d} pathLength="1" className="ini-arco" stroke={col} style={{ animationDelay: `${d}ms` }} />
                <circle cx={l.x} cy={l.y} r={3.6} fill={col} className="ini-punto" style={{ animationDelay: `${d + 900}ms` }}>
                  <title>{l.name}</title>
                </circle>
                {i % 3 === 0 && (
                  <circle r={2.2} fill={col} className="ini-chispa" style={{ animationDelay: `${d + 1400}ms` }}>
                    <animateMotion dur={`${2.6 + (i % 5) * 0.6}s`} repeatCount="indefinite">
                      <mpath href={`#iniArco${i}`} />
                    </animateMotion>
                  </circle>
                )}
              </g>
            );
          })}
          <circle cx={DX} cy={DY} r={9} className="ini-onda" />
          <circle cx={DX} cy={DY} r={9} className="ini-onda ini-onda2" />
          <polygon points={star(DX, DY, 11, 4.6)} fill={C.ink} stroke="#fffaf0" strokeWidth={1.4} />
          <text x={DX + 13} y={DY - 9} className="ini-mapa-dodona">Dodona</text>
        </svg>
        {!lugares && <p className="ini-mapa-cargando" role="status">Cargando el mapa…</p>}
      </div>
      <div className="ini-leyenda" role="group" aria-label="Filtrar el mapa por grupo dialectal">
        {GRUPOS_MAPA.map(([t, col], g) => (
          <button key={t} aria-pressed={activo === g} onClick={() => setActivo(activo === g ? null : g)}
            style={{ borderColor: activo === g ? col : C.border, background: activo === g ? fade(col, 0.1) : "transparent" }}>
            <span style={{ background: col }} />{t}{lugares && <em>{n(g)}</em>}
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Qué hay en el atlas ───────────────────────────────────────────────
const PARTES = {
  introduccion: { k: "Introducción y Parte I", d: "El santuario, el oráculo, las laminillas y sus ediciones; la metodología y el corpus en cifras.",
    n: `${miles(TOTAL_INSCRIPCIONES)} inscripciones` },
  dorico: { k: "cap. 7.1", d: <>El dórico general, el noroccidental y la <i>Doris severior</i>, con sus rasgos, sus mapas y sus inscripciones.</>,
    n: `${TOTAL_DOR + TOTAL_DOR_NO + TOTAL_SEV} inscripciones` },
  eolicos: { k: "cap. 7.2", d: "El tesalio, por regiones y con su vocalismo, y el beocio.", n: `${TOTAL_TES + TOTAL_BEOC} inscripciones` },
  "jonico-atico": { k: "cap. 7.3", d: "El grupo en su conjunto y, por separado, el jónico, el ático y la koiné.", n: `${macro("Jónico-ático-koiné")} inscripciones` },
  mezcla: { k: "cap. 7.5", d: "Las consultas que combinan rasgos de dos grupos dialectales, su tipología y sus explicaciones.",
    n: `${macro("Mezcla dialectal")} inscripciones` },
  minoritarios: { k: "caps. 7.4 y 7.6", d: "El macedonio, el eleo, el acayo y el rodio, y las inscripciones que solo permiten excluir el jónico-ático.",
    n: `${macro("Otros") + macro("No jónico-ático (sin precisar)")} inscripciones` },
};

const CONSEJOS = [
  ["Ψ", "Las inscripciones", "Cada parte tiene una pestaña “Las inscripciones” con sus textos, agrupados y con un buscador que no distingue acentos."],
  ["Ι", "Las citas", "Pasa el cursor por cualquier cita de I.Dodone DVC o I.Dodone Lhôte para leer su texto; al pulsarla, queda fijada."],
  ["Σ", "La certeza", "Cada adscripción es segura, dudosa o de solo nombre o alfabeto; los gráficos lo distinguen con el color pleno, el oro y el gris."],
];

const TITULO = ["Atlas", "dialectal", "de", "las", "laminillas", "oraculares", "de", "Dodona"];

export default function Inicio({ chapters, onEnter }) {
  const partes = chapters.filter((c) => PARTES[c.id]);
  const contenido = useRef(null);
  return (
    <div className="inicio fade-in">
      <div style={{ height: 4, background: `linear-gradient(90deg, ${C.terra}, ${DOR}, ${C.gold}, ${C.tesalio}, ${C.blue})` }} />

      <header className="ini-heroe">
        <div className="ini-heroe-texto">
          <p className="ini-antetitulo">{INSTITUCION} · Tesis doctoral en curso</p>
          <h1 className="ini-titulo" aria-label={TITULO_SITIO}>
            {TITULO.map((w, i) => (
              <span key={i} aria-hidden="true" className={`ini-palabra${w === "laminillas" || w === "oraculares" ? " ini-dest" : ""}`}
                style={{ animationDelay: `${150 + i * 90}ms` }}>{w} </span>
            ))}
          </h1>
          <p className="ini-entrada">
            Desde mediados del s. VI a.C. hasta el s. II a.C., miles de consultas al oráculo de Zeus en Dodona se grabaron en finas hojas de
            plomo. Escritas en dialectos muy diversos, las laminillas oraculares son hoy una fuente única para la dialectología griega. Este
            atlas reúne lo que esos dialectos revelan: cuántas inscripciones se atribuyen a cada uno, con qué rasgos y con qué grado de certeza.
          </p>
          <div className="ini-botones">
            <button className="ini-boton ini-boton-p" onClick={() => onEnter("introduccion")}>Entrar en el atlas</button>
            <button className="ini-boton" onClick={() => contenido.current?.scrollIntoView({ behavior: sinMovimiento() ? "auto" : "smooth" })}>
              Qué contiene ↓
            </button>
          </div>
        </div>
        <Laminilla />
      </header>

      <Cifras />

      <main id="contenido" tabIndex={-1} className="ini-cuerpo">
        <section className="ini-seccion">
          <p className="ini-rotulo">Un oráculo, muchos lugares</p>
          <h2 className="ini-h2">Los lugares que nombran las consultas</h2>
          <p className="ini-parrafo">
            Ciudades, pueblos y regiones que aparecen en las laminillas, del Adriático a Sicilia y del Peloponeso a Tesalia, con el color del
            grupo dialectal en cuyo capítulo se estudian. Pulsa un grupo para verlo por separado.
          </p>
          <Mapa />
          <p className="ini-nota">
            Los arcos unen Dodona con cada lugar nombrado; no indican de dónde procedían los consultantes, cuestión que la tesis examina
            en el cap. 9.1. Costas: Natural Earth (dominio público).
          </p>
        </section>

        <section ref={contenido} className="ini-seccion" style={{ scrollMarginTop: 20 }}>
          <p className="ini-rotulo">Qué contiene</p>
          <h2 className="ini-h2">Las partes del atlas</h2>
          <p className="ini-parrafo">
            El atlas sigue la estructura de la tesis: la introducción y la Parte I sitúan el corpus, y cada grupo dialectal de la Parte II
            tiene aquí su propia parte, con el contexto histórico, el perfil dialectal, los mapas y las inscripciones.
          </p>
          <div className="ini-tarjetas">
            {partes.map((c, i) => (
              <button key={c.id} className="ini-tarjeta" onClick={() => onEnter(c.id)} style={{ "--col": c.color, animationDelay: `${i * 70}ms` }}>
                <span className="ini-tarjeta-k">{PARTES[c.id].k}</span>
                <span className="ini-tarjeta-t">{c.label}</span>
                <span className="ini-tarjeta-d">{PARTES[c.id].d}</span>
                <span className="ini-tarjeta-pie"><span>{PARTES[c.id].n}</span><span className="ini-flecha">Abrir →</span></span>
              </button>
            ))}
          </div>
        </section>

        <section className="ini-seccion">
          <p className="ini-rotulo">Cómo leerlo</p>
          <div className="ini-consejos">
            {CONSEJOS.map(([g, t, d]) => (
              <div key={t} className="ini-consejo">
                <span className="ini-consejo-g" aria-hidden="true">{g}</span>
                <div><div className="ini-consejo-t">{t}</div><p>{renderDesc(d)}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="ini-seccion ini-sobre">
          <p className="ini-rotulo">Sobre este atlas</p>
          <h2 className="ini-h2">Una investigación en abierto</h2>
          <p className="ini-parrafo">
            Este atlas acompaña la tesis doctoral <i>{TESIS}</i>, que {AUTOR} prepara en la {INSTITUCION}. Nace con un doble propósito:
            mostrar en abierto una investigación todavía en curso y poner a disposición de quien se interese por las laminillas los datos en
            que se apoya, de forma accesible y de un modo que permita recorrerlos, filtrarlos y compararlos.
          </p>
          <p className="ini-parrafo">
            Todo lo que aquí se muestra procede de la base de datos de la tesis, en la que las {miles(TOTAL_INSCRIPCIONES)} inscripciones
            de <i>I.Dodone DVC</i> e <i>I.Dodone Lhôte</i> se examinan con unos mismos criterios, y de los capítulos que las estudian. Por
            eso el atlas cambia con la tesis: cuando se revisa una lectura o se corrige una clasificación, el cambio llega también aquí, y
            las cifras pueden variar de una versión a otra. El atlas se archiva en Zenodo, donde puede citarse con su DOI
            (<a href={`https://doi.org/${DOI}`}>{DOI}</a>).
          </p>
          <div className="ini-botones" style={{ justifyContent: "center", marginTop: 26 }}>
            <button className="ini-boton ini-boton-p" onClick={() => onEnter("introduccion")}>Empezar por la introducción</button>
          </div>
        </section>
        <Pie color={C.gold} />
      </main>
    </div>
  );
}
