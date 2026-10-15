import React from 'react';
import Image from 'next/image';
import { MainContainer } from '@/components/layout/MainContainer';
import data from '@/data/chofer-privado.json';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const whatsappMessage = 'Hola Sergio, quiero consultar un recorrido.\n\nBarrio: \nDirección de mi trabajo: \nHorario de entrada: \nHorario de salida: ';
const whatsappUrl = buildWhatsAppUrl(whatsappMessage, data.whatsapp);

export const Footer = () => {
  return (
    <footer aria-label="Pie de página de Adaro Viajes" className="bg-slate-950 border-t border-slate-900 text-slate-400 py-16 pb-20 text-xs tracking-wide">
      <MainContainer>
        {/* Contenido Superior en 2 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left items-start pb-12 border-b border-slate-900">
          
          {/* Columna 1: Logo y descripción */}
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <div className="relative h-16 w-32">
              <Image
                src="/logoADARO.svg"
                alt="Adaro Viajes"
                fill
                sizes="128px"
                className="object-contain object-left"
              />
            </div>
            <p className="text-white font-medium tracking-widest uppercase">
              <span className="text-amber-500 font-light block md:inline">· Chofer privado en San Salvador de Jujuy</span>
            </p>
            <p className="text-slate-500 font-light text-[11px] leading-relaxed max-w-sm">
              Traslados diarios programados en San Salvador de Jujuy con puntualidad, confort y previsibilidad.
            </p>
          </div>

          {/* Columna 2: Contacto y Horarios de Atención */}
          <div className="space-y-2 flex flex-col items-center md:items-end md:text-right">
            <p className="font-light">
              WhatsApp:{' '}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Consultar un recorrido por WhatsApp"
                className="inline-flex min-h-11 items-center text-slate-300 hover:text-amber-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 transition-colors underline underline-offset-4"
              >
                {data.whatsapp}
              </a>
            </p>
            <p className="text-slate-500 font-light"><span className='font-medium'>Atención:</span> Lunes a viernes de 9 a 13 h y de 15 a 21 h</p>
          </div>

        </div>

        {/* Línea Inferior: Copyright, Políticas y Créditos en una sola línea */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-1 text-center text-slate-500 font-light text-[11px]">
          <p>© 2026 Adaro Viajes. Todos los derechos reservados.</p>
          
          <div>
            <a
              href="/politicas-de-cancelacion"
              className="inline-flex min-h-11 items-center text-slate-400 hover:text-amber-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 transition-colors font-light underline underline-offset-4"
            >
              Políticas de cancelación y condiciones del servicio
            </a>
          </div>

          <p>
            Diseñado y desarrollado por{' '}
            <a
              href="https://www.linkedin.com/in/mailinadaro/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-slate-300 hover:text-amber-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 transition-colors font-normal underline underline-offset-4 decoration-slate-800 hover:decoration-amber-400/50"
            >
              Mailin Adaro
            </a>
          </p>
        </div>
      </MainContainer>
    </footer>
  );
};