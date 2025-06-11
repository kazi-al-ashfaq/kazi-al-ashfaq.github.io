import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/MainNav";
import CopyrightBadge from "@/components/CopyrightBadge";
import Preloader from "@/components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kazi Al Ashfaq | Personal Portfolio",
  description:
    "Welcome to my personal portfolio. I specialize in cybersecurity and graduate level teaching.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dgrees-bg text-dgrees-text`}
      >
        <Preloader />
        <MainNav />
        {children}
        <CopyrightBadge />
      </body>
    </html>
  );
}
