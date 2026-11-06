import {
  categories,
  getCategory,
} from '../data/publications.js'
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
    title: 'Bangla Newspaper List — All Bangla Newspapers',
    description:
      'Browse a complete list of Bangladeshi Bangla newspapers, including Prothom Alo, Kaler Kantho, Ittefaq, Jugantor and more, with links to official websites.',
    keywords: [
      'Bangla newspaper',
      'Bangla newspapers',
      'Bangla newspaper list',
      'Bangladeshi Bangla newspapers',
      'Bangla daily newspaper',
      'Bangla news paper',
      'Bangla news papers',
      'Bengali newspapers',
      'daily Bangla news',
      'Prothom Alo',
      'Kaler Kantho',
      'Ittefaq',
      'Jugantor',
    ],
  },
  online: {
    title: 'Bangladeshi Online News — All Bangla Newspapers',
    description:
      'Find Bangladeshi online news portals and Bangla news sites, from bdnews24 and Bangla Tribune to Jago News 24, with direct links to each publisher.',
    keywords: [
      'online Bangla news',
      'Bangla news online',
      'Bangladeshi online news',
      'Bangla news portal',
      'Bangla news sites',
      'latest Bangla news',
      'current Bangla news',
      'bdnews24',
      'Bangla Tribune',
      'Jago News 24',
      'Dhaka Post',
    ],
  },
  epaper: {
    title: 'Bangladeshi E-Papers — All Bangla Newspapers',
    description:
      'Browse Bangladeshi e-papers and digital newspaper editions. Find today’s online editions of leading Bangla and English dailies in one directory.',
    keywords: [
      'Bangladeshi e-paper',
      'Bangla e-paper',
      'e-paper Bangladesh',
      'online newspaper Bangladesh',
      'Bangla newspaper e-paper',
      'today Bangla newspaper',
      'digital newspaper',
      'Prothom Alo e-paper',
      'Daily Star e-paper',
    ],
  },
  english: {
    title: 'English Newspapers in Bangladesh — All Bangla Newspapers',
    description:
      'Discover English newspapers in Bangladesh, including The Daily Star, Dhaka Tribune, The Financial Express and other Bangladeshi English dailies.',
    keywords: [
      'English newspapers Bangladesh',
      'Bangladeshi English newspaper',
      'English daily Bangladesh',
      'English news Bangladesh',
      'The Daily Star',
      'Dhaka Tribune',
      'Financial Express',
      'New Age',
      'Daily Sun',
    ],
  },
  tv: {
    title: 'Bangladeshi TV Channels — All Bangla Newspapers',
    description:
      'Browse a list of Bangladeshi TV channels and Bangla news broadcasters, including Somoy TV, Jamuna TV, Channel i, NTV and more.',
    keywords: [
      'Bangladeshi TV channels',
      'Bangla news TV',
      'Bangla TV channel list',
      'live Bangla news',
      'Bangladesh TV channels',
      'Somoy TV',
      'Jamuna TV',
      'Channel i',
      'NTV',
      'Ekattor TV',
    ],
  },
  international: {
    title: 'International Newspapers — All Bangla Newspapers',
    description:
      'Browse international newspapers and global news sites, including BBC News, CNN, Reuters, Al Jazeera and The Guardian, in one directory.',
    keywords: [
      'international newspapers',
      'world news sites',
      'global newspapers',
      'international news',
      'BBC News',
      'CNN',
      'Reuters',
      'Al Jazeera',
      'The Guardian',
    ],
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
      title: seo.title,
      description: seo.description,
      keywords: seo.keywords,
      robots: INDEX_ROBOTS,
      image: DEFAULT_OG_IMAGE,
      imageAlt: `${label} in the All Bangla Newspapers directory`,
    }
  })

export const seoRoutes = [
  {
    id: 'home',
    path: '/',
    label: 'Home',
    categoryId: null,
    title: 'All Bangla Newspapers — Bangladesh Newspaper Directory',
    description:
      'Browse every Bangladeshi newspaper in one place: Bangla dailies, online news portals, e-papers, English newspapers, TV channels and international press.',
    keywords: [
      'Bangla newspaper',
      'Bangla newspapers',
      'Bangladeshi newspapers',
      'Bangladesh newspaper list',
      'all Bangla newspapers',
      'Bangla news paper',
      'Bangla news papers',
      'Bangla news',
      'online Bangla news',
      'Bangla newspaper list',
      'Bangladesh news directory',
      'Bangla e-paper',
      'Bangladeshi TV channels',
      'English newspapers Bangladesh',
    ],
    robots: INDEX_ROBOTS,
    image: DEFAULT_OG_IMAGE,
    imageAlt: DEFAULT_OG_IMAGE_ALT,
  },
  ...categoryRoutes,
]

export const notFoundMeta = {
  id: 'not-found',
  path: null,
  label: 'Page not found',
  categoryId: null,
  title: 'Page not found — All Bangla Newspapers',
  description:
    'The page you requested is not in the All Bangla Newspapers directory. Return to the homepage to browse Bangladeshi newspapers, e-papers and TV channels.',
  keywords: ['All Bangla Newspapers', 'Bangladesh newspaper directory'],
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
