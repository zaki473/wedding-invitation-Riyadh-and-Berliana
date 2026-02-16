'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Event() {
  const sectionRef = useRef(null)
  
  // Mengatur scroll parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Efek: Saat scroll, bunga akan terus turun perlahan dari posisi aslinya
  const moveDown = useTransform(scrollYProgress, [0, 1], [-50, 150])

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-[#fdfbf7] text-center px-6 relative overflow-hidden"
    >
      {/* BACKGROUND BATIK HALUS */}
      <div className="absolute inset-0 bg-[url('/batik-soft.png')] opacity-[0.05] pointer-events-none" />

      {/* BUNGA POJOK KIRI - Animasi dari Atas ke Bawah */}
      <motion.img
        src="/ivy.png"
        alt="Flower Left"
        style={{ y: moveDown }} // Efek Parallax
        initial={{ y: -300, opacity: 0 }} // Start dari jauh di atas layar
        whileInView={{ y: 0, opacity: 1 }} // Masuk ke posisi normal
        transition={{ 
          duration: 1.8, 
          ease: [0.22, 1, 0.36, 1], // Cubic-bezier untuk gerakan yang sangat smooth/elegant
          delay: 0.2 
        }}
        viewport={{ once: true }}
        className="
          absolute 
          top-0 left-[-20px] 
          w-[160px] md:w-[320px] 
          z-20 pointer-events-none 
          scale-x-[-1] drop-shadow-md
        "
      />

      {/* BUNGA POJOK KANAN - Animasi dari Atas ke Bawah */}
      <motion.img
        src="/ivy.png"
        alt="Flower Right"
        style={{ y: moveDown }} // Efek Parallax
        initial={{ y: -300, opacity: 0 }} // Start dari jauh di atas layar
        whileInView={{ y: 0, opacity: 1 }} // Masuk ke posisi normal
        transition={{ 
          duration: 1.8, 
          ease: [0.22, 1, 0.36, 1], 
          delay: 0.4 // Sedikit lebih lambat dari yang kiri agar organik
        }}
        viewport={{ once: true }}
        className="
          absolute 
          top-0 right-[-20px] 
          w-[160px] md:w-[320px] 
          z-20 pointer-events-none 
          drop-shadow-md
        "
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* JUDUL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-[#b68d40] tracking-[0.4em] text-[10px] md:text-xs uppercase mb-4 block font-medium">
            Save The Date
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#3d2b1f] italic">
            Rangkaian <p>Acara</p>
          </h2>
          <div className="flex justify-center items-center mt-6 gap-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#b68d40]/50" />
            <div className="w-2 h-2 rotate-45 border border-[#b68d40]" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#b68d40]/50" />
          </div>
        </motion.div>

        {/* KARTU ACARA */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          
          {/* AKAD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-md border border-[#e5d5bc] rounded-t-[120px] rounded-b-[40px] p-10 shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#fdfbf7] border border-[#e5d5bc]">
               <span className="text-[#b68d40] font-serif italic text-xl">1</span>
            </div>
            <h3 className="text-sm tracking-[0.2em] uppercase text-[#b68d40] font-semibold mb-4">Akad Nikah</h3>
            <div className="space-y-2 text-[#3d2b1f]">
              <p className="text-2xl font-serif">Senin, 01 Juni 2026</p>
              <p className="text-lg">07.00 – 09.00 WIB</p>
            </div>
            <div className="mt-6 pt-6 border-t border-[#e5d5bc]/50">
              <p className="font-serif text-lg">Gedung VEDC Malang</p>
              <p className="text-xs text-gray-500 mt-2 uppercase tracking-tighter italic">Jl. Teluk Mandar, Arjosari, Malang</p>
            </div>
          </motion.div>

          {/* RESEPSI */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-md border border-[#e5d5bc] rounded-t-[120px] rounded-b-[40px] p-10 shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#fdfbf7] border border-[#e5d5bc]">
               <span className="text-[#b68d40] font-serif italic text-xl">2</span>
            </div>
            <h3 className="text-sm tracking-[0.2em] uppercase text-[#b68d40] font-semibold mb-4">Resepsi</h3>
            <div className="space-y-2 text-[#3d2b1f]">
              <p className="text-2xl font-serif">Senin, 01 Juni 2026</p>
              <p className="text-lg">11.00 WIB – Selesai</p>
            </div>
            <div className="mt-6 pt-6 border-t border-[#e5d5bc]/50">
              <p className="font-serif text-lg">Gedung VEDC Malang</p>
              <p className="text-xs text-gray-500 mt-2 uppercase tracking-tighter italic">Jl. Teluk Mandar, Arjosari, Malang</p>
            </div>
          </motion.div>

        </div>

        {/* QUOTE PENUTUP */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 max-w-2xl mx-auto"
        >
          <p className="text-[#7a5c3c] italic leading-relaxed text-sm md:text-base">
            "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai."
          </p>
        </motion.div>

      </div>
    </section>
  )
}