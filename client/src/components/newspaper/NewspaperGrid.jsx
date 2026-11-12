import { cn } from '../../utils/helpers'
import NewspaperCard from './NewspaperCard'

export default function NewspaperGrid({
  items,
  featured = false,
  metaLabel,
  eagerCount = 0,
  visibleCount = null,
  className,
  ariaLabel = 'Publications',
}) {
  return (
    <ul
      className={cn(
        'grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-3 xl:grid-cols-4',
        className,
      )}
      aria-label={ariaLabel}
    >
      {items.map((publication, index) => {
        const isHidden = visibleCount !== null && index >= visibleCount

        return (
          <li key={publication.id} className="min-w-0" hidden={isHidden}>
            <NewspaperCard
              publication={publication}
              featured={featured}
              metaLabel={metaLabel}
              eager={index < eagerCount}
            />
          </li>
        )
      })}
    </ul>
  )
}
