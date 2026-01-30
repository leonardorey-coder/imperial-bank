import { Metadata } from 'next';
import CardScrollImperial from '@/components/CardScrollImperial';
import BenefitsImperial from '@/components/BenefitsImperial';
import ModulesImperial from '@/components/ModulesImperial';
import SpecsImperial from '@/components/SpecsImperial';
import FooterImperial from '@/components/FooterImperial';
import UserPersonaImperial from '@/components/UserPersonaImperial';
import ValueMapImperial from '@/components/ValueMapImperial';

export const metadata: Metadata = {
    title: "Tarjeta Imperial | Exclusividad Sin Límites",
    description: "La tarjeta premium de Imperial Bank. Concierge 24/7, acceso VIP mundial, sin límite de crédito y beneficios exclusivos por invitación.",
    keywords: ["tarjeta imperial", "tarjeta premium", "concierge 24/7", "acceso VIP", "Imperial Bank", "tarjeta metal"],
};

export default function TarjetaImperial() {
    return (
        <main className="bg-[#050505]">
            {/* Hero with scrollytelling */}
            <CardScrollImperial />

            {/* Landing sections */}
            <BenefitsImperial />

            <ModulesImperial />
            <SpecsImperial />

            {/* User Persona */}
            <UserPersonaImperial />

            {/* Value Map */}
            <ValueMapImperial />

            <FooterImperial />
        </main>
    );
}
