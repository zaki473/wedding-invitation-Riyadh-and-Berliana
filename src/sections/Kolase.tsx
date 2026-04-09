'use client'

import React from "react";
import { motion } from "framer-motion";

const Kolase: React.FC = () => {
  const animProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 1.2 }
  };

  return (
    <section className="relative py-16 md:py-28 bg-[#fdfbf7] overflow-hidden">
      {/* Import Font Latin */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        .font-latin {
          font-family: 'Great Vibes', cursive;
        }
      `}</style>

      {/* 1. BACKGROUND TEXTURE */}
      <div className="absolute inset-0 bg-[url('/batik-soft.png')] opacity-5 pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
        
        {/* Judul - Maroon & Latin */}
        <motion.div 
          {...animProps}
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

        {/* --- GRID KOLASE FLEKSIBEL --- */}
        <div className="flex flex-col gap-4 md:gap-6">
          
          {/* Top Banner (Full Width) */}
          <motion.div 
            {...animProps}
            className="w-full h-52 md:h-[400px] overflow-hidden rounded-2xl md:rounded-[32px] shadow-lg"
          >
            <img 
              src="/kolase-top.webp" 
              alt="Top" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 select-none"
              onContextMenu={(e) => e.preventDefault()} // Mencegah Klik Kanan (Save Image)
              draggable={false} // Mencegah Drag Image
              /* 
                PANDUAN GESER GAMBAR KANAN KIRI:
                objectPosition: "X% Y%"
                - X% (Angka Pertama) = Kiri-Kanan. 0% (Kiri mentok), 50% (Tengah), 100% (Kanan mentok).
                - Y% (Angka Kedua)   = Atas-Bawah.
                Contoh di bawah ini geser sedikit ke Kanan (70%).
              */
              style={{ objectPosition: "70% 40%" }} 
            />
          </motion.div>

          {/* Middle Section (2 Kolom) */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {/* Gambar Kiri */}
            <motion.div
               {...animProps}
               transition={{ ...animProps.transition, delay: 0.2 }}
               className="w-full h-64 md:h-[500px] overflow-hidden rounded-2xl md:rounded-[32px] shadow-lg"
            >
              <img 
                src="/kolase-kiri.jpg" 
                alt="Moment 1"
                // Tambahkan object-center, hapus style inline
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105 select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
            </motion.div>

            {/* Gambar Kanan */}
            <motion.div
               {...animProps}
               transition={{ ...animProps.transition, delay: 0.4 }}
               className="w-full h-64 md:h-[500px] overflow-hidden rounded-2xl md:rounded-[32px] shadow-lg"
            >
              <img 
                src="/kolase-kanan.webp" 
                alt="Moment 2"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
                // Contoh ini posisi X ditengah (50%), posisi Y di atas (20%)
                style={{ objectPosition: "50% 20%" }}
              />
            </motion.div>
          </div>

          {/* Bottom Full Image */}
          <motion.div 
            {...animProps}
            transition={{ ...animProps.transition, delay: 0.3 }}
            className="w-full h-52 md:h-[400px] overflow-hidden rounded-2xl md:rounded-[32px] shadow-lg"
          >
            <img 
              src="/kolase-bottom.webp" 
              alt="Moment Bottom" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
              // Geser Kanan-Kiri normal (50%), Atas-bawah di 40%
              style={{ objectPosition: "50% 40%" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Kolase;