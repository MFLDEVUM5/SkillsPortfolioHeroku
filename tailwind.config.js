/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#7e9ace',
        'primary2':'#7080a5',
        'second' :'#314876',
        'back' :'#f6f8ff'
      },
      fontFamily:{
        body :['Nunito']
      }
    },
  },
  plugins: [],
}

