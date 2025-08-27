import type { Metadata } from "next";
import { Bayon, Akshar } from "next/font/google";
 import { Analytics } from '@vercel/analytics/react';

import "@/app/globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const bayon = Bayon({
  // variable: "--font-bayon",
  subsets: ["latin"],
  weight: "400",
});

const akshar = Akshar({
  // variable: "--font-akshar",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "TAMU CSA | 2025-2026",
  description: "The official website of the Chinese Student Association at Texas A&M University!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bayon.className} ${akshar.className} antialiased bg-white text-black`}>
        <Navbar />
        <div className="flex flex-col min-h-screen pt-18">
          <main className="grow overflow-x-hidden">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}