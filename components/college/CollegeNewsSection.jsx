'use client';

import { useState, useMemo } from 'react';
import { Calendar, Bell, Search, X, AlertCircle, ArrowRight, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import Badge from '@/components/common/Badge';

export default function CollegeNewsSection({ news = [], collegeName = '', onEnquireAboutNotice }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract categories present in this college's news
  const availableCategories = useMemo(() => {
    if (!news || news.length === 0) return [];
    const set = new Set();
    news.forEach((item) => {
      if (item.category) set.add(item.category);
    });
    return Array.from(set);
  }, [news]);

  // Filter news based on category and search query
  const filteredNews = useMemo(() => {
    if (!news) return [];
    return news.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const titleMatch = (item.title || '').toLowerCase().includes(q);
      const summaryMatch = (item.summary || '').toLowerCase().includes(q);
      const catMatch = (item.category || '').toLowerCase().includes(q);

      return titleMatch || summaryMatch || catMatch;
    });
  }, [news, selectedCategory, searchQuery]);

  if (!news || news.length === 0) {
    return (
      <div className="border border-brand-border rounded p-8 bg-white text-center space-y-3">
        <Bell className="w-8 h-8 text-brand-gray mx-auto" />
        <h3 className="text-base font-bold text-brand-dark">No Active Notices at This Time</h3>
        <p className="text-xs text-brand-gray max-w-md mx-auto">
          All upcoming admission deadlines, counselling rounds, and recruitment reports for {collegeName} will be published directly here.
        </p>
      </div>
    );
  }

  const getCategoryBadgeVariant = (category) => {
    const cat = (category || '').toLowerCase();
    if (cat.includes('admission') || cat.includes('counselling')) return 'teal';
    if (cat.includes('placement') || cat.includes('recruitment')) return 'success';
    if (cat.includes('exam') || cat.includes('cutoff')) return 'warning';
    return 'outline';
  };

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2">
              <Bell className="w-5 h-5 text-brand-teal" />
              <span>Official Notices, Circulars & Institutional News</span>
            </h2>
            <p className="text-xs text-brand-gray mt-1">
              Live updates regarding admission rounds, counselling dates, seat vacancy, placement drives, and academic circulars.
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 bg-brand-teal-light text-brand-teal-dark border border-brand-teal/20 rounded self-start sm:self-auto shrink-0">
            {news.length} Verified Notices
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-gray-50 border border-brand-border rounded p-3.5 space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => setSelectedCategory('All')}
              className={`text-xs font-medium px-3 py-1.5 rounded transition-colors ${
                selectedCategory === 'All'
                  ? 'bg-brand-dark text-white font-semibold'
                  : 'bg-white text-brand-gray hover:text-brand-dark border border-brand-border'
              }`}
            >
              All Notices ({news.length})
            </button>
            {availableCategories.map((cat) => {
              const count = news.filter((n) => n.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-medium px-3 py-1.5 rounded transition-colors ${
                    selectedCategory === cat
                      ? 'bg-brand-dark text-white font-semibold'
                      : 'bg-white text-brand-gray hover:text-brand-dark border border-brand-border'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-brand-gray absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search circulars..."
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

      {/* Notices List */}
      {filteredNews.length === 0 ? (
        <div className="border border-brand-border rounded p-8 bg-white text-center space-y-3">
          <FileText className="w-8 h-8 text-brand-gray mx-auto" />
          <h4 className="text-sm font-bold text-brand-dark">No notices match your criteria</h4>
          <p className="text-xs text-brand-gray">
            Try adjusting your search terms or selecting another category filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="text-xs font-semibold text-brand-teal hover:underline"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredNews.map((item, idx) => {
            const isUrgent = Boolean(item.isUrgent);
            return (
              <div
                key={item.id || idx}
                className={`border rounded p-4 sm:p-5 bg-white transition-all duration-150 space-y-3 ${
                  isUrgent
                    ? 'border-amber-300/80 bg-gradient-to-r from-amber-50/20 to-white shadow-sm'
                    : 'border-brand-border hover:border-brand-teal/60'
                }`}
              >
                {/* Meta Row: Date, Category, Urgent Flag */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-brand-border/60 pb-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant={getCategoryBadgeVariant(item.category)} size="xs">
                      {item.category || 'General Notice'}
                    </Badge>

                    {isUrgent && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                        Urgent / Active
                      </span>
                    )}

                    {item.badge && (
                      <span className="text-[11px] text-brand-dark font-medium bg-gray-100 px-2 py-0.5 rounded">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-brand-gray">
                    <Calendar className="w-3.5 h-3.5 text-brand-teal" />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Title & Body */}
                <div className="space-y-2">
                  <h3 className="font-bold text-base text-brand-dark hover:text-brand-teal transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand-gray leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                {/* Footer Action Bar */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-brand-border/40">
                  <span className="text-[11px] text-brand-gray">
                    Published by {collegeName} Administration
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onEnquireAboutNotice && onEnquireAboutNotice(item.title)}
                      className="text-xs font-semibold text-brand-teal hover:text-brand-teal-dark hover:underline flex items-center gap-1"
                    >
                      <span>Need help with this?</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    {item.link && (
                      <a
                        href={item.link}
                        className="text-xs font-semibold px-2.5 py-1 bg-gray-100 hover:bg-gray-200 text-brand-dark rounded transition-colors flex items-center gap-1"
                      >
                        <span>Details</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
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
