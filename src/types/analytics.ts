/**
 * Tipado estricto para eventos y parámetros de analítica de Adaro Viajes.
 * Arquitectura limpia sin contaminación del scope global de Window.
 */

// Unión extensible: preserva autocompletado en IDE para el vehículo principal pero admite modelos futuros sin error de tipos.
export type AdaroVehicleModel = 'fiat_cronos_2023_full' | (string & {});

export type AdaroButtonLocation =
  | 'hero'
  | 'navbar_desktop'
  | 'navbar_mobile'
  | 'how_it_works'
  | 'pricing_card'
  | 'pricing_modal'
  | 'cta_banner'
  | 'sticky_float'
  | 'footer';

export type AdaroZoneId = 'Zona 1' | 'Zona 2' | 'Zona 3' | 'none';
export type AdaroPlanMode = '2trips' | '4trips' | 'none';

/**
 * Tipo utilitario robusto para payloads de Data Layer.
 * Reemplaza el uso de any por Record<string, unknown> estricto.
 */
export type DataLayerItem = Record<string, unknown>;

/**
 * Parámetros de entrada consumidos por componentes y hooks.
 * Permite campos opcionales que el despachador normalizará con valores canónicos por defecto.
 */
export interface AdaroWhatsAppEventParams {
  adaro_vehicle_model?: AdaroVehicleModel;
  adaro_container_scope?: 'traslados_diarios';
  adaro_contact_channel?: 'whatsapp';
  adaro_button_location: AdaroButtonLocation;
  adaro_button_text: string;
  adaro_zone_selected?: AdaroZoneId;
  adaro_plan_selected?: AdaroPlanMode;
  adaro_target_phone?: string;
  adaro_message_template?: string;
}

/**
 * Evento canónico emitido a window.dataLayer para clics de WhatsApp.
 * Extiende Record<string, unknown> para compatibilidad nativa con DataLayerItem.
 */
export interface AdaroWhatsAppEvent extends Record<string, unknown> {
  event: 'adaro_click_whatsapp';
  adaro_vehicle_model: AdaroVehicleModel;
  adaro_container_scope: 'traslados_diarios';
  adaro_contact_channel: 'whatsapp';
  adaro_button_location: AdaroButtonLocation;
  adaro_button_text: string;
  adaro_zone_selected: AdaroZoneId;
  adaro_plan_selected: AdaroPlanMode;
  adaro_target_phone: string;
  adaro_message_template: string;
}

/**
 * Evento canónico de carga de página.
 */
export interface AdaroPageViewEvent extends Record<string, unknown> {
  event: 'adaro_page_view';
  page_title: string;
  page_location: string;
  page_path: string;
  adaro_vehicle_model: AdaroVehicleModel;
  adaro_container_scope: 'traslados_diarios';
  adaro_service_type: 'chofer_privado_programado';
  adaro_operating_city: 'San Salvador de Jujuy';
}

/**
 * Unión discriminada de todos los eventos analíticos propietarios.
 */
export type AdaroAnalyticsEvent = AdaroWhatsAppEvent | AdaroPageViewEvent;
