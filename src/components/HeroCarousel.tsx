"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ChevronLeft, ChevronRight, Award } from "lucide-react";
import { WhatsappIcon } from "@/components/WhatsappIcon";
import { COMPANY_INFO } from "@/data/company";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  highlight: string;
  badge: string;
  bgImage: string;
}

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: "شركة رواحل جمان للنقل البري",
      subtitle: "توصيل خاص وفاخر لضيوف الرحمن من مطار الملك عبدالعزيز بجدة إلى مكة المكرمة والمدينة المنورة",
      highlight: "استقبال مباشر من المطار على مدار 24 ساعة",
      badge: "الخدمة المعتمدة للأسر وضيوف الرحمن VIP",
      bgImage: "/makkah_clock_tower.jpg"
    },
    {
      id: 2,
      title: "أسطول سيارات حديث وفاخر 2026",
      subtitle: "اختر من بين أحدث السيارات: كامري، فورد تورس، جمس يوكن، ستاريا VIP، هايس، وكوستر",
      highlight: "بدون أي عناء - سائقك بانتظارك في الصالة",
      badge: "أعلى درجات الراحة والأمان والخصوصية",
      bgImage: "/vehicles/gmc.jpg"
    },
    {
      id: 3,
      title: "التنقّلات بين الحرمين الشريفين",
      subtitle: "رحلات آمنة ومريحة جداً من مكة المكرمة إلى المسجد النبوي الشريف بالمدينة المنورة",
      highlight: "سيارات مكيفة بالكامل مع شواحن وواي فاي مجاني",
      badge: "خصومات خاصة لحجوزات العمرة والمجموعات",
      bgImage: "/vehicles/staria.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative bg-[#0f1c24] text-white min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden">
      {/* Background Image Carousel Slides */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 pointer-events-none z-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          />
          {/* Dark Overlay Gradient for Visual Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c24] via-[#0f1c24]/85 to-[#0f1c24]/60" />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6976B]/20 border border-[#F6976B]/40 text-[#F6976B] text-xs sm:text-sm font-bold backdrop-blur-md">
            <Award className="w-4 h-4" />
            <span>{slides[currentSlide].badge}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-md">
            {slides[currentSlide].title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal">
            {slides[currentSlide].subtitle}
          </p>

          {/* Clean highlight text banner */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-white/90">
            <div className="bg-[#256F96]/40 px-3 py-1.5 rounded-lg border border-[#256F96]/60 backdrop-blur-sm">
              <span>{slides[currentSlide].highlight}</span>
            </div>
          </div>

          {/* CTA Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-7 py-3.5 rounded-xl font-extrabold text-base shadow-lg shadow-[#25D366]/30 hover:scale-105 transition-all"
            >
              <WhatsappIcon className="w-5 h-5 fill-current" />
              <span>حجز سريع عبر الواتساب</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 bg-[#256F96] hover:bg-[#1d5777] text-white px-6 py-3.5 rounded-xl font-bold text-base border border-[#256F96]/50 shadow-md hover:scale-105 transition-all"
            >
              <Phone className="w-5 h-5 text-[#F6976B]" />
              <span>اتصال مباشر للحجز</span>
            </a>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute z-30 bottom-6 left-6 right-6 max-w-7xl mx-auto flex items-center justify-between pointer-events-none">
        <div className="flex gap-2 pointer-events-auto">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? "w-8 bg-[#F6976B]" : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`شريحة ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-2 pointer-events-auto">
          <button
            onClick={prevSlide}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
            aria-label="السابق"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
            aria-label="التالي"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
