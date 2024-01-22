import { Oranienbaum, Quicksand } from "next/font/google";
import localFont from "next/font/local";

export const quicksand = Quicksand({
  subsets: ["latin"],
  weight: "500",
  variable: "--quicksand-font",
});

// export const oranienbaum = Oranienbaum({
//   weight: "400",
//   variable: "--oranienbaum-font",
// });

export const oranienbaum = localFont({
  src: "../../public/fonts/oranienbaum.ttf",
  variable: "--oranienbaum-font",
});

export const passport = localFont({
  src: "../../public/fonts/passport.ttf",
  variable: "--passport-font",
});
