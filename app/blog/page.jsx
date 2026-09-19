'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { blogsData } from '@/lib/data/blogs';

export default function BlogListingPage() {
  const [blogs, setBlogs] = useState(blogsData);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Engineering Admissions', 'City Guide', 'Career Guidance', 'Finance & Admissions'];

  const filteredBlogs = selectedCategory === 'All'
    ? blogs
    : blogs.filter((b) => b.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Education Blog' }]} />

      <header className="border-b border-brand-border pb-6 space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
          Advisory Insights Desk
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
          Education Insights & Admission Counsel
        </h1>
        <p className="text-sm sm:text-base text-brand-gray max-w-3xl leading-relaxed">
          Objective, long-form analysis written by higher education strategists to help students and parents make informed career choices.
        </p>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-2 pt-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors border ${
                selectedCategory === cat
                  ? 'bg-brand-teal text-white border-brand-teal'
                  : 'bg-white text-brand-dark border-brand-border hover:border-brand-teal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredBlogs.map((post) => (
          <article
            key={post.id}
            className="group border border-brand-border bg-white rounded overflow-hidden hover:border-brand-teal hover:shadow-subtle transition-all flex flex-col justify-between"
          >
            <div>
              <div className="h-56 overflow-hidden bg-gray-100 relative">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/colleges/campus-fallback.jpg';
                  }}
                />
                <span className="absolute top-3 left-3 bg-brand-black/85 text-white text-[11px] font-bold px-2.5 py-1 rounded-sm">
                  {post.category}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-xs text-brand-gray">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.publishedDate}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-brand-dark group-hover:text-brand-teal transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-brand-gray leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-0 border-t border-brand-border/40 mt-auto flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {post.tags.slice(0, 2).map((tag, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-700 text-[11px] px-2 py-0.5 rounded-sm">
                    #{tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="text-xs font-semibold text-brand-teal hover:text-brand-teal-dark flex items-center gap-1"
              >
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
