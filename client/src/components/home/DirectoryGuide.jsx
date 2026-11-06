import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import {
  categories,
  getCategoryCount,
} from '../../data/publications'

const browseCategories = categories.filter(
  (category) => category.id !== 'all',
)

const steps = [
  {
    title: 'Search by name',
    description:
      'Type a newspaper name in English or Bangla, or search for a category such as e-paper or TV.',
  },
  {
    title: 'Filter by category',
    description:
      'Narrow the complete index to Bangla dailies, online portals, English papers, broadcasters or international titles.',
  },
  {
    title: 'Open the official site',
    description:
      'Every listing links to the publisher’s own website, so you read the news at its original source.',
  },
]

export default function DirectoryGuide() {
  return (
    <section
      className="border-t border-line bg-surface py-12 md:py-16"
      aria-labelledby="directory-guide-heading"
    >
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="min-w-0">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              About the directory
            </p>

            <h2
              id="directory-guide-heading"
              className="mt-3 text-[26px] font-semibold leading-[1.15] tracking-[-0.04em] text-ink sm:text-[32px]"
            >
              A complete Bangladesh newspaper list, organised for readers
            </h2>

            <div className="mt-5 space-y-4">
              <p className="max-w-2xl text-[13px] leading-[1.8] text-ink-soft/90 sm:text-[13.5px] sm:leading-7">
                All Bangla Newspapers is an independent directory of
                Bangladeshi media. It brings together Bangla newspapers, online
                news portals, e-papers, English-language dailies, television
                channels and international publications in one searchable
                index.
              </p>
              <p className="max-w-2xl text-[13px] leading-[1.8] text-ink-soft/90 sm:text-[13.5px] sm:leading-7">
                You can search by publication name in English or Bangla, filter
                by category, and open any listing directly on the
                publisher&apos;s official website. The directory does not host
                news articles and is not affiliated with the publications
                listed.
              </p>
              <p className="max-w-2xl text-[13px] leading-[1.8] text-ink-soft/90 sm:text-[13.5px] sm:leading-7">
                Whether you are looking for a specific Bangla daily, today&apos;s
                e-paper, a live TV news channel or an English newspaper from
                Bangladesh, the list is arranged to help you find it without
                noise or unnecessary clicks.
              </p>
            </div>
          </div>

          <div className="min-w-0">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
              Browse Bangladeshi newspapers by category
            </h3>

            <ul className="mt-3 divide-y divide-line border-y border-line">
              {browseCategories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={category.path}
                    className="group flex items-start justify-between gap-4 py-3 transition-colors hover:text-accent"
                  >
                    <span className="min-w-0">
                      <span className="block text-[12.5px] font-medium leading-5 text-ink transition-colors group-hover:text-accent">
                        {category.label}
                      </span>
                      <span className="mt-0.5 block text-[11px] leading-4 text-muted">
                        {category.description}
                      </span>
                    </span>
                    <span className="flex shrink-0 items-center gap-1.5 pt-0.5 text-[10px] font-medium tabular-nums text-muted">
                      {getCategoryCount(category.id)}
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
              How to use the directory
            </h3>

            <ol className="mt-4 space-y-4">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-3">
                  <span
                    className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-line-strong text-[10px] font-semibold tabular-nums text-ink-soft"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[12.5px] font-medium leading-5 text-ink">
                      {step.title}
                    </span>
                    <span className="mt-0.5 block text-[11.5px] leading-5 text-muted">
                      {step.description}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <p className="mt-10 max-w-3xl border-t border-line pt-5 text-[11.5px] leading-5 text-muted">
          All Bangla Newspapers is reader-first and independent. All
          trademarks, names and logos belong to their respective publishers.
          Every listing opens an external website in a new tab.
        </p>
      </div>
    </section>
  )
}
