/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      serif: [`"Roboto Slab"`, "serif"],
      display: [`"Baloo Tamma 2"`, "cursive"],
    },
    extend: {
      colors: {
        orange: {
          100: "#fff6cc",
          300: "#ffe299",
          500: "#ffd066",
          700: "#ffc533",
          900: "#ffbc00",
        },
        violet: {
          100: "#edccff",
          300: "#df99ff",
          500: "#ce66ff",
          700: "#c333ff",
          900: "#ba00ff",
        },
      },
    },
  },
  plugins: [],
};
