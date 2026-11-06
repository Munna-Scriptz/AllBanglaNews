import {
  featuredPublications,
  publications,
} from '../../data/publications'
import NewspaperGrid from './NewspaperGrid'
import SectionHeader from '../ui/SectionHeader'

export default function FeaturedNewspapers() {
  return (
    <section
      id="popular"
      className="scroll-mt-20 border-b border-line bg-surface py-4 md:py-12"
      aria-labelledby="popular-heading"
    >
      <div className="shell">
        <SectionHeader
          id="popular-heading"
          eyebrow="Curated selection"
          title="Popular newspapers"
          description="Explore some of the most recognised publications in Bangladesh."
          href="/#directory"
          linkLabel={`View all ${publications.length} publications`}
        />
        <div className="mt-7">
          <NewspaperGrid
            items={featuredPublications}
            featured
            eagerCount={8}
            ariaLabel="Popular newspapers"
          />
        </div>
      </div>
    </section>
  )
}
