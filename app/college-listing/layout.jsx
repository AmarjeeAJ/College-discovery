export const metadata = {
  title: 'Get Your College Discovered by More Students | College Leadership Partner Network',
  description: 'List your college or university on our verified education platform. Reach students actively searching for engineering, MBA, medical, and law colleges, courses, cutoffs, fees, and admissions.',
  keywords: [
    'list your college',
    'college promotion India',
    'university listing service',
    'higher education student recruitment',
    'college admission lead generation',
    'engineering college promotion',
    'MBA college visibility',
    'student enquiry portal'
  ],
  alternates: {
    canonical: '/college-listing',
  },
  openGraph: {
    title: 'Get Your College Discovered by More Students | College Leadership',
    description: 'List your college on India’s verified education platform. Expand organic search reach, showcase courses & audited placements, and capture high-intent student enquiries.',
    url: 'https://theshineeducation.com/college-listing',
    siteName: 'College Leadership',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function CollegeListingLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Institutional College Listing & Student Discovery Service',
    description: 'List your college on our education platform and reach students actively searching for colleges, courses, admissions, fees and career opportunities.',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'College Leadership',
      url: 'https://theshineeducation.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Malviya Nagar & Tonk Road',
        addressLocality: 'Jaipur',
        addressRegion: 'Rajasthan',
        postalCode: '302017',
        addressCountry: 'IN'
      }
    },
    serviceType: 'Higher Education Digital Visibility & Lead Generation',
    audience: {
      '@type': 'Audience',
      audienceType: 'Universities, Engineering Colleges, B.Tech Colleges, MBA Institutes, Medical Colleges, and Law Schools'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
