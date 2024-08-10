/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  content: ["./src/{*.html,js}"],
  theme: {
    extend: {
      colors: {
        chestnut: '#973F29',
      }
    },
  },
  plugins: [],
}

