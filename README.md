# Quick Car Out Of Station

A vibrant, mobile-first travel website for **Patna, Bihar** — cabs, flights, hotels,
trains, tours, honeymoon & visa packages. Every enquiry opens **WhatsApp directly**
(no backend, no API).

## ✨ Features
- 12 pages: Home + 8 service pages + About, Contact, Destinations
- Hero **video** background on homepage
- 100% WhatsApp-driven enquiries (`wa.me` deep links, no server)
- Rich, dynamic design (animations, carousels, counters)
- SEO ready: meta tags, Open Graph, JSON-LD schema, sitemap, robots.txt
- Fully responsive

## 🗂️ Structure
```
index.html              # Home
cab-booking.html        # + 7 more service pages
about / contact / destinations.html
css/style.css           # global styles + theme
js/
  config.js             # 🔑 business details (WhatsApp number, phone, address)
  theme.js              # Tailwind brand theme
  data.js               # services + nav data
  components.js         # header, footer, cards, SEO injection
  page.js               # reusable service-page builder
  whatsapp.js           # wa.me link helper
  main.js               # animations, menus, carousels
assets/  images/        # media (add real video/photos here)
context.md  phases.md    # planning docs
```

## ▶️ Run locally
Koi build step nahi — static site hai. Project folder me:
```bash
python3 -m http.server 8000
```
Phir browser me khol: http://localhost:8000

## ⚙️ Go-live checklist (Phase 8)
- [ ] `js/config.js` me real **WhatsApp number**, phone, email, address, social links daalo
- [ ] `assets/hero.mp4` me apna hero video daalo
- [ ] `images/` me real photos daalo (abhi Unsplash placeholders hain)
- [ ] `robots.txt` & `sitemap.xml` me asli domain daalo
- [ ] Deploy (Netlify / Vercel / GitHub Pages)
