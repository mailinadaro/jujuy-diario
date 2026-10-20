import React from 'react';
import type { Metadata } from 'next';
import { MainContainer } from '@/components/layout/MainContainer';
import { Navigation } from '@/components/sections/globales/Navigation';
import { Footer } from '@/components/sections/globales/Footer';
import data from '@/data/chofer-privado.json';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Condiciones del servicio y políticas de cancelación | Adaro Viajes',
  description: 'Términos, políticas de cancelación, compromisos del chofer y condiciones operativas de los traslados diarios en San Salvador de Jujuy.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  alternates: {
    canonical: 'https://www.adaroviajes.com/politicas-de-cancelacion',
  },
};

export default function PoliciesPage() {
  const whatsappNumber = data.whatsapp;
  const whatsappUrl = buildWhatsAppUrl(
    'Hola Sergio, tengo una consulta sobre las condiciones del servicio y políticas de cancelación.',
    whatsappNumber
  );

  return (
    <main className="bg-slate-50 text-slate-800 antialiased selection:bg-amber-500 selection:text-slate-950 font-sans min-h-screen flex flex-col justify-between">
      <Navigation whatsappNumber={whatsappNumber} />
      
      <div className="py-20 px-6 grow">
        <MainContainer className="max-w-4xl bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="mb-10 border-b border-slate-100 pb-6">
            <span className="text-xs uppercase tracking-[0.2em] text-amber-600 font-semibold block mb-2">
              Adaro Viajes · Condiciones del servicio
            </span>
            <h1 className="text-3xl sm:text-4xl font-light text-slate-900 tracking-tight">
              Condiciones del servicio y políticas de cancelación
            </h1>
            <p className="text-slate-500 text-sm font-light mt-2">
              Transparencia, reciprocidad y previsibilidad para coordinar nuestros traslados diarios en San Salvador de Jujuy.
            </p>
          </div>

          <div className="space-y-10 text-slate-700 font-light text-sm leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900 border-l-2 border-amber-500 pl-3">
                1. Cancelaciones por parte del pasajero
              </h2>
              <p>
                Para garantizar la previsibilidad operativa y la reserva de cupo del vehículo, las cancelaciones de viajes programados deben avisarse con un mínimo de <strong>24 horas de anticipación</strong>. Las cancelaciones fuera de término o imprevistos de última hora se considerarán como servicio reservado y no son reintegrables.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900 border-l-2 border-amber-500 pl-3">
                2. Ausencias y viajes no utilizados
              </h2>
              <p>
                En caso de ausencia del pasajero en el horario y punto acordado sin previo aviso, el tramo se dará por cumplido y ejecutado. Los viajes no utilizados por razones personales ajenas a la operación del servicio no son acumulables ni se descuentan de las tarifas semanales acordadas, salvo coordinación previa de reprogramación sujeta a disponibilidad.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900 border-l-2 border-amber-500 pl-3">
                3. Cambios de horario o de recorrido
              </h2>
              <p>
                Cualquier modificación temporal o permanente en los horarios de ingreso/salida o en las direcciones de origen y destino debe solicitarse con la mayor anticipación posible vía WhatsApp. Los cambios quedan sujetos a la viabilidad de la agenda de operaciones del servicio.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900 border-l-2 border-amber-500 pl-3">
                4. Modalidad de pago
              </h2>
              <p>
                La modalidad de cobro se efectúa de manera <strong>semanal (adelantada)</strong> mediante transferencia bancaria en el día acordado al iniciar el servicio. En caso de retrasos en el pago superiores a 48 horas sin aviso previo, el servicio quedará suspendido temporalmente hasta regularizar la situación.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900 border-l-2 border-amber-500 pl-3">
                5. Compromiso del chofer y cancelaciones operativas
              </h2>
              <p>
                La puntualidad y la confianza mutua son el pilar de nuestro servicio. Si por razones de fuerza mayor, desperfecto mecánico o imprevisto de salud el chofer no pudiera realizar un viaje programado, nos comunicaremos de inmediato por WhatsApp para dar aviso: dicho tramo será <strong>reprogramado sin costo adicional o descontado proporcionalmente</strong> de la tarifa semanal correspondiente.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900 border-l-2 border-amber-500 pl-3">
                6. Clima, cortes de tránsito e imprevistos de la ciudad
              </h2>
              <p>
                Ante cortes de puente, manifestaciones, anegamientos o cortes de tránsito masivos en San Salvador de Jujuy, nos comunicaremos a la brevedad por WhatsApp para evaluar alternativas de recorrido seguras o coordinar la reprogramación de la jornada según corresponda.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900 border-l-2 border-amber-500 pl-3">
                7. Horario de traslados y alcance geográfico
              </h2>
              <p>
                El horario de traslados opera de lunes a viernes de <strong>9 a 13 h</strong> y de <strong>15 a 21 h</strong>. El servicio se presta estrictamente dentro del radio urbano y barrios zonificados acordados de San Salvador de Jujuy en nuestro Fiat Cronos 2024 con seguro habilitado.
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-lg font-medium text-slate-900 border-l-2 border-amber-500 pl-3">
                8. Contacto directo
              </h2>
              <p>
                Para cualquier duda sobre estas condiciones o para coordinar una rutina personalizada, podés comunicarte directamente con Sergio:
              </p>
              <div className="pt-2">
                <a 
                  href={whatsappUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-medium px-5 py-3 rounded-xl transition-all shadow-sm text-sm cursor-pointer"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  <span>Escribir por WhatsApp</span>
                </a>
              </div>
            </section>

          </div>
        </MainContainer>
      </div>

      <Footer />
    </main>
  );
}