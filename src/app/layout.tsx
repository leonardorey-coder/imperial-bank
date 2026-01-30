import type { Metadata } from "next";
import { Inter, PT_Serif, Arapey } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

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
  title: "Imperial Bank | Protección Patrimonial y Rendimiento",
  description: "Descubre el modelo de banca honesta de Imperial Bank. Tarjetas fáciles de usar, protección de dinero con respaldo IPAB y rendimientos del 17%.",
  keywords: [
    "tarjetas fáciles uso",
    "tarjeta protectora de dinero",
    "Imperial Bank",
    "protección IPAB",
    "rendimiento bancario 17%",
    "crédito seguro",
    "banca senior",
    "ahorro protegido"
  ],
  openGraph: {
    title: "Imperial Bank | Protección y Rendimiento",
    description: "Banca diseñada para proteger tu capital y generar rendimientos reales.",
    type: "website",
    locale: "es_MX",
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
          <Header />
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
