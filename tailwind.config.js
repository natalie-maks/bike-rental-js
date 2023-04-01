/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    fontFamily: {
      serif: [`"Roboto Slab"`, "serif"],
      display: [`"Baloo Tamma 2"`, "cursive"],
    },
    extend: {
      colors: {
        orange: {
          50: "#fff7e9",
          100: "#fff6cc",
          300: "#ffe299",
          500: "#ffd066",
          700: "#ffc533",
          900: "#ffbc00",
        },
        violet: {
          100: "#eacfff",
          300: "#d299ff",
          500: "#bc66ff",
          700: "#a533ff",
          900: "#9b00ff",
        },
      },
    },
  },
  plugins: [],
};
