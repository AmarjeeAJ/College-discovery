import { collegesData } from '@/lib/data/colleges';
import CollegeDetailClient from '@/components/college/CollegeDetailClient';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || '';
  const target = slug.toLowerCase().trim();

  const college = collegesData.find(
    (c) =>
      c.slug.toLowerCase() === target ||
      (c.aliases && c.aliases.some((a) => a.toLowerCase() === target))
  );

  if (!college) {
    return {
      title: 'University Profile Not Found | College Leadership',
      description: 'The requested university profile could not be located in our verified directory.'
    };
  }

  const title =
    college.metaTitle ||
    `${college.name} Admission 2026: University Courses, Fees, Cutoffs & Ranking`;
  const description =
    college.metaDescription ||
    `Explore verified 2026 admission details for ${college.name} (${college.shortName || college.name}), ${college.city}. Check university course fees, UGC approval, eligibility, cutoffs, and placements.`;

  const courseKeywords = (college.courses || []).slice(0, 5).map((c) => `${c.name} fees`);

  return {
    title: title,
    description: description,
    keywords: [
      college.name,
      college.shortName,
      `${college.name} admission 2026`,
      `${college.name} university courses`,
      `${college.shortName} fees`,
      `${college.shortName} placement package`,
      `${college.name} cutoffs`,
      `${college.city} universities`,
      ...(college.stream || []).map((s) => `${s} universities`),
      ...courseKeywords
    ].filter(Boolean),
    openGraph: {
      title: title,
      description: description,
      url: `https://collegeleadership.in/universities/${college.slug}`,
      siteName: 'College Leadership',
      images: [
        {
          url: college.coverImage,
          width: 1200,
          height: 630,
          alt: `${college.name} university campus view`
        }
      ],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [college.coverImage]
    },
    alternates: {
      canonical: `/universities/${college.slug}`
    }
  };
}

export default async function UniversityDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || '';
  const target = slug.toLowerCase().trim();

  const college = collegesData.find(
    (c) =>
      c.slug.toLowerCase() === target ||
      (c.aliases && c.aliases.some((a) => a.toLowerCase() === target))
  );

  // Google Schema.org JSON-LD Structured Data with University & Course Schema
  const jsonLd = college
    ? {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'CollegeOrUniversity',
            '@id': `https://collegeleadership.in/universities/${college.slug}#institution`,
            name: college.name,
            alternateName: college.shortName,
            description: college.description,
            url: `https://collegeleadership.in/universities/${college.slug}`,
            logo: `https://collegeleadership.in${college.logo || '/emblem.png'}`,
            image: `https://collegeleadership.in${college.coverImage}`,
            address: {
              '@type': 'PostalAddress',
              addressLocality: college.city,
              addressRegion: college.state,
              addressCountry: 'IN'
            },
            foundingDate: college.establishedYear ? college.establishedYear.toString() : undefined,
            priceRange: college.feesRange || '₹₹₹',
            aggregateRating: college.rating
              ? {
                  '@type': 'AggregateRating',
                  ratingValue: college.rating,
                  reviewCount: college.reviewsCount || 120,
                  bestRating: '5',
                  worstRating: '1'
                }
              : undefined,
            hasCourse:
              college.courses && college.courses.length > 0
                ? college.courses.map((crs) => ({
                    '@type': 'Course',
                    name: crs.name,
                    description: `${crs.degreeLevel || 'Higher Education'} program in ${crs.department || 'Academic Department'}. Duration: ${crs.duration || 'Full-Time'}. Eligibility: ${crs.eligibility || 'Check institutional norms'}.`,
                    provider: {
                      '@type': 'CollegeOrUniversity',
                      name: college.name
                    },
                    educationalCredentialAwarded: crs.degreeLevel || 'Degree',
                    offers: {
                      '@type': 'Offer',
                      price: crs.annualFee ? crs.annualFee.replace(/[^0-9]/g, '') : undefined,
                      priceCurrency: 'INR',
                      category: 'Annual Tuition'
                    }
                  }))
                : undefined
          },
          college.faqs && college.faqs.length > 0
            ? {
                '@type': 'FAQPage',
                mainEntity: college.faqs.map((faq) => ({
                  '@type': 'Question',
                  name: faq.q,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.a
                  }
                }))
              }
            : null,
          {
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
                name: 'Universities',
                item: 'https://collegeleadership.in/universities'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: college.shortName || college.name,
                item: `https://collegeleadership.in/universities/${college.slug}`
              }
            ]
          }
        ].filter(Boolean)
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <CollegeDetailClient
        initialCollege={college}
        slug={slug}
        basePath="universities"
      />
    </>
  );
}
