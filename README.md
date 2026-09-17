# Progress Dashboard

FOR SAMRIDDHI GUPTA
FOR SAMRIDDHI GUPTA
FOR SAMRIDDHI GUPTA
FOR SAMRIDDHI GUPTA

Progress is a role-based skill intelligence and career platform designed for three user personas:

- Students
- Recruiters
- Institutions

The app presents a polished dashboard experience where each role sees a different workspace, navigation model, and set of insights. It was built as a front-end prototype to demonstrate how skill verification, learning pathways, hiring pipelines, and institution analytics can be unified in a single product experience.

---

## 1. Project overview

This project is a React + TypeScript + Vite application styled with Tailwind CSS. It simulates a modern SaaS platform where:

- Students can view their dashboard, learning recommendations, assessments, portfolio, and job discovery.
- Recruiters can review hiring pipelines, post jobs, search candidates, and track applications.
- Institutions can monitor student performance, departments, placements, and analytics.

The user experience is intentionally product-like and presentation-focused, making it suitable for demos, UI concept validation, or further expansion into a full SaaS product.

---

## 2. Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React icons
- ESLint

### Why these technologies?

- React: component-driven UI architecture.
- TypeScript: safer UI and shared type definitions.
- Vite: fast development and production build pipeline.
- Tailwind: rapid styling and consistent design language.
- Lucide: modern icon system for dashboard UI.

---

## 3. Main features

### Student experience

- Dashboard overview
- Skill intelligence insights
- Learning hub
- Assessment center
- Verified portfolio
- Job marketplace
- Messaging and settings placeholders

### Recruiter experience

- Overview workspace
- Job posting workflow
- Talent search
- Applications
- Interviews
- Analytics

### Institution experience

- Student records
- Department view
- Placement tracking
- Institutional analytics
- Admin settings

### Shared UI system

- Reusable buttons
- Status badges
- Metric cards
- Empty states
- Consistent layout with sidebar and header

---

## 4. Project structure

```text
frontend/progress-dashboard/
├── public/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── types.ts
│   ├── index.css
│   ├── styles/
│   │   └── theme.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppLayout.tsx
│   │   │   └── navigation.ts
│   │   └── shared/
│   │       ├── Button.tsx
│   │       ├── EmptyState.tsx
│   │       ├── MetricCard.tsx
│   │       └── StatusBadge.tsx
│   └── pages/
│       ├── LandingPage.tsx
│       ├── StudentDashboard.tsx
│       ├── RecruiterWorkspace.tsx
│       ├── InstitutionDashboard.tsx
│       ├── AssessmentCenter.tsx
│       ├── JobMarketplace.tsx
│       ├── StudentPortfolio.tsx
│       ├── LearningHub.tsx
│       └── SkillIntelligence.tsx
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── index.html
└── README.md
```

### Important files

- `src/App.tsx`: controls role switching, navigation state, and URL hash updates.
- `src/components/layout/navigation.ts`: central definition of sidebar items and profile metadata.
- `src/components/layout/AppLayout.tsx`: shell layout with sidebar, header, and content area.
- `src/pages/*`: actual role-specific UI screens.
- `src/types.ts`: shared types for roles, navigation keys, and component props.

---

## 5. Role and navigation model

The app is designed around a single dynamic workspace system:

- Each role has its own navigation list.
- The active page is stored in localStorage and in browser history state.
- URL hash navigation is used as a lightweight way to represent the current page.

Example:

```ts
window.history.pushState(
  { progress: true, role: nextRole, activeKey: nextKey },
  '',
  `#${nextKey}`,
);
```

This makes the app feel more like a real product and allows Back/Forward browser buttons to navigate between app states instead of leaving the site unexpectedly.

### Role entry points

The app loads a default entry page based on the user role:

- Student -> Student dashboard
- Recruiter -> Recruiter workspace
- Institution -> Institution dashboard

The role is persisted in local storage, so a user can refresh the page and return to the same workspace.

---

## 6. Setup and run instructions

Open a terminal in the project folder:

```bash
cd frontend/progress-dashboard
npm install
npm run dev
```

After the dev server starts, open the local URL shown in the terminal, typically:

```text
http://localhost:5173
```

### Useful commands

```bash
npm run dev      # start local development server
npm run build    # type-check + production build
npm run lint     # run ESLint checks
npm run preview  # preview the production build locally
```

---

## 7. How to use the app

### Landing page

The first screen is the public landing page with marketing-style sections explaining the product. It contains:

- brand section
- value proposition
- key features
- call-to-action buttons

### Entering the app

Click one of the CTA buttons such as:

- Get Started
- For Institutions
- Open recruiter workspace

This will switch the app into a role-based dashboard experience.

### Moving between sections

Use the sidebar to navigate between pages. Each menu item updates the page and pushes the state into browser history so the user can move backward in a natural way.

---

## 8. Design system and styling

The project uses a defined theme in `src/styles/theme.css` and shared UI primitives in `src/components/shared`.

### Common design principles

- Clean SaaS dashboard layout
- High contrast for readability
- Consistent spacing and borders
- Status-based color coding
- Bright actionable buttons

### Shared tokens

The theme uses a palette designed for operational dashboards:

- Primary: indigo / blue brand tone
- Success: green for verified or good status
- Warning: amber for gaps or attention needed
- Danger: red for failed states
- Slate: neutral dark and muted text colors

This keeps the interface visually consistent across different pages.

---

## 9. How the app is structured internally

### App shell

`App.tsx` is the central controller. It decides:

- which role is active
- which page is displayed
- whether the user is logged into the app or on the landing screen
- whether the state should be restored from storage

### Layout shell

`AppLayout.tsx` handles the common structure:

- sticky top bar
- left navigation sidebar
- profile switcher
- page title
- page content container

This means each page does not need to reinvent the shell; it just renders content inside the app frame.

### Page components

Each page in `src/pages` renders a specific dashboard section, such as:

- `LandingPage.tsx`
- `StudentDashboard.tsx`
- `SkillIntelligence.tsx`
- `LearningHub.tsx`
- `AssessmentCenter.tsx`
- `StudentPortfolio.tsx`
- `JobMarketplace.tsx`
- `RecruiterWorkspace.tsx`
- `InstitutionDashboard.tsx`

These page components are mostly UI-focused and can be expanded into real data-backed screens in the future.

---

## 10. Working on the project

### Typical developer workflow

1. Install dependencies
2. Start the dev server
3. Edit components or pages in `src`
4. Check the browser preview
5. Run `npm run lint` and `npm run build` before finalizing

### Good extension points

- Connect pages to a real backend API
- Replace mock static data with database-driven content
- Add authentication and protected routes
- Hook role switching to a real user session
- Add forms for posting jobs, creating assessments, and managing profiles

---

## 11. Troubleshooting

### App does not start

Check if dependencies are installed:

```bash
npm install
```

If the terminal shows missing modules, install again in the project folder.

### Port conflict

If Vite reports the port is already used, it will often automatically select another port. You can also run:

```bash
npm run dev -- --host 0.0.0.0 --port 4173
```

### Browser history not behaving correctly

This project uses `pushState` and `popstate` for app navigation. If you add new routes or custom links, make sure they also push a valid app state object rather than a bare hash fragment.

### Styling looks off

Make sure Tailwind is configured correctly and the project is running with the proper CSS build pipeline. Run:

```bash
npm run build
```

---

## 12. Suggested next steps

To turn this prototype into a production-ready app, the next steps are:

- connect to a real backend API
- implement authentication and role-based authorization
- add database models for students, recruiters, institutions, and jobs
- create real assessment logic and analytics pipelines
- implement portfolio upload and verification flows
- add testing with Vitest or React Testing Library

---

## 13. Summary

This project is a polished front-end dashboard prototype for a skill intelligence and graduate placement platform. It demonstrates how students, recruiters, and institutions can work in a united ecosystem through a role-based UI, reusable components, and consistent design language.

If you are starting from scratch, the fastest way to run it is:

```bash
cd frontend/progress-dashboard
npm install
npm run dev
```

Then open the local Vite URL and explore the different workspaces.

---

## 14. Quick contributor guide

If you want to contribute:

- keep UI components reusable
- add new pages under `src/pages`
- update shared navigation in `src/components/layout/navigation.ts`
- maintain type safety in `src/types.ts`
- run lint and build checks before committing

---

This README is intended to help both first-time users and future developers understand how the project works, how to run it, and how to extend it.
