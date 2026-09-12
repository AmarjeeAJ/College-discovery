# College Discovery Platform

An educational discovery portal, student advisory desk, and premium college listing service empowering students across India to make data-backed higher education decisions.

---

## Key Features

- **National College Directory**: Detailed profiles for Engineering (B.Tech), Management (MBA), Medical, and Law institutions.
- **Audited Placement & Fee Data**: 100% verified annual fee schedules, median salary packages, hostel fees, and accreditations.
- **Side-by-Side Comparison**: Directly compare up to 4 colleges across NIRF ranking, fees, average package, and eligibility.
- **Admissions & Counselling Desk**: Transparent admission guidance, exam cutoffs (JEE Main, CAT, NEET, CLAT), and 1-on-1 expert counselling.
- **Institutional Listing & Promotion Service (`/college-listing`)**: Dedicated profiles and organic search visibility for colleges and universities to reach prospective applicants.
- **Discipline & City Hub Guides**: Comprehensive course guides and regional education hubs (Jaipur, Delhi NCR, Bangalore, Mumbai).

---

## Technology Stack

- **Full-Stack Framework**: Next.js 15 (App Router), React 19
- **Client SPA**: Vite + React Router
- **Styling**: Tailwind CSS v3 with custom brand tokens and crisp rectangular editorial aesthetic
- **Icons**: Lucide React
- **Database & Backend**: MongoDB with Mongoose (with in-memory fallback support)

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AmarjeeAJ/College-discovery.git
   cd College-discovery
   ```

2. Install root dependencies:
   ```bash
   npm install
   ```

3. Install client dependencies:
   ```bash
   cd client
   npm install
   cd ..
   ```

### Running the Development Server

- **Next.js Full-Stack App**:
  ```bash
  npm run dev
  ```
  Open [http://localhost:3000](http://localhost:3000) in your browser.

- **Vite Client**:
  ```bash
  cd client
  npm run dev
  ```
  Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## License
MIT
