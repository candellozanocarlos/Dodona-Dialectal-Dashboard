// Pestaña común a los capítulos tesalio y beocio: el contenido es el mismo y
// cambia la perspectiva (título, color de acento y orden de las series).
import { C, CATS, DIALECT_COLORS, PROSE } from "../theme.js";
import { TOTAL_BEOC, TOTAL_TES } from "../data/corpus.js";
import { RASGOS_TES, RASGO_TEXTS_TES } from "../data/tesalio.js";
import { CHRONO_COMPARE_TES_BEOC, RASGOS_BEOC, RASGO_TEXTS_BEOC } from "../data/beocio.js";
import { asRef, renderDesc, renderGreekText } from "../lib/text.jsx";
import { Bars, ChartTip } from "../components/charts.jsx";
import { Ref, RefList } from "../components/Inscriptions.jsx";
import { Card, Sec } from "../components/ui.jsx";

// Inscripciones con doble clasificación (γίνυμαι): adscripción principal.
const AMBIGUAS = [
  { dvc: "38A", macro: "Tesalio" }, { dvc: "162B", macro: "Tesalio" }, { dvc: "1060A", macro: "Beocio" },
  { dvc: "1649A", macro: "Beocio" }, { dvc: "1676A", macro: "Beocio" }, { dvc: "3673B", macro: "Beocio" },
];
const pctES = (v) => `${String(v).replace(".", ",")} %`;

export default function CompartidosTesBeoc({ desde = "beocio" }) {
  const esBeoc = desde === "beocio";
  const otro = esBeoc ? "tesalio" : "beocio";
  const acento = esBeoc ? C.beocio : C.tesalio;
  const series = esBeoc
    ? [{ key: "beoc", name: "Beocio", color: DIALECT_COLORS.beocio }, { key: "tes", name: "Tesalio", color: DIALECT_COLORS.tesalio }]
    : [{ key: "tes", name: "Tesalio", color: DIALECT_COLORS.tesalio }, { key: "beoc", name: "Beocio", color: DIALECT_COLORS.beocio }];
  const colors = Object.fromEntries(series.flatMap((s) => [[s.key, s.color], [`${s.key}Pct`, s.color]]));
  const inventario = CATS.map((cat) => ({
    name: cat,
    tes: RASGOS_TES.filter((r) => r.cat === cat).length,
    beoc: RASGOS_BEOC.filter((r) => r.cat === cat).length,
  }));

  return (<>
    <Sec title={`Rasgos compartidos con el ${otro}`} sub="Tesalio y beocio son los dos dialectos eólicos continentales">
      <Card style={{ marginBottom: 16 }}>
        <p style={{ ...PROSE, fontSize: 13, color: C.text }}>
          Tesalio y beocio, como dialectos eólicos, comparten un número considerable de rasgos (Buck 1955: §§201-210), de modo
          que algunas inscripciones podrían clasificarse como tesalias o como beocias. En el corpus los rasgos eólicos comunes
          son la flexión atemática de γίνυμαι y la desinencia -νθι de 3ª pl. (ἔνθι), a los que se suman la partícula κα,
          compartida solo con la Histiótide tesalia (frente a κε en Pelasgiótide y Tesaliótide), y la apócope preposicional, solo
          en parte: ambos dialectos coinciden en κάτ y πότ, pero el tesalio extiende la apócope a περί, ἀπό, ἐπί y ὑπό,
          mientras que el beocio solo la conoce en las tres últimas y ante oclusiva labial.
        </p>
      </Card>
      {RASGOS_BEOC.filter((r) => [9, 10, 11, 12].includes(r.id)).map((r) => (
        <Card key={r.id} accent={acento} style={{ marginBottom: 12 }}>
          <div style={{ fontFamily: "var(--fh)", fontSize: 15, fontWeight: 700, color: acento, marginBottom: 4 }}>
            {esBeoc ? `${r.id}. ` : ""}{renderGreekText(r.name)}
          </div>
          <div style={{ fontSize: 10.5, color: C.muted, textTransform: "uppercase", letterSpacing: 1.4, marginBottom: 8 }}>{r.cat}</div>
          <p style={{ ...PROSE, color: C.text, marginBottom: 8 }}>{renderDesc(r.desc)}</p>
          <div style={{ fontSize: 11, color: C.muted }}>Testimonios: <RefList dvcs={r.dvcs.map(asRef)} /></div>
        </Card>
      ))}
    </Sec>

    <Sec title="Inventarios de rasgos comparados" sub="Número de rasgos identificados en el corpus por categoría lingüística"
      note={`El desequilibrio entre ambos inventarios (${RASGOS_TES.length} rasgos tesalios frente a ${RASGOS_BEOC.length} beocios) refleja la diferencia de tamaño de los dos corpus (${TOTAL_TES} frente a ${TOTAL_BEOC} inscripciones) y la aportación desigual al conocimiento de cada dialecto: el material tesalio documenta léxico dialectal (τᾶμον, λιμήν, λειτορεῖον, τυχαῖος), mientras que la aportación beocia es, en palabras de Méndez Dosuna (2018a: 288), «relatively modest»: no aporta rasgos que no fueran ya conocidos por la epigrafía y la literatura.`}>
      <Bars data={inventario} keys={series.map((s) => s.key)} grouped colors={colors} height={280} unit="rasgos"
        labels={Object.fromEntries(series.map((s) => [s.key, s.name]))} />
    </Sec>

    <Sec title={`Cronología comparada: ${desde} frente a ${otro}`}
      sub={`Porcentaje del corpus de cada dialecto por periodo (tesalio n = ${TOTAL_TES}, beocio n = ${TOTAL_BEOC}); las cifras absolutas aparecen al pasar el cursor`}
      note="El material beocio se concentra en el s. V a.C. (10 de 17 inscripciones), en consonancia con la pérdida de intensidad de los vínculos entre el koinon beocio y el santuario a partir del s. IV (Méndez Dosuna 2018a: 288 señala que los beocios parecen dejar de consultar el oráculo a principios del s. IV), mientras que el tesalio alcanza su máximo entre finales del s. V y la primera mitad del s. IV a.C.">
      <Bars data={CHRONO_COMPARE_TES_BEOC} indexBy="period" keys={series.map((s) => `${s.key}Pct`)} grouped colors={colors}
        labels={Object.fromEntries(series.map((s) => [`${s.key}Pct`, s.name]))} height={340} rotate={-35}
        format={(v) => pctES(Math.round(v))}
        tooltip={(bar) => {
          const s = series.find((x) => `${x.key}Pct` === bar.id);
          return <ChartTip label={`${s.name} · ${bar.indexValue}`} value={pctES(bar.value)} color={s.color}
            unit={`${bar.data[s.key]} inscripciones`} />;
        }} />
    </Sec>

    <Sec title="Inscripciones tesalio/beocio ambiguas"
      sub="Seis inscripciones con formas del paradigma de γίνυμαι que admiten tanto la adscripción tesalia como la beocia; 293B, 328 y 1509B se cuentan solo como tesalias">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: 12 }}>
        {AMBIGUAS.map((ins) => {
          const col = ins.macro === "Tesalio" ? DIALECT_COLORS.tesalio : DIALECT_COLORS.beocio;
          return (
            <Card key={ins.dvc} accent={col}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8, gap: 8 }}>
                <span style={{ fontFamily: "var(--fh)", fontSize: 13.5, fontWeight: 600, color: C.heading }}><Ref src="DVC" id={ins.dvc} /></span>
                <span style={{ fontSize: 9.5, letterSpacing: 1.2, textTransform: "uppercase", color: col, fontWeight: 600 }}>
                  Clasificación principal: {ins.macro}</span>
              </div>
              <pre lang="grc" className="greek-inscription" style={{ margin: 0, fontSize: 13.5, lineHeight: 1.7, color: C.text, whiteSpace: "pre-wrap" }}>
                {renderGreekText(RASGO_TEXTS_BEOC[ins.dvc] || RASGO_TEXTS_TES[ins.dvc] || "(texto no disponible)")}
              </pre>
            </Card>
          );
        })}
      </div>
    </Sec>
  </>);
}
