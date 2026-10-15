import React from 'react';
import Image from 'next/image';
import { MainContainer } from '@/components/layout/MainContainer';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

interface CoverageProps {
  whatsappNumber: string;
}

const barriosCubiertos: string[] = [
  // COMPLETAR: un string por barrio, por ejemplo "Barrio 1"
];

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
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">¿Llegamos a tu barrio?</h2>
                <p className="text-slate-300 text-base font-light leading-relaxed">
                  Cubrimos recorridos desde barrios cercanos al centro de San Salvador de Jujuy, de lunes a viernes.
                </p>

                {barriosCubiertos.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h3 className="text-sm font-medium text-white">Barrios cubiertos</h3>
                    <ul className="flex flex-wrap gap-2" aria-label="Barrios cubiertos">
                      {barriosCubiertos.map((barrio) => (
                        <li
                          key={barrio}
                          className="rounded-full border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-slate-100"
                        >
                          {barrio}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <p className="text-sm text-slate-300 font-light leading-relaxed border-l-2 border-amber-500 pl-4 bg-slate-800/80 py-3 pr-3 rounded-r-lg">
                  ¿No ves tu barrio? Consultanos igual: las direcciones y horarios se confirman por WhatsApp. No cubrimos zonas periféricas.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Verificar mi zona por WhatsApp"
                  className="w-full min-h-11 bg-amber-500 hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 text-slate-950 font-medium py-3.5 px-6 rounded-xl transition-all flex items-center justify-center space-x-2 text-sm shadow cursor-pointer"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  <span>Verificar mi zona por WhatsApp</span>
                </a>
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