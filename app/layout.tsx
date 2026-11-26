import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import EnquiryPopup from "@/components/EnquiryPopup";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ASVA India LLP — Premium Kitchen Chimneys",
    template: "%s · ASVA India LLP",
  },
  description:
    "ASVA India LLP manufactures premium kitchen chimneys and home appliances in Barhi, Sonipat — Curve, T-Type, Pyramid, Ductless and BLDC series.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="min-h-screen" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
        <EnquiryPopup />
      </body>
    </html>
  );
}
