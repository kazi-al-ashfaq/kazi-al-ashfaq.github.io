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
      <head>
        <title>Kazi Al Ashfaq | Cybersecurity Enthusiast & Educator</title>
        <meta name="description" content="Kazi Al Ashfaq — Cybersecurity Enthusiast & Educator. Explore my portfolio, experience, skills, and projects in cybersecurity and IT education." />
        <meta property="og:title" content="Kazi Al Ashfaq | Cybersecurity Enthusiast & Educator" />
        <meta property="og:description" content="Kazi Al Ashfaq — Cybersecurity Enthusiast & Educator. Explore my portfolio, experience, skills, and projects in cybersecurity and IT education." />
        {/* ...existing meta, favicon, and SEO tags... */}
      </head>
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
