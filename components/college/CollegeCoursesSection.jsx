'use client';

import { useState, useMemo } from 'react';
import { Clock, Users, Search, X, CheckCircle2, ArrowRight, BookOpen, Sparkles, GraduationCap } from 'lucide-react';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';

/**
 * Intelligent helper to categorize course level
 */
function getCourseLevel(course) {
  if (course.degreeLevel) {
    const lvl = course.degreeLevel.trim().toLowerCase();
    if (lvl.includes('undergraduate') || lvl === 'ug') return 'Undergraduate';
    if (lvl.includes('postgraduate') || lvl === 'pg') return 'Postgraduate';
    if (lvl.includes('doctor') || lvl.includes('phd')) return 'Doctoral';
    if (lvl.includes('diploma')) return 'Diploma';
    return course.degreeLevel;
  }
  const n = (course.name || '').toLowerCase();
  if (/b\.tech|bachelor|bba|bca|ba\s|b\.sc|b\.com|mbbs|b\.pharm|b\.des|integrated/i.test(n)) return 'Undergraduate';
  if (/m\.tech|master|mba|mca|ma\s|m\.sc|m\.com|md\s|ms\s|pgdm/i.test(n)) return 'Postgraduate';
  if (/ph\.d|phd|doctorate/i.test(n)) return 'Doctoral';
  if (/diploma/i.test(n)) return 'Diploma';
  return 'Professional Degree';
}

export default function CollegeCoursesSection({ courses = [], collegeName = '', onSelectCourseForEnquiry }) {
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique levels present in this college's courses
  const availableLevels = useMemo(() => {
    if (!courses || courses.length === 0) return [];
    const set = new Set();
    courses.forEach((c) => {
      set.add(getCourseLevel(c));
    });
    return Array.from(set);
  }, [courses]);

  // Filter courses based on selected level and search term
  const filteredCourses = useMemo(() => {
    if (!courses) return [];
    return courses.filter((course) => {
      const level = getCourseLevel(course);
      const matchesLevel = selectedLevel === 'All' || level === selectedLevel;

      if (!matchesLevel) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const nameMatch = (course.name || '').toLowerCase().includes(q);
      const eligibilityMatch = (course.eligibility || '').toLowerCase().includes(q);
      const streamMatch = (course.stream || course.department || '').toLowerCase().includes(q);
      const specMatch = course.specializations && course.specializations.some((s) => s.toLowerCase().includes(q));

      return nameMatch || eligibilityMatch || streamMatch || specMatch;
    });
  }, [courses, selectedLevel, searchQuery]);

  if (!courses || courses.length === 0) {
    return (
      <div className="border border-brand-border rounded p-8 bg-white text-center space-y-4">
        <GraduationCap className="w-10 h-10 text-brand-teal mx-auto" />
        <h3 className="text-base font-bold text-brand-dark">Course Catalog Under Verification</h3>
        <p className="text-xs text-brand-gray max-w-md mx-auto">
          The verified syllabus and fee schedule for programs at {collegeName} are currently being audited for the 2026 academic cycle.
        </p>
        <Button
          onClick={() => onSelectCourseForEnquiry && onSelectCourseForEnquiry('General Admission Enquiry')}
          variant="primary"
          size="sm"
        >
          Enquire for Available Seats
        </Button>
      </div>
    );
  }

  return (
    <section className="space-y-6">
      {/* Header & Description */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-brand-dark">
              Courses Offered, Seat Matrix & Fee Schedule (2026)
            </h2>
            <p className="text-xs text-brand-gray mt-1">
              Official curriculum options, verified annual tuition charges, eligibility criteria, and branch cutoffs.
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 bg-brand-teal-light text-brand-teal-dark border border-brand-teal/20 rounded self-start sm:self-auto shrink-0">
            {courses.length} Programs Available
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-gray-50 border border-brand-border rounded p-3.5 space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Level Filter Pills */}
          {availableLevels.length > 1 ? (
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedLevel('All')}
                className={`text-xs font-medium px-3 py-1.5 rounded transition-colors ${
                  selectedLevel === 'All'
                    ? 'bg-brand-dark text-white font-semibold'
                    : 'bg-white text-brand-gray hover:text-brand-dark border border-brand-border'
                }`}
              >
                All Programs ({courses.length})
              </button>
              {availableLevels.map((lvl) => {
                const count = courses.filter((c) => getCourseLevel(c) === lvl).length;
                return (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setSelectedLevel(lvl)}
                    className={`text-xs font-medium px-3 py-1.5 rounded transition-colors ${
                      selectedLevel === lvl
                        ? 'bg-brand-dark text-white font-semibold'
                        : 'bg-white text-brand-gray hover:text-brand-dark border border-brand-border'
                    }`}
                  >
                    {lvl} ({count})
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="text-xs font-semibold text-brand-dark flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-brand-teal" />
              <span>Verified Degree Catalog</span>
            </div>
          )}

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-brand-gray absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search course or branch..."
              className="w-full pl-8 pr-8 py-1.5 text-xs border border-gray-300 rounded bg-white text-brand-dark placeholder-gray-400 focus:outline-none focus:border-brand-teal"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Course List */}
      {filteredCourses.length === 0 ? (
        <div className="border border-brand-border rounded p-8 bg-white text-center space-y-3">
          <BookOpen className="w-8 h-8 text-brand-gray mx-auto" />
          <h4 className="text-sm font-bold text-brand-dark">No matching courses found</h4>
          <p className="text-xs text-brand-gray">
            No programs match "{searchQuery}" under the selected category.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedLevel('All');
            }}
            className="text-xs font-semibold text-brand-teal hover:underline"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredCourses.map((course, idx) => {
            const level = getCourseLevel(course);
            return (
              <div
                key={course.id || idx}
                className="border border-brand-border rounded bg-white hover:border-brand-teal/60 transition-colors duration-150 p-4 sm:p-5 space-y-3.5"
              >
                {/* Course Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-brand-border/60 pb-3">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="teal" size="xs">
                        {level}
                      </Badge>
                      {course.department && (
                        <span className="text-[11px] text-brand-gray bg-gray-100 px-2 py-0.5 rounded-sm">
                          {course.department}
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-brand-dark">
                      {course.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-brand-gray">
                      {course.duration && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-brand-teal" />
                          Duration: {course.duration}
                        </span>
                      )}
                      {course.seats && (
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3 text-brand-teal" />
                          Total Intake: {course.seats} Seats
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Tuition Fee Block */}
                  <div className="sm:text-right bg-brand-teal-light/40 sm:bg-transparent p-2.5 sm:p-0 rounded border sm:border-0 border-brand-teal/20">
                    <span className="text-[11px] text-brand-gray block">Annual Tuition</span>
                    <span className="font-extrabold text-base sm:text-lg text-brand-teal-dark">
                      {course.annualFee || 'Contact for Fees'}
                    </span>
                  </div>
                </div>

                {/* Details Grid: Eligibility & Placement CTC */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 text-xs">
                  <div className="md:col-span-8 bg-gray-50/70 p-3 rounded border border-gray-200/70">
                    <span className="font-semibold text-brand-dark block mb-1">
                      Eligibility & Selection Criteria:
                    </span>
                    <p className="text-brand-gray leading-relaxed">
                      {course.eligibility || 'Candidate must meet minimum 10+2 / graduation norms and qualifying entrance marks.'}
                    </p>
                  </div>

                  <div className="md:col-span-4 bg-emerald-50/60 p-3 rounded border border-emerald-200/60 flex flex-col justify-center">
                    <span className="text-[11px] text-emerald-800 font-medium block">Average Batch CTC</span>
                    <span className="text-base font-bold text-emerald-700">
                      {course.avgPackage || 'Standard Campus Drive'}
                    </span>
                  </div>
                </div>

                {/* Specializations (if available) */}
                {course.specializations && course.specializations.length > 0 && (
                  <div className="space-y-1.5 text-xs pt-1">
                    <span className="text-[11px] font-semibold text-brand-dark flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-500" />
                      Offered Specializations & Elective Tracks:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {course.specializations.map((spec, i) => (
                        <span
                          key={i}
                          className="bg-white border border-gray-200 text-gray-700 px-2 py-0.5 rounded text-[11px]"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Bar */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-brand-border/40">
                  <span className="text-[11px] text-brand-gray">
                    Verified for 2026 Academic Session
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectCourseForEnquiry && onSelectCourseForEnquiry(course.name)}
                      className="text-xs font-semibold bg-brand-teal text-white hover:bg-brand-teal-dark px-3 py-1.5 rounded transition-colors flex items-center gap-1"
                    >
                      <span>Apply for this Course</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
