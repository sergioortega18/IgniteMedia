import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display } from 'next/font/google';
import localFont from 'next/font/local';



const aeonik = localFont({
  src: '../assets/fonts/aeonikt-regular.otf',
  display: 'swap',
  variable: '--font-aeonik'
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'], // Subconjunto de caracteres
  weight: ['400', '600', '700'], // Pesos de la fuente
  variable: '--font-playfair-display', // Variable CSS para Playfair Display
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
    <html lang="en" className={`${aeonik.variable} ${playfairDisplay.variable}`}>
      <body className="antialiased bg-[#EFEBE8] text-[#0E4150]">
        {children}
      </body>
    </html>
  );
}