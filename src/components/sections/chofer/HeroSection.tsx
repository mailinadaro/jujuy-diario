'use client';
import React from 'react';
import Image from 'next/image';
import { MainContainer } from '@/components/layout/MainContainer';

interface HeroProps {
  whatsappNumber: string;
}

export const HeroSection: React.FC<HeroProps> = ({ whatsappNumber }) => {
  const openWhatsApp = () => {
    const text = encodeURIComponent(
      "Hola, quiero consultar por el servicio de chofer privado.\n" +
      "Mi barrio de origen es: \n" +
      "Mi destino laboral es: \n" +
      "Mi horario de ingreso es: \n" +
      "Mi horario de salida es: \n" +
      "¿Podrían confirmarme si tienen cobertura y pasarme una tarifa?"
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Imagen de fondo a todo el alto y ancho con tratamiento editorial oscuro */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/heroCronos03.png" 
          alt="Chofer privado en San Salvador de Jujuy" 
          fill 
          priority
          className="object-cover object-center scale-105 transform duration-1000" 
        />
        {/* Capas de gradiente editorial para asegurar legibilidad impecable y estilo de revista de alta gama */}
        <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/5 to-transparent"></div>
      </div>

      <MainContainer className="relative z-10 py-24 lg:py-32 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase bg-slate-900/80 text-amber-400 border border-amber-500/30 backdrop-blur-md shadow-sm">
            <i className="fa-solid fa-location-dot"></i> San Salvador de Jujuy
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1]">
            Tu día laboral, <br className="hidden sm:inline" />
            <span className="font-normal text-white">sin el estrés del centro.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed max-w-2xl mx-auto">
            Coordiná tus traslados diarios desde barrios cercanos al microcentro. Previsibilidad, confort y puntualidad para que tu única preocupación sea trabajar.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={openWhatsApp} 
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-8 py-4 rounded-xl shadow-xl transition-all flex items-center justify-center space-x-3 text-base cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp text-2xl"></i>
              <span>Consultar mi recorrido por WhatsApp</span>
            </button>
          </div>

          <p className="text-xs text-slate-400 font-light tracking-wide pt-2">
            Servicio sujeto a disponibilidad de recorrido y horario operativo.
          </p>
        </div>
      </MainContainer>
    </section>
  );
};