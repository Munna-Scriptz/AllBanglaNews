import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { categories, getCategoryCount } from '../../data/publications'
import { cn } from '../../utils/helpers'
import CategoryIcon from './CategoryIcon'

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
          'flex flex-wrap gap-2.5 sm:gap-3',
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
                // Mobile: horizontal compact cards
                'group flex min-h-[64px] min-w-0 flex-[1_1_calc(50%-5px)] items-center gap-2.5 rounded-[10px] border p-2.5 transition-all duration-200',
                // Desktop: original vertical card layout
                'sm:min-h-[126px] sm:flex-[1_1_calc(33.333%-8px)] sm:flex-col sm:items-stretch sm:justify-between sm:p-3.5',
                'md:flex-[1_1_calc(25%-9px)] lg:flex-[1_1_calc(14.285%-11px)]',
                isActive
                  ? 'border-ink bg-ink text-white shadow-card'
                  : 'border-line bg-surface text-ink hover:-translate-y-0.5 hover:border-line-strong hover:shadow-card',
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              <span
                className={cn(
                  'grid h-8 w-8 shrink-0 place-items-center rounded-[6px] transition-colors sm:h-9 sm:w-9',
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'bg-tint text-ink-soft group-hover:text-accent',
                )}
              >
                <CategoryIcon
                  name={category.icon}
                  className="h-4 w-4 sm:h-[17px] sm:w-[17px]"
                />
              </span>

              <span className="min-w-0 flex-1 sm:mt-5 sm:flex-none">
                <span className="block truncate text-[11px] font-semibold leading-[1.25] tracking-[-0.01em] sm:text-[12.5px]">
                  {category.label}
                </span>

                {showCounts && (
                  <span
                    className={cn(
                      'mt-1 block truncate text-[9px] font-medium sm:text-[10.5px]',
                      isActive ? 'text-white/60' : 'text-muted',
                    )}
                  >
                    {count} publications
                  </span>
                )}
              </span>

              {/* Desktop arrow only */}
              <span className="hidden sm:flex sm:items-start sm:justify-end sm:gap-2 sm:self-start sm:absolute sm:right-3.5 sm:top-3.5">
                <ArrowUpRight
                  className={cn(
                    'h-3.5 w-3.5 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5',
                    isActive ? 'text-white/60' : 'text-muted',
                  )}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
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
