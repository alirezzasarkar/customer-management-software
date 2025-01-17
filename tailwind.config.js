/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#153D8A",
        dashboard: "#E1E1EA",
        bronze: "#CD7F32",
        silver: "#C0C0C0",
        gold: "#FFD700",
        red1: "#FF0000",
        gray1: "#808080",
        blue1: "#0000FF",
      },
    },
  },
  plugins: [],
};
