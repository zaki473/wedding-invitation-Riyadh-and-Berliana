'use client'

import React from "react";
import { motion } from "framer-motion";

const Kolase: React.FC = () => {
  // Animasi standar yang elegan
  const animProps = (delay: number = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 1.2, delay: delay }
  });

  return (
    <section className="relative py-16 md:py-28 bg-[#fdfbf7] overflow-hidden">
      {/* Import Font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        .font-latin {
          font-family: 'Great Vibes', cursive;
        }
      `}</style>

      {/* BACKGROUND TEXTURE */}
      <div className="absolute inset-0 bg-[url('/batik-soft.png')] opacity-5 pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
        
        {/* JUDUL UTAMA */}
        <motion.div 
          {...animProps(0)}
          className="text-center mb-10 md:mb-16"
        >
          <span className="block uppercase tracking-[0.3em] text-[10px] md:text-xs text-[#b68d40] font-semibold mb-2">
            Gallery of
          </span>
          <h2 className="font-latin text-5xl md:text-7xl text-[#800000] leading-tight">
            Our Moments
          </h2>
          <div className="w-12 h-[1px] bg-[#b68d40]/40 mx-auto mt-4" />
        </motion.div>

        {/* --- GRID KOLASE --- */}
        <div className="flex flex-col gap-4 md:gap-6">
          
          {/* 1. TOP BANNER (Full Width) */}
          <motion.div 
            {...animProps(0.1)}
            className="w-full h-52 md:h-[400px] overflow-hidden rounded-2xl md:rounded-[32px] shadow-lg"
          >
            <img 
              src="/kolase-top.webp" 
              alt="Top" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
              style={{ objectPosition: "50% 40%" }} 
            />
          </motion.div>

          {/* 2. MIDDLE SECTION (2 Kolom - Foto Lama) */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <motion.div
               {...animProps(0.2)}
               className="w-full h-64 md:h-[500px] overflow-hidden rounded-2xl md:rounded-[32px] shadow-lg"
            >
              <img 
                src="/kolase-kiri.jpg" 
                alt="Moment 1"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
            </motion.div>

            <motion.div
               {...animProps(0.3)}
               className="w-full h-64 md:h-[500px] overflow-hidden rounded-2xl md:rounded-[32px] shadow-lg"
            >
              <img 
                src="/kolase-kanan.webp" 
                alt="Moment 2"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
            </motion.div>
          </div>

          {/* 3. FOTO HORIZONTAL BARU (Full Width) */}
          <motion.div 
            {...animProps(0.2)}
            className="w-full h-52 md:h-[400px] overflow-hidden rounded-2xl md:rounded-[32px] shadow-lg border-4 border-white"
          >
            <img 
              src="/horizontal1.jpeg" 
              alt="Horizontal" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
              style={{ objectPosition: "50% 50%" }}
            />
          </motion.div>

          {/* 4. FOTO TAMBAHAN BARU (2 Kolom - Jawa) */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <motion.div
               {...animProps(0.4)}
               className="w-full h-64 md:h-[500px] overflow-hidden rounded-2xl md:rounded-[32px] shadow-lg"
            >
              <img 
                src="/jawa.jpeg" 
                alt="Jawa 1"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
            </motion.div>

            <motion.div
               {...animProps(0.5)}
               className="w-full h-64 md:h-[500px] overflow-hidden rounded-2xl md:rounded-[32px] shadow-lg"
            >
              <img 
                src="/jawa2.jpeg" 
                alt="Jawa 2"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
            </motion.div>
          </div>

          {/* 5. BOTTOM IMAGE (Full Width) */}
          <motion.div 
            {...animProps(0.2)}
            className="w-full h-52 md:h-[400px] overflow-hidden rounded-2xl md:rounded-[32px] shadow-lg"
          >
            <img 
              src="/kolase-bottom.webp" 
              alt="Bottom" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
              style={{ objectPosition: "50% 40%" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Kolase;