import { useEffect } from 'react';

/**
 * SEO Component
 * Automatically injects page title, meta tags, canonical URL, OG/Twitter metadata,
 * and JSON-LD structured data into the document head.
 */
export default function SEO({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = '/logo.png',
  schema
}) {
  const siteTitle = 'College Leadership | College Discovery & Educational Consultancy India';
  const fullTitle = title ? `${title} | College Leadership` : siteTitle;
  const defaultDesc = 'Discover verified college fees, cutoffs, placements, and ranking reports. Get free 1-on-1 admission counselling across top Indian universities.';
  const metaDesc = description || defaultDesc;
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : 'https://theshineeducation.com');

  useEffect(() => {
    // 1. Set Title
    document.title = fullTitle;

    // Helper to update or create meta tags
    const setMetaTag = (selector, attribute, value, content) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('meta[name="description"]', 'name', 'description', metaDesc);
    setMetaTag('meta[name="robots"]', 'name', 'robots', 'index, follow, max-image-preview:large');

    // 3. Open Graph Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', metaDesc);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'College Leadership');

    // 4. Twitter Tags
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', metaDesc);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    // 5. Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 6. JSON-LD Schema
    const existingSchema = document.getElementById('json-ld-schema');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Default Organization + Breadcrumb Schema
    const baseSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "EducationalOrganization",
          "@id": "https://theshineeducation.com/#organization",
          "name": "College Leadership",
          "url": "https://theshineeducation.com",
          "logo": "https://theshineeducation.com/logo.png",
          "description": "Premier Indian education discovery portal and college admission advisory.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jaipur",
            "addressRegion": "Rajasthan",
            "addressCountry": "India"
          }
        },
        ...(schema ? (Array.isArray(schema) ? schema : [schema]) : [])
      ]
    };

    const scriptTag = document.createElement('script');
    scriptTag.id = 'json-ld-schema';
    scriptTag.type = 'application/ld+json';
    scriptTag.text = JSON.stringify(baseSchema);
    document.head.appendChild(scriptTag);

    return () => {
      // Cleanup custom schema on unmount
      const s = document.getElementById('json-ld-schema');
      if (s) s.remove();
    };
  }, [fullTitle, metaDesc, canonicalUrl, ogType, ogImage, schema]);

  return null;
}
