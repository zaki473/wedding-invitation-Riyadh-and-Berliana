'use client'

import { motion } from 'framer-motion'

export default function Couple() {
  return (
    <section className="py-28 bg-[#f9f4ec] text-center px-6 relative overflow-hidden">

      {/* Batik Ornament */}
      <div className="absolute inset-0 bg-[url('/batik-soft.png')] opacity-10" />

      <div className="relative max-w-5xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-[#3b2a1f]"
        >
          Pengantin
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-28 h-[2px] bg-[#c5a880] mx-auto my-6 origin-center rounded-full"
        />

        {/* Couple Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">

          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white border border-[#c5a880] rounded-3xl shadow-xl p-10 relative"
          >
            <p className="uppercase tracking-widest text-sm text-[#7a5c3c]">
              Mempelai Pria
            </p>

            <h3 className="mt-4 text-3xl font-serif text-[#3b2a1f]">
              Muhammad Riyadh
            </h3>

            <p className="mt-4 text-[#6a4b32] italic">
              Putra dari
            </p>

            <p className="mt-2 text-gray-700">
              Bapak .... <br /> Ibu ....
            </p>

            {/* Decorative Glow */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-[#c5a880]/30 pointer-events-none" />
          </motion.div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white border border-[#c5a880] rounded-3xl shadow-xl p-10 relative"
          >
            <p className="uppercase tracking-widest text-sm text-[#7a5c3c]">
              Mempelai Wanita
            </p>

            <h3 className="mt-4 text-3xl font-serif text-[#3b2a1f]">
              Berliana Radini Isnindiafi
            </h3>

            <p className="mt-4 text-[#6a4b32] italic">
              Putri dari
            </p>

            <p className="mt-2 text-gray-700">
              Bapak .... <br /> Ibu ....
            </p>

            <div className="absolute inset-0 rounded-3xl ring-1 ring-[#c5a880]/30 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
