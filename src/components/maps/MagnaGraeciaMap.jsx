// Mapa de los topónimos y etnónimos de Magna Grecia y Sicilia citados en el corpus.
import { useState } from "react";
import { C } from "../../theme.js";
import { MG_LIGHT, TOPONYMS_SEV } from "../../data/dorico.js";
import { renderGreekText } from "../../lib/text.jsx";
import { MG_LAND_PATH } from "./coastlines.js";
import { HALO, makeProj, star } from "./geo.js";
import { Dodona, MapLegend, MapSvg, RegionLabels, SeaLabels, SourceNote } from "./MapBase.jsx";

const P = makeProj({ lon0: 11.6, lon1: 22.2, lat0: 36.2, lat1: 42.4 });
const radius = (n) => Math.sqrt(55 + 120 * n) * 0.52;   // área ∝ número de menciones

const MARES = [
  { t: "Mar Tirreno", lon: 13.2, lat: 39.4 },
  { t: "Mar Jónico", lon: 18.6, lat: 37.9 },
  { t: "Mar Adriático", lon: 17.6, lat: 41.95 },
];
const REGIONES = [
  { t: "EPIRO", lon: 20.75, lat: 40.1 },
  { t: "LUCANIA", lon: 15.95, lat: 40.55 },
  { t: "BRUTIO", lon: 16.2, lat: 39.25 },
];

export default function MagnaGraeciaMap({ selected = null, onSelect = () => {}, anillo = false }) {
  const [hover, setHover] = useState(null);
  const [dx, dy] = P.p(20.788, 39.546);
  const [ox, oy] = P.p(18.49, 40.15);   // Otranto
  const [kx, ky] = P.p(19.92, 39.62);   // Corcira
  const active = hover || selected;
  const hovered = hover ? TOPONYMS_SEV.find((t) => t.id === hover) : null;
  const label = (t) => anillo && t.dud ? `${t.name} (${t.seg}+${t.dud})` : `${t.name} (${t.total})`;

  return (
    <div style={{ position: "relative" }}>
      <MapSvg proj={P} land={MG_LAND_PATH} label="Mapa de los topónimos y etnónimos de Magna Grecia y Sicilia mencionados en el corpus de Dodona">
        <SeaLabels proj={P} items={MARES} />
        <RegionLabels proj={P} items={REGIONES} />
        <text x={(kx + ox) / 2 - 4} y={Math.min(ky, oy) - 40} textAnchor="middle"
          style={{ fontSize: 9, fill: C.severiorDeep, opacity: 0.7, fontFamily: "var(--fh)", fontStyle: "italic" }}>Estrecho de Otranto</text>
        <text x={kx + 2} y={ky + 18} textAnchor="middle" style={{ fontSize: 10, fill: C.dim, fontFamily: "var(--fb)", fontStyle: "italic" }}>Corfú</text>

        {TOPONYMS_SEV.map((t) => {
          const [x, y] = P.p(t.lon, t.lat);
          const isAct = active === t.id;
          const rTot = radius(t.total) + (isAct ? 1.5 : 0);
          const rSeg = radius(t.seg) + (isAct ? 1.5 : 0);
          const fill = t.seg ? C.severior : MG_LIGHT;
          const tx = x + t.off[0] * P.kx * P.s;
          const ty = y - t.off[1] * P.s;
          const anchor = t.off[0] > 0 ? "start" : t.off[0] < 0 ? "end" : "middle";
          const shape = (r, props) => t.region
            ? <rect x={x - r * 0.8} y={y - r * 0.8} width={r * 1.6} height={r * 1.6} transform={`rotate(45 ${x} ${y})`} {...props} />
            : <circle cx={x} cy={y} r={r} {...props} />;
          const sel = () => onSelect(selected === t.id ? null : t.id);
          return (
            <g key={t.id} tabIndex={0} role="button" aria-label={`${t.name}: ${t.seg} menciones seguras y ${t.dud} dudosas`}
              onMouseEnter={() => setHover(t.id)} onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(t.id)} onBlur={() => setHover(null)} onClick={sel}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sel(); } }}
              style={{ cursor: "pointer", outline: "none" }}>
              {!anillo && shape(rTot, { fill, fillOpacity: t.region ? 0.8 : 1, stroke: "#fff", strokeWidth: 1.4,
                filter: isAct ? "url(#mapGlow)" : "none", style: { transition: "all 0.2s" } })}
              {anillo && shape(rTot, { fill: "rgba(255,255,255,0.35)", stroke: C.severior, strokeWidth: 1.8 })}
              {anillo && t.seg > 0 && shape(rSeg, { fill: C.severior, fillOpacity: t.region ? 0.8 : 1, stroke: "#fff", strokeWidth: 0.9 })}
              {selected === t.id && shape(rTot + 4, { fill: "none", stroke: C.severiorDeep, strokeWidth: 1.2, strokeDasharray: "3 2" })}
              <text x={tx} y={ty} textAnchor={anchor}
                style={{ fontSize: 11.5, fontFamily: "var(--fh)", fontStyle: t.region ? "italic" : "normal",
                  fontWeight: isAct ? 700 : 500, fill: isAct ? C.heading : (t.region ? "#5b564d" : "#33302b"), ...HALO }}>
                {label(t)}
              </text>
            </g>
          );
        })}

        <Dodona x={dx} y={dy} />
        <text x={10} y={P.h - 10} style={{ fontSize: 9, fill: C.muted, fontFamily: "var(--fb)", fontStyle: "italic" }}>
          El tamaño del símbolo es proporcional al número de menciones.
        </text>
        <SourceNote proj={P}>Costa: Natural Earth (dominio público)</SourceNote>
      </MapSvg>

      {hovered && (
        <div style={{ position: "absolute", top: 10, right: 10, maxWidth: 300, pointerEvents: "none",
          background: "rgba(255,252,245,0.97)", border: `1px solid ${C.border}`,
          borderLeft: `3px solid ${hovered.seg ? C.severior : MG_LIGHT}`, borderRadius: 8, padding: "9px 14px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)", fontSize: 11.5, color: C.text }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--fh)", fontWeight: 700, fontSize: 13.5, color: C.severiorDeep }}>{hovered.name}</span>
            <span style={{ fontStyle: "italic", color: C.muted }}>{renderGreekText(hovered.greek)}</span>
          </div>
          <div style={{ color: C.muted, marginTop: 3 }}>
            {hovered.seg} {hovered.seg === 1 ? "segura" : "seguras"}
            {hovered.dud > 0 && `, ${hovered.dud} ${hovered.dud === 1 ? "dudosa" : "dudosas"}`}
            {hovered.filiacion && <span style={{ color: C.dim }}> · {hovered.filiacion}</span>}
          </div>
          <div style={{ color: C.dim, fontSize: 10.5, marginTop: 3 }}>Pulsa para ver las inscripciones</div>
        </div>
      )}

      <MapLegend items={[
        ...(anillo ? [
          { el: <circle cx="8" cy="8" r="5" fill={C.severior} />, l: "Menciones seguras (disco)" },
          { el: <circle cx="8" cy="8" r="6" fill="none" stroke={C.severior} strokeWidth="1.6" />, l: "Total de menciones (anillo)" },
        ] : [
          { el: <circle cx="8" cy="8" r="6" fill={C.severior} />, l: "Con alguna mención segura" },
          { el: <circle cx="8" cy="8" r="6" fill={MG_LIGHT} />, l: "Solo menciones restituidas o dudosas" },
        ]),
        { el: <rect x="4" y="4" width="8" height="8" transform="rotate(45 8 8)" fill="#b07a68" />, l: "Nombre de región" },
        { el: <polygon points={star(8, 8, 7, 3)} fill={C.ink} />, l: "Santuario de Dodona" },
      ]} />
    </div>
  );
}
