import mongoose from 'mongoose';

const CourseSubSchema = new mongoose.Schema({
  name: { type: String, required: true },
  duration: { type: String, default: '' },
  seats: { type: Number, default: 0 },
  annualFee: { type: String, default: '' },
  avgPackage: { type: String, default: '' },
  eligibility: { type: String, default: '' }
}, { _id: false });

const CutoffSubSchema = new mongoose.Schema({
  branch: { type: String, default: '' },
  round1Rank: { type: Number, default: 0 },
  closingRank: { type: Number, default: 0 }
}, { _id: false });

const FaqSubSchema = new mongoose.Schema({
  q: { type: String, default: '' },
  a: { type: String, default: '' }
}, { _id: false });

const CollegeSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true, index: true },
  name: { type: String, required: true },
  shortName: { type: String, default: '' },
  type: { type: String, default: 'Private' },
  city: { type: String, required: true, index: true },
  state: { type: String, required: true },
  establishedYear: { type: Number, default: 2000 },
  campusArea: { type: String, default: '' },
  accreditation: { type: String, default: '' },
  nirfRanking: { type: Number, default: null },
  rating: { type: Number, default: 4.0 },
  reviewsCount: { type: Number, default: 0 },
  coverImage: { type: String, default: '' },
  campusImages: [{ type: String }],
  stream: [{ type: String, index: true }],
  feesRange: { type: String, default: '' },
  annualFeeNumeric: { type: Number, default: 0, index: true },
  hostelFee: { type: String, default: '' },
  placementRate: { type: String, default: '' },
  averagePackage: { type: Number, default: 0 },
  highestPackage: { type: Number, default: 0 },
  entranceExams: [{ type: String }],
  featured: { type: Boolean, default: false },
  description: { type: String, default: '' },
  courses: [CourseSubSchema],
  cutoffs: [CutoffSubSchema],
  recruiters: [{ type: String }],
  facilities: [{ type: String }],
  scholarships: { type: String, default: '' },
  faqs: [FaqSubSchema]
}, {
  timestamps: true
});

// Prevent recompilation in development HMR
export default mongoose.models.College || mongoose.model('College', CollegeSchema);
