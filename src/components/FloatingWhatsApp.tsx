"use client";

import React from "react";
import { Phone } from "lucide-react";
import { WhatsappIcon } from "@/components/WhatsappIcon";
import { COMPANY_INFO } from "@/data/company";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* Phone Call Float */}
      <a
        href={`tel:${COMPANY_INFO.phone}`}
        className="w-13 h-13 rounded-full bg-[#256F96] hover:bg-[#1d5777] text-white flex items-center justify-center shadow-lg shadow-[#256F96]/40 hover:scale-110 transition-all duration-300 group"
        aria-label="اتصل بنا للحجز"
        title="اتصال مباشر للحجز"
      >
        <Phone className="w-6 h-6 text-[#F6976B] group-hover:rotate-12 transition-transform" />
      </a>

      {/* WhatsApp Official Float */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl shadow-[#25D366]/40 animate-bounce hover:animate-none hover:scale-110 transition-all duration-300 relative group"
        aria-label="تواصل معنا عبر الواتساب"
        title="واتساب مباشر لحجز توصيل مطار جدة ومكة"
      >
        <WhatsappIcon className="w-7 h-7 fill-current" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] text-white font-bold items-center justify-center">1</span>
        </span>
      </a>
    </div>
  );
}
