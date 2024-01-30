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
      screens: {
        ml: "425px", //mobile large
        mm: "350px", //mobile medium
        ms: "280px", //mobile small
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
