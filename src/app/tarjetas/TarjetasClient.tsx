'use client';

import { motion } from 'framer-motion';
import { HelpCircle, MapPin, Users, Clock, Target } from 'lucide-react';
import Footer from '@/components/Footer';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

// WCAG Color Contrast Data
const wcagData = [
    { bg: '#0D355F', text: 'white', label: 'Azul Imperial' },
    { bg: '#101820', text: 'white', label: 'Azul Oscuro' },
    { bg: '#0D355F', text: 'white', label: 'Azul Imperial' },
    { bg: '#D1CEC9', text: '#101820', label: 'Gris Claro' },
    { bg: '#0D355F', text: 'white', label: 'Azul Imperial' },
    { bg: '#BE944B', text: 'white', label: 'Dorado' },
];

// 5 W's Data
const fiveWsData = [
    {
        icon: HelpCircle,
        title: 'WHAT',
        text: 'El sistema de tarjetas se compone de tres niveles – Básica, Control y Preferente – diseñados para responder a distintas necesidades financieras. La identidad visual se mantiene unificada, mientras que los acabados y detalles permiten distinguir cada nivel de manera clara y jerárquica.'
    },
    {
        icon: MapPin,
        title: 'WHERE',
        text: 'Se integra en la vida cotidiana del usuario como una herramienta de uso diario, presente en comercios, cajeros automáticos y puntos de pago. Su diseño está pensado para ser fácilmente reconocible y funcional en cualquier contexto.'
    },
    {
        icon: Users,
        title: 'WHO',
        text: 'Está dirigido a personas de 50 años en adelante, con distintos hábitos de consumo y niveles de uso financiero, que buscan opciones claras, seguras y confiables adaptadas a su estilo de vida.'
    },
    {
        icon: Clock,
        title: 'WHEN',
        text: 'Acompaña al usuario en diferentes momentos de su vida financiera, permitiendo avanzar de un nivel a otro conforme cambian sus necesidades y el uso de los servicios bancarios.'
    },
    {
        icon: Target,
        title: 'WHY',
        text: 'El sistema se crea para ofrecer una experiencia clara y progresiva, donde cada tarjeta representa un nivel de servicio distinto, reforzando la confianza, la tranquilidad y la percepción de respaldo institucional.'
    }
];

// FODA Data
const fodaData = [
    {
        title: 'FORTALEZAS',
        items: ['No cobra anualidad.', 'Límite de crédito bajo.']
    },
    {
        title: 'OPORTUNIDADES',
        items: ['Ideal para personas que inician su historial crediticio.', 'Puede adaptarse a estudiantes o personas con ingresos limitados.']
    },
    {
        title: 'DEBILIDADES',
        items: ['Uso limitado para compras grandes.', 'Menor atractivo para clientes con mayor capacidad financiera.']
    },
    {
        title: 'AMENAZAS',
        items: ['Competencia de otras tarjetas sin anualidad con más beneficios.', 'Percepción negativa del límite bajo.']
    }
];

export default function TarjetasClient() {
    return (
        <main className="min-h-screen bg-[var(--imperial-white)] overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--imperial-blue)] via-[#1a4a7a] to-[var(--imperial-black)]" />

                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-48 h-48 md:w-64 md:h-64 rounded-full bg-[var(--muted-orange)] blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-[var(--imperial-blue)] blur-3xl animate-pulse" />
                </div>

                <motion.div
                    className="relative z-10 text-center px-4 py-20 max-w-5xl mx-auto"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.span
                        className="inline-block text-[var(--muted-orange)] text-xs md:text-sm font-medium tracking-[0.4em] uppercase mb-6"
                        variants={fadeInUp}
                    >
                        Imperial Bank Group
                    </motion.span>
                    <motion.h1
                        className="text-3xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight px-2"
                        variants={fadeInUp}
                    >
                        Sistema de <span className="text-[var(--muted-orange)]">Tarjetas</span>
                    </motion.h1>
                    <motion.p
                        className="text-base md:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed"
                        variants={fadeInUp}
                    >
                        Tres niveles de servicio diseñados para acompañarte en cada etapa de tu vida financiera.
                    </motion.p>
                </motion.div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--imperial-white)] to-transparent" />
            </section>

            {/* WCAG Section */}
            <section className="py-20 md:py-32 px-4 bg-[var(--imperial-white)]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold text-[var(--imperial-blue)] tracking-tight">WCAG</h2>
                        <p className="text-[var(--imperial-black)]/50 mt-4 text-lg font-light">Accesibilidad y contraste de colores</p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {/* Left Column - Large Blue Card */}
                        <motion.div
                            className="md:row-span-2 rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[400px] md:min-h-[500px]"
                            style={{ backgroundColor: '#0D355F' }}
                            variants={fadeInUp}
                        >
                            <div>
                                <span className="text-white/40 text-xs tracking-widest uppercase">Imperial Blue</span>
                                <p className="text-white text-2xl md:text-3xl font-serif mt-4 leading-relaxed">
                                    El azul imperial transmite confianza y estabilidad institucional.
                                </p>
                            </div>
                            <span className="text-white/30 text-sm">2026</span>
                        </motion.div>

                        {/* Right Grid - 2x2 */}
                        <motion.div
                            className="rounded-3xl p-6 md:p-8 flex flex-col justify-center min-h-[200px]"
                            style={{ backgroundColor: '#101820' }}
                            variants={fadeInUp}
                        >
                            <p className="text-white/60 text-sm mb-2">Contraste AAA</p>
                            <p className="text-white font-bold text-lg">Texto claro sobre fondo oscuro</p>
                        </motion.div>

                        <motion.div
                            className="rounded-3xl p-6 md:p-8 flex flex-col justify-center min-h-[200px]"
                            style={{ backgroundColor: '#0D355F' }}
                            variants={fadeInUp}
                        >
                            <p className="text-white/60 text-sm mb-2">Contraste AA</p>
                            <p className="text-white font-bold text-lg">Legibilidad garantizada</p>
                        </motion.div>

                        <motion.div
                            className="rounded-3xl p-6 md:p-8 flex flex-col justify-center min-h-[200px]"
                            style={{ backgroundColor: '#D1CEC9' }}
                            variants={fadeInUp}
                        >
                            <p className="text-[#101820]/60 text-sm mb-2">Contraste Inverso</p>
                            <p className="text-[#101820] font-bold text-lg">Texto oscuro sobre fondo claro</p>
                        </motion.div>

                        <motion.div
                            className="rounded-3xl p-6 md:p-8 flex flex-col justify-center min-h-[200px]"
                            style={{ backgroundColor: '#BE944B' }}
                            variants={fadeInUp}
                        >
                            <p className="text-white/70 text-sm mb-2">Acento Dorado</p>
                            <p className="text-white font-bold text-lg">Destacar elementos premium</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 5 W's Section */}
            <section className="py-20 md:py-32 px-4 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--light-grey)]/20 via-white to-[var(--imperial-blue)]/5" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-serif text-[var(--imperial-black)]">
                            5 W&apos;s – <span className="text-[var(--muted-orange)]">Sistema de tarjetas</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {fiveWsData.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-[var(--light-grey)]/50 shadow-sm hover:shadow-xl transition-all"
                                variants={fadeInUp}
                            >
                                <item.icon className="w-8 h-8 text-[var(--muted-orange)] mb-4 opacity-70" />
                                <h3 className="text-lg font-serif text-[var(--imperial-blue)] mb-4 tracking-[0.2em]">{item.title}</h3>
                                <p className="text-sm text-[var(--imperial-black)]/70 leading-relaxed font-light">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* FODA Section */}
            <section className="py-20 md:py-32 px-4 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-8xl font-bold text-[var(--imperial-black)] tracking-[0.3em] md:tracking-[0.5em]">
                            F.O.D.A
                        </h2>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {fodaData.map((group, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-[var(--imperial-white)] rounded-2xl p-6 md:p-8 border border-[var(--light-grey)]/30"
                                variants={fadeInUp}
                            >
                                <h3 className="text-xs md:text-sm font-bold text-[var(--imperial-blue)] mb-6 tracking-[0.2em] uppercase border-b border-[var(--light-grey)] pb-4">
                                    {group.title}
                                </h3>
                                <ul className="space-y-4">
                                    {group.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-[var(--imperial-black)]/70">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--muted-orange)] mt-1.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[var(--light-grey)]/20 to-transparent pointer-events-none" />
            </section>

            <Footer />
        </main>
    );
}
