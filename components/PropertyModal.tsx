// "use client";

// import { X, MapPin, Square, DollarSign, Store, ShieldCheck } from "lucide-react";
// import type { Property } from "@/lib/properties";

// interface PropertyModalProps {
//   property: Property;
//   onClose: () => void;
// }

// export default function PropertyModal({ property, onClose }: PropertyModalProps) {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
//       {/* Modal Box */}
//       <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl animate-scale-up">
        
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-ink backdrop-blur-sm transition-all hover:bg-ink hover:text-white"
//         >
//           <X className="h-5 w-5" />
//         </button>

//         {/* Hero Image inside Popup */}
//         <div className="relative h-64 w-full sm:h-72">
//           <img
//             src={property.image || "/images/hero.jpg"}
//             alt={property.title}
//             className="h-full w-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
//         </div>

//         {/* Content Box */}
//         <div className="p-6 sm:p-8">
//           {/* Header Specs */}
//           <div className="flex flex-wrap items-start justify-between gap-4">
//             <div>
//               <span className="inline-block rounded bg-sky px-2.5 py-1 text-xs font-semibold text-ink uppercase">
//                 {property.type || "Premium Listing"}
//               </span>
//               <h3 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">{property.title}</h3>
//               <p className="mt-1 flex items-center gap-1 text-sm text-slate">
//                 <MapPin className="h-4 w-4 text-ink/60" /> {property.location}
//               </p>
//             </div>
//             <div className="text-right">
//               <p className="text-xs text-slate uppercase font-medium tracking-wider">Price</p>
//               <p className="text-2xl font-black text-ink">{property.price || "$2,500"}</p>
//             </div>
//           </div>

//           {/* Quick Stats Grid */}
//           <div className="mt-6 grid grid-cols-2 gap-4 border-y border-slate-100 py-4 sm:grid-cols-3">
//             <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-3">
//               <Square className="h-5 w-5 text-ink/70" />
//               <div>
//                 <p className="text-[10px] text-slate uppercase">Size</p>
//                 <p className="text-sm font-semibold text-ink">{property.size || "1,200 sqft"}</p>
//               </div>
//             </div>
            
//             <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-3">
//               <ShieldCheck className="h-5 w-5 text-ink/70" />
//               <div>
//                 <p className="text-[10px] text-slate uppercase">Status</p>
//                 <p className="text-sm font-semibold text-ink">Ready to Move</p>
//               </div>
//             </div>
//           </div>

//           {/* Amenities & Nearby Landmarks */}
//           <div className="mt-6 grid gap-6 sm:grid-cols-2">
//             {/* Left: Amenities */}
//             <div>
//               <h4 className="text-sm font-bold uppercase tracking-wider text-ink">Premium Amenities</h4>
//               <ul className="mt-3 space-y-2 text-sm text-slate">
//                 {property.amenities?.map((amenity, i) => (
//                   <li key={i} className="flex items-center gap-2">
//                     <span className="h-1.5 w-1.5 rounded-full bg-ink" /> {amenity}
//                   </li>
//                 )) || (
//                   <>
//                     <li className="flex items-center gap-2">🔹 3 Bedrooms & 2 Baths</li>
//                     <li className="flex items-center gap-2">🔹 Modular Kitchen Setup</li>
//                     <li className="flex items-center gap-2">🔹 24/7 Security & Power</li>
//                   </>
//                 )}
//               </ul>
//             </div>

//             {/* Right: Nearby Stores / Places */}
//             <div>
//               <h4 className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-ink">
//                 <Store className="h-4 w-4 text-ink/70" /> Nearby Essentials
//               </h4>
//               <ul className="mt-3 space-y-2 text-sm text-slate">
//                 {/* Fallback mock places if your data object doesn't have nearby arrays yet */}
//                 {property.nearby?.map((place, i) => (
//                   <li key={i} className="flex items-center gap-2">
//                     📍 {place}
//                   </li>
//                 )) || (
//                   <>
//                     <li className="flex items-center gap-2">🛒 Grocery Supermarket (2 min walk)</li>
//                     <li className="flex items-center gap-2">🛍️ Shopping Mall & Cafe (5 min drive)</li>
//                     <li className="flex items-center gap-2">🏥 City Medical Clinic (3 min away)</li>
//                   </>
//                 )}
//               </ul>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

           "use client";

import { useState } from "react";
import { X, MapPin, Square, ShieldCheck, Store, Building, Layout, PlusCircle, Tv, Users, Map } from "lucide-react";
import type { Property } from "@/lib/properties";

interface PropertyModalProps {
  property: Property;
  onClose: () => void;
}

type TabType = "overview" | "details" | "amenities" | "location";

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      {/* Modal Box - Increased layout width and set height box constraints */}
      <div className="relative w-full max-w-4xl h-[90vh] rounded-3xl bg-white shadow-2xl overflow-y-auto flex flex-col animate-scale-up custom-scrollbar">
        
        {/* Close Button - Stays locked in the corner */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md text-ink hover:bg-ink hover:text-white transition-all backdrop-blur-sm"
        >
          <X className="h-5 w-5" />
        </button>

        {/* 1. TOP SECTION: FIXED/FEATURED IMAGE AREA */}
        <div className="relative h-64 w-full sm:h-80 md:h-[380px] shrink-0">
          <img
            src={property.image || "/images/hero.jpg"}
            alt={property.title}
            className="h-full w-full object-cover"
          />
          {/* Subtle elegant shadow overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          
          {/* Title and Location superimposed directly onto the image bottom floor */}
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white">
            <span className="inline-block rounded bg-sky/90 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-ink uppercase tracking-wider">
              {property.type || "Premium Listing"}
            </span>
            <h3 className="mt-2 text-2xl font-bold sm:text-4xl drop-shadow-sm">{property.title}</h3>
            <p className="mt-1.5 flex items-center gap-1.5 text-sm text-white/90 font-medium">
              <MapPin className="h-4 w-4 drop-shadow-sm" /> {property.location}
            </p>
          </div>
        </div>

        {/* 2. CORE INFORMATION WRAPPER CONTAINER */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* MAIN TABS AREA (Left side - Spans 2 columns on large screens) */}
          <div className="lg:col-span-2">
            {/* STICKY TAB BUTTONS BAR */}
            <div className="flex border-b border-slate-200 gap-6 mb-6 overflow-x-auto pb-1">
              {(["overview", "details", "amenities", "location"] as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-sm font-semibold uppercase tracking-wider transition-all border-b-2 px-1 whitespace-nowrap ${
                    activeTab === tab
                      ? "border-ink text-ink"
                      : "border-transparent text-slate hover:text-ink"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* DYNAMIC TAB SECTIONS SWITCHER */}
            <div className="space-y-6">
              {/* OVERVIEW TAB */}
              {activeTab === "overview" && (
                <div className="animate-fade-in">
                  <h4 className="text-lg font-bold text-ink mb-3">About this Property</h4>
                  <p className="text-sm text-slate leading-relaxed">
                    Beautifully designed modern layout catering to contemporary urban lifestyles. Centrally situated with high accessibility to prominent business districts, transport interfaces, and commercial establishments.
                  </p>
                </div>
              )}

              {/* DETAILS TAB */}
              {activeTab === "details" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
                  {/* Basic Info */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-3 flex items-center gap-1.5">
                      <Building className="h-3.5 w-3.5 text-slate" /> Basic Info
                    </h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between"><span className="text-slate">Type</span><span className="font-semibold text-ink">{property.type || "Apartment"}</span></div>
                      <div className="flex justify-between"><span className="text-slate">Building</span><span className="font-semibold text-ink">Residential</span></div>
                      <div className="flex justify-between"><span className="text-slate">Listed For</span><span className="font-semibold text-ink">Sale</span></div>
                      <div className="flex justify-between"><span className="text-slate">Furnishing</span><span className="font-semibold text-ink">Furnished</span></div>
                    </div>
                  </div>

                  {/* Area Layout */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-3 flex items-center gap-1.5">
                      <Layout className="h-3.5 w-3.5 text-slate" /> Area & Layout
                    </h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between"><span className="text-slate">Carpet Area</span><span className="font-semibold text-ink">{property.size || "1250 Sq.Ft."}</span></div>
                      <div className="flex justify-between"><span className="text-slate">Built-up</span><span className="font-semibold text-ink">225 Sq.Ft.</span></div>
                      <div className="flex justify-between"><span className="text-slate">Floor</span><span className="font-semibold text-ink">3 of 3</span></div>
                      <div className="flex justify-between"><span className="text-slate">Facing</span><span className="font-semibold text-ink">North</span></div>
                    </div>
                  </div>

                  {/* Additional Features */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 sm:col-span-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-3 flex items-center gap-1.5">
                      <PlusCircle className="h-3.5 w-3.5 text-slate" /> Additional Features
                    </h4>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs">
                      <div className="flex justify-between"><span className="text-slate">Covered Parking</span><span className="font-semibold text-ink">1</span></div>
                      <div className="flex justify-between"><span className="text-slate">Open Parking</span><span className="font-semibold text-ink">1</span></div>
                      <div className="flex justify-between"><span className="text-slate">Balcony</span><span className="font-semibold text-ink">1</span></div>
                      <div className="flex justify-between"><span className="text-slate">Flooring</span><span className="font-semibold text-ink">Wooden</span></div>
                    </div>
                  </div>
                </div>
              )}

              {/* AMENITIES TAB */}
              {activeTab === "amenities" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fade-in">
                  {[
                    { label: "24 x 7 Security", icon: ShieldCheck },
                    { label: "Security Staff", icon: Users },
                    { label: "Satellite/Cable TV", icon: Tv },
                    { label: "DTH Television Facility", icon: Tv }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 border border-slate-100 rounded-xl p-3 bg-slate-50/60">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-50 text-green-600 shrink-0">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-medium text-ink">{item.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* LOCATION TAB */}
              {activeTab === "location" && (
                <div className="space-y-4 animate-fade-in">
                  <div className="w-full h-48 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center bg-slate-50 text-slate">
                    <Map className="h-6 w-6 mb-1 opacity-40" />
                    <p className="text-xs font-medium">Interactive map coming soon</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* KEY DETAILS SIDEBAR CARD (Right side - Spans 1 column on desktop) */}
          <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate border-b border-slate-200 pb-2">
              Key Details
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate">Price</span>
                <span className="text-base font-extrabold text-ink">{property.price || "₹15.00 Lakh"}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate">Price/Sq.Ft</span>
                <span className="font-semibold text-ink">₹1200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate">Status</span>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-green-50 text-green-700 rounded-full border border-green-100">
                  Ready to Move
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}