import { CheckCircle } from 'lucide-react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Button from '@/components/common/Button';

export const metadata = {
  title: 'About Us: Educational Discovery & Student Advisory | College Discovery',
  description: 'Learn about our mission to bring transparency, verified fee structures, and unbiased counselling to Indian higher education admissions.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: 'About Us' }]} />

      <header className="border-b border-brand-border pb-8 space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
          Our Philosophy
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight">
          About College Leadership
        </h1>
        <p className="text-sm sm:text-base text-brand-gray max-w-3xl leading-relaxed">
          We are an educational consultancy and college discovery platform established to restore transparency, data accuracy, and professional integrity to higher education admissions in India.
        </p>
      </header>

      {/* Editorial Mission & Purpose */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-brand-gray leading-relaxed">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-dark">
            Bridging the Information Gap for Indian Students
          </h2>
          <p>
            Every year, millions of Indian students complete their 12th standard or graduation and face an opaque admission landscape. Aggressive marketing telecallers and paid promotional listicles frequently push candidates toward institutions that fail to meet their expectations or provide acceptable return on investment.
          </p>
          <p>
            Our objective is straightforward: to give every student and parent access to verified institutional statistics — including audited median packages, true 4-year tuition schedules, hostel facilities, and accreditation standards — before any admission commitment is made.
          </p>
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-brand-dark font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-teal" />
              <span>Zero commercial bias in ranking audits</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-teal" />
              <span>100% verified NIRF & NBA disclosures</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-teal" />
              <span>Dedicated North India office in Jaipur</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-teal" />
              <span>Free initial shortlisting for students</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="border border-brand-border bg-brand-teal-subtle rounded p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-brand-dark">Our 4 Core Advisory Principles</h3>
            <ul className="space-y-3 text-xs text-brand-gray list-none p-0">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-sm bg-brand-teal text-white flex items-center justify-center font-bold text-[11px] shrink-0">1</span>
                <div>
                  <strong className="text-brand-dark block">Data Over Marketing:</strong>
                  We prioritize official mandate data, NIRF disclosures, and verified alumni accounts over promotional brochures.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-sm bg-brand-teal text-white flex items-center justify-center font-bold text-[11px] shrink-0">2</span>
                <div>
                  <strong className="text-brand-dark block">Realistic ROI Benchmarks:</strong>
                  We compute degree affordability against realistic starting packages rather than one-off international outliers.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-sm bg-brand-teal text-white flex items-center justify-center font-bold text-[11px] shrink-0">3</span>
                <div>
                  <strong className="text-brand-dark block">Student-First Fit:</strong>
                  Every recommendation is tailored to the candidate&apos;s personal academic strengths, financial budget, and career goals.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-sm bg-brand-teal text-white flex items-center justify-center font-bold text-[11px] shrink-0">4</span>
                <div>
                  <strong className="text-brand-dark block">Ethical Counselling:</strong>
                  We never endorse unapproved or non-accredited private degree colleges.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Leadership & Advisory Team */}
      <section className="space-y-6 pt-6 border-t border-brand-border">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
            Our Counselors
          </span>
          <h2 className="text-2xl font-bold text-brand-dark">
            Senior Academic Advisory Desk
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Avijit Sen",
              role: "Lead Educational Strategist & Founder",
              exp: "14+ Years in Higher Education Admissions",
              bio: "Specializes in national engineering admissions, JoSAA/CSAB choice architectures, and ROI optimization for private technical universities."
            },
            {
              name: "Pooja Sharma",
              role: "Senior Admissions Counselor - North India",
              exp: "9+ Years in Rajasthan & NCR Admissions",
              bio: "Expert on Jaipur and Delhi NCR universities, REAP state counselling, and management quotas across B.Tech, MBA, and BCA programs."
            },
            {
              name: "Rohit Mathur",
              role: "Career & Financial Aid Advisor",
              exp: "11+ Years in Student Loan & Scholarship Advisory",
              bio: "Assists students in navigating government merit-cum-means waivers, commercial education loans, and institutional fee concessions."
            }
          ].map((member, idx) => (
            <div key={idx} className="border border-brand-border bg-white rounded p-6 space-y-2">
              <div className="w-12 h-12 rounded bg-brand-teal text-white flex items-center justify-center font-bold text-base mb-3">
                {member.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <h3 className="font-bold text-base text-brand-dark">{member.name}</h3>
              <div className="text-xs text-brand-teal font-semibold">{member.role}</div>
              <div className="text-[11px] text-gray-400">{member.exp}</div>
              <p className="text-xs text-brand-gray leading-relaxed pt-2 border-t border-gray-100">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Action CTA */}
      <section className="border border-brand-border bg-brand-teal-light/40 rounded p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-brand-dark">Have Questions Regarding Admissions?</h3>
          <p className="text-xs text-brand-gray mt-1">Our counselors in Jaipur and Delhi are available for in-person and telephonic consultations.</p>
        </div>
        <Button href="/counselling" variant="primary" size="md" className="shrink-0">
          Book Free Counselling
        </Button>
      </section>
    </div>
  );
}
