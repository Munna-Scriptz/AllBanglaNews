import {
  getCategoryCount,
  publications,
} from '../../data/publications'
import SearchBar from '../ui/SearchBar'

const quickSearches = ['Prothom Alo', 'The Daily Star', 'Bangla Tribune']

export default function Hero({ query, onQueryChange, onSearch }) {
  const handleQuickSearch = (name) => {
    onQueryChange(name)
    onSearch()
  }

  return (
    <section className="relative overflow-hidden border-b border-line bg-surface">
      <div className="shell py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            Bangladesh News Directory
          </p>

          <h1 className="mt-5 text-[40px] font-semibold leading-[1.01] tracking-[-0.055em] text-ink sm:text-[52px] md:text-[62px] lg:text-[68px]">
            Every Bangladeshi newspaper,
            <br className="hidden sm:block" />{' '}
            <span className="text-accent">one place.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-[14.5px] leading-7 text-ink-soft/90 sm:text-[15.5px] sm:leading-8">
            Discover Bangladesh&apos;s leading newspapers, online news portals,
            e-papers and media publications — all in one convenient directory.
          </p>

          <div className="mt-7 max-w-2xl">
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

          <div className="mt-3.5 flex flex-wrap items-center gap-x-2 gap-y-2 text-[11.5px] text-muted">
            <span className="font-medium">Try</span>
            {quickSearches.map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => handleQuickSearch(name)}
                className="rounded-full border border-line bg-paper px-2.5 py-1 text-[11px] font-medium text-ink-soft transition-colors hover:border-line-strong hover:text-ink"
              >
                {name}
              </button>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line pt-5 sm:gap-x-7">
            <div className="flex items-baseline gap-2">
              <span className="text-[15px] font-semibold tabular-nums text-ink">
                {publications.length}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.13em] text-muted">
                Publications
              </span>
            </div>
            <span className="hidden h-4 w-px bg-line sm:block" aria-hidden="true" />
            <div className="flex items-baseline gap-2">
              <span className="text-[15px] font-semibold tabular-nums text-ink">
                {getCategoryCount('epaper')}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.13em] text-muted">
                E-papers
              </span>
            </div>
            <span className="hidden h-4 w-px bg-line sm:block" aria-hidden="true" />
            <div className="flex items-baseline gap-2">
              <span className="text-[15px] font-semibold tabular-nums text-ink">
                6
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.13em] text-muted">
                Categories
              </span>
            </div>
            <span className="hidden h-4 w-px bg-line sm:block" aria-hidden="true" />
            <span className="text-[10px] font-medium uppercase tracking-[0.13em] text-muted">
              Free to browse
            </span>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute right-8 top-16 hidden flex-col items-end gap-1.5 text-right xl:flex"
        aria-hidden="true"
      >
        <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-muted/60">
          Curated in Dhaka
        </span>
        <span className="text-[9px] uppercase tracking-[0.14em] text-muted/40">
          23.8103° N · 90.4125° E
        </span>
        <span className="mt-3 h-12 w-px bg-line" />
      </div>
    </section>
  )
}
