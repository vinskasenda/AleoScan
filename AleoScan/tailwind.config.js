/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "clash-display": ["ClashDisplay", "sans-serif"],
      figtree: ["Figtree", "sans-serif"],
      sora : ["Sora", "sans-serif"],
    },
    extend: {
      colors: {
        gray: "#B1A9BA",
        primary: "#FF44B4",
        secondary: "#FF816E",
      },
      backgroundColor: {},
    },
  },

  plugins: [],
};
