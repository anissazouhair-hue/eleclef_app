// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'ELECLEF - Travaux d\'Électricité MT & BT',
  description: 'Installation et maintenance d\'équipements électriques au Maroc',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-slate-900 text-slate-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}