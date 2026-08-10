// app/services/page.tsx
'use client';

export default function ServicesPage() {
  const listServices = [
    {
      icon: '⚡',
      title: 'Installation Électrique',
      desc: 'Installation complète et sécurisée pour habitations, bureaux et locaux commerciaux selon les normes.',
    },
    {
      icon: '🔧',
      title: 'Dépannage & Réparation',
      desc: 'Détection rapide des pannes, court-circuit et intervention professionnelle garantie 24/7.',
    },
    {
      icon: '🔌',
      title: 'Mise aux Normes',
      desc: 'Rénovation, modernisation et mise en conformité de vos tableaux et installations électriques.',
    },
    {
      icon: '🛡️',
      title: 'Maintenance Préventive',
      desc: 'Contrôle régulier de vos équipements pour éviter les pannes et garantir votre sécurité.',
    },
    {
      icon: '💡',
      title: 'Éclairage & Domotique',
      desc: 'Solutions d électricité moderne, éclairage LED architectural et automatisation intelligente.',
    },
    {
      icon: '⚙️',
      title: 'Tableaux Électriques',
      desc: 'Montage, câblage et sécurisation des coffrets électriques industriels et domestiques.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative overflow-hidden flex flex-col justify-between">
      {/* خلفية الألوان */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/25 rounded-full blur-[140px] pointer-events-none" />

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
            <a href="/" className="hover:text-orange-400 transition">Accueil</a>
            <a href="/services" className="text-orange-400 font-bold border-b-2 border-orange-500 pb-0.5">Nos Services</a>
            <a href="/contact" className="hover:text-orange-400 transition">Contact / Devis</a>
          </div>

          <a href="/admin" className="text-xs font-semibold text-slate-200 hover:text-orange-400 border border-slate-700/80 hover:border-orange-500/50 bg-slate-800/50 px-3.5 py-2 rounded-xl transition duration-200">
            Espace Admin
          </a>
        </nav>
      </header>

      {/* قسم الخدمات (Tous les Services) */}
      <main className="pt-36 pb-20 px-6 max-w-6xl mx-auto my-auto relative z-10 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-3">Nos Services</h1>
          <p className="text-slate-400 text-sm max-w-md mx-auto mb-4">
            Toutes nos prestations électriques professionnelles réunies pour vous.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listServices.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 p-8 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl mb-6 bg-gradient-to-tr from-red-600/20 to-orange-500/20 w-16 h-16 rounded-2xl flex items-center justify-center border border-orange-500/30">
                  {item.icon}
                </div>
                <h2 className="text-xl font-bold mb-3 text-slate-100">{item.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{item.desc}</p>
              </div>

              <a
                href="/contact"
                className="inline-block text-center text-xs font-bold text-orange-400 hover:text-orange-300 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 py-3 rounded-xl transition duration-200"
              >
                Commander ce service &rarr;
              </a>
            </div>
          ))}
        </div>
      </main>

      <footer className="text-center py-8 text-xs text-slate-500 border-t border-slate-900 bg-slate-950 relative z-10">
        <p>&copy; 2026 ELECLEF. Tous droits réservés.</p>
      </footer>
    </div>
  );
}