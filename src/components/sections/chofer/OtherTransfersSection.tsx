import React from 'react';
import { MainContainer } from '@/components/layout/MainContainer';

interface OtherTransfersProps {
  whatsappNumber: string;
}

export const OtherTransfersSection: React.FC<OtherTransfersProps> = ({ whatsappNumber }) => {
  const text = encodeURIComponent("Hola, quiero consultar un traslado fijo recurrente. Motivo: … Origen y destino: … Días y horarios: …");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

  return (
    <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
      <MainContainer className="max-w-4xl text-center space-y-6">
        <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Otras necesidades</span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">¿Necesitás un traslado fijo recurrente por otro motivo?</h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
          Además de los traslados laborales, coordinamos traslados privados fijos y recurrentes para otros recorridos. Contanos qué necesitás, con qué frecuencia y en qué horario, y revisamos si entra en nuestra agenda (9 a 13 h y 15 a 21 h).
        </p>
        <div className="pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-500/40 font-semibold px-6 py-3 rounded-xl transition-all inline-flex items-center space-x-2 text-sm cursor-pointer shadow"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            <span>Consultar otro traslado fijo</span>
          </a>
        </div>
      </MainContainer>
    </section>
  );
};
