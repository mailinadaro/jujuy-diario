/**
 * Despachador seguro para window.dataLayer en Adaro Viajes.
 * Principios: Aserción local segura basada en unknown, verificación defensiva Array.isArray y cero uso de any.
 */

import {
  AdaroWhatsAppEvent,
  AdaroWhatsAppEventParams,
  DataLayerItem,
} from '@/types/analytics';

/**
 * Obtiene o inicializa la cola de dataLayer de forma segura sin extender Window globalmente.
 */
export function getSafeDataLayer(): DataLayerItem[] {
  if (typeof window === 'undefined') {
    return [];
  }

  const win = window as unknown as { dataLayer?: Record<string, unknown>[] };

  if (!Array.isArray(win.dataLayer)) {
    win.dataLayer = [];
  }

  return win.dataLayer;
}

/**
 * Inserta un payload tipado estrictamente como Record<string, unknown> en dataLayer.
 * Manejo defensivo de excepciones sin interrumpir la experiencia del usuario.
 */
export function pushToDataLayer(payload: Record<string, unknown>): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const win = window as unknown as { dataLayer?: Record<string, unknown>[] };

    if (!Array.isArray(win.dataLayer)) {
      win.dataLayer = [];
    }

    win.dataLayer.push(payload);
  } catch (error) {
    // Falla silenciosa para proteger la navegación del usuario
    console.warn('[Adaro Analytics] Error al despachar a dataLayer:', error);
  }
}

/**
 * Despacha el evento canónico de conversión a WhatsApp normalizando valores canónicos.
 * Previene la fuga de estado en variables de GTM al forzar siempre valores explícitos.
 */
export function trackWhatsAppClick(params: AdaroWhatsAppEventParams): void {
  const eventPayload: AdaroWhatsAppEvent = {
    event: 'adaro_click_whatsapp',
    adaro_vehicle_model: params.adaro_vehicle_model || 'fiat_cronos_2023_full',
    adaro_container_scope: 'traslados_diarios',
    adaro_contact_channel: 'whatsapp',
    adaro_button_location: params.adaro_button_location,
    adaro_button_text: params.adaro_button_text,
    adaro_zone_selected: params.adaro_zone_selected || 'none',
    adaro_plan_selected: params.adaro_plan_selected || 'none',
    adaro_target_phone: params.adaro_target_phone || '543516149222',
    adaro_message_template: params.adaro_message_template || 'consulta_general',
  };

  pushToDataLayer(eventPayload);
}
