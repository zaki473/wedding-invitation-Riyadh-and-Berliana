"use client"

import { useRef, useState, useEffect } from "react"

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current
      
      audio.volume = 0.6
      
      // LOGIKA BARU: Atur detik di sini (Misal: 90 detik = 1 menit 30 detik)
      audio.currentTime = 90 

      audio.play().catch(() => {
        // Jika gagal autoplay (diblokir browser), set state ke false
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
      // Jika sebelumnya gagal autoplay, saat klik pertama 
      // kita pastikan lagi posisinya sudah benar
      if (audioRef.current.currentTime === 0) {
        audioRef.current.currentTime = 90
      }
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mp3" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition"
      >
        {isPlaying ? "🔊" : "🔇"}
      </button>
    </>
  )
}