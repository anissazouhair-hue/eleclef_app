'use client';

export default function Navbar() {
  return (
    <header className="w-full border-b border-red-100 bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Info Bar */}
      <div className="bg-[#7A1523] text-slate-100 text-xs py-2 px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-6 font-medium tracking-wide">
            <span>FIXE: <strong className="text-white">05 35 94 19 54</strong></span>
            <span>GSM: <strong className="text-white">+212 6 61 46 77 64</strong></span>
            <span className="hidden sm:inline">FAX: <strong className="text-white">05 35 65 00 14</strong></span>
          </div>
          <a 
            href="mailto:CONTACT@ELECLEF.COM" 
            className="text-amber-300 hover:text-amber-200 font-semibold transition"
          >
            ✉ CONTACT@ELECLEF.COM
          </a>
        </div>
      </div>

      {/* Main Nav with Logo */}
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M 22 50 A 28 28 0 1 1 78 50" fill="none" stroke="#dc2626" strokeWidth="6" />
              <path d="M 22 50 A 28 28 0 0 0 78 50" fill="none" stroke="#dc2626" strokeWidth="6" />
              <polygon points="56,12 28,52 48,52 42,88 74,46 54,46" fill="url(#logo-grad-nav)" />
              <defs>
                <linearGradient id="logo-grad-nav" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#facc15" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-widest text-[#7A1523] leading-none">
              ELECLEF
            </span>
            <span className="text-[10px] font-bold tracking-widest text-red-600 uppercase mt-1">
              Installations Électriques
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
          <a href="/" className="text-slate-700 hover:text-red-700 transition">Accueil</a>
          <a href="/services" className="text-slate-700 hover:text-red-700 transition">Nos Services</a>
          <a href="/contact" className="text-slate-700 hover:text-red-700 transition">Contact / Devis</a>
        </nav>

        <a 
          href="/admin" 
          className="text-xs font-bold text-white bg-[#7A1523] hover:bg-red-800 px-5 py-2.5 rounded shadow-sm transition"
        >
          Espace Admin
        </a>
      </div>
    </header>
  );
}