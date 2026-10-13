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
    <section className="relative bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-20 lg:py-28 overflow-hidden">
      <MainContainer className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-amber-400 border border-amber-500/30">
              <i className="fa-solid fa-location-dot"></i> San Salvador de Jujuy
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Tu día laboral, sin las complicaciones de llevar el auto al centro.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Coordiná tus traslados desde barrios cercanos al centro de San Salvador de Jujuy. Consultá por tus horarios, verificá la cobertura y conocé la tarifa antes de confirmar.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={openWhatsApp} 
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-3 text-base cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-2xl"></i>
                <span>Consultar mi recorrido por WhatsApp</span>
              </button>
            </div>
            <p className="text-xs text-slate-400">
              Servicio sujeto a disponibilidad de recorrido y horario.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900 p-3">
              <div className="relative h-72 sm:h-80 rounded-xl overflow-hidden bg-slate-950">
                <Image 
                  src="/Chofer.jpg" 
                  alt="Vehículo moderno y cuidado para traslados en Jujuy" 
                  fill 
                  priority
                  className="object-cover opacity-90" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="bg-amber-500 text-slate-950 text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">Atención personalizada</span>
                  <p className="text-sm font-medium mt-2">Traslados programados con vehículo limpio y cómodo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};
