// Mapa de los topónimos y etnónimos dóricos citados en el corpus (§2 del dórico general), con la estética de MagnaGraeciaMap.
// Por defecto, los lugares y la ventana del dórico general; el dórico noroccidental pasa los suyos (places, view, land…).
import { useState } from "react";
import { C, DIALECT_COLORS, ORO } from "../../theme.js";
import { TOPONYMS_DOR } from "../../data/doricoGeneral.js";
import { renderGreekText } from "../../lib/text.jsx";
import { DOR_LAND_PATH } from "./coastlines.js";
import { HALO, makeProj, star } from "./geo.js";
import { Dodona, MapLegend, MapSvg, RegionLabels, SeaLabels, SourceNote } from "./MapBase.jsx";

const DOR_GENERAL = DIALECT_COLORS.dorico;
const VISTA_DOR = { lon0: 15.9, lon1: 23.8, lat0: 36.7, lat1: 43.7 };
const radius = (n) => Math.sqrt(55 + 120 * n) * 0.5;   // área ∝ número de menciones

const MARES = [
  { t: "Mar Adriático", lon: 17.6, lat: 42.2 },
  { t: "Mar Jónico", lon: 18.4, lat: 38.4 },
];
const REGIONES = [
  { t: "EPIRO", lon: 20.9, lat: 39.95 },
  { t: "ILIRIA", lon: 19.9, lat: 42.2 },
  { t: "PELOPONESO", lon: 22.2, lat: 37.45 },
];

const NOTAS_DOR = ["El tamaño del símbolo es proporcional al número de menciones.",
  "No se cuentan I.Dodone DVC 105B, 193B y 3116A (Κορ- restituido: Corcira o Corinto)."];

export default function DoricMap({ selected = null, onSelect = () => {}, anillo = false, places = TOPONYMS_DOR, color = DOR_GENERAL,
  view = VISTA_DOR, land = DOR_LAND_PATH, mares = MARES, regiones = REGIONES, notas = NOTAS_DOR,
  label: aria = "Mapa de los topónimos y etnónimos dóricos mencionados en el corpus de Dodona" }) {
  const [hover, setHover] = useState(null);
  const P = makeProj(view);
  const DOR = color;
  const [dx, dy] = P.p(20.788, 39.546);
  const active = hover || selected;
  const hovered = hover ? places.find((t) => t.id === hover) : null;
  const label = (t) => anillo && t.dud ? `${t.name} (${t.seg}+${t.dud})` : `${t.name} (${t.total})`;

  return (
    <div style={{ position: "relative" }}>
      <MapSvg proj={P} land={land} label={aria}>
        <SeaLabels proj={P} items={mares} />
        <RegionLabels proj={P} items={regiones} />

        {places.filter((t) => t.lon != null).map((t) => {
          const [x, y] = P.p(t.lon, t.lat);
          const isAct = active === t.id;
          const rTot = radius(t.total) + (isAct ? 1.5 : 0);
          const rSeg = radius(t.seg) + (isAct ? 1.5 : 0);
          const fill = t.seg ? DOR : ORO;
          const tx = x + t.off[0] * P.kx * P.s;
          const ty = y - t.off[1] * P.s;
          const anchor = t.off[0] > 0 ? "start" : t.off[0] < 0 ? "end" : "middle";
          const sel = () => onSelect(selected === t.id ? null : t.id);
          return (
            <g key={t.id} tabIndex={0} role="button" aria-label={`${t.name}: ${t.seg} menciones seguras y ${t.dud} dudosas`}
              onMouseEnter={() => setHover(t.id)} onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(t.id)} onBlur={() => setHover(null)} onClick={sel}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sel(); } }}
              style={{ cursor: "pointer", outline: "none" }}>
              {!anillo && <circle cx={x} cy={y} r={rTot} fill={fill} stroke="#fff" strokeWidth={1.4}
                filter={isAct ? "url(#mapGlow)" : "none"} style={{ transition: "all 0.2s" }} />}
              {anillo && <circle cx={x} cy={y} r={rTot} fill="rgba(255,255,255,0.35)" stroke={DOR} strokeWidth={1.8} />}
              {anillo && t.seg > 0 && <circle cx={x} cy={y} r={rSeg} fill={DOR} stroke="#fff" strokeWidth={0.9} />}
              {selected === t.id && <circle cx={x} cy={y} r={rTot + 4} fill="none" stroke={C.heading} strokeWidth={1.2} strokeDasharray="3 2" />}
              <text x={tx} y={ty} textAnchor={anchor}
                style={{ fontSize: 11.5, fontFamily: "var(--fh)", fontWeight: isAct ? 700 : 500, fill: isAct ? C.heading : "#33302b", ...HALO }}>
                {label(t)}
              </text>
            </g>
          );
        })}

        <Dodona x={dx} y={dy} />
        {notas.map((n, i) => (
          <text key={n} x={10} y={P.h - 10 - 14 * (notas.length - 1 - i)} style={{ fontSize: 9, fill: C.muted, fontFamily: "var(--fb)", fontStyle: "italic" }}>
            {n}
          </text>
        ))}
        <SourceNote proj={P}>Costa: Natural Earth (dominio público)</SourceNote>
      </MapSvg>

      {hovered && (
        <div style={{ position: "absolute", top: 10, right: 10, maxWidth: 300, pointerEvents: "none",
          background: "rgba(255,252,245,0.97)", border: `1px solid ${C.border}`,
          borderLeft: `3px solid ${hovered.seg ? DOR : ORO}`, borderRadius: 8, padding: "9px 14px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)", fontSize: 11.5, color: C.text }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--fh)", fontWeight: 700, fontSize: 13.5, color: C.heading }}>{hovered.name}</span>
            <span style={{ fontStyle: "italic", color: C.muted }}>{renderGreekText(hovered.greek)}</span>
          </div>
          <div style={{ color: C.muted, marginTop: 3 }}>
            {hovered.seg} {hovered.seg === 1 ? "segura" : "seguras"}
            {hovered.dud > 0 && `, ${hovered.dud} ${hovered.dud === 1 ? "dudosa" : "dudosas"}`}
            <span style={{ color: C.dim }}> · {hovered.ambito}</span>
          </div>
          <div style={{ color: C.dim, fontSize: 10.5, marginTop: 3 }}>Pulsa para ver las inscripciones</div>
        </div>
      )}

      <MapLegend items={[
        ...(anillo ? [
          { el: <circle cx="8" cy="8" r="5" fill={DOR} />, l: "Menciones seguras (disco)" },
          { el: <circle cx="8" cy="8" r="6" fill="none" stroke={DOR} strokeWidth="1.6" />, l: "Total de menciones (anillo)" },
        ] : [
          { el: <circle cx="8" cy="8" r="6" fill={DOR} />, l: "Con alguna mención segura" },
          { el: <circle cx="8" cy="8" r="6" fill={ORO} />, l: "Solo menciones restituidas o dudosas" },
        ]),
        { el: <polygon points={star(8, 8, 7, 3)} fill={C.ink} />, l: "Santuario de Dodona" },
      ]} />
    </div>
  );
}
