'use client';

import { motion } from 'framer-motion';
import { HelpCircle, MapPin, Users, Clock, Target } from 'lucide-react';
import Footer from '@/components/Footer';
import CardScrollTarjetas from '@/components/CardScrollTarjetas';

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

// 5 W's Data
const fiveWsData = [
    {
        icon: HelpCircle,
        title: 'WHAT',
        text: 'Portafolio de tarjetas Mastercard – Básica, Control e Imperial. Un ecosistema único donde el crédito, la liquidez y el rendimiento trabajan de manera conjunta para el cliente senior.'
    },
    {
        icon: MapPin,
        title: 'WHERE',
        text: 'Integración total a la banca digital Imperial Bank. El capital genera rendimientos por encima de la inflación sobre el saldo disponible, con disposición de dinero 24/7 los 365 días del año.'
    },
    {
        icon: Users,
        title: 'WHO',
        text: 'Diseñado para seniors y personas mayores de 50 años con amplia experiencia en su trabajo, que buscan consolidar su patrimonio mientras mantienen liquidez inmediata y acceso inteligente al crédito.'
    },
    {
        icon: Clock,
        title: 'WHEN',
        text: 'Apertura de cuenta desde $100 MXN. El modelo híbrido permite que el rendimiento activo compense parcialmente el costo financiero, ofreciendo valor real mientras se usa el crédito.'
    },
    {
        icon: Target,
        title: 'WHY',
        text: 'Ofrecer los CAT más competitivos del mercado mexicano (desde 24.9% en Imperial), combinando la seguridad de un capital productivo con los beneficios de una tarjeta premium sin anualidad.'
    }
];

// FODA Data
const fodaData = [
    {
        title: 'BÁSICA (CAT 39.8%)',
        items: ['Sin anualidad.', 'Acceso desde $100 MXN.', 'Dinero siempre disponible.', 'Rendimiento activo al usar capital.']
    },
    {
        title: 'CONTROL (CAT 32.5%)',
        items: ['Sin anualidad condicionada.', 'Rendimiento preferencial con 2 usos mensuales.', 'Línea de crédito ajustable.', 'Menor impacto financiero real.']
    },
    {
        title: 'IMPERIAL (CAT 24.9%)',
        items: ['Hasta 17% de rendimiento anual.', 'Línea de crédito elevada.', 'Atención prioritaria y personalizada.', 'Uno de los CAT más competitivos en México.']
    },
    {
        title: 'SISTEMA MASTERCARD',
        items: ['Diseño para Seniors (50+).', 'Rendimientos reales superiores a inflación.', 'Seguridad patrimonial y liquidez 24/7.', 'Ecosistema bancario único.']
    }
];

export default function TarjetasClient() {
    return (
        <>
            {/* Hero Section with Scroll Animation - Outside of overflow container */}
            <CardScrollTarjetas />

            <main id="tarjetas-info" className="bg-[var(--imperial-white)]">

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
        </>
    );
}
