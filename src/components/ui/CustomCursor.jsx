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
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
            });
        };

        const handleHover = () => setIsHovered(true);
        const handleUnhover = () => setIsHovered(false);

        window.addEventListener('mousemove', moveCursor);

        // Add event listeners for hoverable elements
        const hoverables = document.querySelectorAll('a, button, .cursor-hover');
        hoverables.forEach((el) => {
            el.addEventListener('mouseenter', handleHover);
            el.addEventListener('mouseleave', handleUnhover);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            hoverables.forEach((el) => {
                el.removeEventListener('mouseenter', handleHover);
                el.removeEventListener('mouseleave', handleUnhover);
            });
        };
    }, []);

    useEffect(() => {
        // Re-attach listeners when DOM changes (simplified approach)
        const handleHover = () => setIsHovered(true);
        const handleUnhover = () => setIsHovered(false);

        // Mutation observer or similar could be better, but for now re-selecting on route change logic might be needed 
        // For this simple implementation, we'll rely on the initial load and maybe add a global listener for delegation if needed later.
        // Better approach: Event delegation

        const onMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button') || e.target.classList.contains('cursor-hover')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        document.addEventListener('mouseover', onMouseOver);
        return () => document.removeEventListener('mouseover', onMouseOver);

    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className={`fixed top-0 left-0 w-3 h-3 bg-amber-500 rounded-full pointer-events-none z-[9999] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${isHovered ? 'scale-[0.5]' : 'scale-100'
                    }`}
            />
            <div
                ref={followerRef}
                className={`fixed top-0 left-0 w-10 h-10 border border-amber-500 rounded-full pointer-events-none z-[9998] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isHovered ? 'w-16 h-16 bg-white/10 border-transparent backdrop-blur-sm' : 'scale-100'
                    }`}
            />
        </>
    );
};

export default CustomCursor;
