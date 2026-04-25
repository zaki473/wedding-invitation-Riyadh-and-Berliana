"use client";

import { motion } from "framer-motion";

export default function ThankYou() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-[#1a1a1a] text-[#f5e6cc] overflow-hidden px-6 py-20">
      {/* 1. BACKGROUND ELEMENT */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/batik-soft.png')] bg-repeat opacity-30" />
      </div>

      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(182,141,64,0.15)_0%,transparent_70%)]" />

      {/* 2. CONTENT AREA */}
      <div className="relative z-10 max-w-3xl w-full text-center">
        {/* Ornamen Atas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="mb-12 flex justify-center items-center gap-4"
        >
          <div className="h-[0.5px] w-12 bg-[#b68d40]/40" />
          <div className="w-2 h-2 rotate-45 border border-[#b68d40]" />
          <div className="h-[0.5px] w-12 bg-[#b68d40]/40" />
        </motion.div>

        {/* Ucapan Terima Kasih */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          style={{ fontFamily: "'Great Vibes', cursive" }}
          className="text-6xl md:text-8xl text-[#d6b98c] mb-8 drop-shadow-sm"
        >
          Terima Kasih
        </motion.h2>

        {/* Pesan Penutup */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="space-y-6 mb-16"
        >
          <p className="text-sm md:text-base leading-relaxed tracking-wide font-light opacity-80 max-w-xl mx-auto italic">
            "Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga,
            apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu
            kepada kedua mempelai."
          </p>
          <div className="h-[1px] w-8 bg-[#b68d40]/30 mx-auto" />
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] font-medium text-[#b68d40]">
            Kami yang berbahagia,
          </p>
        </motion.div>

        {/* LAYOUT NAMA ORANG TUA (KIRI & KANAN) */}
        {/* LAYOUT NAMA ORANG TUA (TETAP KIRI & KANAN DI MOBILE) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="relative grid grid-cols-2 gap-2 md:gap-8 items-start mt-10"
        >
          {/* Garis Pemisah Tengah (Opsional untuk estetika) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.5px] h-12 bg-[#b68d40]/20 hidden md:block" />

          {/* Sisi Kiri - Keluarga CPW */}
          <div className="px-2">
            <p className="text-[8px] md:text-[10px] tracking-[0.2em] uppercase opacity-50 mb-2">
              Keluarga
            </p>
            <h4 className="text-sm md:text-xl font-medium tracking-wide leading-snug">
              Manfa Ludfi & Wiwit Ariana
            </h4>
          </div>

          {/* Sisi Kanan - Keluarga CPP */}
          <div className="px-2 border-l border-[#b68d40]/20 md:border-none">
            <p className="text-[8px] md:text-[10px] tracking-[0.2em] uppercase opacity-50 mb-2">
              Keluarga
            </p>
            <h4 className="text-sm md:text-xl font-medium tracking-wide leading-snug">
              Suparyono & Nurlindah
            </h4>
          </div>
        </motion.div>

        {/* Nama Mempelai */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.9 }}
          className="mt-16"
        >
          <h3
            style={{ fontFamily: "'Great Vibes', cursive" }}
            className="text-4xl md:text-5xl text-[#d6b98c]"
          >
            Berli & Riyadh
          </h3>
        </motion.div>
      </div>

      {/* 3. FOOTER ORNAMENT */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-10 flex flex-col items-center"
      >
        <div className="h-16 w-[1px] bg-gradient-to-b from-[#b68d40] to-transparent opacity-30" />
      </motion.div>

      {/* Frame Border Minimalis */}
      <div className="absolute inset-6 md:inset-12 border border-[#b68d40]/10 pointer-events-none z-0" />
    </section>
  );
}
