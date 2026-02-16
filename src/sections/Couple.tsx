'use client'

import { motion } from 'framer-motion'

export default function Couple() {
  return (
    <section className="py-20 bg-[#fdfbf7] text-center px-4 relative overflow-hidden">
      
      {/* 1. BACKGROUND TEXTURE - Batik Soft */}
      <div className="absolute inset-0 bg-[url('/batik-soft.png')] opacity-[0.05] pointer-events-none" />
      
      {/* 2. WAYANG DECORATION - Mobile Optimized */}
      {/* Rama - Kiri */}
      <motion.img
        src="/rama.png"
        alt="Rama"
        initial={{ opacity: 0, x: -100, rotate: -10 }}
        whileInView={{ opacity: 0.8, x: -20, rotate: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          absolute 
          -left-10 top-20 
          w-[150px] sm:w-[250px] md:w-[400px] lg:w-[500px] 
          object-contain 
          z-0 
          grayscale-[20%] brightness-90
        "
      />

      {/* Sinta - Kanan */}
      <motion.img
        src="/sinta.png"
        alt="Sinta"
        initial={{ opacity: 0, x: 100, rotate: 10 }}
        whileInView={{ opacity: 0.8, x: 20, rotate: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          absolute 
          -right-10 top-20 
          w-[150px] sm:w-[250px] md:w-[400px] lg:w-[500px] 
          object-contain 
          z-0 
          grayscale-[20%] brightness-90
        "
      />

      {/* 3. CONTENT AREA */}
      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <span className="text-[#b68d40] tracking-[0.3em] text-xs uppercase font-medium mb-3 block">
            The Wedding of
          </span>
          <h2 className="text-5xl md:text-6xl font-serif text-[#3d2b1f] italic">
            Pengantin
          </h2>
          <div className="flex justify-center items-center mt-6 gap-4">
            <div className="h-[1px] w-12 bg-[#b68d40]/40" />
            <div className="w-2 h-2 rotate-45 border border-[#b68d40]" />
            <div className="h-[1px] w-12 bg-[#b68d40]/40" />
          </div>
        </motion.div>

        {/* Couple Cards */}
        <div className="space-y-12 md:space-y-0 md:flex md:gap-8 items-center justify-center">
          
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 group"
          >
            <div className="bg-white/60 backdrop-blur-sm border border-[#e5d5bc] p-8 rounded-t-[100px] rounded-b-3xl shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <p className="font-serif text-[#b68d40] text-lg mb-4 italic">Mempelai Pria</p>
              <h3 className="text-3xl font-serif text-[#3d2b1f] mb-6">
                Muhammad Riyadh
              </h3>
              <div className="text-sm text-[#7a5c3c] leading-relaxed">
                <p className="italic mb-1">Putra dari</p>
                <p className="font-semibold text-gray-800 uppercase tracking-tight">
                  Bapak Suparyono & <br /> Ibu Nurlindah
                </p>
              </div>
            </div>
          </motion.div>

          {/* Ampersand Divider (Hidden on mobile if too crowded, or elegant text) */}
          <div className="hidden md:block text-4xl font-serif text-[#b68d40] italic">
            &
          </div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 group"
          >
            <div className="bg-white/60 backdrop-blur-sm border border-[#e5d5bc] p-8 rounded-t-[100px] rounded-b-3xl shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <p className="font-serif text-[#b68d40] text-lg mb-4 italic">Mempelai Wanita</p>
              <h3 className="text-3xl font-serif text-[#3d2b1f] mb-6">
                Berliana Radini Isnindiafi
              </h3>
              <div className="text-sm text-[#7a5c3c] leading-relaxed">
                <p className="italic mb-1">Putri dari</p>
                <p className="font-semibold text-gray-800 uppercase tracking-tight">
                  Bapak Manfa Ludfi & <br /> Ibu Wiwit Ariana
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Footer Decoration */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="mt-20 flex flex-col items-center"
        >
          <p className="text-[#7a5c3c] font-serif italic text-sm max-w-xs leading-relaxed opacity-80">
            "Sakinah Mawaddah Warahmah"
          </p>
        </motion.div>

      </div>

      {/* Ornament Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xs opacity-20 pointer-events-none">
          <svg viewBox="0 0 100 20" className="fill-[#b68d40]">
             {/* Simple flourish ornament could go here */}
          </svg>
      </div>
    </section>
  )
}