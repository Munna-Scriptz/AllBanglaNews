import { useDeferredValue, useEffect, useMemo, useState } from 'react'
import { Plus } from 'lucide-react'
import {
  getCategory,
  searchPublications,
} from '../../data/publications'
import CategoryNavigation from '../ui/CategoryNavigation'
import EmptyState from '../ui/EmptyState'
import SectionHeader from '../ui/SectionHeader'
import NewspaperGrid from '../newspaper/NewspaperGrid'

const PAGE_SIZE = 12

export default function DirectoryExplorer({ query, onClear }) {
  const [categoryId, setCategoryId] = useState('all')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const deferredQuery = useDeferredValue(query)

  const results = useMemo(
    () => searchPublications(deferredQuery, categoryId),
    [deferredQuery, categoryId],
  )

  useEffect(() => {
    setVisibleCount(PAGE_SIZE)
  }, [deferredQuery, categoryId])

  const isSearching = query.trim().length > 0
  const activeCategory = getCategory(categoryId)
  const visibleItems = results.slice(0, visibleCount)
  const hasMore = visibleCount < results.length

  const resetFilters = () => {
    onClear()
    setCategoryId('all')
    setVisibleCount(PAGE_SIZE)
  }

  return (
    <section
      id="directory"
      className="scroll-mt-20 py-2"
      aria-labelledby="directory-heading"
    >
      <div className="shell">
        <SectionHeader
          id="directory-heading"
          eyebrow={isSearching ? 'Search results' : ''}
          title={
            isSearching
              ? `Results for “${query.trim()}”`
              : 'Bangladesh Newspaper Directory.'
          }
          description={
            isSearching
              ? 'Filter the results by category, or clear your search to browse the full index.'
              : 'Use the category filters below, or the search at the top of the page, to narrow the list.'
          }
        />

        <div className="mt-2 md:mt-4 space-y-3">
          <CategoryNavigation
            variant="tabs"
            activeId={categoryId}
            onSelect={setCategoryId}
          />
        </div>

        <div className="mt-2 md:mt-4 flex flex-col gap-1.5 border-b border-line pb-4 text-[11.5px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p aria-live="polite" className="font-medium text-ink-soft">
            {results.length === 0
              ? 'No publications match your filters'
              : isSearching
                ? `${results.length} ${results.length === 1 ? 'result' : 'results'
                }${categoryId !== 'all' ? ` in ${activeCategory.label}` : ''}`
                : `Showing ${visibleItems.length} of ${results.length} publications`}
          </p>
          <p className="hidden sm:block">
            Every card opens the publisher&apos;s official website
          </p>
        </div>

        {results.length > 0 ? (
          <>
            <div className="mt-5">
              <NewspaperGrid
                items={results}
                visibleCount={visibleCount}
                ariaLabel={
                  isSearching ? 'Search results' : 'Complete publication directory'
                }
              />
            </div>

            {hasMore && (
              <div className="mt-7 flex justify-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                  className="inline-flex items-center gap-2 rounded-[8px] border border-line-strong bg-surface px-4 py-2.5 text-[12.5px] font-medium text-ink transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-white"
                >
                  <Plus className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                  Show more publications
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="mt-5">
            <EmptyState
              title="No publications found"
              description={
                isSearching
                  ? `Nothing in ${activeCategory.label.toLowerCase()} matches “${query.trim()}”. Try another spelling or clear the filters.`
                  : 'Try a different category or clear the filters to see the full directory.'
              }
              actionLabel="Clear filters"
              onAction={resetFilters}
            />
          </div>
        )}
      </div>
    </section>
  )
}
