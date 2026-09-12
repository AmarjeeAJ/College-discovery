import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-xs sm:text-sm text-brand-gray leading-relaxed">
      <SEO
        title="Privacy Policy: Student Data Protection & DPDP Act Compliance"
        description="Review how College Leadership protects student personal information, enquiry details, and counseling communications."
        canonical="https://theshineeducation.com/privacy-policy"
      />

      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <header className="border-b border-brand-border pb-6 space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-brand-gray">
          Last Updated: March 2026 • Compliant with the Digital Personal Data Protection (DPDP) Act, 2023
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-brand-dark">1. Commitment to Student Privacy</h2>
        <p>
          At College Leadership ("Company", "we", "our", or "us"), we recognize the sensitivity of educational and career aspirations. We are committed to protecting the privacy of students and parents who interact with our college discovery portal and counseling desk.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-brand-dark">2. Information We Collect</h2>
        <p>
          We collect personal identification details (such as student name, guardian name, email address, mobile phone number, current academic marks, entrance examination percentiles, and preferred study locations) exclusively when submitted through our enquiry forms, comparison tools, or counselling booking desks.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-brand-dark">3. How We Use Collected Data</h2>
        <p>
          Student data is used exclusively to:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Deliver requested college shortlists and eligibility assessments.</li>
          <li>Facilitate scheduled telephonic or in-person guidance sessions with authorized educational counselors.</li>
          <li>Send official college prospectus booklets or fee documentation requested by the user.</li>
          <li>Verify admission eligibility against published university criteria.</li>
        </ul>
        <p className="font-semibold text-brand-dark pt-1">
          We strictly do not sell, lease, or distribute student contact databases to unauthorized third-party commercial spam call centers.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-brand-dark">4. Grievance Redressal</h2>
        <p>
          For any questions, data modification requests, or privacy concerns, you may write to our Data Protection Officer at: <strong>privacy@theshineeducation.com</strong>.
        </p>
      </section>
    </div>
  );
}
