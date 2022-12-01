/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif;']
      },
      colors: {
        primary: '#5D8BF4',
        secondary: '#051367',
        backGround: '#EEF1FF'
      },
      screens: {
        mobile: { min: '320px', max: '425px' },
        tablet: { min: '426px', max: '768px' },
        laptop: { min: '769px', max: '1024px' },
        desktop: { min: '1025px', max: '2560px' }

      }
    },
  },
  plugins: [],
}
