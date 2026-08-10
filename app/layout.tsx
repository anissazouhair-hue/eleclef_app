// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'ELECLEF - Travaux d Électricité',
  description: 'Solutions Électriques Professionnelles',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}