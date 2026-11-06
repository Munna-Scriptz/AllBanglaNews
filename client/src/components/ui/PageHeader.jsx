import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router'

export default function PageHeader({
  title,
  description,
  category,
  count,
  countLabel,
}) {
  return (
    <header className="border-b border-line bg-surface">
      <div className="shell py-9 md:py-14">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-[11.5px] font-medium text-muted">
            <li>
              <Link
                to="/"
                className="transition-colors hover:text-ink"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.8} />
            </li>
            <li aria-current="page" className="text-ink-soft">
              {title}
            </li>
          </ol>
        </nav>

        <div className="mt-7 grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Kagoj directory
            </p>
            <h1 className="mt-3 text-[36px] font-semibold leading-[1.04] tracking-[-0.045em] text-ink sm:text-[44px] md:text-[50px]">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-[14.5px] leading-7 text-ink-soft/90">
              {description}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11.5px] font-medium text-muted">
              <span className="text-ink-soft">
                {count} {countLabel}
              </span>
              {category?.meta && (
                <>
                  <span aria-hidden="true" className="text-line-strong">
                    /
                  </span>
                  <span>{category.meta}</span>
                </>
              )}
              <span aria-hidden="true" className="text-line-strong">
                /
              </span>
              <span>Links open the publisher's website</span>
            </div>
          </div>

          <div
            className="hidden select-none flex-col items-end border-line md:flex md:border-l md:pl-12"
            aria-hidden="true"
          >
            <span className="text-[80px] font-semibold leading-none tracking-[-0.075em] text-ink/10">
              {String(count).padStart(2, '0')}
            </span>
            <span className="mt-2 text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
              {countLabel}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
