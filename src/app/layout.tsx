import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CT 2025 Final",
  description: "India Wins",
};

const intrument_serif = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${intrument_serif.variable}  bg-gradient-to-b from-[#0b01fe] to-[#0b01fe] font-primary overflow-hidden antialiased`}
      >
        {children}
        <Analytics />
        <Script
          defer
          data-domain="ct2025.amanbairagi.in" // Replace with your domain
          src="https://analytics-code.vercel.app/tracking-script.js"
        />
        <script
          defer
          data-domain="ct2025.amanbairagi.in"
          src="https://monitoryour.website/tracking-script.js"
        ></script>
      </body>
    </html>
  );
}
