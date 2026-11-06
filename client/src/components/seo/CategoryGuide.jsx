import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { categoryContent } from '../../data/categoryContent'
import { getCategory, getCategoryCount } from '../../data/publications'

export default function CategoryGuide({ categoryId }) {
  const content = categoryContent[categoryId]
  const category = getCategory(categoryId)
  const count = getCategoryCount(categoryId)

  if (!content) return null

  return (
    <section
      className="border-b border-line bg-paper py-7 md:py-11"
      aria-labelledby={`${categoryId}-guide-heading`}
    >
      <div className="shell grid gap-7 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
        <div className="min-w-0">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            About this list
          </p>

          <h2
            id={`${categoryId}-guide-heading`}
            className="mt-3 text-[22px] font-semibold leading-[1.18] tracking-[-0.035em] text-ink sm:text-[26px]"
          >
            {content.heading}
          </h2>

          <div className="mt-4 space-y-3">
            {content.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="max-w-3xl text-[13px] leading-[1.75] text-ink-soft/90 sm:text-[13.5px] sm:leading-7"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <p className="mt-4 text-[11px] font-medium text-muted">
            {count} {category.countLabel} in this list, each linking to the
            publisher&apos;s official website.
          </p>
        </div>

        <aside className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
              What you&apos;ll find
            </h3>
            <ul className="mt-3 space-y-2">
              {content.highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-[12px] leading-5 text-ink-soft/90"
                >
                  <span
                    className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
              Related lists
            </h3>
            <ul className="mt-3 space-y-2.5">
              {content.related.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group block rounded-sm border-b border-line pb-2.5 transition-colors last:border-b-0 last:pb-0 hover:border-line-strong"
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span className="min-w-0">
                        <span className="block text-[12px] font-medium leading-5 text-ink transition-colors group-hover:text-accent">
                          {link.label}
                        </span>
                        <span className="mt-0.5 block text-[11px] leading-4 text-muted">
                          {link.description}
                        </span>
                      </span>
                      <ArrowRight
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted/50 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}
