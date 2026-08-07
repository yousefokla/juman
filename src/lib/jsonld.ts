import { COMPANY_INFO } from "@/data/company";

export const SITE_URL = "https://www.rawaheljuman.com";

// 1. Organization Schema
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    "name": COMPANY_INFO.name,
    "legalName": COMPANY_INFO.name,
    "alternateName": [COMPANY_INFO.shortName, COMPANY_INFO.enName],
    "url": SITE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_URL}/logo.png`,
      "width": 512,
      "height": 512,
      "caption": COMPANY_INFO.name
    },
    "image": `${SITE_URL}/logo.png`,
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jeddah",
      "addressRegion": "Makkah Region",
      "addressCountry": "SA"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": COMPANY_INFO.phone,
        "contactType": "customer service",
        "areaServed": "SA",
        "availableLanguage": ["Arabic", "English"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    ],
    "sameAs": [
      COMPANY_INFO.whatsappUrl
    ]
  };
}

// 2. LocalBusiness / TaxiService Schema
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["TaxiService", "LocalBusiness"],
    "@id": `${SITE_URL}/#localbusiness`,
    "name": COMPANY_INFO.name,
    "alternateName": COMPANY_INFO.shortName,
    "description": COMPANY_INFO.seoDescription,
    "url": SITE_URL,
    "telephone": COMPANY_INFO.phone,
    "priceRange": "$$",
    "image": `${SITE_URL}/makkah_clock_tower.jpg`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY_INFO.address,
      "addressLocality": "Jeddah",
      "addressRegion": "Makkah Region",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.6796,
      "longitude": 39.1565
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": COMPANY_INFO.googleRating,
      "reviewCount": COMPANY_INFO.totalReviews,
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Jeddah",
        "sameAs": "https://ar.wikipedia.org/wiki/%D8%AC%D8%AF%D8%A9"
      },
      {
        "@type": "City",
        "name": "Makkah",
        "sameAs": "https://ar.wikipedia.org/wiki/%D9%85%D9%83%D8%A9_%D8%A7%D9%84%D9%85%D9%83%D8%B1%D9%85%D8%A9"
      },
      {
        "@type": "City",
        "name": "Madinah",
        "sameAs": "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9_%D8%A7%D9%84%D9%85%D9%86%D9%88%D8%B1%D8%A9"
      }
    ]
  };
}

// 3. BreadcrumbList Schema
export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.item.startsWith("http") ? crumb.item : `${SITE_URL}${crumb.item}`
    }))
  };
}

// 4. FAQPage Schema
export function getFaqSchema(faqs?: { question: string; answer: string }[]) {
  if (!faqs || !Array.isArray(faqs) || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// 5. Article Schema
export function getArticleSchema(article: {
  title: string;
  excerpt: string;
  url: string;
  imageUrl: string;
  publishDate: string;
  modifiedDate?: string;
  author: string;
}) {
  const publishedIso = new Date(article.publishDate || "2026-08-01").toISOString();
  const modifiedIso = new Date(article.modifiedDate || article.publishDate || "2026-08-01").toISOString();

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url.startsWith("http") ? article.url : `${SITE_URL}${article.url}`
    },
    "headline": article.title,
    "description": article.excerpt,
    "image": article.imageUrl.startsWith("http") ? article.imageUrl : `${SITE_URL}${article.imageUrl}`,
    "author": {
      "@type": "Organization",
      "name": article.author || COMPANY_INFO.name,
      "url": SITE_URL
    },
    "publisher": {
      "@type": "Organization",
      "name": COMPANY_INFO.name,
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`
      }
    },
    "datePublished": publishedIso,
    "dateModified": modifiedIso,
    "inLanguage": "ar-SA"
  };
}

// 6. Service Schema
export function getServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  imageUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "url": service.url.startsWith("http") ? service.url : `${SITE_URL}${service.url}`,
    "provider": {
      "@type": "TaxiService",
      "name": COMPANY_INFO.name,
      "url": SITE_URL
    },
    "areaServed": ["Jeddah", "Makkah", "Madinah"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.name,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.name
          }
        }
      ]
    }
  };
}
