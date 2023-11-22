/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      lightBlue: '#2A4BA0',
      blue: '#153075',
      darkYellow: '#F9B023',
      yellow: '#FFC83A',
      gray: '#F8F9FB',
    },
    extend: {},
  },
  plugins: [],
};
