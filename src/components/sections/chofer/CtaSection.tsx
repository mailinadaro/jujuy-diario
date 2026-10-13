'use client';
import React from 'react';
import Image from 'next/image';
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
    <section className="relative py-28 lg:py-36 text-white text-center overflow-hidden">
      {/* Fondo de alta gama con imagen de territorio y gradientes editoriales */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/heroCronos02.png" 
          alt="Paisaje de Jujuy y rutas" 
          fill 
          className="object-cover object-center brightness-50"
        />
        <div className="absolute inset-0 bg-slate-950/10 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/1 to-slate-950/80"></div>
      </div>

      <MainContainer className="relative z-10 space-y-8 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase bg-slate-900/80 text-amber-400 border border-amber-500/30 backdrop-blur-md shadow-sm">
          <i className="fa-solid fa-compass"></i> Da el primer paso
        </div>

        <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight">
          Empezá por consultar tu recorrido.
        </h2>

        <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Contanos desde qué barrio salís, dónde trabajás y cuáles son tus horarios. Revisamos si podemos ofrecerte una alternativa compatible con tu rutina.
        </p>

        <div className="pt-4">
          <button 
            onClick={openWhatsApp} 
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-8 py-4 rounded-xl shadow-xl transition-all inline-flex items-center space-x-3 text-lg cursor-pointer"
          >
            <i className="fa-brands fa-whatsapp text-2xl"></i>
            <span>Consultar disponibilidad por WhatsApp</span>
          </button>
        </div>
      </MainContainer>
    </section>
  );
};