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
        'flex flex-col gap-3 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:pb-6',
        className,
      )}
    >
      <div className="min-w-0 max-w-2xl">
        {eyebrow && (
          <p className="eyebrow hidden xl:flex">
            <span className="eyebrow-dot" aria-hidden="true" />
            {eyebrow}
          </p>
        )}

        <h2 className="text-[20px] mt-3 font-semibold leading-[1.15] tracking-[-0.04em] text-ink min-[480px]:text-[25px] sm:text-[30px]">
          {title}
        </h2>

        {description && (
          <p className="mt-2 max-w-xl text-[11px] leading-[1.7] text-ink-soft/85 min-[480px]:text-[13px] sm:mt-2.5 sm:text-[14px] sm:leading-6">
            {description}
          </p>
        )}
      </div>

      {href && (
        <Link
          to={href}
          className="group inline-flex w-fit shrink-0 items-center gap-1.5 rounded-sm py-1 text-[11.5px] font-medium text-ink-soft transition-colors hover:text-accent sm:mb-0.5 sm:text-[12.5px]"
        >
          {linkLabel}
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 sm:h-4 sm:w-4"
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </Link>
      )}
    </div>

  )
}
