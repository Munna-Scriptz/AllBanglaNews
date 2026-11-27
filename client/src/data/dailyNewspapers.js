import { publications } from './publications.js'
import { topNewspapers } from './topNewspapers.js'

/**
 * Curated Bangladesh daily newspaper list.
 *
 * Inclusion is limited to publications already present in the directory that
 * are described as daily newspapers in the project's verified records. The
 * order inside each language section is editorial, not a circulation, traffic
 * or readership ranking. The Semrush keyword export used for this page informs
 * language only; no keyword metrics are published.
 */
export const DAILY_NEWSPAPERS_PATH = '/daily-newspapers'
export const DAILY_NEWSPAPERS_LAST_VERIFIED = '2026-11-27'

const publicationById = new Map(
  publications.map((publication) => [publication.id, publication]),
)
const topEntryById = new Map(
  topNewspapers.map((entry) => [entry.publicationId, entry]),
)

const bangla = [
  {
    id: 'prothom-alo',
    note: 'Bangla national daily with a verified e-paper and broad section coverage.',
  },
  {
    id: 'ittefaq',
    note: 'One of the oldest Bangla dailies; daily since 1953, with a verified e-paper.',
  },
  {
    id: 'bangladesh-pratidin',
    note: 'National Bangla daily with district, economy and lifestyle sections.',
  },
  {
    id: 'kaler-kantho',
    note: 'National Bangla daily combining news, opinion and feature writing.',
  },
  {
    id: 'jugantor',
    note: 'Bangla daily covering national politics, economy and reader services.',
  },
  {
    id: 'samakal',
    note: 'Bangla daily with division pages and a verified e-paper.',
  },
  {
    id: 'naya-diganta',
    note: 'Bangla daily with business, law, literature and world sections.',
  },
  {
    id: 'manab-zamin',
    note: 'Bangla tabloid daily with expatriate and opinion pages.',
  },
  {
    id: 'dainik-inqilab',
    note: 'Bangla daily with a verified e-paper and strong opinion coverage.',
  },
]

const english = [
  {
    id: 'the-daily-star',
    note: 'English daily with national politics, business and international coverage.',
  },
  {
    id: 'dhaka-tribune',
    note: 'English daily covering politics, business, culture and global affairs.',
  },
  {
    id: 'financial-express',
    note: 'English business daily focused on markets, the economy and policy.',
  },
  {
    id: 'daily-sun',
    note: 'English daily with national, business and lifestyle coverage.',
  },
  {
    id: 'new-age',
    note: 'English daily offering national news, opinion and analysis.',
  },
  {
    id: 'the-independent',
    note: 'English daily covering national affairs, politics and culture.',
  },
  {
    id: 'bangladesh-post',
    note: 'English daily focused on national news, diplomacy and business.',
  },
  {
    id: 'asian-age',
    note: 'English daily covering Bangladesh and international affairs.',
  },
  {
    id: 'daily-observer',
    note: 'English daily with national, business and feature reporting.',
  },
  {
    id: 'the-new-nation',
    note: 'English daily from Dhaka covering politics, diplomacy and opinion.',
  },
]

const buildEntry = ({ id, note }) => {
  const publication = publicationById.get(id)
  const topEntry = topEntryById.get(id)

  if (!publication) return null

  return {
    id,
    publication,
    note,
    established: topEntry?.established ?? null,
    establishedDetail: topEntry?.establishedDetail ?? null,
    wikipedia: topEntry?.wikipedia ?? null,
  }
}

export const dailyBanglaNewspapers = bangla
  .map(buildEntry)
  .filter(Boolean)

export const dailyEnglishNewspapers = english
  .map(buildEntry)
  .filter(Boolean)

export const dailyNewspapers = [
  ...dailyBanglaNewspapers,
  ...dailyEnglishNewspapers,
]

export const dailyNewspaperCriteria = [
  {
    title: 'Published every day',
    description:
      'Only titles described as daily newspapers in the directory records are included. Weekly magazines and occasional periodicals are left out.',
  },
  {
    title: 'National or major metropolitan readership',
    description:
      'The list favours papers that report on Bangladesh as a whole, rather than a single district or one specialist beat.',
  },
  {
    title: 'Official website checked',
    description:
      'Each entry opens the publisher’s own site. The directory does not copy stories or hide links behind an intermediary.',
  },
  {
    title: 'Clear editorial order',
    description:
      'Entries are grouped by language and ordered editorially. No circulation, readership, traffic or audience figure is claimed.',
  },
]

export const dailyNewspaperComparison = [
  {
    title: 'Language',
    description:
      'A daily bangla newspaper serves the largest domestic readership and usually carries more district reporting. An English daily is easier to share with international readers and often adds policy and analysis pages.',
  },
  {
    title: 'Print, web and e-paper',
    description:
      'A printed daily arrives each morning; the website updates through the day; an e-paper reproduces the printed pages. Access rules for digital editions are set by each publisher.',
  },
  {
    title: 'Coverage',
    description:
      'Most national dailies cover politics, business, world news, sport and opinion. Some add law, education, technology, lifestyle or division pages, so compare sections before choosing.',
  },
  {
    title: 'Ownership',
    description:
      'Bangladeshi papers belong to different groups. Reading two dailies from different owners is the quickest way to notice what one paper leaves out.',
  },
]

export const dailyNewspaperFaqs = [
  {
    question: 'What are daily newspapers in Bangladesh?',
    answer:
      'Daily newspapers in Bangladesh are newspapers published every day, usually in print and online. This page lists a curated selection of Bangla and English daily titles with links to their official websites.',
  },
  {
    question: 'Is this a complete Bangladesh daily newspaper list?',
    answer:
      'No. This is a curated list of daily-published newspapers already verified in the directory. It is not a complete census of every title ever printed in Bangladesh, and it is not an official ranking.',
  },
  {
    question: 'Which daily bangla newspaper should I start with?',
    answer:
      'Start with a national title whose sections match your interests. Prothom Alo, The Daily Ittefaq, Kaler Kantho and Samakal are useful starting points because their official sites carry broad national coverage and verified e-paper links.',
  },
  {
    question: 'Are English daily newspapers included?',
    answer:
      'Yes. The English section includes The Daily Star, Dhaka Tribune, The Financial Express, Daily Sun, New Age and other English dailies from the directory. Dhaka Courier is excluded because it is a weekly news magazine.',
  },
  {
    question: 'Does this page rank newspapers by popularity?',
    answer:
      'No. No current audited circulation or readership table covers every title. The order is editorial and the page makes no claim about which paper is most read.',
  },
  {
    question: 'Where can I find district-level daily newspapers?',
    answer:
      'Use the local newspapers directory. It groups district-level titles and local news portals by Bangladesh’s eight divisions instead of focusing on national dailies.',
  },
]
