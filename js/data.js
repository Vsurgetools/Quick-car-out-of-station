/* =========================================================================
   Quick Car Out Of Station — Content Data
   -------------------------------------------------------------------------
   Services + navigation ek hi source se. Nav dropdown aur home page grid
   dono yahin se render honge — consistency guaranteed.
   ========================================================================= */

window.SERVICES = [
  { name: "Cab Booking",        slug: "cab-booking.html",      icon: "🚗", desc: "Outstation cabs from Patna — anywhere in India.", color: "primary" },
  { name: "Hire Driver",        slug: "hire-driver.html",      icon: "🧑‍✈️", desc: "Professional drivers, all over India.",          color: "secondary" },
  { name: "Bus Booking",        slug: "bus-booking.html",      icon: "🚌", desc: "Bus tickets & bus on hire for groups.",          color: "primary" },
  { name: "Flight Booking",     slug: "flight-booking.html",   icon: "✈️", desc: "Domestic & international flights at best fare.",  color: "primary" },
  { name: "Train Booking",      slug: "train-booking.html",    icon: "🚆", desc: "Train tickets & Tatkal assistance.",             color: "secondary" },
  { name: "Hotel Booking",      slug: "hotel-booking.html",    icon: "🏨", desc: "Hotels & stays at best negotiated rates.",       color: "primary" },
  { name: "Tour Package",       slug: "tour-package.html",     icon: "🧳", desc: "Handcrafted holiday packages, fully custom.",     color: "secondary" },
  { name: "Honeymoon Package",  slug: "honeymoon-package.html",icon: "💖", desc: "Romantic getaways, planned for you.",            color: "primary" },
  { name: "Visa & Foreign Tour",slug: "visa-foreign-tour.html",icon: "🌍", desc: "Visa help + international tour packages.",        color: "secondary" },
];

/* Services jo "Packages" dropdown me jaate hain */
window.PACKAGE_SLUGS = ["tour-package.html", "honeymoon-package.html", "visa-foreign-tour.html"];

/* Top-level nav (Packages dropdown alag se banta hai) */
window.NAV_PRIMARY = [
  { name: "Home",         slug: "index.html" },
  { name: "Cab",          slug: "cab-booking.html" },
  { name: "Driver",       slug: "hire-driver.html" },
  { name: "Bus",          slug: "bus-booking.html" },
  { name: "Flight",       slug: "flight-booking.html" },
  { name: "Train",        slug: "train-booking.html" },
  { name: "Hotel",        slug: "hotel-booking.html" },
];

window.NAV_SECONDARY = [
  { name: "Destinations", slug: "destinations.html" },
  { name: "About",        slug: "about.html" },
  { name: "Contact",      slug: "contact.html" },
];
