"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, Car, MapPin, Star, BookOpen, Info, ShieldCheck } from "lucide-react";
import { WhatsappIcon } from "@/components/WhatsappIcon";
import { COMPANY_INFO } from "@/data/company";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "المسارات", href: "/routes", icon: MapPin },
    { name: "السيارات المتاحة", href: "/vehicles", icon: Car },
    { name: "التقييمات", href: "/reviews", icon: Star },
    { name: "المقالات", href: "/blog", icon: BookOpen },
    { name: "من نحن", href: "/about", icon: Info },
    { name: "اتصل بنا", href: "/contact", icon: Phone },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-zinc-100 transition-all">
      {/* Top Banner Bar - Hidden on mobile */}
      <div className="hidden md:block bg-[#0f1c24] text-white py-2 px-4 text-xs font-medium border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#F6976B]">
              <ShieldCheck className="w-4 h-4 text-[#F6976B]" />
              مرخصون ومجربون - 24/7 في خدمتكم
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300">
              توصيل مريح وآمن من مطار جدة إلى مكة المكرمة والمدينة المنورة
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-[#F6976B] transition-colors"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-[#F6976B]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-2.5 py-0.5 rounded-full text-xs font-bold transition-all"
            >
              <WhatsappIcon className="w-3.5 h-3.5 fill-current" />
              <span>واتساب مباشر</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Official Logo */}
          <Link href="/" className="flex items-center gap-3 group py-1">
            <img
              src="/logo.png"
              alt="شعار شركة رواحل جمان للنقل البري"
              className="h-14 sm:h-16 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-50 p-1.5 rounded-full border border-zinc-200/80">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-zinc-700 hover:text-[#256F96] hover:bg-white rounded-full transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 bg-[#256F96] hover:bg-[#1d5777] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-[#256F96]/25 hover:shadow-lg transition-all"
            >
              <Phone className="w-4 h-4 text-[#F6976B]" />
              <span>حجز مباشر</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#25D366] text-white"
              aria-label="WhatsApp"
            >
              <WhatsappIcon className="w-5 h-5 fill-current" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-zinc-100 text-zinc-700 hover:text-[#256F96] hover:bg-zinc-200 transition-colors"
              aria-label="القائمة"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-zinc-800 hover:bg-[#256F96]/10 hover:text-[#256F96] transition-colors"
                >
                  {Icon && <Icon className="w-5 h-5 text-[#256F96]" />}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 bg-[#256F96] text-white py-3 rounded-xl font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-[#F6976B]" />
              <span>اتصال للحجز: {COMPANY_INFO.displayPhone}</span>
            </a>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold text-sm"
            >
              <WhatsappIcon className="w-4 h-4 fill-current" />
              <span>واتساب سريع</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
