import { useState } from 'react';
import { Link } from 'react-router-dom';
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
  MapPin,
  HelpCircle,
  Clock,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import Button from '../../components/common/Button';
import { apiService } from '../../services/api';

export default function CollegeListingPage() {
  // Institutional Registration Form State
  const [formData, setFormData] = useState({
    collegeName: '',
    establishedYear: '',
    website: '',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    institutionType: 'Engineering & Technology',
    accreditation: 'NAAC Accredited',
    city: '',
    state: '',
    flagshipCourses: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [listingRef, setListingRef] = useState('');

  // Interactive Estimator State
  const [selectedStream, setSelectedStream] = useState('btech');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  const streamEstimates = {
    btech: {
      name: 'Engineering & Technology (B.Tech)',
      impressions: '120,000+',
      inquiries: '450 - 800',
      keyHubs: 'Jaipur, Delhi NCR, Bangalore, Pune, Hyderabad',
      keyExams: 'JEE Main, State CETs (REAP, KCET, MHT-CET)',
      avgPackageBench: '₹6.5 - 14.5 LPA'
    },
    mba: {
      name: 'Management & Business Administration (MBA / PGDM)',
      impressions: '95,000+',
      inquiries: '350 - 650',
      keyHubs: 'Mumbai, Delhi NCR, Bangalore, Ahmedabad, Pune',
      keyExams: 'CAT, XAT, CMAT, MAT, NMAT',
      avgPackageBench: '₹8.5 - 18.0 LPA'
    },
    medical: {
      name: 'Medical & Healthcare (MBBS / BDS / Pharmacy)',
      impressions: '75,000+',
      inquiries: '280 - 520',
      keyHubs: 'Delhi NCR, Karnataka, Rajasthan, Maharashtra',
      keyExams: 'NEET-UG, NEET-PG',
      avgPackageBench: 'Clinical Residency & Hospital Stints'
    },
    law: {
      name: 'Law & Legal Studies (BA LLB / BBA LLB / LLM)',
      impressions: '50,000+',
      inquiries: '180 - 340',
      keyHubs: 'Bangalore, Hyderabad, Kolkata, Delhi NCR, Jodhpur',
      keyExams: 'CLAT, AILET, LSAT India',
      avgPackageBench: '₹7.0 - 16.0 LPA'
    },
    computer: {
      name: 'Computer Applications & IT (BCA / MCA)',
      impressions: '65,000+',
      inquiries: '240 - 480',
      keyHubs: 'Jaipur, Noida, Bangalore, Pune, Chennai',
      keyExams: 'Merit & University Entrance Tests',
      avgPackageBench: '₹4.5 - 9.0 LPA'
    }
  };

  const faqs = [
    {
      q: 'How long does it take for our institutional listing to go live?',
      a: 'Following your submission, our academic verification team reviews your accreditation certificates, regulatory approvals (UGC, AICTE, NAAC, NBA, etc.), and fee structures within 24 to 48 hours. Once verified, your dedicated profile is generated and indexed across our discipline directories and regional city hubs.'
    },
    {
      q: 'Can we update our fee schedules, seat intake, or new specializations after publishing?',
      a: 'Yes. Our institutional partners enjoy continuous listing updates throughout the academic cycle. Whether introducing a new B.Tech AI/ML specialization, adjusting hostel charges, or revising management quota seat intake, our desk updates your live institutional profile within 1 business day without downtime.'
    },
    {
      q: 'How are prospective student enquiries and leads delivered to our admissions office?',
      a: 'Enquiries submitted by students on your dedicated college page undergo instant phone and email format validation. Qualified leads are delivered in real-time directly to your registered admissions email address. We can also integrate lead routing directly into your institutional CRM via secure webhooks.'
    },
    {
      q: 'Why should our college list here instead of running generic social media ads?',
      a: 'Visitors on College Leadership are active higher-education aspirants specifically researching fees, cutoffs, placements, and eligibility. Unlike social media impressions where users are passively browsing feeds, our visitors have explicit intent to shortlist and apply, resulting in significantly higher conversion and enrollment rates.'
    },
    {
      q: 'Do you guarantee a #1 ranking on Google for our college?',
      a: 'No, and we advise caution against any agency claiming guaranteed rankings. We practice ethical, search-engineered optimization: your college page is built with structured JSON-LD schema, sub-second load performance, and comprehensive course and cutoff data. This builds long-term, organic search visibility for relevant queries like "[Course] colleges in [City]" and "[College Name] fees and admissions".'
    },
    {
      q: 'Are competitor colleges allowed to run intrusive banner ads on our listing page?',
      a: 'Never. Your institutional listing is a dedicated, distraction-free environment. We do not display third-party competitor banner ads, predatory popups, or redirect widgets on your official college profile.'
    },
    {
      q: 'What institutional categories and degrees are eligible for listing?',
      a: 'We list recognized Central, State, Deemed-to-be, and State Private Universities, autonomous engineering colleges, approved business schools, medical and dental campuses, law schools, and specialized higher education academies that hold legitimate accreditation and regulatory standing.'
    }
  ];

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
      await apiService.submitContact({
        name: formData.contactPerson,
        phone: formData.phone,
        email: formData.email,
        subject: `[Institutional College Listing] ${formData.collegeName} (${formData.institutionType})`,
        message: `College: ${formData.collegeName} | Established: ${formData.establishedYear} | Accreditation: ${formData.accreditation} | Website: ${formData.website} | Designation: ${formData.designation} | City: ${formData.city}, ${formData.state} | Flagship: ${formData.flagshipCourses} | Message: ${formData.message}`
      });

      setListingRef('LST-' + Date.now().toString(36).toUpperCase());
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

  const currentEst = streamEstimates[selectedStream];

  return (
    <div className="space-y-16 sm:space-y-24">
      <SEO
        title="Get Your College Discovered by More Students | Institutional Listing"
        description="List your college on our education platform and reach students actively searching for colleges, courses, admissions, fees and career opportunities."
        canonical="https://theshineeducation.com/college-listing"
      />

      {/* =========================================================================
          1. HERO SECTION (High-Contrast Editorial Architecture)
          ========================================================================= */}
      <section className="relative pt-6 sm:pt-12 pb-14 sm:pb-20 bg-gradient-to-b from-brand-teal-light/40 via-white to-white border-b border-brand-border/60">
        <div className="absolute inset-0 bg-dot-pattern-light opacity-50 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Institutional Partnership & College Listing' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-teal-subtle/80 border-l-2 border-l-brand-teal border-y border-r border-brand-border rounded-sm text-xs font-semibold text-brand-dark tracking-tight">
                <Building2 className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                <span>Verified Higher-Education Institutional Visibility Network</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-dark leading-[1.12]">
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
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center font-medium tracking-tight whitespace-nowrap transition-colors duration-150 text-base px-6 py-3 rounded gap-2.5 font-semibold bg-white text-brand-dark border border-brand-border hover:border-brand-teal hover:text-brand-teal-dark hover:bg-brand-teal-light/40"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Talk to Our Team</span>
                </a>
              </div>

              {/* Verified Value Metrics Bar */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-brand-border/70 text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-brand-dark">85,000+</div>
                  <div className="text-xs text-brand-gray">Monthly Student Visitors</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-brand-dark">1,200+</div>
                  <div className="text-xs text-brand-gray">Institutions Profiled</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-brand-dark">35+</div>
                  <div className="text-xs text-brand-gray">Regional Education Hubs</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-brand-dark">100%</div>
                  <div className="text-xs text-brand-gray">Data Verification Standard</div>
                </div>
              </div>
            </div>

            {/* Right Interactive Card / Verified Profile Preview */}
            <div className="lg:col-span-5 relative">
              <div className="border border-brand-border bg-white rounded shadow-xl p-6 sm:p-8 space-y-5 relative">
                <div className="flex items-center justify-between pb-4 border-b border-brand-border">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-sm bg-brand-teal" />
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
                      Dedicated Institutional Profile
                    </span>
                  </div>
                  <span className="text-[11px] bg-gray-100 text-brand-gray px-2 py-0.5 rounded-sm font-semibold uppercase tracking-wider">
                    Official Listing
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-base sm:text-lg font-bold text-brand-dark">
                    An Additional High-Visibility Organic Channel
                  </h3>
                  <p className="text-xs text-brand-gray leading-relaxed">
                    Colleges and universities can pay to list their institution on our platform. Your listing gives you a dedicated, detailed college profile and greater visibility to students searching for colleges, courses, admissions, fees, placements, locations, and related education information.
                  </p>
                </div>

                <div className="space-y-2 text-xs text-brand-dark">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span><strong>Clean Institutional Microsite:</strong> Zero competitor banner ads or distractors on your profile</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span><strong>Multi-Portal Distribution:</strong> Integrated across Stream Directories, Location Hubs & Compare Matrix</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span><strong>Direct Lead Route:</strong> Student admission inquiries dispatched immediately to your admissions desk</span>
                  </div>
                </div>

                <div className="bg-brand-teal-subtle/80 border border-brand-border p-4 rounded-sm text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-brand-dark">Admissions Cycle 2026 Ready</span>
                    <span className="text-[10px] uppercase font-bold text-brand-teal bg-white px-2 py-0.5 rounded-sm border border-brand-border">
                      Verified
                    </span>
                  </div>
                  <p className="text-brand-gray text-[11px] leading-relaxed">
                    Publish your approved annual fee schedules, official intake quotas, and audited placement benchmarks to establish immediate credibility with parents and applicants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STREAM ESTIMATOR (Interactive Reach & Applicant Intent Tool)
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border border-brand-border bg-white rounded p-6 sm:p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-brand-border">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
                Discipline-Specific Reach Analytics
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
                Estimate Your Institutional Reach
              </h2>
              <p className="text-xs sm:text-sm text-brand-gray max-w-2xl">
                Select your institution's primary academic stream to review benchmark applicant search demand and inquiry volume during peak admissions windows.
              </p>
            </div>

            {/* Stream Selector Buttons */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-gray-100 rounded">
              {[
                { id: 'btech', label: 'B.Tech / Engg' },
                { id: 'mba', label: 'MBA / Mgmt' },
                { id: 'medical', label: 'Medical' },
                { id: 'law', label: 'Law' },
                { id: 'computer', label: 'BCA / IT' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedStream(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                    selectedStream === tab.id
                      ? 'bg-brand-teal text-white shadow-sm font-semibold'
                      : 'text-brand-gray hover:text-brand-dark'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Stream Analytics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="border border-brand-border p-4 rounded bg-brand-teal-subtle/30 space-y-1">
              <span className="text-xs text-brand-gray block">Active Monthly Search Demand</span>
              <div className="text-2xl font-extrabold text-brand-dark">{currentEst.impressions}</div>
              <span className="text-[11px] text-brand-teal font-medium">Stream-specific queries</span>
            </div>

            <div className="border border-brand-border p-4 rounded bg-brand-teal-subtle/30 space-y-1">
              <span className="text-xs text-brand-gray block">Inquiries / Season Bench</span>
              <div className="text-2xl font-extrabold text-brand-dark">{currentEst.inquiries}</div>
              <span className="text-[11px] text-brand-teal font-medium">Pre-screened student leads</span>
            </div>

            <div className="border border-brand-border p-4 rounded bg-brand-teal-subtle/30 space-y-1">
              <span className="text-xs text-brand-gray block">Placement Metric Focus</span>
              <div className="text-sm font-bold text-brand-dark pt-1">{currentEst.avgPackageBench}</div>
              <span className="text-[11px] text-brand-gray">Evaluated by 89% of candidates</span>
            </div>

            <div className="border border-brand-border p-4 rounded bg-brand-teal-subtle/30 space-y-1">
              <span className="text-xs text-brand-gray block">Key Feeding Hubs</span>
              <div className="text-xs font-semibold text-brand-dark pt-1 leading-snug">{currentEst.keyHubs}</div>
              <span className="text-[11px] text-brand-gray">High student mobility clusters</span>
            </div>

            <div className="border border-brand-border p-4 rounded bg-brand-teal-subtle/30 space-y-1">
              <span className="text-xs text-brand-gray block">Gateway Examinations</span>
              <div className="text-xs font-semibold text-brand-dark pt-1 leading-snug">{currentEst.keyExams}</div>
              <span className="text-[11px] text-brand-gray">Aligned with cutoff search hubs</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. WHY LIST YOUR COLLEGE (8 Enhanced Benefit Cards)
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
            Reach serious, prospective students at the exact moment they are researching admissions, comparing colleges, and evaluating career outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Dedicated College Profile',
              desc: 'An authoritative institutional microsite showcasing your heritage, leadership, approvals (UGC, AICTE, NAAC), and distinct campus culture.',
              icon: Building2
            },
            {
              title: 'Better Online Visibility',
              desc: 'Elevate your institution\'s digital presence where thousands of serious aspirants search for higher-education colleges and programs each month.',
              icon: Eye
            },
            {
              title: 'Reach Active Researchers',
              desc: 'Engage high-intent candidates and parents actively cross-evaluating entrance cutoffs, tuition fees, and admission criteria across India.',
              icon: Users
            },
            {
              title: 'Showcase Courses & Programs',
              desc: 'Present your full degree catalog—from flagship B.Tech specializations and MBA majors to clinical medical degrees and honours law curricula.',
              icon: BookOpen
            },
            {
              title: 'Display Admission Information',
              desc: 'Publish verified eligibility criteria, state quota vs. management seats, accepted entrance exam cutoffs, and key application timelines.',
              icon: FileCheck
            },
            {
              title: 'Highlight Fees & Facilities',
              desc: 'Document transparent annual tuition structures, hostel accommodation choices, modern research laboratories, and campus amenities.',
              icon: Award
            },
            {
              title: 'Showcase Placements & Achievements',
              desc: 'Feature audited median packages, premier recruiters, research patents, and distinguished alumni to build immediate applicant trust.',
              icon: TrendingUp
            },
            {
              title: 'Generate Student Enquiries',
              desc: 'Capture pre-screened student enquiries, brochure download requests, and direct calls routed immediately to your admissions desk.',
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
          3. WHAT YOUR COLLEGE LISTING INCLUDES (12 Structured Elements)
          ========================================================================= */}
      <section className="bg-brand-teal-subtle/60 border-y border-brand-border py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
              Standardized Profile Architecture
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
                  className="bg-white border border-brand-border rounded p-5 flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded bg-brand-teal-light text-brand-teal flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-brand-teal uppercase tracking-wider">
                        {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </span>
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
          4. SEARCH VISIBILITY (Honest SEO Positioning & Technical Merit)
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
              <div className="border border-brand-border bg-gray-50/70 p-4 rounded space-y-2">
                <Search className="w-5 h-5 text-brand-teal" />
                <h4 className="font-bold text-sm text-brand-dark">Improve Online Visibility</h4>
                <p className="text-xs text-brand-gray leading-relaxed">
                  Improve your college's online visibility across organic queries covering course curricula, fee breakdowns, cutoffs, and admissions.
                </p>
              </div>

              <div className="border border-brand-border bg-gray-50/70 p-4 rounded space-y-2">
                <Users className="w-5 h-5 text-brand-teal" />
                <h4 className="font-bold text-sm text-brand-dark">Reach Researching Students</h4>
                <p className="text-xs text-brand-gray leading-relaxed">
                  Reach students searching for relevant colleges and courses across specific academic disciplines and regional city clusters.
                </p>
              </div>

              <div className="border border-brand-border bg-gray-50/70 p-4 rounded space-y-2">
                <Globe className="w-5 h-5 text-brand-teal" />
                <h4 className="font-bold text-sm text-brand-dark">Stronger Digital Presence</h4>
                <p className="text-xs text-brand-gray leading-relaxed">
                  Build a stronger digital presence where students are researching their options and making high-stakes education choices.
                </p>
              </div>
            </div>

            <div className="bg-brand-teal-subtle/60 border-l-2 border-l-brand-teal p-4 text-xs text-brand-dark space-y-1.5">
              <span className="font-bold text-brand-dark block">Our Organic Philosophy: Ethical Architecture, Not False Promises</span>
              <p className="text-brand-gray leading-relaxed">
                We believe in ethical, search-optimized educational architectures. We do not make misleading claims of guaranteed #1 Google rankings or promise that every college will automatically rank first. Instead, we structure your college’s fee data, course catalog, cutoff history, and placement records so search engines recognize your institution as a verified, relevant answer to students' queries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          COMPARATIVE ADVANTAGE TABLE (Listing vs Generic Ads vs Aggregators)
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
            Channel Comparison
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
            How College Leadership Compares
          </h2>
          <p className="text-xs sm:text-sm text-brand-gray mt-2 leading-relaxed">
            Evaluate why dedicated institutional listings deliver higher engagement and authentic credibility compared to pay-per-click ad campaigns.
          </p>
        </div>

        <div className="border border-brand-border bg-white rounded overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-brand-dark text-white text-xs uppercase tracking-wider">
                <th className="py-3.5 px-4 font-semibold">Evaluation Criteria</th>
                <th className="py-3.5 px-4 font-semibold text-brand-teal bg-brand-black">College Leadership Listing</th>
                <th className="py-3.5 px-4 font-semibold text-gray-300">Social Media & Search Ads</th>
                <th className="py-3.5 px-4 font-semibold text-gray-300">Cluttered Lead Aggregators</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border text-brand-dark">
              <tr>
                <td className="py-3 px-4 font-semibold bg-gray-50">Audience Intent</td>
                <td className="py-3 px-4 font-semibold text-brand-teal-dark bg-brand-teal-light/20">High (Active admission researchers)</td>
                <td className="py-3 px-4 text-brand-gray">Low to Medium (Passive feed scrollers)</td>
                <td className="py-3 px-4 text-brand-gray">Medium (Generic inquiry downloads)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold bg-gray-50">Competitor Banner Ads</td>
                <td className="py-3 px-4 font-semibold text-brand-teal-dark bg-brand-teal-light/20">Zero (Dedicated institutional page)</td>
                <td className="py-3 px-4 text-brand-gray">Heavy ad auction competition</td>
                <td className="py-3 px-4 text-brand-gray">Intrusive competitor ads on page</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold bg-gray-50">Data Authenticity</td>
                <td className="py-3 px-4 font-semibold text-brand-teal-dark bg-brand-teal-light/20">100% Verified (Fees, Cutoffs, NAAC)</td>
                <td className="py-3 px-4 text-brand-gray">Marketing copy only</td>
                <td className="py-3 px-4 text-brand-gray">Often outdated or unverified</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold bg-gray-50">Visibility Longevity</td>
                <td className="py-3 px-4 font-semibold text-brand-teal-dark bg-brand-teal-light/20">Year-round organic indexing</td>
                <td className="py-3 px-4 text-brand-gray">Terminates the second budget stops</td>
                <td className="py-3 px-4 text-brand-gray">Requires continuous per-lead payment</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold bg-gray-50">Student Lead Quality</td>
                <td className="py-3 px-4 font-semibold text-brand-teal-dark bg-brand-teal-light/20">Direct inquiries with program intent</td>
                <td className="py-3 px-4 text-brand-gray">High accidental clicks & bounce rate</td>
                <td className="py-3 px-4 text-brand-gray">Shared simultaneously with 10+ colleges</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* =========================================================================
          5. HOW IT WORKS (5 Steps with Deliverables)
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
            Onboarding Lifecycle
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
              timing: '10 Minutes',
              desc: 'Share your college name, website, primary academic streams, and official contact details with our institutional onboarding desk.'
            },
            {
              step: 'Step 2',
              title: 'We Create/Publish Your Listing',
              timing: '24-48 Hours',
              desc: 'Our academic verification team validates your regulatory accreditations and publishes your standardized, dedicated college profile.'
            },
            {
              step: 'Step 3',
              title: 'Add Your College Information',
              timing: 'Continuous',
              desc: 'Incorporate verified fee tables, course catalogs, median salary benchmarks, campus photo galleries, and cutoff requirements.'
            },
            {
              step: 'Step 4',
              title: 'Students Discover Your College',
              timing: '365 Days/Year',
              desc: 'Aspirants discover your institution via academic stream portals, regional city hubs, search filters, and comparative matrices.'
            },
            {
              step: 'Step 5',
              title: 'Receive Student Enquiries',
              timing: 'Real-Time',
              desc: 'Receive qualified enquiries, brochure download requests, and student leads directly into your admissions team\'s inbox or CRM.'
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
                  <span className="text-[11px] font-mono font-medium text-brand-gray">{s.timing}</span>
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
          6. WHO SHOULD LIST (10 Segments with Deep Classifications)
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
              Our platform serves recognized higher education institutions seeking quality applicant reach across India.
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
                <span><strong>Enquire About Admission:</strong> Submit qualifying exam scores, desired stream, and verified contact details for direct callbacks.</span>
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

            <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs text-brand-gray">
              <span className="bg-gray-100 px-2.5 py-1 rounded">✓ Verified Mobile & Email Lead Filter</span>
              <span className="bg-gray-100 px-2.5 py-1 rounded">✓ Real-Time Dispatch to Admissions Team</span>
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
          FAQ SECTION FOR INSTITUTIONS (Interactive Accordion)
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
            Institutional Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
            Frequently Asked Questions by Institutions
          </h2>
          <p className="text-xs sm:text-sm text-brand-gray mt-2 leading-relaxed">
            Everything you need to know about our listing criteria, verification timelines, and enquiry dispatch.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="border border-brand-border bg-white rounded transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-brand-dark focus:outline-none"
              >
                <span className="flex items-center gap-2.5">
                  <HelpCircle className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>{item.q}</span>
                </span>
                {openFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-brand-teal shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-brand-gray shrink-0" />
                )}
              </button>
              {openFaq === idx && (
                <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-brand-border/60 text-xs sm:text-sm text-brand-gray leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          8. FINAL CTA & ADVANCED INSTITUTIONAL ONBOARDING FORM
          ========================================================================= */}
      <section id="listing-form-section" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-brand-dark text-white rounded-sm border border-gray-800 p-8 sm:p-12 mb-8 relative overflow-hidden">
          <div className="max-w-2xl space-y-4 relative z-10">
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
              <Link
                to="/contact"
                className="inline-flex items-center justify-center font-medium tracking-tight whitespace-nowrap transition-colors duration-150 text-base px-6 py-3 rounded gap-2.5 font-semibold border-gray-600 text-white bg-transparent hover:bg-white/10 hover:text-white border"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Institutional Onboarding Form */}
        <div id="institutional-form" className="border border-brand-border bg-white rounded p-6 sm:p-10">
          <div className="max-w-2xl mb-8 space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-dark">
              Submit Your College Listing Request
            </h3>
            <p className="text-xs sm:text-sm text-brand-gray leading-relaxed">
              Fill out your institution's preliminary information below. Our institutional onboarding desk will verify your details and connect with your admissions team within 1 business day.
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2 space-y-1.5">
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
                    Established Year
                  </label>
                  <input
                    type="text"
                    name="establishedYear"
                    placeholder="e.g. 1998"
                    value={formData.establishedYear}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-brand-border rounded focus:outline-none focus:border-brand-teal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                    Accreditation / Regulatory Status
                  </label>
                  <select
                    name="accreditation"
                    value={formData.accreditation}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-brand-border rounded focus:outline-none focus:border-brand-teal bg-white"
                  >
                    <option value="NAAC A++ / A+ Accredited">NAAC A++ / A+ Accredited</option>
                    <option value="NAAC A / B++ Accredited">NAAC A / B++ Accredited</option>
                    <option value="NBA Tier-1 Accredited">NBA Tier-1 Accredited</option>
                    <option value="UGC Recognized University">UGC Recognized University</option>
                    <option value="AICTE Approved Institute">AICTE Approved Institute</option>
                    <option value="NMC / BCI Approved">NMC / BCI / PCI Approved</option>
                    <option value="State University Affiliated">State University Affiliated</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                    Authorized Contact Person Name <span className="text-red-500">*</span>
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
                    placeholder="e.g. Dean of Admissions / Registrar / Director"
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
                    <option value="Computer Applications">Computer Applications (BCA / MCA)</option>
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
                  Flagship Programs & Specializations to Highlight
                </label>
                <input
                  type="text"
                  name="flagshipCourses"
                  placeholder="e.g. B.Tech Computer Science (AI/ML), MBA Business Analytics, MBBS, BA LLB (Hons)"
                  value={formData.flagshipCourses}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-brand-border rounded focus:outline-none focus:border-brand-teal"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                  Key Milestones & Admissions Focus Notes
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Mention your highest/median placement packages, NIRF rank, entrance cutoff ranges, or specific student demographics you wish to reach..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-brand-border rounded focus:outline-none focus:border-brand-teal"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-brand-border/60">
                <div className="text-xs text-brand-gray">
                  By submitting, you agree to receive official communications regarding institutional onboarding. We never sell your contact details.
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
