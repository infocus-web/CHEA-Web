/* CHEA S.A. – Variante B "minimalista": header, menú, revelados y formulario.
   Sin dependencias (no usa jQuery ni la plantilla). */
(function () {
  "use strict";

  var doc = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Header: transparente sobre la foto, barra fina al bajar ---------- */
  var header = document.querySelector(".m-header");
  var bar = document.querySelector(".chea-demo-bar");
  var ticking = false;

  function onScroll() {
    ticking = false;
    var y = window.scrollY || window.pageYOffset;
    var barH = bar ? bar.offsetHeight : 0;
    doc.style.setProperty("--m-bar-offset", Math.max(0, barH - y) + "px");
    if (header) header.classList.toggle("is-scrolled", y > 24);
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(onScroll);
    }
  }, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  /* ---------- Menú móvil ---------- */
  var burger = document.querySelector(".m-burger");
  var menu = document.getElementById("m-menu");

  function setMenu(open) {
    if (!burger || !menu) return;
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    menu.classList.toggle("is-open", open);
    menu.setAttribute("aria-hidden", open ? "false" : "true");
    if (open) menu.removeAttribute("inert"); else menu.setAttribute("inert", "");
    header.classList.toggle("is-open", open);
    doc.classList.toggle("m-menu-open", open);
    if (open) {
      var first = menu.querySelector("a");
      if (first) first.focus({ preventScroll: true });
    }
  }

  if (burger && menu) {
    burger.addEventListener("click", function () {
      setMenu(burger.getAttribute("aria-expanded") !== "true");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("is-open")) {
        setMenu(false);
        burger.focus();
      }
    });
    window.matchMedia("(min-width: 1100px)").addEventListener("change", function (mq) {
      if (mq.matches) setMenu(false);
    });
  }

  /* ---------- Revelado al hacer scroll: un único estilo, una sola vez ---------- */
  var items = document.querySelectorAll(".rv");
  if (!reduce && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---------- Contacto: resaltar la tarjeta de WhatsApp si se llega con #whatsapp ---------- */
  if (location.hash === "#whatsapp") {
    var wa = document.getElementById("whatsapp");
    if (wa) wa.classList.add("chea-highlight");
  }

  /* ---------- Formulario: valida en el navegador y muestra un aviso (sin red) ---------- */
  var form = document.getElementById("contact-form");
  if (form) {
    var rules = {
      form_name: function (v) { return v ? "" : "Escriban su nombre."; },
      form_email: function (v) {
        if (!v) return "Escriban un correo de contacto.";
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Revisen el formato del correo.";
      },
      form_message: function (v) { return v ? "" : "Cuéntennos brevemente qué necesitan."; }
    };

    var check = function (field) {
      var rule = rules[field.name];
      if (!rule) return true;
      var msg = rule(field.value.trim());
      var wrap = field.closest(".m-field");
      var err = wrap.querySelector(".m-error");
      if (msg) {
        if (!err) {
          err = document.createElement("span");
          err.className = "m-error";
          err.id = field.id + "-error";
          wrap.appendChild(err);
        }
        err.textContent = msg;
        wrap.classList.add("has-error");
        field.setAttribute("aria-invalid", "true");
        field.setAttribute("aria-describedby", err.id);
        return false;
      }
      if (err) err.remove();
      wrap.classList.remove("has-error");
      field.removeAttribute("aria-invalid");
      field.removeAttribute("aria-describedby");
      return true;
    };

    Object.keys(rules).forEach(function (name) {
      var f = form.elements[name];
      // Re-validar mientras escriben (no al salir del campo: evita que el botón se mueva bajo el clic).
      if (f) f.addEventListener("input", function () {
        if (f.closest(".m-field").classList.contains("has-error")) check(f);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var firstBad = null;
      Object.keys(rules).forEach(function (name) {
        var f = form.elements[name];
        if (f && !check(f) && !firstBad) firstBad = f;
      });
      var msg = document.getElementById("chea-form-msg");
      if (firstBad) {
        if (msg) msg.hidden = true;
        firstBad.focus();
        return;
      }
      if (msg) {
        msg.textContent = "Consulta lista para enviar. En el sitio publicado llega por correo a administracion@cheasa.com.ar.";
        msg.hidden = false;
      }
    });
  }
})();
