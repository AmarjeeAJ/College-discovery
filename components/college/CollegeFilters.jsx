'use client';

import { Filter, RotateCcw, Search } from 'lucide-react';

export default function CollegeFilters({ filters, onFilterChange, onReset }) {
  const streams = [
    { value: '', label: 'All Streams' },
    { value: 'btech', label: 'B.Tech / B.E.' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'mba', label: 'MBA / Management' },
    { value: 'medical', label: 'Medical (MBBS)' },
    { value: 'law', label: 'Law (BA LLB)' },
    { value: 'computer', label: 'Computer Applications (BCA/MCA)' }
  ];

  const cities = [
    { value: '', label: 'All Cities' },
    { value: 'jaipur', label: 'Jaipur, Rajasthan' },
    { value: 'new delhi', label: 'New Delhi / Delhi NCR' },
    { value: 'bangalore', label: 'Bangalore, Karnataka' },
    { value: 'mumbai', label: 'Mumbai, Maharashtra' },
    { value: 'pune', label: 'Pune, Maharashtra' },
    { value: 'ahmedabad', label: 'Ahmedabad, Gujarat' }
  ];

  const collegeTypes = [
    { value: '', label: 'All Ownership Types' },
    { value: 'public', label: 'Government / Public (IIT/NIT/AIIMS)' },
    { value: 'private', label: 'Private Universities' }
  ];

  const feeBrackets = [
    { value: '', label: 'Any Fee' },
    { value: '100000', label: 'Under ₹1 Lakh / year' },
    { value: '250000', label: 'Under ₹2.5 Lakh / year' },
    { value: '500000', label: 'Under ₹5 Lakh / year' },
    { value: '1500000', label: 'Under ₹15 Lakh / year' }
  ];

  return (
    <div className="bg-white border border-brand-border rounded p-5 space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-brand-border">
        <div className="flex items-center gap-2 font-bold text-sm text-brand-dark">
          <Filter className="w-4 h-4 text-brand-teal" />
          <span>Filter Colleges</span>
        </div>
        <button
          onClick={onReset}
          className="text-xs text-brand-gray hover:text-brand-teal flex items-center gap-1 transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* Search Input */}
      <div>
        <label className="block text-xs font-semibold text-brand-dark mb-1.5">
          Search College Name
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="e.g. MNIT, Manipal, IIT..."
            value={filters.query || ''}
            onChange={(e) => onFilterChange('query', e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none pl-8"
          />
          <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-3" />
        </div>
      </div>

      {/* Stream Filter */}
      <div>
        <label className="block text-xs font-semibold text-brand-dark mb-1.5">
          Discipline / Stream
        </label>
        <select
          value={filters.stream || ''}
          onChange={(e) => onFilterChange('stream', e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none bg-white"
        >
          {streams.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      {/* City Filter */}
      <div>
        <label className="block text-xs font-semibold text-brand-dark mb-1.5">
          Location / City
        </label>
        <select
          value={filters.city || ''}
          onChange={(e) => onFilterChange('city', e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none bg-white"
        >
          {cities.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      {/* Ownership Type */}
      <div>
        <label className="block text-xs font-semibold text-brand-dark mb-1.5">
          Institution Type
        </label>
        <select
          value={filters.type || ''}
          onChange={(e) => onFilterChange('type', e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none bg-white"
        >
          {collegeTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      {/* Max Annual Tuition Fee */}
      <div>
        <label className="block text-xs font-semibold text-brand-dark mb-1.5">
          Max Tuition Fee (Annual)
        </label>
        <select
          value={filters.maxFee || ''}
          onChange={(e) => onFilterChange('maxFee', e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none bg-white"
        >
          {feeBrackets.map((f) => (
            <option key={f.value} value={f.value}>
              {f.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
