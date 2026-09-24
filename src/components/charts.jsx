// Gráficos comunes (Nivo). Todos comparten tema, tooltip y cifras dentro de
// las barras, de modo que un capítulo nuevo solo tiene que pasar los datos.
import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import { C, fade } from "../theme.js";
import { renderDesc, renderGreekText } from "../lib/text.jsx";

const THEME = {
  background: "transparent",
  text: { fontFamily: "var(--fb)", fontSize: 11.5, fill: C.text },
  axis: {
    domain: { line: { stroke: C.border, strokeWidth: 1 } },
    ticks: {
      line: { stroke: C.border, strokeWidth: 1 },
      text: { fontFamily: "var(--fb)", fontSize: 11, fill: C.muted },
    },
    legend: { text: { fontFamily: "var(--fb)", fontSize: 11, fill: C.muted } },
  },
  grid: { line: { stroke: "rgba(120,90,40,0.10)", strokeDasharray: "3 3" } },
  legends: { text: { fontFamily: "var(--fb)", fontSize: 11.5, fill: C.muted } },
  tooltip: { container: { background: "transparent", boxShadow: "none", padding: 0 } },
  labels: { text: { fontFamily: "var(--fh)", fontSize: 15, fontWeight: 700 } },
};

// Tarjeta de tooltip común a todos los gráficos.
export const ChartTip = ({ label, value, color = C.gold, unit = "inscripciones", extra = "" }) => (
  <div style={{ background: "rgba(255,252,245,0.97)", border: `1px solid ${C.border}`, borderRadius: 8,
    padding: "10px 14px", fontFamily: "var(--fb)", color: C.text, fontSize: 13, maxWidth: 280,
    boxShadow: "0 6px 24px rgba(0,0,0,0.12)" }}>
    <div style={{ fontWeight: 700, color, marginBottom: 4, fontFamily: "var(--fh)", fontSize: 13.5 }}>
      {renderDesc(String(label))}
    </div>
    <div style={{ display: "flex", gap: 9, alignItems: "baseline" }}>
      <span style={{ fontSize: 20, fontWeight: 700, color, fontFamily: "var(--fh)", lineHeight: 1 }}>{value}</span>
      <span style={{ fontSize: 11.5, color: C.muted }}>{unit}</span>
    </div>
    {extra && <div style={{ fontSize: 11, color: C.muted, marginTop: 4, lineHeight: 1.5 }}>{renderDesc(extra)}</div>}
  </div>
);

// ¿Es claro el color? Decide si la cifra va en oscuro o en blanco.
const esClaro = (col) => {
  const m = /^#([0-9a-f]{6})$/i.exec(String(col || ""));
  if (!m) return /rgba\(.*,0?\.[0-4]\d*\)$/.test(String(col));   // colores atenuados
  const n = parseInt(m[1], 16);
  return (0.299 * ((n >> 16) & 255) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) > 165;
};

// Marcas enteras y redondas para ejes de recuentos (paso 1, 2, 3, 5 × 10ⁿ);
// la última marca cubre el máximo y fija el final de la escala.
const ticks = (max, n = 5) => {
  const top = Math.max(1, max);
  const raw = top / n, p = 10 ** Math.floor(Math.log10(raw));
  const paso = Math.max(1, [1, 2, 3, 5, 10].map((m) => m * p).find((s) => s >= raw));
  const out = [0];
  while (out[out.length - 1] < top) out.push(out[out.length - 1] + paso);
  return out;
};

/**
 * Barras (horizontales o verticales; simples, apiladas o agrupadas).
 *   data       [{ [indexBy]: "…", [clave]: número, color? }]
 *   keys       series; con una sola, el color sale de data[i].color o de `color`
 *   colors     { clave: color } para varias series; `labels` { clave: rótulo } activa la leyenda
 *   highlight  valor de indexBy que se resalta (el resto se atenúa)
 *   format     formato de la cifra (p. ej. porcentajes)
 *   bands      [{ from, to, label }] franjas sombreadas sobre categorías (solo verticales)
 */
export function Bars({
  data, keys = ["value"], indexBy = "name", horizontal = false, grouped = false,
  color = C.amber, colors = null, labels = null, highlight = null,
  height = 300, left = null, bottom = null, rotate = 0,
  unit = "inscripciones", format = (v) => v, maxValue = "auto", tooltip = null, bands = [],
}) {
  const rows = horizontal ? [...data].reverse() : data;
  const total = (d) => grouped ? Math.max(...keys.map((k) => d[k] || 0)) : keys.reduce((a, k) => a + (d[k] || 0), 0);
  const scale = ticks(maxValue === "auto" ? Math.max(1, ...data.map(total)) : maxValue);
  const top = scale[scale.length - 1];
  const colorOf = (bar) => {
    const base = colors ? colors[bar.id] : (bar.data.color || color);
    return highlight && bar.indexValue !== highlight ? fade(base, 0.38) : base;
  };
  const legend = labels && keys.length > 1;

  const valueLayer = ({ bars }) => (
    <g>
      {bars.map((bar) => {
        const v = bar.data.value;
        if (!v) return null;
        const txt = format(v);
        const fits = horizontal ? bar.width > 12 + String(txt).length * 7 : bar.height > 18;
        const fill = fits ? (esClaro(bar.color) ? C.heading : "rgba(255,252,245,0.96)") : C.muted;
        const x = horizontal ? (fits ? bar.x + bar.width - 7 : bar.x + bar.width + 6) : bar.x + bar.width / 2;
        const y = horizontal ? bar.y + bar.height / 2 : (fits ? bar.y + 11 : bar.y - 8);
        return (
          <text key={bar.key} x={x} y={y} dominantBaseline="central"
            textAnchor={horizontal ? (fits ? "end" : "start") : "middle"}
            style={{ fontFamily: "var(--fh)", fontSize: 11.5, fontWeight: 700, fill, pointerEvents: "none" }}>
            {txt}
          </text>
        );
      })}
    </g>
  );

  // Franjas sombreadas (p. ej. periodos de datación menos fiable).
  const bandLayer = ({ xScale, innerHeight }) => (
    <g>
      {bands.map((b) => {
        const x0 = xScale(b.from), x1 = xScale(b.to) + xScale.bandwidth();
        return (
          <g key={b.label}>
            <rect x={x0 - 4} y={0} width={x1 - x0 + 8} height={innerHeight} fill={fade(C.blue, 0.07)} />
            <text x={(x0 + x1) / 2} y={10} textAnchor="middle"
              style={{ fontFamily: "var(--fb)", fontSize: 10.5, fill: C.blue }}>{b.label}</text>
          </g>
        );
      })}
    </g>
  );

  const margin = horizontal
    ? { top: 6, right: 40, bottom: 30, left: left ?? 190 }
    : { top: 22, right: 16, bottom: bottom ?? (rotate ? 70 : 34), left: left ?? 40 };

  return (
    <div>
      <div style={{ height, width: "100%" }}>
        <ResponsiveBar
          data={rows}
          keys={keys}
          indexBy={indexBy}
          layout={horizontal ? "horizontal" : "vertical"}
          groupMode={grouped ? "grouped" : "stacked"}
          margin={margin}
          padding={horizontal ? 0.3 : 0.28}
          innerPadding={grouped ? 2 : 0}
          maxValue={top}
          colors={colorOf}
          borderRadius={3}
          enableGridX={horizontal}
          enableGridY={!horizontal}
          gridXValues={horizontal ? scale : undefined}
          gridYValues={horizontal ? undefined : scale}
          enableLabel={false}
          layers={["grid", ...(bands.length ? [bandLayer] : []), "axes", "bars", valueLayer]}
          axisTop={null}
          axisRight={null}
          axisLeft={horizontal ? { tickSize: 0, tickPadding: 10 } : { tickSize: 4, tickPadding: 6, tickValues: scale, format }}
          axisBottom={horizontal
            ? { tickSize: 4, tickPadding: 6, tickValues: scale, format }
            : { tickSize: 0, tickPadding: 8, tickRotation: rotate }}
          tooltip={tooltip ?? ((bar) => (
            <ChartTip label={bar.indexValue} value={format(bar.value)} color={colorOf({ ...bar, indexValue: null })}
              unit={keys.length > 1 && labels ? `${labels[bar.id].toLowerCase()} · ${unit}` : unit} />
          ))}
          theme={THEME}
          animate
          motionConfig="gentle"
          role="img"
        />
      </div>
      {legend && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 16px", justifyContent: "center", marginTop: 6, fontSize: 11.5, color: C.muted }}>
          {keys.map((k) => (
            <span key={k} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: colors?.[k] ?? color }} />{labels[k]}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// Anillo para repartos de un todo: data [{ id, label, value, color, desc? }].
export const Donut = ({ data, height = 260, unit = "inscripciones" }) => {
  const total = data.reduce((a, d) => a + (d.value || 0), 0);
  return (
    <div style={{ height, width: "100%" }}>
      <ResponsivePie
        data={data.filter((d) => d.value > 0)}
        margin={{ top: 16, right: 16, bottom: 16, left: 16 }}
        innerRadius={0.46}
        padAngle={1.2}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        activeInnerRadiusOffset={3}
        colors={({ data: d }) => d.color}
        borderWidth={2}
        borderColor="rgba(255,252,245,0.85)"
        enableArcLinkLabels={false}
        arcLabel={(d) => String(d.value)}
        arcLabelsRadiusOffset={0.58}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={({ data: d }) => (esClaro(d.color) ? C.heading : "rgba(255,252,245,0.97)")}
        theme={THEME}
        tooltip={({ datum }) => (
          <ChartTip label={datum.data.label || datum.id} value={datum.value} color={datum.data.color}
            unit={`${unit} · ${Math.round(datum.value / total * 100)} %`} extra={datum.data.desc || ""} />
        )}
        motionConfig="gentle"
        role="img"
      />
    </div>
  );
};

// Anillo con leyenda lateral; renderSub(d) añade una línea bajo cada entrada.
export const DonutLegend = ({ data, height = 300, unit, valueColor = C.gold, renderSub = null }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", padding: "12px 0" }}>
    <div style={{ flex: "1 1 280px", minWidth: 240 }}>
      <Donut data={data} height={height} unit={unit} />
    </div>
    <div style={{ flex: "1 1 260px", minWidth: 230 }}>
      {data.map((d) => (
        <div key={d.id} style={{ marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
            <div style={{ width: 11, height: 11, borderRadius: 3, background: d.color, flexShrink: 0 }} />
            <span style={{ fontSize: 13.5, fontWeight: 600, color: C.text }}>{renderGreekText(d.label)}</span>
            <span style={{ fontSize: 17, fontWeight: 700, color: valueColor, fontFamily: "var(--fh)", marginLeft: "auto" }}>{d.value}</span>
          </div>
          {renderSub && <div style={{ fontSize: 11, color: C.dim, paddingLeft: 19 }}>{renderSub(d)}</div>}
        </div>
      ))}
    </div>
  </div>
);
