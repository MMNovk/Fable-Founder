"use client";

import { motion } from "motion/react";
import Link from "next/link";
import MemoryCoin from "@/components/ui/memory-coin";

export default function TheStory() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Left — Coin + Archive excerpt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col"
        >
          {/* Block 1: Coin + Listen inline */}
          <div className="mb-8">
            <MemoryCoin
              audioSrc="https://upload.wikimedia.org/wikipedia/commons/4/40/En-us-story.ogg"
            />
          </div>

          {/* Rule */}
          <div className="w-full mb-8" style={{ height: "0.5px", background: "#4a4540" }} />

          {/* Block 2: From the Archive */}
          <p
            className="font-body font-normal text-[10px] uppercase mb-4"
            style={{ letterSpacing: "0.3em", color: "#7a7166" }}
          >
            From the Archive
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

          <p className="font-body font-light text-[12px] mb-6" style={{ color: "#7a7166" }}>
            From &ldquo;The Life of Harold Kim&rdquo; — Commissioned 2024
          </p>

          <Link
            href="/stories/harold-kim"
            className="inline-block self-start font-body font-normal text-[11px] uppercase pb-1"
            style={{
              letterSpacing: "0.2em",
              color: "#c4a96b",
              borderBottom: "0.5px solid #c4a96b",
            }}
          >
            Read the Full Story &rarr;
          </Link>
        </motion.div>

        {/* Right — Portrait only */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="flex flex-col"
        >
          <div className="relative w-full max-w-sm aspect-[3/4] overflow-hidden mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=600&h=800&fit=crop&auto=format&q=80"
              alt="Harold Kim"
              className="w-full h-full object-cover grayscale sepia brightness-90 contrast-110"
              loading="lazy"
            />
          </div>

          <h3
            className="font-display font-light"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)", color: "#d4cfc6" }}
          >
            Harold Kim
          </h3>
          <p
            className="font-body font-light text-[12px] uppercase mt-1"
            style={{ letterSpacing: "0.2em", color: "#c4a96b" }}
          >
            1931 — 2019
          </p>
          <p className="font-body font-light text-[12px] mt-1" style={{ color: "#7a7166" }}>
            Busan &middot; San Francisco &middot; Oakland
          </p>
        </motion.div>
      </div>
    </section>
  );
}
