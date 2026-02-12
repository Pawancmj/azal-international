import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, className = "", animation = "scroll-reveal", threshold = 0.1 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    // Reset when scrolling away (as requested: "jitna scroll kru waise waise scroll ho")
                    setIsVisible(false);
                }
            });
        }, { threshold });

        const { current } = domRef;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, [threshold]);

    return (
        <div
            ref={domRef}
            className={`${animation} ${isVisible ? 'active' : ''} ${className}`}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
