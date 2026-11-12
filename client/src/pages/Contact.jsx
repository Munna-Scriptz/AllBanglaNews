import { Link } from 'react-router'
import ContentPage from '../components/layout/ContentPage'
import { CONTACT_EMAIL } from '../data/siteInfo'

export default function Contact() {
  return (
    <ContentPage
      eyebrow="Contact"
      title="Contact All Bangla Newspapers"
      intro="Use this page for directory corrections, broken links, missing publications and e-paper URL updates."
    >
      <h2 className="text-[20px] font-semibold tracking-[-0.03em] text-ink">
        Send a correction
      </h2>
      <p>
        Email{' '}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent"
        >
          {CONTACT_EMAIL}
        </a>
        . This is the directory&apos;s contact mailbox. Confirm it is monitored
        before the site is launched or promoted.
      </p>

      <h2 className="text-[20px] font-semibold tracking-[-0.03em] text-ink">
        What to include
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>The publication name and its current directory URL.</li>
        <li>The official URL that should replace it, if you are reporting a change.</li>
        <li>A short note about whether the issue affects the homepage or the e-paper link.</li>
      </ul>
      <p>
        Please send the publisher&apos;s official page rather than a search
        result, social post or third-party copy.
      </p>

      <h2 className="text-[20px] font-semibold tracking-[-0.03em] text-ink">
        What this address is not for
      </h2>
      <p>
        The directory does not accept news submissions, press releases,
        advertising requests or reader messages intended for a publisher. It
        cannot forward correspondence to newspapers or television channels. For
        copyright or content concerns, contact the publisher directly; their
        website and privacy policy govern their material.
      </p>

      <p>
        You can also read{' '}
        <Link
          to="/about"
          className="font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent"
        >
          how listings are chosen
        </Link>{' '}
        or review the{' '}
        <Link
          to="/privacy"
          className="font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent"
        >
          privacy policy
        </Link>
        .
      </p>
    </ContentPage>
  )
}
