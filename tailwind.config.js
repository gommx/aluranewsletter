/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        azul: {
          claro: "#c5dfff",
          escuro: "#061e3c",
          hover: "#1057b0",
        },
      },
    },
  },
  plugins: [],
};
