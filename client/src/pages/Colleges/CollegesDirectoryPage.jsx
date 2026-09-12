import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { LayoutGrid, List, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import SectionHeading from '../../components/common/SectionHeading';
import CollegeCard from '../../components/college/CollegeCard';
import CollegeFilters from '../../components/college/CollegeFilters';
import Button from '../../components/common/Button';
import { apiService } from '../../services/api';

export default function CollegesDirectoryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filters state initialized from search params
  const [filters, setFilters] = useState({
    query: searchParams.get('q') || '',
    stream: searchParams.get('stream') || '',
    city: searchParams.get('city') || '',
    type: searchParams.get('type') || '',
    maxFee: searchParams.get('maxFee') || '',
    sort: searchParams.get('sort') || 'ranking'
  });

  useEffect(() => {
    async function fetchColleges() {
      setLoading(true);
      const res = await apiService.getColleges(filters);
      if (res.success) {
        setColleges(res.data);
      }
      setLoading(false);
    }
    fetchColleges();
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
      <SEO
        title="Explore All Colleges & Universities in India (2026 Directory)"
        description="Discover and filter accredited higher education institutions across India by stream, location, NIRF ranking, fees, and placements."
      />

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
              Filter through accredited engineering colleges, business schools, medical institutes, and law universities with verified 2026 fee schedules and placement audits.
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
                  viewMode === 'grid' ? 'bg-brand-teal text-white' : 'bg-white text-brand-gray hover:text-brand-dark'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 transition-colors ${
                  viewMode === 'list' ? 'bg-brand-teal text-white' : 'bg-white text-brand-gray hover:text-brand-dark'
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Sorting Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-brand-border/60 text-xs">
          <div className="text-brand-gray">
            Showing <span className="font-bold text-brand-dark">{colleges.length}</span> colleges matching criteria
          </div>

          <div className="flex items-center gap-2">
            <span className="text-brand-gray">Sort by:</span>
            <select
              value={filters.sort}
              onChange={(e) => handleFilterChange('sort', e.target.value)}
              className="border border-gray-300 rounded px-2.5 py-1 text-xs text-brand-dark focus:border-brand-teal focus:outline-none bg-white font-medium"
            >
              <option value="ranking">NIRF Ranking (Top to Lowest)</option>
              <option value="package">Highest Average Package</option>
              <option value="fee_low_high">Annual Fees (Low to High)</option>
              <option value="fee_high_low">Annual Fees (High to Low)</option>
              <option value="rating">Student Rating</option>
            </select>
          </div>
        </div>
      </div>

      {/* Institutional Outreach Notice */}
      <div className="mb-6 bg-brand-teal-subtle/50 border border-brand-border rounded p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div>
          <span className="font-bold text-brand-dark">Are you a college looking to reach more students? </span>
          <span className="text-brand-gray">List your institution to showcase courses, fee structures, and reach prospective applicants actively researching admissions.</span>
        </div>
        <Link
          to="/college-listing"
          className="shrink-0 font-semibold text-brand-teal hover:text-brand-teal-dark hover:underline flex items-center gap-1"
        >
          <span>List Your College</span>
          <span>→</span>
        </Link>
      </div>

      {/* Main Directory Grid with Filter Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-24">
          <CollegeFilters
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={handleResetFilters}
          />
        </aside>

        {/* Mobile Filter Overlay Drawer */}
        {mobileFilterOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/50 p-4 flex justify-end">
            <div className="w-full max-w-xs bg-white rounded p-4 overflow-y-auto h-full space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-brand-border">
                <span className="font-bold text-sm text-brand-dark">Filter Colleges</span>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="text-xs text-brand-gray hover:text-brand-dark font-bold"
                >
                  Close ✕
                </button>
              </div>
              <CollegeFilters
                filters={filters}
                onFilterChange={handleFilterChange}
                onReset={handleResetFilters}
              />
              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => setMobileFilterOpen(false)}
              >
                Apply Filters
              </Button>
            </div>
          </div>
        )}

        {/* College Results Content */}
        <main className="lg:col-span-9 space-y-6">
          {loading ? (
            <div className="py-20 text-center text-brand-gray">
              <div className="w-8 h-8 border-2 border-brand-teal border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <span>Loading verified colleges...</span>
            </div>
          ) : colleges.length === 0 ? (
            <div className="border border-brand-border bg-white rounded p-12 text-center space-y-4">
              <h3 className="text-lg font-bold text-brand-dark">No colleges matched your filters</h3>
              <p className="text-xs sm:text-sm text-brand-gray max-w-md mx-auto">
                Try widening your fee bracket, switching locations, or resetting your filter criteria.
              </p>
              <Button onClick={handleResetFilters} variant="outline" size="sm">
                Reset All Filters
              </Button>
            </div>
          ) : (
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                  : 'space-y-4'
              }
            >
              {colleges.map((college) => (
                <CollegeCard key={college.id} college={college} viewMode={viewMode} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
