// app/page.tsx
'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col justify-between">
      
      {/* Header Section */}
      <header className="w-full border-b border-slate-200">
        
        {/* Top Info Bar */}
        <div className="bg-slate-100 text-slate-600 text-xs py-2 px-8 border-b border-slate-200">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-6 font-medium">
              <span>FIXE: <strong className="text-slate-900">05 35 94 19 54</strong></span>
              <span>GSM: <strong className="text-slate-900">+212 6 61 46 77 64</strong></span>
              <span className="hidden sm:inline">FAX: <strong className="text-slate-900">05 35 65 00 14</strong></span>
            </div>
            <div>
              <a 
                href="mailto:CONTACT@ELECLEF.COM" 
                className="text-blue-700 hover:underline font-semibold"
              >
                ✉ CONTACT@ELECLEF.COM
              </a>
            </div>
          </div>
        </div>

        {/* Main Header & Real Official Logo */}
        <div className="max-w-7xl mx-auto px-8 py-3 flex flex-wrap justify-between items-center gap-4 bg-white">
          <a href="/" className="flex items-center gap-3">
            {/* اللوجو الرسمي الأصلي بالصورة من الموقع */}
            <img 
              src="https://eleclef.com/images/logo.png" 
              alt="ELECLEF Logo" 
              className="h-12 w-auto object-contain"
              onError={(e) => {
                // حل بديل إيلا كانت الصورة محمية
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://www.eleclef.com/templates/eleclef/images/logo.png';
              }}
            />
          </a>

          <a 
            href="/admin" 
            className="text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded border border-slate-300 transition"
          >
            Espace Admin
          </a>
        </div>

        {/* Navigation Bar (Classic Corporate Blue) */}
        <nav className="bg-blue-800 text-white px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-1 text-sm font-semibold uppercase">
            <a href="/" className="bg-blue-950 px-5 py-3 text-orange-400 border-b-2 border-orange-400">ACCUEIL</a>
            <a href="/services" className="hover:bg-blue-700 px-5 py-3 transition">ELECLEF</a>
            <a href="/services" className="hover:bg-blue-700 px-5 py-3 transition">NOS ACTIVITÉS</a>
            <a href="/services" className="hover:bg-blue-700 px-5 py-3 transition">NOS RÉFÉRENCES</a>
            <a href="/contact" className="hover:bg-blue-700 px-5 py-3 transition">CONTACTEZ-NOUS</a>
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-8 py-12 w-full my-auto grid md:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Main Text & Services List */}
        <div className="md:col-span-7 space-y-6">
          <div className="inline-block bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Installations Électriques MT & BT
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            BIENVENUE CHEZ ELECLEF
          </h1>

          <p className="text-lg font-bold text-blue-900 leading-snug">
            VOTRE PARTENAIRE D'INSTALLATION D'ÉQUIPEMENTS ÉLECTRIQUES MT & BT
          </p>

          <div className="border-l-4 border-orange-500 pl-4 py-1 bg-slate-50 rounded-r">
            <ul className="space-y-2 text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Bâtiments ou les lieux publics</li>
              <li className="flex items-center gap-2">✓ Grands ensembles d'habitat</li>
              <li className="flex items-center gap-2">✓ Électrification BT, MT</li>
              <li className="flex items-center gap-2">✓ Usage industriel</li>
              <li className="flex items-center gap-2">✓ Incendie et extinction automatique</li>
            </ul>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="/services"
              className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded text-sm uppercase transition shadow-sm"
            >
              PLUS DE DÉTAILS
            </a>
            <a
              href="/contact"
              className="px-6 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded text-sm uppercase transition shadow-sm"
            >
              DEMANDER UN DEVIS
            </a>
          </div>
        </div>

        {/* Right Column: Industrial Aesthetic Card */}
        <div className="md:col-span-5 bg-slate-100 border border-slate-300 rounded-lg p-6 shadow-sm">
          <h3 className="text-slate-900 font-bold border-b border-slate-300 pb-3 mb-4 uppercase text-sm tracking-wide">
            Expertise & Engagements
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            ELECLEF intervient dans l'étude, la réalisation et le suivi de vos projets d'équipements électriques à travers tout le Maroc.
          </p>
          <div className="bg-white p-4 rounded border border-slate-200 text-xs text-slate-700 space-y-2">
            <div className="flex justify-between font-semibold">
              <span>Secteur:</span>
              <span className="text-slate-900">Industriel & Tertiaire</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Normes:</span>
              <span className="text-slate-900">Conformité MT/BT</span>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 text-center py-4 text-xs border-t border-slate-800">
        <p>&copy; 2026 ELECLEF - Installations Électriques MT & BT. Tous droits réservés.</p>
      </footer>

    </div>
  );
}