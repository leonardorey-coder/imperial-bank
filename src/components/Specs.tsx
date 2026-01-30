'use client';

import { motion } from 'framer-motion';

interface Spec {
    label: string;
    value: string;
}

const specs: Spec[] = [
    { label: 'Tipo de tarjeta', value: 'Crédito' },
    { label: 'Anualidad', value: '$0 el primer año' },
    { label: 'Tecnología', value: 'Chip EMV + Contactless' },
    { label: 'Red de aceptación', value: 'Visa Internacional' },
    { label: 'Alertas de compras', value: 'SMS, Email y App' },
    { label: 'Control de límites', value: 'Desde la aplicación' },
    { label: 'Bloqueo temporal', value: 'Disponible en la app' },
    { label: 'Soporte al cliente', value: '24/7 con atención humana' },
    { label: 'Seguro de fraude', value: 'Incluido sin costo' },
    { label: 'Reemplazo de tarjeta', value: 'Gratuito por robo o extravío' },
    { label: 'Cobertura internacional', value: 'Disponible en 200+ países' },
    { label: 'Requisitos', value: 'Mayor de edad, identificación vigente' },
];

const seniorFeatures = [
    'Números grandes y legibles en la tarjeta física',
    'Estado de cuenta con tipografía clara y sin jerga bancaria',
    'Atención telefónica con operadores capacitados en trato senior',
    'Ayuda presencial disponible en cualquier sucursal',
];

export default function Specs() {
    return (
        <section id="specs" className="py-24 md:py-32 px-6 bg-[var(--imperial-white)] text-[var(--imperial-blue)]">
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
                        Todo lo que incluye Imperial Básica.
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

                {/* Senior-friendly section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="p-10 rounded-2xl bg-[var(--imperial-blue)] text-white shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--muted-orange)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <div className="flex items-center gap-4 mb-6 relative z-10">
                        <svg className="w-8 h-8 text-[var(--muted-orange)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <h3 className="text-3xl font-serif">Diseñada para todas las edades</h3>
                    </div>
                    <p className="text-white/80 mb-8 font-display text-lg relative z-10 max-w-2xl">
                        Imperial Básica fue pensada con especial atención para quienes valoran la claridad y el trato humano.
                    </p>
                    <ul className="space-y-4 relative z-10">
                        {seniorFeatures.map((feature, index) => (
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
