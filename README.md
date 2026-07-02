# La Maison

A Next.js 14 (App Router) + TypeScript + Tailwind CSS real-estate landing page for the Indian market, built from a design mockup. Fully componentized, fully responsive, and every interactive element (search, filters, mobile menu, book now, explore all) actually works client-side.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
app/
  layout.tsx        Fonts + metadata
  page.tsx           Home page — owns filter state, wires SearchBar to PopularHomes
  globals.css
components/
  Navbar.tsx         Sticky nav, working hamburger menu on mobile
  Hero.tsx            Headline, CTA, hero photo
  Stats.tsx           1200+ / 4500+ / 100+ stat row (used inside Hero)
  SearchBar.tsx        Floating search card — location / property type / budget filters
  PopularHomes.tsx     Property grid with working "Explore All" toggle
  PropertyCard.tsx      Single listing card with working "Book Now" state
  Testimonial.tsx        Dark quote band
  Partners.tsx            Trust-logo strip (original marks, not real brand logos)
lib/
  properties.ts       Property data, types, and the formatINR() helper
```

## What's functional (not just styled)

- **Search**: pick a city, property type, and budget range, hit "Search Now" — the property grid below updates to match. Selections don't affect results until you submit, so nothing jumps around mid-pick.
- **Mobile menu**: the hamburger icon actually opens/closes a real menu panel.
- **Book Now**: since there's no backend, clicking it flips the button into a "Requested" confirmed state. Swap the `onClick` in `PropertyCard.tsx` for a real API call when you have one.
- **Explore All**: toggles between showing 3 properties and the full filtered list.

## Currency & locale

Prices are in INR, formatted with `Intl.NumberFormat('en-IN', ...)` in `lib/properties.ts` so they render with Indian digit grouping (lakhs/crores), e.g. `₹1,00,00,000`. Cities are major Indian metros (Mumbai, Bengaluru, Gurugram, Kolkata, Hyderabad, Pune) — edit the `PROPERTIES` array in `lib/properties.ts` to add real listings.

## Responsiveness

Every section is built mobile-first with Tailwind breakpoints (`sm`, `lg`):
- Hero stacks to a single column under `lg`, image goes full-width above the copy on mobile.
- Search card fields stack vertically on small screens, sit in a row from `sm` up.
- Property grid: 1 column on mobile, 2 on `sm`, 3 on `lg`.
- Testimonial and partner strip reflow from stacked to side-by-side.

## Color palette

Matches the source mockup:
- `sky` (`#DCEEF6`) — hero background
- `ink` (`#101418`) — headings, buttons, dark band
- `slate` (`#5B6470`) — body copy

Defined in `tailwind.config.ts`.

## Images

Hero and property photos are pulled from Unsplash via `next/image` (remote pattern already configured in `next.config.mjs`) — swap for real listing photography whenever you have it.
