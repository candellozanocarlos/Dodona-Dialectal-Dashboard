# Dialectos en las laminillas oraculares de Dodona

*Interactive dashboard of the dialects attested in the Dodona oracular lamellae based on Carlos Candel Lozano PhD thesis.*

Dashboard interactivo que acompaña a los capítulos dialectales de la tesis doctoral
sobre las laminillas oraculares de Dodona. Cada capítulo de la tesis tiene su vista:

| Capítulo | Contenido |
|---|---|
| **Introducción** | El santuario, las laminillas (corpus y cronología), la metodología y los criterios de adscripción, y el corpus en cifras (grupos dialectales con su certeza y alfabetos epicóricos) |
| **Dialectos dóricos** | Tres subsecciones: el dialecto dórico (contexto, mapa de topónimos y etnónimos dóricos, perfil dialectal con los rasgos de §4-§7 y su valor diagnóstico, escritura y notación), el dórico noroccidental (contexto, mapa de las comunidades del Noroeste, perfil dialectal con los rasgos propios del noroeste, los apartados del capítulo y su valor diagnóstico, escritura y contracción de εο en ου) y Doris severior (Magna Grecia y Dodona, mapa de topónimos y etnónimos occidentales, clasificación de las 16 inscripciones y vocalismo frente a la Doris media) |
| **Dialectos eólicos** | Dos subsecciones: el dialecto tesalio (contexto histórico, mapa de Tesalia por tétradas, perfil dialectal con 31 rasgos, vocalismo y rasgos compartidos con el beocio) y el dialecto beocio (contexto, mapa de Beocia, perfil dialectal con 18 rasgos, vocalismo y rasgos compartidos con el tesalio) |
| **Jónico-ático y koiné** | Contexto, mapa de topónimos y etnónimos, perfil dialectal (adscripción, subgrupos, cronología, temática, alfabeto y rasgos), el jónico, el ático y la koiné, y las 137 inscripciones |
| **Mezcla dialectal** | Concepto y criterio (con las mezclas de Crespo y Giannakis), perfil y tipos de mezcla, explicaciones y las 98 inscripciones |
| **Minoritarios y no jónico-áticas** | Dos subsecciones: los dialectos minoritarios (perfil y las doce inscripciones por grupo) y las inscripciones no jónico-áticas (perfil, rasgos, dialectos compatibles y anexo con las 844 inscripciones) |
| **Autopsias** | Notas de autopsia de laminillas examinadas en la Eforía de Antigüedades de Ioánina |

Las citas de inscripciones (*I.Dodone DVC* 123A, *I.Dodone Lhôte* 8B) muestran su texto al pasar
el cursor y lo fijan al pulsar. Cada parte tiene su propia URL (`#introduccion`, `#dorico`, `#eolicos`, `#jonico-atico`, `#mezcla`, `#minoritarios`,
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
    doricoGeneral.js, doricoNO.js   generados con scripts/datos_dorico_general.py y datos_dorico_noroccidental.py
    jonicoAtico.js, adscripcion.js  generados con scripts/datos_jonico_atico.py y datos_adscripcion.py
    frontera.js, anexoNoJonAt.json  generados con scripts/datos_frontera.py (caps. 13-15)
    introduccion.js                 generado con scripts/datos_introduccion.py
    inscriptions.json     índice de inscripciones citadas (datación, texto, dialecto)
  chapters/               una vista por capítulo (+ la pestaña común tesalio/beocio)
  components/
    ui.jsx                cabecera y pestañas del capítulo, tarjetas, tablas, explorador de rasgos
    charts.jsx            gráficos de barras y anillos (Nivo)
    Inscriptions.jsx      citas enlazadas y tarjeta con el texto de la inscripción
    maps/                 mapas de Tesalia, Beocia, Magna Grecia y el dórico (general y noroccidental) sobre una base común
  lib/text.jsx            griego politónico y enlace automático de citas
scripts/coastline.py      genera la costa y las áreas de un mapa nuevo
scripts/datos_*.py        generan los datos desde el Excel, los capítulos y los scripts de gráficos de la tesis
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
