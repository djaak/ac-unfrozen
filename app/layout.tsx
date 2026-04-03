import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AC Unfrozen | Car Air Conditioning Repair Pretoria",
  description: "Professional car AC repair services in Pretoria. Fast, reliable, and affordable. Book your appointment today!",
  keywords: "car AC repair, air conditioning, Pretoria, car cooling, AC service, automotive",
  authors: [{ name: "AC Unfrozen" }],
  openGraph: {
    title: "AC Unfrozen | Car Air Conditioning Repair Pretoria",
    description: "Professional car AC repair services in Pretoria. Fast, reliable, and affordable.",
    type: "website",
    locale: "en_ZA",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}