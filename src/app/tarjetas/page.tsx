import { Metadata } from 'next';
import TarjetasClient from './TarjetasClient';

export const metadata: Metadata = {
    title: "Sistema de Tarjetas | Imperial Bank",
    description: "Descubre el sistema de tarjetas Imperial Bank: Básica, Control y Preferente. Diseñadas con accesibilidad WCAG, transparencia y niveles progresivos.",
    keywords: ["tarjetas Imperial Bank", "sistema de tarjetas", "accesibilidad bancaria", "WCAG", "5 W's"],
};

export default function Tarjetas() {
    return <TarjetasClient />;
}
