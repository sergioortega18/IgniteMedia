import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'], // Subconjunto de caracteres
  weight: ['400', '600', '700'], // Pesos de la fuente
  variable: '--font-playfair-display', // Variable CSS para Playfair Display
});

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'], // Subconjunto de caracteres
  weight: ['400', '700', '900'], // Pesos de la fuente
  variable: '--font-source-sans-3', // Variable CSS para Source Sans Pro
});


export const metadata: Metadata = {
  title: "IGNITE MEDIA",
  description: "Portafolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${sourceSans3.variable}`}>
      <body className="antialiased bg-[#EFEBE8] text-[#E61D40]">
        {children}
      </body>
    </html>
  );
} 