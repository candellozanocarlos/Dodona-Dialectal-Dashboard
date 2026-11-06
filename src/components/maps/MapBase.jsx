// Elementos comunes a los mapas regionales: mar con ondas, tierra, rótulos,
// escala gráfica y nota de fuentes. Mismo aspecto en todos los capítulos.
import { C } from "../../theme.js";
import { HALO as halo, star } from "./geo.js";

const LAND = "#f3ecdc";

export const MapSvg = ({ proj, land, label, children }) => (
  <svg viewBox={`0 0 ${proj.w} ${proj.h}`} role="img" aria-label={label}
    style={{ width: "100%", display: "block", borderRadius: 8, overflow: "hidden", border: `1px solid ${C.border}` }}>
    <defs>
      <pattern id="mapWaves" width="26" height="12" patternUnits="userSpaceOnUse">
        <path d="M 0,6 Q 6.5,2 13,6 T 26,6" fill="none" stroke={C.blue} strokeWidth="0.5" strokeOpacity="0.12" />
      </pattern>
      <filter id="mapGlow"><feGaussianBlur stdDeviation="2.5" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
      <marker id="mapArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={C.ink} />
      </marker>
    </defs>
    <rect width={proj.w} height={proj.h} fill="#eef1ee" />
    <rect width={proj.w} height={proj.h} fill="url(#mapWaves)" />
    <path d={land} fill={LAND} stroke="#b9ae94" strokeWidth={0.7} strokeLinejoin="round" />
    {children}
  </svg>
);

// Rótulos de mares (azul, cursiva) y de regiones vecinas (versalitas espaciadas).
export const SeaLabels = ({ proj, items }) => items.map((l) => {
  const [x, y] = proj.p(l.lon, l.lat);
  return <text key={l.t} x={x} y={y} textAnchor="middle" transform={l.rot ? `rotate(${l.rot} ${x} ${y})` : undefined}
    style={{ fontSize: 11, fill: C.blue, opacity: 0.55, fontFamily: "var(--fh)", fontStyle: "italic", letterSpacing: 1.1 }}>{l.t}</text>;
});
export const RegionLabels = ({ proj, items }) => items.map((l) => {
  const [x, y] = proj.p(l.lon, l.lat);
  return <text key={l.t} x={x} y={y} textAnchor="middle"
    style={{ fontSize: 9, fill: C.dim, opacity: 0.8, fontFamily: "var(--fb)", letterSpacing: 2.4 }}>{l.t}</text>;
});
export const Mountains = ({ proj, items }) => items.map((m) => {
  const [x, y] = proj.p(m.lon, m.lat);
  return (
    <g key={m.name}>
      <polygon points={`${x},${y - 6} ${x + 6},${y + 4} ${x - 6},${y + 4}`} fill="#cbbf9f" opacity={0.85} />
      <text x={x} y={y + 16} textAnchor="middle" style={{ fontSize: 9, fill: C.dim, fontFamily: "var(--fb)", fontStyle: "italic" }}>{m.name}</text>
    </g>
  );
});
// Póleis de referencia, sin relación documentada con el corpus.
export const RefCities = ({ proj, items, faint = false }) => items.map((c) => {
  const [x, y] = proj.p(c.lon, c.lat);
  return (
    <g key={c.name}>
      <circle cx={x} cy={y} r={2.6} fill={faint ? "#b3a98f" : "#8a8272"} />
      <text x={x + c.dx} y={y + c.dy} textAnchor={c.anchor}
        style={{ fontSize: 10.5, fill: faint ? C.dim : "#5b564d", fontFamily: "var(--fh)", fontStyle: faint ? "italic" : "normal", ...halo }}>{c.name}</text>
    </g>
  );
});

export const Dodona = ({ x, y, r = 10 }) => (
  <g>
    <polygon points={star(x, y, r, r * 0.42)} fill={C.ink} stroke="#fff" strokeWidth={1.1} />
    <text x={x} y={y - r - 5} textAnchor="middle" style={{ fontSize: 14, fontWeight: 700, fill: C.ink, fontFamily: "var(--fh)", ...halo }}>Dodona</text>
  </g>
);

export const ScaleBar = ({ proj, km }) => {
  const len = km * proj.km;
  return (
    <g transform={`translate(${proj.w - 20 - len}, ${proj.h - 30})`}>
      <line x1={0} y1={0} x2={len} y2={0} stroke="#5b564d" strokeWidth={1.4} />
      <line x1={0} y1={-4} x2={0} y2={4} stroke="#5b564d" strokeWidth={1.2} />
      <line x1={len} y1={-4} x2={len} y2={4} stroke="#5b564d" strokeWidth={1.2} />
      <text x={len / 2} y={-7} textAnchor="middle" style={{ fontSize: 9.5, fill: "#5b564d", fontFamily: "var(--fb)" }}>{km} km</text>
    </g>
  );
};

export const SourceNote = ({ proj, children }) => (
  <text x={proj.w - 8} y={proj.h - 7} textAnchor="end" style={{ fontSize: 7.5, fill: C.dim, fontFamily: "var(--fb)" }}>{children}</text>
);

// Leyenda HTML bajo el mapa: items [{ el: <svg-children/>, l: "texto" }].
export const MapLegend = ({ items }) => (
  <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", marginTop: 10, fontSize: 11, color: C.muted }}>
    {items.map((k) => (
      <span key={k.l} style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">{k.el}</svg>{k.l}
      </span>
    ))}
  </div>
);

