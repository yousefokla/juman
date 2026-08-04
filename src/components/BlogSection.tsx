import React from "react";
import Link from "next/link";
import { BookOpen, Calendar, Clock, ArrowLeft, ChevronLeft } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";

export function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#256F96]/10 text-[#256F96] text-xs sm:text-sm font-extrabold mb-3">
            <BookOpen className="w-4 h-4 text-[#F6976B]" />
            <span>مدونة النقل والعمرة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f1c24] tracking-tight">
            أحدث المقالات والإرشادات لضيوف الرحمن
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            دليلك الشامل لمعرفة نصائح السفر والتنقل من مطار جدة إلى مكة المكرمة واختيار أفضل وسيلة نقل تناسب احتياجاتك.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#256F96]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Blog Image */}
                <div className="relative h-48 bg-slate-900 overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <span className="absolute top-4 right-4 bg-[#256F96] text-white font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
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

                  <h3 className="text-lg font-black text-[#0f1c24] group-hover:text-[#256F96] transition-colors leading-snug line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="p-6 pt-0">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#256F96] hover:text-[#1d5777] transition-colors pt-3 border-t border-slate-100 w-full justify-between"
                >
                  <span>قراءة المقال كاملاً</span>
                  <ChevronLeft className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Blog Link */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#256F96] hover:bg-[#1d5777] text-white font-bold text-sm px-8 py-3.5 rounded-2xl shadow-lg transition-all"
          >
            <span>عرض كافة المقالات والنصائح</span>
            <ArrowLeft className="w-4 h-4 text-[#F6976B]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
