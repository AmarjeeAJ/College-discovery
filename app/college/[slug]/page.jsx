'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  MapPin,
  Star,
  Award,
  Download,
  CheckCircle,
  HelpCircle,
  Plus,
  Check,
  PhoneCall
} from 'lucide-react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import AdmissionEnquiryForm from '@/components/forms/AdmissionEnquiryForm';
import CollegeCard from '@/components/college/CollegeCard';
import { useCompare } from '@/components/comparison/CompareContext';
import { collegesData } from '@/lib/data/colleges';
import { formatPackage } from '@/lib/utils/formatters';

export default function CollegeDetailPage({ params }) {
  const routeParams = useParams();
  const slug = routeParams?.slug || params?.slug || '';

  const college = useMemo(() => {
    if (!slug) return null;
    const target = slug.toLowerCase().trim();
    return (
      collegesData.find(
        (c) =>
          c.slug.toLowerCase() === target ||
          (c.aliases && c.aliases.some((a) => a.toLowerCase() === target))
      ) || null
    );
  }, [slug]);

  const similarColleges = useMemo(() => {
    if (!college || !college.stream || college.stream.length === 0) return [];
    const firstStream = college.stream[0].toLowerCase().replace(/[\.\s-]/g, '');
    return collegesData
      .filter(
        (c) =>
          c.id !== college.id &&
          c.stream.some((s) => s.toLowerCase().replace(/[\.\s-]/g, '').includes(firstStream))
      )
      .slice(0, 3);
  }, [college]);

  const [activeTab, setActiveTab] = useState('overview');
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [brochureDownloaded, setBrochureDownloaded] = useState(false);

  const { isSelected, addCollege, removeCollege } = useCompare();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!college) {
    return (
      <div className="mx-auto max-w-3xl py-24 px-4 text-center space-y-4">
        <h2 className="text-2xl font-bold text-brand-dark">College Profile Not Found</h2>
        <p className="text-sm text-brand-gray">
          The institution you requested could not be located in our verified directory.
        </p>
        <Button href="/colleges" variant="primary">
          Back to Directory
        </Button>
      </div>
    );
  }

  const selectedForCompare = isSelected(college.id);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'courses', label: 'Courses & Fees' },
    { id: 'admission', label: 'Admission & Eligibility' },
    { id: 'placements', label: 'Placements & Recruiters' },
    { id: 'cutoffs', label: 'Cutoffs & Rankings' },
    { id: 'campus', label: 'Hostel & Facilities' },
    { id: 'reviews', label: 'Student Reviews' },
    { id: 'faqs', label: 'FAQs' }
  ];

  return (
    <div className="space-y-8 pb-16">
      {/* =========================================================================
          HERO & HEADER BANNER
          ========================================================================= */}
      <section className="bg-brand-black text-white relative">
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={college.coverImage}
            alt={`${college.name} campus panorama`}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover opacity-90 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/95 via-brand-black/30 to-black/10" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-28 relative z-10 pb-6">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                {college.nirfRanking && (
                  <span className="bg-brand-teal text-white font-bold px-2.5 py-1 rounded-sm">
                    NIRF #{college.nirfRanking}
                  </span>
                )}
                <span className="bg-gray-800 border border-gray-700 text-gray-200 font-medium px-2.5 py-1 rounded-sm">
                  {college.type}
                </span>
                <span className="bg-gray-800 border border-gray-700 text-gray-200 font-medium px-2.5 py-1 rounded-sm">
                  Est. {college.establishedYear}
                </span>
              </div>

              {/* College Title & Location */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {college.name}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-300">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-brand-teal" />
                  <span>{college.city}, {college.state}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>{college.accreditation}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1 text-amber-400 font-bold">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{college.rating} / 5</span>
                  <span className="text-gray-400 font-normal">({college.reviewsCount} reviews)</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full md:w-auto">
              <button
                onClick={() => {
                  if (selectedForCompare) removeCollege(college.id);
                  else addCollege(college);
                }}
                className={`text-xs font-semibold px-4 py-2.5 rounded transition-colors flex items-center gap-1.5 border ${
                  selectedForCompare
                    ? 'bg-brand-teal text-white border-brand-teal'
                    : 'bg-white text-brand-dark border-gray-300 hover:border-brand-teal'
                }`}
              >
                {selectedForCompare ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                <span>{selectedForCompare ? 'Added to Compare' : 'Add to Compare'}</span>
              </button>

              <Button
                onClick={() => setBrochureModalOpen(true)}
                variant="outline"
                size="md"
                icon={Download}
                iconPosition="left"
                className="border-gray-600 text-white bg-transparent hover:bg-white/10 hover:text-white"
              >
                Brochure
              </Button>

              <Button
                href="#enquiry-section"
                variant="primary"
                size="md"
              >
                Apply / Enquire
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STICKY TAB NAVIGATION BAR
          ========================================================================= */}
      <div className="sticky top-16 sm:top-20 z-20 bg-white border-b border-brand-border shadow-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-1 sm:space-x-4 overflow-x-auto py-2.5 no-scrollbar text-xs sm:text-sm font-medium">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-brand-teal text-white font-semibold'
                    : 'text-brand-gray hover:text-brand-dark hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* =========================================================================
          MAIN CONTENT AREA & ADMISSION SIDEBAR
          ========================================================================= */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content Column */}
          <main className="lg:col-span-8 space-y-10">
            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-brand-teal-subtle border border-brand-border rounded p-4 text-center">
              <div>
                <span className="text-[11px] text-brand-gray block">Average CTC</span>
                <span className="text-base sm:text-lg font-bold text-emerald-700">
                  {formatPackage(college.averagePackage)}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-brand-gray block">Highest Package</span>
                <span className="text-base sm:text-lg font-bold text-brand-dark">
                  {formatPackage(college.highestPackage)}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-brand-gray block">Placement Rate</span>
                <span className="text-base sm:text-lg font-bold text-brand-dark">
                  {college.placementRate}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-brand-gray block">Campus Area</span>
                <span className="text-base sm:text-lg font-bold text-brand-dark">
                  {college.campusArea}
                </span>
              </div>
            </div>

            {/* TAB: OVERVIEW */}
            {activeTab === 'overview' && (
              <section className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-brand-dark mb-3">
                    About {college.name}
                  </h2>
                  <p className="text-sm text-brand-gray leading-relaxed">
                    {college.description}
                  </p>
                </div>

                {/* Campus Gallery */}
                <div>
                  <h3 className="text-base font-bold text-brand-dark mb-3">
                    Campus Infrastructure & Life
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {college.campusImages && college.campusImages.map((img, i) => (
                      <div key={i} className="h-48 rounded-sm overflow-hidden shadow-sm">
                        <img
                          src={img}
                          alt={`${college.name} campus view ${i + 1}`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = '/images/colleges/campus-fallback.jpg';
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Highlights Table */}
                <div>
                  <h3 className="text-base font-bold text-brand-dark mb-3">
                    Institutional Quick Facts
                  </h3>
                  <div className="border border-brand-border rounded overflow-hidden text-xs">
                    <table className="w-full border-collapse">
                      <tbody>
                        <tr className="border-b border-brand-border">
                          <td className="bg-gray-50 p-3 font-semibold text-brand-gray w-1/3">Ownership Type</td>
                          <td className="p-3 text-brand-dark font-medium">{college.type}</td>
                        </tr>
                        <tr className="border-b border-brand-border">
                          <td className="bg-gray-50 p-3 font-semibold text-brand-gray">Approved / Accredited By</td>
                          <td className="p-3 text-brand-dark font-medium">{college.accreditation}</td>
                        </tr>
                        <tr className="border-b border-brand-border">
                          <td className="bg-gray-50 p-3 font-semibold text-brand-gray">Accepted Entrance Exams</td>
                          <td className="p-3 text-brand-dark font-medium">{college.entranceExams.join(', ')}</td>
                        </tr>
                        <tr className="border-b border-brand-border">
                          <td className="bg-gray-50 p-3 font-semibold text-brand-gray">Hostel Accommodation</td>
                          <td className="p-3 text-brand-dark font-medium">{college.hostelFee} (Separate boys & girls hostels)</td>
                        </tr>
                        <tr>
                          <td className="bg-gray-50 p-3 font-semibold text-brand-gray">Scholarships Available</td>
                          <td className="p-3 text-brand-dark font-medium">{college.scholarships}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            )}

            {/* TAB: COURSES & FEES */}
            {activeTab === 'courses' && (
              <section className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-brand-dark mb-2">
                    Courses Offered, Seat Matrix & Fee Schedule (2026)
                  </h2>
                  <p className="text-xs text-brand-gray mb-4">
                    Fees shown represent standard annual tuition charges excluding refundable caution deposits and hostel charges.
                  </p>
                </div>

                <div className="space-y-4">
                  {college.courses.map((course, idx) => (
                    <div key={idx} className="border border-brand-border rounded p-4 bg-white space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-brand-border/60 pb-2.5">
                        <div>
                          <h3 className="font-bold text-base text-brand-dark">
                            {course.name}
                          </h3>
                          <span className="text-xs text-brand-gray">
                            Duration: {course.duration} • Seats: {course.seats}
                          </span>
                        </div>
                        <div className="text-right sm:text-right">
                          <span className="text-xs text-brand-gray block">Annual Tuition</span>
                          <span className="font-extrabold text-base text-brand-teal-dark">
                            {course.annualFee}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div>
                          <span className="font-semibold text-brand-dark block">Eligibility Criteria:</span>
                          <span className="text-brand-gray">{course.eligibility}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-brand-dark block">Average Batch CTC:</span>
                          <span className="font-bold text-emerald-700">{course.avgPackage}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* TAB: ADMISSION & ELIGIBILITY */}
            {activeTab === 'admission' && (
              <section className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-brand-dark mb-2">
                    Admission Process & Eligibility Guidelines
                  </h2>
                  <p className="text-xs text-brand-gray">
                    Official admission routes, counselling bodies, and documentation checklist.
                  </p>
                </div>

                <div className="border border-brand-border rounded p-5 bg-white space-y-3">
                  <h3 className="font-bold text-sm text-brand-dark">
                    General Eligibility Requirements
                  </h3>
                  <p className="text-xs text-brand-gray leading-relaxed">
                    Candidate must have passed 10+2 with minimum aggregate marks specified by institutional norms, with valid rank in national/state entrance examinations.
                  </p>
                </div>
              </section>
            )}

            {/* TAB: PLACEMENTS & RECRUITERS */}
            {activeTab === 'placements' && (
              <section className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-brand-dark mb-2">
                    Placement Statistics & Key Corporate Recruiters
                  </h2>
                  <p className="text-xs text-brand-gray">
                    Audited placement numbers reflecting recent graduating cohorts.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="border border-brand-border bg-white p-4 rounded text-center">
                    <span className="text-xs text-brand-gray block">Average CTC</span>
                    <span className="text-xl font-extrabold text-emerald-700 block mt-1">
                      {formatPackage(college.averagePackage)}
                    </span>
                  </div>
                  <div className="border border-brand-border bg-white p-4 rounded text-center">
                    <span className="text-xs text-brand-gray block">Highest Package</span>
                    <span className="text-xl font-extrabold text-brand-dark block mt-1">
                      {formatPackage(college.highestPackage)}
                    </span>
                  </div>
                  <div className="border border-brand-border bg-white p-4 rounded text-center col-span-2 sm:col-span-1">
                    <span className="text-xs text-brand-gray block">Placement Percentage</span>
                    <span className="text-xl font-extrabold text-brand-dark block mt-1">
                      {college.placementRate}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-base text-brand-dark mb-3">
                    Top Visiting Companies & Hiring Partners
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {college.recruiters.map((rec, i) => (
                      <span
                        key={i}
                        className="bg-gray-50 border border-gray-200 text-brand-dark font-medium px-3 py-1.5 rounded text-xs"
                      >
                        {rec}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* TAB: CUTOFFS */}
            {activeTab === 'cutoffs' && (
              <section className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-brand-dark mb-2">
                    Cutoff Trends & Closing Ranks
                  </h2>
                  <p className="text-xs text-brand-gray">
                    Opening and closing ranks for major branches from recent admission counseling sessions.
                  </p>
                </div>

                {college.cutoffs && (
                  <div className="border border-brand-border rounded overflow-hidden text-xs">
                    <table className="w-full border-collapse text-left">
                      <thead className="bg-gray-100 border-b border-brand-border font-semibold text-brand-dark">
                        <tr>
                          <th className="p-3">Academic Branch</th>
                          <th className="p-3">Round 1 Rank</th>
                          <th className="p-3">Final Closing Rank</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-brand-border/60">
                        {college.cutoffs.map((row, idx) => (
                          <tr key={idx} className="hover:bg-gray-50">
                            <td className="p-3 font-medium text-brand-dark">{row.branch}</td>
                            <td className="p-3 text-brand-gray">{row.round1Rank}</td>
                            <td className="p-3 text-emerald-700 font-bold">{row.closingRank}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            )}

            {/* TAB: CAMPUS & HOSTEL */}
            {activeTab === 'campus' && (
              <section className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-brand-dark mb-2">
                    Campus Facilities & Residential Accommodation
                  </h2>
                  <p className="text-xs text-brand-gray">
                    Living amenities, sports infrastructure, laboratories, and student welfare.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {college.facilities.map((fac, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 border border-brand-border rounded bg-white text-xs">
                      <CheckCircle className="w-4 h-4 text-brand-teal shrink-0" />
                      <span className="text-brand-dark font-medium">{fac}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* TAB: REVIEWS */}
            {activeTab === 'reviews' && (
              <section className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-brand-dark mb-2">
                    Verified Student Reviews & Feedback
                  </h2>
                  <p className="text-xs text-brand-gray">
                    Aggregated rating of <strong>{college.rating} / 5</strong> based on {college.reviewsCount} verified student reviews.
                  </p>
                </div>

                <div className="border border-brand-border rounded p-5 bg-white space-y-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
                    <span className="text-lg font-bold text-brand-dark">{college.rating} out of 5</span>
                  </div>
                  <p className="text-xs text-brand-gray leading-relaxed">
                    Students consistently highlight strong coding clubs, active hackathons, and high recruiter turnout, while recommending early preparation for competitive hostel room allocations.
                  </p>
                </div>
              </section>
            )}

            {/* TAB: FAQS */}
            {activeTab === 'faqs' && (
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-brand-dark mb-2">
                  Frequently Asked Questions about {college.name}
                </h2>
                {college.faqs.map((faq, i) => (
                  <div key={i} className="border border-brand-border rounded p-4 space-y-1.5 bg-white">
                    <h3 className="font-bold text-sm text-brand-dark flex items-start gap-2">
                      <HelpCircle className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                      <span>{faq.q}</span>
                    </h3>
                    <p className="text-xs text-brand-gray pl-6 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </section>
            )}

            {/* SIMILAR COLLEGES TO COMPARE */}
            {similarColleges.length > 0 && (
              <section className="pt-8 border-t border-brand-border space-y-4">
                <h2 className="text-lg font-bold text-brand-dark">
                  Similar Colleges to Explore
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {similarColleges.map((sim) => (
                    <CollegeCard key={sim.id} college={sim} />
                  ))}
                </div>
              </section>
            )}
          </main>

          {/* Sticky Sidebar: Lead Capture Form */}
          <aside id="enquiry-section" className="lg:col-span-4 sticky top-28 space-y-6">
            <AdmissionEnquiryForm
              defaultCollege={college.name}
              defaultCourse={college.courses[0]?.name || ''}
            />

            {/* Direct Helpline Card */}
            <div className="border border-brand-border bg-white rounded p-5 space-y-3 text-xs">
              <div className="flex items-center gap-2 font-bold text-brand-dark">
                <PhoneCall className="w-4 h-4 text-brand-teal" />
                <span>Speak with an Admissions Advisor</span>
              </div>
              <p className="text-brand-gray">
                Need clarification regarding category reservation cutoffs, fee installments, or direct admission procedures?
              </p>
              <a
                href="tel:+919358939090"
                className="block text-center font-bold text-brand-teal-dark bg-brand-teal-light py-2 rounded border border-brand-teal/30 hover:bg-brand-teal hover:text-white transition-colors"
              >
                Call: +91 93589 39090
              </a>
            </div>
          </aside>
        </div>
      </div>

      {/* Brochure Download Modal */}
      <Modal
        isOpen={brochureModalOpen}
        onClose={() => {
          setBrochureModalOpen(false);
          setBrochureDownloaded(false);
        }}
        title={`Download ${college.shortName} Official Brochure`}
      >
        {brochureDownloaded ? (
          <div className="text-center py-6 space-y-3">
            <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
            <h4 className="font-bold text-brand-dark">Brochure Sent to Your Contact</h4>
            <p className="text-xs text-brand-gray">
              The official 2026 course curriculum and fee booklet for {college.name} has been queued for delivery.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setBrochureDownloaded(true);
            }}
            className="space-y-3 text-xs"
          >
            <p className="text-brand-gray mb-3">
              Enter your mobile and email to receive the verified 2026 fee schedule, seat matrix, and hostel brochure.
            </p>
            <div>
              <label className="block font-semibold text-brand-dark mb-1">Student Name</label>
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold text-brand-dark mb-1">Mobile Number</label>
              <input
                type="tel"
                required
                placeholder="10-digit mobile"
                className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold text-brand-dark mb-1">Email ID</label>
              <input
                type="email"
                required
                placeholder="your.email@example.com"
                className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:outline-none"
              />
            </div>
            <div className="pt-2">
              <Button type="submit" variant="primary" size="md" className="w-full">
                Download Official PDF Brochure
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}
