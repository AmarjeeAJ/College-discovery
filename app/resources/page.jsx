import Link from 'next/link';
import { FileText, Calculator, Download, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Button from '@/components/common/Button';

export const metadata = {
  title: 'Student Resources, Cutoff Predictors & Downloadable Guides 2026 | College Discovery',
  description: 'Access free higher education tools: college ROI calculators, JoSAA counselling roadmaps, fee directories, and admission checklists.',
  alternates: {
    canonical: '/resources',
  },
};

export default function ResourcesPage() {
  const tools = [
    {
      title: "College Fee & ROI Estimator",
      desc: "Calculate total 4-year degree cost (tuition + hostel + living) and evaluate monthly EMI payback ratios against realistic median salaries.",
      link: "/compare",
      action: "Open Calculator"
    },
    {
      title: "College Comparison Matrix",
      desc: "Select up to 4 colleges to evaluate side-by-side across placements, NIRF parameters, accreditation, and accepted entrance tests.",
      link: "/compare",
      action: "Launch Tool"
    },
    {
      title: "Admissions 2026 Documentation Kit",
      desc: "Complete checklist of affidavits, character certificates, transfer forms, and medical fitness certificates needed for JoSAA/REAP reporting.",
      link: "/admissions",
      action: "View Checklist"
    }
  ];

  const downloadables = [
    { name: "JoSAA & CSAB 2026 Choice Filling Blueprint", size: "PDF • 2.4 MB", desc: "Strategic choice ordering guide for 85+ NITs, IIITs and GFTIs." },
    { name: "Jaipur Engineering Colleges Consolidated Fee Directory", size: "PDF • 1.8 MB", desc: "Detailed breakdown of tuition, bus fees, and hostel mess rates for 25 Jaipur institutes." },
    { name: "Top 50 Indian MBA Colleges ROI & Placement Benchmark Report", size: "PDF • 3.1 MB", desc: "Median salary vs tuition fee audited comparison table." }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: 'Resources' }]} />

      <header className="border-b border-brand-border pb-8 space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
          Advisory Toolkits
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
          Educational Resources & Student Toolkits
        </h1>
        <p className="text-sm sm:text-base text-brand-gray max-w-3xl leading-relaxed">
          Free, downloadable research materials, checklists, and comparison tools to assist students and parents throughout the 2026 college admission journey.
        </p>
      </header>

      {/* Interactive Toolcards */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-brand-dark">
          Interactive Decision-Making Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((t, idx) => (
            <div key={idx} className="border border-brand-border bg-white rounded p-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="w-8 h-8 rounded bg-brand-teal-light text-brand-teal flex items-center justify-center mb-3">
                  <Calculator className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-base text-brand-dark mb-2">{t.title}</h3>
                <p className="text-xs text-brand-gray leading-relaxed">{t.desc}</p>
              </div>
              <div className="pt-3 border-t border-brand-border/60">
                <Button href={t.link} variant="outline" size="sm" icon={ArrowRight} iconPosition="right" className="w-full">
                  {t.action}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Downloadable Reference Guides */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-brand-dark">
          Downloadable Admission Guides & Reports
        </h2>
        <div className="border border-brand-border bg-white rounded divide-y divide-brand-border">
          {downloadables.map((d, i) => (
            <div key={i} className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-brand-teal shrink-0" />
                  <h3 className="font-bold text-sm text-brand-dark">{d.name}</h3>
                </div>
                <p className="text-xs text-brand-gray">{d.desc}</p>
                <span className="text-[11px] font-mono text-gray-400 block">{d.size}</span>
              </div>
              <Link
                href="/counselling"
                className="shrink-0 bg-brand-teal text-white hover:bg-brand-teal-dark px-4 py-2 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Request Download</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
