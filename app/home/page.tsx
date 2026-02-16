import MusicPlayer from "@/src/sections/MusicPlayer"
import Hero from "@/src/sections/Hero"
import Prayer from "@/src/sections/Prayer"
import Couple from "@/src/sections/Couple"
import Event from "@/src/sections/Event"
import Countdown from "@/src/sections/Countdown"
import RSVP from "@/src/sections/RSVP"
import Footer from "@/src/sections/Footer"

export default function Home() {
  return (
    <main>
      <MusicPlayer />

      <Hero />
      <Prayer />
      <Couple />
      <Event />
      <Countdown />
      {/* <RSVP /> */}
      <Footer />
    </main>
  )
}
