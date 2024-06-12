/** @type {import('tailwindcss').Config} */
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
      boxShadow: {
        "neumorphism-out": "8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff",
        "neumorphism-in":
          "inset 8px 8px 16px #d1d9e6, inset -8px -8px 16px #ffffff",
      },
    },
  },
};
