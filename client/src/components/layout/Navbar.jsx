import { useEffect, useMemo, useRef, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router'
import { ArrowRight, ArrowUpRight, Menu, Search, X } from 'lucide-react'
import {
  categories,
  featuredPublications,
  searchPublications,
} from '../../data/publications'
import { cn } from '../../utils/helpers'
import PublicationLogo from '../newspaper/PublicationLogo'
import Brand from '../ui/Brand'
import MobileMenu from './MobileMenu'

const navItems = [
  { label: 'Home', to: '/', end: true },
  ...['bangla', 'online', 'epaper', 'tv', 'english', 'international']
    .map((id) => categories.find((category) => category.id === id))
    .filter(Boolean)
    .map((category) => ({ label: category.label, to: category.path })),
]

function SearchPopover({ onClose }) {
  const [term, setTerm] = useState('')
  const navigate = useNavigate()
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const results = useMemo(() => {
    if (!term.trim()) return featuredPublications.slice(0, 4)
    return searchPublications(term).slice(0, 5)
  }, [term])

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = term.trim()
    if (!value) return
    navigate(`/?q=${encodeURIComponent(value)}#directory`)
    onClose()
  }

  const isSearching = term.trim().length > 0

  return (
    <div
      id="nav-search-panel"
      className="z-50 overflow-hidden rounded-[10px] border border-line bg-surface shadow-[0_24px_60px_-25px_rgba(24,25,22,0.35)] max-lg:fixed max-lg:inset-x-3 max-lg:top-[70px] lg:absolute lg:right-0 lg:top-full lg:mt-2 lg:w-[390px]"
    >
      <form
        onSubmit={handleSubmit}
        role="search"
        className="flex items-center gap-2 border-b border-line px-4"
      >
        <Search
          className="h-4 w-4 shrink-0 text-muted"
          strokeWidth={1.8}
          aria-hidden="true"
        />
        <label htmlFor="navbar-search" className="sr-only">
          Search newspapers, publications
        </label>
        <input
          ref={inputRef}
          id="navbar-search"
          type="search"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
          placeholder="Search newspapers, publications..."
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent py-3.5 text-[13.5px] text-ink outline-none placeholder:text-muted [&::-webkit-search-cancel-button]:hidden"
        />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close search"
          className="grid h-7 w-7 shrink-0 place-items-center rounded-md text-muted transition-colors hover:bg-tint hover:text-ink"
        >
          <X className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
        </button>
      </form>

      <div className="max-h-[340px] overflow-y-auto p-2">
        <p className="px-2 pb-1.5 pt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-muted">
          {isSearching ? 'Matches' : 'Quick picks'}
        </p>

        {results.length > 0 ? (
          <ul>
            {results.map((publication) => (
              <li key={publication.id}>
                <a
                  href={publication.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="group flex items-center gap-3 rounded-md px-2 py-2 transition-colors hover:bg-paper"
                >
                  <PublicationLogo
                    publication={publication}
                    className="h-8 w-8"
                    imageClassName="p-1"
                    eager
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[12.5px] font-medium text-ink">
                      {publication.name}
                    </span>
                    <span
                      lang="bn"
                      className="block truncate text-[10.5px] text-muted"
                    >
                      {publication.banglaName}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 shrink-0 text-muted/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="px-2 py-5 text-[12px] leading-5 text-muted">
            No publications match &ldquo;{term.trim()}&rdquo;. Try a different
            name or category.
          </p>
        )}
      </div>

      {isSearching && (
        <div className="border-t border-line p-2">
          <button
            type="submit"
            onClick={handleSubmit}
            className="flex w-full items-center justify-between rounded-md bg-paper px-3 py-2.5 text-[11.5px] font-medium text-ink transition-colors hover:bg-tint"
          >
            <span>View all results for &ldquo;{term.trim()}&rdquo;</span>
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const searchRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setSearchOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!searchOpen) return

    const handlePointerDown = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSearchOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [searchOpen])

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-paper">
        <div className="shell flex h-[70px] items-center justify-between gap-4">
          <Brand />

          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  cn(
                    'relative rounded-md px-2.5 py-2 text-[12px] font-medium whitespace-nowrap transition-colors duration-150 xl:px-3 xl:text-[12.5px]',
                    isActive
                      ? 'text-ink'
                      : 'text-ink-soft/85 hover:text-ink',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span
                        className="absolute inset-x-2.5 -bottom-[3px] h-[2px] rounded-full bg-accent xl:inset-x-3"
                        aria-hidden="true"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <div ref={searchRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  setSearchOpen((open) => !open)
                  setMobileOpen(false)
                }}
                aria-label={
                  searchOpen ? 'Close search' : 'Search publications'
                }
                aria-expanded={searchOpen}
                aria-controls="nav-search-panel"
                className={cn(
                  'grid h-9 w-9 place-items-center rounded-md border transition-colors duration-150',
                  searchOpen
                    ? 'border-ink bg-ink text-white'
                    : 'border-transparent text-ink-soft hover:border-line hover:bg-surface hover:text-ink',
                )}
              >
                {searchOpen ? (
                  <X className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                ) : (
                  <Search
                    className="h-[18px] w-[18px]"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                )}
              </button>

              {searchOpen && <SearchPopover onClose={() => setSearchOpen(false)} />}
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileOpen(true)
                setSearchOpen(false)
              }}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              className="grid h-9 w-9 place-items-center rounded-md border border-transparent text-ink-soft transition-colors hover:border-line hover:bg-surface hover:text-ink lg:hidden"
            >
              <Menu className="h-[18px] w-[18px]" strokeWidth={1.8} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  )
}
