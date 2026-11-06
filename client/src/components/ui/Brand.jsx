import { Link } from 'react-router'
import { cn } from '../../utils/helpers'

/**
 * The Kagoj wordmark. `tone="dark"` is for use on charcoal surfaces.
 */
export default function Brand({
  tone = 'light',
  className,
  showTagline = true,
  onClick,
}) {
  const isDark = tone === 'dark'

  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Kagoj — Bangladesh News Directory, home"
      className={cn(
        'group inline-flex shrink-0 items-center gap-2.5 rounded-sm',
        className,
      )}
    >
      <span
        className={cn(
          'grid h-9 w-9 place-items-center rounded-[5px] transition-colors duration-200',
          isDark ? 'bg-paper' : 'bg-ink',
        )}
        aria-hidden="true"
      >
        <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none">
          <path
            d="M9 9.5h14M9 15h16M9 20.5h11"
            className={cn(
              'transition-colors duration-200',
              isDark ? 'stroke-ink' : 'stroke-paper',
            )}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="23.5" cy="23" r="2.4" className="fill-accent" />
        </svg>
      </span>

      <span className="flex min-w-0 flex-col justify-center">
        <span
          className={cn(
            'text-[21px] font-semibold leading-none tracking-[-0.055em]',
            isDark ? 'text-white' : 'text-ink',
          )}
        >
          All Bangla Newspapers<span className="text-accent">.</span>
        </span>
        {showTagline && (
          <span
            className={cn(
              'mt-1 hidden text-[8px] font-medium uppercase leading-none tracking-[0.16em] sm:block',
              isDark ? 'text-white/40' : 'text-muted',
            )}
          >
            Bangladesh News Directory
          </span>
        )}
      </span>
    </Link>
  )
}
