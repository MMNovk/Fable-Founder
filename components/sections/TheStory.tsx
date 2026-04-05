"use client";

import { motion } from "motion/react";
import Link from "next/link";
import MemoryCoin from "@/components/ui/memory-coin";

export default function TheStory() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Left — Identity + Coin + Archive excerpt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col"
        >
          {/* Block 1: Subject identity */}
          <h3
            className="font-display font-light"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)", color: "#d4cfc6" }}
          >
            Harold Kim
          </h3>
          <div className="flex items-start justify-between gap-6">
            <div>
              <p style={{ color: "#c4a96b", fontFamily: "Jost", fontWeight: 300, fontSize: 13 }}>1931 — 2019</p>
              <p style={{ color: "#7a7166", fontFamily: "Jost", fontWeight: 300, fontSize: 13 }}>Busan · San Francisco · Oakland</p>
            </div>
            <MemoryCoin audioSrc="/audio/placeholder.mp3" />
          </div>

          {/* Rule */}
          <div className="w-full mt-8 mb-8" style={{ height: "0.5px", background: "#4a4540" }} />

          {/* Block 3: From the Archive */}
          <p
            className="font-body font-normal text-[10px] uppercase mb-4"
            style={{ letterSpacing: "0.3em", color: "#7a7166" }}
          >
            From &lsquo;The Life of Harold Kim&rsquo; — Commissioned 2024
          </p>

          <blockquote
            className="font-display font-light italic leading-[1.4] mb-6"
            style={{ fontSize: "clamp(18px, 2vw, 20px)", color: "#d4cfc6" }}
          >
            &ldquo;I carried two things off the boat in San Francisco: my
            mother&rsquo;s photograph and the address of a man I had never
            met. Everything else — everything I would become — I had to
            build from what this country handed me and what I refused to let
            go of.&rdquo;
          </blockquote>

          <Link
            href="/stories/harold-kim"
            className="inline-block self-start font-body font-normal text-[11px] uppercase pb-1"
            style={{
              letterSpacing: "0.2em",
              color: "#c4a96b",
              borderBottom: "0.5px solid #c4a96b",
            }}
          >
            Read an Excerpt &rarr;
          </Link>
        </motion.div>

        {/* Right — Portrait ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="flex flex-col"
        >
          <div className="relative w-full max-w-sm aspect-[3/4] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=600&h=800&fit=crop&auto=format&q=80"
              alt="Harold Kim"
              className="w-full h-full object-cover grayscale sepia brightness-90 contrast-110"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
