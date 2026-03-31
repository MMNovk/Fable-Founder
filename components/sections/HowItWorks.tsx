"use client";

import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "The Interview",
    description:
      "A guided, intimate conversation — conducted in person or remotely — where we capture the stories, memories, and moments that matter most. Thoughtful questions, unhurried pace, complete confidentiality.",
  },
  {
    number: "02",
    title: "The Craft",
    description:
      "Our editorial team transforms raw recordings into a beautifully written narrative. Every word is chosen with care. The result is reviewed, refined, and approved before production begins.",
  },
  {
    number: "03",
    title: "The Delivery",
    description:
      "The finished volume, memory coin, and digital vault are presented together in a bespoke package. A complete archive, ready to be passed down through generations.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-bg-alt px-6 md:px-10 py-24 md:py-40">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-body text-[10px] font-normal tracking-[0.3em] uppercase text-text-secondary mb-16 md:mb-24"
        >
          How It Works
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
                delay: i * 0.1,
              }}
              className="relative"
            >
              {/* Ghost number */}
              <span
                className="font-display font-light text-accent leading-none absolute -top-2 left-0"
                style={{ fontSize: "clamp(60px, 6vw, 80px)", opacity: 0.08 }}
              >
                {step.number}
              </span>

              <div className="relative pt-14">
                <h3
                  className="font-display font-light text-text-primary mb-5"
                  style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
                >
                  {step.title}
                </h3>
                <p className="font-body text-[14px] font-light text-text-secondary leading-[1.9]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Context label */}
        <div className="mt-16 md:mt-24 flex justify-end">
          <div className="text-right">
            <p className="font-body text-[10px] font-normal tracking-[0.3em] uppercase text-text-tertiary">
              Fable & Founder
            </p>
            <p className="font-body text-[10px] font-normal tracking-[0.3em] uppercase text-text-tertiary mt-1">
              Process
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
