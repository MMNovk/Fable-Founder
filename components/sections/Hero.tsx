"use client";

import { motion } from "motion/react";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";

const floatingImages = [
  {
    // Tall letter
    url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=160&h=240&fit=crop&auto=format&q=80",
    depth: 0.5,
    className:
      "absolute top-[12%] left-[8%] w-[60px] h-[90px] md:w-[80px] md:h-[120px]",
    rotate: -6,
    opacity: 0.55,
  },
  {
    // Landscape photo
    url: "https://images.unsplash.com/photo-1504198266287-1659872e6590?w=320&h=220&fit=crop&auto=format&q=80",
    depth: 1.5,
    className:
      "absolute top-[8%] right-[12%] w-[120px] h-[82px] md:w-[160px] md:h-[110px]",
    rotate: 3,
    opacity: 0.6,
  },
  {
    // Small document
    url: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=140&h=180&fit=crop&auto=format&q=80",
    depth: 2.5,
    className:
      "absolute top-[38%] left-[18%] w-[52px] h-[68px] md:w-[70px] md:h-[90px]",
    rotate: -2,
    opacity: 0.45,
  },
  {
    // Square
    url: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=280&h=280&fit=crop&auto=format&q=80",
    depth: 3,
    className:
      "absolute top-[25%] right-[20%] w-[100px] h-[100px] md:w-[140px] md:h-[140px]",
    rotate: 8,
    opacity: 0.5,
  },
  {
    // Tall portrait
    url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=180&h=260&fit=crop&auto=format&q=80",
    depth: 1,
    className:
      "absolute bottom-[22%] left-[6%] w-[68px] h-[98px] md:w-[90px] md:h-[130px]",
    rotate: -5,
    opacity: 0.5,
  },
  {
    // Medium letter
    url: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=200&h=260&fit=crop&auto=format&q=80",
    depth: 4,
    className:
      "absolute bottom-[25%] right-[8%] w-[80px] h-[110px] md:w-[110px] md:h-[150px]",
    rotate: 4,
    opacity: 0.4,
  },
  {
    // Tiny fragment
    url: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=120&h=160&fit=crop&auto=format&q=80",
    depth: 2,
    className:
      "absolute top-[58%] left-[42%] w-[50px] h-[65px] md:w-[70px] md:h-[90px]",
    rotate: -3,
    opacity: 0.35,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Floating parallax layer */}
      <Floating
        className="absolute inset-0 pointer-events-none"
        sensitivity={-1}
        easingFactor={0.03}
      >
        {floatingImages.map((img, i) => (
          <FloatingElement key={i} depth={img.depth} className={img.className}>
            <div
              className="w-full h-full rounded-sm overflow-hidden sepia brightness-75 contrast-90"
              style={{
                transform: `rotate(${img.rotate}deg)`,
                opacity: img.opacity,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.url}
                alt=""
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </FloatingElement>
        ))}
      </Floating>

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
          className="font-display font-light leading-[0.9] tracking-tight"
          style={{ fontSize: "clamp(80px, 12vw, 180px)" }}
        >
          <span className="italic">Fable</span>
          <span className="font-display font-light italic text-text-secondary">
            {" "}
            &{" "}
          </span>
          Founder
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.9, ease: "easeOut" }}
          className="mt-6 md:mt-8 font-body text-[15px] font-light text-text-secondary tracking-wide"
        >
          Everyone knows how Shakespeare lived.
        </motion.p>

        <motion.a
          href="/commission"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="inline-block mt-8 font-body text-[11px] font-normal tracking-[0.25em] uppercase text-accent border-b border-accent/40 pb-1 transition-colors duration-300 hover:border-accent"
        >
          Preserve a Story
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-6 md:left-10 flex items-end gap-3"
      >
        <div className="w-px h-12 bg-text-tertiary" />
        <span className="font-body text-[9px] tracking-[0.2em] uppercase text-text-tertiary">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
