// app/page.tsx
'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between">
      
      {/* Header Section */}
      <header className="fixed top-0 left-0 w-full z-50 shadow-lg">
        
        {/* Top Info Bar (Dark Header with Cables aesthetic) */}
        <div className="bg-zinc-950 text-slate-200 text-xs py-3 px-6 border-b border-zinc-800">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
            
            {/* Branding / Logo with Red Bolt & Cables */}
            <a href="/" className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-red-600 text-2xl font-black">⚡</span>
                <span className="text-2xl font-black tracking-wider text-white">ELECLEF</span>
              </div>
              <div className="hidden md:flex items-center ml-4 gap-1">
                <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
                <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
              </div>
            </a>

            {/* Contact details copied directly from origin */}
            <div className="flex flex-wrap items-center gap-6 font-semibold text-zinc-300">
              <span>FIXE : <strong className="text-white">05 35 94 19 54</strong></span>
              <span>GSM : <strong className="text-white">+212 6 61 46 77 64</strong></span>
              <span className="hidden sm:inline">FAX : <strong className="text-white">05 35 65 00 14</strong></span>
              <a 
                href="mailto:CONTACT@ELECLEF.COM" 
                className="bg-blue-700 hover:bg-blue-600 px-3 py-1 rounded text-white font-medium border border-blue-500 transition shadow-sm"
              >
                ✉ CONTACT@ELECLEF.COM
              </a>
            </div>
          </div>
        </div>

        {/* Royal Blue Navigation Bar */}
        <nav className="bg-blue-700 border-b border-blue-800 px-6 py-2.5">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6 text-sm font-bold text-white uppercase tracking-wide">
              <a href="/" className="bg-blue-900/60 px-3 py-1.5 rounded border-b-2 border-orange-500">ACCUEIL</a>
              <a href="/services" className="hover:text-orange-300 transition">ELECLEF</a>
              <a href="/services" className="hover:text-orange-300 transition">NOS ACTIVITÉS</a>
              <a href="/services" className="hover:text-orange-300 transition">NOS RÉFÉRENCES</a>
              <a href="/contact" className="hover:text-orange-300 transition">CONTACTEZ-NOUS</a>
            </div>

            <a href="/admin" className="text-xs font-bold text-white bg-orange-600 hover:bg-orange-500 px-3.5 py-2 rounded transition shadow">
              ESPACE ADMIN
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section matching the original banner structure */}
      <main className="pt-36 pb-16 px-6 max-w-7xl mx-auto w-full my-auto">
        <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 rounded-2xl p-8 md:p-14 shadow-2xl relative overflow-hidden border border-orange-500/30">
          
          <div className="max-w-3xl relative z-10">
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase tracking-tight mb-4 drop-shadow">
              BIENVENUE CHEZ ELECLEF
            </h1>

            <h2 className="text-xl md:text-3xl font-extrabold text-orange-100 uppercase leading-snug mb-6">
              VOTRE PARTENAIRE D'INSTALLATION D'ÉQUIPEMENTS ÉLECTRIQUES MT & BT
            </h2>

            {/* Original Bullets List */}
            <ul className="space-y-2.5 text-slate-100 text-sm md:text-base font-medium mb-8 bg-black/20 p-5 rounded-xl backdrop-blur-sm border border-white/10">
              <li className="flex items-center gap-2">
                <span className="text-orange-300">▪</span> Bâtiments ou les lieux publics
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-300">▪</span> Grands ensembles d'habitat
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-300">▪</span> Électrification BT, MT
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-300">▪</span> Usage industriel
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-300">▪</span> Incendie et extinction automatique
              </li>
            </ul>

            <div className="flex gap-4">
              <a
                href="/services"
                className="px-6 py-3 rounded-lg font-bold text-white bg-blue-700 hover:bg-blue-600 transition shadow-lg uppercase text-sm"
              >
                PLUS DE DÉTAILS
              </a>
              <a
                href="/contact"
                className="px-6 py-3 rounded-lg font-bold text-white bg-zinc-900 hover:bg-zinc-800 transition shadow-lg uppercase text-sm border border-zinc-700"
              >
                DEMANDER UN DEVIS
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-5 text-xs text-zinc-400 border-t border-zinc-800 bg-zinc-950">
        <p>&copy; 2026 ELECLEF - Installations Électriques MT & BT. Tous droits réservés.</p>
      </footer>

    </div>
  );
}