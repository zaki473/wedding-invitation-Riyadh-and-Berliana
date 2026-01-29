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
        <audio autoPlay loop>
        <source src="/music.mp3" type="audio/mp3" />
        </audio>

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
