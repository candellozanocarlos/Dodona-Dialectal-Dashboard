# Dialectos en las laminillas oraculares de Dodona

*Interactive dashboard of the dialects attested in the Dodona oracular lamellae based on Carlos Candel Lozano PhD thesis.*

Dashboard interactivo que acompaña a los capítulos dialectales de la tesis doctoral
sobre las laminillas oraculares de Dodona. Cada capítulo de la tesis tiene su vista:

| Capítulo | Contenido |
|---|---|
| **Tesalio** | Contexto histórico, mapa de Tesalia por tétradas, perfil dialectal (31 rasgos), vocalismo y rasgos compartidos con el beocio |
| **Beocio** | Contexto histórico, mapa de Beocia, perfil dialectal (18 rasgos), vocalismo y rasgos compartidos con el tesalio |
| **Dórico** | Tres subsecciones: dórico general (por ahora, los 16 rasgos fonéticos del capítulo y su valor diagnóstico), dórico noroccidental (en preparación) y doris severior (Magna Grecia y Dodona, mapa de topónimos y etnónimos occidentales, clasificación de las 16 inscripciones y vocalismo frente a la doris media) |
| **Autopsias** | Notas de autopsia de laminillas examinadas en la Eforía de Antigüedades de Ioánina |

Las citas de inscripciones (*I.Dodone DVC* 123A, *I.Dodone Lhôte* 8B) muestran su texto al pasar
el cursor y lo fijan al pulsar. Cada capítulo tiene su propia URL (`#tesalio`, `#beocio`, `#dorico`,
`#autopsias`).

## Uso

Requiere Node.js 20 o posterior.

```bash
npm install
npm run dev       # servidor de desarrollo en http://localhost:5173
npm run build     # versión estática en dist/
npm run lint
```

`dist/` es una web estática con rutas relativas: puede publicarse tal cual, por ejemplo en GitHub Pages.

## Estructura

```
src/
  App.jsx                 raíz: capítulo activo (#hash) y capa de citas emergentes
  chapters.js             registro de capítulos (orden, color, componente)
  theme.js                paleta, colores de categorías y estilos compartidos
  data/
    corpus.js             totales del corpus y macrogrupos dialectales
    tesalio.js, beocio.js, dorico.js, autopsias.js
    inscriptions.json     índice de inscripciones citadas (datación, texto, dialecto)
  chapters/               una vista por capítulo (+ la pestaña común tesalio/beocio)
  components/
    ui.jsx                cabecera y pestañas del capítulo, tarjetas, tablas, explorador de rasgos
    charts.jsx            gráficos de barras y anillos (Nivo)
    Inscriptions.jsx      citas enlazadas y tarjeta con el texto de la inscripción
    maps/                 mapas de Tesalia, Beocia y Magna Grecia sobre una base común
  lib/text.jsx            griego politónico y enlace automático de citas
scripts/coastline.py      genera la costa y las áreas de un mapa nuevo
```

## Añadir un capítulo

1. Crea `src/data/<capitulo>.js` con los datos (totales, cronología, temática, rasgos…).
   Si el capítulo tiene un total nuevo, añádelo también a `src/data/corpus.js`.
2. Crea `src/chapters/<Capitulo>.jsx`. Recibe la prop `switcher` y se monta sobre
   `ChapterLayout`; los bloques habituales ya existen: `Bars`, `Donut`/`DonutLegend`,
   `RasgoExplorer`, `SourceList`, `EventTable`, `Table`, `PlaceCard`.
3. Registra el capítulo en `src/chapters.js`.

Para un mapa nuevo, genera la costa con `scripts/coastline.py` (necesita `shapely` y un
geojson de costa, p. ej. Natural Earth 10 m), añade la salida a
`src/components/maps/coastlines.js` y compón el mapa con las piezas de `maps/MapBase.jsx`,
como en `ThessalyMap.jsx`.

### Convenciones de los datos

- Rasgos: `{ id, cat, name, short, desc, dvcs }`, con `cat` ∈ Fonología, Morfología, Sintaxis,
  Vocabulario y `dvcs` como `"123A"` (DVC) o `"LOD 8B"` (Lhôte).
- En los textos, `I.Dodone DVC 123A` se convierte automáticamente en una cita enlazada si la
  inscripción está en `inscriptions.json`.
- Los números de sección (§) remiten a la numeración vigente de cada capítulo.

## Fotografías de autopsia

Las fotografías (`public/assets/autopsias/`) se conservan en local y están excluidas del
repositorio en `.gitignore`: su publicación depende de la autorización de la Eforía de
Antigüedades de Ioánina. Sin ellas, la vista de autopsias indica que no hay fotografías disponibles.

## Fuentes y licencias de terceros

- Corpus: Dakaris, Vokotopoulou y Christidis (2013), *I.Dodone DVC*; Lhôte (2006), *I.Dodone Lhôte*.
- Tipografía griega: derivada de Cardo (SIL Open Font License 1.1, `src/assets/fonts/OFL.txt`).
- Costas: Natural Earth (dominio público); Beocia, © OpenStreetMap contributors (ODbL).
