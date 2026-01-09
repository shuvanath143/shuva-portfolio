/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#A855F7", // Purple accent color
        secondary: "#3B82F6", // Blue accent color
        "background-light": "#F3F4F6",
        "background-dark": "#0B051D", // Deep dark purple/black background
        "surface-dark": "#161032",
        "glass-border": "rgba(255, 255, 255, 0.1)",
        "glass-bg": "rgba(255, 255, 255, 0.03)",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Outfit'", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a1b5e 0deg, #0B051D 180deg, #1e1b4b 360deg)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'bounce-slower': 'bounce 4s infinite',
        'bounce-slowest': 'bounce 4.5s infinite',
      }
    },
  },
  plugins: [],
}