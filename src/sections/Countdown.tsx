"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Countdown() {
  // Tanggal disesuaikan dengan data sebelumnya: 01 Juni 2026
  const weddingDate = new Date("2026-06-01T00:00:00").getTime()
  const [timeLeft, setTimeLeft] = useState(0)

  useEffect(() => {
    // Set initial time
    setTimeLeft(weddingDate - Date.now())
    
    const timer = setInterval(() => {
      setTimeLeft(weddingDate - Date.now())
    }, 1000)
    return () => clearInterval(timer)
  }, [weddingDate])

  const days = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)))
  const hours = Math.max(0, Math.floor((timeLeft / (1000 * 60 * 60)) % 24))
  const minutes = Math.max(0, Math.floor((timeLeft / (1000 * 60)) % 60))
  const seconds = Math.max(0, Math.floor((timeLeft / 1000) % 60))

  const countdownItems = [
    { label: "Hari", value: days },
    { label: "Jam", value: hours },
    { label: "Menit", value: minutes },
    { label: "Detik", value: seconds },
  ]

  return (
    <section className="py-20 md:py-28 text-center bg-[#fdfbf7] px-4 relative overflow-hidden">

      {/* Batik Background Soft */}
      <div className="absolute inset-0 bg-[url('/batik-soft.png')] opacity-5 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto"
      >
        {/* Title Section */}
        <motion.span 
          className="text-[#b68d40] tracking-[0.4em] text-[10px] md:text-xs uppercase font-semibold mb-4 block"
        >
          Save The Date
        </motion.span>
        
        <h2 className="text-3xl md:text-5xl font-serif text-[#3d2b1f] mb-8">
          Menuju Hari Bahagia
        </h2>

        {/* Countdown Grid - Tetap 4 Kolom di semua layar */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-8 mt-10">
          {countdownItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative group"
            >
              {/* Kotak Countdown */}
              <div className="bg-white/80 backdrop-blur-sm border border-[#e5d5bc] rounded-xl md:rounded-3xl py-4 md:py-8 px-1 shadow-sm group-hover:shadow-md transition-all duration-500 group-hover:-translate-y-1">
                <p className="text-xl sm:text-3xl md:text-5xl font-bold text-[#b68d40]">
                  {item.value}
                </p>
                <p className="mt-1 md:mt-2 tracking-[0.1em] md:tracking-[0.2em] uppercase text-[9px] md:text-xs text-[#7a5c3c] font-medium">
                  {item.label}
                </p>
              </div>
              
              {/* Dekorasi Titik diantara kotak (opsional) */}
              {i < 3 && (
                <div className="absolute -right-1 sm:-right-2 md:-right-4 top-1/2 -translate-y-1/2 text-[#b68d40] opacity-30 font-bold hidden sm:block">
                  :
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Quote Elegant */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16"
        >
          <div className="h-[1px] w-12 bg-[#b68d40]/40 mx-auto mb-6" />
          <p className="italic text-[#7a5c3c] text-sm md:text-base font-serif px-4 opacity-80">
            “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya.”
          </p>
          <p className="text-[10px] md:text-xs tracking-widest text-[#b68d40] mt-4 uppercase font-semibold">
            ( Ar-Rum : 21 )
          </p>
        </motion.div>

      </motion.div>
    </section>
  )
}