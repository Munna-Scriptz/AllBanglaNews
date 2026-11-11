import {
  getCategory,
  getCategoryCount,
  publications,
} from '../../data/publications'
import NewspaperGrid from '../newspaper/NewspaperGrid'
import SectionHeader from '../ui/SectionHeader'

const curatedSections = [
  {
    id: 'bangla',
    title: 'Popular Bangla newspapers',
    eyebrow: 'Bangla press',
    ids: [
      'prothom-alo',
      'bangladesh-pratidin',
      'kaler-kantho',
      'ittefaq',
    ],
  },
  {
    id: 'regional',
    categoryId: 'bangla',
    title: 'More Bangla dailies',
    eyebrow: 'New in the directory',
    ids: [
      'ajker-patrika',
      'dainik-azadi',
      'dainik-purbokone',
      'sylheter-dak',
    ],
  },
  {
    id: 'online',
    title: 'Online news portals',
    eyebrow: 'Digital-first',
    ids: ['bdnews24', 'bangla-tribune', 'jago-news24', 'dhaka-post'],
  },
  {
    id: 'english',
    title: 'English newspapers',
    eyebrow: 'The English press',
    ids: [
      'the-daily-star',
      'dhaka-tribune',
      'financial-express',
      'business-standard',
    ],
  },
  {
    id: 'epaper',
    title: 'E-papers',
    eyebrow: 'Digital editions',
    ids: ['prothom-alo', 'the-daily-star', 'dhaka-tribune', 'samakal'],
    metaLabel: 'E-Paper',
  },
  {
    id: 'tv',
    title: 'Bangladeshi TV channels',
    eyebrow: 'On air',
    ids: ['somoy-tv', 'channel-i', 'jamuna-tv', 'ekattor-tv'],
  },
  {
    id: 'international',
    title: 'International publications',
    eyebrow: 'Beyond borders',
    ids: ['bbc-news', 'al-jazeera', 'reuters', 'the-guardian'],
  },
]

const byId = new Map(
  publications.map((publication) => [publication.id, publication]),
)

export default function CuratedSections() {
  return (
    <div className="border-t border-line">
      {curatedSections.map((section) => {
        const categoryId = section.categoryId ?? section.id
        const category = getCategory(categoryId)
        const items = section.ids
          .map((id) => byId.get(id))
          .filter(Boolean)

        return (
          <section
            key={section.id}
            className="border-b border-line py-4 last:border-b-0 md:py-14"
            aria-labelledby={`curated-${section.id}`}
          >
            <div className="shell">
              <SectionHeader
                id={`curated-${section.id}`}
                eyebrow={section.eyebrow}
                title={section.title}
                description={category.description}
                href={category.path}
                linkLabel={`View all ${getCategoryCount(categoryId)} ${category.countLabel}`}
              />
              <div className="mt-7">
                <NewspaperGrid
                  items={items}
                  metaLabel={section.metaLabel}
                  ariaLabel={section.title}
                />
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
