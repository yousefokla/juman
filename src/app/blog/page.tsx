import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";
import { getBreadcrumbSchema, SITE_URL } from "@/lib/jsonld";
import { BookOpen, Calendar, Clock, ChevronLeft } from "lucide-react";

const pageUrl = `${SITE_URL}/blog`;

export const metadata: Metadata = {
  title: "مدونة النقل والعمرة | نصائح وإرشادات مطار جدة ومكة",
  description: "اقرأ أحدث المقالات والنصائح والإرشادات حول التوصيل من مطار جدة إلى مكة المكرمة والمدينة المنورة واختيار أفضل السيارات لضيوف الرحمن.",
  alternates: {
    canonical: pageUrl,
    languages: {
      "ar-SA": pageUrl,
      "x-default": pageUrl
    }
  },
  openGraph: {
    title: "مدونة رواحل جمان للنقل البري ودليل المعتمر",
    description: "أحدث المقالات والنصائح للتوصيل الخاص بين مطار جدة ومكة والمدينة.",
    url: pageUrl,
  }
};

export default function BlogListPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "الرئيسية", item: "/" },
    { name: "المقالات والدليل", item: "/blog" }
  ]);

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
          <Link href="/" className="hover:text-[#256F96] transition-colors">الرئيسية</Link>
          <span>/</span>
          <span className="text-[#256F96] font-bold">المقالات والدليل</span>
        </nav>

        {/* Page Header */}
        <header className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#256F96]/10 text-[#256F96] text-xs font-bold">
            <BookOpen className="w-4 h-4 text-[#F6976B]" />
            مدونة النقل لضيوف الرحمن
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0f1c24] tracking-tight">
            دليل المعتمر والمقالات التعليمية
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            مجموعة من المقالات التفصيلية لمساعدتك في التخطيط لرحلتك، واختيار أسلوب النقل الأفضل، وتجنب مشاكل الانتظار بمطار جدة.
          </p>
        </header>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl hover:border-[#256F96]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 bg-slate-900 overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 right-4 bg-[#256F96] text-white font-bold text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#256F96]" />
                      {post.publishDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#F6976B]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-black text-[#0f1c24] group-hover:text-[#256F96] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center justify-between text-xs font-extrabold text-[#256F96] hover:text-[#1d5777] transition-colors pt-3 border-t border-slate-100 w-full"
                >
                  <span>اقرأ المقال بالكامل</span>
                  <ChevronLeft className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
