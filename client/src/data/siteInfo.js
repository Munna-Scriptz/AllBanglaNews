/**
 * Single source of truth for human-maintained directory information.
 *
 * Update LAST_VERIFIED when the publication list and verified e-paper links
 * are reviewed. The same date is rendered on category, about and privacy
 * pages so the site never shows conflicting "last checked" claims.
 */
export const LAST_VERIFIED = '2026-11-12'

/**
 * Contact mailbox for directory corrections.
 * TODO: Confirm this address is owned and monitored before launch.
 */
export const CONTACT_EMAIL = 'munnascriptz@gmail.com'

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

/** Format an ISO date without relying on the server's locale settings. */
export const formatVerifiedDate = (isoDate = LAST_VERIFIED) => {
  const [year, month, day] = isoDate.split('-').map(Number)

  if (!year || !month || !day || !MONTHS[month - 1]) {
    return isoDate
  }

  return `${day} ${MONTHS[month - 1]} ${year}`
}
