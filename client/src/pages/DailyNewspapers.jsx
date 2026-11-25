import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react'
import { Link } from 'react-router'
import PublicationLogo from '../components/newspaper/PublicationLogo'
import { formatVerifiedDate } from '../data/siteInfo'
import {
  DAILY_NEWSPAPERS_LAST_VERIFIED,
  dailyBanglaNewspapers,
  dailyEnglishNewspapers,
  dailyNewspaperComparison,
  dailyNewspaperCriteria,
  dailyNewspaperFaqs,
} from '../data/dailyNewspapers'

const externalLinkClass =
  'inline-flex items-center gap-1 font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent'

const internalLinkClass =
  'font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent'

const exploreLinks = [
  {
    to: '/top-newspapers-in-bangladesh',
    label: 'Top 10 newspapers in Bangladesh',
    description: 'A deeper editorial guide with founding dates and publishers.',
  },
  {
    to: '/bangla-newspapers',
    label: 'All Bangla newspapers',
    description: 'The full Bengali-language directory behind this selection.',
  },
  {
    to: '/english-newspapers',
    label: 'All English newspapers',
    description: 'The complete English-language list in the directory.',
  },
  {
    to: '/e-paper',
    label: 'Bangladeshi e-papers',
    description: 'Digital editions, including verified Bangla daily papers.',
  },
]

const NewspaperCard = ({ entry }) => {
  const { publication } = entry

  return (
    <article
      className="rounded-[10px] border border-line bg-surface p-4"
      aria-labelledby={`daily-${entry.id}`}
    >
      <div className="flex items-start gap-3">
        <PublicationLogo
          publication={publication}
          className="h-10 w-[76px] shrink-0 rounded-[5px] border border-line bg-paper p-1"
        />
        <div className="min-w-0 flex-1">
          <h3
            id={`daily-${entry.id}`}
            className="text-[15px] font-semibold leading-tight tracking-[-0.025em] text-ink"
          >
            {publication.name}
          </h3>
          {publication.banglaName && (
            <p lang="bn" className="mt-0.5 text-[12px] leading-5 text-muted">
              {publication.banglaName}
            </p>
          )}
        </div>
        <span className="shrink-0 rounded-full border border-line-strong bg-paper px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
          Daily
        </span>
      </div>

      <p className="mt-3 text-[12.5px] leading-6 text-ink-soft/90">
        {entry.note}
      </p>

      <dl className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[11px] text-muted">
        <div>
          <dt className="inline font-semibold uppercase tracking-[0.1em]">
            Language
          </dt>
          <dd className="ml-1 inline text-ink-soft">{publication.language}</dd>
        </div>
        {entry.established && (
          <div>
            <dt className="inline font-semibold uppercase tracking-[0.1em]">
              Established
            </dt>
            <dd className="ml-1 inline text-ink-soft">
              {entry.established}
            </dd>
          </div>
        )}
      </dl>

      <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-line pt-3">
        <a href={publication.website} target="_blank" rel="noopener noreferrer" className={externalLinkClass}>
          Official website
          <ArrowUpRight className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
          <span className="sr-only">
            {publication.name} official website (opens in a new tab)
          </span>
        </a>
        {entry.wikipedia && (
          <a href={entry.wikipedia} target="_blank" rel="noopener noreferrer" className="text-[11.5px] text-muted underline decoration-line underline-offset-4 transition-colors hover:text-accent">
            Public record
          </a>
        )}
      </div>
    </article>
  )
}

export default function DailyNewspapers() {
  return (
    <>
      <header className="border-b border-line bg-surface">
        <div className="shell py-6 md:py-12">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[11px] font-medium text-muted">
              <li>
                <Link to="/" className="transition-colors hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3 w-3" strokeWidth={1.8} />
              </li>
              <li aria-current="page" className="text-ink-soft">
                Daily newspapers
              </li>
            </ol>
          </nav>

          <p className="eyebrow mt-6">
            <span className="eyebrow-dot" aria-hidden="true" />
            Curated daily newspaper list
          </p>

          <h1 className="mt-3 max-w-3xl text-[34px] font-semibold leading-[1.06] tracking-[-0.05em] text-ink sm:text-[42px] md:text-[48px]">
            Daily Newspapers in Bangladesh
          </h1>

          <p className="mt-4 max-w-3xl text-[13.5px] leading-[1.8] text-ink-soft/90 md:text-[14.5px] md:leading-7">
            This Bangladesh daily newspaper list brings together daily-published
            titles from the directory, separated into a Bangla section and an
            English section. Each entry links to the publisher’s official site;
            the list is curated for finding sources, not for declaring a most
            read paper.
          </p>

          <p className="mt-4 text-[11px] font-medium text-muted">
            Last verified: {formatVerifiedDate(DAILY_NEWSPAPERS_LAST_VERIFIED)} ·
            Curated daily newspapers, not an official ranking
          </p>
        </div>
      </header>

      <section
        className="border-b border-line bg-surface py-10 md:py-14"
        aria-labelledby="bangla-daily-heading"
      >
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2
                id="bangla-daily-heading"
                className="text-[24px] font-semibold leading-[1.15] tracking-[-0.04em] text-ink sm:text-[28px]"
              >
                Bangla daily newspapers
              </h2>
              <p className="mt-2 max-w-2xl text-[12.5px] leading-6 text-muted">
                A daily bangla newspaper list of national titles with broad
                political, economic, regional and cultural reporting.
              </p>
            </div>
            <span className="rounded-full border border-line-strong bg-paper px-3 py-1 text-[11px] font-medium text-ink-soft">
              {dailyBanglaNewspapers.length} Bangla dailies
            </span>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {dailyBanglaNewspapers.map((entry) => (
              <NewspaperCard key={entry.id} entry={entry} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-b border-line bg-paper py-10 md:py-14"
        aria-labelledby="english-daily-heading"
      >
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2
                id="english-daily-heading"
                className="text-[24px] font-semibold leading-[1.15] tracking-[-0.04em] text-ink sm:text-[28px]"
              >
                English daily newspapers
              </h2>
              <p className="mt-2 max-w-2xl text-[12.5px] leading-6 text-muted">
                English dailies from Bangladesh covering national affairs,
                business, policy, culture and international news.
              </p>
            </div>
            <span className="rounded-full border border-line-strong bg-surface px-3 py-1 text-[11px] font-medium text-ink-soft">
              {dailyEnglishNewspapers.length} English dailies
            </span>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {dailyEnglishNewspapers.map((entry) => (
              <NewspaperCard key={entry.id} entry={entry} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-b border-line bg-surface py-10 md:py-14"
        aria-labelledby="daily-compare-heading"
      >
        <div className="shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <h2
              id="daily-compare-heading"
              className="text-[24px] font-semibold leading-[1.15] tracking-[-0.04em] text-ink sm:text-[28px]"
            >
              Bangla and English dailies compared
            </h2>
            <p className="mt-2 max-w-2xl text-[12.5px] leading-6 text-muted">
              Both language groups publish daily newspapers in Bangladesh. The
              useful difference is the depth of local reporting, the section
              mix and how the edition is delivered.
            </p>

            <dl className="mt-6 space-y-4">
              {dailyNewspaperComparison.map((factor) => (
                <div key={factor.title} className="border-t border-line pt-4">
                  <dt className="text-[13px] font-semibold text-ink">
                    {factor.title}
                  </dt>
                  <dd className="mt-1 text-[12.5px] leading-6 text-ink-soft/90">
                    {factor.description}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-4 text-[12px] leading-6 text-muted">
              Search wording varies: readers look for a daily newspaper bd, a
              daily online newspaper in Bangladesh or an all Bangladeshi daily
              newspaper. The task is the same — find a paper that publishes
              every day and reach its official edition. For a daily bangla
              newspaper online, the publisher’s site gives the fastest updates;
              for a daily bangla newspaper today in page form, use a verified
              e-paper.
            </p>
          </div>

          <aside className="rounded-[10px] border border-line bg-paper p-5">
            <h3 className="text-[13px] font-semibold text-ink">
              Choosing a daily newspaper
            </h3>
            <ul className="mt-3 space-y-3 text-[12.5px] leading-6 text-ink-soft/90">
              <li>
                Read in the language you use most. A Bangla daily usually has
                more district reporting; an English daily is easier to share
                abroad.
              </li>
              <li>
                Compare the sections you actually follow, such as business,
                sport, law, education or opinion, before settling on one title.
              </li>
              <li>
                Use a verified e-paper when you want the printed page. Use the
                website when you want faster updates and searchable stories.
              </li>
              <li>
                Read two papers from different owners so one editorial view does
                not become your only view of the day’s news.
              </li>
            </ul>
          </aside>
        </div>
      </section>

<section
        className="border-b border-line bg-paper py-9 md:py-12"
        aria-labelledby="daily-criteria-heading"
      >
        <div className="shell">
          <h2
            id="daily-criteria-heading"
            className="text-[22px] font-semibold leading-[1.18] tracking-[-0.035em] text-ink sm:text-[26px]"
          >
            How this daily newspaper list is curated
          </h2>
          <p className="mt-2 max-w-2xl text-[12.5px] leading-6 text-muted">
            Inclusion is based on the directory’s verified publication records.
            Search demand shaped the wording of this page, not the selection or
            the order.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {dailyNewspaperCriteria.map((criterion) => (
              <div
                key={criterion.title}
                className="rounded-[10px] border border-line bg-surface p-4"
              >
                <h3 className="text-[13px] font-semibold text-ink">
                  {criterion.title}
                </h3>
                <p className="mt-2 text-[11.5px] leading-5 text-ink-soft/90">
                  {criterion.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section
        className="border-b border-line bg-surface py-10 md:py-14"
        aria-labelledby="daily-faq-heading"
      >
        <div className="shell grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
          <div>
            <h2
              id="daily-faq-heading"
              className="text-[24px] font-semibold leading-[1.15] tracking-[-0.04em] text-ink sm:text-[28px]"
            >
              Daily newspaper questions
            </h2>
            <p className="mt-2 text-[12.5px] leading-6 text-muted">
              Short answers about this curated Bangladesh daily newspaper list.
            </p>
          </div>

          <div className="divide-y divide-line border-y border-line">
            {dailyNewspaperFaqs.map((faq) => (
              <details key={faq.question} className="group py-3.5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[13px] font-medium text-ink transition-colors group-hover:text-accent">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="mt-0.5 text-[16px] leading-none text-muted transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-2 max-w-2xl pr-6 text-[12.5px] leading-6 text-ink-soft/90">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14" aria-labelledby="daily-explore-heading">
        <div className="shell">
          <h2
            id="daily-explore-heading"
            className="text-[22px] font-semibold leading-[1.18] tracking-[-0.035em] text-ink sm:text-[26px]"
          >
            Explore more newspaper lists
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {exploreLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group rounded-[10px] border border-line bg-surface p-4 transition-colors hover:border-line-strong"
              >
                <span className="flex items-start justify-between gap-2">
                  <span className="text-[13px] font-semibold text-ink transition-colors group-hover:text-accent">
                    {link.label}
                  </span>
                  <ArrowRight
                    className="h-3.5 w-3.5 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </span>
                <span className="mt-1.5 block text-[11.5px] leading-5 text-muted">
                  {link.description}
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-6 text-[12px] leading-6 text-muted">
            Corrections are welcome through the{' '}
            <Link to="/contact" className={internalLinkClass}>
              contact page
            </Link>
            . Publisher names and logos belong to their respective owners.
          </p>
        </div>
      </section>
    </>
  )
}
