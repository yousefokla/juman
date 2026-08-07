"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Users, Briefcase, Filter, ChevronLeft } from "lucide-react";
import { WhatsappIcon } from "@/components/WhatsappIcon";
import { VEHICLES } from "@/data/vehicles";
import { COMPANY_INFO } from "@/data/company";

export function VehicleFilter() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filterOptions = [
    { id: "all", label: "كافة الأسطول", tag: "جميع الأحجام" },
    { id: "1-4", label: "1 - 4 ركاب", tag: "سيدان فاخرة (كامري، تورس، لكزس)" },
    { id: "5-7", label: "5 - 7 ركاب", tag: "عائلي وفان (ستاريا، جمس، هايس)" },
    { id: "9-14", label: "9 - 14 راكب", tag: "فان للمجموعات (هايس)" },
  ];

  const filteredVehicles = VEHICLES.filter((vehicle) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "1-4") return vehicle.passengersMax <= 4;
    if (selectedFilter === "5-7") return vehicle.id === "staria" || vehicle.id === "gmc" || vehicle.id === "hiace";
    if (selectedFilter === "9-14") return vehicle.id === "hiace" || (vehicle.passengersMin >= 9 && vehicle.passengersMax <= 14);
    return true;
  });

  return (
    <section className="relative mt-8 sm:mt-12 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Filter Box Container */}
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-900/5 border border-zinc-200 p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-100">
          <div>
            <div className="inline-flex items-center gap-2 text-[#256F96] text-xs font-bold mb-1">
              <Filter className="w-4 h-4 text-[#F6976B]" />
              <span>أداة اختيار المركبة المناسبة</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#18181B]">
              فلترة السيارات المتاحة حسب عدد الركاب
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-md">
            اختر عدد أفراد عائلتك أو مجموعتك لعرض السيارات الأكثر ملاءمة لرحلتك من مطار جدة إلى مكة المكرمة والمدينة المنورة.
          </p>
        </div>

        {/* Filter Buttons Tabs (Scrollable horizontal row on mobile) */}
        <div className="flex lg:grid lg:grid-cols-4 gap-3 pt-6 overflow-x-auto pb-3 pt-4 scrollbar-none snap-x snap-mandatory touch-pan-x -mx-2 px-2">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedFilter(option.id)}
              className={`shrink-0 min-w-[170px] lg:min-w-0 flex flex-col items-center justify-center p-3.5 rounded-2xl border transition-all duration-200 text-center snap-align-start select-none cursor-pointer ${
                selectedFilter === option.id
                  ? "bg-[#256F96] text-white border-[#256F96] shadow-md scale-102"
                  : "bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100 hover:border-zinc-300"
              }`}
            >
              <div className="flex items-center gap-1.5 font-bold text-sm sm:text-base whitespace-nowrap">
                <Users className={`w-4 h-4 ${selectedFilter === option.id ? "text-[#F6976B]" : "text-[#256F96]"}`} />
                <span>{option.label}</span>
              </div>
              <span className={`text-[11px] mt-1 whitespace-nowrap ${selectedFilter === option.id ? "text-zinc-100" : "text-zinc-500"}`}>
                {option.tag}
              </span>
            </button>
          ))}
        </div>

        {/* Filtered Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="rex-card overflow-hidden flex flex-col justify-between group"
            >
              {/* Vehicle Image */}
              <div className="relative h-48 sm:h-52 bg-zinc-900 overflow-hidden">
                <img
                  src={vehicle.imageUrl}
                  alt={`توصيل سيارة ${vehicle.name} مطار جدة مكة`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />

                {vehicle.badge && (
                  <span className="absolute top-3 right-3 bg-[#F6976B] text-zinc-950 font-black text-xs px-3 py-1 rounded-full shadow-md">
                    {vehicle.badge}
                  </span>
                )}

                <span className="absolute bottom-3 right-3 bg-[#256F96] text-white font-bold text-xs px-3 py-1 rounded-full backdrop-blur-md">
                  {vehicle.type}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#18181B] group-hover:text-[#256F96] transition-colors mb-2">
                    {vehicle.name}
                  </h3>

                  <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed mb-4">
                    {vehicle.description}
                  </p>

                  {/* Specs Pill List */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                    <div className="flex items-center gap-2 bg-zinc-50 p-2 rounded-xl border border-zinc-200 text-zinc-700">
                      <Users className="w-4 h-4 text-[#256F96]" />
                      <span>{vehicle.passengersTag}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-zinc-50 p-2 rounded-xl border border-zinc-200 text-zinc-700">
                      <Briefcase className="w-4 h-4 text-[#F6976B]" />
                      <span>{vehicle.luggageCapacity} حقائب أمتعة</span>
                    </div>
                  </div>

                  {/* Clean Feature List without inline icons */}
                  <ul className="mt-3 space-y-1.5 text-xs text-zinc-600">
                    {vehicle.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#256F96] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-3 border-t border-zinc-100 flex items-center gap-2">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=` + encodeURIComponent(`السلام عليكم، أرغب في الاستفسار وحجز سيارة (${vehicle.name}) لتوصيل مطار جدة / مكة`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-3 rounded-xl font-bold text-xs shadow-sm transition-all"
                  >
                    <WhatsappIcon className="w-4 h-4 fill-current" />
                    <span>حجز واتساب مباشر</span>
                  </a>

                  <Link
                    href={`/vehicles/${vehicle.slug}`}
                    className="flex items-center justify-center p-2.5 rounded-xl bg-zinc-100 hover:bg-[#256F96] hover:text-white text-zinc-700 transition-colors"
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
