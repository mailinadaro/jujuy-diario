'use client';
import React from 'react';

interface WhatsAppButtonProps {
  whatsappNumber: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ whatsappNumber }) => {
  const openWhatsApp = () => {
    const text = encodeURIComponent("Hola, quiero consultar por disponibilidad de traslados y tarifa para mi recorrido al centro.");
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Botón flotante fijo para Mobile con texto exacto */}
      <div className="fixed bottom-4 inset-x-4 z-50 md:hidden flex justify-center pointer-events-none">
        <button 
          onClick={openWhatsApp} 
          className="pointer-events-auto w-full max-w-sm bg-[#25D366] hover:bg-[#22bf5b] text-slate-950 font-medium py-3.5 px-6 rounded-full shadow-2xl shadow-emerald-950/80 ring-1 ring-white/30 flex items-center justify-center space-x-2.5 text-sm tracking-wide transition-all active:scale-95 focus:outline-none cursor-pointer" 
          aria-label="Escribir por WhatsApp"
        >
          <i className="fa-brands fa-whatsapp text-2xl"></i>
          <span className="font-semibold">Escribir por WhatsApp</span>
        </button>
      </div>

      {/* Botón flotante para Desktop */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <button 
          onClick={openWhatsApp} 
          className="bg-[#25D366] hover:bg-[#22bf5b] text-white w-14 h-14 rounded-full shadow-2xl shadow-emerald-950/60 ring-1 ring-white/25 flex items-center justify-center text-3xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer" 
          aria-label="Escribir por WhatsApp"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </button>
      </div>
    </>
  );
};
