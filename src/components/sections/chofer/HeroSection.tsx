import React from 'react';
import Image from 'next/image';
import { MainContainer } from '@/components/layout/MainContainer';

interface HeroProps {
  whatsappNumber: string;
}

const whatsappMessage = 'Hola, quiero consultar un recorrido.\n\nBarrio: \nDirección de mi trabajo: \nHorario de entrada: \nHorario de salida: ';

export const HeroSection: React.FC<HeroProps> = ({ whatsappNumber }) => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Imagen de fondo a todo el alto y ancho con tratamiento editorial oscuro */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/heroCronos03.png" 
          alt="Chofer privado en San Salvador de Jujuy" 
          fill 
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transform duration-1000" 
        />
        {/* Capas de gradiente editorial para asegurar legibilidad impecable y estilo de revista de alta gama */}
        <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/1 to-transparent"></div>
      </div>

      <MainContainer className="relative z-10 pt-32 pb-24 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase bg-slate-900/80 text-amber-400 border border-amber-500/30 backdrop-blur-md shadow-sm">
            <i className="fa-solid fa-location-dot"></i> San Salvador de Jujuy
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] drop-shadow-[0_3px_5px_rgba(0,0,0,0.85)]">
            Tu día laboral, sin el estrés del centro.
          </h1>

          <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
            Chofer privado para ir y volver del centro de Jujuy, con horario fijo y tarifa acordada. Llegás tranquilo, sin dar vueltas buscando dónde estacionar.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {['Lunes a viernes', 'Ida y vuelta', 'Tarifa semanal fija', '+30 años de experiencia en traslados'].map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-slate-300/40 bg-slate-900/70 px-3 py-2 text-xs font-light text-slate-100 backdrop-blur-md"
              >
                {pill}
              </span>
            ))}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Consultar si llegan a mi barrio por WhatsApp"
              className="w-full sm:w-auto min-h-11 bg-amber-500 hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 text-slate-950 font-medium px-8 py-4 rounded-xl shadow-xl transition-all flex items-center justify-center space-x-3 text-base cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp text-2xl"></i>
              <span>Quiero ver si llegan a mi barrio</span>
            </a>
          </div>

          {/* Cupos limitados por recorrido. */}
          {/* TODO: activar esta frase solo si los cupos son realmente limitados. */}
          <p className="text-xs text-slate-200 font-light tracking-wide pt-2">
            Atendemos de 9 a 13 hs y de 15 a 21 hs.
          </p>
        </div>
      </MainContainer>
    </section>
  );
};