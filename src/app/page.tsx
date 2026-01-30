import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: "Imperial Bank | Tarjetas Fáciles de Uso y Protección de Dinero",
  description: "Banca transparente con Imperial Bank. Ofrecemos tarjetas fáciles de usar y una tarjeta protectora de dinero con respaldo IPAB. Rendimiento anual del 17%.",
  keywords: [
    "tarjetas fáciles uso",
    "tarjeta protectora de dinero",
    "Imperial Bank",
    "protección IPAB",
    "rendimiento bancario 17%",
    "crédito seguro",
    "banca honesta",
    "ahorro protegido"
  ],
};

export default function Home() {
  return <HomeClient />;
}
