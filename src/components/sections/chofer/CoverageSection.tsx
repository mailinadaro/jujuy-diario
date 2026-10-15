import React from 'react';
import Image from 'next/image';
import { MainContainer } from '@/components/layout/MainContainer';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

interface CoverageProps {
  whatsappNumber: string;
}

export const CoverageSection: React.FC<CoverageProps> = () => {
  return (
    <section id="cobertura" className="scroll-mt-24 py-24 lg:py-32 bg-slate-900 text-white">
      <MainContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <ScrollReveal>
              <div className="space-y-6">
                <span className="text-amber-400 font-medium text-xs tracking-widest uppercase">Cobertura</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">Pensado para quienes trabajan en el centro de Jujuy.</h2>
                <p className="text-slate-300 text-base font-light leading-relaxed">
                  Servicio para empleados, comerciantes y profesionales que viven en barrios cercanos al microcentro y tienen horarios fijos de entrada y salida, dentro de nuestro horario de trabajo: de 9 a 13 hs y de 15 a 21 hs.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-6">
            <ScrollReveal delay={0.2}>
              <div className="relative h-80 overflow-hidden rounded-2xl border border-slate-700/80 shadow-xl sm:h-96">
                <Image
                  src="/fiat02.jpg"
                  alt="Fiat Cronos de Adaro Viajes"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};