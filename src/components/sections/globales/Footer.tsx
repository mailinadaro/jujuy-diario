import React from 'react';
import { MainContainer } from '@/components/layout/MainContainer';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-16 text-xs tracking-wide">
      <MainContainer className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3 text-center md:text-left">
          <span className="text-white font-medium tracking-widest uppercase">
            Adaro Viajes <span className="text-amber-500 font-light">· Jujuy</span>
          </span>
          <span className="hidden md:inline text-slate-600">/</span>
          <span className="text-slate-500 font-light">
            © 2026 Todos los derechos reservados.
          </span>
        </div>

        {/* Enlace a Políticas y Condiciones */}
        <div className="flex items-center space-x-6">
          <a 
            href="/politicas" 
            className="text-slate-400 hover:text-amber-400 transition-colors font-light"
          >
            Políticas de cancelación y servicio
          </a>
        </div>

        <div className="text-slate-500 font-light">
          Diseñado y desarrollado por{' '}
          <a 
            href="https://www.linkedin.com/in/mailinadaro/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-300 hover:text-amber-400 transition-colors font-normal underline underline-offset-4 decoration-slate-800 hover:decoration-amber-400/50"
          >
            Mailin Adaro
          </a>
        </div>
      </MainContainer>
    </footer>
  );
};