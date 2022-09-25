/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        white: "#fff",
        orange: " hsl(25, 97%, 53%)",
        lightGray: "hsl(217, 12%, 63%)",
        mediumGray: "hsl(216, 12%, 54%)",
        darkBlue: "hsl(213, 19%, 18%)",
        veryDarkBlue: "hsl(216, 12%, 8%)",
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
    },
  },
  plugins: [],
};
