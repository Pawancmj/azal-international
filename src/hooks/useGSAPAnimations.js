import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimations = () => {
    // Fade In Up Animation
    const fadeInUp = (elem, delay = 0) => {
        gsap.fromTo(
            elem,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    };

    // Stagger Children Animation
    const staggerChildren = (parent, childrenSelector, delay = 0.1) => {
        gsap.fromTo(
            parent.querySelectorAll(childrenSelector),
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: delay,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: parent,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    };

    // Slide In Left
    const slideInLeft = (elem, delay = 0) => {
        gsap.fromTo(
            elem,
            { opacity: 0, x: -100 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    };

    // Slide In Right
    const slideInRight = (elem, delay = 0) => {
        gsap.fromTo(
            elem,
            { opacity: 0, x: 100 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    };

    // Scale Up
    const scaleUp = (elem, delay = 0) => {
        gsap.fromTo(
            elem,
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                delay: delay,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    };

    return { fadeInUp, staggerChildren, slideInLeft, slideInRight, scaleUp };
};
