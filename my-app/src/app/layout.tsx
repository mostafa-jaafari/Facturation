import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100","400", "600", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <body
          className={`${inter.variable} antialiased`}
        >
          <Header />
            {children}
            <Footer />
        </body>
      </SessionProvider>
    </html>
  );
}
