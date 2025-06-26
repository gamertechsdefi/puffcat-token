import type { Metadata } from "next";
import { Cherry_Bomb_One } from "next/font/google";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";


const cherryBombOne = Cherry_Bomb_One({
  variable: "--font-cherry-bomb-one",
  subsets: ["latin"],
  weight: "400"
});

const nunito = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "PUFFCAT TOKEN",
  description: "The big boss PuffCat is here to flip the dogs and frogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cherryBombOne.variable} ${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
