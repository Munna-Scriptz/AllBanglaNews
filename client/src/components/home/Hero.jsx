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

      <div className="shell relative py-3 md:py-12 lg:py-20">
        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-14">
          {/* Main hero content */}
          <div className="min-w-0 max-w-4xl flex-1">
            <p className="eyebrow hidden xl:flex">
              <span className="eyebrow-dot" aria-hidden="true" />
              Bangladesh News Directory
            </p>

            <h1 className="mt-4 text-[32px] font-semibold leading-[1.08] tracking-[-0.045em] text-ink min-[480px]:text-[38px] sm:text-[46px] md:text-[56px] lg:text-[64px]">
              All Bangla newspapers,
              <br className="hidden sm:block" />{' '}
              <span className="relative inline-block text-accent">
                one place.
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-[3px] w-2/3 rounded-full bg-accent/50"
                />
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-[13px] leading-6 text-ink-soft/90 sm:text-[14px] sm:leading-7">
              Browse the complete All Bangla newspaper list — Bangla dailies,
              online news portals, e-papers, English newspapers, TV channels and
              international publications — in one organised directory.
            </p>

            <p
              lang="bn"
              className="mt-2 max-w-xl text-[12px] leading-6 text-muted sm:text-[12.5px]"
            >
              সকল বাংলা পত্রিকা, আজকের পত্রিকা, ই-পেপার ও বাংলা টিভি চ্যানেল
              এক জায়গায়।
            </p>

            {/* Search */}
            <div className="mt-6 w-full max-w-xl">
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
            <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2 text-[10px] text-muted sm:text-[11px]">
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
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line pt-5 sm:mt-9 sm:gap-x-7 sm:pt-6">
              <div className="flex items-baseline gap-1.5">
                <span className="text-[15px] font-bold tabular-nums tracking-tight text-accent sm:text-[17px]">
                  {publications.length}
                </span>
                <span className="text-[9px] font-medium uppercase tracking-[0.1em] text-muted sm:text-[10px]">
                  Publications
                </span>
              </div>

              <span
                className="hidden h-4 w-px bg-line sm:block"
                aria-hidden="true"
              />

              <div className="flex items-baseline gap-1.5">
                <span className="text-[15px] font-bold tabular-nums tracking-tight text-accent sm:text-[17px]">
                  {getCategoryCount('epaper')}
                </span>
                <span className="text-[9px] font-medium uppercase tracking-[0.1em] text-muted sm:text-[10px]">
                  E-papers
                </span>
              </div>

              <span
                className="hidden h-4 w-px bg-line sm:block"
                aria-hidden="true"
              />

              <div className="flex items-baseline gap-1.5">
                <span className="text-[15px] font-bold tabular-nums tracking-tight text-accent sm:text-[17px]">
                  {categories.length - 1}
                </span>
                <span className="text-[9px] font-medium uppercase tracking-[0.1em] text-muted sm:text-[10px]">
                  Categories
                </span>
              </div>

              <span
                className="hidden h-4 w-px bg-line sm:block"
                aria-hidden="true"
              />

              <span className="text-[9px] font-medium uppercase tracking-[0.1em] text-muted sm:text-[10px]">
                Free to browse
              </span>
            </div>
          </div>

          {/* Quick picks sidebar */}
          <aside
            className="hidden w-full xl:mt-10 xl:block xl:w-[280px] xl:shrink-0"
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

            <p className="mt-3 text-right text-[9px] uppercase tracking-[0.14em] text-muted">
              Curated in Dhaka · Bangladesh
            </p>
          </aside>
        </div>
      </div>
    </section>

  )
}
