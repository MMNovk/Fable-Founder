"use client";

import { useState } from "react";
import { motion } from "motion/react";

const tabs = [
  {
    id: "interview",
    label: "The Interview",
    title: "The Interview",
    content:
      "A guided, intimate conversation — conducted in person or remotely. No scripts, no rush. Just the stories that matter, drawn out by someone trained to listen.",
    artifact:
      "The Voice Recording — the raw material of everything that follows.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop&auto=format&q=80",
    imageAlt: "Two people in intimate conversation",
  },
  {
    id: "craft",
    label: "The Craft",
    title: "The Craft",
    content:
      "Our editorial team transforms raw recordings into a beautifully written narrative. Every word is chosen. Every detail preserved. Reviewed, refined, and approved before production begins.",
    artifact:
      "The Bound Volume — a hardcover, linen-bound book built to last generations.",
    image:
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&h=500&fit=crop&auto=format&q=80",
    imageAlt: "Open book with typeset narrative pages",
  },
  {
    id: "delivery",
    label: "The Delivery",
    title: "The Delivery",
    content:
      "The finished volume, memory coin, and digital vault arrive together in a bespoke package. A complete archive, ready to be passed down through generations.",
    artifact:
      "The Memory Coin + Digital Vault — tap the coin to unlock the full story, forever.",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=500&fit=crop&auto=format&q=80",
    imageAlt: "Leather-bound book alongside brass coin",
  },
];

export default function TheProcess() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-surface min-h-screen px-6 md:px-10 py-24 md:py-40">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-body text-[14px] font-normal tracking-[0.3em] uppercase text-accent mb-16 md:mb-20"
        >
          How It Works
        </motion.p>

        {/* Tab bar */}
        <div className="flex gap-0 border-b border-text-tertiary/30">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(i)}
              className="relative flex-1 pb-4 text-center"
            >
              <span
                className={`font-body text-[10px] font-normal tracking-[0.2em] uppercase transition-colors duration-300 ${
                  activeTab === i
                    ? "text-text-primary"
                    : "text-text-secondary opacity-50 hover:opacity-80"
                }`}
              >
                {tab.label}
              </span>
              {activeTab === i && (
                <motion.div
                  layoutId="process-tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-px bg-accent"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="bg-surface">
          {tabs.map(
            (tab, i) =>
              activeTab === i && (
                <motion.div
                  key={tab.id}
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                    x: -10,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                    x: -10,
                    filter: "blur(10px)",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "circInOut",
                    type: "spring",
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-0"
                >
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tab.image}
                      alt={tab.imageAlt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Text */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h3
                      className="font-display font-light text-text-primary mb-6"
                      style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}
                    >
                      {tab.title}
                    </h3>
                    <p className="font-body text-[15px] font-light text-text-secondary leading-[1.9] mb-8">
                      {tab.content}
                    </p>
                    <div className="border-t border-text-tertiary/30 pt-6">
                      <p className="font-body text-[10px] font-normal tracking-[0.2em] uppercase text-text-tertiary mb-2">
                        What it produces
                      </p>
                      <p className="font-body text-[14px] font-light text-text-primary leading-relaxed">
                        {tab.artifact}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
          )}
        </div>
      </div>
    </section>
  );
}
