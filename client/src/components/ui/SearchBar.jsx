import { Search, X } from 'lucide-react'
import { cn } from '../../utils/helpers'

/**
 * Shared search form used in the hero, directory and category pages.
 */
export default function SearchBar({
  value,
  onChange,
  onSubmit,
  placeholder = 'Search newspapers, publications...',
  size = 'default',
  showButton = false,
  buttonLabel = 'Search',
  id = 'publication-search',
  label = 'Search publications',
  autoFocus = false,
  className,
  inputClassName,
}) {
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit?.()
  }

  return (

    <form
      onSubmit={handleSubmit}
      role="search"
      className={cn(
        'flex w-full min-w-0 items-center gap-1 rounded-[9px] border border-line bg-surface p-1.5 pl-3 shadow-card transition-all duration-200 focus-within:border-line-strong focus-within:ring-4 focus-within:ring-accent/5 sm:gap-1.5 sm:rounded-[10px] sm:p-1.5 sm:pl-4',
        size === 'lg' && 'sm:p-2 sm:pl-5',
        className,
      )}
    >
      <Search
        className={cn(
          'h-4 w-4 shrink-0 text-muted sm:h-[18px] sm:w-[18px]',
          size === 'lg' && 'sm:h-5 sm:w-5',
        )}
        strokeWidth={1.8}
        aria-hidden="true"
      />

      <label htmlFor={id} className="sr-only">
        {label}
      </label>

      <input
        id={id}
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        autoComplete="off"
        spellCheck="false"
        className={cn(
          'h-9 min-w-0 flex-1 appearance-none bg-transparent px-1 text-[12px] leading-5 text-ink outline-none placeholder:text-muted [&::-webkit-search-cancel-button]:hidden sm:h-10 sm:text-[13px]',
          size === 'lg' && 'sm:h-11 sm:text-[14px]',
          inputClassName,
        )}
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="grid h-7 w-7 shrink-0 place-items-center rounded-md text-muted transition-colors hover:bg-tint hover:text-ink sm:h-8 sm:w-8"
        >
          <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.8} aria-hidden="true" />
        </button>
      )}

      {showButton && (
        <button
          type="submit"
          className={cn(
            'shrink-0 rounded-[6px] bg-ink px-3 py-2 text-[11px] font-medium text-white transition-colors duration-200 hover:bg-accent sm:rounded-[7px] sm:px-4 sm:py-2.5 sm:text-[12px]',
            size === 'lg' && 'sm:px-5 sm:py-3 sm:text-[13px]',
          )}
        >
          {buttonLabel}
        </button>
      )}
    </form>

  )
}
