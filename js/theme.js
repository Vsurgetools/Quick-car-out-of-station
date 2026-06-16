/* =========================================================================
   Quick Car Out Of Station — Tailwind Theme Config
   -------------------------------------------------------------------------
   Tailwind CDN ke baad load hota hai. Brand colours + fonts yahan define hain
   taaki har page me repeat na karna pade. (No build step needed.)
   ========================================================================= */

if (window.tailwind) {
  window.tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: "#FF6B00", // saffron / travel orange
            dark: "#E25C00",
            light: "#FF8A33",
          },
          secondary: {
            DEFAULT: "#0A6EBD", // royal blue (trust)
            dark: "#08568F",
          },
          accent: "#FFC107",     // gold
          whatsapp: "#25D366",   // WhatsApp green
          ink: "#1A1A1A",        // near-black text
          cream: "#FFF8F0",      // warm light background
        },
        fontFamily: {
          display: ['Poppins', 'Montserrat', 'sans-serif'],
          body: ['Inter', 'Open Sans', 'sans-serif'],
        },
        boxShadow: {
          card: "0 10px 30px -10px rgba(0,0,0,0.18)",
          lift: "0 20px 40px -12px rgba(255,107,0,0.35)",
        },
        keyframes: {
          'pulse-ring': {
            '0%':   { boxShadow: '0 0 0 0 rgba(37,211,102,0.55)' },
            '70%':  { boxShadow: '0 0 0 16px rgba(37,211,102,0)' },
            '100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0)' },
          },
          'fade-up': {
            '0%':   { opacity: '0', transform: 'translateY(24px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
        animation: {
          'pulse-ring': 'pulse-ring 2s infinite',
          'fade-up': 'fade-up 0.7s ease-out both',
        },
      },
    },
  };
}
