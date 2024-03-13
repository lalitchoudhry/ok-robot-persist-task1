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
      "gray-dark": "#273444",
      gray: "#B4B4B8",
      "gray-light": "#d3dce6",
      dark: "#070F2B",
      discord: "#124076",
      space: "#080808",
      hover: "#1b1933",
      brand: "#c32034"
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
      },
      boxShadow: {
        '3xl': '0 0 60px -20px #c32034',
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
