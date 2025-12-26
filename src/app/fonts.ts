import { Ephesis, Bodoni_Moda, Manrope } from "next/font/google";

export const fontHome = Ephesis({
  weight: "400",
  subsets: ["latin"],
  variable: "--ff-home",
  display: "swap",
});

export const fontHeading = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--ff-heading",
  display: "swap",
});

export const fontBody = Manrope({
  subsets: ["latin"],
  variable: "--ff-body",
  display: "swap",
});
