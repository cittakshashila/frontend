import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#CBC9C8",
        grey: "#272727",
        lightcharcoal: "#33333339",
        halfwhite: "#ffffff80",
      },
      fontFamily: {
        passport: "var(--passport-font)",
        oranienbaum: "var(--oranienbaum-font)",
        quicksand: "var(--quicksand-font)",
      },
      backgroundImage: {
        "hero-popcorn": "url('/hero-background.webp')",
        "paint-effect": "url('/paint-effect-bg.webp')",
        "world-map": "url('/world-map-bg.webp')",
        "cit-crowd": "url('/cit-crowd-bg.webp')",
        "thai-kudam-bridge": "url('/thaikudambridge-bg.webp')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      textUnderlineOffset: {
        16: '16px',
      }
    },
  },
  plugins: [],
};
export default config;
