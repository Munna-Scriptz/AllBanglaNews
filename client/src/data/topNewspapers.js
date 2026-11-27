import { publications } from './publications.js'

/**
 * Editorial guide to ten notable Bangladeshi newspapers.
 *
 * Every fact below was checked against the publisher's own website and its
 * Wikipedia entry when the guide was first published. The displayed review
 * date is updated after later link checks; the schema publication date is kept
 * unchanged. Circulation, readership, traffic and market-share figures are
 * deliberately omitted: the publicly available numbers are dated,
 * self-reported or incomplete, so they cannot support a precise 1–10 ranking.
 * The order is an editorial judgement, not an official or audited ranking.
 */
export const TOP_NEWSPAPERS_PATH = '/top-newspapers-in-bangladesh'
export const TOP_NEWSPAPERS_DATE_PUBLISHED = '2026-11-21'
export const TOP_NEWSPAPERS_LAST_VERIFIED = '2026-11-27'

const byId = new Map(
  publications.map((publication) => [publication.id, publication]),
)

const entries = [
  {
    rank: 1,
    publicationId: 'prothom-alo',
    displayName: 'Prothom Alo',
    established: '1998',
    establishedDetail: 'First published 4 November 1998',
    organisation: 'Transcom Group',
    publisher: 'Matiur Rahman',
    headquarters: 'Kawran Bazar, Dhaka',
    coverage: [
      'Bangladesh',
      'Politics',
      'World',
      'Business',
      'Opinion',
      'Sport',
      'Entertainment',
      'Jobs',
      'Lifestyle',
    ],
    epaper: {
      label: 'Prothom Alo e-paper',
      url: 'https://epaper.prothomalo.com/',
      note: 'Direct page-by-page edition, checked on 27 November 2026.',
    },
    summary:
      'Prothom Alo began publishing on 4 November 1998 and is owned by Transcom Group, with Matiur Rahman as publisher. The Bangla daily works from Kawran Bazar in Dhaka, and its website carries sections for Bangladesh news, politics, world affairs, business, opinion, sport, entertainment, jobs and lifestyle, alongside video. A page-by-page e-paper edition is published at epaper.prothomalo.com. The combination of daily reporting, a substantial opinion section and a verified digital edition makes it a practical starting point for readers who want one Bangla source across the day.',
    wikipedia: 'https://en.wikipedia.org/wiki/Prothom_Alo',
  },
  {
    rank: 2,
    publicationId: 'the-daily-star',
    displayName: 'The Daily Star',
    established: '1991',
    establishedDetail: 'First published 14 January 1991',
    organisation: 'Transcom Group',
    publisher: 'Transcom Group (founder: Syed Mohammad Ali)',
    headquarters: 'Kazi Nazrul Islam Avenue, Dhaka',
    coverage: [
      'News',
      'Politics',
      'Governance',
      'Business & economy',
      'World',
      'Opinion',
      'Sport',
      'Technology',
      'Education',
      'Health',
      'Culture',
    ],
    epaper: {
      label: null,
      url: null,
      note: 'Digital edition is reached through the publisher’s portal; registration may be required.',
    },
    summary:
      'The Daily Star was founded on 14 January 1991 by Syed Mohammad Ali and is owned by Transcom Group; Mahfuz Anam is its editor. Published from Kazi Nazrul Islam Avenue in Dhaka, the English-language daily runs sections for news, politics, governance, business and economy, world affairs, opinion, sport, technology, education, health, environment, culture and lifestyle. Its website publishes continuously, and the digital edition is reached through the publisher’s own portal. Readers who prefer English coverage of Bangladeshi politics, business and culture will find the full range of sections on the site.',
    wikipedia: 'https://en.wikipedia.org/wiki/The_Daily_Star_(Bangladesh)',
  },
  {
    rank: 3,
    publicationId: 'ittefaq',
    displayName: 'The Daily Ittefaq',
    established: '1949',
    establishedDetail: 'First issue 15 August 1949; daily from 24 December 1953',
    organisation: 'Ittefaq Group of Publications Ltd.',
    publisher: 'Tareen Hossain',
    headquarters: 'Karwan Bazar, Dhaka',
    coverage: [
      'National',
      'Capital',
      'Districts',
      'Politics',
      'World',
      'Economy',
      'Sport',
      'Entertainment',
      'Technology',
      'Education',
      'Health',
      'Law & courts',
      'Literature',
    ],
    epaper: {
      label: 'Ittefaq e-paper',
      url: 'https://epaper.ittefaq.com.bd/',
      note: 'Direct page-by-page edition, checked on 27 November 2026.',
    },
    summary:
      'Ittefaq published its first issue on 15 August 1949 and became a daily on 24 December 1953, which makes it one of the oldest newspapers in Bangladesh. It is owned by Ittefaq Group of Publications Ltd, with Tareen Hossain as publisher, and is edited from Karwan Bazar in Dhaka. The newspaper’s website covers national news, the capital, districts, politics, world affairs, economy, sport, entertainment, technology, education, health, law and literature. A verified e-paper is available at epaper.ittefaq.com.bd, and the site keeps an archive of earlier editions for readers tracing how a story developed.',
    wikipedia: 'https://en.wikipedia.org/wiki/The_Daily_Ittefaq',
  },
  {
    rank: 4,
    publicationId: 'bangladesh-pratidin',
    displayName: 'Bangladesh Pratidin',
    established: '2010',
    establishedDetail: 'First published 15 March 2010',
    organisation: 'East West Media Group',
    publisher: 'Maynal Hossain Chowdhury',
    headquarters: 'Bashundhara Residential Area, Dhaka',
    coverage: [
      'National',
      'Politics',
      'Economy',
      'Districts',
      'City life',
      'Education',
      'Science & technology',
      'Health',
      'Showbiz',
      'Career',
      'Islam & life',
      'Agriculture',
      'Tourism',
    ],
    epaper: {
      label: null,
      url: null,
      note: 'E-paper is linked from the site navigation.',
    },
    summary:
      'Bangladesh Pratidin launched on 15 March 2010 and is owned by East West Media Group, part of the Bashundhara Group, with Maynal Hossain Chowdhury as publisher. The Bangla daily is produced from the Bashundhara Residential Area in Dhaka. Its site organises news under national, politics, economy, district, city, education, science and technology, health, career and showbiz headings, with further sections on Islamic life, agriculture, tourism and aviation. An e-paper link sits in the main navigation, and the paper also publishes video. Readers who want a national Bangla daily with strong district and lifestyle sections can start there.',
    wikipedia: 'https://en.wikipedia.org/wiki/Bangladesh_Pratidin',
  },
  {
    rank: 5,
    publicationId: 'kaler-kantho',
    displayName: 'Kaler Kantho',
    established: '2010',
    establishedDetail: 'First published 10 January 2010',
    organisation: 'East West Media Group PLC',
    publisher: 'Maynal Hossain Chowdhury',
    headquarters: 'Bashundhara Residential Area, Dhaka',
    coverage: [
      'Bangladesh',
      'Capital',
      'Politics',
      'Law & courts',
      'World',
      'Business',
      'Sport',
      'Entertainment',
      'Education',
      'Lifestyle',
      'Editorial',
      'Features',
    ],
    epaper: {
      label: null,
      url: null,
      note: 'E-paper is the first item in the site navigation.',
    },
    summary:
      'Kaler Kantho was first published on 10 January 2010 by East West Media Group PLC, with Maynal Hossain Chowdhury as publisher, and shares a Bashundhara Residential Area address in Dhaka with other group titles. The Bangla daily’s website carries sections for Bangladesh, the capital, politics, law and courts, world news, business, sport, entertainment, education, lifestyle, editorials and features, plus a letters page. An e-paper entry appears at the top of the main navigation. The mix of daily news, opinion and feature writing suits readers who want more than headline reporting from a national Bangla paper.',
    wikipedia: 'https://en.wikipedia.org/wiki/Kaler_Kantho',
  },
  {
    rank: 6,
    publicationId: 'jugantor',
    displayName: 'Jugantor',
    established: '2000',
    establishedDetail: 'First published 1 February 2000',
    organisation: 'Jamuna Group',
    publisher: 'Jamuna Printing and Publishing',
    headquarters: 'Kuril, Dhaka',
    coverage: [
      'National',
      'International',
      'Politics',
      'Economics',
      'Sport',
      'Entertainment',
      'Technology',
      'Jobs',
      'Campus',
    ],
    epaper: {
      label: null,
      url: null,
      note: 'Digital edition is offered through the publisher’s site.',
    },
    summary:
      'Jugantor, also written Daily Jugantor, was first published on 1 February 2000. It is owned by Jamuna Group and printed and published by Jamuna Printing and Publishing from Kuril in Dhaka. The Bangla daily’s site is organised around national, international, politics, economics, sports and entertainment sections, with additional pages for technology, jobs and campus news and a doctor-availability service for readers. A digital edition can be reached from the publisher’s site. Its section mix covers hard news alongside practical reader services, which makes it useful for readers following business, employment or campus topics as well as daily politics.',
    wikipedia: 'https://en.wikipedia.org/wiki/Jugantor',
  },
  {
    rank: 7,
    publicationId: 'samakal',
    displayName: 'Samakal',
    established: '2005',
    establishedDetail: 'Began publication in 2005',
    organisation: 'Ha-meem Group',
    publisher: 'Abul Kalam Azad',
    headquarters: 'Dhaka',
    coverage: [
      'National',
      'Politics',
      'Economy',
      'World',
      'Sport',
      'Entertainment',
      'Crime',
      'Opinion',
      'Divisions',
      'Education',
      'Technology',
      'Share market',
    ],
    epaper: {
      label: 'Samakal e-paper',
      url: 'https://epaper.samakal.com/',
      note: 'Direct page-by-page edition, checked on 27 November 2026.',
    },
    summary:
      'Samakal began publication in 2005 and is owned by Ha-meem Group, with Abul Kalam Azad as publisher. The Bangla daily is published from Dhaka, and its website groups news by national, politics, economy, world, sport, entertainment, crime and opinion sections, alongside dedicated pages for each of the eight divisions, from Dhaka and Chattogram to Rangpur and Mymensingh. It also carries education, technology, share market, lifestyle, travel and feature sections, plus an archive and a verified e-paper at epaper.samakal.com. The division pages make it convenient for readers who want national news and regional reporting in one place.',
    wikipedia: 'https://en.wikipedia.org/wiki/Samakal',
  },
  {
    rank: 8,
    publicationId: 'naya-diganta',
    displayName: 'Daily Naya Diganta',
    established: '2004',
    establishedDetail: 'Founded in 2004',
    organisation: 'Diganta Media Corporation',
    publisher: 'Shamsul Huda',
    headquarters: 'Motijheel, Dhaka',
    coverage: [
      'National',
      'Politics',
      'Business',
      'Finance & commerce',
      'World',
      'Sport',
      'Entertainment',
      'Editorial & op-ed',
      'Law & judiciary',
      'Campus',
      'Lifestyle',
      'Arts & literature',
    ],
    epaper: {
      label: null,
      url: null,
      note: 'Print-version pages are linked from the site.',
    },
    summary:
      'Daily Naya Diganta was founded in 2004 and is owned by Diganta Media Corporation, with Shamsul Huda as publisher. The Bangla daily is based at Motijheel in Dhaka. Its website is organised by topic, including national, politics, business and industry, finance and commerce, sports, entertainment, editorial and op-ed, law and judiciary, crime, campus, lifestyle, feature, arts and literature, and religion and philosophy. Separate world sections cover South Asia, the Middle East, Asia, Africa, America and global media. A print-version archive and a video section are also available, giving readers a wide spread of topic pages inside one publication.',
    wikipedia: 'https://en.wikipedia.org/wiki/Daily_Naya_Diganta',
  },
  {
    rank: 9,
    publicationId: 'manab-zamin',
    displayName: 'Manab Zamin',
    established: '1998',
    establishedDetail: 'Founded in 1998',
    organisation: 'Daily Manab Zamin',
    publisher: 'Mahbuba Chowdhury',
    headquarters: 'Zenith Tower, Kawran Bazar, Dhaka',
    coverage: [
      'National',
      'Politics',
      'World',
      'Economy',
      'Sport',
      'Entertainment',
      'Opinion',
      'Expatriates',
      'Education',
      'Health',
    ],
    epaper: {
      label: null,
      url: null,
      note: 'Today’s paper and print edition are linked from the site.',
    },
    summary:
      'Manab Zamin was founded in 1998 and appears in tabloid format, with Mahbuba Chowdhury as publisher. The Bangla daily is published from Zenith Tower in Kawran Bazar, Dhaka. Its site links directly to today’s paper and a print edition alongside online reporting, and it groups coverage under economy, sport, country and abroad, politics, entertainment, India, expatriate life, opinion, career, education and health. An archive of earlier editions is available for readers who want to look back. The tabloid format distinguishes it from the broadsheet dailies in this list, and the expatriate and opinion pages add subjects the other titles treat less often.',
    wikipedia: 'https://en.wikipedia.org/wiki/Manab_Zamin',
  },
  {
    rank: 10,
    publicationId: 'dainik-inqilab',
    displayName: 'Daily Inqilab',
    established: '1986',
    establishedDetail: 'First published 4 June 1986',
    organisation: 'Inqilab Enterprise & Publications Limited',
    publisher: 'A. M. M. Bahauddin',
    headquarters: 'R. K. Mission Road, Dhaka',
    coverage: [
      'National',
      'International',
      'Politics',
      'Economy',
      'Cricket',
      'Football',
      'Entertainment',
      'Islamic world',
      'Editorial',
      'Health',
      'Literature',
      'Campus',
    ],
    epaper: {
      label: 'Daily Inqilab e-paper',
      url: 'https://epaper.dailyinqilab.com/',
      note: 'Direct page-by-page edition, checked on 27 November 2026.',
    },
    summary:
      'Daily Inqilab was founded on 4 June 1986 by Maulana Abdul Mannan and is owned by Inqilab Enterprise & Publications Limited; A. M. M. Bahauddin is publisher and editor. The Bangla daily is based on R. K. Mission Road in Dhaka. Its website covers national and international news, politics, economy, cricket, football and other sports, entertainment across Dhallywood, Bollywood and Hollywood, along with sections on Islamic life, religion and philosophy, health, literature, campus, information technology and expatriate life. A verified e-paper is available at epaper.dailyinqilab.com. Readers interested in its religious and opinion pages will find them alongside daily news.',
    wikipedia: 'https://en.wikipedia.org/wiki/Daily_Inqilab',
  },
]

export const topNewspapers = entries
  .map((entry) => ({
    ...entry,
    publication: byId.get(entry.publicationId) ?? null,
  }))
  .filter((entry) => entry.publication)

/** Criteria used to choose and order the ten titles, shown on the page. */
export const rankingFactors = [
  {
    title: 'Publication history',
    description:
      'How long a title has published continuously, and whether the founding date can be confirmed from a public record.',
  },
  {
    title: 'National scope',
    description:
      'Whether the newsroom covers Bangladesh as a whole rather than a single district or a narrow beat.',
  },
  {
    title: 'Breadth of coverage',
    description:
      'The range of sections a reader can reach: politics, economy, world news, sport, opinion, culture and regional reporting.',
  },
  {
    title: 'Verified digital access',
    description:
      'An official website that loads, plus an e-paper or digital edition where the publisher provides one.',
  },
  {
    title: 'Reader relevance',
    description:
      'How often the title is used as a daily reference point by Bangladeshi readers, based on publicly visible presence rather than private analytics.',
  },
]

export const comparisonFactors = [
  {
    title: 'Language',
    description:
      'Bangla dailies reach the largest domestic audience and carry the widest district-level reporting. English dailies publish smaller print runs but are read by professionals, diplomats, researchers and anyone who prefers English.',
  },
  {
    title: 'National or regional coverage',
    description:
      'All ten titles here report nationally. If you need news from one district, the local newspaper list groups titles by division and district instead.',
  },
  {
    title: 'Business and economy',
    description:
      'Every paper in this list runs an economy or business section. For market data and specialist financial reporting, the business news list goes further.',
  },
  {
    title: 'Opinion and analysis',
    description:
      'Editorial and op-ed pages differ sharply between titles. Reading two papers from different groups is a quick way to compare how the same event is framed.',
  },
  {
    title: 'Digital and e-paper access',
    description:
      'Websites update through the day; an e-paper reproduces the printed page. Some digital editions need a free registration or a subscription, which the publisher controls.',
  },
]

export const choosingFactors = [
  {
    title: 'Start with the language you read most',
    description:
      'Bangla dailies carry broader local reporting; English dailies are easier to quote and share with readers outside Bangladesh. Both lists are in the directory.',
  },
  {
    title: 'Decide whether you need national or local news',
    description:
      'National dailies cover the country but rarely in district detail. For one district or division, use the local newspaper directory.',
  },
  {
    title: 'Check the sections you actually read',
    description:
      'Sports, business, technology, campus and opinion pages vary in depth. Open two or three titles and compare the section you follow before committing.',
  },
  {
    title: 'Prefer an e-paper for page-for-page reading',
    description:
      'An e-paper keeps the printed layout and page order. Web editions are easier to search and update faster, but they do not show the printed page.',
  },
  {
    title: 'Read more than one source',
    description:
      'Bangladeshi papers belong to different ownership groups and make different editorial choices. Comparing two titles is the simplest way to notice what one leaves out.',
  },
]

export const topNewspaperFaqs = [
  {
    question: 'What are the top 10 newspapers in Bangladesh?',
    answer:
      'This guide lists Prothom Alo, The Daily Star, The Daily Ittefaq, Bangladesh Pratidin, Kaler Kantho, Jugantor, Samakal, Daily Naya Diganta, Manab Zamin and Daily Inqilab. They are ten widely read national titles across Bangla and English, presented in an editorial order rather than an official ranking.',
  },
  {
    question: 'Is this an official ranking of Bangladeshi newspapers?',
    answer:
      'No. No government body or independent auditor publishes a current, complete ranking of Bangladeshi newspapers by readership. The order here reflects documented publication history, national scope, breadth of sections and verified digital access. It is not a circulation table, an advertising rate card or an endorsement.',
  },
  {
    question: 'How was the order of the ten newspapers decided?',
    answer:
      'Each title was checked for a confirmed founding date, a named publisher or owning group, a working official website and, where available, an e-paper. The final order weighs those factors together. Where two papers are close, the older title or the one with broader verified sections sits higher.',
  },
  {
    question: 'Which newspaper is the most read in Bangladesh?',
    answer:
      'There is no single current audited figure that answers this for every title. The Department of Films and Publications has published circulation declarations, and some of those numbers are more than a decade old. Because the available data is dated and incomplete, this page does not name a most-read paper and does not list circulation figures as if they were current.',
  },
  {
    question: 'What is the difference between Bangla and English newspapers in Bangladesh?',
    answer:
      'Bangla dailies publish in Bengali for the domestic readership and usually carry more district and grassroots reporting. English dailies are smaller in number and print run but are read by professionals, researchers and international readers. Several media groups publish both, so the same owner may operate a Bangla and an English title.',
  },
  {
    question: 'Do all ten newspapers offer an e-paper?',
    answer:
      'Prothom Alo, The Daily Ittefaq, Samakal and Daily Inqilab have direct e-paper addresses verified for this page. The others publish digital or print-version editions that are reached from their own sites, and The Daily Star’s digital edition may ask readers to register. Access rules are set by each publisher and can change.',
  },
  {
    question: 'Are these the oldest newspapers in Bangladesh?',
    answer:
      'No. The Daily Ittefaq, whose first issue appeared in 1949, is the oldest title in this selection, but older Bangladeshi publications exist and the country’s press history reaches back further. This list is a reading guide to ten notable national dailies, not a chronology of the industry.',
  },
]
