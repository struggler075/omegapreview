/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'minecraft': ['"Press Start 2P"', 'monospace'],
        'jost': ['Jost', 'sans-serif'],
      },
      colors: {
        'vime-blue': '#1a5f7a',
        'vime-dark': '#0f172a',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.3s ease-out',
      }
    },
  },
  plugins: [],
}