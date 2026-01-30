'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    HelpCircle,
    MapPin,
    Users,
    Clock,
    Target,
    ShieldCheck,
    TrendingUp,
    CreditCard,
    TrendingDown,
    Zap,
    CheckCircle2,
    XCircle,
    Handshake,
    Rocket,
    X
} from 'lucide-react';
import Footer from '@/components/Footer';

// Animation variants
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

const shadesData = [
    {
        name: "Azul Imperial",
        colors: [
            { id: 100, hex: "#E6EDF4" }, { id: 200, hex: "#C4D3E3" }, { id: 300, hex: "#96B6CF" },
            { id: 400, hex: "#6F94B7" }, { id: 500, hex: "#0D355F" }, { id: 600, hex: "#0B2F55" },
            { id: 700, hex: "#092846" }, { id: 800, hex: "#071F36" }, { id: 900, hex: "#041626" }
        ]
    },
    {
        name: "Naranja Apagado",
        colors: [
            { id: 100, hex: "#F6EFE4" }, { id: 200, hex: "#EAD9B8" }, { id: 300, hex: "#DEC08A" },
            { id: 400, hex: "#D2A65F" }, { id: 500, hex: "#BE944B" }, { id: 600, hex: "#A67F3F" },
            { id: 700, hex: "#8D6A34" }, { id: 800, hex: "#74552A" }, { id: 900, hex: "#5A401F" }
        ]
    },
    {
        name: "Gris Medio",
        colors: [
            { id: 100, hex: "#F2F2F2" }, { id: 200, hex: "#D9D9D9" }, { id: 300, hex: "#BFBFBF" },
            { id: 400, hex: "#8C8C8C" }, { id: 500, hex: "#737373" }, { id: 600, hex: "#5C5C5C" },
            { id: 700, hex: "#454545" }, { id: 800, hex: "#2E2E2E" }, { id: 900, hex: "#1A1A1A" }
        ]
    },
    {
        name: "Gris Claro",
        colors: [
            { id: 100, hex: "#FAFAF9" }, { id: 200, hex: "#F0EFE0" }, { id: 300, hex: "#E6E4E1" },
            { id: 400, hex: "#D8D8D4" }, { id: 500, hex: "#D1CEC9" }, { id: 600, hex: "#B8B5B0" },
            { id: 700, hex: "#9E9B96" }, { id: 800, hex: "#84817D" }, { id: 900, hex: "#6A6764" }
        ]
    }
];

export default function HomeClient() {
    const [selectedColor, setSelectedColor] = useState<{ id: number, hex: string, group: string } | null>(null);

    // Close modal on ESC key
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setSelectedColor(null);
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    return (
        <main className="min-h-screen bg-[var(--imperial-white)] overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
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
                        Protección y Rendimiento <br className="hidden md:block" />
                        <span className="text-[var(--muted-orange)]">Patrimonial</span>
                    </motion.h1>
                    <motion.p
                        className="text-base md:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed"
                        variants={fadeInUp}
                    >
                        Un modelo híbrido exclusivo diseñado para brindar seguridad IPAB y rendimientos competitivos vinculados al crédito.
                    </motion.p>
                </motion.div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--imperial-white)] to-transparent" />
            </section>

            {/* Section 1: 5 W's Analysis */}
            <section className="py-20 md:py-32 px-4 bg-[var(--imperial-white)]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[var(--muted-orange)] text-xs font-medium tracking-[0.3em] uppercase">Estrategia Global</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[var(--imperial-blue)] mt-4 whitespace-nowrap">Análisis 5 W&apos;s</h2>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {[
                            { icon: HelpCircle, title: 'WHAT', text: 'Solución financiera Mastercard multicapa con identidad sobria y niveles diferenciados: Básica, Control e Imperial.' },
                            { icon: MapPin, title: 'WHERE', text: 'Integración en el ecosistema diario: comercios físicos, red de cajeros y terminales digitales.' },
                            { icon: Users, title: 'WHO', text: 'Enfoque senior (50+) con experiencia laboral, buscando seguridad, simplicidad y control total.' },
                            { icon: Clock, title: 'WHEN', text: 'Operatividad 24/7 para acompañar cada momento financiero, desde lo cotidiano a lo estratégico.' },
                            { icon: Target, title: 'WHY', text: 'Generar un entorno de confianza absoluta a través de la transparencia y adaptabilidad.' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                className={`bg-white rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all border border-[var(--light-grey)]/30 ${idx === 4 ? 'col-span-2 lg:col-span-1' : ''}`}
                                variants={fadeInUp}
                            >
                                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-[var(--muted-orange)] mb-4 md:mb-6 opacity-80" />
                                <h3 className="text-sm md:text-lg font-serif text-[var(--imperial-blue)] mb-2 md:mb-4 tracking-widest whitespace-nowrap">{item.title}</h3>
                                <p className="text-xs md:text-sm text-[var(--imperial-black)]/70 leading-relaxed font-light">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Section 2: FODA Analysis */}
            <section className="py-20 md:py-32 px-4 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--light-grey)]/20 via-white to-[var(--imperial-blue)]/5" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-7xl font-serif text-[var(--imperial-black)] tracking-[0.4em] md:tracking-[0.6em] whitespace-nowrap">F.O.D.A</h2>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {[
                            { title: 'Fortalezas', items: ['Imagen clara y confiable', 'Diseño icónico y reconocible'] },
                            { title: 'Oportunidades', items: ['Demanda de transparencia', 'Liderazgo en fidelidad'] },
                            { title: 'Debilidades', items: ['Perfil conservador', 'Menor tracción juvenil'] },
                            { title: 'Amenazas', items: ['Nuevos neobancos', 'Cambios de hábitos'] }
                        ].map((group, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white/90 backdrop-blur-md rounded-2xl p-4 md:p-8 border border-[var(--light-grey)]"
                                variants={fadeInUp}
                            >
                                <h3 className="text-sm md:text-xl font-serif text-[var(--imperial-blue)] mb-4 md:mb-6 border-b border-[var(--light-grey)] pb-2 md:pb-4 tracking-wider whitespace-nowrap">{group.title}</h3>
                                <ul className="space-y-2 md:space-y-4">
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
            </section>

            {/* Section 3: Logo */}
            <section className="py-20 md:py-32 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-serif text-[var(--imperial-black)] italic tracking-widest whitespace-nowrap">LOGO</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                        <motion.div
                            className="relative flex justify-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <img src="/logotipo.png" alt="Logo" className="w-48 h-48 md:w-80 md:h-80 object-contain drop-shadow-2xl z-10" />
                            <div className="absolute inset-0 bg-[var(--muted-orange)]/10 blur-[120px] rounded-full scale-110" />
                        </motion.div>

                        <motion.div
                            className="bg-[var(--imperial-white)] rounded-3xl p-8 md:p-12"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <ShieldCheck className="w-12 h-12 text-[var(--imperial-blue)] mb-8 opacity-60" />
                            <p className="text-lg md:text-2xl text-[var(--imperial-black)]/80 leading-relaxed font-light italic">
                                &quot;El <strong className="text-[var(--imperial-blue)] font-medium">escudo</strong> proyecta protección estructural. Su arquitectura clásica simboliza la <strong className="text-[var(--imperial-blue)] font-medium">resiliencia institucional</strong>, mientras que sus curvas inferiores aportan la fluidez necesaria para la banca moderna y cercana.&quot;
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 4: Tipografía */}
            <section className="py-20 md:py-32 px-4 bg-[var(--imperial-white)]">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-serif text-[var(--imperial-black)] italic tracking-widest">Tipografía</h2>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {/* PT Serif */}
                        <motion.div
                            className="bg-white rounded-3xl p-8 md:p-12 border border-[var(--light-grey)]/30 shadow-sm"
                            variants={fadeInUp}
                        >
                            <h3 className="text-xl md:text-2xl text-[var(--imperial-blue)] mb-6 tracking-wider font-medium">PT Serif</h3>
                            <div className="flex items-end gap-4 mb-6">
                                <span className="text-6xl md:text-8xl font-serif text-[var(--imperial-black)]">Aa</span>
                                <span className="text-sm md:text-base text-[var(--imperial-black)]/50 pb-4 font-light">Títulos<br />sub títulos</span>
                            </div>
                            <div className="space-y-2 text-[var(--imperial-black)]/70 font-serif">
                                <p className="text-xs md:text-sm tracking-wider">ABCDEFGHIJKLMNOPQRSTU</p>
                                <p className="text-xs md:text-sm tracking-wider">VWXYZabcdefghijklmnopqrst</p>
                                <p className="text-xs md:text-sm tracking-wider">uvwxyz1234567890</p>
                            </div>
                        </motion.div>

                        {/* Arapey */}
                        <motion.div
                            className="bg-white rounded-3xl p-8 md:p-12 border border-[var(--light-grey)]/30 shadow-sm"
                            variants={fadeInUp}
                        >
                            <h3 className="text-xl md:text-2xl text-[var(--imperial-blue)] mb-6 tracking-wider font-light italic">Arapey</h3>
                            <div className="flex items-end gap-4 mb-6">
                                <span className="text-6xl md:text-8xl font-light italic text-[var(--imperial-black)]/70">Aa</span>
                                <span className="text-sm md:text-base text-[var(--imperial-black)]/50 pb-4 font-light">Texto</span>
                            </div>
                            <div className="space-y-2 text-[var(--imperial-black)]/50 font-light">
                                <p className="text-xs md:text-sm tracking-wider">ABCDEFGHIJKLMNOPQRSTUVWX</p>
                                <p className="text-xs md:text-sm tracking-wider">YZabcdefghijklmnopqrstuvwxyz12</p>
                                <p className="text-xs md:text-sm tracking-wider text-center">34567890</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Section 5: Paleta de Colores */}
            <section className="py-20 md:py-32 px-4 relative overflow-hidden">
                {/* Background decorativo */}
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[var(--muted-orange)]/10 to-transparent" />
                <div className="absolute bottom-0 right-0 w-1/2 h-32 opacity-30">
                    <div className="w-full h-full bg-gradient-to-l from-[var(--muted-orange)]/30 via-transparent to-transparent" />
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        className="flex items-center gap-6 mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <img src="/logotipo.png" alt="Imperial Bank" className="w-10 h-10 md:w-14 md:h-14 object-contain" />
                        <h2 className="text-3xl md:text-5xl font-serif text-[var(--imperial-blue)] tracking-[0.15em] uppercase">Paleta de Colores</h2>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-5 gap-3 md:gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {[
                            { hex: '#0d355f', name: 'Azul Imperial' },
                            { hex: '#be944b', name: 'Naranja Apagado' },
                            { hex: '#d1cec9', name: 'Gris Claro' },
                            { hex: '#101111', name: 'Negro Imperial' },
                            { hex: '#efeff0', name: 'Blanco Perla' }
                        ].map((color, idx) => (
                            <motion.div
                                key={idx}
                                className="flex flex-col items-center"
                                variants={fadeInUp}
                            >
                                <div
                                    className="w-full aspect-[3/4] rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer border border-black/5"
                                    style={{ backgroundColor: color.hex }}
                                />
                                <span className="mt-4 text-[8px] md:text-xs font-mono text-[var(--imperial-black)]/50 uppercase tracking-wider">{color.hex}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Decorative line */}
                    <motion.div
                        className="flex items-center justify-center mt-16 gap-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="h-px w-24 md:w-40 bg-[var(--imperial-black)]/10" />
                        <div className="w-3 h-3 rotate-45 border border-[var(--imperial-black)]/20" />
                        <div className="h-px w-24 md:w-40 bg-[var(--imperial-black)]/10" />
                    </motion.div>
                </div>
            </section>

            {/* Section: Shades with detailed IDs and HEX */}
            <section className="py-24 px-4 bg-[var(--imperial-white)] relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-serif text-[var(--imperial-black)] italic whitespace-nowrap">SHADES</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {shadesData.map((shade, sIdx) => (
                            <motion.div
                                key={sIdx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: sIdx * 0.1 }}
                            >
                                <h3 className="text-sm font-medium text-[var(--imperial-blue)]/60 mb-6 tracking-[0.2em] uppercase px-2">{shade.name}</h3>
                                <div className="grid grid-cols-3 md:grid-cols-9 gap-2 rounded-2xl overflow-hidden shadow-xl border border-white">
                                    {shade.colors.map((color, cIdx) => (
                                        <div
                                            key={cIdx}
                                            className="group relative h-24 md:h-32 transition-transform hover:z-20 hover:scale-105 cursor-pointer"
                                            style={{ backgroundColor: color.hex }}
                                            onClick={() => setSelectedColor({ ...color, group: shade.name })}
                                        >
                                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 text-white pointer-events-none">
                                                <span className="text-[10px] font-bold">{color.id}</span>
                                                <span className="text-[8px] font-mono">{color.hex}</span>
                                            </div>
                                            <div className="absolute bottom-1 w-full text-center md:hidden pointer-events-none">
                                                <span className={`text-[8px] font-bold ${cIdx > 4 ? 'text-white/40' : 'text-black/40'}`}>{color.id}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-3 px-2 hidden md:flex">
                                    {shade.colors.map((color, i) => (
                                        <div key={i} className="flex flex-col items-center">
                                            <span className="text-[10px] font-bold text-[var(--imperial-black)]/30">{color.id}</span>
                                            <span className="text-[8px] font-mono text-[var(--imperial-black)]/20 uppercase">{color.hex}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Shade Modal */}
            <AnimatePresence>
                {selectedColor && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                            onClick={() => setSelectedColor(null)}
                        />

                        {/* Modal Content */}
                        <motion.div
                            className="relative w-full max-w-2xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        >
                            {/* Color Box */}
                            <div
                                className="w-full h-[50vh] transition-colors duration-500"
                                style={{ backgroundColor: selectedColor.hex }}
                            />

                            {/* Info Column */}
                            <div className="p-8 md:p-12 bg-white flex flex-col items-start gap-6">
                                <button
                                    onClick={() => setSelectedColor(null)}
                                    className="absolute top-6 right-6 p-3 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
                                >
                                    <X className="w-6 h-6 text-black/50" />
                                </button>

                                <div className="space-y-1">
                                    <span className="text-[var(--muted-orange)] text-xs font-medium tracking-[0.4em] uppercase">{selectedColor.group}</span>
                                    <h3 className="text-4xl md:text-5xl font-serif text-[var(--imperial-blue)]">Shade {selectedColor.id}</h3>
                                </div>

                                <div className="grid grid-cols-2 gap-8 w-full border-t border-black/5 pt-8">
                                    <div className="space-y-1">
                                        <p className="text-[10px] text-black/30 font-bold tracking-widest uppercase">Hex Code</p>
                                        <p className="text-2xl font-mono text-[var(--imperial-black)] uppercase tracking-wider">{selectedColor.hex}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] text-black/30 font-bold tracking-widest uppercase">ID Calibración</p>
                                        <p className="text-2xl font-serif text-[var(--imperial-black)] uppercase tracking-wider">{selectedColor.id}</p>
                                    </div>
                                </div>

                                <p className="text-black/50 text-sm font-light leading-relaxed max-w-md">
                                    Este tono forma parte de la paleta oficial de Imperial Bank, calibrado para optimizar la legibilidad y coherencia visual en dispositivos digitales y medios impresos.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

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

            {/* Core Model Section */}
            <section className="py-24 md:py-32 px-4 bg-[var(--imperial-blue)] text-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <ShieldCheck className="w-16 h-16 text-[var(--muted-orange)] mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-serif mb-4 !text-white">Estructura de Respaldo Híbrido</h2>
                        <p className="text-white/60 font-light tracking-widest text-sm uppercase">IPAB Protection Framework</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <motion.div
                            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl"
                            whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                            transition={{ duration: 0.3 }}
                        >
                            <TrendingUp className="w-12 h-12 text-[var(--muted-orange)] mb-6 drop-shadow-[0_0_10px_rgba(190,148,75,0.4)]" />
                            <h3 className="text-2xl font-serif mb-4 tracking-wide whitespace-nowrap !text-white drop-shadow-sm">Cuenta de Respaldo Imperial</h3>
                            <p className="text-sm md:text-base text-white/80 font-light leading-relaxed">
                                Un depósito bancario tradicional bajo protección IPAB que actúa como colateral productivo. Los recursos nunca abandonan el sistema bancario regulado.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl"
                            whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                            transition={{ duration: 0.3 }}
                        >
                            <CreditCard className="w-12 h-12 text-[var(--muted-orange)] mb-6 drop-shadow-[0_0_10px_rgba(190,148,75,0.4)]" />
                            <h3 className="text-2xl font-serif mb-4 tracking-wide whitespace-nowrap !text-white drop-shadow-sm">Vinculación Inteligente</h3>
                            <p className="text-sm md:text-base text-white/80 font-light leading-relaxed">
                                La línea de crédito se sincroniza con el capital protegido, permitiendo gasto financiero sin comprometer la seguridad patrimonial.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        className="bg-gradient-to-r from-[var(--muted-orange)] to-[#8f6f38] rounded-3xl p-8 md:p-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl md:text-4xl font-serif mb-4">Rendimiento Preferencial</h3>
                                <p className="text-white/80 text-sm md:text-lg max-w-xl font-light">
                                    Premiamos el uso responsable del crédito con una tasa anual dinámica de hasta el <span className="font-bold text-white">17%</span>.
                                </p>
                            </div>
                            <div className="flex flex-col items-center bg-black/20 p-8 rounded-2xl backdrop-blur-md min-w-[200px]">
                                <span className="text-5xl font-bold mb-2">17%</span>
                                <span className="text-xs uppercase tracking-widest opacity-80">Rendimiento Anual</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Dynamic Rates Table */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div className="flex items-center gap-4 mb-12">
                        <TrendingDown className="w-10 h-10 text-[var(--imperial-blue)] opacity-40 md:opacity-100" />
                        <h2 className="text-3xl md:text-4xl font-serif text-[var(--imperial-blue)] whitespace-nowrap">Escalabilidad de Rendimiento</h2>
                    </motion.div>

                    <div className="bg-[var(--imperial-white)] rounded-3xl overflow-hidden shadow-2xl">
                        <div className="grid grid-cols-2 bg-[var(--imperial-blue)] text-white p-6 tracking-[0.2em] text-[10px] md:text-xs">
                            <span className="font-medium whitespace-nowrap uppercase">Línea de Crédito Activa</span>
                            <span className="text-right font-medium whitespace-nowrap uppercase">Rendimiento Anual</span>
                        </div>
                        <div className="p-2 md:p-4 space-y-2">
                            {[
                                { limit: '$3,000 MXN +', rate: '17%', highlight: true },
                                { limit: '$2,000 – $2,999', rate: '12%', highlight: false },
                                { limit: '$1,000 – $1,999', rate: '8%', highlight: false },
                                { limit: 'Menor a $1,000', rate: 'Base', highlight: false }
                            ].map((row, i) => (
                                <div key={i} className={`grid grid-cols-2 p-6 rounded-2xl items-center transition-all ${row.highlight ? 'bg-white shadow-md scale-[1.02]' : 'hover:bg-black/5'}`}>
                                    <span className={`text-sm md:text-lg font-light ${row.highlight ? 'text-[var(--imperial-blue)] font-medium' : 'text-[var(--imperial-black)]/60'}`}>{row.limit}</span>
                                    <div className="text-right">
                                        <span className={`px-4 py-2 rounded-full text-sm md:text-lg font-serif ${row.highlight ? 'bg-[var(--muted-orange)] text-white font-bold' : 'text-[var(--imperial-black)]/40 italic'}`}>
                                            {row.rate}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Benefits Grid */}
            <section className="py-24 md:py-32 px-4 bg-[var(--imperial-white)]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                        {[
                            { icon: CheckCircle2, text: 'Uso responsable incentivado' },
                            { icon: ShieldCheck, text: 'Capital protegido por IPAB' },
                            { icon: Zap, text: 'Liquidez total sin bloqueos' },
                            { icon: XCircle, text: 'Cero penalizaciones ocultas' },
                            { icon: Handshake, text: 'Ecosistema ganar-ganar' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                className={`bg-white rounded-2xl p-4 md:p-6 shadow-sm flex flex-col items-center text-center gap-2 md:gap-4 border border-black/5 hover:border-[var(--muted-orange)]/30 transition-all ${idx === 4 ? 'col-span-2 lg:col-span-1' : ''}`}
                                whileHover={{ scale: 1.05 }}
                            >
                                <item.icon className="w-6 h-6 md:w-8 md:h-8 text-[var(--muted-orange)]" />
                                <span className="text-[10px] md:text-xs font-medium text-[var(--imperial-black)]/70 uppercase tracking-widest">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Differentiator & Final Message */}
            <section className="py-24 md:py-40 px-4 bg-[var(--imperial-black)] relative">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Rocket className="w-16 h-16 text-[var(--muted-orange)] mx-auto mb-10" />
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-12 leading-tight">
                            Redefiniendo el Valor de su <br />
                            <span className="text-[var(--muted-orange)] italic">Patrimonio Bancario</span>
                        </h2>
                        <div className="h-px w-32 bg-white/20 mx-auto mb-12" />
                        <p className="text-xl md:text-3xl font-serif text-white/80 leading-relaxed max-w-3xl mx-auto px-4">
                            Imperial Bank no solo otorga crédito; <br className="hidden md:block" />
                            <span className="text-white">construye un ecosistema financiero protegido, rentable y sostenible.</span>
                        </p>
                    </motion.div>
                </div>

                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--imperial-white)] to-transparent" />
            </section>

            <Footer />
        </main>
    );
}
