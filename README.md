# Sitio web CHEA S.A.

Prototipo del sitio institucional de CHEA S.A. (espacios verdes y limpieza edilicia).
HTML/CSS estático, sin build. Páginas: inicio, espacios-verdes, limpieza, nosotros, contacto.

## Pendiente para pasarlo a producción
- Crear repo privado `infocus-web/chea-web` y proyecto en Vercel (equipo INFOCUS) conectado al repo.
- Proyecto Supabase "CHEA Web" en la org Halo Fine Art Lab, con tabla `consultas_contacto`
  (solo insert para anon, con RLS) para guardar el formulario de contacto.
- Función `/api/contacto` en Vercel que avise por mail con Resend (igual que /api/notificar-aceptacion
  en el repo Propuesta-Clientes-Desarrollo-WEB).
- Reemplazar marcadores amarillos/punteados: logo, fotos, teléfono, WhatsApp, horario, año de inicio, historia.
- Quitar la barra amarilla de prototipo y el `noindex` cuando se publique en cheasa.com.ar.
