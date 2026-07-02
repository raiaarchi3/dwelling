"use client";

// PropertyCard
// Single property tile: photo, location, quick stats, price, and a working
// "Book Now" button. Since there's no backend here, clicking it flips the
// card into a small "request sent" confirmation state rather than doing
// nothing — swap the onClick body for a real API call / booking flow later.

import { useState } from "react";
import Image from "next/image";
import { MapPin, BedDouble, Ruler, Check } from "lucide-react";
import { formatINR, type Property } from "@/lib/properties";

export default function PropertyCard({ property }: { property: Property }) {
  const [booked, setBooked] = useState(false);

  return (
    <article className="overflow-hidden rounded-xl2 border border-ink/10">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 sm:p-5">
        <p className="flex items-center gap-1.5 text-sm font-medium text-ink">
          <MapPin className="h-3.5 w-3.5 text-ink/50" />
          {property.title}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate">
          <span className="flex items-center gap-1">
            <BedDouble className="h-3.5 w-3.5" />
            {property.beds} Bed
          </span>
          <span className="flex items-center gap-1">
            <Ruler className="h-3.5 w-3.5" />
            {property.size}
          </span>
          <span>{property.propertyType}</span>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <button
            onClick={() => setBooked(true)}
            disabled={booked}
            className={`flex items-center gap-1.5 rounded-md px-4 py-2.5 text-xs font-medium transition-colors ${
              booked
                ? "bg-green-600 text-white"
                : "bg-ink text-white hover:bg-ink/85"
            }`}
          >
            {booked ? (
              <>
                <Check className="h-3.5 w-3.5" /> Requested
              </>
            ) : (
              "Book Now"
            )}
          </button>
          <span className="text-sm font-semibold text-ink">
            {formatINR(property.price)}
          </span>
        </div>
      </div>
    </article>
  );
}
