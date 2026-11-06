# Kagoj — Bangladesh News Directory

A fast, frontend-only directory of Bangladeshi newspapers, online news portals,
e-papers, TV channels, English-language dailies and international publications.

Built with React, Vite, React Router and Tailwind CSS v4. All publication data
lives in `src/data/publications.js`; there is no backend, database or
authentication.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── components/
│   ├── home/          # Hero, directory explorer, curated homepage sections
│   ├── layout/        # Navbar, mobile menu, footer
│   ├── newspaper/     # Cards, grids, featured section, logo fallback
│   └── ui/            # Search, category navigation, headers, empty state
├── data/
│   └── publications.js  # Categories and all publication records
├── layout/            # Shared app shell
├── pages/             # Home, category pages, 404
└── utils/
```

## Adding a publication

1. Add a favicon/logo to `public/logos/{id}.png`.
2. Add an entry to `publications` in `src/data/publications.js`.
3. Use an existing category id: `bangla`, `online`, `epaper`, `english`, `tv`
   or `international`. Set `epaper: true` if the publication has a digital
   edition.

All publication cards link to official publisher websites and open in a new
tab. Missing logos fall back automatically to typographic initials.
