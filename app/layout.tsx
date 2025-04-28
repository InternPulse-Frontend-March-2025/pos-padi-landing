import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "POS Padi",
  description:
    "POS Padi is a POS platform packed with powerful tools to help you serve customers faster, manage your earnings, and grow with ease — no tech skills needed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex min-h-screen flex-col`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
