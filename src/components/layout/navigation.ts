import {
  LayoutDashboard,
  Code2,
  BookOpen,
  CircleCheckBig,
  IdCard,
  Briefcase,
  MessageSquare,
  Settings,
  Plus,
  UserSearch,
  CalendarCheck,
  BarChart3,
  Users,
  Library,
} from 'lucide-react';
import type { NavItem, Profile, Role } from '../../types';

export const NAVIGATION: Record<Role, NavItem[]> = {
  student: [
    { key: 'student-dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { key: 'skill-intelligence', label: 'Skills', icon: Code2 },
    { key: 'learning-hub', label: 'Learning', icon: BookOpen },
    { key: 'assessment-center', label: 'Assessments', icon: CircleCheckBig },
    { key: 'student-portfolio', label: 'Portfolio', icon: IdCard },
    { key: 'job-marketplace', label: 'Jobs', icon: Briefcase },
    { key: 'messages', label: 'Messages', icon: MessageSquare },
    { key: 'settings', label: 'Settings', icon: Settings },
  ],
  recruiter: [
    { key: 'recruiter-workspace', label: 'Overview', icon: LayoutDashboard },
    { key: 'post-job', label: 'Post Job', icon: Plus },
    { key: 'talent-search', label: 'Talent Search', icon: UserSearch },
    { key: 'applications', label: 'Applications', icon: CircleCheckBig },
    { key: 'interviews', label: 'Interviews', icon: CalendarCheck },
    { key: 'recruiter-analytics', label: 'Analytics', icon: BarChart3 },
  ],
  institution: [
    { key: 'institution-dashboard', label: 'Overview', icon: LayoutDashboard },
    { key: 'students', label: 'Students', icon: Users },
    { key: 'departments', label: 'Departments', icon: Library },
    { key: 'placements', label: 'Placements', icon: Briefcase },
    { key: 'institution-analytics', label: 'Analytics', icon: BarChart3 },
    { key: 'institution-settings', label: 'Settings', icon: Settings },
  ],
};

export const PROFILES: Record<Role, Profile> = {
  student: {
    name: 'Samriddhi Gupta',
    context: 'IIT Bombay',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80',
    headerBadge: { label: 'Active Session', tone: 'success' },
  },
  recruiter: {
    name: 'TCS Hiring',
    context: 'TCS Digital',
    avatar:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80',
    headerBadge: { label: 'TCS Employer Portal', tone: 'success' },
  },
  institution: {
    name: 'Admin Portal',
    context: 'IIT Delhi',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80',
    headerBadge: { label: 'IIT Delhi Admin', tone: 'success' },
  },
};
