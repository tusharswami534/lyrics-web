/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#DBDBF3',
        'dark-black' : '#14191C',
        'light-gary' : '#333333',
        'light-sky-blue' : '#CECECE'
      },
      fontFamily: {
        montserrat : ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}