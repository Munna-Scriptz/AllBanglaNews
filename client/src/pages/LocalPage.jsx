import {
  getCategory,
  getCategoryCount,
  getLocalDistrictCount,
  getLocalPublicationsByDivision,
} from '../data/publications'
import CategoryNavigation from '../components/ui/CategoryNavigation'
import PageHeader from '../components/ui/PageHeader'
import NewspaperGrid from '../components/newspaper/NewspaperGrid'
import CategoryGuide from '../components/seo/CategoryGuide'

export default function LocalPage() {
  const category = getCategory('local')
  const total = getCategoryCount('local')
  const districtCount = getLocalDistrictCount()
  const divisions = getLocalPublicationsByDivision()

  return (
    <>
      <PageHeader
        title="Local Newspapers"
        description={category.description}
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
            <p className="max-w-3xl text-[12.5px] leading-6 text-ink-soft/90 sm:text-[13px] sm:leading-7">
              {total} local titles across {divisions.length} divisions and{' '}
              {districtCount} districts. Only districts with a verified local
              publication are listed, and each card shows the outlet&apos;s main
              coverage area.
            </p>

            <nav
              className="hide-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1"
              aria-label="Jump to a division"
            >
              {divisions.map((division) => (
                <a
                  key={division.id}
                  href={`#${division.id}`}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-2 text-[12px] font-medium text-ink-soft transition-colors hover:border-line-strong hover:text-ink"
                >
                  {division.label}
                  <span className="rounded-full bg-tint px-1.5 py-0.5 text-[10px] leading-none text-muted">
                    {division.items.length}
                  </span>
                </a>
              ))}
            </nav>
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
