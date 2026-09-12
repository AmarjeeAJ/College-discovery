import Breadcrumbs from '@/components/common/Breadcrumbs';
import { examsData } from '@/lib/data/exams';

export const metadata = {
  title: 'Entrance Examinations 2026: Schedules & Patterns | College Discovery',
  description: 'Comprehensive breakdown of national testing schedules, syllabus structures, eligibility mandates, and top institutes accepting competitive scorecards.',
  alternates: {
    canonical: '/exams',
  },
};

export default function ExamsPage() {
  const exams = examsData;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Entrance Exams' }]} />

      <header className="border-b border-brand-border pb-8 space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
          National &amp; State Test Directory
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
          Entrance Examinations 2026: Schedules &amp; Patterns
        </h1>
        <p className="text-sm sm:text-base text-brand-gray max-w-3xl leading-relaxed">
          Comprehensive breakdown of national testing schedules, syllabus structures, eligibility mandates, and top institutes accepting competitive scorecards.
        </p>
      </header>

      <div className="space-y-8">
        {exams.map((exam) => (
          <article
            key={exam.id}
            className="border border-brand-border bg-white rounded p-6 sm:p-8 space-y-6 shadow-subtle"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-brand-border pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-teal mb-1">
                  <span>{exam.level}</span>
                  <span>•</span>
                  <span>{exam.stream}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-brand-dark">
                  {exam.name}
                </h2>
                <span className="text-xs text-brand-gray">
                  Conducted by: {exam.conductingBody} • Frequency: {exam.frequency}
                </span>
              </div>

              <div className="text-right text-xs bg-brand-teal-light/50 border border-brand-teal/20 px-3 py-2 rounded">
                <span className="text-brand-gray block text-[11px]">Total Registrations</span>
                <span className="font-bold text-brand-dark text-sm">{exam.totalApplicants}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-brand-gray leading-relaxed">
              {exam.overview}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="bg-gray-50 border border-gray-200 p-4 rounded space-y-2">
                <h3 className="font-bold text-sm text-brand-dark">
                  Exam Pattern &amp; Marking Structure
                </h3>
                <ul className="space-y-1.5 text-brand-gray list-disc list-inside">
                  {exam.examPattern.map((pat, idx) => (
                    <li key={idx}>{pat}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-4 rounded space-y-2">
                <h3 className="font-bold text-sm text-brand-dark">
                  Key Participating Colleges
                </h3>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exam.topColleges.map((col, idx) => (
                    <span
                      key={idx}
                      className="bg-white border border-brand-border px-2.5 py-1 rounded text-xs font-medium text-brand-dark"
                    >
                      {col}
                    </span>
                  ))}
                </div>
                <div className="pt-2 text-brand-gray">
                  <span className="font-semibold text-brand-dark">Eligibility:</span> {exam.eligibility}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
