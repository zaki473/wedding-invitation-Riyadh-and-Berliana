'use client'

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GuestMessage {
  nama: string;
  status: string;
  pesan: string;
  jumlah?: string | number;
}

export default function RSVP() {
  const [formData, setFormData] = useState({
    nama: "",
    jumlah: "1",
    status: "Hadir",
    pesan: ""
  });
  
  const [messages, setMessages] = useState<GuestMessage[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // --- LOGIK PAGINATION ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Jumlah pesan per halaman

  const scriptURL = "https://script.google.com/macros/s/AKfycbxgiDLpoZv4BImkUTJ7bsdZbiZx0DkFclbVOB3N-FZU8ZVKm0KRS8kzbYXk5iW-pA8S/exec";

  const fetchMessages = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${scriptURL}?t=${Date.now()}`); 
      if (!response.ok) throw new Error('Gagal fetch');
      const data = await response.json();
      setMessages(Array.isArray(data) ? [...data].reverse() : []);
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // Hitung data yang tampil
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMessages = messages.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(messages.length / itemsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll otomatis ke awal daftar ucapan saat ganti halaman
    const element = document.getElementById("ucapan-list");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(formData),
      });
      setIsSuccess(true);
      setFormData({ nama: "", jumlah: "1", status: "Hadir", pesan: "" });
      setTimeout(() => { fetchMessages(); }, 2000);
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan teknis.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 md:py-28 bg-[#fdfbf7] overflow-hidden min-h-screen">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        .font-latin { font-family: 'Great Vibes', cursive; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e5d5bc; border-radius: 10px; }
      `}</style>

      <div className="absolute inset-0 bg-[url('/batik-soft.png')] opacity-5 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        
        {/* FORM RSVP */}
        <div className="text-center mb-12">
          <span className="block uppercase tracking-[0.4em] text-[10px] md:text-xs text-[#b68d40] font-semibold mb-2">Reservation</span>
          <h2 className="font-latin text-5xl md:text-7xl text-[#800000]">Konfirmasi Kehadiran</h2>
        </div>

        <div className="bg-white/70 backdrop-blur-md p-8 md:p-12 rounded-[40px] border border-[#e5d5bc] shadow-xl relative mb-16">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
                <h3 className="text-xl font-serif text-[#3d2b1f] mb-2">Terima Kasih!</h3>
                <p className="text-sm text-[#7a5c3c]">Konfirmasi Anda telah kami terima.</p>
                <button onClick={() => setIsSuccess(false)} className="mt-6 text-[#b68d40] text-xs underline uppercase tracking-widest">Kirim lagi</button>
              </motion.div>
            ) : (
              <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[#b68d40] font-bold mb-2">Nama Lengkap</label>
                  <input required name="nama" value={formData.nama} onChange={handleChange} className="w-full bg-[#fdfbf7]/50 border border-[#e5d5bc] rounded-xl px-4 py-3 outline-none focus:border-[#b68d40] transition-all text-black" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#b68d40] font-bold mb-2">Jumlah Orang</label>
                    <select name="jumlah" value={formData.jumlah} onChange={handleChange} className="w-full bg-[#fdfbf7]/50 border border-[#e5d5bc] rounded-xl px-4 py-3 outline-none text-black">
                      {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} Orang</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#b68d40] font-bold mb-2">Kehadiran</label>
                    <select name="status" value={formData.status} onChange={handleChange} className="w-full bg-[#fdfbf7]/50 border border-[#e5d5bc] rounded-xl px-4 py-3 outline-none text-black">
                      <option value="Hadir">Hadir</option>
                      <option value="Tidak Hadir">Tidak Hadir</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[#b68d40] font-bold mb-2">Ucapan & Doa</label>
                  <textarea name="pesan" rows={3} value={formData.pesan} onChange={handleChange} className="w-full bg-[#fdfbf7]/50 border border-[#e5d5bc] rounded-xl px-4 py-3 outline-none resize-none text-black" placeholder="Tulis ucapan selamat..." />
                </div>
                <button disabled={isSubmitting} type="submit" className={`w-full py-4 rounded-xl shadow-lg uppercase tracking-[0.3em] text-xs font-bold transition-all ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#800000] text-[#fdfbf7] hover:bg-[#600000]'}`}>
                  {isSubmitting ? "Mengirim..." : "Kirim Konfirmasi"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* DAFTAR UCAPAN */}
        <div className="space-y-6" id="ucapan-list">
          <div className="flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-[#e5d5bc]"></div>
            <h3 className="text-[#b68d40] font-bold uppercase tracking-widest text-[10px] md:text-xs text-center">Ucapan Doa Restu ({messages.length})</h3>
            <div className="h-[1px] flex-1 bg-[#e5d5bc]"></div>
          </div>

          <div className="space-y-4">
            {isLoading ? (
              <div className="text-center py-10 text-[#b68d40] animate-pulse text-sm">Memuat pesan...</div>
            ) : messages.length === 0 ? (
              <div className="text-center py-10 text-gray-400 italic text-sm">Belum ada pesan dari tamu.</div>
            ) : (
              <>
                <AnimatePresence mode="popLayout">
                  {currentMessages.map((item, idx) => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, scale: 0.95 }}
                      key={`${currentPage}-${idx}`} 
                      className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-[#e5d5bc] shadow-sm"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <span className="font-bold text-[#3d2b1f] text-sm md:text-base capitalize">{item.nama}</span>
                        <span className={`text-[9px] font-bold uppercase tracking-tighter px-2 py-1 rounded-md ${item.status === 'Hadir' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                          {item.status === 'Hadir' ? '✓ Hadir' : '× Absen'}
                        </span>
                      </div>
                      <p className="text-[#7a5c3c] text-sm leading-relaxed italic">"{item.pesan}"</p>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* --- TAB PAGINATION (1 2 3) --- */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-8 py-4">
                    <button 
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="p-2 text-[#b68d40] disabled:opacity-30"
                    >
                      &lt;
                    </button>
                    
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => paginate(i + 1)}
                        className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${
                          currentPage === i + 1 
                          ? 'bg-[#800000] text-white shadow-md' 
                          : 'bg-white text-[#b68d40] border border-[#e5d5bc] hover:border-[#b68d40]'
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}

                    <button 
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="p-2 text-[#b68d40] disabled:opacity-30"
                    >
                      &gt;
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}