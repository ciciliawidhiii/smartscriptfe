/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      maroon:'AF2D30',
      white : 'FFFFFF',
      grey : 'A7A7A7',
    },
    extend: {},
  },
  plugins: [],
}