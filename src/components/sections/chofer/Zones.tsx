'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MainContainer } from '@/components/layout/MainContainer';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

interface CoverageProps {
  whatsappNumber?: string;
}

interface ZoneInfo {
  id: string;
  name: string;
  scope: string;
  priceNumber: string;
  priceUnit: string;
  priceWeekly2Trips: string;
  priceWeekly4Trips: string;
  barrios: string[];
  theme: {
    text: string;
    border: string;
    activeBorder: string;
    activeBg: string;
    pinBg: string;
    pinRing: string;
    badgeBg: string;
  };
}

interface MapMarker {
  id: string;
  label: string;
  zone: string;
  x: number; // Porcentaje horizontal (0 a 100)
  y: number; // Porcentaje vertical (0 a 100)
}

const zonasCubiertas: ZoneInfo[] = [
  {
    id: 'Zona 1',
    name: 'Zona 1',
    scope: 'Sur y mayor distancia',
    priceNumber: '$8.000',
    priceUnit: 'por viaje',
    priceWeekly2Trips: '$80.000',
    priceWeekly4Trips: '$160.000',
    barrios: ['Alto Comedero', 'Malvinas', '13 de Junio', 'Antártida'],
    theme: {
      text: 'text-amber-400',
      border: 'border-amber-500/30',
      activeBorder: 'border-amber-500/60',
      activeBg: 'bg-slate-800/90 ring-1 ring-amber-500/40',
      pinBg: 'bg-amber-400',
      pinRing: 'bg-amber-400/40',
      badgeBg: 'bg-amber-500 text-slate-950',
    },
  },
  {
    id: 'Zona 2',
    name: 'Zona 2',
    scope: 'Periferia Norte y Sur',
    priceNumber: '$7.000',
    priceUnit: 'por viaje',
    priceWeekly2Trips: '$70.000',
    priceWeekly4Trips: '$140.000',
    barrios: ['La Viña', 'Los Perales', 'El Huayco', '23 de Agosto', 'Alto Padilla', 'San Pedrito', 'Chango Más', 'San Martín', 'Belgrano'],
    theme: {
      text: 'text-sky-400',
      border: 'border-sky-500/30',
      activeBorder: 'border-sky-500/60',
      activeBg: 'bg-slate-800/90 ring-1 ring-sky-500/40',
      pinBg: 'bg-sky-400',
      pinRing: 'bg-sky-400/40',
      badgeBg: 'bg-sky-500 text-slate-950',
    },
  },
  {
    id: 'Zona 3',
    name: 'Zona 3',
    scope: 'Centro y accesos directos',
    priceNumber: '$6.000',
    priceUnit: 'por viaje',
    priceWeekly2Trips: '$60.000',
    priceWeekly4Trips: '$120.000',
    barrios: ['Ciudad de Nieva', 'Mariano Moreno', 'B° Kennedy', 'Cuyaya', 'Gorriti'],
    theme: {
      text: 'text-emerald-400',
      border: 'border-emerald-500/30',
      activeBorder: 'border-emerald-500/60',
      activeBg: 'bg-slate-800/90 ring-1 ring-emerald-500/40',
      pinBg: 'bg-emerald-400',
      pinRing: 'bg-emerald-400/40',
      badgeBg: 'bg-emerald-500 text-slate-950',
    },
  },
];

const zoneMarkers: MapMarker[] = [
  // Zona 3: Casco Céntrico y Barrios Inmediatos
  { id: 'centro', label: 'Centro Jujuy', zone: 'Zona 3', x: 52, y: 43 },
  { id: 'nieva', label: 'Ciudad de Nieva', zone: 'Zona 3', x: 44, y: 34 },
  { id: 'moreno', label: 'Mariano Moreno', zone: 'Zona 3', x: 48, y: 64 },
  { id: 'cuyaya', label: 'Cuyaya / Gorriti', zone: 'Zona 3', x: 38, y: 53 },

  // Zona 2: Periferia y Distancia Intermedia
  { id: 'perales', label: 'Los Perales / La Viña', zone: 'Zona 2', x: 50, y: 19 },
  { id: 'huayco', label: 'Alto Padilla / El Huayco', zone: 'Zona 2', x: 30, y: 22 },
  { id: 'sanmartin', label: 'San Martín / Belgrano', zone: 'Zona 2', x: 37, y: 29 },
  { id: 'sanpedrito', label: 'San Pedrito / Chango Más', zone: 'Zona 2', x: 74, y: 72 },
  { id: 'coronelarias', label: 'Coronel Arias / 23 de Agosto', zone: 'Zona 2', x: 60, y: 78 },

  // Zona 1: Sur / Mayor Distancia
  { id: 'altocomedero', label: 'Alto Comedero', zone: 'Zona 1', x: 86, y: 88 },
  { id: 'malvinas', label: 'Malvinas Argentinas', zone: 'Zona 1', x: 81, y: 80 },
  { id: 'antartida', label: 'Antártida / 13 de Junio', zone: 'Zona 1', x: 74, y: 90 },
];

type PlanMode = '2trips' | '4trips';

export const Zones: React.FC<CoverageProps> = ({ whatsappNumber = '543516149222' }) => {
  const [selectedZoneId, setSelectedZoneId] = useState<string>('Zona 1');
  const [planMode, setPlanMode] = useState<PlanMode>('2trips');
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalZoom, setModalZoom] = useState(1);

  const activeZone = zonasCubiertas.find((z) => z.id === selectedZoneId) || zonasCubiertas[0];

  const currentWeeklyPrice = planMode === '2trips' ? activeZone.priceWeekly2Trips : activeZone.priceWeekly4Trips;
  const currentPlanLabel = planMode === '2trips' ? 'Plan 2 viajes diarios (ida y vuelta)' : 'Plan 4 viajes diarios (horario cortado)';

  // Listener para la tecla Escape y bloqueo de scroll al abrir el modal
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  // Mensaje y URL dinámico e inteligente según la zona y modalidad seleccionada
  const smartWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hola Sergio, quiero consultar disponibilidad para el ${currentPlanLabel} en ${activeZone.name} (${currentWeeklyPrice}/semana). Mi barrio o dirección exacta es: `
  )}`;

  /**
   * Renderiza el visor cartográfico limpio
   */
  const renderMapCanvas = (isInsideModal = false) => {
    return (
      <div className={`relative rounded-2xl border border-slate-700/80 bg-slate-950/90 shadow-2xl p-2.5 backdrop-blur-md ring-1 ring-white/5 ${
        isInsideModal ? 'w-full max-w-5xl mx-auto' : ''
      }`}>
        {/* Barra superior HUD del Mapa */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 text-xs mb-2">
          <div className="flex items-center space-x-2">
            <span className={`w-2.5 h-2.5 rounded-full animate-pulse ${activeZone.theme.pinBg}`}></span>
            <span className="text-slate-300 font-medium tracking-wide">
              Ubicación en el mapa: <strong className="text-white">{activeZone.name}</strong>
            </span>
          </div>

          {!isInsideModal && (
            <button
              type="button"
              onClick={() => {
                setModalZoom(1);
                setIsModalOpen(true);
              }}
              className="text-amber-400 hover:text-amber-300 flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700/70 transition-all cursor-pointer text-[11px] font-medium"
              title="Ampliar mapa a pantalla completa"
              aria-label="Ampliar mapa a pantalla completa"
            >
              <i className="fa-solid fa-expand"></i>
              <span className="hidden sm:inline">Ampliar mapa</span>
            </button>
          )}
        </div>

        {/* Lienzo del Mapa con relación de aspecto que previene recortes */}
        <div className={`relative w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 ${
          isInsideModal ? 'aspect-16/10 sm:aspect-video' : 'aspect-16/10'
        }`}>
          <div
            className="relative w-full h-full transition-transform duration-300 origin-center"
            style={isInsideModal ? { transform: `scale(${modalZoom})` } : undefined}
          >
            <Image
              src="/zonas.png"
              alt="Mapa de zonificación y barrios en San Salvador de Jujuy"
              fill
              unoptimized
              sizes={isInsideModal ? '100vw' : '(min-width: 1024px) 50vw, 100vw'}
              className="object-contain filter brightness-[2.3] contrast-[1.3] saturate-[1.15] select-none"
              priority={!isInsideModal}
            />

            {/* Pines geolocalizados interactivos */}
            {zoneMarkers.map((marker) => {
              const markerZone = zonasCubiertas.find((z) => z.id === marker.zone);
              const isZoneActive = selectedZoneId === marker.zone;
              const isMarkerHovered = hoveredMarker === marker.id;

              return (
                <div
                  key={marker.id}
                  style={{ top: `${marker.y}%`, left: `${marker.x}%` }}
                  onMouseEnter={() => setHoveredMarker(marker.id)}
                  onMouseLeave={() => setHoveredMarker(null)}
                  onClick={() => setSelectedZoneId(marker.zone)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 z-10 ${
                    isZoneActive
                      ? 'opacity-100 scale-100 hover:scale-125 z-20'
                      : 'opacity-35 scale-90 hover:opacity-80 z-10'
                  }`}
                  aria-label={`${marker.label} (${marker.zone})`}
                >
                  {/* Halo pulsante para la zona seleccionada */}
                  {isZoneActive && (
                    <span className={`absolute -inset-2 rounded-full animate-ping opacity-60 ${
                      markerZone?.theme.pinRing || 'bg-amber-400/40'
                    }`}></span>
                  )}

                  {/* Punto del pin */}
                  <span className={`relative flex items-center justify-center w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border-2 border-slate-950 shadow-md ${
                    markerZone?.theme.pinBg || 'bg-amber-400'
                  } ${isZoneActive ? 'ring-2 ring-white/90 shadow-lg' : ''}`}></span>

                  {/* Tooltip flotante limpio en hover */}
                  {isMarkerHovered && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none z-30">
                      <div className="whitespace-nowrap text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-900/95 text-slate-100 border border-slate-700 shadow-2xl backdrop-blur-md flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${markerZone?.theme.pinBg}`}></span>
                        <span>{marker.label}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Leyenda sutil al pie del mapa */}
        <p className="text-[11px] text-slate-400 font-light text-center pt-2 px-2">
          💡 Tocá cualquier pin en el mapa o cambiá de pestaña arriba para explorar cada zona.
        </p>
      </div>
    );
  };

  return (
    <section id="zonas-cobertura" className="scroll-mt-24 py-24 lg:py-32 bg-slate-900 text-white">
      <MainContainer>
        <div className="space-y-8">
          
          {/* Encabezado Principal */}
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-amber-400 font-medium text-xs tracking-widest uppercase">Área Operativa</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mt-1">Zonas de cobertura y tarifas</h2>
              <p className="text-slate-300 text-base font-light leading-relaxed mt-3">
                Conocé la zonificación establecida para los traslados diarios de lunes a viernes hacia el centro de San Salvador de Jujuy. Seleccioná tu zona para verificar los barrios incluidos y su tarifa acordada.
              </p>
            </div>
          </ScrollReveal>

          {/* Selector de Pestañas Segmentado (Tabs) */}
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-1.5 rounded-2xl bg-slate-950/70 border border-slate-800 shadow-xl max-w-3xl">
              {zonasCubiertas.map((z) => {
                const isSelected = selectedZoneId === z.id;
                const weeklyForZone = planMode === '2trips' ? z.priceWeekly2Trips : z.priceWeekly4Trips;
                return (
                  <button
                    key={z.id}
                    type="button"
                    onClick={() => setSelectedZoneId(z.id)}
                    className={`py-3 px-4 rounded-xl text-left sm:text-center transition-all cursor-pointer flex flex-col sm:items-center justify-center gap-1 ${
                      isSelected
                        ? `${z.theme.activeBg} border ${z.theme.activeBorder} shadow-lg shadow-black/25`
                        : 'bg-slate-900/60 hover:bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${z.theme.pinBg}`}></span>
                      <span className="font-semibold text-sm text-white">{z.name}</span>
                    </div>
                    <span className={`text-xs font-bold tracking-tight ${isSelected ? z.theme.text : 'text-slate-400'}`}>
                      {z.priceNumber} <span className="text-[10px] font-normal text-slate-400">{z.priceUnit}</span>
                      <span className="text-[10px] font-normal text-slate-400"> • {weeklyForZone}/sem</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Contenido Principal: Tarjeta de Zona Activa + Mapa */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Tarjeta Detallada de la Zona Activa */}
            <div className="lg:col-span-6">
              <ScrollReveal delay={0.15}>
                <div className={`p-6 sm:p-8 rounded-2xl border ${activeZone.theme.activeBorder} bg-slate-800/90 shadow-xl space-y-6`}>
                  
                  {/* Encabezado y Tarifa Destacada */}
                  <div className="border-b border-slate-700/60 pb-5 space-y-4">
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <div className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${activeZone.theme.pinBg}`}></span>
                        <h3 className="text-xl font-bold text-white tracking-wide">{activeZone.name}</h3>
                      </div>
                      <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-700/60 text-slate-300 border border-slate-600/40">
                        {activeZone.barrios.length} barrios cubiertos
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-light">{activeZone.scope}</p>

                    {/* Selector de Modalidad (Plan 2 viajes vs Plan 4 viajes) */}
                    <div className="pt-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                          Modalidad de traslado:
                        </span>
                        <span className="text-[10px] text-amber-400 font-medium">
                          {planMode === '2trips' ? '10 viajes/semana' : '20 viajes/semana'}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 bg-slate-950/80 p-1.5 rounded-xl border border-slate-700/80">
                        <button
                          type="button"
                          onClick={() => setPlanMode('2trips')}
                          className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all flex flex-col items-center justify-center text-center cursor-pointer ${
                            planMode === '2trips'
                              ? 'bg-amber-500 text-slate-950 shadow-md ring-1 ring-amber-400 font-bold'
                              : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                          }`}
                        >
                          <span>Plan 2 viajes / día</span>
                          <span className={`text-[10px] ${planMode === '2trips' ? 'text-slate-950/80 font-medium' : 'text-slate-500'}`}>
                            Ida y vuelta laboral
                          </span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setPlanMode('4trips')}
                          className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all flex flex-col items-center justify-center text-center cursor-pointer ${
                            planMode === '4trips'
                              ? 'bg-amber-500 text-slate-950 shadow-md ring-1 ring-amber-400 font-bold'
                              : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                          }`}
                        >
                          <span>Plan 4 viajes / día</span>
                          <span className={`text-[10px] ${planMode === '4trips' ? 'text-slate-950/80 font-medium' : 'text-slate-500'}`}>
                            Horario cortado
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Desglose de Tarifas */}
                    <div className="flex flex-col gap-2.5 pt-1">
                      <div className="flex items-baseline gap-2">
                        <span className={`text-3xl sm:text-4xl font-light tracking-tight ${activeZone.theme.text}`}>
                          {activeZone.priceNumber}
                        </span>
                        <span className="text-xs text-slate-400 font-light">
                          {activeZone.priceUnit} hacia el centro (lunes a viernes)
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-300 bg-slate-950/90 p-3 rounded-xl border border-slate-700/60">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                          <span className="text-slate-400 font-normal">Tarifa semanal fija:</span>
                          <strong className="text-white text-sm font-semibold">{currentWeeklyPrice}</strong>
                        </div>
                        <span className="text-[11px] text-amber-400/90 font-medium">
                          {planMode === '2trips' ? '10 viajes (ida y vuelta)' : '20 viajes (horario cortado)'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Lista de Barrios */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                      Barrios incluidos en {activeZone.name}:
                    </h4>
                    <ul className="flex flex-wrap gap-2" aria-label={`Barrios de ${activeZone.name}`}>
                      {activeZone.barrios.map((barrio) => (
                        <li
                          key={barrio}
                          className="rounded-full border border-slate-700 bg-slate-900/90 hover:border-slate-500 px-3.5 py-1.5 text-xs text-slate-200 transition-colors shadow-xs"
                        >
                          {barrio}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Nota aclaratoria */}
                  <p className="text-xs text-slate-400 font-light leading-relaxed border-l-2 border-slate-600 pl-3 py-1">
                    ¿Tu barrio no figura en la lista o tenés turnos rotativos? Consultanos por WhatsApp: coordinamos recorridos y horarios personalizados antes de acordar el servicio.
                  </p>

                  {/* ÚNICO Botón Inteligente de WhatsApp */}
                  <a
                    href={smartWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Consultar tarifa para ${activeZone.name} por WhatsApp`}
                    className="w-full min-h-12 bg-amber-500 hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 text-slate-950 font-semibold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center space-x-2.5 text-sm shadow-md cursor-pointer group"
                  >
                    <i className="fa-brands fa-whatsapp text-lg transition-transform group-hover:scale-110"></i>
                    <span>Consultar {planMode === '2trips' ? 'Plan 2 viajes' : 'Plan 4 viajes'} ({currentWeeklyPrice}/sem)</span>
                  </a>

                </div>
              </ScrollReveal>
            </div>

            {/* Mapa Interactivo Sincronizado */}
            <div className="lg:col-span-6 sticky top-28">
              <ScrollReveal delay={0.2}>
                {renderMapCanvas(false)}
              </ScrollReveal>
            </div>

          </div>

        </div>
      </MainContainer>

      {/* Modal / Lightbox Fullscreen Limpio */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mapa de cobertura en pantalla completa"
          className="fixed inset-0 z-50 flex flex-col justify-between bg-slate-950/95 backdrop-blur-md p-4 sm:p-6"
        >
          {/* Header del Modal */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 max-w-5xl w-full mx-auto">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white tracking-wide">
                Mapa de Cobertura — San Salvador de Jujuy
              </h3>
              <p className="text-xs text-slate-400">Adaro Viajes • Zona activa: <strong className="text-white">{activeZone.name}</strong></p>
            </div>

            <div className="flex items-center space-x-3">
              {/* Controles de Zoom */}
              <div className="flex items-center space-x-1 bg-slate-900 border border-slate-700 rounded-lg p-1 text-xs">
                <button
                  type="button"
                  onClick={() => setModalZoom((z) => Math.max(1, z - 0.25))}
                  className="w-7 h-7 flex items-center justify-center rounded hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Reducir zoom"
                  aria-label="Reducir zoom"
                >
                  <i className="fa-solid fa-minus"></i>
                </button>
                <span className="px-2 text-slate-400 text-[11px] font-mono">{Math.round(modalZoom * 100)}%</span>
                <button
                  type="button"
                  onClick={() => setModalZoom((z) => Math.min(2, z + 0.25))}
                  className="w-7 h-7 flex items-center justify-center rounded hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Aumentar zoom"
                  aria-label="Aumentar zoom"
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
                {modalZoom !== 1 && (
                  <button
                    type="button"
                    onClick={() => setModalZoom(1)}
                    className="px-2 py-0.5 text-[10px] text-amber-400 hover:text-amber-300 hover:underline cursor-pointer"
                  >
                    Restablecer
                  </button>
                )}
              </div>

              {/* Botón Cerrar */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-slate-700"
                title="Cerrar mapa ampliado (Esc)"
                aria-label="Cerrar mapa ampliado"
              >
                <i className="fa-solid fa-xmark text-base"></i>
              </button>
            </div>
          </div>

          {/* Contenido Central: Mapa Expandido */}
          <div className="flex-1 overflow-auto flex items-center justify-center py-4">
            {renderMapCanvas(true)}
          </div>

          {/* Footer del Modal (Limpio y sin precios duplicados) */}
          <div className="border-t border-slate-800 pt-3 max-w-5xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-4 text-slate-400">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Zona 1 (Sur)</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span> Zona 2 (Periferia)</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> Zona 3 (Centro)</span>
            </div>

            <a
              href={smartWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-4 py-2 rounded-xl transition-all flex items-center space-x-2 text-xs cursor-pointer shadow-sm"
            >
              <i className="fa-brands fa-whatsapp text-sm"></i>
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};