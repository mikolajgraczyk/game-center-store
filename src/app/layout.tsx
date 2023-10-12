import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";

const montserrat = Montserrat({ subsets: ["latin"] });

interface IRootLayout {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "Game Center",
  description: "Game Center Website",
};

export default function RootLayout({children}: IRootLayout) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-backgrounds-main flex justify-center items-center h-screen px-3`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
