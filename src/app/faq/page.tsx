import React from "react";
import { FaqSection } from "@/components/FaqSection";
import { Metadata } from "next";
import Link from "next/link";
import { getBreadcrumbSchema, SITE_URL } from "@/lib/jsonld";

const pageUrl = `${SITE_URL}/faq`;

export const metadata: Metadata = {
  title: "الأسئلة الشائعة والإجابات | رواحل جمان للنقل البري",
  description: "إجابات شاملة لجميع الأسئلة الشائعة حول حجز سيارات التوصيل الخاص من مطار جدة إلى مكة المكرمة والمدينة المنورة، الاستقبال في المطار، المواعيد، وطرق الدفع.",
  keywords: [
    "الاسئلة الشائعة توصيل مطار جدة",
    "اسئلة مكررة حجز سيارة مكة",
    "طريقة الاستقبال مطار جدة",
    "توصيل معتمرين اسئلة واجوبة"
  ],
  alternates: {
    canonical: pageUrl,
    languages: {
      "ar-SA": pageUrl,
      "x-default": pageUrl
    }
  },
  openGraph: {
    title: "الأسئلة الشائعة والإجابات | رواحل جمان للنقل البري",
    description: "إجابات كافة الاستفسارات حول التوصيل من مطار جدة إلى مكة والمدينة.",
    url: pageUrl,
  }
};

export default function FaqPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "الرئيسية", item: "/" },
    { name: "الأسئلة الشائعة", item: "/faq" }
  ]);

  return (
    <div className="py-8 bg-zinc-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 pt-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
          <Link href="/" className="hover:text-[#256F96] transition-colors">الرئيسية</Link>
          <span>/</span>
          <span className="text-[#256F96] font-bold">الأسئلة الشائعة</span>
        </nav>
      </div>

      <FaqSection title="مركز الأسئلة الشائعة والإجابات" />
    </div>
  );
}
