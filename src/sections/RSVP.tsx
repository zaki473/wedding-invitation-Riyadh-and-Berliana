'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RSVP() {
  const [formData, setFormData] = useState({
    nama: "",
    jumlah: "1",
    status: "Hadir",
    pesan: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  // PASTIIN URL INI ADALAH URL TERBARU DARI LANGKAH 2 DI ATAS
  const scriptURL = "https://script.google.com/macros/s/AKfycbzKcOrLb0BGZMn7g4JnLskNtUHgD1QOysnLgrGoSzskN3YTtO8tmdrGZx_6YgJTLqE/exec";

  try {
    // Mengirim data sebagai teks biasa agar tidak terhalang CORS
    await fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors', // Penting untuk Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Karena menggunakan no-cors, kita tidak bisa baca respon JSON-nya, 
    // jadi kita asumsikan jika tidak error berarti masuk.
    setIsSuccess(true);
    setFormData({ nama: "", jumlah: "1", status: "Hadir", pesan: "" });
  } catch (error) {
    console.error("Error:", error);
    alert("Terjadi kesalahan teknis. Silakan coba lagi.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section className="relative py-20 md:py-28 bg-[#fdfbf7] overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        .font-latin { font-family: 'Great Vibes', cursive; }
      `}</style>

      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/batik-soft.png')] opacity-5 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="block uppercase tracking-[0.4em] text-[10px] md:text-xs text-[#b68d40] font-semibold mb-2">Reservation</span>
          <h2 className="font-latin text-5xl md:text-7xl text-[#800000]">Konfirmasi Kehadiran</h2>
        </div>

        <div className="bg-white/70 backdrop-blur-md p-8 md:p-12 rounded-[40px] border border-[#e5d5bc] shadow-xl relative">
          
          <AnimatePresence>
            {isSuccess ? (
              // Tampilan jika Sukses
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
                <h3 className="text-xl font-serif text-[#3d2b1f] mb-2">Terima Kasih!</h3>
                <p className="text-sm text-[#7a5c3c]">Konfirmasi Anda telah kami terima dan tersimpan di daftar tamu.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-[#b68d40] text-xs underline uppercase tracking-widest"
                >
                  Kirim lagi
                </button>
              </motion.div>
            ) : (
              // Form Input
              <motion.form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[#b68d40] font-bold mb-2">Nama Lengkap</label>
                  <input 
                    required name="nama" value={formData.nama} onChange={handleChange}
                    className="w-full bg-[#fdfbf7]/50 border border-[#e5d5bc] rounded-xl px-4 py-3 outline-none focus:border-[#b68d40] transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#b68d40] font-bold mb-2">Jumlah Orang</label>
                    <select name="jumlah" value={formData.jumlah} onChange={handleChange} className="w-full bg-[#fdfbf7]/50 border border-[#e5d5bc] rounded-xl px-4 py-3 outline-none">
                      {[1,2].map(n => <option key={n} value={n}>{n} Orang</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#b68d40] font-bold mb-2">Kehadiran</label>
                    <select name="status" value={formData.status} onChange={handleChange} className="w-full bg-[#fdfbf7]/50 border border-[#e5d5bc] rounded-xl px-4 py-3 outline-none">
                      <option value="Hadir">Hadir</option>
                      <option value="Tidak Hadir">Tidak Hadir</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[#b68d40] font-bold mb-2">Ucapan & Doa</label>
                  <textarea name="pesan" rows={3} value={formData.pesan} onChange={handleChange} className="w-full bg-[#fdfbf7]/50 border border-[#e5d5bc] rounded-xl px-4 py-3 outline-none resize-none" />
                </div>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className={`w-full py-4 rounded-xl shadow-lg uppercase tracking-[0.3em] text-xs font-bold transition-all ${
                    isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#800000] text-[#fdfbf7] hover:bg-[#600000]'
                  }`}
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Konfirmasi"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}