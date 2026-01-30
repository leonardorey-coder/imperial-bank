'use client';

import { motion } from 'framer-motion';

// Value Map Data
const leftSide = [
    {
        title: 'Productos y Servicios',
        items: [
            'Tarjeta Imperial Metal premium',
            'Concierge 24/7 personalizado',
            'Acceso VIP en +1,300 salas'
        ],
        color: 'bg-white/5',
        borderColor: 'border-white/10'
    },
    {
        title: 'Creadores de valor',
        items: [
            'Sin límite de crédito predefinido',
            'Puntos premium por consumo',
            'Upgrades automáticos en partners'
        ],
        color: 'bg-white/5',
        borderColor: 'border-white/10'
    },
    {
        title: 'Aliviadores de frustración',
        items: [
            'Cero tiempos de espera',
            'Trato personalizado y exclusivo',
            'Soluciones inmediatas a cualquier hora'
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
            'Viajar sin fricciones ni límites',
            'Acceder a experiencias exclusivas',
            'Gestión financiera ejecutiva simplificada'
        ],
        color: 'bg-white/5',
        borderColor: 'border-white/10'
    },
    {
        title: 'Alegrías esperadas',
        items: [
            'Reconocimiento VIP en cualquier lugar',
            'Tiempo ahorrado en gestiones',
            'Exclusividad real, no solo marketing'
        ],
        color: 'bg-white/5',
        borderColor: 'border-white/10'
    },
    {
        title: 'Frustraciones',
        items: [
            'Trámites burocráticos innecesarios',
            'Servicios genéricos sin personalización',
            'Límites de crédito arbitrarios'
        ],
        color: 'bg-white/5',
        borderColor: 'border-white/10'
    }
];

export default function ValueMapImperial() {
    return (
        <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-[#050505] to-[#101111] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white/5 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    className="mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-serif mb-4" style={{ color: 'white' }}>
                        Mapa de Valor — <span className="italic">Tarjeta Imperial</span>
                    </h2>
                    <p className="text-sm md:text-base text-white/60 max-w-3xl font-light">
                        Relación clara entre lo que el cliente premium necesita y cómo Imperial Bank responde con servicios exclusivos y personalizados.
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
                        <div className="relative bg-white/5 rounded-3xl p-6 md:p-8 border-2 border-white/20">
                            {/* Square icon/label */}
                            <div className="absolute -top-4 left-8 bg-white text-[#050505] px-4 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
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
                                        <h4 className={`text-lg font-serif mb-4 ${card.textColor || 'text-white'}`} style={card.textColor ? {} : { color: 'white' }}>
                                            {card.title}
                                        </h4>
                                        <ul className="space-y-2">
                                            {card.items.map((item, i) => (
                                                <li key={i} className={`flex items-start gap-3 text-sm ${card.textColor || 'text-white/70'}`}>
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
                        <div className="relative bg-white/5 rounded-full aspect-square flex items-center justify-center p-6 md:p-8 border-2 border-[var(--muted-orange)]/30">
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
                                        <h4 className="text-base font-serif mb-3" style={{ color: 'white' }}>
                                            {card.title}
                                        </h4>
                                        <ul className="space-y-1.5">
                                            {card.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-xs text-white/70">
                                                    <div className={`w-1 h-1 rounded-full mt-1.5 flex-shrink-0 ${card.title === 'Frustraciones' ? 'bg-red-400' :
                                                        card.title === 'Alegrías esperadas' ? 'bg-emerald-500' :
                                                            'bg-white/50'
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
                    <div className="flex items-center gap-4 bg-white/10 rounded-full px-8 py-4 shadow-lg border border-white/20">
                        <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center">
                            <div className="w-4 h-4 border-2 border-white rounded-sm" />
                        </div>
                        <svg className="w-8 h-8 text-[var(--muted-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <div className="w-8 h-8 rounded-full bg-[var(--muted-orange)]/20 flex items-center justify-center">
                            <div className="w-4 h-4 border-2 border-[var(--muted-orange)] rounded-full" />
                        </div>
                        <span className="text-sm text-white/60 font-light ml-2">
                            Encaje Producto-Cliente
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
