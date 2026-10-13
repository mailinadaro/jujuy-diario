import React from 'react';
import { MainContainer } from '@/components/layout/MainContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const BenefitsSection = () => {
  const benefits = [
    { icon: 'fa-calendar-days', title: '1. Horarios coordinados', desc: 'Organizá tus traslados con anticipación y constancia, adaptados a tus entradas y salidas según disponibilidad operativa.' },
    { icon: 'fa-file-invoice-dollar', title: '2. Tarifa acordada previamente', desc: 'Conocé el precio exacto de tu recorrido antes de confirmar cada semana o mes, sin sorpresas ni tarifas variables imprevistas.' },
    { icon: 'fa-comments', title: '3. Atención directa', desc: 'Resolvé tus consultas ágilmente por WhatsApp, con trato personalizado, claro y sin aplicaciones complejas ni esperas.' }
  ];

  return (
    <section id="beneficios" className="py-24 lg:py-32 bg-slate-100 border-y border-slate-200">
      <MainContainer>
        <ScrollReveal>
          <SectionHeader 
            eyebrow="Beneficios clave" 
            title="Una forma más organizada de llegar a tu trabajo."
            description="Priorizamos la previsibilidad, el confort y una relación directa sin intermediarios."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.15}>
              <div className="bg-white p-8 rounded-2xl shadow-xs hover:shadow-md border border-slate-200 text-center relative overflow-hidden group hover:border-amber-500 transition-all duration-300 h-full flex flex-col justify-between">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div>
                  <div className="w-16 h-16 bg-slate-900 text-amber-400 rounded-2xl mx-auto flex items-center justify-center text-2xl mb-6 shadow-md group-hover:scale-105 transition-transform">
                    <i className={`fa-solid ${b.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 mb-3">{b.title}</h3>
                  <p className="text-slate-600 font-light text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </MainContainer>
    </section>
  );
};