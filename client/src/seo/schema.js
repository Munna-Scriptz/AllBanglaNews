import {
  categories,
  getLocalDivision,
  getPublicationsByCategory,
  publications,
} from '../data/publications.js'
import {
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_GITHUB_URL,
  SITE_LOGO,
  SITE_NAME,
  SITE_REPO_URL,
  absoluteUrl,
} from './site.js'

const organizationId = `${absoluteUrl('/')}#organization`
const websiteId = `${absoluteUrl('/')}#website`

const buildOrganization = () => ({
  '@type': 'Organization',
  '@id': organizationId,
  name: SITE_NAME,
  alternateName: 'AllBanglaNews',
  url: absoluteUrl('/'),
  description: SITE_DESCRIPTION,
  logo: {
    '@type': 'ImageObject',
    url: absoluteUrl(SITE_LOGO),
    width: 512,
    height: 512,
  },
  founder: {
    '@type': 'Person',
    name: SITE_AUTHOR,
    url: SITE_GITHUB_URL,
  },
  sameAs: [SITE_GITHUB_URL, SITE_REPO_URL],
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
})

const buildPage = (meta, type = 'WebPage') => {
  const pageUrl = meta.canonical
  if (!pageUrl) return null

  const page = {
    '@type': type,
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: meta.title,
    description: meta.description,
    isPartOf: { '@id': websiteId },
    inLanguage: 'en',
  }

  // Editorial articles carry their own verified dates and publisher. No
  // author is invented: the directory itself is credited as the publisher.
  if (type === 'Article') {
    page.headline = meta.title
    page.datePublished = meta.datePublished
    page.dateModified = meta.dateModified ?? meta.datePublished
    page.image = absoluteUrl(meta.image)
    page.author = {
      '@type': 'Organization',
      name: SITE_NAME,
      url: absoluteUrl('/'),
    }
    page.publisher = { '@id': organizationId }
    page.mainEntityOfPage = pageUrl
    page.articleSection = meta.articleSection
  } else {
    // primaryImageOfPage is a WebPage property. Articles use `image` above,
    // which is the property supported by Article structured data.
    page.primaryImageOfPage = {
      '@type': 'ImageObject',
      url: absoluteUrl(meta.image),
    }
  }

  return page
}

const buildBreadcrumb = (meta) => {
  const pageUrl = meta.canonical
  if (!pageUrl) return null

  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: absoluteUrl('/'),
    },
  ]

  if (meta.breadcrumbParent) {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: meta.breadcrumbParent.label,
      item: absoluteUrl(meta.breadcrumbParent.path),
    })
  }

  items.push({
    '@type': 'ListItem',
    position: items.length + 1,
    name: meta.label,
    item: pageUrl,
  })

  return {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: items,
  }
}

const buildItemList = (meta) => {
  const pageUrl = meta.canonical
  if (!pageUrl) return null

  const items = meta.itemList
    ? meta.itemList
    : meta.divisionId
      ? (getLocalDivision(meta.divisionId)?.items ?? [])
      : meta.id === 'home'
        ? publications
        : getPublicationsByCategory(meta.categoryId)

  return {
    '@type': 'ItemList',
    '@id': `${pageUrl}#itemlist`,
    name:
      meta.itemListName ??
      (meta.id === 'home'
        ? 'Bangladeshi newspaper directory'
        : `${meta.label} directory`),
    description: meta.description,
    numberOfItems: items.length,
    itemListOrder:
      meta.itemListOrder ?? 'https://schema.org/ItemListUnordered',
    itemListElement: items.map((publication, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: publication.name,
      url: publication.website ?? publication.url,
    })),
  }
}

/**
 * Build a single @graph for the current page. Only verifiable information is
 * included — no ratings, review counts, traffic figures or invented awards.
 */
export const buildSchemas = (meta) => {
  if (!meta || meta.id === 'not-found' || meta.isSearch) return null

  const graph = [buildWebSite(), buildOrganization()]
  const pageType = meta.pageType ?? (meta.categoryId ? 'CollectionPage' : 'WebPage')
  const isListingPage =
    Boolean(meta.itemList) || meta.id === 'home' || Boolean(meta.categoryId)
  const page = buildPage(meta, pageType)
  const itemList = isListingPage ? buildItemList(meta) : null

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
