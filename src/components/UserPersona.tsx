'use client';

import { motion } from 'framer-motion';

// Personality trait data
const personalityTraits = [
    { label: 'Introvertido', opposite: 'Extrovertido', value: 70, color: '#be944b' },
    { label: 'Analítico', opposite: 'Creativo', value: 85, color: '#0d355f' },
    { label: 'Desordenado', opposite: 'Organizado', value: 90, color: '#0d355f' },
];

export default function UserPersona() {
    return (
        <section className="py-20 md:py-32 px-4 bg-[var(--imperial-white)] relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--muted-orange)]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--imperial-blue)]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 md:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[var(--muted-orange)] text-xs font-medium tracking-[0.3em] uppercase">User Persona</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-[var(--imperial-blue)] mt-4">Imperial Básica</h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left Column - Photo and Quote */}
                    <motion.div
                        className="lg:col-span-4"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Photo */}
                        <div className="relative mb-6 max-w-[180px] md:max-w-none">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--light-grey)] to-[var(--imperial-blue)]/20">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                                    alt="Kevin Cauich Calvo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative corner */}
                            <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-24 md:h-24 bg-[var(--muted-orange)]/20 rounded-full blur-xl" />
                        </div>

                        {/* Quote */}
                        <div className="bg-[var(--imperial-blue)] text-white p-6 rounded-xl relative">
                            <div className="absolute -top-2 left-6 w-4 h-4 bg-[var(--imperial-blue)] rotate-45" />
                            <p className="text-sm md:text-base italic font-light leading-relaxed">
                                &quot;No quiero complicaciones: solo entender cuánto debo y cuándo pagar, con tranquilidad.&quot;
                            </p>
                        </div>

                        {/* Demographics */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="space-y-4">
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-[var(--imperial-black)]/40 font-medium">Edad</p>
                                    <p className="text-lg font-serif text-[var(--imperial-blue)]">+50</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-[var(--imperial-black)]/40 font-medium">Estado</p>
                                    <p className="text-lg font-serif text-[var(--imperial-blue)]">—</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-[var(--imperial-black)]/40 font-medium">Arquetipo</p>
                                    <p className="text-lg font-serif text-[var(--imperial-blue)]">Prudente</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-[var(--imperial-black)]/40 font-medium">Ubicación</p>
                                    <p className="text-lg font-serif text-[var(--imperial-blue)]">—</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-[var(--imperial-black)]/40 font-medium">Tarjeta</p>
                                    <p className="text-lg font-serif text-[var(--imperial-blue)]">Imperial Básica</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-[var(--imperial-black)]/40 font-medium">Canal favorito</p>
                                    <p className="text-lg font-serif text-[var(--imperial-blue)]">Teléfono / Sucursal</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        className="lg:col-span-8 space-y-8"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        {/* Name */}
                        <div>
                            <h3 className="text-3xl md:text-5xl font-serif text-[var(--imperial-blue)] mb-4">Kevin Cauich Calvo</h3>
                        </div>

                        {/* Bio */}
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[var(--light-grey)]/30">
                            <h4 className="text-lg font-serif text-[var(--imperial-blue)] mb-4">Bio</h4>
                            <p className="text-sm md:text-base text-[var(--imperial-black)]/70 leading-relaxed font-light">
                                Persona mayor de 50 años que busca una tarjeta de crédito sencilla para gastos cotidianos, con un límite controlado y reglas claras. No se considera experta en tecnología, por lo que valora procesos fáciles, explicaciones sin tecnicismos y acompañamiento humano (teléfono o sucursal). Su prioridad es evitar deudas grandes y sentir control total sobre fechas, pagos e intereses.
                            </p>
                        </div>

                        {/* Objectives and Frustrations */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--light-grey)]/30">
                                <h4 className="text-lg font-serif text-[var(--imperial-blue)] mb-4">Objetivos</h4>
                                <ul className="space-y-3">
                                    {[
                                        'Usar crédito de forma segura (sin endeudarse)',
                                        'Pagar compras esenciales sin usar efectivo',
                                        'Entender estados de cuenta, intereses y fechas',
                                        'Recibir recordatorios claros para no atrasarse'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-[var(--imperial-black)]/70">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--muted-orange)] mt-2 flex-shrink-0" />
                                            <span className="font-light">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--light-grey)]/30">
                                <h4 className="text-lg font-serif text-[var(--imperial-blue)] mb-4">Frustraciones</h4>
                                <ul className="space-y-3">
                                    {[
                                        '"Letra chica" y cargos inesperados',
                                        'Apps confusas o con demasiadas opciones',
                                        'Instrucciones rápidas sin guía paso a paso',
                                        'Atención impersonal o apresurada'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-[var(--imperial-black)]/70">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                                            <span className="font-light">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Key Needs and Usage Context */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--light-grey)]/30">
                                <h4 className="text-lg font-serif text-[var(--imperial-blue)] mb-4">Necesidades clave</h4>
                                <ul className="space-y-3">
                                    {[
                                        'Contratos y beneficios explicados en lenguaje simple',
                                        'Límite bajo y ajustable con control',
                                        'Alertas de pago y corte (SMS/WhatsApp/llamada)',
                                        'Soporte humano para activación y dudas'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-[var(--imperial-black)]/70">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--imperial-blue)] mt-2 flex-shrink-0" />
                                            <span className="font-light">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--light-grey)]/30">
                                <h4 className="text-lg font-serif text-[var(--imperial-blue)] mb-4">Contexto de uso</h4>
                                <ul className="space-y-3">
                                    {[
                                        'Compras del hogar y farmacia',
                                        'Pagos pequeños y frecuentes',
                                        'Imprevistos moderados (salud / reparación)',
                                        'Preferencia por "pagar a tiempo" y evitar intereses'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-[var(--imperial-black)]/70">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                                            <span className="font-light">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Personality Bars */}
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[var(--light-grey)]/30">
                            <h4 className="text-lg font-serif text-[var(--imperial-blue)] mb-6">Personalidad</h4>
                            <div className="space-y-6">
                                {personalityTraits.map((trait, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="flex justify-between text-xs text-[var(--imperial-black)]/60">
                                            <span>{trait.label}</span>
                                            <span>{trait.opposite}</span>
                                        </div>
                                        <div className="h-2 bg-[var(--light-grey)]/30 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full rounded-full"
                                                style={{ backgroundColor: trait.color }}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${trait.value}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
