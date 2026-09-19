'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Button from '@/components/common/Button';
import AdmissionEnquiryForm from '@/components/forms/AdmissionEnquiryForm';
import { blogsData } from '@/lib/data/blogs';

export default function BlogDetailPage({ params }) {
  const routeParams = useParams();
  const slug = routeParams?.slug || params?.slug || '';

  const post = useMemo(() => {
    const target = (slug || '').toLowerCase().trim();
    return blogsData.find((b) => b.slug.toLowerCase() === target) || blogsData[0];
  }, [slug]);

  const relatedPosts = useMemo(() => {
    return blogsData.filter((b) => b.slug !== slug).slice(0, 2);
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl py-20 px-4 text-center space-y-4">
        <h2 className="text-2xl font-bold text-brand-dark">Article Not Found</h2>
        <Button href="/blog" variant="primary">
          Back to Blog
        </Button>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs
        items={[
          { label: 'Education Blog', link: '/blog' },
          { label: post.title }
        ]}
      />

      {/* Header */}
      <header className="max-w-4xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-teal-light text-brand-teal-dark rounded text-xs font-semibold">
          <span>{post.category}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-xs sm:text-sm text-brand-gray pt-2 border-b border-brand-border/60 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-brand-teal text-white flex items-center justify-center font-bold text-xs">
              {post.author[0]}
            </div>
            <div>
              <span className="font-bold text-brand-dark block">{post.author}</span>
              <span className="text-[11px] text-gray-500">{post.authorRole}</span>
            </div>
          </div>
          <span>•</span>
          <span>Published on {post.publishedDate}</span>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-5xl h-64 sm:h-96 rounded overflow-hidden border border-brand-border">
        <img
          src={post.coverImage}
          alt={post.title}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/images/colleges/campus-fallback.jpg';
          }}
        />
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Editorial Text */}
        <main className="lg:col-span-8 space-y-6 text-sm sm:text-base text-brand-gray leading-relaxed">
          {/* Table of Contents Box */}
          <div className="border border-brand-border bg-brand-teal-subtle rounded p-5 text-xs text-brand-dark space-y-2">
            <span className="font-bold uppercase tracking-wider text-brand-teal block text-[11px]">
              Table of Contents
            </span>
            <ul className="space-y-1 list-disc list-inside text-brand-gray">
              <li>Scrutinize Median Packages Instead of Outlier Packages</li>
              <li>Verify AICTE and NBA Accreditation Standards</li>
              <li>Analyze NIRF Teaching, Learning & Resources (TLR)</li>
              <li>Evaluate Industry Location Advantage</li>
              <li>Review Coding Culture and Student Societies</li>
              <li>Calculate True ROI (Return on Investment)</li>
            </ul>
          </div>

          {/* Formatted Markdown Content */}
          <div className="prose prose-brand max-w-none space-y-4">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-xl font-bold text-brand-dark pt-4 border-t border-brand-border/60">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.trim().startsWith('- ')) {
                const items = paragraph.split('\n');
                return (
                  <ul key={idx} className="space-y-1.5 list-disc list-inside text-brand-gray text-xs sm:text-sm pl-2">
                    {items.map((it, i) => (
                      <li key={i}>{it.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={idx} className="text-xs sm:text-sm leading-relaxed text-brand-dark">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-brand-border flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-brand-dark">Tags:</span>
            {post.tags.map((tag, i) => (
              <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded">
                #{tag}
              </span>
            ))}
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="pt-8 border-t border-brand-border space-y-4">
              <h3 className="text-lg font-bold text-brand-dark">Related Articles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/blog/${rel.slug}`}
                    className="border border-brand-border rounded p-4 hover:border-brand-teal transition-colors block space-y-1"
                  >
                    <span className="text-[11px] font-semibold text-brand-teal uppercase">{rel.category}</span>
                    <h4 className="font-bold text-xs sm:text-sm text-brand-dark line-clamp-2">{rel.title}</h4>
                    <span className="text-[11px] text-gray-400 block">{rel.readTime}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </main>

        {/* Sidebar */}
        <aside className="lg:col-span-4 sticky top-24 space-y-6">
          <AdmissionEnquiryForm />
        </aside>
      </div>
    </article>
  );
}
