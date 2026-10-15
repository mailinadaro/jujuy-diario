import React from 'react';
import Image from 'next/image';
import { MainContainer } from '@/components/layout/MainContainer';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

interface CoverageProps {
  whatsappNumber: string;
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

export const Zones: React.FC<CoverageProps> = ({ whatsappNumber }) => {
  const text = encodeURIComponent('Hola, quiero verificar si mi barrio tiene cobertura y consultar tarifa.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

  return (
    <section id="cobertura" className="scroll-mt-24 py-24 lg:py-32 bg-slate-900 text-white">
      <MainContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="space-y-6">
                <span className="text-amber-400 font-medium text-xs tracking-widest uppercase">Área Operativa y Tarifas</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">Zonas de cobertura y tarifas por viaje</h2>
                <p className="text-slate-300 text-base font-light leading-relaxed">
                  Conocé la zonificación establecida para los traslados diarios de lunes a viernes hacia el centro de San Salvador de Jujuy.
                </p>

                <div className="space-y-4 pt-2">
                  {zonasCubiertas.map((zoneData) => (
                    <div key={zoneData.zone} className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                        <h3 className="text-lg font-semibold text-white">{zoneData.zone}</h3>
                        <span className="text-amber-400 font-bold text-base">{zoneData.price}</span>
                      </div>
                      <p className="text-xs font-medium text-slate-400 mb-2">Barrios incluidos:</p>
                      <ul className="flex flex-wrap gap-2" aria-label={`Barrios de ${zoneData.zone}`}>
                        {zoneData.barrios.map((barrio) => (
                          <li
                            key={barrio}
                            className="rounded-full border border-slate-600 bg-slate-900 px-3 py-1.5 text-xs text-slate-200"
                          >
                            {barrio}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-950/40 border border-amber-600/40 rounded-xl p-4 text-amber-200 text-xs sm:text-sm space-y-1">
                  <p className="font-semibold">Aclaración importante sobre cobertura:</p>
                  <p className="leading-relaxed text-amber-300/90">
                    Las direcciones y los horarios se confirman por WhatsApp. La cobertura se limita a recorridos compatibles con la operación del servicio. No se incluyen zonas periféricas.
                  </p>
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
              <div className="relative h-80 overflow-hidden rounded-2xl border border-slate-700/80 shadow-xl sm:h-[450px]">
                <Image
                  src="/mapa-jujuy-capital.jpg"
                  alt="Fiat Cronos de Adaro Viajes"
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