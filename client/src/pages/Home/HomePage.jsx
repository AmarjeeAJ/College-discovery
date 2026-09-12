import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  ShieldCheck,
  Award,
  Users,
  Building2,
  TrendingUp,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  PhoneCall,
  Sparkles,
  BookOpen,
  MapPin,
  Scale,
  FileText
} from 'lucide-react';
import SEO from '../../components/common/SEO';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';
import CollegeCard from '../../components/college/CollegeCard';
import CourseCard from '../../components/course/CourseCard';
import LocationCard from '../../components/location/LocationCard';
import HeroSearchBox from '../../components/search/HeroSearchBox';
import AdmissionEnquiryForm from '../../components/forms/AdmissionEnquiryForm';
import { apiService } from '../../services/api';

export default function HomePage() {
  const [featuredColleges, setFeaturedColleges] = useState([]);
  const [btechColleges, setBtechColleges] = useState([]);
  const [courses, setCourses] = useState([]);
  const [locations, setLocations] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [activeFaqCategory, setActiveFaqCategory] = useState(0);

  useEffect(() => {
    async function loadData() {
      const [collegesRes, coursesRes, locsRes, blogsRes, faqsRes] = await Promise.all([
        apiService.getColleges(),
        apiService.getCourses(),
        apiService.getLocations(),
        apiService.getBlogs(),
        apiService.getFaqs()
      ]);

      if (collegesRes.success) {
        setFeaturedColleges(collegesRes.data.filter((c) => c.featured).slice(0, 4));
        setBtechColleges(collegesRes.data.filter((c) => c.stream.includes('B.Tech')).slice(0, 3));
      }
      if (coursesRes.success) {
        setCourses(coursesRes.data.slice(0, 4));
      }
      if (locsRes.success) {
        setLocations(locsRes.data.slice(0, 4));
      }
      if (blogsRes.success) {
        setBlogs(blogsRes.data.slice(0, 3));
      }
      if (faqsRes.success) {
        setFaqs(faqsRes.data);
      }
    }
    loadData();
  }, []);

  return (
    <div className="space-y-16 sm:space-y-24">
      <SEO
        title="Find Top Colleges, Verified Fees, Cutoffs & Admissions in India"
        description="Explore 1,200+ colleges across Jaipur, Delhi, Bangalore and Mumbai. Compare fees, verified average placements, cutoffs, and book free 1-on-1 counseling."
        schema={{
          "@type": "WebSite",
          "name": "College Leadership",
          "url": "https://theshineeducation.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://theshineeducation.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      />

      {/* =========================================================================
          HERO SECTION (Editorial Split Screen with High-Impact Typography & Photography)
          ========================================================================= */}
      <section className="relative pt-6 sm:pt-12 pb-12 sm:pb-16 bg-gradient-to-b from-brand-teal-light/40 via-white to-white border-b border-brand-border/60">
        {/* Subtle decorative dot pattern */}
        <div className="absolute inset-0 bg-dot-pattern-light opacity-50 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Editorial Headline & Search */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-teal-subtle/80 border-l-2 border-l-brand-teal border-y border-r border-brand-border rounded-sm text-xs font-semibold text-brand-dark tracking-tight">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                <span>India's Most Trusted College Discovery & Counselling Desk</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-dark leading-[1.12]">
                Find the Right College. <br />
                <span className="text-brand-teal">Build the Right Future.</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-brand-gray leading-relaxed max-w-2xl">
                Explore verified fees, realistic placement outcomes, cutoffs, and admission criteria for engineering, management, medical, and law institutions across India.
              </p>

              {/* Prominent Rectangular Hero Search */}
              <div className="pt-2">
                <HeroSearchBox />
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-brand-border/70 text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-brand-dark">1,200+</div>
                  <div className="text-xs text-brand-gray">Colleges Profiled</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-brand-dark">100%</div>
                  <div className="text-xs text-brand-gray">Verified Fee Data</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-brand-dark">45,000+</div>
                  <div className="text-xs text-brand-gray">Students Guided</div>
                </div>
              </div>
            </div>

            {/* Right Column: Authentic Editorial Campus & Student Photography */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-sm overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
                  alt="Indian university students collaborating on campus"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                {/* Overlaid Editorial Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 border border-brand-border p-3.5 rounded-sm shadow-md backdrop-blur-sm">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-bold text-brand-teal uppercase tracking-wider block">
                        Admissions Open • 2026 Cycle
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-brand-dark block">
                        B.Tech, MBA & Medical Counselling
                      </span>
                    </div>
                    <Link
                      to="/counselling"
                      className="shrink-0 bg-brand-teal text-white hover:bg-brand-teal-dark px-3.5 py-1.5 rounded-sm text-xs font-semibold transition-colors"
                    >
                      Connect
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DISCIPLINE TILES (Explore by Stream)
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Target Disciplines"
          title="Explore Colleges by Academic Stream"
          subtitle="Select your preferred career path to view cutoff trends, fee structures, and ranked colleges."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {[
            { name: 'B.Tech / Engg', count: '450+ Colleges', path: '/colleges/btech', icon: GraduationCap },
            { name: 'MBA / Management', count: '320+ Colleges', path: '/colleges/mba', icon: TrendingUp },
            { name: 'Medical / MBBS', count: '140+ Colleges', path: '/colleges/medical', icon: Building2 },
            { name: 'Law (BA LLB)', count: '90+ Colleges', path: '/colleges/law', icon: Scale },
            { name: 'Computer Apps (BCA)', count: '180+ Colleges', path: '/courses/bca', icon: BookOpen },
            { name: 'All Universities', count: '120+ Universities', path: '/universities', icon: Award }
          ].map((stream, idx) => {
            const Icon = stream.icon;
            return (
              <Link
                key={idx}
                to={stream.path}
                className="group border border-brand-border bg-white rounded p-4 hover:border-brand-teal hover:bg-brand-teal-light/20 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded bg-brand-teal-light text-brand-teal flex items-center justify-center mb-3 group-hover:bg-brand-teal group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-brand-dark group-hover:text-brand-teal transition-colors">
                    {stream.name}
                  </h3>
                </div>
                <span className="text-[11px] text-brand-gray mt-2 block">
                  {stream.count}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          FEATURED COLLEGES (Editorial Cards with Compare Toggles)
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Premier Institutions"
          title="Featured Engineering & Management Institutes"
          subtitle="Top ranked colleges recognized for accreditation, exceptional faculty, and verified placements."
          action={
            <Button to="/colleges" variant="outline" size="sm" icon={ArrowRight} iconPosition="right">
              View All Colleges
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredColleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      </section>

      {/* =========================================================================
          EDITORIAL TRUST SECTION: Why Students & Parents Choose College Leadership
          ========================================================================= */}
      <section className="bg-brand-teal-subtle border-y border-brand-border py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
                The Unbiased Standard
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark tracking-tight">
                Why Students & Parents Trust Our Advisory Desk
              </h2>
              <p className="text-sm text-brand-gray leading-relaxed">
                Higher education is too critical to rely on aggressive admission telemarketers and marketing brochures. We maintain an independent data desk providing transparent facts.
              </p>
              <div className="pt-2">
                <Button to="/counselling" variant="secondary" size="md">
                  Speak with a Counselor
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Verified Placement Audits',
                  desc: 'We prioritize median package and branch-wise placement percentages over misleading highest CTC packages.',
                  icon: ShieldCheck
                },
                {
                  title: 'Transparent Fee Schedules',
                  desc: 'Comprehensive breakdowns covering tuition, exam fees, hostel, mess, and hidden campus charges.',
                  icon: FileText
                },
                {
                  title: 'Accreditation Scrutiny',
                  desc: 'We verify NAAC grades, NBA Tier-1 programs under the Washington Accord, and AICTE compliance.',
                  icon: Award
                },
                {
                  title: 'Unbiased Seat Counselling',
                  desc: 'Direct merit guidance for JoSAA, CSAB, JAC Delhi, REAP, and institutional quota applications.',
                  icon: Users
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="border border-brand-border bg-white rounded p-5 space-y-2">
                    <div className="w-8 h-8 rounded bg-brand-teal-light text-brand-teal flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-brand-dark">
                      {item.title}
                    </h3>
                    <p className="text-xs text-brand-gray leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          POPULAR B.TECH COLLEGES SPOTLIGHT
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Engineering Spotlight"
          title="Top B.Tech Institutions with Proven ROI"
          subtitle="Carefully evaluated colleges delivering strong return on tuition investment for engineering aspirants."
          action={
            <Button to="/colleges/btech" variant="outline" size="sm" icon={ArrowRight} iconPosition="right">
              All B.Tech Colleges
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {btechColleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      </section>

      {/* =========================================================================
          STUDY BY LOCATION (Jaipur, Delhi, Bangalore, Mumbai)
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Geographic Hubs"
          title="Explore Colleges by Location"
          subtitle="Compare higher education opportunities, industry connectivity, and living costs across key student cities."
          action={
            <Button to="/locations" variant="outline" size="sm" icon={ArrowRight} iconPosition="right">
              All Study Locations
            </Button>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc) => (
            <LocationCard key={loc.id} location={loc} />
          ))}
        </div>
      </section>

      {/* =========================================================================
          5-STEP ADMISSION PROCESS ROADMAP
          ========================================================================= */}
      <section className="bg-brand-black text-white py-14 sm:py-20 border-y border-brand-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-2">
              Systematic Admission Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              How the College Admission Process Works
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">
              From discovering options to attending your first day of class, we walk with you through every step.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Profile Evaluation', desc: 'Assess your 12th/Graduation marks, entrance percentiles, and budget.' },
              { step: '02', title: 'College Shortlisting', desc: 'Identify 5-8 matching institutions across dream, reach, and safe categories.' },
              { step: '03', title: 'Compare & Audit', desc: 'Deep-dive into branch cutoffs, median CTCs, and fee structures.' },
              { step: '04', title: 'Counselor Consultation', desc: '1-on-1 strategy session to lock application preferences and quota routes.' },
              { step: '05', title: 'Seat Allotment & Join', desc: 'Complete seat acceptance, document verification, and campus joining.' }
            ].map((st, i) => (
              <div key={i} className="border border-gray-800 bg-gray-900/60 p-5 rounded space-y-2">
                <span className="text-2xl font-black text-brand-teal block">
                  {st.step}
                </span>
                <h3 className="text-sm font-bold text-white">
                  {st.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          POPULAR COURSES & DEGREE GUIDES
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Curriculum Insights"
          title="Popular Degree Programs & Roadmaps"
          subtitle="Explore course duration, eligibility, career salary trajectories, and syllabus highlights."
          action={
            <Button to="/courses" variant="outline" size="sm" icon={ArrowRight} iconPosition="right">
              View All Courses
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* =========================================================================
          COLLEGE COMPARISON PROMO SECTION
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border border-brand-border bg-white rounded p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
              Side-by-Side Analysis
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Confused Between Two Colleges? Compare Them Directly.
            </h2>
            <p className="text-sm text-brand-gray leading-relaxed">
              Compare up to 4 colleges side-by-side across NIRF ranks, annual tuition fees, average packages, top recruiters, hostel expenses, and eligibility criteria.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs text-brand-gray">
              <span className="bg-gray-100 px-2.5 py-1 rounded">✓ Fees Comparison</span>
              <span className="bg-gray-100 px-2.5 py-1 rounded">✓ Placement Metrics</span>
              <span className="bg-gray-100 px-2.5 py-1 rounded">✓ Accreditations</span>
              <span className="bg-gray-100 px-2.5 py-1 rounded">✓ Recruiters</span>
            </div>
          </div>
          <div className="shrink-0">
            <Button
              to="/compare"
              variant="primary"
              size="lg"
              icon={Scale}
              iconPosition="left"
            >
              Launch Comparison Tool
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STUDENT SUCCESS & REVIEWS SECTION
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Student Feedback"
          title="What Students & Parents Say"
          subtitle="Real experiences of students who navigated their college admissions through our platform."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: "The counselor helped me evaluate the difference between CSE Core and AI at Manipal University Jaipur versus taking a non-tech branch at an NIT. That clarity transformed my career trajectory.",
              student: "Ananya Rathore",
              detail: "B.Tech CSE, Batch of 2025",
              college: "Manipal University Jaipur"
            },
            {
              quote: "The fee comparison tool revealed hidden hostel and examination surcharges that other websites fail to mention. Truly honest and professional guidance.",
              student: "Vikram Malhotra",
              detail: "Parent of B.Tech Aspirant",
              college: "New Delhi"
            },
            {
              quote: "With a 91.2 percentile in JEE Main, I was lost among dozens of conflicting private college claims. Their 1-on-1 session gave us an exact shortlist of 3 high-ROI institutions.",
              student: "Kunal Meena",
              detail: "B.Tech ECE Student",
              college: "MNIT Jaipur"
            }
          ].map((t, i) => (
            <div key={i} className="border border-brand-border bg-white rounded p-6 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-brand-gray italic leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="pt-4 border-t border-brand-border/60">
                <div className="font-bold text-sm text-brand-dark">{t.student}</div>
                <div className="text-xs text-brand-teal font-medium">{t.detail}</div>
                <div className="text-[11px] text-gray-400">{t.college}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          ADMISSION COUNSEL ARTICLES (Blog Preview)
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education Desk"
          title="Latest Insights & Admission Guides"
          subtitle="In-depth analysis, cutoff benchmarks, and expert strategies written by education specialists."
          action={
            <Button to="/blog" variant="outline" size="sm" icon={ArrowRight} iconPosition="right">
              Read All Articles
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((b) => (
            <article key={b.id} className="group border border-brand-border bg-white rounded overflow-hidden hover:border-brand-teal transition-all flex flex-col justify-between">
              <div>
                <div className="h-44 overflow-hidden bg-gray-100">
                  <img
                    src={b.coverImage}
                    alt={b.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between text-[11px] text-brand-gray mb-2">
                    <span className="font-semibold text-brand-teal uppercase">{b.category}</span>
                    <span>{b.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-brand-dark group-hover:text-brand-teal transition-colors line-clamp-2">
                    <Link to={`/blog/${b.slug}`}>
                      {b.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs text-brand-gray line-clamp-3 leading-relaxed">
                    {b.excerpt}
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-0 border-t border-brand-border/40 mt-auto flex items-center justify-between">
                <span className="text-[11px] text-brand-gray">{b.publishedDate}</span>
                <Link
                  to={`/blog/${b.slug}`}
                  className="text-xs font-semibold text-brand-teal hover:text-brand-teal-dark flex items-center gap-1"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================================
          FAQ SECTION (Categorized Accordion / Tabbed)
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Help Center"
          title="Frequently Asked Questions"
          subtitle="Answers to common questions regarding college shortlisting, fee schedules, and admission counselling."
          align="center"
        />

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.length > 0 && faqs[0].items.map((item, idx) => (
            <div key={idx} className="border border-brand-border bg-white rounded p-5 space-y-2">
              <h3 className="font-bold text-sm sm:text-base text-brand-dark flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                <span>{item.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-brand-gray pl-6 leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          FINAL HIGH-CONTRAST CALL TO ACTION (Rectangular, Editorial)
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-brand-dark border border-gray-800 text-white rounded-sm p-8 sm:p-12 relative overflow-hidden shadow-lg">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
              Higher Education Portal 2026
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Ready to Take Your Next Step in Higher Education?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Whether you are a student exploring top colleges and seeking verified admission guidance, or an institution looking to reach prospective students—we provide transparent data and trusted reach.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Button to="/counselling" variant="primary" size="lg">
                Get Free Counselling
              </Button>
              <Button to="/colleges" variant="outline" size="lg" className="border-gray-600 text-white bg-transparent hover:bg-white/10 hover:text-white">
                Explore 1,200+ Colleges
              </Button>
              <Button to="/college-listing" variant="outline" size="lg" className="border-brand-teal text-brand-teal-light bg-transparent hover:bg-brand-teal/20 hover:text-white">
                Partner: List Your College
              </Button>
            </div>
            <p className="text-[11px] text-gray-400 pt-1">
              Are you an educational institution looking to reach more students? <Link to="/college-listing" className="text-brand-teal hover:underline font-semibold">List and promote your college on our platform →</Link>
            </p>
          </div>

          {/* Subtle logo emblem in background */}
          <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none hidden md:block">
            <img src="/emblem.png" alt="" className="w-72 h-72 object-contain" />
          </div>
        </div>
      </section>
    </div>
  );
}
