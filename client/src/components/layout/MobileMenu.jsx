import { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { ArrowUpRight, House, X } from 'lucide-react'
import {
  categories,
  getCategoryCount,
  publications,
} from '../../data/publications'
import { cn } from '../../utils/helpers'
import Brand from '../ui/Brand'
import CategoryIcon from '../ui/CategoryIcon'
import SearchBar from '../ui/SearchBar'

const navCategories = categories.filter((category) => category.id !== 'all')

export default function MobileMenu({ open, onClose }) {
  const [term, setTerm] = useState('')
  const closeButtonRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const timer = window.setTimeout(() => closeButtonRef.current?.focus(), 80)
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.clearTimeout(timer)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  const handleSearch = () => {
    const value = term.trim()
    if (!value) return
    navigate(`/?q=${encodeURIComponent(value)}#directory`)
    setTerm('')
    onClose()
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 xl:hidden',
        open ? 'pointer-events-auto' : 'pointer-events-none',
      )}
      aria-hidden={!open}
      inert={!open ? true : undefined}
    >
      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={onClose}
        className={cn(
          'absolute inset-0 bg-ink/40 transition-opacity duration-200',
          open ? 'opacity-100' : 'opacity-0',
        )}
        tabIndex={-1}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          'absolute inset-y-0 right-0 flex w-full max-w-[350px] flex-col border-l border-line bg-paper shadow-2xl transition-transform duration-200 ease-out',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex h-[70px] shrink-0 items-center justify-between border-b border-line px-5">
          <Brand onClick={onClose} />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="grid h-9 w-9 place-items-center rounded-md border border-line bg-surface text-ink-soft transition-colors hover:border-line-strong hover:text-ink"
          >
            <X className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
          </button>
        </div>

        <div className="border-b border-line px-5 py-4">
          <SearchBar
            id="mobile-search"
            value={term}
            onChange={setTerm}
            onSubmit={handleSearch}
            placeholder="Search publications..."
            label="Search publications"
            showButton
            buttonLabel="Go"
          />
        </div>

        <nav
          className="flex-1 overflow-y-auto px-5 py-5"
          aria-label="Mobile primary"
        >
          <p className="eyebrow mb-3">
            <span className="eyebrow-dot" aria-hidden="true" />
            Browse the directory
          </p>

          <NavLink
            to="/"
            end
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                'flex items-center justify-between gap-3 border-b border-line py-3.5 text-[14px] font-medium transition-colors',
                isActive ? 'text-accent' : 'text-ink hover:text-accent',
              )
            }
          >
            <span className="flex items-center gap-3">
              <span className="grid h-7 w-7 place-items-center rounded-[5px] bg-tint text-ink-soft">
                <House className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
              </span>
              Home
            </span>
          </NavLink>

          {navCategories.map((category) => (
            <NavLink
              key={category.id}
              to={category.path}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'flex items-center justify-between gap-3 border-b border-line py-3.5 text-[14px] font-medium transition-colors',
                  isActive ? 'text-accent' : 'text-ink hover:text-accent',
                )
              }
            >
              <span className="flex items-center gap-3">
                <span className="grid h-7 w-7 place-items-center rounded-[5px] bg-tint text-ink-soft">
                  <CategoryIcon
                    name={category.icon}
                    className="h-4 w-4"
                  />
                </span>
                {category.label}
              </span>
              <span className="flex items-center gap-2 text-[11px] font-medium text-muted">
                {getCategoryCount(category.id)}
                <ArrowUpRight
                  className="h-3 w-3 text-muted"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>
            </NavLink>
          ))}
        </nav>

        <div className="shrink-0 border-t border-line px-5 py-4">
          <p className="text-[11px] leading-5 text-muted">
            {publications.length} unique outlets indexed. Every link opens the
            publisher&apos;s official website.
          </p>
        </div>
      </div>
    </div>
  )
}
