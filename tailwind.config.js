/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bejota: {
          wine: '#39141D',
          'wine-dark': '#240C12',
          'wine-deep': '#15060A',
          'wine-light': '#4A1D27',
          beige: '#F0D8B5',
          'beige-light': '#F8EEE0',
          'beige-dark': '#D8BA90',
          gray: '#A5A5A5',
          'gray-dark': '#262626',
          'gray-light': '#D4D4D4',
        }
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
