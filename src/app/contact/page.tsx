import React from "react";
import Metadata from "next";
import { COMPANY_INFO } from "@/data/company";
import { Phone, MessageCircle, MapPin, Clock, Mail, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "اتصل بنا للحجز والإنقاذ | شركة رواحل جمان للنقل البري",
  description: "تواصل معنا مباشرة عبر الهاتف +966566343900 أو عبر الواتساب لحجز توصيل مطار جدة إلى مكة المكرمة والمدينة المنورة 24 ساعة.",
};

export default function ContactPage() {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#256F96]/10 text-[#256F96] text-xs font-bold">
            <Phone className="w-4 h-4 text-[#F6976B]" />
            تواصل مباشر وحجز سريع
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0f1c24] tracking-tight">
            تواصل مع فريق شركة رواحل جمان
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            فريق خدمة العملاء متواجد على مدار 24 ساعة طوال أيام الأسبوع لاستقبال حجوزاتكم واستفساراتكم الفورية.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Direct WhatsApp Box */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
                <MessageCircle className="w-7 h-7 fill-current" />
              </div>
              <h2 className="text-2xl font-black text-[#0f1c24]">الحجز عبر الواتساب</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                أسرع طريقة لتأكيد حجز السيارة واستقبال المطار، تواصل معنا عبر الواتساب وسنقوم بالرد المباشر عليك فوراً.
              </p>
            </div>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-2xl font-extrabold text-sm shadow-lg shadow-[#25D366]/25 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>محادثة واتساب فورية</span>
            </a>
          </div>

          {/* Direct Phone Call Box */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#256F96]/10 text-[#256F96] flex items-center justify-center">
                <Phone className="w-7 h-7 text-[#F6976B]" />
              </div>
              <h2 className="text-2xl font-black text-[#0f1c24]">الاتصال المباشر</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                يمكنك الاتصال بنا هاتفيًا في أي وقت على الرقم الرسمي الموحد للحجوزات والاستعلام عن التوصيل.
              </p>
            </div>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 bg-[#256F96] hover:bg-[#1d5777] text-white py-4 rounded-2xl font-extrabold text-sm shadow-lg shadow-[#256F96]/25 transition-all"
              dir="ltr"
            >
              <Phone className="w-5 h-5 text-[#F6976B]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Info Highlights */}
        <div className="bg-[#0f1c24] text-white rounded-3xl p-8 sm:p-12 space-y-6">
          <h2 className="text-xl font-bold text-[#F6976B]">معلومات الخدمة والمكتب</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#256F96] shrink-0" />
              <div>
                <span className="block text-xs text-slate-400">ساعات العمل</span>
                <span className="font-bold text-white">{COMPANY_INFO.operatingHours}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#F6976B] shrink-0" />
              <div>
                <span className="block text-xs text-slate-400">الموقع والتغطية</span>
                <span className="font-bold text-white">{COMPANY_INFO.address}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#25D366] shrink-0" />
              <div>
                <span className="block text-xs text-slate-400">حالة الخدمة</span>
                <span className="font-bold text-white">مرخصون وجاهزون لاستقبالكم</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
