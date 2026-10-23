'use client';
import React, { useEffect, useState } from 'react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { useAdaroAnalytics } from '@/hooks/useAdaroAnalytics';

interface WhatsAppButtonProps {
  whatsappNumber?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ whatsappNumber }) => {
  const [footerVisible, setFooterVisible] = useState(false);
  const { logWhatsAppClick } = useAdaroAnalytics();

  const defaultMessage = "Hola Sergio, quiero consultar por disponibilidad de traslados y tarifa para mi recorrido al centro.";
  const whatsappUrl = buildWhatsAppUrl(defaultMessage, whatsappNumber);

  const whatsappColors = {
    '--whatsapp-green': '#25D366',
    '--whatsapp-green-hover': '#1EBE5D',
  } as React.CSSProperties;

  useEffect(() => {
    const footer = document.querySelector('footer');

    if (!footer) {
      return;
    }

    const footerObserver = new IntersectionObserver(([entry]) => {
      setFooterVisible(entry.isIntersecting);
    });

    footerObserver.observe(footer);

    return () => footerObserver.disconnect();
  }, []);

  const handleClick = () => {
    logWhatsAppClick({
      location: 'sticky_float',
      buttonText: 'Escribir por WhatsApp',
      templateName: 'consulta_disponibilidad',
      targetPhone: whatsappNumber || '543516149222',
    });
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp a Adaro Viajes"
      onClick={handleClick}
      style={whatsappColors}
      aria-hidden={footerVisible}
      tabIndex={footerVisible ? -1 : 0}
      className={`group fixed right-4 bottom-[calc(16px+env(safe-area-inset-bottom,0px))] z-30 flex h-14 w-14 items-center justify-center rounded-full bg-(--whatsapp-green) text-white shadow-[0_4px_12px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-(--whatsapp-green-hover) focus-visible:bg-(--whatsapp-green-hover) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none md:right-6 md:bottom-6 ${
        footerVisible
          ? 'invisible translate-y-2 opacity-0 pointer-events-none'
          : 'visible translate-y-0 opacity-100 pointer-events-auto'
      }`}
    >
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-slate-950 px-3 py-2 text-sm font-medium text-white shadow-lg md:group-hover:block md:group-focus-visible:block">
        Escribir por WhatsApp
      </span>
      <svg
        aria-hidden="true"
        focusable="false"
        className="h-7.5 w-7.5 fill-current"
        viewBox="0 0 32 32"
      >
        <path d="M16 2.5C8.54 2.5 2.5 8.54 2.5 16c0 2.38.63 4.61 1.73 6.54L2.4 29.6l7.24-1.79A13.42 13.42 0 0 0 16 29.5c7.46 0 13.5-6.04 13.5-13.5S23.46 2.5 16 2.5Zm0 24.52c-2.16 0-4.17-.63-5.87-1.72l-.42-.27-4.3 1.06 1.08-4.19-.28-.43A10.96 10.96 0 1 1 16 27.02Zm6.02-8.22c-.33-.16-1.96-.97-2.26-1.08-.3-.11-.52-.16-.74.16-.22.33-.85 1.08-1.04 1.3-.19.22-.38.24-.71.08-.33-.16-1.4-.52-2.67-1.66-.99-.88-1.66-1.96-1.85-2.29-.19-.33-.02-.5.14-.66.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.02-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.7s1.17 3.13 1.33 3.35c.16.22 2.3 3.51 5.57 4.92.78.34 1.39.54 1.87.69.79.25 1.51.21 2.08.13.63-.09 1.96-.8 2.24-1.57.27-.77.27-1.43.19-1.57-.08-.14-.3-.22-.63-.38Z" />
      </svg>
    </a>
  );
};
