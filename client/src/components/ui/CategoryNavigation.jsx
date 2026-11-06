import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import {
  categories,
  getCategoryCount,
} from '../../data/publications'
import { cn } from '../../utils/helpers'
import CategoryIcon from './CategoryIcon'

/**
 * Category shortcuts (card links) and category filters (tabs).
 */
export default function CategoryNavigation({
  variant = 'cards',
  activeId = 'all',
  onSelect,
  includeAll = true,
  showCounts = true,
  className,
}) {
  const items = includeAll
    ? categories
    : categories.filter((category) => category.id !== 'all')

  if (variant === 'cards') {
    return (
      <div
        className={cn(
          'grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7',
          className,
        )}
        aria-label="Browse categories"
      >
        {items.map((category) => {
          const isActive = activeId === category.id
          const count = getCategoryCount(category.id)

          return (
            <Link
              key={category.id}
              to={category.path}
              onClick={() => onSelect?.(category.id)}
              className={cn(
                'group flex h-full min-h-[118px] flex-col justify-between rounded-[10px] border p-3.5 transition-all duration-200 sm:min-h-[126px]',
                isActive
                  ? 'border-ink bg-ink text-white shadow-card'
                  : 'border-line bg-surface text-ink hover:-translate-y-0.5 hover:border-line-strong hover:shadow-card',
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className="flex items-start justify-between gap-2">
                <span
                  className={cn(
                    'grid h-8 w-8 place-items-center rounded-[6px] transition-colors',
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'bg-tint text-ink-soft group-hover:text-accent',
                  )}
                >
                  <CategoryIcon
                    name={category.icon}
                    className="h-[17px] w-[17px]"
                  />
                </span>
                <ArrowUpRight
                  className={cn(
                    'h-3.5 w-3.5 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5',
                    isActive ? 'text-white/40' : 'text-muted/60',
                  )}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>

              <span className="mt-5 block">
                <span className="block text-[12.5px] font-semibold leading-[1.25] tracking-[-0.01em]">
                  {category.label}
                </span>
                {showCounts && (
                  <span
                    className={cn(
                      'mt-1 block text-[10.5px] font-medium',
                      isActive ? 'text-white/45' : 'text-muted',
                    )}
                  >
                    {count} publications
                  </span>
                )}
              </span>
            </Link>
          )
        })}
      </div>
    )
  }

  return (
    <div
      className={cn(
        'hide-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1',
        className,
      )}
      aria-label={onSelect ? 'Filter by category' : 'Browse categories'}
    >
      {items.map((category) => {
        const isActive = activeId === category.id
        const count = getCategoryCount(category.id)
        const content = (
          <>
            <span>{category.shortLabel}</span>
            {showCounts && (
              <span
                className={cn(
                  'rounded-full px-1.5 py-0.5 text-[10px] font-medium leading-none',
                  isActive
                    ? 'bg-white/15 text-white/80'
                    : 'bg-tint text-muted',
                )}
              >
                {count}
              </span>
            )}
          </>
        )

        const classes = cn(
          'inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-2 text-[12px] font-medium transition-colors duration-200',
          isActive
            ? 'border-ink bg-ink text-white'
            : 'border-line bg-surface text-ink-soft hover:border-line-strong hover:text-ink',
        )

        if (onSelect) {
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelect(category.id)}
              className={classes}
              aria-pressed={isActive}
            >
              {content}
            </button>
          )
        }

        return (
          <Link
            key={category.id}
            to={category.path}
            className={classes}
            aria-current={isActive ? 'page' : undefined}
          >
            {content}
          </Link>
        )
      })}
    </div>
  )
}
