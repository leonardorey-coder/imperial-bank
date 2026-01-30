import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imperial Básica | Imperial Bank",
  description: "Crédito claro. Control total. Una tarjeta de crédito diseñada con transparencia y respeto.",
  keywords: ["tarjeta de crédito", "Imperial Bank", "crédito", "finanzas", "banco"],
  openGraph: {
    title: "Imperial Básica | Imperial Bank",
    description: "Crédito claro. Control total.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
