import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { VEHICLES } from "@/data/vehicles";
import { ROUTES } from "@/data/routes";
import { COMPANY_INFO } from "@/data/company";
import { getServiceSchema, getBreadcrumbSchema, SITE_URL } from "@/lib/jsonld";
import { WhatsappIcon } from "@/components/WhatsappIcon";
import { Users, Briefcase, Phone, ArrowRight, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
  return VEHICLES.map((vehicle) => ({
    slug: vehicle.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const vehicle = VEHICLES.find((v) => v.slug === resolvedParams.slug);
  if (!vehicle) return {};

  const pageUrl = `${SITE_URL}/vehicles/${vehicle.slug}`;

  return {
    title: `سيارة ${vehicle.name} لتوصيل مطار جدة ومكة | رواحل جمان`,
    description: vehicle.detailedDescription,
    alternates: {
      canonical: pageUrl,
      languages: {
        "ar-SA": pageUrl,
        "x-default": pageUrl
      }
    },
    openGraph: {
      title: `سيارة ${vehicle.name} لتوصيل مطار جدة ومكة`,
      description: vehicle.description,
      url: pageUrl,
      type: "website",
      images: [{ url: `${SITE_URL}${vehicle.imageUrl}`, width: 1200, height: 630, alt: vehicle.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `سيارة ${vehicle.name} لتوصيل مطار جدة ومكة`,
      description: vehicle.description,
      images: [`${SITE_URL}${vehicle.imageUrl}`],
    }
  };
}

export default async function VehicleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const vehicle = VEHICLES.find((v) => v.slug === resolvedParams.slug);

  if (!vehicle) {
    notFound();
  }

  const pageUrl = `${SITE_URL}/vehicles/${vehicle.slug}`;
  const serviceSchema = getServiceSchema({
    name: `خدمة توصيل سيارة ${vehicle.name}`,
    description: vehicle.detailedDescription,
    url: pageUrl
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "الرئيسية", item: "/" },
    { name: "أسطول السيارات", item: "/vehicles" },
    { name: vehicle.name, item: `/vehicles/${vehicle.slug}` }
  ]);

  return (
    <div className="py-12 bg-[#F4F4F5] min-h-screen">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
          <Link href="/" className="hover:text-[#256F96] transition-colors">الرئيسية</Link>
          <span>/</span>
          <Link href="/vehicles" className="hover:text-[#256F96] transition-colors">أسطول السيارات</Link>
          <span>/</span>
          <span className="text-[#256F96] font-bold truncate max-w-xs">{vehicle.name}</span>
        </nav>

        {/* Hero Showcase Section */}
        <header className="bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-lg grid grid-cols-1 lg:grid-cols-2">
          {/* Main Image Container */}
          <div className="relative h-72 sm:h-96 lg:h-auto min-h-[320px] bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-900 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
            <img
              src={vehicle.imageUrl}
              alt={`سيارة ${vehicle.name} لتوصيل مطار جدة ومكة المكرمة`}
              width={800}
              height={500}
              className="w-full h-full object-contain max-h-[380px] lg:max-h-full rounded-2xl drop-shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />
            {vehicle.badge && (
              <span className="absolute top-4 right-4 bg-[#F6976B] text-zinc-950 font-black text-xs px-3.5 py-1 rounded-full shadow-md z-10">
                {vehicle.badge}
              </span>
            )}
          </div>

          {/* Quick Info & Actions */}
          <div className="p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="inline-block bg-[#256F96]/10 text-[#256F96] font-bold text-xs px-3 py-1 rounded-full">
                {vehicle.type}
              </span>

              {/* EXACTLY ONE H1 */}
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

            {/* Direct WhatsApp CTA */}
            <div className="pt-4 border-t border-zinc-100 space-y-3">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=` + encodeURIComponent(`السلام عليكم، أرغب في حجز سيارة (${vehicle.name}) لتوصيل مطار جدة / مكة`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 rounded-xl font-extrabold text-sm shadow-lg shadow-[#25D366]/30 transition-all hover:scale-102"
              >
                <WhatsappIcon className="w-5 h-5 fill-current" />
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
        </header>

        {/* Detailed Description & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-extrabold text-[#18181B]">
                الوصف الشامل لسيارة {vehicle.name}
              </h2>
              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed whitespace-pre-line">
                {vehicle.detailedDescription}
              </p>

              <div className="pt-4 border-t border-zinc-100 space-y-3">
                <h3 className="font-bold text-base text-[#18181B]">مميزات ورفاهية هذه المركبة:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-700 font-medium">
                  {vehicle.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 bg-zinc-50 p-3 rounded-xl border border-zinc-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#256F96] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Pricing for this vehicle across routes */}
            {(() => {
              const vehicleRoutes = ROUTES.map((r) => {
                const p = r.prices?.find((priceItem) => priceItem.vehicleId === vehicle.id);
                return {
                  ...r,
                  priceForThisVehicle: p?.price,
                };
              }).filter((r) => r.priceForThisVehicle !== undefined);

              if (vehicleRoutes.length === 0) return null;

              return (
                <section className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-extrabold text-[#18181B]">
                        أسعار توصيل {vehicle.name} حسب المسار
                      </h2>
                      <p className="text-xs text-zinc-500 mt-1">
                        أسعار شاملة التوصيل المباشر والاستقبال والمتابعة
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {vehicleRoutes.map((r) => (
                      <div
                        key={r.id}
                        className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-[#256F96] flex flex-col justify-between space-y-3 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <Link href={`/routes/${r.slug}`} className="font-bold text-sm text-[#18181B] hover:text-[#256F96] transition-colors">
                              {r.title}
                            </Link>
                            <span className="text-xs text-zinc-500 block mt-0.5">{r.distance} • {r.estimatedTime}</span>
                          </div>
                          <div className="text-left shrink-0">
                            <span className="text-xl font-black text-[#256F96]">{r.priceForThisVehicle}</span>
                            <span className="text-xs font-bold text-zinc-500 mr-1">ريال</span>
                          </div>
                        </div>

                        <a
                          href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=` + encodeURIComponent(`السلام عليكم، أرغب في حجز سيارة (${vehicle.name}) لمسار (${r.title}) بسعر (${r.priceForThisVehicle} ريال)`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2 rounded-xl font-bold text-xs shadow-sm transition-all"
                        >
                          <WhatsappIcon className="w-3.5 h-3.5 fill-current" />
                          <span>حجز المسار ({r.priceForThisVehicle} ريال)</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })()}

            {/* Suitability */}
            <section className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-[#18181B]">لمن تناسب هذه السيارة؟</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-700 font-medium">
                {vehicle.suitableFor.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F6976B] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Guarantee & Internal Link Sidebar */}
          <aside className="space-y-6">
            <div className="bg-[#0f1c24] text-white rounded-3xl p-8 space-y-4 shadow-md">
              <div className="flex items-center gap-2 text-[#F6976B] font-bold text-base">
                <ShieldCheck className="w-6 h-6" />
                <span>ضمان الجودة والنظافة</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                جميع سياراتنا تخضع لفحص دوري شامل وتطهير يومي قبل كل رحلة لضمان رحلة مريحة وآمنة لك ولعائلتك.
              </p>
              <div className="pt-2">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold text-xs shadow-md hover:bg-[#20bd5a] transition-colors"
                >
                  <WhatsappIcon className="w-4 h-4 fill-current" />
                  <span>تواصل فوري للحجز</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-zinc-200 space-y-3">
              <h3 className="font-bold text-sm text-[#18181B]">احجز هذه السيارة لمسارك:</h3>
              <ul className="space-y-2 text-xs font-semibold text-zinc-700">
                {ROUTES.slice(0, 4).map((r) => (
                  <li key={r.id}>
                    <Link href={`/routes/${r.slug}`} className="hover:text-[#256F96] transition-colors flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#256F96]" />
                      <span>{r.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
