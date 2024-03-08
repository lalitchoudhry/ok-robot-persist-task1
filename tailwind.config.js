/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "500px",
      md: "770px",
      lg: "976px",
      xl: "1540px",
    },
    colors: {
      white: "#fff",
      black: "#1A1C20",
      blue: "#1fb6ff",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      dark: "#070F2B",
      discord: "#124076",
      main: "#51829B"
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        homeGradient: "linear-gradient(to right bottom, #9290c3, #c590c2, #ee91ae, #ff9e8f, #ffb673, #fcad6a, #f9a561, #f69c59, #d67065, #a45269, #693d5d, #332941);"
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
