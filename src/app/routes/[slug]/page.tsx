import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ROUTES } from "@/data/routes";
import { VEHICLES } from "@/data/vehicles";
import { COMPANY_INFO } from "@/data/company";
import { getServiceSchema, getFaqSchema, getBreadcrumbSchema, SITE_URL } from "@/lib/jsonld";
import { WhatsappIcon } from "@/components/WhatsappIcon";
import { MapPin, Phone, ArrowRight, HelpCircle, Car, ShieldCheck } from "lucide-react";

export async function generateStaticParams() {
  return ROUTES.map((route) => ({
    slug: route.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const route = ROUTES.find((r) => r.slug === resolvedParams.slug);
  if (!route) return {};

  const pageUrl = `${SITE_URL}/routes/${route.slug}`;

  return {
    title: `توصيل ${route.title} | رواحل جمان للنقل البري`,
    description: route.detailedDescription,
    keywords: route.seoKeywords,
    alternates: {
      canonical: pageUrl,
      languages: {
        "ar-SA": pageUrl,
        "x-default": pageUrl
      }
    },
    openGraph: {
      title: `توصيل ${route.title}`,
      description: route.summary,
      url: pageUrl,
      type: "website",
      images: [{ url: `${SITE_URL}/makkah_clock_tower.jpg`, width: 1200, height: 630, alt: route.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `توصيل ${route.title}`,
      description: route.summary,
    }
  };
}

export default async function RouteDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const route = ROUTES.find((r) => r.slug === resolvedParams.slug);

  if (!route) {
    notFound();
  }

  const pageUrl = `${SITE_URL}/routes/${route.slug}`;
  const recommendedVehiclesList = VEHICLES.filter((v) =>
    route.recommendedVehicles.includes(v.id)
  );

  const serviceSchema = getServiceSchema({
    name: `خدمة توصيل ${route.title}`,
    description: route.summary,
    url: pageUrl
  });

  const faqSchema = route.faqs && route.faqs.length > 0 ? getFaqSchema(route.faqs) : null;
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "الرئيسية", item: "/" },
    { name: "دليل المسارات", item: "/routes" },
    { name: route.title, item: `/routes/${route.slug}` }
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
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
          <Link href="/" className="hover:text-[#256F96] transition-colors">الرئيسية</Link>
          <span>/</span>
          <Link href="/routes" className="hover:text-[#256F96] transition-colors">دليل المسارات</Link>
          <span>/</span>
          <span className="text-[#256F96] font-bold truncate max-w-xs">{route.title}</span>
        </nav>

        {/* Header Hero Banner */}
        <header className="bg-gradient-to-br from-[#0f1c24] via-[#1a3545] to-[#256F96] text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[#F6976B] text-zinc-950 font-black text-xs px-3.5 py-1 rounded-full">
              مسار معتمد 24/7
            </span>
            <span className="bg-white/10 text-zinc-200 text-xs px-3.5 py-1 rounded-full backdrop-blur-md">
              {route.distance} • حوالي {route.estimatedTime}
            </span>
          </div>

          {/* EXACTLY ONE H1 */}
          <h1 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight">
            توصيل {route.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-200 leading-relaxed max-w-3xl">
            {route.summary}
          </p>

          {/* Route Box */}
          <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#256F96] flex items-center justify-center text-white shrink-0">
                <MapPin className="w-5 h-5 text-[#F6976B]" />
              </div>
              <div>
                <span className="text-xs text-zinc-300 block">نقطة الانطلاق</span>
                <span className="font-bold text-white">{route.origin}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F6976B] flex items-center justify-center text-zinc-950 shrink-0">
                <MapPin className="w-5 h-5 text-zinc-950" />
              </div>
              <div>
                <span className="text-xs text-zinc-300 block">الوجهة النهائية</span>
                <span className="font-bold text-white">{route.destination}</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=` + encodeURIComponent(`السلام عليكم، أرغب في حجز توصيل (${route.title})`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-7 py-3.5 rounded-xl font-extrabold text-sm shadow-lg shadow-[#25D366]/30 transition-all hover:scale-105"
            >
              <WhatsappIcon className="w-5 h-5 fill-current" />
              <span>حجز المسار فوراً عبر الواتساب</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 bg-[#256F96] hover:bg-[#1d5777] text-white px-6 py-3.5 rounded-xl font-bold text-sm border border-white/20 transition-all"
            >
              <Phone className="w-5 h-5 text-[#F6976B]" />
              <span>اتصال للحجز: {COMPANY_INFO.displayPhone}</span>
            </a>
          </div>
        </header>

        {/* Detailed Route Description */}
        <section className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm space-y-6">
          <h2 className="text-2xl font-extrabold text-[#18181B]">
            تفاصيل ومميزات رحلة {route.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed whitespace-pre-line">
            {route.detailedDescription}
          </p>

          <div className="space-y-3 pt-4 border-t border-zinc-100">
            <h3 className="text-base font-bold text-[#18181B]">
              أبرز ما تتميز به خدمة التوصيل في هذا المسار:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-700 font-medium">
              {route.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-zinc-50 p-3 rounded-xl border border-zinc-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#256F96] shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended Vehicles */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-[#18181B]">
              السيارات الموصى بها لهذا المسار
            </h2>
            <Link href="/vehicles" className="text-xs font-bold text-[#256F96] hover:underline">
              مشاهدة كافة السيارات ←
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedVehiclesList.map((vehicle) => (
              <div
                key={vehicle.id}
                className="rex-card p-5 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <img
                    src={vehicle.imageUrl}
                    alt={`سيارة ${vehicle.name} لمسار ${route.title}`}
                    width={400}
                    height={250}
                    className="w-full h-40 object-cover rounded-xl"
                  />
                  <h3 className="font-bold text-[#18181B] text-base">
                    <Link href={`/vehicles/${vehicle.slug}`} className="hover:text-[#256F96] transition-colors">
                      {vehicle.name}
                    </Link>
                  </h3>
                  <p className="text-xs text-zinc-500">{vehicle.passengersTag} • {vehicle.luggageCapacity} حقائب</p>
                </div>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=` + encodeURIComponent(`السلام عليكم، أرغب في حجز سيارة (${vehicle.name}) لمسار (${route.title})`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 rounded-xl font-bold text-xs shadow-sm hover:bg-[#20bd5a] transition-colors"
                >
                  <WhatsappIcon className="w-4 h-4 fill-current" />
                  <span>حجز {vehicle.arabicName} بهذا المسار</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Route FAQs Section */}
        {route.faqs && route.faqs.length > 0 && (
          <section className="bg-white rounded-3xl p-8 border border-zinc-200 space-y-6">
            <div className="flex items-center gap-2 text-[#256F96] font-bold text-sm">
              <HelpCircle className="w-5 h-5 text-[#F6976B]" />
              <span>الأسئلة الشائعة حول هذا المسار</span>
            </div>
            <h2 className="text-xl font-extrabold text-[#18181B]">
              أسئلة مكررة من المسافرين
            </h2>

            <div className="space-y-4">
              {route.faqs.map((faq, index) => (
                <div key={index} className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 space-y-2">
                  <h3 className="font-bold text-sm sm:text-base text-[#18181B]">{faq.question}</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
