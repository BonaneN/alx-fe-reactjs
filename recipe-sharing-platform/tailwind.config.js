/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".public/index.html",          // <-- include the main HTML file
    "./src/**/*.{js,jsx,ts,tsx}" // <-- include all React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
