'use client';

import { motion } from 'framer-motion';

const persona = {
    name: 'Victoria Solís',
    age: 58,
    location: 'Ciudad de México',
    occupation: 'CEO, Grupo Empresarial',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces',
    quote: '"No busco descuentos. Busco experiencias que no se pueden comprar."',
    bio: 'Victoria lidera un conglomerado empresarial con presencia en 5 países. Viaja frecuentemente por negocios y valora el tiempo más que cualquier recurso. Busca servicios que eliminen fricciones y le permitan concentrarse en lo que realmente importa.',
    objectives: [
        'Acceso instantáneo a servicios premium sin trámites',
        'Reconocimiento y trato diferenciado en cualquier lugar del mundo',
        'Herramientas financieras que simplifiquen su vida ejecutiva',
    ],
    frustrations: [
        'Esperar en filas o llamadas telefónicas',
        'Límites de crédito que no reflejan su capacidad',
        'Servicios genéricos sin personalización',
    ],
    needs: [
        'Un solo punto de contacto para todas sus necesidades',
        'Flexibilidad total en sus finanzas',
        'Exclusividad genuina, no marketera',
    ],
    context: 'Usa la tarjeta principalmente en viajes internacionales, cenas de negocios, hoteles de lujo y compras de alto valor. Espera que todo funcione perfectamente sin intervención.',
    traits: [
        { name: 'Exigencia', value: 98 },
        { name: 'Poder adquisitivo', value: 95 },
        { name: 'Movilidad', value: 90 },
        { name: 'Tiempo libre', value: 25 },
    ],
};

export default function UserPersonaImperial() {
    return (
        <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-[#101111] to-[#050505] text-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[var(--muted-orange)] text-xs font-medium tracking-[0.3em] uppercase">Customer Profile</span>
                    <h2 className="text-4xl md:text-6xl font-serif mt-4 mb-6" style={{ color: 'white' }}>
                        User Persona
                    </h2>
                    <p className="text-white/60 text-xl font-display max-w-2xl mx-auto italic">
                        El perfil de cliente ideal para Tarjeta Imperial.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1"
                    >
                        <div className="bg-gradient-to-br from-[var(--imperial-black)] to-[#1a3a5c] border border-white/10 rounded-2xl p-8 text-center shadow-2xl">
                            <div className="relative inline-block mb-6">
                                <img
                                    src={persona.photo}
                                    alt={persona.name}
                                    className="w-32 h-32 rounded-full object-cover border-4 border-[var(--muted-orange)]/30"
                                />
                                <div className="absolute -bottom-2 -right-2 bg-[var(--muted-orange)] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                    VIP
                                </div>
                            </div>
                            <h3 className="text-2xl font-serif mb-2" style={{ color: 'white' }}>{persona.name}</h3>
                            <p className="text-white/60 font-display mb-4">{persona.age} años • {persona.location}</p>
                            <p className="text-[var(--muted-orange)] font-serif text-lg mb-6">{persona.occupation}</p>
                            <blockquote className="text-white/80 italic font-display text-lg leading-relaxed border-l-2 border-[var(--muted-orange)] pl-4 text-left">
                                {persona.quote}
                            </blockquote>
                        </div>
                    </motion.div>

                    {/* Bio and Details */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Bio */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                            <h4 className="text-lg font-serif text-[var(--muted-orange)] mb-4">Biografía</h4>
                            <p className="text-white/80 font-display text-lg leading-relaxed">{persona.bio}</p>
                        </div>

                        {/* Objectives and Frustrations */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                                <h4 className="text-lg font-serif text-green-400 mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Objetivos
                                </h4>
                                <ul className="space-y-3">
                                    {persona.objectives.map((obj, i) => (
                                        <li key={i} className="text-white/70 font-display text-sm flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></span>
                                            {obj}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                                <h4 className="text-lg font-serif text-red-400 mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Frustraciones
                                </h4>
                                <ul className="space-y-3">
                                    {persona.frustrations.map((fr, i) => (
                                        <li key={i} className="text-white/70 font-display text-sm flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                                            {fr}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Key Needs */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                            <h4 className="text-lg font-serif text-[var(--muted-orange)] mb-4">Necesidades clave</h4>
                            <div className="flex flex-wrap gap-3">
                                {persona.needs.map((need, i) => (
                                    <span key={i} className="bg-[var(--muted-orange)]/20 text-[var(--muted-orange)] px-4 py-2 rounded-full text-sm font-display">
                                        {need}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Context */}
                        <div className="bg-gradient-to-r from-[var(--imperial-blue)]/50 to-transparent border border-white/10 rounded-2xl p-6">
                            <h4 className="text-lg font-serif mb-3" style={{ color: 'white' }}>Contexto de uso</h4>
                            <p className="text-white/70 font-display">{persona.context}</p>
                        </div>

                        {/* Personality Traits */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                            <h4 className="text-lg font-serif mb-6" style={{ color: 'white' }}>Perfil de personalidad</h4>
                            <div className="space-y-4">
                                {persona.traits.map((trait, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-white/70 font-display text-sm">{trait.name}</span>
                                            <span className="text-white/50 text-sm">{trait.value}%</span>
                                        </div>
                                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${trait.value}%` }}
                                                transition={{ duration: 1, delay: 0.1 * i }}
                                                viewport={{ once: true }}
                                                className="h-full rounded-full"
                                                style={{
                                                    background: `linear-gradient(to right, var(--imperial-blue), var(--muted-orange))`
                                                }}
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
