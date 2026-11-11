import {
  DEFAULT_OG_IMAGE_HEIGHT,
  DEFAULT_OG_IMAGE_WIDTH,
  SITE_LOCALE,
  SITE_NAME,
  absoluteUrl,
} from './site.js'

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const metaTag = (attribute, key, content, dataKey) =>
  `<meta ${attribute}="${escapeHtml(key)}" content="${escapeHtml(content)}" data-seo="${dataKey}" />`

const linkTag = (rel, href, dataKey) =>
  `<link rel="${escapeHtml(rel)}" href="${escapeHtml(href)}" data-seo="${dataKey}" />`

const alternateTag = (hreflang, href, dataKey) =>
  `<link rel="alternate" hreflang="${escapeHtml(hreflang)}" href="${escapeHtml(href)}" data-seo="${dataKey}" />`

const jsonForHtml = (value) =>
  JSON.stringify(value, null, 2)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')

/**
 * Render the complete, route-specific <head> block. The same data powers the
 * client-side head updates, so prerendered and navigated pages stay in sync.
 */
export const buildHeadTags = (meta, schemas) => {
  const image = absoluteUrl(meta.image)
  const tags = [
    `<title>${escapeHtml(meta.title)}</title>`,
    metaTag('name', 'description', meta.description, 'description'),
    metaTag('name', 'keywords', meta.keywords.join(', '), 'keywords'),
    metaTag('name', 'robots', meta.robots, 'robots'),
    metaTag('name', 'author', SITE_NAME, 'author'),
  ]

  if (meta.canonical) {
    tags.push(linkTag('canonical', meta.canonical, 'canonical'))
    tags.push(alternateTag('en', meta.canonical, 'hreflang-en'))
    tags.push(alternateTag('x-default', meta.canonical, 'hreflang-x-default'))
    tags.push(metaTag('property', 'og:url', meta.canonical, 'og:url'))
  }

  tags.push(
    metaTag('property', 'og:type', 'website', 'og:type'),
    metaTag('property', 'og:site_name', SITE_NAME, 'og:site_name'),
    metaTag('property', 'og:title', meta.title, 'og:title'),
    metaTag('property', 'og:description', meta.description, 'og:description'),
    metaTag('property', 'og:image', image, 'og:image'),
    metaTag('property', 'og:image:type', 'image/jpeg', 'og:image:type'),
    metaTag('property', 'og:image:width', DEFAULT_OG_IMAGE_WIDTH, 'og:image:width'),
    metaTag('property', 'og:image:height', DEFAULT_OG_IMAGE_HEIGHT, 'og:image:height'),
    metaTag('property', 'og:image:alt', meta.imageAlt, 'og:image:alt'),
    metaTag('property', 'og:locale', SITE_LOCALE, 'og:locale'),
    metaTag('name', 'twitter:card', 'summary_large_image', 'twitter:card'),
    metaTag('name', 'twitter:title', meta.title, 'twitter:title'),
    metaTag('name', 'twitter:description', meta.description, 'twitter:description'),
    metaTag('name', 'twitter:image', image, 'twitter:image'),
    metaTag('name', 'twitter:image:alt', meta.imageAlt, 'twitter:image:alt'),
  )

  if (schemas) {
    tags.push(
      `<script type="application/ld+json" data-seo="jsonld">\n${jsonForHtml(schemas)}\n</script>`,
    )
  }

  return tags.join('\n    ')
}
