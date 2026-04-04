"use client";

import { motion } from "motion/react";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";

const brandLine1 = [
  { text: "Fable", italic: true },
  { text: "\u00A0", italic: false },
  { text: "&", italic: true },
];
const brandLine2 = [{ text: "Founder", italic: false }];

function AnimatedLetters({
  words,
  baseDelay = 0,
}: {
  words: { text: string; italic: boolean }[];
  baseDelay?: number;
}) {
  let letterIndex = 0;
  return (
    <>
      {words.map((word, wi) =>
        word.text.split("").map((char, ci) => {
          const delay = baseDelay + letterIndex * 0.04;
          letterIndex++;
          return (
            <motion.span
              key={`${wi}-${ci}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay, duration: 0.6, ease: "easeOut" }}
              className={`inline-block ${word.italic ? "italic" : ""} ${
                char === "&" ? "text-text-secondary" : ""
              }`}
            >
              {char}
            </motion.span>
          );
        })
      )}
    </>
  );
}

// All photos stay in upper 60% OR right 40%.
// No photo where top > 55% AND left < 45% (text zone = bottom-left).
const floatingImages = [
  {
    // Tall portrait — top-left safe zone
    url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=200&h=300&fit=crop&auto=format&q=80",
    depth: 0.5,
    className: "top-[8%] left-[8%] w-[75px] h-[112px] md:w-[100px] md:h-[150px]",
    rotate: -8,
    opacity: 0.55,
  },
  {
    // Wide landscape — top-center
    url: "https://images.unsplash.com/photo-1504198266287-1659872e6590?w=440&h=280&fit=crop&auto=format&q=80",
    depth: 1.5,
    className: "top-[5%] left-[35%] w-[165px] h-[105px] md:w-[220px] md:h-[140px]",
    rotate: 3,
    opacity: 0.6,
  },
  {
    // Small square — upper-center-right
    url: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=180&h=180&fit=crop&auto=format&q=80",
    depth: 2.5,
    className: "top-[18%] right-[12%] w-[68px] h-[68px] md:w-[90px] md:h-[90px]",
    rotate: -2,
    opacity: 0.45,
  },
  {
    // Medium portrait — center-right
    url: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=240&h=330&fit=crop&auto=format&q=80",
    depth: 3,
    className: "top-[22%] right-[28%] w-[90px] h-[124px] md:w-[120px] md:h-[165px]",
    rotate: 8,
    opacity: 0.5,
  },
  {
    // Landscape — right side mid
    url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=260&fit=crop&auto=format&q=80",
    depth: 1,
    className: "top-[42%] right-[5%] w-[150px] h-[97px] md:w-[200px] md:h-[130px]",
    rotate: -5,
    opacity: 0.5,
  },
  {
    // Tall — top-right area
    url: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=250&h=340&fit=crop&auto=format&q=80",
    depth: 4,
    className: "top-[6%] right-[3%] w-[100px] h-[137px] md:w-[137px] md:h-[187px]",
    rotate: 4,
    opacity: 0.4,
  },
  {
    // Small — upper center fill
    url: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=180&h=180&fit=crop&auto=format&q=80",
    depth: 2,
    className: "top-[30%] left-[28%] w-[62px] h-[62px] md:w-[85px] md:h-[85px]",
    rotate: -3,
    opacity: 0.35,
  },
  {
    // Extra — center-top gap fill
    url: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=300&h=200&fit=crop&auto=format&q=80",
    depth: 1.5,
    className: "top-[12%] left-[55%] w-[110px] h-[72px] md:w-[150px] md:h-[98px]",
    rotate: 6,
    opacity: 0.42,
  },
];

const PHOTO_START_DELAY = 1.6;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden px-6 md:px-20 pb-16 md:pb-20">
      {/* Floating parallax layer */}
      <Floating
        className="pointer-events-none"
        sensitivity={-1}
        easingFactor={0.025}
      >
        {floatingImages.map((img, i) => (
          <FloatingElement key={i} depth={img.depth} className={img.className}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: img.opacity }}
              transition={{
                delay: PHOTO_START_DELAY + i * 0.15,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="w-full h-full rounded-sm overflow-hidden sepia brightness-75 contrast-90"
              style={{ transform: `rotate(${img.rotate}deg)` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.url}
                alt=""
                className="w-full h-full object-cover"
                loading="eager"
              />
            </motion.div>
          </FloatingElement>
        ))}
      </Floating>

      {/* Hero content — bottom-left anchored */}
      <div className="relative z-10 max-w-5xl">
        <h1
          className="font-display font-light leading-[0.9] tracking-tight"
          style={{ fontSize: "clamp(72px, 10vw, 140px)" }}
        >
          <span className="block">
            <AnimatedLetters words={brandLine1} />
          </span>
          <span className="block">
            <AnimatedLetters words={brandLine2} baseDelay={7 * 0.04} />
          </span>
        </h1>

        <motion.a
          href="/commission"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="inline-block mt-8 md:mt-10 font-body text-[11px] font-normal tracking-[0.25em] uppercase text-text-primary border-b border-accent/40 pb-1 transition-colors duration-300 hover:border-accent hover:text-accent"
        >
          Preserve a Story
        </motion.a>
      </div>
    </section>
  );
}
