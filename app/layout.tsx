import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Aditya Mullapudi — Backend & Platform Engineer",
  description:
    "Associate Developer at SAP Labs India. Building backend systems in Go, cloud infrastructure with Crossplane & Kubernetes, and distributed systems projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <body className="bg-[#0a0a0a] text-[#ededed] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
