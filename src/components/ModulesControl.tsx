'use client';

import { motion } from 'framer-motion';

interface Module {
    title: string;
    description: string;
    features: string[];
}

const modules: Module[] = [
    {
        title: 'Ahorra fácil',
        description: 'Tu dinero crece automáticamente.',
        features: [
            '17% de rendimiento anual garantizado',
            'Rendimientos diarios, pagos mensuales',
            'Sin montos mínimos de ahorro',
        ],
    },
    {
        title: 'Protección total',
        description: 'Tu dinero siempre seguro.',
        features: [
            'Respaldo IPAB hasta 400,000 UDIs',
            'Seguro contra fraude incluido',
            'Bloqueo instantáneo desde la app',
        ],
    },
    {
        title: 'Usa tu dinero',
        description: 'Acceso inmediato cuando lo necesites.',
        features: [
            '4 retiros gratis al mes en cajeros',
            'Pagos sin contacto en cualquier comercio',
            'Transferencias instantáneas SPEI',
        ],
    },
];

export default function ModulesControl() {
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
                        Cómo funciona
                    </h2>
                    <p className="text-[var(--imperial-blue)]/70 text-xl font-display max-w-2xl mx-auto italic">
                        Tres pilares para proteger y hacer crecer tu dinero.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {modules.map((module, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -top-4 -left-2 md:-top-6 md:-left-4 text-5xl md:text-8xl font-serif font-bold text-[var(--muted-orange)]/20 select-none z-20 pointer-events-none">
                                0{index + 1}
                            </div>
                            <div className="relative p-4 md:p-8 rounded-2xl bg-white shadow-lg shadow-[var(--light-grey)]/20 border border-[var(--light-grey)]/30 hover:shadow-xl hover:shadow-[var(--light-grey)]/40 transition-all duration-300 z-10">
                                <h3 className="text-base md:text-2xl font-serif text-[var(--imperial-blue)] mb-2 md:mb-3 whitespace-nowrap">{module.title}</h3>
                                <p className="text-[var(--imperial-blue)]/60 font-display text-xs md:text-lg mb-4 md:mb-6">{module.description}</p>
                                <ul className="space-y-2 md:space-y-3">
                                    {module.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-2 md:gap-3">
                                            <svg
                                                className="w-4 h-4 md:w-5 md:h-5 text-[var(--muted-orange)] flex-shrink-0 mt-0.5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1.5}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-[var(--imperial-blue)]/80 text-xs md:text-base font-display">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
