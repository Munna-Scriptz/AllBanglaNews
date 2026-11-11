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
        'group relative flex h-full min-h-[188px] flex-col overflow-hidden rounded-[10px] border border-line bg-surface p-2.5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lift focus-visible:-translate-y-0.5 focus-visible:border-ink focus-visible:shadow-lift sm:min-h-[214px] sm:p-3.5',
        className,
      )}
    >
      {/* Newspaper background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.16] transition-opacity duration-300 group-hover:opacity-[0.25]"
        style={{
          backgroundImage: `
        linear-gradient(
          135deg,
          rgba(10, 10, 10, 0.78),
          rgba(10, 10, 10, 0.45)
        ),
          url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=85')      `,
        }}
      />

      {/* Subtle surface overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-surface/40 via-transparent to-surface/80"
      />

      {/* Featured accent */}
      {featured && (
        <span
          className="absolute inset-x-2.5 top-0 z-10 h-[2px] bg-accent sm:inset-x-3.5"
          aria-hidden="true"
        />
      )}

      {/* Publication wordmark */}
      <PublicationLogo
        publication={publication}
        eager={eager}
        className="h-[64px] w-full rounded-[7px] sm:h-[82px]"
        imageClassName="p-2 sm:p-2.5"
      />

      {/* Name and local-language label */}
      <div className="relative z-[1] mt-2.5 min-w-0 sm:mt-3">
        <h3 className="line-clamp-2 min-h-[32px] text-[12px] font-semibold leading-[1.3] tracking-[-0.015em] text-ink sm:min-h-[35px] sm:text-[14px] sm:leading-[1.25]">
          {publication.name}
        </h3>

        {publication.banglaName && (
          <p
            lang="bn"
            className="mt-0.5 truncate text-[10.5px] leading-5 text-muted/90 sm:text-[11.5px]"
          >
            {publication.banglaName}
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="relative z-[1] mt-auto pt-2.5 sm:pt-3">
        <div className="flex items-center justify-between gap-2 border-t border-line/80 pt-2.5">
          <span className="truncate text-[9px] font-semibold uppercase tracking-[0.08em] text-muted sm:text-[9.5px] sm:tracking-[0.1em]">
            {label}
          </span>

          <span className="flex shrink-0 items-center gap-1.5 text-[9px] font-medium text-muted/80 sm:text-[10px]">
            {publication.language}
            <ArrowUpRight
              className="h-3 w-3 text-muted/45 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              strokeWidth={1.9}
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </a>
  )
}
