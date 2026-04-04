"use client";

import { useState, useRef } from "react";

const WAVEFORM_HEIGHTS = [6, 14, 10, 16, 8];

interface CoinProps {
  audioSrc: string;
  subjectName: string;
  subjectDates: string;
}

export default function MemoryCoin({
  audioSrc,
  subjectName,
  subjectDates,
}: CoinProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);
  const coinRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const spinDuration = 8;

  const handleClick = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(audioSrc);
      audioRef.current.loop = true;
    }

    if (isPlaying) {
      audioRef.current.pause();
      if (coinRef.current) {
        const computedStyle = window.getComputedStyle(coinRef.current);
        const transform = computedStyle.transform;
        if (transform && transform !== "none") {
          const matrix = new DOMMatrix(transform);
          const angle =
            Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);
          setRotation(angle < 0 ? angle + 360 : angle);
        }
      }
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative flex flex-col items-center gap-4">
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap font-body text-[10px] tracking-[0.15em] uppercase text-text-secondary">
          {subjectName} &middot; {subjectDates}
        </div>
      )}

      {/* Coin */}
      <div
        ref={coinRef}
        className="w-28 h-28 rounded-full cursor-pointer flex items-center justify-center"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, #D4AF5A, #8B6914)",
          transform: isPlaying ? undefined : `rotate(${rotation}deg)`,
          animation: isPlaying
            ? `coin-spin ${spinDuration}s linear infinite`
            : "none",
          animationDelay: isPlaying
            ? `${-rotation / (360 / spinDuration)}s`
            : undefined,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <div className="w-20 h-20 rounded-full border border-white/15 flex items-center justify-center">
          {isPlaying ? (
            <div className="flex gap-1">
              <div className="w-0.5 h-4 bg-white/70 rounded" />
              <div className="w-0.5 h-4 bg-white/70 rounded" />
            </div>
          ) : (
            <span className="font-display text-2xl text-white/70 italic font-light select-none">
              F
            </span>
          )}
        </div>
      </div>

      {/* Waveform visualizer */}
      <div
        className={`flex items-end gap-0.5 h-5 transition-opacity duration-500 ${
          isPlaying ? "opacity-100" : "opacity-0"
        }`}
      >
        {WAVEFORM_HEIGHTS.map((h, i) => (
          <div
            key={i}
            className="w-0.5 bg-accent rounded"
            style={{
              height: `${h}px`,
              animation: isPlaying
                ? `waveform-bar ${0.4 + i * 0.1}s ease-in-out infinite alternate`
                : "none",
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes coin-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes waveform-bar {
          0% {
            height: 4px;
          }
          100% {
            height: 18px;
          }
        }
      `}</style>
    </div>
  );
}
