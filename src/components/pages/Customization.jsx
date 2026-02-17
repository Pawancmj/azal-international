import React from "react";
import { Link } from "react-router-dom";
import SEO from "../ui/SEO";
import ScrollReveal from "../ui/ScrollReveal";

import custImg1 from "../../assets/customization-images/1.png";
import custImg2 from "../../assets/customization-images/2.png";
import custImg3 from "../../assets/customization-images/3.png";
import custImg4 from "../../assets/customization-images/4.png";

const Customization = () => {
    const rugTechniques = [
        "HAND KNOTTED",
        "HAND TUFTED",
        "HAND LOOM CARPETS",
        "BROADLOOM CARPETS",
        "HAND WOVEN FLATWEAVES",
        "LEATHER CARPETS"
    ];

    const whyChooseUs = [
        {
            id: 1,
            title: "Core Manufacturer",
            desc: "We have our in-house production facility for all rug types from Hand Knotted to Leather Carpets."
        },
        {
            id: 2,
            title: "Quality Craftsmanship",
            desc: "Our rugs and carpets are meticulously crafted using premium materials, ensuring durability and longevity."
        },
        {
            id: 3,
            title: "Innovative Designs",
            desc: "We offer a wide range of styles and patterns to suit any aesthetic, making it easy to find the perfect fit."
        },
        {
            id: 4,
            title: "Sustainability",
            desc: "We prioritize eco-friendly practices, using sustainable materials and processes to minimize impact."
        },
        {
            id: 5,
            title: "Customer-Centric",
            desc: "We value our customers and strive to provide exceptional service from selection to installation."
        },
        {
            id: 6,
            title: "Expertise & Experience",
            desc: "With years of industry experience, our team is dedicated to delivering the highest standards."
        },
        {
            id: 7,
            title: "Competitive Pricing",
            desc: "We offer a great balance of quality and affordability, elevating your space without breaking the bank."
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors pt-20">
            <SEO
                title="Bespoke Customization"
                description="Elevate your space with Azal International's bespoke custom rug service. From hand-tufted to leather carpets, we bring your vision to reality."
                keywords="custom made rugs, handtufted carpets, leather rugs, jute rugs, bespoke interior design"
            />

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6 font-playfair">
                            CUSTOM MADE RUGS
                        </h1>
                        <div className="max-w-4xl mx-auto">
                            <p className="text-xl text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                                At <span className="text-gold-600 font-bold">AZAL INTERNATIONAL</span>, where your vision becomes a reality with our bespoke custom rug service. Elevate your space to new heights of luxury and sophistication with a rug that is as unique as you are.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 italic">
                                "Step into a world of endless possibilities and let our expert craftsmen weave your dreams into exquisite reality."
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Imagination Section */}
                <ScrollReveal animation="scroll-reveal-up">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                        <div className="bg-slate-100 dark:bg-slate-900 rounded-2xl h-96 flex items-center justify-center overflow-hidden shadow-xl">
                            <img src={custImg1} alt="Imagination to Reality" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 font-playfair uppercase tracking-wider">
                                Imagination to Reality
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                Whether you prefer a traditional or contemporary design, our skilled artisans will craft a rug with care and precision. Our custom rugs are made using the finest materials available. From plush wool to luxurious silk, we source only the best to guarantee durability and lasting beauty.
                            </p>
                            <div className="bg-gold-50 dark:bg-gold-900/10 p-6 rounded-xl border-l-4 border-gold-500">
                                <h3 className="font-bold text-gold-700 dark:text-gold-400 mb-2">Techniques We Offer:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {rugTechniques.map((tech, i) => (
                                        <li key={i} className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                                            <span className="w-2 h-2 bg-gold-500 rounded-full mr-2"></span>
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
                                * Your custom carpet can be produced in 4 to 12 weeks, depending on quality, size, and quantity.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Handtufted Section */}
                <ScrollReveal>
                    <div className="mb-24">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 font-playfair">
                                CUSTOM HANDTUFTED RUGS & CARPETS
                            </h2>
                            <p className="text-gold-600 font-semibold tracking-widest uppercase text-sm">Imagination to Reality</p>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-12">
                            <div className="lg:w-1/2 space-y-6">
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    At <span className="font-bold">AZAL INTERNATIONAL</span>, we specialize in crafting luxurious, custom hand-tufted carpets that transform any space into an elegant masterpiece.
                                </p>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 border-b border-gold-500/30 pb-2">Our Expertise</h3>
                                    <div className="grid gap-4">
                                        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                                            <h4 className="font-bold text-gold-600 mb-1">Hand-Tufting Process</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Meticulously tufted by skilled artisans, ensuring every piece is a work of art.</p>
                                        </div>
                                        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                                            <h4 className="font-bold text-gold-600 mb-1">Materials</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Premium wool, silk, and blends for durability and an opulent look.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="bg-slate-100 dark:bg-slate-900 rounded-2xl h-full min-h-[300px] flex items-center justify-center overflow-hidden shadow-xl">
                                    <img src={custImg2} alt="Hand-Tufted Craftsmanship" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Leather Section */}
                <ScrollReveal animation="scroll-reveal-left">
                    <section className="py-16 border-t border-slate-100 dark:border-slate-800">
                        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
                            <div className="lg:w-1/2">
                                <div className="bg-slate-100 dark:bg-slate-900 rounded-2xl w-full h-96 flex items-center justify-center overflow-hidden shadow-xl">
                                    <img src={custImg3} alt="Custom Leather Carpet" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 font-playfair uppercase">
                                    CUSTOM LEATHER CARPETS
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-6">
                                    A sophisticated and unique alternative to traditional carpeting. We use high-quality leather sourced from trusted suppliers, creating intricate patterns and textures tailored to your needs.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Premium cowhide and suede materials",
                                        "Naturally durable and resilient for high-traffic areas",
                                        "Ethically obtained and sustainably processed",
                                        "Hand-cut, stitched, and assembled by skilled craftsmen"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center text-slate-700 dark:text-slate-300">
                                            <svg className="w-5 h-5 text-gold-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Jute Section */}
                <ScrollReveal animation="scroll-reveal-right">
                    <section className="py-16 mb-20 bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 lg:p-12">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 font-playfair">JUTE RUGS</h2>
                            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">Sustainable & Stylish</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    Made from the natural Corchorus plant, jute is a strong, biodegradable, and renewable material. These rugs offer a natural, rustic, and organic appearance that adds warmth and texture to any home décor.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                                        <span className="block text-2xl mb-1">🌿</span>
                                        <span className="text-xs font-bold uppercase text-slate-500">Eco-Friendly</span>
                                    </div>
                                    <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                                        <span className="block text-2xl mb-1">💪</span>
                                        <span className="text-xs font-bold uppercase text-slate-500">Durable</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-100 dark:bg-slate-900 rounded-2xl h-80 flex items-center justify-center overflow-hidden shadow-xl">
                                <img src={custImg4} alt="Organic Jute Texture" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Why Choose Us */}
                <ScrollReveal>
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 font-playfair">
                                WHY CHOOSE US?
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400">Commitment to excellence in every stitch</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {whyChooseUs.map((item, idx) => (
                                <ScrollReveal key={item.id} animation="scroll-reveal" className={`transition-delay-${idx * 100}`}>
                                    <div className="h-full bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-gold-500/50 transition-all group">
                                        <div className="text-gold-600 font-bold text-2xl mb-3">0{item.id}</div>
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-gold-600 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed italic">
                                            {item.desc}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Final CTA */}
                <ScrollReveal>
                    <div className="bg-slate-900 text-white rounded-3xl p-12 text-center relative overflow-hidden border border-gold-500/20">
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold mb-6 font-playfair">Ready to Start Your Custom Project?</h2>
                            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                                From design consultation to final delivery, <span className="text-gold-500 font-bold">AZAL INTERNATIONAL</span> is your partner in creating timeless elegance.
                            </p>
                            <Link to="/contact" className="inline-block px-10 py-5 bg-gold-600 text-white rounded-lg font-bold hover:bg-gold-700 transition-all transform hover:scale-105 shadow-xl shadow-gold-500/20 uppercase tracking-widest">
                                Get Started Now
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
};

export default Customization;

