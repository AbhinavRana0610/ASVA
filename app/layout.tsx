import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import EnquiryPopup from "@/components/EnquiryPopup";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible({
  variable: "--font-atkinson",
  subsets: ["latin"],
  weight: ["400", "700"],
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
    <html lang="en" className={atkinson.variable}>
      <body className="min-h-screen" suppressHydrationWarning>
        <div className="scroll-progress" aria-hidden />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
        <EnquiryPopup />
      </body>
    </html>
  );
}
