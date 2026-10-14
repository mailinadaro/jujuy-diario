'use client';
import React from 'react';
import { MainContainer } from '@/components/layout/MainContainer';

export const QuickSnippets = () => {
  const snippets = [
    { label: 'Beneficios', href: '#beneficios', icon: 'fa-star' },
    { label: 'Cómo Funciona', href: '#como-funciona', icon: 'fa-route' },
    { label: 'Quién te lleva', href: '#quien-te-lleva', icon: 'fa-user-tie' },
    { label: 'Cobertura', href: '#cobertura', icon: 'fa-location-dot' },
    { label: 'Precio', href: '#precio', icon: 'fa-wallet' },
    { label: 'Preguntas', href: '#faq', icon: 'fa-circle-question' }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-slate-900 border-b border-slate-800 py-3 text-white sticky top-24 z-30 backdrop-blur-md bg-opacity-95 shadow-lg">
      <MainContainer>
        <div className="flex items-center justify-start md:justify-center overflow-x-auto space-x-2 md:space-x-4 no-scrollbar py-1">
          <span className="text-[10px] tracking-widest uppercase text-amber-400 font-semibold hidden md:inline-block mr-2">
            Atajos rápidos:
          </span>
          {snippets.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-light tracking-wide bg-slate-800/80 hover:bg-amber-500 hover:text-slate-950 text-slate-200 border border-slate-700 hover:border-amber-500 transition-all whitespace-nowrap shadow-sm cursor-pointer"
            >
              <i className={`fa-solid ${item.icon} text-[10px] text-amber-400`}></i>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </MainContainer>
    </div>
  );
};
