import { Suspense } from 'react';
import StreamCollegesClient from '@/components/college/StreamCollegesClient';
import { streamMetadata } from '@/lib/data/streamMetadata';
import { collegesData } from '@/lib/data/colleges';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const streamKey = (resolvedParams?.stream || 'btech').toLowerCase();
  const meta = streamMetadata[streamKey] || streamMetadata.btech;

  const title = `${meta.title} | College Leadership`;
  const description = meta.description;

  return {
    title: title,
    description: description,
    keywords: [
      meta.eyebrow,
      meta.h1,
      `${meta.eyebrow} colleges in India`,
      `${streamKey} admission 2026`,
      `${streamKey} fees`,
      `${streamKey} cutoffs 2026`,
      `${streamKey} placement package`,
      'top colleges in india'
    ].filter(Boolean),
    alternates: {
      canonical: `/colleges/${streamKey}`
    },
    openGraph: {
      title: title,
      description: description,
      url: `https://collegeleadership.in/colleges/${streamKey}`,
      siteName: 'College Leadership',
      images: [
        {
          url: meta.heroImage || '/images/colleges/fallback-campus.jpg',
          width: 1200,
          height: 630,
          alt: `${meta.h1} cover`
        }
      ],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [meta.heroImage || '/images/colleges/fallback-campus.jpg']
    }
  };
}

export default async function StreamCollegesPage({ params }) {
  const resolvedParams = await params;
  const streamKey = (resolvedParams?.stream || 'btech').toLowerCase();
  const meta = streamMetadata[streamKey] || streamMetadata.btech;

  // Filter relevant institutions for Schema ItemList
  const target = (meta.streamFilter || streamKey).toLowerCase().replace(/[\.\s-]/g, '');
  const matchedColleges = collegesData.filter((c) => {
    if (target === 'medical') {
      const hasMbbsCourse =
        c.courses &&
        c.courses.some((course) => /mbbs|bachelor of medicine/i.test(course.name));
      const hasMedicalStream =
        c.stream &&
        c.stream.some((s) => s.toLowerCase() === 'medical' || s.toLowerCase() === 'mbbs');
      const isDedicatedMedical = c.type && /medical/i.test(c.type);
      return (
        (hasMbbsCourse || isDedicatedMedical || hasMedicalStream) &&
        ((!c.stream.includes('B.Tech') && !c.stream.includes('MBA')) || hasMbbsCourse)
      );
    }
    if (target === 'btech' || target === 'engineering') {
      return c.stream.some((s) => {
        const norm = s.toLowerCase().replace(/[\.\s-]/g, '');
        return (
          norm === 'engineering' || norm === 'btech' || norm === 'computerscience'
        );
      });
    }
    if (target === 'mba' || target === 'management') {
      const hasMbaCourse =
        c.courses &&
        c.courses.some((course) =>
          /mba|pgdm|master of business administration|post graduate program in management/i.test(
            course.name
          )
        );
      const isDedicatedBschool =
        c.type && /business school|management institute/i.test(c.type);
      const hasMbaStream = c.stream.some((s) => {
        const norm = s.toLowerCase().replace(/[\.\s-]/g, '');
        return norm === 'mba' || norm === 'management' || norm === 'pgdm';
      });
      return hasMbaStream && (hasMbaCourse || isDedicatedBschool);
    }
    if (target === 'law') {
      return c.stream.some((s) => {
        const norm = s.toLowerCase().replace(/[\.\s-]/g, '');
        return norm === 'law' || norm === 'legal';
      });
    }
    if (target === 'universities') {
      return (
        c.type?.toLowerCase().includes('university') ||
        c.type?.toLowerCase().includes('institute of national') ||
        c.stream.some((s) => s.toLowerCase() === 'universities')
      );
    }
    return c.stream.some((s) => {
      const norm = s.toLowerCase().replace(/[\.\s-]/g, '');
      return norm.includes(target) || target.includes(norm);
    });
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `https://collegeleadership.in/colleges/${streamKey}#webpage`,
        url: `https://collegeleadership.in/colleges/${streamKey}`,
        name: meta.title,
        description: meta.description,
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
              name: 'Colleges',
              item: 'https://collegeleadership.in/colleges'
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: meta.eyebrow || meta.h1,
              item: `https://collegeleadership.in/colleges/${streamKey}`
            }
          ]
        },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: matchedColleges.length,
          itemListElement: matchedColleges.slice(0, 25).map((college, idx) => ({
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
      meta.faqs && meta.faqs.length > 0
        ? {
            '@type': 'FAQPage',
            mainEntity: meta.faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a
              }
            }))
          }
        : null
    ].filter(Boolean)
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
            Loading {meta.eyebrow} institutions...
          </div>
        }
      >
        <StreamCollegesClient propStream={streamKey} />
      </Suspense>
    </>
  );
}
