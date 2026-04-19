"use client"
import { Suspense } from "react"
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

function GuestName() {
  const searchParams = useSearchParams()
  const namaTamu = searchParams.get("to") || "Tamu Undangan"
  
  return (
    <h2 className="text-1xl md:text-5xl text-[#f5e6cc] font-[family-name:var(--font-playfair)] bold">
      {namaTamu}
    </h2>
  )
}

export default function OpeningPage() {
  const router = useRouter()

  return (
    /* Perubahan: Tambahkan md:justify-center agar konten ngumpul di tengah pada desktop */
    <main className="relative h-[100dvh] w-full flex flex-col justify-between md:justify-center items-center overflow-hidden py-12 md:py-10 bg-[#0a0a0a]">
      
      {/* BACKGROUND & OVERLAY */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90 z-10" />
        <motion.div 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          <div 
            className="w-full h-full bg-[url('/depanbiru.jpeg')] bg-cover bg-no-repeat opacity-70 
                       bg-center md:bg-[center_top_20%]" 
          />
        </motion.div>
      </div>

      {/* DEKORASI KHUSUS DESKTOP */}
      <div className="hidden md:block">
        <div className="absolute left-20 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#d6b98c]/30 to-transparent z-20" />
        <div className="absolute right-20 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#d6b98c]/30 to-transparent z-20" />
        <div className="absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 z-20 opacity-50 tracking-[1.5em] text-[12px] text-[#d6b98c] uppercase whitespace-nowrap">
          The Wedding of Berliana & Riyadh
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 rotate-90 z-20 opacity-50 tracking-[1.5em] text-[12px] text-[#d6b98c] uppercase whitespace-nowrap">
          Saturday, June 01, 2026
        </div>
      </div>

      {/* HEADER: The Wedding Of */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="relative z-20 text-center md:mb-10" /* Tambah mb-10 di desktop */
      >
        <p className="uppercase tracking-[0.6em] text-[10px] md:text-base text-[#d6b98c] font-light">
          The Wedding Of
        </p>
      </motion.div>

      <div className="flex-grow md:hidden" /> 

      {/* KONTEN UTAMA */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 text-center px-6 w-full max-w-4xl md:max-w-[90%] lg:max-w-7xl flex flex-col items-center"
      >
        {/* NAMA MEMPELAI: Font desktop dikecilkan sedikit agar muat di layar (dari 11rem ke 8rem) */}
        <motion.div variants={itemVariants} className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-[8rem] lg:text-[9rem] text-[#f5e6cc] font-[family-name:var(--font-playfair)] italic tracking-tight leading-none drop-shadow-2xl">
            Berliana & Riyadh
          </h1>
        </motion.div>

        {/* TANGGAL */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 md:gap-16 mb-10 md:mb-12">
          <div className="hidden md:block w-32 h-[1px] bg-gradient-to-r from-transparent to-[#d6b98c]/50" />
          <p className="text-xs md:text-2xl text-[#e6d3b3] font-light tracking-[0.6em]">
            01 . 06 . 2026
          </p>
          <div className="hidden md:block w-32 h-[1px] bg-gradient-to-l from-transparent to-[#d6b98c]/50" />
        </motion.div>

        {/* BAGIAN NAMA TAMU */}
        <motion.div 
          variants={itemVariants}
          className="mb-8 md:mb-12 flex flex-col items-center w-full"
        >
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#d6b98c]/80 mb-3 md:mb-5 font-light">
            Kepada Yth. Bapak/Ibu/Saudara/i
          </span>
          
          <div className="px-6 py-2 md:px-20 md:py-6 border-x border-[#d6b98c]/20 bg-black/10 backdrop-blur-[4px] relative group">
             <div className="hidden md:block absolute top-0 left-0 w-4 h-4 border-t border-l border-[#d6b98c]/40" />
             <div className="hidden md:block absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#d6b98c]/40" />
             
             <Suspense fallback={<p className="text-[#f5e6cc]">Memuat Nama...</p>}>
                <GuestName />
             </Suspense>
          </div>
        </motion.div>

        {/* TOMBOL BUKA: Sekarang pasti muncul karena margin diatas sudah dikurangi */}
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(214, 185, 140, 0.1)", letterSpacing: "0.5em" }}
          whileTap={{ scale: 0.98 }}
          onClick={() => router.push("/home")}
          className="px-7 py-3 md:px-28 md:py-5 bg-transparent border border-[#d6b98c]/40 text-[#d6b98c] rounded-full transition-all duration-700 tracking-[0.2em] md:tracking-[0.4em] uppercase text-[10px] md:text-sm backdrop-blur-md shadow-xl"
        >
          Buka Undangan
        </motion.button>
      </motion.div>

      {/* FRAME BORDER TIPIS */}
      <div className="absolute inset-4 md:inset-10 border border-[#d6b98c]/10 pointer-events-none z-10" />
    </main>
  )
}