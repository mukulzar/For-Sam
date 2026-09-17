import Button from '../components/shared/Button';
import MetricCard from '../components/shared/MetricCard';

const DEPARTMENTS = [
  {
    name: 'Computer Science Engineering',
    students: 480,
    placed: 98,
    avgScore: 84,
    focus: 'React, Node.js, SQL',
  },
  {
    name: 'Information Technology',
    students: 360,
    placed: 96,
    avgScore: 79,
    focus: 'TypeScript, Python, Java',
  },
  {
    name: 'Electronics & Communication',
    students: 420,
    placed: 88,
    avgScore: 71,
    focus: 'C++, Embedded Systems',
  },
  {
    name: 'Mechanical Engineering',
    students: 310,
    placed: 76,
    avgScore: 64,
    focus: 'Python Core, CAD',
  },
];

const SCORE_DISTRIBUTION = [
  { band: '90-100', students: 240 },
  { band: '80-89', students: 680 },
  { band: '70-79', students: 1120 },
  { band: '60-69', students: 540 },
  { band: 'Under 60', students: 267 },
];

const DISTRIBUTION_MAX = Math.max(...SCORE_DISTRIBUTION.map((band) => band.students));

export default function InstitutionDashboard() {
  return (
    <div className="mx-auto flex max-w-shell flex-col gap-6">
      <section className="flex flex-col gap-5 rounded-card bg-primary px-8 py-8 text-white lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-h1 text-white">Indian Institute of Technology, Delhi</h2>
          <p className="mt-2 text-white/85">
            Academic Performance &amp; Placement Readiness Hub · Academic Year 2025-26
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="secondary">Generate Report</Button>
          <Button variant="inverse">Add Students</Button>
        </div>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4" aria-label="Institution metrics">
        <MetricCard label="Total Students" value="2,847" hint="+124 this term" />
        <MetricCard label="Placement Rate" value="94%" hint="+2% vs national avg" />
        <MetricCard label="Average Skill Score" value="76" hint="+4 pts vs Q2 baseline" />
        <MetricCard label="Active Courses" value="128" hint="12 pending alignment" />
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <section className="surface-card p-6">
          <h3 className="text-h3">Department-wise Placements</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line">
                  <th scope="col" className="table-label pb-3 pr-4">Department</th>
                  <th scope="col" className="table-label pb-3 pr-4 text-right">Students</th>
                  <th scope="col" className="table-label pb-3 pr-4 text-right">Placed</th>
                  <th scope="col" className="table-label pb-3 pr-4 text-right">Avg Score</th>
                  <th scope="col" className="table-label pb-3">Top Focus Skills</th>
                </tr>
              </thead>
              <tbody>
                {DEPARTMENTS.map((dept) => (
                  <tr key={dept.name} className="border-b border-line last:border-0">
                    <th scope="row" className="py-4 pr-4 text-sm font-bold text-ink">
                      {dept.name}
                    </th>
                    <td className="py-4 pr-4 text-right text-sm text-ink">{dept.students}</td>
                    <td className="py-4 pr-4 text-right text-sm font-semibold text-success">
                      {dept.placed}%
                    </td>
                    <td className="py-4 pr-4 text-right text-sm font-bold text-ink">
                      {dept.avgScore}
                    </td>
                    <td className="py-4 text-sm text-muted">{dept.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="surface-card p-6">
          <h3 className="text-h3">Student Score Distribution</h3>
          <ul className="mt-5 flex flex-col gap-4">
            {SCORE_DISTRIBUTION.map((band) => (
              <li key={band.band} className="flex items-center gap-4">
                <span className="w-20 shrink-0 text-sm text-muted">{band.band}</span>
                <span className="h-2 flex-1 overflow-hidden rounded-full bg-line">
                  <span
                    className="block h-full rounded-full bg-primary"
                    style={{ width: `${(band.students / DISTRIBUTION_MAX) * 100}%` }}
                  />
                </span>
                <span className="w-14 shrink-0 text-right text-sm font-bold text-ink">
                  {band.students}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
