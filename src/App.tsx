import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import AppLayout, { NAVIGATION } from './components/layout/AppLayout';
import EmptyState from './components/shared/EmptyState';
import LandingPage from './pages/LandingPage';
import StudentDashboard from './pages/StudentDashboard';
import RecruiterWorkspace from './pages/RecruiterWorkspace';
import InstitutionDashboard from './pages/InstitutionDashboard';
import AssessmentCenter from './pages/AssessmentCenter';
import JobMarketplace from './pages/JobMarketplace';
import StudentPortfolio from './pages/StudentPortfolio';
import LearningHub from './pages/LearningHub';
import SkillIntelligence from './pages/SkillIntelligence';
import type { Navigate, NavKey, Role } from './types';

const ROLE_STORAGE_KEY = 'progress-role';
const NAVIGATION_STORAGE_KEY = 'progress-active-key';

interface AppHistoryState {
  progress: true;
  role: Role;
  activeKey: NavKey;
}

const ENTRY_VIEW: Record<Role, NavKey> = {
  student: 'student-dashboard',
  recruiter: 'recruiter-workspace',
  institution: 'institution-dashboard',
};

function readStoredRole(): Role | null {
  if (typeof window === 'undefined') return null;

  const storedRole = window.localStorage.getItem(ROLE_STORAGE_KEY);
  return storedRole === 'student' || storedRole === 'recruiter' || storedRole === 'institution'
    ? storedRole
    : null;
}

function readStoredNavKey(): NavKey | null {
  if (typeof window === 'undefined') return null;

  const storedKey = window.localStorage.getItem(NAVIGATION_STORAGE_KEY);
  return Object.values(NAVIGATION).some((items) => items.some((item) => item.key === storedKey))
    ? (storedKey as NavKey)
    : null;
}

function isAppHistoryState(state: unknown): state is AppHistoryState {
  if (!state || typeof state !== 'object') return false;

  const candidate = state as Partial<AppHistoryState>;
  return (
    candidate.progress === true &&
    (candidate.role === 'student' ||
      candidate.role === 'recruiter' ||
      candidate.role === 'institution') &&
    Object.values(NAVIGATION).some((items) =>
      items.some((item) => item.key === candidate.activeKey),
    )
  );
}

interface ViewDefinition {
  title: string;
  render: (props: { onNavigate: Navigate }) => ReactNode;
}

const VIEWS: Partial<Record<NavKey, ViewDefinition>> = {
  'student-dashboard': {
    title: 'Student Command Hub',
    render: ({ onNavigate }) => <StudentDashboard onNavigate={onNavigate} />,
  },
  'skill-intelligence': {
    title: 'Skill Intelligence Engine',
    render: ({ onNavigate }) => <SkillIntelligence onNavigate={onNavigate} />,
  },
  'learning-hub': { title: 'Learning Hub', render: () => <LearningHub /> },
  'assessment-center': { title: 'Assessment Center', render: () => <AssessmentCenter /> },
  'student-portfolio': { title: 'Verified Student Portfolio', render: () => <StudentPortfolio /> },
  'job-marketplace': { title: 'Job & Internship Marketplace', render: () => <JobMarketplace /> },
  'recruiter-workspace': { title: 'Recruiter Workspace', render: () => <RecruiterWorkspace /> },
  'institution-dashboard': {
    title: 'Institution Admin Dashboard',
    render: () => <InstitutionDashboard />,
  },
};

interface FallbackCopy {
  title: string;
  description: string;
  actionLabel?: string;
  actionTarget?: NavKey;
}

const FALLBACK_COPY: Partial<Record<NavKey, FallbackCopy>> = {
  messages: {
    title: 'No conversations yet',
    description: 'Recruiter replies and interview invitations will appear here once you apply.',
    actionLabel: 'Browse open roles',
    actionTarget: 'job-marketplace',
  },
  settings: {
    title: 'Account settings',
    description: 'Manage verification documents, notification rules and portfolio visibility.',
  },
  'post-job': {
    title: 'Post a new role',
    description: 'Publish a requisition and match it against verified graduate skill profiles.',
  },
  'talent-search': {
    title: 'Search verified talent',
    description:
      'Filter the national graduate pool by scored competencies, institution and location.',
  },
  applications: {
    title: 'Applications',
    description: 'Review incoming applications ranked by verified skill match.',
    actionLabel: 'Back to overview',
    actionTarget: 'recruiter-workspace',
  },
  interviews: {
    title: 'Interview schedule',
    description: 'Coordinate panel slots and share structured feedback with your hiring team.',
  },
  'recruiter-analytics': {
    title: 'Hiring analytics',
    description: 'Track funnel conversion, offer acceptance and source quality across requisitions.',
  },
  students: {
    title: 'Student records',
    description: 'Browse enrolled students, verification status and assessment history.',
  },
  departments: {
    title: 'Departments',
    description: 'Compare curriculum alignment and skill outcomes across academic departments.',
  },
  placements: {
    title: 'Placements',
    description: 'Follow offers, acceptances and employer relationships for the current cycle.',
  },
  'institution-analytics': {
    title: 'Institution analytics',
    description: 'Benchmark placement readiness against national averages term over term.',
  },
  'institution-settings': {
    title: 'Institution settings',
    description: 'Manage admin access, data sharing agreements and report schedules.',
  },
};

export default function App() {
  const [role, setRole] = useState<Role | null>(() => readStoredRole());
  const [activeKey, setActiveKey] = useState<NavKey>(
    () => readStoredNavKey() ?? ENTRY_VIEW.student,
  );

  useEffect(() => {
    const initialRole = readStoredRole();
    const initialKey = readStoredNavKey() ?? ENTRY_VIEW.student;

    if (initialRole && !isAppHistoryState(window.history.state)) {
      window.history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search,
      );
      window.history.pushState(
        { progress: true, role: initialRole, activeKey: initialKey } satisfies AppHistoryState,
        '',
        `#${initialKey}`,
      );
    }

    const handlePopState = (event: PopStateEvent) => {
      if (isAppHistoryState(event.state)) {
        setRole(event.state.role);
        setActiveKey(event.state.activeKey);
        window.localStorage.setItem(ROLE_STORAGE_KEY, event.state.role);
        window.localStorage.setItem(NAVIGATION_STORAGE_KEY, event.state.activeKey);
        return;
      }

      setRole(null);
      window.localStorage.removeItem(ROLE_STORAGE_KEY);
      window.localStorage.removeItem(NAVIGATION_STORAGE_KEY);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate: Navigate = (nextKey) => {
    if (!role) return;

    setActiveKey(nextKey);
    window.localStorage.setItem(NAVIGATION_STORAGE_KEY, nextKey);
    window.history.pushState(
      { progress: true, role, activeKey: nextKey } satisfies AppHistoryState,
      '',
      `#${nextKey}`,
    );
  };

  const handleEnterApp = (nextRole: Role) => {
    setRole(nextRole);
    const nextKey = ENTRY_VIEW[nextRole];
    setActiveKey(nextKey);
    window.localStorage.setItem(ROLE_STORAGE_KEY, nextRole);
    window.localStorage.setItem(NAVIGATION_STORAGE_KEY, nextKey);
    window.history.pushState(
      { progress: true, role: nextRole, activeKey: nextKey } satisfies AppHistoryState,
      '',
      `#${nextKey}`,
    );
  };

  const handleRoleChange = (nextRole: Role) => {
    setRole(nextRole);
    const nextKey = ENTRY_VIEW[nextRole];
    setActiveKey(nextKey);
    window.localStorage.setItem(ROLE_STORAGE_KEY, nextRole);
    window.localStorage.setItem(NAVIGATION_STORAGE_KEY, nextKey);
    window.history.pushState(
      { progress: true, role: nextRole, activeKey: nextKey } satisfies AppHistoryState,
      '',
      `#${nextKey}`,
    );
  };

  if (!role) {
    return <LandingPage onEnterApp={handleEnterApp} />;
  }

  const view = VIEWS[activeKey];
  const fallback = FALLBACK_COPY[activeKey];
  const navLabel = NAVIGATION[role].find((item) => item.key === activeKey)?.label ?? 'Progress';

  return (
    <AppLayout
      role={role}
      activeKey={activeKey}
      onNavigate={handleNavigate}
      onRoleChange={handleRoleChange}
      title={view ? view.title : navLabel}
    >
      {view ? (
        view.render({ onNavigate: handleNavigate })
      ) : fallback ? (
        <EmptyState
          title={fallback.title}
          description={fallback.description}
          actionLabel={fallback.actionLabel}
          onAction={
            fallback.actionTarget
              ? () => handleNavigate(fallback.actionTarget as NavKey)
              : undefined
          }
        />
      ) : null}
    </AppLayout>
  );
}
