// app/admin/page.tsx
'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface Demande {
  id: number;
  created_at: string;
  nom: string;
  telephone: string;
  email: string;
  type_service: string;
  message: string;
}

export default function AdminPage() {
  const [demandes, setDemandes] = useState<Demande[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDemandes = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('demandes')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error) {
      setDemandes(data || []);
    }
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Voulez-vous vraiment supprimer cette demande ?')) return;
    const { error } = await supabase.from('demandes').delete().eq('id', id);
    if (!error) {
      setDemandes(demandes.filter(d => d.id !== id));
    }
  };

  useEffect(() => {
    fetchDemandes();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 backdrop-blur-md bg-slate-900/90">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 via-orange-500 to-blue-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <span className="text-white text-xl font-black">⚡</span>
            </div>
            <div className="text-2xl font-black tracking-wider">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">ELE</span>
              <span className="text-blue-500">CLEF</span>
              <span className="text-xs font-semibold text-slate-400 ml-2 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">Admin</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="/" className="hover:text-orange-400 transition">Accueil</a>
            <a href="/services" className="hover:text-orange-400 transition">Nos Services</a>
            <a href="/contact" className="hover:text-orange-400 transition">Contact & Devis</a>
          </div>

          <a href="/" className="text-xs font-semibold text-slate-300 hover:text-orange-400 border border-slate-700 bg-slate-800/50 px-4 py-2 rounded-xl transition">
            &larr; Retour à l'accueil
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-slate-100">Demandes de devis ({demandes.length})</h1>
          <button
            onClick={fetchDemandes}
            className="bg-gradient-to-r from-red-600 to-orange-500 hover:brightness-110 text-xs text-white font-semibold px-4 py-2 rounded-xl transition shadow-md shadow-orange-500/10"
          >
            Actualiser
          </button>
        </div>

        {loading ? (
          <div className="text-center py-20 text-slate-500">Chargement...</div>
        ) : demandes.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/50 rounded-2xl border border-slate-800 text-slate-500">
            Aucune demande enregistrée pour le moment.
          </div>
        ) : (
          <div className="bg-slate-900/80 rounded-2xl border border-slate-800 overflow-x-auto shadow-xl">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-950/80 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="p-4">Date</th>
                  <th className="p-4">Nom</th>
                  <th className="p-4">Téléphone</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Service</th>
                  <th className="p-4">Message</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {demandes.map((d) => (
                  <tr key={d.id} className="hover:bg-slate-800/40 transition">
                    <td className="p-4 text-xs text-slate-500 whitespace-nowrap">
                      {new Date(d.created_at).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="p-4 font-medium text-slate-200">{d.nom}</td>
                    <td className="p-4 text-slate-300">{d.telephone}</td>
                    <td className="p-4 text-slate-400 text-xs">{d.email}</td>
                    <td className="p-4 text-orange-400 text-xs font-semibold">{d.type_service}</td>
                    <td className="p-4 text-slate-400 text-xs max-w-xs truncate">{d.message}</td>
                    <td className="p-4 text-center whitespace-nowrap">
                      <button
                        onClick={() => handleDelete(d.id)}
                        className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-1.5 rounded-lg text-xs transition"
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}