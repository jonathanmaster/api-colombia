/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        2000: '2000px',
      },
    },
  },
  daisyui: {
    themes: [false],
  },
  plugins: [require('daisyui')],
}
