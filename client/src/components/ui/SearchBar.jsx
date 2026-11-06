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
        'flex w-full items-center gap-1.5 rounded-[10px] border border-line bg-surface p-1.5 pl-4 shadow-card transition-shadow duration-200 focus-within:border-line-strong focus-within:ring-4 focus-within:ring-accent/5',
        size === 'lg' && 'p-2 pl-5',
        className,
      )}
    >
      <Search
        className={cn(
          'h-[18px] w-[18px] shrink-0 text-muted',
          size === 'lg' && 'h-5 w-5',
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
          'min-w-0 flex-1 appearance-none bg-transparent py-2.5 text-[14px] leading-5 text-ink outline-none placeholder:text-muted/90 [&::-webkit-search-cancel-button]:hidden',
          size === 'lg' && 'py-3 text-[15px]',
          inputClassName,
        )}
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="grid h-8 w-8 shrink-0 place-items-center rounded-md text-muted transition-colors hover:bg-tint hover:text-ink"
        >
          <X className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
        </button>
      )}

      {showButton && (
        <button
          type="submit"
          className={cn(
            'shrink-0 rounded-[7px] bg-ink px-4 py-2.5 text-[13px] font-medium text-white transition-colors duration-200 hover:bg-accent',
            size === 'lg' && 'px-5 py-3 text-[13.5px]',
          )}
        >
          {buttonLabel}
        </button>
      )}
    </form>
  )
}
