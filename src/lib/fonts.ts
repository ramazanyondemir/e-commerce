import { EB_Garamond, Open_Sans, Nunito } from "next/font/google";

export const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--",
});

export const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
});

export const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});
