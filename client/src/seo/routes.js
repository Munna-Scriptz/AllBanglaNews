import {
  categories,
  getCategory,
  getCategoryCount,
  publications,
} from '../data/publications.js'
import { divisions } from '../data/localPublications.js'
import { divisionImages } from '../data/divisionImages.js'
import {
  TOP_NEWSPAPERS_LAST_VERIFIED,
  TOP_NEWSPAPERS_PATH,
  topNewspapers,
} from '../data/topNewspapers.js'
import {
  DAILY_NEWSPAPERS_PATH,
  dailyNewspapers,
} from '../data/dailyNewspapers.js'
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  INDEX_ROBOTS,
  NOINDEX_ROBOTS,
  SITE_NAME,
  absoluteUrl,
  normalizePath,
} from './site.js'

const categorySeo = {
  bangla: {
    title: (count) => `Bangla Newspaper List — ${count} Newspapers in Bangladesh`,
    heading: 'Bangla Newspaper List — All Bangla Newspapers in Bangladesh',
    intro:
      "This Bangla newspaper list brings together the Bengali-language newspapers in Bangladesh, from national dailies such as Prothom Alo and Ittefaq to regional titles. Every entry links to the publisher's official website, where you can find today's news, archived reports and, where available, the e-paper edition.",
    description: (count) =>
      `Browse the Bangla newspaper list of ${count} Bengali-language newspapers in Bangladesh, including Prothom Alo and Ittefaq, with official links and e-paper options.`,
    imageAlt: 'Bangla newspaper list from All Bangla Newspapers',
  },
  local: {
    title: 'Local Newspapers (স্থানীয় পত্রিকা) — 8 Divisions',
    heading: 'Bangladeshi Local Newspapers',
    intro:
      'This page groups district-level newspapers and local news portals by Bangladesh’s eight divisions. Coverage varies by district, and each card opens the publisher’s own website rather than a copy of the publication.',
    description: (count) =>
      `Browse ${count} district-level newspapers and local news portals from Dhaka, Chattogram, Rajshahi, Khulna, Barishal, Sylhet, Rangpur and Mymensingh.`,
  },
  online: {
    title: (count) =>
      `Bangladesh Online Newspaper List - All ${count} News Portals`,
    heading: 'Bangladesh Online Newspapers',
    intro:
      'This is the complete list of Bangladeshi online newspapers and news portals, including Bangla-language sites such as bdnews24, Bangla Tribune and Jago News 24 alongside English and specialist outlets. Each link opens the publisher’s own website, where stories are updated throughout the day.',
    description: (count) =>
      `Browse all ${count} Bangladeshi online newspapers and news portals, including bdnews24, Bangla Tribune, Jago News 24 and English-language outlets.`,
  },
  business: {
    title: 'Bangladeshi Business News (ব্যবসা ও অর্থনীতি) — List',
    description: (count) =>
      `Browse ${count} Bangladeshi business and financial news sources, including Arthosuchak, Share Biz, Business Post, Amader Orthoneeti and market portals.`,
  },
  magazines: {
    title: 'Bangladeshi Magazines (ম্যাগাজিন) — Periodicals List',
    description: (count) =>
      `Browse ${count} Bangladeshi magazines and periodicals, including Computer Jagat, Kali O Kalam, Weekly Bangalee, Scientific Bangladesh and specialist publications.`,
  },
  agencies: {
    title: 'News Agencies (সংবাদ সংস্থা) — Bangladesh & World',
    description: (count) =>
      `Find ${count} Bangladeshi and international news agencies, including BSS, UNB, Reuters, Associated Press, AFP and other wire services in one directory.`,
  },
  epaper: {
    title: 'Bangladeshi E-Paper (ই-পেপার) — Today’s Editions',
    heading: 'Bangladeshi E-Papers',
    intro:
      'This page lists Bangladeshi publications that offer a digital edition. Where a direct e-paper address has been verified, the listing opens that edition; otherwise it opens the publisher’s homepage.',
    description: (count) =>
      `Browse ${count} Bangladeshi e-papers and digital newspaper editions, including Prothom Alo, Ittefaq, Samakal and Dhaka Tribune, with direct publisher links.`,
  },
  radio: {
    title: 'Bangladesh Radio Stations (রেডিও) — FM & Live',
    heading: 'Bangladeshi Radio Stations',
    intro:
      'This page links to Bangladesh Betar, private FM stations and online radio services. Each listing opens the broadcaster’s official site, which carries live audio and programme information when the station provides them.',
    description: (count) =>
      `Browse ${count} Bangladeshi radio stations, including Bangladesh Betar, Radio Foorti and Radio Today, with official websites and live-listening pages.`,
  },
  english: {
    title: (count) => `List of English Newspapers in Bangladesh - All ${count} Titles`,
    heading: 'All English Newspapers in Bangladesh',
    intro:
      "This is the complete list of English newspapers in Bangladesh, covering the Bangladeshi English-language dailies and weeklies in the directory. From The Daily Star and Dhaka Tribune to The Financial Express and New Age, every entry links to the publisher's official website and, where available, its e-paper edition.",
    description: (count) =>
      `List of English newspapers in Bangladesh: all ${count} Bangladeshi English titles, with official links to The Daily Star, Dhaka Tribune and Financial Express.`,
  },
  tv: {
    title: (count) => `Television Channels in Bangladesh — ${count} TV Channels`,
    heading: 'Television Channels in Bangladesh',
    intro:
      'This list of television channels in Bangladesh covers broadcasters with a public website or live news page, including 24-hour news services, state-owned television and general entertainment channels. Each link opens the broadcaster’s own site; the directory does not host or relay video.',
    description: (count) =>
      `Browse ${count} television channels in Bangladesh, including BTV, Somoy TV, Jamuna TV, NTV and RTV, with official websites and live pages where available.`,
    imageAlt: 'Television channels in Bangladesh from All Bangla Newspapers',
  },
  international: {
    title: 'International News (আন্তর্জাতিক সংবাদ) — World Papers',
    description: (count) =>
      `Browse ${count} international newspapers and global news sites, including BBC News, CNN, Al Jazeera, The Guardian and The New York Times.`,
  },
}

const categoryRoutes = categories
  .filter((category) => category.id !== 'all')
  .map((category) => {
    const seo = categorySeo[category.id]
    const label = category.id === 'epaper' ? 'E-Papers' : category.label
    const count = getCategoryCount(category.id)

    return {
      id: category.id,
      path: category.path,
      label,
      categoryId: category.id,
      pageType: 'CollectionPage',
      heading: seo.heading ?? label,
      intro: seo.intro ?? category.description,
      title: typeof seo.title === 'function' ? seo.title(count) : seo.title,
      description:
        typeof seo.description === 'function'
          ? seo.description(count)
          : seo.description,
      robots: INDEX_ROBOTS,
      image: DEFAULT_OG_IMAGE,
      imageAlt: seo.imageAlt ?? `${label} in the All Bangla Newspapers directory`,
    }
  })

const divisionRoutes = divisions.map((division) => {
  const image = divisionImages[division.id]
  const districtList = division.districts.slice(0, 4).join(', ')

  return {
    id: `division-${division.id}`,
    path: `/local-newspapers/${division.id}`,
    label: `${division.label} Newspapers`,
    categoryId: 'local',
    divisionId: division.id,
    breadcrumbParent: {
      label: 'Local Newspapers',
      path: '/local-newspapers',
    },
    isDivision: true,
    pageType: 'CollectionPage',
    title: `${division.label} Newspapers — All Regional ${division.label} Titles`,
    description: `Browse regional and ${division.label} newspapers, including titles from ${districtList} and other ${division.label} Division districts.`,
    robots: INDEX_ROBOTS,
    image: absoluteUrl(image.src),
    imageAlt: image.alt,
    imageWidth: 800,
    imageHeight: 500,
  }
})

/**
 * Static editorial pages. Paths and metadata live here so routes.jsx,
 * prerendering, sitemap.xml and llms.txt all read the same definitions.
 */
export const staticPageRoutes = [
  {
    id: 'about',
    path: '/about',
    label: 'About',
    categoryId: null,
    pageType: 'WebPage',
    title: 'About All Bangla Newspapers — Independent News Directory',
    description:
      'Learn how All Bangla Newspapers selects publications, links official websites and e-paper editions, and keeps the Bangladesh newspaper directory independent.',
    robots: INDEX_ROBOTS,
    image: DEFAULT_OG_IMAGE,
    imageAlt: 'About the All Bangla Newspapers directory',
  },
  {
    id: 'contact',
    path: '/contact',
    label: 'Contact',
    categoryId: null,
    pageType: 'WebPage',
    title: 'Contact All Bangla Newspapers — Corrections & Suggestions',
    description:
      'Report a broken newspaper link, suggest a missing publication or send an e-paper URL correction to the All Bangla Newspapers directory.',
    robots: INDEX_ROBOTS,
    image: DEFAULT_OG_IMAGE,
    imageAlt: 'Contact the All Bangla Newspapers directory',
  },
  {
    id: 'privacy',
    path: '/privacy',
    label: 'Privacy',
    categoryId: null,
    pageType: 'WebPage',
    title: 'Privacy Policy — All Bangla Newspapers',
    description:
      'Read how All Bangla Newspapers handles analytics, search queries and links to external publisher websites, and what the directory does not collect.',
    robots: INDEX_ROBOTS,
    image: DEFAULT_OG_IMAGE,
    imageAlt: 'Privacy policy for All Bangla Newspapers',
  },
  {
    id: 'daily-newspapers',
    path: DAILY_NEWSPAPERS_PATH,
    label: 'Daily Newspapers',
    categoryId: null,
    pageType: 'CollectionPage',
    title:
      'Bangladesh Daily Newspaper List — Daily Newspapers in Bangla & English',
    description:
      'A curated Bangladesh daily newspaper list of daily-published Bangla and English newspapers, with official links, coverage notes and no circulation claims.',
    robots: INDEX_ROBOTS,
    image: DEFAULT_OG_IMAGE,
    imageAlt: 'Daily newspapers in Bangladesh — Bangla and English dailies',
    itemListName: 'Bangladesh daily newspaper list',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    itemList: dailyNewspapers.map((entry) => ({
      name: entry.publication.name,
      url: entry.publication.website,
    })),
  },
  {
    id: 'top-newspapers',
    path: TOP_NEWSPAPERS_PATH,
    label: 'Top 10 Newspapers in Bangladesh',
    categoryId: null,
    pageType: 'Article',
    ogType: 'article',
    title: 'Top 10 Newspapers in Bangladesh (2026) | All Bangla Newspapers',
    description:
      'Explore 10 leading newspapers in Bangladesh, compare Bangla and English publications, discover their coverage and visit official websites.',
    robots: INDEX_ROBOTS,
    image: DEFAULT_OG_IMAGE,
    imageAlt: 'Top 10 newspapers in Bangladesh — editorial guide',
    datePublished: TOP_NEWSPAPERS_LAST_VERIFIED,
    dateModified: TOP_NEWSPAPERS_LAST_VERIFIED,
    articleSection: 'Bangladesh newspapers',
    itemListName: 'Top 10 newspapers in Bangladesh',
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    itemList: topNewspapers.map((entry) => ({
      name: entry.displayName,
      url: entry.publication.website,
    })),
  },
]

export const seoRoutes = [
  {
    id: 'home',
    path: '/',
    label: 'Home',
    categoryId: null,
    pageType: 'CollectionPage',
    title: 'All Bangla Newspapers (সকল বাংলা পত্রিকা) — Complete List',
    description: `Browse ${publications.length} newspaper and media listings: Bangladeshi national and local papers, online news, TV, radio, e-papers, magazines and world press.`,
    robots: INDEX_ROBOTS,
    image: DEFAULT_OG_IMAGE,
    imageAlt: DEFAULT_OG_IMAGE_ALT,
  },
  ...categoryRoutes,
  ...divisionRoutes,
  ...staticPageRoutes,
]

export const notFoundMeta = {
  id: 'not-found',
  path: null,
  label: 'Page not found',
  categoryId: null,
  title: 'Page not found — All Bangla Newspapers',
  description:
    'The page you requested is not in the All Bangla Newspapers directory. Return to the homepage to browse Bangladeshi newspapers, local titles, online news, business publications, magazines, radio stations, e-papers, TV channels and news agencies.',
  robots: NOINDEX_ROBOTS,
  image: DEFAULT_OG_IMAGE,
  imageAlt: DEFAULT_OG_IMAGE_ALT,
  canonical: null,
  isSearch: false,
}

export const getSeoRoute = (pathname) => {
  const normalized = normalizePath(pathname)
  return seoRoutes.find((route) => route.path === normalized) ?? null
}

export const getPageMeta = (pathname, search = '') => {
  const route = getSeoRoute(pathname)
  const query = new URLSearchParams(search).get('q')?.trim() ?? ''

  if (!route) {
    return { ...notFoundMeta }
  }

  if (query) {
    return {
      ...route,
      title: `Search results for “${query}” — ${SITE_NAME}`,
      description: `Search results for “${query}” in the All Bangla Newspapers directory. Use the category filters to narrow the list of Bangladeshi newspapers and news portals.`,
      robots: NOINDEX_ROBOTS,
      canonical: absoluteUrl(route.path),
      isSearch: true,
    }
  }

  return {
    ...route,
    canonical: absoluteUrl(route.path),
    isSearch: false,
  }
}

/** Category metadata used by the static content blocks and internal links. */
export const getCategorySeo = (categoryId) => {
  const category = getCategory(categoryId)
  const seo = categorySeo[categoryId] ?? {}
  const count = getCategoryCount(categoryId)

  return {
    ...category,
    ...seo,
    description:
      typeof seo.description === 'function'
        ? seo.description(count)
        : (seo.description ?? category?.description),
  }
}
