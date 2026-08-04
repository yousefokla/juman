import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";
import { COMPANY_INFO } from "@/data/company";
import { WhatsappIcon } from "@/components/WhatsappIcon";
import { Calendar, Clock, ArrowRight, Phone, Tag, ShieldCheck } from "lucide-react";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);
  if (!post) return {};

  return {
    title: `${post.title} | مدونة رواحل جمان للنقل البري`,
    description: post.excerpt,
    keywords: post.seoKeywords,
    alternates: {
      canonical: `https://rawahel-juman.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author],
      images: [{ url: post.imageUrl }],
    },
  };
}

export default async function BlogPostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-14 bg-[#F4F4F5] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Back Link */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#256F96] hover:text-[#1d5777] bg-white px-4 py-2 rounded-xl border border-zinc-200 shadow-sm transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة لكافة المقالات والنصائح</span>
          </Link>
        </div>

        {/* Main Article Header - Only the main title is big per user request */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 font-semibold">
            <span className="bg-[#256F96] text-white px-3 py-1 rounded-full font-bold">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#256F96]" />
              {post.publishDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#F6976B]" />
              {post.readTime}
            </span>
            <span>•</span>
            <span>بقلم: {post.author}</span>
          </div>

          {/* MAIN TITLE (ONLY THIS IS BIG) */}
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#18181B] leading-snug tracking-tight">
            {post.title}
          </h1>

          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
            {post.excerpt}
          </p>

          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden shadow-md h-72 sm:h-96 bg-zinc-900 border border-zinc-200">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Body Content - Clean readable paragraphs */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200 shadow-sm space-y-6 text-zinc-800 text-sm sm:text-base leading-relaxed">
          <div className="space-y-4">
            {post.content.map((paragraph, index) => {
              const isSectionHeader = paragraph.endsWith(":") || paragraph.startsWith("1.") || paragraph.startsWith("2.") || paragraph.startsWith("3.");
              
              if (isSectionHeader && !paragraph.includes("مقدمة") && !paragraph.includes("السيارات المتاحة")) {
                return (
                  <h3 key={index} className="text-base font-bold text-[#256F96] pt-3">
                    {paragraph}
                  </h3>
                );
              }

              if (isSectionHeader) {
                return (
                  <h2 key={index} className="text-lg font-bold text-[#18181B] pt-4 border-t border-zinc-100">
                    {paragraph}
                  </h2>
                );
              }

              return (
                <p key={index} className="text-zinc-700 leading-relaxed text-sm sm:text-base">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Booking CTA Box */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0f1c24] to-[#256F96] text-white space-y-4 shadow-lg">
            <div className="flex items-center gap-2 text-[#F6976B] font-bold text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>احجز رحلتك الآن مع رواحل جمان</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold">
              هل تبحث عن توصيل مباشر مريح من مطار جدة إلى مكة؟
            </h3>
            <p className="text-xs sm:text-sm text-zinc-200">
              تواصل معنا فوراً عبر الواتساب وسنقوم بتنسيق سيارتك الخاصة وسائقك بانتظارك في الصالة عند الوصول.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold text-xs shadow-md"
              >
                <WhatsappIcon className="w-4 h-4 fill-current" />
                <span>حجز سريع عبر الواتساب</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 bg-white text-zinc-900 px-5 py-3 rounded-xl font-bold text-xs"
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
        </div>
      </div>
    </div>
  );
}
