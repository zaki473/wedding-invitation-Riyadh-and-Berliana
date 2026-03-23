"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { motion, Variants } from "framer-motion"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.5, staggerChildren: 0.3 }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
  }
}

export default function OpeningPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // Ambil nama dari URL ?to=Nama+Tamu
  const namaTamu = searchParams.get("to") || "Tamu Undangan"

  return (
    <main className="relative h-[100dvh] w-full flex flex-col justify-between items-center overflow-hidden py-12 md:py-20 bg-[#0a0a0a]">
      
      {/* BACKGROUND & OVERLAY */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90 z-10" />
        <motion.div 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "easeOut" }}
          className="w-full h-full bg-[url('/depan.jpg')] bg-center bg-cover bg-no-repeat opacity-70"
        />
      </div>

      {/* HEADER: The Wedding Of */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="relative z-20 text-center"
      >
        <p className="uppercase tracking-[0.6em] text-[10px] md:text-xs text-[#d6b98c] font-light">
          The Wedding Of
        </p>
      </motion.div>

      {/* SPACE KOSONG UNTUK FOTO/SILUET */}
      <div className="flex-grow" />

      {/* KONTEN UTAMA BAWAH */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 text-center px-6 w-full max-w-4xl"
      >
        {/* NAMA MEMPELAI */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-3xl md:text-7xl text-[#f5e6cc] font-[family-name:var(--font-playfair)] italic tracking-tight">
            Riyadh & Berliana
          </h1>
        </motion.div>

        {/* TANGGAL */}
        <motion.p 
          variants={itemVariants}
          className="text-xs md:text-sm text-[#e6d3b3] font-light tracking-[0.5em] mb-10"
        >
          01 . 06 . 2026
        </motion.p>

        {/* --- BAGIAN NAMA TAMU (KPD YTH) --- */}
        <motion.div 
          variants={itemVariants}
          className="mb-8 flex flex-col items-center"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#d6b98c]/70 mb-2 font-light">
            Kepada Yth. Bapak/Ibu/Saudara/i
          </span>
          {/* Box halus untuk nama tamu agar kontras */}
          <div className="px-6 py-2 border-x border-[#d6b98c]/20">
             <h2 className="text-1xl md:text-3xl text-[#f5e6cc] font-[family-name:var(--font-playfair)] bold">
               {namaTamu}
             </h2>
          </div>
        </motion.div>

        {/* TOMBOL BUKA */}
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(214, 185, 140, 0.1)" }}
          whileTap={{ scale: 0.98 }}
          onClick={() => router.push("/home")}
          className="px-12 py-3 bg-transparent border border-[#d6b98c]/40 text-[#d6b98c] rounded-full transition-all duration-700 tracking-[0.2em] uppercase text-[10px] md:text-xs backdrop-blur-md"
        >
          Buka Undangan
        </motion.button>
      </motion.div>

      {/* FRAME BORDER TIPIS */}
      <div className="absolute inset-4 md:inset-8 border border-[#d6b98c]/10 pointer-events-none z-10" />
    </main>
  )
}