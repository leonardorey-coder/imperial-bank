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
        <section className="py-24 md:py-32 px-6 bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
                        Cómo funciona
                    </h2>
                    <p className="text-white/50 text-lg max-w-2xl mx-auto">
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
                            <div className="absolute -top-4 -left-2 text-6xl font-bold text-white/[0.03]">
                                0{index + 1}
                            </div>
                            <div className="relative p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05]">
                                <h3 className="text-2xl font-medium text-white mb-3">{module.title}</h3>
                                <p className="text-white/50 mb-6">{module.description}</p>
                                <ul className="space-y-3">
                                    {module.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-3">
                                            <svg
                                                className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5"
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
                                            <span className="text-white/60 text-sm">{feature}</span>
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
