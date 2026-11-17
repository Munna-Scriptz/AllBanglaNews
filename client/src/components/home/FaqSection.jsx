import { Plus } from 'lucide-react'
import { Link } from 'react-router'
import {
  categories,
  getCategoryCount,
  publications,
} from '../../data/publications'
import { formatVerifiedDate } from '../../data/siteInfo'

const categoryCount = categories.filter((category) => category.id !== 'all').length
const publicationCount = publications.filter(
  (publication) => publication.category !== 'radio',
).length
const radioCount = getCategoryCount('radio')
const categoryEntryTotal = categories
  .filter((category) => category.id !== 'all')
  .reduce((total, category) => total + getCategoryCount(category.id), 0)

const faqs = [
  {
    question: 'How many publications are in the directory?',
    answer: `The directory currently lists ${publications.length} unique outlets across ${categoryCount} categories: ${publicationCount} publications and ${radioCount} radio stations. That includes national and local newspapers, online news portals, business and financial publications, magazines, TV channels, radio stations, news agencies and international publications. E-paper editions are counted separately as a cross-cutting view. Each outlet is counted once, regardless of how many views it appears in.`,
  },
  {
    question: 'Why do the category counts add up to more than the total?',
    answer: `The category cards show ${categoryEntryTotal} entries in total because e-paper is a cross-cutting view. A newspaper with a digital edition appears in both its newspaper category and E-Paper, so those entries are counted twice. The headline figure of ${publications.length} remains the unique outlet count.`,
  },
  {
    question: 'Does All Bangla Newspapers publish or host news?',
    answer:
      'No. This is a directory, not a news publisher. Every listing opens the publisher’s own website in a new tab. The site does not republish articles, host e-paper files or act as an intermediary for newsrooms.',
  },
  {
    question: 'How are newspapers and e-papers chosen?',
    answer:
      "Listings are chosen for relevance to Bangladeshi readers and linked to the publisher's official domain where one is available. Where a publisher provides a separate e-paper or digital edition, that address is used only after a working link has been verified. A position in the directory is not a ranking or an editorial endorsement.",
  },
  {
    question: 'What is the difference between a newspaper, an online portal and an e-paper?',
    answer:
      'A newspaper is a regularly published news publication, usually with a print edition. An online news portal publishes continuously on the web. An e-paper is a page-by-page digital replica or digital edition of a newspaper. Many publishers operate more than one of these, which is why some names appear in more than one category.',
  },
  {
    question: 'Why do some e-paper listings open the newspaper homepage?',
    answer: `We only link directly to an e-paper when the publisher’s digital edition can be verified. If it cannot be checked, the listing keeps the official homepage and says so in its description. There are ${getCategoryCount('epaper')} e-paper entries in the current list; the review date is ${formatVerifiedDate()}.`,
  },
  {
    question: 'Can I suggest a missing publication or report a broken link?',
    answer:
      'Yes. Use the contact page to send the publication name and the official URL. Please include whether the issue affects the homepage or the e-paper link. Corrections are reviewed with the rest of the directory; the site does not accept news submissions or press releases.',
  },
]

export default function FaqSection() {
  return (
    <section
      className="border-t border-line bg-paper py-12 md:py-16"
      aria-labelledby="faq-heading"
    >
      <div className="shell grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div>
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            Common questions
          </p>
          <h2
            id="faq-heading"
            className="mt-3 text-[26px] font-semibold leading-[1.15] tracking-[-0.04em] text-ink sm:text-[32px]"
          >
            About the All Bangla newspaper list
          </h2>
          <p className="mt-4 max-w-md text-[13px] leading-6 text-ink-soft/90 sm:text-[13.5px] sm:leading-7">
            Short answers about the directory, the publications it lists and
            how to report a correction. Still need help?{' '}
            <Link
              to="/contact"
              className="font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent"
            >
              Contact the directory
            </Link>
            .
          </p>
        </div>

        <div className="border-t border-line">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-4 text-left text-[13px] font-medium leading-6 text-ink transition-colors hover:text-accent sm:text-[14px] [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <Plus
                  className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-transform duration-200 group-open:rotate-45"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-2xl pb-5 pr-8 text-[12.5px] leading-6 text-ink-soft/90 sm:text-[13px] sm:leading-7">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
