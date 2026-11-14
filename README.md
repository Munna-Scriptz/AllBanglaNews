# All Bangla Newspapers — Bangladesh News Directory

A fast, open-source, frontend-only directory of Bangladeshi media. It brings
national and district newspapers, radio stations, online news portals, e-papers,
TV channels and international publications into one searchable, mobile-friendly
index.

**Live site:** [www.allbanglanewspapers.news](https://www.allbanglanewspapers.news)

Built with React, Vite, React Router and Tailwind CSS v4. There is no backend,
database, account system or tracking-heavy third-party script. All directory
data lives in the `src/data` folder and is prerendered at build time.

## What is inside

- **209 unique outlets** across eight public categories.
- **200 publications + 9 radio stations.**
- **109 local titles** from **47 districts** across all eight divisions:
  Dhaka, Chattogram, Rajshahi, Khulna, Barishal, Sylhet, Rangpur and
  Mymensingh.
- **19 e-paper entries**: direct publisher editions where verified, otherwise
  the official homepage with an explanatory label.
- **228 category entries** in total. This is larger than the unique outlet
  count because e-paper is a cross-cutting view: a newspaper with a digital
  edition appears in both its newspaper category and E-Paper.

Each card links directly to the publisher or broadcaster’s official website.
The directory never hosts or republishes news articles, e-paper PDFs, live TV
streams or radio audio.

## Features

- Search by publication name in English or Bangla.
- Filter by category and browse local titles by division.
- Homepage previews for every category, with 12 cards and a show-more control.
- Visual division cards on the local-newspapers page, using credited
  Wikimedia Commons photos.
- Direct links to official newspaper, radio, TV and e-paper websites.
- Responsive layouts for phones, tablets and desktop.
- Route-specific titles, descriptions, canonical URLs, Open Graph tags and
  JSON-LD.
- Static prerendering for every public route.
- Accessible focus states, landmarks, image alt text and reduced-motion-safe
  interactions.
- Self-hosted Inter and Hind Siliguri fonts.
- Generated `sitemap.xml`, `robots.txt`, `llms.txt` and `404.html`.

## Tech stack

- React 19
- Vite 8
- React Router 7
- Tailwind CSS v4
- `lucide-react` icons
- `@fontsource` self-hosted fonts
- Node.js 22.12 or newer for builds

## Development

```bash
cd client
npm install
npm run dev
```

Open the local URL printed by Vite. The development server uses the same React
routes and data as the production build.

## Production build

```bash
cd client
npm run build
npm run preview
```

`npm run build` runs the Vite client build and then `scripts/prerender.mjs`.
The prerenderer:

1. Checks that every React route has matching SEO metadata.
2. Produces static HTML for every public route, including `/local-newspapers`
   and `/radio`.
3. Writes `404.html`.
4. Regenerates `sitemap.xml`, `robots.txt` and `llms.txt`.
5. Keeps route-specific `<head>` metadata in sync with the app.

## Project structure

```text
client/
├── public/
│   ├── divisions/             # Credited division photos for the local page
│   ├── logos/                 # Publication, local-title and radio marks
│   ├── llms.txt               # Crawl summary (regenerated during build)
│   ├── robots.txt             # Crawl rules (regenerated during build)
│   └── sitemap.xml            # Public sitemap (regenerated during build)
├── scripts/
│   ├── prerender.mjs          # Static HTML, sitemap, robots and llms.txt
│   └── check-links.mjs        # External-link checker
├── src/
│   ├── components/
│   │   ├── home/              # Hero, directory, category showcases, guide, FAQ
│   │   ├── layout/            # Navbar, mobile menu, footer
│   │   ├── newspaper/         # Cards, grids, logo fallback
│   │   ├── seo/               # Client head updates and category guide
│   │   └── ui/                # Search, category navigation, headers
│   ├── data/
│   │   ├── publications.js        # Categories and core publication records
│   │   ├── localPublications.js   # District-level records and divisions
│   │   ├── divisionImages.js      # Division photos, credits and licenses
│   │   ├── radioPublications.js   # Radio station records
│   │   ├── localLogos.js          # Local-title logo paths
│   │   ├── radioLogos.js          # Radio logo paths
│   │   ├── categoryContent.js     # Category guide copy
│   │   └── siteInfo.js            # Contact email and last-verified date
│   ├── layout/                # Shared app shell
│   ├── pages/                 # Home, category, local, 404 and policy pages
│   ├── seo/                   # Site constants, route metadata, schemas, head
│   ├── routes.jsx             # Shared route table (browser + prerender)
│   ├── entry-server.jsx       # Build-time render entry
│   └── utils/
└── index.html
```

## Data model

Every outlet record uses the same public shape. Local titles add `division` and
`district`; radio stations use the `radio` category.

```js
{
  id: 'local-daily-gazipur',
  name: 'Daily Gazipur',
  logo: '/logos/local-daily-gazipur.webp',
  website: 'https://dailygazipur.com/',
  category: 'local',
  language: 'Bangla',
  description: 'A Gazipur-based Bangla news site covering city and district affairs.',
  featured: false,
  epaper: false,
  popularity: null,
  ranking: null,
  division: 'dhaka',
  district: 'Gazipur'
}
```

The public category ids are:

`bangla`, `local`, `online`, `epaper`, `radio`, `english`, `tv`,
`international`.

E-paper is a cross-cutting category. A record with `epaper: true` appears in
its normal newspaper category and in the E-Paper view. Use `epaperUrl` only
after verifying a working publisher-owned digital edition. If the direct
edition cannot be verified, keep the official homepage and explain that in
`epaperDescription`.

## Adding or updating a publication

1. Confirm the official website. Do not use search-result pages, social-media
   pages, scraped mirrors or third-party streaming aggregators.
2. For a local title, confirm the main district and division. Do not guess a
   district from a domain name alone.
3. Add or update the record in:
   - `src/data/publications.js` for national, online, e-paper, English, TV and
     international entries.
   - `src/data/localPublications.js` for district-level entries.
   - `src/data/radioPublications.js` for radio stations.
4. Add a logo in `client/public/logos/`. Prefer the publisher’s own wordmark or
   site icon. If no usable mark is available, the card falls back to a
   typographic initial mark.
5. Run `npm run lint` and `npm run build`.
6. If a new route is added, update both `src/routes.jsx` and
   `src/seo/routes.js`. The build fails when those tables do not match.

## News contribution policy

**This repository is a directory, not a news publisher.**

We welcome contributions that improve the directory:

- Suggest a missing newspaper, local title, radio station or broadcaster.
- Report a dead, redirected or incorrect official URL.
- Submit a verified publisher-owned e-paper link.
- Improve a description, category label or district assignment.
- Add a missing logo or fix a broken image.
- Improve accessibility, performance, SEO, responsive layout or code quality.

We do **not** accept:

- News articles, press releases, opinion pieces or sponsored content.
- Uploaded e-paper PDFs, copied articles or copyrighted media files.
- Links to unofficial mirrors, scraped archives or streaming aggregators.
- Paid placement, ranking requests or promises of editorial endorsement.
- Personal data, phone numbers, emails or addresses that the publisher has not
  made public for directory purposes.

If you have a news tip, contact the relevant publication directly. This project
cannot verify, forward or publish news stories. A listing is not a ranking,
circulation claim or endorsement.

## Reporting a correction

Open an issue with:

1. The publication or station name and its current directory URL.
2. The official URL you believe should be used.
3. What changed: homepage, e-paper, district, logo, language or category.
4. The date you checked the link.
5. A screenshot only if the website is unavailable and the evidence is useful.

Please do not include private contact details. For sensitive corrections, use
the contact page on the live site.

## Pull request checklist

- [ ] The link opens the publisher or broadcaster’s official domain.
- [ ] The record uses an existing category id.
- [ ] Local records include the correct `division` and `district`.
- [ ] E-paper URLs point to the publisher’s own digital edition.
- [ ] No duplicated publication id or name.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes and the prerenderer reports all routes.
- [ ] New or changed images have descriptive alt text and reasonable file size.
- [ ] No news articles, press releases, paid placements or ranking claims.

## Scripts

```bash
cd client
npm run dev        # Start the Vite development server
npm run lint       # Run ESLint
npm run build      # Build and prerender the static site
npm run preview    # Preview the production build
npm run check-links # Check external publisher links
```

## Deployment

The production site is designed for Vercel and the canonical host is
`https://www.allbanglanewspapers.news`.

- `vercel.json` redirects the apex domain to `www`, enables clean URLs and
  applies `X-Robots-Tag: noindex` to `*.vercel.app` hosts and `?q=` search URLs.
- Prerendered pages are written as both `route.html` and `route/index.html`.
- After deployment, confirm:
  - `https://www.allbanglanewspapers.news/sitemap.xml`
  - `https://www.allbanglanewspapers.news/robots.txt`
  - `https://www.allbanglanewspapers.news/llms.txt`
  - `https://www.allbanglanewspapers.news/local-newspapers`
  - `https://www.allbanglanewspapers.news/radio`

## SEO notes

- Every public route has a unique title, description, canonical URL, Open Graph
  tags, Twitter card tags and robots directive.
- JSON-LD uses `WebSite`, `Organization`, `BreadcrumbList` and `ItemList`.
  `Organization` includes the developer credit and GitHub links.
- No ratings, review counts, traffic figures, awards or ranking guarantees are
  invented.
- Search URLs using `?q=` are `noindex, follow` and point their canonical at the
  underlying category or homepage.
- The sitemap and `llms.txt` are generated from the same route table as the app.

## Logo and trademark policy

Publication names, wordmarks and logos belong to their respective publishers.
They are used for identification in a directory. If you are a rights holder and
want a mark updated or removed, open a correction issue or use the contact page.

Some local and radio sites do not expose a usable logo file. In those cases the
card uses a generated typographic initial mark rather than an unverified or
unrelated image.

## Credits

Built and maintained by **Munna Scriptz**.

- GitHub: [github.com/Munna-Scriptz](https://github.com/Munna-Scriptz)
- Source: [github.com/Munna-Scriptz/AllBanglaNews](https://github.com/Munna-Scriptz/AllBanglaNews)
- Contact: use the contact page on the live site.

If this directory saves you time, consider starring the repository and sharing
it with someone who reads Bangladeshi news.

## License

This project is intended to be released under the MIT License. Add the standard
`LICENSE` file to the public repository before accepting external contributions.
Third-party publication names, logos and linked content remain the property of
their respective owners and are not covered by the project license.

## Disclaimer

All Bangla Newspapers is independent and is not affiliated with any publisher,
broadcaster, political party or media group. External links are provided for
navigation. The directory does not guarantee that a third-party website will be
online, current, accurate or available in every region.
