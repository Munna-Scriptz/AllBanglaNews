import { useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router'
import { scrollToId } from '../utils/helpers'
import CategoryNavigation from '../components/ui/CategoryNavigation'
import Hero from '../components/home/Hero'
import DirectoryExplorer from '../components/home/DirectoryExplorer'
import CategoryShowcase from '../components/home/CategoryShowcase'
import DirectoryGuide from '../components/home/DirectoryGuide'
import FaqSection from '../components/home/FaqSection'

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()
  const query = searchParams.get('q') ?? ''
  const isSearching = query.trim().length > 0

  const updateQuery = (value) => {
    const nextParams = new URLSearchParams(searchParams)
    if (value.trim()) {
      nextParams.set('q', value)
    } else {
      nextParams.delete('q')
    }
    setSearchParams(nextParams, { replace: true })
  }

  const scrollToDirectory = () => scrollToId('directory')

  useEffect(() => {
    if (location.hash !== '#directory') return
    const timer = window.setTimeout(scrollToDirectory, 80)
    return () => window.clearTimeout(timer)
  }, [location.hash])

  return (
    <>
      <Hero
        query={query}
        onQueryChange={updateQuery}
        onSearch={scrollToDirectory}
      />

      <section
        className="border-b border-line md:py-6 py-4"
        aria-labelledby="browse-categories"
      >
        <div className="shell">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 id="browse-categories" className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Browse by category
            </h2>
            <a
              href="#directory"
              className="text-[11px] font-medium text-muted transition-colors hover:text-ink"
            >
              Complete directory
            </a>
          </div>
          <CategoryNavigation variant="cards" activeId="all" />
        </div>
      </section>

      <DirectoryExplorer query={query} onClear={() => updateQuery('')} />

      {!isSearching && (
        <>
          <CategoryShowcase />
          <DirectoryGuide />
          <FaqSection />
        </>
      )}
    </>
  )
}
