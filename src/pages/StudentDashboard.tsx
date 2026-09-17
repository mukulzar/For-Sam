import { TriangleAlert } from 'lucide-react';
import Button from '../components/shared/Button';
import StatusBadge from '../components/shared/StatusBadge';
import MetricCard, { ProgressBar, ProgressRing } from '../components/shared/MetricCard';
import type { Navigate, NavKey } from '../types';

interface SkillGap {
  title: string;
  detail: string;
  action: string;
  target: NavKey;
}

const SKILL_GAPS: SkillGap[] = [
  {
    title: 'Docker & Kubernetes',
    detail: 'Advanced container orchestration',
    action: 'Assessed Lab',
    target: 'assessment-center',
  },
  {
    title: 'System Design',
    detail: 'Microservice routing patterns',
    action: 'Do Project',
    target: 'skill-intelligence',
  },
  {
    title: 'TypeScript Advanced',
    detail: 'Strict type boundaries',
    action: 'Take Course',
    target: 'learning-hub',
  },
];

const JOB_MATCHES = [
  { role: 'Junior React Developer', company: 'TCS', match: 95 },
  { role: 'Full Stack Engineer', company: 'Infosys', match: 88 },
  { role: 'Software Engineer I', company: 'Wipro', match: 82 },
];

const ACTIVE_COURSES = [
  { title: 'React Advanced & Redux Toolkit', provider: 'Meta Professional Cert', progress: 85 },
  { title: 'Database Systems & SQL Optimization', provider: 'IIT Bombay Academic Block', progress: 42 },
];

const BADGES = ['React Expert', 'SQL Master', 'Data Structures', 'TypeScript Core', 'Git Workflow'];

export interface StudentDashboardProps {
  onNavigate: Navigate;
}

export default function StudentDashboard({ onNavigate }: StudentDashboardProps) {
  return (
    <div className="mx-auto flex max-w-shell flex-col gap-6">
      <section className="flex flex-col gap-5 rounded-card bg-primary px-8 py-8 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-h2 text-white">Welcome back, Samriddhi!</h2>
          <p className="mt-2 text-white/85">
            You have addressed 2 major skill gaps this week. 1 assessment pending verification.
          </p>
        </div>
        <Button variant="secondary" onClick={() => onNavigate('assessment-center')}>
          Take Assessment
        </Button>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4" aria-label="Key statistics">
        <MetricCard
          label="Overall Skill Score"
          value="78/100"
          hint="+4% vs last month"
          trailing={<ProgressRing value={78} />}
        />
        <MetricCard label="Skills Verified" value="12" hint="4 Pending Assessment" />
        <MetricCard label="Courses Active" value="3" hint="Next session: Tomorrow" />
        <MetricCard label="Applications Sent" value="8" hint="3 Under Review" />
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <section className="surface-card p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="flex items-center gap-2 text-h3">
              <TriangleAlert size={20} className="text-warning" aria-hidden="true" />
              Skill Gap Alert for &lsquo;Full Stack Developer&rsquo; Target
            </h3>
            <StatusBadge tone="warning">3 gaps found</StatusBadge>
          </div>

          <ul className="mt-5 flex flex-col gap-3">
            {SKILL_GAPS.map((gap) => (
              <li
                key={gap.title}
                className="flex flex-wrap items-center justify-between gap-3 rounded-control bg-canvas px-4 py-4"
              >
                <div>
                  <p className="text-sm font-bold text-ink">{gap.title}</p>
                  <p className="text-xs">{gap.detail}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => onNavigate(gap.target)}>
                  {gap.action}
                </Button>
              </li>
            ))}
          </ul>
        </section>

        <section className="surface-card p-6">
          <h3 className="text-h3">Recent Job Matches</h3>
          <ul className="mt-5 flex flex-col gap-3">
            {JOB_MATCHES.map((job) => (
              <li
                key={job.role}
                className="flex items-center justify-between gap-3 rounded-control bg-canvas px-4 py-3"
              >
                <div>
                  <p className="text-sm font-bold text-ink">{job.role}</p>
                  <p className="text-xs">{job.company}</p>
                </div>
                <span className="text-sm font-semibold text-success">{job.match}%</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="surface-card p-6">
          <h3 className="text-h3">Active Learning Courses</h3>
          <ul className="mt-5 flex flex-col gap-5">
            {ACTIVE_COURSES.map((course) => (
              <li key={course.title}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-ink">{course.title}</p>
                    <p className="text-xs">{course.provider}</p>
                  </div>
                  <span className="text-sm font-semibold text-primary">{course.progress}%</span>
                </div>
                <ProgressBar value={course.progress} className="mt-3" />
              </li>
            ))}
          </ul>
        </section>

        <section className="surface-card p-6">
          <h3 className="text-h3">Earned Badges</h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {BADGES.map((badge) => (
              <li key={badge}>
                <StatusBadge tone="info">{badge}</StatusBadge>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
