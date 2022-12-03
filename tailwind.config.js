/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif;'],
        frekoda: ['Fredoka One', 'cursive;'],
        secular: ['Secular One', 'sans-serif;']
      },
      colors: {
        primary: '#8186D5',
        secondary: '#494CA2',
        backGround: '#EEF1FF',
        textColor: '#fff',
        hoverColor: '#F5B0CB'
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
