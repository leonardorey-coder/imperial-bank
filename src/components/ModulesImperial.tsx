'use client';

import { motion } from 'framer-motion';

interface Module {
    title: string;
    description: string;
    features: string[];
}

const modules: Module[] = [
    {
        title: 'Viajes sin límites',
        description: 'El mundo a tu alcance.',
        features: [
            'Acceso a más de 1,300 salas VIP',
            'Seguro de viaje internacional premium',
            'Upgrade automático en hoteles selectos',
        ],
    },
    {
        title: 'Experiencias únicas',
        description: 'Momentos que perduran.',
        features: [
            'Acceso preventa a eventos exclusivos',
            'Reservaciones en restaurantes de élite',
            'Experiencias personalizadas',
        ],
    },
    {
        title: 'Protección total',
        description: 'Tranquilidad garantizada.',
        features: [
            'Seguro de compras extendido',
            'Protección contra fraude 100%',
            'Asistencia legal internacional',
        ],
    },
];

export default function ModulesImperial() {
    return (
        <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-[#050505] to-[#101111] text-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-serif mb-6" style={{ color: 'white' }}>
                        Cómo funciona
                    </h2>
                    <p className="text-white/60 text-xl font-display max-w-2xl mx-auto italic">
                        Tres pilares para una experiencia premium sin igual.
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
                            <div className="absolute -top-4 -left-2 md:-top-6 md:-left-4 text-5xl md:text-8xl font-serif font-bold text-white/10 select-none z-20 pointer-events-none">
                                0{index + 1}
                            </div>
                            <div className="relative p-4 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm shadow-lg border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 z-10">
                                <h3 className="text-base md:text-2xl font-serif mb-2 md:mb-3 whitespace-nowrap" style={{ color: 'white' }}>{module.title}</h3>
                                <p className="text-white/50 font-display text-xs md:text-lg mb-4 md:mb-6">{module.description}</p>
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
                                            <span className="text-white/70 text-xs md:text-base font-display">{feature}</span>
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
