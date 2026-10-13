'use client';

import React from 'react';
import { MainContainer } from '@/components/layout/MainContainer';

interface CtaProps {
  whatsappNumber: string;
}

export const CtaSection: React.FC<CtaProps> = ({ whatsappNumber }) => {
  const openWhatsApp = () => {
    const text = encodeURIComponent("Hola, quiero consultar por disponibilidad de traslados y tarifa para mi recorrido al centro.");
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white text-center relative overflow-hidden">
      <MainContainer className="relative z-10 space-y-8">
        <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Da el primer paso</span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Empezá por consultar tu recorrido.</h2>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Contanos desde qué barrio salís, dónde trabajás y cuáles son tus horarios. Revisamos si podemos ofrecerte una alternativa compatible con tu rutina.
        </p>
        <div className="pt-4">
          <button 
            onClick={openWhatsApp} 
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-xl transition-all inline-flex items-center space-x-3 text-lg cursor-pointer"
          >
            <i className="fa-brands fa-whatsapp text-2xl"></i>
            <span>Consultar disponibilidad por WhatsApp</span>
          </button>
        </div>
      </MainContainer>
    </section>
  );
};
