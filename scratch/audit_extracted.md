## Auditoría final de copy y CRO de Adaro Viajes: 2 críticos, 5 importantes y 4 ajustes finos, con scorecard contra la versión anterior.

Auditoría final de copy y CRO: landing de servicio

 2 críticos 
 5 importantes 
 4 ajustes finos 

La versión nueva resuelve casi todo lo que quedaba de la segunda auditoría. Lo que falta es más corto y más puntual: que llegue al dominio real, que los links de WhatsApp sigan funcionando con el formato nuevo, y unos textos que quedaron desfasados con el sistema de zonas.

 Lo que mejoró 
 Ya no hay texto pendiente. Beneficios y Cómo funciona están terminados. Cobertura, Enfoque local y Organización se fusionaron en una sola sección de zonas y tarifas, con precios reales (los de las tres zonas coinciden con los rangos del FAQ), barrios por zona, mapa y mensajes de WhatsApp que ya llevan la zona y el plan. La insignia «Más consultado» desapareció. Las políticas de cancelación tienen contenido real y el footer ya no tiene errores. «Otras necesidades» pasó al FAQ, lo que despeja el camino hacia el precio. El orden de secciones ya sigue la escalera de confianza.

Scorecard: v2 → versión final (estimación)

 Ítem Gris: v2 · Color: final Avance 
 Contenido sin pendientes 40 → 95% 
 Cobertura y zonas 35 → 85% 
 Beneficios 40 → 90% 
 Estructura de secciones 55 → 90% 
 Precio 50 → 80% 
 Políticas 20 → 75% 
 Confianza sin testimonios 55 → 70% 
 CTAs y WhatsApp 75 → 65% 

CTAs y WhatsApp es el único ítem que baja: los links nuevos tienen un formato que no probaste (punto 2).

Críticos

 1 

La versión nueva no está en el dominio real
 Crítico 

Publicación · Técnico · Nuevo

 Actual La versión nueva vive en jujuy-diario.vercel.app. adaroviajes.com todavía sirve la anterior, con «$[X] a $[X]», «Más consultado», «Lunea a Viernes», el texto pendiente y sin zonas ni mapa. Quien llega desde Google, un anuncio o un link compartido ve esa versión. 
 Propuesta En Vercel, asigná el dominio adaroviajes.com al proyecto que sirve jujuy-diario.vercel.app y promové el último deploy a Production. Después configurá una redirección del dominio vercel.app al principal para no duplicar el sitio. Verificá en ventana privada. 

 2 

Los links de WhatsApp tienen espacios en la dirección
 Crítico 

Todos los CTAs · CRO · Nuevo

 Actual Los botones ahora apuntan a wa.me/+54 351 6 149 222, con espacios y signo +. El formato que probaste y funcionaba era wa.me/+543516149222. Un espacio dentro de la dirección puede hacer que WhatsApp no reconozca el número. El link del footer sí está bien armado (wa.me/543516149222). 
 Propuesta Los espacios son solo para el texto visible. En el href usá siempre los dígitos juntos, desde una única constante. Después probá desde otro celular el botón del hero, el de Cómo funciona, uno de los botones de zona, el CTA final, el flotante y el de la página de políticas. 

Importantes

 3 

Los precios ya son públicos, pero no se aprovechan
 Importante 

Hero + Tarifas y zonas · CRO · Nuevo

 Actual El hero sigue sin precio. En las cards de zona se ve «$80.000/sem», que es el valor del Plan 2 viajes. Quien tiene horario cortado ve esa cifra primero y no sabe que su plan cuesta el doble hasta abrir la pestaña o el FAQ. 
 Propuesta Cambiá la pill «Tarifa semanal fija» por «Desde $60.000 por semana». En cada card de zona mostrá los dos planes: «2 viajes diarios: $80.000 · 4 viajes diarios: $160.000» (valores de la Zona 1). 

 4 

Hay textos que quedaron desfasados con el sistema de zonas
 Importante 

FAQ y Cómo funciona · Contenido · Nuevo

 Actual La respuesta de «¿Qué barrios están cubiertos?» arranca con «Si el tuyo no figura, escribinos»: perdió la lista y no responde la pregunta. El paso 3 de Cómo funciona dice «Recibís tu tarifa… te pasamos el valor exacto», pero la tarifa ahora es pública. 
 Propuesta FAQ: «Cubrimos barrios de 3 zonas, con tarifa por zona. Mirá la lista completa en Tarifas y Zonas. Si el tuyo no figura, escribinos» (con link a la sección). Paso 3: «Confirmamos tu tarifa según tu zona y coordinamos el primer viaje». 

 5 

Hay una promesa sin respaldo y reglas que solo obligan a un lado
 Importante 

Quién te lleva + Políticas · Copy · Nuevo

 Actual La etiqueta «Puntualidad garantizada» es una garantía sin ninguna consecuencia definida (sacaste el compromiso de no cobrar por demora). Las políticas detallan qué pasa si el pasajero cancela, falta o paga tarde, pero nada de qué pasa si cancela el chofer. 
 Propuesta Cambiá la etiqueta por algo descriptivo y cierto, como «Conoce la ciudad y sus horarios». En políticas, agregá una línea con lo que pasa si no podés realizar un viaje (aviso previo y reprogramación o descuento, lo que vayas a sostener). Para quien llega sin conocerte, ese equilibrio pesa. 

 6 

Quién te lleva: foto duplicada y falta el dato del vehículo
 Importante 

Quién te lleva + CTA final · CRO · Persiste

 Actual La foto de Sergio (chofer02.jpg) aparece dos veces con dos textos alternativos distintos, y «+30 años» se repite tres veces entre el hero, la insignia y el título. El Fiat Cronos 2024 y el seguro siguen sin aparecer fuera del FAQ. La foto del auto del CTA final tiene alt «Paisaje de Jujuy y rutas». 
 Propuesta Dejá una sola foto (si una es versión mobile, que la otra no se muestre ni se lea). Insignia: «Sergio · Chofer titular». En la foto del auto, agregá un epígrafe: «Fiat Cronos 2024, con seguro vigente» y corregí el alt a «Fiat Cronos 2024 del servicio de Adaro Viajes». 

 7 

El mapa promete interacción que no tiene
 Importante 

Tarifas y zonas · UX Writing · Nuevo

 Actual El texto dice «Tocá cualquier pin en el mapa», pero el mapa es una imagen fija (zonas.png). Tocar un pin no hace nada, y eso se siente como un error de la página. 
 Propuesta Cambiá el texto a «Cambiá de pestaña arriba para ver los barrios y la tarifa de cada zona. Tocá “Ampliar mapa” para verlo más grande». Si más adelante querés pins clickeables, se arma un mapa interactivo. 

Orden de secciones

 1. Hero → 2. La realidad diaria → 3. Beneficios → 4. Cómo funciona → 5. Quién te lleva → 6. Tarifas y zonas (con mapa) → 7. FAQ → 8. CTA final Sin cambios 

La secuencia ya sigue la escalera de confianza (promesa, dolor, beneficio, método, persona, precio, dudas, acción). No hace falta mover nada.

Ajustes finos

 Página de políticas Tiene el título y la descripción de la home. Dale un título propio. «Marco operativo» suena interno: «Condiciones del servicio». Además dice «horario de atención administrativa», cuando el hero habla del horario de traslados. Unificá: «Horario de traslados: 9 a 13 h y de 15 a 21 h». 
 Consistencia «hs» en el hero y el footer, «h» en las políticas: elegí una. Los mensajes de zona arrancan con «Hola Sergio» y el resto con «Hola». El número visible agrupa raro («6 149 222»): «+54 351 614-9222» se lee mejor. 
 Botón flotante En el HTML aparece como un link sin texto: confirmá que tenga aria-label. El meta viewport todavía no tiene viewport-fit=cover, así que en iPhone el botón puede quedar pegado al indicador de inicio. 
 Imagen para compartir El og:image sigue siendo heroCronos03.png (PNG de 1672×940). Pasalo a JPG o WebP de unos 1200×630 y menos de 300 KB, y agregá sizes en next/image (hoy pide w=3840). 

Impacto estimado y esfuerzo

 Esfuerzo Corrección e impacto en conversión 
 Bajo Publicar la versión nueva en adaroviajes.com Alto 
 Bajo Href de WhatsApp con dígitos juntos y prueba Alto 
 Bajo Precio en el hero y los dos planes por zona Alto 
 Bajo Corregir FAQ de barrios y paso 3 Medio 
 Bajo Cambiar «Puntualidad garantizada» y definir tu cancelación Medio 
 Bajo Foto única y epígrafe del Cronos con su alt Medio 
 Bajo Texto del mapa sin promesas falsas Bajo 
 Bajo Políticas: título propio y horario unificado Bajo 
 Bajo aria-label, viewport-fit, og:image y «h» vs «hs» Bajo