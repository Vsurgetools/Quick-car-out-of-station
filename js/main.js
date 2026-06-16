/* =========================================================================
   Quick Car Out Of Station — Shared Interactions
   -------------------------------------------------------------------------
   Scroll-reveal, mobile menu, counters, simple carousels.
   Exposes window.UI.refresh() so dynamically-injected content (header,
   cards, etc.) ko bhi wire kiya ja sake.
   ========================================================================= */

(function () {
  /* ---- Scroll reveal for [data-reveal] elements ---- */
  function initScrollReveal(root) {
    var scope = root || document;
    var els = scope.querySelectorAll("[data-reveal]:not(.reveal-bound)");
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible", "reveal-bound"); });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach(function (el) { el.classList.add("reveal-bound"); obs.observe(el); });
  }

  /* ---- Mobile menu toggle ([data-menu-toggle] -> #mobile-menu) ---- */
  function initMobileMenu() {
    var toggles = document.querySelectorAll("[data-menu-toggle]:not(.menu-bound)");
    toggles.forEach(function (toggle) {
      toggle.classList.add("menu-bound");
      toggle.addEventListener("click", function () {
        var menu = document.getElementById("mobile-menu");
        if (menu) menu.classList.toggle("hidden");
      });
    });
  }

  /* ---- Animated counters ([data-count="1200"]) ---- */
  function initCounters(root) {
    var scope = root || document;
    var counters = scope.querySelectorAll("[data-count]:not(.count-bound)");
    if (!counters.length) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseInt(el.getAttribute("data-count"), 10) || 0;
        var dur = 1400, t0 = null;
        function step(ts) {
          if (!t0) t0 = ts;
          var p = Math.min((ts - t0) / dur, 1);
          el.textContent = Math.floor(p * target).toLocaleString("en-IN");
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        obs.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { el.classList.add("count-bound"); obs.observe(el); });
  }

  /* ---- Auto carousel ([data-carousel] track, scrolls horizontally) ---- */
  function initCarousels(root) {
    var scope = root || document;
    var carousels = scope.querySelectorAll("[data-carousel]:not(.carousel-bound)");
    carousels.forEach(function (track) {
      track.classList.add("carousel-bound");
      var delay = parseInt(track.getAttribute("data-carousel"), 10) || 3500;
      setInterval(function () {
        if (track.matches(":hover")) return;
        var max = track.scrollWidth - track.clientWidth;
        var next = track.scrollLeft + track.clientWidth * 0.8;
        track.scrollTo({ left: next >= max - 4 ? 0 : next, behavior: "smooth" });
      }, delay);
    });
  }

  /* ---- Public: re-run everything (after dynamic injection) ---- */
  function refresh(root) {
    initScrollReveal(root);
    initCounters(root);
    initCarousels(root);
    initMobileMenu();
    if (window.WA && window.WA.wire) window.WA.wire(root);
  }

  window.UI = { refresh: refresh };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { refresh(document); });
  } else {
    refresh(document);
  }
})();
