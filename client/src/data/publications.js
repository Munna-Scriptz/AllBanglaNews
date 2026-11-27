import {
  divisions as localDivisions,
  localPublications,
} from './localPublications.js'
import { radioPublications } from './radioPublications.js'
import { expandedPublications } from './expandedPublications.js'
import { autoLogos } from './autoLogos.js'
import { popularLogos } from './popularLogos.js'
import { popularityScores } from './popularity.js'

/**
 * All Bangla Newspapers — Bangladesh News Directory
 * Central publication data.
 *
 * To add a publication:
 *   1. Add the official logo/wordmark to /public/logos/ (SVG, WebP or PNG).
 *   2. Add an entry below using the same shape.
 *
 * `epaper` marks publications that also offer a digital edition.
 * `epaperUrl` is set only when the publisher's separate e-paper page has been
 * verified; otherwise it stays null and the listing falls back to the official
 * homepage. `popularity` is an editorial display priority, not a traffic or
 * circulation figure. `ranking` remains null because it is reserved for
 * verified data only.
 */

export const categories = [
  {
    id: 'all',
    label: 'All Newspapers',
    shortLabel: 'All',
    path: '/#directory',
    icon: 'LayoutGrid',
    description:
      'Every national and local newspaper, online portal, business publication, magazine, radio station, e-paper, TV channel, news agency and international publication in one directory.',
    countLabel: 'unique outlets',
    meta: 'Complete index',
  },
  {
    id: 'bangla',
    label: 'All Bangla Newspapers',
    shortLabel: 'Bangla',
    path: '/bangla-newspapers',
    icon: 'Newspaper',
    description:
      'All Bangla newspapers published in Bangladesh, from national Bengali dailies to regional titles.',
    countLabel: 'newspapers',
    meta: 'Bengali language',
  },
  {
    id: 'english',
    label: 'All English Newspapers',
    shortLabel: 'English',
    path: '/english-newspapers',
    icon: 'Languages',
    description:
      'All English-language newspapers and business dailies published in Bangladesh.',
    countLabel: 'newspapers',
    meta: 'English language',
  },
  {
    id: 'epaper',
    label: 'E-Paper',
    shortLabel: 'E-Paper',
    path: '/e-paper',
    icon: 'Tablet',
    description:
      'Today’s e-paper editions from Bangladeshi newspapers, with page-for-page digital copies.',
    countLabel: 'digital editions',
    meta: 'Digital editions',
  },
  {
    id: 'tv',
    label: 'TV Channels',
    shortLabel: 'TV',
    path: '/tv-channels',
    icon: 'Tv',
    description:
      'Bangladeshi TV channels, including live news, current affairs and entertainment broadcasters.',
    countLabel: 'channels',
    meta: 'Television',
  },
  {
    id: 'online',
    label: 'Online News',
    shortLabel: 'Online',
    path: '/online-news',
    icon: 'Radio',
    description:
      'Bangladeshi online news portals and Bangla news sites, updated throughout the day.',
    countLabel: 'portals',
    meta: 'Digital news',
  },
  {
    id: 'local',
    label: 'Local Newspapers',
    shortLabel: 'Local',
    path: '/local-newspapers',
    icon: 'MapPin',
    description:
      'District-level Bangla newspapers and local news portals, grouped by Bangladesh’s eight divisions.',
    countLabel: 'local titles',
    meta: '8 divisions',
  },
  {
    id: 'international',
    label: 'International',
    shortLabel: 'International',
    path: '/international',
    icon: 'Globe',
    description:
      'International newspapers and global news services, including Bangla-language world coverage.',
    countLabel: 'publications',
    meta: 'Worldwide',
  },
  {
    id: 'radio',
    label: 'Radio Stations',
    shortLabel: 'Radio',
    path: '/radio',
    icon: 'RadioTower',
    description:
      'Bangladeshi FM and state radio stations with official websites and live-listening pages.',
    countLabel: 'stations',
    meta: 'FM & online',
  },
  {
    id: 'magazines',
    label: 'Magazines',
    shortLabel: 'Magazines',
    path: '/magazines',
    icon: 'BookOpen',
    description:
      'Bangladeshi magazines, weekly periodicals and specialist publications.',
    countLabel: 'magazines',
    meta: 'Periodicals',
  },
  {
    id: 'business',
    label: 'Business & Finance',
    shortLabel: 'Business',
    path: '/business-news',
    icon: 'Briefcase',
    description:
      'Bangladeshi business dailies, financial news sites and market publications.',
    countLabel: 'publications',
    meta: 'Business & markets',
  },
  {
    id: 'agencies',
    label: 'News Agencies',
    shortLabel: 'Agencies',
    path: '/news-agencies',
    icon: 'Building2',
    description:
      'Bangladeshi and international news agencies, wire services and syndicated news providers.',
    countLabel: 'agencies',
    meta: 'Wire services',
  },
]

const publicationRecords = [
  // ── Bangla newspapers ─────────────────────────────────────────────────────
  {
    id: 'prothom-alo',
    name: 'Prothom Alo',
    banglaName: 'প্রথম আলো',
    logo: '/logos/prothom-alo.svg',
    website: 'https://www.prothomalo.com/',
    category: 'bangla',
    language: 'Bangla',
    description:
      "One of Bangladesh's most established Bengali dailies, with national reporting, analysis and opinion.",
    featured: true,
    epaper: true,
    epaperUrl: 'https://epaper.prothomalo.com/',
    epaperDescription:
      'Read today’s Prothom Alo e-paper, the publisher’s page-by-page digital edition.',
    popularity: null,
    ranking: null,
  },
  {
    id: 'bangladesh-pratidin',
    name: 'Bangladesh Pratidin',
    banglaName: 'বাংলাদেশ প্রতিদিন',
    logo: '/logos/bangladesh-pratidin.svg',
    website: 'https://www.bd-pratidin.com/',
    category: 'bangla',
    language: 'Bangla',
    description:
      'A leading Bengali daily covering national politics, districts, business and entertainment.',
    featured: true,
    epaper: true,
    epaperUrl: null,
    epaperDescription:
      'Visit Bangladesh Pratidin’s official website to find today’s e-paper edition.',
    popularity: null,
    ranking: null,
  },
  {
    id: 'kaler-kantho',
    name: 'Kaler Kantho',
    banglaName: 'কালের কণ্ঠ',
    logo: '/logos/kaler-kantho.png',
    website: 'https://www.kalerkantho.com/',
    category: 'bangla',
    language: 'Bangla',
    description:
      'A national Bengali daily with broad coverage of politics, business, sports and culture.',
    featured: true,
    epaper: true,
    epaperUrl: null,
    epaperDescription:
      'Visit Kaler Kantho’s official website to find today’s e-paper edition.',
    popularity: null,
    ranking: null,
  },
  {
    id: 'jugantor',
    name: 'Jugantor',
    banglaName: 'যুগান্তর',
    logo: '/logos/jugantor.png',
    website: 'https://www.jugantor.com/',
    category: 'bangla',
    language: 'Bangla',
    description:
      'A national Bengali daily offering politics, economy, sports and feature reporting.',
    featured: true,
    epaper: true,
    epaperUrl: null,
    epaperDescription:
      'Visit Jugantor’s official website to find today’s e-paper edition.',
    popularity: null,
    ranking: null,
  },
  {
    id: 'ittefaq',
    name: 'Ittefaq',
    banglaName: 'দৈনিক ইত্তেফাক',
    logo: '/logos/ittefaq.svg',
    website: 'https://www.ittefaq.com.bd/',
    category: 'bangla',
    language: 'Bangla',
    description:
      "One of the country's oldest Bengali dailies, publishing national and international news.",
    featured: true,
    epaper: true,
    epaperUrl: 'https://epaper.ittefaq.com.bd/',
    epaperDescription:
      'Read today’s Ittefaq e-paper, the publisher’s page-by-page digital edition.',
    popularity: null,
    ranking: null,
  },
  {
    id: 'samakal',
    name: 'Samakal',
    banglaName: 'সমকাল',
    logo: '/logos/samakal.png',
    website: 'https://samakal.com/',
    category: 'bangla',
    language: 'Bangla',
    description:
      'A Bengali daily recognised for reporting, analysis and cultural coverage.',
    featured: true,
    epaper: true,
    epaperUrl: 'https://epaper.samakal.com/',
    epaperDescription:
      'Read today’s Samakal e-paper, the publisher’s page-by-page digital edition.',
    popularity: null,
    ranking: null,
  },
  {
    id: 'naya-diganta',
    name: 'Naya Diganta',
    banglaName: 'দৈনিক নয়া দিগন্ত',
    logo: '/logos/naya-diganta.png',
    website: 'https://dailynayadiganta.com/',
    category: 'bangla',
    language: 'Bangla',
    description:
      'A national Bengali daily covering current affairs, politics and regional news.',
    featured: false,
    epaper: true,
    epaperUrl: null,
    epaperDescription:
      'Visit Naya Diganta’s official website to find today’s e-paper edition.',
    popularity: null,
    ranking: null,
  },
  {
    id: 'manab-zamin',
    name: 'Manab Zamin',
    banglaName: 'মানবজমিন',
    logo: '/logos/manab-zamin.png',
    website: 'https://mzamin.com/',
    category: 'bangla',
    language: 'Bangla',
    description:
      'A Bengali daily with a focus on national news, business and international affairs.',
    featured: false,
    epaper: true,
    epaperUrl: null,
    epaperDescription:
      'Visit Manab Zamin’s official website to find today’s e-paper edition.',
    popularity: null,
    ranking: null,
  },
  {
    id: 'bonik-barta',
    name: 'Bonik Barta',
    banglaName: 'বণিক বার্তা',
    logo: '/logos/bonik-barta.png',
    website: 'https://www.bonikbarta.com/',
    category: 'bangla',
    language: 'Bangla',
    description:
      'A Bengali business daily covering markets, the economy and enterprise.',
    featured: false,
    epaper: true,
    epaperUrl: 'https://epaper.bonikbarta.com/',
    epaperDescription:
      'Read today’s Bonik Barta e-paper, the business daily’s page-by-page digital edition.',
    popularity: null,
    ranking: null,
  },
  {
    id: 'dainik-inqilab',
    name: 'Dainik Inqilab',
    banglaName: 'দৈনিক ইনকিলাব',
    logo: '/logos/dainik-inqilab.png',
    website: 'https://dailyinqilab.com/',
    category: 'bangla',
    language: 'Bangla',
    description:
      'A long-running Bengali daily with national, political and international coverage.',
    featured: false,
    epaper: true,
    epaperUrl: 'https://epaper.dailyinqilab.com/',
    epaperDescription:
      'Read today’s Dainik Inqilab e-paper, the publisher’s page-by-page digital edition.',
    popularity: null,
    ranking: null,
  },
  {
    id: 'dainik-bangla',
    name: 'Dainik Bangla',
    banglaName: 'দৈনিক বাংলা',
    logo: '/logos/dainik-bangla.png',
    website: 'https://dainikbangla.com/',
    category: 'bangla',
    language: 'Bangla',
    description:
      'A Bengali daily covering national affairs, politics and everyday news.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'bhorer-kagoj',
    name: 'Bhorer Kagoj',
    banglaName: 'ভোরের কাগজ',
    logo: '/logos/bhorer-kagoj.png',
    website: 'https://www.bhorerkagoj.net/',
    category: 'bangla',
    language: 'Bangla',
    description:
      'A Bengali daily known for reporting on politics, society and culture.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'janakantha',
    name: 'Janakantha',
    banglaName: 'দৈনিক জনকণ্ঠ',
    logo: '/logos/janakantha.png',
    website: 'https://dailyjanakantha.com/',
    category: 'bangla',
    language: 'Bangla',
    description:
      'A national Bengali daily with coverage of politics, economy and sports.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'jaijaidin',
    name: 'Jaijaidin',
    banglaName: 'যায়যায়দিন',
    logo: '/logos/jaijaidin.png',
    website: 'https://www.jaijaidin.news/',
    category: 'bangla',
    language: 'Bangla',
    description:
      'A Bengali daily offering national news, opinion and features.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'amar-desh',
    name: 'Amar Desh',
    banglaName: 'আমার দেশ',
    logo: '/logos/amar-desh.png',
    website: 'https://amardesh.com/',
    category: 'bangla',
    language: 'Bangla',
    description:
      'A Bengali daily covering politics, national affairs and current events.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'amader-shomoy',
    name: 'Amader Shomoy',
    banglaName: 'আমাদের সময়',
    logo: '/logos/amader-shomoy.png',
    website: 'https://www.dainikamadershomoy.com/',
    category: 'bangla',
    language: 'Bangla',
    description:
      'A Bengali daily with national and regional reporting from across Bangladesh.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'sangbad',
    name: 'Sangbad',
    banglaName: 'দৈনিক সংবাদ',
    logo: '/logos/sangbad.png',
    website: 'https://sangbad.net/',
    category: 'bangla',
    language: 'Bangla',
    description:
      "One of Bangladesh's historic Bengali dailies, covering national affairs and opinion.",
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'alokito-bangladesh',
    name: 'Alokito Bangladesh',
    banglaName: 'আলোকিত বাংলাদেশ',
    logo: '/logos/alokito-bangladesh.png',
    website: 'https://alokitobangladesh.com/',
    category: 'bangla',
    language: 'Bangla',
    description:
      'A Bengali daily covering national news, politics and local reporting.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'kalbela',
    name: 'Kalbela',
    banglaName: 'কালবেলা',
    logo: '/logos/kalbela.webp',
    website: 'https://kalbela.com/',
    category: 'bangla',
    language: 'Bangla',
    description:
      'A Bengali daily with current affairs, business and sports coverage.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'desh-rupantor',
    name: 'Desh Rupantor',
    banglaName: 'দেশ রূপান্তর',
    logo: '/logos/desh-rupantor.png',
    website: 'https://deshrupantor.com/',
    category: 'bangla',
    language: 'Bangla',
    description:
      'A Bengali daily covering national politics, economy and society.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'ajker-patrika',
    name: 'Ajker Patrika',
    banglaName: 'আজকের পত্রিকা',
    logo: '/logos/ajker-patrika.svg',
    website: 'https://www.ajkerpatrika.com/',
    category: 'bangla',
    language: 'Bangla',
    description:
      'A national Bengali daily covering politics, the economy, sports and everyday life.',
    featured: false,
    epaper: true,
    epaperUrl: 'https://epaper.ajkerpatrika.com/',
    epaperDescription:
      'Read today’s Ajker Patrika e-paper, the publisher’s page-by-page digital edition.',
    popularity: null,
    ranking: null,
  },
  {
    id: 'shomoyer-kagoj',
    name: 'Shomoyer Kagoj',
    banglaName: 'সময়ের কাগজ',
    logo: null,
    website: 'https://somoyerkagoj.com/',
    category: 'bangla',
    language: 'Bangla',
    description:
      'A Dhaka-based Bangla daily covering national politics, economy and international news.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'loksamaj',
    name: 'Loksamaj',
    banglaName: 'লোকসমাজ',
    logo: '/logos/loksamaj.png',
    website: 'https://loksamaj.com/',
    category: 'bangla',
    language: 'Bangla',
    description:
      'A Bangla daily with national news, opinion, culture and special reports.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'dainik-azadi',
    name: 'Dainik Azadi',
    banglaName: 'দৈনিক আজাদী',
    logo: '/logos/dainik-azadi.png',
    website: 'https://dainikazadi.net/',
    category: 'local',
    division: 'chattogram',
    district: 'Chattogram',
    language: 'Bangla',
    description:
      'A historic Bengali daily published from Chattogram, covering regional and national news.',
    featured: false,
    epaper: true,
    epaperUrl: null,
    epaperDescription:
      'Visit Dainik Azadi’s official website to find today’s e-paper edition.',
    popularity: null,
    ranking: null,
  },
  {
    id: 'dainik-purbokone',
    name: 'Dainik Purbokone',
    banglaName: 'দৈনিক পূর্বকোণ',
    logo: '/logos/dainik-purbokone.png',
    website: 'https://dainikpurbokone.net/',
    category: 'local',
    division: 'chattogram',
    district: 'Chattogram',
    language: 'Bangla',
    description:
      'A Chattogram-based Bengali daily covering the port city, nearby districts and national affairs.',
    featured: false,
    epaper: true,
    epaperUrl: null,
    epaperDescription:
      'Visit Dainik Purbokone’s official website to find today’s e-paper edition.',
    popularity: null,
    ranking: null,
  },
  {
    id: 'sylheter-dak',
    name: 'Sylheter Dak',
    banglaName: 'সিলেটের ডাক',
    logo: '/logos/sylheter-dak.png',
    website: 'https://sylheterdak.com.bd/',
    category: 'local',
    division: 'sylhet',
    district: 'Sylhet',
    language: 'Bangla',
    description:
      'A Bengali daily published from Sylhet, with regional and national reporting.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },

  // ── English newspapers ────────────────────────────────────────────────────
  {
    id: 'the-daily-star',
    name: 'The Daily Star',
    banglaName: 'দ্য ডেইলি স্টার',
    logo: '/logos/the-daily-star.svg',
    website: 'https://www.thedailystar.net/',
    category: 'english',
    language: 'English',
    description:
      "Bangladesh's leading English daily, with national, business and international coverage.",
    featured: true,
    epaper: true,
    epaperUrl: 'https://epaper.thedailystar.net/',
    epaperDescription:
      'Read The Daily Star e-paper; the publisher’s digital edition redirects to a login portal.',
    popularity: null,
    ranking: null,
  },
  {
    id: 'dhaka-tribune',
    name: 'Dhaka Tribune',
    banglaName: 'ঢাকা ট্রিবিউন',
    logo: '/logos/dhaka-tribune.png',
    website: 'https://www.dhakatribune.com/',
    category: 'english',
    language: 'English',
    description:
      'An English daily covering Bangladesh politics, business, culture and global affairs.',
    featured: true,
    epaper: true,
    epaperUrl: 'https://epaper.dhakatribune.com/',
    epaperDescription:
      'Read today’s Dhaka Tribune e-paper, the publisher’s page-by-page digital edition.',
    popularity: null,
    ranking: null,
  },
  {
    id: 'financial-express',
    name: 'The Financial Express',
    banglaName: 'দ্য ফিন্যান্সিয়াল এক্সপ্রেস',
    logo: '/logos/financial-express.png',
    website: 'https://thefinancialexpress.com.bd/',
    category: 'english',
    language: 'English',
    description:
      'An English business daily focused on markets, the economy and policy.',
    featured: false,
    epaper: true,
    epaperUrl: 'https://epaper.thefinancialexpress.com.bd/',
    epaperDescription:
      'Read today’s Financial Express e-paper, the business daily’s page-by-page digital edition.',
    popularity: null,
    ranking: null,
  },
  {
    id: 'new-age',
    name: 'New Age',
    banglaName: 'নিউ এজ',
    logo: '/logos/new-age.png',
    website: 'https://www.newagebd.net/',
    category: 'english',
    language: 'English',
    description:
      'An English daily offering national news, opinion and analysis.',
    featured: false,
    epaper: true,
    epaperUrl: 'https://epaper.newagebd.net/',
    epaperDescription:
      'Read today’s New Age e-paper, the publisher’s page-by-page digital edition.',
    popularity: null,
    ranking: null,
  },
  {
    id: 'business-standard',
    name: 'The Business Standard',
    banglaName: 'দ্য বিজনেস স্ট্যান্ডার্ড',
    logo: '/logos/business-standard.png',
    website: 'https://www.tbsnews.net/',
    category: 'english',
    language: 'English',
    description:
      'An English business publication covering the economy, markets and policy.',
    featured: false,
    epaper: true,
    epaperUrl: 'https://epaper.tbsnews.net/',
    epaperDescription:
      'Read today’s Business Standard e-paper at the publisher’s official digital edition.',
    popularity: null,
    ranking: null,
  },
  {
    id: 'daily-sun',
    name: 'Daily Sun',
    banglaName: 'ডেইলি সান',
    logo: '/logos/daily-sun.png',
    website: 'https://www.daily-sun.com/',
    category: 'english',
    language: 'English',
    description:
      'An English daily with national, business and lifestyle coverage.',
    featured: false,
    epaper: true,
    epaperUrl: null,
    epaperDescription:
      'Visit Daily Sun’s official website to find today’s e-paper edition.',
    popularity: null,
    ranking: null,
  },
  {
    id: 'the-independent',
    name: 'The Independent',
    banglaName: 'দ্য ইন্ডিপেনডেন্ট',
    logo: '/logos/the-independent.png',
    website: 'https://theindependentbd.com/',
    category: 'english',
    language: 'English',
    description:
      'An English daily covering national affairs, politics and culture.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'bangladesh-post',
    name: 'Bangladesh Post',
    banglaName: 'বাংলাদেশ পোস্ট',
    logo: '/logos/bangladesh-post.png',
    website: 'https://bangladeshpost.net/',
    category: 'english',
    language: 'English',
    description:
      'An English daily focused on national news, diplomacy and business.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'asian-age',
    name: 'The Asian Age',
    banglaName: 'দ্য এশিয়ান এজ',
    logo: '/logos/asian-age.png',
    website: 'https://dailyasianage.com/',
    category: 'english',
    language: 'English',
    description:
      'An English daily covering Bangladesh and international affairs.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'daily-observer',
    name: 'The Daily Observer',
    banglaName: 'দ্য ডেইলি অবজারভার',
    logo: '/logos/daily-observer.png',
    website: 'https://www.observerbd.com/',
    category: 'english',
    language: 'English',
    description:
      'An English daily with national, business and feature reporting.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'dhaka-courier',
    name: 'Dhaka Courier',
    banglaName: 'ঢাকা কুরিয়ার',
    logo: '/logos/dhaka-courier.png',
    website: 'https://www.dhakacourier.com.bd/',
    category: 'english',
    language: 'English',
    description:
      'A weekly English news magazine covering politics, culture and opinion.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'bangladesh-today',
    name: 'The Bangladesh Today',
    banglaName: 'দ্য বাংলাদেশ টুডে',
    logo: '/logos/bangladesh-today.png',
    website: 'https://thebangladeshtoday.com/',
    category: 'english',
    language: 'English',
    description:
      'An English daily covering national and international news.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'the-new-nation',
    name: 'The New Nation',
    banglaName: 'দ্য নিউ নেশন',
    logo: '/logos/the-new-nation.png',
    website: 'https://dailynewnation.com/',
    category: 'english',
    language: 'English',
    description:
      'An English daily published from Dhaka, covering national politics, diplomacy and opinion.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },

  // ── Online news portals ───────────────────────────────────────────────────
  {
    id: 'bdnews24',
    name: 'bdnews24',
    banglaName: 'বিডিনিউজ টোয়েন্টিফোর',
    logo: '/logos/bdnews24.png',
    website: 'https://www.bdnews24.com/',
    category: 'online',
    language: 'Bangla',
    description:
      "Bangladesh's first online news portal, publishing breaking news and analysis.",
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'bangla-tribune',
    name: 'Bangla Tribune',
    banglaName: 'বাংলা ট্রিবিউন',
    logo: '/logos/bangla-tribune.svg',
    website: 'https://www.banglatribune.com/',
    category: 'online',
    language: 'Bangla',
    description:
      'A Bengali digital newsroom covering politics, business and culture.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'jago-news24',
    name: 'Jago News 24',
    banglaName: 'জাগো নিউজ ২৪',
    logo: '/logos/jago-news24.png',
    website: 'https://www.jagonews24.com/',
    category: 'online',
    language: 'Bangla',
    description:
      'A Bengali online news portal with round-the-clock reporting.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'dhaka-post',
    name: 'Dhaka Post',
    banglaName: 'ঢাকা পোস্ট',
    logo: '/logos/dhaka-post.png',
    website: 'https://www.dhakapost.com/',
    category: 'online',
    language: 'Bangla',
    description:
      'A Bengali digital publication covering national and city news.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'banglanews24',
    name: 'Banglanews24',
    banglaName: 'বাংলানিউজ২৪',
    logo: '/logos/banglanews24.png',
    website: 'https://www.banglanews24.com/',
    category: 'online',
    language: 'Bangla',
    description:
      'A Bengali online news service with national and international coverage.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'risingbd',
    name: 'RisingBD',
    banglaName: 'রাইজিংবিডি',
    logo: '/logos/risingbd.png',
    website: 'https://www.risingbd.com/',
    category: 'online',
    language: 'Bangla',
    description:
      'A Bengali online portal covering entertainment, sports and current affairs.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'unb',
    name: 'United News of Bangladesh',
    banglaName: 'ইউএনবি',
    logo: '/logos/unb.png',
    website: 'https://unb.com.bd/',
    category: 'agencies',
    language: 'English',
    description:
      "Bangladesh's national news agency, delivering wire-style news and reports.",
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'bd24live',
    name: 'bd24live',
    banglaName: 'বিডি২৪লাইভ',
    logo: '/logos/bd24live.png',
    website: 'https://www.bd24live.com/',
    category: 'online',
    language: 'Bangla',
    description:
      'A Bengali online news portal with live updates and multimedia.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'priyo',
    name: 'Priyo',
    banglaName: 'প্রিয়.কম',
    logo: '/logos/priyo.png',
    website: 'https://priyo.com/',
    category: 'online',
    language: 'Bangla',
    description:
      'A Bengali digital outlet covering news, lifestyle and entertainment.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'bss',
    name: 'Bangladesh Sangbad Sangstha',
    banglaName: 'বাংলাদেশ সংবাদ সংস্থা',
    logo: '/logos/bss.png',
    website: 'https://www.bssnews.net/',
    category: 'agencies',
    language: 'Bangla',
    description:
      "The state-run national news agency of Bangladesh, publishing in Bangla and English.",
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'dhaka-times',
    name: 'Dhaka Times',
    banglaName: 'ঢাকা টাইমস',
    logo: '/logos/dhaka-times.png',
    website: 'https://www.dhakatimes24.com/',
    category: 'online',
    language: 'Bangla',
    description:
      'An online news portal covering Dhaka, national affairs and features.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'the-report-24',
    name: 'The Report 24',
    banglaName: 'দ্য রিপোর্ট ২৪',
    logo: '/logos/the-report-24.png',
    website: 'https://www.thereport24.com/',
    category: 'online',
    language: 'English',
    description:
      'An English-language online news outlet covering Bangladesh and international affairs.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },

  // ── Television channels ───────────────────────────────────────────────────
  {
    id: 'somoy-tv',
    name: 'Somoy TV',
    banglaName: 'সময় টিভি',
    logo: '/logos/somoy-tv.png',
    website: 'https://www.somoynews.tv/',
    category: 'tv',
    language: 'Bangla',
    description:
      'A 24-hour Bengali news channel with national and international coverage.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'channel-i',
    name: 'Channel i',
    banglaName: 'চ্যানেল আই',
    logo: '/logos/channel-i.webp',
    website: 'https://www.channelionline.com/',
    category: 'tv',
    language: 'Bangla',
    description:
      'A popular Bangladeshi television channel with news, drama and culture.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'atn-bangla',
    name: 'ATN Bangla',
    banglaName: 'এটিএন বাংলা',
    logo: '/logos/atn-bangla.png',
    website: 'https://www.atnbangla.tv/',
    category: 'tv',
    language: 'Bangla',
    description:
      'A satellite television channel with news, entertainment and talk shows.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'rtv',
    name: 'RTV',
    banglaName: 'আরটিভি',
    logo: '/logos/rtv.svg',
    website: 'https://www.rtvonline.com/',
    category: 'tv',
    language: 'Bangla',
    description:
      'A private Bangladeshi television channel covering news and entertainment.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'ntv',
    name: 'NTV',
    banglaName: 'এনটিভি',
    logo: '/logos/ntv.png',
    website: 'https://www.ntvbd.com/',
    category: 'tv',
    language: 'Bangla',
    description:
      'A Bangladeshi satellite channel with news, current affairs and entertainment.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'ekattor-tv',
    name: 'Ekattor TV',
    banglaName: 'একাত্তর টিভি',
    logo: '/logos/ekattor-tv.png',
    website: 'https://ekattor.tv/',
    category: 'tv',
    language: 'Bangla',
    description:
      'A 24-hour news channel focused on national and international affairs.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'jamuna-tv',
    name: 'Jamuna TV',
    banglaName: 'যমুনা টিভি',
    logo: '/logos/jamuna-tv.svg',
    website: 'https://www.jamuna.tv/',
    category: 'tv',
    language: 'Bangla',
    description:
      'A Bengali news and current-affairs broadcaster from Dhaka.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'independent-tv',
    name: 'Independent TV',
    banglaName: 'ইনডিপেনডেন্ট টিভি',
    logo: '/logos/independent-tv.png',
    website: 'https://www.itvbd.com/',
    category: 'tv',
    language: 'Bangla',
    description:
      'A 24-hour news channel covering Bangladesh and global events.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'dbc-news',
    name: 'DBC News',
    banglaName: 'ডিবিসি নিউজ',
    logo: '/logos/dbc-news.png',
    website: 'https://dbcnews.tv/',
    category: 'tv',
    language: 'Bangla',
    description:
      'A Bangladeshi news channel with round-the-clock bulletins.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'news24',
    name: 'News24',
    banglaName: 'নিউজ২৪',
    logo: '/logos/news24.png',
    website: 'https://www.news24bd.tv/',
    category: 'tv',
    language: 'Bangla',
    description:
      'A 24-hour Bengali news channel covering politics, business and sport.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'channel24',
    name: 'Channel 24',
    banglaName: 'চ্যানেল ২৪',
    logo: '/logos/channel24.png',
    website: 'https://www.channel24bd.tv/',
    category: 'tv',
    language: 'Bangla',
    description:
      'A Bangladeshi news and entertainment broadcaster.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'btv',
    name: 'Bangladesh Television',
    banglaName: 'বাংলাদেশ টেলিভিশন',
    logo: '/logos/btv.png',
    website: 'https://www.btv.gov.bd/',
    category: 'tv',
    language: 'Bangla',
    description:
      "Bangladesh's state-owned national television network.",
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'maasranga-tv',
    name: 'Maasranga TV',
    banglaName: 'মাছরাঙা টিভি',
    logo: '/logos/maasranga-tv.png',
    website: 'https://www.maasranga.tv/',
    category: 'tv',
    language: 'Bangla',
    description:
      'A Bangladeshi channel with news, drama and lifestyle programming.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'gazi-tv',
    name: 'Gazi TV',
    banglaName: 'গাজী টিভি',
    logo: '/logos/gazi-tv.png',
    website: 'https://gazitv.com/',
    category: 'tv',
    language: 'Bangla',
    description:
      'A sports and entertainment-focused Bangladeshi television channel.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'banglavision',
    name: 'Banglavision',
    banglaName: 'বাংলাভিশন',
    logo: '/logos/banglavision.png',
    website: 'https://www.bvnews24.com/',
    category: 'tv',
    language: 'Bangla',
    description:
      'A private Bangladeshi channel with news and entertainment.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'boishakhi-tv',
    name: 'Boishakhi TV',
    banglaName: 'বৈশাখী টিভি',
    logo: '/logos/boishakhi-tv.png',
    website: 'https://www.boishakhionline.com/',
    category: 'tv',
    language: 'Bangla',
    description:
      'A Bangladeshi satellite channel with news and cultural programming.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'atn-news',
    name: 'ATN News',
    banglaName: 'এটিএন নিউজ',
    logo: '/logos/atn-news.png',
    website: 'https://www.atnnewstv.com/',
    category: 'tv',
    language: 'Bangla',
    description:
      'A 24-hour Bengali news channel with bulletins, talk shows and current-affairs programming.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'ekhon-tv',
    name: 'Ekhon TV',
    banglaName: 'এখন টিভি',
    logo: '/logos/ekhon-tv.png',
    website: 'https://www.ekhon.tv/',
    category: 'tv',
    language: 'Bangla',
    description:
      'A Bangladeshi news channel covering business, politics and daily current affairs.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'nagorik-tv',
    name: 'Nagorik TV',
    banglaName: 'নাগরিক টিভি',
    logo: '/logos/nagorik-tv.png',
    website: 'https://nagorik.com/',
    category: 'tv',
    language: 'Bangla',
    description:
      'A Bangla news and current-affairs channel focused on public-interest journalism.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'desh-tv',
    name: 'Desh TV',
    banglaName: 'দেশ টিভি',
    logo: '/logos/desh-tv.svg',
    website: 'https://www.desh.tv/',
    category: 'tv',
    language: 'Bangla',
    description:
      'A Bangladeshi television channel with news, talk shows and entertainment.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'channel-9',
    name: 'Channel 9',
    banglaName: 'চ্যানেল নাইন',
    logo: '/logos/channel-9.png',
    website: 'https://www.channelninebd.tv/',
    category: 'tv',
    language: 'Bangla',
    description:
      'A Bangladeshi satellite channel with news and entertainment programming.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'asian-tv',
    name: 'Asian TV',
    banglaName: 'এশিয়ান টিভি',
    logo: '/logos/asian-tv.svg',
    website: 'https://www.asian.tv/',
    category: 'tv',
    language: 'Bangla',
    description:
      'A private Bangladeshi television channel with news and cultural programmes.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'my-tv',
    name: 'My TV',
    banglaName: 'মাই টিভি',
    logo: '/logos/my-tv.png',
    website: 'https://mytvbd.tv/',
    category: 'tv',
    language: 'Bangla',
    description:
      'A Bangladeshi entertainment and news channel with drama, music and bulletins.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },

  // ── International publications ────────────────────────────────────────────
  {
    id: 'bbc-news',
    name: 'BBC News',
    banglaName: 'বিবিসি নিউজ',
    logo: '/logos/bbc-news.png',
    website: 'https://www.bbc.com/news',
    category: 'international',
    language: 'English',
    description:
      "The BBC's global news service, covering world events, analysis and video.",
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'cnn',
    name: 'CNN',
    banglaName: 'সিএনএন',
    logo: '/logos/cnn.png',
    website: 'https://www.cnn.com/',
    category: 'international',
    language: 'English',
    description:
      'An international news network with breaking news and global reporting.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'al-jazeera',
    name: 'Al Jazeera',
    banglaName: 'আল জাজিরা',
    logo: '/logos/al-jazeera.png',
    website: 'https://www.aljazeera.com/',
    category: 'international',
    language: 'English',
    description:
      'A Doha-based international news network covering global affairs.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'reuters',
    name: 'Reuters',
    banglaName: 'রয়টার্স',
    logo: '/logos/reuters.png',
    website: 'https://www.reuters.com/',
    category: 'agencies',
    language: 'English',
    description:
      'An international news agency delivering breaking news and market coverage.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'the-guardian',
    name: 'The Guardian',
    banglaName: 'দ্য গার্ডিয়ান',
    logo: '/logos/the-guardian.png',
    website: 'https://www.theguardian.com/',
    category: 'international',
    language: 'English',
    description:
      'A British daily known for international reporting, opinion and culture.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'new-york-times',
    name: 'The New York Times',
    banglaName: 'দ্য নিউ ইয়র্ক টাইমস',
    logo: '/logos/new-york-times.png',
    website: 'https://www.nytimes.com/',
    category: 'international',
    language: 'English',
    description:
      'An American daily with global news, analysis and investigative journalism.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'washington-post',
    name: 'The Washington Post',
    banglaName: 'দ্য ওয়াশিংটন পোস্ট',
    logo: '/logos/washington-post.png',
    website: 'https://www.washingtonpost.com/',
    category: 'international',
    language: 'English',
    description:
      'An American daily covering politics, world news and investigations.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'associated-press',
    name: 'Associated Press',
    banglaName: 'অ্যাসোসিয়েটেড প্রেস',
    logo: '/logos/associated-press.png',
    website: 'https://apnews.com/',
    category: 'agencies',
    language: 'English',
    description:
      'A global news agency providing breaking news and wire reporting.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'deutsche-welle',
    name: 'Deutsche Welle',
    banglaName: 'ডয়চে ভেলে',
    logo: '/logos/deutsche-welle.png',
    website: 'https://www.dw.com/',
    category: 'international',
    language: 'English',
    description:
      "Germany's international broadcaster, publishing news and analysis.",
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'bbc-bangla',
    name: 'BBC Bangla',
    banglaName: 'বিবিসি বাংলা',
    logo: '/logos/bbc-bangla.png',
    website: 'https://www.bbc.com/bengali',
    category: 'international',
    language: 'Bangla',
    description:
      "The BBC's Bengali-language news service, covering Bangladesh, South Asia and the world.",
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'dw-bangla',
    name: 'DW Bangla',
    banglaName: 'ডয়চে ভেলে বাংলা',
    logo: '/logos/dw-bangla.png',
    website: 'https://www.dw.com/bn/',
    category: 'international',
    language: 'Bangla',
    description:
      "Deutsche Welle's Bengali-language service, with news, analysis and documentaries.",
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'voa-bangla',
    name: 'VOA Bangla',
    banglaName: 'ভিওএ বাংলা',
    logo: '/logos/voa-bangla.svg',
    website: 'https://www.voabangla.com/',
    category: 'international',
    language: 'Bangla',
    description:
      "Voice of America's Bengali service, covering regional and international news.",
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'times-of-india',
    name: 'The Times of India',
    banglaName: 'দ্য টাইমস অফ ইন্ডিয়া',
    logo: '/logos/times-of-india.png',
    website: 'https://timesofindia.indiatimes.com/',
    category: 'international',
    language: 'English',
    description:
      'An Indian English daily covering national, business and world news.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'dawn',
    name: 'Dawn',
    banglaName: 'ডন',
    logo: '/logos/dawn.png',
    website: 'https://www.dawn.com/',
    category: 'international',
    language: 'English',
    description:
      'A Pakistani English daily with national and international coverage.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'the-hindu',
    name: 'The Hindu',
    banglaName: 'দ্য হিন্দু',
    logo: '/logos/the-hindu.png',
    website: 'https://www.thehindu.com/',
    category: 'international',
    language: 'English',
    description:
      'An Indian English daily covering politics, business and culture.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'bloomberg',
    name: 'Bloomberg',
    banglaName: 'ব্লুমবার্গ',
    logo: '/logos/bloomberg.png',
    website: 'https://www.bloomberg.com/',
    category: 'international',
    language: 'English',
    description:
      'A global business and markets news service.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'nhk-world',
    name: 'NHK World',
    banglaName: 'এনএইচকে ওয়ার্ল্ড',
    logo: '/logos/nhk-world.png',
    website: 'https://www3.nhk.or.jp/nhkworld/',
    category: 'international',
    language: 'English',
    description:
      "Japan's international public broadcaster, with news and documentaries.",
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'cna',
    name: 'CNA',
    banglaName: 'সিএনএ',
    logo: '/logos/cna.png',
    website: 'https://www.channelnewsasia.com/',
    category: 'international',
    language: 'English',
    description:
      'A Singapore-based Asian news channel covering regional and global affairs.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'japan-times',
    name: 'The Japan Times',
    banglaName: 'দ্য জাপান টাইমস',
    logo: '/logos/japan-times.png',
    website: 'https://www.japantimes.co.jp/',
    category: 'international',
    language: 'English',
    description:
      'An English-language Japanese newspaper covering national and world news.',
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  {
    id: 'straits-times',
    name: 'The Straits Times',
    banglaName: 'দ্য স্ট্রেইটস টাইমস',
    logo: '/logos/straits-times.png',
    website: 'https://www.straitstimes.com/',
    category: 'international',
    language: 'English',
    description:
      "Singapore's English daily with regional and global coverage.",
    featured: false,
    epaper: false,
    popularity: null,
    ranking: null,
  },
  ...localPublications,
  ...radioPublications,
  ...expandedPublications,
]

/**
 * Curated logos always win. Popular records without a wordmark use a published
 * logo from `popularLogos.js`; the remaining records fall back to a self-hosted
 * publisher icon from `autoLogos.js`. Popular records are
 * then ordered by editorial popularity, with the original data order preserved
 * for ties.
 */
export const publications = publicationRecords
  .map((publication) => ({
    ...publication,
    logo:
      publication.logo ||
      popularLogos[publication.id] ||
      autoLogos[publication.id] ||
      null,
    popularity: popularityScores[publication.id] ?? 0,
  }))
  .map((publication, index) => ({ publication, index }))
  .sort(
    (a, b) =>
      b.publication.popularity - a.publication.popularity ||
      a.index - b.index,
  )
  .map(({ publication }) => publication)

export const getCategory = (id) =>
  categories.find((category) => category.id === id) ?? categories[0]

/**
 * E-paper listings reuse the newspaper identity but point at a separate
 * digital edition where one has been verified. Unverified editions keep the
 * official homepage and explain that in the listing description.
 */
const toEpaperListing = (publication) => ({
  ...publication,
  website: publication.epaperUrl ?? publication.website,
  description:
    publication.epaperDescription ??
    `Visit ${publication.name}'s official website to find its e-paper or digital edition.`,
})

export const getPublicationsByCategory = (categoryId) => {
  if (!categoryId || categoryId === 'all') return publications
  if (categoryId === 'epaper') {
    return publications
      .filter((publication) => publication.epaper)
      .map(toEpaperListing)
  }
  return publications.filter(
    (publication) => publication.category === categoryId,
  )
}

export const getCategoryCount = (categoryId) =>
  getPublicationsByCategory(categoryId).length

export { localDivisions }

/**
 * Local listings grouped in the official division order. District order follows
 * the same sequence used on the local-newspapers page, so the page can render
 * stable sections without a second data source.
 */
export const getLocalPublicationsByDivision = () =>
  localDivisions
    .map((division) => {
      const items = publications
        .filter(
          (publication) =>
            publication.category === 'local' &&
            publication.division === division.id,
        )
        .sort((a, b) => {
          const aIndex = division.districts.indexOf(a.district)
          const bIndex = division.districts.indexOf(b.district)
          return (
            b.popularity - a.popularity ||
            aIndex - bIndex ||
            a.name.localeCompare(b.name)
          )
        })

      return {
        ...division,
        items,
        districtsCovered: division.districts.filter((district) =>
          items.some((publication) => publication.district === district),
        ),
      }
    })

export const getLocalDivision = (divisionId) =>
  getLocalPublicationsByDivision().find(
    (division) => division.id === divisionId,
  ) ?? null

export const getLocalDistrictCount = () =>
  new Set(
    publications
      .filter((publication) => publication.category === 'local')
      .map((publication) => publication.district),
  ).size

export const featuredPublications = publications.filter(
  (publication) => publication.featured,
)

const buildSearchText = (publication) =>
  [
    publication.name,
    publication.banglaName,
    publication.description,
    publication.epaperDescription,
    publication.epaper ? 'e-paper epaper digital edition' : '',
    publication.language,
    getCategory(publication.category).label,
  ]
    .filter(Boolean)
    .join(' ')
    .toLocaleLowerCase()

const searchIndex = new Map(
  publications.map((publication) => [
    publication.id,
    buildSearchText(publication),
  ]),
)

export const searchPublications = (query, categoryId = 'all') => {
  const list = getPublicationsByCategory(categoryId)
  const term = query.trim().toLocaleLowerCase()

  if (!term) return list

  return list.filter((publication) =>
    searchIndex.get(publication.id)?.includes(term),
  )
}
