// app/page.tsx
'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col justify-between overflow-hidden">
      
      {/* Header Section */}
      <header className="w-full border-b border-slate-200 bg-white sticky top-0 z-50 shadow-sm">
        
        {/* Top Info Bar */}
        <div className="bg-[#4A0E17] text-slate-200 text-xs py-2 px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-6 font-medium tracking-wide">
              <span>FIXE: <strong className="text-white">05 35 94 19 54</strong></span>
              <span>GSM: <strong className="text-white">+212 6 61 46 77 64</strong></span>
              <span className="hidden sm:inline">FAX: <strong className="text-white">05 35 65 00 14</strong></span>
            </div>
            <a 
              href="mailto:CONTACT@ELECLEF.COM" 
              className="text-amber-400 hover:text-amber-300 font-semibold transition"
            >
              ✉ CONTACT@ELECLEF.COM
            </a>
          </div>
        </div>

        {/* Main Nav with Logo */}
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          
          <a href="/" className="flex items-center gap-3 group">
            {/* Logo Vector */}
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M 22 50 A 28 28 0 1 1 78 50" fill="none" stroke="#dc2626" strokeWidth="6" strokeLinecap="round" />
                <path d="M 22 50 A 28 28 0 0 0 78 50" fill="none" stroke="#dc2626" strokeWidth="6" strokeLinecap="round" />
                
                <rect x="14" y="44" width="8" height="12" rx="2" fill="#dc2626" />
                <line x1="8" y1="47" x2="14" y2="47" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
                <line x1="8" y1="53" x2="14" y2="53" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
                
                <path d="M 78 44 C 84 44 84 56 78 56 Z" fill="#dc2626" />
                <line x1="84" y1="47" x2="88" y2="47" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
                <line x1="84" y1="53" x2="88" y2="53" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />

                <polygon points="56,12 28,52 48,52 42,88 74,46 54,46" fill="url(#logo-grad)" />
                <defs>
                  <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#facc15" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-widest text-[#4A0E17] leading-none">
                ELECLEF
              </span>
              <span className="text-[10px] font-bold tracking-widest text-red-600 uppercase mt-1">
                Installations Électriques
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
            <a href="/" className="text-red-700 border-b-2 border-red-700 pb-1">Accueil</a>
            <a href="/services" className="text-slate-600 hover:text-red-700 transition">Nos Services</a>
            <a href="/contact" className="text-slate-600 hover:text-red-700 transition">Contact / Devis</a>
          </nav>

          <a 
            href="/admin" 
            className="text-xs font-bold text-white bg-[#4A0E17] hover:bg-red-900 px-5 py-2.5 rounded shadow-sm transition"
          >
            Espace Admin
          </a>
        </div>
      </header>

      {/* Hero Section avec Background Blanc Clean + Watermark Icon */}
      <main className="relative w-full bg-white py-20 flex-1 flex items-center">
        
        {/* Background Watermark Icon sur Fond Blanc */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none w-[600px] h-[600px] z-0">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M 20 50 A 30 30 0 1 1 80 50" fill="none" stroke="#4A0E17" strokeWidth="4" />
            <path d="M 20 50 A 30 30 0 0 0 80 50" fill="none" stroke="#4A0E17" strokeWidth="4" />
            
            <rect x="11" y="43" width="9" height="14" rx="2" fill="#4A0E17" />
            <line x1="3" y1="46" x2="11" y2="46" stroke="#4A0E17" strokeWidth="3" />
            <line x1="3" y1="54" x2="11" y2="54" stroke="#4A0E17" strokeWidth="3" />
            
            <path d="M 80 43 C 88 43 88 57 80 57 Z" fill="#4A0E17" />
            <line x1="88" y1="46" x2="94" y2="46" stroke="#4A0E17" strokeWidth="3" />
            <line x1="88" y1="54" x2="94" y2="54" stroke="#4A0E17" strokeWidth="3" />

            <polygon points="58,8 26,52 48,52 40,92 76,46 54,46" fill="#ea580c" />
          </svg>
        </div>

        {/* Content Layer */}
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-12 gap-12 items-center relative z-10 w-full">
          
          {/* Main Content */}
          <div className="md:col-span-7 space-y-6">
            <div className="inline-block bg-red-50 border border-red-200 text-red-700 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest">
              Installations Électriques MT & BT
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight uppercase tracking-tight">
              BIENVENUE CHEZ <span className="text-[#4A0E17]">ELECLEF</span>
            </h1>

            <p className="text-xl font-bold text-amber-600 leading-snug">
              VOTRE PARTENAIRE D'INSTALLATION D'ÉQUIPEMENTS ÉLECTRIQUES MT & BT
            </p>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl space-y-3 shadow-sm">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Nos Domaines d'intervention :</p>
              <ul className="space-y-2 text-slate-700 text-sm font-semibold">
                <li className="flex items-center gap-3"><span className="text-red-600 font-bold">▪</span> Bâtiments ou les lieux publics</li>
                <li className="flex items-center gap-3"><span className="text-red-600 font-bold">▪</span> Grands ensembles d'habitat</li>
                <li className="flex items-center gap-3"><span className="text-red-600 font-bold">▪</span> Électrification BT, MT</li>
                <li className="flex items-center gap-3"><span className="text-red-600 font-bold">▪</span> Usage industriel</li>
                <li className="flex items-center gap-3"><span className="text-red-600 font-bold">▪</span> Incendie et extinction automatique</li>
              </ul>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="/services"
                className="px-8 py-3 bg-[#4A0E17] hover:bg-red-900 text-white font-bold rounded-lg text-sm uppercase transition shadow-md"
              >
                PLUS DE DÉTAILS
              </a>
              <a
                href="/contact"
                className="px-8 py-3 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold rounded-lg text-sm uppercase transition"
              >
                DEMANDER UN DEVIS
              </a>
            </div>
          </div>

          {/* Right Side Card */}
          <div className="md:col-span-5 bg-gradient-to-br from-slate-900 to-[#360910] text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
            <h3 className="text-white font-black border-b border-slate-700 pb-4 mb-4 uppercase text-base tracking-wide flex items-center gap-2">
              <span className="text-amber-400">⚡</span> Expertise & Engagements
            </h3>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              ELECLEF intervient dans l'étude, la réalisation et le suivi de vos projets d'équipements électriques à travers tout le Maroc.
            </p>

            <div className="space-y-3 bg-black/40 p-4 rounded-xl border border-white/10 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 font-semibold">Secteur:</span>
                <span className="text-amber-400 font-bold">Industriel & Tertiaire</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 font-semibold">Normes:</span>
                <span className="text-blue-400 font-bold">Conformité MT/BT</span>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 text-center py-5 text-xs border-t border-slate-800 relative z-10">
        <p>&copy; 2026 ELECLEF - Installations Électriques MT & BT. Tous droits réservés.</p>
      </footer>

    </div>
  );
}