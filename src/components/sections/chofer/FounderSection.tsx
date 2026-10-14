import React from 'react';
import Image from 'next/image';
import { MainContainer } from '@/components/layout/MainContainer';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const FounderSection = () => {
  return (
    <section id="quien-te-lleva" className="py-24 bg-slate-100 border-y border-slate-200">
      <MainContainer>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider block mb-3">Quién te lleva</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Sergio, más de 30 años haciendo traslados.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
              Trabajó años trasladando personal de empresas y también turistas por Jujuy. Conoce la ciudad, los horarios del centro y lo que significa llegar a tiempo todos los días.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm">
          <div className="lg:col-span-5 relative h-80 rounded-xl overflow-hidden shadow-md">
            <Image 
              src="/chofer02.jpg" 
              alt="Sergio, chofer de Adaro Viajes, junto al vehículo del servicio." 
              fill 
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Detalles del servicio</h3>
            <div className="space-y-4 text-sm text-slate-700">
              <div className="flex items-center space-x-3 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                <i className="fa-solid fa-car text-amber-600 text-lg w-6"></i>
                <div>
                  <span className="font-semibold text-slate-900 block">Vehículo:</span>
                  <span className="text-slate-600">Fiat Cronos 2024</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                <i className="fa-solid fa-shield-halved text-amber-600 text-lg w-6"></i>
                <div>
                  <span className="font-semibold text-slate-900 block">Seguro:</span>
                  <span className="text-slate-600">Vigente con cobertura completa para pasajeros</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-500 italic">
              Trato directo, confianza y puntualidad garantizada en cada jornada laboral.
            </p>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};
