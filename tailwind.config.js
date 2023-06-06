/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,ts,js,jsx,tsx}'],
  theme: {
    extend: {
      colors: {},
      animation: {},
      keyframes: {}
    }
  },
  plugins: [
    // require('tailwind-scrollbar-hide')
  ]
}
