"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Our Story", href: "#story" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Commission", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-6 py-5 md:px-10 md:py-7">
        <p className="font-body text-[11px] font-light tracking-[0.08em] text-text-secondary max-w-[200px] leading-relaxed hidden md:block">
          Premium Storytelling
          <br />& Preservation
        </p>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-[11px] font-normal tracking-[0.18em] uppercase text-text-secondary transition-opacity duration-300 hover:opacity-100 opacity-60"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden flex flex-col gap-[5px] pt-1"
          aria-label="Open menu"
        >
          <span className="block w-5 h-px bg-text-secondary" />
          <span className="block w-5 h-px bg-text-secondary" />
        </button>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center gap-10"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-6 font-body text-[11px] tracking-[0.18em] uppercase text-text-secondary"
              aria-label="Close menu"
            >
              Close
            </button>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                className="font-display text-3xl font-light tracking-wide text-text-primary"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
