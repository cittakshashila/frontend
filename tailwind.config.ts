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
      },
      fontFamily: {
        passport: "var(--passport-font)",
        oranienbaum: "var(--oranienbaum-font)",
        quicksand: "var(--quicksand-font)",
      },
      backgroundImage: {
        "hero-popcorn": "url('/hero-background.webp')",
        "paint-effect": "url('/paint-effect-bg.png')",
        "world-map": "url('/world-map-bg.webp')",
        "cit-crowd": "url('/cit-crowd-bg.png')",
        "thai-kudam-bridge": "url('/thaikudambridge-bg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
