import React from 'react';
import { MainContainer } from '@/components/layout/MainContainer';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12 text-sm">
      <MainContainer className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded bg-amber-500 flex items-center justify-center text-slate-950 font-bold">
            <i className="fa-solid fa-car-side text-sm"></i>
          </div>
          <div>
            <span className="text-white font-bold tracking-tight block leading-tight">ADARO VIAJES</span>
            <span className="text-[10px] text-amber-400 tracking-widest uppercase">CHOFER PRIVADO · JUJUY</span>
          </div>
        </div>
        <p className="text-xs text-center md:text-left">
          © 2026 Adaro Viajes. San Salvador de Jujuy, Argentina. Todos los derechos reservados.
        </p>
        <div className="flex space-x-6 text-xs">
          <a href="#beneficios" className="hover:text-amber-400 transition-colors">Servicio</a>
          <a href="#cobertura" className="hover:text-amber-400 transition-colors">Cobertura</a>
          <a href="#faq" className="hover:text-amber-400 transition-colors">Preguntas Frecuentes</a>
        </div>
      </MainContainer>
    </footer>
  );
};
