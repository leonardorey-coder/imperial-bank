import React from 'react';

const BrandingCarousel: React.FC = () => {
    return (
        <div className="bg-white/[0.02] border-y border-white/5 py-10 relative overflow-hidden mt-12">
            <div className="flex items-center gap-8 mb-4 px-6 justify-center">
                <span className="text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase">Marcas Aliadas</span>
            </div>
            <div className="animate-scroll whitespace-nowrap opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                <div className="flex gap-20 items-center px-10">
                    <span className="font-display text-2xl text-white">MARINA</span>
                    <span className="font-display text-2xl text-white">HARBOUR</span>
                    <span className="font-display text-2xl text-white">RESIDENCES</span>
                    <span className="font-display text-2xl text-white">ZENITH</span>
                    <span className="font-display text-2xl text-white">AQUA</span>
                    <span className="font-display text-2xl text-white">ICON</span>
                    <span className="font-display text-2xl text-white">MARINA</span>
                    <span className="font-display text-2xl text-white">HARBOUR</span>
                    <span className="font-display text-2xl text-white">RESIDENCES</span>
                    <span className="font-display text-2xl text-white">ZENITH</span>
                    <span className="font-display text-2xl text-white">AQUA</span>
                    <span className="font-display text-2xl text-white">ICON</span>
                </div>
                <div className="flex gap-20 items-center px-10">
                    <span className="font-display text-2xl text-white">MARINA</span>
                    <span className="font-display text-2xl text-white">HARBOUR</span>
                    <span className="font-display text-2xl text-white">RESIDENCES</span>
                    <span className="font-display text-2xl text-white">ZENITH</span>
                    <span className="font-display text-2xl text-white">AQUA</span>
                    <span className="font-display text-2xl text-white">ICON</span>
                    <span className="font-display text-2xl text-white">MARINA</span>
                    <span className="font-display text-2xl text-white">HARBOUR</span>
                    <span className="font-display text-2xl text-white">RESIDENCES</span>
                    <span className="font-display text-2xl text-white">ZENITH</span>
                    <span className="font-display text-2xl text-white">AQUA</span>
                    <span className="font-display text-2xl text-white">ICON</span>
                </div>
            </div>
        </div>
    );
};

export default BrandingCarousel;
