/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spartanRegular: ["spartanRegular", "sans-serif"],
        spartanMed: ["spartanMedium", "sans-serif"],
        spartanSemi: ["spartanSemiBold", "sans-serif"],
        spartanLight: ["spartanLight", "sans-serif"],
        virgil: ["virgil", "sans-serif"],

        // Geist: ["GeistSans", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        knewave: ["knewave", "sans-serif"],
      },

      backgroundImage: {
        grunge: "url('/assets/images/textured-background.jpg')",
        grunge1: "url('/assets/images/whitebg.jpg')",
      },
      colors: {
        "coral-pink": "#FFB4B4",

        success: "#affc41",
        "coral-orange": "#affc41",
        "coral-orange2": "#CCFD85",
        "coral-skin": "#FAF3E3",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: colors.blue[500],
          secondary: colors.purple[500],
          accent: colors.pink[500],
          neutral: colors.gray[500],
          "base-100": colors.white,
          success: "#affc41", // This ensures DaisyUI picks up your custom success color
        },
      },
    ],
  },
};
