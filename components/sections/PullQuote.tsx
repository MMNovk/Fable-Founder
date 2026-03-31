"use client";

import { motion } from "motion/react";

export default function PullQuote() {
  return (
    <section className="relative px-6 md:px-10 py-24 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-4xl ml-0 md:ml-16 flex gap-6 md:gap-10"
      >
        {/* Gold vertical rule */}
        <div className="w-px shrink-0 bg-accent/60" />

        <div>
          <p
            className="font-display font-light italic text-text-primary leading-[1.3]"
            style={{ fontSize: "clamp(28px, 3.5vw, 52px)" }}
          >
            Everyone knows how Shakespeare lived. Fable & Founder makes sure we
            also know how your grandmother did.
          </p>
          <p className="mt-8 font-body text-[10px] font-normal tracking-[0.3em] uppercase text-text-secondary">
            &mdash; The Fable & Founder Promise
          </p>
        </div>
      </motion.div>
    </section>
  );
}
