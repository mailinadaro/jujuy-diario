'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MainContainer } from '@/components/layout/MainContainer';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

interface CoverageProps {
  whatsappNumber?: string;
}

interface ZoneInfo {
  zone: string;
  tagline: string;
  price: string;
  barrios: string[];
  theme: {
    text: string;
    border: string;
    bgHover: string;
    activeBorder: string;
    activeBg: string;
    ring: string;
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
    zone: 'Zona 1',
    tagline: 'Sur y mayor distancia',
    price: '$8.000 por viaje',
    barrios: ['Alto Comedero', 'Malvinas', '13 de Junio', 'Antártida'],
    theme: {
      text: 'text-amber-400',
      border: 'border-amber-500/30',
      bgHover: 'hover:border-amber-500/50',
      activeBorder: 'border-amber-500/60',
      activeBg: 'bg-slate-800/95 ring-1 ring-amber-500/30',
      ring: 'ring-amber-500/40',
      pinBg: 'bg-amber-400',
      pinRing: 'bg-amber-400/40',
      badgeBg: 'bg-amber-500 text-slate-950',
    },
  },
  {
    zone: 'Zona 2',
    tagline: 'Periferia Norte y Sur',
    price: '$7.000 por viaje',
    barrios: ['La Viña', 'Los Perales', 'El Huayco', '23 de Agosto', 'Alto Padilla', 'San Pedrito', 'Chango Más', 'San Martín', 'Belgrano'],
    theme: {
      text: 'text-sky-400',
      border: 'border-sky-500/30',
      bgHover: 'hover:border-sky-500/50',
      activeBorder: 'border-sky-500/60',
      activeBg: 'bg-slate-800/95 ring-1 ring-sky-500/30',
      ring: 'ring-sky-500/40',
      pinBg: 'bg-sky-400',
      pinRing: 'bg-sky-400/40',
      badgeBg: 'bg-sky-500 text-slate-950',
    },
  },
  {
    zone: 'Zona 3',
    tagline: 'Centro y accesos directos',
    price: '$6.000 por viaje',
    barrios: ['Ciudad de Nieva', 'Mariano Moreno', 'B° Kennedy', 'Cuyaya', 'Gorriti'],
    theme: {
      text: 'text-emerald-400',
      border: 'border-emerald-500/30',
      bgHover: 'hover:border-emerald-500/50',
      activeBorder: 'border-emerald-500/60',
      activeBg: 'bg-slate-800/95 ring-1 ring-emerald-500/30',
      ring: 'ring-emerald-500/40',
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

export const Zones: React.FC<CoverageProps> = ({ whatsappNumber = '543516149222' }) => {
  // Zona 1 abierta inicialmente
  const [openZones, setOpenZones] = useState<Set<string>>(() => new Set(['Zona 1']));
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalZoom, setModalZoom] = useState(1);

  // Zona activa para destacar en el mapa: si hay hover manda el hover; si no, si hay exactamente 1 abierta se destaca esa
  const activeZoneForMap = hoveredZone || (openZones.size === 1 ? Array.from(openZones)[0] : null);

  const toggleZone = (zone: string) => {
    setOpenZones((prev) => {
      const next = new Set(prev);
      if (next.has(zone)) {
        next.delete(zone);
      } else {
        next.add(zone);
      }
      return next;
    });
  };

  const selectSingleZone = (zone: string) => {
    setOpenZones(new Set([zone]));
  };

  // Bloqueo de scroll y listener tecla Escape para el modal
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

  const defaultWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hola, quiero verificar si mi barrio tiene cobertura y consultar tarifa.'
  )}`;

  const getZoneWhatsappUrl = (zoneName: string) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      `Hola, quiero consultar por disponibilidad y traslados para la ${zoneName}. Mi barrio es: `
    )}`;
  };

  /**
   * Renderiza el componente del mapa interactivo (HUD)
   */
  const renderMapHUD = (isInsideModal = false) => {
    return (
      <div className={`relative rounded-2xl border border-slate-700/80 bg-slate-950/90 shadow-2xl p-2.5 backdrop-blur-md ring-1 ring-white/5 ${
        isInsideModal ? 'w-full max-w-5xl mx-auto' : ''
      }`}>
        {/* Barra superior HUD */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 text-xs mb-2">
          <div className="flex items-center space-x-2">
            <span className={`w-2 h-2 rounded-full animate-pulse ${
              activeZoneForMap === 'Zona 1'
                ? 'bg-amber-400'
                : activeZoneForMap === 'Zona 2'
                ? 'bg-sky-400'
                : activeZoneForMap === 'Zona 3'
                ? 'bg-emerald-400'
                : 'bg-slate-400'
            }`}></span>
            <span className="text-slate-300 font-medium tracking-wide">
              {activeZoneForMap ? (
                <>
                  Enfocando: <strong className="text-white">{activeZoneForMap}</strong>
                </>
              ) : (
                'Mapa general de San Salvador'
              )}
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
              title="Ver mapa en pantalla completa"
              aria-label="Ampliar mapa en pantalla completa"
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
              const zoneConfig = zonasCubiertas.find((z) => z.zone === marker.zone);
              const isZoneActive = activeZoneForMap === marker.zone;
              const isMarkerHovered = hoveredMarker === marker.id;
              const isDimmed = activeZoneForMap !== null && !isZoneActive;

              return (
                <div
                  key={marker.id}
                  style={{ top: `${marker.y}%`, left: `${marker.x}%` }}
                  onMouseEnter={() => {
                    setHoveredMarker(marker.id);
                    setHoveredZone(marker.zone);
                  }}
                  onMouseLeave={() => {
                    setHoveredMarker(null);
                    setHoveredZone(null);
                  }}
                  onClick={() => selectSingleZone(marker.zone)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 z-10 ${
                    isDimmed ? 'opacity-35 scale-90' : 'opacity-100 scale-100 hover:scale-125 z-20'
                  }`}
                  aria-label={`${marker.label} (${marker.zone})`}
                >
                  {/* Halo pulsante si la zona está activa */}
                  {isZoneActive && (
                    <span className={`absolute -inset-2 rounded-full animate-ping opacity-60 ${
                      zoneConfig?.theme.pinRing || 'bg-amber-400/40'
                    }`}></span>
                  )}

                  {/* Punto central del Pin */}
                  <span className={`relative flex items-center justify-center w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border-2 border-slate-950 shadow-md ${
                    zoneConfig?.theme.pinBg || 'bg-amber-400'
                  } ${isZoneActive ? 'ring-2 ring-white/90 shadow-lg' : ''}`}></span>

                  {/* Tooltip visible al pasar el mouse sobre el pin */}
                  {isMarkerHovered && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none z-30">
                      <div className="whitespace-nowrap text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-900/95 text-slate-100 border border-slate-700 shadow-2xl backdrop-blur-md flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${zoneConfig?.theme.pinBg}`}></span>
                        <span>{marker.label}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Leyenda interactiva inferior y selector rápido */}
        <div className="pt-2.5 px-2">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="text-slate-400 text-[11px] font-light">Selección rápida:</span>
            <div className="flex flex-wrap items-center gap-1.5">
              {zonasCubiertas.map((z) => {
                const isActive = activeZoneForMap === z.zone;
                return (
                  <button
                    key={z.zone}
                    type="button"
                    onClick={() => selectSingleZone(z.zone)}
                    onMouseEnter={() => setHoveredZone(z.zone)}
                    onMouseLeave={() => setHoveredZone(null)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all cursor-pointer border ${
                      isActive
                        ? `${z.theme.activeBg} ${z.theme.text} border-current shadow-xs`
                        : 'bg-slate-800/60 hover:bg-slate-800 text-slate-300 border-slate-700/60'
                    }`}
                  >
                    <span className={`inline-block w-2 h-2 rounded-full mr-1.5 ${z.theme.pinBg}`}></span>
                    {z.zone} ({z.price.replace(' por viaje', '')})
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="zonas-cobertura" className="scroll-mt-24 py-24 lg:py-32 bg-slate-900 text-white">
      <MainContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Columna Izquierda: Introducción, Acordeón interactivo y Botón CTA */}
          <div className="lg:col-span-6">
            <ScrollReveal>
              <div className="space-y-6">
                <div>
                  <span className="text-amber-400 font-medium text-xs tracking-widest uppercase">Área Operativa</span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mt-1">Zonas de cobertura</h2>
                  <p className="text-slate-300 text-base font-light leading-relaxed mt-3">
                    Conocé la zonificación establecida para los traslados diarios de lunes a viernes hacia el centro de San Salvador de Jujuy. Tocá cada zona para ubicar sus barrios en el mapa.
                  </p>
                </div>

                {/* Vista previa del mapa en Mobile (se muestra antes del acordeón para no obligar a scroll excesivo) */}
                <div className="block lg:hidden pt-2">
                  {renderMapHUD(false)}
                </div>

                {/* Acordeón interactivo de zonas */}
                <div className="space-y-3.5 pt-2">
                  {zonasCubiertas.map((zoneData) => {
                    const isOpen = openZones.has(zoneData.zone);
                    const isHovered = hoveredZone === zoneData.zone;

                    return (
                      <div
                        key={zoneData.zone}
                        onMouseEnter={() => setHoveredZone(zoneData.zone)}
                        onMouseLeave={() => setHoveredZone(null)}
                        className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                          isOpen
                            ? `${zoneData.theme.activeBg} ${zoneData.theme.activeBorder} shadow-lg shadow-black/30`
                            : `bg-slate-800/70 hover:bg-slate-800 border-slate-700/80 ${zoneData.theme.bgHover} shadow-sm`
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => toggleZone(zoneData.zone)}
                          aria-expanded={isOpen}
                          aria-controls={`zone-content-${zoneData.zone}`}
                          className="w-full p-5 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset cursor-pointer transition-colors"
                        >
                          <div className="flex items-center space-x-3.5">
                            <span className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-semibold shrink-0 border border-slate-600/50 shadow-inner ${
                              isOpen ? `${zoneData.theme.text} bg-slate-700/90` : 'bg-slate-700/70 text-slate-300'
                            }`}>
                              <i className="fa-solid fa-map-pin"></i>
                            </span>
                            <div>
                              <div className="flex items-center gap-2.5">
                                <h3 className="text-lg font-semibold text-white tracking-wide">{zoneData.zone}</h3>
                                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-700/60 text-slate-300 border border-slate-600/40">
                                  {zoneData.barrios.length} barrios
                                </span>
                              </div>
                              <p className="text-xs text-slate-400 font-light mt-0.5">{zoneData.tagline}</p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between sm:justify-end gap-3.5 self-end sm:self-auto w-full sm:w-auto pt-2 sm:pt-0 border-t border-slate-700/40 sm:border-0">
                            <span className={`font-bold text-base tracking-tight ${zoneData.theme.text}`}>
                              {zoneData.price}
                            </span>
                            <div className={`w-7 h-7 rounded-full bg-slate-700/60 flex items-center justify-center text-xs transition-transform duration-300 shrink-0 ${
                              isOpen ? 'rotate-180 text-white bg-slate-600' : 'text-slate-400'
                            }`}>
                              <i className="fa-solid fa-chevron-down"></i>
                            </div>
                          </div>
                        </button>

                        {/* Panel Desplegable con transición CSS Grid */}
                        <div
                          id={`zone-content-${zoneData.zone}`}
                          className={`grid transition-all duration-300 ease-in-out ${
                            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="px-5 pb-5 pt-2 border-t border-slate-700/50 mt-1">
                              <div className="flex items-center justify-between mb-3">
                                <p className="text-xs font-medium text-slate-400 tracking-wide">
                                  Barrios incluidos en {zoneData.zone}:
                                </p>
                                <a
                                  href={getZoneWhatsappUrl(zoneData.zone)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[11px] font-medium text-amber-400 hover:text-amber-300 hover:underline flex items-center gap-1"
                                >
                                  <span>Consultar esta zona</span>
                                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                                </a>
                              </div>
                              <ul className="flex flex-wrap gap-2" aria-label={`Barrios de ${zoneData.zone}`}>
                                {zoneData.barrios.map((barrio) => (
                                  <li
                                    key={barrio}
                                    className={`rounded-full border px-3 py-1.5 text-xs text-slate-200 transition-colors shadow-xs ${
                                      isHovered
                                        ? 'border-slate-500 bg-slate-800'
                                        : 'border-slate-600/80 bg-slate-900/90 hover:border-slate-500'
                                    }`}
                                  >
                                    {barrio}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Botón Principal WhatsApp */}
                <a
                  href={defaultWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Verificar mi zona por WhatsApp"
                  className="w-full min-h-11 bg-amber-500 hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 text-slate-950 font-medium py-3.5 px-6 rounded-xl transition-all flex items-center justify-center space-x-2 text-sm shadow-md cursor-pointer"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  <span>Verificar mi zona por WhatsApp</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Columna Derecha: Mapa Interactivo HUD Sticky (Desktop) */}
          <div className="hidden lg:block lg:col-span-6 sticky top-28">
            <ScrollReveal delay={0.15}>
              {renderMapHUD(false)}
            </ScrollReveal>
          </div>

        </div>
      </MainContainer>

      {/* Modal / Lightbox Fullscreen Accesible */}
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
                Mapa de Cobertura y Tarifas
              </h3>
              <p className="text-xs text-slate-400">San Salvador de Jujuy — Adaro Viajes</p>
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
            {renderMapHUD(true)}
          </div>

          {/* Footer del Modal */}
          <div className="border-t border-slate-800 pt-3 max-w-5xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-3">
              {zonasCubiertas.map((z) => (
                <div key={z.zone} className="flex items-center space-x-1.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${z.theme.pinBg}`}></span>
                  <span className="font-semibold text-white">{z.zone}:</span>
                  <span className={z.theme.text}>{z.price}</span>
                </div>
              ))}
            </div>

            <a
              href={defaultWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-4 py-2 rounded-xl transition-all flex items-center space-x-2 text-xs cursor-pointer shadow-sm"
            >
              <i className="fa-brands fa-whatsapp text-sm"></i>
              <span>Consultar mi dirección por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};