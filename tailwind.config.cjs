/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      hsm: 20,
      hmd: 24,
      hlg: 32,
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      gray: {
        900: "#121214",
        800: "#202024",
        400: "#7c7c8a",
        100: "#e1e1e6",
      },
      cyan: {
        500: "#81d8f7",
        300: "#adeaff",
      },
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
