import { ArrowUp, ArrowUpRight, CodeXml } from 'lucide-react'
import { Link } from 'react-router'
import {
  categories,
  getCategoryCount,
  publications,
} from '../../data/publications'
import {
  SITE_GITHUB_URL,
  SITE_REPO_URL,
} from '../../seo/site'
import Brand from '../ui/Brand'

const exploreLinks = [
  { label: 'Home', to: '/' },
  { label: 'Bangla newspapers', to: '/bangla-newspapers' },
  { label: 'Local newspapers', to: '/local-newspapers' },
  { label: 'Radio stations', to: '/radio' },
  { label: 'Complete directory', to: '/#directory' },
  { label: 'E-Papers', to: '/e-paper' },
  { label: 'TV Channels', to: '/tv-channels' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy', to: '/privacy' },
]

const categoryLinks = categories
  .filter((category) => category.id !== 'all')
  .map((category) => ({
    label: category.label,
    to: category.path,
    count: getCategoryCount(category.id),
  }))

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white/65">
      <div className="shell py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_0.9fr_1fr_1.35fr] lg:gap-12">
          <div>
            <Brand tone="dark" />
            <p className="mt-5 max-w-xs text-[12.5px] leading-6 text-white/55">
              A calm, organised way to find Bangladesh&apos;s newspapers, local
              titles, radio stations, news portals, e-papers and broadcasters.
              No accounts, no noise — just the outlets.
            </p>
            <div className="mt-5 flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.13em] text-white/55">
              <span>{publications.length} outlets</span>
              <span className="h-3 w-px bg-white/15" aria-hidden="true" />
              <span>{categories.length - 1} categories</span>
            </div>
          </div>

          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-[12.5px] text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
              Directory
            </h2>
            <ul className="mt-4 space-y-2.5">
              {categoryLinks.map((category) => (
                <li key={category.label}>
                  <Link
                    to={category.to}
                    className="group flex items-center justify-between gap-4 text-[12.5px] text-white/60 transition-colors hover:text-white"
                  >
                    <span>{category.label}</span>
                    <span className="text-[10px] tabular-nums text-white/55">
                      {category.count}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
              About the directory
            </h2>
            <p className="mt-4 text-[12.5px] leading-6 text-white/55">
              All Bangla Newspapers is an independent, reader-first directory
              of Bangladeshi media. It does not publish news and is not
              affiliated with the publications listed here.
            </p>
            <p className="mt-3 text-[11.5px] leading-5 text-white/55">
              All trademarks, names and logos belong to their respective
              publishers. Every card opens an external website in a new tab.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] leading-5 text-white/55">
            © {year} All Bangla Newspapers. Built for readers in Bangladesh.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 sm:justify-end">
            <a
              href={SITE_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View the All Bangla Newspapers source code on GitHub"
              className="flex items-center gap-1 text-[11px] text-white/60 transition-colors duration-300 hover:text-white"
            >
              <CodeXml size={14} className="opacity-70" />
              <span>Source code</span>
              <ArrowUpRight size={12} className="opacity-70" />
            </a>
            <a
              href={SITE_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Munna-Scriptz on GitHub"
              className="flex items-center gap-1 text-[11px] text-white/60 transition-colors duration-300 hover:text-white"
            >
              <CodeXml size={14} className="opacity-70" />
              <span>
                Developed by{' '}
                <span className="underline decoration-neutral-800 underline-offset-4 transition-colors hover:decoration-neutral-500">
                  Munna-Scriptz
                </span>
              </span>
              <ArrowUpRight size={12} className="opacity-70" />
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group inline-flex items-center gap-1.5 text-[11px] font-medium text-white/60 transition-colors hover:text-white"
            >
              Back to top
              <ArrowUp
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5"
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
