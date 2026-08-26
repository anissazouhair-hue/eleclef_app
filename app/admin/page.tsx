// app/admin/page.tsx
'use client';

import { useState } from 'react';

export default function AdminPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const [messages] = useState([
    { id: 1, name: 'Sarl Atlas Elec', email: 'contact@atlaselec.ma', phone: '0661223344', subject: 'Devis Électrification Usine', date: '2026-08-25', status: 'Nouveau' },
    { id: 2, name: 'Karim Bennani', email: 'k.bennani@gmail.com', phone: '0655443322', subject: 'Installation Poste MT/BT', date: '2026-08-24', status: 'En traitement' },
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@eleclef.com' && password === 'eleclef2026') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Email ou mot de passe incorrect !');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      
      {/* Top Header */}
      <header className="w-full border-b border-red-100 bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-widest text-[#7A1523]">ELECLEF ADMIN</span>
          </a>
          <div className="flex items-center gap-4">
            {isLoggedIn && (
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="text-xs font-bold text-red-600 hover:text-red-800 transition uppercase border border-red-200 px-3 py-1 rounded-md"
              >
                Déconnexion
              </button>
            )}
            <a href="/" className="text-xs font-bold text-slate-600 hover:text-red-700 transition uppercase">
              ← Retour au site
            </a>
          </div>
        </div>
      </header>

      {/* Content Area */}
      <main className="flex-1 p-6 flex items-center justify-center">
        {!isLoggedIn ? (
          /* Login Card */
          <div className="bg-white border border-red-100 p-8 rounded-2xl shadow-xl max-w-md w-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#7A1523]"></div>

            <div className="text-center mb-6">
              <h1 className="text-2xl font-black text-[#7A1523] uppercase">Connexion Admin</h1>
              <p className="text-xs font-semibold text-slate-500 mt-1">Espace réservé à la gestion interne ELECLEF</p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-xs p-3 rounded-lg mb-4 text-center font-bold">
                {error}
              </div>
            )}

            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Identifiant / Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#7A1523]" 
                  placeholder="admin@eleclef.com" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mot de passe</label>
                <div className="relative flex items-center">
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm pr-24 focus:outline-none focus:border-[#7A1523]" 
                    placeholder="••••••••" 
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 px-2.5 py-1 text-xs font-bold text-[#7A1523] bg-red-50 hover:bg-red-100 rounded transition border border-red-200 select-none"
                  >
                    {showPassword ? '👁️ Masquer' : '👁️ Afficher'}
                  </button>
                </div>
              </div>

              <button type="submit" className="w-full py-3 bg-[#7A1523] hover:bg-red-800 text-white font-bold rounded-lg text-sm uppercase transition shadow-md">
                SE CONNECTER
              </button>
            </form>
          </div>
        ) : (
          /* Admin Dashboard After Login */
          <div className="max-w-7xl w-full bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-6">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
              <div>
                <h1 className="text-2xl font-black text-[#7A1523] uppercase">Tableau de bord Admin</h1>
                <p className="text-xs font-semibold text-slate-500">Gestion des demandes de devis et contacts client</p>
              </div>
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs px-3 py-1 rounded-full font-bold">
                ● Connecté
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Client</th>
                    <th className="p-3">Contact</th>
                    <th className="p-3">Objet</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Statut</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {messages.map((m) => (
                    <tr key={m.id} className="hover:bg-slate-50/50">
                      <td className="p-3 font-bold text-[#7A1523]">{m.name}</td>
                      <td className="p-3">
                        <div>{m.email}</div>
                        <div className="text-xs text-slate-400">{m.phone}</div>
                      </td>
                      <td className="p-3">{m.subject}</td>
                      <td className="p-3 text-xs text-slate-500">{m.date}</td>
                      <td className="p-3">
                        <span className="bg-amber-50 text-amber-700 border border-amber-200 text-xs px-2.5 py-0.5 rounded-full font-semibold">
                          {m.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#7A1523] text-slate-200 text-center py-4 text-xs">
        <p>&copy; 2026 ELECLEF Administration.</p>
      </footer>

    </div>
  );
}