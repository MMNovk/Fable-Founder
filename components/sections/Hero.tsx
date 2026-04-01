"use client";

import { motion } from "motion/react";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";

const brandName = [
  { text: "Fable", italic: true },
  { text: " ", italic: false },
  { text: "&", italic: true },
];
const brandNameLine2 = [{ text: "Founder", italic: false }];

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
              style={char === " " ? { width: "0.3em" } : undefined}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          );
        })
      )}
    </>
  );
}

const floatingImages = [
  {
    url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=200&h=300&fit=crop&auto=format&q=80",
    depth: 0.5,
    className: "absolute top-[10%] left-[5%] w-[75px] h-[112px] md:w-[100px] md:h-[150px]",
    rotate: -6,
    opacity: 0.55,
  },
  {
    url: "https://images.unsplash.com/photo-1504198266287-1659872e6590?w=400&h=275&fit=crop&auto=format&q=80",
    depth: 1.5,
    className: "absolute top-[6%] right-[10%] w-[150px] h-[103px] md:w-[212px] md:h-[137px]",
    rotate: 3,
    opacity: 0.6,
  },
  {
    url: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=175&h=225&fit=crop&auto=format&q=80",
    depth: 2.5,
    className: "absolute top-[35%] left-[15%] w-[65px] h-[84px] md:w-[87px] md:h-[112px]",
    rotate: -2,
    opacity: 0.45,
  },
  {
    url: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=325&h=325&fit=crop&auto=format&q=80",
    depth: 3,
    className: "absolute top-[20%] right-[18%] w-[120px] h-[120px] md:w-[162px] md:h-[162px]",
    rotate: 8,
    opacity: 0.5,
  },
  {
    url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=225&h=325&fit=crop&auto=format&q=80",
    depth: 1,
    className: "absolute bottom-[25%] left-[4%] w-[85px] h-[122px] md:w-[112px] md:h-[162px]",
    rotate: -5,
    opacity: 0.5,
  },
  {
    url: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=250&h=325&fit=crop&auto=format&q=80",
    depth: 4,
    className: "absolute bottom-[20%] right-[6%] w-[100px] h-[137px] md:w-[137px] md:h-[187px]",
    rotate: 4,
    opacity: 0.4,
  },
  {
    url: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=175&h=225&fit=crop&auto=format&q=80",
    depth: 2,
    className: "absolute top-[50%] right-[35%] w-[62px] h-[81px] md:w-[87px] md:h-[112px]",
    rotate: -3,
    opacity: 0.35,
  },
];

// Total letters in line 1: F-a-b-l-e- -& = 7 chars, line2: F-o-u-n-d-e-r = 7 chars = 14 total
// 14 * 0.04s = 0.56s stagger + 0.6s duration ≈ 1.16s total
const PHOTO_START_DELAY = 1.4;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden px-6 md:px-20 pb-16 md:pb-20">
      {/* Floating parallax layer */}
      <Floating
        className="absolute inset-0 pointer-events-none"
        sensitivity={-1}
        easingFactor={0.03}
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
            <AnimatedLetters words={brandName} />
          </span>
          <span className="block">
            <AnimatedLetters words={brandNameLine2} baseDelay={7 * 0.04} />
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
