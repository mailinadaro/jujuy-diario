'use client';

import React from 'react';
import { MainContainer } from '@/components/layout/MainContainer';

interface CoverageProps {
  whatsappNumber: string;
}

export const CoverageSection: React.FC<CoverageProps> = ({ whatsappNumber }) => {
  const openWhatsApp = (msg: string) => {
    const text = encodeURIComponent(msg);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="cobertura" className="py-20 bg-slate-900 text-white">
      <MainContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Enfoque local</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Pensado para quienes trabajan en el centro de Jujuy.</h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Nuestro servicio está diseñado específicamente para empleados, comerciantes y profesionales que residen en barrios cercanos y necesitan una solución de transporte previsible, seria y ordenada para cumplir sus horarios laborales sin depender de manejar todos los días.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="text-amber-400 mt-1"><i className="fa-solid fa-circle-check"></i></div>
                <p className="text-sm text-slate-200">Ideal para traslados desde barrios residenciales hacia el casco céntrico comercial y administrativo.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-amber-400 mt-1"><i className="fa-solid fa-circle-check"></i></div>
                <p className="text-sm text-slate-200">Opción perfecta para quienes tienen horarios fijos de ingreso y salida.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-xl space-y-6">
              <div className="flex items-center space-x-3 text-amber-400">
                <i className="fa-solid fa-triangle-exclamation text-xl"></i>
                <h3 className="text-lg font-bold text-white">Aclaración importante sobre cobertura</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed italic border-l-2 border-amber-500 pl-4">
                “La cobertura se limita a recorridos compatibles con la operación del servicio. Las direcciones y los horarios se confirman por WhatsApp. No se incluyen zonas periféricas.”
              </p>
              <div className="pt-2">
                <button 
                  onClick={() => openWhatsApp('Hola, quiero verificar si mi barrio tiene cobertura y consultar tarifa.')} 
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center space-x-2 text-sm shadow cursor-pointer"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  <span>Verificar mi zona por WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};
