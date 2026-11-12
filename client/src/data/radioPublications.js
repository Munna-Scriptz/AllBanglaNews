import { radioLogos } from './radioLogos.js'

/**
 * Bangladesh radio stations with official websites or live-listening pages.
 *
 * Every entry points to the station's own domain. Streaming availability and
 * programme schedules are controlled by the broadcaster and can change.
 */

const radio = (id, name, website, description) => ({
  id: `radio-${id}`,
  name,
  logo: radioLogos[id] ?? null,
  website,
  category: 'radio',
  language: 'Bangla',
  description,
  featured: false,
  epaper: false,
  popularity: null,
  ranking: null,
})

export const radioPublications = [
  radio(
    'bangladesh-betar',
    'Bangladesh Betar',
    'https://betar.gov.bd/',
    'The official website of Bangladesh Betar, the state-owned radio broadcaster, with news and live-listening links.',
  ),
  radio(
    'dhaka-fm',
    'Dhaka FM 90.4',
    'https://dhakafm904.com/',
    'The official site of Dhaka FM 90.4, with live listening and station information.',
  ),
  radio(
    'jago-fm',
    'Jago FM 94.4',
    'http://jago.fm/',
    'The official site of Jago FM 94.4, with live audio and programme information.',
  ),
  radio(
    'radio-capital',
    'Radio Capital 94.8',
    'https://www.radiocapital.fm/',
    'The official site of Radio Capital 94.8, with live streaming and station details.',
  ),
  radio(
    'radio-dhoni',
    'Radio Dhoni',
    'https://radiodhoni.fm/',
    'The official site of Radio Dhoni, with live streaming and station information.',
  ),
  radio(
    'radio-foorti',
    'Radio Foorti 88.0',
    'https://www.radiofoorti.fm/',
    'The official site of Radio Foorti 88.0, with live streaming and station details.',
  ),
  radio(
    'radio-shadhin',
    'Radio Shadhin',
    'https://radioshadhin.fm/',
    'The official site of Radio Shadhin, with live streaming and station information.',
  ),
  radio(
    'radio-today',
    'Radio Today 89.6',
    'https://radiotodaybd.fm/',
    'The official site of Radio Today 89.6, with live streaming and programme information.',
  ),
  radio(
    'spice-fm',
    'Spice FM',
    'https://spicefmbd.com/',
    'The official site of Spice FM, with live listening and station details.',
  ),
]
