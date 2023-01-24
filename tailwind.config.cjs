/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGreen: "#344E41",
        green: "#3A5A40",
        lightGreen: "#588157",
        brown: "#A3B18A",
        lightBrown: "#DAD7CD",
      },
    },
  },
  plugins: [],
};
