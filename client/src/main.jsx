import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootElement = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

/**
 * Prerendered routes are hydrated. Search URLs (?q=...) are rendered fresh
 * because their result markup intentionally differs from the static page.
 */
const hasSearchQuery = new URLSearchParams(window.location.search).has('q')
const canHydrate =
  rootElement.dataset.prerendered === 'true' && !hasSearchQuery

if (canHydrate) {
  hydrateRoot(rootElement, app)
} else {
  rootElement.innerHTML = ''
  createRoot(rootElement).render(app)
}
