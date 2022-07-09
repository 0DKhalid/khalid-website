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
        slate: "#0f172a",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
