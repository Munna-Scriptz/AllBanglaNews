import { Link } from 'react-router'

export default function NotFound() {
  return (
    <section className="shell flex min-h-[58vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">
        <span className="eyebrow-dot" aria-hidden="true" />
        Error 404
      </p>
      <h1 className="mt-4 text-[40px] font-semibold leading-none tracking-[-0.05em] text-ink sm:text-[52px]">
        Page not found.
      </h1>
      <p className="mt-4 max-w-md text-[13.5px] leading-6 text-muted">
        The page you were looking for isn&apos;t in the directory. Head back to
        the homepage or browse every publication in one place.
      </p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
        <Link
          to="/"
          className="rounded-[7px] bg-ink px-4 py-2.5 text-[12.5px] font-medium text-white transition-colors hover:bg-accent"
        >
          Back to home
        </Link>
        <Link
          to="/#directory"
          className="rounded-[7px] border border-line-strong bg-surface px-4 py-2.5 text-[12.5px] font-medium text-ink transition-colors hover:border-ink"
        >
          Browse the directory
        </Link>
      </div>
    </section>
  )
}
