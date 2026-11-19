import {
  categories,
  getCategory,
  getCategoryCount,
  publications,
} from '../data/publications.js'
import { divisions } from '../data/localPublications.js'
import { divisionImages } from '../data/divisionImages.js'
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
    title: 'Bangla Newspapers (বাংলা পত্রিকা) — Complete List',
    heading: 'Bangla Newspapers in Bangladesh',
    intro:
      'This page lists the Bengali-language newspapers published in Bangladesh, from national dailies to regional titles. Every entry links to the publisher’s official website, where you can read today’s news and, where available, the e-paper edition.',
    description: (count) =>
      `Browse ${count} Bangla newspapers in Bangladesh, including Prothom Alo, Kaler Kantho, Ittefaq and Jugantor, with links to official websites.`,
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
    title: 'Online Bangla News (অনলাইন পত্রিকা) — Portal Directory',
    heading: 'Online Bangla News Portals',
    intro:
      'This page lists Bangladeshi digital-first newsrooms, national portals and specialist news sites. Each link opens the publisher’s own website, where stories are updated throughout the day.',
    description: (count) =>
      `Browse ${count} Bangladeshi online news portals, including bdnews24, Bangla Tribune and Jago News 24, with direct publisher links.`,
  },
  business: {
    title: 'Bangladeshi Business News (ব্যবসা ও অর্থনীতি) — List',
    description:
      'Browse Bangladeshi business and financial news, including Arthosuchak, Share Biz, Business Post, Amader Orthoneeti and market portals.',
  },
  magazines: {
    title: 'Bangladeshi Magazines (ম্যাগাজিন) — Periodicals List',
    description:
      'Browse Bangladeshi magazines and periodicals, including Computer Jagat, Kali O Kalam, Weekly Bangalee, Scientific Bangladesh and specialist publications.',
  },
  agencies: {
    title: 'News Agencies (সংবাদ সংস্থা) — Bangladesh & World',
    description:
      'Find Bangladeshi and international news agencies, including BSS, UNB, Reuters, Associated Press, AFP and other wire services in one directory.',
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
    title: 'English Newspapers (ইংরেজি পত্রিকা) — Bangladesh List',
    heading: 'English Newspapers in Bangladesh',
    intro:
      'This page lists the English-language dailies, business papers and weekly magazines published in Bangladesh. Each entry links to the publisher’s official website, where you can read current reporting and, where available, the e-paper.',
    description: (count) =>
      `Browse ${count} English-language newspapers in Bangladesh, including The Daily Star, Dhaka Tribune and The Financial Express, with official website links.`,
  },
  tv: {
    title: 'Bangladeshi TV Channels (বাংলা টিভি) — Full List',
    heading: 'Bangladeshi TV Channels',
    intro:
      'This page lists Bangladeshi television channels that publish news or current-affairs content online. Each link opens the broadcaster’s official website or live page where one is available; the directory does not host or relay video.',
    description: (count) =>
      `Browse ${count} Bangladeshi TV channels, including Somoy TV, Jamuna TV, Channel i and NTV, with official websites and live-stream pages where available.`,
  },
  international: {
    title: 'International News (আন্তর্জাতিক সংবাদ) — World Papers',
    description:
      'Browse international newspapers and global news sites, including BBC News, CNN, Al Jazeera, The Guardian and The New York Times.',
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
      title: seo.title,
      description:
        typeof seo.description === 'function'
          ? seo.description(count)
          : seo.description,
      robots: INDEX_ROBOTS,
      image: DEFAULT_OG_IMAGE,
      imageAlt: `${label} in the All Bangla Newspapers directory`,
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
