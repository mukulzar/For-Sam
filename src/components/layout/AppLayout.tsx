import { useState } from 'react';
import type { ReactNode } from 'react';
import {
  Menu,
  Bell,
  Search,
  ChevronsUpDown,
} from 'lucide-react';
import StatusBadge from '../shared/StatusBadge';
import type { Navigate, NavItem, NavKey, Role } from '../../types';
import { NAVIGATION, PROFILES } from './navigation';

export { NAVIGATION } from './navigation';

const SEARCH_PLACEHOLDER: Record<Role, string> = {
  student: 'Search platform...',
  recruiter: 'Search platform...',
  institution: 'Search students, courses...',
};

interface SidebarLinkProps {
  item: NavItem;
  isActive: boolean;
  onSelect: Navigate;
}

function SidebarLink({ item, isActive, onSelect }: SidebarLinkProps) {
  const Icon = item.icon;

  return (
    <li>
      <button
        type="button"
        onClick={() => onSelect(item.key)}
        aria-current={isActive ? 'page' : undefined}
        className={[
          'flex w-full items-center gap-3 rounded-control px-3 py-2.5 text-sm font-medium transition-colors duration-150',
          isActive ? 'bg-primary-soft text-primary' : 'text-muted hover:bg-canvas hover:text-ink',
        ].join(' ')}
      >
        <Icon size={18} strokeWidth={2} aria-hidden="true" />
        {item.label}
      </button>
    </li>
  );
}

interface ProfileSwitcherProps {
  role: Role;
  onRoleChange: (role: Role) => void;
}

function ProfileSwitcher({ role, onRoleChange }: ProfileSwitcherProps) {
  const profile = PROFILES[role];
  const roles = Object.keys(PROFILES) as Role[];

  return (
    <div className="border-t border-line px-4 py-4">
      <button
        type="button"
        onClick={() => onRoleChange(roles[(roles.indexOf(role) + 1) % roles.length])}
        className="flex w-full items-center gap-3 rounded-control border border-transparent px-2 py-2 text-left transition-colors duration-150 hover:border-line hover:bg-canvas"
        title="Switch workspace profile"
      >
        <img src={profile.avatar} alt="" className="h-9 w-9 shrink-0 rounded-full object-cover" />
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-semibold text-ink">{profile.name}</span>
          <span className="block truncate text-xs text-muted">{profile.context}</span>
        </span>
        <ChevronsUpDown size={16} className="shrink-0 text-muted" aria-hidden="true" />
      </button>
    </div>
  );
}

export interface AppLayoutProps {
  role: Role;
  activeKey: NavKey;
  onNavigate: Navigate;
  onRoleChange: (role: Role) => void;
  title: string;
  children: ReactNode;
}

export default function AppLayout({
  role,
  activeKey,
  onNavigate,
  onRoleChange,
  title,
  children,
}: AppLayoutProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const items = NAVIGATION[role];
  const profile = PROFILES[role];

  const handleSelect: Navigate = (key) => {
    onNavigate(key);
    setSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-canvas">
      <aside
        className={[
          'fixed inset-y-0 left-0 z-40 flex w-[264px] flex-col border-r border-line bg-white transition-transform duration-200 lg:translate-x-0',
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
        ].join(' ')}
        aria-label="Primary navigation"
      >
        <div className="flex h-[72px] items-center gap-3 px-6">
          <span className="flex h-9 w-9 items-center justify-center rounded-control bg-primary text-white">
            <Menu size={18} strokeWidth={2.5} aria-hidden="true" />
          </span>
          <span className="text-h3 font-extrabold tracking-tight text-ink">Provenza</span>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 pb-6">
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <SidebarLink
                key={item.key}
                item={item}
                isActive={item.key === activeKey}
                onSelect={handleSelect}
              />
            ))}
          </ul>
        </nav>

        <ProfileSwitcher role={role} onRoleChange={onRoleChange} />
      </aside>

      {isSidebarOpen ? (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-ink/30 lg:hidden"
        />
      ) : null}

      <div className="flex min-w-0 flex-1 flex-col lg:pl-[264px]">
        <header className="sticky top-0 z-20 flex h-[72px] items-center gap-4 border-b border-line bg-white px-4 sm:px-8">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="rounded-control border border-line p-2 text-muted lg:hidden"
            aria-label="Open navigation"
          >
            <Menu size={18} aria-hidden="true" />
          </button>

          <h1 className="truncate text-base font-bold text-ink sm:text-lg">{title}</h1>

          <div className="ml-auto flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search
                size={16}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
              <label className="sr-only" htmlFor="platform-search">
                Search
              </label>
              <input
                id="platform-search"
                type="search"
                placeholder={SEARCH_PLACEHOLDER[role]}
                className="h-10 w-[240px] rounded-control border border-line bg-canvas pl-9 pr-3 text-sm text-ink placeholder:text-muted lg:w-[280px]"
              />
            </div>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-ink"
              aria-label="Notifications"
            >
              <Bell size={18} aria-hidden="true" />
            </button>

            <StatusBadge tone={profile.headerBadge.tone}>{profile.headerBadge.label}</StatusBadge>
          </div>
        </header>

        <main className="flex-1 px-4 py-6 sm:px-8 sm:py-8">{children}</main>
      </div>
    </div>
  );
}
