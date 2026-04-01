"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const tabs = [
  {
    id: "interview",
    label: "The Interview",
    number: "01",
    content:
      "A guided conversation, conducted at your pace. In person or remote. Everything captured. No scripts, no rush — just the stories that matter, drawn out with care by someone trained to listen.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop&auto=format&q=80",
    imageAlt: "Two people in intimate conversation",
  },
  {
    id: "craft",
    label: "The Craft",
    number: "02",
    content:
      "Our writers shape a lifetime into a narrative. Every word chosen. Every detail preserved. The result is reviewed, refined, and approved before production begins — a story told as beautifully as it was lived.",
    image:
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&h=500&fit=crop&auto=format&q=80",
    imageAlt: "Open book with typeset narrative",
  },
  {
    id: "delivery",
    label: "The Delivery",
    number: "03",
    content:
      "Delivered as a complete heirloom. The volume. The coin. The vault. Yours forever. A single package containing everything needed to keep a life story alive across generations.",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=500&fit=crop&auto=format&q=80",
    imageAlt: "Leather-bound book with coin artifact",
  },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="how-it-works" className="bg-bg-alt px-6 md:px-10 py-24 md:py-40">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-body text-[10px] font-normal tracking-[0.3em] uppercase text-text-secondary mb-16 md:mb-20"
        >
          How It Works
        </motion.p>

        {/* Tabs */}
        <div className="flex gap-0 mb-12 md:mb-16 border-b border-text-tertiary/30">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(i)}
              className="relative flex-1 pb-4 text-center transition-opacity duration-300"
            >
              <span
                className={`font-body text-[10px] font-normal tracking-[0.2em] uppercase transition-colors duration-300 ${
                  activeTab === i ? "text-text-primary" : "text-text-secondary opacity-50 hover:opacity-80"
                }`}
              >
                {tab.label}
              </span>
              {/* Active indicator */}
              {activeTab === i && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-px bg-accent"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
          >
            {/* Image */}
            <div className="relative overflow-hidden aspect-[16/10]">
              {/* Ghost number */}
              <span
                className="absolute -top-6 -left-4 font-display font-light text-accent leading-none select-none pointer-events-none"
                style={{ fontSize: "200px", opacity: 0.06 }}
              >
                {tabs[activeTab].number}
              </span>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tabs[activeTab].image}
                alt={tabs[activeTab].imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Text */}
            <div>
              <h3
                className="font-display font-light text-text-primary mb-6"
                style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
              >
                {tabs[activeTab].label}
              </h3>
              <p className="font-body text-[15px] font-light text-text-secondary leading-[1.9]">
                {tabs[activeTab].content}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

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
