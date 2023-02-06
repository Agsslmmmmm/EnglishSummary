/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['public/*.html','index.html'],
  theme: {
    extend: {
      backgroundImage : {
      'jumbotron' : "url(./image.jpg)"
      },
    },
    fontFamily:{
      'montserrat':['Montserrat']
    }
  },
  plugins: [],
}
