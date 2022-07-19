/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "420px" },

      xs: { max: "360px" },
    },
    extend: {
      boxShadow: {
        currentShadow: "10px -2px 20px 2px rgb(0 0 0 / 30%)",
        liquidShadow: "inset 0 0 50px rgba(0 0 0 .5)",
      },
      translate: {
        liquidTrans: "[-50%, -75%]",
      },
      animation: {
        liquid: "animate 5s linear infinite",
        liquid1: "animate 10s linear infinite",
      },
    },
  },
  plugins: [],
};
