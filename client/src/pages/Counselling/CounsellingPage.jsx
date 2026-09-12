import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import SectionHeading from '../../components/common/SectionHeading';
import CounsellingBookingForm from '../../components/forms/CounsellingBookingForm';
import {
  CheckCircle2,
  Phone,
  ShieldCheck,
  Award,
  Users,
  Clock,
  Compass,
  FileCheck,
  Calendar
} from 'lucide-react';

export default function CounsellingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SEO
        title="Free 1-on-1 College Admission Counselling: Talk to an Expert"
        description="Confused about B.Tech, MBA or Medical admissions? Schedule a free 1-on-1 session with our senior education counselors in Jaipur and Delhi."
        canonical="https://theshineeducation.com/counselling"
      />

      <Breadcrumbs items={[{ label: 'Free Counselling' }]} />

      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-brand-border pb-12">
        <div className="lg:col-span-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-teal-light/60 border-l-2 border-l-brand-teal border-y border-r border-brand-border rounded-sm text-xs font-semibold text-brand-dark">
            <Compass className="w-3.5 h-3.5 text-brand-teal shrink-0" />
            <span>1-on-1 Expert Student Advisory</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
            Confused About Which College to Choose?
          </h1>

          <p className="text-sm sm:text-base text-brand-gray leading-relaxed">
            With thousands of colleges making conflicting placement and ranking claims, making the right choice can feel overwhelming. Our seasoned education counselors offer transparent, data-backed guidance without commercial bias.
          </p>

          <div className="pt-2 space-y-2.5 text-xs sm:text-sm text-brand-dark">
            <div className="flex items-center gap-2.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
              <span>Personalized college shortlisting based on your 12th/JEE/CAT score</span>
            </div>
            <div className="flex items-center gap-2.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
              <span>Full fee breakdown including hidden hostel and examination charges</span>
            </div>
            <div className="flex items-center gap-2.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
              <span>Quota, direct admission, and state counselling assistance (REAP/JAC/JoSAA)</span>
            </div>
          </div>
        </div>

        {/* Counselling Form */}
        <div className="lg:col-span-6">
          <CounsellingBookingForm />
        </div>
      </div>

      {/* What We Cover in a Counselling Session */}
      <section className="space-y-6">
        <SectionHeading
          eyebrow="Comprehensive Advisory"
          title="What We Cover in Your Consultation"
          subtitle="A holistic evaluation addressing your career aspirations, academic scores, and family budget."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Branch & Course Selection",
              desc: "Evaluate between CSE Core vs AI/ML vs Data Science vs Electronics to choose a branch matching your aptitude.",
              icon: Compass
            },
            {
              title: "College Shortlisting",
              desc: "Create an objective shortlist of Dream, Target, and Safe institutions across government and private sectors.",
              icon: Award
            },
            {
              title: "Fee & ROI Comparison",
              desc: "Calculate your true 4-year degree cost and compute loan repayment timelines against verified median CTCs.",
              icon: FileCheck
            },
            {
              title: "Entrance Exam Strategy",
              desc: "Guidance on backup entrance exams (MET, BITSAT, COMEDK, VITEEE) to ensure a high-tier fallback option.",
              icon: Calendar
            },
            {
              title: "State & National Counselling",
              desc: "Step-by-step navigation through JoSAA, CSAB, JAC Delhi, and state REAP choice-filling algorithms.",
              icon: ShieldCheck
            },
            {
              title: "Scholarship & Fee Waivers",
              desc: "Assistance in securing merit scholarships (up to 100% tuition waiver) and state domicile concessions.",
              icon: Users
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="border border-brand-border bg-white rounded p-5 space-y-2.5">
                <div className="w-9 h-9 rounded bg-brand-teal-light text-brand-teal flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-brand-dark">{item.title}</h3>
                <p className="text-xs text-brand-gray leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5-Step Methodology */}
      <section className="bg-brand-teal-subtle border border-brand-border rounded p-8 sm:p-12 space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
            Our Proven Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
            5 Steps to Your Ideal College Admission
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-xs">
          {[
            { step: '1', title: 'Tell Us Your Goals', desc: 'Share your academic percentages, entrance ranks, and preferred cities.' },
            { step: '2', title: 'Explore Options', desc: 'We filter 1,200+ colleges to extract an initial shortlist of 10 institutions.' },
            { step: '3', title: 'Compare Parameters', desc: 'Deep dive into median placement packages, faculty quality, and hostel fees.' },
            { step: '4', title: '1-on-1 Consultation', desc: 'Meet your dedicated counselor to finalize your application sequence.' },
            { step: '5', title: 'Admission & Joining', desc: 'We assist with documentation, verification, and campus registration.' }
          ].map((s, i) => (
            <div key={i} className="bg-white border border-brand-border rounded p-4 space-y-2">
              <span className="w-6 h-6 rounded bg-brand-teal text-white flex items-center justify-center font-bold text-xs">
                {s.step}
              </span>
              <h4 className="font-bold text-sm text-brand-dark">{s.title}</h4>
              <p className="text-brand-gray leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
