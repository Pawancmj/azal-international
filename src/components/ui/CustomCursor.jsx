import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        const moveCursor = (e) => {
            // Instant movement for the dot
            gsap.set(cursor, {
                x: e.clientX,
                y: e.clientY,
            });
            // Very fast interpolation for the ring to feel responsive but smooth
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.15, // Reduced from 0.3 to 0.15 for much faster follow
                ease: "power2.out"
            });
        };

        const handleHover = () => setIsHovered(true);
        const handleUnhover = () => setIsHovered(false);

        window.addEventListener('mousemove', moveCursor);

        // Add event listeners for hoverable elements
        const hoverables = document.querySelectorAll('a, button, .cursor-hover, input, select, textarea');
        hoverables.forEach((el) => {
            el.addEventListener('mouseenter', handleHover);
            el.addEventListener('mouseleave', handleUnhover);
        });

        // Use a mutation observer to attach listeners to dynamic elements
        const observer = new MutationObserver((mutations) => {
            const hoverables = document.querySelectorAll('a, button, .cursor-hover, input, select, textarea');
            hoverables.forEach((el) => {
                // Remove before adding to avoid duplicates (though nice to have a cleaner way)
                el.removeEventListener('mouseenter', handleHover);
                el.removeEventListener('mouseleave', handleUnhover);

                el.addEventListener('mouseenter', handleHover);
                el.addEventListener('mouseleave', handleUnhover);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            observer.disconnect();
            hoverables.forEach((el) => {
                el.removeEventListener('mouseenter', handleHover);
                el.removeEventListener('mouseleave', handleUnhover);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className={`fixed top-0 left-0 w-3 h-3 bg-amber-500 rounded-full pointer-events-none z-[9999] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ${isHovered ? 'scale-[0.5]' : 'scale-100'
                    }`}
            />
            <div
                ref={followerRef}
                className={`fixed top-0 left-0 w-8 h-8 border border-amber-500 rounded-full pointer-events-none z-[9998] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${isHovered ? 'w-12 h-12 bg-white/10 border-transparent backdrop-blur-sm' : 'scale-100'
                    }`}
            />
        </>
    );
};

export default CustomCursor;
