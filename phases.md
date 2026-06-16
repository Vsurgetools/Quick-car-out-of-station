# Quick Car Out Of Station — Phase-Wise Execution Plan

> Project ko 8 phases me baanta gaya hai. Har phase ek complete + testable unit hai.
> Ek phase finish + approve hone ke baad hi agla shuru karenge.
> Full content reference: see [context.md](context.md).

---

## Phase 0 — Foundation / Setup
**Goal:** Project skeleton ready ho jaaye.
- Folder structure banao (`/`, `/assets`, `/css`, `/js`, `/images`, page files).
- Tailwind CSS setup (CDN ya build).
- Global theme: colour palette (saffron `#FF6B00`, blue `#0A6EBD`, gold `#FFC107`, WhatsApp green `#25D366`), fonts (Poppins/Montserrat + Inter).
- `whatsapp.js` helper: ek reusable function jo har button ke liye pre-filled `wa.me` link banaye.
- Config jagah jahan business WhatsApp number + phone ek baar set ho (placeholder abhi).

**Deliverable:** Empty styled shell jo browser me khulta hai.
**Depends on client:** WhatsApp number (placeholder se bhi chalega).

---

## Phase 1 — Global Components
**Goal:** Har page pe repeat hone wale parts.
- Header / sticky nav (logo, menu, Packages dropdown, "WhatsApp Us" button, mobile hamburger).
- Footer (links, contact, social, copyright).
- Floating WhatsApp button (animated, har page pe).
- Reusable cards: service card, destination card, testimonial card, stat counter, CTA banner, FAQ accordion.

**Deliverable:** Components ready, ek dummy page pe dikhte hue.

---

## Phase 2 — Home Page  ⭐ (face of the site)
**Goal:** Complete homepage.
- Hero with **background video** + gradient overlay + headline + 2 CTAs.
- Services grid (8 services).
- Why Choose Us, Stats counters.
- Popular Destinations carousel.
- Featured packages, How it works (3 steps).
- Testimonials carousel, CTA banner.

**Deliverable:** Fully working, animated homepage.
**Depends on client:** Hero video (royalty-free placeholder se shuru karenge).

---

## Phase 3 — Cab Booking Page  🚗 (flagship)
**Goal:** Brand ka core service page.
- Hero banner, car types grid (Hatchback/Sedan/SUV/Tempo).
- Popular routes from Patna (Gaya, Bodh Gaya, Nepal, Varanasi, Ranchi, Deoghar).
- Features, how-to-book steps, FAQ, WhatsApp CTA.

**Deliverable:** Complete cab booking page.

---

## Phase 4 — Travel Service Pages (4 pages)
**Goal:** Shared template se baaki transport/stay services.
- Bus Booking
- Flight Booking
- Train Booking
- Hotel Booking

**Deliverable:** 4 consistent service pages (each with hero, options, popular routes/stays, FAQ, WhatsApp CTA).

---

## Phase 5 — Package Pages (3 pages)
**Goal:** Holiday/package offerings.
- Tour Package (category tabs + package cards)
- Honeymoon Package (romantic destinations)
- Visa & Foreign Tour Package (visa help + international packages)

**Deliverable:** 3 package pages with customisation-on-WhatsApp CTAs.

---

## Phase 6 — Supporting Pages (3 pages)
**Goal:** Trust + contact + inspiration.
- About Us
- Contact (WhatsApp card, phone, Patna address, map embed) — form bhi WhatsApp deep link se hi.
- Popular Destinations (filterable gallery grid).

**Deliverable:** Site structurally complete (all 12 pages live).

---

## Phase 7 — Polish, Responsive & SEO
**Goal:** Production quality.
- Mobile-first responsive pass (all pages, all breakpoints).
- Animations / scroll effects / carousels smooth.
- SEO: meta tags, titles, local keywords (Patna/Bihar), schema markup, favicon, sitemap.
- Performance: image/video optimisation, lazy loading.
- Cross-browser + WhatsApp link testing.

**Deliverable:** Fast, polished, mobile-perfect site.

---

## Phase 8 — Real Content & Deploy
**Goal:** Go live.
- Placeholders ko client ke real data se replace karo (number, prices, routes, photos, testimonials, video, social links, logo).
- Deploy (Netlify / Vercel / GitHub Pages).
- Final live testing.

**Deliverable:** Live website.
**Depends on client:** All real assets (see context.md §7).

---

## Quick Reference — Phase → Pages

| Phase | Output | Pages |
|---|---|---|
| 0 | Setup/foundation | — |
| 1 | Global components | — |
| 2 | Home | 1 |
| 3 | Cab Booking | 1 |
| 4 | Bus, Flight, Train, Hotel | 4 |
| 5 | Tour, Honeymoon, Visa/Foreign | 3 |
| 6 | About, Contact, Destinations | 3 |
| 7 | Polish + responsive + SEO | (all) |
| 8 | Real content + deploy | (all) |

**Total = 12 pages across 8 phases.**

---

## Hard Constraints (every phase respects these)
- ❌ No internal API / backend / database.
- ✅ All enquiries → WhatsApp `wa.me` deep links.
- ✅ Rich/vibrant/dynamic design — never minimalist.
- ✅ Home hero = destination background video.
- ✅ Mobile-first, Patna/Bihar focus, INR pricing.
