import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import Button from '../components/shared/Button';
import StatusBadge from '../components/shared/StatusBadge';

const WORK_TYPES = ['Full-time', 'Remote'];

const JOBS = [
  {
    initial: 'T',
    role: 'Junior Full Stack Developer',
    company: 'TCS',
    location: 'Bangalore',
    salary: '₹8L - ₹12L',
    match: 95,
    matched: ['React', 'SQL', 'TypeScript'],
    missing: ['Docker'],
    posted: 'Posted 2 days ago',
  },
  {
    initial: 'I',
    role: 'Associate Software Engineer',
    company: 'Infosys',
    location: 'Pune',
    salary: '₹7L - ₹10L',
    match: 88,
    matched: ['React', 'TypeScript'],
    missing: ['Kubernetes'],
    posted: 'Posted 2 days ago',
  },
  {
    initial: 'W',
    role: 'Software Engineer I (Frontend)',
    company: 'Wipro',
    location: 'Hyderabad',
    salary: '₹6L - ₹9L',
    match: 82,
    matched: ['React'],
    missing: ['TypeScript Advanced'],
    posted: 'Posted 2 days ago',
  },
];

const TRACKER = [
  { stage: 'Applied', count: 8, active: true },
  { stage: 'Shortlisted', count: 3, active: false },
  { stage: 'Interviews Scheduled', count: 1, active: false },
  { stage: 'Offered', count: 0, active: false },
];

export default function JobMarketplace() {
  const [workType, setWorkType] = useState(WORK_TYPES[0]);

  return (
    <div className="mx-auto flex max-w-shell flex-col gap-6">
      <section className="surface-card flex flex-col gap-3 p-4 lg:flex-row lg:items-center">
        <div className="relative flex-1">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            aria-hidden="true"
          />
          <label className="sr-only" htmlFor="role-search">
            Search roles
          </label>
          <input
            id="role-search"
            type="search"
            placeholder="Search roles (e.g. Full Stack)..."
            className="h-11 w-full rounded-control border border-line bg-canvas pl-9 pr-3 text-sm text-ink placeholder:text-muted"
          />
        </div>

        <div className="relative lg:w-64">
          <MapPin
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            aria-hidden="true"
          />
          <label className="sr-only" htmlFor="location-search">
            Location
          </label>
          <input
            id="location-search"
            type="text"
            defaultValue="Bangalore, India"
            className="h-11 w-full rounded-control border border-line bg-canvas pl-9 pr-3 text-sm text-ink"
          />
        </div>

        <div className="flex rounded-control border border-line p-1" role="group" aria-label="Work type">
          {WORK_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setWorkType(type)}
              aria-pressed={type === workType}
              className={[
                'h-9 rounded-[6px] px-4 text-sm font-semibold transition-colors',
                type === workType ? 'bg-white text-ink shadow-card' : 'text-muted hover:text-ink',
              ].join(' ')}
            >
              {type}
            </button>
          ))}
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <section>
          <h2 className="text-h3">Best Matches for Samriddhi Gupta</h2>
          <ul className="mt-5 flex flex-col gap-5">
            {JOBS.map((job) => (
              <li key={job.role} className="surface-card p-6">
                <div className="flex flex-wrap items-start gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-control bg-primary-soft text-base font-bold text-primary">
                    {job.initial}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-h3">{job.role}</h3>
                    <p className="mt-1 text-xs">
                      {job.company} · {job.location} · {job.salary}
                    </p>
                  </div>
                  <StatusBadge tone="success">{job.match}% Skill Match</StatusBadge>
                </div>

                <dl className="mt-5 flex flex-col gap-3 rounded-control bg-canvas px-4 py-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <dt className="text-xs font-medium text-muted">Matched:</dt>
                    {job.matched.map((skill) => (
                      <dd key={skill}>
                        <StatusBadge tone="success" size="sm">{skill}</StatusBadge>
                      </dd>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <dt className="text-xs font-medium text-muted">Missing:</dt>
                    {job.missing.map((skill) => (
                      <dd key={skill}>
                        <StatusBadge tone="warning" size="sm">{skill}</StatusBadge>
                      </dd>
                    ))}
                  </div>
                </dl>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
                  <p className="text-xs">{job.posted}</p>
                  <div className="flex gap-3">
                    <Button variant="secondary">Save</Button>
                    <Button>Apply Now</Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="surface-card h-fit p-6">
          <h2 className="text-h3">Application Tracker</h2>
          <ul className="mt-5 flex flex-col gap-3">
            {TRACKER.map((item) => (
              <li
                key={item.stage}
                className={[
                  'flex items-center justify-between gap-3 rounded-control px-4 py-4',
                  item.active ? 'bg-primary-soft' : 'bg-canvas',
                ].join(' ')}
              >
                <span
                  className={`text-sm font-semibold ${item.active ? 'text-primary' : 'text-ink'}`}
                >
                  {item.stage}
                </span>
                <span
                  className={[
                    'flex h-7 min-w-7 items-center justify-center rounded-full px-2 text-xs font-bold',
                    item.active ? 'bg-primary text-white' : 'bg-white text-muted',
                  ].join(' ')}
                >
                  {item.count}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
