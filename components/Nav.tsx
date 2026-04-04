"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Mission", href: "/about#mission" },
      { label: "The Founder", href: "/about#founder" },
    ],
  },
  {
    label: "The Product",
    href: "/product",
    children: [
      { label: "The Book", href: "/product#book" },
      { label: "The Coin", href: "/product#coin" },
      { label: "The Vault", href: "/product#vault" },
    ],
  },
  { label: "Commission", href: "/commission" },
  { label: "Contact", href: "/contact" },
];

function Dropdown({
  items,
  onClose,
}: {
  items: { label: string; href: string }[];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-full right-0 mt-3 py-2 px-1 min-w-[160px]"
      style={{
        background: "#2a2926",
        border: "0.5px solid #4a4540",
        borderRadius: "4px",
      }}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="block px-4 py-2 font-body text-[11px] font-light tracking-[0.12em] text-text-primary transition-opacity duration-200 hover:opacity-60"
        >
          {item.label}
        </Link>
      ))}
    </motion.div>
  );
}

function NavLink({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (item.children) setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="relative font-body text-[11px] font-normal tracking-[0.18em] uppercase text-text-secondary transition-opacity duration-300 hover:opacity-100 opacity-60"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className="font-body text-[11px] font-normal tracking-[0.18em] uppercase text-text-secondary transition-opacity duration-300 hover:opacity-100 opacity-60 flex items-center gap-1"
        onClick={() => setOpen(!open)}
      >
        {item.label}
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M1 1L4 4L7 1"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <Dropdown items={item.children} onClose={() => setOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-6 py-5 md:px-10 md:py-7">
        <Link
          href="/"
          className="font-body text-[11px] font-light tracking-[0.08em] text-text-secondary max-w-[200px] leading-relaxed hidden md:block"
        >
          Premium Storytelling
          <br />& Preservation
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden flex flex-col gap-[5px] pt-1"
          aria-label="Open menu"
        >
          <span className="block w-5 h-px bg-text-secondary" />
          <span className="block w-5 h-px bg-text-secondary" />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center gap-6"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-6 font-body text-[11px] tracking-[0.18em] uppercase text-text-secondary"
              aria-label="Close menu"
            >
              Close
            </button>
            {navItems.map((item, i) => (
              <div key={item.label} className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.15, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-3xl font-light tracking-wide text-text-primary"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="mt-3 flex flex-col gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="font-body text-[12px] font-light text-text-secondary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
