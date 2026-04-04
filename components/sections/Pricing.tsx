"use client";

import { motion } from "motion/react";
import Link from "next/link";

const tiers = [
  {
    name: "The Chapter",
    price: "$1,200",
    featured: false,
    cta: "Begin This Chapter",
    features: [
      "One guided interview session (60 min)",
      "Edited narrative up to 5,000 words",
      "Softcover bound volume",
      "Digital vault with private link",
      "Memory coin (standard)",
    ],
  },
  {
    name: "The Volume",
    price: "$3,200",
    featured: true,
    cta: "Start with the Volume",
    features: [
      "Three interview sessions (90 min each)",
      "Full narrative up to 20,000 words",
      "Hardcover linen-bound volume",
      "Digital vault with photo gallery",
      "Memory coin (brushed brass)",
      "Family tree supplement",
      "Two printed copies included",
    ],
  },
  {
    name: "The Legacy",
    price: "$7,500",
    featured: false,
    cta: "Commission the Legacy",
    features: [
      "Unlimited interview sessions",
      "Complete life narrative — no word limit",
      "Premium leather-bound volume",
      "Digital vault with audio & video",
      "Memory coin (sterling silver)",
      "Family tree & historical research",
      "Five printed copies included",
      "Annual vault maintenance",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 md:px-10 py-24 md:py-40">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-display font-light text-text-primary mb-16 md:mb-20"
          style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
        >
          The Commission
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, ease: "easeOut", delay: i * 0.1 }}
              className={`p-8 md:p-10 flex flex-col transition-colors duration-300 ${
                tier.featured
                  ? "border border-accent/40 bg-surface/50"
                  : "border border-text-tertiary/20 hover:border-text-tertiary/40"
              }`}
            >
              <p className="font-body text-[10px] font-normal tracking-[0.3em] uppercase text-text-secondary mb-4">
                {tier.name}
              </p>
              <p
                className="font-display font-light text-text-primary mb-8"
                style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
              >
                {tier.price}
              </p>

              <ul className="space-y-0 mb-10 flex-1 min-h-[260px]">
                {tier.features.map((feature, fi) => (
                  <li
                    key={feature}
                    className={`font-body text-[13px] font-light text-text-secondary leading-relaxed py-2.5 ${
                      fi < tier.features.length - 1
                        ? "border-b border-text-tertiary/20"
                        : ""
                    }`}
                  >
                    <span className="text-accent mr-2">&middot;</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`inline-block font-body text-[10px] font-normal tracking-[0.2em] uppercase pb-1 transition-colors duration-300 self-start ${
                  tier.featured
                    ? "text-accent border-b border-accent/40 hover:border-accent"
                    : "text-text-secondary border-b border-text-tertiary/40 hover:text-accent hover:border-accent"
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
