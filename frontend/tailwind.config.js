/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('./src/assets/bg.webp')",
      }
    },
  },
  plugins: [],
  corePlugins: {
    // Disable features that might generate -ms-high-contrast
    backdropFilter: true,
    backgroundClip: true,
  },
  future: {
    // Use future features that avoid legacy prefixes
    hoverOnlyWhenSupported: true,
  }
}