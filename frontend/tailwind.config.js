/** @type {import('.\frontend\node_modules\tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      spacing: {
        'perso45rem': '45rem',
      },

      colors: {
        dark: {
          100: "#0C131F",
        },
        blueBlack: {
          100: "#041741",
        },
        blueDuck: {
          100: "#128097",
        },
        blueSimple: {
          100: "#0C7BD1",
        },
        turquoise: {
          100: "#8DE8FE",
        },
        greySimple: {
          100: "#565584",
        },
        whiteSimple: {
          100: "#f1eeee",
        },
      },
      fontFamily: {},
    },
  },
  screen: {
    sm: "480px",
  },

  plugins: [],
};
