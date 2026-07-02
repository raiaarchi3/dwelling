// Partners
// Trust-logo strip along the bottom of the testimonial band. Uses simple
// original wordmarks + icon glyphs rather than real company logos.

import { Building, Warehouse, Landmark, Building2 } from "lucide-react";

const PARTNERS = [
  { name: "Northgate", icon: Building },
  { name: "Urban Core", icon: Building2 },
  { name: "Stonework", icon: Landmark },
  { name: "Atrium Group", icon: Warehouse },
];

export default function Partners() {
  return (
    <div className="bg-ink px-5 pb-14 sm:px-8 sm:pb-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-4 sm:gap-8">
        {PARTNERS.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="flex flex-col items-center gap-2 text-white/50"
          >
            <Icon className="h-6 w-6" strokeWidth={1.5} />
            <span className="text-[11px] font-medium uppercase tracking-widest">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
