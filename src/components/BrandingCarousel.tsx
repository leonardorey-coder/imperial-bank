'use client';

import React from 'react';

const BrandingCarousel: React.FC = () => {
    const brands = [
        "MARINA", "HARBOUR", "RESIDENCES", "ZENITH", "AQUA", "ICON",
        "ESTATE", "LUXURY", "EMPIRE", "PREMIUM", "GLOBAL", "TRUST"
    ];

    // Triple the array to ensure smooth continuous scrolling
    const duplicatedBrands = [...brands, ...brands, ...brands];

    return (
        <div className="bg-white/[0.02] border-y border-white/5 py-10 relative overflow-hidden group">
            <div className="flex items-center gap-8 mb-4 px-6 justify-center">
                <span className="text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase">Marcas Aliadas</span>
            </div>

            <div className="flex overflow-hidden relative">
                <div className="animate-scroll whitespace-nowrap opacity-20 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 cursor-default py-4">
                    <div className="flex gap-16 md:gap-24 items-center px-10">
                        {duplicatedBrands.map((brand, i) => (
                            <span
                                key={i}
                                className="font-serif text-2xl md:text-3xl text-white tracking-[0.2em] font-light"
                            >
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Side gradients for fading edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--imperial-black)] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--imperial-black)] to-transparent z-10 pointer-events-none" />
        </div>
    );
};

export default BrandingCarousel;
