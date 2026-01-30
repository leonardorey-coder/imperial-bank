'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
    children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
    const pathname = usePathname();
    const isFirstRender = useRef(true);

    // Disable browser's automatic scroll restoration
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    // Force scroll to absolute top
    const forceScrollToTop = () => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // Also try scrolling any scroll containers
        const scrollContainers = document.querySelectorAll('[data-lenis-prevent]');
        scrollContainers.forEach(container => {
            if (container instanceof HTMLElement) {
                container.scrollTop = 0;
            }
        });
    };

    // Scroll to top immediately on page change (before paint)
    useLayoutEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        forceScrollToTop();
    }, [pathname]);

    // Also scroll to top after render with multiple delays to catch all cases
    useEffect(() => {
        if (isFirstRender.current) return;

        forceScrollToTop();

        // Multiple delayed scroll attempts to ensure it works
        const timers = [
            setTimeout(forceScrollToTop, 0),
            setTimeout(forceScrollToTop, 50),
            setTimeout(forceScrollToTop, 100),
            setTimeout(forceScrollToTop, 200),
            setTimeout(forceScrollToTop, 300),
        ];

        return () => timers.forEach(timer => clearTimeout(timer));
    }, [pathname]);

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.25,
                    ease: 'easeInOut'
                }}
                onAnimationStart={() => {
                    forceScrollToTop();
                }}
                onAnimationComplete={() => {
                    forceScrollToTop();
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
