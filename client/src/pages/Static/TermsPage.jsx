import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-xs sm:text-sm text-brand-gray leading-relaxed">
      <SEO
        title="Terms & Conditions: Educational Information & Counseling Advisory"
        description="Review the terms and conditions governing the use of College Leadership college discovery portal and counseling services."
        canonical="https://theshineeducation.com/terms"
      />

      <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

      <header className="border-b border-brand-border pb-6 space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
          Terms & Conditions
        </h1>
        <p className="text-xs text-brand-gray">
          Effective Date: March 2026
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-brand-dark">1. Acceptance of Terms</h2>
        <p>
          By accessing or using the College Leadership platform, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-brand-dark">2. Informational & Advisory Purpose</h2>
        <p>
          All institutional information, fee structures, cutoff estimates, and placement statistics published on this portal are compiled from official NIRF submissions, university public disclosures, and audited annual accounts. While every effort is made to maintain complete accuracy, fee structures and seat matrices are subject to official university amendments without prior notice.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-brand-dark">3. Educational Counselling Disclaimer</h2>
        <p>
          Our counseling desk provides objective advice, strategic seat shortlisting, and application guidance. Admission decisions, seat allotments, and scholarship awards remain solely under the jurisdiction of the respective universities and centralized admission boards (e.g., JoSAA, CSAB, MCC, state counselling authorities).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-brand-dark">4. Intellectual Property</h2>
        <p>
          The portal layout, proprietary comparison matrix, editorial guides, and brand trademarks are the intellectual property of College Leadership. Unauthorized scraping or commercial duplication without prior written consent is strictly prohibited.
        </p>
      </section>
    </div>
  );
}
