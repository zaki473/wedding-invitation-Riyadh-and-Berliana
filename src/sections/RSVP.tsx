export default function RSVP() {
  return (
    <section className="py-20 bg-white text-center px-6">

      <h2 className="text-3xl font-semibold">RSVP & Ucapan</h2>

      <form className="mt-8 max-w-md mx-auto space-y-4">

        <input 
          className="w-full p-3 border border-[#c5a880] rounded"
          placeholder="Nama Tamu"
        />

        <textarea 
          className="w-full p-3 border border-[#c5a880] rounded"
          placeholder="Ucapan & Doa"
        />

        <button className="w-full py-3 bg-[#7a5c3c] text-white rounded">
          Kirim Pangestu
        </button>

      </form>

    </section>
  )
}
