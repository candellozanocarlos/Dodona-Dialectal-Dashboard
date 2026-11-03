// Capítulos 9-12: el jónico-ático y la koiné en las laminillas oraculares de Dodona.
import { useState } from "react";
import { C, DIALECT_COLORS, ORO, PROSE, colorSiglo, fade } from "../theme.js";
import { MACROGRUPOS, TOTAL_CORPUS, miles, pct } from "../data/corpus.js";
import {
  ADSCRIPCION_ATI, ADSCRIPCION_JAK, ADSCRIPCION_JON, ADSCRIPCION_KOI, ALF_JAK_PIE, ANEXO_JAK, CERTEZA_JAK, CHRONO_ATI, CHRONO_DETAIL_JAK,
  CHRONO_JON, CHRONO_KOI, RASGOS_TABLA_JAK, SIGLO_IV_JAK, SUBGRUPOS_JAK, THEMES_ATI, THEMES_JAK, THEMES_JON, THEMES_KOI, TOPONYMS_JAK, TOTAL_JAK,
} from "../data/jonicoAtico.js";
import { fmtDvc, renderDesc, renderGreekText } from "../lib/text.jsx";
import { Bars, DonutLegend, Temas } from "../components/charts.jsx";
import { Ref } from "../components/Inscriptions.jsx";
import { Card, ChapterLayout, Sec, Stat, Stats, SubNav } from "../components/ui.jsx";
import { AdscripcionTable } from "../components/Adscripcion.jsx";
import { Anexo } from "../components/Anexo.jsx";
import DoricMap from "../components/maps/DoricMap.jsx";
import { JAK_LAND_PATH } from "../components/maps/coastlines.js";

const COLOR = DIALECT_COLORS.jonicoAtico;

const TABS = [
  { id: "context", l: "Atenas, Jonia y Dodona", i: "📜" },
  { id: "map", l: "Mapa y topónimos", i: "🗺️" },
  { id: "profile", l: "Perfil dialectal", i: "Η" },
  { id: "subgrupos", l: "Jónico, ático y koiné", i: "Ω" },
  { id: "anexo", l: "Las inscripciones", i: "Ψ" },
];

// Mapa de los topónimos y etnónimos (cap. 9, §2), con la ventana de la figura de la tesis (jak_8_mapa_procedencias).
const VISTA_JAK = { lon0: 14.0, lon1: 24.6, lat0: 35.0, lat1: 42.5 };
const MARES_JAK = [{ t: "Mar Jónico", lon: 18.3, lat: 38.2 }, { t: "Mar Egeo", lon: 24.3, lat: 36.4 }];
const REGIONES_JAK = [{ t: "EPIRO", lon: 20.9, lat: 39.95 }, { t: "PELOPONESO", lon: 22.2, lat: 37.45 },
  { t: "ITALIA", lon: 16.2, lat: 40.7 }, { t: "SICILIA", lon: 14.75, lat: 37.4 }];
const NOTAS_JAK = ["El tamaño del símbolo es proporcional al número de menciones.",
  "Sin cartografiar: Mesene o Mesina, el etnónimo Τισατε͂ς y Libia, que queda más al sur."];
const MENCIONES_JAK = TOPONYMS_JAK.flatMap((t) => t.mentions.map((m) => ({ ...m, place: t.name })));
const SEG_JAK = MENCIONES_JAK.filter((m) => m.certain).length;

// Menciones de un lugar (o de todos, con `lugar`): inscripción, forma, tipo y certeza, como en el mapa del dórico.
const MencionesLista = ({ mentions, lugar = false }) => (
  <div style={{ display: "grid", gridTemplateColumns: lugar ? "repeat(auto-fill, minmax(240px, 1fr))" : "1fr", gap: 6, margin: "10px 0" }}>
    {mentions.map((m) => (
      <div key={`${m.ref}-${m.form}`} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 4, padding: "7px 10px", borderRadius: 6,
        background: m.certain ? fade(COLOR, 0.06) : "rgba(120,90,40,0.04)",
        border: `1px ${m.certain ? "solid" : "dashed"} ${m.certain ? fade(COLOR, 0.25) : C.border}` }}>
        <span style={{ fontSize: 12, color: C.heading }}>{renderDesc(fmtDvc(m.ref))}</span>
        <span style={{ fontSize: 9.5, color: m.certain ? COLOR : C.dim, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.6 }}>
          {m.certain ? "segura" : "dudosa"}</span>
        <span className="greek" style={{ fontSize: 14, color: C.heading }}>{renderGreekText(m.form)}</span>
        <span style={{ fontSize: 10.5, color: C.muted, fontStyle: "italic" }}>{lugar ? `${m.place} · ${m.type}` : m.type}</span>
        <span style={{ fontSize: 10.5, color: C.dim, gridColumn: "1 / -1" }}>{m.date}</span>
      </div>
    ))}
  </div>
);

const n = (s) => SUBGRUPOS_JAK.find((x) => x.name === s).value;

// Capítulos 10-12: datos de cada subgrupo y una síntesis de su comentario.
const SUBGRUPOS = {
  jon: {
    nombre: "jónico", cap: "Capítulo 10", color: "#3c9d8f", total: n("Jónico"), adscripcion: ADSCRIPCION_JON, crono: CHRONO_JON,
    temas: THEMES_JON,
    texto: <>
      Se separa del ático por la η tras ε, ι y ρ, el hiato de εο, εω y εε, la geminada σσ, las desinencias -αται, -ατο y, en el
      jónico de Asia Menor, el tercer alargamiento compensatorio (εἰρωτᾶι), como en <Ref src="Lhôte" id="100A" />, la consulta del
      comerciante Esquilino, y <Ref src="DVC" id="1881A" />. El ἐντελέες sin contraer de <Ref src="DVC" id="2319A" /> hace jonio un
      texto que Crespo y Giannakis (2019: 53 n. 2) contaban como mezcla de jónico y koiné, y el ὠφελέατ[ο] de{" "}
      <Ref src="DVC" id="206A" /> lo es también, aunque los editores lo atribuyan a la koiné. <Ref src="DVC" id="4162B" />, con -μεν,
      se cuenta en el tesalio como doble adscripción. El único consultante del corpus al que puede atribuirse con fundamento un
      origen eubeo es el Ὀνήριμος de <Ref src="DVC" id="2217A" />, con el rotacismo eretrio en su nombre; la consulta se cuenta como
      jónica segura porque el artículo τὴν̣ asegura el jónico-ático (cap. 10, §4.6).
    </>,
  },
  ati: {
    nombre: "ático", cap: "Capítulo 11", color: "#4a4e7a", total: n("Ático"), adscripcion: ADSCRIPCION_ATI, crono: CHRONO_ATI,
    temas: THEMES_ATI,
    texto: <>
      Lo identifican la ᾱ tras ε, ι y ρ, la contracción de εο y εω y, en algunas consultas, ττ y οὖν. Varios consultantes son
      atenienses conocidos: Diógneto, que declara su ciudadanía en <Ref src="Lhôte" id="23" />, el esclavo Kittos de{" "}
      <Ref src="DVC" id="1411" />, que aparece en una lista ateniense de fíalas de libertos (McArthur 2019: 274-279), y el Fanóstrato
      de <Ref src="DVC" id="123" />, que pregunta por Ifícrates (Chaniotis 2017: 64). <Ref src="DVC" id="424B" /> se cuenta como
      jónico-ática sin precisar, porque πο̅ς no excluye el jónico en las inscripciones (Buck 1955: §68.4).
    </>,
  },
  koi: {
    nombre: "koiné", cap: "Capítulo 12", color: "#8a3a6a", total: n("Koiné"), adscripcion: ADSCRIPCION_KOI, crono: CHRONO_KOI,
    temas: THEMES_KOI,
    texto: <>
      Solo se cuenta como koiné la consulta con un rasgo propio o fechada desde finales del s. IV a.C. sin rasgos exclusivos del
      ático o del jónico. Cinco lo son por la fecha, como la de Isodemo (<Ref src="Lhôte" id="52" />) o la de
      Θεόφαντος (<Ref src="DVC" id="2510" />), y otras dos son dudosas: <Ref src="Lhôte" id="65B" />, tardía pero con un rasgo
      jónico-ático sin contexto, y <Ref src="DVC" id="2899A" />, de finales del s. IV a.C., con γεινεά, que solo tiene rasgos comunes al
      ático. La única con un rasgo propio, el híbrido πράσσοι de <Ref src="DVC" id="3033A" />, se cuenta como mezcla porque su
      consultante lleva un nombre dórico.
    </>,
  },
};

const th = { padding: "7px 10px", textAlign: "left", color: COLOR, fontFamily: "var(--fh)", fontSize: 11.5, borderBottom: `2px solid ${C.border}` };
const td = { padding: "6px 10px", fontSize: 12, borderBottom: "1px solid rgba(120,90,40,0.08)", verticalAlign: "top" };

export default function JonicoAtico({ switcher }) {
  const [tab, setTab] = useState("context");
  const [sub, setSub] = useState("cifras");
  const [grupo, setGrupo] = useState("jon");
  const [selPlace, setSelPlace] = useState(null);
  const place = TOPONYMS_JAK.find((t) => t.id === selPlace);
  const g = SUBGRUPOS[grupo];

  return (
    <ChapterLayout switcher={switcher} color={COLOR} accent={[C.terra, COLOR, C.blue, C.green]}
      title={<>El <em style={{ fontWeight: 700, color: COLOR }}>jónico-ático</em> y la koiné en las laminillas oraculares de Dodona</>}
      subtitle="El grupo en su conjunto y el jónico, el ático y la koiné"
      stats={<>
        <Stat label="Inscripciones" value={String(TOTAL_JAK)} sub="ss. V–II a.C." accent={COLOR} />
        <Stat label="Corpus dialectal" value={`${pct(TOTAL_JAK)} %`} sub={`${TOTAL_JAK} de ${miles(TOTAL_CORPUS)}`} accent={C.terra} />
        <Stat label="Seguras" value={String(CERTEZA_JAK.seguras)} sub={`${CERTEZA_JAK.dudosas} dudosas o de solo nombre`} accent={C.blue} />
        <Stat label="Koiné" value={String(n("Koiné"))} sub="con prueba positiva" accent="#8a3a6a" />
      </>}
      tabs={TABS} tab={tab} onTab={setTab}>

      {tab === "context" && <>
        <Sec title="Atenas, Jonia y Dodona" sub="Consultantes que procedían de lejos del santuario">
          <Card style={{ padding: "18px 22px" }}>
            <p style={{ ...PROSE, fontSize: 13, color: C.text, lineHeight: 1.8 }}>
              Ni el Epiro ni sus vecinos hablaban jónico o ático, de modo que la presencia de estas consultas se explica por las rutas,
              la política y el prestigio del oráculo. El interés ateniense creció desde mediados del s. V a.C., y las laminillas permiten
              identificar a algunos atenienses: Diógneto, hijo de Aristomedes (<Ref src="Lhôte" id="23" />), Isodemo, que reside en Atenas
              (<Ref src="Lhôte" id="52" />), el esclavo Kittos (<Ref src="DVC" id="1411" />) o el Fanóstrato que pregunta por Ifícrates
              (<Ref src="DVC" id="123" />). Los jonios se reconocen por su lengua o por el objeto de su pregunta, como el comerciante
              Esquilino, que piensa navegar al Adriático (<Ref src="Lhôte" id="100A" />), o los navegantes que dudan entre quedarse en
              Ambracia o partir hacia Mesene (<Ref src="Lhôte" id="106A" />). Porino, el Κυμαῖος de <Ref src="DVC" id="35A" />, pregunta
              si le conviene servir a un sátrapa, y su εἰρωτᾶ apunta, como propone Lhôte (2017b: 43), a un jonio establecido en la Cime
              eolia.
            </p>
          </Card>
        </Sec>
      </>}

      {tab === "map" && <>
        <Sec title="Topónimos y etnónimos en las consultas jónico-áticas y de koiné"
          sub={`${MENCIONES_JAK.length} menciones de ${TOPONYMS_JAK.length} lugares, ${SEG_JAK} de ellas seguras`}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: "2 1 520px", minWidth: 0 }}>
              <DoricMap selected={selPlace} onSelect={setSelPlace} places={TOPONYMS_JAK} color={COLOR} view={VISTA_JAK} land={JAK_LAND_PATH}
                mares={MARES_JAK} regiones={REGIONES_JAK} notas={NOTAS_JAK}
                label="Mapa de los topónimos y etnónimos mencionados en las consultas jónico-áticas y de koiné" />
            </div>
            <div style={{ flex: "1 1 240px", minWidth: 0 }}>
              {!place && (
                <Card>
                  <div style={{ fontFamily: "var(--fh)", fontSize: 15, color: C.heading, marginBottom: 6 }}>Selecciona un lugar</div>
                  <p style={PROSE}>
                    Los lugares dibujan sobre todo rutas marítimas: Apolonia, Ambracia, Alicia, Siracusa y el Adriático son destinos de viajes
                    de consultantes que navegaban por el Jónico y el Adriático, por las mismas vías que los dóricos de las colonias. Fuera de
                    esas rutas solo figuran los lugares de origen o de residencia de dos consultantes, Atenas y Cime, y quizá Escíone, en la
                    Calcídica.
                  </p>
                  <Stats style={{ marginTop: 12, marginBottom: 0 }}>
                    <Stat label="Seguras" value={String(SEG_JAK)} accent={COLOR} />
                    <Stat label="Dudosas" value={String(MENCIONES_JAK.length - SEG_JAK)} accent={ORO} />
                  </Stats>
                </Card>
              )}
              {place && (
                <Card accent={place.seg ? COLOR : ORO}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 6 }}>
                    <div>
                      <span style={{ fontFamily: "var(--fh)", fontSize: 19, fontWeight: 700, color: C.heading }}>{place.name}</span>
                      <span style={{ fontStyle: "italic", color: C.muted, marginLeft: 8, fontSize: 14 }}>{renderGreekText(place.greek)}</span>
                    </div>
                    <button onClick={() => setSelPlace(null)} aria-label="Cerrar" style={{ color: C.dim, fontSize: 18 }}>×</button>
                  </div>
                  <div style={{ fontSize: 11, color: C.dim, margin: "2px 0 10px" }}>{place.ambito}</div>
                  <MencionesLista mentions={place.mentions} />
                  <p style={{ ...PROSE, fontSize: 12 }}>{renderDesc(place.note)}</p>
                </Card>
              )}
            </div>
          </div>
        </Sec>
        <Sec title="Menciones por lugar" sub={`Menciones seguras frente a restituidas o dudosas (n = ${MENCIONES_JAK.length})`}>
          <Bars horizontal data={[...TOPONYMS_JAK].sort((a, b) => b.total - a.total || b.seg - a.seg).map((t) => ({ name: t.name, seguras: t.seg, dudosas: t.dud }))}
            keys={["seguras", "dudosas"]} height={340} left={130} unit="menciones"
            colors={{ seguras: COLOR, dudosas: ORO }} labels={{ seguras: "Mención segura", dudosas: "Mención restituida o dudosa" }} />
        </Sec>
        <Sec title="Las menciones, una a una">
          <MencionesLista mentions={MENCIONES_JAK} lugar />
        </Sec>
      </>}

      {tab === "anexo" && (
        <Sec title="Las inscripciones jónico-áticas y de koiné" sub="Texto de la edición, datación y subgrupo">
          <Anexo rows={ANEXO_JAK} color={COLOR} />
        </Sec>
      )}

      {tab === "profile" && <>
        <SubNav color={COLOR} value={sub} onChange={setSub} items={[
          ["cifras", "El jónico-ático y la koiné en números", "adscripción, subgrupos, cronología, temática y alfabeto"],
          ["rasgos", "Rasgos dialectales", `${RASGOS_TABLA_JAK.length} rasgos que separan el grupo de los demás dialectos`],
        ]} />
        {sub === "cifras" && <>
          <Sec title="El jónico-ático y la koiné en el corpus de Dodona">
            <Stats>
              <Stat label="Inscripciones" value={String(TOTAL_JAK)} accent={COLOR} sub={`el ${pct(TOTAL_JAK)} % del corpus dialectal`} />
              <Stat label="Dudosas o de solo nombre" value={`${pct(CERTEZA_JAK.dudosas, TOTAL_JAK)} %`} sub={`${CERTEZA_JAK.dudosas} de ${TOTAL_JAK}`} accent={C.amber} />
              <Stat label="Sin precisar" value={String(n("Sin precisar"))} sub="jónico, ático o koiné" accent={C.muted} />
            </Stats>
            <Card>
              <p style={PROSE}>
                La bibliografía llama koiné a casi todas estas consultas, incluidas las del s. V a.C. Con el criterio de la tesis (una
                consulta solo es de koiné si tiene un rasgo propio o si su fecha, desde finales del s. IV a.C., no deja lugar al ático o al
                jónico), la koiné del corpus se reduce a siete consultas, frente a las cien que Giannakis (2024a: 40-41) da como
                escritas solo en koiné: las demás son jónico-áticas sin precisar, áticas o jonias, carecen de rasgo jónico-ático visible
                o son mezclas. Lo que crece en el
                s. IV a.C. es el número de consultas jónico-áticas, no el de textos en koiné.
              </p>
            </Card>
          </Sec>

          <Sec title="Adscripción de las consultas" sub="Bases de la adscripción, grado de certeza y consultas excluidas del capítulo">
            <AdscripcionTable data={ADSCRIPCION_JAK} color={COLOR} />
          </Sec>

          <Sec title="Subgrupos" sub="Jónico, ático y koiné, y las consultas jónico-áticas cuya variedad no puede precisarse">
            <Bars horizontal data={SUBGRUPOS_JAK} height={220} left={130} />
          </Sec>

          <Sec title="El jónico-ático y la koiné en contexto" sub="Macrogrupos dialectales del corpus de Dodona">
            <Bars horizontal data={MACROGRUPOS} highlight="Jónico-ático-koiné" height={300} left={200} />
          </Sec>

          <Sec title="Distribución cronológica" sub={`El s. IV a.C. reúne ${SIGLO_IV_JAK} de las ${TOTAL_JAK} inscripciones; la koiné solo aparece desde finales de ese siglo`}>
            <Bars data={CHRONO_DETAIL_JAK.map((d) => ({ ...d, color: colorSiglo(d.period) }))} indexBy="period" keys={["n"]} height={300} rotate={-35} />
          </Sec>

          <Sec title="Temática de las consultas" sub="Predominan las relativas al trabajo y al comercio, como corresponde a comerciantes y navegantes">
            <Temas data={THEMES_JAK} color={COLOR} height={330} />
          </Sec>

          <Sec title="Alfabeto"
            note="Todas las inscripciones del grupo emplean el alfabeto jónico reformado o uno que no puede identificarse, salvo I.Dodone DVC 3708A, que los editores atribuyen a una colonia elea del Epiro pese a su γεο̅εργέο̅ y su ἔσσται. Varias conservan la notación ática anterior al 403/2 a.C., con Ε y Ο para las vocales largas.">
            <DonutLegend data={ALF_JAK_PIE} height={220} valueColor={COLOR} />
          </Sec>
        </>}
        {sub === "rasgos" && <>
          <Sec title="Rasgos del jónico-ático y de la koiné" sub="Formas que distinguen una consulta jónico-ática y su documentación en el grupo"
            note="En las dos últimas columnas, las consultas con el rasgo visible de adscripción segura y dudosa; una consulta puede tener varios rasgos.">
            <div style={{ overflowX: "auto" }}>
              <table style={{ borderCollapse: "collapse", width: "100%", minWidth: 720 }}>
                <thead>
                  <tr>{["§", "Rasgo", "Forma jónico-ática", "Forma de los demás", "Otros dialectos con el rasgo", "Seguras", "Dudosas"].map((h) => <th key={h} style={th}>{h}</th>)}</tr>
                </thead>
                <tbody>
                  {RASGOS_TABLA_JAK.map((r) => (
                    <tr key={r.rasgo}>
                      <td style={{ ...td, color: C.muted }}>{r.sec}</td>
                      <td style={{ ...td, fontFamily: "var(--fh)", color: C.heading }}>{r.rasgo}</td>
                      <td style={td}><span className="greek-run">{r.jak}</span></td>
                      <td style={td}><span className="greek-run">{r.otros}</span></td>
                      <td style={{ ...td, color: C.muted }}>{r.comparten}</td>
                      <td style={{ ...td, textAlign: "center", fontWeight: 700, color: COLOR }}>{r.seguras}</td>
                      <td style={{ ...td, textAlign: "center", color: C.amber }}>{r.dudosas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Sec>
        </>}
      </>}

      {tab === "subgrupos" && <>
        <SubNav color={g.color} value={grupo} onChange={setGrupo} items={[
          ["jon", "El jónico", `capítulo 10 · ${n("Jónico")} inscripciones`],
          ["ati", "El ático", `capítulo 11 · ${n("Ático")} inscripciones`],
          ["koi", "La koiné", `capítulo 12 · ${n("Koiné")} inscripciones`],
        ]} />
        <Sec title={`${g.cap}. El ${g.nombre === "koiné" ? "la koiné" : g.nombre}`.replace("El la", "La")}>
          <Stats>
            <Stat label="Inscripciones" value={String(g.total)} sub={`el ${pct(g.total, TOTAL_JAK)} % del grupo`} accent={g.color} />
            <Stat label="Corpus dialectal" value={`${pct(g.total)} %`} sub={`${g.total} de ${miles(TOTAL_CORPUS)}`} accent={C.terra} />
          </Stats>
          <Card><p style={PROSE}>{g.texto}</p></Card>
        </Sec>
        <Sec title="Adscripción" sub="Bases de la adscripción, grado de certeza y consultas excluidas">
          <AdscripcionTable data={g.adscripcion} color={g.color} />
        </Sec>
        <Sec title="Distribución cronológica">
          <Bars data={g.crono.map((d) => ({ ...d, color: colorSiglo(d.period) }))} indexBy="period" keys={["n"]} height={260} rotate={-35} />
        </Sec>
        <Sec title="Temática">
          <Temas data={g.temas} color={g.color} height={260} />
        </Sec>
      </>}
    </ChapterLayout>
  );
}
