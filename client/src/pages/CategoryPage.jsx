import { useDeferredValue, useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router'
import {
  getCategory,
  getCategoryCount,
  searchPublications,
} from '../data/publications'
import CategoryNavigation from '../components/ui/CategoryNavigation'
import EmptyState from '../components/ui/EmptyState'
import PageHeader from '../components/ui/PageHeader'
import SearchBar from '../components/ui/SearchBar'
import NewspaperGrid from '../components/newspaper/NewspaperGrid'

export default function CategoryPage({ categoryId }) {
  const category = getCategory(categoryId)
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') ?? ''
  const deferredQuery = useDeferredValue(query)

  const total = getCategoryCount(categoryId)
  const results = useMemo(
    () => searchPublications(deferredQuery, categoryId),
    [deferredQuery, categoryId],
  )

  const isSearching = query.trim().length > 0
  const pageTitle = categoryId === 'epaper' ? 'E-Papers' : category.label

  useEffect(() => {
    document.title = `${pageTitle} — Kagoj`
    return () => {
      document.title = 'Kagoj — Bangladesh News Directory'
    }
  }, [pageTitle])

  const updateQuery = (value) => {
    const nextParams = new URLSearchParams(searchParams)
    if (value.trim()) {
      nextParams.set('q', value)
    } else {
      nextParams.delete('q')
    }
    setSearchParams(nextParams, { replace: true })
  }

  return (
    <>
      <PageHeader
        title={pageTitle}
        description={category.description}
        category={category}
        count={total}
        countLabel={category.countLabel}
      />

      <section className="py-10 md:py-14" aria-label={`${pageTitle} directory`}>
        <div className="shell">
          <CategoryNavigation variant="tabs" activeId={categoryId} />

          <div className="mt-6 flex flex-col gap-3 border-b border-line pb-6 sm:flex-row sm:items-center sm:justify-between">
            <SearchBar
              id={`${categoryId}-search`}
              value={query}
              onChange={updateQuery}
              placeholder={`Search ${category.countLabel}...`}
              className="w-full max-w-md"
              label={`Search ${category.countLabel}`}
            />
            <p
              aria-live="polite"
              className="text-[11.5px] font-medium text-muted"
            >
              {isSearching
                ? `${results.length} ${
                    results.length === 1 ? 'result' : 'results'
                  } for “${query.trim()}”`
                : `${total} ${category.countLabel} in the directory`}
            </p>
          </div>

          <div className="mt-7">
            {results.length > 0 ? (
              <NewspaperGrid
                items={results}
                metaLabel={categoryId === 'epaper' ? 'E-Paper' : undefined}
                ariaLabel={`${pageTitle} publications`}
                eagerCount={4}
              />
            ) : (
              <EmptyState
                title="No publications found"
                description={`Nothing matches “${query.trim()}” in ${pageTitle.toLowerCase()}. Try a different spelling or clear the search.`}
                actionLabel="Clear search"
                onAction={() => updateQuery('')}
              />
            )}
          </div>

          {!isSearching && (
            <div className="mt-10 flex flex-col gap-3 rounded-[10px] border border-line bg-surface px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[12.5px] text-ink-soft">
                Looking for something else? The full index covers every
                category in one searchable grid.
              </p>
              <Link
                to="/#directory"
                className="shrink-0 text-[12px] font-medium text-ink transition-colors hover:text-accent"
              >
                Browse the complete directory →
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
