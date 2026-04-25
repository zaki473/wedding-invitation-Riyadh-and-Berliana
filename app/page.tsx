"use client"
import { Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { motion } from "framer-motion"

function GuestName() {
  const searchParams = useSearchParams()
  const namaTamu = searchParams.get("to") || "Tamu Undangan"
  
  return (
    <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-[#f5e6cc] font-[family-name:var(--font-playfair)] font-bold text-center">
      {namaTamu}
    </h2>
  )
}

export default function OpeningPage() {
  const router = useRouter()

  return (
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
        className="relative z-20 text-center mt-4 md:mt-0 md:mb-10"
      >
        <p className="uppercase tracking-[0.4em] sm:tracking-[0.6em] text-[10px] sm:text-xs md:text-base text-[#d6b98c] font-light">
          The Wedding Of
        </p>
      </motion.div>

      <div className="flex-grow md:hidden" /> 

      {/* KONTEN UTAMA - Container diubah menjadi div biasa, bukan motion.div yang melempar varian */}
      <div className="relative z-20 text-center px-4 sm:px-6 w-full max-w-full md:max-w-[90%] lg:max-w-7xl flex flex-col items-center">
        
        {/* NAMA MEMPELAI */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 sm:mb-6 md:mb-8 w-full"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[8rem] xl:text-[9rem] text-[#f5e6cc] font-[family-name:var(--font-great-vibes)] italic tracking-tight leading-normal md:leading-none drop-shadow-2xl">
            Berliana & Riyadh
          </h1>
        </motion.div>

        {/* TANGGAL */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-3 sm:gap-4 md:gap-16 mb-8 md:mb-12 w-full"
        >
          <div className="hidden md:block w-20 lg:w-32 h-[1px] bg-gradient-to-r from-transparent to-[#d6b98c]/50" />
          <p className="text-xs sm:text-sm md:text-xl lg:text-2xl text-[#e6d3b3] font-light tracking-[0.4em] sm:tracking-[0.6em]">
            01 . 06 . 2026
          </p>
          <div className="hidden md:block w-20 lg:w-32 h-[1px] bg-gradient-to-l from-transparent to-[#d6b98c]/50" />
        </motion.div>

        {/* BAGIAN NAMA TAMU */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 md:mb-12 flex flex-col items-center w-full max-w-[280px] sm:max-w-sm md:max-w-2xl"
        >
          <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#d6b98c]/80 mb-2 md:mb-5 font-light text-center">
            Kepada Yth. Bapak/Ibu/Saudara/i
          </span>
          
          <div className="w-full px-4 py-3 sm:px-6 sm:py-4 md:px-20 md:py-6 border-x border-[#d6b98c]/20 bg-black/10 backdrop-blur-[4px] relative group flex justify-center items-center min-h-[60px] md:min-h-[100px]">
             <div className="hidden md:block absolute top-0 left-0 w-4 h-4 border-t border-l border-[#d6b98c]/40" />
             <div className="hidden md:block absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#d6b98c]/40" />
             
             <Suspense fallback={<p className="text-[#f5e6cc] text-sm md:text-base">Memuat Nama...</p>}>
                <GuestName />
             </Suspense>
          </div>
        </motion.div>

        {/* TOMBOL BUKA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(214, 185, 140, 0.1)", letterSpacing: "0.3em" }}
          whileTap={{ scale: 0.98 }}
          onClick={() => router.push("/home")}
          className="px-6 py-3 sm:px-8 sm:py-3 md:px-24 md:py-5 lg:px-28 bg-transparent border border-[#d6b98c]/40 text-[#d6b98c] rounded-full transition-all duration-700 tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.4em] uppercase text-[10px] sm:text-xs md:text-sm backdrop-blur-md shadow-xl"
        >
          Buka Undangan
        </motion.button>
      </div>

      {/* FRAME BORDER TIPIS */}
      <div className="absolute inset-3 sm:inset-4 md:inset-10 border border-[#d6b98c]/10 pointer-events-none z-10" />
    </main>
  )
}