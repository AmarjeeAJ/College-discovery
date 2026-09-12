# Server Architecture Blueprint (MERN Backend Integration)

This document outlines the architectural roadmap for connecting the Node.js / Express.js / MongoDB backend server to the already decoupled React client.

---

## 1. REST API Endpoints Specification

When implementing the Express.js server, define the following routes in `server/routes/` to seamlessly replace `client/src/services/api.js`:

### Colleges & Universities
- `GET /api/colleges` - Query filters: `stream`, `city`, `state`, `type`, `maxFee`, `sort`, `page`, `limit`
- `GET /api/colleges/:slug` - Returns complete college profile with subdocuments for courses, cutoffs, and placements
- `POST /api/colleges` (Admin) - Create new college profile
- `PUT /api/colleges/:id` (Admin) - Update college information

### Courses & Degrees
- `GET /api/courses` - Fetch all degree paths (B.Tech, MBA, BCA, MCA, Law, Medical)
- `GET /api/courses/:slug` - Detailed syllabus, entrance exams, and eligibility criteria

### Locations & Education Hubs
- `GET /api/locations` - Cities with aggregated college counts and living cost metrics
- `GET /api/locations/:city` - In-depth local university ecosystem insights

### Entrance Examinations
- `GET /api/exams` - All national and state entrance tests (JEE, CAT, NEET, CLAT, CUET)
- `GET /api/exams/:slug` - Pattern, important dates, and participating colleges

### Lead Capture & Counselling Forms
- `POST /api/enquiries` - Ingest student admission enquiry into CRM pipeline
- `POST /api/counselling` - Reserve 1-on-1 counselor guidance appointment
- `POST /api/contact` - General advisory inquiries

### Search
- `GET /api/search?q=...` - Full-text cross-entity search across colleges, courses, locations, and exams

---

## 2. MongoDB Collections Schema Design

### `colleges`
```javascript
{
  _id: ObjectId,
  slug: String, // unique, indexed
  name: String,
  shortName: String,
  type: String, // 'Public' | 'Private' | 'Deemed'
  city: String, // indexed
  state: String,
  establishedYear: Number,
  campusArea: String,
  accreditation: String,
  nirfRanking: Number,
  rating: Number,
  reviewsCount: Number,
  coverImage: String,
  campusImages: [String],
  stream: [String], // indexed array
  feesRange: String,
  annualFeeNumeric: Number,
  hostelFee: String,
  placementRate: String,
  averagePackage: Number, // in LPA
  highestPackage: Number, // in LPA
  entranceExams: [String],
  featured: Boolean,
  description: String,
  courses: [{
    name: String,
    duration: String,
    seats: Number,
    annualFee: String,
    avgPackage: String,
    eligibility: String
  }],
  cutoffs: [{
    branch: String,
    round1Rank: Number,
    closingRank: Number
  }],
  recruiters: [String],
  facilities: [String],
  scholarships: String,
  faqs: [{ q: String, a: String }]
}
```

### `enquiries`
```javascript
{
  _id: ObjectId,
  name: String,
  phone: String,
  email: String,
  course: String,
  preferredLocation: String,
  preferredCollege: String,
  message: String,
  status: String, // 'new' | 'contacted' | 'counselled' | 'enrolled'
  createdAt: Date
}
```

### `counsellingRequests`
```javascript
{
  _id: ObjectId,
  studentName: String,
  parentName: String,
  phone: String,
  email: String,
  currentStatus: String,
  stream: String,
  preferredSlot: String,
  mode: String,
  status: String,
  createdAt: Date
}
```

---

## 3. Client API Switch Instructions

To connect this Express backend to the React client:
1. Set `VITE_API_BASE_URL=http://localhost:5000/api` in `client/.env`.
2. In `client/src/services/api.js`, replace simulated Promise delays with standard `fetch(`${BASE_URL}/...`)` or `axios` calls.
3. No React UI components or route files require any changes!
