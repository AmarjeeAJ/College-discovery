'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, X, ArrowRight, BookOpen, Clock, Calendar, User, Tag, Sparkles } from 'lucide-react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Button from '@/components/common/Button';

export default function BlogListClient({ blogs = [] }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories from blogs
  const categories = useMemo(() => {
    const set = new Set();
    blogs.forEach((b) => {
      if (b.category) set.add(b.category);
    });
    return ['All', ...Array.from(set)];
  }, [blogs]);

  // Filtered blogs based on search query and category
  const filteredBlogs = useMemo(() => {
    return blogs.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        post.category.toLowerCase().trim() === selectedCategory.toLowerCase().trim();

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const titleMatch = (post.title || '').toLowerCase().includes(q);
      const excerptMatch = (post.excerpt || '').toLowerCase().includes(q);
      const tagMatch = post.tags && post.tags.some((t) => t.toLowerCase().includes(q));
      const authorMatch = (post.author || '').toLowerCase().includes(q);

      return titleMatch || excerptMatch || tagMatch || authorMatch;
    });
  }, [blogs, selectedCategory, searchQuery]);

  // Featured article is the first article when no search/filter is active
  const featuredPost = useMemo(() => {
    if (selectedCategory === 'All' && !searchQuery.trim() && blogs.length > 0) {
      return blogs[0];
    }
    return null;
  }, [blogs, selectedCategory, searchQuery]);

  const gridPosts = useMemo(() => {
    if (featuredPost) {
      return filteredBlogs.slice(1);
    }
    return filteredBlogs;
  }, [filteredBlogs, featuredPost]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Blog & Articles' }]} />

      {/* Header & Advisory Banner */}
      <header className="border-b border-brand-border pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
              Higher Education Advisory Desk
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight mt-1">
              Education Insights & Admission Counsel
            </h1>
          </div>
          <Button href="/counselling" variant="outline" size="sm" className="self-start sm:self-auto font-semibold">
            Talk to an Advisor
          </Button>
        </div>
        <p className="text-sm sm:text-base text-brand-gray max-w-3xl leading-relaxed">
          Objective, verified analyses authored by educational strategists. Learn how to evaluate NIRF cutoffs, real placement packages, tuition ROI, and counseling procedures for the 2026 academic cycle.
        </p>
      </header>

      {/* Search and Category Filter Bar */}
      <div className="bg-gray-50 border border-brand-border rounded p-4 space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-medium px-3 py-1.5 rounded transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-brand-dark text-white font-semibold'
                    : 'bg-white text-brand-gray hover:text-brand-dark border border-brand-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-3.5 h-3.5 text-brand-gray absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, guides, tags..."
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

      {/* Featured Article Hero (When viewing All and no search) */}
      {featuredPost && (
        <article className="border border-brand-border bg-white rounded overflow-hidden hover:border-brand-teal/80 transition-all duration-200 group grid grid-cols-1 lg:grid-cols-12 shadow-2xs">
          <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-auto overflow-hidden bg-gray-100">
            <img
              src={featuredPost.coverImage}
              alt={featuredPost.title}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/images/colleges/fallback-campus.jpg';
              }}
            />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="bg-brand-teal text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm flex items-center gap-1 shadow-xs">
                <Sparkles className="w-3 h-3 text-amber-300" />
                Featured Guide
              </span>
              <span className="bg-brand-black/85 text-white text-[11px] font-medium px-2 py-0.5 rounded-sm">
                {featuredPost.category}
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3 text-xs text-brand-gray">
                <span className="font-semibold text-brand-dark flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-brand-teal" />
                  {featuredPost.author}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-brand-gray" />
                  {featuredPost.publishedDate}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-brand-gray" />
                  {featuredPost.readTime}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-brand-dark group-hover:text-brand-teal transition-colors leading-snug">
                <Link href={`/blog/${featuredPost.slug}`}>
                  {featuredPost.title}
                </Link>
              </h2>

              <p className="text-xs sm:text-sm text-brand-gray leading-relaxed line-clamp-3 sm:line-clamp-4">
                {featuredPost.excerpt}
              </p>

              {featuredPost.tags && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {featuredPost.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 text-[11px] font-medium px-2 py-0.5 rounded-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between">
              <span className="text-xs text-brand-gray font-medium">
                {featuredPost.authorRole}
              </span>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-teal hover:text-brand-teal-dark transition-colors"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </article>
      )}

      {/* Blog Cards Grid */}
      {filteredBlogs.length === 0 ? (
        <div className="border border-brand-border rounded p-12 bg-white text-center space-y-3">
          <BookOpen className="w-10 h-10 text-brand-gray mx-auto" />
          <h3 className="text-base font-bold text-brand-dark">No Articles Found</h3>
          <p className="text-xs text-brand-gray max-w-sm mx-auto">
            No guides match your search term "{searchQuery}". Try searching with different keywords or reset your filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="text-xs font-semibold text-brand-teal hover:underline"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {gridPosts.map((post) => (
            <article
              key={post.id}
              className="group border border-brand-border bg-white rounded overflow-hidden hover:border-brand-teal hover:shadow-subtle transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="h-52 overflow-hidden bg-gray-100 relative">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/images/colleges/fallback-campus.jpg';
                    }}
                  />
                  <span className="absolute top-3 left-3 bg-brand-black/85 text-white text-[11px] font-bold px-2.5 py-1 rounded-sm shadow-xs">
                    {post.category}
                  </span>
                </div>

                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex flex-wrap items-center gap-2.5 text-xs text-brand-gray">
                    <span className="font-semibold text-brand-dark">{post.author}</span>
                    <span>•</span>
                    <span>{post.publishedDate}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-brand-dark group-hover:text-brand-teal transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-gray leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-5 sm:px-6 pb-5 pt-0 border-t border-brand-border/40 mt-auto space-y-3">
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {post.tags &&
                    post.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-50 border border-gray-200 text-gray-600 text-[11px] px-2 py-0.5 rounded-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-brand-gray">
                    Verified Advisory Guide
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-brand-teal group-hover:text-brand-teal-dark flex items-center gap-1 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Advisory Support Strip */}
      <section className="bg-brand-teal-subtle border border-brand-teal/20 rounded p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-xl">
          <span className="text-[11px] font-bold uppercase tracking-wider text-brand-teal block">
            Personalized Guidance
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-brand-dark">
            Need Expert Help Selecting the Right University in 2026?
          </h3>
          <p className="text-xs sm:text-sm text-brand-gray leading-relaxed">
            Our authorized educational counselors provide unbiased evaluations based on your percentile, budget, and branch preferences. Zero agent fees.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Button href="/counselling" variant="primary" size="md" className="font-semibold">
            Book Free Counselling
          </Button>
          <a
            href="tel:+919358939090"
            className="text-xs font-semibold px-4 py-2 rounded border border-gray-300 bg-white text-brand-dark hover:border-brand-teal transition-colors"
          >
            Call: +91 93589 39090
          </a>
        </div>
      </section>
    </div>
  );
}
