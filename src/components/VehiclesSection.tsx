import React from "react";
import Link from "next/link";
import { Car, Users, Briefcase, MessageCircle, ChevronLeft } from "lucide-react";
import { VEHICLES } from "@/data/vehicles";
import { COMPANY_INFO } from "@/data/company";

export function VehiclesSection() {
  return (
    <section id="vehicles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6976B]/15 text-[#e57f50] text-xs font-bold mb-3">
            <Car className="w-4 h-4 text-[#256F96]" />
            <span>أسطول السيارات الفاخرة المتاحة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight">
            أحدث السيارات المصممة لراحتكم من مطار جدة
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
            تضم شركة رواحل جمان تشكيلة متنوعة من السيارات حديثة الموديل (2024 - 2026)، معقمة ومجهزة بأعلى معايير التكييف والسلامة لخدمة الأفراد، العائلات، والوفود.
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VEHICLES.map((vehicle) => (
            <div
              key={vehicle.id}
              className="rex-card overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative h-56 bg-zinc-950 overflow-hidden">
                  <img
                    src={vehicle.imageUrl}
                    alt={`سيارة ${vehicle.name} لتوصيل مطار جدة إلى مكة`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />

                  {vehicle.badge && (
                    <span className="absolute top-4 right-4 bg-[#F6976B] text-zinc-950 font-extrabold text-xs px-3 py-1 rounded-full shadow-md">
                      {vehicle.badge}
                    </span>
                  )}

                  <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    <span className="bg-[#256F96] text-white font-bold text-xs px-3 py-1 rounded-full">
                      {vehicle.passengersTag}
                    </span>
                    <span className="bg-zinc-900/80 text-zinc-200 text-xs px-3 py-1 rounded-full backdrop-blur-md">
                      {vehicle.luggageCapacity} حقائب
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-extrabold text-[#18181B] group-hover:text-[#256F96] transition-colors">
                      {vehicle.name}
                    </h3>
                    <span className="text-xs font-semibold text-[#256F96] bg-[#256F96]/10 px-2.5 py-1 rounded-lg">
                      {vehicle.type}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-600 leading-relaxed line-clamp-3">
                    {vehicle.description}
                  </p>

                  {/* Clean bullet features without inline icons embedded in list text */}
                  <ul className="space-y-1.5 pt-2 text-xs text-zinc-700 font-medium">
                    {vehicle.features.slice(0, 4).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#256F96] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Actions (NO PRICES) */}
              <div className="p-6 pt-0 space-y-3">
                <div className="flex items-center gap-2 pt-3 border-t border-zinc-100">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=` + encodeURIComponent(`السلام عليكم، أرغب في الاستفسار وحجز سيارة (${vehicle.name}) لتوصيل مطار جدة / مكة`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-xl font-bold text-xs shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>حجز مباشر عبر الواتساب</span>
                  </a>

                  <Link
                    href={`/vehicles/${vehicle.slug}`}
                    className="flex items-center justify-center p-3 rounded-xl bg-zinc-100 hover:bg-[#256F96] hover:text-white text-zinc-700 transition-colors"
                    title="تفاصيل السيارة"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
