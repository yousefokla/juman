import React from "react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { VehicleFilter } from "@/components/VehicleFilter";
import { RoutesSection } from "@/components/RoutesSection";
import { VehiclesSection } from "@/components/VehiclesSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { BlogSection } from "@/components/BlogSection";
import { COMPANY_INFO } from "@/data/company";
import { ShieldCheck, Phone, MessageCircle, Clock, Star, Car, Award } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Carousel */}
      <HeroCarousel />

      {/* 2. Vehicle Passenger Filter (المقدمة بها فلترة السيارات حسب عدد الركاب) */}
      <VehicleFilter />

      {/* Trust & Features Counter Bar */}
      <section className="py-14 bg-white border-y border-slate-200/80 my-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-[#256F96]/10 text-[#256F96] flex items-center justify-center mx-auto">
                <Clock className="w-5 h-5" />
              </div>
              <div className="font-black text-2xl text-[#0f1c24]">24/7</div>
              <div className="text-xs font-bold text-slate-600">استقبال وتوصيل متواصل</div>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-[#F6976B]/15 text-[#e57f50] flex items-center justify-center mx-auto">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>
              <div className="font-black text-2xl text-[#0f1c24]">4.9 / 5</div>
              <div className="text-xs font-bold text-slate-600">تقييم أكثر من 1,280 معتمر</div>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-[#256F96]/10 text-[#256F96] flex items-center justify-center mx-auto">
                <Car className="w-5 h-5" />
              </div>
              <div className="font-black text-2xl text-[#0f1c24]">100%</div>
              <div className="text-xs font-bold text-slate-600">سيارات حديثة (2024 - 2026)</div>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mx-auto">
                <ShieldCheck className="w-5 h-5 text-[#25D366]" />
              </div>
              <div className="font-black text-2xl text-[#0f1c24]">ترخيص رسمي</div>
              <div className="text-xs font-bold text-slate-600">سائقين خبرا ومحترفين</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Routes Section (المسارات) */}
      <RoutesSection />

      {/* 4. Vehicles Section (السيارات - بدون أسعار) */}
      <VehiclesSection />

      {/* Detailed Service Explanation Banner (اشرح الخدمة بشكل مناسب) */}
      <section className="py-20 bg-gradient-to-br from-[#0f1c24] via-[#1a3545] to-[#256F96] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6976B]/20 text-[#F6976B] text-xs font-bold border border-[#F6976B]/30">
              <Award className="w-4 h-4" />
              <span>لماذا تختار شركة رواحل جمان للنقل البري؟</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              خدمة راقية تحترم وقتك وتوفر أعلى درجات الطمأنينة لضيوف الرحمن
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              نحن في شركة <strong className="text-[#F6976B]">رواحل جمان للنقل البري</strong> نعي تماماً أهمية رحلتك الإيمانية. نلتزم باستقبالك المباشر في صالة وصول مطار الملك عبدالعزيز الدولي بجدة، ونقلك وسائراً بأمان حتى باب الفندق بمكة المكرمة أو المدينة المنورة بأسطول حديث وعناية متكاملة.
            </p>

            <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-2xl font-extrabold text-base shadow-xl shadow-[#25D366]/30 transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>حجز مباشر عبر الواتساب</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 bg-[#F6976B] hover:bg-[#e57f50] text-slate-950 px-7 py-4 rounded-2xl font-extrabold text-base shadow-xl transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5 text-slate-950" />
                <span>اتصال مباشر: {COMPANY_INFO.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Reviews Section (التقييمات) */}
      <ReviewsSection />

      {/* 6. Blog / Articles Section (المقالات) */}
      <BlogSection />
    </div>
  );
}
