'use client';

import { Calendar, FileCheck2, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import AdmissionEnquiryForm from '@/components/forms/AdmissionEnquiryForm';

export default function AdmissionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: 'Admissions 2026' }]} />

      <header className="border-b border-brand-border pb-8 space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
          Centralized Advisory Portal
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight">
          College Admissions 2026: Complete Guide
        </h1>
        <p className="text-sm sm:text-base text-brand-gray max-w-3xl leading-relaxed">
          Navigate national entrance schedules, state counselling rounds (REAP, JAC Delhi, COMEDK), management quota criteria, and mandatory document verification protocols.
        </p>
      </header>

      {/* Grid: Timelines & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <main className="lg:col-span-8 space-y-8">
          {/* 2026 Admission Calendar */}
          <section className="border border-brand-border bg-white rounded p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-brand-teal" />
              <h2 className="text-xl font-bold text-brand-dark">
                Key Admission Schedules & Milestones (2026)
              </h2>
            </div>

            <div className="border border-brand-border rounded overflow-hidden text-xs">
              <table className="w-full border-collapse text-left">
                <thead className="bg-gray-100 border-b border-brand-border font-semibold text-brand-dark">
                  <tr>
                    <th className="p-3">Timeline / Period</th>
                    <th className="p-3">Exam / Counselling Body</th>
                    <th className="p-3">Key Action Required</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border/60 text-brand-gray">
                  <tr>
                    <td className="p-3 font-semibold text-brand-dark">January - April 2026</td>
                    <td className="p-3">JEE Main (Sessions 1 & 2)</td>
                    <td className="p-3">National CBT engineering exams for NITs, IIITs, DTU</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-brand-dark">May 2026</td>
                    <td className="p-3">JEE Advanced / NEET UG / CUET</td>
                    <td className="p-3">IIT entrance, Medical MBBS, and Central University tests</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-brand-dark">June - July 2026</td>
                    <td className="p-3">JoSAA & CSAB Counselling</td>
                    <td className="p-3">Seat allocation for 100+ institutes of national importance</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-brand-dark">July - August 2026</td>
                    <td className="p-3">State Counselling (REAP, JAC, COMEDK)</td>
                    <td className="p-3">State engineering allotments and institutional spot rounds</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Admission Pathways: Merit vs Management Quota */}
          <section className="border border-brand-border bg-white rounded p-6 space-y-4">
            <h2 className="text-xl font-bold text-brand-dark">
              Understanding Admission Pathways
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-gray-50 border border-gray-200 rounded space-y-2">
                <h3 className="font-bold text-sm text-brand-dark">
                  Centralized Merit Counselling
                </h3>
                <p className="text-brand-gray leading-relaxed">
                  Seats in government universities (IITs, NITs, DTU, State Colleges) are allocated strictly through entrance exam percentiles with zero discretion or capitation fees.
                </p>
                <span className="inline-block text-brand-teal font-semibold">
                  Examples: JoSAA, JAC Delhi, REAP
                </span>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-200 rounded space-y-2">
                <h3 className="font-bold text-sm text-brand-dark">
                  Institutional / Direct Merit Quota
                </h3>
                <p className="text-brand-gray leading-relaxed">
                  Top private and deemed universities reserve a portion of seats allocated on 10+2 PCM/PCB aggregate scores alongside entrance percentile cutoffs.
                </p>
                <span className="inline-block text-brand-teal font-semibold">
                  Examples: Manipal, Amity, Thapar, BITS
                </span>
              </div>
            </div>
          </section>

          {/* Mandatory Documents Checklist */}
          <section className="border border-brand-border bg-white rounded p-6 space-y-4">
            <div className="flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-brand-teal" />
              <h2 className="text-xl font-bold text-brand-dark">
                Mandatory Documentation Checklist for Admissions
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {[
                "Class 10th Marksheet & Passing Certificate (DOB verification)",
                "Class 12th Board Marksheet & Migration Certificate",
                "Entrance Exam Scorecard & Admit Card (JEE, NEET, CAT, CUET)",
                "Category / Caste Certificate (OBC-NCL, SC, ST, EWS if applicable)",
                "Recent Passport Sized Photographs (8-10 copies)",
                "State Domicile Certificate (for state quota reservation seats)",
                "Medical Fitness Certificate from registered MBBS doctor",
                "Transfer Certificate (TC) and Character Certificate from school"
              ].map((doc, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 bg-gray-50 rounded border border-gray-200 text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Sidebar Form */}
        <aside className="lg:col-span-4 sticky top-24 space-y-6">
          <AdmissionEnquiryForm defaultCourse="Admissions 2026 Support" />
        </aside>
      </div>
    </div>
  );
}
