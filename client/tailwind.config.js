/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#f5deb3",
        secondary: "#fdfbf5",
        third: "#FEE8B0",
        link: "#442c1d",
        button: "#442c1bdb",
      },
    },
  },
  plugins: [],
};
