'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MapPin, Star, ArrowRight, Check, Plus } from 'lucide-react';
import Button from '../common/Button';
import { useCompare } from '../comparison/CompareContext';
import { formatPackage } from '@/lib/utils/formatters';

const FALLBACK_IMAGE = '/images/colleges/campus-fallback.jpg';

export default function CollegeCard({ college, viewMode = 'grid' }) {
  const { isSelected, addCollege, removeCollege } = useCompare();
  const selected = isSelected(college.id);
  const [imgSrc, setImgSrc] = useState(college.coverImage || FALLBACK_IMAGE);

  useEffect(() => {
    setImgSrc(college.coverImage || FALLBACK_IMAGE);
  }, [college.coverImage]);

  const handleImageError = () => {
    if (imgSrc !== FALLBACK_IMAGE) {
      setImgSrc(FALLBACK_IMAGE);
    }
  };

  const handleToggleCompare = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (selected) {
      removeCollege(college.id);
    } else {
      addCollege(college);
    }
  };

  if (viewMode === 'list') {
    return (
      <div className="group border border-brand-border bg-white rounded hover:border-brand-teal transition-all duration-200 overflow-hidden flex flex-col md:flex-row">
        {/* Thumbnail */}
        <div className="relative md:w-72 md:shrink-0 h-48 md:h-auto overflow-hidden bg-gray-100">
          <img
            src={imgSrc}
            alt={college.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={handleImageError}
          />
          <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
            {college.nirfRanking && (
              <span className="bg-brand-black/85 text-white text-[11px] font-bold px-2 py-0.5 rounded-sm">
                NIRF #{college.nirfRanking}
              </span>
            )}
            <span className="bg-brand-teal text-white text-[11px] font-bold px-2 py-0.5 rounded-sm">
              {college.type.split(' ')[0]}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-brand-gray mb-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                  <span>{college.city}, {college.state}</span>
                  <span>•</span>
                  <span>Est. {college.establishedYear}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-brand-dark group-hover:text-brand-teal transition-colors">
                  <Link href={`/college/${college.slug}`}>
                    {college.name}
                  </Link>
                </h3>
              </div>
              <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-2 py-1 rounded-sm text-xs font-bold text-amber-900 shrink-0">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                <span>{college.rating}</span>
              </div>
            </div>

            <p className="mt-2 text-xs sm:text-sm text-brand-gray line-clamp-2">
              {college.description}
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 pt-3 border-t border-brand-border/60 text-xs">
              <div>
                <span className="text-brand-gray block text-[11px]">Average Package</span>
                <span className="font-bold text-brand-dark text-sm text-emerald-700">
                  {formatPackage(college.averagePackage)}
                </span>
              </div>
              <div>
                <span className="text-brand-gray block text-[11px]">Annual Fees</span>
                <span className="font-bold text-brand-dark text-sm">
                  {college.feesRange.split('-')[0]}
                </span>
              </div>
              <div className="hidden sm:block">
                <span className="text-brand-gray block text-[11px]">Accreditation</span>
                <span className="font-semibold text-brand-dark">
                  {college.accreditation.split(',')[0]}
                </span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-5 pt-3 border-t border-brand-border/60 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={handleToggleCompare}
              className={`text-xs font-semibold px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 border ${
                selected
                  ? 'bg-brand-teal text-white border-brand-teal'
                  : 'bg-white text-brand-dark border-brand-border hover:border-brand-teal'
              }`}
            >
              {selected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
              <span>{selected ? 'Added to Compare' : 'Add to Compare'}</span>
            </button>

            <div className="flex items-center gap-2">
              <Link
                href={`/college/${college.slug}`}
                className="text-xs font-semibold text-brand-teal hover:text-brand-teal-dark flex items-center gap-1 px-3 py-1.5"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Button
                href={`/college/${college.slug}#enquire`}
                variant="primary"
                size="sm"
              >
                Admission Help
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid View (Default)
  return (
    <article aria-label={college.name} className="group border border-brand-border bg-white rounded hover:border-brand-teal hover:shadow-subtle transition-all duration-200 overflow-hidden flex flex-col justify-between">
      <div>
        {/* Cover Photo */}
        <div className="relative h-44 w-full overflow-hidden bg-gray-100">
          <img
            src={imgSrc}
            alt={`${college.name} campus building`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
            {college.nirfRanking && (
              <span className="bg-brand-black/85 text-white text-[11px] font-bold px-2 py-0.5 rounded-sm">
                NIRF #{college.nirfRanking}
              </span>
            )}
            <span className="bg-brand-teal text-white text-[11px] font-bold px-2 py-0.5 rounded-sm">
              {college.city}
            </span>
          </div>
          <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 bg-white/95 px-2 py-0.5 rounded-sm text-xs font-bold text-brand-dark">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span>{college.rating}</span>
          </div>
        </div>

        {/* Info */}
        <div className="p-4 sm:p-5">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-gray mb-1">
            {college.type.split('/')[0]} • Est. {college.establishedYear}
          </div>
          <h3 className="text-base font-bold text-brand-dark group-hover:text-brand-teal transition-colors line-clamp-1 leading-snug">
            <Link href={`/college/${college.slug}`}>
              {college.name}
            </Link>
          </h3>
          <div className="flex items-center gap-1 text-xs text-brand-gray mt-1 mb-3">
            <MapPin className="w-3.5 h-3.5 text-brand-teal shrink-0" />
            <span>{college.city}, {college.state}</span>
          </div>

          {/* Key Placement & Fees Grid */}
          <div className="grid grid-cols-2 gap-2 p-2.5 bg-brand-teal-subtle border border-brand-border/60 rounded-sm text-xs mb-3">
            <div>
              <span className="text-[11px] text-brand-gray block">Avg. Package</span>
              <span className="font-bold text-brand-dark text-sm text-emerald-700">
                {formatPackage(college.averagePackage)}
              </span>
            </div>
            <div>
              <span className="text-[11px] text-brand-gray block">Highest CTC</span>
              <span className="font-bold text-brand-dark text-sm">
                {formatPackage(college.highestPackage)}
              </span>
            </div>
          </div>

          {/* Stream Badges */}
          <div className="flex flex-wrap gap-1 mb-3">
            {college.stream.slice(0, 3).map((st, i) => (
              <span
                key={i}
                className="text-[11px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded-sm font-medium"
              >
                {st}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTAs */}
      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 border-t border-brand-border/50 flex items-center justify-between gap-2 mt-auto">
        <button
          onClick={handleToggleCompare}
          className={`text-xs font-semibold px-2.5 py-2 rounded transition-colors flex items-center gap-1 border ${
            selected
              ? 'bg-brand-teal text-white border-brand-teal'
              : 'bg-white text-brand-dark border-brand-border hover:border-brand-teal'
          }`}
          title="Add to side-by-side comparison"
        >
          {selected ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
          <span>{selected ? 'Added' : 'Compare'}</span>
        </button>

        <Link
          href={`/college/${college.slug}`}
          className="text-xs font-semibold bg-brand-teal text-white hover:bg-brand-teal-dark px-3.5 py-2 rounded transition-colors flex items-center gap-1"
        >
          <span>View College</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
