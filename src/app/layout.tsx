import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Better Than BNB | Short-Term Rental Arbitrage Course by Rasheen Castell",
  description:
    "Learn the exact short-term rental arbitrage system Rasheen Castell used to build 813BNB: an 8-module course covering markets, landlord approvals, furnishing, listings, systems, and scaling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${playfair.variable} ${inter.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col bg-ink text-cream">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
