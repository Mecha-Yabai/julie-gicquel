const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./src/**/*.vue",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.html",
    "./src/**/*.md",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-light": "#F7F8FC",
        "secondary-light": "#FFFFFF",
        "ternary-light": "#DBE2E6",
        "primary-dark": "#030303",
        "secondary-dark": "#535353",
        "ternary-dark": "#666666",
        "red-dark": "#C92A1D",
        "blue-dark": "#233763",
      },
      container: {
        center: true,
      },
    },
  },
  variants: {
    extend: { opacity: ["disabled"] },
  },
  plugins: [require("@tailwindcss/forms")],
};
