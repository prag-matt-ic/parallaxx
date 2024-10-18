import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "ParallaxX",
  description: "",
};

import { Chivo, Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const chivo = Chivo({ subsets: ["latin"], variable: "--font-chivo" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chivo.variable} ${inter.variable} antialiased bg-dark font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
