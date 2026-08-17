"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = ["about", "experience", "projects", "skills", "contact"] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
      >
        <nav
          className={`flex items-center justify-between w-full max-w-2xl px-5 py-3 rounded-2xl transition-all duration-300 ${
            scrolled
              ? "bg-[#030308]/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-violet-900/20"
              : "bg-[#030308]/40 backdrop-blur-md border border-white/[0.07]"
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            className="font-heading font-bold text-sm text-white hover:text-violet-400 transition-colors duration-200"
          >
            pritesh
            <span className="text-violet-400">.</span>
            <span className="text-cyan-400">dev</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className="text-xs font-medium text-slate-400 hover:text-white transition-colors duration-200 capitalize"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + mobile menu toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-lg bg-violet-600/15 text-violet-300 border border-violet-500/25 hover:bg-violet-600 hover:text-white transition-all duration-200 cursor-pointer"
            >
              Hire me
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="md:hidden w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed top-20 inset-x-4 z-40 rounded-2xl bg-[#0D0D1A]/95 backdrop-blur-xl border border-white/10 p-5 flex flex-col gap-4 md:hidden shadow-2xl"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-slate-300 hover:text-white capitalize py-1 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-1 text-center text-sm font-semibold px-5 py-2.5 rounded-xl bg-violet-600 text-white hover:bg-violet-500 transition-colors duration-200"
          >
            Hire me
          </a>
        </motion.div>
      )}
    </>
  );
}
