"use client";

import { motion } from "motion/react";

export default function Mission() {
  return (
    <section className="relative px-6 md:px-10 py-32 md:py-48 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-text-tertiary"
          style={{ opacity: 0.04 }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-text-tertiary"
          style={{ opacity: 0.04 }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-body text-[10px] font-normal tracking-[0.3em] uppercase text-text-secondary mb-8"
        >
          Our Mission
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-display font-light italic text-text-primary leading-[1.2] mb-8"
          style={{ fontSize: "clamp(32px, 4vw, 60px)" }}
        >
          Every person who ever lived had a story worth telling. Most were never
          written down.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="font-body text-[15px] font-light text-text-secondary leading-[1.9] max-w-xl mx-auto mb-10"
        >
          We exist to change that. Fable & Founder preserves the voices,
          memories, and wisdom of the people who shaped your world — before
          time takes them from us.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block font-body text-[11px] font-normal tracking-[0.25em] uppercase text-accent border-b border-accent/40 pb-1 transition-colors duration-300 hover:border-accent"
        >
          Begin a Story
        </motion.a>
      </div>
    </section>
  );
}
