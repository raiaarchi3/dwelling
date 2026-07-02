// Central place for property data + shared types.
// In a real app this would come from an API / CMS — kept static here so the
// search and filtering logic has something real to work against.

export type Property = {
  id: string;
  title: string; // neighbourhood, city — e.g. "Bandra West, Mumbai"
  city: string;
  propertyType: "Apartment" | "Villa" | "Studio" | "Independent House";
  beds: number;
  size: string; // e.g. "1200 sq.ft"
  price: number; // in INR, raw number so we can filter by budget
  image: string;
};

export const PROPERTIES: Property[] = [
  {
    id: "p1",
    title: "Bandra West, Mumbai",
    city: "Mumbai",
    propertyType: "Apartment",
    beds: 4,
    size: "1600 sq.ft",
    price: 10000000, // ₹1 Cr
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: "p2",
    title: "Koramangala, Bengaluru",
    city: "Bengaluru",
    propertyType: "Villa",
    beds: 5,
    size: "2400 sq.ft",
    price: 20000000, // ₹2 Cr
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: "p3",
    title: "Cyber City, Gurugram",
    city: "Gurugram",
    propertyType: "Apartment",
    beds: 3,
    size: "1450 sq.ft",
    price: 50000000, // ₹5 Cr
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: "p4",
    title: "Salt Lake, Kolkata",
    city: "Kolkata",
    propertyType: "Independent House",
    beds: 4,
    size: "2100 sq.ft",
    price: 8500000,
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: "p5",
    title: "Banjara Hills, Hyderabad",
    city: "Hyderabad",
    propertyType: "Studio",
    beds: 1,
    size: "620 sq.ft",
    price: 4200000,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "p6",
    title: "Aundh, Pune",
    city: "Pune",
    propertyType: "Apartment",
    beds: 3,
    size: "1350 sq.ft",
    price: 9800000,
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1974&auto=format&fit=crop",
  },
];

export const CITIES = Array.from(new Set(PROPERTIES.map((p) => p.city)));
export const PROPERTY_TYPES = Array.from(
  new Set(PROPERTIES.map((p) => p.propertyType))
);

export const BUDGET_RANGES = [
  { label: "Under ₹50L", min: 0, max: 5000000 },
  { label: "₹50L – ₹1Cr", min: 5000000, max: 10000000 },
  { label: "₹1Cr – ₹2Cr", min: 10000000, max: 20000000 },
  { label: "Above ₹2Cr", min: 20000000, max: Infinity },
] as const;

/** Formats a raw INR number using Indian digit grouping, e.g. 10000000 -> "₹1,00,00,000" */
export function formatINR(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}
