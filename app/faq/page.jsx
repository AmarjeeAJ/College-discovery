'use client';

import { useState, useEffect } from 'react';
import { HelpCircle } from 'lucide-react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Button from '@/components/common/Button';
import { faqsData } from '@/lib/data/faqs';

export default function FAQPage() {
  const [faqs, setFaqs] = useState(faqsData);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'FAQ' }]} />

      <header className="border-b border-brand-border pb-6 space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
          Knowledge Base
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base text-brand-gray max-w-3xl leading-relaxed">
          Clear answers to common questions regarding college shortlisting, fee structures, management quotas, and 1-on-1 guidance sessions.
        </p>

        {/* Category Tabs */}
        {faqs.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-3">
            {faqs.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors border ${
                  activeTab === idx
                    ? 'bg-brand-teal text-white border-brand-teal'
                    : 'bg-white text-brand-dark border-brand-border hover:border-brand-teal'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* FAQ Items */}
      <div className="max-w-4xl space-y-4">
        {faqs.length > 0 && faqs[activeTab]?.items.map((item, i) => (
          <div key={i} className="border border-brand-border bg-white rounded p-5 space-y-2">
            <h2 className="font-bold text-base text-brand-dark flex items-start gap-2.5">
              <HelpCircle className="w-4 h-4 text-brand-teal shrink-0 mt-1" />
              <span>{item.q}</span>
            </h2>
            <p className="text-xs sm:text-sm text-brand-gray pl-6 leading-relaxed">
              {item.a}
            </p>
          </div>
        ))}
      </div>

      {/* Still Have Questions CTA */}
      <div className="border border-brand-border bg-brand-teal-light/30 rounded p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-base text-brand-dark">Still have an unanswered question?</h3>
          <p className="text-xs text-brand-gray mt-1">Our counselors will be glad to address your specific case.</p>
        </div>
        <Button href="/counselling" variant="primary" size="md">
          Talk to a Counselor
        </Button>
      </div>
    </div>
  );
}
