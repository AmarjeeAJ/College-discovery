import { Suspense } from 'react';
import StreamCollegesClient from '@/components/college/StreamCollegesClient';
import { streamMetadata } from '@/lib/data/streamMetadata';
import { collegesData } from '@/lib/data/colleges';

export const metadata = {
  title:
    'Top Universities in India 2026: NIRF Rankings, UGC Recognition, Fees & Placements | College Leadership',
  description:
    'Explore verified UGC recognized and NAAC A++ accredited Central, State, Deemed, and Private universities in India. Check multidisciplinary B.Tech, MBA, Law, Medical courses, fee structures, cutoffs, and direct admission counselling.',
  keywords: [
    'top universities in india',
    'best universities in india 2026',
    'central universities india',
    'state private universities',
    'deemed to be universities',
    'ugc recognized universities',
    'naac a++ accredited universities',
    'university direct admission 2026',
    'university fee comparison'
  ],
  alternates: {
    canonical: '/universities'
  },
  openGraph: {
    title:
      'Top Universities in India 2026: NIRF Rankings, Fees & Direct Admissions | College Leadership',
    description:
      'Comprehensive guide to UGC recognized Central, State, Deemed, and Private universities in India. Verified courses, fee structures, and placement audits.',
    url: 'https://collegeleadership.in/universities',
    siteName: 'College Leadership',
    images: [
      {
        url: '/images/streams/btech-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Premier Universities in India'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Universities in India 2026: NIRF Rankings & Admissions',
    description:
      'Explore verified UGC recognized Central, State, Deemed, and Private universities in India. Courses, fees, and placements.'
  }
};

export default function UniversitiesIndexPage() {
  const meta = streamMetadata.universities;

  // Filter universities for Schema ItemList
  const universitiesList = collegesData.filter(
    (c) =>
      c.type?.toLowerCase().includes('university') ||
      c.type?.toLowerCase().includes('institute of national') ||
      c.stream.some((s) => s.toLowerCase() === 'universities')
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://collegeleadership.in/universities#webpage',
        url: 'https://collegeleadership.in/universities',
        name: 'Top Universities in India 2026 Directory',
        description:
          'Directory of UGC recognized Central, State, Deemed, and Private universities offering multidisciplinary programs in India.',
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
              name: 'Universities in India',
              item: 'https://collegeleadership.in/universities'
            }
          ]
        },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: universitiesList.length,
          itemListElement: universitiesList.map((uni, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            item: {
              '@type': 'CollegeOrUniversity',
              name: uni.name,
              url: `https://collegeleadership.in/universities/${uni.slug}`,
              address: {
                '@type': 'PostalAddress',
                addressLocality: uni.city,
                addressRegion: uni.state,
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
            name: 'What is the difference between a Deemed University and a State University in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A Deemed-to-be University is granted autonomy under Section 3 of the UGC Act 1956 to formulate its own syllabus, conduct independent examinations, and award degrees. A State University is established by an act of the State Legislature.'
            }
          },
          {
            '@type': 'Question',
            name: 'Are Private Universities in India recognized by UGC?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, legitimate private universities in India are established under State Private University Acts and recognized under Section 2(f) of the UGC Act, with degrees valid for government jobs and international higher education.'
            }
          },
          {
            '@type': 'Question',
            name: 'How do I apply for direct admission in top universities?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Candidates can apply directly through university admission portals or verified counseling partners like College Leadership using Class 12 / graduation merit, CUET scores, or national entrance exams.'
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
            Loading premier universities...
          </div>
        }
      >
        <StreamCollegesClient propStream="universities" />
      </Suspense>
    </>
  );
}
