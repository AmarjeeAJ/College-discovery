'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  User,
  Share2,
  Check,
  ArrowRight,
  BookOpen,
  PhoneCall,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Bookmark
} from 'lucide-react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Button from '@/components/common/Button';
import AdmissionEnquiryForm from '@/components/forms/AdmissionEnquiryForm';

export default function BlogDetailClient({ post, relatedPosts = [] }) {
  const [copied, setCopied] = useState(false);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl py-24 px-4 text-center space-y-4">
        <h2 className="text-2xl font-bold text-brand-dark">Article Not Found</h2>
        <p className="text-xs text-brand-gray">
          The educational guide you requested could not be located in our published archives.
        </p>
        <Button href="/blog" variant="primary" size="md">
          Back to All Guides
        </Button>
      </div>
    );
  }

  // Extract all headings (lines starting with '### ') from markdown content
  const tableOfContents = post.content
    ? post.content
        .split('\n')
        .filter((line) => line.trim().startsWith('### '))
        .map((line) => {
          const text = line.replace('### ', '').trim();
          const id = text
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-');
          return { text, id };
        })
    : [];

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleScrollToHeading = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Determine appropriate default course for sidebar form
  const getSidebarDefaultCourse = () => {
    const text = (post.title + ' ' + post.category).toLowerCase();
    if (text.includes('b.tech') || text.includes('engineering') || text.includes('cse')) {
      return 'B.Tech / Engineering';
    }
    if (text.includes('mba') || text.includes('management') || text.includes('pgdm')) {
      return 'MBA / Management';
    }
    if (text.includes('neet') || text.includes('medical') || text.includes('mbbs')) {
      return 'MBBS / Medical';
    }
    if (text.includes('law') || text.includes('llb')) {
      return 'Law / LL.B';
    }
    return 'General Admission Enquiry';
  };

  return (
    <article className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs
        items={[
          { label: 'Education Blog', href: '/blog' },
          { label: post.category, href: `/blog` },
          { label: post.title }
        ]}
      />

      {/* Article Header */}
      <header className="max-w-4xl space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-brand-teal text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm">
            {post.category}
          </span>
          <span className="text-xs text-brand-gray flex items-center gap-1 font-medium bg-gray-100 px-2.5 py-1 rounded-sm">
            <Clock className="w-3.5 h-3.5 text-brand-teal" />
            {post.readTime}
          </span>
          <span className="text-xs text-brand-gray flex items-center gap-1 font-medium bg-gray-100 px-2.5 py-1 rounded-sm">
            <Calendar className="w-3.5 h-3.5 text-brand-gray" />
            {post.publishedDate}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
          {post.title}
        </h1>

        <p className="text-sm sm:text-base text-brand-gray leading-relaxed max-w-3xl">
          {post.excerpt}
        </p>

        {/* Author & Share Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-b border-brand-border/60 py-3 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-brand-teal text-white flex items-center justify-center font-bold text-sm">
              {post.author ? post.author[0] : 'C'}
            </div>
            <div>
              <span className="font-bold text-brand-dark block text-xs sm:text-sm">
                {post.author}
              </span>
              <span className="text-[11px] text-brand-gray">
                {post.authorRole || 'Higher Education Specialist'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-gray-300 text-brand-dark hover:border-brand-teal hover:text-brand-teal bg-white font-medium transition-colors text-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-5xl h-64 sm:h-96 rounded overflow-hidden border border-brand-border bg-gray-100 shadow-2xs">
        <img
          src={post.coverImage}
          alt={post.title}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/images/colleges/fallback-campus.jpg';
          }}
        />
      </div>

      {/* Main Grid: Content + Sticky Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Main Editorial Text */}
        <main className="lg:col-span-8 space-y-8">
          {/* Dynamic Table of Contents (Parsed from headings) */}
          {tableOfContents.length > 0 && (
            <div className="border border-brand-border bg-brand-teal-subtle rounded p-5 text-xs text-brand-dark space-y-2.5">
              <span className="font-bold uppercase tracking-wider text-brand-teal block text-[11px] flex items-center gap-1.5">
                <Bookmark className="w-3.5 h-3.5 text-brand-teal" />
                Table of Contents & Quick Navigation
              </span>
              <ul className="space-y-1.5 text-brand-gray pl-1">
                {tableOfContents.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-brand-teal font-bold text-[11px] shrink-0 mt-0.5">•</span>
                    <button
                      type="button"
                      onClick={() => handleScrollToHeading(item.id)}
                      className="text-left text-brand-dark hover:text-brand-teal hover:underline font-medium leading-relaxed"
                    >
                      {item.text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Formatted Markdown Content */}
          <div className="space-y-6">
            {post.content.split('\n\n').map((paragraph, idx) => {
              const trimmed = paragraph.trim();

              // Heading 3
              if (trimmed.startsWith('### ')) {
                const titleText = trimmed.replace('### ', '');
                const headingId = titleText
                  .toLowerCase()
                  .replace(/[^\w\s-]/g, '')
                  .replace(/\s+/g, '-');
                return (
                  <div key={idx} id={headingId} className="pt-6 border-t border-brand-border/60 scroll-mt-24 space-y-2">
                    <h2 className="text-lg sm:text-xl font-bold text-brand-dark flex items-center gap-2">
                      <span className="w-1.5 h-5 bg-brand-teal rounded-sm" />
                      <span>{titleText}</span>
                    </h2>
                  </div>
                );
              }

              // Unordered List
              if (trimmed.startsWith('- ')) {
                const items = trimmed.split('\n');
                return (
                  <div key={idx} className="bg-gray-50/70 border border-gray-200/70 rounded p-4 text-xs sm:text-sm">
                    <ul className="space-y-2">
                      {items.map((it, i) => (
                        <li key={i} className="flex items-start gap-2 text-brand-dark leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                          <span>{it.replace('- ', '')}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }

              // Standard Paragraph
              return (
                <p key={idx} className="text-xs sm:text-sm text-brand-gray leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="pt-6 border-t border-brand-border flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-brand-dark">Related Topics:</span>
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-2.5 py-1 rounded transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="pt-8 border-t border-brand-border space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-brand-dark">More Advisory Guides</h3>
                <Link href="/blog" className="text-xs font-semibold text-brand-teal hover:underline flex items-center gap-1">
                  <span>View All Articles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/blog/${rel.slug}`}
                    className="border border-brand-border rounded p-4 hover:border-brand-teal transition-all bg-white hover:shadow-subtle block space-y-2 group"
                  >
                    <span className="text-[11px] font-bold text-brand-teal uppercase tracking-wider block">
                      {rel.category}
                    </span>
                    <h4 className="font-bold text-xs sm:text-sm text-brand-dark group-hover:text-brand-teal transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                    <span className="text-[11px] text-gray-400 block">{rel.readTime}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </main>

        {/* Sticky Sidebar: Lead Capture + Direct Advisor Helpline */}
        <aside className="lg:col-span-4 sticky top-28 space-y-6">
          <AdmissionEnquiryForm defaultCourse={getSidebarDefaultCourse()} />

          <div className="border border-brand-border bg-white rounded p-5 space-y-3 text-xs shadow-2xs">
            <div className="flex items-center gap-2 font-bold text-brand-dark">
              <PhoneCall className="w-4 h-4 text-brand-teal" />
              <span>Free 1-on-1 Counseling Desk</span>
            </div>
            <p className="text-brand-gray leading-relaxed">
              Have specific questions about category cutoffs, management quota fees, or college choice filling for the 2026 session?
            </p>
            <a
              href="tel:+919358939090"
              className="block text-center font-bold text-brand-teal-dark bg-brand-teal-light py-2 rounded border border-brand-teal/30 hover:bg-brand-teal hover:text-white transition-colors"
            >
              Call Counselor: +91 93589 39090
            </a>
          </div>
        </aside>
      </div>
    </article>
  );
}
