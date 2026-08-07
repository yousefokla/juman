import React from "react";
import { getOrganizationSchema, getLocalBusinessSchema, getFaqSchema } from "@/lib/jsonld";
import { MAIN_FAQS } from "@/components/FaqSection";

export function JsonLd() {
  const organizationSchema = getOrganizationSchema();
  const localBusinessSchema = getLocalBusinessSchema();
  const mainFaqSchema = getFaqSchema(MAIN_FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {mainFaqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(mainFaqSchema) }}
        />
      )}
    </>
  );
}
