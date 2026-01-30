'use client';

import { motion } from 'framer-motion';

interface Module {
    title: string;
    description: string;
    features: string[];
}

const modules: Module[] = [
    {
        title: 'Compras diarias',
        description: 'Todo lo que necesitas, con la seguridad que mereces.',
        features: [
            'Aceptada en comercios físicos y en línea',
            'Pagos sin contacto rápidos y seguros',
            'Meses sin intereses en comercios participantes',
        ],
    },
    {
        title: 'Pagos y fechas',
        description: 'Organiza tu crédito sin complicaciones.',
        features: [
            'Fecha de corte y pago claras',
            'Pago mínimo, pago sin intereses, pago total',
            'Recordatorios antes del vencimiento',
        ],
    },
    {
        title: 'Seguridad',
        description: 'Protección moderna sin pasos innecesarios.',
        features: [
            'Bloqueo temporal desde la app',
            'Alertas de transacciones sospechosas',
            'Chip EMV y tecnología contactless',
        ],
    },
];

export default function Modules() {
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
                        Tres pilares para una experiencia de crédito responsable.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {modules.map((module, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -top-6 -left-4 text-8xl font-serif font-bold text-[var(--muted-orange)]/[0.1] select-none">
                                0{index + 1}
                            </div>
                            <div className="relative p-8 rounded-2xl bg-white shadow-lg shadow-[var(--light-grey)]/20 border border-[var(--light-grey)]/30 hover:shadow-xl hover:shadow-[var(--light-grey)]/40 transition-all duration-300">
                                <h3 className="text-2xl font-serif text-[var(--imperial-blue)] mb-3">{module.title}</h3>
                                <p className="text-[var(--imperial-blue)]/60 font-display text-lg mb-6">{module.description}</p>
                                <ul className="space-y-3">
                                    {module.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-3">
                                            <svg
                                                className="w-5 h-5 text-[var(--muted-orange)] flex-shrink-0 mt-1"
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
                                            <span className="text-[var(--imperial-blue)]/80 text-base font-display">{feature}</span>
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
