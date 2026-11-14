import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { buildSchemas } from '../../seo/schema'
import { getPageMeta } from '../../seo/routes'
import {
  SITE_AUTHOR,
  SITE_LOCALE,
  SITE_NAME,
  absoluteUrl,
} from '../../seo/site'

const upsertMeta = (dataKey, attribute, key, content) => {
  const selector = `meta[data-seo="${dataKey}"]`
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('data-seo', dataKey)
    document.head.appendChild(element)
  }

  if (element.getAttribute(attribute) !== key) {
    element.removeAttribute('name')
    element.removeAttribute('property')
    element.setAttribute(attribute, key)
  }

  element.setAttribute('content', content)
}

const removeMeta = (dataKey) => {
  document.head.querySelector(`meta[data-seo="${dataKey}"]`)?.remove()
}

const upsertLink = (dataKey, rel, href, hreflang) => {
  const selector = `link[data-seo="${dataKey}"]`
  let element = document.head.querySelector(selector)

  if (!href) {
    element?.remove()
    return
  }

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('data-seo', dataKey)
    document.head.appendChild(element)
  }

  element.setAttribute('rel', rel)
  element.setAttribute('href', href)

  if (hreflang) {
    element.setAttribute('hreflang', hreflang)
  } else {
    element.removeAttribute('hreflang')
  }
}

const upsertJsonLd = (schemas) => {
  const selector = 'script[data-seo="jsonld"]'
  const existing = document.head.querySelector(selector)

  if (!schemas) {
    existing?.remove()
    return
  }

  const element = existing ?? document.createElement('script')
  element.setAttribute('data-seo', 'jsonld')
  element.setAttribute('type', 'application/ld+json')
  element.textContent = JSON.stringify(schemas)

  if (!existing) document.head.appendChild(element)
}

/**
 * Keeps route metadata in sync during client-side navigation. Initial page
 * loads already receive the same tags from the build-time prerenderer.
 */
export default function Seo() {
  const location = useLocation()

  useEffect(() => {
    const meta = getPageMeta(location.pathname, location.search)
    const schemas = buildSchemas(meta)
    const image = absoluteUrl(meta.image)

    document.documentElement.lang = 'en'
    document.documentElement.dir = 'ltr'
    document.title = meta.title

    upsertMeta('description', 'name', 'description', meta.description)
    upsertMeta('robots', 'name', 'robots', meta.robots)
    upsertMeta('author', 'name', 'author', SITE_AUTHOR)
    upsertMeta('creator', 'name', 'creator', SITE_AUTHOR)
    upsertMeta('developer', 'name', 'developer', SITE_AUTHOR)

    upsertLink('canonical', 'canonical', meta.canonical)
    upsertLink('hreflang-en', 'alternate', meta.canonical, 'en')
    upsertLink('hreflang-x-default', 'alternate', meta.canonical, 'x-default')

    if (meta.canonical) {
      upsertMeta('og:url', 'property', 'og:url', meta.canonical)
    } else {
      removeMeta('og:url')
    }

    upsertMeta('og:type', 'property', 'og:type', 'website')
    upsertMeta('og:site_name', 'property', 'og:site_name', SITE_NAME)
    upsertMeta('og:title', 'property', 'og:title', meta.title)
    upsertMeta('og:description', 'property', 'og:description', meta.description)
    upsertMeta('og:image', 'property', 'og:image', image)
    upsertMeta('og:image:type', 'property', 'og:image:type', 'image/jpeg')
    upsertMeta('og:image:width', 'property', 'og:image:width', '1200')
    upsertMeta('og:image:height', 'property', 'og:image:height', '630')
    upsertMeta('og:image:alt', 'property', 'og:image:alt', meta.imageAlt)
    upsertMeta('og:locale', 'property', 'og:locale', SITE_LOCALE)

    upsertMeta('twitter:card', 'name', 'twitter:card', 'summary_large_image')
    upsertMeta('twitter:title', 'name', 'twitter:title', meta.title)
    upsertMeta(
      'twitter:description',
      'name',
      'twitter:description',
      meta.description,
    )
    upsertMeta('twitter:image', 'name', 'twitter:image', image)
    upsertMeta('twitter:image:alt', 'name', 'twitter:image:alt', meta.imageAlt)

    upsertJsonLd(schemas)
  }, [location.pathname, location.search])

  return null
}
