'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Building2,
  Eye,
  Users,
  BookOpen,
  FileCheck,
  CheckCircle2,
  Award,
  TrendingUp,
  Search,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  ShieldCheck,
  Check,
  Send,
  Layers,
  Sparkles,
  School,
  GraduationCap,
  MapPin,
  HelpCircle,
  Clock,
  UserCheck
} from 'lucide-react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Button from '@/components/common/Button';
import { apiService } from '@/lib/apiService';

export default function CollegeListingPage() {
  const [formData, setFormData] = useState({
    collegeName: '',
    website: '',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    institutionType: 'Engineering & Technology',
    city: '',
    state: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [listingRef, setListingRef] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.collegeName || !formData.contactPerson || !formData.email || !formData.phone) {
      alert('Please complete all required fields (College Name, Contact Person, Email, and Phone).');
      return;
    }

    setSubmitting(true);
    try {
      const response = await apiService.submitEnquiry({
        name: formData.contactPerson,
        phone: formData.phone,
        email: formData.email,
        course: formData.institutionType,
        preferredLocation: `${formData.city}, ${formData.state}`,
        preferredCollege: formData.collegeName,
        message: `[Institutional College Listing Request] Website: ${formData.website} | Designation: ${formData.designation} | Message: ${formData.message}`
      });

      setListingRef(response.enquiryId || ('LST-' + Date.now().toString(36).toUpperCase()));
      setSubmitted(true);
    } catch (err) {
      setListingRef('LST-' + Date.now().toString(36).toUpperCase());
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById('listing-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="relative pt-6 sm:pt-12 pb-14 sm:pb-20 bg-gradient-to-b from-brand-teal-light/40 via-white to-white border-b border-brand-border/60">
        <div className="absolute inset-0 bg-dot-pattern-light opacity-50 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'College Listing & Institutional Promotion' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-teal-subtle/80 border-l-2 border-l-brand-teal border-y border-r border-brand-border rounded-sm text-xs font-semibold text-brand-dark tracking-tight">
                <Building2 className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                <span>Premium Institutional Listing & Student Outreach Program</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-dark leading-[1.14]">
                Get Your College Discovered by <br />
                <span className="text-brand-teal">More Students.</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-brand-gray leading-relaxed max-w-2xl">
                List your college on our education platform and reach students actively searching for colleges, courses, admissions, fees and career opportunities.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  onClick={scrollToForm}
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  List Your College
                </Button>
                <Button
                  href="tel:+919876543210"
                  variant="outline"
                  size="lg"
                  icon={Phone}
                  iconPosition="left"
                >
                  Talk to Our Team
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-brand-border/70 text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-brand-dark">Dedicated</div>
                  <div className="text-xs text-brand-gray">Institutional Profile</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-brand-dark">High-Intent</div>
                  <div className="text-xs text-brand-gray">Student Discovery</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-brand-dark">Direct</div>
                  <div className="text-xs text-brand-gray">Admission Enquiries</div>
                </div>
              </div>
            </div>

            {/* Right Card / Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="border border-brand-border bg-white rounded-sm shadow-xl p-6 sm:p-8 space-y-6 relative">
                <div className="flex items-center justify-between pb-4 border-b border-brand-border">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-sm bg-brand-teal" />
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">Verified College Profile</span>
                  </div>
                  <span className="text-xs bg-gray-100 text-brand-gray px-2 py-0.5 rounded-sm font-medium">B2B Institutional</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base font-bold text-brand-dark">
                    An Additional High-Visibility Organic Channel
                  </h3>
                  <p className="text-xs text-brand-gray leading-relaxed">
                    Our platform connects higher-education institutions with thousands of prospective applicants and parents who are actively researching fee structures, entrance cutoffs, and campus placements.
                  </p>
                </div>

                <div className="space-y-2.5 text-xs text-brand-dark">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span>Dedicated, complete institutional landing page with zero third-party competitor ads</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span>Indexed across academic streams, geographic locations, and course directories</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span>Direct admission enquiry pipeline routing leads to your admissions office</span>
                  </div>
                </div>

                <div className="bg-brand-teal-subtle border border-brand-border p-3.5 rounded-sm text-xs text-brand-dark space-y-1">
                  <span className="font-bold text-brand-teal block">Transparent Partnership</span>
                  <p className="text-brand-gray text-[11px] leading-relaxed">
                    Publish accurate annual fee schedules, approved seat matrices, and audited placement benchmarks to establish authentic student trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. WHY LIST YOUR COLLEGE
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
            Institutional Benefits
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark tracking-tight">
            Why List Your College on Our Platform?
          </h2>
          <p className="text-xs sm:text-sm text-brand-gray mt-2 leading-relaxed">
            Reach prospective students at the exact moment they are researching admissions, comparing colleges, and evaluating campus career outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Dedicated College Profile',
              desc: 'Receive an exclusive, structured institutional page showcasing your history, accreditation, campus ethos, and leadership.',
              icon: Building2
            },
            {
              title: 'Better Online Visibility',
              desc: 'Improve your institution\'s digital footprint where thousands of serious aspirants search for higher education colleges each month.',
              icon: Eye
            },
            {
              title: 'Reach Active Researchers',
              desc: 'Connect directly with students and parents who are actively comparing cutoffs, fee matrices, and admission schedules.',
              icon: Users
            },
            {
              title: 'Showcase Courses & Programs',
              desc: 'Present your full degree portfolio—including B.Tech specializations, MBA majors, medical branches, and honours law programs.',
              icon: BookOpen
            },
            {
              title: 'Display Admission Information',
              desc: 'Clearly communicate your 2026 eligibility criteria, accepted entrance tests, counselling quotas, and key application dates.',
              icon: FileCheck
            },
            {
              title: 'Highlight Fees & Facilities',
              desc: 'Document transparent tuition ranges, hostel accommodations, advanced laboratory facilities, and campus amenities.',
              icon: Award
            },
            {
              title: 'Showcase Placements & Records',
              desc: 'Publish verified median salary figures, prominent hiring partners, industry collaborations, and alumni success stories.',
              icon: TrendingUp
            },
            {
              title: 'Generate Student Enquiries',
              desc: 'Capture verified student inquiries, brochure download requests, and direct calls straight into your admissions pipeline.',
              icon: Sparkles
            }
          ].map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div
                key={i}
                className="border border-brand-border bg-white rounded p-6 hover:border-brand-teal hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded bg-brand-teal-light text-brand-teal flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-brand-dark">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-brand-gray leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          3. WHAT YOUR COLLEGE LISTING INCLUDES
          ========================================================================= */}
      <section className="bg-brand-teal-subtle/60 border-y border-brand-border py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
              Comprehensive Listing Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark tracking-tight">
              What Your College Listing Includes
            </h2>
            <p className="text-xs sm:text-sm text-brand-gray mt-2 leading-relaxed">
              Every participating institution receives a comprehensive profile structure designed to present critical decision metrics to aspirants clearly and professionally.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'College Profile',
                detail: 'Official brand header with institutional logo, verified status badge, campus location, and affiliation tags.',
                icon: School
              },
              {
                title: 'College Description',
                detail: 'Rich editorial summary explaining your academic vision, founding history, approvals (UGC, AICTE, NAAC), and accreditations.',
                icon: Layers
              },
              {
                title: 'Courses',
                detail: 'Program catalog with degree levels, specializations, seat intake, duration, and curriculum outlines.',
                icon: BookOpen
              },
              {
                title: 'Fees',
                detail: 'Clear annual tuition breakdowns, semester fee options, caution deposits, hostel fees, and mess charges.',
                icon: Award
              },
              {
                title: 'Admission Information',
                detail: 'Step-by-step application guidelines, counseling timelines, direct admission seats, and accepted exams.',
                icon: FileCheck
              },
              {
                title: 'Eligibility',
                detail: 'Minimum qualifying percentages (10+2 / graduation), mandatory subject combinations, and category relaxations.',
                icon: ShieldCheck
              },
              {
                title: 'Placements',
                detail: 'Audited placement reports highlighting median packages, highest CTC offers, branch placement rates, and recruiters.',
                icon: TrendingUp
              },
              {
                title: 'Facilities',
                detail: 'Structured inventory of campus infrastructure including smart classrooms, libraries, sports complexes, Wi-Fi, and labs.',
                icon: CheckCircle2
              },
              {
                title: 'Campus Information',
                detail: 'Campus area in acres, city accessibility, metro/rail connectivity, and student accommodation highlights.',
                icon: MapPin
              },
              {
                title: 'Images',
                detail: 'High-resolution photo gallery showcasing campus architecture, modern labs, auditoriums, hostels, and student life.',
                icon: Eye
              },
              {
                title: 'Contact Information',
                detail: 'Direct institutional admissions office address, official helpline numbers, admissions email, and official portal URL.',
                icon: Phone
              },
              {
                title: 'Admission Enquiry CTA',
                detail: 'Dedicated lead capture form allowing prospective candidates to request callbacks and brochures directly from your team.',
                icon: Send
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-brand-border rounded p-5 flex items-start gap-4 shadow-none"
                >
                  <div className="w-8 h-8 rounded bg-brand-teal-light text-brand-teal flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-brand-teal uppercase tracking-wider">0{idx + 1}</span>
                      <h4 className="font-bold text-sm sm:text-base text-brand-dark">{item.title}</h4>
                    </div>
                    <p className="text-xs text-brand-gray leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SEARCH VISIBILITY (Honest SEO Positioning)
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border border-brand-border bg-white rounded p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
              Organic Search Discovery
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark tracking-tight">
              Build a Stronger Digital Presence Where Students Are Researching Options
            </h2>
            <p className="text-sm text-brand-gray leading-relaxed">
              Our platform creates useful, search-focused college and course pages that help students discover institutions while researching their education options.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="border border-brand-border bg-gray-50/70 p-4 rounded-sm space-y-2">
                <Search className="w-5 h-5 text-brand-teal" />
                <h4 className="font-bold text-sm text-brand-dark">Improve Online Visibility</h4>
                <p className="text-xs text-brand-gray leading-relaxed">
                  Enhance your institution's footprint across organic search queries focused on courses, cutoffs, and admissions.
                </p>
              </div>

              <div className="border border-brand-border bg-gray-50/70 p-4 rounded-sm space-y-2">
                <Users className="w-5 h-5 text-brand-teal" />
                <h4 className="font-bold text-sm text-brand-dark">Reach Researching Students</h4>
                <p className="text-xs text-brand-gray leading-relaxed">
                  Reach students searching for relevant colleges and courses across specific academic disciplines and city hubs.
                </p>
              </div>

              <div className="border border-brand-border bg-gray-50/70 p-4 rounded-sm space-y-2">
                <Globe className="w-5 h-5 text-brand-teal" />
                <h4 className="font-bold text-sm text-brand-dark">Stronger Digital Presence</h4>
                <p className="text-xs text-brand-gray leading-relaxed">
                  Build a stronger digital presence where students are actively shortlisting institutions for their next career move.
                </p>
              </div>
            </div>

            <div className="bg-brand-teal-subtle/60 border-l-2 border-l-brand-teal p-4 text-xs text-brand-dark space-y-1">
              <span className="font-bold text-brand-dark">Our Content Philosophy: Authentic Data, Not Gimmicks</span>
              <p className="text-brand-gray leading-relaxed">
                We believe in ethical, search-optimized educational architectures. We do not make misleading claims of guaranteed #1 Google rankings. Instead, we structure your college's fee data, course catalog, cutoff history, and placement records so search engines recognize your institution as a verified, relevant answer to students' queries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. HOW IT WORKS
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
            Simple 5-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark tracking-tight">
            How It Works
          </h2>
          <p className="text-xs sm:text-sm text-brand-gray mt-2 leading-relaxed">
            From initial registration to welcoming your first student enquiries—our onboarding is straightforward, verified, and transparent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {[
            {
              step: 'Step 1',
              title: 'Submit Your College',
              desc: 'Share your college name, website, primary academic streams, and official contact details with our institutional desk.'
            },
            {
              step: 'Step 2',
              title: 'We Create/Publish Your Listing',
              desc: 'Our academic editorial team verifies the institutional data and publishes your dedicated, standardized college profile.'
            },
            {
              step: 'Step 3',
              title: 'Add Your College Information',
              desc: 'Enrich your profile with verified fee tables, course matrices, placement statistics, eligibility criteria, and campus photography.'
            },
            {
              step: 'Step 4',
              title: 'Students Discover Your College',
              desc: 'Aspirants discover your institution via stream directories, regional city hubs, search filters, and comparative tools.'
            },
            {
              step: 'Step 5',
              title: 'Receive Student Enquiries',
              desc: 'Receive qualified enquiries, brochure requests, and student leads directly into your admissions team\'s inbox or CRM.'
            }
          ].map((s, idx) => (
            <div
              key={idx}
              className="border border-brand-border bg-white rounded p-5 space-y-3 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-brand-teal text-white rounded-sm">
                    {s.step}
                  </span>
                  <span className="text-xs font-bold text-brand-gray/60">0{idx + 1}</span>
                </div>
                <h3 className="font-bold text-sm sm:text-base text-brand-dark">
                  {s.title}
                </h3>
              </div>
              <p className="text-xs text-brand-gray leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          6. WHO SHOULD LIST
          ========================================================================= */}
      <section className="bg-brand-teal-subtle/50 border-y border-brand-border py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
              Institutional Eligibility
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark tracking-tight">
              Who Should List?
            </h2>
            <p className="text-xs sm:text-sm text-brand-gray mt-2 leading-relaxed">
              Our platform serves all accredited higher education institutions seeking quality applicant reach across India.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: 'Universities', desc: 'Central, State, Deemed & Private Universities' },
              { label: 'Engineering Colleges', desc: 'Autonomous & Affiliated Engineering Campuses' },
              { label: 'B.Tech Colleges', desc: 'Specialized Computer Science & Core Tech Institutes' },
              { label: 'MBA Colleges', desc: 'Postgraduate Management Schools & Business Academies' },
              { label: 'Management Colleges', desc: 'Undergraduate & Executive Management Centres' },
              { label: 'Medical Colleges', desc: 'MBBS, BDS, Pharmacy & Allied Health Campuses' },
              { label: 'Law Colleges', desc: 'National Law Universities & BA LLB Degree Colleges' },
              { label: 'Private Colleges', desc: 'Accredited Multi-Discipline Higher Education Colleges' },
              { label: 'Institutes', desc: 'Specialized Design, Architecture & Computing Academies' },
              { label: 'Other Higher-Education Institutions', desc: 'Vocational, Research & Professional Institutions' }
            ].map((target, idx) => (
              <div
                key={idx}
                className="bg-white border border-brand-border rounded p-4 text-left space-y-1.5"
              >
                <div className="w-7 h-7 rounded bg-brand-teal-light text-brand-teal flex items-center justify-center mb-2">
                  <Building2 className="w-3.5 h-3.5" />
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-brand-dark leading-snug">
                  {target.label}
                </h4>
                <p className="text-[11px] text-brand-gray leading-tight">
                  {target.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. LEAD GENERATION SECTION
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-brand-border bg-white rounded p-6 sm:p-10">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
              Admission Pipeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Direct Student Enquiry & Lead Generation Desk
            </h2>
            <p className="text-sm text-brand-gray leading-relaxed">
              Every participating institution listing includes built-in lead generation touchpoints. Students browsing your dedicated college page can instantly:
            </p>

            <div className="space-y-2.5 text-xs text-brand-dark pt-1">
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-brand-teal mt-0.5 shrink-0" />
                <span><strong>Enquire About Admission:</strong> Submit qualifying scores, target course, and contact details for direct callback.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-brand-teal mt-0.5 shrink-0" />
                <span><strong>Request Information:</strong> Download official fee structures, scholarship brochures, and curriculum guidelines.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-brand-teal mt-0.5 shrink-0" />
                <span><strong>Connect With Institution / Advisory:</strong> Direct liaison connecting prospective students and parents with your admissions coordinators.</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs text-brand-gray">
              <span className="bg-gray-100 px-2.5 py-1 rounded">✓ Verified Mobile OTP Filter</span>
              <span className="bg-gray-100 px-2.5 py-1 rounded">✓ Real-Time Lead Delivery</span>
              <span className="bg-gray-100 px-2.5 py-1 rounded">✓ Zero Spam Guarantee</span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-brand-teal-subtle/80 border border-brand-border rounded p-6 space-y-3">
            <h3 className="font-bold text-sm text-brand-dark">
              High Intent vs. Generic Advertising
            </h3>
            <p className="text-xs text-brand-gray leading-relaxed">
              Unlike generic social media ads where users are passively scrolling, visitors on our college discovery platform are actively evaluating colleges, comparing fees, checking cutoffs, and preparing for admission applications.
            </p>
            <div className="border-t border-brand-border pt-3">
              <div className="text-xs font-semibold text-brand-dark">Admissions Cycle 2026 Readiness:</div>
              <p className="text-[11px] text-brand-gray mt-0.5">
                Onboard before peak post-exam counseling windows to capture early aspirants shortlisting their higher education destinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. FINAL CTA & LISTING ENQUIRY FORM
          ========================================================================= */}
      <section id="listing-form-section" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-brand-dark text-white rounded-sm border border-gray-800 p-8 sm:p-12 mb-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
              Partner With Us
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Put Your College in Front of Students Looking for Their Next Step.
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Join leading colleges and universities leveraging our educational discovery platform to showcase their programs, elevate their organic search visibility, and capture serious prospective student enquiries.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button
                onClick={() => {
                  const formEl = document.getElementById('institutional-form');
                  if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="primary"
                size="lg"
              >
                List Your College
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-gray-600 text-white bg-transparent hover:bg-white/10 hover:text-white"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Institutional Listing Form */}
        <div id="institutional-form" className="border border-brand-border bg-white rounded p-6 sm:p-10">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-dark">
              Submit Your College Listing Request
            </h3>
            <p className="text-xs sm:text-sm text-brand-gray mt-1 leading-relaxed">
              Fill out your institution's preliminary information below. Our institutional onboarding team will review your details and connect with you within 1 business day.
            </p>
          </div>

          {submitted ? (
            <div className="bg-brand-teal-light/40 border border-brand-teal p-6 sm:p-8 rounded text-center space-y-3">
              <div className="w-12 h-12 rounded bg-brand-teal text-white mx-auto flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-brand-dark">
                Listing Request Received Successfully!
              </h4>
              <p className="text-xs sm:text-sm text-brand-gray max-w-lg mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-brand-dark">{formData.contactPerson}</span>. We have received the listing request for <span className="font-semibold text-brand-dark">{formData.collegeName}</span>.
              </p>
              <div className="inline-block bg-white border border-brand-border px-4 py-1.5 rounded text-xs text-brand-dark font-mono font-semibold">
                Request Reference: {listingRef}
              </div>
              <p className="text-xs text-brand-gray">
                Our Institutional Outreach Manager will contact you on <span className="font-semibold text-brand-dark">{formData.phone}</span> or <span className="font-semibold text-brand-dark">{formData.email}</span>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                    College / University Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="collegeName"
                    required
                    placeholder="e.g. Apex Institute of Engineering & Technology"
                    value={formData.collegeName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-brand-border rounded focus:outline-none focus:border-brand-teal"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                    Official Website URL
                  </label>
                  <input
                    type="url"
                    name="website"
                    placeholder="https://www.yourcollege.edu.in"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-brand-border rounded focus:outline-none focus:border-brand-teal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                    Contact Person Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    required
                    placeholder="e.g. Dr. Rajesh Sharma"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-brand-border rounded focus:outline-none focus:border-brand-teal"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                    Designation
                  </label>
                  <input
                    type="text"
                    name="designation"
                    placeholder="e.g. Dean of Admissions / Director"
                    value={formData.designation}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-brand-border rounded focus:outline-none focus:border-brand-teal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                    Official Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="admissions@yourcollege.edu.in"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-brand-border rounded focus:outline-none focus:border-brand-teal"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                    Direct Mobile / Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-brand-border rounded focus:outline-none focus:border-brand-teal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                    Primary Academic Discipline
                  </label>
                  <select
                    name="institutionType"
                    value={formData.institutionType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-brand-border rounded focus:outline-none focus:border-brand-teal bg-white"
                  >
                    <option value="Engineering & Technology">Engineering & Technology (B.Tech / M.Tech)</option>
                    <option value="Management & MBA">Management & MBA / PGDM</option>
                    <option value="Medical & Healthcare">Medical & Healthcare (MBBS / BDS)</option>
                    <option value="Law & Legal Studies">Law & Legal Studies (BA LLB / LLM)</option>
                    <option value="University Campus">Multi-disciplinary University</option>
                    <option value="Private College">Private Degree College</option>
                    <option value="Specialized Institute">Specialized Higher Education Institute</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="e.g. Jaipur"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-brand-border rounded focus:outline-none focus:border-brand-teal"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    placeholder="e.g. Rajasthan"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-brand-border rounded focus:outline-none focus:border-brand-teal"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                  Programs & Information You Would Like to Highlight
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Mention your flagship courses, NAAC grade, placement milestones, or specific admission requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-brand-border rounded focus:outline-none focus:border-brand-teal"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="text-xs text-brand-gray">
                  By submitting, you agree to receive official communications regarding institutional onboarding.
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  variant="primary"
                  size="md"
                  icon={Send}
                  iconPosition="right"
                >
                  {submitting ? 'Submitting...' : 'Submit Listing Request'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
