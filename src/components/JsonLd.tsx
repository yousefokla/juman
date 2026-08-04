import React from "react";
import { COMPANY_INFO } from "@/data/company";

export function JsonLd() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": COMPANY_INFO.name,
    "alternateName": COMPANY_INFO.shortName,
    "description": COMPANY_INFO.seoDescription,
    "url": "https://rawahel-juman.com",
    "telephone": COMPANY_INFO.phone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
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
        "@type": "AdministrativeArea",
        "name": "Makkah"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Jeddah"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Madinah"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "خدمات النقل والتوصيل الخاص",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "توصيل من مطار جدة إلى مكة المكرمة"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "توصيل من مكة إلى المدينة المنورة"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "توصيل من مطار المدينة المنورة إلى الحرم النبوي"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
