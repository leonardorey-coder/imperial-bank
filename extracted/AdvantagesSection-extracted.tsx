import React, { useEffect, useRef, useState } from 'react';

const ADVANTAGES = [
    {
        title: "Asesoría Legal Integral",
        description: "Protegemos tu patrimonio con un equipo jurídico especializado en derecho inmobiliario. Verificamos cada detalle de la propiedad para garantizar una transacción transparente y segura, brindándote certeza en cada firma.",
        image: "https://images.unsplash.com/photo-1450101499121-87526493ad79?q=80&w=2000&auto=format&fit=crop"
    },
    {
        title: "Retorno de Inversión",
        description: "Maximizamos tu capital. Nuestro análisis de mercado identifica propiedades con el mayor potencial de plusvalía y rentabilidad en zonas de alto crecimiento como Puerto Cancún y la Zona Hotelera.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
    },
    {
        title: "Concierge VIP",
        description: "Más que una inmobiliaria, somos tus anfitriones. Desde la gestión de tu llegada hasta servicios de mantenimiento y administración de rentas vacacionales, nos encargamos de todo para que tú solo disfrutes.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop"
    },
    {
        title: "Ubicaciones Premium",
        description: "Acceso exclusivo a preventas y propiedades 'off-market' en las ubicaciones más codiciadas del Caribe Mexicano. Vivir en el paraíso nunca fue tan exclusivo.",
        image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=2000&auto=format&fit=crop"
    }
];

const AdvantagesSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
    const bgRefs = useRef<(HTMLDivElement | null)[]>([]);
    const requestRef = useRef<number>();

    useEffect(() => {
        const updateTransitions = () => {
            const viewportHeight = window.innerHeight;
            const viewportCenter = viewportHeight / 2;

            let currentBestIndex = 0;
            let minDistance = Infinity;

            contentRefs.current.forEach((ref, index) => {
                const bg = bgRefs.current[index];
                if (!ref || !bg) return;

                const rect = ref.getBoundingClientRect();
                const elementCenter = rect.top + rect.height / 2;
                const distance = Math.abs(elementCenter - viewportCenter);

                const opacity = Math.max(0, 1 - (distance / viewportHeight));
                bg.style.opacity = opacity.toString();

                const scale = 1 + (distance / viewportHeight) * 0.1;
                const img = bg.querySelector('img');
                if (img) {
                    img.style.transform = `scale(${scale})`;
                }

                if (distance < minDistance) {
                    minDistance = distance;
                    currentBestIndex = index;
                }
            });

            if (minDistance < viewportHeight * 0.7) {
                setActiveIndex(currentBestIndex);
            }

            requestRef.current = requestAnimationFrame(updateTransitions);
        };

        const container = document.getElementById('snap-container');

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (container) {
                    if (entry.isIntersecting) {
                        container.classList.add('snap-mandatory-active');
                    } else {
                        container.classList.remove('snap-mandatory-active');
                    }
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        requestRef.current = requestAnimationFrame(updateTransitions);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            if (container) container.classList.remove('snap-mandatory-active');
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-dark text-white py-24"
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
                <div className="absolute inset-0 bg-dark/50 z-10" />

                {ADVANTAGES.map((adv, idx) => (
                    <div
                        key={idx}
                        ref={(el) => (bgRefs.current[idx] = el)}
                        className="absolute inset-0 will-change-opacity pointer-events-none"
                        style={{ opacity: idx === 0 ? 1 : 0 }}
                    >
                        <img
                            src={adv.image}
                            alt={adv.title}
                            className="w-full h-full object-cover will-change-transform"
                            style={{ transform: 'scale(1.1)' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-dark via-dark/40 to-transparent" />
                    </div>
                ))}
            </div>

            <div className="relative z-20 -mt-[100vh]">
                <div className="h-screen flex items-center justify-center px-6 text-center snap-section pt-24 pb-20">
                    <h2 className="text-4xl md:text-6xl font-serif mb-4 drop-shadow-2xl">
                        <span className="block text-sm font-sans tracking-[0.4em] text-gold mb-4 uppercase text-center">Exclusividad</span>
                        Descubre las ventajas <br /> y beneficios <span className="text-gold italic">RP Estate</span>
                    </h2>
                </div>

                <div className="container mx-auto px-6 max-w-6xl">
                    {ADVANTAGES.map((item, idx) => (
                        <div
                            key={idx}
                            ref={(el) => (contentRefs.current[idx] = el)}
                            className="min-h-screen flex items-center justify-start md:justify-end py-24 snap-section"
                        >
                            <div
                                className={`max-w-xl p-10 md:p-14 rounded-lg backdrop-blur-md border border-white/10 transition-all duration-1000 transform ${idx === activeIndex
                                    ? 'bg-dark/60 translate-x-0 opacity-100'
                                    : 'bg-transparent translate-x-10 opacity-20'
                                    }`}
                            >
                                <h3 className="text-3xl lg:text-4xl font-serif text-white mb-6 flex items-center gap-6">
                                    <span className="text-gold text-sm font-mono border-b border-gold pb-1">0{idx + 1}</span>
                                    {item.title}
                                </h3>
                                <p className="text-lg text-white/90 font-light leading-relaxed">
                                    {item.description}
                                </p>
                                <div className={`h-[1px] bg-gold mt-10 transition-all duration-[1500ms] ${idx === activeIndex ? 'w-full' : 'w-0'}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;
