import {
  categories,
  getPublicationsByCategory,
  publications,
} from '../data/publications.js'
import {
  SITE_DESCRIPTION,
  SITE_LOGO,
  SITE_NAME,
  absoluteUrl,
} from './site.js'

const organizationId = `${absoluteUrl('/')}#organization`
const websiteId = `${absoluteUrl('/')}#website`

const buildOrganization = () => ({
  '@type': 'Organization',
  '@id': organizationId,
  name: SITE_NAME,
  url: absoluteUrl('/'),
  description: SITE_DESCRIPTION,
  logo: {
    '@type': 'ImageObject',
    url: absoluteUrl(SITE_LOGO),
    width: 512,
    height: 512,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Bangladesh',
  },
  knowsLanguage: ['English', 'Bengali'],
  knowsAbout: categories
    .filter((category) => category.id !== 'all')
    .map((category) => category.label),
})

const buildWebSite = () => ({
  '@type': 'WebSite',
  '@id': websiteId,
  url: absoluteUrl('/'),
  name: SITE_NAME,
  alternateName: `${SITE_NAME} — Bangladesh News Directory`,
  description: SITE_DESCRIPTION,
  inLanguage: 'en',
  publisher: { '@id': organizationId },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${absoluteUrl('/')}?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
})

const buildPage = (meta, type = 'WebPage') => {
  const pageUrl = meta.canonical
  if (!pageUrl) return null

  return {
    '@type': type,
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: meta.title,
    description: meta.description,
    isPartOf: { '@id': websiteId },
    inLanguage: 'en',
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: absoluteUrl(meta.image),
    },
  }
}

const buildBreadcrumb = (meta) => {
  const pageUrl = meta.canonical
  if (!pageUrl) return null

  return {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: absoluteUrl('/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: meta.label,
        item: pageUrl,
      },
    ],
  }
}

const buildItemList = (meta) => {
  const pageUrl = meta.canonical
  if (!pageUrl) return null

  const items =
    meta.id === 'home'
      ? publications
      : getPublicationsByCategory(meta.categoryId)

  return {
    '@type': 'ItemList',
    '@id': `${pageUrl}#itemlist`,
    name:
      meta.id === 'home'
        ? 'Bangladeshi newspaper directory'
        : `${meta.label} directory`,
    description: meta.description,
    numberOfItems: items.length,
    itemListOrder: 'https://schema.org/ItemListUnordered',
    itemListElement: items.map((publication, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: publication.name,
      url: publication.website,
    })),
  }
}

/**
 * Build a single @graph for the current page. Only verifiable information is
 * included — no ratings, review counts, traffic figures or invented awards.
 */
export const buildSchemas = (meta) => {
  if (!meta || meta.id === 'not-found') return null

  const graph = [buildWebSite(), buildOrganization()]
  const pageType = meta.id === 'home' ? 'WebPage' : 'CollectionPage'
  const page = buildPage(meta, pageType)
  const itemList = buildItemList(meta)

  if (page) graph.push(page)
  if (meta.id !== 'home') {
    const breadcrumb = buildBreadcrumb(meta)
    if (breadcrumb) graph.push(breadcrumb)
  }
  if (itemList) graph.push(itemList)

  return {
    '@context': 'https://schema.org',
    '@graph': graph.filter(Boolean),
  }
}
