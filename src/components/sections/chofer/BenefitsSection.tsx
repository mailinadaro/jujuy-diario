import React from 'react';
import { MainContainer } from '@/components/layout/MainContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const BenefitsSection = () => {
  const benefits = [
    { icon: 'fa-calendar-days', title: '1. Horarios coordinados', desc: 'Organizá tus traslados con anticipación y constancia, adaptados a tus entradas y salidas según disponibilidad operativa.' },
    { icon: 'fa-file-invoice-dollar', title: '2. Tarifa acordada previamente', desc: 'Conocé el precio exacto de tu recorrido antes de confirmar cada semana o mes, sin sorpresas ni tarifas variables imprevistas.' },
    { icon: 'fa-comments', title: '3. Atención directa', desc: 'Resolvé tus consultas ágilmente por WhatsApp, con trato personalizado, claro y sin aplicaciones complejas ni esperas.' }
  ];

  return (
    <section id="beneficios" className="py-20 bg-slate-100 border-y border-slate-200">
      <MainContainer>
        <SectionHeader 
          eyebrow="Beneficios clave" 
          title="Una forma más organizada de llegar a tu trabajo."
          description="Priorizamos la previsibilidad, el confort y una relación directa sin intermediarios."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center relative overflow-hidden group hover:border-amber-500 transition-all">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 bg-slate-900 text-amber-400 rounded-2xl mx-auto flex items-center justify-center text-2xl mb-6 shadow-md">
                <i className={`fa-solid ${b.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{b.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </MainContainer>
    </section>
  );
};
