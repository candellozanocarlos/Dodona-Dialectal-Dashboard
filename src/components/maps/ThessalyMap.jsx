// Mapa de Tesalia: tétradas con el número de inscripciones adscritas (§7) y
// lugares que el corpus menciona o que el capítulo relaciona con Dodona.
import { useState } from "react";
import { C, fade } from "../../theme.js";
import { REGIONS_TES, TH_KIND, TH_PLACES } from "../../data/tesalio.js";
import { renderGreekText } from "../../lib/text.jsx";
import { TH_AREAS, TH_LAND_PATH } from "./coastlines.js";
import { HALO, diamond, makeProj, polygonPoints, star } from "./geo.js";
import { Dodona, MapLegend, MapSvg, Mountains, RegionLabels, ScaleBar, SeaLabels, SourceNote } from "./MapBase.jsx";

const P = makeProj({ lon0: 20.55, lon1: 23.80, lat0: 38.55, lat1: 40.45 });
const radius = (n) => Math.sqrt(55 + 120 * n) * 0.5;   // área ∝ número de menciones

const TETRADAS = [
  { id: "histiaiotis", name: "HISTIÓTIDE", lon: 21.58, lat: 39.76 },
  { id: "pelasgiotis", name: "PELASGIÓTIDE", lon: 22.62, lat: 39.76 },
  { id: "thessaliotis", name: "TESALIÓTIDE", lon: 21.80, lat: 39.12 },
  { id: "phthiotis", name: "FTIÓTIDE", lon: 22.80, lat: 39.10 },
];
const PERIECIAS = [
  { id: "perrebia", name: "Perrebia", lon: 21.62, lat: 40.10 },
  { id: "magnesia", name: "Magnesia", lon: 23.16, lat: 39.62 },
];
const MONTES = [
  { name: "Olimpo", lon: 22.36, lat: 40.09 },
  { name: "Osa", lon: 22.68, lat: 39.80 },
  { name: "Pelión", lon: 23.05, lat: 39.41 },
  { name: "Otris", lon: 22.55, lat: 39.02 },
  { name: "Pindo", lon: 21.30, lat: 39.40 },
];
const MARES = [
  { t: "Golfo Termaico", lon: 22.93, lat: 40.33 },
  { t: "Mar Egeo", lon: 23.45, lat: 39.85 },
  { t: "Golfo Pagasético", lon: 22.98, lat: 39.25 },
  { t: "Golfo Maliaco", lon: 22.70, lat: 38.86 },
];
const REGIONES = [
  { t: "EPIRO", lon: 20.95, lat: 39.86 },
  { t: "MACEDONIA", lon: 22.02, lat: 40.38 },
  { t: "EUBEA", lon: 23.40, lat: 38.82 },
  { t: "GRECIA CENTRAL", lon: 21.85, lat: 38.66 },
];
// Curso aproximado del Peneo y contorno aproximado del lago Bebeide (Karla).
const PENEO = [[21.33, 39.78], [21.50, 39.73], [21.63, 39.70], [21.78, 39.62], [21.90, 39.575], [22.01, 39.577],
  [22.15, 39.58], [22.30, 39.61], [22.42, 39.648], [22.50, 39.75], [22.58, 39.885], [22.72, 39.93]];
const BEBEIDE = [[22.77, 39.50], [22.80, 39.535], [22.86, 39.555], [22.92, 39.54], [22.94, 39.50], [22.90, 39.465],
  [22.84, 39.45], [22.79, 39.465]];

const byRegion = Object.fromEntries(REGIONS_TES.map((r) => [r.id, r]));

export default function ThessalyMap({ region = null, onRegion = () => {}, place = null, onPlace = () => {} }) {
  const [hover, setHover] = useState(null);           // "r:<tétrada>" o "p:<lugar>"
  const [dx, dy] = P.p(20.788, 39.546);
  const [tx, ty] = P.p(21.7679, 39.5550);
  const [px, py] = P.p(22.23, 39.595);
  const hovered = hover?.startsWith("p:") ? TH_PLACES.find((p) => p.id === hover.slice(2)) : null;
  const key = (e, fn) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fn(); } };

  return (
    <div style={{ position: "relative" }}>
      <MapSvg proj={P} land={TH_LAND_PATH} label="Mapa de Tesalia con sus tétradas y los lugares relacionados con el corpus de Dodona">
        {/* Periecias y tétradas (contorno esquemático recortado a la costa) */}
        {PERIECIAS.map((a) => (
          <path key={a.id} d={TH_AREAS[a.id]} fill="rgba(176,160,119,0.10)" stroke="#a3906a" strokeWidth={1}
            strokeDasharray="5 3" strokeOpacity={0.6} />
        ))}
        {TETRADAS.map((t) => {
          const data = byRegion[t.id];
          const col = C.regions[t.id];
          const on = hover === `r:${t.id}` || region === t.id;
          const sel = () => data && onRegion(region === t.id ? null : t.id);
          return (
            <path key={t.id} d={TH_AREAS[t.id]} fill={col} fillOpacity={on ? 0.3 : data ? 0.14 : 0.05}
              stroke={on ? C.tesalio : col} strokeOpacity={on ? 0.95 : 0.45} strokeWidth={on ? 2 : 1} strokeDasharray={on ? "none" : "5 3"}
              tabIndex={data ? 0 : -1} role={data ? "button" : undefined}
              aria-label={data ? `${data.name}: ${data.value} inscripciones` : `${t.name}: sin inscripciones adscritas`}
              onMouseEnter={() => setHover(`r:${t.id}`)} onMouseLeave={() => setHover(null)}
              onClick={sel} onKeyDown={(e) => key(e, sel)}
              style={{ cursor: data ? "pointer" : "default", transition: "all 0.2s", outline: "none" }} />
          );
        })}

        {/* Peneo y lago Bebeide */}
        <polyline points={polygonPoints(P, PENEO)} fill="none" stroke={C.blue} strokeWidth={1.3} strokeOpacity={0.45}
          strokeLinecap="round" strokeLinejoin="round" />
        <text x={px} y={py - 6} textAnchor="middle" style={{ fontSize: 9.5, fill: C.blue, opacity: 0.7, fontFamily: "var(--fh)", fontStyle: "italic" }}>Peneo</text>
        <polygon points={polygonPoints(P, BEBEIDE)} fill="rgba(42,106,142,0.12)" stroke={C.blue} strokeOpacity={0.45} strokeWidth={0.9} strokeDasharray="4 3" />

        <SeaLabels proj={P} items={MARES} />
        <RegionLabels proj={P} items={REGIONES} />
        <Mountains proj={P} items={MONTES} />

        {/* Rótulos de tétradas con el número de inscripciones adscritas */}
        {TETRADAS.map((t) => {
          const [x, y] = P.p(t.lon, t.lat);
          const data = byRegion[t.id];
          return (
            <g key={t.id} style={{ pointerEvents: "none" }}>
              <text x={x} y={y} textAnchor="middle" style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: 2,
                fill: C.regions[t.id], opacity: 0.85, fontFamily: "var(--fb)", ...HALO }}>{t.name}</text>
              <text x={x} y={y + 14} textAnchor="middle" style={{ fontSize: 10, fill: C.muted, fontFamily: "var(--fb)", fontStyle: "italic", ...HALO }}>
                {data ? `${data.value} inscripciones` : "sin inscripciones adscritas"}</text>
            </g>
          );
        })}
        {PERIECIAS.map((a) => {
          const [x, y] = P.p(a.lon, a.lat);
          return <text key={a.id} x={x} y={y} textAnchor="middle" style={{ fontSize: 10, fill: "#a08d64", fontStyle: "italic",
            fontFamily: "var(--fh)", pointerEvents: "none", ...HALO }}>{a.name}</text>;
        })}

        {/* Camino a Dodona */}
        <line x1={dx + 8} y1={dy} x2={tx - 10} y2={ty} stroke={C.ink} strokeWidth={1} strokeDasharray="4 3" strokeOpacity={0.55} />
        <text x={(dx + tx) / 2} y={(dy + ty) / 2 - 7} textAnchor="middle"
          style={{ fontSize: 9, fill: C.ink, opacity: 0.75, fontFamily: "var(--fb)", fontStyle: "italic", ...HALO }}>≈ 180 km · unos 5 días</text>
        <Dodona x={dx} y={dy} />

        {/* Lugares */}
        {TH_PLACES.map((pl) => {
          const [x, y] = P.p(pl.lon, pl.lat);
          const on = hover === `p:${pl.id}` || place === pl.id;
          const col = TH_KIND[pl.kind].color;
          const r = radius(pl.mentions.length) + (on ? 1.5 : 0);
          const sel = () => onPlace(place === pl.id ? null : pl.id);
          return (
            <g key={pl.id} tabIndex={0} role="button" aria-label={`${pl.name}: ${TH_KIND[pl.kind].label}`}
              onMouseEnter={() => setHover(`p:${pl.id}`)} onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(`p:${pl.id}`)} onBlur={() => setHover(null)}
              onClick={sel} onKeyDown={(e) => key(e, sel)} style={{ cursor: "pointer", outline: "none" }}>
              {pl.kind === "mencion" && <>
                <circle cx={x} cy={y} r={r} fill={col} stroke="#fff" strokeWidth={1.5} filter={on ? "url(#mapGlow)" : "none"} />
                {!pl.certain && <circle cx={x} cy={y} r={r + 4} fill="none" stroke={col} strokeWidth={1.2} strokeDasharray="3 2" />}
              </>}
              {pl.kind === "region" &&
                <polygon points={diamond(x, y, r)} fill={fade(col, 0.55)} stroke={col} strokeWidth={1.2} strokeDasharray="3 2" />}
              {pl.kind === "procedencia" &&
                <polygon points={diamond(x, y, on ? 9 : 7.5)} fill="rgba(255,255,255,0.75)" stroke={col} strokeWidth={2} filter={on ? "url(#mapGlow)" : "none"} />}
              {pl.kind === "contexto" && <circle cx={x} cy={y} r={on ? 5.5 : 4.5} fill={C.text} stroke="#fff" strokeWidth={1.3} />}
              {place === pl.id && <circle cx={x} cy={y} r={r + 8} fill="none" stroke={C.tesalio} strokeWidth={1.2} strokeDasharray="3 2" />}
              <text x={x + pl.dx} y={y + pl.dy} textAnchor={pl.anchor}
                style={{ fontSize: pl.kind === "contexto" ? 11 : 12.5, fontFamily: "var(--fh)",
                  fontStyle: pl.kind === "region" ? "italic" : "normal", fontWeight: on || pl.kind !== "contexto" ? 700 : 500,
                  fill: pl.kind === "contexto" ? "#5b564d" : C.heading, ...HALO }}>
                {pl.name}{pl.mentions.length > 1 ? ` (${pl.mentions.length})` : ""}
              </text>
            </g>
          );
        })}

        <ScaleBar proj={P} km={25} />
        <SourceNote proj={P}>Costa: Natural Earth (dominio público) · Tétradas, Peneo y lago Bebeide: trazado aproximado</SourceNote>
      </MapSvg>

      {hovered && (
        <div style={{ position: "absolute", top: 10, right: 10, maxWidth: 300, pointerEvents: "none",
          background: "rgba(255,252,245,0.97)", border: `1px solid ${C.border}`, borderLeft: `3px solid ${TH_KIND[hovered.kind].color}`,
          borderRadius: 8, padding: "9px 14px", boxShadow: "0 4px 16px rgba(0,0,0,0.08)", fontSize: 11.5, color: C.text }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--fh)", fontWeight: 700, fontSize: 13.5, color: C.heading }}>{hovered.name}</span>
            <span style={{ fontStyle: "italic", color: C.muted }}>{renderGreekText(hovered.greek)}</span>
            {hovered.tetrada && <span style={{ color: C.dim, fontSize: 10.5 }}>· {hovered.tetrada}</span>}
          </div>
          <div style={{ color: C.muted, marginTop: 3 }}>
            {TH_KIND[hovered.kind].label}{hovered.mentions.length > 1 ? ` · ${hovered.mentions.length} menciones` : ""}
            {hovered.kind === "mencion" && !hovered.certain ? " · referencia probable o discutida" : ""}
          </div>
          <div style={{ color: C.dim, fontSize: 10.5, marginTop: 3 }}>Pulsa para ver el detalle</div>
        </div>
      )}

      <MapLegend items={[
        { el: <circle cx="8" cy="8" r="6" fill={C.tesalio} stroke="#fff" strokeWidth="1.2" />, l: "Topónimo en una laminilla (tamaño ∝ menciones)" },
        { el: <><circle cx="8" cy="8" r="4" fill={C.tesalio} /><circle cx="8" cy="8" r="7" fill="none" stroke={C.tesalio} strokeDasharray="3 2" /></>, l: "Referencia probable, restituida o discutida" },
        { el: <polygon points={diamond(8, 8, 6)} fill="rgba(255,255,255,0.75)" stroke={C.amber} strokeWidth="1.6" />, l: "Procedencia declarada" },
        { el: <circle cx="8" cy="8" r="4.5" fill={C.text} />, l: "Sin mención en el corpus" },
        { el: <polygon points={star(8, 8, 7, 3)} fill={C.ink} />, l: "Santuario de Dodona" },
      ]} />
    </div>
  );
}
