'use client';
import React, { useState } from 'react';
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

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white transition-all">
      <MainContainer className="h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-bold text-xl shadow-md">
            <i className="fa-solid fa-car-side"></i>
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight block leading-tight">ADARO VIAJES</span>
            <span className="text-xs text-amber-400 font-medium tracking-widest uppercase">CHOFER PRIVADO · JUJUY</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-200">
          <a href="#problema" className="hover:text-amber-400 transition-colors">El Problema</a>
          <a href="#beneficios" className="hover:text-amber-400 transition-colors">Propuesta</a>
          <a href="#como-funciona" className="hover:text-amber-400 transition-colors">Cómo Funciona</a>
          <a href="#cobertura" className="hover:text-amber-400 transition-colors">Cobertura</a>
          <a href="#faq" className="hover:text-amber-400 transition-colors">Preguntas</a>
        </nav>

        <div className="hidden md:block">
          <button 
            onClick={() => openWhatsApp('Hola, quiero consultar por disponibilidad de traslados y tarifa para mi recorrido al centro.')} 
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all flex items-center space-x-2 text-sm cursor-pointer"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            <span>Consultar por WhatsApp</span>
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 focus:outline-none" aria-label="Abrir menú">
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </MainContainer>

      {isOpen && (
        <div className="md:hidden bg-slate-800 border-b border-slate-700 px-4 pt-2 pb-6 space-y-3">
          <a href="#problema" onClick={() => setIsOpen(false)} className="block py-2 text-slate-200 hover:text-amber-400 font-medium">El Problema</a>
          <a href="#beneficios" onClick={() => setIsOpen(false)} className="block py-2 text-slate-200 hover:text-amber-400 font-medium">Propuesta</a>
          <a href="#como-funciona" onClick={() => setIsOpen(false)} className="block py-2 text-slate-200 hover:text-amber-400 font-medium">Cómo Funciona</a>
          <a href="#cobertura" onClick={() => setIsOpen(false)} className="block py-2 text-slate-200 hover:text-amber-400 font-medium">Cobertura</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="block py-2 text-slate-200 hover:text-amber-400 font-medium">Preguntas</a>
          <div className="pt-2">
            <button 
              onClick={() => openWhatsApp('Hola, quiero consultar por disponibilidad de traslados y tarifa para mi recorrido al centro.')} 
              className="w-full bg-amber-500 text-slate-950 font-bold py-3 rounded-lg flex items-center justify-center space-x-2 text-sm shadow cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>Consultar por WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
