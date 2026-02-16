'use client'

import { motion } from 'framer-motion'

export default function Prayer() {
  return (
    <section className="py-28 px-6 bg-[#fdfbf7] text-center relative overflow-hidden">

      {/* Batik Background */}
      <div className="absolute inset-0 bg-[url('/batik-soft.png')] opacity-10" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto"
      >

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif text-[#3b2a1f]"
        >
          Doa Pernikahan
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-28 h-[2px] bg-[#c5a880] mx-auto my-6 origin-center rounded-full"
        />

        {/* Arabic Verse */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="mt-6 text-xl md:text-2xl leading-relaxed text-[#4b3628] font-arabic"
        >
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
          لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
        </motion.p>

        {/* Transliteration */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="mt-6 italic text-[#6a4b32] text-lg"
        >
          "Wa min āyātihī an khalaqa lakum min anfusikum azwājan litaskunū ilaiha
          wa ja‘ala bainakum mawaddatan wa raḥmah."
        </motion.p>

        {/* Meaning */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9 }}
          className="mt-6 text-gray-700 max-w-3xl mx-auto"
        >
          Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan
          untukmu dari jenismu sendiri agar kamu merasa tenteram kepadanya,
          dan Dia menjadikan di antaramu rasa kasih dan sayang.
        </motion.p>

        {/* Surah */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="mt-4 text-sm tracking-wide text-[#7a5c3c]"
        >
          QS. Ar-Rum : 21
        </motion.p>

          </motion.div>

    {/* Flower Bottom Left */}
<motion.img
  src="/bunga.png"
  alt="bunga Left"
  initial={{ opacity: 0, y: 120 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.4 }}
  viewport={{ once: true }}
  className="
    absolute
    bottom-0
    left-0
    w-[45%]
    md:w-[30%]
    pointer-events-none
    select-none
  "
/>

{/* Flower Bottom Right */}
<motion.img
  src="/bunga.png"
  alt="bunga Right"
  initial={{ opacity: 0, y: 120 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.4, delay: 0.2 }}
  viewport={{ once: true }}
  className="
    absolute
    bottom-0
    right-0
    w-[45%]
    md:w-[30%]
    scale-x-[-1]
    pointer-events-none
    select-none
  "
/>


    </section>
  )
}
