// app/admin/page.tsx
'use client';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      
      {/* Top Header */}
      <header className="w-full border-b border-red-100 bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-widest text-[#7A1523]">ELECLEF ADMIN</span>
          </a>
          <a href="/" className="text-xs font-bold text-slate-600 hover:text-red-700 transition uppercase">
            ← Retour au site
          </a>
        </div>
      </header>

      {/* Admin Login Card */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white border border-red-100 p-8 rounded-2xl shadow-xl max-w-md w-full relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#7A1523]"></div>

          <div className="text-center mb-6">
            <h1 className="text-2xl font-black text-[#7A1523] uppercase">Connexion Admin</h1>
            <p className="text-xs font-semibold text-slate-500 mt-1">Espace réservé à la gestion interne ELECLEF</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Identifiant / Email</label>
              <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#7A1523]" placeholder="admin@eleclef.com" />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mot de passe</label>
              <input type="password" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#7A1523]" placeholder="••••••••" />
            </div>

            <button type="submit" className="w-full py-3 bg-[#7A1523] hover:bg-red-800 text-white font-bold rounded-lg text-sm uppercase transition shadow-md">
              SE CONNECTER
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#7A1523] text-slate-200 text-center py-4 text-xs">
        <p>&copy; 2026 ELECLEF Administration.</p>
      </footer>

    </div>
  );
}