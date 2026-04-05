"use client"

import { useEffect } from "react"
import { motion, stagger, useAnimate } from "motion/react"
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1727341554370-80e0fe9ad082?q=80&w=2276&auto=format&fit=crop",
    className: "top-[8%] left-[11%]",
    imgClassName: "w-16 h-16 md:w-24 md:h-24",
    depth: 0.5,
  },
  {
    url: "https://images.unsplash.com/photo-1640680608781-2e4199dd1579?q=80&w=3087&auto=format&fit=crop",
    className: "top-[10%] left-[32%]",
    imgClassName: "w-20 h-20 md:w-28 md:h-28",
    depth: 1,
  },
  {
    url: "https://images.unsplash.com/photo-1726083085160-feeb4e1e5b00?q=80&w=3024&auto=format&fit=crop",
    className: "top-[2%] left-[53%]",
    imgClassName: "w-28 h-40 md:w-40 md:h-52",
    depth: 2,
  },
  {
    url: "https://images.unsplash.com/photo-1562016600-ece13e8ba570?q=80&w=2838&auto=format&fit=crop",
    className: "top-[15%] left-[83%]",
    imgClassName: "w-24 h-24 md:w-32 md:h-32",
    depth: 1,
  },
  {
    url: "https://images.unsplash.com/photo-1624344965199-ed40391d20f2?q=80&w=2960&auto=format&fit=crop",
    className: "top-[40%] left-[2%]",
    imgClassName: "w-28 h-28 md:w-36 md:h-36",
    depth: 1,
  },
  {
    url: "https://images.unsplash.com/photo-1677338354108-223e807fb1bd?q=80&w=3087&auto=format&fit=crop",
    className: "top-[70%] left-[77%]",
    imgClassName: "w-28 h-28 md:w-36 md:h-48",
    depth: 2,
  },
  {
    url: "https://images.unsplash.com/photo-1689553079282-45df1b35741b?q=80&w=3087&auto=format&fit=crop",
    className: "top-[73%] left-[15%]",
    imgClassName: "w-40 md:w-52 h-full",
    depth: 4,
  },
  {
    url: "https://images.unsplash.com/photo-1721968317938-cf8c60fccd1a?q=80&w=2728&auto=format&fit=crop",
    className: "top-[80%] left-[50%]",
    imgClassName: "w-24 h-24 md:w-32 md:h-32",
    depth: 1,
  },
]

const titleText = "Fable & Founder"

export default function Hero() {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const sequence = async () => {
      // Phase 1: letters
      await animate(
        ".hero-letter",
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.5, delay: stagger(0.04), ease: "easeOut" }
      )
      // Phase 2: CTA
      await animate(
        ".hero-cta",
        { opacity: [0, 1], y: [10, 0] },
        { duration: 0.4, ease: "easeOut" }
      )
      // Phase 3: photos — runs AFTER text is done
      animate(
        ".hero-img",
        { opacity: [0, 1] },
        { duration: 0.5, delay: stagger(0.15) }
      )
    }
    sequence()
  }, [])

  // Opacity-only scroll observer — no y to avoid parallax conflict
  useEffect(() => {
    const missionSection = document.getElementById("mission-section")
    if (!missionSection) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(
            ".hero-img",
            { opacity: 0 },
            { duration: 0.5, ease: "easeOut", delay: stagger(0.06) }
          )
        } else {
          animate(
            ".hero-img",
            { opacity: 1 },
            { duration: 0.6, ease: "easeOut", delay: stagger(0.06) }
          )
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(missionSection)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className="flex w-full h-full min-h-screen justify-center items-center overflow-hidden"
      style={{ background: "#2a2926" }}
      ref={scope}
    >
      {/* Centered text — z-50 so it sits above floating images */}
      <div className="z-50 text-center flex flex-col items-center gap-6">
        <h1
          className="font-display font-light leading-none"
          style={{ fontSize: "clamp(72px, 10vw, 140px)", color: "#d4cfc6" }}
        >
          {titleText.split("").map((char, i) => (
            <span
              key={i}
              className={`hero-letter inline-block ${char === " " ? "mr-[0.2em]" : ""}`}
              style={{ opacity: 0, fontStyle: i < 5 ? "italic" : "normal" }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <a
          href="/commission"
          className="hero-cta font-body font-normal uppercase text-[11px] tracking-[0.25em] pb-2 border-b transition-colors duration-300"
          style={{ opacity: 0, color: "#d4cfc6", borderColor: "#c4a96b" }}
        >
          Preserve a Story
        </a>
      </div>

      {/* Floating images — all start opacity 0, animate in after text */}
      <Floating sensitivity={-1} className="overflow-hidden">
        {heroImages.map((img, i) => (
          <FloatingElement key={i} depth={img.depth} className={img.className}>
            <motion.img
              initial={{ opacity: 0 }}
              src={img.url}
              alt=""
              className={`hero-img ${img.imgClassName} object-cover hover:scale-105 duration-200 cursor-pointer transition-transform`}
              style={{ filter: "sepia(0.5) brightness(0.85)" }}
            />
          </FloatingElement>
        ))}
      </Floating>
    </div>
  )
}
