/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(140, 108, 237, 1)",
        gradientPrimaryFrom: " rgba(155, 126, 250, 1)",
        gadientPrimaryTo: "rgba(126, 90, 225, 1)",
        darkBlue: "rgba(55, 61, 89, 1)",
        lightGray: "rgba(200, 204, 221, 1)",
        antiFlash: "rgba(239, 239, 239, 1)",
        transparentBlck: "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        noto: ['"Noto Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
