'use client';

import Breadcrumbs from '@/components/common/Breadcrumbs';
import SectionHeading from '@/components/common/SectionHeading';
import CounsellingBookingForm from '@/components/forms/CounsellingBookingForm';
import {
  CheckCircle2,
  ShieldCheck,
  Award,
  Compass,
  FileCheck,
  Calendar
} from 'lucide-react';

export default function CounsellingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
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
              title: "Direct Admission & Quota",
              desc: "Transparent advisory on institutional management quota seats, NRI sponsorship, and spot round cutoffs.",
              icon: Award
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="border border-brand-border bg-white rounded p-6 space-y-3">
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
    </div>
  );
}
