// app/page.tsx
'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between">
      
      {/* Top Header & Navigation */}
      <header className="w-full border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-50">
        
        {/* Top Info Strip */}
        <div className="bg-slate-950 text-slate-300 text-xs py-2 px-8 border-b border-slate-800/60">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-6 font-medium tracking-wide">
              <span>FIXE: <strong className="text-white">05 35 94 19 54</strong></span>
              <span>GSM: <strong className="text-white">+212 6 61 46 77 64</strong></span>
              <span className="hidden sm:inline">FAX: <strong className="text-white">05 35 65 00 14</strong></span>
            </div>
            <a 
              href="mailto:CONTACT@ELECLEF.COM" 
              className="text-blue-400 hover:text-blue-300 font-semibold transition"
            >
              ✉ CONTACT@ELECLEF.COM
            </a>
          </div>
        </div>

        {/* Main Navigation & Modern Refined Logo */}
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          
          {/* Logo with Car-Brand Style Facelift (Exact original elements, modern finish) */}
          <a href="/" className="flex items-center gap-3 group">
            {/* Red Flame/Spark Bolt */}
            <div className="text-3xl text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)] transform group-hover:scale-105 transition duration-200">
              ⚡
            </div>

            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-widest text-white leading-none">
                ELECLEF
              </span>
              {/* Electric Cables Aesthetic (Streamlined & Clean) */}
              <div className="flex items-center gap-1 mt-1.5">
                <div className="h-1 w-7 bg-blue-500 rounded-full shadow-sm"></div>
                <div className="h-1 w-7 bg-amber-500 rounded-full shadow-sm"></div>
              </div>
            </div>
          </a>

          {/* Navigation Links (3 Essential Links) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
            <a href="/" className="text-orange-500 border-b-2 border-orange-500 pb-1">Accueil</a>
            <a href="/services" className="text-slate-300 hover:text-orange-400 transition">Nos Services</a>
            <a href="/contact" className="text-slate-300 hover:text-orange-400 transition">Contact / Devis</a>
          </nav>

          <a 
            href="/admin" 
            className="text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2.5 rounded-lg transition shadow-md"
          >
            Espace Admin
          </a>
        </div>
      </header>

      {/* Hero Section (Dark Modern Industrial UI) */}
      <main className="max-w-7xl mx-auto px-8 py-16 w-full my-auto grid md:grid-cols-12 gap-12 items-center">
        
        {/* Main Content */}
        <div className="md:col-span-7 space-y-6">
          <div className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest">
            Installations Électriques MT & BT
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tight">
            BIENVENUE CHEZ <span className="text-orange-500">ELECLEF</span>
          </h1>

          <p className="text-xl font-bold text-blue-400 leading-snug">
            VOTRE PARTENAIRE D'INSTALLATION D'ÉQUIPEMENTS ÉLECTRIQUES MT & BT
          </p>

          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl space-y-3 shadow-xl">
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
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold rounded-lg text-sm uppercase transition"
            >
              DEMANDER UN DEVIS
            </a>
          </div>
        </div>

        {/* Side Card */}
        <div className="md:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <h3 className="text-white font-black border-b border-slate-800 pb-4 mb-4 uppercase text-base tracking-wide flex items-center gap-2">
            <span className="text-blue-500">⚡</span> Expertise & Engagements
          </h3>
          
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            ELECLEF intervient dans l'étude, la réalisation et le suivi de vos projets d'équipements électriques à travers tout le Maroc.
          </p>

          <div className="space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 text-xs">
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

      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 text-center py-5 text-xs border-t border-slate-900">
        <p>&copy; 2026 ELECLEF - Installations Électriques MT & BT. Tous droits réservés.</p>
      </footer>

    </div>
  );
}