/* CHEA S.A. – ajustes propios del prototipo (se carga después de custom.js) */
(function ($) {
  "use strict";

  // Formulario de contacto: valida en el navegador y muestra un aviso.
  // No hace ningún envío por red (el envío real se conecta al publicar).
  var $form = $("#contact-form");
  if ($form.length) {
    var showMsg = function () {
      var msg = document.getElementById("chea-form-msg");
      if (msg) {
        msg.textContent = "Consulta lista para enviar. En el sitio publicado llega por correo a administracion@cheasa.com.ar.";
        msg.hidden = false;
      }
    };
    if ($.fn.validate) {
      $form.validate({
        messages: {
          form_name: "Escriban su nombre.",
          form_email: {
            required: "Escriban un correo de contacto.",
            email: "Revisen el formato del correo."
          },
          form_message: "Cuéntennos brevemente qué necesitan."
        },
        submitHandler: function (form) {
          showMsg();
          return false;
        }
      });
    } else {
      $form.on("submit", function (e) {
        e.preventDefault();
        showMsg();
      });
    }
  }

  // Si se llega con #whatsapp, resaltar la tarjeta correspondiente.
  if (location.hash === "#whatsapp") {
    $("#whatsapp").addClass("chea-highlight");
  }
})(jQuery);
