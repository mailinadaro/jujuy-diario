'use client';

import React from 'react';
import { MainContainer } from '@/components/layout/MainContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';

interface HowItWorksProps {
  whatsappNumber: string;
}

export const HowItWorksSection: React.FC<HowItWorksProps> = ({ whatsappNumber }) => {
  const steps = [
    { num: 1, icon: 'fa-map-location-dot', title: 'Contanos tu recorrido', desc: 'Indicá por WhatsApp tu barrio de origen, la dirección de tu destino laboral en el centro y tus horarios.' },
    { num: 2, icon: 'fa-clipboard-check', title: 'Verificamos disponibilidad', desc: 'Revisamos si podemos cubrir de forma puntual y eficiente tu trayecto según nuestra agenda de operaciones.' },
    { num: 3, icon: 'fa-handshake', title: 'Recibís tu tarifa', desc: 'Si el servicio es viable, te informamos el precio exacto acordado y coordinamos el inicio de los traslados.' }
  ];

  const openWhatsApp = () => {
    const text = encodeURIComponent("Hola, quiero consultar por disponibilidad de traslados y tarifa para mi recorrido al centro.");
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <MainContainer>
        <SectionHeader 
          eyebrow="Simple y transparente" 
          title="¿Cómo funciona el servicio?"
          description="Tres simples pasos para coordinar tu traslado diario al centro de San Salvador de Jujuy."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s) => (
            <div key={s.num} className="bg-slate-50 border border-slate-200 p-8 rounded-2xl text-center relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-sm shadow">{s.num}</div>
              <div className="w-14 h-14 bg-slate-200 text-slate-800 rounded-xl mx-auto flex items-center justify-center text-2xl mb-6 mt-2">
                <i className={`fa-solid ${s.icon}`}></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={openWhatsApp} 
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-md transition-all inline-flex items-center space-x-3 text-base cursor-pointer"
          >
            <i className="fa-brands fa-whatsapp text-2xl"></i>
            <span>Consultar por WhatsApp ahora</span>
          </button>
        </div>
      </MainContainer>
    </section>
  );
};
