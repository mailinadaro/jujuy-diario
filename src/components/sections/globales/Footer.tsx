import { MainContainer } from '@/components/layout/MainContainer';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-8 text-xs tracking-wide">
      <MainContainer className="flex flex-col items-center gap-2 text-center">
  
        <div className="text-slate-500 font-light leading-tight">
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
        <span className="text-slate-500 font-light leading-tight">
          Adaro Viajes © 2026 Todos los derechos reservados.
        </span>

      </MainContainer>
    </footer>
  );
};