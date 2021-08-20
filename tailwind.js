module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        veryDarkBlueText: 'hsl(200, 15%, 8%)',
        veryDarkBlueBg: 'hsl(207, 26%, 17%)',
        darkGray: 'hsl(0, 0%, 52%)',
        darkBlue: 'hsl(209, 23%, 22%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
