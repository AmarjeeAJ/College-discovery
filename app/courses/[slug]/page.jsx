'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Clock, CheckCircle2, ArrowRight, HelpCircle, Briefcase } from 'lucide-react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Button from '@/components/common/Button';
import CollegeCard from '@/components/college/CollegeCard';
import AdmissionEnquiryForm from '@/components/forms/AdmissionEnquiryForm';
import { coursesData } from '@/lib/data/courses';
import { collegesData } from '@/lib/data/colleges';

export default function CourseDetailPage({ params }) {
  const routeParams = useParams();
  const slug = routeParams?.slug || params?.slug || 'btech';

  const course = useMemo(() => {
    const target = (slug || 'btech').toLowerCase().trim();
    return coursesData.find((c) => c.slug.toLowerCase() === target) || coursesData[0];
  }, [slug]);

  const relatedColleges = useMemo(() => {
    if (!course) return [];
    const streamTarget = (course.shortName || course.stream || '').toLowerCase().replace(/[\.\s-]/g, '');
    const isBTech = streamTarget.includes('btech') || streamTarget.includes('cse') || streamTarget.includes('engineering') || course.slug === 'btech' || course.slug === 'computer-science';
    const isMBA = streamTarget.includes('mba') || streamTarget.includes('management') || course.slug === 'mba' || course.slug === 'bba';
    const isIT = streamTarget.includes('bca') || streamTarget.includes('mca') || streamTarget.includes('computerapplications') || course.slug === 'bca' || course.slug === 'mca';
    const isMedical = streamTarget.includes('medical') || streamTarget.includes('medicine') || streamTarget.includes('mbbs') || course.slug === 'mbbs';
    const isLaw = streamTarget.includes('law') || streamTarget.includes('legal') || streamTarget.includes('llb');

    let matched = collegesData.filter((c) => {
      if (isBTech) {
        return c.stream.some((s) => {
          const norm = s.toLowerCase().replace(/[\.\s-]/g, '');
          return norm.includes('btech') || norm.includes('engineering') || norm.includes('computerscience');
        });
      }
      if (isMBA) {
        const hasMbaCourse = c.courses && c.courses.some((course) => /mba|pgdm|master of business administration|post graduate program in management/i.test(course.name));
        const isDedicatedBschool = c.type && /business school|management institute/i.test(c.type);
        if (!hasMbaCourse && !isDedicatedBschool) return false;
        return c.stream.some((s) => {
          const norm = s.toLowerCase().replace(/[\.\s-]/g, '');
          return norm.includes('mba') || norm.includes('management') || norm.includes('pgdm');
        });
      }
      if (isIT) {
        return c.stream.some((s) => {
          const norm = s.toLowerCase().replace(/[\.\s-]/g, '');
          return norm.includes('bca') || norm.includes('mca') || norm.includes('computerscience') || norm.includes('btech');
        });
      }
            if (isMedical) {
        const hasMbbsCourse = c.courses && c.courses.some((course) => /mbbs|bachelor of medicine/i.test(course.name));
        const hasMedicalStream = c.stream && c.stream.some((s) => s.toLowerCase() === 'medical' || s.toLowerCase() === 'mbbs');
        const isDedicatedMedical = c.type && /medical/i.test(c.type);
        return (hasMbbsCourse || isDedicatedMedical || hasMedicalStream) && (!c.stream.includes('B.Tech') && !c.stream.includes('MBA') || hasMbbsCourse);
      }
      if (isLaw) {
        return c.stream.some((s) => {
          const norm = s.toLowerCase().replace(/[\.\s-]/g, '');
          return norm.includes('law') || norm.includes('legal');
        });
      }
      return c.stream.some((s) => {
        const norm = s.toLowerCase().replace(/[\.\s-]/g, '');
        return norm.includes(streamTarget) || streamTarget.includes(norm);
      });
    });

    // Sort with smart preference: premier Government and top Private universities/colleges prioritized
    return matched.sort((a, b) => {
      const rankA = a.nirfRanking || 999;
      const rankB = b.nirfRanking || 999;
      if (rankA !== rankB) return rankA - rankB;
      return (b.averagePackage || 0) - (a.averagePackage || 0);
    });
  }, [course]);

  const otherCourses = useMemo(() => {
    return coursesData.filter((c) => c.slug !== slug).slice(0, 4);
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!course) {
    return (
      <div className="mx-auto max-w-3xl py-20 px-4 text-center space-y-4">
        <h2 className="text-2xl font-bold text-brand-dark">Course Not Found</h2>
        <Button href="/courses" variant="primary">
          Back to Courses
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs
        items={[
          { label: 'Courses', link: '/courses' },
          { label: course.name }
        ]}
      />

      {/* Header Banner */}
      <header className="border-b border-brand-border pb-8 space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="bg-brand-teal-light text-brand-teal-dark px-2.5 py-1 rounded">
            {course.degreeLevel} Degree
          </span>
          <span className="text-brand-gray flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {course.duration}
          </span>
          <span className="text-brand-gray">•</span>
          <span className="text-brand-gray">{course.stream}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight">
          {course.name} in India: 2026 Admission Guide
        </h1>

        <p className="text-sm sm:text-base text-brand-gray max-w-4xl leading-relaxed">
          {course.overview}
        </p>

        {/* Quick Highlights Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-brand-teal-subtle border border-brand-border rounded p-4 text-xs mt-6">
          <div>
            <span className="text-brand-gray block text-[11px]">Average Starting Salary</span>
            <span className="text-sm sm:text-base font-bold text-emerald-700">{course.averageSalary}</span>
          </div>
          <div>
            <span className="text-brand-gray block text-[11px]">Highest Salary Range</span>
            <span className="text-sm sm:text-base font-bold text-brand-dark">{course.highestSalary}</span>
          </div>
          <div>
            <span className="text-brand-gray block text-[11px]">Typical Annual Fee</span>
            <span className="text-sm sm:text-base font-bold text-brand-dark">{course.averageFees.split('-')[0]}</span>
          </div>
          <div>
            <span className="text-brand-gray block text-[11px]">Accepted Entrance Exams</span>
            <span className="text-sm sm:text-base font-semibold text-brand-dark">{course.entranceExams.slice(0, 2).join(', ')}</span>
          </div>
        </div>
      </header>

      {/* Main Content Layout with Lead Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <main className="lg:col-span-8 space-y-8">
          {/* Specializations */}
          <section className="border border-brand-border bg-white rounded p-6 space-y-4">
            <h2 className="text-xl font-bold text-brand-dark">
              Key Specializations & Branches
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {course.specializations.map((spec, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 bg-gray-50 rounded border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="font-semibold text-brand-dark">{spec}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Eligibility & Entrance Examinations */}
          <section className="border border-brand-border bg-white rounded p-6 space-y-4">
            <h2 className="text-xl font-bold text-brand-dark">
              Eligibility Criteria & Entrance Examinations
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-brand-gray leading-relaxed">
              <p>
                <strong className="text-brand-dark">Academic Qualification:</strong> {course.eligibility}
              </p>
              <div>
                <strong className="text-brand-dark block mb-1">Key Entrance Tests:</strong>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {course.entranceExams.map((exam, i) => (
                    <span key={i} className="bg-brand-teal-light text-brand-teal-dark border border-brand-teal/20 px-2.5 py-1 rounded text-xs font-semibold">
                      {exam}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Curriculum Structure */}
          <section className="border border-brand-border bg-white rounded p-6 space-y-4">
            <h2 className="text-xl font-bold text-brand-dark">
              Semester Curriculum Highlights
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-brand-gray list-disc list-inside leading-relaxed">
              {course.curriculumHighlights.map((curr, idx) => (
                <li key={idx}>{curr}</li>
              ))}
            </ul>
          </section>

          {/* Career Opportunities */}
          <section className="border border-brand-border bg-white rounded p-6 space-y-4">
            <h2 className="text-xl font-bold text-brand-dark">
              Career Trajectories & Job Profiles
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              {course.topCareers.map((car, idx) => (
                <div key={idx} className="p-3 bg-gray-50 border border-gray-200 rounded font-medium text-brand-dark flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>{car}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Top Colleges for this Course */}
          {relatedColleges.length > 0 && (
            <section className="space-y-4 pt-4 border-t border-brand-border">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-brand-dark">
                  Top Colleges for {course.shortName} in India
                </h2>
                <Link href="/colleges" className="text-xs font-semibold text-brand-teal hover:underline">
                  View All Colleges →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {relatedColleges.map((c) => (
                  <CollegeCard key={c.id} college={c} activeStream={course.slug} />
                ))}
              </div>
            </section>
          )}

          {/* FAQs */}
          <section className="border border-brand-border bg-white rounded p-6 space-y-4">
            <h2 className="text-xl font-bold text-brand-dark">
              Frequently Asked Questions: {course.shortName}
            </h2>
            {course.faqs.map((faq, i) => (
              <div key={i} className="border-b border-brand-border/60 pb-3 last:border-0 last:pb-0 space-y-1">
                <h3 className="font-bold text-xs sm:text-sm text-brand-dark flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-brand-gray pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </section>
        </main>

        {/* Lead Capture & Counselor Sidebar */}
        <aside className="lg:col-span-4 sticky top-24 space-y-6">
          <AdmissionEnquiryForm defaultCourse={course.name} />

          {/* Other Programs */}
          <div className="border border-brand-border bg-white rounded p-5 space-y-3">
            <h3 className="font-bold text-sm text-brand-dark border-b border-brand-border pb-2">
              Other Popular Programs
            </h3>
            <div className="space-y-2">
              {otherCourses.map((oc) => (
                <Link
                  key={oc.id}
                  href={`/courses/${oc.slug}`}
                  className="flex items-center justify-between text-xs py-1.5 px-2 rounded hover:bg-brand-teal-light text-brand-dark hover:text-brand-teal transition-colors"
                >
                  <span className="font-medium">{oc.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-gray" />
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
