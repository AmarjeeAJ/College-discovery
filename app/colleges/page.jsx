import { Suspense } from 'react';
import CollegesDirectoryClient from '@/components/college/CollegesDirectoryClient';
import { collegesData } from '@/lib/data/colleges';

export const metadata = {
  title: 'Top Colleges & Universities in India 2026: NIRF Rankings, Fees, Cutoffs & Direct Admissions | College Leadership',
  description:
    'Explore 30+ verified premier colleges and universities across India. Compare B.Tech, MBA, Medical, Law courses, 2026 admission eligibility, verified annual fees, cutoffs, and audited placement packages.',
  keywords: [
    'colleges in india',
    'universities in india',
    'top btech colleges',
    'top mba colleges',
    'medical colleges in india',
    'law colleges in india',
    'direct admission 2026',
    'nirf ranking colleges 2026',
    'college fee comparison'
  ],
  alternates: {
    canonical: '/colleges'
  },
  openGraph: {
    title: 'Top Colleges & Universities in India 2026: NIRF Rankings & Fees | College Leadership',
    description:
      'Compare 30+ verified premier colleges and universities across India. Check courses, verified fee structures, NIRF rankings, and placement statistics.',
    url: 'https://collegeleadership.in/colleges',
    siteName: 'College Leadership',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Colleges & Universities in India 2026: NIRF Rankings & Fees',
    description:
      'Compare 30+ verified premier colleges and universities across India. Check courses, verified fee structures, NIRF rankings, and placement statistics.'
  }
};

export default function CollegesPage() {
  // Google Schema.org structured data for Colleges Directory
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://collegeleadership.in/colleges#webpage',
        url: 'https://collegeleadership.in/colleges',
        name: 'Top Colleges and Universities in India 2026 Directory',
        description:
          'Directory of verified higher education institutions in India offering B.Tech, MBA, Medical, Law, and Sciences degrees.',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://collegeleadership.in'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Colleges Directory',
              item: 'https://collegeleadership.in/colleges'
            }
          ]
        },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: collegesData.length,
          itemListElement: collegesData.slice(0, 30).map((college, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            item: {
              '@type': 'CollegeOrUniversity',
              name: college.name,
              url: `https://collegeleadership.in/college/${college.slug}`,
              address: {
                '@type': 'PostalAddress',
                addressLocality: college.city,
                addressRegion: college.state,
                addressCountry: 'IN'
              }
            }
          }))
        }
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do I choose the best college or university in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Consider NIRF rankings, NAAC A/A++ accreditations, verified branch-wise placement packages, faculty-to-student ratio, transparent fee structures, and campus infrastructure.'
            }
          },
          {
            '@type': 'Question',
            name: 'Are direct admissions available in private universities?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, most premier private and state deemed universities offer direct merit-based admission counseling under management quota or institutional entrance tests for qualifying students.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I compare fees and placement packages across multiple institutions?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, College Leadership provides an interactive side-by-side comparison tool to evaluate fees, average packages, cutoffs, and accreditations simultaneously.'
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense
        fallback={
          <div className="py-20 text-center text-sm text-brand-gray">
            Loading directory...
          </div>
        }
      >
        <CollegesDirectoryClient />
      </Suspense>
    </>
  );
}
