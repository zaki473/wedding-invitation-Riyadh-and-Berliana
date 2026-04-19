'use client'

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Gift, MapPin, X, CreditCard, Package } from "lucide-react";

const WeddingGift: React.FC = () => {
  // State untuk Copy
  const [copiedRek, setCopiedRek] = useState(false);
  const [copiedAlamat, setCopiedAlamat] = useState(false);
  
  // State untuk Pop-up (Modal)
  const [activeModal, setActiveModal] = useState<'rek' | 'alamat' | null>(null);

  const noRekening = "2044456457"; // Ganti No BNI Anda
  const alamatKirim = "Jl. Pendidikan II, Pengasinan, Kec. Gn. Sindur, Kabupaten Bogor, Jawa Barat 16340";

  // Disable scroll pada body ketika modal terbuka
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeModal]);

  const handleCopy = (text: string, type: 'rek' | 'alamat') => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        if (type === 'rek') { setCopiedRek(true); setTimeout(() => setCopiedRek(false), 2000); }
        else { setCopiedAlamat(true); setTimeout(() => setCopiedAlamat(false), 2000); }
      }).catch(() => fallbackCopy(text, type));
    } else {
      fallbackCopy(text, type);
    }
  };

  const fallbackCopy = (text: string, type: 'rek' | 'alamat') => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      if (type === 'rek') { setCopiedRek(true); setTimeout(() => setCopiedRek(false), 2000); }
      else { setCopiedAlamat(true); setTimeout(() => setCopiedAlamat(false), 2000); }
    } catch (err) { console.error(err); }
    document.body.removeChild(textArea);
  };

  const animProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        
        {/* KOTAK GRID UTAMA */}
        <motion.div {...animProps} style={styles.mainGrid}>
          <Gift size={36} color="#b68d40" style={{ marginBottom: '15px' }} />
          <h2 style={styles.title}>Wedding Gift</h2>
          <p style={styles.subtitle}>  
            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah 
            ungkapan tanda kasih Anda, Anda dapat memberi hadiah dan kami akan senang hati menerimanya 
            dan tentu semakin melengkapi kebahagiaan kami
          </p>

          {/* TOMBOL UNTUK MEMUNCULKAN POP-UP */}
          <div style={styles.buttonContainer}>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveModal('rek')}
              style={styles.triggerButton}
            >
              <CreditCard size={18} /> Transfer Bank
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveModal('alamat')}
              style={{...styles.triggerButton, backgroundColor: "#3d2b1f", color: "#fff", border: "none"}}
            >
              <Package size={18} /> Kirim Kado
            </motion.button>
          </div>

          <p style={styles.footerNote}>
            Terima kasih atas perhatian dan doa restu Bapak/Ibu/Saudara/i.
          </p>
        </motion.div>

      </div>

      {/* MODAL / POP-UP */}
      <AnimatePresence>
        {activeModal && (
          <div style={styles.modalOverlay} onClick={() => setActiveModal(null)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", bounce: 0.3 }}
              style={styles.modalContent}
              onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat area dalam di klik
            >
              {/* Tombol Close */}
              <button onClick={() => setActiveModal(null)} style={styles.closeButton}>
                <X size={20} color="#7a5c3c" />
              </button>

              {/* ISI POP-UP REKENING */}
              {activeModal === 'rek' && (
                <div style={styles.card}>
                  <div style={styles.cardHeader}>
                    <div style={styles.bankLogo}>BNI</div>
                    <div style={styles.chip} />
                  </div>
                  <div style={styles.accountBox}>
                    <p style={styles.accountLabel}>Nomor Rekening</p>
                    <h3 style={styles.accountNumber}>{noRekening}</h3>
                    <p style={styles.accountName}>A.N. Berliana Radhini Isnindiafi</p>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCopy(noRekening, 'rek')}
                    style={{ ...styles.copyButton, backgroundColor: copiedRek ? "#2ecc71" : "#b68d40" }}
                  >
                    {copiedRek ? <><Check size={14} /> Tersalin</> : <><Copy size={14} /> Salin No. Rekening</>}
                  </motion.button>
                </div>
              )}

              {/* ISI POP-UP ALAMAT */}
              {activeModal === 'alamat' && (
                <div style={styles.addressCard}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '15px' }}>
                    <MapPin size={24} color="#b68d40" style={{flexShrink: 0}} />
                    <div style={{ textAlign: 'left' }}>
                      <p style={{ ...styles.accountLabel, color: '#7a5c3c' }}>Alamat Pengiriman Kado</p>
                      <p style={styles.addressText}>{alamatKirim}</p>
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCopy(alamatKirim, 'alamat')}
                    style={{ ...styles.copyButton, backgroundColor: copiedAlamat ? "#2ecc71" : "#3d2b1f" }}
                  >
                    {copiedAlamat ? <><Check size={14} /> Tersalin</> : <><Copy size={14} /> Salin Alamat</>}
                  </motion.button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default WeddingGift;

/* ================== STYLES ================== */

const styles: { [key: string]: React.CSSProperties } = {
  section: { padding: "80px 20px", backgroundColor: "#fdfbf7", textAlign: "center" },
  container: { maxWidth: "500px", margin: "0 auto" },
  
  // Kotak Utama
  mainGrid: {
    backgroundColor: "#fff",
    borderRadius: "24px",
    padding: "40px 25px",
    boxShadow: "0 10px 40px rgba(182, 141, 64, 0.08)",
    border: "1px solid #f2e9d8",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: { fontSize: "32px", fontFamily: "var(--font-arizona)", color: "#3d2b1f", marginBottom: "15px", fontStyle: "italic" },
  subtitle: { fontSize: "14px", color: "#7a5c3c", lineHeight: "1.6", fontFamily: "Poppins, sans-serif", marginBottom: "30px" },
  
  // Tombol Pemicu Pop up
  buttonContainer: { display: "flex", flexDirection: "column", gap: "12px", width: "100%", marginBottom: "25px" },
  triggerButton: {
    display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
    width: "100%", padding: "14px", borderRadius: "12px", fontSize: "14px", fontWeight: 600,
    cursor: "pointer", backgroundColor: "#fff", color: "#3d2b1f",
    border: "1px solid #b68d40", transition: "all 0.3s"
  },
  
  footerNote: { fontSize: "12px", color: "#b68d40", fontStyle: "italic", borderTop: "1px solid #f2e9d8", paddingTop: "20px", width: "100%" },

  // Pop-up / Modal Overlay
  modalOverlay: {
    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(4px)",
    display: "flex", justifyContent: "center", alignItems: "center",
    zIndex: 9999, padding: "20px"
  },
  modalContent: {
    position: "relative", width: "100%", maxWidth: "400px",
    backgroundColor: "transparent", // background transparan karena card sudah punya background
    borderRadius: "20px"
  },
  closeButton: {
    position: "absolute", top: "-40px", right: "0px",
    background: "#fff", border: "none", borderRadius: "50%",
    width: "35px", height: "35px", display: "flex",
    justifyContent: "center", alignItems: "center", cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  },

  // Tampilan Card Bank di dalam modal
  card: {
    background: "linear-gradient(135deg, #3d2b1f 0%, #1a120b 100%)",
    borderRadius: "20px", padding: "30px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
    color: "#f5e6cc", textAlign: "left"
  },
  
  // Tampilan Card Alamat di dalam modal
  addressCard: {
    backgroundColor: "#fff", borderRadius: "20px", padding: "30px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
    textAlign: "left", border: "1px solid #e5d5bc"
  },
  addressText: { fontSize: "14px", color: "#3d2b1f", lineHeight: "1.6", marginTop: "5px", fontWeight: 500 },

  cardHeader: { display: "flex", justifyContent: "space-between", marginBottom: "30px" },
  bankLogo: { fontSize: "22px", fontWeight: "bold"},
  chip: { width: "40px", height: "30px", background: "linear-gradient(135deg, #d6b98c 0%, #b68d40 100%)", borderRadius: "6px" },
  accountBox: { marginBottom: "25px" },
  accountLabel: { fontSize: "10px", textTransform: "uppercase", letterSpacing: "1.5px", opacity: 0.7 },
  accountNumber: { fontSize: "22px", letterSpacing: "2px", margin: "5px 0", fontFamily: "monospace" },
  accountName: { fontSize: "15px", fontWeight: 500 },
  
  copyButton: {
    width: "100%", padding: "14px", border: "none", borderRadius: "10px", color: "#fff",
    fontSize: "12px", fontWeight: 600, cursor: "pointer", display: "flex",
    alignItems: "center", justifyContent: "center", gap: "8px", transition: "all 0.3s"
  }
};