import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Whitetail Management LLC | Land Clearing, Forestry Mulching & Site Preparation",
  description:
    "Professional land clearing, forestry mulching, grading, site preparation, and demolition services. Transforming raw land into build-ready sites with precision and reliability.",
  keywords: [
    "land clearing",
    "forestry mulching",
    "site preparation",
    "grading contractors",
    "demolition services",
    "excavation services",
    "land clearing services",
    "Whitetail Management",
  ],
  openGraph: {
    title: "Whitetail Management LLC | Premium Land Services",
    description:
      "Transforming raw land into opportunity. Professional land clearing, forestry mulching, grading, site preparation, and demolition services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-brand-black text-brand-cream`}
      >
        {children}
      </body>
    </html>
  );
}
