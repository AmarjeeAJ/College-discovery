'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import CollegeCard from '@/components/college/CollegeCard';
import Button from '@/components/common/Button';
import { collegesData } from '@/lib/data/colleges';
import {
  Award,
  BookOpen,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  TrendingUp,
  DollarSign,
  Calendar,
  MapPin,
  ArrowRight,
  Layers,
  GraduationCap,
  Building2,
  Search,
  X,
  HelpCircle,
  FileText,
  Check,
  PhoneCall,
  Clock,
  Target,
  Percent,
  Info,
  ListOrdered,
  Briefcase,
  Scale,
  Stethoscope,
  Activity,
  HeartPulse,
  Gavel,
  Landmark,
  Users
} from 'lucide-react';

import { streamMetadata } from '@/lib/data/streamMetadata';

export default function StreamCollegesClient({ propStream, params }) {
  const routeParams = useParams();
  const streamKey = (propStream || routeParams?.stream || params?.stream || 'btech').toLowerCase();
  const meta = streamMetadata[streamKey] || streamMetadata.btech;

  const isEngineering = streamKey === 'btech' || streamKey === 'engineering';
  const isMBA = streamKey === 'mba' || streamKey === 'management';
  const isMedical = streamKey === 'medical';
  const isLaw = streamKey === 'law';

  const colleges = useMemo(() => {
    const target = meta.streamFilter.toLowerCase().replace(/[\.\s-]/g, '');
    let matched = collegesData.filter((c) => {
      // 1. Strict Medical Filtering: ONLY colleges that genuinely provide Medical / MBBS degrees
      if (target === 'medical') {
        const hasMbbsCourse = c.courses && c.courses.some((course) => /mbbs|bachelor of medicine/i.test(course.name));
        const hasMedicalStream = c.stream && c.stream.some((s) => s.toLowerCase() === 'medical' || s.toLowerCase() === 'mbbs');
        const isDedicatedMedical = c.type && /medical/i.test(c.type);
        return (hasMbbsCourse || isDedicatedMedical || hasMedicalStream) && (!c.stream.includes('B.Tech') && !c.stream.includes('MBA') || hasMbbsCourse);
      }

      // 2. Strict Engineering / B.Tech Filtering
      if (target === 'btech' || target === 'engineering') {
        return c.stream.some((s) => {
          const norm = s.toLowerCase().replace(/[\.\s-]/g, '');
          return norm === 'engineering' || norm === 'btech' || norm === 'computerscience';
        });
      }

      // 3. Strict MBA / Management Filtering: ONLY institutions providing accredited MBA / PGDM programs
      if (target === 'mba' || target === 'management') {
        const hasMbaCourse = c.courses && c.courses.some((course) => /mba|pgdm|master of business administration|post graduate program in management/i.test(course.name));
        const isDedicatedBschool = c.type && /business school|management institute/i.test(c.type);
        const hasMbaStream = c.stream && c.stream.some((s) => {
          const norm = s.toLowerCase().replace(/[\.\s-]/g, '');
          return norm === 'mba' || norm === 'management' || norm === 'pgdm';
        });

        return hasMbaStream && (hasMbaCourse || isDedicatedBschool);
      }

      // 4. Strict Law Filtering
      if (target === 'law') {
        return c.stream.some((s) => {
          const norm = s.toLowerCase().replace(/[\.\s-]/g, '');
          return norm === 'law' || norm === 'legal';
        });
      }

      // 5. Comprehensive Universities
      if (target === 'universities') {
        return (
          c.type?.toLowerCase().includes('university') ||
          c.type?.toLowerCase().includes('institute of national') ||
          c.stream.some((s) => s.toLowerCase() === 'universities')
        );
      }

      return c.stream.some((s) => {
        const norm = s.toLowerCase().replace(/[\.\s-]/g, '');
        return norm.includes(target) || target.includes(norm);
      });
    });

    return matched.sort((a, b) => {
      const rankA = a.nirfRanking || 999;
      const rankB = b.nirfRanking || 999;
      if (rankA !== rankB) return rankA - rankB;
      return (b.averagePackage || 0) - (a.averagePackage || 0);
    });
  }, [meta.streamFilter]);

  const [loading, setLoading] = useState(false);
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(0);

  // Shortlist form state
  const [leadForm, setLeadForm] = useState({ score: '', detail: '', phone: '' });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadLoading, setLeadLoading] = useState(false);

  // Client-side quick filter tabs & instant search
  const filteredColleges = colleges.filter((c) => {
    if (filterType === 'public' && !(c.type?.toLowerCase().includes('public') || c.type?.toLowerCase().includes('national') || c.type?.toLowerCase().includes('institute of national'))) return false;
    if (filterType === 'private' && !c.type?.toLowerCase().includes('private')) return false;
    if (filterType === 'highPackage' && (c.averagePackage || 0) < 14.0) return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const nameMatch = c.name?.toLowerCase().includes(q);
      const shortMatch = c.shortName?.toLowerCase().includes(q);
      const cityMatch = c.city?.toLowerCase().includes(q);
      const stateMatch = c.state?.toLowerCase().includes(q);
      const streamMatch = c.stream?.some((s) => s.toLowerCase().includes(q));
      const examMatch = c.entranceExams?.some((e) => e.toLowerCase().includes(q));
      return nameMatch || shortMatch || cityMatch || stateMatch || streamMatch || examMatch;
    }

    return true;
  });

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    if (!leadForm.phone || leadForm.phone.length < 10) return;
    setLeadLoading(true);
    setTimeout(() => {
      setLeadLoading(false);
      setLeadSubmitted(true);
    }, 500);
  };

  // Schema.org FAQPage structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (meta.faqs || []).map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Structured Schema.org Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: 'Colleges', link: '/colleges' },
          { label: meta.h1 }
        ]}
      />

      {/* Hero Banner with Clean Rectangular Styling (NO AI DOTS) */}
      <header className="border border-brand-border bg-white rounded overflow-hidden shadow-sm">
        <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-brand-black">
          <img
            src={meta.heroImage || '/images/streams/btech-hero.jpg'}
            alt={meta.h1}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/images/colleges/campus-fallback.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25" />

          {/* Hero Content Overlay */}
          <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end text-white space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-teal text-white rounded-sm text-[11px] font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                {meta.eyebrow}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white rounded-sm text-[11px] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                NIRF 2026 Audited
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 backdrop-blur-sm text-gray-200 rounded-sm text-[11px]">
                <Calendar className="w-3.5 h-3.5 text-brand-teal-light" />
                2026 Academic Admissions
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-4xl">
              {meta.h1}
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-gray-200 max-w-3xl leading-relaxed line-clamp-3 sm:line-clamp-none">
              {meta.intro}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#colleges-directory"
                className="bg-brand-teal hover:bg-brand-teal-dark text-white px-4 py-2 rounded-sm text-xs sm:text-sm font-semibold transition-colors inline-flex items-center gap-2"
              >
                <span>Browse Verified Institutions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/counselling"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-sm text-xs sm:text-sm font-semibold transition-colors"
              >
                Consult Academic Counselor
              </Link>
            </div>
          </div>
        </div>

        {/* Highlights Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-brand-border/60 bg-brand-teal-subtle text-xs">
          {meta.stats.map((st, i) => (
            <div key={i} className="p-4 sm:p-5 space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-gray block">
                {st.label}
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-brand-dark block">
                {st.value}
              </span>
              <span className="text-[11px] text-brand-teal-dark block">
                {st.desc}
              </span>
            </div>
          ))}
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 12-COLUMN CONTAINER LAYOUT - DEDICATED PER STREAM DESIGN */}
      {/* ========================================================================= */}
      <div className="lg:grid lg:grid-cols-12 gap-8 items-start">
        
        {/* MAIN EDITORIAL COLUMN (8 COLUMNS) */}
        <div className="lg:col-span-8 space-y-10">

          {/* Quick Highlights Strip */}
          <section className="bg-white border border-brand-border rounded-sm p-5 sm:p-6 space-y-3 shadow-subtle">
            <div className="flex items-center gap-2 border-b border-brand-border/60 pb-3">
              <ShieldCheck className="w-5 h-5 text-brand-teal" />
              <h2 className="text-base sm:text-lg font-bold text-brand-dark">
                Key Admission & Accreditation Takeaways
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              {meta.keyPoints.map((kp, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 border border-brand-border/60 p-3.5 rounded-sm space-y-2 flex flex-col justify-between"
                >
                  <div className="flex items-start gap-2 text-brand-dark leading-relaxed font-medium">
                    <span className="w-5 h-5 rounded-sm bg-brand-teal-light text-brand-teal-dark flex items-center justify-center font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{kp}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SHARED SECTION: Verified Directory with Live Search & Filters */}
          <section id="colleges-directory" className="space-y-5 pt-2">
            <div className="border-b border-brand-border pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
                Audited Institutional Directory
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-dark">
                Showing {filteredColleges.length} Verified Institutions
              </h2>
              <p className="text-xs sm:text-sm text-brand-gray mt-1">
                Audited placement packages, entrance examinations, and verified statutory credentials across premier Indian campuses.
              </p>
            </div>

            {/* Search & Filter Toolbar */}
            <div className="bg-white border border-brand-border rounded-sm p-4 sm:p-5 space-y-4 shadow-subtle">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                {/* Live Search Input */}
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={`Search ${meta.h1} by name, city, state, or exam...`}
                    className="w-full pl-10 pr-9 py-2.5 bg-gray-50 hover:bg-white focus:bg-white border border-brand-border rounded-sm text-xs sm:text-sm text-brand-dark placeholder:text-brand-gray focus:outline-none focus:border-brand-teal transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-dark p-0.5"
                      title="Clear search"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Quick Filter Tabs */}
                <div className="flex flex-wrap gap-1.5 text-xs font-medium">
                  <button
                    onClick={() => setFilterType('all')}
                    className={`px-3 py-2 rounded-sm transition-colors ${
                      filterType === 'all'
                        ? 'bg-brand-dark text-white font-semibold'
                        : 'bg-gray-100 hover:bg-gray-200 text-brand-dark'
                    }`}
                  >
                    All ({colleges.length})
                  </button>
                  <button
                    onClick={() => setFilterType('public')}
                    className={`px-3 py-2 rounded-sm transition-colors ${
                      filterType === 'public'
                        ? 'bg-brand-dark text-white font-semibold'
                        : 'bg-gray-100 hover:bg-gray-200 text-brand-dark'
                    }`}
                  >
                    Public / National
                  </button>
                  <button
                    onClick={() => setFilterType('private')}
                    className={`px-3 py-2 rounded-sm transition-colors ${
                      filterType === 'private'
                        ? 'bg-brand-dark text-white font-semibold'
                        : 'bg-gray-100 hover:bg-gray-200 text-brand-dark'
                    }`}
                  >
                    Private Deemed
                  </button>
                  <button
                    onClick={() => setFilterType('highPackage')}
                    className={`px-3 py-2 rounded-sm transition-colors ${
                      filterType === 'highPackage'
                        ? 'bg-brand-dark text-white font-semibold'
                        : 'bg-gray-100 hover:bg-gray-200 text-brand-dark'
                    }`}
                  >
                    &gt; ₹14 LPA
                  </button>
                </div>
              </div>

              {/* Active Filter Info & Reset Button */}
              <div className="flex items-center justify-between text-xs text-brand-gray pt-2 border-t border-gray-100">
                <span>
                  Showing <strong className="text-brand-dark font-bold">{filteredColleges.length}</strong> of {colleges.length} institutions
                  {searchQuery ? ` matching "${searchQuery}"` : ''}
                </span>
                {(searchQuery || filterType !== 'all') && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setFilterType('all');
                    }}
                    className="text-brand-teal hover:underline font-semibold"
                  >
                    Clear Filters & Search
                  </button>
                )}
              </div>
            </div>

            {loading ? (
              <div className="py-20 text-center text-brand-gray space-y-3">
                <div className="w-8 h-8 border-2 border-brand-teal border-t-transparent rounded-sm animate-spin mx-auto" />
                <p className="text-sm">Filtering verified campuses...</p>
              </div>
            ) : filteredColleges.length === 0 ? (
              <div className="py-16 text-center bg-white border border-brand-border rounded-sm p-8 space-y-3">
                <Building2 className="w-10 h-10 text-brand-gray mx-auto opacity-50" />
                <h3 className="text-base font-bold text-brand-dark">No institutions match this filter criteria</h3>
                <p className="text-xs text-brand-gray">Try selecting "All Institutions" to see all verified colleges.</p>
                <button
                  onClick={() => setFilterType('all')}
                  className="mt-2 text-xs font-semibold text-brand-teal underline"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredColleges.map((college) => (
                  <CollegeCard key={college.id} college={college} activeStream={streamKey} />
                ))}
              </div>
            )}
          </section>

          {/* ========================================================================= */}
          {/* STREAM A: ENGINEERING / B.TECH DEDICATED SECTIONS */}
          {/* ========================================================================= */}
          {isEngineering && (
            <>
              {/* Engineering Branches Matrix */}
              <section id="branches-guide" className="space-y-4 pt-2">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-brand-border pb-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
                      Engineering Career Specializations
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-brand-dark">
                      Top B.Tech Specializations & Industry Packages (2026)
                    </h2>
                  </div>
                  <Link
                    href="/courses"
                    className="text-xs font-semibold text-brand-teal hover:underline inline-flex items-center gap-1 shrink-0"
                  >
                    <span>Explore All Courses</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {meta.branches.map((br, i) => (
                    <div
                      key={i}
                      className="bg-white border border-brand-border rounded-sm p-5 space-y-3 hover:border-brand-teal transition-all"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-bold text-sm text-brand-dark leading-snug">{br.name}</h3>
                        <span className="px-2 py-0.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold rounded-sm shrink-0">
                          {br.demand}
                        </span>
                      </div>
                      <div className="space-y-1.5 text-xs text-brand-gray border-t border-b border-gray-100 py-2.5">
                        <div className="flex justify-between items-center">
                          <span>Average Package:</span>
                          <span className="font-bold text-brand-dark">{br.avgPackage}</span>
                        </div>
                        <div className="flex justify-between items-start gap-2">
                          <span className="shrink-0">Core Focus:</span>
                          <span className="font-medium text-brand-dark text-right line-clamp-1">{br.skills}</span>
                        </div>
                      </div>
                      <div className="text-[11px] text-brand-gray">
                        <span className="font-semibold text-brand-dark">Top Recruiters: </span>
                        <span>{br.recruiters}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* JoSAA Admissions Roadmap */}
              <section id="admission-roadmap" className="bg-white border border-brand-border rounded-sm p-6 sm:p-8 space-y-5 shadow-subtle">
                <div className="border-b border-brand-border/60 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
                    Admissions Walkthrough
                  </span>
                  <h2 className="text-xl font-bold text-brand-dark">
                    4-Step Engineering Admission & Counselling Roadmap (2026)
                  </h2>
                  <p className="text-xs text-brand-gray mt-1">
                    Centralized allocation mechanics across 23 IITs, 32 NITs, 26 IIITs, and 38 GFTIs.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-gray-50 border border-brand-border/60 rounded-sm space-y-2">
                    <span className="px-2.5 py-0.5 bg-brand-teal text-white rounded-sm text-[10px] font-bold block w-fit">
                      STEP 1
                    </span>
                    <h3 className="font-bold text-brand-dark text-sm">National Entrance Exams</h3>
                    <p className="text-brand-gray leading-relaxed">
                      Appear for JEE Main Session 1 & 2. Top 2.5 Lakh qualifiers take JEE Advanced for IIT seats. State university candidates target exams like BITSAT, COMEDK, and MHT CET.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 border border-brand-border/60 rounded-sm space-y-2">
                    <span className="px-2.5 py-0.5 bg-brand-teal text-white rounded-sm text-[10px] font-bold block w-fit">
                      STEP 2
                    </span>
                    <h3 className="font-bold text-brand-dark text-sm">75% Board Rule & Percentile</h3>
                    <p className="text-brand-gray leading-relaxed">
                      Verify mandatory 75% Class 12 aggregate (65% for SC/ST/PwD) or Top 20 percentile ranking in your state/central board to qualify for JoSAA seat allocation.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 border border-brand-border/60 rounded-sm space-y-2">
                    <span className="px-2.5 py-0.5 bg-brand-teal text-white rounded-sm text-[10px] font-bold block w-fit">
                      STEP 3
                    </span>
                    <h3 className="font-bold text-brand-dark text-sm">JoSAA Central Choice Filling</h3>
                    <p className="text-brand-gray leading-relaxed">
                      Register on JoSAA to fill and prioritize branch-institute combinations. Participate in mock rounds, then lock choices before the cutoff deadline across 5-6 rounds.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 border border-brand-border/60 rounded-sm space-y-2">
                    <span className="px-2.5 py-0.5 bg-brand-teal text-white rounded-sm text-[10px] font-bold block w-fit">
                      STEP 4
                    </span>
                    <h3 className="font-bold text-brand-dark text-sm">Seat Acceptance & Reporting</h3>
                    <p className="text-brand-gray leading-relaxed">
                      Pay the Seat Acceptance Fee (SAF), complete online document verification, upload certificates, and report physically to the allotted campus.
                    </p>
                  </div>
                </div>
              </section>

              {/* JoSAA Choice Acceptance: Freeze vs Float vs Slide */}
              <section id="josaa-guide" className="bg-white border border-brand-border rounded-sm p-6 sm:p-8 space-y-5 shadow-subtle">
                <div className="border-b border-brand-border/60 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
                    Counselling Strategy
                  </span>
                  <h2 className="text-xl font-bold text-brand-dark">
                    JoSAA Choice Acceptance: Freeze vs Float vs Slide
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 border border-emerald-300 bg-emerald-50/40 rounded-sm space-y-2">
                    <span className="font-extrabold text-emerald-800 text-sm block">FREEZE</span>
                    <p className="font-bold text-brand-dark">Accept Allotted Seat & Exit</p>
                    <p className="text-brand-gray leading-relaxed">
                      You are completely satisfied with the allocated branch. You will not participate in subsequent rounds and proceed to final admission.
                    </p>
                  </div>
                  <div className="p-4 border border-blue-300 bg-blue-50/40 rounded-sm space-y-2">
                    <span className="font-extrabold text-blue-800 text-sm block">FLOAT</span>
                    <p className="font-bold text-brand-dark">Hold Seat & Seek Any Higher Choice</p>
                    <p className="text-brand-gray leading-relaxed">
                      You hold your allotted seat as a secure backup, but remain eligible for higher preferred choices across any participating institute.
                    </p>
                  </div>
                  <div className="p-4 border border-purple-300 bg-purple-50/40 rounded-sm space-y-2">
                    <span className="font-extrabold text-purple-800 text-sm block">SLIDE</span>
                    <p className="font-bold text-brand-dark">Upgrade Branch in Same Campus</p>
                    <p className="text-brand-gray leading-relaxed">
                      You accept the allotted institute, but wish to upgrade only to a higher preferred branch within the exact same college.
                    </p>
                  </div>
                </div>
              </section>

              {/* Seat Quotas & Remissions */}
              <section id="seat-quotas" className="bg-white border border-brand-border rounded-sm p-6 sm:p-8 space-y-4 shadow-subtle">
                <div className="border-b border-brand-border/60 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
                    Central Seat Allotment Guidelines
                  </span>
                  <h2 className="text-xl font-bold text-brand-dark">
                    Quota Architecture & Fee Remission Policy
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-4 bg-gray-50 border border-brand-border/60 rounded-sm space-y-1.5">
                    <span className="text-xs font-bold text-brand-dark block">50:50 NIT Quota</span>
                    <p className="text-brand-gray">50% Home State (HS) seats reserved for state board qualifiers + 50% Other State (OS) open seats.</p>
                  </div>
                  <div className="p-4 bg-gray-50 border border-brand-border/60 rounded-sm space-y-1.5">
                    <span className="text-xs font-bold text-brand-dark block">100% IIT All India</span>
                    <p className="text-brand-gray">All 23 IITs operate exclusively on All India Quota (AI) based on JEE Advanced rank without state domicile.</p>
                  </div>
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-sm space-y-1.5">
                    <span className="text-xs font-bold text-emerald-900 block">100% Fee Waiver</span>
                    <p className="text-emerald-800">100% tuition remission for family income &lt; ₹1 Lakh/yr and all SC/ST/PwD candidates across IITs/NITs.</p>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* ========================================================================= */}
          {/* STREAM B: MANAGEMENT / MBA DEDICATED SECTIONS */}
          {/* ========================================================================= */}
          {isMBA && (
            <>
              {/* B-School Tiering & Accreditation Architecture */}
              <section id="bschool-tiers" className="bg-white border border-brand-border rounded-sm p-6 sm:p-8 space-y-5 shadow-subtle">
                <div className="border-b border-brand-border/60 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
                    Institutional Hierarchy
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-dark">
                    B-School Tiering, Cutoffs & Executive ROI Benchmarks
                  </h2>
                  <p className="text-xs text-brand-gray mt-1">
                    Evaluating Indian management faculties across CAT percentile percentiles, faculty pedigree, and corporate recruitment density.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  {(meta.tiers || []).map((t, idx) => (
                    <div key={idx} className="border border-brand-border rounded-sm p-4 space-y-2 bg-gray-50/70">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-gray-200 pb-2">
                        <span className="font-extrabold text-sm text-brand-dark">{t.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-brand-teal text-white font-bold rounded-sm text-[10px]">
                            {t.cutoffs}
                          </span>
                          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-900 font-bold rounded-sm text-[10px]">
                            {t.avgPackage}
                          </span>
                        </div>
                      </div>
                      <p className="text-brand-dark font-medium">
                        <strong>Key Campuses:</strong> {t.institutes}
                      </p>
                      <p className="text-brand-gray">
                        <strong>Core Domain Trajectory:</strong> {t.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* MBA Specialization Pathways */}
              <section id="specializations" className="space-y-4 pt-2">
                <div className="border-b border-brand-border pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
                    Functional Leadership Domains
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-dark">
                    Top MBA Specializations & Corporate Compensation
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  {(meta.specializations || []).map((sp, i) => (
                    <div key={i} className="bg-white border border-brand-border rounded-sm p-5 space-y-3 hover:border-brand-teal transition-all">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-bold text-sm text-brand-dark">{sp.title}</h3>
                        <span className="px-2 py-0.5 bg-brand-teal-light text-brand-teal-dark font-bold rounded-sm text-[10px]">
                          {sp.ctc}
                        </span>
                      </div>
                      <div className="space-y-1.5 border-t border-b border-gray-100 py-2 text-brand-gray">
                        <p><strong>Primary Skills:</strong> {sp.skills}</p>
                      </div>
                      <p className="text-[11px] text-brand-dark">
                        <strong>Leading Recruiters:</strong> {sp.recruiters}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 3-Stage Selection Architecture */}
              <section id="selection-stages" className="bg-white border border-brand-border rounded-sm p-6 sm:p-8 space-y-5 shadow-subtle">
                <div className="border-b border-brand-border/60 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
                    Admission Mechanics
                  </span>
                  <h2 className="text-xl font-bold text-brand-dark">
                    3-Stage MBA Selection Architecture: From CAT to Final Allotment
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 bg-gray-50 border border-brand-border rounded-sm space-y-2">
                    <span className="font-bold text-brand-teal text-xs block">STAGE 01</span>
                    <h3 className="font-bold text-brand-dark text-sm">National Aptitude Tests</h3>
                    <p className="text-brand-gray leading-relaxed">
                      Register and sit for CAT, XAT, or GMAT. Sectional cutoffs in Quantitative Aptitude (QA), Data Interpretation (DILR), and Verbal Ability (VARC) are mandatory for Tier-1 shortlists.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 border border-brand-border rounded-sm space-y-2">
                    <span className="font-bold text-brand-teal text-xs block">STAGE 02</span>
                    <h3 className="font-bold text-brand-dark text-sm">Composite Profile Weightage</h3>
                    <p className="text-brand-gray leading-relaxed">
                      Institutes compute composite shortlists based on Class 10/12 marks, undergraduate CGPA, corporate work experience (24-36 months preferred), and gender/academic diversity points.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 border border-brand-border rounded-sm space-y-2">
                    <span className="font-bold text-brand-teal text-xs block">STAGE 03</span>
                    <h3 className="font-bold text-brand-dark text-sm">WAT - GD - PI Evaluation</h3>
                    <p className="text-brand-gray leading-relaxed">
                      Shortlisted candidates undergo Written Ability Tests (WAT), case-based Group Discussions (GD), and rigorous Personal Interviews (PI) assessing leadership acumen and domain awareness.
                    </p>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* ========================================================================= */}
          {/* STREAM C: MEDICAL & HEALTHCARE DEDICATED SECTIONS */}
          {/* ========================================================================= */}
          {isMedical && (
            <>
              {/* Clinical Phases of MBBS */}
              <section id="clinical-phases" className="bg-white border border-brand-border rounded-sm p-6 sm:p-8 space-y-5 shadow-subtle">
                <div className="border-b border-brand-border/60 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
                    Curricular Progression
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-dark">
                    MBBS 5.5-Year Clinical Architecture (NMC Guidelines)
                  </h2>
                  <p className="text-xs text-brand-gray mt-1">
                    Structured across Pre-Clinical, Para-Clinical, and Ward Postings culminating in a 1-year rotatory hospital internship.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  {(meta.clinicalPhases || []).map((cp, idx) => (
                    <div key={idx} className="border border-brand-border rounded-sm p-4 space-y-2 bg-gray-50/70">
                      <div className="flex items-center justify-between border-b border-gray-200 pb-1.5">
                        <span className="font-bold text-brand-dark text-sm">{cp.phase}</span>
                        <span className="px-2 py-0.5 bg-brand-teal text-white text-[10px] font-bold rounded-sm">
                          {cp.duration}
                        </span>
                      </div>
                      <p className="text-brand-dark"><strong>Core Subjects:</strong> {cp.subjects}</p>
                      <p className="text-brand-gray leading-relaxed">
                        <strong>Clinical Training:</strong> {cp.clinicalFocus}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Central MCC Counselling vs State Quota */}
              <section id="medical-counselling" className="bg-white border border-brand-border rounded-sm p-6 sm:p-8 space-y-5 shadow-subtle">
                <div className="border-b border-brand-border/60 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
                    Seat Allocation Guide
                  </span>
                  <h2 className="text-xl font-bold text-brand-dark">
                    NEET UG Counselling: 15% All India Quota vs 85% State Quota
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 border border-brand-border bg-gray-50 rounded-sm space-y-2">
                    <span className="font-bold text-brand-teal text-xs block">15% ALL INDIA QUOTA (AIQ)</span>
                    <h3 className="font-bold text-brand-dark text-sm">Administered by MCC (DGHS)</h3>
                    <p className="text-brand-gray leading-relaxed">
                      15% of all government medical college seats across India are open to all students irrespective of domicile. Conducted in 4 rounds: Round 1, Round 2, Mop-Up (Round 3), and Stray Vacancy Round.
                    </p>
                  </div>
                  <div className="p-4 border border-brand-border bg-gray-50 rounded-sm space-y-2">
                    <span className="font-bold text-brand-teal text-xs block">85% STATE DOMICILE QUOTA</span>
                    <h3 className="font-bold text-brand-dark text-sm">Administered by State Authorities</h3>
                    <p className="text-brand-gray leading-relaxed">
                      85% of seats in government and government-society medical colleges are strictly reserved for candidates holding domicile in that specific state, managed through independent state portals.
                    </p>
                  </div>
                </div>

                <div className="p-4 border border-amber-300 bg-amber-50/50 rounded-sm text-xs text-amber-900 space-y-1">
                  <span className="font-bold block">Rural Service Bond & Financial Stipend Clauses:</span>
                  <p className="leading-relaxed">
                    Most state government institutions mandate 1 to 2 years of compulsory service in rural primary healthcare centers post-internship. Monthly stipends during the CRMI internship typically range from ₹15,000 to ₹30,000, and PG resident doctor stipends range from ₹65,000 to ₹95,000/month.
                  </p>
                </div>
              </section>
            </>
          )}

          {/* ========================================================================= */}
          {/* STREAM D: LAW & LEGAL STUDIES DEDICATED SECTIONS */}
          {/* ========================================================================= */}
          {isLaw && (
            <>
              {/* NLU Tiering & Placements */}
              <section id="nlu-tiers" className="bg-white border border-brand-border rounded-sm p-6 sm:p-8 space-y-5 shadow-subtle">
                <div className="border-b border-brand-border/60 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
                    Institutional Hierarchy
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-dark">
                    Consortium of NLUs: Tier Classification & Day-Zero Compensation
                  </h2>
                  <p className="text-xs text-brand-gray mt-1">
                    Comparing 26 National Law Universities on CLAT cutoffs, corporate law firm recruitment, and judicial clerkships.
                  </p>
                </div>

                <div className="space-y-3.5 text-xs">
                  {(meta.nluTiers || []).map((tier, idx) => (
                    <div key={idx} className="border border-brand-border rounded-sm p-4 space-y-2 bg-gray-50/70">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-gray-200 pb-2">
                        <span className="font-extrabold text-sm text-brand-dark">{tier.tier}</span>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-brand-teal text-white font-bold rounded-sm text-[10px]">
                            {tier.cutoffs}
                          </span>
                          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-900 font-bold rounded-sm text-[10px]">
                            {tier.placement}
                          </span>
                        </div>
                      </div>
                      <p className="text-brand-dark"><strong>Member Institutions:</strong> {tier.institutes}</p>
                      <p className="text-brand-gray"><strong>Placement Trajectory:</strong> {tier.trajectory}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Legal Degree Structures & Career Pathways */}
              <section id="legal-careers" className="bg-white border border-brand-border rounded-sm p-6 sm:p-8 space-y-5 shadow-subtle">
                <div className="border-b border-brand-border/60 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
                    Career Specializations
                  </span>
                  <h2 className="text-xl font-bold text-brand-dark">
                    Legal Practice Arenas: Corporate M&A to Judicial Services
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 border border-brand-border bg-gray-50 rounded-sm space-y-1.5">
                    <span className="font-bold text-brand-dark block text-sm">Tier-1 Corporate Law</span>
                    <p className="text-brand-gray leading-relaxed">
                      Specialists in Cross-Border M&A, Capital Markets, Banking & Finance, and Competition Law. Starting compensation: ₹16 LPA to ₹22 LPA at firms like CAM, SAM, AZB, and Trilegal.
                    </p>
                  </div>
                  <div className="p-4 border border-brand-border bg-gray-50 rounded-sm space-y-1.5">
                    <span className="font-bold text-brand-dark block text-sm">Appellate Litigation</span>
                    <p className="text-brand-gray leading-relaxed">
                      Independent practice before State High Courts and the Supreme Court of India. Involves Constitutional Law, Criminal Defense, and Commercial Dispute Arbitration.
                    </p>
                  </div>
                  <div className="p-4 border border-brand-border bg-gray-50 rounded-sm space-y-1.5">
                    <span className="font-bold text-brand-dark block text-sm">Judicial Services (PCS-J)</span>
                    <p className="text-brand-gray leading-relaxed">
                      State Public Service Commission examinations for appointment as Civil Judge (Junior Division) and Judicial Magistrate, offering prestigious tenure and public service.
                    </p>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* ========================================================================= */}
          {/* STREAM E: UNIVERSITIES DEDICATED SECTIONS */}
          {/* ========================================================================= */}
          {streamKey === 'universities' && (
            <section id="university-faculties" className="bg-white border border-brand-border rounded-sm p-6 sm:p-8 space-y-4 shadow-subtle">
              <div className="border-b border-brand-border/60 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
                  Campus Governance & Multidisciplinary Study
                </span>
                <h2 className="text-xl font-bold text-brand-dark">
                  Central, State & Deemed Universities in India
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 border border-brand-border bg-gray-50 rounded-sm space-y-1.5">
                  <span className="font-bold text-brand-dark text-sm block">Central & State Universities</span>
                  <p className="text-brand-gray leading-relaxed">
                    Established under Acts of Parliament or State Legislatures. Offer high subsidized fee structures, extensive research grants, and admissions governed via CUET UG / PG.
                  </p>
                </div>
                <div className="p-4 border border-brand-border bg-gray-50 rounded-sm space-y-1.5">
                  <span className="font-bold text-brand-dark text-sm block">Deemed & Private Autonomous</span>
                  <p className="text-brand-gray leading-relaxed">
                    Awarded autonomous status under Section 3 of the UGC Act. Renowned for industry-aligned curricula, expansive residential campuses, and direct global exchange initiatives.
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* SHARED SECTION: Frequently Asked Questions Accordion */}
          {meta.faqs && meta.faqs.length > 0 && (
            <section id="faqs" className="space-y-4 pt-2">
              <div className="border-b border-brand-border pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
                  Common Queries
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-brand-dark">
                  Frequently Asked Questions About {meta.h1}
                </h2>
              </div>

              <div className="space-y-3">
                {meta.faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="border border-brand-border bg-white rounded-sm overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-sm text-brand-dark hover:text-brand-teal transition-colors"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-brand-teal shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-brand-gray leading-relaxed border-t border-gray-100 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* SHARED SECTION: Counselling & Strategic Advisory CTA */}
          <section className="border border-brand-border bg-gradient-to-r from-brand-teal/10 via-white to-brand-teal-light rounded-sm p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-teal block">
                Expert Educational Strategy
              </span>
              <h3 className="text-xl font-bold text-brand-dark">
                Need Dedicated Shortlisting Guidance for {meta.eyebrow}?
              </h3>
              <p className="text-xs sm:text-sm text-brand-gray max-w-2xl">
                Book a complimentary session with our senior education strategists in Jaipur & Delhi. We evaluate your entrance test percentile, category quota, and budget to build an actionable college list.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Button href="/counselling" variant="primary" size="md">
                Get Free Counselling
              </Button>
              <Button href="/compare" variant="outline" size="md">
                Compare Institutes
              </Button>
            </div>
          </section>

        </div>

        {/* ========================================================================= */}
        {/* STICKY SIDEBAR CONTAINER (4 COLUMNS) - TAILORED PER STREAM */}
        {/* ========================================================================= */}
        <aside className="lg:col-span-4 sticky top-24 space-y-6 mt-8 lg:mt-0">
          
          {/* Table of Contents Container */}
          <div className="bg-white border border-brand-border rounded-sm p-5 space-y-3 shadow-subtle">
            <div className="flex items-center gap-2 border-b border-brand-border/60 pb-2.5">
              <ListOrdered className="w-4 h-4 text-brand-teal" />
              <h3 className="font-bold text-xs uppercase tracking-wider text-brand-dark">
                In This Guide
              </h3>
            </div>
            <nav className="space-y-2 text-xs">
              <a
                href="#colleges-directory"
                className="block border-l-2 border-transparent hover:border-brand-teal pl-2 text-brand-gray hover:text-brand-dark transition-colors font-medium"
              >
                Verified Directory ({colleges.length})
              </a>

              {isEngineering && (
                <>
                  <a
                    href="#branches-guide"
                    className="block border-l-2 border-transparent hover:border-brand-teal pl-2 text-brand-gray hover:text-brand-dark transition-colors font-medium"
                  >
                    Specializations & Packages
                  </a>
                  <a
                    href="#admission-roadmap"
                    className="block border-l-2 border-transparent hover:border-brand-teal pl-2 text-brand-gray hover:text-brand-dark transition-colors font-medium"
                  >
                    4-Step Admission Roadmap
                  </a>
                  <a
                    href="#josaa-guide"
                    className="block border-l-2 border-transparent hover:border-brand-teal pl-2 text-brand-gray hover:text-brand-dark transition-colors font-medium"
                  >
                    Freeze vs Float vs Slide Guide
                  </a>
                  <a
                    href="#seat-quotas"
                    className="block border-l-2 border-transparent hover:border-brand-teal pl-2 text-brand-gray hover:text-brand-dark transition-colors font-medium"
                  >
                    Quota Matrix & Fee Remissions
                  </a>
                </>
              )}

              {isMBA && (
                <>
                  <a
                    href="#bschool-tiers"
                    className="block border-l-2 border-transparent hover:border-brand-teal pl-2 text-brand-gray hover:text-brand-dark transition-colors font-medium"
                  >
                    B-School Tiers & CAT Cutoffs
                  </a>
                  <a
                    href="#specializations"
                    className="block border-l-2 border-transparent hover:border-brand-teal pl-2 text-brand-gray hover:text-brand-dark transition-colors font-medium"
                  >
                    Functional Leadership Domains
                  </a>
                  <a
                    href="#selection-stages"
                    className="block border-l-2 border-transparent hover:border-brand-teal pl-2 text-brand-gray hover:text-brand-dark transition-colors font-medium"
                  >
                    WAT - GD - PI Selection
                  </a>
                </>
              )}

              {isMedical && (
                <>
                  <a
                    href="#clinical-phases"
                    className="block border-l-2 border-transparent hover:border-brand-teal pl-2 text-brand-gray hover:text-brand-dark transition-colors font-medium"
                  >
                    MBBS 5.5-Yr Clinical Phases
                  </a>
                  <a
                    href="#medical-counselling"
                    className="block border-l-2 border-transparent hover:border-brand-teal pl-2 text-brand-gray hover:text-brand-dark transition-colors font-medium"
                  >
                    NEET 15% AIQ vs 85% State Quota
                  </a>
                </>
              )}

              {isLaw && (
                <>
                  <a
                    href="#nlu-tiers"
                    className="block border-l-2 border-transparent hover:border-brand-teal pl-2 text-brand-gray hover:text-brand-dark transition-colors font-medium"
                  >
                    NLU Tiers & Day-Zero Packages
                  </a>
                  <a
                    href="#legal-careers"
                    className="block border-l-2 border-transparent hover:border-brand-teal pl-2 text-brand-gray hover:text-brand-dark transition-colors font-medium"
                  >
                    Corporate Law to Judiciary
                  </a>
                </>
              )}

              <a
                href="#faqs"
                className="block border-l-2 border-transparent hover:border-brand-teal pl-2 text-brand-gray hover:text-brand-dark transition-colors font-medium"
              >
                Frequently Asked Questions
              </a>
            </nav>
          </div>

          {/* STREAM-SPECIFIC ADMISSION CALENDAR & TIMELINES */}
          <div className="bg-white border border-brand-border rounded-sm p-5 space-y-4 shadow-subtle">
            <div className="flex items-center justify-between border-b border-brand-border/60 pb-2.5">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-teal" />
                <h3 className="font-bold text-xs uppercase tracking-wider text-brand-dark">
                  2026 Admissions Calendar
                </h3>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-gray-100 text-brand-dark rounded-sm">
                2026 Cycle
              </span>
            </div>

            <div className="space-y-3 text-xs">
              {isEngineering && (
                <>
                  <div className="border-l-2 border-brand-teal pl-3 space-y-0.5">
                    <p className="font-bold text-brand-dark">JEE Main Session 1 & 2</p>
                    <p className="text-[11px] text-brand-gray">NTA national scorecard & AIR ranklists declared.</p>
                  </div>
                  <div className="border-l-2 border-brand-teal pl-3 space-y-0.5">
                    <p className="font-bold text-brand-dark">JEE Advanced 2026</p>
                    <p className="text-[11px] text-brand-gray">Top 2.5 Lakh qualifiers compete for 23 IIT seats.</p>
                  </div>
                  <div className="border-l-2 border-brand-teal pl-3 space-y-0.5">
                    <p className="font-bold text-brand-dark">JoSAA Centralized Choice Locking</p>
                    <p className="text-[11px] text-brand-gray">Rounds 1 to 6 seat allocation for IITs, NITs, and IIITs.</p>
                  </div>
                  <div className="border-l-2 border-brand-teal pl-3 space-y-0.5">
                    <p className="font-bold text-brand-dark">CSAB Special Vacancy Rounds</p>
                    <p className="text-[11px] text-brand-gray">Spot vacancy allocation for remaining central seats.</p>
                  </div>
                </>
              )}

              {isMBA && (
                <>
                  <div className="border-l-2 border-brand-teal pl-3 space-y-0.5">
                    <p className="font-bold text-brand-dark">CAT & XAT Registration</p>
                    <p className="text-[11px] text-brand-gray">August - September national registration window.</p>
                  </div>
                  <div className="border-l-2 border-brand-teal pl-3 space-y-0.5">
                    <p className="font-bold text-brand-dark">CAT Examination (Last Sunday Nov)</p>
                    <p className="text-[11px] text-brand-gray">Computer-based aptitude test for IIMs and Top B-Schools.</p>
                  </div>
                  <div className="border-l-2 border-brand-teal pl-3 space-y-0.5">
                    <p className="font-bold text-brand-dark">WAT - GD - PI Shortlists</p>
                    <p className="text-[11px] text-brand-gray">January - March interview rounds at campus hubs.</p>
                  </div>
                  <div className="border-l-2 border-brand-teal pl-3 space-y-0.5">
                    <p className="font-bold text-brand-dark">Final Merit List & Fee Lock</p>
                    <p className="text-[11px] text-brand-gray">April - May final executive cohort offers.</p>
                  </div>
                </>
              )}

              {isMedical && (
                <>
                  <div className="border-l-2 border-brand-teal pl-3 space-y-0.5">
                    <p className="font-bold text-brand-dark">NEET UG Examination</p>
                    <p className="text-[11px] text-brand-gray">Pen-and-paper unified national test for 1,00,000+ MBBS seats.</p>
                  </div>
                  <div className="border-l-2 border-brand-teal pl-3 space-y-0.5">
                    <p className="font-bold text-brand-dark">MCC 15% AIQ Counselling</p>
                    <p className="text-[11px] text-brand-gray">Rounds 1 to 4 online seat choice locking & SAF deposit.</p>
                  </div>
                  <div className="border-l-2 border-brand-teal pl-3 space-y-0.5">
                    <p className="font-bold text-brand-dark">85% State Quota Allotment</p>
                    <p className="text-[11px] text-brand-gray">Conducted simultaneously by State Health Directorates.</p>
                  </div>
                  <div className="border-l-2 border-brand-teal pl-3 space-y-0.5">
                    <p className="font-bold text-brand-dark">Physical Document & Medical Check</p>
                    <p className="text-[11px] text-brand-gray">Mandatory health screening at teaching hospital campus.</p>
                  </div>
                </>
              )}

              {isLaw && (
                <>
                  <div className="border-l-2 border-brand-teal pl-3 space-y-0.5">
                    <p className="font-bold text-brand-dark">CLAT Examination (December)</p>
                    <p className="text-[11px] text-brand-gray">Offline pen-paper test for 26 National Law Universities.</p>
                  </div>
                  <div className="border-l-2 border-brand-teal pl-3 space-y-0.5">
                    <p className="font-bold text-brand-dark">AILET Examination</p>
                    <p className="text-[11px] text-brand-gray">Exclusive national exam for National Law University Delhi.</p>
                  </div>
                  <div className="border-l-2 border-brand-teal pl-3 space-y-0.5">
                    <p className="font-bold text-brand-dark">Consortium Allotment Rounds</p>
                    <p className="text-[11px] text-brand-gray">January - May centralized seat allocation rounds.</p>
                  </div>
                </>
              )}

              {streamKey === 'universities' && (
                <>
                  <div className="border-l-2 border-brand-teal pl-3 space-y-0.5">
                    <p className="font-bold text-brand-dark">CUET UG / PG Testing Window</p>
                    <p className="text-[11px] text-brand-gray">Central Universities unified national entrance examination.</p>
                  </div>
                  <div className="border-l-2 border-brand-teal pl-3 space-y-0.5">
                    <p className="font-bold text-brand-dark">Central University Merit Lists</p>
                    <p className="text-[11px] text-brand-gray">Campus CSAS portal choice filling and counseling.</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* STREAM-SPECIFIC INTERACTIVE SHORTLIST TOOL */}
          <div className="bg-gray-50 border border-brand-border rounded-sm p-5 space-y-3 shadow-subtle">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal block">
                Instant Shortlist Advisory
              </span>
              <h3 className="font-bold text-sm text-brand-dark">
                {isEngineering && "Evaluate Cutoffs by JEE Score"}
                {isMBA && "Evaluate B-Schools by CAT Percentile"}
                {isMedical && "Check Eligible Colleges by NEET Rank"}
                {isLaw && "Evaluate NLU Cutoffs by CLAT Rank"}
                {streamKey === 'universities' && "Find Universities by Score"}
              </h3>
              <p className="text-[11px] text-brand-gray">
                Submit your credentials to receive a curated admissions recommendation on WhatsApp.
              </p>
            </div>

            {leadSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-sm p-4 text-center space-y-1.5">
                <CheckCircle2 className="w-7 h-7 text-emerald-700 mx-auto" />
                <h4 className="font-bold text-xs text-emerald-900">Admissions Report Dispatched</h4>
                <p className="text-[11px] text-emerald-700">
                  Our senior {meta.eyebrow} strategist will share your cutoff-matched options shortly.
                </p>
                <button
                  onClick={() => setLeadSubmitted(false)}
                  className="text-[11px] text-emerald-800 font-semibold underline block mx-auto pt-1"
                >
                  Submit Another Profile
                </button>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-2.5 text-xs">
                <div>
                  <label className="block text-[11px] font-semibold text-brand-dark mb-1">
                    {isEngineering && "JEE Percentile / Rank"}
                    {isMBA && "CAT / XAT Percentile"}
                    {isMedical && "NEET UG Score / AIR"}
                    {isLaw && "CLAT / AILET Rank"}
                    {streamKey === 'universities' && "12th Board / CUET Score"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 94.5% or AIR 12,000"
                    value={leadForm.score}
                    onChange={(e) => setLeadForm({ ...leadForm, score: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-brand-border rounded-sm text-xs text-brand-dark focus:outline-none focus:border-brand-teal"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-brand-dark mb-1">
                    {isEngineering && "Target Branch Preference"}
                    {isMBA && "Target MBA Specialization"}
                    {isMedical && "Home State Domicile"}
                    {isLaw && "Target Degree (BA LLB / BBA LLB)"}
                    {streamKey === 'universities' && "Target Field of Study"}
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. CSE / Finance / Rajasthan"
                    value={leadForm.detail}
                    onChange={(e) => setLeadForm({ ...leadForm, detail: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-brand-border rounded-sm text-xs text-brand-dark focus:outline-none focus:border-brand-teal"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-brand-dark mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="10-digit contact number"
                    value={leadForm.phone}
                    onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-brand-border rounded-sm text-xs text-brand-dark focus:outline-none focus:border-brand-teal"
                  />
                </div>

                <button
                  type="submit"
                  disabled={leadLoading}
                  className="w-full py-2.5 bg-brand-teal hover:bg-brand-teal-dark text-white font-bold rounded-sm text-xs transition-colors flex items-center justify-center gap-1.5 mt-1"
                >
                  {leadLoading ? (
                    <span>Evaluating Cutoffs...</span>
                  ) : (
                    <>
                      <span>Get Free Institutional Report</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Regional Hubs with Clean Text Styling (NO CIRCULAR DOTS) */}
          <div className="bg-white border border-brand-border rounded-sm p-5 space-y-3 shadow-subtle">
            <h3 className="font-bold text-xs uppercase tracking-wider text-brand-dark border-b border-brand-border/60 pb-2 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand-teal" />
              Regional Higher Education Hubs
            </h3>
            <div className="space-y-2 text-xs">
              <Link
                href="/locations/jaipur"
                className="flex items-center justify-between p-2 rounded-sm hover:bg-gray-50 border border-gray-100 transition-colors"
              >
                <div>
                  <p className="font-bold text-brand-dark">Jaipur, Rajasthan</p>
                  <p className="text-[11px] text-brand-gray">MNIT, Manipal (MUJ), SMS Medical, JECRC</p>
                </div>
                <span className="text-brand-teal font-semibold text-[11px]">View &rarr;</span>
              </Link>
              <Link
                href="/locations/delhi"
                className="flex items-center justify-between p-2 rounded-sm hover:bg-gray-50 border border-gray-100 transition-colors"
              >
                <div>
                  <p className="font-bold text-brand-dark">Delhi NCR</p>
                  <p className="text-[11px] text-brand-gray">IIT Delhi, FMS, AIIMS, NLU Delhi, DTU</p>
                </div>
                <span className="text-brand-teal font-semibold text-[11px]">View &rarr;</span>
              </Link>
              <Link
                href="/locations/bangalore"
                className="flex items-center justify-between p-2 rounded-sm hover:bg-gray-50 border border-gray-100 transition-colors"
              >
                <div>
                  <p className="font-bold text-brand-dark">Bangalore, Karnataka</p>
                  <p className="text-[11px] text-brand-gray">IIM Bangalore, NLSIU, IISc, RVCE</p>
                </div>
                <span className="text-brand-teal font-semibold text-[11px]">View &rarr;</span>
              </Link>
              <Link
                href="/locations/mumbai"
                className="flex items-center justify-between p-2 rounded-sm hover:bg-gray-50 border border-gray-100 transition-colors"
              >
                <div>
                  <p className="font-bold text-brand-dark">Mumbai, Maharashtra</p>
                  <p className="text-[11px] text-brand-gray">IIT Bombay, SPJIMR, NMIMS, KEM Hospital</p>
                </div>
                <span className="text-brand-teal font-semibold text-[11px]">View &rarr;</span>
              </Link>
            </div>
          </div>

          {/* Audited Policy Trust Card */}
          <div className="bg-gray-50 border border-brand-border rounded-sm p-4 text-xs space-y-2 text-brand-gray">
            <div className="flex items-center gap-2 text-brand-dark font-bold">
              <ShieldCheck className="w-4 h-4 text-brand-teal" />
              <span>Compass Verified Data Policy</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Institutional credentials, statutory filings, NIRF scores, and seat quotas are verified directly against official AICTE, NMC, BCI, and central counselling authorities.
            </p>
          </div>

        </aside>
      </div>
    </div>
  );
}
