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
        'light-sky-blue' : '#CECECE',
        'custom-gray' : '#2E2F37',
        'blue' : '#007BFF'
        
        
      },
      fontFamily: {
        montserrat : ['Montserrat', 'sans-serif'],
        poppins : ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}