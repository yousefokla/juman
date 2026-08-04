import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { VEHICLES } from "@/data/vehicles";
import { COMPANY_INFO } from "@/data/company";
import { Users, Briefcase, MessageCircle, Phone, ArrowRight, ShieldCheck } from "lucide-react";

export async function generateStaticParams() {
  return VEHICLES.map((vehicle) => ({
    slug: vehicle.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const vehicle = VEHICLES.find((v) => v.slug === resolvedParams.slug);
  if (!vehicle) return {};

  return {
    title: `سيارة ${vehicle.name} لتوصيل مطار جدة ومكة | رواحل جمان`,
    description: vehicle.detailedDescription,
    alternates: {
      canonical: `https://rawahel-juman.com/vehicles/${vehicle.slug}`,
    },
  };
}

export default async function VehicleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const vehicle = VEHICLES.find((v) => v.slug === resolvedParams.slug);

  if (!vehicle) {
    notFound();
  }

  return (
    <div className="py-14 bg-[#F4F4F5] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/vehicles"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#256F96] hover:text-[#1d5777] bg-white px-4 py-2 rounded-xl border border-zinc-200 shadow-sm transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة لجميع السيارات</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-lg grid grid-cols-1 lg:grid-cols-2">
          {/* Main Image & Badges */}
          <div className="relative h-72 sm:h-96 lg:h-full bg-zinc-950">
            <img
              src={vehicle.imageUrl}
              alt={vehicle.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
            {vehicle.badge && (
              <span className="absolute top-4 right-4 bg-[#F6976B] text-zinc-950 font-black text-xs px-3.5 py-1 rounded-full shadow-md">
                {vehicle.badge}
              </span>
            )}
          </div>

          {/* Quick Specs & Actions */}
          <div className="p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="inline-block bg-[#256F96]/10 text-[#256F96] font-bold text-xs px-3 py-1 rounded-full">
                {vehicle.type}
              </span>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#18181B]">
                {vehicle.name}
              </h1>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {vehicle.description}
              </p>

              {/* Passenger & Luggage Badge Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-zinc-50 p-3.5 rounded-2xl border border-zinc-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#256F96]/10 text-[#256F96] flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-500 block">سعة الركاب</span>
                    <span className="font-bold text-[#18181B] text-sm">{vehicle.passengersTag}</span>
                  </div>
                </div>

                <div className="bg-zinc-50 p-3.5 rounded-2xl border border-zinc-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F6976B]/15 text-[#e57f50] flex items-center justify-center">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-500 block">سعة الحقائب</span>
                    <span className="font-bold text-[#18181B] text-sm">{vehicle.luggageCapacity} حقائب كبيرة</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA (NO PRICE) */}
            <div className="pt-4 border-t border-zinc-100 space-y-3">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=` + encodeURIComponent(`السلام عليكم، أرغب في حجز سيارة (${vehicle.name}) لتوصيل مطار جدة / مكة`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 rounded-xl font-extrabold text-sm shadow-lg shadow-[#25D366]/30 transition-all hover:scale-102"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>حجز سيارة {vehicle.arabicName} عبر الواتساب</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 bg-[#256F96] hover:bg-[#1d5777] text-white py-3.5 rounded-xl font-bold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F6976B]" />
                <span>اتصال مباشر: {COMPANY_INFO.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Information & Technical Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Detailed Specs Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-extrabold text-[#18181B]">
                الوصف الشامل لسيارة {vehicle.name}
              </h2>
              <p className="text-sm text-zinc-700 leading-relaxed whitespace-pre-line">
                {vehicle.detailedDescription}
              </p>

              <div className="pt-4 border-t border-zinc-100 space-y-3">
                <h3 className="font-bold text-base text-[#18181B]">مميزات ورفاهية هذه المركبة:</h3>
                {/* Clean bullet items without inline icons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-700 font-medium">
                  {vehicle.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 bg-zinc-50 p-3 rounded-xl border border-zinc-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#256F96] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Suitability */}
            <div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-[#18181B]">لمن تناسب هذه السيارة؟</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-700">
                {vehicle.suitableFor.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F6976B] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical Specs Card */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm space-y-4">
              <h3 className="text-lg font-extrabold text-[#18181B] border-b border-zinc-100 pb-3">
                المواصفات الفنية للسيارة
              </h3>

              <div className="space-y-3 text-xs text-zinc-700 font-medium">
                <div className="flex justify-between py-2 border-b border-zinc-100">
                  <span className="text-zinc-500">سنة الموديل</span>
                  <span className="font-bold text-[#18181B]">{vehicle.specs.modelYears}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-100">
                  <span className="text-zinc-500">نوع التكييف</span>
                  <span className="font-bold text-[#18181B]">{vehicle.specs.acType}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-100">
                  <span className="text-zinc-500">المقاعد</span>
                  <span className="font-bold text-[#18181B]">{vehicle.specs.seats}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-100">
                  <span className="text-zinc-500">المحرك</span>
                  <span className="font-bold text-[#18181B]">{vehicle.specs.engine}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-zinc-500">ناقل الحركة</span>
                  <span className="font-bold text-[#18181B]">{vehicle.specs.transmission}</span>
                </div>
              </div>
            </div>

            {/* Guarantee Box */}
            <div className="bg-[#0f1c24] text-white rounded-3xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#F6976B] font-bold text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>ضمان الجودة والنظافة</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                جميع سياراتنا تخضع لفحص دوري شامل وتطهير يومي قبل كل رحلة لضمان رحلة مريحة وآمنة لك ولعائلتك.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
