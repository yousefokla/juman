import React from "react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { VehicleFilter } from "@/components/VehicleFilter";
import { RoutesSection } from "@/components/RoutesSection";
import { VehiclesSection } from "@/components/VehiclesSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { BlogSection } from "@/components/BlogSection";
import { FaqSection } from "@/components/FaqSection";
import { COMPANY_INFO } from "@/data/company";
import { WhatsappIcon } from "@/components/WhatsappIcon";
import { ShieldCheck, Phone, Clock, Star, Car, Award } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Carousel */}
      <HeroCarousel />

      {/* 2. Vehicle Passenger Filter */}
      <VehicleFilter />

      {/* Trust & Features Counter Bar - High-End Premium Luxury Design */}
      <section className="py-16 bg-gradient-to-br from-[#0f1c24] via-[#152835] to-[#1e3d4f] text-white my-16 relative overflow-hidden shadow-2xl border-y border-[#256F96]/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,151,107,0.12),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: 24/7 */}
            <div className="group p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#256F96] hover:bg-white/10 transition-all duration-300 shadow-lg flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#256F96]/20 border border-[#256F96]/40 text-[#256F96] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-[#256F96]" />
                </div>
                <span className="text-[10px] font-bold text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                  خدمة مستمرة
                </span>
              </div>
              <div>
                <div className="font-black text-3xl sm:text-4xl text-white tracking-tight group-hover:text-[#F6976B] transition-colors">
                  24/7
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-300 mt-1">
                  استقبال وتوصيل متواصل
                </p>
              </div>
            </div>

            {/* Card 2: Rating */}
            <div className="group p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#F6976B] hover:bg-white/10 transition-all duration-300 shadow-lg flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#F6976B]/20 border border-[#F6976B]/40 text-[#F6976B] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                </div>
                <span className="text-[10px] font-bold text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                  ممتاز جداً
                </span>
              </div>
              <div>
                <div className="font-black text-3xl sm:text-4xl text-white tracking-tight group-hover:text-[#F6976B] transition-colors">
                  4.9 / 5
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-300 mt-1">
                  من تقييمات المعتمرين
                </p>
              </div>
            </div>

            {/* Card 3: Modern Fleet */}
            <div className="group p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#256F96] hover:bg-white/10 transition-all duration-300 shadow-lg flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#256F96]/20 border border-[#256F96]/40 text-[#256F96] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Car className="w-6 h-6 text-[#256F96]" />
                </div>
                <span className="text-[10px] font-bold text-emerald-300 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20">
                  موديلات 2026
                </span>
              </div>
              <div>
                <div className="font-black text-3xl sm:text-4xl text-white tracking-tight group-hover:text-[#F6976B] transition-colors">
                  100%
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-300 mt-1">
                  سيارات حديثة (2024 - 2026)
                </p>
              </div>
            </div>

            {/* Card 4: Certified License */}
            <div className="group p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-emerald-500 hover:bg-white/10 transition-all duration-300 shadow-lg flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-[#25D366]" />
                </div>
                <span className="text-[10px] font-bold text-[#25D366] bg-[#25D366]/10 px-2.5 py-1 rounded-full border border-[#25D366]/20">
                  مستند معتمد
                </span>
              </div>
              <div>
                <div className="font-black text-2xl sm:text-3xl text-white tracking-tight group-hover:text-[#25D366] transition-colors">
                  ترخيص رسمي
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-300 mt-1">
                  سائقين خبرا ومحترفين
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Routes Section */}
      <RoutesSection />

      {/* 4. Vehicles Section */}
      <VehiclesSection />

      {/* Detailed Service Explanation Banner */}
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
                <WhatsappIcon className="w-5 h-5 fill-current" />
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

      {/* 5. Reviews Section */}
      <ReviewsSection />

      {/* 6. Blog / Articles Section */}
      <BlogSection />

      {/* 7. FAQs Section */}
      <FaqSection />
    </div>
  );
}
