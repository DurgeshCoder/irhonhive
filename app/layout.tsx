import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Gym in Gomti Nagar Lucknow | Ironhive Fitness Center Near Me",
  description: "Looking for the best gym in Gomti Nagar Lucknow? Ironhive Fitness offers top-tier strength training, expert personal trainers, and affordable membership. Book your free trial today at the premier fitness center near you.",
  keywords: [
    "best gym in Gomti Nagar Lucknow", 
    "gym near me Gomti Nagar", 
    "best gym in Lucknow", 
    "fitness center in Gomti Nagar Lucknow", 
    "top gym in Lucknow", 
    "Ironhive Fitness Lucknow",
    "personal trainer Gomti Nagar",
    "Zumba classes in Gomti Nagar",
    "weight loss program Lucknow"
  ],
  metadataBase: new URL('https://ironhive.fitness'),
  openGraph: {
    title: "Ironhive Fitness | Best Gym in Gomti Nagar Lucknow",
    description: "Transform your body at the best fitness center in Gomti Nagar. Expert trainers, modern equipment, and a powerful community in Lucknow.",
    images: ['/og-image.jpg'],
  },
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground  `}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <Navbar />
            <main>{children}</main>
            <SiteFooter />
            <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
