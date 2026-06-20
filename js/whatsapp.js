/* =========================================================================
   Quick Car Out Of Station — WhatsApp Helper
   -------------------------------------------------------------------------
   NO API. Har enquiry seedha WhatsApp chat kholta hai (wa.me deep link).

   Usage in HTML:
     <button data-wa="Cab Booking">Book on WhatsApp</button>
     <a data-wa="Manali Tour Package - 5N/6D">Enquire</a>

   The data-wa value (service/context) message me jud jaata hai, taaki team
   ko pata chale lead kis cheez ke liye hai.
   ========================================================================= */

(function () {
  /** Build a wa.me link with a pre-filled message. */
  function buildWhatsAppLink(context) {
    var number = (window.SITE && window.SITE.whatsappNumber) || "";
    var base = (window.SITE && window.SITE.defaultMessage) ||
      "Hi, I'd like to make an enquiry.";

    var message = context
      ? "Hi Quick Car Out Of Station, I'd like to know more about *" + context +
        "*."
      : base;

    return "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
  }

  /** Open WhatsApp chat for a given context (service name etc.). */
  function openWhatsApp(context) {
    window.open(buildWhatsAppLink(context), "_blank", "noopener");
  }

  /** Auto-wire any element with [data-wa] to open WhatsApp on click. */
  function wireWhatsAppElements(root) {
    var scope = root && root.querySelectorAll ? root : document;
    var els = scope.querySelectorAll("[data-wa]:not(.wa-bound)");
    els.forEach(function (el) {
      el.classList.add("wa-bound");
      // If it's an anchor, also set href so right-click/open-in-new-tab works.
      if (el.tagName === "A") {
        el.setAttribute("href", buildWhatsAppLink(el.getAttribute("data-wa")));
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
      }
      el.addEventListener("click", function (e) {
        if (el.tagName !== "A") e.preventDefault();
        openWhatsApp(el.getAttribute("data-wa"));
      });
    });
  }

  // Expose globally
  window.WA = {
    link: buildWhatsAppLink,
    open: openWhatsApp,
    wire: wireWhatsAppElements,
  };

  // Auto-wire once DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wireWhatsAppElements);
  } else {
    wireWhatsAppElements();
  }
})();
