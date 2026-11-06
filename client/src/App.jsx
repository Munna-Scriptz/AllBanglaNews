import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './layout/Layout'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
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
])

export default function App() {
  return <RouterProvider router={router} />
}
