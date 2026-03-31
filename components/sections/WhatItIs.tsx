"use client";

import { motion } from "motion/react";

const artifacts = [
  {
    numeral: "I",
    title: "The Bound Volume",
    description:
      "A hardcover, linen-bound book containing the full narrative of a life — transcribed, edited, and designed with archival-quality materials built to last generations.",
  },
  {
    numeral: "II",
    title: "The Memory Coin",
    description:
      "A custom NFC-enabled coin, crafted in brushed metal. Tap it with any phone to unlock the private digital memory vault — no app required.",
  },
  {
    numeral: "III",
    title: "The Digital Vault",
    description:
      "A secure, private web experience housing the full story, photographs, audio excerpts, and supplementary materials. Accessible forever via the coin or a private link.",
  },
];

export default function WhatItIs() {
  return (
    <section id="story" className="px-6 md:px-10 py-24 md:py-40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="font-body text-[10px] font-normal tracking-[0.3em] uppercase text-text-secondary mb-6">
            The Artifact
          </p>
          <h2
            className="font-display font-light text-text-primary leading-[1.15]"
            style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
          >
            A story worth holding in your hands.
          </h2>
          <p className="mt-8 font-body text-[15px] font-light text-text-secondary leading-[1.9] max-w-md">
            Each Fable & Founder commission produces a singular set of
            artifacts: a physical volume, a digital vault, and a memory coin
            that bridges the two. Together, they ensure a life story endures
            beyond memory.
          </p>
        </motion.div>

        {/* Right column — artifact list */}
        <div className="flex flex-col">
          {artifacts.map((item, i) => (
            <motion.div
              key={item.numeral}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
                delay: i * 0.1,
              }}
              className={`py-8 ${i < artifacts.length - 1 ? "border-b border-text-tertiary/40" : ""}`}
            >
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-display text-lg text-accent font-light">
                  {item.numeral}
                </span>
                <h3
                  className="font-display font-light text-text-primary"
                  style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
                >
                  {item.title}
                </h3>
              </div>
              <p className="font-body text-[13px] font-light text-text-secondary leading-[1.85] ml-8">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Context label */}
      <div className="max-w-6xl mx-auto mt-16 flex justify-end">
        <div className="text-right">
          <p className="font-body text-[10px] font-normal tracking-[0.3em] uppercase text-text-tertiary">
            Fable & Founder
          </p>
          <p className="font-body text-[10px] font-normal tracking-[0.3em] uppercase text-text-tertiary mt-1">
            The Collection
          </p>
        </div>
      </div>
    </section>
  );
}
