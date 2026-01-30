import type { Metadata } from "next";
import { Inter, PT_Serif, Arapey } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const arapey = Arapey({
  variable: "--font-arapey",
  weight: ["400"],
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
      <body className={`${inter.variable} ${ptSerif.variable} ${arapey.variable} antialiased font-sans`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
