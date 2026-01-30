'use client';

import { motion } from 'framer-motion';

interface Spec {
    label: string;
    value: string;
}

const specs: Spec[] = [
    { label: 'Tipo de tarjeta', value: 'Débito / Ahorro' },
    { label: 'Rendimiento anual', value: '17% GAT Real' },
    { label: 'Respaldo', value: 'IPAB hasta 400,000 UDIs' },
    { label: 'Tecnología', value: 'Chip EMV + Contactless' },
    { label: 'Red de aceptación', value: 'Mastercard Internacional' },
    { label: 'Alertas de movimientos', value: 'SMS, Email y App' },
    { label: 'Bloqueo temporal', value: 'Disponible en la app' },
    { label: 'Soporte al cliente', value: '24/7 con atención humana' },
    { label: 'Seguro de fraude', value: 'Incluido sin costo' },
    { label: 'Reemplazo de tarjeta', value: 'Gratuito por robo o extravío' },
    { label: 'Retiros en cajero', value: '4 retiros gratis al mes' },
    { label: 'Requisitos', value: 'Mayor de edad, identificación vigente' },
];

const savingsFeatures = [
    'Rendimientos calculados diariamente y pagados mensualmente',
    'Sin monto mínimo de apertura ni saldo mínimo mensual',
    'Transparencia total: sin comisiones ocultas',
    'Acceso inmediato a tu dinero en cualquier momento',
];

export default function SpecsControl() {
    return (
        <section id="specs-control" className="py-24 md:py-32 px-6 bg-[var(--imperial-white)] text-[var(--imperial-blue)]">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-serif mb-6">
                        Especificaciones
                    </h2>
                    <p className="text-[var(--imperial-blue)]/70 text-xl font-display text-lg max-w-2xl mx-auto italic">
                        Todo lo que incluye Tarjeta Control.
                    </p>
                </motion.div>

                {/* Specs table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-xl overflow-hidden border border-[var(--light-grey)]/60 mb-16 bg-white shadow-xl shadow-[var(--light-grey)]/20"
                >
                    {specs.map((spec, index) => (
                        <div
                            key={index}
                            className={`flex justify-between items-center px-6 py-5 ${index !== specs.length - 1 ? 'border-b border-[var(--light-grey)]/40' : ''
                                } ${index % 2 === 0 ? 'bg-[var(--imperial-white)]/30' : ''} hover:bg-[var(--light-grey)]/10 transition-colors`}
                        >
                            <span className="text-[var(--imperial-black)]/70 font-display text-lg">{spec.label}</span>
                            <span className="text-[var(--imperial-blue)] font-serif font-bold text-right text-lg">{spec.value}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Savings highlight section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="p-10 rounded-2xl bg-gradient-to-br from-[var(--muted-orange)] to-[#9a7a3d] text-white shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <div className="flex items-center gap-4 mb-6 relative z-10">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-3xl font-serif">Tu dinero crece contigo</h3>
                    </div>
                    <p className="text-white/90 mb-8 font-display text-lg relative z-10 max-w-2xl">
                        Tarjeta Control está diseñada para que tu dinero trabaje para ti, con total transparencia y sin sorpresas.
                    </p>
                    <ul className="space-y-4 relative z-10">
                        {savingsFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <svg
                                    className="w-5 h-5 text-white flex-shrink-0 mt-1"
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
                                <span className="text-white/95 font-display text-lg">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
