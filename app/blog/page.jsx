import { blogsData } from '@/lib/data/blogs';
import BlogListClient from '@/components/blog/BlogListClient';

export const metadata = {
  title: 'Higher Education Blog & Admissions Insights 2026',
  description:
    'Objective, verified advisory guides on B.Tech, MBA, Medical, and Law college admissions in India. Compare verified fees, cutoffs, placements, and direct counseling.',
  keywords: [
    'engineering college selection guide',
    'MBA admission 2026',
    'NEET UG counselling 2026',
    'best B.Tech colleges in India',
    'college fees vs placement ROI',
    'direct admission process',
    'Jaipur engineering colleges'
  ],
  openGraph: {
    title: 'Higher Education Blog & Admissions Insights 2026 | College Leadership',
    description:
      'Objective, verified advisory guides on B.Tech, MBA, Medical, and Law college admissions in India.',
    url: 'https://collegeleadership.in/blog',
    siteName: 'College Leadership',
    images: [
      {
        url: 'https://collegeleadership.in/images/streams/btech-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'College Leadership Education Blog'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Higher Education Blog & Admissions Insights 2026',
    description:
      'Expert guides on college admissions, fees comparison, cutoffs, and placements in India.',
    images: ['https://collegeleadership.in/images/streams/btech-hero.jpg']
  },
  alternates: {
    canonical: '/blog'
  }
};

export default function BlogListingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'College Leadership Educational Blog',
    description:
      'Objective, verified advisory guides on higher education admissions, course curricula, fees, and career roadmaps in India.',
    url: 'https://collegeleadership.in/blog',
    blogPost: blogsData.map((b) => ({
      '@type': 'BlogPosting',
      headline: b.title,
      description: b.excerpt,
      url: `https://collegeleadership.in/blog/${b.slug}`,
      datePublished: b.publishedDate,
      author: {
        '@type': 'Person',
        name: b.author
      },
      image: `https://collegeleadership.in${b.coverImage}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogListClient blogs={blogsData} />
    </>
  );
}
