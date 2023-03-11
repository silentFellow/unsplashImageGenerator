/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light': '#edf2f4',
        'whiteSmoke': '#f5f5f5',
        'dark': '#d90429',
        'ascent': '#8d99ae',
        'darkBg': '#8d99ae',
        'darkBg2': '#2b2d42',
      },
    },
  },
  plugins: [],
}
