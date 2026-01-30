'use client';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Blur background */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />

            {/* Content */}
            <div className="relative flex items-center px-4 py-2 md:px-6 md:py-4 max-w-7xl mx-auto">
                {/* Brand section */}
                <div className="flex items-center gap-4">
                    {/* Logo */}
                    <img
                        src="/logotipo.png"
                        alt="Imperial Bank Logo"
                        className="w-8 h-8 md:w-10 md:h-10 object-contain"
                    />

                    {/* Brand text */}
                    <div className="flex items-center gap-2 text-white">
                        <span className="text-sm font-medium tracking-wide opacity-80">
                            The pucs company
                        </span>
                        <span className="text-white/40">|</span>
                        <span className="text-base font-serif font-semibold tracking-wide">
                            Imperial Bank
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}
