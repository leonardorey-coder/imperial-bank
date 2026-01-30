'use client';

import { motion } from 'framer-motion';
import BrandingCarousel from './BrandingCarousel';

const footerLinks = {
    Producto: ['Imperial Básica', 'Imperial Oro', 'Imperial Platinum', 'Comparar tarjetas'],
    Soporte: ['Centro de ayuda', 'Preguntas frecuentes', 'Contactar asesor', 'Sucursales'],
    Seguridad: ['Cómo protegemos tu cuenta', 'Reportar fraude', 'Bloquear tarjeta', 'Alertas'],
    Legal: ['Términos y condiciones', 'Aviso de privacidad', 'Contrato de adhesión', 'Comisiones'],
};

export default function Footer() {
    return (
        <footer className="bg-[var(--imperial-black)] border-t border-[var(--imperial-blue)]/20 text-[var(--imperial-white)]">
            <BrandingCarousel />
            {/* CTA Section */}
            <div className="py-20 px-6 bg-[var(--imperial-blue)]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-serif mb-4" style={{ color: 'white' }}>
                        Comienza tu camino hacia un crédito claro
                    </h2>
                    <p className="text-white/80 mb-8 text-xl font-serif italic">
                        Solicita Imperial Básica hoy y descubre una nueva forma de administrar tu crédito.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-[var(--muted-orange)] text-white font-serif tracking-wide rounded-sm hover:brightness-110 transition-all duration-300 shadow-lg hover:shadow-[var(--muted-orange)]/40">
                            Solicitar Imperial Básica
                        </button>
                        <button className="px-8 py-4 bg-transparent text-white font-serif tracking-wide rounded-sm border border-white/20 hover:bg-white/5 transition-colors hover:border-[var(--muted-orange)]">
                            Hablar con un asesor
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Links Section */}
            <div className="border-t border-white/[0.05] py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category}>
                                <h4 className="text-[var(--muted-orange)] font-serif text-lg mb-4">{category}</h4>
                                <ul className="space-y-3">
                                    {links.map((link, index) => (
                                        <li key={index}>
                                            <a
                                                href="#"
                                                className="text-white/60 hover:text-[var(--light-grey)] transition-colors text-base font-display"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-white/[0.05] py-8 px-6 bg-black/20">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                        <img
                            src="/logotipo.png"
                            alt="Imperial Bank Logo"
                            className="w-10 h-10 object-contain"
                        />
                        <div className="flex items-center gap-2 text-white">
                            <span className="text-sm font-medium tracking-wide opacity-60">
                                The pucs company
                            </span>
                            <span className="text-white/30">|</span>
                            <span className="text-base font-serif font-semibold tracking-wide">
                                Imperial Bank
                            </span>
                        </div>
                    </div>
                    <p className="text-white/40 text-sm text-center md:text-right">
                        © 2026 Imperial Bank. Todos los derechos reservados.
                        <br className="md:hidden" />
                        <span className="hidden md:inline"> | </span>
                        Regulado por la CNBV.
                    </p>
                </div>
            </div>
        </footer>
    );
}
