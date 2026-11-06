import { useEffect, useState } from 'react'
import { getInitials, cn } from '../../utils/helpers'

/**
 * Publication logo with a graceful typographic fallback.
 * No broken image icons — ever.
 */
export default function PublicationLogo({
  publication,
  className,
  imageClassName,
  eager = false,
}) {
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setFailed(false)
  }, [publication.logo])

  return (
    <span
      className={cn(
        'flex shrink-0 items-center justify-center overflow-hidden rounded-[8px] border border-line bg-[#fbfaf7]',
        className,
      )}
      aria-hidden="true"
    >
      {!failed && publication.logo ? (
        <img
          src={publication.logo}
          alt=""
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
          className={cn('h-full w-full object-contain p-1.5', imageClassName)}
        />
      ) : (
        <span className="select-none text-[13px] font-semibold tracking-[-0.02em] text-ink-soft">
          {getInitials(publication.name)}
        </span>
      )}
    </span>
  )
}
