'use client';

import { motion } from 'framer-motion';

interface Spec {
    label: string;
    value: string;
}

const specs: Spec[] = [
    { label: 'Tipo de tarjeta', value: 'Portafolio Superior' },
    { label: 'CAT promedio', value: '24.9% sin IVA' },
    { label: 'Rendimiento anual', value: 'Hasta 17%' },
    { label: 'Condición rendimiento', value: 'Línea mín. $3,000 MXN' },
    { label: 'Anualidad', value: '$0 (sin penalizaciones)' },
    { label: 'Red de aceptación', value: 'Mastercard World Elite' },
    { label: 'Línea de crédito', value: 'Elevada y personalizada' },
    { label: 'Tecnología', value: 'Metal + Chip EMV + NFC' },
    { label: 'Atención', value: 'Prioritaria Senior 24/7' },
    { label: 'Salas VIP', value: 'Acceso global Mastercard' },
    { label: 'Relación Patrimonial', value: 'Activa' },
    { label: 'Seguridad', value: 'Respaldo Imperial Total' },
];

const premiumFeatures = [
    'Enfoque patrimonial para clientes con alta relación bancaria',
    'Máxima personalización financiera y atención prioritaria',
    'Rendimientos reales por encima de la inflación',
    'Experiencia diseñada para seniors con trayectoria profesional',
];

export default function SpecsImperial() {
    return (
        <section id="specs-imperial" className="py-24 md:py-32 px-6 bg-[#050505] text-white">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-serif mb-6" style={{ color: 'white' }}>
                        Especificaciones
                    </h2>
                    <p className="text-white/60 text-xl font-display text-lg max-w-2xl mx-auto italic">
                        Todo lo que incluye Tarjeta Imperial.
                    </p>
                </motion.div>

                {/* Specs table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-xl overflow-hidden border border-white/20 mb-16 bg-white/5 backdrop-blur-sm shadow-2xl"
                >
                    {specs.map((spec, index) => (
                        <div
                            key={index}
                            className={`flex justify-between items-center px-6 py-5 ${index !== specs.length - 1 ? 'border-b border-white/10' : ''
                                } ${index % 2 === 0 ? 'bg-white/5' : ''} hover:bg-white/10 transition-colors`}
                        >
                            <span className="text-white/60 font-display text-lg">{spec.label}</span>
                            <span className="text-white font-serif font-bold text-right text-lg">{spec.value}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Premium highlight section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="p-10 rounded-2xl bg-gradient-to-br from-[var(--imperial-black)] to-[#1a3a5c] text-white shadow-2xl relative overflow-hidden border border-white/10"
                >
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--muted-orange)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <div className="flex items-center gap-4 mb-6 relative z-10">
                        <svg className="w-8 h-8 text-[var(--muted-orange)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        <h3 className="text-3xl font-serif" style={{ color: 'white' }}>Experiencia Imperial</h3>
                    </div>
                    <p className="text-white/80 mb-8 font-display text-lg relative z-10 max-w-2xl">
                        Tarjeta Imperial representa el máximo nivel de servicio y exclusividad de Imperial Bank.
                    </p>
                    <ul className="space-y-4 relative z-10">
                        {premiumFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
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
                                <span className="text-white/90 font-display text-lg">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
