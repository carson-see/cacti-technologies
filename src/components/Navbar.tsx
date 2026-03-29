"use client";

import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cactus">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M12 2v20M8 6v12M16 4v16M4 10v4M20 8v8" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-lg font-bold text-slate-900">
            Cacti<span className="text-cactus">Tech</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-cactus"
            >
              {link.label}
            </a>
          ))}
          <a href="#audit" className="btn-primary text-sm">
            Free Site Audit
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-slate-600 hover:text-cactus"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#audit"
            onClick={() => setMobileOpen(false)}
            className="btn-primary mt-3 block w-full text-center text-sm"
          >
            Free Site Audit
          </a>
        </div>
      )}
    </nav>
  );
}
