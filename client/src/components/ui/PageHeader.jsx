import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router'

export default function PageHeader({
  title,
  description,
  category,
  count,
  countLabel,
  parent,
}) {
  return (
    <header className="border-b border-line bg-surface">
      <div className="shell py-7 md:py-12">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-[11px] font-medium text-muted">
            <li>
              <Link to="/" className="transition-colors hover:text-ink">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3 w-3" strokeWidth={1.8} />
            </li>
            {parent && (
              <>
                <li>
                  <Link
                    to={parent.to}
                    className="transition-colors hover:text-ink"
                  >
                    {parent.label}
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3 w-3" strokeWidth={1.8} />
                </li>
              </>
            )}
            <li aria-current="page" className="text-ink-soft">
              {title}
            </li>
          </ol>
        </nav>

        <div className="mt-6 flex flex-col gap-6 md:mt-9 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0 flex-1">
            <p className="eyebrow hidden xl:flex">
              <span className="eyebrow-dot" aria-hidden="true" />
              News directory
            </p>

            <h1 className="xl:mt-3 text-[34px] font-semibold leading-[1.06] tracking-[-0.05em] text-ink sm:text-[42px] md:text-[50px]">
              {title}
            </h1>

            <p className="mt-3 max-w-2xl text-[13.5px] leading-[1.8] text-ink-soft/90 md:mt-4 md:text-[14.5px] md:leading-7">
              {description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[11px] font-medium text-muted md:mt-5 md:gap-x-2.5 md:text-[11.5px]">
              <span className="text-ink-soft">
                {count} {countLabel}
              </span>

              {category?.meta && (
                <>
                  <span aria-hidden="true" className="text-line-strong">/</span>
                  <span>{category.meta}</span>
                </>
              )}

              <span aria-hidden="true" className="text-line-strong">/</span>
              <span>Links open the publisher's website</span>
            </div>
          </div>

          <div
            className="hidden shrink-0 flex-col items-end border-l border-line pl-8 md:flex lg:pl-12"
            aria-hidden="true"
          >
            <span className="text-[68px] font-semibold leading-[0.9] tracking-[-0.075em] text-ink/10 lg:text-[80px]">
              {String(count).padStart(2, '0')}
            </span>
            <span className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
              {countLabel}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
