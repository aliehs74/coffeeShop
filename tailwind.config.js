/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/*.{html,js}", "./src/js/*.{html,js}"],
  theme: {
    fontFamily: {
      "dana-Regular": "danaRegular",
      "dana-Medium": "danaMedium",
      "dana-Bold": "danaBold",
      "morabba-Light": "morabbaLight",
      "morabba-Medium": "morabbaMedium",
      "morabba-Bold": "morabbaBold",
    },
    screens: {
      ms: "280px", //mobile small
      mm: "350px", //mobile medium
      ml: "425px", //mobile large
      sm: "640px", //phablet
      md: "768px", //tablet
      lg: "1024px", //laptop
      xl: "1280px", //dekstop
    },
    extend: {
      colors: {
        brown: {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
      },
      boxShadow: {
        normal: "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      letterSpacing: {
        tightest: "-0.081em",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "0.625rem",
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),

    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
