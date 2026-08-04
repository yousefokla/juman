import React from "react";
import Metadata from "next";
import Link from "next/link";
import { VEHICLES } from "@/data/vehicles";
import { COMPANY_INFO } from "@/data/company";
import { VehicleFilter } from "@/components/VehicleFilter";
import { WhatsappIcon } from "@/components/WhatsappIcon";
import { Car, Users, Briefcase, ChevronLeft } from "lucide-react";

export const metadata = {
  title: "أسطول السيارات المتاحة | كامري، ستاريا، جمس، هايس، كوستر",
  description: "استعرض كافة السيارات المتاحة للتوصيل من مطار جدة إلى مكة المكرمة والمدينة المنورة لدى شركة رواحل جمان للنقل البري. أحدث الموديلات وحجز مباشر عبر الواتساب.",
};

export default function VehiclesPage() {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6976B]/15 text-[#e57f50] text-xs font-bold">
            <Car className="w-4 h-4 text-[#256F96]" />
            أسطول رواحل جمان 2026
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0f1c24] tracking-tight">
            السيارات الفاخرة المتاحة للحجز
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            مجموعة متكاملة من أحدث السيارات المجهزة بالكامل لخدمة الأفراد، العائلات، والوفود القادمة عبر مطار جدة لزيارة مكة المكرمة والمدينة المنورة.
          </p>
        </div>

        {/* Passenger Filter Component embedded */}
        <VehicleFilter />

        {/* Full Fleet Detailed Listing */}
        <div className="space-y-8 pt-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-black text-[#0f1c24]">
              تفاصيل كافة السيارات والمواصفات
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              جميع السيارات موديلات حديثة ومعقمة يومياً وتأتي مع سائق محترف.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VEHICLES.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl hover:border-[#256F96]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 bg-slate-950">
                    <img
                      src={vehicle.imageUrl}
                      alt={vehicle.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    {vehicle.badge && (
                      <span className="absolute top-4 right-4 bg-[#F6976B] text-slate-950 font-black text-xs px-3 py-1 rounded-full">
                        {vehicle.badge}
                      </span>
                    )}

                    <span className="absolute bottom-4 right-4 bg-[#256F96] text-white font-bold text-xs px-3 py-1 rounded-full">
                      {vehicle.passengersTag}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-black text-[#0f1c24]">
                      {vehicle.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {vehicle.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                      <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl border border-slate-100">
                        <Users className="w-4 h-4 text-[#256F96]" />
                        <span>{vehicle.passengersTag}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl border border-slate-100">
                        <Briefcase className="w-4 h-4 text-[#F6976B]" />
                        <span>{vehicle.luggageCapacity} حقائب</span>
                      </div>
                    </div>

                    <ul className="space-y-1.5 text-xs text-slate-600 pt-2">
                      {vehicle.features.slice(0, 4).map((f, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#256F96] shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-3">
                  <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=` + encodeURIComponent(`السلام عليكم، أرغب في حجز سيارة (${vehicle.name})`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-xl font-bold text-xs shadow-md transition-all"
                    >
                      <WhatsappIcon className="w-4 h-4 fill-current" />
                      <span>حجز مباشر عبر الواتساب</span>
                    </a>

                    <Link
                      href={`/vehicles/${vehicle.slug}`}
                      className="flex items-center justify-center p-3 rounded-xl bg-slate-100 hover:bg-[#256F96] hover:text-white text-slate-700 transition-colors text-xs font-bold"
                    >
                      <span>التفاصيل</span>
                      <ChevronLeft className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
