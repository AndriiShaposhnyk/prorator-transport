import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ правильні імпорти з папки components (регістр має співпадати з назвами файлів)
import Header from "./components/Header";
import Footer from "./components/Footer";

// Шрифти
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Метадані для SEO
export const metadata: Metadata = {
  title: "Prorator Transport",
  description: "Canadian Transport Company",
};

// Головний Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Хедер на всіх сторінках */}
        <Header />

        {/* Контент */}
        <main className="min-h-screen pt-4">{children}</main>

        {/* Футер на всіх сторінках */}
        <Footer />
      </body>
    </html>
  );
}


