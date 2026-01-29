"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Countdown() {
  const weddingDate = new Date("2026-12-12T00:00:00").getTime()
  const [timeLeft, setTimeLeft] = useState(weddingDate - Date.now())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(weddingDate - Date.now())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const days = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)))
  const hours = Math.max(0, Math.floor((timeLeft / (1000 * 60 * 60)) % 24))
  const minutes = Math.max(0, Math.floor((timeLeft / (1000 * 60)) % 60))
  const seconds = Math.max(0, Math.floor((timeLeft / 1000) % 60))

  return (
    <section className="py-28 text-center bg-[#f9f4ec] px-6 relative overflow-hidden">

      {/* Batik Background */}
      <div className="absolute inset-0 bg-[url('/batik-soft.png')] opacity-10" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto"
      >

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif text-[#3b2a1f]"
        >
          Menuju Hari Bahagia
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-28 h-[2px] bg-[#c5a880] mx-auto my-6 origin-center rounded-full"
        />

        {/* Countdown Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">

          {[
            { label: "Hari", value: days },
            { label: "Jam", value: hours },
            { label: "Menit", value: minutes },
            { label: "Detik", value: seconds },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.8 }}
              className="bg-white border border-[#c5a880] rounded-3xl shadow-xl p-8"
            >
              <p className="text-4xl md:text-5xl font-bold text-[#7a5c3c]">
                {item.value}
              </p>
              <p className="mt-2 tracking-widest uppercase text-sm text-[#6a4b32]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Romantic Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 italic text-[#6a4b32]"
        >
          “Setiap detik mendekatkan kami pada janji suci.”
        </motion.p>

      </motion.div>
    </section>
  )
}
