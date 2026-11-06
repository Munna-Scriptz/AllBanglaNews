import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { cn } from '../../utils/helpers'

export default function SectionHeader({
  eyebrow,
  title,
  description,
  href,
  linkLabel = 'View all',
  className,
  id,
}) {
  return (
    <div
      id={id}
      className={cn(
        'flex flex-col gap-5 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-10',
        className,
      )}
    >
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            {eyebrow}
          </p>
        )}
        <h2 className="mt-3 text-[26px] font-semibold leading-[1.12] tracking-[-0.035em] text-ink sm:text-[30px]">
          {title}
        </h2>
        {description && (
          <p className="mt-2.5 text-[14px] leading-6 text-ink-soft/90">
            {description}
          </p>
        )}
      </div>

      {href && (
        <Link
          to={href}
          className="group inline-flex shrink-0 items-center gap-2 self-start rounded-sm text-[12.5px] font-medium text-ink-soft transition-colors hover:text-accent sm:self-auto"
        >
          {linkLabel}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </Link>
      )}
    </div>
  )
}
