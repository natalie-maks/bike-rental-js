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
        brown: {
          50: "#fffcfb",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18072",
          700: "#977669",
          800: "#846358",
          900: "#43302b",
        },
      },
    },
  },
  plugins: [],
};
