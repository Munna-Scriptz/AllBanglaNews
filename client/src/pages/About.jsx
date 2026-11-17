import { Link } from 'react-router'
import ContentPage from '../components/layout/ContentPage'
import { categories, publications } from '../data/publications'
import { SITE_GITHUB_URL, SITE_REPO_URL } from '../seo/site'

const categoryCount = categories.filter((category) => category.id !== 'all').length

export default function About() {
  return (
    <ContentPage
      eyebrow="About this directory"
      title="About All Bangla Newspapers"
      intro="All Bangla Newspapers is an independent, reader-first directory of Bangladeshi newspapers, local district titles, online news portals, business publications, magazines, radio stations, e-papers, television channels, news agencies and international publications."
    >
      <h2 className="text-[20px] font-semibold tracking-[-0.03em] text-ink">
        What this site is
      </h2>
      <p>
        The directory brings {publications.length} unique outlets together across{' '}
        {categoryCount} categories. Each listing points to the publisher&apos;s
        official website, so you can read the news at its original source
        instead of through a copy or aggregator.
      </p>
      <p>
        The headline count treats each outlet once. Category cards count entries
        in each view, and e-paper is a cross-cutting view, so those totals are
        larger than the unique outlet count. A newspaper with a digital edition
        can appear in both its newspaper category and E-Paper.
      </p>
      <p>
        The site does not publish news, host articles or act as a newspaper. It
        is a finding aid for readers who want to move quickly from a publication
        name to its official website.
      </p>

      <h2 className="text-[20px] font-semibold tracking-[-0.03em] text-ink">
        How listings are chosen
      </h2>
      <p>
        Listings are selected for relevance to Bangladeshi readers. We look for
        the publisher&apos;s official website and, where available, a working
        e-paper or digital edition. A publication&apos;s position in the
        directory is not a ranking, endorsement, circulation claim or measure of
        editorial quality.
      </p>
      <p>
        E-paper flags identify outlets that may publish a digital edition. A
        direct e-paper URL is used only when it has been verified; otherwise the
        listing keeps the official homepage and explains that the edition is
        reached from the publisher&apos;s site. The current review date is shown
        on category and policy pages.
      </p>

      <h2 className="text-[20px] font-semibold tracking-[-0.03em] text-ink">
        Independence and trademarks
      </h2>
      <p>
        All Bangla Newspapers is independent and is not affiliated with the
        publications listed. Newspaper names, wordmarks and logos belong to
        their respective publishers. Every publication card opens an external
        website in a new tab.
      </p>

      <h2 className="text-[20px] font-semibold tracking-[-0.03em] text-ink">
        Corrections and suggestions
      </h2>
      <p>
        If a link has changed, a publication is missing or an e-paper address is
        out of date, use the{' '}
        <Link
          to="/contact"
          className="font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent"
        >
          contact page
        </Link>
        . Please include the publication name and the URL you are checking.
      </p>

      <h2 className="text-[20px] font-semibold tracking-[-0.03em] text-ink">
        Credits
      </h2>
      <p>
        Built and maintained by{' '}
        <a
          href={SITE_GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent"
        >
          Munna Scriptz
        </a>
        . The source code and contribution guidelines are available on{' '}
        <a
          href={SITE_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent"
        >
          GitHub
        </a>
        .
      </p>
    </ContentPage>
  )
}
