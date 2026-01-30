'use client';

import { motion } from 'framer-motion';

interface Benefit {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const benefits: Benefit[] = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: 'Respaldo IPAB',
        description: 'Tu dinero protegido hasta 400,000 UDIs por el Instituto para la Protección al Ahorro Bancario.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
        title: '17% rendimiento anual',
        description: 'Uno de los mejores rendimientos del mercado. Tu dinero trabaja para ti mientras duermes.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
        title: 'Control total',
        description: 'Bloquea, desbloquea y administra tu tarjeta desde la app en cualquier momento.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: 'Atención humana',
        description: 'Línea de atención con personas reales. Sin menús de voz interminables.',
    },
];

export default function BenefitsControl() {
    return (
        <section className="py-24 md:py-32 px-6 bg-[var(--imperial-white)] text-[var(--imperial-blue)]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-serif mb-6">
                        Protege y haz crecer tu dinero
                    </h2>
                    <p className="text-[var(--imperial-blue)]/80 text-xl font-display max-w-2xl mx-auto italic">
                        Una tarjeta diseñada para proteger tus ahorros.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 group bg-white border border-[var(--light-grey)]/30 hover:border-[var(--muted-orange)]/50 hover:shadow-xl hover:shadow-[var(--light-grey)]/20 transition-all duration-500"
                        >
                            <div className="text-[var(--muted-orange)] mb-6 transform group-hover:scale-110 transition-transform duration-500">{benefit.icon}</div>
                            <h3 className="text-2xl font-serif text-[var(--imperial-blue)] mb-3">{benefit.title}</h3>
                            <p className="text-[var(--imperial-blue)]/70 font-display text-lg leading-relaxed">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
