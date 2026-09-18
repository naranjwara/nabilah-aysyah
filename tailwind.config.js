/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        // Min-width breakpoint for 4K screens: `4k:p-16`, `4k:text-4k-title`.
        '4k': '2560px'
      },
      fontSize: {
        // Fluid 4K typography, sized against the viewport rather than the root.
        '4k-base': '1.2vw',
        '4k-title': '3.5vw'
      },
      spacing: {
        // Fluid 4K spacing, usable anywhere a spacing scale applies (p-, m-, gap-).
        '4k-padding': '5vw'
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
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
