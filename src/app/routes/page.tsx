import React from "react";
import Metadata from "next";
import Link from "next/link";
import { ROUTES } from "@/data/routes";
import { COMPANY_INFO } from "@/data/company";
import { WhatsappIcon } from "@/components/WhatsappIcon";
import { MapPin, Navigation, ChevronLeft } from "lucide-react";

export const metadata = {
  title: "جميع مسارات التوصيل | مطار جدة، مكة، والمدينة المنورة",
  description: "استعرض كافة مسارات التوصيل المتاحة لدى شركة رواحل جمان للنقل البري بين مطار جدة (مطار الملك عبدالعزيز الدولي)، مكة المكرمة، والمدينة المنورة.",
};

export default function RoutesListPage() {
  return (
    <div className="py-16 bg-[#F4F4F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#256F96]/10 text-[#256F96] text-xs font-bold">
            <Navigation className="w-4 h-4 text-[#F6976B]" />
            دليل المسارات الكامل
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#18181B] tracking-tight">
            مسارات التوصيل والتنقلات الرئيسية
          </h1>
          <p className="text-base text-zinc-600 leading-relaxed">
            اختر المسار المطلوب للاطلاع على كامل التفاصيل، المسافة، الزمن المتوقع، والسيارات المناسبة لرحلتك.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROUTES.map((route) => (
            <div
              key={route.id}
              className="rex-card p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-[#256F96]/10 text-[#256F96] font-bold text-xs px-3 py-1 rounded-full">
                    {route.distance} • {route.estimatedTime}
                  </span>
                  {route.isPopular && (
                    <span className="bg-[#F6976B]/20 text-[#F6976B] border border-[#F6976B]/30 font-bold text-xs px-2.5 py-0.5 rounded-full">
                      أكثر طلباً
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-extrabold text-[#18181B]">
                  <Link href={`/routes/${route.slug}`} className="hover:text-[#256F96] transition-colors">
                    {route.title}
                  </Link>
                </h2>

                <p className="text-xs text-zinc-600 leading-relaxed">
                  {route.summary}
                </p>

                {/* Origin -> Destination Box */}
                <div className="bg-zinc-50 p-3.5 rounded-2xl border border-zinc-200 text-xs space-y-2 font-medium">
                  <div className="flex items-center gap-2 text-zinc-700">
                    <MapPin className="w-4 h-4 text-[#256F96] shrink-0" />
                    <span className="font-bold">من:</span>
                    <span>{route.origin}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700">
                    <MapPin className="w-4 h-4 text-[#F6976B] shrink-0" />
                    <span className="font-bold">إلى:</span>
                    <span>{route.destination}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between gap-3">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=` + encodeURIComponent(`السلام عليكم، أرغب في حجز مسار (${route.title})`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all"
                >
                  <WhatsappIcon className="w-4 h-4 fill-current" />
                  <span>حجز مباشر</span>
                </a>

                <Link
                  href={`/routes/${route.slug}`}
                  className="flex items-center gap-1 text-xs font-bold text-[#256F96] hover:text-[#1d5777] p-2 rounded-xl hover:bg-[#256F96]/10 transition-colors"
                >
                  <span>صفحة المسار</span>
                  <ChevronLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
