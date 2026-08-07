"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, MessageCircle, Phone, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { WhatsappIcon } from "@/components/WhatsappIcon";

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const MAIN_FAQS: FaqItem[] = [
  {
    question: "كيف يتم استقبالي في مطار الملك عبدالعزيز بجدة (صالة 1 / الشمالية)؟",
    answer: "يقوم سائق رواحل جمان بالتواصل معك عبر الواتساب فور هبوط طائرتك بمطار جدة، لتنسيق نقطة الالتقاء السريعة لمساعدتك في أمتعتك واصطحابك مباشرة للسيارة بدون أي انتظار.",
    category: "الاستقبال والمطار"
  },
  {
    question: "هل خدمات التوصيل متوفرة على مدار 24 ساعة لجميع الرحلات؟",
    answer: "نعم، خدماتنا متوفرة 24/7 طوال أيام الأسبوع وتغطي جميع الرحلات الجوية الداخلية والدولية القادمة في أوقات متأخرة من الليل أو الصباح الباكر، وفي جميع مواسم العمرة والحج.",
    category: "المواعيد"
  },
  {
    question: "كم تستغرق الرحلة من مطار جدة إلى مكة المكرمة؟",
    answer: "تستغرق الرحلة عادة من 55 إلى 70 دقيقة تقريباً عبر طريق الحرمين السريع مباشرة حتى باب فندقك بمكة المكرمة.",
    category: "المسارات والتوقيت"
  },
  {
    question: "ماذا يحدث إذا تأخرت رحلتي الجوية أو تغير موعد الهبوط؟",
    answer: "نحن نتابع رقم رحلتك الجوية بانتظام عبر أنظمة تتبع الطيران الذكية. السائق سيتواجد في الوقت الفعلي لوصولك بدقة حتى في حال تأخر الرحلة دون أي رسوم إضافية.",
    category: "الاستقبال والمطار"
  },
  {
    question: "ما هي السيارات المتاحة وحجم الحقائب المسموح به؟",
    answer: "يتوفر لدينا أسطول حديث (2024 - 2026): سيدان فاخرة (كامري، تورس، لكزس) تتسع لـ 3 حقائب، عائلي VIP (جمس، ستاريا) تتسع لـ 5-7 حقائب، وفان هايس تتسع لـ 10+ حقائب للمجموعات.",
    category: "السيارات والأمتعة"
  },
  {
    question: "ما هي طرق الدفع المتاحة لخدمة التوصيل؟",
    answer: "نوفر خيارات دفع مرنة وسهلة: يمكنك الدفع نقداً للسائق فور الوصول، أو عن طريق التحويل البنكي المباشر، أو عبر بطاقات مدى والبطاقات الائتمانية.",
    category: "الدفع والحجز"
  },
  {
    question: "هل يمكن حجز جولات زيارات للمشاعر المقدسة والمعالم التاريخية؟",
    answer: "نعم، نقدم جولات خاصة لزيارات معالم مكة المكرمة (جبل ثور، غار حراء، عرفات، منى) والمعالم التاريخية بالمدينة المنورة (مسجد قباء، جبل أحد، القبلتين) بسيارات مريحة وسائقين خبرا.",
    category: "الزيارات والمزارات"
  },
  {
    question: "هل السيارات معقمة وتضم تكييفاً مناسباً للأجواء الحارة؟",
    answer: "جميع سيارات رواحل جمان تخضع لغسيل وتعقيم شامل قبل كل رحلة ومجهزة بأعلى أنظمة التكييف المزدوج والمستقل لضمان أقصى درجات الانتعاش والراحة لضيوف الرحمن.",
    category: "السيارات والأمتعة"
  }
];

export function FaqSection({ faqs = MAIN_FAQS, title = "الأسئلة الشائعة والإجابات" }: { faqs?: FaqItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#256F96]/10 text-[#256F96] text-xs font-bold mb-3">
            <HelpCircle className="w-4 h-4 text-[#F6976B]" />
            <span>مركز إجابات وخدمة العملاء</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
            كل ما تحتاج معرفته عن خدمات التوصيل الخاص من مطار جدة، طريقة الاستقبال، المواعيد والسيارات المتاحة لضيوف الرحمن.
          </p>
        </div>

        {/* Accordion FAQ Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#256F96]/40 shadow-lg shadow-[#256F96]/5"
                    : "bg-white border-zinc-200/80 hover:border-zinc-300 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-right font-bold text-[#18181B] hover:text-[#256F96] transition-colors gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 font-extrabold transition-colors ${
                      isOpen ? "bg-[#256F96] text-white" : "bg-zinc-100 text-[#256F96]"
                    }`}>
                      ؟
                    </span>
                    <span className="text-base sm:text-lg">{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#256F96]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 bg-zinc-50/50">
                    <p className="pr-11">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-[#0f1c24] to-[#256F96] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-right">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#F6976B] text-xs font-bold">
              <Sparkles className="w-4 h-4" />
              <span>لديك سؤال آخر لم نجب عنه؟</span>
            </div>
            <h3 className="text-lg font-bold">فريق خدمة العملاء جاهز للرد الفوري</h3>
            <p className="text-xs text-zinc-300">يسعدنا تواصلكم على مدار 24 ساعة للإجابة والتنسيق لرحلتكم</p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-xl font-bold text-xs shadow-md transition-all hover:scale-105"
            >
              <WhatsappIcon className="w-4 h-4 fill-current" />
              <span>اسألنا بالواتساب</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-3 rounded-xl font-bold text-xs transition-all"
            >
              <Phone className="w-4 h-4 text-[#F6976B]" />
              <span>اتصال مباشر</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
