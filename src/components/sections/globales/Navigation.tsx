'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MainContainer } from '@/components/layout/MainContainer';

interface NavigationProps {
  whatsappNumber: string;
}

export const Navigation: React.FC<NavigationProps> = ({ whatsappNumber }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = (msg: string) => {
    const text = encodeURIComponent(msg);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur-md border-b border-slate-900/80 text-white transition-all">
      <MainContainer className="h-24 flex items-center justify-between">
        
        {/* Logotipo SVG desde la carpeta public */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-28 h-16 shrink-0">
              <Image 
                src="/logoADARO.svg" 
                alt="Adaro Viajes Logo" 
                fill 
                sizes="112px"
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center space-x-10 text-xs font-light tracking-widest uppercase text-slate-300">
          <a href="#beneficios" onClick={(e) => scrollToSection(e, '#beneficios')} className="hover:text-amber-400 transition-colors cursor-pointer">Propuesta</a>
          <a href="#como-funciona" onClick={(e) => scrollToSection(e, '#como-funciona')} className="hover:text-amber-400 transition-colors cursor-pointer">Cómo Funciona</a>
          <a href="#cobertura" onClick={(e) => scrollToSection(e, '#cobertura')} className="hover:text-amber-400 transition-colors cursor-pointer">Cobertura</a>
          <a href="#faq" onClick={(e) => scrollToSection(e, '#faq')} className="hover:text-amber-400 transition-colors cursor-pointer">Preguntas</a>
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:block">
          <button 
            onClick={() => openWhatsApp('Hola, quiero consultar por disponibilidad de traslados y tarifa para mi recorrido al centro.')} 
            className="border border-amber-500/40 hover:border-amber-400 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 font-light px-5 py-2.5 rounded-sm tracking-widest transition-all flex items-center space-x-2 text-xs uppercase cursor-pointer"
          >
            <i className="fa-brands fa-whatsapp text-sm text-amber-400"></i>
            <span>WhatsApp</span>
          </button>
        </div>

        {/* Botón Menú Móvil */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 focus:outline-none" aria-label="Abrir menú">
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-xl text-amber-400`}></i>
          </button>
        </div>
      </MainContainer>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-lg border-b border-slate-900 px-6 pt-4 pb-8 space-y-4 text-center">
          <a href="#problema" onClick={(e) => scrollToSection(e, '#problema')} className="block py-2 text-xs tracking-widest uppercase text-slate-300 hover:text-amber-400 font-light cursor-pointer">El Problema</a>
          <a href="#beneficios" onClick={(e) => scrollToSection(e, '#beneficios')} className="block py-2 text-xs tracking-widest uppercase text-slate-300 hover:text-amber-400 font-light cursor-pointer">Propuesta</a>
          <a href="#como-funciona" onClick={(e) => scrollToSection(e, '#como-funciona')} className="block py-2 text-xs tracking-widest uppercase text-slate-300 hover:text-amber-400 font-light cursor-pointer">Cómo Funciona</a>
          <a href="#cobertura" onClick={(e) => scrollToSection(e, '#cobertura')} className="block py-2 text-xs tracking-widest uppercase text-slate-300 hover:text-amber-400 font-light cursor-pointer">Cobertura</a>
          <a href="#faq" onClick={(e) => scrollToSection(e, '#faq')} className="block py-2 text-xs tracking-widest uppercase text-slate-300 hover:text-amber-400 font-light cursor-pointer">Preguntas</a>
          <div className="pt-4">
            <button 
              onClick={() => openWhatsApp('Hola, quiero consultar por disponibilidad de traslados y tarifa para mi recorrido al centro.')} 
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-medium py-3 rounded-sm flex items-center justify-center space-x-2 text-xs uppercase tracking-widest shadow transition-colors cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp text-base"></i>
              <span>Consultar por WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};