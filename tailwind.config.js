/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#D0BFFF",
        secondary: "#917FB3",
        baseC: "#DFCCFB",
        darkbg: "#2A2F4F",
        blogBg: "#FFF3DA",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
