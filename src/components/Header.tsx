'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Blur background */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />

            {/* Content */}
            <div className="relative flex items-center justify-between px-4 py-2 md:px-6 md:py-4 max-w-7xl mx-auto">
                {/* Brand section */}
                <Link href="/" className="flex items-center gap-3 md:gap-4 hover:opacity-90 transition-opacity">
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

                {/* Navigation */}
                <div className="flex items-center gap-6">
                    <Link
                        href="/tarjetas"
                        className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors group"
                    >
                        <span className="text-xs md:text-sm font-medium tracking-wide">Tarjetas</span>
                        <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                    <Link
                        href="/tarjeta-basica"
                        className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors group"
                    >
                        <span className="text-xs md:text-sm font-medium tracking-wide">Imperial Básica</span>
                        <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
