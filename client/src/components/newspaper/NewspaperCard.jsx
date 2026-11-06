import { ArrowUpRight } from 'lucide-react'
import { getCategory } from '../../data/publications'
import { cn } from '../../utils/helpers'
import PublicationLogo from './PublicationLogo'

/**
 * A single directory listing. The whole card is a safe external link.
 */
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
        'group relative flex h-full min-h-[164px] flex-col overflow-hidden rounded-[10px] border border-line bg-surface p-3.5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lift focus-visible:-translate-y-0.5 focus-visible:border-ink focus-visible:shadow-lift sm:min-h-[176px] sm:p-4',
        className,
      )}
    >
      {featured && (
        <span
          className="absolute inset-x-4 top-0 h-[2px] bg-accent"
          aria-hidden="true"
        />
      )}

      <div className="flex items-start justify-between gap-2">
        <PublicationLogo
          publication={publication}
          eager={eager}
          className="h-11 w-11 sm:h-12 sm:w-12"
        />
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md text-muted/50 transition-colors duration-200 group-hover:text-accent">
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.9}
            aria-hidden="true"
          />
        </span>
      </div>

      <div className="mt-3.5 min-w-0">
        <h3 className="line-clamp-2 min-h-[34px] text-[13.5px] font-semibold leading-[1.25] tracking-[-0.015em] text-ink sm:text-[14.5px]">
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

      <div className="mt-auto pt-3.5">
        <div className="flex items-center justify-between gap-2 border-t border-line/80 pt-2.5">
          <span className="truncate text-[9.5px] font-semibold uppercase tracking-[0.1em] text-muted">
            {label}
          </span>
          <span className="shrink-0 text-[10px] font-medium text-muted/80">
            {publication.language}
          </span>
        </div>
      </div>
    </a>
  )
}
