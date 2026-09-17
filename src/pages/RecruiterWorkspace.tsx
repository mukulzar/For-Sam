import Button from '../components/shared/Button';
import StatusBadge from '../components/shared/StatusBadge';

const JOB_OPENINGS = [
  { role: 'Junior React Developer', applications: 142, shortlisted: 18, matchAvg: 91 },
  { role: 'Backend Developer (Node/SQL)', applications: 98, shortlisted: 12, matchAvg: 87 },
  { role: 'Data Engineer Intern', applications: 204, shortlisted: 25, matchAvg: 83 },
];

const FUNNEL = [
  { stage: 'Applications', count: 245 },
  { stage: 'Screened', count: 128 },
  { stage: 'Interviewed', count: 42 },
  { stage: 'Offered', count: 12 },
  { stage: 'Accepted', count: 8 },
];

const CANDIDATES = [
  {
    name: 'Pranav Sharma',
    institute: 'IIT Bombay',
    match: 95,
    skills: ['React', 'TypeScript', 'SQL'],
  },
  {
    name: 'Ananya Iyer',
    institute: 'NIT Trichy',
    match: 91,
    skills: ['Node.js', 'Docker', 'Go'],
  },
  {
    name: 'Kabir Sengupta',
    institute: 'IIT Delhi',
    match: 88,
    skills: ['Python', 'Spark', 'SQL'],
  },
];

const FUNNEL_TOP = FUNNEL[0].count;

export default function RecruiterWorkspace() {
  return (
    <div className="mx-auto flex max-w-shell flex-col gap-6">
      <section className="surface-card flex flex-wrap items-center gap-4 p-6">
        <span className="flex h-12 w-12 items-center justify-center rounded-control bg-primary-soft text-h3 text-primary">
          T
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-h2">TCS Digital Portal</h2>
          <p className="mt-1">Enterprise Hiring Dashboard</p>
        </div>
        <Button>Post New Role</Button>
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <section className="surface-card p-6">
          <h3 className="text-h3">Active Job Openings</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line">
                  <th scope="col" className="table-label pb-3 pr-4">Role / Position</th>
                  <th scope="col" className="table-label pb-3 pr-4 text-right">Applications</th>
                  <th scope="col" className="table-label pb-3 pr-4 text-right">Shortlisted</th>
                  <th scope="col" className="table-label pb-3 pr-4 text-right">Match Avg</th>
                  <th scope="col" className="table-label pb-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {JOB_OPENINGS.map((job) => (
                  <tr key={job.role} className="border-b border-line last:border-0">
                    <th scope="row" className="py-4 pr-4 text-sm font-bold text-ink">
                      {job.role}
                    </th>
                    <td className="py-4 pr-4 text-right text-sm text-ink">{job.applications}</td>
                    <td className="py-4 pr-4 text-right text-sm font-semibold text-primary">
                      {job.shortlisted}
                    </td>
                    <td className="py-4 pr-4 text-right text-sm font-semibold text-success">
                      {job.matchAvg}%
                    </td>
                    <td className="py-4 text-right">
                      <StatusBadge tone="active">Active</StatusBadge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="surface-card p-6">
          <h3 className="text-h3">Hiring Funnel</h3>
          <ul className="mt-5 flex flex-col gap-4">
            {FUNNEL.map((step) => (
              <li key={step.stage}>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-sm text-ink">{step.stage}</span>
                  <span className="text-sm font-bold text-ink">{step.count}</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-line">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${(step.count / FUNNEL_TOP) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section>
        <h3 className="text-h3">Top Match Candidates</h3>
        <ul className="mt-5 grid gap-5 lg:grid-cols-3">
          {CANDIDATES.map((candidate) => (
            <li key={candidate.name} className="surface-card p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-h3">{candidate.name}</p>
                  <p className="mt-1 text-xs">{candidate.institute}</p>
                </div>
                <StatusBadge tone="success">{candidate.match}% Match</StatusBadge>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {candidate.skills.map((skill) => (
                  <li key={skill}>
                    <StatusBadge tone="info" size="sm">{skill}</StatusBadge>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button variant="secondary">View Profile</Button>
                <Button>Shortlist</Button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
