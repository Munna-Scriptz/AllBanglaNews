import { Outlet, ScrollRestoration } from 'react-router'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Seo from '../components/seo/Seo'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Seo />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
