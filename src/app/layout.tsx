import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

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
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adaro Viajes - Chofer privado en San Salvador de Jujuy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chofer privado en Jujuy para ir al centro | Adaro Viajes",
    description: "Chofer privado para ir y volver del centro de San Salvador de Jujuy, con horario fijo y tarifa semanal acordada. Consultá tu recorrido por WhatsApp.",
    images: ["/og-image.jpg"],
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
  // Contenedor exclusivo para Traslados Diarios (aislado de excursiones)
  const gtmId = process.env.GTM_TAG || process.env.NEXT_PUBLIC_GTM_ID || 'GTM-TZKLB94Z';

  return (
    <html lang="es-AR" className="scroll-smooth">
      <head>
        {/* Pre-inicialización sincrónica del Data Layer antes de GTM */}
        <Script id="adaro-datalayer-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'adaro_vehicle_model': 'fiat_cronos_2023_full',
              'adaro_container_scope': 'traslados_diarios',
              'adaro_service_type': 'chofer_privado_programado',
              'adaro_operating_city': 'San Salvador de Jujuy'
            });
          `}
        </Script>
        {/* FontAwesome Icons */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <GoogleTagManager gtmId={gtmId} /> 
      <body className={`${inter.className} antialiased bg-slate-50 text-slate-800`}>
        {children}
      </body>
    </html>
  );
}
