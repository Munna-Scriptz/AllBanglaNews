import Layout from './layout/Layout'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import NotFound from './pages/NotFound'

/**
 * Single route table shared by the browser router and the build-time
 * prerenderer. Keeping it in one place prevents metadata/content drift.
 */
export const appRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'bangla-newspapers',
        element: <CategoryPage categoryId="bangla" />,
      },
      { path: 'online-news', element: <CategoryPage categoryId="online" /> },
      { path: 'e-paper', element: <CategoryPage categoryId="epaper" /> },
      {
        path: 'english-newspapers',
        element: <CategoryPage categoryId="english" />,
      },
      { path: 'tv-channels', element: <CategoryPage categoryId="tv" /> },
      {
        path: 'international',
        element: <CategoryPage categoryId="international" />,
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]
