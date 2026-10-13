# Especificación Técnica - Landing Page Chofer Privado Adaro Viajes

## 1. Stack Tecnológico
- Next.js 15 (App Router, TypeScript)
- Tailwind CSS v4
- GSAP + @gsap/react + Lenis (Animaciones de scroll fluidas)

## 2. Estructura de Componentes
- `src/components/ui/SectionHeader.tsx` (Átomo de cabecera)
- `src/components/layout/MainContainer.tsx` (Esqueleto estructural)
- `src/components/animations/ScrollReveal.tsx` (Wrapper GSAP)
- `src/components/sections/globales/Navigation.tsx` (Header fijo)
- `src/components/sections/globales/Footer.tsx` (Pie de página)
- `src/components/sections/chofer/` (Hero, Problem, Benefits, HowItWorks, Coverage, Routine, Faq, Cta)
- `src/data/chofer-privado.json` (Fuente de verdad)
