/* =========================================================================
   Quick Car Out Of Station — Service Page Builder
   -------------------------------------------------------------------------
   Ek hi config se pura service page render karta hai (DRY). Har page bas
   ek PAGE_CONFIG object deta hai aur renderServicePage(cfg) call karta hai.

   Config shape (sab sections optional, jo na do wo skip ho jaata hai):
   {
     hero:    { badge, heading, highlight, sub, ctaText, ctaWa, bgImage },
     pills:   [ { icon, title, desc } ],                       // 4-up row
     cards:   { eyebrow, title, subtitle, type:'option'|'package', items:[] },
     list:    { eyebrow, title, subtitle, head:[c1,c2], rows:[ {label, meta, wa} ], note },
     features:{ eyebrow, title, items:[ {i,t,d} ] },
     extra:   '<custom html>',                                 // optional raw block
     faq:     { eyebrow, title, items:[ {q,a} ] },
     cta:     { title, subtitle, wa, button }
   }
   ========================================================================= */

(function () {
  function heroSection(h) {
    if (!h) return "";
    var bg = h.bgImage
      ? 'style="background-image:url(\'' + h.bgImage + '\')"'
      : 'style="background:linear-gradient(135deg,#0A6EBD,#FF6B00)"';
    return (
      '<section class="relative overflow-hidden">' +
        '<div class="absolute inset-0 bg-cover bg-center" ' + bg + '></div>' +
        '<div class="absolute inset-0 bg-hero-overlay"></div>' +
        '<div class="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-white">' +
          '<nav class="text-white/70 text-sm mb-4" data-reveal><a href="index.html" class="hover:text-accent">Home</a> / <span class="text-white">' + (h.crumb || h.heading) + '</span></nav>' +
          '<div class="max-w-2xl" data-reveal>' +
            (h.badge ? '<span class="inline-block bg-primary text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">' + h.badge + '</span>' : '') +
            '<h1 class="font-display font-extrabold text-4xl md:text-5xl leading-tight">' + h.heading + (h.highlight ? ' <span class="text-accent">' + h.highlight + '</span>' : '') + '</h1>' +
            (h.sub ? '<p class="mt-5 text-lg text-white/90">' + h.sub + '</p>' : '') +
            '<div class="flex flex-wrap gap-3 mt-7">' +
              '<a data-wa="' + (h.ctaWa || h.heading) + '" class="bg-whatsapp text-white font-bold px-7 py-4 rounded-full shadow-lift hover:scale-105 transition text-lg">💬 ' + (h.ctaText || "Enquire on WhatsApp") + '</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>'
    );
  }

  function pillsSection(pills) {
    if (!pills || !pills.length) return "";
    var cols = pills.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4";
    var cards = pills.map(function (p) {
      return (
        '<div data-reveal class="bg-white rounded-2xl p-6 shadow-card text-center">' +
          '<div class="text-4xl mb-3">' + p.icon + '</div>' +
          '<h3 class="font-display font-bold">' + p.title + '</h3>' +
          '<p class="text-ink/60 text-sm mt-1">' + p.desc + '</p>' +
        '</div>'
      );
    }).join("");
    return '<section class="max-w-7xl mx-auto px-6 py-14"><div class="grid gap-4 sm:grid-cols-2 ' + cols + '">' + cards + '</div></section>';
  }

  function cardsSection(c) {
    if (!c || !c.items || !c.items.length) return "";
    var C = window.Components;
    var builder = c.type === "package" ? C.packageCard : C.optionCard;
    var grid = c.type === "package" ? "md:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4";
    var inner = c.items.map(builder).join("");
    return (
      '<section class="bg-white border-y border-black/5"><div class="max-w-7xl mx-auto px-6 py-16">' +
        C.sectionHeading({ eyebrow: c.eyebrow, title: c.title, subtitle: c.subtitle }) +
        '<div class="grid gap-6 ' + grid + '">' + inner + '</div>' +
      '</div></section>'
    );
  }

  function listSection(l) {
    if (!l || !l.rows || !l.rows.length) return "";
    var C = window.Components;
    var head = l.head || ["Route", "Detail"];
    var rows = l.rows.map(function (r) {
      return (
        '<tr class="hover:bg-primary/5">' +
          '<td class="px-5 py-4 font-semibold">' + r.label + '</td>' +
          '<td class="px-5 py-4 text-ink/60 hidden sm:table-cell">' + (r.meta || "") + '</td>' +
          '<td class="px-5 py-4 text-right"><a data-wa="' + (r.wa || r.label) + '" class="inline-block bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-primary-dark transition">Book →</a></td>' +
        '</tr>'
      );
    }).join("");
    return (
      '<section class="max-w-7xl mx-auto px-6 py-16">' +
        C.sectionHeading({ eyebrow: l.eyebrow, title: l.title, subtitle: l.subtitle }) +
        '<div class="overflow-hidden rounded-2xl shadow-card border border-black/5 bg-white">' +
          '<table class="w-full text-left"><thead class="bg-ink text-white text-sm"><tr>' +
            '<th class="px-5 py-4">' + head[0] + '</th>' +
            '<th class="px-5 py-4 hidden sm:table-cell">' + head[1] + '</th>' +
            '<th class="px-5 py-4 text-right">Book</th>' +
          '</tr></thead><tbody class="divide-y divide-black/5 text-sm">' + rows + '</tbody></table>' +
        '</div>' +
        (l.note ? '<p class="text-ink/50 text-sm mt-3 text-center">' + l.note + '</p>' : '') +
      '</section>'
    );
  }

  function featuresSection(f) {
    if (!f || !f.items || !f.items.length) return "";
    var C = window.Components;
    var items = f.items.map(function (x) {
      return '<div data-reveal class="flex gap-4 bg-cream rounded-2xl p-5 border border-black/5"><div class="text-3xl">' + x.i + '</div><div><h3 class="font-display font-bold">' + x.t + '</h3><p class="text-ink/60 text-sm mt-1">' + x.d + '</p></div></div>';
    }).join("");
    return (
      '<section class="bg-white border-y border-black/5"><div class="max-w-7xl mx-auto px-6 py-16">' +
        C.sectionHeading({ eyebrow: f.eyebrow, title: f.title }) +
        '<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">' + items + '</div>' +
      '</div></section>'
    );
  }

  function faqSection(q) {
    if (!q || !q.items || !q.items.length) return "";
    var C = window.Components;
    return (
      '<section class="max-w-7xl mx-auto px-6 py-16">' +
        C.sectionHeading({ eyebrow: q.eyebrow, title: q.title }) +
        C.faqAccordion(q.items) +
      '</section>'
    );
  }

  function ctaSection(cta) {
    if (!cta) return "";
    return '<section class="max-w-7xl mx-auto px-6 py-16">' + window.Components.ctaBanner(cta) + '</section>';
  }

  window.renderServicePage = function (cfg) {
    var root = document.getElementById("page-root");
    if (!root) return;
    if (cfg.title) document.title = cfg.title;

    root.innerHTML =
      heroSection(cfg.hero) +
      pillsSection(cfg.pills) +
      cardsSection(cfg.cards) +
      listSection(cfg.list) +
      featuresSection(cfg.features) +
      (cfg.extra || "") +
      faqSection(cfg.faq) +
      ctaSection(cfg.cta);

    if (window.UI && window.UI.refresh) window.UI.refresh(document);
  };
})();
