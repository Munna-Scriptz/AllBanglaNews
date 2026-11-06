import { ArrowUpRight } from 'lucide-react'
import { getCategory } from '../../data/publications'
import { cn } from '../../utils/helpers'
import PublicationLogo from './PublicationLogo'

export default function NewspaperCard({
  publication,
  featured = false,
  metaLabel,
  eager = false,
  className,
}) {
  const category = getCategory(publication.category)
  const label = metaLabel ?? category.shortLabel

  return (

    <a
      href={publication.website}
      target="_blank"
      rel="noopener noreferrer"
      title={`${publication.name} — ${publication.description}`}
      aria-label={`${publication.name}, ${category.label} — opens the official website in a new tab`}
      className={cn(
        'group relative flex h-full min-h-[100px] flex-col overflow-hidden rounded-[10px] border border-line bg-surface p-3 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lift focus-visible:-translate-y-0.5 focus-visible:border-ink focus-visible:shadow-lift sm:min-h-[176px] sm:p-4',
        className,
      )}
    >
      {featured && (
        <span
          className="absolute inset-x-3 top-0 h-[2px] bg-accent sm:inset-x-4"
          aria-hidden="true"
        />
      )}

      {/* Mobile: Logo and name in one row | Desktop: Original layout */}
      <div className="flex min-w-0 items-center gap-3 sm:items-start sm:justify-between">
        <PublicationLogo
          publication={publication}
          eager={eager}
          className="h-10 w-10 shrink-0 sm:h-12 sm:w-12"
        />

        <div className="min-w-0 flex-1 sm:hidden">
          <h3 className="line-clamp-2 text-[12px] font-semibold leading-[1.3] tracking-[-0.015em] text-ink">
            {publication.name}
          </h3>

          {publication.banglaName && (
            <p
              lang="bn"
              className="mt-0.5 truncate text-[10.5px] leading-5 text-muted/90"
            >
              {publication.banglaName}
            </p>
          )}
        </div>

        <span className="hidden h-6 w-6 shrink-0 place-items-center rounded-md text-muted/50 transition-colors duration-200 group-hover:text-accent sm:grid">
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.9}
            aria-hidden="true"
          />
        </span>
      </div>

      {/* Desktop title */}
      <div className="mt-3.5 hidden min-w-0 sm:block">
        <h3 className="line-clamp-2 min-h-[34px] text-[14.5px] font-semibold leading-[1.25] tracking-[-0.015em] text-ink">
          {publication.name}
        </h3>

        {publication.banglaName && (
          <p
            lang="bn"
            className="mt-0.5 truncate text-[11.5px] leading-5 text-muted/90"
          >
            {publication.banglaName}
          </p>
        )}
      </div>

      <div className="mt-auto pt-3 sm:pt-3.5">
        <div className="flex items-center justify-between gap-2 border-t border-line/80 pt-2.5">
          <span className="truncate text-[9px] font-semibold uppercase tracking-[0.08em] text-muted sm:text-[9.5px] sm:tracking-[0.1em]">
            {label}
          </span>

          <span className="shrink-0 text-[9px] font-medium text-muted/80 sm:text-[10px]">
            {publication.language}
          </span>
        </div>
      </div>
    </a>

  )
}
