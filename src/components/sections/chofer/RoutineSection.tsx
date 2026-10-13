'use client';

import React from 'react';
import { MainContainer } from '@/components/layout/MainContainer';

interface RoutineProps {
  whatsappNumber: string;
}

export const RoutineSection: React.FC<RoutineProps> = ({ whatsappNumber }) => {
  const openWhatsApp = () => {
    const text = encodeURIComponent("Hola, quiero consultar el precio y disponibilidad para mi recorrido.");
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <MainContainer className="text-center space-y-8">
        <div className="space-y-4">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Organización y previsibilidad</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Un servicio coordinado según tu rutina.</h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            La mejor manera de evaluar si el chofer privado se adapta a tu día a día es analizar conjuntamente tus necesidades de traslado, evitando sorpresas y asegurando puntualidad.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-8 sm:p-10 rounded-2xl shadow-sm text-left max-w-2xl mx-auto space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center text-xl shrink-0">
              <i className="fa-solid fa-handshake-angle"></i>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Acuerdo directo y transparente</h3>
              <p className="text-xs text-slate-500">Sin intermediarios ni tarifas ocultas.</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Conversamos directamente por WhatsApp para coordinar los detalles de tu recorrido laboral. Evaluamos disponibilidad de horarios y te brindamos una tarifa clara acordada previamente.
          </p>
          <div className="pt-2 text-center">
            <button 
              onClick={openWhatsApp} 
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-xl transition-all inline-flex items-center justify-center space-x-2 text-sm shadow cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp text-amber-400 text-lg"></i>
              <span>Consultar tarifa de mi recorrido</span>
            </button>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};
