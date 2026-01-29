'use client'

import { motion } from 'framer-motion'

export default function Event() {
  return (
    <section className="py-28 text-center bg-white px-6 relative overflow-hidden">

      {/* Soft Ornament */}
      <div className="absolute inset-0 bg-[url('/batik-soft.png')] opacity-10" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto"
      >

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif text-[#3b2a1f]"
        >
          Rangkaian Acara
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-28 h-[2px] bg-[#c5a880] mx-auto my-6 origin-center rounded-full"
        />

        {/* Timeline */}
        <div className="mt-16 space-y-12">

          {/* Akad */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-[#f9f4ec] border border-[#c5a880] rounded-3xl shadow-xl p-10 text-left md:text-center"
          >
            <p className="uppercase tracking-widest text-sm text-[#7a5c3c]">
              Akad Nikah
            </p>

            <h3 className="mt-3 text-2xl md:text-3xl font-serif text-[#3b2a1f]">
              Senin, 1 juni 2026
            </h3>

            <p className="mt-3 text-[#6a4b32]">
              Pukul 06.00 WIB
            </p>

            <p className="mt-2 text-gray-700">
              VEDC
            </p>
          </motion.div>

          {/* Resepsi */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-[#f9f4ec] border border-[#c5a880] rounded-3xl shadow-xl p-10 text-left md:text-center"
          >
            <p className="uppercase tracking-widest text-sm text-[#7a5c3c]">
              Resepsi
            </p>

            <h3 className="mt-3 text-2xl md:text-3xl font-serif text-[#3b2a1f]">
              Senin, 1 juni 2026
            </h3>

            <p className="mt-3 text-[#6a4b32]">
              Pukul 10.00 WIB
            </p>

            <p className="mt-2 text-gray-700">
              VEDC
            </p>
          </motion.div>

        </div>

        {/* Closing Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-14 italic text-[#6a4b32]"
        >
          “Merupakan kehormatan dan kebahagiaan bagi kami apabila Anda berkenan hadir.”
        </motion.p>

      </motion.div>
    </section>
  )
}
