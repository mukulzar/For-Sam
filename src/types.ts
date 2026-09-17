import type { LucideIcon } from 'lucide-react';

export type Role = 'student' | 'recruiter' | 'institution';

export type StudentNavKey =
  | 'student-dashboard'
  | 'skill-intelligence'
  | 'learning-hub'
  | 'assessment-center'
  | 'student-portfolio'
  | 'job-marketplace'
  | 'messages'
  | 'settings';

export type RecruiterNavKey =
  | 'recruiter-workspace'
  | 'post-job'
  | 'talent-search'
  | 'applications'
  | 'interviews'
  | 'recruiter-analytics';

export type InstitutionNavKey =
  | 'institution-dashboard'
  | 'students'
  | 'departments'
  | 'placements'
  | 'institution-analytics'
  | 'institution-settings';

export type NavKey = StudentNavKey | RecruiterNavKey | InstitutionNavKey;

export type Navigate = (key: NavKey) => void;

export interface NavItem {
  key: NavKey;
  label: string;
  icon: LucideIcon;
}

export type BadgeTone =
  | 'active'
  | 'success'
  | 'warning'
  | 'failed'
  | 'danger'
  | 'info'
  | 'pending'
  | 'neutral'
  | 'onDark'
  | 'onDarkWarning';

export type Tone = 'primary' | 'success' | 'warning' | 'danger';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost' | 'inverse';

export type ControlSize = 'sm' | 'md' | 'lg';

export interface Profile {
  name: string;
  context: string;
  avatar: string;
  headerBadge: { label: string; tone: BadgeTone };
}
