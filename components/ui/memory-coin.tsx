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

  const isExpanded = isHovered || isPlaying

  const handleClick = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const ratio = x / rect.width
    audioRef.current.currentTime = ratio * duration
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
        onEnded={() => setIsPlaying(false)}
      />

      <motion.div
        initial={{ width: 48, height: 48 }}
        animate={{ width: isExpanded ? 320 : 48, height: 48 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleClick}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="flex items-center overflow-hidden cursor-pointer relative"
        style={{
          borderRadius: 24,
          background: "radial-gradient(circle at 35% 35%, #D4AF5A, #8B6914)",
        }}
      >
        {/* Collapsed: just the circle, no icon */}
        <motion.div
          className="absolute left-0 flex items-center justify-center"
          style={{ width: 48, height: 48 }}
          animate={{ opacity: isExpanded ? 0 : 1 }}
          transition={{ duration: 0.15 }}
        />

        {/* Expanded: pause/play + label + progress */}
        <motion.div
          className="flex items-center gap-3 px-4 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.2, delay: isExpanded ? 0.15 : 0 }}
        >
          {/* Play/pause icon */}
          <div className="flex-shrink-0">
            {isPlaying ? (
              <div className="flex gap-0.5">
                <div className="w-0.5 h-3.5 bg-white rounded" />
                <div className="w-0.5 h-3.5 bg-white rounded" />
              </div>
            ) : (
              <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5" />
            )}
          </div>

          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <span
              className="text-white whitespace-nowrap"
              style={{ fontSize: 10, fontFamily: "Jost", letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.85 }}
            >
              {isPlaying ? `${formatTime(currentTime)} / ${formatTime(duration)}` : "Listen to his story"}
            </span>

            {/* Progress track */}
            <div
              className="w-full h-0.5 rounded-full cursor-pointer"
              style={{ background: "rgba(255,255,255,0.25)" }}
              onClick={handleSeek}
            >
              <div
                className="h-full rounded-full"
                style={{ width: `${progress}%`, background: "rgba(255,255,255,0.85)", transition: "width 0.1s linear" }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
