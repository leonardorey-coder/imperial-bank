'use client';

import { motion } from 'framer-motion';

const footerLinks = {
    Producto: ['Imperial Básica', 'Imperial Oro', 'Imperial Platinum', 'Comparar tarjetas'],
    Soporte: ['Centro de ayuda', 'Preguntas frecuentes', 'Contactar asesor', 'Sucursales'],
    Seguridad: ['Cómo protegemos tu cuenta', 'Reportar fraude', 'Bloquear tarjeta', 'Alertas'],
    Legal: ['Términos y condiciones', 'Aviso de privacidad', 'Contrato de adhesión', 'Comisiones'],
};

export default function Footer() {
    return (
        <footer className="bg-[#030303] border-t border-white/[0.05]">
            {/* CTA Section */}
            <div className="py-20 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
                        Comienza tu camino hacia un crédito claro
                    </h2>
                    <p className="text-white/50 mb-8 text-lg">
                        Solicita Imperial Básica hoy y descubre una nueva forma de administrar tu crédito.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors">
                            Solicitar Imperial Básica
                        </button>
                        <button className="px-8 py-4 bg-transparent text-white font-medium rounded-full border border-white/20 hover:bg-white/5 transition-colors">
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
                                <h4 className="text-white font-medium mb-4">{category}</h4>
                                <ul className="space-y-3">
                                    {links.map((link, index) => (
                                        <li key={index}>
                                            <a
                                                href="#"
                                                className="text-white/40 hover:text-white/70 transition-colors text-sm"
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
            <div className="border-t border-white/[0.05] py-8 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">IB</span>
                        </div>
                        <span className="text-white/50 text-sm">Imperial Bank</span>
                    </div>
                    <p className="text-white/30 text-sm text-center md:text-right">
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
