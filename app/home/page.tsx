import MusicPlayer from "@/src/sections/MusicPlayer"
import Hero from "@/src/sections/Hero"
import Prayer from "@/src/sections/Prayer"
import Couple from "@/src/sections/Couple"
import Event from "@/src/sections/Event"
import Countdown from "@/src/sections/Countdown"
import RSVP from "@/src/sections/RSVP"
import Footer from "@/src/sections/Footer"
import Kolase from "@/src/sections/Kolase"
import Gift from "@/src/sections/Gift"
import Thankyou from "@/src/sections/Thankyou"
export default function Home() {
  return (
    <main>
      <MusicPlayer />

      <Hero />
      <Prayer />
      <Couple />
      <Event />
      <Countdown />
      <Kolase/>
      <Gift/>
      <RSVP />
      <Thankyou />
      <Footer />
    </main>
  )
}
