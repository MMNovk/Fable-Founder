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
  const isDragging = React.useRef(false)

  const isExpanded = isHovered || isPlaying

  const formatTime = (s: number) => {
    if (!s || isNaN(s)) return "0:00"
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, "0")}`
  }

  const seek = (clientX: number) => {
    if (!audioRef.current || !duration || !trackRef.current) return
    const rect = trackRef.current.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    audioRef.current.currentTime = ratio * duration
    setCurrentTime(ratio * duration)
    setProgress(ratio * 100)
  }

  const handleTrackMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    isDragging.current = true
    seek(e.clientX)

    const handleMouseMove = (ev: MouseEvent) => {
      if (isDragging.current) seek(ev.clientX)
    }
    const handleMouseUp = () => {
      isDragging.current = false
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)
  }

  const handleClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".progress-track")) return
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
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

        {/* Expanded: controls */}
        <motion.div
          className="flex items-center gap-3 px-4 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.2, delay: isExpanded ? 0.15 : 0 }}
          style={{ pointerEvents: isExpanded ? "auto" : "none" }}
        >
          {/* Play/pause */}
          <div className="flex-shrink-0" style={{ width: 12 }}>
            {isPlaying ? (
              <div className="flex gap-0.5">
                <div className="w-0.5 h-3.5 rounded" style={{ background: "rgba(255,255,255,0.9)" }} />
                <div className="w-0.5 h-3.5 rounded" style={{ background: "rgba(255,255,255,0.9)" }} />
              </div>
            ) : (
              <div style={{
                width: 0,
                height: 0,
                marginLeft: 2,
                borderLeft: "6px solid rgba(255,255,255,0.9)",
                borderTop: "4px solid transparent",
                borderBottom: "4px solid transparent",
              }} />
            )}
          </div>

          <div className="flex flex-col gap-1 flex-1 min-w-0">
            {/* Timestamps */}
            <div className="flex justify-between">
              <span style={{
                fontSize: 9,
                fontFamily: "Jost, sans-serif",
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.8)",
                whiteSpace: "nowrap",
              }}>
                {formatTime(currentTime)}
              </span>
              <span style={{
                fontSize: 9,
                fontFamily: "Jost, sans-serif",
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.5)",
                whiteSpace: "nowrap",
              }}>
                {formatTime(duration)}
              </span>
            </div>

            {/* Draggable progress track */}
            <div
              ref={trackRef}
              className="progress-track w-full cursor-pointer"
              style={{ height: 3, background: "rgba(255,255,255,0.25)", borderRadius: 2 }}
              onMouseDown={handleTrackMouseDown}
            >
              <div style={{
                height: "100%",
                width: `${progress}%`,
                background: "rgba(255,255,255,0.85)",
                borderRadius: 2,
                transition: isDragging.current ? "none" : "width 0.1s linear",
                position: "relative",
              }}>
                <div style={{
                  position: "absolute",
                  right: -4,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "white",
                }} />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
