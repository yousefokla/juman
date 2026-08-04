import React from "react";
import Metadata from "next";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/company";
import { ShieldCheck, Award, Clock, Users, Car, CheckCircle2, Phone, MessageCircle } from "lucide-react";

export const metadata = {
  title: "من نحن | شركة رواحل جمان للنقل البري",
  description: "تعرف على شركة رواحل جمان للنقل البري المتخصصة في تقديم خدمات التوصيل الفاخر والمباشر من مطار جدة إلى مكة المكرمة والمدينة المنورة بأعلى معايير الأمان والراحة.",
};

export default function AboutPage() {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#256F96]/10 text-[#256F96] text-xs font-bold">
            <Award className="w-4 h-4 text-[#F6976B]" />
            عن الشركة
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0f1c24] tracking-tight">
            شركة رواحل جمان للنقل البري
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            شريككم الموثوق لرحلة إيمانية مريحة وآمنة من مطار جدة إلى جوار البيت العتيق بمكة والمسجد النبوي الشريف بالمدينة المنورة.
          </p>
        </div>

        {/* Company Overview Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-[#0f1c24]">رؤيتنا ورسالتنا</h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              تأسست شركة <strong className="text-[#256F96]">رواحل جمان للنقل البري</strong> لتوفير تجربة نقل استثنائية ترتقي لتطلعات ضيوف الرحمن والزوار في المملكة العربية السعودية. نهدف إلى تقديم خدمة استقبال وتوصيل خاص تتسم بالانضباط العالي في المواعيد، الفخامة، والنظافة المطلقة بأسطول من أحدث السيارات المجهزة (كامري، ستاريا، هايس، جمس، فورد تورس، وكوستر).
            </p>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
            <div className="p-5 bg-slate-50 rounded-2xl space-y-2 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-[#256F96]/10 text-[#256F96] flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0f1c24] text-base">دقة المواعيد 24/7</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                نتابع جدول الرحلات الجوية لحظة بلحظة لضمان وجود السائق في انتظارك فور وصولك دون أي تأخير.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl space-y-2 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-[#F6976B]/15 text-[#e57f50] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0f1c24] text-base">أمان وراحة فائقة</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                سيارات حديثة معقمة وسائقون خبرا ومحترفون على دراية كاملة بكافة مسارات وطرق المنطقة الغربية.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl space-y-2 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0f1c24] text-base">ضيافة المعتمرين</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                نقدم خدمات الاستقبال بشفافية واحترام وأخلاق تليق بضيوف بيت الله الحرام والمسجد النبوي.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Box */}
        <div className="bg-[#0f1c24] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black">احجز رحلتك القادمة بكل يسر وسهولة</h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            تواصل معنا مباشرة عبر الهاتف أو الواتساب وسنقوم بترتيب سيارتك المناسبة فوراً.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>واتساب للحجوزات</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 bg-[#256F96] text-white px-6 py-3.5 rounded-xl font-bold text-sm"
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
