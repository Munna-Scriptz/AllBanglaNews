import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { getPageMeta } from './src/seo/routes.js'
import { buildSchemas } from './src/seo/schema.js'
import { buildHeadTags } from './src/seo/head.js'

const homeMeta = getPageMeta('/')
const defaultSeoHead = buildHeadTags(homeMeta, buildSchemas(homeMeta))

/**
 * Fill the SEO block in index.html for dev and for the client build. The
 * prerender script replaces the same block per route after the build.
 */
const seoHeadPlugin = {
  name: 'all-bangla-newspapers-seo-head',
  transformIndexHtml(html) {
    return html.replace(
      /<!--seo:start-->[\s\S]*?<!--seo:end-->/,
      `<!--seo:start-->\n    ${defaultSeoHead}\n    <!--seo:end-->`,
    )
  },
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seoHeadPlugin],
})
