// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Mousewheel } from "swiper/modules"; // Import the Mousewheel module
// import PropertyCard from "./PropertyCard";
// import type { Property } from "@/lib/properties";

// import "swiper/css";
// import "swiper/css/mousewheel"; // Essential styling for the mousewheel runner

// export default function PopularHomes({ properties }: { properties: Property[] }) {
//   return (
//     <section id="properties" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
      
//       {/* Static Header Section */}
//       <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
//         <div>
//           <div className="flex items-center gap-3">
//             <span className="h-px w-8 bg-ink/40" />
//             <span className="text-xs font-medium uppercase tracking-widest text-slate">
//               Popular
//             </span>
//           </div>
//           <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
//             Our Popular Homes
//           </h2>
//         </div>
//       </div>

//       {/* Sliding Houses Container */}
//       {properties.length === 0 ? (
//         <p className="rounded-2xl border border-dashed border-ink/20 p-10 text-center text-sm text-slate">
//           No properties match those filters yet — try a different city, type, or budget.
//         </p>
//       ) : (
//         <div className="w-full">
//           <Swiper
//             modules={[Mousewheel]} // Activate the module here
//             spaceBetween={24}
//             slidesPerView={1}
//             grabCursor={true} // Still lets users click-and-drag if they prefer
//             mousewheel={{
//               forceToAxis: true, // Crucial: Prevents standard page vertical scrolling from breaking
//               sensitivity: 1,    // Adjust this higher or lower to make it slide faster/slower
//             }}
//             breakpoints={{
//               640: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//             className="w-full"
//           >
//             {properties.map((p) => (
//               <SwiperSlide key={p.id} className="py-2 select-none">
//                 <PropertyCard property={p} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       )}
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import PropertyCard from "./PropertyCard";
import PropertyModal from "./PropertyModal"; // Import your new popup modal
import type { Property } from "@/lib/properties";

import "swiper/css";
import "swiper/css/mousewheel";

export default function PopularHomes({ properties }: { properties: Property[] }) {
  // State to check which property was clicked
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  return (
    <section id="properties" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
      {/* Static Header Section */}
      <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-ink/40" />
            <span className="text-xs font-medium uppercase tracking-widest text-slate">
              Popular
            </span>
          </div>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Our Popular Homes
          </h2>
        </div>
      </div>

      {/* Sliding Houses Container */}
      {properties.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-ink/20 p-10 text-center text-sm text-slate">
          No properties match those filters yet.
        </p>
      ) : (
        <div className="w-full">
          <Swiper
            modules={[Mousewheel]}
            spaceBetween={24}
            slidesPerView={1}
            grabCursor={true}
            mousewheel={{ forceToAxis: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {properties.map((p) => (
              <SwiperSlide key={p.id} className="py-2 select-none">
                {/* Clicking on this wrapper div triggers the popup reveal */}
                <div onClick={() => setSelectedProperty(p)} className="cursor-pointer">
                  <PropertyCard property={p} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Renders the overlay popup layout if a card has been targeted */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </section>
  );
}