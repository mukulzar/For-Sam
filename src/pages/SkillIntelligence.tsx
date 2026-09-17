import Button from '../components/shared/Button';
import StatusBadge from '../components/shared/StatusBadge';
import type { Navigate } from '../types';

interface Competency {
  label: string;
  current: number;
  required: number;
  recommendation: string;
}

const COMPETENCIES: Competency[] = [
  { label: 'React Components & Views', current: 80, required: 90, recommendation: 'Required Action' },
  { label: 'Node & API Layers', current: 74, required: 85, recommendation: 'Required Action' },
  { label: 'Database & SQL Tuning', current: 82, required: 85, recommendation: 'Optional Polish' },
  { label: 'System Design', current: 55, required: 88, recommendation: 'Critical Priority' },
  { label: 'Containers & Deployment', current: 48, required: 80, recommendation: 'Critical Priority' },
];

const ROADMAP = [
  { window: 'Week 1-2', title: 'React Advanced & TypeScript Integration', state: 'Assigned' },
  { window: 'Week 3-4', title: 'System Design & Distributed Patterns', state: 'Project Required' },
  { window: 'Week 5', title: 'Standardized Full Stack assessment', state: 'Assessment Locked' },
  { window: 'Week 6', title: 'Secure Blockchain Badge Generation', state: 'Verification' },
];

const RADAR_SIZE = 320;
const RADAR_CENTER = RADAR_SIZE / 2;
const RADAR_RADIUS = 120;

function radarPoints(values: number[]): string {
  const step = (Math.PI * 2) / values.length;
  return values
    .map((value, index) => {
      const angle = index * step - Math.PI / 2;
      const distance = (value / 100) * RADAR_RADIUS;
      const x = RADAR_CENTER + distance * Math.cos(angle);
      const y = RADAR_CENTER + distance * Math.sin(angle);
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(' ');
}

function SkillRadar({ data }: { data: Competency[] }) {
  const rings = [100, 75, 50, 25];

  return (
    <svg
      viewBox={`0 0 ${RADAR_SIZE} ${RADAR_SIZE}`}
      className="mx-auto h-auto w-full max-w-[320px]"
      role="img"
      aria-label="Radar comparison of current skill levels against required target levels"
    >
      {rings.map((ring) => (
        <polygon
          key={ring}
          points={radarPoints(data.map(() => ring))}
          fill="none"
          stroke="#E2E8F0"
          strokeWidth="1"
        />
      ))}
      <polygon
        points={radarPoints(data.map((item) => item.required))}
        fill="#4F46E5"
        fillOpacity="0.08"
        stroke="#4F46E5"
        strokeWidth="2"
      />
      <polygon
        points={radarPoints(data.map((item) => item.current))}
        fill="#10B981"
        fillOpacity="0.18"
        stroke="#10B981"
        strokeWidth="2"
      />
    </svg>
  );
}

export interface SkillIntelligenceProps {
  onNavigate: Navigate;
}

export default function SkillIntelligence({ onNavigate }: SkillIntelligenceProps) {
  return (
    <div className="mx-auto flex max-w-shell flex-col gap-6">
      <section className="surface-card flex flex-wrap items-center gap-4 p-6">
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium text-muted">Target role profile</p>
          <h2 className="mt-1 text-h2">Full Stack Developer</h2>
          <p className="mt-2">
            System maps Samriddhi Gupta&rsquo;s baseline skills against national employer profiles.
          </p>
        </div>
        <StatusBadge tone="success">High demand · 42K+ openings</StatusBadge>
        <Button>Change Target Role</Button>
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="flex flex-col gap-6">
          <section className="surface-card p-6">
            <h3 className="text-h3">Skill Comparison (Actual vs Required)</h3>
            <div className="mt-6">
              <SkillRadar data={COMPETENCIES} />
            </div>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-6">
              <li className="flex items-center gap-2 text-sm text-ink">
                <span className="h-3 w-3 rounded-sm bg-primary" aria-hidden="true" />
                Required Target Level
              </li>
              <li className="flex items-center gap-2 text-sm text-ink">
                <span className="h-3 w-3 rounded-sm bg-success" aria-hidden="true" />
                Your Current Level
              </li>
            </ul>
          </section>

          <section className="surface-card p-6">
            <h3 className="text-h3">Detailed Competency Analysis</h3>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-line">
                    <th scope="col" className="table-label pb-3 pr-4">Competency</th>
                    <th scope="col" className="table-label pb-3 pr-4">Current status</th>
                    <th scope="col" className="table-label pb-3 pr-4">Gap</th>
                    <th scope="col" className="table-label pb-3">Recommended</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPETENCIES.map((item) => (
                    <tr key={item.label} className="border-b border-line last:border-0">
                      <th scope="row" className="py-4 pr-4 text-sm font-bold text-ink">
                        {item.label}
                      </th>
                      <td className="py-4 pr-4 text-sm text-ink">
                        {item.current}% / {item.required}%
                      </td>
                      <td className="py-4 pr-4 text-sm font-semibold text-danger">
                        -{item.required - item.current}%
                      </td>
                      <td className="py-4">
                        <StatusBadge
                          tone={item.recommendation === 'Optional Polish' ? 'info' : 'pending'}
                        >
                          {item.recommendation}
                        </StatusBadge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <section className="surface-card h-fit p-6">
          <p className="text-xs font-semibold text-primary">Personalized curriculum</p>
          <h3 className="mt-2 text-h3">AI Roadmap to Job-Ready</h3>
          <p className="mt-2 text-sm text-muted">
            Estimated Time to Role-Ready: <span className="font-bold text-success">8 Weeks</span>
          </p>

          <ol className="mt-6 flex flex-col gap-5">
            {ROADMAP.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary text-xs font-bold text-primary">
                  {index + 1}
                </span>
                <div>
                  <p className="text-xs text-muted">{step.window}</p>
                  <p className="mt-1 text-sm font-bold text-ink">{step.title}</p>
                  <p className="mt-1 text-xs">{step.state}</p>
                </div>
              </li>
            ))}
          </ol>

          <Button className="mt-6" full onClick={() => onNavigate('learning-hub')}>
            Start Learning Path
          </Button>
        </section>
      </div>
    </div>
  );
}
