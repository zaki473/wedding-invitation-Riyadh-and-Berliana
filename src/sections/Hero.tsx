"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
<section className="min-h-screen w-full relative overflow-hidden">

  {/* MOBILE — Fullscreen Video */}
  <div className="absolute inset-0 md:hidden">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="/video.mp4" type="video/mp4" />
    </video>

    {/* Overlay optional */}
    <div className="absolute inset-0 " />
  </div>


  {/* DESKTOP LAYOUT */}
  <div className="hidden md:flex w-full min-h-screen">

    {/* LEFT — PHOTO */}
    <div className="w-1/2 relative">
      <img
        src="/couple.png"
        alt="Couple"
        className="w-full h-screen object-cover"
      />

      {/* overlay optional */}
      <div className="absolute inset-0 bg-gradient-to-r to-transparent" />
    </div>


    {/* RIGHT — VIDEO */}
    <div className="w-1/2 relative">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-screen object-cover"
      >
        <source src="/last.mp4" type="video/mp4" />
      </video>

      {/* overlay optional */}
      <div className="absolute inset-0" />
    </div>

  </div>


</section>
  )
}
