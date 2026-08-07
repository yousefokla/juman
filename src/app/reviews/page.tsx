import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { REVIEWS } from "@/data/reviews";
import { COMPANY_INFO } from "@/data/company";
import { getBreadcrumbSchema, SITE_URL } from "@/lib/jsonld";
import { Star, UserCheck, MessageCircle, Phone } from "lucide-react";

const pageUrl = `${SITE_URL}/reviews`;

export const metadata: Metadata = {
  title: "تقييمات وآراء العملاء | شركة رواحل جمان للنقل البري",
  description: "استعرض تقييمات وآراء ضيوف الرحمن والمعتمرين الذين جربوا خدمات توصيل رواحل جمان من مطار جدة إلى مكة المكرمة والمدينة المنورة.",
  alternates: {
    canonical: pageUrl,
    languages: {
      "ar-SA": pageUrl,
      "x-default": pageUrl
    }
  },
  openGraph: {
    title: "تقييمات وتجارب العملاء | رواحل جمان للنقل البري",
    description: "تجارب واقعية وتقييمات حقيقية من ضيوف الرحمن والمعتمرين.",
    url: pageUrl,
  }
};

export default function ReviewsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "الرئيسية", item: "/" },
    { name: "تقييمات العملاء", item: "/reviews" }
  ]);

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
          <Link href="/" className="hover:text-[#256F96] transition-colors">الرئيسية</Link>
          <span>/</span>
          <span className="text-[#256F96] font-bold">تقييمات العملاء</span>
        </nav>

        {/* Header */}
        <header className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6976B]/15 text-[#e57f50] text-xs font-bold">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            آراء معتمدة 4.9/5
          </span>
          {/* EXACTLY ONE H1 */}
          <h1 className="text-3xl sm:text-5xl font-black text-[#0f1c24] tracking-tight">
            ماذا يقول عملاؤنا عن رواحل جمان؟
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            تجارب واقعية وتقييمات حقيقية من ضيوف الرحمن والمعتمرين والزوار من مختلف الدول العربية والإسلامية.
          </p>
        </header>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <article
              key={review.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  {review.verified && (
                    <span className="flex items-center gap-1 text-[11px] text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded-full font-semibold">
                      <UserCheck className="w-3.5 h-3.5" />
                      حجز مؤكد
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-[#0f1c24] text-sm">
                    {review.name}
                  </h3>
                  <p className="text-xs text-slate-400">{review.country}</p>
                </div>
                <div className="text-left text-[11px] text-slate-500">
                  <span className="block text-[#256F96] font-semibold">{review.vehicleType}</span>
                  <span>{review.routeTaken}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Box */}
        <div className="bg-[#0f1c24] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-black">انضم لآلاف العملاء الرابحين براحة البال</h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            احجز سيارتك الخاصة الآن من مطار جدة إلى مكة أو المدينة وعش تجربة تنقل فاخرة وهادئة لضيوف الرحمن.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-7 py-3 rounded-xl font-bold text-sm shadow-md hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>حجز مباشر عبر الواتساب</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 bg-[#256F96] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#1d5777] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F6976B]" />
              <span>اتصال: {COMPANY_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
