import type { Metadata } from "next";
import { Geist, Geist_Mono, Bayon, Akshar } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Scroll from "./components/Scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bayon = Bayon({
  variable: "--font-bayon",
  subsets: ["latin"],
  weight: "400",
});

const akshar = Akshar({
  variable: "--font-akshar",
  subsets: ["latin"],
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
      <body className={`${bayon.variable} ${akshar.variable} antialiased bg-white text-black`}>
        <Navbar />
        <div className="flex flex-col min-h-screen">
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}