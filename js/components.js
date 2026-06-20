/* =========================================================================
   Quick Car Out Of Station — Global Components
   -------------------------------------------------------------------------
   Header, footer & floating WhatsApp button ko inject karta hai (DRY),
   aur reusable card builders deta hai (Components.serviceCard, etc.).

   HTML me bas yeh placeholders rakho:
     <div id="site-header"></div>
     ... page content ...
     <div id="site-footer"></div>
   Components.init() inhe bhar deta hai. Float button apne aap add hota hai.
   ========================================================================= */

(function () {
  var SITE = window.SITE || {};

  /* ---- Active-page helper ---- */
  function currentPage() {
    var p = location.pathname.split("/").pop();
    return p && p.length ? p : "index.html";
  }
  function isActive(slug) {
    var cur = currentPage();
    if (slug === "index.html") return cur === "index.html" || cur === "";
    return cur === slug;
  }

  /* =======================  HEADER  ======================= */
  function navLink(item, mobile) {
    var active = isActive(item.slug);
    var base = mobile
      ? "block px-4 py-3 rounded-lg font-medium "
      : "px-3 py-2 font-medium text-sm rounded-lg transition ";
    var state = active
      ? "text-primary " + (mobile ? "bg-primary/10" : "")
      : "text-ink/80 hover:text-primary hover:bg-primary/5";
    return '<a href="' + item.slug + '" class="' + base + state + '">' + item.name + "</a>";
  }

  function packagesDropdown() {
    var items = (window.SERVICES || [])
      .filter(function (s) { return (window.PACKAGE_SLUGS || []).indexOf(s.slug) > -1; })
      .map(function (s) {
        return '<a href="' + s.slug + '" class="flex items-center gap-2 px-4 py-2.5 hover:bg-primary/5 text-ink/80 hover:text-primary">' +
          '<span>' + s.icon + '</span><span class="text-sm font-medium">' + s.name + '</span></a>';
      }).join("");
    return (
      '<div class="relative group">' +
        '<button class="px-3 py-2 font-medium text-sm rounded-lg text-ink/80 hover:text-primary hover:bg-primary/5 transition flex items-center gap-1">' +
          'Packages <span class="text-xs">▾</span></button>' +
        '<div class="absolute left-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">' +
          '<div class="bg-white rounded-xl shadow-card border border-black/5 overflow-hidden py-1">' + items + '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function headerHTML() {
    var primary = (window.NAV_PRIMARY || []).map(function (i) { return navLink(i, false); }).join("");
    var secondary = (window.NAV_SECONDARY || []).map(function (i) { return navLink(i, false); }).join("");

    var mobilePrimary = (window.NAV_PRIMARY || []).map(function (i) { return navLink(i, true); }).join("");
    var mobilePackages = (window.SERVICES || [])
      .filter(function (s) { return (window.PACKAGE_SLUGS || []).indexOf(s.slug) > -1; })
      .map(function (s) { return navLink({ name: s.icon + " " + s.name, slug: s.slug }, true); }).join("");
    var mobileSecondary = (window.NAV_SECONDARY || []).map(function (i) { return navLink(i, true); }).join("");

    return (
      '<header id="hdr" class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/5 transition-shadow">' +
        '<div class="max-w-7xl mx-auto px-4 md:px-6">' +
          '<div class="flex items-center justify-between h-16 md:h-20">' +
            // Logo
            '<a href="index.html" class="flex items-center shrink-0">' +
              '<img src="images/logo.jpg" alt="Quick Car Out Of Station" class="h-10 md:h-14 w-auto" />' +
            '</a>' +
            // Desktop nav
            '<nav class="hidden lg:flex items-center gap-1">' +
              primary + packagesDropdown() + secondary +
            '</nav>' +
            // Right actions
            '<div class="hidden lg:flex items-center gap-3">' +
              '<a href="tel:' + (SITE.phone || "") + '" class="text-sm font-semibold text-ink/80 hover:text-primary">📞 ' + (SITE.phone || "") + '</a>' +
              '<a data-wa="General Enquiry" class="bg-whatsapp text-white text-sm font-semibold px-4 py-2.5 rounded-full shadow-card hover:scale-105 transition flex items-center gap-2">💬 WhatsApp Us</a>' +
            '</div>' +
            // Mobile hamburger
            '<button data-menu-toggle aria-label="Menu" class="lg:hidden text-2xl text-ink p-2">☰</button>' +
          '</div>' +
        '</div>' +
        // Mobile menu
        '<div id="mobile-menu" class="hidden lg:hidden border-t border-black/5 bg-white px-3 py-3 space-y-1">' +
          mobilePrimary +
          '<div class="pt-2 mt-1 border-t border-black/5 text-xs uppercase tracking-wide text-ink/40 px-4 py-1">Packages</div>' +
          mobilePackages +
          '<div class="pt-2 mt-1 border-t border-black/5"></div>' +
          mobileSecondary +
          '<a data-wa="General Enquiry" class="block text-center mt-3 bg-whatsapp text-white font-semibold px-4 py-3 rounded-full">💬 WhatsApp Us</a>' +
        '</div>' +
      '</header>'
    );
  }

  /* =======================  FOOTER  ======================= */
  function footerHTML() {
    var serviceLinks = (window.SERVICES || []).map(function (s) {
      return '<a href="' + s.slug + '" class="block text-white/70 hover:text-accent py-1 text-sm">' + s.name + '</a>';
    }).join("");

    return (
      '<footer class="bg-ink text-white mt-16">' +
        '<div class="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">' +
          // Brand
          '<div>' +
            '<div class="inline-block bg-white rounded-xl p-2.5"><img src="images/logo.jpg" alt="Quick Car Out Of Station" class="h-9 sm:h-11 w-auto" /></div>' +
            '<p class="text-white/60 text-sm mt-3">' + (SITE.tagline || "") + '</p>' +
            '<p class="text-white/60 text-sm mt-3">Cabs, flights, hotels, trains, tours & more — all from Patna, one WhatsApp away.</p>' +
            '<div class="flex gap-3 mt-4 text-xl">' +
              '<a href="' + ((SITE.social||{}).instagram||"#") + '" aria-label="Instagram" class="hover:text-accent">📷</a>' +
              '<a href="' + ((SITE.social||{}).facebook||"#") + '" aria-label="Facebook" class="hover:text-accent">📘</a>' +
              '<a href="' + ((SITE.social||{}).youtube||"#") + '" aria-label="YouTube" class="hover:text-accent">▶️</a>' +
            '</div>' +
          '</div>' +
          // Services
          '<div>' +
            '<h4 class="font-display font-bold mb-3">Services</h4>' + serviceLinks +
          '</div>' +
          // Company
          '<div>' +
            '<h4 class="font-display font-bold mb-3">Company</h4>' +
            '<a href="about.html" class="block text-white/70 hover:text-accent py-1 text-sm">About Us</a>' +
            '<a href="destinations.html" class="block text-white/70 hover:text-accent py-1 text-sm">Destinations</a>' +
            '<a href="contact.html" class="block text-white/70 hover:text-accent py-1 text-sm">Contact</a>' +
          '</div>' +
          // Contact
          '<div>' +
            '<h4 class="font-display font-bold mb-3">Get in Touch</h4>' +
            '<p class="text-white/70 text-sm py-1">📍 ' + (SITE.address || "") + '</p>' +
            '<a href="tel:' + (SITE.phone||"") + '" class="block text-white/70 hover:text-accent py-1 text-sm">📞 ' + (SITE.phone || "") + '</a>' +
            '<a href="mailto:' + (SITE.email||"") + '" class="block text-white/70 hover:text-accent py-1 text-sm">✉️ ' + (SITE.email || "") + '</a>' +
            '<p class="text-white/70 text-sm py-1">🕒 ' + (SITE.hours || "") + '</p>' +
            '<a data-wa="General Enquiry" class="inline-block mt-3 bg-whatsapp text-white font-semibold px-4 py-2.5 rounded-full text-sm">💬 Chat Now</a>' +
          '</div>' +
        '</div>' +
        '<div class="border-t border-white/10">' +
          '<div class="max-w-7xl mx-auto px-6 py-5 text-center text-white/50 text-sm">' +
            '© <span class="yr"></span> Quick Car Out Of Station · Patna, Bihar · Made for travellers of Bihar 🧡' +
          '</div>' +
        '</div>' +
      '</footer>'
    );
  }

  /* =======================  FLOATING WHATSAPP  ======================= */
  function floatHTML() {
    return (
      '<a data-wa="General Enquiry" aria-label="Chat on WhatsApp" ' +
        'class="wa-float bg-whatsapp text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lift animate-pulse-ring hover:scale-110 transition">💬</a>'
    );
  }

  /* =======================  CARD BUILDERS  ======================= */
  var Builders = {
    sectionHeading: function (opts) {
      opts = opts || {};
      return (
        '<div class="text-center max-w-2xl mx-auto mb-10" data-reveal>' +
          (opts.eyebrow ? '<p class="text-primary font-semibold uppercase tracking-wide text-sm">' + opts.eyebrow + '</p>' : '') +
          '<h2 class="font-display font-extrabold text-2xl md:text-4xl mt-2">' + (opts.title || '') + '</h2>' +
          (opts.subtitle ? '<p class="text-ink/60 mt-3">' + opts.subtitle + '</p>' : '') +
        '</div>'
      );
    },

    serviceCard: function (s) {
      return (
        '<div data-reveal class="group bg-white rounded-2xl p-6 shadow-card hover:shadow-lift hover:-translate-y-1 transition border border-black/5 flex flex-col">' +
          '<div class="w-14 h-14 rounded-xl bg-' + (s.color || 'primary') + '/10 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition">' + s.icon + '</div>' +
          '<h3 class="font-display font-bold text-lg">' + s.name + '</h3>' +
          '<p class="text-ink/60 text-sm mt-1 flex-1">' + s.desc + '</p>' +
          '<div class="flex items-center gap-2 mt-4">' +
            '<a href="' + s.slug + '" class="text-sm font-semibold text-secondary hover:underline">View details →</a>' +
            '<a data-wa="' + s.name + '" class="ml-auto bg-whatsapp text-white text-sm font-semibold px-3 py-2 rounded-full">💬 Book</a>' +
          '</div>' +
        '</div>'
      );
    },

    destinationCard: function (d) {
      var bg = d.img
        ? 'style="background-image:url(\'' + d.img + '\')"'
        : 'style="background:linear-gradient(135deg,#0A6EBD,#FF6B00)"';
      return (
        '<div data-reveal class="relative rounded-2xl overflow-hidden shadow-card h-60 bg-cover bg-center group" ' + bg + '>' +
          '<div class="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>' +
          '<div class="absolute bottom-0 p-5 text-white w-full">' +
            '<h3 class="font-display font-bold text-xl">' + d.name + '</h3>' +
            (d.price ? '<p class="text-white/80 text-sm">Starting ₹' + d.price + '</p>' : '') +
            '<a data-wa="' + (d.wa || d.name) + '" class="inline-block mt-3 bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition">Enquire on WhatsApp</a>' +
          '</div>' +
        '</div>'
      );
    },

    testimonialCard: function (t) {
      var stars = "⭐".repeat(t.stars || 5);
      return (
        '<div class="bg-white rounded-2xl p-6 shadow-card border border-black/5 min-w-[300px] max-w-[340px]">' +
          '<div class="text-accent text-sm">' + stars + '</div>' +
          '<p class="text-ink/80 mt-3 italic">"' + t.text + '"</p>' +
          '<div class="flex items-center gap-3 mt-4">' +
            '<div class="w-10 h-10 rounded-full bg-brand-gradient text-white flex items-center justify-center font-bold">' + (t.name ? t.name[0] : "?") + '</div>' +
            '<div><div class="font-semibold text-sm">' + t.name + '</div><div class="text-ink/50 text-xs">' + (t.city || '') + '</div></div>' +
          '</div>' +
        '</div>'
      );
    },

    statCard: function (st) {
      return (
        '<div data-reveal class="bg-white rounded-2xl p-6 shadow-card text-center">' +
          '<div class="font-display font-extrabold text-3xl md:text-4xl text-' + (st.color || 'primary') + '">' +
            '<span data-count="' + st.count + '">0</span>' + (st.suffix || '+') + '</div>' +
          '<div class="text-ink/60 mt-1 text-sm">' + st.label + '</div>' +
        '</div>'
      );
    },

    ctaBanner: function (opts) {
      opts = opts || {};
      return (
        '<section data-reveal class="bg-brand-gradient rounded-3xl px-6 py-12 md:py-14 text-center text-white shadow-lift">' +
          '<h2 class="font-display font-extrabold text-2xl md:text-4xl">' + (opts.title || 'Ready to travel?') + '</h2>' +
          '<p class="mt-3 text-white/90 max-w-xl mx-auto">' + (opts.subtitle || 'Bas ek message bhejo, baaki hum sambhal lenge.') + '</p>' +
          '<a data-wa="' + (opts.wa || 'General Enquiry') + '" class="inline-flex items-center gap-2 mt-6 bg-white text-primary font-bold px-7 py-3.5 rounded-full shadow-card hover:scale-105 transition">💬 ' + (opts.button || 'Book on WhatsApp') + '</a>' +
        '</section>'
      );
    },

    /* Generic "option" card — car type, bus type, hotel category, flight service... */
    optionCard: function (o) {
      var tags = (o.tags || []).map(function (t) {
        return '<span class="bg-black/5 text-ink/70 px-2 py-1 rounded-full">' + t + '</span>';
      }).join("");
      return (
        '<div data-reveal class="bg-cream rounded-2xl overflow-hidden shadow-card hover:shadow-lift hover:-translate-y-1 transition border border-black/5 flex flex-col">' +
          '<div class="h-32 flex items-center justify-center text-6xl bg-white">' + (o.icon || "✨") + '</div>' +
          '<div class="p-5 flex flex-col flex-1">' +
            '<h3 class="font-display font-bold text-lg">' + o.name + '</h3>' +
            (o.sub ? '<p class="text-ink/50 text-xs mt-0.5">' + o.sub + '</p>' : '') +
            (tags ? '<div class="flex flex-wrap gap-2 mt-3 text-xs">' + tags + '</div>' : '') +
            '<a data-wa="' + (o.wa || o.name) + '" class="block text-center mt-auto pt-4"><span class="block bg-whatsapp text-white font-semibold text-sm px-4 py-2.5 rounded-full">💬 ' + (o.cta || "Enquire") + '</span></a>' +
          '</div>' +
        '</div>'
      );
    },

    /* Package card — tour / honeymoon / foreign packages */
    packageCard: function (p) {
      var bg = p.img
        ? 'background-image:url(\'' + p.img + '\')'
        : 'background:linear-gradient(135deg,#0A6EBD,#FF6B00)';
      return (
        '<div data-reveal class="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-lift hover:-translate-y-1 transition border border-black/5 flex flex-col">' +
          '<div class="h-44 bg-cover bg-center" style="' + bg + '"></div>' +
          '<div class="p-6 flex flex-col flex-1">' +
            '<div class="flex items-center justify-between gap-2">' +
              '<h3 class="font-display font-bold text-lg">' + p.name + '</h3>' +
              (p.duration ? '<span class="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full whitespace-nowrap">' + p.duration + '</span>' : '') +
            '</div>' +
            (p.highlights ? '<p class="text-ink/60 text-sm mt-2 flex-1">' + p.highlights + '</p>' : '<div class="flex-1"></div>') +
            '<div class="flex items-center justify-between mt-4">' +
              (p.price ? '<div><span class="text-ink/50 text-xs">Starting</span><div class="font-display font-extrabold text-primary text-xl">₹' + p.price + '</div></div>' : '<span></span>') +
              '<a data-wa="' + (p.wa || p.name) + '" class="bg-whatsapp text-white font-semibold text-sm px-4 py-2.5 rounded-full">💬 Enquire</a>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    },

    faqAccordion: function (items) {
      var rows = (items || []).map(function (q, i) {
        return (
          '<details class="bg-white rounded-xl shadow-card border border-black/5 overflow-hidden">' +
            '<summary class="cursor-pointer px-5 py-4 font-semibold flex items-center justify-between list-none">' +
              '<span>' + q.q + '</span><span class="text-primary text-xl">+</span></summary>' +
            '<div class="px-5 pb-4 text-ink/70 text-sm">' + q.a + '</div>' +
          '</details>'
        );
      }).join("");
      return '<div class="space-y-3 max-w-3xl mx-auto">' + rows + '</div>';
    },
  };

  /* =======================  SEO / META INJECTION  =======================
     Saare pages me favicon, theme-color, canonical, Open Graph, Twitter card
     aur JSON-LD (TravelAgency) schema auto-inject hota hai. Ek jagah, sab pages. */
  function setMeta(attr, key, content) {
    var sel = 'meta[' + attr + '="' + key + '"]';
    var el = document.head.querySelector(sel);
    if (!el) { el = document.createElement("meta"); el.setAttribute(attr, key); document.head.appendChild(el); }
    el.setAttribute("content", content);
  }
  function injectSEO() {
    var title = document.title || SITE.name || "Quick Car Out Of Station";
    var descEl = document.head.querySelector('meta[name="description"]');
    var desc = descEl ? descEl.getAttribute("content") : (SITE.tagline || "");
    var ogImage = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80";
    var url = location.href.split("#")[0];

    // Favicon (SVG)
    if (!document.head.querySelector('link[rel="icon"]')) {
      var fav = document.createElement("link");
      fav.rel = "icon"; fav.type = "image/svg+xml"; fav.href = "favicon.svg";
      document.head.appendChild(fav);
    }
    // Theme colour (mobile address bar)
    setMeta("name", "theme-color", "#FF6B00");

    // Canonical
    if (!document.head.querySelector('link[rel="canonical"]')) {
      var can = document.createElement("link");
      can.rel = "canonical"; can.href = url;
      document.head.appendChild(can);
    }

    // Open Graph + Twitter
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE.name || "Quick Car Out Of Station");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", desc);
    setMeta("name", "twitter:image", ogImage);

    // JSON-LD structured data (TravelAgency)
    if (!document.getElementById("ld-business")) {
      var ld = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": SITE.name,
        "description": desc,
        "image": ogImage,
        "url": location.origin + "/",
        "telephone": SITE.phone,
        "email": SITE.email,
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Patna",
          "addressRegion": "Bihar",
          "addressCountry": "IN"
        },
        "areaServed": "India",
        "openingHours": "Mo-Su 00:00-23:59",
        "sameAs": [
          (SITE.social || {}).instagram,
          (SITE.social || {}).facebook,
          (SITE.social || {}).youtube
        ].filter(function (x) { return x && x !== "#"; }),
        "makesOffer": (window.SERVICES || []).map(function (s) {
          return { "@type": "Offer", "itemOffered": { "@type": "Service", "name": s.name } };
        })
      };
      var script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "ld-business";
      script.textContent = JSON.stringify(ld);
      document.head.appendChild(script);
    }
  }

  /* =======================  INIT  ======================= */
  function init() {
    injectSEO();

    var h = document.getElementById("site-header");
    if (h) h.innerHTML = headerHTML();

    var f = document.getElementById("site-footer");
    if (f) f.innerHTML = footerHTML();

    // Floating button (add once)
    if (!document.querySelector(".wa-float")) {
      var div = document.createElement("div");
      div.innerHTML = floatHTML();
      document.body.appendChild(div.firstChild);
    }

    // Year fill
    document.querySelectorAll(".yr").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });

    // Sticky header shadow on scroll
    var hdr = document.getElementById("hdr");
    if (hdr) {
      window.addEventListener("scroll", function () {
        hdr.classList.toggle("shadow-card", window.scrollY > 8);
      });
    }

    // Wire WhatsApp + animations on newly injected content
    if (window.UI && window.UI.refresh) window.UI.refresh(document);
    else if (window.WA && window.WA.wire) window.WA.wire(document);
  }

  window.Components = Builders;
  window.Components.init = init;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
