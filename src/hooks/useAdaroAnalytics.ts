'use client';

import { useCallback } from 'react';
import { trackWhatsAppClick } from '@/lib/analytics/dataLayer';
import {
  AdaroButtonLocation,
  AdaroZoneId,
  AdaroPlanMode,
  AdaroVehicleModel,
} from '@/types/analytics';

export interface LogWhatsAppClickOptions {
  location: AdaroButtonLocation;
  buttonText: string;
  zone?: AdaroZoneId;
  plan?: AdaroPlanMode;
  vehicleModel?: AdaroVehicleModel;
  targetPhone?: string;
  templateName?: string;
}

export function useAdaroAnalytics() {
  const logWhatsAppClick = useCallback(
    ({
      location,
      buttonText,
      zone = 'none',
      plan = 'none',
      vehicleModel = 'fiat_cronos_2023_full',
      targetPhone = '543516149222',
      templateName = 'consulta_general',
    }: LogWhatsAppClickOptions) => {
      // Despacho síncrono al array en memoria; no genera latencia ni interrumpe la redirección
      trackWhatsAppClick({
        adaro_vehicle_model: vehicleModel,
        adaro_container_scope: 'traslados_diarios',
        adaro_contact_channel: 'whatsapp',
        adaro_button_location: location,
        adaro_button_text: buttonText,
        adaro_zone_selected: zone,
        adaro_plan_selected: plan,
        adaro_target_phone: targetPhone,
        adaro_message_template: templateName,
      });
    },
    []
  );

  return { logWhatsAppClick };
}
