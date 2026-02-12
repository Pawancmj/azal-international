import React from "react";
import { Link } from "react-router-dom";

const Customization = () => {
    const customizationOptions = [
        {
            title: "Bespoke Sizes",
            description: "From massive wall-to-wall carpets for grand halls to small accent rugs for intimate spaces.",
            icon: "📏",
            image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=800"
        },
        {
            title: "Material Selection",
            description: "Choose from pure silk, New Zealand wool, bamboo silk, or sustainable recycled fibers.",
            icon: "🧶",
            image: "https://images.unsplash.com/photo-1544441893-675973e3e923?w=800"
        },
        {
            title: "Pattern Diversity",
            description: "Our in-house design team can translate your artistic vision or brand identity into a woven masterpiece.",
            icon: "🎨",
            image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800"
        },
        {
            title: "Technique Options",
            description: "Select between hand-knotted for ultimate luxury, hand-tufted for texture, or hand-loom for modern elegance.",
            icon: "🛠️",
            image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800"
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors pt-20 animate-blur-in">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6 animate-reveal">
                        Bespoke Customization
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto animate-fade-in-up">
                        At AZAL International, we believe every space has its own soul. Our customization service allows you to create carpets that perfectly reflect your style and functional needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    {customizationOptions.map((option, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-6 bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl hover:shadow-xl transition-all transform hover:scale-[1.02] border border-slate-100 dark:border-slate-800 hover:border-gold-500/30 group animate-fade-in-up">
                            <div className="md:w-1/3 h-48 rounded-xl overflow-hidden shadow-md">
                                <img src={option.image} alt={option.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="md:w-2/3">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-3xl group-hover:scale-110 transition-transform">{option.icon}</span>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-gold-600">{option.title}</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {option.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-slate-900 text-white rounded-3xl p-12 text-center relative overflow-hidden border border-gold-500/20">
                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold mb-6 animate-reveal">Ready to Create Your Masterpiece?</h2>
                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto animate-fade-in-up">
                            Our consultants are ready to walk you through the entire design process, from initial sketches to material selection and final weaving.
                        </p>
                        <Link to="/contact" className="inline-block px-8 py-4 bg-gold-600 text-white rounded-lg font-bold hover:bg-gold-700 transition-all transform hover:scale-105 shadow-lg shadow-gold-500/20">
                            Schedule a Design Consultation
                        </Link>
                    </div>
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-gold-600/10 rounded-full blur-3xl animate-float-delayed"></div>
                </div>
            </div>
        </div>
    );
};

export default Customization;
