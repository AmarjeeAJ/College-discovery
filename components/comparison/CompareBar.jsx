'use client';

import Link from 'next/link';
import { useCompare } from './CompareContext';
import { X, ArrowRight, Scale } from 'lucide-react';
import Button from '../common/Button';

export default function CompareBar() {
  const { selectedColleges, removeCollege, clearCompare } = useCompare();

  if (selectedColleges.length === 0) return null;

  return (
    <aside aria-label="College Comparison Bar" className="fixed bottom-0 left-0 right-0 z-30 bg-brand-black/95 text-white border-t border-brand-teal shadow-2xl backdrop-blur-sm transition-transform duration-200">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Status & Counter */}
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded bg-brand-teal text-white">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-semibold text-white">
                Comparing {selectedColleges.length} of 4 Colleges
              </span>
              <button
                onClick={clearCompare}
                className="block text-[11px] text-gray-400 hover:text-white underline cursor-pointer text-left"
              >
                Clear all
              </button>
            </div>
          </div>

          {/* Selected College Chips */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1">
            {selectedColleges.map((college) => (
              <div
                key={college.id}
                className="flex items-center gap-2 bg-gray-800/90 border border-gray-700 px-2.5 py-1 rounded text-xs shrink-0"
              >
                <span className="font-medium truncate max-w-[130px] sm:max-w-[180px]">
                  {college.shortName || college.name}
                </span>
                <button
                  onClick={() => removeCollege(college.id)}
                  className="text-gray-400 hover:text-white p-0.5 rounded"
                  title="Remove from comparison"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="shrink-0 flex items-center gap-2">
            <Button
              href="/compare"
              variant="primary"
              size="sm"
              icon={ArrowRight}
              iconPosition="right"
              className="bg-brand-teal text-white font-semibold"
            >
              Compare Now
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}
