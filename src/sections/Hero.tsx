"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Hero() {

  const [mobileLoaded, setMobileLoaded] = useState(false)
  const [desktopLoaded, setDesktopLoaded] = useState(false)

  return (
    <section className="min-h-screen w-full relative overflow-hidden">

      {/* ================= MOBILE ================= */}
      <div className="absolute inset-0 md:hidden">

        {/* POSTER IMAGE */}
        <motion.img
          src="/couple.png"
          alt="poster"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 1 }}
          animate={{ opacity: mobileLoaded ? 0 : 1 }}
          transition={{ duration: 1 }}
        />

        {/* VIDEO */}
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/video.mp4"
          onLoadedData={() => setMobileLoaded(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: mobileLoaded ? 1 : 0 }}
          transition={{ duration: 1.2 }}
          className="w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </motion.video>

      </div>


      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex w-full min-h-screen">

        {/* LEFT — PHOTO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="w-1/2 relative"
        >
          <img
            src="/couple.png"
            alt="Couple"
            className="w-full h-screen object-cover"
          />

          {/* gradient cinematic */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </motion.div>


        {/* RIGHT — VIDEO */}
        <div className="w-1/2 relative">

          {/* POSTER */}
          <motion.img
            src="/couple.png"
            alt="poster"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 1 }}
            animate={{ opacity: desktopLoaded ? 0 : 1 }}
            transition={{ duration: 1 }}
          />

          {/* VIDEO */}
          <motion.video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/video.mp4"
            onLoadedData={() => setDesktopLoaded(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: desktopLoaded ? 1 : 0 }}
            transition={{ duration: 1.2 }}
            className="w-full h-screen object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
          </motion.video>

          {/* cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent" />

        </div>

      </div>

    </section>
  )
}
