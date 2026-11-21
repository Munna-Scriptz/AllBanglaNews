import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'
import {
  getCategoryCount,
  publications,
} from '../src/data/publications.js'
import { buildHeadTags } from '../src/seo/head.js'
import { getPageMeta, seoRoutes } from '../src/seo/routes.js'
import { buildSchemas } from '../src/seo/schema.js'
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from '../src/seo/site.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const dist = path.join(root, 'dist')
const seoPattern = /<!--seo:start-->[\s\S]*?<!--seo:end-->/
const buildDate = new Date().toISOString().slice(0, 10)

const escapeXml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

const readTemplate = () => {
  const templatePath = path.join(dist, 'index.html')

  if (!fs.existsSync(templatePath)) {
    throw new Error(
      'dist/index.html was not found. Run `vite build` before prerendering.',
    )
  }

  const template = fs.readFileSync(templatePath, 'utf8')

  if (!seoPattern.test(template)) {
    throw new Error('The SEO placeholder was not found in dist/index.html.')
  }

  return template
}

const injectPage = (template, meta, schemas, html) => {
  const head = buildHeadTags(meta, schemas)
  const withHead = template.replace(
    seoPattern,
    `<!--seo:start-->\n    ${head}\n    <!--seo:end-->`,
  )
  const rootPlaceholder = '<div id="root"></div>'

  if (!withHead.includes(rootPlaceholder)) {
    throw new Error('The root placeholder was not found in the built template.')
  }

  const page = withHead.replace(
    rootPlaceholder,
    `<div id="root" data-prerendered="true">${html}</div>`,
  )

  if (!page.includes('<h1')) {
    throw new Error(`No H1 was rendered for ${meta.path ?? meta.id}.`)
  }

  return page
}

const writeRoute = (routePath, page) => {
  if (routePath === '/') {
    fs.writeFileSync(path.join(dist, 'index.html'), page)
    return
  }

  const slug = routePath.replace(/^\/+|\/+$/g, '')
  const outputDir = path.join(dist, slug)

  // Write both common static-host layouts. Vercel's cleanUrls serves the
  // extensionless URL from the .html file; other hosts use the directory index.
  fs.mkdirSync(outputDir, { recursive: true })
  fs.writeFileSync(path.join(outputDir, 'index.html'), page)
  fs.writeFileSync(path.join(dist, `${slug}.html`), page)
}

const buildSitemap = () => {
  const entries = seoRoutes.map((route) => {
    const meta = getPageMeta(route.path)

    return {
      loc: meta.canonical,
      // Prefer the page's own update date. Only fall back to the build date
      // when a route has no recorded review date.
      lastmod: meta.lastmod ?? buildDate,
    }
  })
  const seen = new Set()

  for (const entry of entries) {
    if (seen.has(entry.loc)) {
      throw new Error(`Duplicate sitemap URL: ${entry.loc}`)
    }
    seen.add(entry.loc)
  }

  const urls = entries
    .map(
      (entry) =>
        `  <url>\n    <loc>${escapeXml(entry.loc)}</loc>\n    <lastmod>${escapeXml(entry.lastmod)}</lastmod>\n  </url>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}

/**
 * sitemap.xml and llms.txt are derived from the route table at build time.
 * A copy in public/ would be shipped by `vite build` before prerendering and
 * silently drift out of date, so refuse to build when one is present.
 */
const assertGeneratedFilesAreNotDuplicated = () => {
  for (const asset of ['sitemap.xml', 'llms.txt']) {
    const publicAsset = path.join(root, 'public', asset)

    if (fs.existsSync(publicAsset)) {
      throw new Error(
        `public/${asset} must be removed: ${asset} is generated into dist/ by prerender.mjs, and a stale copy hides newly added routes.`,
      )
    }
  }
}

const buildRobots = () =>
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`

const validateRouteTable = (routesModule) => {
  const publicPaths = routesModule.publicRoutePaths

  if (!Array.isArray(publicPaths) || publicPaths.length === 0) {
    throw new Error('routes.jsx did not export publicRoutePaths.')
  }

  const publicSet = new Set(publicPaths)
  const seoSet = new Set(seoRoutes.map((route) => route.path))
  const missingMeta = publicPaths.filter((routePath) => !seoSet.has(routePath))
  const missingRoute = seoRoutes
    .map((route) => route.path)
    .filter((routePath) => !publicSet.has(routePath))

  if (missingMeta.length > 0) {
    throw new Error(
      `Route(s) without SEO metadata: ${missingMeta.join(', ')}`,
    )
  }

  if (missingRoute.length > 0) {
    throw new Error(
      `SEO route(s) without a matching React route: ${missingRoute.join(', ')}`,
    )
  }
}

const buildLlmsTxt = () => {
  const publicationCount = publications.filter(
    (publication) => publication.category !== 'radio',
  ).length
  const radioCount = getCategoryCount('radio')

  const pageLines = seoRoutes
    .map((route) => {
      const meta = getPageMeta(route.path)
      return `- [${route.label}](${meta.canonical}): ${meta.description}`
    })
    .join('\n')

  const categoryLines = seoRoutes
    .filter((route) => route.categoryId && !route.isDivision)
    .map(
      (route) =>
        `- ${route.label} (${getCategoryCount(route.categoryId)} listings): ${route.description}`,
    )
    .join('\n')

  return `# ${SITE_NAME}

> ${SITE_TAGLINE} — a complete All Bangla newspaper list and independent, reader-first directory of Bangladeshi dailies, local district titles, radio stations, online news portals, business publications, magazines, e-papers, TV channels, news agencies and international publications.

Canonical: ${SITE_URL}/

## What the site provides

- A searchable directory of ${publications.length} unique outlets: ${publicationCount} publications and ${radioCount} radio stations.
- Category lists for Bangla newspapers, local newspapers across eight divisions, radio stations, online news, business and finance, e-papers, English newspapers, magazines, TV channels, news agencies and international media.
- A dedicated page for each of Bangladesh's eight divisions: Dhaka, Chattogram, Rajshahi, Khulna, Barishal, Sylhet, Rangpur and Mymensingh.
- Direct links to each publisher or broadcaster's official website. The directory does not host or republish news articles.

## Pages

${pageLines}

## Categories

${categoryLines}

## Notes

- Every publication card opens an external publisher website.
- The site is independent and is not affiliated with the publications listed.
- All trademarks, names and logos belong to their respective publishers.
- Search result URLs using the ?q= parameter are marked noindex and are not included in the sitemap.
`
}

const main = async () => {
  assertGeneratedFilesAreNotDuplicated()

  const template = readTemplate()
  const vite = await createServer({
    root,
    configFile: path.join(root, 'vite.config.js'),
    appType: 'custom',
    server: { middlewareMode: true },
    logLevel: 'warn',
  })

  try {
    const routesModule = await vite.ssrLoadModule('/src/routes.jsx')
    validateRouteTable(routesModule)

    const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')

    for (const route of seoRoutes) {
      const meta = getPageMeta(route.path)
      const schemas = buildSchemas(meta)
      const { html } = await render(route.path)
      const page = injectPage(template, meta, schemas, html)

      writeRoute(route.path, page)
      console.log(`prerendered ${route.path}`)
    }

    const notFoundMeta = getPageMeta('/not-found')
    const { html: notFoundHtml } = await render('/not-found')
    const notFoundPage = injectPage(template, notFoundMeta, null, notFoundHtml)

    if (!notFoundPage.includes('content="noindex, follow"')) {
      throw new Error('404.html is missing the noindex robots directive.')
    }

    fs.writeFileSync(path.join(dist, '404.html'), notFoundPage)
    console.log('prerendered 404.html')

    fs.writeFileSync(path.join(dist, 'sitemap.xml'), buildSitemap())
    fs.writeFileSync(path.join(dist, 'robots.txt'), buildRobots())
    fs.writeFileSync(path.join(dist, 'llms.txt'), buildLlmsTxt())
    console.log(
      `generated sitemap.xml (${seoRoutes.length} URLs), robots.txt and llms.txt`,
    )
  } finally {
    await vite.close()
  }
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
