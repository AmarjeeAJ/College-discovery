'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Building2, BookOpen, MapPin } from 'lucide-react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import CollegeCard from '@/components/college/CollegeCard';
import CourseCard from '@/components/course/CourseCard';
import LocationCard from '@/components/location/LocationCard';
import Button from '@/components/common/Button';
import { apiService } from '@/lib/apiService';

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const streamParam = searchParams.get('stream') || '';
  const cityParam = searchParams.get('city') || '';

  const [results, setResults] = useState({
    colleges: [],
    courses: [],
    locations: [],
    exams: [],
    totalCount: 0
  });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    async function executeSearch() {
      setLoading(true);
      const res = await apiService.searchAll(query || streamParam || cityParam || 'engineering');
      setResults(res);
      setLoading(false);
    }
    executeSearch();
  }, [query, streamParam, cityParam]);

  const searchTerms = [
    'B.Tech Colleges in Jaipur',
    'MBA Colleges in Bangalore',
    'Engineering in Delhi',
    'Computer Science Placements',
    'JEE Main Cutoffs',
    'Medical Colleges in India'
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: 'Search Results' }]} />

      {/* Search Header Bar */}
      <div className="border-b border-brand-border pb-6 space-y-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
            Global Search Engine
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
            Search Results for: <span className="text-brand-teal">&quot;{query || streamParam || cityParam || 'All'}&quot;</span>
          </h1>
          <p className="text-xs sm:text-sm text-brand-gray mt-1">
            Found <span className="font-bold text-brand-dark">{results.totalCount || results.colleges.length}</span> matching entities across colleges, courses, and hubs.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 text-xs font-semibold pt-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded transition-colors border ${
              activeTab === 'all'
                ? 'bg-brand-teal text-white border-brand-teal'
                : 'bg-white text-brand-dark border-brand-border hover:border-brand-teal'
            }`}
          >
            All Results ({results.totalCount})
          </button>
          <button
            onClick={() => setActiveTab('colleges')}
            className={`px-3 py-1.5 rounded transition-colors border ${
              activeTab === 'colleges'
                ? 'bg-brand-teal text-white border-brand-teal'
                : 'bg-white text-brand-dark border-brand-border hover:border-brand-teal'
            }`}
          >
            Colleges ({results.colleges.length})
          </button>
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-3 py-1.5 rounded transition-colors border ${
              activeTab === 'courses'
                ? 'bg-brand-teal text-white border-brand-teal'
                : 'bg-white text-brand-dark border-brand-border hover:border-brand-teal'
            }`}
          >
            Courses ({results.courses.length})
          </button>
          <button
            onClick={() => setActiveTab('locations')}
            className={`px-3 py-1.5 rounded transition-colors border ${
              activeTab === 'locations'
                ? 'bg-brand-teal text-white border-brand-teal'
                : 'bg-white text-brand-dark border-brand-border hover:border-brand-teal'
            }`}
          >
            Locations ({results.locations.length})
          </button>
        </div>
      </div>

      {/* Results Rendering */}
      {loading ? (
        <div className="py-24 text-center text-brand-gray">
          <div className="w-8 h-8 border-2 border-brand-teal border-t-transparent rounded-full animate-spin mx-auto mb-2" />
          <span>Searching institutions...</span>
        </div>
      ) : results.totalCount === 0 && results.colleges.length === 0 ? (
        <div className="border border-brand-border bg-white rounded p-12 text-center space-y-4 max-w-xl mx-auto">
          <h3 className="text-lg font-bold text-brand-dark">No exact matches found</h3>
          <p className="text-xs sm:text-sm text-brand-gray">
            Try searching with broader keywords like &quot;B.Tech&quot;, &quot;Jaipur&quot;, &quot;Delhi&quot;, &quot;Engineering&quot; or explore our universal college directory.
          </p>
          <Button href="/colleges" variant="primary" size="md">
            Browse All Colleges
          </Button>
        </div>
      ) : (
        <div className="space-y-10">
          {/* Matched Colleges */}
          {(activeTab === 'all' || activeTab === 'colleges') && results.colleges.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-brand-dark flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-brand-teal" />
                  <span>Matching Colleges ({results.colleges.length})</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.colleges.map((col) => (
                  <CollegeCard key={col.id} college={col} />
                ))}
              </div>
            </section>
          )}

          {/* Matched Courses */}
          {(activeTab === 'all' || activeTab === 'courses') && results.courses.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-brand-dark flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-brand-teal" />
                  <span>Matching Courses ({results.courses.length})</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.courses.map((cr) => (
                  <CourseCard key={cr.id} course={cr} />
                ))}
              </div>
            </section>
          )}

          {/* Matched Locations */}
          {(activeTab === 'all' || activeTab === 'locations') && results.locations.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-brand-dark flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-teal" />
                  <span>Matching Study Locations ({results.locations.length})</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {results.locations.map((l) => (
                  <LocationCard key={l.id} location={l} />
                ))}
              </div>
            </section>
          )}
        </div>
      )}

      {/* Suggested Searches Footer */}
      <div className="pt-8 border-t border-brand-border space-y-2">
        <span className="text-xs font-semibold text-brand-dark block">
          Related Searches:
        </span>
        <div className="flex flex-wrap gap-2 text-xs">
          {searchTerms.map((term, i) => (
            <Link
              key={i}
              href={`/search?q=${encodeURIComponent(term)}`}
              className="bg-gray-50 border border-brand-border px-3 py-1 rounded hover:border-brand-teal hover:text-brand-teal transition-colors"
            >
              {term}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SearchResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center text-brand-gray">
          <div className="w-8 h-8 border-2 border-brand-teal border-t-transparent rounded-full animate-spin mx-auto mb-2" />
          <span>Loading search parameters...</span>
        </div>
      }
    >
      <SearchResultsContent />
    </Suspense>
  );
}
