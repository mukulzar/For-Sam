import { useState } from 'react';
import { Star } from 'lucide-react';
import Button from '../components/shared/Button';
import StatusBadge from '../components/shared/StatusBadge';
import { ProgressBar } from '../components/shared/MetricCard';

const CATEGORIES = ['Technology', 'Business', 'Design', 'Data Science', 'All Levels'];

const COURSES = [
  {
    title: 'React Advanced & State Management',
    provider: 'Meta',
    level: 'Intermediate',
    rating: 4.8,
    reviews: '12K',
    gap: 'React State Gap',
    cover:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=640&q=80',
  },
  {
    title: 'Production Containers with Docker',
    provider: 'Google Cloud Academy',
    level: 'Advanced',
    rating: 4.9,
    reviews: '8K',
    gap: 'Containerization Gap',
    cover:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=640&q=80',
  },
  {
    title: 'Distributed System Design Patterns',
    provider: 'IIT Bombay Academic Block',
    level: 'Advanced',
    rating: 4.7,
    reviews: '6K',
    gap: 'System Design Gap',
    cover:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=640&q=80',
  },
  {
    title: 'TypeScript Strict Mode in Practice',
    provider: 'Microsoft Academy',
    level: 'Intermediate',
    rating: 4.6,
    reviews: '9K',
    gap: 'TypeScript Gap',
    cover:
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=640&q=80',
  },
];

const ENROLLMENTS = [
  { title: 'HTML5/CSS3 & Sass Mastery', remaining: '20 min left', progress: 92 },
  { title: 'Node JS Enterprise Patterns', remaining: '4 hours left', progress: 64 },
  { title: 'Data Structures & Mock Interviews', remaining: '12 hours left', progress: 38 },
];

export default function LearningHub() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  return (
    <div className="mx-auto flex max-w-shell flex-col gap-6">
      <nav aria-label="Course categories">
        <ul className="flex flex-wrap gap-3">
          {CATEGORIES.map((category) => (
            <li key={category}>
              <button
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={category === activeCategory}
                className={[
                  'h-9 rounded-full px-4 text-sm font-semibold transition-colors',
                  category === activeCategory
                    ? 'bg-primary text-white'
                    : 'border border-line bg-white text-ink hover:bg-canvas',
                ].join(' ')}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <section className="flex flex-col gap-6 rounded-card bg-primary p-8 text-white lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <StatusBadge tone="onDarkWarning">
            AI recommended for your largest skill gap
          </StatusBadge>
          <h2 className="mt-4 text-h2 text-white">
            System Design for Scale: Architecture &amp; Distributed Components
          </h2>
          <p className="mt-3 text-white/85">
            Provides verified micro-credentials directly mapped to Junior Architect and Senior Full
            Stack Developer role requirements.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button variant="secondary">Enroll Now</Button>
            <a href="#course-detail" className="text-sm font-semibold text-white hover:underline">
              Learn more
            </a>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=640&q=80"
          alt=""
          className="h-40 w-full rounded-card object-cover lg:ml-auto lg:w-60"
        />
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <section>
          <h3 className="text-h3">Top Courses Targeting Your Gaps</h3>
          <ul className="mt-5 grid gap-5 sm:grid-cols-2">
            {COURSES.map((course) => (
              <li key={course.title} className="surface-card overflow-hidden">
                <img src={course.cover} alt="" className="h-40 w-full object-cover" />
                <div className="p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs">{course.provider}</p>
                    <StatusBadge tone="info" size="sm">{course.level}</StatusBadge>
                  </div>
                  <h4 className="mt-3 text-base font-bold text-ink">{course.title}</h4>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-ink">
                      <Star size={14} className="fill-warning text-warning" aria-hidden="true" />
                      {course.rating}
                    </span>
                    <span className="text-xs">({course.reviews})</span>
                    <StatusBadge tone="success" size="sm">{course.gap}</StatusBadge>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="surface-card h-fit p-6">
          <h3 className="text-h3">Active Enrollments</h3>
          <ul className="mt-5 flex flex-col gap-4">
            {ENROLLMENTS.map((course) => (
              <li key={course.title} className="rounded-control border border-line p-4">
                <p className="text-sm font-bold text-ink">{course.title}</p>
                <ProgressBar value={course.progress} className="mt-3" />
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="text-xs">{course.remaining}</span>
                  <button
                    type="button"
                    className="text-xs font-semibold text-primary hover:underline"
                  >
                    Resume
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
