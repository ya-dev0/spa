// app/layout.tsx

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keto Recipe Hub",
  description: "Your source for delicious keto recipes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} bg-black text-white`}>
        <main className="max-w-7xl mx-auto">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
