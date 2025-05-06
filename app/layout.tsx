import ReactLenis from "lenis/react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zouhair Begdar.",
  description:
    "Welcome to my portfolio. I'm Zouhair Begdar, React and React Native developer based in Morocco, with 2+ years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-geist antialiased`}>
        <ReactLenis root>{children}</ReactLenis>
      </body>
    </html>
  );
}
