# Compass Project Guidelines & Architecture Rules

This file defines the project conventions and architectural guardrails for the Compass college discovery platform. All code modifications in this workspace must adhere to these standards.

## 1. Technology Stack
- **Full-Stack Framework**: Next.js 15 (App Router), React 19, Tailwind CSS v3, Lucide React icons.
- **Database & ODM**: MongoDB with Mongoose (`lib/models/`, `lib/mongodb.js`).
- **Language**: JavaScript / JSX (`.js`, `.jsx`). Conversion to TypeScript (`.ts`, `.tsx`) is scheduled for a future milestone.
- **Styling**: Tailwind CSS v3 with brand theme tokens, Inter font, dot patterns.

## 2. Next.js Directory Layout & Architecture
- `app/`: Next.js App Router route trees:
  - `page.jsx`: Homepage with editorial hero banner.
  - `colleges/`, `courses/`, `locations/`, `exams/`, `rankings/`, `compare/`, `counselling/`, `admissions/`, `resources/`, `blog/`, `search/`: Feature-specific routes.
  - `about/`, `contact/`, `faq/`, `privacy/`, `terms/`, `not-found.jsx`: Static & legal routes.
  - `api/`: Next.js Route Handlers (`/api/colleges`, `/api/courses`, `/api/locations`, `/api/exams`, `/api/search`, `/api/enquiries`, `/api/counselling`).
- `components/`: Modular reusable React components:
  - `common/`: Core primitives (`Button`, `Badge`, `Breadcrumbs`, `Modal`, `SectionHeading`).
  - `college/`, `course/`, `location/`, `forms/`, `comparison/`, `search/`, `layout/`.
- `lib/`:
  - `mongodb.js`: Cached Mongoose connection helper.
  - `models/`: Mongoose schemas (`College.js`, `Enquiry.js`, `CounsellingBooking.js`).
  - `apiService.js`: Unified client-side API service.
  - `data/`: In-memory baseline datasets and seed fixtures.
  - `seed/seedData.js`: MongoDB data population script (`npm run seed`).
- `public/`: Public assets including College Leadership brand logos and SVG assets.

## 3. Design System & Styling Rules
- **Color Palette**: Use `brand-*` utility classes defined in `tailwind.config.js`:
  - `bg-brand-teal`, `text-brand-teal`, `hover:bg-brand-teal-dark`
  - `bg-brand-teal-light`, `bg-brand-teal-subtle`
  - `text-brand-dark` (`#111111`), `text-brand-gray` (`#5F6368`)
  - `border-brand-border` (`#DDE5E8`)
- **Button Styling**:
  - **No Pills**: Do NOT use `rounded-full` for action buttons. Compass uses a crisp, rectangular editorial aesthetic (`rounded-sm` / `rounded`, 2px–6px radius).
  - Always favor the shared `<Button>` component (`components/common/Button.jsx`).
- **Typography & Backgrounds**:
  - Font: `Inter`.
  - Brand dot patterns: `.bg-dot-pattern`, `.bg-dot-pattern-light`.

## 4. SEO & Metadata Invariants
- Every route component must export `metadata` or define route metadata with:
  - Descriptive, unique `title`
  - Concise `description`
  - Canonical URL (`alternates.canonical`)
- Breadcrumbs must accompany all non-home pages using `<Breadcrumbs>`.

## 5. Backend & Data Access
- MongoDB connection is established dynamically via `lib/mongodb.js`.
- If MongoDB URI is not set, fallback in-memory data guarantees the site runs 100% functional out-of-the-box.
