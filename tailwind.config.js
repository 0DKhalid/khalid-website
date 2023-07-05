module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        tajawal: ["Tajawal"],
      },

      colors: {
        transparent: "transparent",
        black: "#140D0C",
        lightGreen:"#2ECAA8",
        white: "#fffffe",
        primaryLight:'#B9CDE1',
        gray: "#a7a9be",
        orange: "#ff8906",
        tertiary: "#e53170",
        secondary: "#201E2E",

      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
