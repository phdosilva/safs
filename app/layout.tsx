import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Unbounded } from "next/font/google";
import { Poppins } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  weight: ["400", "700"], // especifique os pesos que você quer usar
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Agroflorestas na Caatinga",
  description: "Caatinga + Sistemas Agroflorestais (SAFS)",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${unbounded.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
