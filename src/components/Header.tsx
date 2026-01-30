'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { href: '/tarjetas', label: 'Tarjetas' },
    { href: '/tarjeta-basica', label: 'Imperial Básica' },
    { href: '/tarjeta-control', label: 'Tarjeta Control' },
    { href: '/tarjeta-imperial', label: 'Tarjeta Imperial' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    // Close menu on ESC key
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50">
                {/* Blur background */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />

                {/* Content */}
                <div className="relative flex items-center justify-between px-4 py-2 md:px-6 md:py-4 max-w-7xl mx-auto">
                    {/* Brand section */}
                    <Link href="/" scroll={false} className="flex items-center gap-3 md:gap-4 hover:opacity-90 transition-opacity">
                        {/* Logo */}
                        <img
                            src="/logotipo.png"
                            alt="Imperial Bank Logo"
                            className="w-8 h-8 md:w-10 md:h-10 object-contain"
                        />

                        {/* Brand text */}
                        <div className="flex items-center gap-2 text-white">
                            <span className="text-xs md:text-sm font-medium tracking-wide opacity-80 whitespace-nowrap">
                                The pucs company
                            </span>
                            <span className="text-white/40">|</span>
                            <span className="text-sm md:text-base font-serif font-semibold tracking-wide whitespace-nowrap">
                                Imperial Bank
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                scroll={false}
                                className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors group"
                            >
                                <span className="text-xs md:text-sm font-medium tracking-wide">{link.label}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden relative p-2 text-white/80 hover:text-white transition-colors"
                        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    >
                        <AnimatePresence mode="wait">
                            {isMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="w-6 h-6" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="w-6 h-6" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-lg md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.nav
                            className="fixed top-0 right-0 bottom-0 z-40 w-full max-w-sm bg-gradient-to-b from-[#0D355F] to-[#071F36] md:hidden shadow-2xl"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        >
                            {/* Menu Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                                <div className="flex items-center gap-3">
                                    <img
                                        src="/logotipo.png"
                                        alt="Imperial Bank"
                                        className="w-8 h-8 object-contain"
                                    />
                                    <span className="text-white font-serif font-medium">Menú</span>
                                </div>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 text-white/60 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Menu Links */}
                            <div className="px-6 py-8 space-y-2">
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            scroll={false}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="group flex items-center justify-between py-4 px-4 rounded-2xl text-white/80 hover:text-white hover:bg-white/10 transition-all"
                                        >
                                            <span className="text-lg font-medium tracking-wide">{link.label}</span>
                                            <motion.span
                                                className="text-[var(--muted-orange)] text-xl opacity-0 group-hover:opacity-100 transition-opacity"
                                                initial={{ x: -10 }}
                                                whileHover={{ x: 0 }}
                                            >
                                                →
                                            </motion.span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Menu Footer */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
                                <Link
                                    href="/"
                                    scroll={false}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block w-full py-4 px-6 bg-[var(--muted-orange)] text-white text-center font-medium rounded-2xl hover:bg-[var(--muted-orange)]/90 transition-colors"
                                >
                                    Inicio
                                </Link>
                                <p className="text-center text-white/30 text-xs mt-4 tracking-widest uppercase">
                                    Imperial Bank Group
                                </p>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
