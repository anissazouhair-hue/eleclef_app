// app/page.tsx
'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative overflow-hidden flex flex-col justify-between">
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-500/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800/80 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 via-orange-500 to-blue-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <span className="text-white text-xl font-black">⚡</span>
            </div>
            <div className="text-2xl font-black tracking-wider">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">ELE</span>
              <span className="text-blue-500">CLEF</span>
            </div>
          </a>

          <div className="flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="/" className="text-orange-400 font-bold border-b-2 border-orange-500 pb-0.5">Accueil</a>
            <a href="/services" className="hover:text-orange-400 transition">Nos Services</a>
            <a href="/contact" className="hover:text-orange-400 transition">Contact / Devis</a>
          </div>

          <a href="/admin" className="text-xs font-semibold text-slate-200 hover:text-orange-400 border border-slate-700/80 hover:border-orange-500/50 bg-slate-800/50 px-3.5 py-2 rounded-xl transition duration-200">
            Espace Admin
          </a>
        </nav>
      </header>

      {/* Contenu Accueil */}
      <main className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center relative z-10 my-auto">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          Solutions Électriques Professionnelles
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-50 leading-tight mb-8">
          Services Électriques <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-blue-500">
            Professionnels & Sécurisés
          </span>
        </h1>

        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          Bienvenue chez ELECLEF. Nous vous accompagnons avec excellence dans toutes vos installations, maintenances et innovations électriques au Maroc.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/services"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 hover:brightness-110 shadow-lg shadow-orange-500/25 transition duration-200"
          >
            Découvrir Nos Services
          </a>
          <a
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition duration-200"
          >
            Demander un Devis
          </a>
        </div>
      </main>

      <footer className="text-center py-8 text-xs text-slate-500 border-t border-slate-900 bg-slate-950 relative z-10">
        <p>&copy; 2026 ELECLEF. Tous droits réservés.</p>
      </footer>
    </div>
  );
}