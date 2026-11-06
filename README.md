# Atlas dialectal de las laminillas oraculares de Dodona

*Interactive atlas of the Greek dialects attested in the oracular lamellae of Dodona, complementary material of Carlos Candel Lozano's PhD thesis (Universidad de Valladolid).*

Publicado en <https://atlasdialectaldodona.netlify.app>. Cada parte de la tesis tiene su vista:

| Parte | Contenido |
|---|---|
| **Introducción** | Presentación y objetivos, el santuario, las laminillas (corpus y cronología), la metodología y los criterios de adscripción, y el corpus en cifras |
| **Dialectos dóricos** | El dórico general, el noroccidental y la *Doris severior*: contexto, mapa de topónimos y etnónimos, perfil dialectal con los rasgos del capítulo y su valor diagnóstico, escritura y vocalismo |
| **Dialectos eólicos** | El tesalio y el beocio: contexto, mapa, perfil dialectal, vocalismo y rasgos compartidos |
| **Jónico-ático y koiné** | Contexto por variedades, mapa, perfil dialectal con los rasgos del cap. 9, el jónico, el ático y la koiné con sus apartados, y las 137 inscripciones |
| **Mezcla dialectal** | Concepto y criterio (con las mezclas de Crespo y Giannakis), perfil, tipología, explicaciones y las 98 inscripciones |
| **Minoritarios y no jónico-áticas** | Los dialectos minoritarios (perfil, apartados y las doce inscripciones) y las no jónico-áticas (perfil, rasgos, dialectos compatibles y anexo con las 844 inscripciones) |
| **Autopsias** | Las 71 laminillas examinadas en la Eforía de Antigüedades de Ioánina (anexo §3.4 de la introducción) |

Las citas de inscripciones (*I.Dodone DVC* 123A, *I.Dodone Lhôte* 8B) muestran su texto al pasar el cursor y lo fijan al pulsar.
Cada parte tiene su propia URL: `#introduccion`, `#dorico`, `#eolicos`, `#jonico-atico`, `#mezcla`, `#minoritarios`, `#autopsias`.

## Uso

Requiere Node.js 22 o posterior.

```bash
npm install
npm run dev            # versión local, con las fotografías de autopsia, en http://localhost:5173
npm run check          # totales, citas y textos visibles
npm run lint
npm run build:public   # versión pública en dist/ (solo facsímiles); falla si algo no cuadra
```

## Publicación

`dist/` es una web estática, sin servidor, sin cookies y sin peticiones a terceros (las fuentes van incluidas), con rutas relativas.
`npm run build:public` nunca copia las fotografías de autopsia (`vite.config.js`) y comprueba después que no hay ninguna en `dist/`.

- **Netlify:** `npx netlify-cli deploy --prod --dir dist` tras compilar; las cabeceras de seguridad están en `netlify.toml`.
- **En una subcarpeta de la web institucional:** copiar el contenido de `dist/` a la carpeta (por ejemplo `/proyectos/atlas-dodona/`). No hay que configurar nada.
- **Insertado en una página institucional:**

  ```html
  <iframe src="https://atlasdialectaldodona.netlify.app/#introduccion" title="Atlas dialectal de las laminillas oraculares de Dodona"
    style="width: 100%; height: 85vh; border: 1px solid #d8cfb8" loading="lazy"></iframe>
  ```

  El sitio no prohíbe el marco. El `#` de la dirección elige la parte que se abre.

La autoría, el título y la cita que se muestran en el pie están en `src/sitio.js`.

## Estructura

```
src/
  App.jsx                 raíz: parte activa (#hash), errores de carga y capa de citas emergentes
  chapters.js             registro de las partes (orden, color, componente)
  sitio.js                autoría, título y cita
  theme.js                paleta, colores de categorías y estilos compartidos
  data/                   generados con scripts/ salvo corpus.js, tesalio.js, beocio.js, dorico.js y lecturas.js, que se editan a mano
  chapters/               una vista por parte y capítulo
  components/
    ui.jsx                cabecera, pestañas, pie, tarjetas, tablas, explorador de rasgos y apartados desplegables
    charts.jsx            gráficos de barras, anillos y radar (Nivo)
    Inscriptions.jsx      citas enlazadas y tarjeta con el texto de la inscripción
    Anexo.jsx             lista de inscripciones con buscador
    maps/                 mapas de Tesalia, Beocia, Magna Grecia, el dórico y el jónico-ático sobre una base común
  lib/text.jsx            griego politónico y enlace automático de citas
scripts/
  comun.py                rutas de la tesis, Excel y lectura de los capítulos .docx
  datos_*.py              generan src/data desde el Excel, los capítulos vigentes y los scripts de gráficos de la tesis
  fotos_autopsias.json    fotografías y facsímiles de cada inscripción
  completar_fuente.py     añade a DodonaCardo los glifos que falten, desde Cardo
  coastline.py            costa y áreas de un mapa nuevo
  comprobar.mjs           comprobaciones de npm run check y de la compilación pública
```

## Actualizar los datos

Los generadores toman la versión de número más alto de cada capítulo y comprueban que sus cifras cuadran con el Excel:

```bash
py scripts/datos_dorico_general.py
py scripts/datos_dorico_noroccidental.py
py scripts/datos_adscripcion.py
py scripts/datos_introduccion.py
py scripts/datos_jonico_atico.py
py scripts/datos_frontera.py
py scripts/datos_autopsias.py
```

Después de editar `tesalio.js` o `beocio.js`, hay que ejecutar `node exportar_datos_dashboard.mjs` en `PYTHON/SEABORN-ALTAIR`, que alimenta los gráficos de la tesis.

### Convenciones de los datos

- Rasgos: `{ id, cat, name, short, desc, dvcs }`, con `cat` ∈ Fonología, Morfología, Sintaxis, Vocabulario y `dvcs` como `"123A"` (DVC) o `"LOD 8B"` (Lhôte).
- En los textos, `I.Dodone DVC 123A` se convierte automáticamente en una cita enlazada si la inscripción está en `inscriptions.json`.
- Los números de sección (§) remiten a la numeración vigente de cada capítulo.

## Fotografías de autopsia

Las fotografías (`public/assets/autopsias/`) se conservan en local y están excluidas del repositorio: su publicación depende de la autorización de la Eforía de Antigüedades de Ioánina. Los facsímiles, de elaboración propia, sí se publican.

## Fuentes y licencias de terceros

- Corpus: Dakaris, Vokotopoulou y Christidis (2013), *I.Dodone DVC*; Lhôte (2006), *I.Dodone Lhôte*.
- Tipografía griega: derivada de Cardo (SIL Open Font License 1.1, `src/assets/fonts/OFL.txt`); DM Sans y Playfair Display (OFL 1.1), autoalojadas con Fontsource.
- Costas: Natural Earth (dominio público); Beocia, © OpenStreetMap contributors (ODbL).
