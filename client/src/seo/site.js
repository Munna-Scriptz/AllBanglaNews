/**
 * Canonical site-wide SEO constants.
 *
 * Keep every public URL on the www host. Vercel redirects the apex domain and
 * the canonical tags make the preferred host explicit to search engines.
 */
export const SITE_URL = 'https://www.allbanglanewspapers.news'
export const SITE_NAME = 'All Bangla Newspapers'
export const SITE_AUTHOR = 'Munna Scriptz'
export const SITE_GITHUB_URL = 'https://github.com/Munna-Scriptz'
export const SITE_REPO_URL =
  'https://github.com/Munna-Scriptz/AllBanglaNews'
export const SITE_TAGLINE = 'Bangladesh News Directory'
export const SITE_DESCRIPTION =
  'A complete All Bangla newspaper list and reader-first directory of Bangladeshi dailies, local district titles, radio stations, online news portals, e-papers, TV channels and international publications.'
export const SITE_LANGUAGE = 'en'
export const SITE_LOCALE = 'en_BD'
export const DEFAULT_OG_IMAGE = '/og-image.jpg'
export const DEFAULT_OG_IMAGE_ALT =
  'All Bangla Newspapers — a directory of Bangladeshi newspapers, local papers, radio stations, e-papers and TV channels'
export const DEFAULT_OG_IMAGE_WIDTH = 1200
export const DEFAULT_OG_IMAGE_HEIGHT = 630
export const SITE_LOGO = '/logo-512.png'
export const INDEX_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
export const NOINDEX_ROBOTS = 'noindex, follow'

/** Turn an on-site path into an absolute URL on the canonical host. */
export const absoluteUrl = (path = '/') => {
  if (/^https?:\/\//i.test(path)) return path

  const normalized = path.startsWith('/') ? path : `/${path}`
  if (normalized === '/') return `${SITE_URL}/`

  return `${SITE_URL}${normalized.replace(/\/+$/, '')}`
}

/** Normalize a router pathname for metadata lookup and canonical output. */
export const normalizePath = (pathname = '/') => {
  let decoded = pathname

  try {
    decoded = decodeURI(pathname)
  } catch {
    // Keep the raw value if the URL contains malformed escape sequences.
  }

  const pathOnly = decoded.split('?')[0].split('#')[0]
  if (!pathOnly || pathOnly === '/') return '/'

  return `/${pathOnly.replace(/^\/+|\/+$/g, '')}`
}
