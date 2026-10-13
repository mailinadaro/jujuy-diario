import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adaro Viajes | Chofer Privado en Jujuy",
  description: "Consultá por traslados coordinados para ir a trabajar al centro de San Salvador de Jujuy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* FontAwesome Icons */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body className={`${inter.className} antialiased bg-slate-50 text-slate-800`}>
        {children}
      </body>
    </html>
  );
}