'use client';

import { motion } from 'framer-motion';

// Value Map Data
const leftSide = [
    {
        title: 'Productos y Servicios',
        items: [
            'Tarjeta de crédito Imperial (física y digital)',
            'Control de gastos claro y visual',
            'Atención humana y acompañamiento'
        ],
        color: 'bg-white',
        borderColor: 'border-[var(--light-grey)]'
    },
    {
        title: 'Creadores de valor',
        items: [
            'Construcción de historial crediticio responsable',
            'Beneficios claros y sin letra pequeña',
            'Sin cargos inesperados'
        ],
        color: 'bg-white',
        borderColor: 'border-[var(--light-grey)]'
    },
    {
        title: 'Aliviadores de frustración',
        items: [
            'Sin procesos confusos',
            'Aprobación clara y acompañada',
            'Límites controlados para evitar endeudamiento'
        ],
        color: 'bg-[var(--muted-orange)]',
        borderColor: 'border-transparent',
        textColor: 'text-white'
    }
];

const rightSide = [
    {
        title: 'Trabajos del cliente',
        items: [
            'Pagar gastos diarios con tranquilidad',
            'Administrar su dinero sin estrés',
            'Sentirse respaldado por su banco'
        ],
        color: 'bg-white',
        borderColor: 'border-[var(--light-grey)]'
    },
    {
        title: 'Alegrías esperadas',
        items: [
            'Acceso simple al crédito',
            'Control y claridad en cada movimiento',
            'Uso inmediato y confiable'
        ],
        color: 'bg-white',
        borderColor: 'border-[var(--light-grey)]'
    },
    {
        title: 'Frustraciones',
        items: [
            'Lenguaje financiero complicado',
            'Falta de apoyo humano',
            'Miedo a cargos inesperados'
        ],
        color: 'bg-white',
        borderColor: 'border-[var(--light-grey)]'
    }
];

export default function ValueMap() {
    return (
        <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-[var(--imperial-white)] to-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[var(--imperial-blue)]/5 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    className="mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-[var(--imperial-blue)] mb-4">
                        Mapa de Valor — <span className="italic">Imperial Bank</span>
                    </h2>
                    <p className="text-sm md:text-base text-[var(--imperial-black)]/60 max-w-3xl font-light">
                        Relación clara entre lo que el cliente necesita y cómo Imperial Bank responde con productos simples, controlados y confiables.
                    </p>
                </motion.div>

                {/* Value Map Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Left Side - Square (Products & Services) */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Square Container */}
                        <div className="relative bg-[var(--imperial-white)] rounded-3xl p-6 md:p-8 border-2 border-[var(--imperial-blue)]/20">
                            {/* Square icon/label */}
                            <div className="absolute -top-4 left-8 bg-[var(--imperial-blue)] text-white px-4 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                                Propuesta de Valor
                            </div>

                            <div className="space-y-6 mt-4">
                                {leftSide.map((card, idx) => (
                                    <motion.div
                                        key={idx}
                                        className={`${card.color} rounded-2xl p-6 border ${card.borderColor} shadow-sm`}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        <h4 className={`text-lg font-serif mb-4 ${card.textColor || 'text-[var(--imperial-blue)]'}`}>
                                            {card.title}
                                        </h4>
                                        <ul className="space-y-2">
                                            {card.items.map((item, i) => (
                                                <li key={i} className={`flex items-start gap-3 text-sm ${card.textColor || 'text-[var(--imperial-black)]/70'}`}>
                                                    <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${card.textColor ? 'bg-white/60' : 'bg-[var(--muted-orange)]'}`} />
                                                    <span className="font-light">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Circle (Customer Profile) */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        {/* Circle Container */}
                        <div className="relative bg-[var(--imperial-white)] rounded-full aspect-square flex items-center justify-center p-6 md:p-8 border-2 border-[var(--muted-orange)]/30">
                            {/* Circle icon/label */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--muted-orange)] text-white px-4 py-1 rounded-full text-xs font-medium tracking-wider uppercase whitespace-nowrap">
                                Perfil del Cliente
                            </div>

                            {/* Inner content - stacked cards */}
                            <div className="w-full max-w-md space-y-4">
                                {rightSide.map((card, idx) => (
                                    <motion.div
                                        key={idx}
                                        className={`${card.color} rounded-xl p-4 md:p-5 border ${card.borderColor} shadow-sm`}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        <h4 className="text-base font-serif text-[var(--imperial-blue)] mb-3">
                                            {card.title}
                                        </h4>
                                        <ul className="space-y-1.5">
                                            {card.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-xs text-[var(--imperial-black)]/70">
                                                    <div className={`w-1 h-1 rounded-full mt-1.5 flex-shrink-0 ${card.title === 'Frustraciones' ? 'bg-red-400' :
                                                            card.title === 'Alegrías esperadas' ? 'bg-emerald-500' :
                                                                'bg-[var(--imperial-blue)]'
                                                        }`} />
                                                    <span className="font-light">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Connection line visualization */}
                <motion.div
                    className="hidden lg:flex items-center justify-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg border border-[var(--light-grey)]/30">
                        <div className="w-8 h-8 rounded bg-[var(--imperial-blue)]/20 flex items-center justify-center">
                            <div className="w-4 h-4 border-2 border-[var(--imperial-blue)] rounded-sm" />
                        </div>
                        <svg className="w-8 h-8 text-[var(--muted-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <div className="w-8 h-8 rounded-full bg-[var(--muted-orange)]/20 flex items-center justify-center">
                            <div className="w-4 h-4 border-2 border-[var(--muted-orange)] rounded-full" />
                        </div>
                        <span className="text-sm text-[var(--imperial-black)]/60 font-light ml-2">
                            Encaje Producto-Cliente
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
