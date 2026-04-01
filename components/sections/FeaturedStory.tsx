"use client";

import { motion } from "motion/react";

export default function FeaturedStory() {
  return (
    <section className="bg-bg-alt px-6 md:px-10 py-24 md:py-40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
        {/* Left — portrait */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="md:col-span-2"
        >
          <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden">
            {/* Placeholder portrait — sepia elderly man */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=600&h=800&fit=crop&auto=format&q=80"
              alt="Harold Kim portrait"
              className="w-full h-full object-cover grayscale sepia brightness-90 contrast-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-bg-alt/20" />
          </div>

          <h3
            className="font-display font-light text-text-primary mt-6"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
          >
            Harold Kim
          </h3>
          <p className="font-body text-[12px] font-normal tracking-[0.2em] uppercase text-accent mt-2">
            1931 — 2019
          </p>
          <p className="font-body text-[12px] font-light text-text-secondary mt-2">
            Busan &middot; San Francisco &middot; Oakland
          </p>
        </motion.div>

        {/* Right — excerpt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="md:col-span-3 flex flex-col justify-center"
        >
          <p className="font-body text-[10px] font-normal tracking-[0.3em] uppercase text-text-secondary mb-8">
            From the Archive
          </p>

          <blockquote
            className="font-display font-light italic text-text-primary leading-[1.4] mb-8"
            style={{ fontSize: "clamp(22px, 2.5vw, 36px)" }}
          >
            &ldquo;I carried two things off the boat in San Francisco: my
            mother&rsquo;s photograph and the address of a man I had never met.
            Everything else — everything I would become — I had to build from
            what this country handed me and what I refused to let go of. Fifty
            years later, I still keep that photograph in my coat pocket. Some
            things you carry because they carry you.&rdquo;
          </blockquote>

          <p className="font-body text-[12px] font-light text-text-tertiary mb-8">
            From &ldquo;The Life of Harold Kim&rdquo; — Commissioned 2024
          </p>

          <a
            href="#"
            className="inline-block font-body text-[11px] font-normal tracking-[0.25em] uppercase text-text-secondary border-b border-text-tertiary/40 pb-1 transition-colors duration-300 hover:text-accent hover:border-accent self-start"
          >
            Read the full story &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
