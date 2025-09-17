import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Questrial } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const visby = localFont({
  src: "../public/fonts/visbycf-bold.otf",
  variable: "--font-visby",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const questrial = Questrial({
  subsets: ["latin"],
  variable: "--font-questrial",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://uiinnovationwar.com"),
  title: "UI Innovation War 2025",
  description: "UI Innovation War 2025 Official Website",
  openGraph: {
    title: "UI Innovation War 2025",
    description: "UI Innovation War 2025 Official Website",
    url: new URL("https://uiinnovationwar.com"),
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "UI Innovation War 2025",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI Innovation War 2025",
    description: "UI Innovation War 2025 Official Website",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${visby.variable} ${poppins.variable} ${questrial.variable} relative border border-primary-1 mx-auto max-w-[1440px] antialiased bg-gradient-to-r from-primary-5 to-primary-4 min-h-dvh flex flex-col`}
      >
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
