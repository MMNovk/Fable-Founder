"use client"
import * as React from "react"
import { motion } from "motion/react"

export default function MemoryCoin({ audioSrc }: { audioSrc: string }) {
  const [isHovered, setIsHovered] = React.useState(false)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  const [duration, setDuration] = React.useState(0)
  const [currentTime, setCurrentTime] = React.useState(0)
  const audioRef = React.useRef<HTMLAudioElement | null>(null)
  const trackRef = React.useRef<HTMLDivElement | null>(null)

  const isExpanded = isHovered || isPlaying

  const handleClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.progress-track')) return
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    if (!audioRef.current || !duration || !trackRef.current) return
    const rect = trackRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const ratio = Math.max(0, Math.min(1, x / rect.width))
    audioRef.current.currentTime = ratio * duration
    setCurrentTime(ratio * duration)
    setProgress(ratio * 100)
  }

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex items-center">
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={() => {
          const t = audioRef.current?.currentTime ?? 0
          const d = audioRef.current?.duration ?? 0
          setCurrentTime(t)
          setProgress(d ? (t / d) * 100 : 0)
        }}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration ?? 0)}
        onEnded={() => { setIsPlaying(false); setProgress(0); setCurrentTime(0) }}
      />

      <motion.div
        initial={{ width: 48, height: 48 }}
        animate={{ width: isExpanded ? 300 : 48, height: 48 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleClick}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="flex items-center overflow-hidden cursor-pointer relative flex-shrink-0"
        style={{
          borderRadius: 24,
          background: "radial-gradient(circle at 35% 35%, #D4AF5A, #8B6914)",
        }}
      >
        {/* Collapsed: F&F monogram */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: isExpanded ? 0 : 1 }}
          transition={{ duration: 0.15 }}
          style={{ pointerEvents: "none" }}
        >
          <span style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: 13,
            fontStyle: "italic",
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "0.05em",
            userSelect: "none",
          }}>
            F&F
          </span>
        </motion.div>

        {/* Expanded: play/pause + label + progress */}
        <motion.div
          className="flex items-center gap-3 px-4 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.2, delay: isExpanded ? 0.15 : 0 }}
          style={{ pointerEvents: isExpanded ? "auto" : "none" }}
        >
          <div className="flex-shrink-0" style={{ width: 12 }}>
            {isPlaying ? (
              <div className="flex gap-0.5">
                <div className="w-0.5 h-3.5 rounded" style={{ background: "rgba(255,255,255,0.9)" }} />
                <div className="w-0.5 h-3.5 rounded" style={{ background: "rgba(255,255,255,0.9)" }} />
              </div>
            ) : (
              <div className="w-0 h-0 ml-0.5"
                style={{
                  borderLeft: "6px solid rgba(255,255,255,0.9)",
                  borderTop: "4px solid transparent",
                  borderBottom: "4px solid transparent",
                }}
              />
            )}
          </div>

          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <span style={{
              fontSize: 9,
              fontFamily: "Jost, sans-serif",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.8)",
              whiteSpace: "nowrap",
            }}>
              {isPlaying ? `${formatTime(currentTime)} / ${formatTime(duration)}` : "Listen to his story"}
            </span>

            <div
              ref={trackRef}
              className="progress-track w-full cursor-pointer"
              style={{ height: 2, background: "rgba(255,255,255,0.25)", borderRadius: 1 }}
              onClick={handleSeek}
            >
              <div
                style={{
                  height: "100%",
                  width: `${progress}%`,
                  background: "rgba(255,255,255,0.85)",
                  borderRadius: 1,
                  transition: "width 0.1s linear",
                }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
