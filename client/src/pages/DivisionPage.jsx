import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react'
import { Link, useParams } from 'react-router'
import {
  getCategory,
  getLocalDivision,
  getLocalPublicationsByDivision,
} from '../data/publications'
import { divisionImages } from '../data/divisionImages'
import CategoryNavigation from '../components/ui/CategoryNavigation'
import PageHeader from '../components/ui/PageHeader'
import NewspaperGrid from '../components/newspaper/NewspaperGrid'
import CategoryGuide from '../components/seo/CategoryGuide'
import NotFound from './NotFound'

export default function DivisionPage({ divisionId: fixedDivisionId }) {
  const { divisionId: routeDivisionId } = useParams()
  const division = getLocalDivision(fixedDivisionId ?? routeDivisionId)
  const divisions = getLocalPublicationsByDivision()
  const category = getCategory('local')

  if (!division) return <NotFound />

  const image = divisionImages[division.id]
  const otherDivisions = divisions.filter((item) => item.id !== division.id)
  const coveredDistricts = division.districtsCovered
  const districtSummary =
    coveredDistricts.length > 0
      ? coveredDistricts.join(', ')
      : 'district-level titles across the division'

  return (
    <>
      <PageHeader
        title={`${division.label} Newspapers`}
        description={`All regional and ${division.label} newspapers in one place. Browse ${division.items.length} local Bangla titles listed for ${division.label} Division, with direct links to each publisher's official website.`}
        category={{ ...category, meta: `${division.districts.length} districts` }}
        count={division.items.length}
        countLabel={division.items.length === 1 ? 'local title' : 'local titles'}
        parent={{ label: 'Local Newspapers', to: '/local-newspapers' }}
      />

      <section
        className="border-b border-line py-5 md:py-9"
        aria-label={`About ${division.label} Division newspapers`}
      >
        <div className="shell">
          <CategoryNavigation variant="tabs" activeId="local" />

          <div className="mt-5 grid gap-5 lg:grid-cols-[1.05fr_1fr] lg:items-stretch">
            <figure className="overflow-hidden rounded-[10px] border border-line bg-ink shadow-card">
              <img
                src={image.src}
                alt={image.alt}
                width={800}
                height={500}
                loading="eager"
                fetchPriority="high"
                className="h-[220px] w-full object-cover sm:h-[280px] lg:h-full lg:min-h-[300px]"
              />
              <figcaption className="border-t border-white/10 px-3.5 py-2.5 text-[10px] leading-4 text-white/65">
                {image.alt}. Photo:{' '}
                <a
                  href={image.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-white/30 underline-offset-2 hover:text-white"
                >
                  {image.credit}
                </a>
                {' · '}
                {image.licenseUrl ? (
                  <a
                    href={image.licenseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-white/30 underline-offset-2 hover:text-white"
                  >
                    {image.license}
                  </a>
                ) : (
                  image.license
                )}
              </figcaption>
            </figure>

            <div className="flex flex-col rounded-[10px] border border-line bg-surface p-5 sm:p-6">
              <p className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                Division profile
              </p>
              <h2 className="mt-2 text-[24px] font-semibold leading-tight tracking-[-0.035em] text-ink sm:text-[30px]">
                All {division.label} newspapers and local portals
              </h2>
              <p lang="bn" className="mt-1 text-[12px] text-muted">
                {division.banglaLabel}
              </p>

              <p className="mt-4 text-[13px] leading-7 text-ink-soft/90">
                This page collects the local titles currently listed in the
                directory for {division.label} Division. The list covers{' '}
                {coveredDistricts.length} of the division&apos;s{' '}
                {division.districts.length} districts. Every card opens the
                publisher&apos;s own website, and inclusion does not imply
                endorsement.
              </p>

              <div className="mt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
                  Districts with listed titles
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {coveredDistricts.map((district) => (
                    <span
                      key={district}
                      className="rounded-full border border-line bg-white px-2.5 py-1 text-[10.5px] font-medium text-ink-soft"
                    >
                      {district}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-4 rounded-[8px] border border-line bg-white px-3 py-2.5 text-[11px] leading-5 text-muted">
                <MapPin
                  className="mr-1 inline h-3.5 w-3.5 align-[-2px] text-accent"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                Coverage note: {districtSummary}. A district without a listed
                title may still have print-only outlets that are not in this
                directory yet.
              </p>

              <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
                <Link
                  to="/local-newspapers"
                  className="inline-flex items-center gap-1.5 rounded-[7px] border border-line bg-white px-3 py-2 text-[11px] font-semibold text-ink-soft transition-colors hover:border-line-strong hover:text-ink"
                >
                  <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.8} />
                  All local newspapers
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 rounded-[7px] bg-ink px-3 py-2 text-[11px] font-semibold text-white transition-colors hover:bg-ink-soft"
                >
                  Suggest a correction
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.8} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-8 md:py-12"
        aria-labelledby={`${division.id}-list-heading`}
      >
        <div className="shell">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                Local directory
              </p>
              <h2
                id={`${division.id}-list-heading`}
                className="mt-1 text-[26px] font-semibold tracking-[-0.035em] text-ink sm:text-[32px]"
              >
                {division.label} Division newspapers
              </h2>
              <p className="mt-1 max-w-2xl text-[12.5px] leading-6 text-muted">
                {division.items.length} titles across {coveredDistricts.length}{' '}
                districts, sorted by popularity, then district and publication
                name.
              </p>
            </div>
            <p className="text-[11px] font-medium text-muted">
              All links open the publisher&apos;s website
            </p>
          </div>

          <div className="mt-5">
            <NewspaperGrid
              items={division.items}
              ariaLabel={`${division.label} Division local newspapers`}
              eagerCount={4}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-line py-8 md:py-10">
        <div className="shell">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                More divisions
              </p>
              <h2 className="mt-1 text-[22px] font-semibold tracking-[-0.03em] text-ink sm:text-[26px]">
                Browse another division
              </h2>
            </div>
            <Link
              to="/local-newspapers"
              className="hidden text-[11px] font-semibold text-accent transition-colors hover:text-ink sm:inline"
            >
              View all eight divisions →
            </Link>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {otherDivisions.map((item) => (
              <Link
                key={item.id}
                to={`/local-newspapers/${item.id}`}
                className="group rounded-[8px] border border-line bg-surface px-3.5 py-3 transition-all hover:-translate-y-0.5 hover:border-line-strong hover:shadow-card"
              >
                <span className="block text-[12.5px] font-semibold text-ink">
                  {item.label}
                </span>
                <span lang="bn" className="mt-0.5 block text-[10.5px] text-muted">
                  {item.banglaLabel}
                </span>
                <span className="mt-2 flex items-center justify-between text-[10px] font-medium text-muted">
                  {item.items.length} titles
                  <ArrowRight
                    className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CategoryGuide categoryId="local" />
    </>
  )
}
