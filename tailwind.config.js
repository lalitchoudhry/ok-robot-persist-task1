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
      space: "#EEF5FF",
      brand: "#176B87",
      hover: "#86B6F6",
      main: "#B4D4FF"
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
        homeGradient: "linear-gradient(to left bottom, #b4d4ff, #bfdaff, #cae0ff, #d5e7ff, #e0edff, #dceafe, #d9e8fe, #d5e5fd, #c2d9fb, #afcdfa, #9bc2f8, #86b6f6);",
        heroBackground: "url(./src/assets/images/back-3.jpg)"
      },
      boxShadow: {
        '3xl': '0 0 60px -30px #176B87',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
