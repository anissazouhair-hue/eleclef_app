// app/page.tsx
'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-slate-100 font-sans flex flex-col justify-between">
      
      {/* Header Section */}
      <header className="w-full border-b border-red-950/80 bg-neutral-900/90 backdrop-blur-md sticky top-0 z-50">
        
        {/* Top Info Bar */}
        <div className="bg-neutral-950 text-slate-300 text-xs py-2 px-8 border-b border-red-950/50">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-6 font-medium tracking-wide">
              <span>FIXE: <strong className="text-white">05 35 94 19 54</strong></span>
              <span>GSM: <strong className="text-white">+212 6 61 46 77 64</strong></span>
              <span className="hidden sm:inline">FAX: <strong className="text-white">05 35 65 00 14</strong></span>
            </div>
            <a 
              href="mailto:CONTACT@ELECLEF.COM" 
              className="text-orange-400 hover:text-orange-300 font-semibold transition"
            >
              ✉ CONTACT@ELECLEF.COM
            </a>
          </div>
        </div>

        {/* Main Nav with Exact Authentic Logo Structure */}
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          
          {/* Logo Identique au Site Officiel */}
          <a href="/" className="flex items-center gap-2 group">
            {/* Red Flame Icon matching original style */}
            <div className="relative flex items-center justify-center">
              <span className="text-3xl text-red-600 font-black tracking-tighter transform -rotate-12 group-hover:scale-110 transition duration-200">
                ⚡
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl font-black tracking-widest text-white leading-none">
                ELECLEF
              </span>

              {/* Real Wires Concept (Blue & Orange Cables) */}
              <div className="flex flex-col gap-1 pl-1 border-l-2 border-red-600/40">
                <div className="h-1.5 w-10 bg-blue-500 rounded-r-full shadow-sm"></div>
                <div className="h-1.5 w-12 bg-amber-500 rounded-r-full shadow-sm"></div>
              </div>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
            <a href="/" className="text-orange-500 border-b-2 border-orange-500 pb-1">Accueil</a>
            <a href="/services" className="text-slate-300 hover:text-orange-400 transition">Nos Services</a>
            <a href="/contact" className="text-slate-300 hover:text-orange-400 transition">Contact / Devis</a>
          </nav>

          <a 
            href="/admin" 
            className="text-xs font-bold text-white bg-red-700 hover:bg-red-600 px-4 py-2.5 rounded transition shadow-md"
          >
            Espace Admin
          </a>
        </div>
      </header>

      {/* Hero Section avec Background Rouge Dark / Maroon (Dark Crimson) */}
      <main className="w-full bg-gradient-to-b from-red-950 via-neutral-950 to-neutral-950 py-16">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-12 gap-12 items-center">
          
          {/* Main Content */}
          <div className="md:col-span-7 space-y-6">
            <div className="inline-block bg-red-900/40 border border-red-700/50 text-orange-400 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest">
              Installations Électriques MT & BT
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tight">
              BIENVENUE CHEZ <span className="text-orange-500">ELECLEF</span>
            </h1>

            <p className="text-xl font-bold text-orange-400/90 leading-snug">
              VOTRE PARTENAIRE D'INSTALLATION D'ÉQUIPEMENTS ÉLECTRIQUES MT & BT
            </p>

            <div className="bg-neutral-900/90 border border-red-900/40 p-6 rounded-xl space-y-3 shadow-2xl">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Nos Domaines d'intervention :</p>
              <ul className="space-y-2 text-slate-200 text-sm font-medium">
                <li className="flex items-center gap-3"><span className="text-orange-500 font-bold">▪</span> Bâtiments ou les lieux publics</li>
                <li className="flex items-center gap-3"><span className="text-orange-500 font-bold">▪</span> Grands ensembles d'habitat</li>
                <li className="flex items-center gap-3"><span className="text-orange-500 font-bold">▪</span> Électrification BT, MT</li>
                <li className="flex items-center gap-3"><span className="text-orange-500 font-bold">▪</span> Usage industriel</li>
                <li className="flex items-center gap-3"><span className="text-orange-500 font-bold">▪</span> Incendie et extinction automatique</li>
              </ul>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="/services"
                className="px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg text-sm uppercase transition shadow-lg shadow-orange-600/20"
              >
                PLUS DE DÉTAILS
              </a>
              <a
                href="/contact"
                className="px-8 py-3 bg-red-950/80 hover:bg-red-900 border border-red-800 text-white font-bold rounded-lg text-sm uppercase transition"
              >
                DEMANDER UN DEVIS
              </a>
            </div>
          </div>

          {/* Right Side Card */}
          <div className="md:col-span-5 bg-gradient-to-br from-red-950/60 to-neutral-900 border border-red-900/50 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            <h3 className="text-white font-black border-b border-red-900/60 pb-4 mb-4 uppercase text-base tracking-wide flex items-center gap-2">
              <span className="text-orange-500">⚡</span> Expertise & Engagements
            </h3>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              ELECLEF intervient dans l'étude, la réalisation et le suivi de vos projets d'équipements électriques à travers tout le Maroc.
            </p>

            <div className="space-y-3 bg-neutral-950/80 p-4 rounded-xl border border-red-900/30 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 font-semibold">Secteur:</span>
                <span className="text-orange-400 font-bold">Industriel & Tertiaire</span>
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
      <footer className="bg-neutral-950 text-slate-500 text-center py-5 text-xs border-t border-neutral-900">
        <p>&copy; 2026 ELECLEF - Installations Électriques MT & BT. Tous droits réservés.</p>
      </footer>

    </div>
  );
}