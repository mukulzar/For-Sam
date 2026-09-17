import {
  Menu,
  Radar,
  ShieldCheck,
  Workflow,
  GraduationCap,
} from 'lucide-react';
import Button from '../components/shared/Button';
import type { Role } from '../types';

const NAV_LINKS = [
  { label: 'Platform', href: '#platform' },
  { label: 'Institutions', href: '#institutions' },
  { label: 'Enterprise', href: '#enterprise' },
  { label: 'Pricing', href: '#pricing' },
];

const PARTNERS = ['IIT Bombay', 'NIT Trichy', 'TCS', 'Infosys', 'Wipro', 'NASSCOM'];

const FEATURES = [
  {
    icon: Radar,
    title: 'Skill Intelligence Engine',
    copy: 'Maps a graduate baseline against live employer profiles and returns the exact competency gap.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Assessments',
    copy: 'Standardized national tests convert self-reported skills into scored, percentile-ranked evidence.',
  },
  {
    icon: Workflow,
    title: 'Employer Pipeline',
    copy: 'Recruiters shortlist against verified match percentages instead of keyword-matched resumes.',
  },
  {
    icon: GraduationCap,
    title: 'Institution Analytics',
    copy: 'Departments track placement readiness, score distribution and curriculum alignment in one hub.',
  },
];

export interface LandingPageProps {
  onEnterApp: (role: Role) => void;
}

export default function LandingPage({ onEnterApp }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-20 border-b border-transparent bg-white/90 backdrop-blur">
        <nav
          className="mx-auto flex h-[72px] max-w-shell items-center gap-6 px-6"
          aria-label="Main"
        >
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-control bg-primary text-white">
              <Menu size={18} strokeWidth={2.5} aria-hidden="true" />
            </span>
            <span className="text-h3 font-extrabold tracking-tight text-ink">Provenza</span>
          </a>

          <ul className="ml-auto hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Button className="ml-auto md:ml-0" onClick={() => onEnterApp('student')}>
            Get Started
          </Button>
        </nav>
      </header>

      <main id="top">
        <section className="mx-auto flex max-w-3xl flex-col items-center px-6 pb-24 pt-24 text-center sm:pt-32">
          <p className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold tracking-wide text-primary">
            Introducing the Skill Intelligence Engine
          </p>
          <h1 className="mt-8 text-[44px] font-extrabold leading-[1.05] tracking-tight text-ink sm:text-[64px]">
            Bridge the Gap Between Learning and Earning
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            National-scale digital pipeline mapping baseline skillsets of millions of graduates to
            active requirements of leading technology employers.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" onClick={() => onEnterApp('student')}>
              Get Started Free
            </Button>
            <Button size="lg" variant="secondary" onClick={() => onEnterApp('institution')}>
              For Institutions
            </Button>
          </div>
        </section>

        <section className="border-y border-line py-10" aria-label="Partner institutions">
          <p className="text-center text-xs font-semibold tracking-wide text-muted">
            Trusted by leading academic institutions &amp; recruiters
          </p>
          <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6">
            {PARTNERS.map((partner) => (
              <li key={partner} className="text-lg font-semibold text-ink/80">
                {partner}
              </li>
            ))}
          </ul>
        </section>

        <section id="platform" className="bg-canvas py-24">
          <div className="mx-auto max-w-shell px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-h1">Engineered for Graduate Success</h2>
              <p className="mt-4 text-base">
                We replace guess-work resumes with verified skill data, transforming academic
                credentials into verified competency signals.
              </p>
            </div>

            <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <li key={feature.title} className="surface-card p-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-control bg-primary-soft text-primary">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-base font-bold text-ink">{feature.title}</h3>
                    <p className="mt-2">{feature.copy}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section id="enterprise" className="mx-auto max-w-shell px-6 py-24">
          <div className="flex flex-col items-center gap-6 rounded-card bg-primary px-8 py-16 text-center">
            <h2 className="max-w-2xl text-h2 text-white">
              Hire on verified competency, not on claimed experience
            </h2>
            <p className="max-w-xl text-white/80">
              Recruiters, institutions and students work from the same scored record of what a
              graduate can actually build.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="lg" variant="secondary" onClick={() => onEnterApp('recruiter')}>
                Open recruiter workspace
              </Button>
              <Button size="lg" variant="inverse" onClick={() => onEnterApp('student')}>
                Open student hub
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer id="pricing" className="border-t border-line py-10">
        <div className="mx-auto flex max-w-shell flex-col items-center gap-2 px-6 text-center">
          <p className="text-sm font-semibold text-ink">Provenza</p>
          <p className="text-xs">
            National skill verification infrastructure for graduates, institutions and employers.
          </p>
        </div>
      </footer>
    </div>
  );
}
