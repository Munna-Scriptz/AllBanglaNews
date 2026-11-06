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
    <section className="border-b border-line bg-surface">
      <div className="shell py-3 md:py-12 lg:py-20">

        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-14">
          <div className="min-w-0 max-w-4xl flex-1">
            <p className="eyebrow hidden xl:flex">
              <span className="eyebrow-dot" aria-hidden="true" />
              Bangladesh News Directory
            </p>

            <h1 className="mt-4 text-[32px] font-semibold leading-[1.08] tracking-[-0.045em] text-ink min-[480px]:text-[38px] sm:text-[46px] md:text-[56px] lg:text-[64px]">
              Every Bangladeshi newspaper,
              <br className="hidden sm:block" />{' '}
              <span className="text-accent">one place.</span>
            </h1>

            <p className="mt-4 max-w-xl text-[13px] leading-6 text-ink-soft/90 sm:text-[14px] sm:leading-7">
              Discover Bangladesh&apos;s leading newspapers, online news
              portals, e-papers and media publications — all in one convenient
              directory.
            </p>

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

            <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2 text-[10px] text-muted sm:text-[11px]">
              <span className="font-medium">Try</span>
              {quickSearches.map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => handleQuickSearch(name)}
                  className="rounded-full border border-line bg-paper px-2.5 py-1 text-[10px] font-medium text-ink-soft transition-colors hover:border-line-strong hover:text-ink sm:text-[11px]"
                >
                  {name}
                </button>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-line pt-4 sm:mt-8 sm:gap-x-6 sm:pt-5">
              <div className="flex items-baseline gap-1.5">
                <span className="text-[14px] font-semibold tabular-nums text-ink sm:text-[15px]">
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
                <span className="text-[14px] font-semibold tabular-nums text-ink sm:text-[15px]">
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
                <span className="text-[14px] font-semibold tabular-nums text-ink sm:text-[15px]">
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

          <aside
            className="w-full hidden xl:block xl:mt-10 xl:w-[280px] xl:shrink-0"
            aria-label="Quick picks"
          >
            <div className="overflow-hidden rounded-[10px] border border-line bg-paper">
              <div className="border-b border-line px-4 py-3.5 sm:px-5">
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
                        className="h-3.5 w-3.5 shrink-0 text-muted/40 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="px-4 py-3.5 sm:px-5">
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

            <p className="mt-3 text-right text-[9px] uppercase tracking-[0.14em] text-muted/50">
              Curated in Dhaka · Bangladesh
            </p>
          </aside>
        </div>

      </div>
    </section>
  )
}
