import React from "react";
import Link from "next/link";
import { Star, UserCheck } from "lucide-react";
import { REVIEWS } from "@/data/reviews";

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#256F96]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#F6976B]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6976B]/20 text-[#F6976B] text-xs sm:text-sm font-extrabold mb-3 backdrop-blur-md">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>تقييمات وآراء ضيوف الرحمن والزوار</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            ماذا يقول عملاؤنا عن خدمة توصيل رواحل جمان؟
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            نفخر بتقديم أرقى مستويات الخدمة والتوصيل الخاص للمعتمرين والزوار والعائلات القادمة عبر مطار جدة ومكة والمدينة.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-slate-800/80 rounded-3xl p-6 border border-slate-700/80 backdrop-blur-md flex flex-col justify-between hover:border-[#F6976B]/50 transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Rating & Verified */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  {review.verified && (
                    <span className="flex items-center gap-1 text-[11px] text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded-full font-semibold">
                      <UserCheck className="w-3 h-3" />
                      حجز مؤكد
                    </span>
                  )}
                </div>

                {/* Comment Text */}
                <p className="text-sm text-slate-200 leading-relaxed font-normal italic">
                  "{review.comment}"
                </p>
              </div>

              {/* User Profile Footer */}
              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm group-hover:text-[#F6976B] transition-colors">
                    {review.name}
                  </h4>
                  <p className="text-xs text-slate-400">{review.country}</p>
                </div>
                <div className="text-left text-[11px] text-slate-400">
                  <span className="block text-[#256F96] font-semibold">{review.vehicleType}</span>
                  <span>{review.routeTaken}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating Metrics Banner */}
        <div className="mt-14 p-6 rounded-3xl bg-gradient-to-r from-[#256F96]/30 via-slate-800 to-[#F6976B]/20 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center font-black text-2xl border border-amber-400/30">
              4.9
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">تقييم ممتاز 4.9 / 5</h3>
              <p className="text-xs text-slate-300">من تقييمات المعتمرين والزوار الحقيقية</p>
            </div>
          </div>

          <Link
            href="/reviews"
            className="bg-[#F6976B] hover:bg-[#e57f50] text-slate-950 font-extrabold text-sm px-6 py-3 rounded-xl shadow-lg transition-all"
          >
            مشاهدة كافة التقييمات ←
          </Link>
        </div>
      </div>
    </section>
  );
}
