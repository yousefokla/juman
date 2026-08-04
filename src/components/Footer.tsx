import React from "react";
import Link from "next/link";
import { Phone, MapPin, Car, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { WhatsappIcon } from "@/components/WhatsappIcon";
import { COMPANY_INFO } from "@/data/company";
import { VEHICLES } from "@/data/vehicles";
import { ROUTES } from "@/data/routes";

export function Footer() {
  return (
    <footer className="bg-[#0f1c24] text-white pt-16 pb-12 border-t-4 border-[#256F96]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Company Profile with Official Logo */}
          <div className="space-y-4">
            <Link href="/" className="inline-block bg-white p-2.5 rounded-2xl shadow-md">
              <img
                src="/logo.png"
                alt="شعار مؤسسة رواحل جمان للنقل البري"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              مؤسسة رواحل جمان للنقل البري، المتخصصة في التوصيل الخاص والاستقبال المباشر من مطار الملك عبدالعزيز الدولي بجدة إلى مكة المكرمة والمدينة المنورة بأحدث السيارات الفاخرة المجهزة لراحة ضيوف الرحمن.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#F6976B]" />
                ترخيص النقل البري المعتمد بالمملكة العربية السعودية
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#256F96]" />
                خدمة عملاء وحجوزات متوفرة 24/7 طوال العام
              </span>
            </div>
          </div>

          {/* Column 2: Quick Route Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#F6976B] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-0.5 after:bg-[#256F96]">
              أهم المسارات والتوصيلات
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {ROUTES.slice(0, 5).map((route) => (
                <li key={route.id}>
                  <Link
                    href={`/routes/${route.slug}`}
                    className="hover:text-[#F6976B] transition-colors flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#256F96]" />
                    <span>توصيل {route.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/routes" className="text-xs text-[#F6976B] font-bold hover:underline">
                  مشاهدة كافة المسارات المتاحة ←
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Vehicles Available */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#F6976B] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-0.5 after:bg-[#256F96]">
              أسطول السيارات الفاخرة
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {VEHICLES.map((vehicle) => (
                <li key={vehicle.id}>
                  <Link
                    href={`/vehicles/${vehicle.slug}`}
                    className="hover:text-[#F6976B] transition-colors flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <Car className="w-3.5 h-3.5 text-[#256F96]" />
                      <span>{vehicle.name}</span>
                    </span>
                    <span className="text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full">
                      {vehicle.passengersTag}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Contact & Booking */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#F6976B] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-0.5 after:bg-[#256F96]">
              تواصل معنا وحجز سريع
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition-colors"
                dir="ltr"
              >
                <div className="w-9 h-9 rounded-lg bg-[#256F96] flex items-center justify-center text-white">
                  <Phone className="w-4 h-4 text-[#F6976B]" />
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs text-slate-400">رقم الهاتف الرسمي للحجوزات</span>
                  <span className="font-bold text-white text-base">{COMPANY_INFO.phone}</span>
                </div>
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-white transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-[#25D366] flex items-center justify-center text-white">
                  <WhatsappIcon className="w-5 h-5 fill-current" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#25D366] font-semibold">تأكيد حجز فوري عبر الواتساب</span>
                  <span className="font-bold text-white text-sm">ارسل تفاصيل رحلتك الآن</span>
                </div>
              </a>

              <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
                <MapPin className="w-4 h-4 text-[#F6976B] shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and disclosures */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لشركة {COMPANY_INFO.name}.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">من نحن</Link>
            <Link href="/contact" className="hover:text-white transition-colors">اتصل بنا</Link>
            <Link href="/routes" className="hover:text-white transition-colors">دليل المسارات</Link>
            <Link href="/vehicles" className="hover:text-white transition-colors">أسطول السيارات</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
