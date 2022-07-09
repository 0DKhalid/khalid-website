module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        tajawal: ["Tajawal"],
      },

      colors: {
        transparent: "transparent",
        black: "#0f0e17",
        white: "#fffffe",
        gray: "#a7a9be",
        orange: "#ff8906",
        tertiary: "#e53170",
        secondary: "#201E2E",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
