module.exports = {
  purge: [ '_site/**/*.html' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      'fontFamily': {
        'heading' : ['Raleway', 'sans-serif'],
        'body' : ['Raleway', 'sans-serif']
      },
      'height': {
        'hero': '400px',
        'heroSmall': '150px'
      },
      'minHeight': {
        'hero': '400px',
        'heroSmall': '150px'
      },
      'colors': {
        'dark-theme': '#151515',
      }
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/aspect-ratio')
  ],
};
