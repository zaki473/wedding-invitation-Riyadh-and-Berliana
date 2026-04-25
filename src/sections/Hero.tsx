"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  // Animasi Masuk Halus untuk Desktop
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1.5} 
    }
  }

  return (
    <section className="h-screen w-full relative overflow-hidden bg-[#fdfbf7]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400;1,400&display=swap');
        .font-latin { font-family: 'Great Vibes', cursive; }
        .font-luxury { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* ================= MOBILE: VIDEO AREA ================= */}
      <div className="absolute inset-0 md:hidden bg-[#fdfbf7]">
        
        {/* 1. ANIMASI LOADING (Hanya muncul saat video belum ready) */}
        <AnimatePresence>
          {!isVideoLoaded && (
            <motion.div 
              key="loader"
              exit={{ opacity: 0, transition: { duration: 1 } }}
              className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#fdfbf7]"
            >
              {/* Ring Loading Mewah */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="w-12 h-12 border-2 border-[#b68d40]/20 border-t-[#800000] rounded-full"
              />
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 font-luxury text-[10px] tracking-[0.3em] text-[#b68d40] uppercase"
              >
                Menyiapkan Kebahagiaan...
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 2. VIDEO BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <motion.video
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="auto"
            onLoadedData={() => setIsVideoLoaded(true)} // Trigger saat video siap
            initial={{ opacity: 0 }}
            animate={{ opacity: isVideoLoaded ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full object-cover"
          >
            <source src="https://ik.imagekit.io/p27ub3udc/undangan/last_3.mp4" type="video/mp4" />
          </motion.video>
        </div>

        {/* Indikator Scroll (Hanya muncul setelah video loaded) */}
        {isVideoLoaded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          >
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-[1px] h-10 bg-white shadow-lg"
            />
          </motion.div>
        )}
      </div>


      {/* ================= DESKTOP (WEB): TYPOGRAPHY ONLY ================= */}
      <div className="hidden md:flex w-full h-full items-center justify-center relative bg-[#fdfbf7]">
        <div className="absolute inset-0 bg-[url('/batik-soft.png')] opacity-[0.03] pointer-events-none" />
        <div className="absolute inset-10 border border-[#b68d40]/10 pointer-events-none" />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center max-w-5xl"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-[#b68d40] tracking-[1em] text-[10px] uppercase font-light">
              The Wedding of
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="font-latin text-[130px] text-[#800000] leading-none select-none">
              Berliana & Riyadh
            </h1>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="flex items-center justify-center gap-8 mb-16"
          >
            <div className="w-20 h-[0.5px] bg-[#b68d40]/30" />
            <p className="font-luxury text-2xl text-[#3d2b1f] tracking-[0.6em] italic">
              01 . 06 . 2026
            </p>
            <div className="w-20 h-[0.5px] bg-[#b68d40]/30" />
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
           <span className="text-[9px] uppercase tracking-[0.4em] text-[#b68d40] mb-4 opacity-50">Explore</span>
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[0.5px] h-20 bg-gradient-to-b from-[#b68d40] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}