"use client"

import { useRef, useState, useEffect } from "react"

export default function MusicPlayer() {

  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  // autoplay saat pertama load
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.6
      audioRef.current.play().catch(() => {
        setIsPlaying(false)
      })
    }
  }, [])

  const toggleMusic = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <>
      {/* Audio */}
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mp3" />
      </audio>

      {/* Button */}
      <button
        onClick={toggleMusic}
        className="
          fixed bottom-6 right-6 z-50
          w-14 h-14
          rounded-full
          bg-white/90 backdrop-blur
          shadow-lg
          flex items-center justify-center
          hover:scale-110 active:scale-95
          transition
        "
      >
        {isPlaying ? "🔊" : "🔇"}
      </button>

    </>
  )
}
