module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      rubik: ["Rubik, sans-serif"],
    },
    fontWeight: {
      light: 300,
      reguler: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      black: 800,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
