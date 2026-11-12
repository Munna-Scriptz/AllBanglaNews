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
    title: 'Bangla Newspaper List — All Bangla Newspapers in Bangladesh',
    description:
      'Browse all Bangla newspapers in Bangladesh, including Prothom Alo, Kaler Kantho, Ittefaq, Jugantor and regional dailies, with links to official websites.',
    keywords: [
      'Bangla newspaper',
      'all Bangla newspaper',
      'all Bangla newspaper list',
      'Bangla newspaper list',
      'Bangladeshi Bangla newspapers',
      'Bangla daily newspaper',
      'Bangla news paper',
      'Bangla news papers',
      'Bengali newspapers',
      'Bangla newspapers Bangladesh',
      'daily Bangla news',
      'Prothom Alo',
      'Kaler Kantho',
      'Ittefaq',
      'Jugantor',
      'Bangladesh Pratidin',
      'Ajker Patrika',
      'Dainik Azadi',
      'বাংলা পত্রিকা',
      'সকল বাংলা পত্রিকা',
      'বাংলাদেশের সকল পত্রিকা',
      'আজকের পত্রিকা',
      'বাংলা সংবাদপত্র',
      'দৈনিক পত্রিকা',
    ],
  },
  online: {
    title: 'Online Bangla News — Bangladeshi News Portals & Sites',
    description:
      'Find Bangladeshi online news portals and Bangla news sites, from bdnews24 and Bangla Tribune to Jago News 24 and Dhaka Post, with direct publisher links.',
    keywords: [
      'all online online news',
      'all online online newspapers',
      'online Bangla news',
      'Bangla news online',
      'Bangladeshi online news',
      'Bangla news portal',
      'Bangla news sites',
      'latest Bangla news',
      'current Bangla news',
      'today Bangla news',
      'bdnews24',
      'Bangla Tribune',
      'Jago News 24',
      'Dhaka Post',
      'Banglanews24',
      'অনলাইন পত্রিকা',
      'অনলাইন বাংলা খবর',
      'বাংলা নিউজ',
      'সর্বশেষ বাংলা খবর',
      'বাংলা নিউজ পোর্টাল',
    ],
  },
  epaper: {
    title: 'Bangladeshi E-Paper — Today’s Bangla Newspaper E-Papers',
    description:
      'Browse today’s Bangladeshi e-papers and digital newspaper editions, including Prothom Alo, The Daily Star, Kaler Kantho and Jugantor, in one directory.',
    keywords: [
      'all bangla e-paper',
      'Bangladeshi e-paper',
      'Bangla e-paper',
      'e-paper Bangladesh',
      'online newspaper Bangladesh',
      'Bangla newspaper e-paper',
      'today Bangla newspaper',
      'digital newspaper',
      'Prothom Alo e-paper',
      'Daily Star e-paper',
      'Jugantor e-paper',
      'Kaler Kantho e-paper',
      'ই-পেপার',
      'আজকের ই-পেপার',
      'বাংলা ই-পেপার',
      'অনলাইন পত্রিকা',
      'আজকের পত্রিকা',
    ],
  },
  english: {
    title: 'English Newspapers in Bangladesh — Complete List',
    description:
      'Discover English newspapers in Bangladesh, including The Daily Star, Dhaka Tribune, The Financial Express, Daily Sun and The Independent, in one list.',
    keywords: [
      'all english newspapers',
      'English newspapers Bangladesh',
      'Bangladeshi English newspaper',
      'English daily Bangladesh',
      'English news Bangladesh',
      'The Daily Star',
      'Dhaka Tribune',
      'Financial Express',
      'New Age',
      'Daily Sun',
      'The Independent',
      'Bangladesh Post',
      'The New Nation',
      'ইংরেজি পত্রিকা',
      'বাংলাদেশের ইংরেজি সংবাদপত্র',
    ],
  },
  tv: {
    title: 'Bangladeshi TV Channels — Live News & Bangla TV List',
    description:
      'Browse Bangladeshi TV channels and Bangla news broadcasters, including Somoy TV, Jamuna TV, Channel i, NTV, ATN News, Ekhon TV and more.',
    keywords: [
      'all bangladeshi TV channels',
      'Bangladeshi TV channels',
      'Bangla news TV',
      'Bangla TV channel list',
      'live Bangla news',
      'Bangladesh TV channels',
      'Bangla TV live',
      'Somoy TV',
      'Jamuna TV',
      'Channel i',
      'NTV',
      'Ekattor TV',
      'ATN News',
      'Ekhon TV',
      'Nagorik TV',
      'বাংলা টিভি চ্যানেল',
      'বাংলা টিভি',
      'লাইভ বাংলা টিভি',
      'বাংলা নিউজ চ্যানেল',
      'বাংলাদেশের টিভি চ্যানেল',
    ],
  },
  international: {
    title: 'International Newspapers & Bangla World News',
    description:
      'Browse international newspapers and global news sites, including BBC News, CNN, Reuters, Al Jazeera and The Guardian, plus Bangla-language world coverage.',
    keywords: [
      'all international news',
      'all international newspapers',
      'international newspapers',
      'world news sites',
      'global newspapers',
      'international news',
      'global news sites',
      'BBC News',
      'CNN',
      'Reuters',
      'Al Jazeera',
      'The Guardian',
      'BBC Bangla',
      'DW Bangla',
      'VOA Bangla',
      'আন্তর্জাতিক সংবাদ',
      'বিশ্ব সংবাদ',
      'বিবিসি বাংলা',
      'ডয়চে ভেলে বাংলা',
      'ভিওএ বাংলা',
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
    title: 'All Bangla Newspapers — Complete Bangla Newspaper List',
    description:
      'All Bangla Newspapers is a complete Bangladesh newspaper list: Bangla dailies, online news, e-papers, English papers, TV channels and international press.',
    keywords: [
      'all bangla newspaper',
      'all bangla newspapers',
      'all bangla newspaper list',
      'bangla newspaper',
      'bangla newspapers',
      'bangla newspaper list',
      'bangladesh newspaper list',
      'bangladeshi newspaper list',
      'list of bangladeshi newspapers',
      'bangladesh newspapers',
      'bangla news paper',
      'bangla news papers',
      'all newspaper bd',
      'bangla news',
      'all bangla news',
      'bangla news today',
      'bangla newspaper today',
      'bd newspaper list',
      'bangladesh news directory',
      'bangla e-paper',
      'bangla epaper',
      'bangladeshi tv channels',
      'bangla tv channels',
      'english newspapers bangladesh',
      'international newspapers',
      'সকল বাংলা পত্রিকা',
      'বাংলা পত্রিকা',
      'আজকের পত্রিকা',
      'বাংলাদেশের সকল পত্রিকা',
      'বাংলা সংবাদপত্র',
      'অনলাইন পত্রিকা',
      'বাংলা টিভি চ্যানেল',
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
