// app/contact/page.tsx
'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    type_service: 'Installation Électrique',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const { error: supabaseError } = await supabase.from('demandes').insert([formData]);
      if (supabaseError) throw supabaseError;
      setSuccess('Votre demande de devis a été envoyée avec succès !');
      setFormData({ nom: '', telephone: '', email: '', type_service: 'Installation Électrique', message: '' });
    } catch (err) {
      setError('Une erreur est survenue lors de l\'envoi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative overflow-hidden flex flex-col justify-between">
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/25 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800/80 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 via-orange-500 to-blue-600 flex items-center justify-center">
              <span className="text-white text-xl font-black">⚡</span>
            </div>
            <div className="text-2xl font-black tracking-wider">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">ELE</span>
              <span className="text-blue-500">CLEF</span>
            </div>
          </a>

          <div className="flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="/" className="hover:text-orange-400 transition">Accueil</a>
            <a href="/services" className="hover:text-orange-400 transition">Nos Services</a>
            <a href="/contact" className="text-orange-400 font-bold border-b-2 border-orange-500 pb-0.5">Contact / Devis</a>
          </div>

          <a href="/admin" className="text-xs font-semibold text-slate-200 hover:text-orange-400 border border-slate-700/80 hover:border-orange-500/50 bg-slate-800/50 px-3.5 py-2 rounded-xl transition duration-200">
            Espace Admin
          </a>
        </nav>
      </header>

      {/* Contenu Contact */}
      <main className="pt-32 pb-16 px-6 max-w-2xl mx-auto relative z-10 w-full my-auto">
        <div className="bg-slate-900/90 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-slate-100 mb-2">Demandez un Devis</h1>
            <p className="text-slate-400 text-sm">Remplissez le formulaire et nous vous contacterons rapidement</p>
          </div>

          {success && <div className="bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 px-4 py-3 rounded-xl mb-6 text-sm text-center">{success}</div>}
          {error && <div className="bg-rose-950/80 border border-rose-500/50 text-rose-300 px-4 py-3 rounded-xl mb-6 text-sm text-center">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2">Nom Complet</label>
                <input type="text" name="nom" value={formData.nom} onChange={handleChange} required placeholder="Ex: Reda Mansouri" className="w-full bg-slate-950/80 p-3.5 rounded-xl text-slate-100 border border-slate-800 focus:border-orange-500 focus:outline-none text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2">Téléphone</label>
                <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} required placeholder="0600000000" className="w-full bg-slate-950/80 p-3.5 rounded-xl text-slate-100 border border-slate-800 focus:border-orange-500 focus:outline-none text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-2">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="example@gmail.com" className="w-full bg-slate-950/80 p-3.5 rounded-xl text-slate-100 border border-slate-800 focus:border-orange-500 focus:outline-none text-sm" />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-2">Type de Service</label>
              <select name="type_service" value={formData.type_service} onChange={handleChange} required className="w-full bg-slate-950/80 p-3.5 rounded-xl text-slate-100 border border-slate-800 focus:border-orange-500 focus:outline-none text-sm">
                <option value="Installation Électrique" className="bg-slate-900">Installation Électrique</option>
                <option value="Dépannage & Réparation" className="bg-slate-900">Dépannage & Réparation</option>
                <option value="Mise aux Normes" className="bg-slate-900">Mise aux Normes</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-2">Détails de la demande</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Expliquez votre besoin..." rows={4} className="w-full bg-slate-950/80 p-3.5 rounded-xl text-slate-100 border border-slate-800 focus:border-orange-500 focus:outline-none text-sm" />
            </div>
            <button type="submit" disabled={loading} className="w-full text-slate-950 font-bold text-sm py-4 rounded-xl bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 hover:brightness-110 transition shadow-lg shadow-orange-500/25">
              {loading ? 'Envoi en cours...' : 'Envoyer la demande'}
            </button>
          </form>
        </div>
      </main>

      <footer className="text-center py-8 text-xs text-slate-500 border-t border-slate-900 bg-slate-950">
        <p>&copy; 2026 ELECLEF. Tous droits réservés.</p>
      </footer>
    </div>
  );
}