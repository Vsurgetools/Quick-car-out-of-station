# Quick Car Out Of Station — Website Context & Content Plan

> Single source of truth for the website. Every page, every section, and every
> content block is described here so design and build stay consistent.

---

## 1. Project Overview

| Item | Detail |
|---|---|
| **Website name** | Quick Car Out Of Station |
| **Market** | India — primarily Bihar / Patna |
| **Type** | Travel & tour services (front-end only, no backend, no internal API) |
| **Primary action** | Every enquiry / booking opens **WhatsApp directly** (click-to-chat). No forms hit any API. |
| **Language** | Hindi + English mix (Hinglish friendly), English-first labels |
| **Currency** | INR (₹) |

### Services offered (8)
1. Cab Booking (flagship — the name of the brand)
2. Bus Booking
3. Flight Booking
4. Train Booking
5. Hotel Booking
6. Tour Package
7. Honeymoon Package
8. Visa & Foreign Tour Package

---

## 2. Design Direction (IMPORTANT: NOT minimalist)

The brand serves Indian travellers from Bihar/Patna — the look should feel
**rich, vibrant, energetic and trustworthy**, like a premium Indian travel brand.

- **Mood:** lively, colourful, "wanderlust", full-bleed travel imagery.
- **Hero:** full-screen **background video** of a vacation destination
  (mountains / beach / road trip / highway drive), with a dark gradient overlay
  so headline text stays readable.
- **Colour palette (suggested):**
  - Primary: deep saffron / orange `#FF6B00` (Indian, warm, travel)
  - Secondary: royal blue / teal `#0A6EBD` (trust)
  - Accent: gold `#FFC107`
  - WhatsApp green `#25D366` for all WhatsApp buttons
  - Neutral darks `#1A1A1A`, light bg `#FFF8F0`
- **Typography:** bold display font for headlines (e.g. Poppins / Montserrat),
  clean readable body (Inter / Open Sans). Devanagari support for occasional Hindi text.
- **Motion / "dynamic":** scroll animations, card hover lifts, animated counters
  (happy customers, trips done), auto-sliding testimonial & destination carousels,
  sticky animated WhatsApp floating button.
- **Imagery:** real destination photos, rounded cards, soft shadows, gradient banners.
- Avoid: flat white minimalist layouts, lots of empty space, thin grey text.

---

## 3. Technical Approach

- **Front-end only.** No server, no database, no internal API.
- **Enquiry handling = WhatsApp deep links.** Each button builds a pre-filled
  message and opens `https://wa.me/<NUMBER>?text=<encoded message>`.
- **Recommended stack:** static site — HTML + Tailwind CSS + a little vanilla JS
  (carousels, animations, video). Simple to host on Netlify / Vercel / GitHub Pages.
  (Optional upgrade: Next.js/React if more interactivity is wanted later.)
- **Responsive:** mobile-first — most Patna users will be on phones.
- **SEO:** local keywords ("Patna to Bihar cab", "outstation car rental Patna",
  "Bihar tour package"), meta tags, schema markup, fast loading.

### WhatsApp link format (reusable)
```
https://wa.me/91XXXXXXXXXX?text=Hi%20Quick%20Car%20Out%20Of%20Station%2C%20I%20want%20to%20enquire%20about%20<SERVICE>
```
> Replace `91XXXXXXXXXX` with the real business WhatsApp number. Each service page
> pre-fills `<SERVICE>` so the team knows which service the lead is about.

---

## 4. Site Map — Total Pages = 12

| # | Page | Route | Purpose |
|---|---|---|---|
| 1 | Home | `/` | Hero video + all services + trust + CTA |
| 2 | Cab Booking | `/cab-booking` | Flagship outstation cab service |
| 3 | Bus Booking | `/bus-booking` | Bus tickets / bus hire |
| 4 | Flight Booking | `/flight-booking` | Domestic & intl flight enquiry |
| 5 | Train Booking | `/train-booking` | Train ticket assistance |
| 6 | Hotel Booking | `/hotel-booking` | Hotel reservations |
| 7 | Tour Package | `/tour-package` | Curated holiday packages |
| 8 | Honeymoon Package | `/honeymoon-package` | Romantic getaways |
| 9 | Visa & Foreign Tour | `/visa-foreign-tour` | Visa help + intl packages |
| 10 | About Us | `/about` | Story, trust, why choose us |
| 11 | Contact | `/contact` | WhatsApp, phone, address, map |
| 12 | Popular Destinations | `/destinations` | Inspiration / gallery feeding into packages |

**Global (on every page):** Header/Nav, Footer, floating WhatsApp button.

---

## 5. Global Components

### 5.1 Header / Navigation
- Logo "Quick Car Out Of Station" (left).
- Nav links: Home, Cab, Bus, Flight, Train, Hotel, Packages (dropdown: Tour, Honeymoon, Visa/Foreign), Destinations, About, Contact.
- Right side: phone number + a green **"WhatsApp Us"** button.
- Sticky on scroll, mobile = hamburger menu.

### 5.2 Footer
- Brand blurb + logo.
- Quick links to all 8 services.
- Contact: phone, WhatsApp, email, Patna office address.
- Social icons (Instagram, Facebook, YouTube).
- Copyright line + "Made for travellers of Bihar".

### 5.3 Floating WhatsApp Button
- Fixed bottom-right, animated pulse, green. Opens WhatsApp chat on every page.

### 5.4 Reusable blocks
- **Service card** (icon, title, 1-line desc, "Book on WhatsApp" button).
- **Destination card** (photo, name, starting price, CTA).
- **Testimonial card** (photo, name, city, stars, quote).
- **Stat counter** (number + label).
- **CTA banner** (gradient strip: "Plan your trip now" + WhatsApp button).
- **FAQ accordion**.

---

## 6. Page-by-Page Content

### PAGE 1 — Home (`/`)
1. **Hero (video background)**
   - Background: looping vacation/road-trip video + dark gradient overlay.
   - Headline: "Aapka Safar, Hamari Zimmedari" / "Your Journey, Our Responsibility".
   - Sub: "Cabs, Flights, Hotels, Tours & more — all from Patna, one WhatsApp away."
   - Two buttons: **"Book on WhatsApp"** (green) + "Explore Services".
   - Optional quick "What do you need?" chips (Cab / Hotel / Tour) → jump to service.
2. **Services grid** — 8 service cards in a colourful grid.
3. **Why Choose Us** — 4 icons: 24x7 support, Best price, Verified drivers/partners, 100% on WhatsApp (no app needed).
4. **Stats counters** — Happy customers, Trips completed, Cities covered, Years of service.
5. **Popular Destinations carousel** — auto-sliding cards (Nepal, Manali, Goa, Varanasi, Bodh Gaya, Darjeeling, Char Dham, etc.).
6. **Featured Tour/Honeymoon packages** — 3 highlighted package cards.
7. **How it works** — 3 steps: Choose service → WhatsApp us → Travel happy.
8. **Testimonials carousel** — from Patna/Bihar customers.
9. **CTA banner** — "Ready to travel? Message us now" + WhatsApp.
10. **Footer**.

### PAGE 2 — Cab Booking (`/cab-booking`)  *(flagship)*
- Hero banner (highway/road-trip image): "Outstation Cabs from Patna — Anywhere in India".
- Intro: outstation, one-way, round-trip, airport pickup/drop, local rentals.
- **Car types grid:** Hatchback, Sedan, SUV/Innova, Tempo Traveller (each: image, seats, AC, "Get fare on WhatsApp").
- **Popular routes table:** Patna→Gaya, Patna→Bodh Gaya, Patna→Nepal, Patna→Varanasi, Patna→Ranchi, Patna→Deoghar (route + approx distance + "Book").
- Features: experienced drivers, transparent fare, 24x7, GPS, sanitised cars.
- How to book (3 steps) + WhatsApp CTA.
- FAQ (one-way charges, night charges, toll/parking, cancellation).
- CTA banner + footer.

### PAGE 3 — Bus Booking (`/bus-booking`)
- Hero: "Book Bus Tickets & Hire Buses across Bihar & India".
- Two sections: **Bus ticket booking** and **Bus on hire** (weddings, group tours, school trips).
- Bus types: Seater, Sleeper, AC/Non-AC, Volvo, Mini bus.
- Popular bus routes from Patna.
- Why us + WhatsApp CTA + FAQ + footer.

### PAGE 4 — Flight Booking (`/flight-booking`)
- Hero: "Domestic & International Flights at Best Price".
- Services: domestic, international, group booking, cheap fare alerts, rescheduling help.
- Popular routes from Patna (PAT): Patna→Delhi, Patna→Mumbai, Patna→Bangalore, Patna→Kolkata.
- "Tell us your dates on WhatsApp, we find best fare" CTA.
- Why book through us (human support, no hidden fee) + FAQ + footer.

### PAGE 5 — Train Booking (`/train-booking`)
- Hero: "Train Ticket Booking & Tatkal Assistance".
- Services: confirmed tickets help, Tatkal, group/family bookings, waitlist guidance.
- Popular train routes from Patna.
- Note: assistance-based service; WhatsApp your journey details.
- FAQ + CTA + footer.

### PAGE 6 — Hotel Booking (`/hotel-booking`)
- Hero: "Hotels & Stays at Best Rates — India & Abroad".
- Categories: Budget, 3-star, 4/5-star, Resorts, Homestays.
- Popular stay destinations (Goa, Manali, Nainital, Nepal, religious-town hotels near Bodh Gaya/Deoghar).
- Featured hotel cards (image, location, "starting from ₹__", WhatsApp).
- Why us (negotiated rates, verified) + CTA + footer.

### PAGE 7 — Tour Package (`/tour-package`)
- Hero: "Holiday Packages — Handcrafted for You".
- Package category tabs: Domestic, Hill stations, Beaches, Pilgrimage/Religious, Adventure.
- **Package cards:** name, image, duration (e.g. 5N/6D), highlights, "starting ₹__", "Customise on WhatsApp".
  - e.g. Manali–Shimla, Goa, Kashmir, Char Dham, Nepal, Kerala, Andaman, Bodh Gaya–Varanasi circuit.
- "Fully customisable — tell us budget & dates" message.
- Inclusions/exclusions explainer + FAQ + CTA + footer.

### PAGE 8 — Honeymoon Package (`/honeymoon-package`)
- Romantic hero (couple/destination): "Honeymoon Packages — Begin Your Forever".
- Curated romantic destinations: Maldives, Bali, Manali, Kashmir, Goa, Andaman, Shimla, Thailand.
- Package cards (duration, romantic highlights — candlelight dinner, private cab, resort), "starting ₹__".
- "Custom honeymoon planning on WhatsApp" CTA.
- Why us (privacy, special arrangements) + footer.

### PAGE 9 — Visa & Foreign Tour Package (`/visa-foreign-tour`)
- Hero: "Visa Assistance & International Tour Packages".
- **Visa section:** tourist visa help, documentation guidance, popular countries (Dubai, Thailand, Singapore, Malaysia, Nepal, Bali, Europe Schengen).
- **Foreign tour packages:** Dubai, Thailand, Singapore-Malaysia, Bali, Maldives, Europe — cards with duration & starting price.
- Process steps + "Share your destination on WhatsApp" CTA.
- FAQ (visa timelines, documents) + footer.

### PAGE 10 — About Us (`/about`)
- Hero/banner: brand story.
- Who we are — a Patna-based travel service making travel easy for Bihar.
- Mission / vision.
- Stats counters (reuse).
- Why choose us (trust, local, all-in-one, WhatsApp-first).
- Team / values (optional).
- CTA banner + footer.

### PAGE 11 — Contact (`/contact`)
- Hero: "Get in Touch".
- Big WhatsApp CTA card (primary).
- Phone number(s), email, office address (Patna).
- Working hours.
- Embedded Google Map of office (static embed, not an API key requirement).
- Social links.
- NOTE: a contact form, if used, must **submit via WhatsApp deep link** (build message from fields, no API). Footer.

### PAGE 12 — Popular Destinations (`/destinations`)
- Hero: "Explore Destinations".
- Filterable gallery grid: Domestic / International / Pilgrimage / Hills / Beaches.
- Each destination card → links to relevant package or pre-filled WhatsApp enquiry.
- Inspirational copy + CTA + footer.

---

## 7. Content / Assets To Collect From Client
- ✅ Real WhatsApp business number + phone number(s).
- ✅ Office address in Patna + working hours.
- Logo file (or we design one).
- Hero background video (or we use a royalty-free vacation clip).
- Real package prices & route fares (placeholders used until provided).
- Photos of cars / destinations (or licensed stock).
- Customer testimonials.
- Social media links.

---

## 8. Build Order (suggested)
1. Set up project + Tailwind + global styles, colours, fonts.
2. Build global components (header, footer, WhatsApp button, reusable cards).
3. Home page (hero video + all sections).
4. Cab Booking (flagship) page.
5. Remaining 6 service pages (shared template).
6. About, Contact, Destinations.
7. Responsive pass + animations + SEO meta + testing.
8. Replace placeholder content with client's real data + deploy.

---

## 9. Hard Constraints (do not break)
- ❌ No internal API, no backend, no database.
- ✅ All enquiries open WhatsApp directly via `wa.me` deep links.
- ✅ Design is rich/vibrant/dynamic — **never minimalist**.
- ✅ Home hero uses a destination **background video**.
- ✅ Mobile-first, India/Patna-focused, INR pricing.
