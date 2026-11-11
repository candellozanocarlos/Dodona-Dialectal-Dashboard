# Atlas dialectal de las laminillas oraculares de Dodona

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.24130445.svg)](https://doi.org/10.5281/zenodo.24130445)

**[Read this in English](./README.md)**

El *Atlas dialectal de las laminillas oraculares de Dodona* es un atlas interactivo de los dialectos griegos atestiguados en las laminillas de plomo en que los consultantes del oráculo de Zeus en Dodona grababan sus preguntas. Es el complemento digital de la tesis doctoral *Las variedades dialectales de las laminillas oraculares de Dodona* (Carlos Candel Lozano, Universidad de Valladolid, en preparación) y presenta la clasificación, las cifras, los mapas, los rasgos lingüísticos y las listas de inscripciones de la tesis de forma que puedan explorarse y consultarse.

**Web:** <https://atlasdialectaldodona.netlify.app>

La interfaz está en español, la lengua de la tesis. Los textos griegos se dan en escritura politónica.

## Cómo citar

> Candel Lozano, C. (2026). *Atlas dialectal de las laminillas oraculares de Dodona* (v2.0.0) [Atlas interactivo y código fuente]. Zenodo. https://doi.org/10.5281/zenodo.24130446

En formato BibTeX:

```bibtex
@software{candel_lozano_2026_atlas_dodona,
  author    = {Candel Lozano, Carlos},
  title     = {{Atlas dialectal de las laminillas oraculares de Dodona}},
  year      = 2026,
  publisher = {Zenodo},
  version   = {v2.0.0},
  doi       = {10.5281/zenodo.24130446},
  url       = {https://doi.org/10.5281/zenodo.24130446}
}
```

Cada versión se archiva en Zenodo con su propio DOI. Conviene citar la versión consultada, porque las cifras siguen el estado de la tesis en la fecha de esa versión; el DOI [10.5281/zenodo.24130445](https://doi.org/10.5281/zenodo.24130445) agrupa todas las versiones y lleva siempre a la última. Los metadatos completos están en [`CITATION.cff`](./CITATION.cff), que GitHub muestra con el botón **Cite this repository**.

## Qué contiene

El corpus reúne 4.418 textos: los 4.216 de *I.Dodone DVC* (Dakaris, Vokotopoulou y Christidis 2013) y los 202 de *I.Dodone Lhôte* (Lhôte 2006) que no están en ella. De ellos, 1.455 tienen al menos un rasgo dialectal y reciben una adscripción; el resto son demasiado breves o fragmentarios, o están escritos en formas comunes a todos los dialectos.

| Parte | Contenido |
|---|---|
| **Introducción** | El santuario, las laminillas (excavaciones, ediciones, características, autoría de las consultas), la metodología y los criterios de adscripción, y el corpus en cifras: grupos dialectales, grado de certeza, cronología y alfabetos epicóricos |
| **Dialectos dóricos** | El dórico general, el noroccidental y la *Doris severior*: contexto histórico, mapa de topónimos y etnónimos, perfil dialectal con los rasgos de cada capítulo y su valor diagnóstico, escritura y vocalismo |
| **Dialectos eólicos** | El tesalio y el beocio: contexto, mapa, perfil dialectal, vocalismo y rasgos compartidos |
| **Jónico-ático y koiné** | El jónico, el ático y la koiné: contexto, mapa, perfil dialectal y lista de inscripciones |
| **Mezcla dialectal** | Textos que combinan rasgos de dialectos incompatibles: concepto y criterio, comparación con las listas anteriores, mezclas aparentes, tipología y explicaciones |
| **Minoritarios y no jónico-áticas** | Los dialectos con pocos textos (macedonio, eleo, acayo, laconio, rodio y textos no griegos) y los textos de los que solo puede demostrarse que no son jónico-áticos |
| **Autopsias** | Las notas de la autopsia de 71 laminillas en la Eforía de Antigüedades de Ioánina (2024 y 2025), con facsímiles |

Cada parte tiene su propia dirección (`#introduccion`, `#dorico`, `#eolicos`, `#jonico-atico`, `#mezcla`, `#minoritarios`, `#autopsias`), de modo que un enlace puede abrir el atlas en la parte que interese.

## Cómo leerlo

- **Referencias de las inscripciones.** *I.Dodone DVC* 123A es el texto 123 de la edición DVC, cara A de la laminilla; *I.Dodone Lhôte* 8B, el número 8 de la edición de Lhôte, cara B. Una laminilla puede llevar varios textos, así que las cifras se refieren a inscripciones, no a laminillas. Al pasar el cursor por una referencia se ven el texto, su datación y su adscripción; al pulsarla, la tarjeta queda fija.
- **Grupos dialectales.** Toda adscripción se basa en rasgos visibles en la laminilla, no en restituciones. El grupo mayor, *No jónico-ático (sin precisar)*, reúne los textos con un rasgo que excluye el jónico-ático (por ejemplo, *a* larga donde el jónico-ático tiene *ē*) sin identificar un dialecto concreto. *Mezcla dialectal* es una etiqueta descriptiva para los textos con rasgos de dos dialectos que no pueden convivir en una misma variedad; no presupone ninguna explicación.
- **Grado de certeza.** Segura, cuando el rasgo es visible, no admite otra interpretación razonable y no depende de una lectura discutida; dudosa, cuando descansa en una letra insegura, una lectura alternativa o una forma sin contexto; y de solo nombre o alfabeto, cuando su única base es un antropónimo, un étnico o la escritura. Los gráficos distinguen los tres grados con color pleno, oro y gris.
- **Alfabetos.** El alfabeto epicórico indica la tradición de escritura de quien grabó la laminilla. Por sí solo no determina el dialecto, pero puede apoyar un rasgo visible.
- **Fechas.** Son las de las ediciones, agrupadas por siglos (s. V a.C.) y con periodos de transición (V-IV) cuando la edición sitúa un texto entre dos siglos.
- **Números de sección (§).** Remiten a los capítulos de la tesis. Algunos apartados reproducen o resumen su texto; la argumentación completa, la bibliografía y la discusión de cada caso están en la tesis.
- **Versiones.** La tesis está aún en preparación. Las cifras de cada versión coinciden con la tesis y su base de datos en la fecha de esa versión y pueden cambiar antes de la defensa.

## Cómo se ha construido

El atlas se deriva de la tesis, no se ha redactado aparte. Lo alimentan tres fuentes:

1. **Los capítulos de la tesis** (documentos de Word), de los que los generadores toman párrafos, tablas, listas de rasgos y números de sección.
2. **La base de datos de la tesis**, una hoja de cálculo anotada con una fila por inscripción (adscripción dialectal y su certeza, datación, temática de la consulta, alfabeto y notas de autopsia). Es la herramienta de trabajo inédita del autor y no se distribuye aquí.
3. **Los scripts que dibujan las figuras de la tesis** (Python, con Seaborn y Altair), para que cada gráfico del atlas use los mismos recuentos que la figura correspondiente.

Los generadores de Python de `scripts/` (`datos_*.py`) leen la versión vigente de cada capítulo y la base de datos, comprueban que las cifras del texto coinciden con los recuentos de la base de datos y escriben los archivos de `src/data/`. Unos pocos archivos de datos (`corpus.js`, `tesalio.js`, `beocio.js`, `dorico.js`, `lecturas.js`) se prepararon a mano a partir de las mismas fuentes. La interfaz (React, Vite y Nivo) solo muestra esos datos: no calcula adscripciones.

Antes de cada publicación, `npm run check` comprueba que los totales de cada parte suman el corpus, que los recuentos de cronología y temática cuadran con cada grupo, que todas las inscripciones citadas existen en el índice de textos y que no quedan notas de trabajo en el texto visible. La compilación pública comprueba después que ninguna fotografía de autopsia ha entrado en `dist/`.

Por tanto, el repositorio contiene los datos derivados y el código, pero no las fuentes de la tesis. Los generadores documentan cómo se obtuvo cada cifra, aunque para ejecutarlos hacen falta los archivos de la tesis.

## Licencias

| Material | Licencia |
|---|---|
| Contenidos: textos escritos para el atlas, tablas, gráficos, datos elaborados (`src/data`, los textos de `src/chapters`) y facsímiles del autor | [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.es) |
| Código: componentes, utilidades, scripts y configuración | MIT |

El siguiente material conserva sus propias condiciones y no está cubierto por estas licencias:

- Los textos de las inscripciones, procedentes de *I.Dodone DVC* e *I.Dodone Lhôte*.
- Las costas: Natural Earth (dominio público); Beocia, © OpenStreetMap contributors (ODbL).
- Las tipografías: la griega, derivada de Cardo (`src/assets/fonts/OFL.txt`), DM Sans y Playfair Display, bajo la SIL Open Font License 1.1.
- Las dependencias de `package.json`, cada una con su licencia.

Las fotografías de autopsia se conservan fuera del repositorio (`.gitignore`) y no se publican: su publicación depende de la autorización de la Eforía de Antigüedades de Ioánina. Los facsímiles, de elaboración propia, sí se publican.

El texto completo de ambas licencias está en [`LICENSE`](./LICENSE).

## Uso en local

Requiere Node.js 22 o posterior.

```bash
npm install
npm run dev            # versión local en http://localhost:5173
npm run check          # totales, citas y textos visibles
npm run build:public   # versión pública en dist/; falla si alguna comprobación no se cumple
```

`dist/` es una web estática con rutas relativas, sin servidor, sin cookies y sin peticiones a terceros (las fuentes van incluidas). Puede copiarse tal cual a cualquier servidor o página institucional, o insertarse con un `<iframe>`; el `#` de la dirección elige la parte que se abre.

### Estructura

```
src/
  App.jsx            parte activa (#dirección), errores de carga y tarjetas de las inscripciones
  chapters.js        registro de las partes (orden, color, vista)
  sitio.js           autoría, título, cita y licencia que muestra el pie
  data/              datos derivados de la tesis (véase «Cómo se ha construido»)
  chapters/          una vista por parte y capítulo
  components/        gráficos, mapas, explorador de rasgos, listas y tarjetas de inscripciones
  lib/text.jsx       griego politónico y enlace automático de las referencias
scripts/
  comun.py           rutas de las fuentes de la tesis y lectura de los capítulos
  datos_*.py         generadores de src/data
  comprobar.mjs      comprobaciones de npm run check y de la compilación pública
  coastline.py       costas y áreas de los mapas
```

## Autor

Carlos Candel Lozano, Universidad de Valladolid (ORCID [0009-0005-0448-9856](https://orcid.org/0009-0005-0448-9856)). Tesis doctoral dirigida por Elena Martín González, Escuela de Doctorado de la Universidad de Valladolid (EsDUVa).
