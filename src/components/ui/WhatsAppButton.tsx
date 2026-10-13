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
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        onClick={openWhatsApp} 
        className="bg-[#25D366] hover:bg-[#22bf5b] text-white w-14 h-14 rounded-full shadow-2xl shadow-emerald-950/60 ring-1 ring-white/25 flex items-center justify-center text-3xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer" 
        aria-label="Consultar por WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </button>
    </div>
  );
};
