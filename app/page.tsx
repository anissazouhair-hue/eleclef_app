// app/page.tsx
'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans flex flex-col justify-between">
      
      {/* Header & Top Bar */}
      <header className="fixed top-0 left-0 w-full z-50 shadow-md">
        
        {/* Top Info Bar */}
        <div className="bg-blue-900/90 backdrop-blur-sm text-slate-100 text-xs py-2.5 px-8 border-b border-blue-800">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-6 font-medium">
              <span><strong className="text-blue-300">FIXE:</strong> 05 35 94 19 54</span>
              <span><strong className="text-blue-300">GSM:</strong> +212 6 61 46 77 64</span>
              <span className="hidden sm:inline"><strong className="text-blue-300">FAX:</strong> 05 35 65 00 14</span>
            </div>
            <div>
              <a 
                href="mailto:CONTACT@ELECLEF.COM" 
                className="bg-blue-800 hover:bg-blue-700 px-3.5 py-1 rounded-md text-white font-semibold transition border border-blue-700 shadow-sm"
              >
                CONTACT@ELECLEF.COM
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="bg-slate-950/95 backdrop-blur-md border-b border-slate-800 px-8 py-3.5">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            
            {/* Logo Section */}
            <a href="/" className="flex items-center gap-3">
              {/* إيلا عندك اللوغو كصورة حطي <img src="/logo.png" alt="ELECLEF" className="h-9 w-auto" /> */}
              <div className="w-9 h-9 rounded-md bg-orange-600 flex items-center justify-center font-bold text-white text-lg shadow-sm">
                ⚡
              </div>
              <div className="text-2xl font-black tracking-wider text-white">
                <span className="text-orange-500">ELE</span>
                <span className="text-blue-500">CLEF</span>
              </div>
            </a>

            {/* Navigation Links */}
            <div className="flex items-center gap-8 text-sm font-semibold text-slate-300">
              <a href="/" className="text-orange-500 border-b-2 border-orange-500 pb-1">Accueil</a>
              <a href="/services" className="hover:text-orange-400 transition">Nos Services</a>
              <a href="/contact" className="hover:text-orange-400 transition">Contact / Devis</a>
            </div>

            {/* Admin Button */}
            <a href="/admin" className="text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-lg transition duration-200 shadow-sm">
              Espace Admin
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-48 pb-20 px-6 max-w-5xl mx-auto text-center relative z-10 my-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          Votre Partenaire d'Installation <br />
          <span className="text-orange-500">d'Équipements Électriques</span> <span className="text-blue-400">MT & BT</span>
        </h1>

        <p className="text-slate-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-10">
          Bienvenue chez ELECLEF. Nous vous accompagnons avec excellence dans l'étude, l'installation et la maintenance de vos équipements électriques industriels et tertiaires au Maroc.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/services"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-bold text-white bg-orange-600 hover:bg-orange-500 shadow-md transition duration-200"
          >
            Découvrir Nos Services
          </a>
          <a
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition duration-200"
          >
            Demander un Devis
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-xs text-slate-400 border-t border-slate-800 bg-slate-950 relative z-10">
        <p>&copy; 2026 ELECLEF - Installations Électriques MT & BT. Tous droits réservés.</p>
      </footer>
    </div>
  );
}