"use client";

// SearchBar
// The floating white search card. Fully functional: three selects (location,
// property type, budget) plus a submit button that reports the chosen
// filters up to the page, which uses them to filter the property list below.
// Overlaps the hero/white boundary on desktop, sits inline on mobile.

import { MapPin, Home as HomeIcon, IndianRupee } from "lucide-react";
import { CITIES, PROPERTY_TYPES, BUDGET_RANGES } from "@/lib/properties";

export type Filters = {
  city: string;
  propertyType: string;
  budgetLabel: string;
};

export const DEFAULT_FILTERS: Filters = {
  city: "",
  propertyType: "",
  budgetLabel: "",
};

export default function SearchBar({
  filters,
  onChange,
  onSubmit,
}: {
  filters: Filters;
  onChange: (next: Filters) => void;
  onSubmit: () => void;
}) {
  return (
    <section id="search" className="relative -mt-8 px-5 sm:-mt-10 sm:px-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="mx-auto max-w-4xl rounded-xl2 bg-white p-5 shadow-xl shadow-black/10 sm:p-7"
      >
        <h2 className="text-sm font-semibold text-ink sm:text-base">
          Search for available properties
        </h2>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          {/* Location */}
          <label className="flex flex-1 items-center gap-2 rounded-lg border border-ink/15 px-4 py-3">
            <MapPin className="h-4 w-4 shrink-0 text-ink/50" />
            <select
              aria-label="Location"
              value={filters.city}
              onChange={(e) => onChange({ ...filters, city: e.target.value })}
              className="w-full bg-transparent text-sm text-ink outline-none"
            >
              <option value="">Location</option>
              {CITIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>

          {/* Property type */}
          <label className="flex flex-1 items-center gap-2 rounded-lg border border-ink/15 px-4 py-3">
            <HomeIcon className="h-4 w-4 shrink-0 text-ink/50" />
            <select
              aria-label="Property type"
              value={filters.propertyType}
              onChange={(e) =>
                onChange({ ...filters, propertyType: e.target.value })
              }
              className="w-full bg-transparent text-sm text-ink outline-none"
            >
              <option value="">Property Type</option>
              {PROPERTY_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>

          {/* Budget */}
          <label className="flex flex-1 items-center gap-2 rounded-lg border border-ink/15 px-4 py-3">
            <IndianRupee className="h-4 w-4 shrink-0 text-ink/50" />
            <select
              aria-label="Budget"
              value={filters.budgetLabel}
              onChange={(e) =>
                onChange({ ...filters, budgetLabel: e.target.value })
              }
              className="w-full bg-transparent text-sm text-ink outline-none"
            >
              <option value="">Budget</option>
              {BUDGET_RANGES.map((b) => (
                <option key={b.label} value={b.label}>
                  {b.label}
                </option>
              ))}
            </select>
          </label>

          <button
            type="submit"
            className="rounded-lg bg-ink px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
          >
            Search Now
          </button>
        </div>
      </form>
    </section>
  );
}
