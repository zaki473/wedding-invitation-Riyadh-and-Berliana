'use client'

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Gift, MapPin, X, CreditCard, Package } from "lucide-react";

const WeddingGift: React.FC = () => {
  // State untuk Copy (Dibuat spesifik agar tidak bentrok)
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [activeModal, setActiveModal] = useState<'rek' | 'alamat' | null>(null);

  // Data Rekening & Alamat
  const data = {
    cpp: {
      bank: "BNI",
      no: "0417006385",
      nama: "Muhammad Riyadh"
    },
    cpw: {
      bank: "BNI",
      no: "2044456457",
      nama: "Berliana Radhini Isnindiafi"
    },
    alamat: "Jl. Pendidikan II, Pengasinan, Kec. Gn. Sindur, Kabupaten Bogor, Jawa Barat 16340"
  };

  useEffect(() => {
    document.body.style.overflow = activeModal ? "hidden" : "auto";
  }, [activeModal]);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedType(id);
      setTimeout(() => setCopiedType(null), 2000);
    });
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
        <motion.div {...animProps} style={styles.mainGrid}>
          <Gift size={36} color="#b68d40" style={{ marginBottom: '15px' }} />
          <h2 style={styles.title}>Wedding Gift</h2>
          <p style={styles.subtitle}>  
            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah 
            ungkapan tanda kasih Anda, Anda dapat memberi hadiah melalui:
          </p>

          <div style={styles.buttonContainer}>
            <motion.button 
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}
              onClick={() => setActiveModal('rek')}
              style={styles.triggerButton}
            >
              <CreditCard size={18} /> Transfer Bank
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}
              onClick={() => setActiveModal('alamat')}
              style={{...styles.triggerButton, backgroundColor: "#3d2b1f", color: "#fff", border: "none"}}
            >
              <Package size={18} /> Kirim Kado
            </motion.button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeModal && (
          <div style={styles.modalOverlay} onClick={() => setActiveModal(null)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              style={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setActiveModal(null)} style={styles.closeButton}>
                <X size={20} color="#7a5c3c" />
              </button>

              {/* MODAL TRANSFER BANK (2 Kartu) */}
              {activeModal === 'rek' && (
                <div style={styles.scrollArea}>
                  <p style={{color: '#fff', marginBottom: '15px', fontSize: '14px'}}>Pilih Rekening Tujuan:</p>
                  
                  {/* KARTU CPP */}
                  <div style={styles.card}>
                    <div style={styles.cardHeader}>
                      <div style={styles.bankLogo}>{data.cpp.bank}</div>
                      <div style={styles.chip} />
                    </div>
                    <div style={styles.accountBox}>
                      <p style={styles.accountLabel}>Rekening Pengantin Pria</p>
                      <h3 style={styles.accountNumber}>{data.cpp.no}</h3>
                      <p style={styles.accountName}>{data.cpp.nama}</p>
                    </div>
                    <button
                      onClick={() => handleCopy(data.cpp.no, 'cpp')}
                      style={{ ...styles.copyButton, backgroundColor: copiedType === 'cpp' ? "#2ecc71" : "#b68d40" }}
                    >
                      {copiedType === 'cpp' ? <><Check size={14} /> Tersalin</> : <><Copy size={14} /> Salin No. Rekening</>}
                    </button>
                  </div>

                  <div style={{height: '20px'}} />

                  {/* KARTU CPW */}
                  <div style={{...styles.card, background: "linear-gradient(135deg, #4a3728 0%, #2b1e15 100%)"}}>
                    <div style={styles.cardHeader}>
                      <div style={styles.bankLogo}>{data.cpw.bank}</div>
                      <div style={styles.chip} />
                    </div>
                    <div style={styles.accountBox}>
                      <p style={styles.accountLabel}>Rekening Pengantin Wanita</p>
                      <h3 style={styles.accountNumber}>{data.cpw.no}</h3>
                      <p style={styles.accountName}>{data.cpw.nama}</p>
                    </div>
                    <button
                      onClick={() => handleCopy(data.cpw.no, 'cpw')}
                      style={{ ...styles.copyButton, backgroundColor: copiedType === 'cpw' ? "#2ecc71" : "#b68d40" }}
                    >
                      {copiedType === 'cpw' ? <><Check size={14} /> Tersalin</> : <><Copy size={14} /> Salin No. Rekening</>}
                    </button>
                  </div>
                </div>
              )}

              {/* MODAL ALAMAT */}
              {activeModal === 'alamat' && (
                <div style={styles.addressCard}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '15px' }}>
                    <MapPin size={24} color="#b68d40" style={{flexShrink: 0}} />
                    <div style={{ textAlign: 'left' }}>
                      <p style={{ ...styles.accountLabel, color: '#7a5c3c' }}>Alamat Pengiriman Kado</p>
                      <p style={styles.addressText}>{data.alamat}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(data.alamat, 'alamat')}
                    style={{ ...styles.copyButton, backgroundColor: copiedType === 'alamat' ? "#2ecc71" : "#3d2b1f" }}
                  >
                    {copiedType === 'alamat' ? <><Check size={14} /> Tersalin</> : <><Copy size={14} /> Salin Alamat</>}
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

/* ================== STYLES (Tambahan scrollArea) ================== */

const styles: { [key: string]: React.CSSProperties } = {
  section: { padding: "80px 20px", backgroundColor: "#fdfbf7", textAlign: "center" },
  container: { maxWidth: "500px", margin: "0 auto" },
  mainGrid: { backgroundColor: "#fff", borderRadius: "24px", padding: "40px 25px", boxShadow: "0 10px 40px rgba(182, 141, 64, 0.08)", border: "1px solid #f2e9d8", display: "flex", flexDirection: "column", alignItems: "center" },
  title: { fontSize: "32px", color: "#3d2b1f", marginBottom: "15px", fontStyle: "italic" },
  subtitle: { fontSize: "14px", color: "#7a5c3c", lineHeight: "1.6", marginBottom: "30px" },
  buttonContainer: { display: "flex", flexDirection: "column", gap: "12px", width: "100%" },
  triggerButton: { display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", width: "100%", padding: "14px", borderRadius: "12px", fontSize: "14px", fontWeight: 600, cursor: "pointer", backgroundColor: "#fff", color: "#3d2b1f", border: "1px solid #b68d40" },
  modalOverlay: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.7)", backdropFilter: "blur(4px)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999, padding: "20px" },
  modalContent: { position: "relative", width: "100%", maxWidth: "450px" },
  scrollArea: { maxHeight: "80vh", overflowY: "auto", paddingRight: "5px" }, // Agar jika layar HP kecil bisa di scroll
  closeButton: { position: "absolute", top: "-45px", right: "0px", background: "#fff", border: "none", borderRadius: "50%", width: "35px", height: "35px", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" },
  card: { background: "linear-gradient(135deg, #3d2b1f 0%, #1a120b 100%)", borderRadius: "20px", padding: "25px", color: "#f5e6cc", textAlign: "left" },
  addressCard: { backgroundColor: "#fff", borderRadius: "20px", padding: "30px", textAlign: "left", border: "1px solid #e5d5bc" },
  addressText: { fontSize: "14px", color: "#3d2b1f", lineHeight: "1.6", marginTop: "5px" },
  cardHeader: { display: "flex", justifyContent: "space-between", marginBottom: "20px" },
  bankLogo: { fontSize: "20px", fontWeight: "bold", letterSpacing: "1px"},
  chip: { width: "35px", height: "25px", background: "linear-gradient(135deg, #d6b98c 0%, #b68d40 100%)", borderRadius: "4px" },
  accountBox: { marginBottom: "20px" },
  accountLabel: { fontSize: "10px", textTransform: "uppercase", letterSpacing: "1px", opacity: 0.8, marginBottom: "5px", display: "block" },
  accountNumber: { fontSize: "20px", letterSpacing: "2px", margin: "5px 0", fontFamily: "monospace" },
  accountName: { fontSize: "14px", fontWeight: 500 },
  copyButton: { width: "100%", padding: "12px", border: "none", borderRadius: "8px", color: "#fff", fontSize: "12px", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }
};

export default WeddingGift;