/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif']
      },
      keyframes: {
        orbit: {
          from: { transform: 'rotate(0deg) translateX(175px) rotate(0deg)' },
          to: { transform: 'rotate(360deg) translateX(175px) rotate(-360deg)' }
        }
      },
      animation: {
        orbit: 'orbit 7s linear infinite'
      }
    }
  },
  plugins: []
};
