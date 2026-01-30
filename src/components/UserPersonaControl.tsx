'use client';

import { motion } from 'framer-motion';

// Personality trait data for savings-focused persona
const personalityTraits = [
    { label: 'Impulsivo', opposite: 'Cauteloso', value: 90, color: '#be944b' },
    { label: 'Gastador', opposite: 'Ahorrador', value: 85, color: '#0d355f' },
    { label: 'Arriesgado', opposite: 'Conservador', value: 80, color: '#0d355f' },
];

export default function UserPersonaControl() {
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
                    <h2 className="text-3xl md:text-5xl font-serif text-[var(--imperial-blue)] mt-4">Tarjeta Control</h2>
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
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--muted-orange)]/20 to-[var(--imperial-blue)]/20">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face"
                                    alt="Juan Sebastian Castillo López"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative corner */}
                            <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-24 md:h-24 bg-[var(--muted-orange)]/20 rounded-full blur-xl" />
                        </div>

                        {/* Quote */}
                        <div className="bg-gradient-to-br from-[var(--muted-orange)] to-[#9a7a3d] text-white p-6 rounded-xl relative">
                            <div className="absolute -top-2 left-6 w-4 h-4 bg-[var(--muted-orange)] rotate-45" />
                            <p className="text-sm md:text-base italic font-light leading-relaxed">
                                &quot;Busco que mi dinero crezca de forma segura, sin riesgos innecesarios y con total transparencia.&quot;
                            </p>
                        </div>

                        {/* Demographics */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="space-y-4">
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-[var(--imperial-black)]/40 font-medium">Edad</p>
                                    <p className="text-lg font-serif text-[var(--imperial-blue)]">35-55</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-[var(--imperial-black)]/40 font-medium">Estado</p>
                                    <p className="text-lg font-serif text-[var(--imperial-blue)]">Casado</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-[var(--imperial-black)]/40 font-medium">Arquetipo</p>
                                    <p className="text-lg font-serif text-[var(--imperial-blue)]">Previsor</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-[var(--imperial-black)]/40 font-medium">Ocupación</p>
                                    <p className="text-lg font-serif text-[var(--imperial-blue)]">Profesional</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-[var(--imperial-black)]/40 font-medium">Tarjeta</p>
                                    <p className="text-lg font-serif text-[var(--imperial-blue)]">Control</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-[var(--imperial-black)]/40 font-medium">Canal favorito</p>
                                    <p className="text-lg font-serif text-[var(--imperial-blue)]">App móvil</p>
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
                            <h3 className="text-3xl md:text-5xl font-serif text-[var(--imperial-blue)] mb-4">Juan Sebastian Castillo López</h3>
                        </div>

                        {/* Bio */}
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[var(--light-grey)]/30">
                            <h4 className="text-lg font-serif text-[var(--imperial-blue)] mb-4">Bio</h4>
                            <p className="text-sm md:text-base text-[var(--imperial-black)]/70 leading-relaxed font-light">
                                Profesional de 35-55 años con ingresos estables que busca hacer crecer sus ahorros de forma segura. No le interesa invertir en productos complejos o arriesgados. Valora la estabilidad, la transparencia y tener acceso inmediato a su dinero cuando lo necesite. Prefiere productos financieros con respaldo institucional y rendimientos claros.
                            </p>
                        </div>

                        {/* Objectives and Frustrations */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--light-grey)]/30">
                                <h4 className="text-lg font-serif text-[var(--imperial-blue)] mb-4">Objetivos</h4>
                                <ul className="space-y-3">
                                    {[
                                        'Hacer crecer su dinero con rendimientos competitivos',
                                        'Mantener liquidez para emergencias',
                                        'Proteger sus ahorros con respaldo IPAB',
                                        'Tener control total desde su celular'
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
                                        'Rendimientos bajos en cuentas tradicionales',
                                        'Comisiones ocultas que erosionan ganancias',
                                        'Plazos forzosos que limitan el acceso',
                                        'Productos complejos difíciles de entender'
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
                                        'Rendimientos claros y sin letra chica',
                                        'Acceso inmediato sin penalizaciones',
                                        'Seguridad institucional (IPAB)',
                                        'Control digital 24/7'
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
                                        'Fondo de emergencia familiar',
                                        'Ahorro para metas específicas',
                                        'Reserva para gastos grandes previstos',
                                        'Alternativa a inversiones riesgosas'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-[var(--imperial-black)]/70">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--muted-orange)] mt-2 flex-shrink-0" />
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
