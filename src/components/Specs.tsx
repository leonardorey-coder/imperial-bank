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
        <section id="specs" className="py-24 md:py-32 px-6 bg-[#050505]">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
                        Especificaciones
                    </h2>
                    <p className="text-white/50 text-lg max-w-2xl mx-auto">
                        Todo lo que incluye Imperial Básica.
                    </p>
                </motion.div>

                {/* Specs table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-2xl overflow-hidden border border-white/[0.05] mb-16"
                >
                    {specs.map((spec, index) => (
                        <div
                            key={index}
                            className={`flex justify-between items-center px-6 py-4 ${index !== specs.length - 1 ? 'border-b border-white/[0.05]' : ''
                                } ${index % 2 === 0 ? 'bg-white/[0.02]' : ''}`}
                        >
                            <span className="text-white/50">{spec.label}</span>
                            <span className="text-white font-medium text-right">{spec.value}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Senior-friendly section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08]"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <h3 className="text-xl font-medium text-white">Diseñada para todas las edades</h3>
                    </div>
                    <p className="text-white/50 mb-6">
                        Imperial Básica fue pensada con especial atención para quienes valoran la claridad y el trato humano.
                    </p>
                    <ul className="space-y-3">
                        {seniorFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <svg
                                    className="w-5 h-5 text-emerald-400/60 flex-shrink-0 mt-0.5"
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
                                <span className="text-white/70">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
