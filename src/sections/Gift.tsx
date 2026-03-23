'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Gift, MapPin } from "lucide-react";

const WeddingGift: React.FC = () => {
  const [copiedRek, setCopiedRek] = useState(false);
  const [copiedAlamat, setCopiedAlamat] = useState(false);

  const noRekening = "1234567890"; // Ganti No BNI Anda
  const alamatKirim = "Jl. Pendidikan II, Pengasinan, Kec. Gn. Sindur, Kabupaten Bogor, Jawa Barat 16340";

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
        
        {/* JUDUL */}
        <motion.div {...animProps} style={styles.header}>
          <Gift size={32} color="#b68d40" style={{ marginBottom: '15px' }} />
          <h2 style={styles.title}>Wedding Gift</h2>
          <p style={styles.subtitle}>
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika Anda ingin memberikan tanda kasih, dapat melalui:
          </p>
        </motion.div>

        {/* OPSI 1: TRANSFER BANK */}
        <motion.div {...animProps} transition={{ delay: 0.2 }} style={styles.card}>
          <div style={styles.cardHeader}>
            <div style={styles.bankLogo}>BNI</div>
            <div style={styles.chip} />
          </div>
          <div style={styles.accountBox}>
            <p style={styles.accountLabel}>Nomor Rekening</p>
            <h3 style={styles.accountNumber}>{noRekening}</h3>
            <p style={styles.accountName}>A.N. MUHAMMAD RIYADH</p>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCopy(noRekening, 'rek')}
            style={{ ...styles.copyButton, backgroundColor: copiedRek ? "#2ecc71" : "#b68d40" }}
          >
            {copiedRek ? <><Check size={14} /> Tersalin</> : <><Copy size={14} /> Salin No. Rekening</>}
          </motion.button>
        </motion.div>

        {/* OPSI 2: KIRIM KADO */}
        <motion.div {...animProps} transition={{ delay: 0.4 }} style={styles.addressCard}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '15px' }}>
            <MapPin size={20} color="#b68d40" />
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
        </motion.div>

        <motion.p {...animProps} transition={{ delay: 0.6 }} style={styles.footerNote}>
          Terima kasih atas perhatian dan doa restu Bapak/Ibu/Saudara/i.
        </motion.p>
      </div>
    </section>
  );
};

export default WeddingGift;

/* ================== STYLES ================== */

const styles: { [key: string]: React.CSSProperties } = {
  section: { padding: "80px 20px", backgroundColor: "#fdfbf7", textAlign: "center" },
  container: { maxWidth: "450px", margin: "0 auto" },
  header: { marginBottom: "40px", display: "flex", flexDirection: "column", alignItems: "center" },
  title: { fontSize: "32px", fontFamily: "var(--font-arizona)", color: "#3d2b1f", marginBottom: "15px", fontStyle: "italic" },
  subtitle: { fontSize: "14px", color: "#7a5c3c", lineHeight: "1.6", fontFamily: "Poppins, sans-serif" },
  
  // Card Bank
  card: {
    background: "linear-gradient(135deg, #3d2b1f 0%, #1a120b 100%)",
    borderRadius: "20px",
    padding: "30px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
    color: "#f5e6cc",
    textAlign: "left",
    marginBottom: "20px"
  },
  
  // Card Alamat
  addressCard: {
    backgroundColor: "#fff",
    border: "1px border-[#e5d5bc]",
    borderRadius: "20px",
    padding: "25px",
    boxShadow: "0 10px 25px rgba(182, 141, 64, 0.08)",
    textAlign: "left"
  },
  addressText: { fontSize: "13px", color: "#3d2b1f", lineHeight: "1.5", marginTop: "5px", fontWeight: 500 },

  cardHeader: { display: "flex", justifyContent: "space-between", marginBottom: "30px" },
  bankLogo: { fontSize: "22px", fontWeight: "bold"},
  chip: { width: "40px", height: "30px", background: "linear-gradient(135deg, #d6b98c 0%, #b68d40 100%)", borderRadius: "6px" },
  accountBox: { marginBottom: "25px" },
  accountLabel: { fontSize: "10px", textTransform: "uppercase", letterSpacing: "1.5px", opacity: 0.7 },
  accountNumber: { fontSize: "22px", letterSpacing: "2px", margin: "5px 0", fontFamily: "monospace" },
  accountName: { fontSize: "15px", fontWeight: 500 },
  
  copyButton: {
    width: "100%", padding: "12px", border: "none", borderRadius: "10px", color: "#fff",
    fontSize: "11px", fontWeight: 600, cursor: "pointer", display: "flex",
    alignItems: "center", justifyContent: "center", gap: "8px", transition: "all 0.3s"
  },
  footerNote: { marginTop: "30px", fontSize: "12px", color: "#b68d40", fontStyle: "italic" }
};