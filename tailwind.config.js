/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: "#6876c0",
        blue: "#27b3dc",
        musgo: "#4b8485",
        whiter: "#fdfdfa",
      },
      animation: {
        "border-light": "borderLight 3s ease infinite",
      },
      keyframes: {
        borderLight: {
          "0%": { "border-color": "#8f9dcf" }, // Cor Principal (Violeta Claro)
          "5%": { "border-color": "#a9b8e3" }, // Azul Claro
          "50%": { "border-color": "#c7a3cd" }, // Rosa Claro
          "95%": { "border-color": "#b5e6d3" }, // Verde Claro
          "100%": { "border-color": "#a5a9c5" }, // Roxo Claro
        },
      },
    },
  },
};
