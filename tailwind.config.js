/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#927331",
        color2: "#788C63",
        color3: "#36473D",
        color4: "#CDC296",
        color5: "#535D41",
        color6: "#927331",
      },
      fontFamily: {
        principal: "Montserrat Alternates",
        secundario: "Questrial",
      },
    },
  },
  plugins: [],
};
