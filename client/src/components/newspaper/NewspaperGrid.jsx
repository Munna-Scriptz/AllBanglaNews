import { cn } from '../../utils/helpers'
import NewspaperCard from './NewspaperCard'

export default function NewspaperGrid({
  items,
  featured = false,
  metaLabel,
  eagerCount = 0,
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
      {items.map((publication, index) => (
        <li key={publication.id} className="min-w-0">
          <NewspaperCard
            publication={publication}
            featured={featured}
            metaLabel={metaLabel}
            eager={index < eagerCount}
          />
        </li>
      ))}
    </ul>
  )
}
