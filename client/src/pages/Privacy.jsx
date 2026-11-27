import { Link } from 'react-router'
import ContentPage from '../components/layout/ContentPage'

export default function Privacy() {
  return (
    <ContentPage
      eyebrow="Privacy"
      title="Privacy Policy for All Bangla Newspapers"
      intro="This policy explains what All Bangla Newspapers processes when you browse the directory. It does not describe the practices of the external publisher websites linked from this site."
    >
      <h2 className="text-[20px] font-semibold tracking-[-0.03em] text-ink">
        What the directory collects
      </h2>
      <p>
        All Bangla Newspapers does not require an account and does not offer
        comments, newsletters or user profiles. The site uses Vercel Analytics
        to understand aggregate page views and basic performance information.
        Those reports are used to maintain the directory; they are not used to
        identify individual readers.
      </p>
      <p>
        The site does not use advertising cookies. Standard server and network
        logs may be processed by the hosting provider for security, reliability
        and abuse prevention.
      </p>

      <h2 className="text-[20px] font-semibold tracking-[-0.03em] text-ink">
        Search queries
      </h2>
      <p>
        Search terms are placed in the page URL so results can be shared or
        bookmarked. Search-result URLs are marked noindex and are excluded from
        the sitemap. Please do not enter sensitive personal information into the
        search box.
      </p>

      <h2 className="text-[20px] font-semibold tracking-[-0.03em] text-ink">
        External publisher links
      </h2>
      <p>
        Every publication card opens an external website. Those publishers have
        their own privacy policies, cookies and data practices. Once you leave
        All Bangla Newspapers, this policy no longer applies. Review the
        publisher&apos;s own policy before sharing information with them.
      </p>

      <h2 className="text-[20px] font-semibold tracking-[-0.03em] text-ink">
        Contact
      </h2>
      <p>
        Questions about this policy can be sent through the{' '}
        <Link
          to="/contact"
          className="font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent"
        >
          contact page
        </Link>
        . Confirm the contact mailbox is monitored before launch.
      </p>
    </ContentPage>
  )
}
