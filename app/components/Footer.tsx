export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-3">ELECLEF</h3>
            <p className="text-gray-400 text-sm">
              Spécialiste en travaux d'électricité, courants forts & faibles, et maintenance industrielle.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact</h4>
            <p className="text-gray-400 text-sm">📍 Fès, Maroc</p>
            <p className="text-gray-400 text-sm">📞 +212 5 XX XX XX XX</p>
            <p className="text-gray-400 text-sm">✉️ contact@eleclef.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Horaires</h4>
            <p className="text-gray-400 text-sm">Lundi - Vendredi: 08:00 - 18:00</p>
            <p className="text-gray-400 text-sm">Samedi: 08:00 - 13:00</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} ELECLEF. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}