// Formulario de contacto de CHEA S.A.: recibe la consulta y la manda por mail con Resend.
// Variables de entorno en Vercel:
//   RESEND_API_KEY  clave de Resend
//   CONTACT_FROM    remitente de un dominio verificado en Resend (ej: "Web CHEA <web@cheasa.com.ar>")
//   CONTACT_TO      destinatario (por defecto administracion@cheasa.com.ar)

const SERVICIOS = {
  verde: "Mantenimiento de espacios verdes",
  limpieza: "Limpieza edilicia",
  ambos: "Los dos servicios",
};

const limpiar = (v, max) => String(v == null ? "" : v).trim().slice(0, max);
const esc = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Método no permitido" });
  }

  let body = req.body || {};
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }

  // Campo trampa: los bots lo completan, las personas no lo ven.
  if (limpiar(body.empresa_web, 200)) return res.status(200).json({ ok: true });

  const datos = {
    nombre: limpiar(body.form_name, 120),
    telefono: limpiar(body.form_phone, 40),
    email: limpiar(body.form_email, 160),
    servicio: SERVICIOS[limpiar(body.form_service, 20)] || "Sin indicar",
    predio: limpiar(body.form_place, 120),
    localidad: limpiar(body.form_city, 80),
    mensaje: limpiar(body.form_message, 3000),
  };

  if (datos.nombre.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email) || datos.mensaje.length < 3) {
    return res.status(400).json({ ok: false, error: "Faltan datos obligatorios." });
  }

  const key = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;
  const to = process.env.CONTACT_TO || "administracion@cheasa.com.ar";
  if (!key || !from) {
    console.error("Falta RESEND_API_KEY o CONTACT_FROM");
    return res.status(500).json({ ok: false, error: "El formulario no está configurado." });
  }

  const filas = [
    ["Nombre", datos.nombre],
    ["Teléfono / WhatsApp", datos.telefono || "-"],
    ["Correo", datos.email],
    ["Servicio", datos.servicio],
    ["Tipo de predio", datos.predio || "-"],
    ["Localidad", datos.localidad || "-"],
  ];
  const html =
    `<h2 style="font-family:Arial,sans-serif;color:#2C5E35">Nueva consulta desde la web</h2>` +
    `<table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">` +
    filas.map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666">${k}</td><td style="padding:4px 0"><b>${esc(v)}</b></td></tr>`).join("") +
    `</table><p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap;margin-top:16px">${esc(datos.mensaje)}</p>`;
  const text = filas.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\n${datos.mensaje}`;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: datos.email,
        subject: `Consulta web: ${datos.servicio} – ${datos.nombre}`,
        html,
        text,
      }),
    });
    if (!r.ok) {
      console.error("Resend", r.status, await r.text());
      return res.status(502).json({ ok: false, error: "No se pudo enviar la consulta." });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(502).json({ ok: false, error: "No se pudo enviar la consulta." });
  }
};
