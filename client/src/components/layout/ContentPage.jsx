import { formatVerifiedDate } from '../../data/siteInfo'

/**
 * Shared layout for editorial and policy pages. Keeping the title and intro
 * here gives every static page one H1 and a consistent reading width.
 */
export default function ContentPage({
  eyebrow = 'About the directory',
  title,
  intro,
  showVerified = true,
  children,
}) {
  return (
    <>
      <header className="border-b border-line bg-surface">
        <div className="shell py-8 md:py-12">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl text-[34px] font-semibold leading-[1.06] tracking-[-0.05em] text-ink sm:text-[42px] md:text-[48px]">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-[13.5px] leading-[1.8] text-ink-soft/90 md:text-[14.5px] md:leading-7">
            {intro}
          </p>
          {showVerified && (
            <p className="mt-4 text-[11px] font-medium text-muted">
              Last verified: {formatVerifiedDate()}
            </p>
          )}
        </div>
      </header>

      <section className="shell py-10 md:py-14">
        <div className="max-w-3xl space-y-6 text-[13.5px] leading-[1.85] text-ink-soft sm:text-[14px] sm:leading-7">
          {children}
        </div>
      </section>
    </>
  )
}
