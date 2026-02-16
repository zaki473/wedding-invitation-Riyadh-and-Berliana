'use client'

import { motion } from 'framer-motion'

export default function Prayer() {
  return (
    <section className="py-28 px-6 bg-[#fdfbf7] text-center relative overflow-hidden min-h-screen">

      {/* Batik Background */}
      <div className="absolute inset-0 bg-[url('/batik-soft.png')] opacity-10 z-0" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto z-10"
      >

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif text-[#3b2a1f]"
        >
          Doa Pernikahan
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          className="w-28 h-[2px] bg-[#c5a880] mx-auto my-6 rounded-full"
        />

        <motion.p className="mt-6 text-xl md:text-2xl text-[#4b3628]">
         وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
        </motion.p>

        <motion.p className="mt-6 italic text-[#6a4b32]">
          "Wa min āyātihī an khalaqa lakum min anfusikum azwājan litaskunū ilaiha wa ja‘ala bainakum mawaddatan wa raḥmah."
        </motion.p>

        <motion.p className="mt-6 text-gray-700">
          Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri agar kamu merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.
        </motion.p>

        <motion.p className="mt-4 text-sm text-[#7a5c3c]">
          QS. Ar-Rum : 21
        </motion.p>

      </motion.div>


      {/* FLOWER LEFT */}
      <motion.img
        src="/bunga.png"
        alt="bunga kiri"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="
          absolute
          bottom-0
          left-0
          w-[55%]
          sm:w-[45%]
          md:w-[30%]
          z-10
          pointer-events-none
        "
      />


      {/* FLOWER RIGHT */}
      <motion.img
        src="/bunga.png"
        alt="bunga kanan"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="
          absolute
          bottom-0
          right-0
          w-[55%]
          sm:w-[45%]
          md:w-[30%]
          scale-x-[-1]
          z-10
          pointer-events-none
        "
      />

    </section>
  )
}
