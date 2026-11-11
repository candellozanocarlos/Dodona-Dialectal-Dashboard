# Dialect Atlas of the Oracular Lamellae of Dodona

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.24130445.svg)](https://doi.org/10.5281/zenodo.24130445)

**[Leer esto en castellano](./README.es.md)**

*Atlas dialectal de las laminillas oraculares de Dodona* is an interactive atlas of the Greek dialects attested in the lead lamellae on which visitors to the oracle of Zeus at Dodona inscribed their questions. It is the digital companion to the PhD thesis *Las variedades dialectales de las laminillas oraculares de Dodona* (Carlos Candel Lozano, Universidad de Valladolid, in preparation), and it presents the classification, figures, maps, linguistic features and inscription lists of the thesis in a form that can be explored and searched.

**Website:** <https://atlasdialectaldodona.netlify.app>

The interface is in Spanish, the language of the thesis. Greek texts are given in polytonic script.

## How to cite

> Candel Lozano, C. (2026). *Atlas dialectal de las laminillas oraculares de Dodona* (v2.0.0) [Interactive atlas and source code]. Zenodo. https://doi.org/10.5281/zenodo.24130446

In BibTeX format:

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

Each release is archived in Zenodo with its own DOI. Cite the version you consulted, since the figures follow the state of the thesis on the date of that release; the DOI [10.5281/zenodo.24130445](https://doi.org/10.5281/zenodo.24130445) groups all versions and always leads to the latest. Full metadata are in [`CITATION.cff`](./CITATION.cff), which GitHub turns into the **Cite this repository** button.

## What the atlas contains

The corpus comprises 4,418 texts: the 4,216 of *I.Dodone DVC* (Dakaris, Vokotopoulou and Christidis 2013) and the 202 of *I.Dodone Lhôte* (Lhôte 2006) that are not in it. Of these, 1,455 carry at least one dialect feature and receive a dialect attribution; the rest are too short, too fragmentary or written in a form common to all dialects.

| Part | Content |
|---|---|
| **Introducción** | The sanctuary, the lamellae (excavations, editions, physical features, authorship of the questions), the method and the attribution criteria, and the corpus in figures: dialect groups, degree of certainty, chronology and local alphabets |
| **Dialectos dóricos** | General Doric, North-West Greek and *Doris severior*: historical context, map of place names and ethnics, dialect profile with the features of each chapter and their diagnostic value, script and vowel system |
| **Dialectos eólicos** | Thessalian and Boeotian: context, map, dialect profile, vowel system and shared features |
| **Jónico-ático y koiné** | Ionic, Attic and koine: context, map, dialect profile and the list of inscriptions |
| **Mezcla dialectal** | Texts that combine features of incompatible dialects: definition and criterion, comparison with earlier lists, apparent mixtures, typology and explanations |
| **Minoritarios y no jónico-áticas** | Dialects with few texts (Macedonian, Elean, Achaean, Laconian, Rhodian, non-Greek texts) and the texts that can only be shown not to be Ionic-Attic |
| **Autopsias** | Notes from the author's examination of 71 lamellae at the Ephorate of Antiquities of Ioannina (2024 and 2025), with facsimiles |

Each part has its own address (`#introduccion`, `#dorico`, `#eolicos`, `#jonico-atico`, `#mezcla`, `#minoritarios`, `#autopsias`), so a link can open the atlas at the relevant section.

## How to read it

- **Inscription references.** *I.Dodone DVC* 123A is text 123 of the DVC edition, side A of the lamella; *I.Dodone Lhôte* 8B is number 8 of Lhôte's edition, side B. A lamella can carry several texts, so the counts refer to inscriptions, not to lamellae. Hovering over a reference shows the text, its date and its attribution; clicking it keeps the card open.
- **Dialect groups.** Every attribution rests on features visible on the lamella, not on restorations. *No jónico-ático (sin precisar)* is the largest group: it gathers the texts with a feature that excludes Ionic-Attic (for instance long *a* where Ionic-Attic has *ē*) but does not identify a single dialect. *Mezcla dialectal* is a descriptive label for texts with features of two dialects that cannot coexist in one variety; it does not presuppose an explanation.
- **Degree of certainty.** *Segura* (secure): the feature is visible, admits no other reasonable interpretation and does not depend on a disputed reading. *Dudosa* (doubtful): it rests on an uncertain letter, an alternative reading or a form without context. *Solo nombre o alfabeto*: the only evidence is a personal name, an ethnic or the script. Charts show the three degrees with different shades (full colour, gold and grey).
- **Alphabets.** The local alphabet points to the writing tradition of whoever engraved the lamella. On its own it does not determine the dialect, but it can support a visible feature.
- **Dates** are those of the editions, grouped by century (*s.* V a.C. = fifth century BC) with transitional periods (V-IV) when the edition places a text between two centuries.
- **Section numbers (§)** refer to the chapters of the thesis. Some sections reproduce or summarise its text; the full argument, the bibliography and the discussion of each case are in the thesis.
- **Versions.** The thesis is still in preparation. The figures of each release match the thesis and its database on the date of that release and may change before the defence.

## How it was built

The atlas is derived from the thesis, not written separately from it. Three sources feed it:

1. **The thesis chapters** (Word documents), from which the generators take paragraphs, tables, lists of features and section numbers.
2. **The research database of the thesis**, an annotated spreadsheet with one row per inscription (dialect attribution and its certainty, date, subject of the question, local alphabet, autopsy notes). It is the author's unpublished working tool and is not distributed here.
3. **The scripts that draw the figures of the thesis** (Python, with Seaborn and Altair), so that every chart of the atlas uses the same counts as the corresponding figure.

The Python generators in `scripts/` (`datos_*.py`) read the current version of each chapter and the database, check that the figures of the text match the counts of the database, and write the files in `src/data/`. A few data files (`corpus.js`, `tesalio.js`, `beocio.js`, `dorico.js`, `lecturas.js`) were prepared by hand from the same sources. The interface (React, Vite and Nivo) only displays those data: it does not compute attributions.

Before each publication, `npm run check` verifies that the totals of every part add up to the corpus, that the chronology and subject counts match each group, that every cited inscription exists in the index of texts, and that no working notes remain in the visible text. The public build then verifies that no autopsy photograph has entered `dist/`.

The repository therefore contains the derived data and the code, but not the thesis sources. The generators document how each figure was obtained, but running them requires the thesis files.

## Licences

| Material | Licence |
|---|---|
| Content: texts written for the atlas, tables, charts, derived data (`src/data`, the texts in `src/chapters`) and the author's facsimiles | [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/) |
| Code: components, utilities, scripts and configuration | MIT |

The following material keeps its own terms and is not covered by these licences:

- The texts of the inscriptions, from *I.Dodone DVC* and *I.Dodone Lhôte*.
- Coastlines: Natural Earth (public domain); Boeotia, © OpenStreetMap contributors (ODbL).
- Typefaces: the Greek font, derived from Cardo (`src/assets/fonts/OFL.txt`), DM Sans and Playfair Display, under the SIL Open Font License 1.1.
- The dependencies listed in `package.json`, each under its own licence.

The autopsy photographs are kept outside the repository (`.gitignore`) and are not published: their publication depends on the authorisation of the Ephorate of Antiquities of Ioannina. The facsimiles, drawn by the author, are published.

The full text of both licences is in [`LICENSE`](./LICENSE).

## Running it locally

Requires Node.js 22 or later.

```bash
npm install
npm run dev            # local version at http://localhost:5173
npm run check          # totals, citations and visible texts
npm run build:public   # public version in dist/; fails if any check fails
```

`dist/` is a static website with relative paths, no server, no cookies and no third-party requests (the fonts are bundled). It can be copied as it is to any web server or institutional page, or embedded with an `<iframe>`; the `#` part of the address selects the part that opens.

### Structure

```
src/
  App.jsx            active part (#address), loading errors and inscription cards
  chapters.js        list of parts (order, colour, view)
  sitio.js           authorship, title, citation and licence shown in the footer
  data/              data derived from the thesis (see "How it was built")
  chapters/          one view per part and chapter
  components/        charts, maps, feature explorer, inscription lists and cards
  lib/text.jsx       polytonic Greek and automatic linking of inscription references
scripts/
  comun.py           paths of the thesis sources and reading of the chapters
  datos_*.py         generators of src/data
  comprobar.mjs      checks run by npm run check and by the public build
  coastline.py       coastlines and areas of the maps
```

## Author

Carlos Candel Lozano, Universidad de Valladolid (ORCID [0009-0005-0448-9856](https://orcid.org/0009-0005-0448-9856)). PhD thesis supervised by Elena Martín González, Doctoral School of the Universidad de Valladolid (EsDUVa).
