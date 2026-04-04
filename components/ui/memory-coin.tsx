"use client";

import { useState, useRef } from "react";

const WAVEFORM_HEIGHTS = [6, 10, 14, 8, 12];

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
  const audioRef = useRef<HTMLAudioElement>(null);

  const spinDuration = 8;

  const handleClick = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      if (coinRef.current) {
        const computedStyle = window.getComputedStyle(coinRef.current);
        const transform = computedStyle.transform;
        if (transform && transform !== "none") {
          const matrix = new DOMMatrix(transform);
          const angle = Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);
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
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <audio ref={audioRef} src={audioSrc} />

      {/* Tooltip */}
      {isHovered && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs tracking-widest uppercase" style={{ color: "#7a7166" }}>
          {subjectName} &middot; {subjectDates}
        </div>
      )}

      {/* Coin */}
      <div
        ref={coinRef}
        className="w-14 h-14 rounded-full cursor-pointer flex items-center justify-center shrink-0"
        style={{
          background: "radial-gradient(circle at 35% 35%, #D4AF5A, #8B6914)",
          transform: isPlaying ? undefined : `rotate(${rotation}deg)`,
          animation: isPlaying ? `spin ${spinDuration}s linear infinite` : "none",
          animationDelay: isPlaying ? `${-rotation / (360 / spinDuration)}s` : undefined,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <div className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.15)] flex items-center justify-center">
          {isPlaying ? (
            <div className="flex gap-1">
              <div className="w-0.5 h-3 bg-[rgba(255,255,255,0.7)] rounded" />
              <div className="w-0.5 h-3 bg-[rgba(255,255,255,0.7)] rounded" />
            </div>
          ) : (
            <span className="font-display text-lg text-[rgba(255,255,255,0.7)] italic font-light">
              F
            </span>
          )}
        </div>
      </div>

      {/* Waveform visualizer — shows only when playing */}
      {isPlaying && (
        <div className="flex items-end gap-0.5 h-4">
          {WAVEFORM_HEIGHTS.map((h, i) => (
            <div
              key={i}
              className="w-0.5 rounded"
              style={{
                background: "#c4a96b",
                height: `${h}px`,
                animation: `spin ${0.4 + i * 0.1}s ease-in-out infinite alternate`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
