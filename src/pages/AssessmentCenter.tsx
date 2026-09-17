import { useState } from 'react';
import { Code2, ChartNoAxesColumn, ShieldCheck, Link2 } from 'lucide-react';
import Button from '../components/shared/Button';
import StatusBadge from '../components/shared/StatusBadge';

const CATEGORIES = ['Technical Skills', 'Soft Skills', 'Domain-Specific', 'Language Proficiency'];

const ASSESSMENTS = [
  {
    icon: Code2,
    title: 'React.js Proficiency',
    level: 'Intermediate',
    minutes: 45,
    questions: 30,
    passRate: 68,
  },
  {
    icon: ChartNoAxesColumn,
    title: 'System Design',
    level: 'Advanced',
    minutes: 90,
    questions: 45,
    passRate: 42,
  },
  {
    icon: ShieldCheck,
    title: 'Data Structures & Algorithms',
    level: 'Advanced',
    minutes: 120,
    questions: 50,
    passRate: 35,
  },
  {
    icon: Link2,
    title: 'Python Advanced',
    level: 'Intermediate',
    minutes: 60,
    questions: 40,
    passRate: 72,
  },
];

const RESULTS = [
  {
    title: 'SQL Master',
    takenOn: 'Oct 12, 2025',
    score: 92,
    percentile: '96th Percentile',
    passed: true,
  },
  {
    title: 'TypeScript Core',
    takenOn: 'Sep 28, 2025',
    score: 85,
    percentile: '89th Percentile',
    passed: true,
  },
  {
    title: 'Docker Basics',
    takenOn: 'Aug 15, 2025',
    score: 58,
    percentile: '45th Percentile',
    passed: false,
  },
];

export default function AssessmentCenter() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  return (
    <div className="mx-auto flex max-w-shell flex-col gap-6">
      <section className="flex flex-col gap-6 rounded-card bg-primary px-8 py-8 text-white lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <StatusBadge tone="onDark">Recommended</StatusBadge>
          <h2 className="mt-4 text-h2 text-white">
            National Standardized Web Architecture Assessment
          </h2>
          <p className="mt-3 text-white/85">
            Directly maps to active hiring pools at TCS and Infosys. High weightage benchmark for Q1
            placements.
          </p>
        </div>
        <Button variant="secondary" size="lg">
          Enroll Now
        </Button>
      </section>

      <div className="grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
        <section className="surface-card h-fit p-6">
          <h3 className="text-h3">Categories</h3>
          <ul className="mt-5 flex flex-col gap-1">
            {CATEGORIES.map((category) => (
              <li key={category}>
                <button
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={category === activeCategory}
                  className={[
                    'w-full rounded-control px-3 py-2.5 text-left text-sm font-medium transition-colors',
                    category === activeCategory
                      ? 'bg-primary-soft text-primary'
                      : 'text-muted hover:bg-canvas hover:text-ink',
                  ].join(' ')}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-col gap-6">
          <section>
            <h3 className="text-h3">Available Standard Assessments</h3>
            <ul className="mt-5 grid gap-5 md:grid-cols-2">
              {ASSESSMENTS.map((assessment) => {
                const Icon = assessment.icon;
                return (
                  <li key={assessment.title} className="surface-card p-6">
                    <div className="flex items-start justify-between gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-control bg-primary-soft text-primary">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <StatusBadge tone={assessment.level === 'Advanced' ? 'failed' : 'info'}>
                        {assessment.level}
                      </StatusBadge>
                    </div>

                    <h4 className="mt-5 text-h3">{assessment.title}</h4>
                    <p className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                      <span>{assessment.minutes} min</span>
                      <span aria-hidden="true">•</span>
                      <span>{assessment.questions} Qs</span>
                      <span aria-hidden="true">•</span>
                      <span className="font-semibold text-success">
                        {assessment.passRate}% Pass Rate
                      </span>
                    </p>

                    <Button className="mt-5" full>
                      Start Assessment
                    </Button>
                  </li>
                );
              })}
            </ul>
          </section>

          <section className="surface-card p-6">
            <h3 className="text-h3">My Results &amp; Certifications</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {RESULTS.map((result) => (
                <li
                  key={result.title}
                  className="flex flex-wrap items-center gap-4 rounded-control bg-canvas px-4 py-4"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-ink">{result.title}</p>
                    <p className="text-xs">Taken on {result.takenOn}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-bold text-ink">{result.score}/100</p>
                    <p className="text-xs">{result.percentile}</p>
                  </div>

                  <StatusBadge tone={result.passed ? 'success' : 'failed'}>
                    {result.passed ? 'Passed' : 'Failed'}
                  </StatusBadge>

                  {result.passed ? (
                    <Button variant="secondary" size="sm" className="text-primary">
                      View Certificate
                    </Button>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
