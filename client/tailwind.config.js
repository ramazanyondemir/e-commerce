/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffcc90",
        secondary: "#fdfbf5",
        third: "#FEE8B0",
      },
    },
  },
  plugins: [],
};
