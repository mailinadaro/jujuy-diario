'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { MainContainer } from '@/components/layout/MainContainer';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

interface CoverageProps {
  whatsappNumber?: string;
}

interface ZoneInfo {
  zone: string;
  price: string;
  barrios: string[];
}

const zonasCubiertas: ZoneInfo[] = [
  {
    zone: 'Zona 1',
    price: '$8.000 por viaje',
    barrios: ['Alto Comedero', 'Malvinas', '13 de Junio', 'Antártida'],
  },
  {
    zone: 'Zona 2',
    price: '$7.000 por viaje',
    barrios: ['La Viña', 'Los Perales', 'El Huayco', '23 de Agosto', 'Alto Padilla', 'San Pedrito', 'Chango Más', 'San Martín', 'Belgrano'],
  },
  {
    zone: 'Zona 3',
    price: '$6.000 por viaje',
    barrios: ['Ciudad de Nieva', 'Mariano Moreno', 'B° Kennedy', 'Cuyaya', 'Gorriti'],
  },
];

export const Zones: React.FC<CoverageProps> = ({ whatsappNumber = '543516149222' }) => {
  // Zona 1 abierta inicialmente para que el usuario perciba de inmediato la interactividad
  const [openZones, setOpenZones] = useState<Set<string>>(() => new Set(['Zona 1']));

  const toggleZone = (zone: string) => {
    setOpenZones((prev) => {
      const next = new Set(prev);
      if (next.has(zone)) {
        next.delete(zone);
      } else {
        next.add(zone);
      }
      return next;
    });
  };

  const text = encodeURIComponent('Hola, quiero verificar si mi barrio tiene cobertura y consultar tarifa.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

  return (
    <section id="zonas-cobertura" className="scroll-mt-24 py-24 lg:py-32 bg-slate-900 text-white">
      <MainContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="space-y-6">
                <span className="text-amber-400 font-medium text-xs tracking-widest uppercase">Área Operativa </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">Zonas de cobertura </h2>
                <p className="text-slate-300 text-base font-light leading-relaxed">
                  Conocé la zonificación establecida para los traslados diarios de lunes a viernes hacia el centro de San Salvador de Jujuy. Tocá cada zona para desplegar sus barrios.
                </p>

                {/* Acordeón interactivo de zonas */}
                <div className="space-y-3.5 pt-2">
                  {zonasCubiertas.map((zoneData) => {
                    const isOpen = openZones.has(zoneData.zone);
                    return (
                      <div 
                        key={zoneData.zone} 
                        className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                          isOpen 
                            ? 'bg-slate-800/95 border-amber-500/50 shadow-lg shadow-black/25 ring-1 ring-amber-500/20' 
                            : 'bg-slate-800/70 hover:bg-slate-800 border-slate-700/80 hover:border-slate-600 shadow-sm'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => toggleZone(zoneData.zone)}
                          aria-expanded={isOpen}
                          aria-controls={`zone-content-${zoneData.zone}`}
                          className="w-full p-5 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset cursor-pointer transition-colors"
                        >
                          <div className="flex items-center space-x-3.5">
                            <span className="w-9 h-9 rounded-xl bg-slate-700/70 text-amber-400 flex items-center justify-center text-sm font-semibold shrink-0 border border-slate-600/50 shadow-inner">
                              <i className="fa-solid fa-map-pin"></i>
                            </span>
                            <div className="flex items-center gap-2.5">
                              <h3 className="text-lg font-semibold text-white tracking-wide">{zoneData.zone}</h3>
                              <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-700/60 text-slate-300 border border-slate-600/40">
                                {zoneData.barrios.length} barrios
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between sm:justify-end gap-3.5 self-end sm:self-auto w-full sm:w-auto pt-2 sm:pt-0 border-t border-slate-700/40 sm:border-0">
                            <span className="text-amber-400 font-bold text-base tracking-tight">{zoneData.price}</span>
                            <div className={`w-7 h-7 rounded-full bg-slate-700/60 flex items-center justify-center text-xs transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-amber-400 bg-amber-500/20' : 'text-slate-400'}`}>
                              <i className="fa-solid fa-chevron-down"></i>
                            </div>
                          </div>
                        </button>

                        {/* Panel Desplegable con transición CSS Grid */}
                        <div 
                          id={`zone-content-${zoneData.zone}`}
                          className={`grid transition-all duration-300 ease-in-out ${
                            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="px-5 pb-5 pt-2 border-t border-slate-700/50 mt-1">
                              <p className="text-xs font-medium text-slate-400 mb-3 tracking-wide">
                                Barrios incluidos en {zoneData.zone}:
                              </p>
                              <ul className="flex flex-wrap gap-2" aria-label={`Barrios de ${zoneData.zone}`}>
                                {zoneData.barrios.map((barrio) => (
                                  <li
                                    key={barrio}
                                    className="rounded-full border border-slate-600/80 bg-slate-900/90 hover:border-amber-500/40 px-3 py-1.5 text-xs text-slate-200 transition-colors shadow-xs"
                                  >
                                    {barrio}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

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
          
          <div className="lg:col-span-5 sticky top-28">
            <ScrollReveal delay={0.2}>
              <div className="relative h-80 overflow-hidden rounded-2xl border border-slate-700/80 shadow-xl sm:h-112.5">
                <Image
                  src="/mapa-jujuy-capital.jpg"
                  alt="Mapa de zonas y recorridos en San Salvador de Jujuy"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
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