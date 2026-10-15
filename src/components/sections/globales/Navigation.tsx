'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MainContainer } from '@/components/layout/MainContainer';

interface NavigationProps {
  whatsappNumber: string;
}

export const Navigation: React.FC<NavigationProps> = ({ whatsappNumber }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = (msg: string) => {
    const text = encodeURIComponent(msg);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const navLinks = [
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Quién te lleva', href: '#quien-te-lleva' },
    { label: 'Cobertura', href: '#cobertura' },
    { label: 'Preguntas', href: '#faq' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = `/${href}`;
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 text-white ${
        isScrolled 
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-xl py-3' 
          : 'bg-gradient-to-b from-slate-950/80 via-slate-950/30 to-transparent border-b border-white/5 py-5'
      }`}
    >
      <MainContainer className="flex items-center justify-between">
        
        {/* Logotipo SVG */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-28 h-12 sm:h-14 shrink-0 transition-transform group-hover:scale-105">
              <Image 
                src="/logoADARO.svg" 
                alt="Adaro Viajes Logo" 
                fill 
                sizes="112px"
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Navegación Desktop */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs font-light tracking-widest uppercase text-slate-200">
          {navLinks.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              onClick={(e) => scrollToSection(e, item.href)} 
              className="hover:text-amber-400 transition-colors cursor-pointer py-1 border-b border-transparent hover:border-amber-400/50"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden lg:block">
          <button 
            onClick={() => openWhatsApp('Hola, quiero consultar por disponibilidad de traslados y tarifa para mi recorrido al centro.')} 
            className="border border-amber-500/40 hover:border-amber-400 bg-amber-500/10 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-medium px-5 py-2.5 rounded-lg tracking-wider transition-all flex items-center space-x-2 text-xs uppercase shadow-sm cursor-pointer group"
          >
            <i className="fa-brands fa-whatsapp text-sm text-amber-400 group-hover:text-slate-950 transition-colors"></i>
            <span>Escribir por WhatsApp</span>
          </button>
        </div>

        {/* Botón Menú Móvil / Tablet */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white p-2 focus:outline-none rounded-lg bg-slate-900/60 border border-slate-700/60" 
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-lg text-amber-400`}></i>
          </button>
        </div>
      </MainContainer>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/80 px-6 pt-4 pb-8 space-y-4 text-center animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              onClick={(e) => scrollToSection(e, item.href)} 
              className="block py-2.5 text-xs tracking-widest uppercase text-slate-200 hover:text-amber-400 font-light border-b border-slate-900 cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3">
            <button 
              onClick={() => openWhatsApp('Hola, quiero consultar por disponibilidad de traslados y tarifa para mi recorrido al centro.')} 
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-medium py-3 rounded-lg flex items-center justify-center space-x-2 text-xs uppercase tracking-widest shadow-lg transition-colors cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp text-base"></i>
              <span>Escribir por WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};