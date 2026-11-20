import { useMemo, useState } from 'react'
import { ArrowRight, Plus } from 'lucide-react'
import { Link } from 'react-router'
import {
  categories,
  getLocalPublicationsByDivision,
  getPublicationsByCategory,
} from '../../data/publications'
import NewspaperGrid from '../newspaper/NewspaperGrid'

const PAGE_SIZE = 12

/**
 * The local category is ordered by district on its own page. For the homepage
 * preview, take one title from each division in turn so the first twelve cards
 * represent all of Bangladesh rather than only the first district.
 */
const getCategoryItems = (categoryId) => {
  const items = getPublicationsByCategory(categoryId)

  if (categoryId !== 'local') return items

  const groups = getLocalPublicationsByDivision().map((division) => [
    ...division.items,
  ])
  const mixed = []
  let groupIndex = 0

  while (mixed.length < items.length && groups.some((group) => group.length)) {
    const group = groups[groupIndex % groups.length]
    if (group.length) mixed.push(group.shift())
    groupIndex += 1
  }

  return mixed
}

function CategorySection({ category }) {
  const items = useMemo(() => getCategoryItems(category.id), [category.id])
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const visibleItems = items.slice(0, visibleCount)
  const remaining = items.length - visibleCount
  const hasMore = remaining > 0
  const headingId = `home-${category.id}-heading`

  return (
    <section
      id={`home-${category.id}`}
      className="scroll-mt-20 border-t border-line py-8 md:py-10"
      aria-labelledby={headingId}
    >
      <div className="shell">
        <div className="flex flex-col gap-3 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:pb-6">
          <div className="min-w-0 max-w-3xl border-l-3 border-accent/60 pl-4 sm:pl-5">
            <h2
              id={headingId}
              className="text-[22px] font-semibold leading-[1.15] tracking-[-0.04em] text-ink min-[480px]:text-[25px] sm:text-[30px]"
            >
              {category.label}
            </h2>

            <p className="mt-2 max-w-3xl text-[12.5px] leading-[1.7] text-ink-soft/85 min-[480px]:text-[13px] sm:text-[14px] sm:leading-6 sm:block hidden">
              {category.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:shrink-0 sm:justify-end">
            <span
              className="text-[11px] font-medium text-muted"
              aria-live="polite"
            >
              Showing {visibleItems.length} of {items.length}{' '}
              {category.countLabel}
            </span>
            <Link
              to={category.path}
              className="group inline-flex w-fit items-center gap-1.5 rounded-sm py-1 text-[11.5px] font-medium text-ink-soft transition-colors hover:text-accent sm:text-[12.5px]"
            >
              View all
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 sm:h-4 sm:w-4"
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        <div className="mt-5">
          <NewspaperGrid
            items={visibleItems}
            ariaLabel={`${category.label} on All Bangla Newspapers`}
          />
        </div>

        {hasMore && (
          <div className="mt-7 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
              aria-label={`Show ${Math.min(remaining, PAGE_SIZE)} more ${category.label}`}
              className="inline-flex items-center gap-2 rounded-[8px] border border-line-strong bg-surface px-4 py-2.5 text-[12.5px] font-medium text-ink transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-white"
            >
              <Plus className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
              Show {Math.min(remaining, PAGE_SIZE)} more
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default function CategoryShowcase() {
  return (
    <div>
      {categories
        .filter((category) => category.id !== 'all')
        .map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
    </div>
  )
}
