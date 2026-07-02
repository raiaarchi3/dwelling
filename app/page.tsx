"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar, { DEFAULT_FILTERS, type Filters } from "@/components/SearchBar";
import PopularHomes from "@/components/PopularHomes";
import Testimonial from "@/components/Testimonial";
import Partners from "@/components/Partners";
import ContactPage from "@/components/ContactPage";
import LoadingOverlay from "@/components/LoadingOverlay";

import { PROPERTIES, BUDGET_RANGES } from "@/lib/properties";

export default function Home() {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [appliedFilters, setAppliedFilters] = useState<Filters>(DEFAULT_FILTERS);
  
  // Loading state for the animation
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchSubmit = () => {
    setIsLoading(true); 
    
    setTimeout(() => {
      setAppliedFilters(filters);
      setIsLoading(false); 
    }, 1500);
  };

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((p) => {
      if (appliedFilters.city && p.city !== appliedFilters.city) return false;
      if (appliedFilters.propertyType && p.propertyType !== appliedFilters.propertyType) return false;
      if (appliedFilters.budgetLabel) {
        const range = BUDGET_RANGES.find((b) => b.label === appliedFilters.budgetLabel);
        if (range && (p.price < range.min || p.price >= range.max)) return false;
      }
      return true;
    });
  }, [appliedFilters]);

  return (
    <main>
      <LoadingOverlay isVisible={isLoading} />
      <Navbar />
      <Hero />
      <SearchBar
        filters={filters}
        onChange={setFilters}
        onSubmit={handleSearchSubmit}
      />
      <PopularHomes properties={filteredProperties} />
            <ContactPage />

      <Testimonial />
      {/* <Partners /> */}
    </main>
  );
}