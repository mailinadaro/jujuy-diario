'use client';
import React, { useState } from 'react';
import { MainContainer } from '@/components/layout/MainContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export const FaqSection = () => {
  const [openIds, setOpenIds] = useState<Set<number>>(() => new Set([1, 2]));

  const faqs = [
    { id: 1, q: '¿Cuánto cuesta el servicio?', a: 'Cobramos por semana, según el plan: Plan 2 viajes diarios, de $60 mil a $80 mil pesos; Plan 4 viajes diarios (horario cortado), de $120 mil a $160 mil pesos. Valores a Octubre-Noviembre 2026. Te confirmamos el monto exacto por WhatsApp antes de empezar.' },
    {
      id: 2,
      q: '¿Qué barrios están cubiertos?',
      a: 'Cubrimos barrios organizados en 3 zonas, con tarifa por zona. Mirá la lista completa y el mapa detallado en Tarifas y Zonas. Si el tuyo no figura, escribinos y evaluamos tu recorrido.',
      href: '#zonas-cobertura',
      linkText: 'Ver lista de barrios y mapa en Tarifas y Zonas'
    },
    { id: 3, q: '¿Puedo contratar traslados de ida y vuelta?', a: 'Sí. El Plan 2 viajes diarios incluye ida y vuelta, y el Plan 4 viajes diarios cubre además el horario cortado. Se coordina según tus horarios, dentro de nuestro horario de trabajo (9 a 13 h y 15 a 21 h).' },
    { id: 4, q: '¿Puedo coordinar viajes de lunes a viernes?', a: 'Sí, el servicio está pensado para días laborales. No se presta servicio los sábados.' },
    { id: 5, q: '¿Qué pasa si tengo un horario laboral cortado?', a: 'Para eso está el Plan 4 viajes diarios: ida a la mañana, vuelta al mediodía, ida de regreso y vuelta a la tarde, siempre dentro de 9 a 13 h y de 15 a 21 h. Se confirma según disponibilidad.' },
    {
      id: 6,
      q: '¿Hacen traslados fijos que no sean laborales?',
      a: 'Sí, siempre que sean recorridos recurrentes y entren en nuestra agenda (lunes a viernes, de 9 a 13 h y de 15 a 21 h). Contanos qué necesitás, con qué frecuencia y en qué horario, y te confirmamos por WhatsApp si podemos cubrirlo y cuánto cuesta.',
      href: buildWhatsAppUrl('Hola Sergio, quiero consultar un traslado fijo recurrente.\n\nMotivo: \nOrigen y destino: \nDías y horarios: '),
      linkText: 'Consultar otro traslado fijo por WhatsApp'
    },
    { id: 7, q: '¿Cómo confirmo si hay disponibilidad?', a: 'Escribinos por WhatsApp con tu barrio, tu destino y tus horarios. Revisamos nuestra agenda y te respondemos en el día.' },
    { id: 8, q: '¿Qué pasa si un día no viajo?', a: 'Avisanos con 24 horas de anticipación y ese día se descuenta o reprograma.' },
    { id: 9, q: '¿Cómo y cuándo pago?', a: 'Forma de pago: transferencia. Se abona por semana adelantada.' },
    { id: 10, q: '¿El vehículo tiene seguro?', a: 'Sí. El Fiat Cronos 2024 cuenta con seguro vigente.' }
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
                  type="button"
                  onClick={() => {
                    setOpenIds((currentOpenIds) => {
                      const nextOpenIds = new Set(currentOpenIds);
                      if (nextOpenIds.has(faq.id)) {
                        nextOpenIds.delete(faq.id);
                      } else {
                        nextOpenIds.add(faq.id);
                      }
                      return nextOpenIds;
                    });
                  }}
                  id={`faq-question-${faq.id}`}
                  aria-expanded={openIds.has(faq.id)}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full min-h-11 p-6 text-left font-medium text-base sm:text-lg text-slate-900 flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset cursor-pointer gap-4"
                >
                  <span>{faq.q}</span>
                  <i className={`fa-solid fa-chevron-down text-amber-600 text-sm transition-transform duration-300 shrink-0 ${openIds.has(faq.id) ? 'rotate-180' : ''}`}></i>
                </button>
                {openIds.has(faq.id) && (
                  <div id={`faq-answer-${faq.id}`} role="region" aria-labelledby={`faq-question-${faq.id}`} className="px-6 pb-6 text-sm text-slate-600 font-light leading-relaxed border-t border-slate-100 pt-4">
                    <p>{faq.a}</p>
                    {faq.href && (
                      <a
                        href={faq.href}
                        target={faq.href.startsWith('http') ? '_blank' : undefined}
                        rel={faq.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="mt-4 inline-flex min-h-11 items-center text-amber-600 underline underline-offset-4 transition-colors hover:text-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
                      >
                        {faq.linkText || 'Consultar más información'}
                      </a>
                    )}
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