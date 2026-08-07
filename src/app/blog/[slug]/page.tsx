import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";
import { COMPANY_INFO } from "@/data/company";
import { WhatsappIcon } from "@/components/WhatsappIcon";
import { getArticleSchema, getBreadcrumbSchema, SITE_URL } from "@/lib/jsonld";
import { Calendar, Clock, ArrowRight, Phone, Tag, ShieldCheck, Car, MapPin } from "lucide-react";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);
  if (!post) return {};

  const pageUrl = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: `${post.title} | مدونة رواحل جمان`,
    description: post.excerpt,
    keywords: post.seoKeywords,
    alternates: {
      canonical: pageUrl,
      languages: {
        "ar-SA": pageUrl,
        "x-default": pageUrl
      }
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: pageUrl,
      type: "article",
      publishedTime: new Date("2026-08-01").toISOString(),
      modifiedTime: new Date("2026-08-08").toISOString(),
      authors: [post.author],
      images: [{ url: `${SITE_URL}${post.imageUrl}`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${SITE_URL}${post.imageUrl}`],
    }
  };
}

export default async function BlogPostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const pageUrl = `${SITE_URL}/blog/${post.slug}`;
  const articleSchema = getArticleSchema({
    title: post.title,
    excerpt: post.excerpt,
    url: pageUrl,
    imageUrl: post.imageUrl,
    publishDate: "2026-08-01",
    modifiedDate: "2026-08-08",
    author: post.author
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "الرئيسية", item: "/" },
    { name: "المقالات والدليل", item: "/blog" },
    { name: post.title, item: `/blog/${post.slug}` }
  ]);

  return (
    <div className="py-12 bg-[#F4F4F5] min-h-screen">
      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
          <Link href="/" className="hover:text-[#256F96] transition-colors">الرئيسية</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#256F96] transition-colors">المقالات والدليل</Link>
          <span>/</span>
          <span className="text-[#256F96] font-bold truncate max-w-xs">{post.title}</span>
        </nav>

        {/* Article Header */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 font-semibold">
            <span className="bg-[#256F96] text-white px-3 py-1 rounded-full font-bold">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#256F96]" />
              تاريخ النشر: {post.publishDate} (تحديث: 08 أغسطس 2026)
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#F6976B]" />
              {post.readTime}
            </span>
            <span>•</span>
            <span>بقلم: {post.author}</span>
          </div>

          {/* EXACTLY ONE H1 TAG PER PAGE */}
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#18181B] leading-snug tracking-tight">
            {post.title}
          </h1>

          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-medium">
            {post.excerpt}
          </p>

          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden shadow-md h-72 sm:h-96 bg-zinc-900 border border-zinc-200">
            <img
              src={post.imageUrl}
              alt={post.title}
              width={1200}
              height={630}
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        {/* Article Body Content */}
        <article className="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200 shadow-sm space-y-6 text-zinc-800 text-sm sm:text-base leading-relaxed">
          <div className="space-y-6">
            {post.content.map((paragraph, index) => {
              const isH2 = paragraph.startsWith("لماذا") || paragraph.startsWith("مقدمة") || paragraph.startsWith("اختيار") || paragraph.startsWith("السيارات المتاحة") || paragraph.startsWith("التوصيل الخاص") || paragraph.startsWith("خطوات الحجز") || paragraph.startsWith("أبرز الفروق");
              const isH3 = paragraph.startsWith("1.") || paragraph.startsWith("2.") || paragraph.startsWith("3.") || paragraph.startsWith("نصيحة");

              if (isH2) {
                return (
                  <h2 key={index} className="text-xl sm:text-2xl font-extrabold text-[#18181B] pt-6 border-t border-zinc-100">
                    {paragraph}
                  </h2>
                );
              }

              if (isH3) {
                return (
                  <h3 key={index} className="text-base sm:text-lg font-bold text-[#256F96] pt-3">
                    {paragraph}
                  </h3>
                );
              }

              return (
                <p key={index} className="text-zinc-700 leading-relaxed text-sm sm:text-base">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Internal Links Block for High Technical SEO Authority */}
          <div className="mt-10 p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-4">
            <h3 className="text-base font-bold text-[#18181B] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#F6976B]" />
              <span>روابط ذات صلة بالخدمات والسيارات:</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold">
              <Link href="/routes/jeddah-airport-to-makkah" className="p-3 bg-white rounded-xl border border-zinc-200 hover:border-[#256F96] hover:text-[#256F96] transition-colors flex items-center justify-between">
                <span>توصيل من مطار جدة إلى مكة المكرمة</span>
                <ArrowRight className="w-3.5 h-3.5 rotate-180 text-[#256F96]" />
              </Link>
              <Link href="/routes/makkah-to-madinah" className="p-3 bg-white rounded-xl border border-zinc-200 hover:border-[#256F96] hover:text-[#256F96] transition-colors flex items-center justify-between">
                <span>توصيل بين مكة والمدينة المنورة</span>
                <ArrowRight className="w-3.5 h-3.5 rotate-180 text-[#256F96]" />
              </Link>
              <Link href="/vehicles/gmc-yukon" className="p-3 bg-white rounded-xl border border-zinc-200 hover:border-[#256F96] hover:text-[#256F96] transition-colors flex items-center justify-between">
                <span>حجز سيارة جمس يوكن XL العائلية</span>
                <Car className="w-3.5 h-3.5 text-[#256F96]" />
              </Link>
              <Link href="/vehicles/lexus-es" className="p-3 bg-white rounded-xl border border-zinc-200 hover:border-[#256F96] hover:text-[#256F96] transition-colors flex items-center justify-between">
                <span>حجز سيارة لكزس ES VIP الفاخرة</span>
                <Car className="w-3.5 h-3.5 text-[#256F96]" />
              </Link>
            </div>
          </div>

          {/* Booking CTA Box */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0f1c24] to-[#256F96] text-white space-y-4 shadow-lg">
            <div className="flex items-center gap-2 text-[#F6976B] font-bold text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>حجز مباشر مع شركة رواحل جمان</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold">
              هل ترغب في خدمة توصيل فاخرة ومباشرة من مطار جدة؟
            </h3>
            <p className="text-xs sm:text-sm text-zinc-200">
              تواصل معنا الآن عبر الواتساب وسنقوم بترتيب سيارتك الفاخرة وسائقك لتأمين رحلتك بكل راحة ويسر.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-xl font-bold text-xs shadow-md transition-all"
              >
                <WhatsappIcon className="w-4 h-4 fill-current" />
                <span>حجز سريع عبر الواتساب</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 bg-white text-zinc-900 px-5 py-3 rounded-xl font-bold text-xs hover:bg-zinc-100 transition-all"
              >
                <Phone className="w-4 h-4 text-[#256F96]" />
                <span>اتصل بنا: {COMPANY_INFO.displayPhone}</span>
              </a>
            </div>
          </div>

          {/* SEO Tags Footer */}
          <div className="pt-8 border-t border-zinc-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-zinc-500 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-[#256F96]" />
              الكلمات الدلالية:
            </span>
            {post.seoKeywords.map((tag, idx) => (
              <span key={idx} className="bg-zinc-100 text-zinc-600 text-xs px-2.5 py-1 rounded-lg">
                #{tag}
              </span>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
