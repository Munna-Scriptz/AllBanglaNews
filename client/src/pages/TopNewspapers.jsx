import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react'
import { Link } from 'react-router'
import PublicationLogo from '../components/newspaper/PublicationLogo'
import { formatVerifiedDate } from '../data/siteInfo'
import {
  TOP_NEWSPAPERS_LAST_VERIFIED,
  choosingFactors,
  comparisonFactors,
  rankingFactors,
  topNewspaperFaqs,
  topNewspapers,
} from '../data/topNewspapers'

const externalLinkClass =
  'inline-flex items-center gap-1 font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent'

const internalLinkClass =
  'font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent'

const exploreLinks = [
  {
    to: '/',
    label: 'Complete newspaper directory',
    description: 'Every publication and media outlet in one searchable index.',
  },
  {
    to: '/bangla-newspapers',
    label: 'All Bangla newspapers',
    description: 'The full Bengali-language list behind this selection.',
  },
  {
    to: '/english-newspapers',
    label: 'English newspapers in Bangladesh',
    description: 'English-language dailies, weeklies and business papers.',
  },
  {
    to: '/e-paper',
    label: 'Bangladeshi e-papers',
    description: 'Digital editions, including the four verified on this page.',
  },
]

export default function TopNewspapers() {
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
                Top 10 newspapers
              </li>
            </ol>
          </nav>

          <p className="eyebrow mt-6">
            <span className="eyebrow-dot" aria-hidden="true" />
            Editorial guide
          </p>

          <h1 className="mt-3 max-w-3xl text-[34px] font-semibold leading-[1.06] tracking-[-0.05em] text-ink sm:text-[42px] md:text-[48px]">
            Top 10 Newspapers in Bangladesh
          </h1>

          <p className="mt-4 max-w-3xl text-[13.5px] leading-[1.8] text-ink-soft/90 md:text-[14.5px] md:leading-7">
            Bangladesh publishes hundreds of newspapers, and the national dailies
            carry most of the political, economic and regional reporting that
            readers follow each morning. This guide narrows the field to ten
            notable national titles, Bangla and English, with their founding
            dates, publishers, coverage areas and official websites. Every
            detail was checked against the publisher’s own site or a public
            record.
          </p>

          <p className="mt-4 text-[11px] font-medium text-muted">
            Last verified: {formatVerifiedDate(TOP_NEWSPAPERS_LAST_VERIFIED)} ·
            Editorially curated selection, not an official ranking
          </p>
        </div>
      </header>

      <section
        className="border-b border-line bg-surface py-10 md:py-14"
        aria-labelledby="comparison-heading"
      >
        <div className="shell">
          <h2
            id="comparison-heading"
            className="text-[24px] font-semibold leading-[1.15] tracking-[-0.04em] text-ink sm:text-[28px]"
          >
            Quick comparison
          </h2>
          <p className="mt-2 max-w-2xl text-[12.5px] leading-6 text-muted">
            Rank, language, year of first publication and the official website
            for each newspaper. Links open the publisher’s own site in a new
            tab.
          </p>

          <div className="mt-6 -mx-1 overflow-x-auto px-1">
            <table className="w-full min-w-[660px] border-collapse text-left">
              <caption className="sr-only">
                The ten newspapers in this guide with their rank, language, year
                established and official website
              </caption>
              <thead>
                <tr className="border-y border-line-strong bg-paper">
                  <th
                    scope="col"
                    className="px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted"
                  >
                    Rank
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted"
                  >
                    Newspaper
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted"
                  >
                    Language
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted"
                  >
                    Established
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted"
                  >
                    Official website
                  </th>
                </tr>
              </thead>
              <tbody>
                {topNewspapers.map((entry) => (
                  <tr
                    key={entry.publicationId}
                    className="border-b border-line align-top last:border-b-0"
                  >
                    <th
                      scope="row"
                      className="px-3 py-3 text-[12px] font-semibold tabular-nums text-ink-soft"
                    >
                      {entry.rank}
                    </th>
                    <td className="px-3 py-3 text-[12.5px] font-medium text-ink">
                      {entry.displayName}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-[12px] text-ink-soft">
                      {entry.publication.language}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-[12px] tabular-nums text-ink-soft">
                      {entry.established}
                    </td>
                    <td className="px-3 py-3 text-[12px]">
                      <a
                        href={entry.publication.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent"
                      >
                        Visit site
                        <ArrowUpRight
                          className="h-3 w-3"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                        <span className="sr-only">
                          {entry.displayName} official website (opens in a new
                          tab)
                        </span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-2 text-[11px] text-muted sm:hidden">
            Scroll the table sideways to see every column.
          </p>
        </div>
      </section>

      <section
        className="border-b border-line bg-paper py-10 md:py-14"
        aria-labelledby="newspapers-heading"
      >
        <div className="shell">
          <h2
            id="newspapers-heading"
            className="text-[24px] font-semibold leading-[1.15] tracking-[-0.04em] text-ink sm:text-[28px]"
          >
            The ten newspapers, one by one
          </h2>
          <p className="mt-2 max-w-2xl text-[12.5px] leading-6 text-muted">
            Founding dates, publishers and coverage areas come from each
            publisher’s website and its public encyclopaedia entry. E-paper
            links are included only where the edition was reachable.
          </p>

          <div className="mt-8 space-y-8 md:space-y-10">
            {topNewspapers.map((entry) => {
              const { publication } = entry

              return (
                <article
                  key={entry.publicationId}
                  className="border-t border-line pt-7 first:border-t-0 first:pt-0 sm:pt-8"
                  aria-labelledby={`newspaper-${entry.publicationId}`}
                >

                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                    <div className="flex min-w-0 items-center gap-3 sm:contents">
                      <span
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-accent bg-accent/90 text-[12px] font-bold tabular-nums text-white shadow-sm"
                        aria-hidden="true"
                      >
                        {String(entry.rank).padStart(2, '0')}
                      </span>

                      <PublicationLogo
                        publication={publication}
                        className="h-10 w-[76px] shrink-0 sm:h-12 sm:w-[100px]"
                      />

                      <div className="min-w-0 flex-1">
                        <h3
                          id={`newspaper-${entry.publicationId}`}
                          className="text-[17px] font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-[21px]"
                        >
                          {entry.displayName}
                        </h3>

                        {publication.banglaName && (
                          <p
                            lang="bn"
                            className="mt-0.5 text-[12px] leading-5 text-muted sm:text-[13px]"
                          >
                            {publication.banglaName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-end sm:ml-auto">
                      <span className="rounded-full border border-line-strong bg-surface px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-ink-soft">
                        {publication.language}
                      </span>
                    </div>
                  </div>


                  <dl className="mt-4 grid gap-x-6 gap-y-2 text-[11.5px] leading-5 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <dt className="font-semibold uppercase tracking-[0.12em] text-muted text-[9.5px]">
                        Established
                      </dt>
                      <dd className="mt-0.5 text-ink-soft">
                        {entry.established} · {entry.establishedDetail}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold uppercase tracking-[0.12em] text-muted text-[9.5px]">
                        Publisher
                      </dt>
                      <dd className="mt-0.5 text-ink-soft">{entry.publisher}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold uppercase tracking-[0.12em] text-muted text-[9.5px]">
                        Organisation
                      </dt>
                      <dd className="mt-0.5 text-ink-soft">
                        {entry.organisation}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold uppercase tracking-[0.12em] text-muted text-[9.5px]">
                        Headquarters
                      </dt>
                      <dd className="mt-0.5 text-ink-soft">
                        {entry.headquarters}
                      </dd>
                    </div>
                  </dl>

                  <p className="mt-4 max-w-3xl text-[13px] leading-[1.8] text-ink-soft/90 sm:text-[13.5px] sm:leading-7">
                    {entry.summary}
                  </p>

                  <div className="mt-3.5">
                    <h4 className="text-[9.5px] font-semibold uppercase tracking-[0.12em] text-muted">
                      Coverage areas
                    </h4>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {entry.coverage.map((area) => (
                        <li
                          key={area}
                          className="rounded-full border border-line bg-surface px-2.5 py-1 text-[10.5px] leading-4 text-ink-soft"
                        >
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[11.5px] text-muted">
                    <a
                      href={publication.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={externalLinkClass}
                    >
                      Official website
                      <ArrowUpRight
                        className="h-3 w-3"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </a>
                    {entry.epaper.url ? (
                      <a
                        href={entry.epaper.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={externalLinkClass}
                      >
                        {entry.epaper.label}
                        <ArrowUpRight
                          className="h-3 w-3"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      </a>
                    ) : (
                      <span>{entry.epaper.note}</span>
                    )}
                    <a
                      href={entry.wikipedia}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={externalLinkClass}
                    >
                      Reference entry
                      <ArrowUpRight
                        className="h-3 w-3"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </a>
                  </p>

                  {entry.epaper.url && (
                    <p className="mt-2 text-[10.5px] text-muted">
                      {entry.epaper.note}
                    </p>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section
        className="border-b border-line bg-surface py-10 md:py-14"
        aria-labelledby="language-heading"
      >
        <div className="shell">
          <h2
            id="language-heading"
            className="text-[24px] font-semibold leading-[1.15] tracking-[-0.04em] text-ink sm:text-[28px]"
          >
            Bangla and English newspapers compared
          </h2>
          <p className="mt-2 max-w-3xl text-[13px] leading-[1.8] text-ink-soft/90 sm:text-[13.5px] sm:leading-7">
            Nine of the ten papers here publish in Bangla and one publishes in
            English, which mirrors the market: Bengali titles dominate the print
            run, while English titles serve a smaller but influential readership.
            Both groups are part of the same press industry, and several
            companies own papers in each language.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[10px] border border-line bg-paper p-5">
              <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-ink">
                Bangla newspapers
              </h3>
              <p className="mt-2 text-[12.5px] leading-6 text-ink-soft/90">
                Published in Bengali for readers across Bangladesh, with wider
                district coverage, more regional pages and a larger share of the
                national print readership. Most of the titles in this list belong
                to this group.
              </p>
              <Link
                to="/bangla-newspapers"
                className="group mt-4 inline-flex items-center gap-1.5 text-[12px] font-medium text-ink transition-colors hover:text-accent"
              >
                Browse Bangla newspapers
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </Link>
            </div>

            <div className="rounded-[10px] border border-line bg-paper p-5">
              <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-ink">
                English newspapers
              </h3>
              <p className="mt-2 text-[12.5px] leading-6 text-ink-soft/90">
                Published in English for professionals, researchers, diplomats
                and international readers. Fewer titles, but often with long-form
                analysis, business reporting and opinion aimed at readers outside
                Bangladesh.
              </p>
              <Link
                to="/english-newspapers"
                className="group mt-4 inline-flex items-center gap-1.5 text-[12px] font-medium text-ink transition-colors hover:text-accent"
              >
                Browse English newspapers
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          <div className="mt-8 border-t border-line pt-6">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
              What changes between the two
            </h3>
            <ul className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {comparisonFactors.map((factor) => (
                <li key={factor.title} className="min-w-0">
                  <p className="text-[12.5px] font-medium leading-5 text-ink">
                    {factor.title}
                  </p>
                  <p className="mt-1 text-[11.5px] leading-5 text-muted">
                    {factor.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="border-b border-line bg-paper py-10 md:py-14"
        aria-labelledby="methodology-heading"
      >
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div className="min-w-0">
              <h2
                id="methodology-heading"
                className="text-[24px] font-semibold leading-[1.15] tracking-[-0.04em] text-ink sm:text-[28px]"
              >
                How this list was compiled
              </h2>

              <div className="mt-4 max-w-3xl space-y-3.5 text-[13px] leading-[1.8] text-ink-soft/90 sm:text-[13.5px] sm:leading-7">
                <p>
                  We started with the national dailies already listed in the{' '}
                  <Link to="/bangla-newspapers" className={internalLinkClass}>
                    Bangla newspaper directory
                  </Link>{' '}
                  and the{' '}
                  <Link to="/english-newspapers" className={internalLinkClass}>
                    English newspaper directory
                  </Link>
                  , then kept the titles whose founding date, publisher or owning
                  group and official website could all be confirmed.
                </p>
                <p>
                  The order weighs five things together: how long a paper has
                  published, whether it reports nationally, how many sections a
                  reader can reach, whether its website and digital edition work,
                  and how often it appears in public discussion of the
                  Bangladeshi press. No single factor decides a position.
                </p>
                <p>
                  Circulation and readership figures are deliberately left out.
                  The numbers that exist are declared by publishers or collected
                  at different times, and using them side by side would suggest a
                  precision the data does not support. Read the list as a
                  starting point for choosing a daily, not as a league table.
                </p>
              </div>
            </div>

            <div className="min-w-0">
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                What the order considers
              </h3>
              <ul className="mt-3 divide-y divide-line border-y border-line">
                {rankingFactors.map((factor) => (
                  <li key={factor.title} className="py-3">
                    <p className="text-[12.5px] font-medium leading-5 text-ink">
                      {factor.title}
                    </p>
                    <p className="mt-0.5 text-[11.5px] leading-5 text-muted">
                      {factor.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 max-w-4xl border-l-2 border-accent/40 bg-surface px-4 py-3.5 text-[12px] leading-6 text-ink-soft/90">
            <strong className="font-semibold text-ink">
              This is not an official ranking.
            </strong>{' '}
            No government body or independent auditor publishes a complete,
            current readership table for Bangladeshi newspapers. Positions here
            reflect documented facts and editorial judgement, and they are not a
            statement about circulation, advertising rates or editorial quality.
          </p>
        </div>
      </section>

      <section
        className="border-b border-line bg-paper py-10 md:py-14"
        aria-labelledby="choosing-heading"
      >
        <div className="shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <h2
              id="choosing-heading"
              className="text-[24px] font-semibold leading-[1.15] tracking-[-0.04em] text-ink sm:text-[28px]"
            >
              How to choose a newspaper in Bangladesh
            </h2>
            <p className="mt-3 max-w-md text-[12.5px] leading-6 text-muted">
              A daily becomes useful when it matches the news you actually read.
              Five practical checks before you settle on one.
            </p>
          </div>

          <ol className="space-y-4">
            {choosingFactors.map((factor, index) => (
              <li key={factor.title} className="flex gap-3">
                <span
                  className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-line-strong bg-surface text-[10px] font-semibold tabular-nums text-ink-soft"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <span className="min-w-0">
                  <span className="block text-[12.5px] font-medium leading-5 text-ink">
                    {factor.title}
                  </span>
                  <span className="mt-0.5 block text-[11.5px] leading-5 text-muted">
                    {factor.description}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="border-b border-line bg-surface py-10 md:py-14"
        aria-labelledby="top-newspapers-faq-heading"
      >
        <div className="shell grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Common questions
            </p>
            <h2
              id="top-newspapers-faq-heading"
              className="mt-3 text-[24px] font-semibold leading-[1.15] tracking-[-0.04em] text-ink sm:text-[28px]"
            >
              Questions about the top 10 list
            </h2>
            <p className="mt-3 max-w-md text-[12.5px] leading-6 text-muted">
              Short answers about how the selection was made and what it does
              not claim. Corrections are welcome on the{' '}
              <Link to="/contact" className={internalLinkClass}>
                contact page
              </Link>
              .
            </p>
          </div>

          <div className="border-t border-line">
            {topNewspaperFaqs.map((faq) => (
              <details key={faq.question} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-4 text-left text-[13px] font-medium leading-6 text-ink transition-colors hover:text-accent sm:text-[14px] [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <span
                    className="mt-0.5 shrink-0 text-[16px] leading-5 text-muted transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-5 pr-8 text-[12.5px] leading-6 text-ink-soft/90 sm:text-[13px] sm:leading-7">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-10 md:py-14" aria-labelledby="explore-heading">
        <div className="shell">
          <h2
            id="explore-heading"
            className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted"
          >
            Keep exploring the directory
          </h2>

          <ul className="mt-3 grid gap-x-8 sm:grid-cols-2">
            {exploreLinks.map((link) => (
              <li key={link.to} className="border-b border-line">
                <Link
                  to={link.to}
                  className="group flex items-start justify-between gap-4 py-3.5 transition-colors hover:text-accent"
                >
                  <span className="min-w-0">
                    <span className="block text-[12.5px] font-medium leading-5 text-ink transition-colors group-hover:text-accent">
                      {link.label}
                    </span>
                    <span className="mt-0.5 block text-[11px] leading-4 text-muted">
                      {link.description}
                    </span>
                  </span>
                  <ArrowRight
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-3xl text-[11px] leading-5 text-muted">
            Facts on this page were checked on{' '}
            {formatVerifiedDate(TOP_NEWSPAPERS_LAST_VERIFIED)} against each
            publisher’s website and public encyclopaedia entries. Newspaper
            names, logos and trademarks belong to their respective publishers.
            This guide is independent and is not affiliated with any newspaper.
            If a founding date, publisher or link has changed, please report it
            through the contact page.
          </p>
        </div>
      </section>
    </>
  )
}
