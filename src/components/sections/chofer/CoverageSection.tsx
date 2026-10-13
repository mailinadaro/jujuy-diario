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
    <section id="cobertura" className="py-24 lg:py-32 bg-slate-900 text-white">
      <MainContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <ScrollReveal>
              <div className="space-y-6">
                <span className="text-amber-400 font-medium text-xs tracking-widest uppercase">Enfoque local</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">Pensado para quienes trabajan en el centro de Jujuy.</h2>
                <p className="text-slate-300 text-base font-light leading-relaxed">
                  Nuestro servicio está diseñado específicamente para empleados, comerciantes y profesionales que residen en barrios cercanos y necesitan una solución de transporte previsible, seria y ordenada para cumplir sus horarios laborales sin depender de manejar todos los días.
                </p>
                <div className="space-y-4 pt-2">
                  <div className="flex items-start space-x-3">
                    <div className="text-amber-400 mt-1"><i className="fa-solid fa-circle-check"></i></div>
                    <p className="text-sm text-slate-200 font-light">Ideal para traslados desde barrios residenciales hacia el casco céntrico comercial y administrativo.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-amber-400 mt-1"><i className="fa-solid fa-circle-check"></i></div>
                    <p className="text-sm text-slate-200 font-light">Opción perfecta para quienes tienen horarios fijos de ingreso y salida.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-6">
            <ScrollReveal delay={0.2}>
              <div className="bg-slate-800 border border-slate-700/80 p-8 sm:p-10 rounded-2xl shadow-xl space-y-6">
                <div className="flex items-center space-x-3 text-amber-400">
                  <i className="fa-solid fa-triangle-exclamation text-xl"></i>
                  <h3 className="text-lg font-normal text-white">Aclaración importante sobre cobertura</h3>
                </div>
                <p className="text-sm text-slate-300 font-light leading-relaxed italic border-l-2 border-amber-500 pl-4 bg-slate-900/80 py-3 pr-3 rounded-r-lg">
                  “La cobertura se limita a recorridos compatibles con la operación del servicio. Las direcciones y los horarios se confirman por WhatsApp. No se incluyen zonas periféricas.”
                </p>
                <div className="pt-2">
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-medium py-3.5 px-6 rounded-xl transition-all flex items-center justify-center space-x-2 text-sm shadow cursor-pointer"
                  >
                    <i className="fa-brands fa-whatsapp text-lg"></i>
                    <span>Verificar mi zona por WhatsApp</span>
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