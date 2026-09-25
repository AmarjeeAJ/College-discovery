import { notFound } from 'next/navigation';
import { blogsData } from '@/lib/data/blogs';
import BlogDetailClient from '@/components/blog/BlogDetailClient';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || '';
  const target = slug.toLowerCase().trim();

  const post = blogsData.find((b) => b.slug.toLowerCase() === target);

  if (!post) {
    return {
      title: 'Article Not Found',
      description: 'The requested educational article could not be found.'
    };
  }

  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt;

  return {
    title: title,
    description: description,
    keywords: post.tags || ['College Admissions 2026', 'Engineering Cutoffs', 'Education Guide'],
    openGraph: {
      title: title,
      description: description,
      url: `https://collegeleadership.in/blog/${post.slug}`,
      siteName: 'College Leadership',
      images: [
        {
          url: `https://collegeleadership.in${post.coverImage}`,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ],
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author]
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [`https://collegeleadership.in${post.coverImage}`]
    },
    alternates: {
      canonical: `/blog/${post.slug}`
    }
  };
}

export default async function BlogDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || '';
  const target = slug.toLowerCase().trim();

  const post = blogsData.find((b) => b.slug.toLowerCase() === target);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogsData.filter((b) => b.slug !== post.slug).slice(0, 2);

  // Google Schema.org BlogPosting & BreadcrumbList JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `https://collegeleadership.in/blog/${post.slug}#article`,
        headline: post.title,
        description: post.excerpt,
        image: `https://collegeleadership.in${post.coverImage}`,
        datePublished: post.publishedDate,
        dateModified: post.publishedDate,
        author: {
          '@type': 'Person',
          name: post.author,
          jobTitle: post.authorRole
        },
        publisher: {
          '@type': 'Organization',
          name: 'College Leadership',
          logo: {
            '@type': 'ImageObject',
            url: 'https://collegeleadership.in/logo.png'
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://collegeleadership.in/blog/${post.slug}`
        },
        keywords: post.tags?.join(', ')
      },
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
            name: 'Blog',
            item: 'https://collegeleadership.in/blog'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: `https://collegeleadership.in/blog/${post.slug}`
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
      <BlogDetailClient post={post} relatedPosts={relatedPosts} />
    </>
  );
}
