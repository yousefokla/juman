import React from "react";
import Link from "next/link";
import { MapPin, Navigation, ChevronLeft, ArrowLeft } from "lucide-react";
import { WhatsappIcon } from "@/components/WhatsappIcon";
import { ROUTES } from "@/data/routes";
import { COMPANY_INFO } from "@/data/company";

export function RoutesSection() {
  return (
    <section id="routes" className="py-20 bg-[#F4F4F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#256F96]/10 text-[#256F96] text-xs font-bold mb-3">
            <Navigation className="w-4 h-4 text-[#F6976B]" />
            <span>المسارات الأهم والأكثر طلباً</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight">
            خدمات التوصيل بين مطار جدة ومكة والمدينة المنورة
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
            نغطي جميع المسارات الرئيسية في المنطقة الغربية بأحدث السيارات وسائقين خبرا بالطرق السريعة لضمان سفر مريح وآمن على مدار 24 ساعة.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROUTES.map((route) => (
            <div
              key={route.id}
              className="rex-card p-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Route Title Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="bg-[#256F96]/10 text-[#256F96] font-bold text-xs px-3 py-1 rounded-full">
                    {route.distance} • {route.estimatedTime}
                  </span>
                  {route.isPopular && (
                    <span className="bg-[#F6976B]/20 text-[#F6976B] border border-[#F6976B]/40 font-bold text-xs px-2.5 py-0.5 rounded-full">
                      مسار رئيسي
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-extrabold text-[#18181B] group-hover:text-[#256F96] transition-colors leading-snug">
                  {route.title}
                </h3>

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

              {/* Action Link & Official WhatsApp Button */}
              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between gap-3">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=` + encodeURIComponent(`السلام عليكم، أرغب في حجز توصيل (${route.title})`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-4 rounded-xl font-bold text-xs shadow-sm transition-all"
                >
                  <WhatsappIcon className="w-4 h-4 fill-current" />
                  <span>حجز المسار الآن</span>
                </a>

                <Link
                  href={`/routes/${route.slug}`}
                  className="flex items-center gap-1 text-xs font-bold text-[#256F96] hover:text-[#1d5777] p-2 rounded-xl hover:bg-[#256F96]/10 transition-colors"
                >
                  <span>التفاصيل</span>
                  <ChevronLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Routes Bar */}
        <div className="mt-12 text-center">
          <Link
            href="/routes"
            className="inline-flex items-center gap-2 bg-[#18181B] hover:bg-[#256F96] text-white font-bold text-sm px-8 py-3.5 rounded-2xl shadow-lg transition-all"
          >
            <span>استعراض كافة مسارات التوصيل والتنقلات</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
