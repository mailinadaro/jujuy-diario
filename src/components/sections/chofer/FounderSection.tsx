import React from 'react';
import Image from 'next/image';
import { MainContainer } from '@/components/layout/MainContainer';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const FounderSection = () => {
  return (
    <section id="quien-te-lleva" className="relative min-h-[85vh] flex items-center py-20 lg:py-36 bg-slate-950 lg:bg-transparent text-white overflow-hidden">
      {/* En desktop: fondo editorial inmersivo a pantalla completa con Sergio a la izquierda */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <Image 
          src="/chofer02.jpg" 
          alt="Sergio, chofer de Adaro Viajes, junto al vehículo del servicio." 
          fill 
          priority
          sizes="100vw"
          className="object-cover object-left brightness-90 duration-1000"
        />
        {/* Gradiente refinado en desktop que da contraste a la columna de texto derecha */}
        <div className="absolute inset-0 bg-slate-950/10"></div>
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-slate-950/20 to-slate-950/80"></div>
      </div>

      <MainContainer className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Espacio libre a la izquierda (7 cols en pantallas grandes) para lucir el retrato de Sergio */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-7"></div>

          {/* Columna de contenido */}
          <div className="lg:col-span-6 xl:col-span-5 text-left space-y-6">
            <ScrollReveal>
              {/* En Mobile: Foto de Sergio nítida y destacada arriba del texto para generar confianza inmediata */}
              <div className="block lg:hidden relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl mb-6">
                <Image
                  src="/chofer02.jpg"
                  alt="Sergio, chofer titular de Adaro Viajes"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-[30%_25%]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-200">
                  <span className="font-medium bg-slate-900/90 px-3 py-1 rounded-md border border-slate-700 text-[11px]">
                    Sergio • Chofer Titular
                  </span>
                  <span className="bg-amber-500 text-slate-950 font-bold px-2.5 py-0.5 rounded text-[11px] shadow-sm">
                    +30 años de experiencia
                  </span>
                </div>
              </div>

              {/* Tarjeta de contenido */}
              <div className="space-y-4 bg-slate-900/80 lg:bg-slate-950/60 p-6 sm:p-8 lg:p-10 rounded-2xl border border-slate-800/80 backdrop-blur-md shadow-2xl">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium tracking-widest uppercase bg-slate-900/90 text-amber-400 border border-amber-500/30 shadow-sm">
                  <i className="fa-solid fa-user-tie"></i> Quién te lleva
                </span>
                
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight">
                  Sergio, más de 30 años <br className="hidden sm:inline" />
                  <span className="font-normal text-white">haciendo traslados.</span>
                </h2>

                <p className="text-slate-200 text-sm sm:text-base lg:text-lg font-light leading-relaxed pt-2">
                  Trabajó años trasladando personal de empresas y también turistas por Jujuy. Conoce la ciudad, los horarios del centro y lo que significa llegar a tiempo todos los días.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-slate-300">
                  <span className="bg-slate-800/80 border border-slate-700/60 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <i className="fa-solid fa-shield-halved text-amber-400"></i> Trato personal y directo
                  </span>
                  <span className="bg-slate-800/80 border border-slate-700/60 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <i className="fa-solid fa-clock text-amber-400"></i> Puntualidad garantizada
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </MainContainer>
    </section>
  );
};