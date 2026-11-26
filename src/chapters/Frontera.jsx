// Caps. 13-15: la mezcla dialectal (export Mezcla, parte propia del selector) y los dialectos minoritarios y las
// inscripciones no jónico-áticas (export default, con un selector común como el del dórico). Los datos salen de
// data/frontera.js (scripts/datos_frontera.py).
import { useState } from "react";
import { C, DIALECT_COLORS, DIALECT_INK, ORO, PROSE, colorSiglo } from "../theme.js";
import { MACROGRUPOS, TOTAL_CORPUS, miles, pct } from "../data/corpus.js";
import { MOSTRAR_AUTOPSIAS } from "../sitio.js";
import {
  ADSCRIPCION_MEZ, ADSCRIPCION_MIN, ADSCRIPCION_NJA, ALFA_COMPAT_NJA, ALF_MEZ_PIE, ALF_NJA_PIE, ANEXO_MEZ, APARENTES_MEZ, APARTADOS_MIN, BIBLIO_MEZ, CERTEZA_MEZ, CERTEZA_MIN,
  CERTEZA_NJA, CHRONO_MEZ, CHRONO_MIN, CHRONO_NJA, COMBINACIONES_MEZ, COMPATIBLES_NJA, COMPATIBLES_TXT_NJA, CONCEPTO_MEZ, DIALECTOS_MIN, DIVERGENCIAS_MEZ,
  EXPLICACIONES_MEZ, GRUPO_CYG_MEZ, GRUPO_OTRAS_MEZ, INSCRIPCIONES_MIN, NO_RECOGIDAS_MEZ, NUMEROS_MEZ, ORDEN_CYG_MEZ, ORDEN_OTRAS_MEZ, ORDEN_TIPOS_MEZ, OTRAS_MEZ,
  POR_QUE_NJA, RASGOS_NJA, RASGOS_TXT_NJA, THEMES_MEZ, THEMES_MIN, THEMES_NJA, TIPO_MEZ,
  TIPOLOGIA_MEZ, TIPOS_MEZ, TOTAL_MEZ, TOTAL_MIN, TOTAL_NJA,
} from "../data/frontera.js";
import { renderDesc, renderGreekText } from "../lib/text.jsx";
import { Bars, DonutLegend, Temas } from "../components/charts.jsx";

// Las autopsias no se publican: su resultado en la mezcla solo se carga en la versión local (MOSTRAR_AUTOPSIAS en
// sitio.js), si existen sus datos.
const AUTOPSIAS_MEZ = import.meta.env.MODE === "publico" || !MOSTRAR_AUTOPSIAS ? []
  : Object.values(import.meta.glob("../data/autopsiasMezcla.js", { eager: true }))[0]?.AUTOPSIAS_MEZ ?? [];
import { Ref } from "../components/Inscriptions.jsx";
import { Card, ChapterLayout, Sec, Secciones, SectionNav, Stat, Stats, SubNav, Table, TablaRasgos } from "../components/ui.jsx";
import { AdscripcionTable } from "../components/Adscripcion.jsx";
import { Anexo, InscripcionCard } from "../components/Anexo.jsx";

const MEZ = DIALECT_COLORS.mezcla, MEZ_INK = DIALECT_INK.mezcla;
// Otros dialectos: gris pizarra, color propio de la interfaz (los gráficos de la tesis usan el gris de “otros”).
const MIN = "#7d8a99", MIN_INK = "#56677a";
const NJA = DIALECT_COLORS.noJonAt, NJA_INK = DIALECT_INK.noJonAt;
const NOMBRE = "#cbbf9f";   // solo nombre o alfabeto (CERTEZA_COLORES de los gráficos de la tesis)

const SUBSECCIONES = [
  { id: "minoritarios", label: "Otros dialectos", color: MIN },
  { id: "nja", label: "Las inscripciones no jónico-áticas", color: NJA_INK },
];

const BIG = { ...PROSE, fontSize: 13, color: C.text, lineHeight: 1.8 };
const g = (s) => <span className="greek-run">{s}</span>;
const dudosas = (c) => c.dudosas + c.nombre;
const crono = (d) => d.map((x) => ({ ...x, color: colorSiglo(x.period) }));

// Barras apiladas por certeza (mez_1, min_1).
const PorCerteza = ({ data, color, left = 220, height }) => (
  <Bars horizontal data={data} keys={["segura", "dudosa", "nombre"]} indexBy="name" height={height ?? 70 + 40 * data.length} left={left}
    colors={{ segura: color, dudosa: ORO, nombre: NOMBRE }} labels={{ segura: "segura", dudosa: "dudosa", nombre: "solo nombre o alfabeto" }} />
);

const Cifras = ({ total, cert, color, nombre = "solo nombre" }) => (
  <Stats>
    <Stat label="Inscripciones" value={String(total)} accent={color} sub={`el ${pct(total)} % del corpus dialectal`} />
    <Stat label="Seguras" value={String(cert.seguras)} sub={`el ${pct(cert.seguras, total)} %`} accent={C.blue} />
    <Stat label="Dudosas" value={String(cert.dudosas)} sub={`el ${pct(cert.dudosas, total)} %`} accent={ORO} />
    <Stat label={`De ${nombre}`} value={String(cert.nombre)} sub={`el ${pct(cert.nombre, total)} %`} accent={C.muted} />
  </Stats>
);

// ══ Cap. 13: la mezcla dialectal ═══════════════════════════════════
const sinCerteza = (t) => t.replace(/\s*\((dudosa|solo por un nombre|fórmula)\)/g, "");
const certezaDe = (t) => /\(dudosa\)/.test(t) ? "dudosa" : /solo por un nombre/.test(t) ? "solo por un nombre" : null;
const Muted = ({ children }) => <span style={{ color: C.muted }}>{children}</span>;
const Clasificacion = ({ t, color = C.heading }) => (
  <span style={{ color }}>{renderGreekText(sinCerteza(t))}
    {certezaDe(t) && <span style={{ color: "#a0761c", fontSize: 10.5, marginLeft: 6 }}>{certezaDe(t)}</span>}</span>
);
const contar = (xs, f) => xs.reduce((m, x) => ({ ...m, [f(x)]: (m[f(x)] ?? 0) + 1 }), {});

// Ficha de una inscripción en una lista agrupada: referencia y fecha, dos clasificaciones enfrentadas y el motivo.
const FichaComparada = ({ refTxt, date, antes, despues, motivo, extra = null }) => (
  <div style={{ padding: "9px 12px", borderRadius: 8, background: "rgba(255,252,245,0.75)", border: `1px solid ${C.border}` }}>
    <div style={{ display: "flex", justifyContent: "space-between", gap: 8, flexWrap: "wrap", alignItems: "baseline" }}>
      <span style={{ fontFamily: "var(--fh)", fontSize: 13, fontWeight: 700, color: C.heading }}>{renderDesc(refTxt)}</span>
      {date && <span style={{ fontSize: 11, color: C.dim }}>{date}</span>}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", columnGap: 8, rowGap: 2, fontSize: 12, marginTop: 5 }}>
      <span style={{ color: C.dim, fontSize: 11 }}>{antes[0]}</span><span>{renderGreekText(antes[1])}</span>
      <span style={{ color: C.dim, fontSize: 11 }}>{despues[0]}</span><Clasificacion t={despues[1]} color={MEZ_INK} />
    </div>
    {motivo && <p style={{ ...PROSE, fontSize: 12, marginTop: 6, color: C.muted }}>{renderDesc(motivo)}</p>}
    {extra}
  </div>
);
const REJILLA = { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 330px), 1fr))", gap: 8 };

// Grupo de fichas con título, recuento y rejilla.
const Grupo = ({ titulo, n, unidad = "inscripciones", children }) => (
  <Card accent={MEZ} style={{ marginBottom: 12 }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
      <span style={{ fontFamily: "var(--fh)", fontSize: 15, fontWeight: 700, color: MEZ_INK }}>{titulo}</span>
      <span style={{ fontSize: 12, color: C.dim }}>{n} {n === 1 ? unidad.replace(/es$/, "").replace(/s$/, "") : unidad}</span>
    </div>
    <div style={REJILLA}>{children}</div>
  </Card>
);

// La comparación con Crespo y Giannakis (2019) y Giannakis (2024a): el resumen (§4 del capítulo) y las listas completas,
// que hasta la v106 eran el anexo §7.3 (tablas 13 y 14) y desde la v107 solo se publican aquí.
const coincidenBiblio = () => BIBLIO_MEZ.filter((b) => b.tesis.startsWith("Mezcla"));
function ResumenBiblio() {
  return (
    <Sec title="Las mezclas de Crespo y Giannakis (2019) y Giannakis (2024a)"
      sub="Las inscripciones que presentan como mezclas, incluidas las que solo mencionan en nota, frente a la clasificación de la tesis">
      <Stats>
        <Stat label="En sus listas" value={String(BIBLIO_MEZ.length)} sub="mezclas según los autores" accent={C.muted} />
        <Stat label="Coinciden" value={String(coincidenBiblio().length)} sub="también son mezclas en la tesis" accent={MEZ_INK} />
        <Stat label="Otra clasificación" value={String(DIVERGENCIAS_MEZ.length)} sub="la tesis no ve mezcla" accent={C.terra} />
        <Stat label="No recogidas" value={String(NO_RECOGIDAS_MEZ.length)} sub="mezclas de la tesis fuera de sus listas" accent={C.blue} />
      </Stats>
    </Sec>
  );
}
function ComparacionBiblio() {
  const coinciden = coincidenBiblio();
  const motivos = [...new Set(DIVERGENCIAS_MEZ.map((d) => d.grupo))];
  return <>
    <ResumenBiblio />
    <Sec title="Las mezclas en que coinciden" sub={`${coinciden.length} inscripciones que la tesis también cuenta como mezclas, con la combinación que les atribuyen los autores y la de la tesis`}
      note="El componente que los autores llaman koiné se denomina jónico-ático en la tesis salvo que la koiné pueda demostrarse.">
      <Table color={MEZ_INK} sticky maxHeight={520} fontSize={12} rowHeader={0}
        head={["Inscripción", "Cronología", "Según los autores", "Según la tesis", "Páginas"]}
        rows={coinciden.map((b) => [renderDesc(b.ref), <Muted>{b.date}</Muted>, b.autores, <Clasificacion t={b.tesis.replace(/^Mezcla de /, "")} color={MEZ_INK} />,
          <Muted>{b.pags}</Muted>])} />
    </Sec>
    <Sec title="Las que la tesis clasifica de otro modo" sub={`${DIVERGENCIAS_MEZ.length} inscripciones, agrupadas por el motivo por el que no se cuentan como mezclas`}>
      <Bars horizontal data={motivos.map((m) => ({ name: m, value: DIVERGENCIAS_MEZ.filter((d) => d.grupo === m).length, color: C.terra }))}
        height={60 + 38 * motivos.length} left={330} unit="inscripciones" />
      <div style={{ marginTop: 14 }}>
        {motivos.map((m) => {
          const xs = DIVERGENCIAS_MEZ.filter((d) => d.grupo === m);
          return (
            <Grupo key={m} titulo={m} n={xs.length}>
              {xs.map((d) => <FichaComparada key={d.ref} refTxt={d.ref} date={d.date} antes={["Autores", d.autores]} despues={["Tesis", d.tesis]}
                motivo={d.motivo} extra={d.pags && <div style={{ fontSize: 10.5, color: C.dim, marginTop: 4 }}>Crespo y Giannakis {d.pags}</div>} />)}
            </Grupo>
          );
        })}
      </div>
    </Sec>
    <Sec title="Las mezclas de la tesis que no recogen" sub={`${NO_RECOGIDAS_MEZ.length} inscripciones, en su mayoría consultas breves en que la oposición se reduce a dos formas`}>
      <Table color={MEZ_INK} sticky maxHeight={460} fontSize={12} rowHeader={0}
        head={["Inscripción", "Cronología", "Clasificación en la tesis", "Rasgos que se combinan", "Según los autores"]}
        rows={NO_RECOGIDAS_MEZ.map((d) => [renderDesc(d.ref), <Muted>{d.date}</Muted>, <Clasificacion t={d.tesis.replace(/^Mezcla de /, "")} color={MEZ_INK} />,
          <span style={{ fontSize: 12.5 }}>{renderGreekText(d.motivo)}</span>, <Muted>{d.autores}</Muted>])} />
    </Sec>
  </>;
}

// Perfil: las inscripciones que no muestran mezcla dialectal (§4 y tablas 29-34 del capítulo).
const familia = (t) => /^(jónico|ático|koiné)/i.test(t) ? "Jónico-ático y koiné" : /^no jónico/i.test(t) ? "No jónico-ática"
  : /^dórico general|^dórico$/i.test(t) ? "Dórico general" : t[0].toUpperCase() + t.slice(1);
function MezclasAparentes() {
  const motivos = [...new Set(APARENTES_MEZ.map((a) => a.grupo))];
  const n = APARENTES_MEZ.reduce((s, a) => s + a.dvcs.length, 0);
  const nAut = AUTOPSIAS_MEZ.reduce((s, g) => s + g.items.length, 0);
  // Clasificación de cada inscripción: la celda de la tabla lleva una por inscripción («Jónico-ático; no jónico-ática») o una común.
  const clases = APARENTES_MEZ.flatMap((a) => {
    const t = a.tesis.split(/;\s*/).map((x) => familia(sinCerteza(x).trim()));
    return a.dvcs.map((_, i) => t.length === a.dvcs.length ? t[i] : t[0]);
  });
  const porClase = Object.entries(contar(clases, (x) => x)).sort((a, b) => b[1] - a[1]);
  const s4 = TIPOLOGIA_MEZ.filter((x) => x.sec.startsWith("§4"));
  return <>
    <Sec title="Mezclas que solo lo son en apariencia" sub={`${n} inscripciones que la bibliografía o los editores presentan como mezclas y que la tesis clasifica de otro modo (tablas 1-5 del capítulo)`}>
      <Card>
        <p style={PROSE}>
          Muchas proceden de inscripciones fragmentarias o de palimpsestos, y la mayoría se limita a un solo rasgo incompatible con el resto
          del texto, a veces en un antropónimo. La autopsia, que permite comprobar la forma de cada letra, la relación entre las
          inscripciones de una misma laminilla y la mano que las grabó, resulta decisiva, aunque una misma letra no siempre se traza igual
          dentro de un mismo texto, como muestran las dos rho de <Ref src="DVC" id="5A" /> (mediados del s. V a.C.).
        </p>
      </Card>
    </Sec>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 18 }}>
      <Sec title="Por qué no son mezclas" sub="Inscripciones por motivo">
        <Bars horizontal data={motivos.map((m) => ({ name: m, value: APARENTES_MEZ.filter((a) => a.grupo === m).reduce((s, a) => s + a.dvcs.length, 0), color: MEZ }))}
          height={60 + 38 * motivos.length} left={250} unit="inscripciones" />
      </Sec>
      <Sec title="Cómo se clasifican en la tesis" sub="Inscripciones por grupo dialectal">
        <Bars horizontal data={porClase.map(([k, v]) => ({ name: k, value: v, color: C.blue }))} height={60 + 38 * porClase.length} left={170} unit="inscripciones" />
      </Sec>
    </div>
    <Sec title="Inscripciones que no muestran mezcla dialectal, motivo a motivo">
      {motivos.map((m) => {
        const xs = APARENTES_MEZ.filter((a) => a.grupo === m);
        return (
          <Grupo key={m} titulo={m} n={xs.reduce((s, a) => s + a.dvcs.length, 0)}>
            {xs.map((a) => <FichaComparada key={a.ref} refTxt={a.ref} antes={["Mezcla supuesta", a.supuesta]} despues={["Tesis", a.tesis]} motivo={a.motivo} />)}
          </Grupo>
        );
      })}
    </Sec>
    {import.meta.env.MODE !== "publico" && AUTOPSIAS_MEZ.length > 0 && <Sec title="Lo que mostró la autopsia"
      sub={`Las ${nAut} mezclas del capítulo examinadas en Ioánina, por el resultado principal de la autopsia (tabla 34 del capítulo)`}>
      <Bars horizontal data={AUTOPSIAS_MEZ.map((g) => ({ name: g.grupo, value: g.items.length, color: MEZ }))}
        height={60 + 38 * AUTOPSIAS_MEZ.length} left={330} unit="inscripciones" />
      <div style={{ marginTop: 14 }}>
        {AUTOPSIAS_MEZ.map((g) => (
          <Grupo key={g.grupo} titulo={g.grupo} n={g.items.length}>
            {g.items.map((x) => (
              <div key={x.id} style={{ padding: "9px 12px", borderRadius: 8, background: "rgba(255,252,245,0.75)", border: `1px solid ${C.border}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "baseline" }}>
                  <Ref src={x.id.startsWith("LOD ") ? "LOD" : "DVC"} id={x.id.replace(/^LOD /, "")} />
                  <span style={{ fontSize: 11, color: C.dim }}>autopsia de {x.anio}</span>
                </div>
                <p style={{ ...PROSE, fontSize: 12, marginTop: 6, color: C.muted }}>{renderGreekText(x.obs)}</p>
              </div>
            ))}
          </Grupo>
        ))}
      </div>
      <div style={REJILLA}>
        {[
          ["Fuera de ellas, permitió descartar la mezcla", ["2160", "2225A", "2430A", "2432B"]],
        ].map(([t, ids]) => (
          <Card key={t} accent={MEZ}>
            <div style={{ fontFamily: "var(--fh)", fontSize: 13.5, fontWeight: 700, color: MEZ_INK, marginBottom: 6 }}>{t}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{ids.map((id) => <Ref key={id} src="DVC" id={id} />)}</div>
          </Card>
        ))}
      </div>
      <p style={{ ...PROSE, fontSize: 12, marginTop: 10, color: C.muted }}>
        La muestra no es aleatoria, porque la presencia de una mezcla aparente fue uno de los criterios de selección, y la proporción de
        lecturas confirmadas no puede extrapolarse a las demás.
      </p>
    </Sec>}
    {s4.length > 0 && <Sec title="El apartado del capítulo" sub="Pulsa para desplegar el texto completo">
      <Secciones items={s4} color={MEZ_INK} />
    </Sec>}
  </>;
}

export function Mezcla({ switcher, subnav = null }) {
  const [tab, setTab] = useState("context");
  const [anexo, setAnexo] = useState("mezclas");
  const cs = CHRONO_MEZ.filter((d) => d.period.includes("s. IV") && !d.period.includes("–")).reduce((a, d) => a + d.n, 0);
  return (
    <ChapterLayout switcher={switcher} subnav={subnav} color={MEZ_INK} accent={[C.terra, MEZ, C.blue, C.green]}
      title={<>La <em style={{ fontWeight: 700, color: MEZ_INK }}>mezcla dialectal</em> en las laminillas oraculares de Dodona</>}
      subtitle="Rasgos de dos grupos dialectales que no pueden convivir en uno solo · Tipología, explicaciones e inscripciones sin mezcla"
      stats={<>
        <Stat label="Inscripciones" value={String(TOTAL_MEZ)} sub="ss. V–II a.C." accent={MEZ_INK} />
        <Stat label="Corpus dialectal" value={`${pct(TOTAL_MEZ)} %`} sub={`${TOTAL_MEZ} de ${miles(TOTAL_CORPUS)}`} accent={C.terra} />
        <Stat label="Dudosas o de solo nombre" value={`${pct(dudosas(CERTEZA_MEZ), TOTAL_MEZ)} %`} sub={`${dudosas(CERTEZA_MEZ)} de ${TOTAL_MEZ}`} accent={ORO} />
        <Stat label="Con el jónico-ático" value={String(TOTAL_MEZ - 1)} sub="todas salvo una" accent={C.blue} />
      </>}
      tabs={[
        { id: "context", l: "Concepto y criterio", i: "📜" },
        { id: "numeros", l: "La mezcla en números", i: "Σ" },
        { id: "sinmezcla", l: "Sin mezcla dialectal", i: "Δ" },
        { id: "tipos", l: "Tipología y explicación", i: "Μ" },
        { id: "anexo", l: "Las inscripciones", i: "Ψ" },
      ]} tab={tab} onTab={setTab}>

      {/* Una pestaña por apartado del capítulo: §1-§2, §3, §4, §5 con la recapitulación (§6) y los anexos (§7). */}
      {tab === "context" && <>
        <Sec title="Introducción" sub="§1 del capítulo">
          <Secciones items={CONCEPTO_MEZ.filter((x) => x.sec === "§1")} color={MEZ_INK} abierto />
        </Sec>
        <Sec title="El concepto de mezcla dialectal" sub="§2 del capítulo: el marco teórico, la bibliografía y el criterio de la tesis; pulsa para desplegar cada apartado">
          <Secciones items={CONCEPTO_MEZ.filter((x) => x.sec !== "§1")} color={MEZ_INK} />
        </Sec>
      </>}

      {tab === "numeros" && <>
        <Sec title="La mezcla dialectal en el corpus de Dodona">
          <Cifras total={TOTAL_MEZ} cert={CERTEZA_MEZ} color={MEZ_INK} />
        </Sec>

          <Sec title="Adscripción de las consultas" sub="Bases de la adscripción, grado de certeza y consultas que la bibliografía cuenta como mezclas">
            <AdscripcionTable data={ADSCRIPCION_MEZ} color={MEZ_INK} />
          </Sec>

          <Sec title="Dialectos que se combinan" sub="Todas las mezclas salvo una tienen el jónico-ático como componente; los dialectos no jónico-áticos apenas se mezclan entre sí"
            note="La excepción es I.Dodone DVC 1025A+B (finales del s. IV a.C.), que combina, con reservas, la Doris severior y la Doris mitior.">
            <PorCerteza data={COMBINACIONES_MEZ} color={MEZ_INK} />
          </Sec>

          <Sec title="La mezcla dialectal en contexto" sub="Macrogrupos dialectales del corpus de Dodona">
            <Bars horizontal data={MACROGRUPOS} highlight="Mezcla dialectal" height={300} left={200} />
          </Sec>

          <Sec title="Distribución cronológica" sub={`El s. IV a.C. reúne ${cs} de las ${TOTAL_MEZ} mezclas`}>
            <Bars data={crono(CHRONO_MEZ)} indexBy="period" keys={["n"]} height={300} rotate={-35} />
          </Sec>

          <Sec title="Temática de las consultas" sub="Comercio y viajes, como corresponde a consultantes que se movían entre comunidades de dialecto distinto">
            <Temas data={THEMES_MEZ} color={MEZ} height={330} />
          </Sec>

          <Sec title="Alfabeto" note="Todas emplean el alfabeto jónico reformado o uno que no puede identificarse salvo 135A, en alfabeto corintio salvo sus dos primeras palabras, cuya mezcla descansa solo en el étnico; las demás consultas epicóricas que parecían mezclas eran ejemplos de alternancia de alfabetos.">
            <DonutLegend data={ALF_MEZ_PIE} height={220} valueColor={MEZ_INK} />
          </Sec>
        <Sec title="El apartado del capítulo" sub="§3: pulsa para desplegar el texto completo">
          <Secciones items={NUMEROS_MEZ} color={MEZ_INK} />
        </Sec>
      </>}

      {tab === "sinmezcla" && <>
        <ResumenBiblio />
        <MezclasAparentes />
      </>}

      {tab === "tipos" && <>
          <Sec title="Tipos de mezcla dialectal en el corpus" sub="Dónde se encuentra el elemento ajeno al dialecto del texto"
            note={`Cada fila es un tipo de mezcla según el lugar del texto en que se encuentra el elemento ajeno, con el apartado del capítulo. En la última columna, el total de consultas y, entre paréntesis, las seguras y las dudosas o que descansan en un nombre propio. Cada consulta se cuenta en un solo tipo, el de su elemento más característico; la suma da las ${TOTAL_MEZ} del capítulo.`}>
            <TablaRasgos color={MEZ} cabeceras={["Elemento\nno jónico-ático", "Elemento\njónico-ático", "Explicaciones\nposibles (§5)"]}
              filas={TIPOS_MEZ.map((t) => ({ sec: `§${t.sec}`, rasgo: t.tipo, celdas: [t.noja, t.ja, t.expl], seg: t.seguras, dud: t.dudosas }))} />
          </Sec>
          <Sec title="Las mezclas según su tipo">
            <Bars horizontal data={TIPOS_MEZ.map((t) => ({ name: t.tipo, segura: t.seguras, dudosa: t.dudosas }))} keys={["segura", "dudosa"]}
              colors={{ segura: MEZ_INK, dudosa: ORO }} labels={{ segura: "segura", dudosa: "dudosa o de solo nombre" }} height={300} left={260} />
          </Sec>
          <Sec title="Las mezclas, tipo a tipo" sub="Los apartados de §5 del capítulo, con sus inscripciones y la explicación de cada tipo: pulsa para desplegar cada uno">
            <Secciones items={TIPOLOGIA_MEZ.filter((x) => !x.sec.startsWith("§4"))} color={MEZ_INK} />
          </Sec>

        {/* Recapitulación (§6), al final de la tipología. */}
        <Sec title="Explicaciones de la mezcla e implicaciones para el oráculo">
          <Card style={{ padding: "18px 22px" }}>
            <p style={BIG}>
              La tipología permite reunir las 95 mezclas según la explicación que mejor se ajusta a cada una. Más de la mitad, 54, se
              explican por la convivencia del dórico con una norma escrita de prestigio, el jónico-ático, en comunidades bidialectales; 26
              reproducen los elementos más fijos de la consulta, la fórmula de apertura, el nombre de los dioses y algunas palabras del
              vocabulario del santuario; 13 se deben a un nombre propio, que conserva su forma con independencia de la lengua del texto, y
              las dos restantes no son seguras como mezclas de dialectos. La acomodación al personal del santuario y la intervención de un
              tercero, que la bibliografía propone como explicaciones de conjunto, solo dan cuenta de unos pocos casos.
            </p>
          </Card>
        </Sec>
        <Sec title="Tres conclusiones para el conocimiento del oráculo">
          {[
            ["Casi siempre, con el jónico-ático", <>94 de las 95 mezclas tienen un componente jónico-ático, sea jónico, ático o de koiné: en 90 el otro componente es el dórico, y en las cuatro restantes, la <i>Doris severior</i>, el eleo o el tesalio. Que la norma sea el ático o la koiné no cambia el mecanismo, porque es en esencia el mismo dialecto en distintas fases de su evolución. La única excepción, <Ref src="DVC" id="1025A+B" />, puede no ser siquiera una mezcla de dialectos.</>],
            ["La mezcla llegó con los consultantes", <>Refleja el contacto entre un dialecto y la norma jónico-ática que se daba ya en las comunidades de origen, como las colonias de población mixta del Occidente, y en el propio Epiro. Las consultas públicas de los caones (<Ref src="Lhôte" id="11" />, último cuarto del s. IV a.C.) y de los heracleotas (<Ref src="Lhôte" id="6A" />, último cuarto del s. V a.C.) muestran la mezcla en la lengua de una comunidad. Dodona fue menos el lugar en que los dialectos se mezclaron que el lugar en que la mezcla quedó por escrito.</>],
            ["El santuario aporta lo más fijo de la consulta", <>La fórmula, el nombre de los dioses y algunas palabras de su vocabulario se reproducían sin adaptarlos al dialecto del texto, de modo que informan sobre las convenciones de la consulta antes que sobre la lengua del consultante. Una segunda mano solo se sugiere en <Ref src="DVC" id="2169A" />.</>],
          ].map(([t, d]) => (
            <Card key={t} accent={MEZ}>
              <div style={{ fontFamily: "var(--fh)", fontSize: 14.5, fontWeight: 700, color: MEZ_INK, marginBottom: 6 }}>{t}</div>
              <p style={PROSE}>{d}</p>
            </Card>
          ))}
        </Sec>
        <Sec title="Recapitulación" sub="El §6 del capítulo">
          <Secciones items={EXPLICACIONES_MEZ} color={MEZ_INK} abierto />
        </Sec>
      </>}

      {tab === "anexo" && <>
        <SubNav color={MEZ_INK} value={anexo} onChange={setAnexo} items={[
          ["mezclas", "Las inscripciones con mezcla dialectal", `§7.1: ${ANEXO_MEZ.length} inscripciones`],
          ["otras", "Otras inscripciones citadas", `§7.2: ${OTRAS_MEZ.length} inscripciones`],
          ["biblio", "Las listas de Crespo y Giannakis", `${BIBLIO_MEZ.length} mezclas de la bibliografía frente a la clasificación de la tesis`],
        ]} />
        {anexo === "mezclas" && <>
          <Sec title="Las inscripciones con mezcla dialectal"
            sub="Como en el anexo §7.1 del capítulo, las que también son mezclas para Crespo y Giannakis (2019) y Giannakis (2024a) y las que no figuran en sus listas, con el texto de la edición, la datación y la certeza; pulsa en cada grupo para desplegarlo">
            <Anexo rows={ANEXO_MEZ} color={MEZ_INK} tint={MEZ} grupo={(r) => GRUPO_CYG_MEZ[r[0]]} orden={ORDEN_CYG_MEZ} />
          </Sec>
          <Sec title="Las inscripciones según los dialectos que se combinan"
            sub="Agrupadas como en Crespo y Giannakis (2019) y Giannakis (2024a); pulsa en cada grupo para desplegarlo">
            <Anexo rows={ANEXO_MEZ} color={MEZ_INK} tint={MEZ} grupo={(r) => r[4].replace(/ \(fórmula\)$/, "")} />
          </Sec>
          <Sec title="Las inscripciones según el tipo de mezcla"
            sub="Agrupadas por los tipos de §5 del capítulo, según el lugar del texto en que aparece el elemento ajeno o los dialectos que intervienen; pulsa en cada grupo para desplegarlo">
            <Anexo rows={ANEXO_MEZ} color={MEZ_INK} tint={MEZ} grupo={(r) => TIPO_MEZ[r[0]]} orden={ORDEN_TIPOS_MEZ} />
          </Sec>
        </>}
        {anexo === "otras" && (
          <Sec title="Otras inscripciones citadas en el capítulo"
            sub="Como en el anexo §7.2, las que Crespo y Giannakis (2019) y Giannakis (2024a) tienen por mezclas y la tesis clasifica de otro modo (§4) y las demás, con su clasificación en la tesis; pulsa en cada grupo para desplegarlo">
            <Anexo rows={OTRAS_MEZ} color={MEZ_INK} tint={MEZ} grupo={(r) => GRUPO_OTRAS_MEZ[r[0]]} orden={ORDEN_OTRAS_MEZ} />
          </Sec>
        )}
        {anexo === "biblio" && <ComparacionBiblio />}
      </>}
    </ChapterLayout>
  );
}

// ══ Cap. 14: los dialectos minoritarios ════════════════════════════
const GRUPOS_MIN = {
  mac: {
    t: "Macedonio", dialectos: ["Macedonio"], apartados: "§3", texto: <>
      Dos consultas de la primera mitad del s. IV a.C., y en las dos el indicio decisivo es el nombre. En{" "}
      <Ref src="DVC" id="2493A" /> (principios del s. IV a.C.), Méndez Dosuna (2007g: 283-284) propuso el origen macedonio por exclusión
      y por los futuros ἔσσονται y ζώσοντι, que él mismo admitió después como posibles futuros dóricos encubiertos (2018a: 292); la
      adscripción descansa sobre todo en Κεβάλιος, con la β por φ que los antiguos atribuían a los macedonios. En{" "}
      <Ref src="DVC" id="94" /> (primer cuarto del s. IV a.C.) solo hay un nombre, Ἄλβειος, forma macedonia de Ἀλφειός. El hipocorístico
      Κέββας de <Ref src="DVC" id="480B" /> admite un origen macedonio o ilirio y queda sin clasificar. Los macedonios de la segunda mitad
      del s. IV a.C. escribirían en koiné, y sus consultas no pueden distinguirse.
    </>,
  },
  pel: {
    t: "Dialectos del Peloponeso", sub: "eleo, acayo, laconio", dialectos: ["Acayo", "Eleo"], apartados: "§4", texto: <>
      El acayo no se distingue en textos breves de los demás dialectos dóricos, y el único criterio es el alfabeto de las colonias de la
      Magna Grecia, con iota de tres trazos, san y delta redondeada: cinco consultas lo unen a un rasgo no jónico-ático visible, como{" "}
      <Ref src="DVC" id="968A" /> (finales del s. VI a.C.), una de las más antiguas del corpus, y <Ref src="DVC" id="109A" /> y{" "}
      <Ref src="DVC" id="2823B" /> se cuentan solo por el alfabeto. Ninguna consulta conserva un rasgo eleo inequívoco: de las seis que los editores asignan al alfabeto de la
      Élide, cinco son no jónico-áticas y <Ref src="DVC" id="1993A" />, con rasgos contrarios al eleo, se cuenta en el dórico general;
      quedan dos eleas dudosas, la ζ por δ de [Ἱ]πόζαμο&lt;ς&gt; en <Ref src="DVC" id="4145B" />, quizá de la frontera entre Acaya y la
      Élide, y μαστείι en <Ref src="Lhôte" id="29" />, que admite una explicación dórica. Las propuestas laconias no se sostienen.
    </>,
  },
  otr: {
    t: "Otros testimonios", sub: "rodio, textos no griegos y otras variedades", dialectos: ["Rodio", "Textos no griegos"], apartados: "§5", texto: <>
      El rodio de <Ref src="Lhôte" id="89Aa" /> (s. IV a.C.), la consulta del comerciante que Lhôte (2006: 186-188) atribuyó a una
      colonia siciliana, depende del infinitivo ἔμειν, que Méndez Dosuna (2007b: 143) explica como una errata; el χρῆυνται de{" "}
      <Ref src="DVC" id="172A" />, cuyo único paralelo procede de Telos, se cuenta entre las no jónico-áticas. Que la secuencia de
      <Ref src="DVC" id="27A" /> (principios del s. V a.C.) no sea griega es lo más probable, pero, como no se conoce la lengua en que
      está escrita, la adscripción se cuenta como dudosa. El ΑΠΟΡΕΙΤΑΝ de <Ref src="DVC" id="3977A" />, que los editores corrigen en un genitivo de los epirotas,
      queda sin clasificar. El corintio, el jónico oriental y el eubeo, que la distribución de la tesis prevé aquí, se estudian en el
      dórico general, en el jónico y en la mezcla, como la consulta del eretrio Ὀνήριμος (<Ref src="DVC" id="2217A" />).
    </>,
  },
};

// Las trece inscripciones del capítulo, en el formato de los anexos ([clave, datación, texto, certeza, dialecto]).
const ANEXO_MIN = INSCRIPCIONES_MIN.map((d) => [d.id, d.date, d.text, d.certeza, d.dialecto]);
const ORDEN_MIN = ["Macedonio", "Eleo", "Acayo", "Rodio", "Textos no griegos"];

function Minoritarios({ switcher, subnav }) {
  const [tab, setTab] = useState("context");
  const [grupo, setGrupo] = useState("mac");
  const gr = GRUPOS_MIN[grupo];
  const ant = CHRONO_MIN.filter((d) => /s\. V\b|s\. VI|VI–V/.test(d.period) && !d.period.includes("V–IV")).reduce((a, d) => a + d.n, 0);
  return (
    <ChapterLayout switcher={switcher} subnav={subnav} color={MIN_INK} accent={[C.terra, MIN, C.blue, C.green]}
      title={<><em style={{ fontWeight: 700, color: MIN_INK }}>Otros dialectos</em> en las laminillas oraculares de Dodona</>}
      subtitle="Macedonio, eleo, acayo, rodio y textos no griegos · El alcance del oráculo más allá del Epiro"
      stats={<>
        <Stat label="Inscripciones" value={String(TOTAL_MIN)} sub="ss. VI–IV a.C." accent={MIN_INK} />
        <Stat label="Corpus dialectal" value={`${pct(TOTAL_MIN)} %`} sub={`${TOTAL_MIN} de ${miles(TOTAL_CORPUS)}`} accent={C.terra} />
        <Stat label="Dudosas o de solo nombre" value={`${pct(dudosas(CERTEZA_MIN), TOTAL_MIN)} %`} sub="la proporción más alta de la tesis" accent={ORO} />
        <Stat label="Anteriores al 400 a.C." value={String(ant)} sub={`de ${TOTAL_MIN}`} accent={C.blue} />
      </>}
      tabs={[
        { id: "context", l: "Otros dialectos", i: "📜" },
        { id: "profile", l: "Perfil dialectal", i: "Α" },
        { id: "grupos", l: "Dialectos y consultas", i: "Ω" },
        { id: "anexo", l: "Las inscripciones", i: "Ψ" },
      ]} tab={tab} onTab={setTab}>

      {tab === "context" && <>
        <Sec title="Consultantes de regiones alejadas del santuario" sub="Variedades representadas por uno o dos textos">
          <Card style={{ padding: "18px 22px" }}>
            <p style={BIG}>
              Trece inscripciones no pertenecen al jónico-ático, ni al dórico de las colonias corintias y del Noroeste, ni al tesalio o al
              beocio: se reparten entre el acayo, con siete, el eleo y el macedonio, con dos cada uno, y el rodio, con una, y se cuenta con ellas
              una inscripción que no parece escrita en griego. Lhôte (2006) reconoció una consulta rodia, otra en alfabeto aqueo de la Magna
              Grecia y un texto que relacionó con el norpiceno, y dibujó un área de influencia del oráculo de la que quedaban fuera el
              Peloponeso y Macedonia; Méndez Dosuna (2018a: 266, 272) observa que la nueva edición apenas ha alterado ese mapa, aunque ha aportado
              candidatos macedonios, uno eretrio, formas relacionadas con el eleo y textos en alfabeto aqueo que Johnston (2021: 114) atribuye a
              aqueos de Acaya o de sus colonias.
            </p>
          </Card>
        </Sec>
        <Sec title="Lo que mide el número de inscripciones">
          <Card>
            <p style={PROSE}>
              La cifra mide la visibilidad de estos dialectos más que su presencia, y debe entenderse, como en la <i>Doris severior</i>, como un
              límite inferior. Hasta finales del s. V a.C. los alfabetos epicóricos permiten reconocer a los consultantes, y por eso las consultas
              aqueas y las atribuidas a la Élide se concentran en los ss. VI y V a.C.; con el alfabeto jónico esa vía desaparece, y como estos
              dialectos comparten con el dórico del entorno la mayoría de los rasgos de las consultas ({g("ᾱ")}, {g("κα")}, {g("αἰ")}, las
              contracciones de la fórmula), en el s. IV a.C. solo los antropónimos y alguna forma aislada delatan a sus hablantes.
            </p>
            <p style={{ ...PROSE, marginTop: 10 }}>
              La relación entre el número de inscripciones y la importancia histórica de cada región es inversa en más de un caso: Macedonia, la
              Élide o Esparta, con vínculos políticos o religiosos más estrechos con el santuario, son las que menos huella dialectal dejan,
              mientras que los aqueos de la Magna Grecia, ausentes de las fuentes literarias sobre Dodona, son los más fáciles de reconocer
              gracias a su alfabeto. Los testimonios dibujan sobre todo la red marítima del Occidente, la misma de las consultas en{" "}
              <i>Doris severior</i>, y buena parte de estos consultantes debe de esconderse entre las inscripciones no jónico-áticas.
            </p>
          </Card>
          <div style={{ marginTop: 12 }}><Secciones items={APARTADOS_MIN.filter((x) => x.sec === "§6")} color={MIN_INK} /></div>
        </Sec>
      </>}

      {tab === "profile" && <>
        <Sec title="Otros dialectos en el corpus de Dodona">
          <Cifras total={TOTAL_MIN} cert={CERTEZA_MIN} color={MIN_INK} nombre="solo nombre o alfabeto" />
          <Card>
            <p style={PROSE}>
              En todas la adscripción descansa en un solo rasgo, en un antropónimo o en el alfabeto. Ninguna es segura: la que más se acerca,{" "}
              <Ref src="DVC" id="27A" />, lo es solo en sentido negativo (que la secuencia no sea griega es lo más probable, pero no se conoce la lengua
              en que está escrita) y se cuenta como dudosa; de las otras nueve dudosas, cinco unen el alfabeto aqueo a un rasgo no
              jónico-ático visible, dos descansan en una forma aislada de interpretación discutida y dos en indicios que solo apuntan a una región
              si se acepta una lectura concreta.
            </p>
          </Card>
        </Sec>
        <Sec title="Adscripción de las consultas" sub="Bases de la adscripción, grado de certeza y consultas atribuidas a estos dialectos que se cuentan en otros grupos">
          <AdscripcionTable data={ADSCRIPCION_MIN} color={MIN_INK} />
        </Sec>
        <Sec title="Dialectos del grupo">
          <PorCerteza data={DIALECTOS_MIN} color={MIN} left={150} />
        </Sec>
        <Sec title="Otros dialectos en contexto" sub="Macrogrupos dialectales del corpus de Dodona; estos dialectos figuran como “Otros”">
          <Bars horizontal data={MACROGRUPOS} highlight="Otros" height={300} left={200} />
        </Sec>
        <Sec title="Distribución cronológica" sub="Las que se identifican por el alfabeto son anteriores al 400 a.C.; las del s. IV a.C., por formas o antropónimos">
          <Bars data={crono(CHRONO_MIN)} indexBy="period" keys={["n"]} height={260} rotate={-35} />
        </Sec>
        <Sec title="Temática" sub="Consultas privadas sobre la vida cotidiana; ninguna procede de una comunidad">
          <Temas data={THEMES_MIN} color={MIN} height={240} />
        </Sec>
      </>}

      {tab === "grupos" && <>
        <SubNav color={MIN_INK} value={grupo} onChange={setGrupo} items={Object.entries(GRUPOS_MIN).map(([id, x]) => [id, x.t,
          `${x.sub ? `${x.sub} · ` : ""}${INSCRIPCIONES_MIN.filter((d) => x.dialectos.includes(d.dialecto)).length} inscripciones`])} />
        <Sec title={gr.t}>
          <Card><p style={PROSE}>{gr.texto}</p></Card>
        </Sec>
        <Sec title="Los apartados del capítulo" sub="Pulsa para desplegar cada uno">
          <Secciones items={APARTADOS_MIN.filter((x) => x.sec === gr.apartados || x.sec.startsWith(`${gr.apartados}.`))} color={MIN_INK} />
        </Sec>
        <Sec title="Inscripciones" sub="Texto de la edición y clasificación de la tesis">
          <div style={{ display: "grid", gap: 10 }}>
            {INSCRIPCIONES_MIN.filter((d) => gr.dialectos.includes(d.dialecto)).map((d) => <InscripcionCard key={d.id} d={{ ...d, etq: d.dialecto.toLowerCase() }} color={MIN_INK} />)}
          </div>
        </Sec>
      </>}

      {tab === "anexo" && (
        <Sec title="Las inscripciones de otros dialectos" sub="Agrupadas por dialecto, con el texto de la edición, la datación y la certeza; pulsa en cada grupo para desplegarlo">
          <Anexo rows={ANEXO_MIN} color={MIN_INK} tint={MIN} grupo={(r) => r[4]} orden={ORDEN_MIN} />
        </Sec>
      )}
    </ChapterLayout>
  );
}

// ══ Cap. 15: las inscripciones no jónico-áticas ════════════════════
// El anexo (843 textos, unos 150 kB) solo se carga al abrir la pestaña.
const cargarAnexoNJA = () => import("../data/anexoNoJonAt.json");

function NoJonAt({ switcher, subnav }) {
  const [tab, setTab] = useState("context");
  const [sub, setSub] = useState("cifras");
  const s4 = CHRONO_NJA.filter((d) => d.period.includes("s. IV") && !d.period.includes("–")).reduce((a, d) => a + d.n, 0);
  return (
    <ChapterLayout switcher={switcher} subnav={subnav} color={NJA_INK} accent={[C.terra, NJA, C.blue, C.green]}
      title={<>Las inscripciones <em style={{ fontWeight: 700, color: NJA_INK }}>no jónico-áticas</em> en las laminillas oraculares de Dodona</>}
      subtitle="Un rasgo ajeno al jónico-ático y a la koiné, pero ninguno que permita atribuirlas a un dialecto concreto"
      stats={<>
        <Stat label="Inscripciones" value={String(TOTAL_NJA)} sub="ss. VI–II a.C." accent={NJA_INK} />
        <Stat label="Corpus dialectal" value={`${pct(TOTAL_NJA)} %`} sub={`${TOTAL_NJA} de ${miles(TOTAL_CORPUS)}`} accent={C.terra} />
        <Stat label="Seguras" value={`${pct(CERTEZA_NJA.seguras, TOTAL_NJA)} %`} sub="excluyen el jónico-ático" accent={C.blue} />
        <Stat label="Dórico probable" value="343-509" sub="con el dórico demostrado (276)" accent={DIALECT_COLORS.dorico} />
      </>}
      tabs={[
        { id: "context", l: "Por qué hay tantas", i: "📜" },
        { id: "profile", l: "Perfil dialectal", i: "ᾱ" },
        { id: "anexo", l: "Las inscripciones", i: "Ω" },
      ]} tab={tab} onTab={setTab}>

      {tab === "context" && <>
        <Sec title="Un grupo definido por un criterio negativo" sub="El grupo más numeroso del corpus, que no es un dialecto">
          <Card style={{ padding: "18px 22px" }}>
            <p style={BIG}>
              Con {TOTAL_NJA} inscripciones, el {pct(TOTAL_NJA)} % de las que presentan características dialectales, las no jónico-áticas
              reúnen las consultas que documentan al menos un rasgo ajeno al jónico-ático y a la koiné, pero ninguno que permita atribuirlas a un
              dialecto concreto. La bibliografía atribuye al dórico la mayor parte de las laminillas (Crespo y Giannakis 2019: 48; Giannakis
              2024a: 43; Méndez Dosuna 2024, §4), pero reconoce que en muchas la identificación del dialecto resulta muy difícil o imposible, y
              ya Lhôte (2006: 363-379) reservó un grupo propio para el dórico de procedencia indeterminada. La categoría no contradice que el
              dórico predomine en el corpus: separa lo que puede demostrarse de lo que solo resulta probable.
            </p>
          </Card>
        </Sec>
        <Sec title="Por qué hay tantas inscripciones no jónico-áticas">
          {[
            ["El método", <>El criterio de los rasgos que excluyen el eolio trasladó a este grupo 242 consultas que la clasificación de partida atribuía al dórico, y la revisión de las inscripciones sin clasificar añadió más de cuatrocientas: 582 de las {TOTAL_NJA} carecían de clasificación al comienzo del trabajo. El criterio de la apócope πέρ retiró, en cambio, treinta y una consultas en que πέρ precede a una laguna.</>],
            ["El estado de los textos", <>Con una media de 3,6 palabras legibles por inscripción y una mediana de dos, quedan por debajo del jónico-ático y la koiné (4,6), del tesalio (4,7) y del dórico general (5,1), y muy lejos de la mezcla (7,5). Una invocación como Ζεῦ Νᾶε καὶ Διώνα (<Ref src="DVC" id="81B" />, mediados del s. IV a.C.) o una pregunta reducida a κα [- - -] (<Ref src="DVC" id="2888B" />, segunda mitad del s. V a.C.) excluyen el jónico-ático, pero no ofrecen ningún otro dato.</>],
            ["La naturaleza de los rasgos", <>Los más frecuentes son conservaciones que el jónico-ático perdió y que comparten los demás dialectos: 634 inscripciones (el 75,4 %) presentan un único tipo de rasgo, y las fórmulas aportan buena parte de ellos, pues en 122 (el 14,5 %) τύχα, ἀγαθά o Διώνα son los únicos rasgos visibles.</>],
          ].map(([t, d]) => (
            <Card key={t} accent={NJA}>
              <div style={{ fontFamily: "var(--fh)", fontSize: 14.5, fontWeight: 700, color: NJA_INK, marginBottom: 6 }}>{t}</div>
              <p style={PROSE}>{d}</p>
            </Card>
          ))}
          <div style={{ marginTop: 12 }}><Secciones items={POR_QUE_NJA} color={NJA_INK} /></div>
        </Sec>
      </>}

      {tab === "profile" && <>
        <SubNav color={NJA_INK} value={sub} onChange={setSub} items={[
          ["cifras", "Las inscripciones no jónico-áticas en números", "adscripción, cronología, temática y alfabeto"],
          ["rasgos", "Rasgos no jónico-áticos", `${RASGOS_NJA.length} rasgos y su ámbito dialectal según Buck (1955)`],
          ["compatibles", "Los dialectos compatibles", "cruce de los rasgos de cada inscripción"],
        ]} />
        {sub === "cifras" && <>
          <Sec title="Las inscripciones no jónico-áticas en el corpus de Dodona">
            <Cifras total={TOTAL_NJA} cert={CERTEZA_NJA} color={NJA_INK} />
            <Card>
              <p style={PROSE}>
                La seguridad se refiere a la exclusión del jónico-ático, no a la adscripción a un dialecto concreto. En las dudosas, la letra
                diagnóstica es insegura, la forma admite otra lectura, como ΑΥΤΑΙ en <Ref src="DVC" id="1630A" /> (primera mitad del
                s. V a.C.), que puede ser αὐτᾶι o αὐταί, carece de un contexto legible, como ἄλλαν en <Ref src="DVC" id="1562A" /> (segunda
                mitad del s. V a.C.), o tiene letras restituidas; las dos de solo nombre, <Ref src="DVC" id="9A" /> y <Ref src="DVC" id="256A" />, descansan en Ἐθνιάδας y Τ̣ιμολαΐδας.
              </p>
            </Card>
          </Sec>
          <Sec title="Adscripción de las consultas" sub="Bases de la adscripción, grado de certeza y consultas excluidas del grupo">
            <AdscripcionTable data={ADSCRIPCION_NJA} color={NJA_INK} />
          </Sec>
          <Sec title="Las inscripciones no jónico-áticas en contexto" sub="Macrogrupos dialectales del corpus de Dodona">
            <Bars horizontal data={MACROGRUPOS} highlight="No jónico-ático (sin precisar)" height={300} left={200} />
          </Sec>
          <Sec title="Distribución cronológica" sub={`El s. IV a.C. reúne ${s4} inscripciones; el peso del s. V a.C., con textos más breves, es algo menor que en el dórico general`}>
            <Bars data={crono(CHRONO_NJA)} indexBy="period" keys={["n"]} height={300} rotate={-35} />
          </Sec>
          <Sec title="Temática de las consultas" sub="Casi un tercio no puede clasificarse por su contenido, reflejo del estado de los textos">
            <Temas data={THEMES_NJA} color={NJA_INK} height={330} />
          </Sec>
          <Sec title="Alfabeto" note="Las consultas en alfabeto corintio con un rasgo no jónico-ático visible se cuentan en el dórico general, y las de alfabeto aqueo, entre las aqueas; la relación entre alfabeto y dialecto no es automática.">
            <DonutLegend data={ALF_NJA_PIE} height={240} valueColor={NJA_INK} />
          </Sec>
        </>}
        {sub === "rasgos" && (
          <Sec title="Rasgos no jónico-áticos visibles en el grupo" sub={`Ámbito dialectal de cada rasgo y su documentación en las ${TOTAL_NJA} inscripciones`}
            note="Sección de Buck (1955) en la primera columna; el ámbito de περ' y de τουτ- se discute en el capítulo. En los ejemplos, el número remite a I.Dodone DVC salvo indicación. Una inscripción puede figurar en varias filas, a diferencia de la tabla de dialectos compatibles (subpestaña siguiente), en la que cada inscripción figura en una sola.">
            <Table color={NJA_INK} rowHeader={1} head={["§", "Rasgo", "Ámbito dialectal", "Ejemplos", "Inscripciones"]}
              rows={RASGOS_NJA.map((r) => [
                <span style={{ color: C.muted }}>{r.sec}</span>, <span style={{ fontFamily: "var(--fh)" }}>{renderGreekText(r.rasgo)}</span>,
                <span style={{ color: C.muted }}>{r.ambito}</span>, g(r.ejemplos),
                <span><b style={{ color: NJA_INK }}>{r.n}</b> <span style={{ color: C.dim, fontSize: 11 }}>({pct(r.n, TOTAL_NJA)} %)</span></span>,
              ])} />
            <div style={{ marginTop: 14 }}><Secciones items={RASGOS_TXT_NJA} color={NJA_INK} /></div>
          </Sec>
        )}
        {sub === "compatibles" && <>
          <Sec title="Dialectos compatibles con los rasgos de cada inscripción" sub="Cruce de la distribución dialectal (Buck 1955) de todos los rasgos visibles de cada consulta"
            note={`Se consideran los dialectos con presencia segura en el corpus o en su entorno: el dórico en sentido amplio, el beocio, el tesalio (la Histiótide aparte, por κα), el lesbio y el arcadio-chipriota. Cada inscripción figura en una sola fila, la que resulta de cruzar los ámbitos de todos sus rasgos. Por eso, de las ${ALFA_COMPAT_NJA.total} inscripciones con ᾱ de la subpestaña anterior, solo ${ALFA_COMPAT_NJA.filas[0].n} quedan en la primera fila (${ALFA_COMPAT_NJA.sola} en que la ᾱ es el único rasgo y ${ALFA_COMPAT_NJA.conPer} en que la acompaña περί elidido, a las que se suman ${ALFA_COMPAT_NJA.soloPer} con solo περί elidido). Las ${ALFA_COMPAT_NJA.total - ALFA_COMPAT_NJA.filas[0].n} restantes tienen además otro rasgo más restrictivo, como κα o πέρ, y figuran en la fila de ese rasgo.`}>
            <Bars horizontal data={COMPATIBLES_NJA.map((d) => ({ name: d.dialectos, value: d.n, color: NJA }))} height={440} left={280} />
          </Sec>
          <Sec title="Rasgos que determinan cada grupo">
            <Table color={NJA_INK} rowHeader={0} head={["Dialectos compatibles", "Rasgos que lo determinan", "Inscripciones"]}
              rows={COMPATIBLES_NJA.map((d) => [d.dialectos, g(d.rasgos),
                <span><b style={{ color: NJA_INK }}>{d.n}</b> <span style={{ color: C.dim, fontSize: 11 }}>({pct(d.n, TOTAL_NJA)} %)</span></span>])} />
            <Card style={{ marginTop: 14 }}>
              <p style={PROSE}>
                La mayor parte del grupo procede con toda verosimilitud de consultantes dóricos, pero solo una parte puede delimitarse con
                argumentos lingüísticos: 67 inscripciones excluyen todo el tesalio y el lesbio y apuntan al dórico o al beocio, y otras 166, con
                κα, solo dejan abierta además la Histiótide. Por eso el dórico probable no admite una cifra única: a las 276 del dórico demostrado
                pueden sumarse esas 67 y, con más reservas, las 166, de modo que se sitúa entre 343 y 509 inscripciones. Las cuatro en que πέρ
                aparece junto a κα, como <Ref src="DVC" id="315A" /> (s. V a.C.) o <Ref src="DVC" id="2667A" /> (mediados del s. V a.C.), son
                compatibles con el dórico, pero también con el tesalio de Histiótide.
              </p>
            </Card>
            <div style={{ marginTop: 14 }}><Secciones items={COMPATIBLES_TXT_NJA} color={NJA_INK} /></div>
          </Sec>
        </>}
      </>}

      {tab === "anexo" && (
        <Sec title="Las inscripciones no jónico-áticas" sub="Agrupadas por siglos, con el texto de la edición, la datación y la certeza (en las dudosas, el motivo); pulsa en cada grupo para desplegarlo">
          <Anexo load={cargarAnexoNJA} color={NJA_INK} tint={NJA} />
        </Sec>
      )}
    </ChapterLayout>
  );
}

export default function Frontera({ switcher }) {
  const [sub, setSub] = useState("minoritarios");
  const subnav = <SectionNav label="Otros dialectos e inscripciones no jónico-áticas" items={SUBSECCIONES} value={sub}
    onChange={setSub} tint={NJA} />;
  const View = sub === "nja" ? NoJonAt : Minoritarios;
  return <View switcher={switcher} subnav={subnav} />;
}
