'use client';
import React, { useState } from 'react';
import { MainContainer } from '@/components/layout/MainContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const FaqSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs = [
    { id: 1, q: '¿Cuánto cuesta el servicio?', a: 'Las tarifas se comunican de forma personalizada por WhatsApp según las direcciones de origen y destino, así como los horarios requeridos para tu rutina.' },
    { id: 2, q: '¿Qué barrios están cubiertos?', a: 'Cubrimos barrios cercanos al casco céntrico de San Salvador de Jujuy. Escribinos por WhatsApp con tu dirección exacta para confirmarte si tu zona está dentro de nuestra operación habitual.' },
    { id: 3, q: '¿Puedo contratar traslados de ida y vuelta?', a: 'Consultanos por traslados de ida y vuelta. La viabilidad depende de los horarios y del recorrido.' },
    { id: 4, q: '¿Puedo coordinar viajes de lunes a viernes?', a: 'El servicio está orientado principalmente a la rutina semanal laboral. La contratación recurrente y los horarios específicos quedan sujetos a disponibilidad y confirmación.' },
    { id: 5, q: '¿Qué pasa si tengo un horario laboral cortado?', a: 'Consultanos por jornadas partidas. La viabilidad de múltiples tramos diarios depende de los horarios y de la disponibilidad operativa.' },
    { id: 6, q: '¿Cómo confirmo si hay disponibilidad?', a: 'La contratación recurrente y los horarios específicos quedan siempre sujetos a disponibilidad y confirmación previa a través de nuestro canal directo de WhatsApp.' }
  ];

  return (
    <section id="faq" className="py-24 lg:py-32 bg-slate-100 border-t border-slate-200">
      <MainContainer className="space-y-12">
        <ScrollReveal>
          <SectionHeader 
            eyebrow="Dudas habituales" 
            title="Preguntas frecuentes"
            description="Todo lo que necesitás saber antes de coordinar tus traslados."
          />
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <ScrollReveal key={faq.id} delay={idx * 0.1}>
              <div className="bg-white border border-slate-200/90 hover:border-slate-300 rounded-xl overflow-hidden shadow-xs transition-colors">
                <button 
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full p-6 text-left font-medium text-base sm:text-lg text-slate-900 flex justify-between items-center focus:outline-none cursor-pointer gap-4"
                >
                  <span>{faq.q}</span>
                  <i className={`fa-solid fa-chevron-down text-amber-600 text-sm transition-transform duration-300 shrink-0 ${openId === faq.id ? 'rotate-180' : ''}`}></i>
                </button>
                {openId === faq.id && (
                  <div className="px-6 pb-6 text-sm text-slate-600 font-light leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </MainContainer>
    </section>
  );
};