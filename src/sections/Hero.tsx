"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="h-screen flex justify-center items-center text-center relative overflow-hidden">

      {/* Background Batik */}
      <div className="absolute inset-0 bg-[url('/batik2.jpg')] bg-cover bg-center" />

      {/* Dark Luxury Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1f140d]/80 via-[#2b1b12]/70 to-[#1a100a]/90" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative z-10 max-w-3xl px-8 py-14 rounded-[2.5rem] border border-[#d6b98c]/50 bg-white/90 backdrop-blur shadow-2xl"
      >

        {/* Small Divider */}
        <div className="w-24 h-[2px] bg-[#c5a880] mx-auto mb-6 rounded-full" />

        <p className="tracking-[0.35em] uppercase text-xs text-[#7a5c3c] font-medium">
          Wedding Invitation
        </p>

        {/* Names */}
        <h1 className="mt-6 text-2xl md:text-6xl font-serif font-bold leading-tight text-[#2b1b12]">
          Muhammad Riyadh
          <span className="block my-3 text-[#c5a880] text-3xl md:text-4xl">&</span>
          Berliana Radhini Isnindiafi
        </h1>

        {/* Quote */}
        <p className="mt-6 italic text-[#6a4b32] text-sm md:text-base leading-relaxed">
          “Mugi tansah pinaringan rahmat lan berkah”
        </p>

        {/* Date */}
        <p className="mt-5 tracking-wide text-[#7a5c3c] text-sm">
          Senin, 1 Juni 2026
        </p>

        {/* Ornamental Divider */}
        <div className="mt-8 flex justify-center gap-2 opacity-70">
          <span className="w-3 h-3 bg-[#c5a880] rounded-full" />
          <span className="w-6 h-6 border border-[#c5a880] rotate-45" />
          <span className="w-3 h-3 bg-[#c5a880] rounded-full" />
        </div>

      </motion.div>
    </section>
  )
}
