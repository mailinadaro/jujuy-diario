import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adaroviajes.com"),
  title: "Chofer privado en Jujuy para ir al centro | Adaro Viajes",
  description: "Chofer privado para ir y volver del centro de San Salvador de Jujuy, con horario fijo y tarifa semanal acordada. Consultá tu recorrido por WhatsApp.",
  alternates: {
    canonical: "https://www.adaroviajes.com",
  },
  openGraph: {
    title: "Chofer privado en Jujuy para ir al centro | Adaro Viajes",
    description: "Chofer privado para ir y volver del centro de San Salvador de Jujuy, con horario fijo y tarifa semanal acordada. Consultá tu recorrido por WhatsApp.",
    type: "website",
    url: "https://www.adaroviajes.com",
    siteName: "Adaro Viajes",
    locale: "es_AR",
    images: [
      {
        url: "/heroCronos03.png",
        width: 1672,
        height: 940,
        alt: "Chofer privado en San Salvador de Jujuy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chofer privado en Jujuy para ir al centro | Adaro Viajes",
    description: "Chofer privado para ir y volver del centro de San Salvador de Jujuy, con horario fijo y tarifa semanal acordada. Consultá tu recorrido por WhatsApp.",
    images: ["/heroCronos03.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className="scroll-smooth">
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