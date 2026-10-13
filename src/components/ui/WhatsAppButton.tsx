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
        className="bg-[#25D366] hover:bg-[#20ba5a] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-3xl transition-transform hover:scale-110 focus:outline-none cursor-pointer" 
        aria-label="Consultar por WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </button>
    </div>
  );
};
