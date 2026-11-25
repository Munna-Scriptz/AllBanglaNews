import { ArrowRight, ArrowUpRight } from 'lucide-react'
import {
  categories,
  featuredPublications,
  getCategory,
  getCategoryCount,
  publications,
} from '../../data/publications'
import PublicationLogo from '../newspaper/PublicationLogo'
import SearchBar from '../ui/SearchBar'

const quickSearches = ['Prothom Alo', 'The Daily Star', 'Bangla Tribune']
const quickPicks = featuredPublications.slice(0, 3)

export default function Hero({ query, onQueryChange, onSearch }) {
  const handleQuickSearch = (name) => {
    onQueryChange(name)
    onSearch()
  }

  return (

    <section className="relative isolate overflow-hidden border-b border-line bg-surface">
      {/* Warm paper background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,#fbfaf7_0%,#ffffff_42%,#f1efe9_100%)]"
      />

      {/* Editorial red lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_5%_15%,rgba(180,25,25,0.16),transparent_48%),linear-gradient(110deg,rgba(180,20,20,0.05),transparent_60%)]"
      />

      {/* Newspaper print texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(120,50,50,0.35) 0.7px, transparent 0.7px)',
          backgroundSize: '5px 5px',
        }}
      />

      {/* Decorative typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-4 -z-10 select-none text-[180px] font-black leading-none tracking-[-0.1em] text-ink/[0.035] sm:text-[260px] xl:right-[20%] xl:text-[340px]"
      >
        NEWS
      </div>

      <div className="shell relative py-5">
        <div className="flex flex-col gap-8 xl:flex-row xl:items-start xl:gap-14">
          {/* Main hero content */}
          <div className="min-w-0 max-w-4xl flex-1">
            <p className="eyebrow hidden xl:flex">
              <span className="eyebrow-dot" aria-hidden="true" />
              Bangladesh News Directory
            </p>

            <h1 className="mt-2 text-[30px] font-semibold leading-[1.06] tracking-[-0.045em] text-ink min-[480px]:text-[34px] sm:text-[42px] md:text-[50px] lg:text-[54px]">
              All Bangla Newspapers –
              <br className="hidden sm:block" />{' '}
              <span className="relative mt-1 inline-block text-[26px] min-[480px]:text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] text-accent">
                Bangladesh Newspaper List
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 20"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute -bottom-[13px] left-0 h-[13px] w-full overflow-visible"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="engraved-accent" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="currentColor" stopOpacity=".12" />
                      <stop offset="35%" stopColor="currentColor" stopOpacity=".5" />
                      <stop offset="78%" stopColor="currentColor" stopOpacity=".3" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Main carved shape */}
                  <path
                    d="M3 12.5C48 8.2 88 7.4 130 8.8C176 10.4 224 7.1 291 2.7C253 7.8 211 13.2 168 13.1C111 12.8 59 12.2 3 16Z"
                    fill="url(#engraved-accent)"
                  />

                  {/* Engraved upper edge */}
                  <path
                    d="M8 12C78 7.6 143 10.8 207 8.3C239 7.1 263 5.1 283 3.7"
                    stroke="currentColor"
                    strokeWidth=".8"
                    strokeLinecap="round"
                    opacity=".38"
                  />

                  {/* Fine inner detail */}
                  <path
                    d="M22 15C83 12.1 126 14.5 180 12.8"
                    stroke="currentColor"
                    strokeWidth=".65"
                    strokeLinecap="round"
                    opacity=".2"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-3 max-w-xl text-[13px] text-ink-soft/90 sm:text-[14px]">
              Browse national and local newspapers, radio stations, online
              portals, e-papers, TV channels and international publications in
              one organised directory.
            </p>

            {/* Search */}
            <div className="mt-5 w-full max-w-xl">
              <SearchBar
                id="hero-search"
                value={query}
                onChange={onQueryChange}
                onSubmit={onSearch}
                placeholder="Search newspapers, publications..."
                size="lg"
                showButton
                buttonLabel="Search"
                label="Search newspapers and publications"
              />
            </div>

            {/* Quick searches */}
            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-2 text-[10px] text-muted sm:text-[11px]">
              <span className="font-medium">Try</span>
              {quickSearches.map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => handleQuickSearch(name)}
                  className="rounded-full border border-line bg-paper/80 px-2.5 py-1 text-[10px] font-medium text-ink-soft transition-all hover:border-accent/50 hover:bg-accent/5 hover:text-accent sm:text-[11px]"
                >
                  {name}
                </button>
              ))}
            </div>

            {/* Directory statistics */}

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 sm:mt-6 sm:gap-x-6">
              <div className="flex items-baseline gap-1.5">
                <span className="text-base font-bold tabular-nums tracking-tight text-accent sm:text-lg">
                  {publications.length}
                </span>
                <span className="text-[10px] font-medium tracking-wide text-muted sm:text-[11px]">
                  Unique outlets
                </span>
              </div>

              <div className="flex items-baseline gap-1.5">
                <span className="text-base font-bold tabular-nums tracking-tight text-accent sm:text-lg">
                  {getCategoryCount('epaper')}
                </span>
                <span className="text-[10px] font-medium tracking-wide text-muted sm:text-[11px]">
                  Digital editions
                </span>
              </div>

              <div className="flex items-baseline gap-1.5">
                <span className="text-base font-bold tabular-nums tracking-tight text-accent sm:text-lg">
                  {categories.length - 1}
                </span>
                <span className="text-[10px] font-medium tracking-wide text-muted sm:text-[11px]">
                  Categories
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                <span className="text-[10px] font-medium tracking-wide text-muted sm:text-[11px]">
                  Free to browse
                </span>
              </div>
            </div>

          </div>

          {/* Quick picks sidebar */}
          <aside
            className="hidden w-full xl:block xl:w-[280px] xl:shrink-0"
            aria-label="Quick picks"
          >
            <div className="relative overflow-hidden rounded-[10px] border border-line bg-paper/90 shadow-card">
              {/* Decorative halftone */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 h-24 w-24 bg-[radial-gradient(circle,rgba(180,20,20,0.18)_1px,transparent_1.5px)] [background-size:7px_7px]"
              />

              {/* Header */}
              <div className="relative border-b-2 border-accent/70 px-4 py-3.5 sm:px-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="eyebrow">
                    <span className="eyebrow-dot" aria-hidden="true" />
                    In the directory
                  </p>

                  <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-muted">
                    {publications.length} indexed
                  </span>
                </div>
              </div>

              {/* Publications */}
              <ul>
                {quickPicks.map((publication) => (
                  <li key={publication.id}>
                    <a
                      href={publication.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 border-b border-line px-4 py-3 transition-colors last:border-b-0 hover:bg-surface sm:px-5 sm:py-3.5"
                    >
                      <PublicationLogo
                        publication={publication}
                        className="h-8 w-8 shrink-0 sm:h-9 sm:w-9"
                        imageClassName="p-1"
                        eager
                      />

                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[11.5px] font-medium text-ink sm:text-[12.5px]">
                          {publication.name}
                        </span>

                        <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-[0.1em] text-muted">
                          {getCategory(publication.category).shortLabel}
                        </span>
                      </span>

                      <ArrowUpRight
                        className="h-3.5 w-3.5 shrink-0 text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="border-t border-line px-4 py-3.5 sm:px-5">
                <a
                  href="#directory"
                  className="group inline-flex items-center gap-2 text-[11px] font-medium text-ink transition-colors hover:text-accent"
                >
                  Browse the full index
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>

  )
}
