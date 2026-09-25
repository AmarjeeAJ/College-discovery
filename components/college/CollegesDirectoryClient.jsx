'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { LayoutGrid, List, SlidersHorizontal, Building2, BookOpen } from 'lucide-react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import CollegeCard from '@/components/college/CollegeCard';
import CollegeFilters from '@/components/college/CollegeFilters';
import { collegesData } from '@/lib/data/colleges';

export default function CollegesDirectoryClient() {
  const searchParams = useSearchParams();
  const [viewMode, setViewMode] = useState('grid');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const [filters, setFilters] = useState({
    query: searchParams.get('q') || '',
    stream: searchParams.get('stream') || '',
    city: searchParams.get('city') || '',
    type: searchParams.get('type') || '',
    maxFee: searchParams.get('maxFee') || '',
    sort: searchParams.get('sort') || 'ranking'
  });

  const colleges = useMemo(() => {
    let results = [...collegesData];

    if (filters.stream) {
      const target = filters.stream.toLowerCase().replace(/[\.\s-]/g, '');
      if (target === 'mba' || target === 'management') {
        results = results.filter((c) => {
          const hasMbaCourse =
            c.courses &&
            c.courses.some((course) =>
              /mba|pgdm|master of business administration|post graduate program in management/i.test(
                course.name
              )
            );
          const isDedicatedBschool =
            c.type && /business school|management institute/i.test(c.type);
          const hasMbaStream = c.stream.some((s) => {
            const norm = s.toLowerCase().replace(/[\.\s-]/g, '');
            return norm === 'mba' || norm === 'management' || norm === 'pgdm';
          });
          return hasMbaStream && (hasMbaCourse || isDedicatedBschool);
        });
      } else {
        results = results.filter((c) =>
          c.stream.some((s) => {
            const norm = s.toLowerCase().replace(/[\.\s-]/g, '');
            return (
              norm.includes(target) ||
              target.includes(norm) ||
              (target === 'btech' && norm.includes('engineering')) ||
              (target === 'engineering' && norm.includes('btech'))
            );
          })
        );
      }
    }

    if (filters.city) {
      const target = filters.city.toLowerCase().trim();
      results = results.filter((c) => c.city.toLowerCase() === target);
    }

    if (filters.type) {
      const target = filters.type.toLowerCase().trim();
      results = results.filter((c) => c.type.toLowerCase().includes(target));
    }

    if (filters.maxFee) {
      results = results.filter((c) => c.annualFeeNumeric <= Number(filters.maxFee));
    }

    if (filters.query || filters.q) {
      const target = (filters.query || filters.q).toLowerCase().trim();
      results = results.filter(
        (c) =>
          c.name.toLowerCase().includes(target) ||
          (c.shortName && c.shortName.toLowerCase().includes(target)) ||
          c.city.toLowerCase().includes(target) ||
          c.state.toLowerCase().includes(target) ||
          c.stream.some((s) => s.toLowerCase().includes(target))
      );
    }

    if (filters.sort === 'ranking') {
      results.sort((a, b) => (a.nirfRanking || 999) - (b.nirfRanking || 999));
    } else if (filters.sort === 'fee_low_high') {
      results.sort((a, b) => (a.annualFeeNumeric || 0) - (b.annualFeeNumeric || 0));
    } else if (filters.sort === 'fee_high_low') {
      results.sort((a, b) => (b.annualFeeNumeric || 0) - (a.annualFeeNumeric || 0));
    } else if (filters.sort === 'package') {
      results.sort((a, b) => (b.averagePackage || 0) - (a.averagePackage || 0));
    } else if (filters.sort === 'rating') {
      results.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return results;
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFilters = () => {
    setFilters({
      query: '',
      stream: '',
      city: '',
      type: '',
      maxFee: '',
      sort: 'ranking'
    });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Colleges Directory' }]} />

      {/* Header Banner */}
      <div className="border-b border-brand-border pb-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
              National College Directory
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark tracking-tight">
              Colleges & Universities in India
            </h1>
            <p className="text-xs sm:text-sm text-brand-gray mt-1.5 max-w-2xl">
              Filter through accredited engineering colleges, business schools, medical institutes, and law universities with verified 2026 fee schedules, live notices, and placement audits.
            </p>
          </div>

          {/* View Modes & Mobile Filter Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden flex items-center gap-1.5 px-3 py-2 border border-brand-border rounded text-xs font-medium text-brand-dark hover:bg-gray-50"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>

            <div className="flex items-center border border-brand-border rounded overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-brand-teal text-white'
                    : 'bg-white text-brand-gray hover:text-brand-dark'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 transition-colors ${
                  viewMode === 'list'
                    ? 'bg-brand-teal text-white'
                    : 'bg-white text-brand-gray hover:text-brand-dark'
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Institutional Outreach Notice */}
      <div className="mb-8 bg-brand-teal-subtle/50 border border-brand-border rounded p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div>
          <span className="font-bold text-brand-dark">Are you a college looking to reach more students? </span>
          <span className="text-brand-gray">
            List your institution to showcase courses, fee structures, and reach prospective applicants actively researching admissions.
          </span>
        </div>
        <Link
          href="/college-listing"
          className="shrink-0 font-semibold text-brand-teal hover:text-brand-teal-dark hover:underline flex items-center gap-1"
        >
          <span>List Your College</span>
          <span>→</span>
        </Link>
      </div>

      {/* Main Grid: Sidebar Filters + Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Desktop Sidebar Filters */}
        <div className="hidden lg:block lg:col-span-1 sticky top-24">
          <CollegeFilters
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={handleResetFilters}
          />
        </div>

        {/* Mobile Filters Drawer */}
        {mobileFilterOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/50 p-4 flex items-center justify-center">
            <div className="bg-white rounded-md p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Filters</h3>
                <button onClick={() => setMobileFilterOpen(false)} className="text-gray-500 font-bold">
                  ✕
                </button>
              </div>
              <CollegeFilters
                filters={filters}
                onFilterChange={handleFilterChange}
                onReset={handleResetFilters}
              />
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full mt-4 bg-brand-teal text-white py-2 rounded-sm font-semibold text-sm"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}

        {/* Results Column */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between text-xs text-brand-gray pb-3 border-b border-brand-border/60">
            <span>
              Showing <strong className="text-brand-dark">{colleges.length}</strong> verified institutions
            </span>
          </div>

          {colleges.length === 0 ? (
            <div className="bg-gray-50 border border-brand-border rounded p-12 text-center space-y-3">
              <h3 className="font-bold text-base text-brand-dark">No colleges match your filters</h3>
              <p className="text-xs text-brand-gray">
                Try adjusting your stream, fee ceiling, or location search query.
              </p>
              <button
                onClick={handleResetFilters}
                className="text-xs text-brand-teal font-semibold underline cursor-pointer"
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
                  : 'space-y-4'
              }
            >
              {colleges.map((college) => (
                <CollegeCard
                  key={college.id}
                  college={college}
                  viewMode={viewMode}
                  activeStream={filters.stream}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
