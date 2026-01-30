'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface TextOverlay {
    startProgress: number;
    endProgress: number;
    content: React.ReactNode;
}

export default function CardScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const frameIndexRef = useRef(0);
    const rafRef = useRef<number | undefined>(undefined);

    // Calculate letter spacing based on scroll (0 to 0.15 range -> 0 to 2em)
    const letterSpacing = Math.min(scrollProgress / 0.12, 1) * 2;
    const titleOpacity = Math.max(0, 1 - (scrollProgress / 0.15));

    // Text overlays configuration (excluding first one which is now dynamic)
    const overlays: TextOverlay[] = [
        {
            startProgress: 0.25,
            endProgress: 0.45,
            content: (
                <div className="text-center max-w-2xl">
                    <p className="text-3xl md:text-5xl font-light text-white leading-tight">
                        Transparencia sin sorpresas.
                    </p>
                </div>
            ),
        },
        {
            startProgress: 0.55,
            endProgress: 0.75,
            content: (
                <div className="text-center max-w-2xl">
                    <p className="text-3xl md:text-5xl font-light text-white leading-tight">
                        Seguridad. Control. Acompañamiento.
                    </p>
                </div>
            ),
        },
        {
            startProgress: 0.85,
            endProgress: 1,
            content: (
                <div className="text-center">
                    <button
                        onClick={() => {
                            document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors text-lg"
                    >
                        Ver especificaciones
                    </button>
                </div>
            ),
        },
    ];

    // Load images
    useEffect(() => {
        const loadImages = async () => {
            try {
                const response = await fetch('/frames/manifest.json');
                const manifest = await response.json();
                const framePaths: string[] = manifest.frames;

                const loadedImages: HTMLImageElement[] = [];
                let loaded = 0;

                await Promise.all(
                    framePaths.map((path, index) => {
                        return new Promise<void>((resolve) => {
                            const img = new Image();
                            img.onload = () => {
                                loadedImages[index] = img;
                                loaded++;
                                setLoadingProgress(Math.round((loaded / framePaths.length) * 100));
                                resolve();
                            };
                            img.onerror = () => {
                                console.error(`Failed to load frame: ${path}`);
                                resolve();
                            };
                            img.src = path;
                        });
                    })
                );

                setImages(loadedImages.filter(Boolean));
                setIsLoaded(true);
            } catch (error) {
                console.error('Error loading frames:', error);
            }
        };

        loadImages();
    }, []);

    // Draw frame on canvas
    const drawFrame = useCallback(
        (frameIndex: number) => {
            const canvas = canvasRef.current;
            const ctx = canvas?.getContext('2d');
            const img = images[frameIndex];

            if (!canvas || !ctx || !img) return;

            // Set canvas size based on device pixel ratio
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const rect = canvas.getBoundingClientRect();

            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            ctx.scale(dpr, dpr);

            // Clear canvas
            ctx.clearRect(0, 0, rect.width, rect.height);

            // Calculate "contain" scaling
            const imgAspect = img.width / img.height;
            const canvasAspect = rect.width / rect.height;

            let drawWidth, drawHeight, drawX, drawY;

            if (imgAspect > canvasAspect) {
                drawWidth = rect.width;
                drawHeight = rect.width / imgAspect;
                drawX = 0;
                drawY = (rect.height - drawHeight) / 2;
            } else {
                drawHeight = rect.height;
                drawWidth = rect.height * imgAspect;
                drawX = (rect.width - drawWidth) / 2;
                drawY = 0;
            }

            ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        },
        [images]
    );

    // Handle scroll
    useEffect(() => {
        if (!isLoaded || images.length === 0) return;

        const handleScroll = () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }

            rafRef.current = requestAnimationFrame(() => {
                const container = containerRef.current;
                if (!container) return;

                const rect = container.getBoundingClientRect();
                const scrollableHeight = container.offsetHeight - window.innerHeight;
                const scrolled = Math.max(0, -rect.top);
                const progress = Math.min(1, Math.max(0, scrolled / scrollableHeight));

                setScrollProgress(progress);

                const frameIndex = Math.min(
                    images.length - 1,
                    Math.floor(progress * images.length)
                );

                if (frameIndex !== frameIndexRef.current) {
                    frameIndexRef.current = frameIndex;
                    drawFrame(frameIndex);
                }
            });
        };

        // Initial draw
        drawFrame(0);

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', () => drawFrame(frameIndexRef.current));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', () => drawFrame(frameIndexRef.current));
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [isLoaded, images, drawFrame]);

    // Calculate overlay opacity
    const getOverlayOpacity = (overlay: TextOverlay) => {
        const { startProgress, endProgress } = overlay;
        const fadeIn = 0.05;
        const fadeOut = 0.05;

        if (scrollProgress < startProgress) return 0;
        if (scrollProgress > endProgress) return 0;

        if (scrollProgress < startProgress + fadeIn) {
            return (scrollProgress - startProgress) / fadeIn;
        }

        if (scrollProgress > endProgress - fadeOut) {
            return (endProgress - scrollProgress) / fadeOut;
        }

        return 1;
    };

    // Loading screen
    if (!isLoaded) {
        return (
            <div className="h-screen w-full flex flex-col items-center justify-center bg-[#050505]">
                <div className="text-white/50 text-sm uppercase tracking-widest mb-8">
                    Imperial Bank
                </div>
                <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-white/80"
                        initial={{ width: 0 }}
                        animate={{ width: `${loadingProgress}%` }}
                        transition={{ duration: 0.1 }}
                    />
                </div>
                <div className="text-white/30 text-sm mt-4">{loadingProgress}%</div>
            </div>
        );
    }

    return (
        <div
            ref={containerRef}
            className="relative"
            style={{ height: '350vh' }}
        >
            {/* Sticky canvas container */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                />

                {/* Bottom gradient to hide watermark */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none"
                    style={{
                        background: 'linear-gradient(to bottom, transparent, #050505 80%)',
                    }}
                />
                {/* Corner gradient for watermark */}
                <div
                    className="absolute bottom-0 right-0 w-48 h-36 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse at bottom right, #050505 0%, transparent 70%)',
                    }}
                />
                {/* Dynamic title with letter-spacing effect */}
                <div
                    className="absolute inset-0 flex items-center justify-center px-6 pointer-events-none overflow-hidden"
                    style={{ opacity: titleOpacity }}
                >
                    <div
                        className="text-center"
                        style={{
                            transform: `scale(${Math.max(0.3, 1 - letterSpacing * 0.35)})`,
                            transition: 'transform 0.05s ease-out',
                        }}
                    >
                        <h1
                            className="text-5xl md:text-7xl font-light text-white mb-4 whitespace-nowrap"
                            style={{
                                letterSpacing: `${letterSpacing}em`,
                                transition: 'letter-spacing 0.05s ease-out',
                            }}
                        >
                            Imperial Básica
                        </h1>
                        <p
                            className="text-xl md:text-2xl text-white/70 font-light whitespace-nowrap"
                            style={{
                                letterSpacing: `${letterSpacing * 0.3}em`,
                                transition: 'letter-spacing 0.05s ease-out',
                            }}
                        >
                            Crédito claro. Control total.
                        </p>
                    </div>
                </div>

                {/* Text overlays */}
                {overlays.map((overlay, index) => {
                    const opacity = getOverlayOpacity(overlay);
                    return (
                        <div
                            key={index}
                            className="absolute inset-0 flex items-center justify-center px-6 pointer-events-none"
                            style={{ opacity, transition: 'opacity 0.1s ease-out' }}
                        >
                            <div className={opacity > 0 ? 'pointer-events-auto' : 'pointer-events-none'}>
                                {overlay.content}
                            </div>
                        </div>
                    );
                })}

                {/* Scroll indicator */}
                {scrollProgress < 0.1 && (
                    <motion.div
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
                        >
                            <div className="w-1 h-2 bg-white/50 rounded-full" />
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
