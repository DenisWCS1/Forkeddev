/** @type {import('.\frontend\node_modules\tailwindcss').Config} */
module.exports = {
  content: ["./src//*.{jsx,js}"],
  theme: {
    colors: {
      "1dark": "#0C131F",
      "2blueBlack": "#041741",
      "3blueDuck": "#128097",
      "4blue": "#0C7BD1",
      "5turquoise": "#8DE8FE",
      "6grey": "#565584",
      "7white": "#3ab7bf",
    },

    screens: {
      sm: "480px",
      // => @media (min-width: 480px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
