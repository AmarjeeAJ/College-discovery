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
            Executive Leadership & Advisory Desk
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark">
            Meet the Leadership Team
          </h2>
          <p className="text-xs sm:text-sm text-brand-gray mt-1 max-w-2xl">
            Passionate educationists and strategists dedicated to making higher education transparent, accessible, and outcome-oriented.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "DHEERAJ K.",
              role: "Founder & CEO @ College Leadership",
              exp: "Executive MBA | Educational Discovery Strategist",
              image: "/images/team/dheeraj-k.jpg",
              bio: "Visionary founder steering College Leadership to transform higher education discovery, audited fee transparency, and verified 1-on-1 admission counselling across India."
            },
            {
              name: "Jahnvi Mehta",
              role: "Managing Director – College Leadership",
              exp: "Driving Growth, Strategic Alliances & Partnerships",
              image: "/images/team/jahnvi-mehta.jpg",
              bio: "Leads institutional growth, university collaborations, direct admission quotas, and student advisory desks across Rajasthan, Delhi NCR, and national academic hubs."
            },
            {
              name: "Creative & Media Lead",
              role: "Senior Graphic Designer @ College Leadership",
              exp: "Brand Identity, Visual Media & Portal Experience",
              image: "/images/team/designer.jpg",
              bio: "Spearheads the digital UI design, verified college publication guides, multimedia student resources, and brand experience across all College Leadership platforms."
            }
          ].map((member, idx) => (
            <div key={idx} className="border border-brand-border bg-white rounded p-6 space-y-3 hover:border-brand-teal hover:shadow-subtle transition-all">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-teal shrink-0 shadow-sm bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-base text-brand-dark leading-tight">{member.name}</h3>
                  <div className="text-xs text-brand-teal font-semibold mt-0.5">{member.role}</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">{member.exp}</div>
                </div>
              </div>
              <p className="text-xs text-brand-gray leading-relaxed pt-3 border-t border-gray-100">
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
