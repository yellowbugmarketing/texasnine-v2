/** @type {import('tailwindcss').Config} */
// This comment indicates that this is a Tailwind CSS configuration file.

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  // Define the content that Tailwind CSS will scan for CSS classes.
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      // Define a secondary font family called "secondary" using the "Dosis" font.
      secondary: ["Dosis"],
    },
    extend: {
      colors: {
        // Extend the color palette with a new color called "secondary" with a specific hex value.
        secondary: "#8f8f8f",
      },
      fontFamily: {
        // Extend the font family list with various font options, each with a specific name and font stack.
        condensedWeb: ["DIN Condensed Web"],
        sans: ['"Open Sans"', "sans-serif"],
        Gbold: ["G bold", "sans-serif"],
        // ... (similarly, there are other font options defined)
        primary: ["Shree Devanagari", "sans-serif"],
      },
    },
  },
  plugins: [],
};
