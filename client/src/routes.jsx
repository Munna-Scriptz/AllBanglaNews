import { categories } from './data/publications'
import { divisions } from './data/localPublications'
import { staticPageRoutes } from './seo/routes'
import Layout from './layout/Layout'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import LocalPage from './pages/LocalPage'
import DivisionPage from './pages/DivisionPage'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import TopNewspapers from './pages/TopNewspapers'
import DailyNewspapers from './pages/DailyNewspapers'
import NotFound from './pages/NotFound'

const staticPageComponents = {
  about: <About />,
  contact: <Contact />,
  privacy: <Privacy />,
  'daily-newspapers': <DailyNewspapers />,
  'top-newspapers': <TopNewspapers />,
}

const categoryRoutes = categories
  .filter((category) => category.id !== 'all' && category.id !== 'local')
  .map((category) => ({
    path: category.path.replace(/^\//, ''),
    element: <CategoryPage categoryId={category.id} />,
  }))

const divisionRoutes = divisions.map((division) => ({
  path: `local-newspapers/${division.id}`,
  element: <DivisionPage divisionId={division.id} />,
}))

const staticRoutes = staticPageRoutes.map((page) => ({
  path: page.path.replace(/^\//, ''),
  element: staticPageComponents[page.id],
}))

/**
 * Single route table shared by the browser router and the build-time
 * prerenderer. Category paths come from publications.js, and static page
 * paths come from the same metadata used by sitemap.xml.
 */
export const appRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      ...categoryRoutes,
      { path: 'local-newspapers', element: <LocalPage /> },
      ...divisionRoutes,
      ...staticRoutes,
      { path: '*', element: <NotFound /> },
    ],
  },
]

const joinPath = (parent, child) => {
  const base = parent === '/' ? '' : parent.replace(/\/+$/, '')
  const suffix = child.replace(/^\/+/, '')
  return `${base}/${suffix}`.replace(/\/+/g, '/') || '/'
}

const collectLeafPaths = (routes, parent = '/') =>
  routes.flatMap((route) => {
    if (route.path === '*') return []

    const path = route.path ? joinPath(parent, route.path) : parent
    return route.children
      ? collectLeafPaths(route.children, path)
      : [path]
  })

/** Every public leaf route, excluding the catch-all 404 route. */
export const publicRoutePaths = [
  ...new Set(collectLeafPaths(appRoutes, '/')),
]
