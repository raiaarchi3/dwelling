"use client";

// Navbar
// - Sticky top bar with logo, nav links, and CTA.
// - On small screens the links collapse into a hamburger menu (real toggle,
//   driven by useState — not just a static icon).

import { useState } from "react";
import { Home, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Properties", href: "#properties" },
  // { label: "Agents", href: "#agents" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sky/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#home" className="flex items-center gap-2">
          <Home className="h-5 w-5 text-ink" strokeWidth={2.2} />
          <span className="font-display text-lg font-semibold text-ink">
            Dwelling
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-medium text-ink/80 transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#properties"
          className="hidden rounded-md border border-ink px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white md:block"
        >
          Find A House
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-ink md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-ink/10 bg-sky px-5 pb-6 md:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base font-medium text-ink hover:bg-ink/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#properties"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-md bg-ink px-5 py-3 text-center text-sm font-medium text-white"
          >
            Find A House
          </a>
        </div>
      )}
    </header>
  );
}
