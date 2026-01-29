"use client"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function OpeningPage() {
  const router = useRouter()

  return (
    <main className="h-screen flex flex-col justify-center items-center text-center bg-[#2b1b12] text-white px-6 relative overflow-hidden">

      {/* Ornamen Background */  }
      <div className="absolute inset-0 bg-[url('/batik1.png')] opacity-5" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-10"
      >

        <p className="tracking-widest text-sm text-[#d6b98c]">
          Undangan Pernikahan
        </p>

        <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight text-[#f5e6cc]">
         Muhammad Riyadh <br /> & <br /> Berliana Radhini Isnindiafi
        </h1>

        <p className="mt-6 italic text-[#e6d3b3]">
          Senin, 1 juni 2026
        </p>

        <button
          onClick={() => router.push("/home")}
          className="mt-10 px-10 py-3 border border-[#d6b98c] text-[#d6b98c] rounded-full hover:bg-[#d6b98c] hover:text-[#2b1b12] transition-all duration-300"
        >
          Buka Undangan
        </button>

      </motion.div>
    </main>
  )
}
