export default function Footer() {
  return (
    <footer className="relative py-12 text-center bg-[#1a1a1a] text-[#f5e6cc] overflow-hidden">
      
      {/* 1. BACKGROUND ELEMENTS (Sama dengan Thank You) */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/batik-soft.png')] bg-repeat opacity-20" />
      </div>
      
      {/* Efek Cahaya Lembut di Tengah */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(182,141,64,0.1)_0%,transparent_70%)]" />

      {/* 2. CONTENT AREA */}
      <div className="relative z-10 px-6">
        
        {/* Quote Jawa Elegant */}
        <p className="italic font-serif text-sm md:text-base tracking-wide opacity-80 max-w-md mx-auto leading-relaxed text-[#d6b98c]">
          “Tresna sejati iku ngugemi nganti pungkasaning agesang”
        </p>

        {/* Divider Kecil */}
        <div className="h-[1px] w-8 bg-[#b68d40]/30 mx-auto my-6" />

        {/* Copyright Section */}
        <div className="flex flex-col items-center gap-1">
          <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase opacity-40 font-light">
            By ©myshakiii
          </p>
          
          {/* Garis Vertikal Kecil Akhir */}
          <div className="h-8 w-[0.5px] bg-gradient-to-b from-[#b68d40]/50 to-transparent mt-4 opacity-30" />
        </div>
        
      </div>

      {/* Frame Tipis di pinggir (Opsional, agar senada) */}
      <div className="absolute inset-x-6 bottom-6 border-t border-[#b68d40]/5 pointer-events-none" />

    </footer>
  )
}