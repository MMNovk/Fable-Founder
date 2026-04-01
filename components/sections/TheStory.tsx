"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";

export default function TheStory() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(
      "https://upload.wikimedia.org/wikipedia/commons/4/40/En-us-story.ogg"
    );
    audioRef.current.loop = true;
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="px-6 md:px-10 py-24 md:py-40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Left — text + excerpt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="font-body text-[10px] font-normal tracking-[0.3em] uppercase text-accent mb-6">
            A Story Worth Hearing
          </p>
          <h2
            className="font-display font-light italic text-text-primary leading-[1.2] mb-6"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
          >
            Before you read it, listen.
          </h2>
          <p className="font-body text-[15px] font-light text-text-secondary leading-[1.9] mb-4">
            Every Fable & Founder commission begins here — a conversation.
            A voice. A life, spoken aloud in its own words.
          </p>
          <p className="font-body text-[12px] font-light text-text-tertiary mb-12">
            Harold Kim &middot; Busan, Korea &rarr; San Francisco, 1962
          </p>

          {/* Archive excerpt */}
          <div className="border-t border-accent/30 pt-8">
            <p className="font-body text-[10px] font-normal tracking-[0.3em] uppercase text-text-secondary mb-6">
              From the Archive
            </p>
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

        {/* Right — portrait + coin */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="flex flex-col items-center"
        >
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Portrait */}
            <div className="relative z-[2] w-[280px] h-[380px] md:w-[340px] md:h-[460px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=600&h=800&fit=crop&auto=format&q=80"
                alt="Harold Kim"
                className="w-full h-full object-cover grayscale sepia brightness-90 contrast-110"
                loading="lazy"
              />
            </div>

            {/* Coin — tucked behind portrait, slides out on hover */}
            <div
              className="absolute top-1/2 -translate-y-1/2 z-[1] transition-transform duration-500 ease-out"
              style={{
                right: "-40px",
                transform: `translateY(-50%) translateX(${
                  isHovered || isPlaying ? "60px" : "0px"
                })`,
              }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                className="relative group focus:outline-none"
                aria-label={isPlaying ? "Pause story" : "Play story"}
                title="Harold Kim, 1931–2019 · His story, in his words."
              >
                {/* Glow */}
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-700 ${
                    isPlaying
                      ? "shadow-[0_0_50px_rgba(196,169,107,0.3)]"
                      : "group-hover:shadow-[0_0_30px_rgba(196,169,107,0.15)]"
                  }`}
                />

                {/* Coin face */}
                <div
                  className={`w-36 h-36 md:w-44 md:h-44 rounded-full border border-accent/30 flex items-center justify-center ${
                    isPlaying ? "animate-[coin-spin_8s_linear_infinite]" : ""
                  }`}
                  style={{
                    background:
                      "radial-gradient(ellipse at 35% 35%, #D4AF5A 0%, #a8893a 40%, #8B6914 70%, #6b572e 100%)",
                  }}
                >
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-white/10 flex items-center justify-center">
                    <span className="font-display font-light text-white/80 text-4xl md:text-5xl select-none">
                      F
                    </span>
                  </div>
                  <div className="absolute inset-2 rounded-full border border-white/5" />
                </div>

                {/* Play/pause overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {isPlaying ? (
                    <div className="flex gap-1.5">
                      <div className="w-[2px] h-5 bg-accent" />
                      <div className="w-[2px] h-5 bg-accent" />
                    </div>
                  ) : (
                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" className="ml-1">
                      <path d="M2 1L16 11L2 21V1Z" fill="#c4a96b" />
                    </svg>
                  )}
                </div>
              </button>
            </div>

            {/* Name beneath portrait */}
            <div className="mt-6">
              <h3
                className="font-display font-light text-text-primary"
                style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
              >
                Harold Kim
              </h3>
              <p className="font-body text-[12px] font-normal tracking-[0.2em] uppercase text-accent mt-1">
                1931 — 2019
              </p>
              <p className="font-body text-[12px] font-light text-text-secondary mt-1">
                Busan &middot; San Francisco &middot; Oakland
              </p>
            </div>
          </div>

          {/* Waveform */}
          <div
            className={`flex items-end gap-[3px] h-5 mt-6 transition-opacity duration-500 ${
              isPlaying ? "opacity-100" : "opacity-0"
            }`}
          >
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-[2px] bg-accent rounded-full"
                style={{
                  animation: isPlaying
                    ? `waveform ${0.4 + i * 0.15}s ease-in-out infinite alternate`
                    : "none",
                  height: "4px",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes waveform {
          0% { height: 4px; }
          100% { height: 20px; }
        }
        @keyframes coin-spin {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
      `}</style>
    </section>
  );
}
