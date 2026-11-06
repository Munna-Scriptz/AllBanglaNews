import { SearchX } from 'lucide-react'

export default function EmptyState({
  title = 'No publications found',
  description = 'Try a different name, language or category.',
  actionLabel,
  onAction,
}) {
  return (
    <div
      role="status"
      className="flex flex-col items-center justify-center rounded-[10px] border border-dashed border-line-strong bg-surface/70 px-6 py-16 text-center"
    >
      <span className="grid h-11 w-11 place-items-center rounded-full border border-line bg-paper text-muted">
        <SearchX className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-[16px] font-semibold tracking-[-0.02em] text-ink">
        {title}
      </h3>
      <p className="mt-1.5 max-w-sm text-[13px] leading-6 text-muted">
        {description}
      </p>
      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-5 rounded-[7px] border border-line-strong bg-surface px-4 py-2 text-[12.5px] font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
        >
          {actionLabel}
        </button>
      )}
    </div>
  )
}
