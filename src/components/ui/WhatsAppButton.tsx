'use client';
import React, { useEffect, useRef, useState } from 'react';

interface WhatsAppButtonProps {
  whatsappNumber: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ whatsappNumber }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [heroPassed, setHeroPassed] = useState(false);
  const [otherWhatsAppVisible, setOtherWhatsAppVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 767px)');
    const updateMobile = () => setIsMobile(mobileQuery.matches);
    updateMobile();
    mobileQuery.addEventListener('change', updateMobile);

    const hero = document.querySelector('main > section');
    let fallbackScrollHandler: (() => void) | undefined;
    let heroObserver: IntersectionObserver | undefined;

    if (hero) {
      heroObserver = new IntersectionObserver(([entry]) => {
        setHeroPassed(!entry.isIntersecting);
      });
      heroObserver.observe(hero);
    } else {
      fallbackScrollHandler = () => setHeroPassed(window.scrollY > 300);
      fallbackScrollHandler();
      window.addEventListener('scroll', fallbackScrollHandler, { passive: true });
    }

    const visibleWhatsAppLinks = new Set<Element>();
    const whatsAppObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleWhatsAppLinks.add(entry.target);
        } else {
          visibleWhatsAppLinks.delete(entry.target);
        }
      });
      setOtherWhatsAppVisible(visibleWhatsAppLinks.size > 0);
    });

    document.querySelectorAll<HTMLAnchorElement>('a[href*="wa.me"]').forEach((link) => {
      if (
        link !== buttonRef.current &&
        !link.closest('header, nav, footer')
      ) {
        whatsAppObserver.observe(link);
      }
    });

    const footer = document.querySelector('footer');
    const footerObserver = footer
      ? new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting))
      : undefined;
    if (footer && footerObserver) {
      footerObserver.observe(footer);
    }

    return () => {
      mobileQuery.removeEventListener('change', updateMobile);
      heroObserver?.disconnect();
      whatsAppObserver.disconnect();
      footerObserver?.disconnect();
      if (fallbackScrollHandler) {
        window.removeEventListener('scroll', fallbackScrollHandler);
      }
    };
  }, []);

  const text = encodeURIComponent("Hola, quiero consultar por disponibilidad de traslados y tarifa para mi recorrido al centro.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
  const isVisible = isMobile && heroPassed && !otherWhatsAppVisible && !footerVisible;

  return (
    <a
      ref={buttonRef}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp a Adaro Viajes"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={`fixed right-4 bottom-[calc(16px+env(safe-area-inset-bottom,0px))] z-30 min-h-11 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold tracking-wide text-slate-950 shadow-xl shadow-slate-950/40 ring-1 ring-amber-300/50 flex items-center justify-center gap-2 transition-all duration-300 motion-reduce:transition-none ${
        isVisible
          ? 'visible translate-y-0 opacity-100 pointer-events-auto'
          : 'invisible translate-y-2 opacity-0 pointer-events-none'
      }`}
    >
      <i className="fa-brands fa-whatsapp text-xl" aria-hidden="true"></i>
      <span>Escribir por WhatsApp</span>
    </a>
  );
};
