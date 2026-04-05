"use client";

import { useState, useRef } from "react";

interface CoinProps {
  audioSrc: string;
}

const formatTime = (s: number) => {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

export default function MemoryCoin({ audioSrc }: CoinProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
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
    <div className="flex flex-col">
      <style jsx>{`
        @keyframes coin-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes coin-counter-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #c4a96b;
          cursor: pointer;
          margin-top: -3px;
        }
        input[type="range"]::-moz-range-thumb {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #c4a96b;
          cursor: pointer;
          border: none;
        }
        input[type="range"]::-webkit-slider-runnable-track {
          height: 2px;
          cursor: pointer;
        }
        input[type="range"]::-moz-range-track {
          height: 2px;
          cursor: pointer;
          background: #4a4540;
        }
      `}</style>
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={() =>
          setCurrentTime(audioRef.current?.currentTime ?? 0)
        }
        onLoadedMetadata={() =>
          setDuration(audioRef.current?.duration ?? 0)
        }
      />

      {/* Coin + label inline */}
      <div className="flex items-center gap-4">
        {/* Coin */}
        <div
          ref={coinRef}
          className="w-14 h-14 rounded-full cursor-pointer flex items-center justify-center shrink-0"
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
          onClick={handleClick}
        >
          {/* Inner — counter-rotates to keep content upright */}
          <div
            className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.15)] flex items-center justify-center"
            style={{
              animation: isPlaying
                ? `coin-counter-spin ${spinDuration}s linear infinite`
                : "none",
              animationDelay: isPlaying
                ? `${-rotation / (360 / spinDuration)}s`
                : undefined,
            }}
          >
            {isPlaying ? (
              <div className="flex gap-1">
                <div className="w-0.5 h-3 bg-[rgba(255,255,255,0.7)] rounded" />
                <div className="w-0.5 h-3 bg-[rgba(255,255,255,0.7)] rounded" />
              </div>
            ) : null}
          </div>
        </div>

        <p
          className="font-body font-normal text-[11px] uppercase"
          style={{ letterSpacing: "0.25em", color: "#c4a96b" }}
        >
          Listen to his story.
        </p>
      </div>

      {/* Progress bar — only when playing */}
      {isPlaying && (
        <div className="w-full flex flex-col gap-1 mt-3">
          <input
            type="range"
            min={0}
            max={duration || 1}
            value={currentTime}
            onChange={(e) => {
              if (audioRef.current) {
                audioRef.current.currentTime = Number(e.target.value);
                setCurrentTime(Number(e.target.value));
              }
            }}
            className="w-full appearance-none cursor-pointer"
            style={{
              accentColor: "#c4a96b",
              background: `linear-gradient(to right, #c4a96b ${
                duration ? (currentTime / duration) * 100 : 0
              }%, #4a4540 ${
                duration ? (currentTime / duration) * 100 : 0
              }%)`,
              height: "2px",
            }}
          />
          <div className="flex justify-between">
            <span
              className="font-body"
              style={{ fontSize: "11px", color: "#7a7166" }}
            >
              {formatTime(currentTime)}
            </span>
            <span
              className="font-body"
              style={{ fontSize: "11px", color: "#7a7166" }}
            >
              {formatTime(duration)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
