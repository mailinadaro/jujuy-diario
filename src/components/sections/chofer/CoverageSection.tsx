import React from 'react';
import { MainContainer } from '@/components/layout/MainContainer';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

interface CoverageProps {
  whatsappNumber: string;
}

export const CoverageSection: React.FC<CoverageProps> = ({ whatsappNumber }) => {
  const text = encodeURIComponent('Hola, quiero verificar si mi barrio tiene cobertura y consultar tarifa.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

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
              <div className="bg-slate-800 border border-slate-700/80 p-8 sm:p-10 rounded-2xl shadow-xl space-y-6">
                <p className="text-sm text-slate-300 font-light leading-relaxed border-l-2 border-amber-500 pl-4 bg-slate-900/80 py-3 pr-3 rounded-r-lg">
                  La cobertura se limita a recorridos compatibles con la operación del servicio. No incluimos zonas periféricas. Las direcciones y los horarios se confirman por WhatsApp.
                </p>
                {/* TODO: bloque de barrios cubiertos con mapa (se agrega después; no renderizar nada hasta tener la lista) */}
                <div className="pt-2">
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Verificar mi barrio por WhatsApp"
                    className="w-full min-h-11 bg-amber-500 hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 text-slate-950 font-medium py-3.5 px-6 rounded-xl transition-all flex items-center justify-center space-x-2 text-sm shadow cursor-pointer"
                  >
                    <i className="fa-brands fa-whatsapp text-lg"></i>
                    <span>Verificar mi barrio</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};