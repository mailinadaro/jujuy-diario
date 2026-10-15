/**
 * Utilidades canónicas para integración con WhatsApp en Adaro Viajes.
 * Garantiza que nunca existan espacios ni caracteres no numéricos dentro del path wa.me/.
 */

export const WHATSAPP_PHONE_RAW = '543516149222';
export const WHATSAPP_PHONE_DISPLAY = '+54 351 614-9222';

export const DEFAULT_WHATSAPP_MESSAGE =
  'Hola Sergio, quiero consultar un recorrido.\n\nBarrio: \nDirección de mi trabajo: \nHorario de entrada: \nHorario de salida: ';

/**
 * Genera una URL válida y segura para WhatsApp Web / App.
 * Limpia cualquier caracter no numérico del teléfono y codifica el mensaje.
 */
export function buildWhatsAppUrl(
  message: string = DEFAULT_WHATSAPP_MESSAGE,
  phone: string = WHATSAPP_PHONE_RAW
): string {
  const cleanPhone = phone.replace(/\D/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
