// app/services/page.tsx
'use client';

export default function ServicesPage() {
  const services = [
    {
      title: "Bâtiments & Lieux Publics",
      desc: "Étude et réalisation d'installations électriques complètes pour les établissements recevant du public, bureaux et complexes commerciaux.",
      icon: "🏢"
    },
    {
      title: "Grands Ensembles d'Habitat",
      desc: "Équipement électrique pour les résidences, immeubles et ensembles d'habitation collectifs selon les normes de sécurité.",
      icon: "🏗️"
    },
    {
      title: "Électrification BT & MT",
      desc: "Installations Basse Tension et Moyenne Tension, postes de transformation et armoires de distribution électrique.",
      icon: "⚡"
    },
    {
      title: "Usage Industriel",
      desc: "Solutions sur-mesure pour les usines, ateliers et sites industriels : automatisme, câblage lourd et maintenance.",
      icon: "🏭"
    },
    {
      title: "Incendie & Extinction",
      desc: "Systèmes de détection d'incendie, alarme et extinction automatique pour la protection optimale de vos locaux.",
      icon: "🧯"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col justify-between relative overflow-hidden">
      
      {/* Top Header */}
      <header className="w-full border-b border-red-100 bg-white sticky top-0 z-50 shadow-sm">
        <div className="bg-[#7A1523] text-slate-100 text-xs py-2 px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-6 font-medium tracking-wide">
              <span>FIXE: <strong className="text-white">05 35 94 19 54</strong></span>
              <span>GSM: <strong className="text-white">+212 6 61 46 77 64</strong></span>
            </div>
            <a href="mailto:CONTACT@ELECLEF.COM" className="text-amber-300 hover:text-amber-200 font-semibold transition">
              ✉ CONTACT@ELECLEF.COM
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M 22 50 A 28 28 0 1 1 78 50" fill="none" stroke="#dc2626" strokeWidth="6" />
                <path d="M 22 50 A 28 28 0 0 0 78 50" fill="none" stroke="#dc2626" strokeWidth="6" />
                <polygon points="56,12 28,52 48,52 42,88 74,46 54,46" fill="url(#logo-grad-serv)" />
                <defs>
                  <linearGradient id="logo-grad-serv" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#facc15" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-widest text-[#7A1523] leading-none">ELECLEF</span>
              <span className="text-[10px] font-bold tracking-widest text-red-600 uppercase mt-1">Installations Électriques</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
            <a href="/" className="text-slate-600 hover:text-red-700 transition">Accueil</a>
            <a href="/services" className="text-red-700 border-b-2 border-red-700 pb-1">Nos Services</a>
            <a href="/contact" className="text-slate-600 hover:text-red-700 transition">Contact / Devis</a>
          </nav>

          <a href="/admin" className="text-xs font-bold text-white bg-[#7A1523] hover:bg-red-800 px-5 py-2.5 rounded shadow-sm transition">
            Espace Admin
          </a>
        </div>
      </header>

      {/* Main Services Content */}
      <main className="relative py-16 px-8 max-w-7xl mx-auto w-full flex-1 z-10">
        
        {/* Background Watermark Icon */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none w-[600px] h-[600px] z-0">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M 20 50 A 30 30 0 1 1 80 50" fill="none" stroke="#7A1523" strokeWidth="5" />
            <polygon points="58,6 24,52 48,52 40,94 78,44 54,44" fill="#ea580c" />
          </svg>
        </div>

        <div className="relative z-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-block bg-red-50 border border-red-200 text-[#7A1523] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest">
              Savoir-Faire & Expertise
            </div>
            <h1 className="text-4xl font-black text-slate-900 uppercase">NOS SERVICES & EXPERTISES</h1>
            <p className="text-slate-600 text-sm font-medium">
              ELECLEF met à votre disposition des solutions électriques haute performance adaptées aux exigences des secteurs tertiaire, industriel et résidentiel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, idx) => (
              <div key={idx} className="bg-white border border-red-100 rounded-2xl p-6 shadow-lg shadow-red-950/5 relative overflow-hidden group hover:border-red-300 transition">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#7A1523] group-hover:bg-amber-500 transition-colors"></div>
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-[#7A1523] font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-[#7A1523] text-slate-200 text-center py-5 text-xs border-t border-red-900 relative z-10">
        <p>&copy; 2026 ELECLEF - Installations Électriques MT & BT. Tous droits réservés.</p>
      </footer>

    </div>
  );
}