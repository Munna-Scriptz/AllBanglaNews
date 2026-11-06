import { renderToString } from 'react-dom/server'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { appRoutes } from './routes'

/**
 * Render a single route to static HTML at build time. The browser hydrates the
 * same route table, so the prerendered content stays interactive.
 */
export const render = (url) => {
  const router = createMemoryRouter(appRoutes, {
    initialEntries: [url],
  })

  return {
    html: renderToString(<RouterProvider router={router} />),
  }
}
