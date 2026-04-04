"use client";

import { motion } from "motion/react";
import Link from "next/link";
import MemoryCoin from "@/components/ui/memory-coin";

export default function TheStory() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Left — Mission + Coin */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex"
        >
          {/* Gold vertical rule */}
          <div className="w-px shrink-0 bg-accent/50 mr-6 md:mr-10" />

          <div className="flex flex-col">
            {/* Mission statement */}
            <p
              className="font-display font-light italic text-text-primary leading-[1.3] mb-12"
              style={{ fontSize: "clamp(24px, 3vw, 32px)" }}
            >
              Everyone knows how Shakespeare lived. Fable & Founder makes sure
              we also know how your grandmother did.
            </p>

            {/* Audio trigger */}
            <p className="font-body text-[11px] font-normal tracking-[0.25em] uppercase text-accent mb-8">
              Listen to his story.
            </p>

            <MemoryCoin
              audioSrc="https://upload.wikimedia.org/wikipedia/commons/4/40/En-us-story.ogg"
              subjectName="Harold Kim"
              subjectDates="1931–2019"
            />
          </div>
        </motion.div>

        {/* Right — Harold Kim portrait + excerpt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="flex flex-col"
        >
          {/* Portrait */}
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
            className="font-display font-light text-text-primary"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
          >
            Harold Kim
          </h3>
          <p className="font-body text-[12px] font-normal tracking-[0.2em] uppercase text-accent mt-1">
            1931 — 2019
          </p>
          <p className="font-body text-[12px] font-light text-text-secondary mt-1 mb-8">
            Busan &middot; San Francisco &middot; Oakland
          </p>

          {/* Archive excerpt */}
          <div className="border-t border-accent/30 pt-6">
            <blockquote
              className="font-display font-light italic text-text-primary leading-[1.4] mb-6"
              style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
            >
              &ldquo;I carried two things off the boat in San Francisco: my
              mother&rsquo;s photograph and the address of a man I had never
              met. Everything else — everything I would become — I had to
              build from what this country handed me and what I refused to let
              go of.&rdquo;
            </blockquote>

            <p className="font-body text-[12px] font-light text-text-tertiary mb-6">
              From &ldquo;The Life of Harold Kim&rdquo; — Commissioned 2024
            </p>

            <Link
              href="/stories/harold-kim"
              className="inline-block font-body text-[11px] font-normal tracking-[0.25em] uppercase text-text-secondary border-b border-text-tertiary/40 pb-1 transition-colors duration-300 hover:text-accent hover:border-accent"
            >
              Read the Full Story &rarr;
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
