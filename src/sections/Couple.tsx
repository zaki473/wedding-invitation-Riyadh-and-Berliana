'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Couple() {

  const preventContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  return (
    <section 
      onContextMenu={preventContextMenu} // Proteksi klik kanan global di section ini
      className="py-24 bg-[#fdfbf7] text-center px-4 relative overflow-hidden select-none" // 'select-none' mencegah teks/gambar diblok
    >
      
      {/* 1. BACKGROUND TEXTURE */}
      <div className="absolute inset-0 bg-[url('/batik-soft.png')] opacity-[0.05] pointer-events-none" />
      
      {/* 2. WAYANG DECORATION */}
      <motion.img
        src="/sinta.png"
        alt="Sinta"
        draggable="false" // Mencegah gambar ditarik (drag)
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.4, x: -20 }}
        transition={{ duration: 2 }}
        className="absolute -left-10 top-40 w-[200px] md:w-[450px] object-contain z-0 pointer-events-none grayscale"
      />

      <motion.img
        src="/rama.png"
        alt="Rama"
        draggable="false"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0.4, x: 20 }}
        transition={{ duration: 2 }}
        className="absolute -right-10 top-40 w-[200px] md:w-[450px] object-contain z-0 pointer-events-none grayscale"
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="text-[#b68d40] tracking-[0.4em] text-[10px] md:text-xs uppercase font-semibold mb-3 block">
            The Wedding of
          </span>
          <div className="flex justify-center items-center mt-4 gap-4">
            <div className="h-[0.5px] w-16 bg-[#b68d40]/40" />
            <div className="w-2 h-2 rotate-45 border border-[#b68d40]" />
            <div className="h-[0.5px] w-16 bg-[#b68d40]/40" />
          </div>
        </motion.div>

        {/* Couple Cards container */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 items-center justify-center">
          
          {/* Bride Card (Wanita) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full max-w-[320px] group"
          >
            <div className="bg-white/80 backdrop-blur-md border border-[#e5d5bc] p-6 rounded-t-[140px] rounded-b-3xl shadow-xl transition-all duration-700 hover:shadow-2xl">
              <div className="relative w-full aspect-[4/5] mb-8 overflow-hidden rounded-t-[120px] rounded-b-2xl border-4 border-[#fdfbf7] shadow-lg">
                <img 
                  src="/wanita.webp" 
                  alt="Bride" 
                  draggable="false" // Anti-drag
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 pointer-events-none" // 'pointer-events-none' membuat gambar tidak bisa diklik sama sekali
                />
                {/* Overlay transparan di atas gambar sebagai lapis pelindung tambahan */}
                <div className="absolute inset-0 z-10 bg-transparent" /> 
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-t-[120px]" />
              </div>

              <p className="font-serif text-[#b68d40] text-sm mb-4 italic tracking-widest uppercase">Mempelai Wanita</p>
              <h3 className="text-3xl font-serif text-[#800000] mt-3 mb-4 tracking-tight" style={{ fontFamily: "'Great Vibes', cursive" }}>
                Berliana Radhini Isnindiafi
              </h3>
              <div className="h-[1px] w-12 bg-[#b68d40]/30 mx-auto mb-2" />
              <div className="text-[13px] text-[#7a5c3c] leading-relaxed">
                <p className="italic opacity-70 mb-1">Putri dari</p>
                <p className="font-medium text-gray-800 tracking-wide uppercase">
                  Bapak Manfa Ludfi & Ibu Wiwit Ariana
                </p>
              </div>
            </div>
          </motion.div>

          <div className="hidden md:flex flex-col items-center justify-center">
             <span className="text-5xl font-serif text-[#b68d40] italic opacity-40">&</span>
          </div>

          {/* Groom Card (Pria) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full max-w-[320px] group"
          >
            <div className="bg-white/80 backdrop-blur-md border border-[#e5d5bc] p-6 rounded-t-[140px] rounded-b-3xl shadow-xl transition-all duration-700 hover:shadow-2xl">
              <div className="relative w-full aspect-[4/5] mb-8 overflow-hidden rounded-t-[120px] rounded-b-2xl border-4 border-[#fdfbf7] shadow-lg">
                <img 
                  src="/pria.webp" 
                  alt="Groom" 
                  draggable="false"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 pointer-events-none"
                />
                <div className="absolute inset-0 z-10 bg-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-t-[120px]" />
              </div>

              <p className="font-serif text-[#b68d40] text-sm mb-4 italic tracking-widest uppercase">Mempelai Pria</p>
              <h3 className="text-3xl font-serif text-[#800000] mt-3 mb-4 tracking-tight" style={{ fontFamily: "'Great Vibes', cursive" }}>
                Muhammad Riyadh
              </h3>
              <div className="h-[1px] w-12 bg-[#b68d40]/30 mx-auto mb-2" />
              <div className="text-[13px] text-[#7a5c3c] leading-relaxed">
                <p className="italic opacity-70 mb-1">Putra dari</p>
                <p className="font-medium text-gray-800 tracking-wide uppercase">
                  Bapak Suparyono & Ibu Nurlindah
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Decoration */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-col items-center"
        >
          <div className="w-16 h-[0.5px] bg-[#b68d40]/40 mb-6" />
          <p className="text-[#7a5c3c] font-serif italic text-base md:text-lg opacity-80" style={{ fontFamily: "'Great Vibes', cursive" }}>
            "Sakinah Mawaddah Warahmah"
          </p>
        </motion.div>
      </div>
    </section>
  )
}