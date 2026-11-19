import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import {
  getCategory,
  getCategoryCount,
  getLocalPublicationsByDivision,
} from '../data/publications'
import { divisionImages } from '../data/divisionImages'
import CategoryNavigation from '../components/ui/CategoryNavigation'
import PageHeader from '../components/ui/PageHeader'
import NewspaperGrid from '../components/newspaper/NewspaperGrid'
import CategoryGuide from '../components/seo/CategoryGuide'
import { getCategorySeo } from '../seo/routes'

export default function LocalPage() {
  const category = getCategory('local')
  const seo = getCategorySeo('local')
  const total = getCategoryCount('local')
  const divisions = getLocalPublicationsByDivision()
  const divisionCards = divisions.map((division) => ({
    ...division,
    image: divisionImages[division.id],
  }))

  return (
    <>
      <PageHeader
        title={seo.heading ?? 'Local Newspapers'}
        description={seo.intro ?? category.description}
        category={category}
        count={total}
        countLabel={category.countLabel}
      />

      <section
        className="py-4 md:py-14"
        aria-label="Local newspapers by division"
      >
        <div className="shell">
          <CategoryNavigation variant="tabs" activeId="local" />

          <div className="mt-5 flex flex-col gap-4 border-b border-line pb-6">
            <div>
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                Choose a division
              </p>
              <nav
                className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
                aria-label="Browse local newspapers by division"
              >
                {divisionCards.map((division, index) => (
                  <Link
                    key={division.id}
                    to={`/local-newspapers/${division.id}`}
                    aria-label={`Open ${division.label} Division page, ${division.items.length} local titles`}
                    className="group relative isolate flex min-h-[152px] flex-col justify-end overflow-hidden rounded-[10px] border border-line bg-ink p-3.5 text-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lift focus-visible:-translate-y-0.5 focus-visible:border-ink focus-visible:shadow-lift sm:min-h-[174px] sm:p-4"
                  >
                    <img
                      src={division.image.src}
                      alt={division.image.alt}
                      loading={index < 4 ? 'eager' : 'lazy'}
                      className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <span
                      className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-ink/10 transition-opacity duration-300 group-hover:opacity-90"
                      aria-hidden="true"
                    />

                    <span className="mt-1 text-[16px] font-semibold leading-tight tracking-[-0.02em] sm:text-[18px]">
                      {division.label}
                    </span>
                    <span lang="bn" className="mt-0.5 text-[11px] text-white/70">
                      {division.banglaLabel}
                    </span>

                    <span className="mt-2.5 flex items-center justify-between gap-2 border-t border-white/15 pt-2 text-[10px] font-medium text-white/75">
                      <span>
                        {division.items.length}{' '}
                        {division.items.length === 1 ? 'title' : 'titles'}
                      </span>
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                ))}
              </nav>

              <details className="mt-4 rounded-[8px] border border-line bg-surface px-3.5 py-2.5 text-[11px] leading-5 text-muted">
                <summary className="cursor-pointer font-medium text-ink-soft">
                  Photo credits and licenses
                </summary>
                <ul className="mt-3 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                  {divisionCards.map((division) => (
                    <li key={division.id}>
                      <span className="font-medium text-ink-soft">
                        {division.label}:
                      </span>{' '}
                      <a
                        href={division.image.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-line-strong underline-offset-2 transition-colors hover:text-ink"
                      >
                        {division.image.credit}
                      </a>
                      {' · '}
                      {division.image.licenseUrl ? (
                        <a
                          href={division.image.licenseUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-line-strong underline-offset-2 transition-colors hover:text-ink"
                        >
                          {division.image.license}
                        </a>
                      ) : (
                        division.image.license
                      )}
                    </li>
                  ))}
                </ul>
                <p className="mt-2">
                  Photos are from Wikimedia Commons, cropped and resized for
                  layout, and illustrate each division; they do not imply
                  endorsement of this directory.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {divisions.map((division) => (
        <section
          key={division.id}
          id={division.id}
          className="scroll-mt-20 border-t border-line py-8 md:py-10"
          aria-labelledby={`${division.id}-heading`}
        >
          <div className="shell">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">
                  <span className="eyebrow-dot" aria-hidden="true" />
                  Division
                </p>
                <h2
                  id={`${division.id}-heading`}
                  className="mt-1 text-[24px] font-semibold tracking-[-0.03em] text-ink sm:text-[28px]"
                >
                  {division.label} Division
                </h2>
                <p lang="bn" className="mt-0.5 text-[12px] text-muted">
                  {division.banglaLabel}
                </p>
              </div>

              <p className="text-[11.5px] font-medium text-muted">
                {division.items.length} local titles ·{' '}
                {division.districtsCovered.length} districts covered
              </p>
            </div>

            <div className="mt-5">
              <NewspaperGrid
                items={division.items}
                ariaLabel={`${division.label} Division local newspapers`}
                eagerCount={division.id === 'dhaka' ? 4 : 0}
              />
            </div>
          </div>
        </section>
      ))}

      <CategoryGuide categoryId="local" />
    </>
  )
}
