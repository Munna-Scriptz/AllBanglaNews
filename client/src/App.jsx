import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { appRoutes } from './routes'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

const router = createBrowserRouter(appRoutes)

export default function App() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <RouterProvider router={router} />
    </>
  )
}
