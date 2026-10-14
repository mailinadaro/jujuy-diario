import React from 'react';
import Image from 'next/image';
import { MainContainer } from '@/components/layout/MainContainer';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const FounderSection = () => {
  return (
    <section id="quien-te-lleva" className="relative min-h-[80vh] flex items-center py-28 lg:py-36 text-white overflow-hidden">
      {/* Fondo editorial con imagen inmersiva */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/chofer02.jpg" 
          alt="Sergio, chofer de Adaro Viajes, junto al vehículo del servicio." 
          fill 
          className="object-cover object-center brightness-60 scale-105 transform duration-1000"
        />
        {/* Gradiente asimétrico para oscurecer más a la derecha y dejar libre la izquierda */}
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-950/60 to-slate-950/90"></div>
      </div>

      <MainContainer className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Espacio libre a la izquierda para que se luzca esa zona de la foto */}
          <div className="hidden lg:block lg:col-span-6"></div>

          {/* Columna de contenido ubicada en el lateral derecho */}
          <div className="lg:col-span-6 text-left space-y-6">
            <ScrollReveal>
              <div className="space-y-4 bg-slate-950/70 p-8 sm:p-10 rounded-2xl border border-slate-800/80 backdrop-blur-md shadow-2xl">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase bg-slate-900/90 text-amber-400 border border-amber-500/30 shadow-sm">
                  <i className="fa-solid fa-user-tie"></i> Quién te lleva
                </span>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight">
                  Sergio, más de 30 años <br className="hidden sm:inline" />
                  <span className="font-normal text-white">haciendo traslados.</span>
                </h2>

                <p className="text-slate-200 text-base sm:text-lg font-light leading-relaxed pt-2">
                  Trabajó años trasladando personal de empresas y también turistas por Jujuy. Conoce la ciudad, los horarios del centro y lo que significa llegar a tiempo todos los días.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};