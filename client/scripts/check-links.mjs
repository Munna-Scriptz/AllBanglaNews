import { publications } from '../src/data/publications.js'

const TIMEOUT_MS = 20_000
const CONCURRENCY = 6
const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36'

const targets = publications.flatMap((publication) => {
  const entries = [
    {
      publication: publication.name,
      kind: 'website',
      url: publication.website,
    },
  ]

  if (publication.epaperUrl) {
    entries.push({
      publication: publication.name,
      kind: 'e-paper',
      url: publication.epaperUrl,
    })
  }

  return entries
})

const request = async (method, url) => {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
    return await fetch(url, {
      method,
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'user-agent': USER_AGENT,
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
    })
  } finally {
    clearTimeout(timer)
  }
}

const checkTarget = async (target) => {
  const startedAt = Date.now()

  try {
    let response = null

    try {
      response = await request('HEAD', target.url)
    } catch {
      // Some servers close HEAD requests or block them at the TLS layer.
    }

    if (!response || !response.ok || [403, 405, 501].includes(response.status)) {
      response = await request('GET', target.url)
    }

    const finalUrl = response.url || target.url
    const redirected = finalUrl.replace(/\/$/, '') !== target.url.replace(/\/$/, '')

    return {
      ...target,
      status: response.status,
      ok: response.ok,
      finalUrl,
      redirected,
      elapsed: Date.now() - startedAt,
    }
  } catch (error) {
    return {
      ...target,
      status: null,
      ok: false,
      finalUrl: null,
      redirected: false,
      elapsed: Date.now() - startedAt,
      error: error.name === 'AbortError' ? 'timeout' : error.message,
    }
  }
}

const results = new Array(targets.length)
let nextIndex = 0

const worker = async () => {
  while (nextIndex < targets.length) {
    const index = nextIndex
    nextIndex += 1
    results[index] = await checkTarget(targets[index])
  }
}

await Promise.all(
  Array.from({ length: Math.min(CONCURRENCY, targets.length) }, worker),
)

for (const result of results) {
  const status = result.status ?? 'ERROR'
  const redirect = result.redirected ? ` -> ${result.finalUrl}` : ''
  const error = result.error ? ` (${result.error})` : ''
  console.log(
    `${String(status).padEnd(5)} ${result.kind.padEnd(7)} ${result.url}${redirect}${error}`,
  )
}

const dead = results.filter(
  (result) => result.status === null || result.status >= 400,
)
const redirected = results.filter(
  (result) => result.redirected && result.ok,
)

console.log(
  `\nChecked ${results.length} outbound URLs: ${results.length - dead.length} reachable, ${dead.length} failed or blocked, ${redirected.length} redirected.`,
)

if (dead.length > 0) {
  console.log('\nFailed or blocked URLs:')
  for (const result of dead) {
    console.log(
      `- ${result.publication} (${result.kind}): ${result.url} — ${
        result.status ?? result.error ?? 'unknown error'
      }`,
    )
  }
}

if (redirected.length > 0) {
  console.log('\nRedirected URLs:')
  for (const result of redirected) {
    console.log(
      `- ${result.publication} (${result.kind}): ${result.url} -> ${result.finalUrl}`,
    )
  }
}

if (process.argv.includes('--strict') && dead.length > 0) {
  process.exitCode = 1
}
