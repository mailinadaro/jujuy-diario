import React from 'react';
import { MainContainer } from '@/components/layout/MainContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const BenefitsSection = () => {
  const benefits = [
    { icon: 'fa-calendar-days', title: 'Horario fijo, sin sorpresas', desc: 'Coordinamos con anticipación tus horarios de entrada y salida, y se mantienen cada semana.' },
    { icon: 'fa-file-invoice-dollar', title: 'Sabés cuánto gastás antes de empezar la semana', desc: 'Acordamos la tarifa antes de empezar. Sin variaciones por demanda ni sorpresas.' },
    { icon: 'fa-comments', title: 'Hablás directo con quien te lleva', desc: 'Todo se resuelve por WhatsApp, con trato personal y sin intermediarios ni aplicaciones.' }
  ];

  return (
    <section id="beneficios" className="py-24 lg:py-32 bg-slate-100 border-y border-slate-200">
      <MainContainer>
        <ScrollReveal>
          <SectionHeader 
            eyebrow="Beneficios clave" 
            title="Una forma más tranquila de llegar a tu trabajo."
            description="Pensado para que sepas cuándo salís, cuánto pagás y con quién hablás."
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