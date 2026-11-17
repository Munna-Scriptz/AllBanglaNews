import {
  categories,
  getCategory,
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
    description:
      'Browse all Bangla newspapers in Bangladesh, including Prothom Alo, Kaler Kantho, Ittefaq, Jugantor and regional dailies, with links to official websites.',
  },
  local: {
    title: 'Local Newspapers (স্থানীয় পত্রিকা) — 8 Divisions',
    description:
      'Browse district-level newspapers and local news portals from Dhaka, Chattogram, Rajshahi, Khulna, Barishal, Sylhet, Rangpur and Mymensingh.',
  },
  online: {
    title: 'Online Bangla News (অনলাইন পত্রিকা) — Bangladeshi Sites',
    description:
      'Find Bangladeshi online news portals and Bangla news sites, from bdnews24 and Bangla Tribune to Jago News 24 and Dhaka Post, with direct publisher links.',
  },
  business: {
    title: 'Bangladeshi Business News (ব্যবসা ও অর্থনীতি) — List',
    description:
      'Browse Bangladeshi business and financial news publications, including Arthosuchak, Share Biz, Business Post, Amader Orthoneeti, market portals and specialist finance sites.',
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
    description:
      'Browse today’s Bangladeshi e-papers and digital newspaper editions, including Prothom Alo, Ittefaq, Samakal, Dhaka Tribune and more.',
  },
  radio: {
    title: 'Bangladesh Radio Stations (রেডিও) — FM & Live',
    description:
      'Find Bangladeshi FM and state radio stations, including Bangladesh Betar, Radio Foorti, Radio Today and Dhaka FM, with official websites and live-listening links.',
  },
  english: {
    title: 'English Newspapers (ইংরেজি পত্রিকা) — Bangladesh List',
    description:
      'Discover English newspapers in Bangladesh, including The Daily Star, Dhaka Tribune, The Financial Express, Daily Sun and The Independent, in one list.',
  },
  tv: {
    title: 'Bangladeshi TV Channels (বাংলা টিভি) — Live News',
    description:
      'Browse Bangladeshi TV channels and Bangla news broadcasters, including Somoy TV, Jamuna TV, Channel i, NTV, ATN News, Ekhon TV and more.',
  },
  international: {
    title: 'International News (আন্তর্জাতিক সংবাদ) — World Papers',
    description:
      'Browse international newspapers and global news sites, including BBC News, CNN, Al Jazeera, The Guardian and The New York Times, plus Bangla-language world coverage.',
  },
}

const categoryRoutes = categories
  .filter((category) => category.id !== 'all')
  .map((category) => {
    const seo = categorySeo[category.id]
    const label = category.id === 'epaper' ? 'E-Papers' : category.label

    return {
      id: category.id,
      path: category.path,
      label,
      categoryId: category.id,
      pageType: 'CollectionPage',
      title: seo.title,
      description: seo.description,
      robots: INDEX_ROBOTS,
      image: DEFAULT_OG_IMAGE,
      imageAlt: `${label} in the All Bangla Newspapers directory`,
    }
  })

const divisionRoutes = divisions.map((division) => {
  const image = divisionImages[division.id]
  const districtList = division.districts.slice(0, 5).join(', ')

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
    description: `Browse all regional and ${division.label} newspapers in one directory, including titles from ${districtList} and other districts in ${division.label} Division.`,
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
    description:
      'All Bangla Newspapers is a complete Bangladesh media directory: national and local newspapers, online news, business and finance, magazines, radio stations, e-papers, English papers, TV channels, news agencies and international press.',
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
  return {
    ...category,
    ...(categorySeo[categoryId] ?? {}),
  }
}
