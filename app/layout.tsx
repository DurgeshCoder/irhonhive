import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ironhive Fitness | Forged, Not Born",
  description: "Join Ironhive Fitness, the premier futuristic fitness hive. Strength training, expert coaching, and a powerful community dedicated to your transformation.",
  keywords: ["gym near me", "fitness center", "personal trainer", "body transformation gym", "strength training", "Ironhive"],
  metadataBase: new URL('https://ironhive.fitness'), // Placeholder
  openGraph: {
    title: "Ironhive Fitness",
    description: "Welcome to the Hive of Strength. Forged, not born.",
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <Navbar />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
