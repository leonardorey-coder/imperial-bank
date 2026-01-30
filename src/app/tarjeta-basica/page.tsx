import { Metadata } from 'next';
import CardScroll from '@/components/CardScroll';
import Benefits from '@/components/Benefits';
import Modules from '@/components/Modules';
import Specs from '@/components/Specs';
import Footer from '@/components/Footer';
import UserPersona from '@/components/UserPersona';
import ValueMap from '@/components/ValueMap';

export const metadata: Metadata = {
    title: "Imperial Básica | Crédito Claro y Control Total",
    description: "La tarjeta de crédito diseñada para ser fácil de usar, sin letras chiquitas y con total transparencia.",
    keywords: ["tarjeta básica", "crédito fácil", "transparencia bancaria", "Imperial Bank"],
};

export default function TarjetaBasica() {
    return (
        <main className="bg-[var(--imperial-white)]">
            {/* Hero with scrollytelling */}
            <CardScroll />

            {/* Landing sections */}
            <Benefits />

            <Modules />
            <Specs />

            {/* User Persona */}
            <UserPersona />

            {/* Value Map */}
            <ValueMap />

            <Footer />
        </main>
    );
}
