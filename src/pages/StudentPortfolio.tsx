import { BadgeCheck, ExternalLink, CircleAlert } from 'lucide-react';
import Button from '../components/shared/Button';
import StatusBadge from '../components/shared/StatusBadge';
import { ProgressBar } from '../components/shared/MetricCard';

const COMPETENCIES = [
  { title: 'React Framework', issuer: 'Meta Assessment Program', level: 'Expert' },
  { title: 'Node.js Core', issuer: 'NeurIPS Open Assess', level: 'Advanced' },
  { title: 'SQL & Optimizations', issuer: 'IIT Bombay Standardized', level: 'Advanced' },
  { title: 'TypeScript System', issuer: 'Microsoft Academy Cert', level: 'Intermediate' },
];

const SUGGESTIONS = [
  'Pass container orchestration assessment',
  'Include link to multi-tenant project',
  'Verify TypeScript compiler knowledge',
];

const PROJECTS = [
  {
    title: 'SaaS Multi-Tenant CRM Engine',
    stack: ['Node.js', 'React', 'PostgreSQL', 'Docker'],
    copy: 'High-performance customer relation hub featuring microservice pipeline logic, full JWT auth structure, and standard telemetry loops.',
  },
  {
    title: 'Blockchain Verified Portfolio Registry',
    stack: ['TypeScript', 'Solidity', 'Next.js'],
    copy: 'A decentralized database verifying student micro-credentials directly onto EVM-compatible ledgers without manual admin.',
  },
];

export default function StudentPortfolio() {
  return (
    <div className="mx-auto flex max-w-shell flex-col gap-6">
      <section className="surface-card flex flex-wrap items-center gap-5 p-6">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=3&w=160&h=160&q=80"
          alt=""
          className="h-16 w-16 rounded-full object-cover"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-h1">Samriddhi Gupta</h2>
            <StatusBadge tone="success" icon={BadgeCheck}>
              Verified Graduate
            </StatusBadge>
          </div>
          <p className="mt-1 text-sm text-ink">
            Candidate for Full Stack Developer · Student at IIT Bombay
          </p>
          <p className="mt-1 text-xs">Mumbai, India · samriddhi@iitb.ac.in</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="secondary">Share Portfolio</Button>
          <Button>Download PDF</Button>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <section className="surface-card p-6">
          <h3 className="text-h3">Verified Competency Badges</h3>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {COMPETENCIES.map((item) => (
              <li key={item.title} className="rounded-control border border-line p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="flex items-center gap-2 text-sm font-bold text-ink">
                    {item.title}
                    <BadgeCheck size={16} className="text-success" aria-hidden="true" />
                  </p>
                  <StatusBadge tone="info" size="sm">{item.level}</StatusBadge>
                </div>
                <p className="mt-1 text-xs">{item.issuer}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="surface-card p-6">
          <h3 className="text-h3">Portfolio Integrity</h3>
          <div className="mt-5 rounded-control bg-canvas p-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm text-ink">Profile Strength</span>
              <span className="text-sm font-bold text-primary">82% Complete</span>
            </div>
            <ProgressBar value={82} className="mt-3" />
          </div>

          <h4 className="mt-6 text-sm font-bold text-ink">Suggestions to Improve</h4>
          <ul className="mt-3 flex flex-col gap-2">
            {SUGGESTIONS.map((suggestion) => (
              <li key={suggestion} className="flex items-start gap-2 text-sm text-muted">
                <CircleAlert size={16} className="mt-0.5 shrink-0 text-warning" aria-hidden="true" />
                {suggestion}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="surface-card p-6">
        <h3 className="text-h3">Standardized Project Showcase</h3>
        <ul className="mt-5 flex flex-col gap-4">
          {PROJECTS.map((project) => (
            <li key={project.title} className="rounded-control border border-line p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h4 className="text-h3">{project.title}</h4>
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech}>
                      <StatusBadge tone="info" size="sm">{tech}</StatusBadge>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-3 max-w-2xl">{project.copy}</p>

              <p className="mt-4 flex flex-wrap gap-5">
                <a
                  href="#repository"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                  View Code Repository
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
                <a
                  href="#demo"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                  Live Demo
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
