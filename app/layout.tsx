import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prorator Transport",
  description: "Canadian Transport Company",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white overflow-x-hidden`}
      >
        <Header />

        {/* НІКОЛИ не використовуйте w-screen тут; лише w-full */}
        <main className="min-h-screen w-full pt-4 overflow-x-clip">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

