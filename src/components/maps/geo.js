// Proyección equirrectangular con corrección por el coseno de la latitud media
// (el aspecto que geopandas da a EPSG:4326). Todos los mapas usan 760 px de ancho;
// scripts/coastline.py genera la costa con la misma fórmula.
export const makeProj = ({ lon0, lon1, lat0, lat1, w = 760 }) => {
  const kx = Math.cos(((lat0 + lat1) / 2) * Math.PI / 180);
  const s = w / ((lon1 - lon0) * kx);
  return {
    w, h: Math.round((lat1 - lat0) * s),
    kx, s,
    km: s / 111.32,                                   // píxeles por kilómetro
    p: (lon, lat) => [(lon - lon0) * kx * s, (lat1 - lat) * s],
  };
};

export const star = (cx, cy, R, r) => Array.from({ length: 10 }, (_, i) => {
  const a = -Math.PI / 2 + i * Math.PI / 5;
  const rad = i % 2 === 0 ? R : r;
  return `${(cx + rad * Math.cos(a)).toFixed(1)},${(cy + rad * Math.sin(a)).toFixed(1)}`;
}).join(" ");

export const diamond = (x, y, r) => `${x},${y - r} ${x + r},${y} ${x},${y + r} ${x - r},${y}`;

export const polygonPoints = (proj, coords) => coords.map(([lo, la]) => proj.p(lo, la).map((v) => v.toFixed(1)).join(",")).join(" ");

// Halo claro bajo los rótulos para que se lean sobre tierra y mar.
export const HALO = { paintOrder: "stroke", stroke: "rgba(243,236,220,0.9)", strokeWidth: 3 };
