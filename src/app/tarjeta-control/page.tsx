import { Metadata } from 'next';
import CardScrollControl from '@/components/CardScrollControl';
import BenefitsControl from '@/components/BenefitsControl';
import ModulesControl from '@/components/ModulesControl';
import SpecsControl from '@/components/SpecsControl';
import FooterControl from '@/components/FooterControl';
import UserPersonaControl from '@/components/UserPersonaControl';
import ValueMapControl from '@/components/ValueMapControl';

export const metadata: Metadata = {
    title: "Tarjeta Control | Protege tu Dinero con 17% de Rendimiento",
    description: "La tarjeta que protege y hace crecer tu dinero. 17% de rendimiento anual con respaldo IPAB y acceso inmediato a tus ahorros.",
    keywords: ["tarjeta control", "ahorro seguro", "rendimiento 17%", "respaldo IPAB", "Imperial Bank"],
};

export default function TarjetaControl() {
    return (
        <main className="bg-[var(--imperial-white)]">
            {/* Hero with scrollytelling */}
            <CardScrollControl />

            {/* Landing sections */}
            <BenefitsControl />

            {/* User Persona */}
            <UserPersonaControl />

            {/* Value Map */}
            <ValueMapControl />

            <ModulesControl />
            <SpecsControl />
            <FooterControl />
        </main>
    );
}
