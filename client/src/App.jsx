import { createBrowserRouter, RouterProvider } from 'react-router'
import { appRoutes } from './routes'
import { Analytics } from "@vercel/analytics/react"

const router = createBrowserRouter(appRoutes)

export default function App() {
  return (
    <>
      <Analytics />
      <RouterProvider router={router} />
    </>
  )
}
