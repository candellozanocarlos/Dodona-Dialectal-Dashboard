// Gráficos comunes (Nivo). Todos comparten tema, tooltip y cifras dentro de
// las barras, de modo que un capítulo nuevo solo tiene que pasar los datos.
import { useState } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveRadar } from "@nivo/radar";
import { C, TEMA_COLORS, fade } from "../theme.js";
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
 *   highlight  valor de indexBy que se resalta: su rótulo va en negrita y todas las barras conservan su color
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
  const colorOf = (bar) => colors ? colors[bar.id] : (bar.data.color || color);
  // Rótulo de la categoría resaltada en negrita y con el color de su barra.
  const highlightTick = (tick) => {
    const on = tick.value === highlight;
    const col = on ? (data.find((d) => d[indexBy] === highlight)?.color || C.heading) : C.muted;
    return (
      <g transform={`translate(${tick.x},${tick.y})`}>
        <text x={tick.textX} y={tick.textY} textAnchor={tick.textAnchor} dominantBaseline="central"
          style={{ fontFamily: "var(--fb)", fontSize: on ? 12 : 11, fontWeight: on ? 700 : 400, fill: col }}>
          {tick.value}
        </text>
      </g>
    );
  };
  const legend = labels && keys.length > 1;

  const valueLayer = ({ bars }) => {
    const VALOR = { fontFamily: "var(--fh)", fontSize: 11.5, fontWeight: 700, pointerEvents: "none" };
    const conValor = bars.filter((bar) => bar.data.value);
    const cabe = (bar) => (horizontal ? bar.width > 12 + String(format(bar.data.value)).length * 7 : bar.height > 18);
    // Apiladas: las cifras que no caben en su tramo van juntas al final de la barra, con el color del tramo, para que no se pisen.
    const apilada = keys.length > 1 && !grouped;
    const pilas = apilada ? [...new Set(conValor.map((bar) => bar.data.indexValue))].map((i) => conValor.filter((bar) => bar.data.indexValue === i)) : [];
    return (
      <g>
        {conValor.filter((bar) => !apilada || cabe(bar)).map((bar) => {
          const fits = cabe(bar);
          const fill = fits ? (esClaro(bar.color) ? C.heading : "rgba(255,252,245,0.96)") : C.muted;
          const x = horizontal ? (fits ? bar.x + bar.width - 7 : bar.x + bar.width + 6) : bar.x + bar.width / 2;
          const y = horizontal ? bar.y + bar.height / 2 : (fits ? bar.y + 11 : bar.y - 8);
          return (
            <text key={bar.key} x={x} y={y} dominantBaseline="central"
              textAnchor={horizontal ? (fits ? "end" : "start") : "middle"} style={{ ...VALOR, fill }}>
              {format(bar.data.value)}
            </text>
          );
        })}
        {pilas.map((pila) => {
          const sueltas = pila.filter((bar) => !cabe(bar));
          if (!sueltas.length) return null;
          const x = horizontal ? Math.max(...pila.map((b) => b.x + b.width)) + 6 : pila[0].x + pila[0].width / 2;
          const y = horizontal ? pila[0].y + pila[0].height / 2 : Math.min(...pila.map((b) => b.y)) - 8;
          return (
            <text key={pila[0].data.indexValue} x={x} y={y} dominantBaseline="central" textAnchor={horizontal ? "start" : "middle"} style={VALOR}>
              {sueltas.map((bar, i) => (
                <tspan key={bar.key} style={{ fill: esClaro(bar.color) ? C.muted : bar.color }}>{i > 0 && " · "}{format(bar.data.value)}</tspan>
              ))}
            </text>
          );
        })}
      </g>
    );
  };

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
          axisLeft={horizontal
            ? { tickSize: 0, tickPadding: 10, ...(highlight ? { renderTick: highlightTick } : {}) }
            : { tickSize: 4, tickPadding: 6, tickValues: scale, format }}
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

// Porciones de menos de FINO grados: sin cifra dentro; se agrupan a la derecha
// del anillo y se rotulan fuera, escalonadas para que no se solapen.
const FINO = 10;

const RotulosFuera = ({ dataWithArc, centerX, centerY, radius }) => {
  const lados = { der: [], izq: [] };
  dataWithArc.filter((d) => d.arc.angleDeg < FINO).forEach((d) => {
    const a = (d.arc.startAngle + d.arc.endAngle) / 2;
    const p = { d, x0: centerX + Math.sin(a) * radius, y0: centerY - Math.cos(a) * radius };
    lados[Math.sin(a) >= 0 ? "der" : "izq"].push(p);
  });
  return (
    <g>
      {Object.entries(lados).flatMap(([lado, ps]) => {
        ps.sort((p, q) => p.y0 - q.y0);
        ps.forEach((p, i) => { p.y = i ? Math.max(p.y0, ps[i - 1].y + 15) : p.y0; });
        const ajuste = ps.length ? (ps[0].y0 + ps.at(-1).y0 - ps[0].y - ps.at(-1).y) / 2 : 0;
        const s = lado === "der" ? 1 : -1, x1 = centerX + s * (radius + 14);
        return ps.map(({ d, x0, y0, y }) => (
          <g key={d.id} style={{ pointerEvents: "none" }}>
            <polyline points={`${x0},${y0} ${x1},${y + ajuste} ${x1 + s * 6},${y + ajuste}`} fill="none" stroke={d.color} strokeWidth={1} />
            <text x={x1 + s * 9} y={y + ajuste} textAnchor={s > 0 ? "start" : "end"} dominantBaseline="central"
              style={{ fontFamily: "var(--fb)", fontSize: 11, fill: C.muted }}>
              <tspan style={{ fontFamily: "var(--fh)", fontWeight: 700, fill: d.color }}>{d.value}</tspan> {d.label}
            </text>
          </g>
        ));
      })}
    </g>
  );
};

// Anillo para repartos de un todo: data [{ id, label, value, color, desc? }].
export const Donut = ({ data, height = 260, unit = "inscripciones" }) => {
  const shown = data.filter((d) => d.value > 0);
  const total = shown.reduce((a, d) => a + d.value, 0);
  // Giro que centra el tramo de porciones finas en las 3 en punto.
  let acc = 0, ini = null, fin = 0;
  shown.forEach((d) => {
    const g = d.value / total * 360;
    if (g < FINO) { ini ??= acc; fin = acc + g; }
    acc += g;
  });
  const giro = ini === null ? 0 : 90 - (ini + fin) / 2;
  return (
    <div style={{ height, width: "100%" }}>
      <ResponsivePie
        data={shown}
        margin={{ top: 16, right: ini === null ? 16 : 110, bottom: 16, left: 16 }}
        startAngle={giro}
        endAngle={giro + 360}
        innerRadius={0.46}
        padAngle={0.8}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        activeInnerRadiusOffset={3}
        colors={({ data: d }) => d.color}
        borderWidth={1.5}
        borderColor="rgba(255,252,245,0.85)"
        enableArcLinkLabels={false}
        arcLabel={(d) => String(d.value)}
        arcLabelsRadiusOffset={0.58}
        arcLabelsSkipAngle={FINO}
        arcLabelsTextColor={({ data: d }) => (esClaro(d.color) ? C.heading : "rgba(255,252,245,0.97)")}
        layers={["arcs", "arcLabels", RotulosFuera]}
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

// Rótulos de los ejes del radar: parte los largos en “ / ” o “|”.
const RadarLabel = ({ id, anchor, x, y }) => {
  const lineas = String(id).split(" / ").flatMap((l) => l.split("|"));
  return (
    <g transform={`translate(${x}, ${y})`}>
      <text textAnchor={anchor} dominantBaseline="central" style={{ fontFamily: "var(--fb)", fontSize: 10.5, fill: C.muted }}>
        {lineas.map((l, i) => <tspan key={i} x={0} dy={i === 0 ? -(lineas.length - 1) * 6.5 : 13}>{l}</tspan>)}
      </text>
    </g>
  );
};

// Radar (“área”): data [{ name, value }]; extra { name: texto } añade una línea al tooltip.
export const Radar = ({ data, height = 330, color = C.gold, unit = "inscripciones", extra = {} }) => {
  const [hover, setHover] = useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ height, width: "100%", transition: "transform 0.25s ease", transform: hover ? "scale(1.035)" : "none" }}>
      <ResponsiveRadar
        data={data}
        keys={["value"]}
        indexBy="name"
        margin={{ top: 54, right: 96, bottom: 54, left: 96 }}
        gridShape="circular"
        gridLevels={Math.min(5, Math.max(2, ...data.map((d) => d.value || 0)))}
        gridLabel={RadarLabel}
        gridLabelOffset={22}
        colors={[color]}
        fillOpacity={hover ? 0.34 : 0.15}
        borderWidth={hover ? 2.6 : 2}
        borderColor={color}
        dotSize={hover ? 9 : 7}
        dotColor={C.bg}
        dotBorderWidth={2}
        dotBorderColor={color}
        blendMode="multiply"
        theme={THEME}
        motionConfig="gentle"
        sliceTooltip={({ index, data: d }) => (
          <ChartTip label={String(index).replaceAll("|", " ")} value={d?.[0]?.value ?? 0} color={color} unit={unit} extra={extra[index] || ""} />
        )}
        role="img"
      />
    </div>
  );
};

// Temática: barras con todas las categorías y radar sin las no clasificadas.
export const Temas = ({ data, color, height = 340 }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
    <div style={{ flex: "1 1 420px", minWidth: 280 }}>
      {/* Cada tema en su color fijo, como en los gráficos de la tesis. */}
      <Bars horizontal data={data.map((t) => ({ ...t, color: TEMA_COLORS[t.name] || C.amber }))} height={height} left={200} />
    </div>
    <div style={{ flex: "1 1 320px", minWidth: 280 }}>
      <Radar data={data.filter((t) => !t.name.startsWith("Desconocido"))} height={height} color={color} />
    </div>
  </div>
);

// Gráfico a la izquierda y leyenda con cifras a la derecha; renderSub(d) añade una línea bajo cada entrada.
const WithLegend = ({ chart, data, valueColor = C.gold, renderSub = null }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", padding: "12px 0" }}>
    <div style={{ flex: "1 1 300px", minWidth: 240 }}>{chart}</div>
    <div style={{ flex: "1 1 260px", minWidth: 230 }}>
      {data.map((d) => (
        <div key={d.id} style={{ marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
            <div style={{ width: 11, height: 11, borderRadius: 3, background: d.color, flexShrink: 0 }} />
            <span style={{ fontSize: 13.5, color: C.text }}>{renderGreekText(d.label)}</span>
            <span style={{ fontSize: 17, fontWeight: 700, color: valueColor, fontFamily: "var(--fh)", marginLeft: "auto" }}>{d.value}</span>
          </div>
          {renderSub && <div style={{ fontSize: 11, color: C.dim, paddingLeft: 19 }}>{renderSub(d)}</div>}
        </div>
      ))}
    </div>
  </div>
);

export const DonutLegend = ({ data, height = 300, unit, ...rest }) => (
  <WithLegend data={data} chart={<Donut data={data} height={height} unit={unit} />} {...rest} />
);
