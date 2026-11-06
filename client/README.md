# All Bangla Newspapers — Bangladesh News Directory

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

`npm run build` runs the Vite client build and then
`scripts/prerender.mjs`. The prerenderer produces static HTML for every public
route, writes `404.html`, regenerates `sitemap.xml` and `llms.txt`, and keeps
the route-specific `<head>` metadata in sync with the React app.

## Project structure

```text
src/
├── components/
│   ├── home/          # Hero, directory explorer, homepage guide
│   ├── layout/        # Navbar, mobile menu, footer
│   ├── newspaper/     # Cards, grids, featured section, logo fallback
│   ├── seo/           # Client head updates and category guide
│   └── ui/            # Search, category navigation, headers, empty state
├── data/
│   ├── publications.js    # Categories and all publication records
│   └── categoryContent.js # Original category guide copy
├── layout/             # Shared app shell
├── pages/              # Home, category pages, 404
├── seo/                # Site constants, route metadata, schemas, head tags
├── routes.jsx          # Shared route table (browser + prerender)
├── entry-server.jsx    # Build-time render entry
└── utils/
scripts/
└── prerender.mjs       # Static HTML, sitemap, llms.txt, 404 generation
```

## SEO

- Every public route has a unique title, description, curated keyword set,
  canonical URL, Open Graph tags, Twitter card tags and robots directive.
- Category pages include original guide copy, descriptive H2/H3 headings and
  contextual internal links.
- JSON-LD uses `WebSite`, `Organization`, `BreadcrumbList` and `ItemList`.
  No ratings, review counts or traffic figures are invented.
- Search result URLs (`?q=`) receive `noindex, follow` and a canonical URL
  pointing at the underlying category or homepage.
- `public/robots.txt`, `public/sitemap.xml` and `public/llms.txt` are included.
  The sitemap and `llms.txt` are regenerated during the build.
- Metadata keywords are included for completeness, but Google does not use the
  meta keywords tag for ranking. The important keyword coverage is in titles,
  descriptions, headings and the reader-facing guide content.

To add or rename a route:

1. Add the route to `src/routes.jsx`.
2. Add its metadata to `src/seo/routes.js`.
3. Run `npm run build`; the prerenderer and sitemap update automatically.

## Deployment notes (Vercel)

- The canonical production host is `https://www.allbanglanewspapers.news`.
- `vercel.json` redirects the apex domain to `www`, enables clean URLs, sends
  `X-Robots-Tag: noindex` to `*.vercel.app` hosts, and caches static assets.
- Prerendered pages are written as both `route.html` and
  `route/index.html` for compatibility with static hosts.
- After the first production deployment, submit
  `https://www.allbanglanewspapers.news/sitemap.xml` in Google Search Console
  and set the preferred domain to the `www` host.

## Adding a publication

1. Add a favicon/logo to `public/logos/{id}.png`.
2. Add an entry to `publications` in `src/data/publications.js`.
3. Use an existing category id: `bangla`, `online`, `epaper`, `english`, `tv`
   or `international`. Set `epaper: true` if the publication has a digital
   edition.

All publication cards link to official publisher websites and open in a new
tab. Missing logos fall back automatically to typographic initials. Logo images
include descriptive alt text, intrinsic dimensions and lazy loading.
