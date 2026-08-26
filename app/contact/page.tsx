// app/contact/page.tsx
'use client';

export default function ContactPage() {
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
                <polygon points="56,12 28,52 48,52 42,88 74,46 54,46" fill="url(#logo-grad-cnt)" />
                <defs>
                  <linearGradient id="logo-grad-cnt" x1="0%" y1="0%" x2="100%" y2="100%">
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
            <a href="/services" className="text-slate-600 hover:text-red-700 transition">Nos Services</a>
            <a href="/contact" className="text-red-700 border-b-2 border-red-700 pb-1">Contact / Devis</a>
          </nav>

          <a href="/admin" className="text-xs font-bold text-white bg-[#7A1523] hover:bg-red-800 px-5 py-2.5 rounded shadow-sm transition">
            Espace Admin
          </a>
        </div>
      </header>

      {/* Contact Content */}
      <main className="relative py-16 px-8 max-w-7xl mx-auto w-full flex-1 z-10">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* Contact Form */}
          <div className="md:col-span-7 bg-white border border-red-100 p-8 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#7A1523]"></div>
            
            <h2 className="text-2xl font-black text-[#7A1523] uppercase mb-6">DEMANDER UN DEVIS / CONTACT</h2>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Nom complet / Société</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#7A1523]" placeholder="Votre nom ou entreprise" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Téléphone</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#7A1523]" placeholder="+212 6..." />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#7A1523]" placeholder="exemple@domain.com" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Message / Détails du projet</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#7A1523]" placeholder="Décrivez votre projet d'installation électrique..."></textarea>
              </div>

              <button type="submit" className="w-full py-3 bg-[#7A1523] hover:bg-red-800 text-white font-bold rounded-lg text-sm uppercase transition shadow-md">
                ENVOYER LA DEMANDE
              </button>
            </form>
          </div>

          {/* Info Card */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-[#7A1523] uppercase border-b border-slate-200 pb-3">Nos Coordonnées</h3>
              
              <div className="space-y-3 text-sm font-semibold text-slate-700">
                <p className="flex items-center gap-3">📍 <span>Fès, Maroc</span></p>
                <p className="flex items-center gap-3">📞 <span>FIXE: 05 35 94 19 54</span></p>
                <p className="flex items-center gap-3">📱 <span>GSM: +212 6 61 46 77 64</span></p>
                <p className="flex items-center gap-3">📠 <span>FAX: 05 35 65 00 14</span></p>
                <p className="flex items-center gap-3">✉ <span>CONTACT@ELECLEF.COM</span></p>
              </div>
            </div>
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