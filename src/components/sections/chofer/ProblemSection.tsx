import React from 'react';
import { MainContainer } from '@/components/layout/MainContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const ProblemSection = () => {
  const problems = [
    { icon: 'fa-square-parking', title: 'Dar vueltas sin estacionar', desc: 'Perder valiosos minutos de tu mañana intentando encontrar un espacio seguro donde dejar el auto cerca de tu local o comercio.' },
    { icon: 'fa-wallet', title: 'Costos fijos elevados', desc: 'Asumir tarifas constantes de playas de estacionamiento, combustible en alza y un mantenimiento automotor cada vez más costoso.' },
    { icon: 'fa-clock', title: 'Tránsito y estrés', desc: 'Enfrentar el embotellamiento diario y la tensión de llegar a horario cumpliendo con tus obligaciones laborales.' },
    { icon: 'fa-route', title: 'Desgaste del vehículo', desc: 'Trayectos cortos y constantes arranques en frío que castigan el motor de tu auto en recorridos urbanos repetitivos.' },
    { icon: 'fa-arrows-split-up-and-left', title: 'Jornadas con corte al mediodía', desc: 'Organizar múltiples idas y vueltas cuando tu comercio o trabajo en el centro requiere volver a casa a almorzar y regresar por la tarde.', span: 'md:col-span-2' }
  ];

  return (
    <section id="problema" className="py-20 bg-white">
      <MainContainer>
        <SectionHeader 
          eyebrow="La realidad diaria" 
          title="Ir a trabajar no debería empezar buscando estacionamiento."
          description="Sabemos lo desgastante que puede ser la rutina matutina cuando dependés de tu propio vehículo en el microcentro jujeño."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((p, idx) => (
            <div key={idx} className={`bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all ${p.span || ''}`}>
              <div className="w-12 h-12 bg-slate-200 text-slate-800 rounded-xl flex items-center justify-center text-xl mb-6">
                <i className={`fa-solid ${p.icon}`}></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </MainContainer>
    </section>
  );
};
