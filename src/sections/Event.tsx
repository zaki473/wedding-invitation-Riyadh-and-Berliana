'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { MapPin } from 'lucide-react' // Opsional: Install lucide-react untuk ikon

export default function Event() {
  const sectionRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const moveDown = useTransform(smoothProgress, [0, 1], [-100, 200])
  const rotateLeft = useTransform(smoothProgress, [0, 1], [0, -15])
  const rotateRight = useTransform(smoothProgress, [0, 1], [0, 15])

  // Link Google Maps (Sesuaikan dengan lokasi asli)
  const mapsUrl = "https://maps.app.goo.gl/xdBsTdiVZBMZRAQdA"

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-[#fdfbf7] text-center px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/batik-soft.png')] opacity-[0.05] pointer-events-none" />

      {/* DAUN KIRI */}
      <motion.img
        src="/ivy.webp"
        alt="Flower Left"
        style={{ y: moveDown, rotate: rotateLeft, scaleX: -1 }}
        initial={{ y: -200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute top-[-20px] left-[-30px] w-[180px] md:w-[350px] z-20 pointer-events-none opacity-90"
      />

      {/* DAUN KANAN */}
      <motion.img
        src="/ivy.webp"
        alt="Flower Right"
        style={{ y: moveDown, rotate: rotateRight }}
        initial={{ y: -200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        viewport={{ once: true }}
        className="absolute top-[-20px] right-[-30px] w-[180px] md:w-[350px] z-20 pointer-events-none opacity-90"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <span className="text-[#b68d40] tracking-[0.5em] text-[10px] md:text-xs uppercase mb-4 block font-light">
            Save The Date
          </span>
          <h2 className="text-4xl md:text-6xl text-[#3d2b1f] font-[family-name:var(--font-playfair)] italic">
            Rangkaian <br />Acara
          </h2>
          <div className="flex justify-center items-center mt-8 gap-4">
            <div className="h-[0.5px] w-16 bg-gradient-to-r from-transparent to-[#b68d40]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#b68d40]" />
            <div className="h-[0.5px] w-16 bg-gradient-to-l from-transparent to-[#b68d40]" />
          </div>
        </motion.div>

        <div className="mt-20 grid gap-10 md:grid-cols-2 items-stretch">
          <EventCard 
            number="1"
            title="Akad Nikah"
            date="Senin, 01 Juni 2026"
            time="07.00 – 09.00 WIB"
            // note="(Hanya untuk keluarga inti)"
            location="Gedung VEDC Malang - Aula serbaguna"
            address="Jl. Teluk Mandar, Arjosari, Malang"
            mapsUrl={mapsUrl}
            delay={0.3}
          />

          <EventCard 
            number="2"
            title="Resepsi"
            date="Senin, 01 Juni 2026"
            time="10.30 WIB – 13.00 WIB"
            location="Gedung VEDC Malang - Aula serbaguna"
            address="Jl. Teluk Mandar, Arjosari, Malang"
            mapsUrl={mapsUrl}
            delay={0.5}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          viewport={{ once: true }}
          className="mt-28"
        >
          <p className="text-[#7a5c3c] italic leading-loose text-sm md:text-base font-light max-w-xl mx-auto px-4">
            "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai."
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function EventCard({ number, title, date, time, note, location, address, mapsUrl, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="flex flex-col bg-white/40 backdrop-blur-sm border border-[#e5d5bc]/50 rounded-t-[140px] rounded-b-[40px] p-10 md:p-12 transition-all duration-700 hover:bg-white/80 hover:shadow-[0_20px_50px_rgba(182,141,64,0.1)]"
    >
      <div className="flex-grow">
        <div className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#fdfbf7] border border-[#e5d5bc] shadow-inner">
          <span className="text-[#b68d40] font-[family-name:var(--font-playfair)] italic text-2xl">{number}</span>
        </div>
        <h3 className="text-xs tracking-[0.3em] uppercase text-[#b68d40] font-bold mb-6">{title}</h3>
        <div className="space-y-3 text-[#3d2b1f] mb-8">
          <p className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] italic">{date}</p>
          <p className="text-base font-light tracking-widest">{time}</p>
          {note && <p className="text-xs font-light tracking-widest italic opacity-60 mt-2">{note}</p>}
        </div>
        <div className="mt-8 pt-8 border-t border-[#e5d5bc]/60">
          <p className="font-[family-name:var(--font-playfair)] text-xl text-[#3d2b1f]">{location}</p>
          <p className="text-[10px] text-gray-400 mt-3 uppercase tracking-[0.1em] leading-relaxed px-4">{address}</p>
        </div>
      </div>

      {/* BUTTON REDIRECT MAPS */}
      <div className="mt-10">
        <motion.a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#3d2b1f] text-[#fdfbf7] text-[10px] md:text-xs uppercase tracking-[0.2em] rounded-full shadow-lg hover:bg-[#b68d40] transition-colors duration-500"
        >
          <MapPin size={14} className="mb-0.5" />
          Lihat Lokasi
        </motion.a>
      </div>
    </motion.div>
  )
}