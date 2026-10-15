'use client';
import React, { useState } from 'react';
import { MainContainer } from '@/components/layout/MainContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const FaqSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs = [
    { id: 1, q: '¿Cuánto cuesta el servicio?', a: 'Cobramos por semana, según el plan: Plan 2 viajes diarios, de $[X] a $[X]; Plan 4 viajes diarios (horario cortado), de $[X] a $[X]. Valores a [mes y año]. Te confirmamos el monto exacto por WhatsApp antes de empezar.' }, // TODO: completar precios y mes/año.
    { id: 2, q: '¿Qué barrios están cubiertos?', a: '[Lista de barrios.] Si el tuyo no figura, escribinos y te anotamos en la lista de espera.' }, // TODO: completar la lista de barrios.
    { id: 3, q: '¿Puedo contratar traslados de ida y vuelta?', a: 'Sí. El Plan 2 viajes diarios incluye ida y vuelta, y el Plan 4 viajes diarios cubre además el horario cortado. Se coordina según tus horarios, dentro de nuestro horario de trabajo (9 a 13 h y 15 a 21 h).' },
    { id: 4, q: '¿Puedo coordinar viajes de lunes a viernes?', a: '[Sí, el servicio está pensado para días laborales. Los sábados se consultan según disponibilidad.]' }, // TODO: confirmar la disponibilidad de los sábados.
    { id: 5, q: '¿Qué pasa si tengo un horario laboral cortado?', a: 'Para eso está el Plan 4 viajes diarios: ida a la mañana, vuelta al mediodía, ida de regreso y vuelta a la tarde, siempre dentro de 9 a 13 h y de 15 a 21 h. Se confirma según disponibilidad.' },
    { id: 6, q: '¿Cómo confirmo si hay disponibilidad?', a: 'Escribinos por WhatsApp con tu barrio, tu destino y tus horarios. Revisamos nuestra agenda y te respondemos [en el día].' }, // TODO: confirmar el plazo de respuesta.
    { id: 7, q: '¿Qué pasa si un día no viajo?', a: '[Avisanos con X horas de anticipación y ese día se (descuenta / reprograma).]' }, // TODO: definir anticipación y política aplicable.
    { id: 8, q: '¿Cómo y cuándo pago?', a: '[Forma de pago: transferencia / efectivo.] Se abona por semana, [adelantada / al finalizar la semana].' }, // TODO: definir medios y momento de pago.
    { id: 9, q: '¿El vehículo tiene seguro?', a: 'Sí. El Fiat Cronos 2024 cuenta con seguro vigente [tipo de cobertura].' } // TODO: completar el tipo de cobertura.
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
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  id={`faq-question-${faq.id}`}
                  aria-expanded={openId === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full min-h-11 p-6 text-left font-medium text-base sm:text-lg text-slate-900 flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset cursor-pointer gap-4"
                >
                  <span>{faq.q}</span>
                  <i className={`fa-solid fa-chevron-down text-amber-600 text-sm transition-transform duration-300 shrink-0 ${openId === faq.id ? 'rotate-180' : ''}`}></i>
                </button>
                {openId === faq.id && (
                  <div id={`faq-answer-${faq.id}`} role="region" aria-labelledby={`faq-question-${faq.id}`} className="px-6 pb-6 text-sm text-slate-600 font-light leading-relaxed border-t border-slate-100 pt-4">
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