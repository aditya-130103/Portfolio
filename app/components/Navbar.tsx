"use client";
import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/70 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-white text-xl tracking-tight gradient-text">
          AM
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="text-sm text-[#666] hover:text-white transition-all duration-200 hover:tracking-wide">
              {l.label}
            </a>
          ))}
          <a href="mailto:adityamullapudi9@gmail.com"
            className="text-sm bg-[#6366f1] text-white px-5 py-2 rounded-full font-medium hover:bg-[#4f52d1] transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25">
            Hire Me
          </a>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#050505]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm text-[#999] hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
