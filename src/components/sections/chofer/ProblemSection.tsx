import React from 'react';
import { MainContainer } from '@/components/layout/MainContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const ProblemSection = () => {
  const problems = [
    { 
      icon: 'fa-square-parking', 
      title: 'Dar vueltas para estacionar', 
      desc: 'Todas las mañanas perdés minutos buscando lugar cerca de tu local, y el día empieza apurado.' 
    },
    { 
      icon: 'fa-wallet', 
      title: 'Manejar al centro sale más de lo que parece', 
      desc: 'Cochera, combustible, mantenimiento y desgaste del auto en trayectos cortos y repetidos. Sumados, pesan en tu mes más de lo que se nota día a día.' 
    },
    { 
      icon: 'fa-arrows-split-up-and-left', 
      title: 'Idas y vueltas por el horario cortado', 
      // TODO: Contá acá si coordinan también ese tramo.
      desc: 'Si cerrás al mediodía y volvés a la tarde, manejás el doble.' 
    }
  ];

  return (
    <section id="problema" className="py-24 lg:py-32 bg-white">
      <MainContainer>
        {/* Encabezado animado */}
        <ScrollReveal>
          <SectionHeader 
            eyebrow="La realidad diaria" 
            title="Ir a trabajar no debería empezar buscando estacionamiento."
          />
        </ScrollReveal>
        
        {/* Grilla: 3 columnas iguales en desktop, 1 columna en mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((p, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="bg-slate-50 border border-slate-200/80 hover:border-amber-500/40 p-6 sm:p-8 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-slate-200/80 text-slate-800 rounded-xl flex items-center justify-center text-xl mb-6 shadow-xs shrink-0">
                  <i className={`fa-solid ${p.icon}`}></i>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">{p.title}</h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </MainContainer>
    </section>
  );
};