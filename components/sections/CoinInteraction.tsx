"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";

export default function CoinInteraction() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Placeholder audio — elderly male voice, royalty-free
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
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="font-body text-[10px] font-normal tracking-[0.3em] uppercase text-text-secondary mb-6">
            A Story Worth Hearing
          </p>
          <h2
            className="font-display font-light italic text-text-primary leading-[1.2] mb-6"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
          >
            Before you read it, listen.
          </h2>
          <p className="font-body text-[15px] font-light text-text-secondary leading-[1.9] max-w-md mb-8">
            Every Fable & Founder commission begins here — a conversation.
            A voice. A life, spoken aloud in its own words.
          </p>
          <p className="font-body text-[12px] font-light text-text-tertiary">
            Harold Kim &middot; Busan, Korea &rarr; San Francisco, 1962
          </p>
        </motion.div>

        {/* Right — coin */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Coin */}
          <button
            onClick={togglePlay}
            className="relative group focus:outline-none"
            aria-label={isPlaying ? "Pause story" : "Play story"}
          >
            {/* Glow effect */}
            <div
              className={`absolute inset-0 rounded-full transition-all duration-700 ${
                isPlaying
                  ? "shadow-[0_0_60px_rgba(196,169,107,0.35)]"
                  : "group-hover:shadow-[0_0_40px_rgba(196,169,107,0.2)]"
              }`}
            />

            {/* Coin face */}
            <div
              className={`relative w-48 h-48 md:w-56 md:h-56 rounded-full border border-accent/40 flex items-center justify-center ${
                isPlaying ? "animate-coin-spin" : ""
              }`}
              style={{
                background:
                  "radial-gradient(ellipse at 35% 35%, #d4b96e 0%, #a8893a 40%, #8a7245 70%, #6b572e 100%)",
              }}
            >
              {/* Inner circle / monogram */}
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full border border-white/10 flex items-center justify-center">
                <span
                  className="font-display font-light text-white/80 select-none"
                  style={{ fontSize: "clamp(36px, 4vw, 52px)" }}
                >
                  F
                </span>
              </div>

              {/* Outer ring detail */}
              <div className="absolute inset-2 rounded-full border border-white/5" />
            </div>

            {/* Play/Pause indicator */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {isPlaying ? (
                <div className="flex gap-1.5">
                  <div className="w-[2px] h-5 bg-accent" />
                  <div className="w-[2px] h-5 bg-accent" />
                </div>
              ) : (
                <svg
                  width="20"
                  height="24"
                  viewBox="0 0 20 24"
                  fill="none"
                  className="ml-1"
                >
                  <path d="M2 1L18 12L2 23V1Z" fill="#c4a96b" />
                </svg>
              )}
            </div>
          </button>

          {/* Tooltip */}
          <p className="font-body text-[11px] font-light text-text-secondary text-center">
            Harold Kim, 1931–2019 &middot; His story, in his words.
          </p>

          {/* Waveform visualizer */}
          <div
            className={`flex items-end gap-[3px] h-5 transition-opacity duration-500 ${
              isPlaying ? "opacity-100" : "opacity-0"
            }`}
          >
            {[1, 2, 3, 4, 5].map((i) => (
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
          0% {
            height: 4px;
          }
          100% {
            height: 20px;
          }
        }
        .animate-coin-spin {
          animation: coin-spin 8s linear infinite;
        }
        @keyframes coin-spin {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
      `}</style>
    </section>
  );
}
