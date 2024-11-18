/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff4fe",
          100: "#e2eafd",
          200: "#cad8fb",
          300: "#aabef7",
          400: "#889bf1",
          500: "#6b79e9",
          600: "#565add",
          700: "#4143c1",
          800: "#373a9c",
          900: "#33367c",
          950: "#1e2048",
        },
        secondary: {
          50: "#fff8ed",
          100: "#fff0d4",
          200: "#ffdca8",
          300: "#ffc370",
          400: "#ff9d37",
          500: "#ff7b05",
          600: "#f06506",
          700: "#c74b07",
          800: "#9e3b0e",
          900: "#7f330f",
          950: "#451705",
        },
      },
    },
  },
  plugins: [],
};
