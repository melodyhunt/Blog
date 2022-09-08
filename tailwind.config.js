/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#455A64",
        color2: "#AED581",
        color3: "#80CBC4",
        color4: "#90CAF9",
        color5: "#B39DDB",
        color6: "#F48FB1",
      },
      fontFamily: {
        principal: "Amatic SC",
        secundario: "Patrick Hand",
      },
    },
  },
  plugins: [],
};
