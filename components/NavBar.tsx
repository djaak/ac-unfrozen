"use client";

import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services", active: true },
  { label: "About", href: "#stats", active: false },
  { label: "FAQ", href: "#faq", active: false },
  { label: "Contact", href: "#contact", active: false },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0e1322]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_0_20px_rgba(0,212,255,0.05)]">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-cyan-400" aria-hidden="true">ac_unit</span>
          <span className="text-xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 font-headline">
            AC UNFROZEN
          </span>
        </div>

        <nav className="hidden md:flex gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-headline tracking-tight transition-colors uppercase text-sm ${
                link.active
                  ? "text-cyan-400 font-bold hover:text-cyan-300"
                  : "text-slate-400 hover:text-cyan-300"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="material-symbols-outlined text-cyan-400 md:hidden"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "close" : "menu"}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-white/5 bg-[#0e1322]/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-headline tracking-tight transition-colors uppercase text-sm ${
                link.active
                  ? "text-cyan-400 font-bold"
                  : "text-slate-400 hover:text-cyan-300"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
