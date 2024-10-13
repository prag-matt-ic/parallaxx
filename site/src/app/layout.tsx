import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ParallaxX",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-off-black">{children}</body>
    </html>
  );
}
