'use client';
import React from 'react';
import { MainContainer } from '@/components/layout/MainContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { useAdaroAnalytics } from '@/hooks/useAdaroAnalytics';

interface HowItWorksProps {
  whatsappNumber?: string;
}

export const HowItWorksSection: React.FC<HowItWorksProps> = ({ whatsappNumber }) => {
  const { logWhatsAppClick } = useAdaroAnalytics();
  const steps = [
    { num: 1, icon: 'fa-map-location-dot', title: 'Contanos tu recorrido', desc: 'Escribinos por WhatsApp con tu barrio, la dirección de tu trabajo y tus horarios.' },
    { num: 2, icon: 'fa-clipboard-check', title: 'Verificamos disponibilidad', desc: 'Revisamos si podemos cubrir tu trayecto con nuestra agenda. Te respondemos en el día.' }, // TODO: definir el tiempo de respuesta.
    { num: 3, icon: 'fa-handshake', title: 'Confirmamos tu tarifa', desc: 'Confirmamos tu tarifa según tu zona y coordinamos el primer viaje.' }
  ];

  const whatsappMessage = 'Hola Sergio, quiero consultar un recorrido.\n\nBarrio: \nDirección de mi trabajo: \nHorario de entrada: \nHorario de salida: ';
  const whatsappUrl = buildWhatsAppUrl(whatsappMessage, whatsappNumber);

  const handleWhatsAppClick = () => {
    logWhatsAppClick({
      location: 'how_it_works',
      buttonText: 'Coordinar mi traslado por WhatsApp',
      templateName: 'recorrido_laboral',
      targetPhone: whatsappNumber || '543516149222',
    });
  };

  return (
    <section id="como-funciona" className="py-24 lg:py-32 bg-white border-t border-slate-100">
      <MainContainer>
        <ScrollReveal>
          <SectionHeader 
            eyebrow="Simple y transparente" 
            title="¿Cómo funciona el servicio?"
            description="Tres pasos para coordinar tu traslado diario al centro."
          />
        </ScrollReveal>

        <ol aria-label="Pasos para coordinar el traslado" className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s, idx) => (
            <li key={s.num} className="h-full">
              <ScrollReveal delay={idx * 0.15} className="h-full">
                <div className="bg-slate-50 border border-slate-200/90 p-8 rounded-2xl text-center relative h-full hover:border-amber-500/40 transition-all duration-300 shadow-xs">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-sm shadow-md">{s.num}</div>
                  <div className="w-14 h-14 bg-slate-200/80 text-slate-800 rounded-xl mx-auto flex items-center justify-center text-2xl mb-6 mt-2">
                    <i className={`fa-solid ${s.icon}`}></i>
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-600 font-light text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ol>

        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Coordinar mi traslado por WhatsApp"
              onClick={handleWhatsAppClick}
              className="bg-amber-500 hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 text-slate-950 font-semibold px-8 py-4 min-h-12 rounded-xl shadow-md hover:shadow-lg transition-all inline-flex items-center space-x-3 text-base cursor-pointer group"
            >
              <i className="fa-brands fa-whatsapp text-2xl transition-transform group-hover:scale-110"></i>
              <span>Coordinar mi traslado por WhatsApp</span>
            </a>
          </div>
        </ScrollReveal>
      </MainContainer>
    </section>
  );
};
