/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "auto 1fr auto", // Header, main + aside, footer
      },
      gridTemplateColumns: {
        layout: "1fr 3fr", // Aside, main
      },
      colors: {
        violet: "#6876c0",
        blue: "#27b3dc",
        musgo: "#4b8485",
        whiter: "#fdfdfa",
        back: "#f0f4f9",
        coolBlue: "#3884F6",
        otherBlue: "#043C76",
        primaryColor: "#4338ca",
        secondaryColor: "",
        terciaryColor: "#f0f4f9",
      },
    },
  },
};
