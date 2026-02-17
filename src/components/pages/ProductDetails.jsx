import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../data/products";
import QuickViewModal from "../ui/QuickViewModal";
import SEO from "../ui/SEO";
import ScrollReveal from "../ui/ScrollReveal";

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find((p) => p.id === parseInt(id));
    const [selectedImage, setSelectedImage] = useState(null);
    const [showQuickView, setShowQuickView] = useState(false);
    const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState(null);

    // Initialize selectedImage with the main product image when product loads
    useEffect(() => {
        if (product) {
            setSelectedImage(product.image);
        }
    }, [product]);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                        Product Not Found
                    </h2>
                    <button
                        onClick={() => navigate("/collections")}
                        className="px-6 py-2 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-colors"
                    >
                        Back to Collections
                    </button>
                </div>
            </div>
        );
    }

    const handleWhatsApp = () => {
        const message = `Hello, I am interested in this product: ${product.name}. Please provide more details.`;
        const url = `https://wa.me/7705879297?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    const handleQuickView = (product) => {
        setSelectedQuickViewProduct(product);
        setShowQuickView(true);
    };

    // Get related products (same style or category, excluding current)
    const relatedProducts = products
        .filter(
            (p) =>
                (p.category === product.category || p.style === product.style) &&
                p.id !== product.id
        )
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors pt-24 pb-12">
            <SEO
                title={`${product.name} - Azal International`}
                description={product.description}
                keywords={`${product.category}, ${product.style}, ${product.material}, carpet`}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                    onClick={() => navigate("/collections")}
                    className="mb-8 flex items-center text-slate-600 dark:text-slate-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                >
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    Back to Collections
                </button>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Product Image Gallery */}
                    <ScrollReveal>
                        <div className="flex flex-col gap-4">
                            {/* Main Zoomable Image */}
                            <div className="group relative rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-slate-900 aspect-[4/5] cursor-zoom-in">
                                <img
                                    src={selectedImage || product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110 origin-center"
                                />
                            </div>

                            {/* Thumbnails */}
                            <div className="grid grid-cols-4 gap-4">
                                {product.images && product.images.map((img, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setSelectedImage(img)}
                                        className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 ${selectedImage === img ? 'border-gold-600 opacity-100' : 'border-transparent opacity-70 hover:opacity-100'} aspect-square`}
                                    >
                                        <img
                                            src={img}
                                            alt={`${product.name} view ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Product Info */}
                    <ScrollReveal animation="scroll-reveal-up" delay={0.2}>
                        <div>
                            <div className="mb-2">
                                <span className="px-3 py-1 bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-300 rounded-full text-sm font-semibold">
                                    {product.category}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                                {product.name}
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 italic leading-relaxed">
                                {product.description}
                            </p>

                            <div className="flex items-center mb-8">
                                <span className="text-4xl font-bold text-gold-600 dark:text-gold-400">
                                    ₹{product.price.toLocaleString()}
                                </span>
                            </div>

                            {/* Specifications */}
                            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 mb-8">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                                    Specifications
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {Object.entries(product.specifications).map(([key, value]) => (
                                        <div key={key}>
                                            <span className="block text-sm text-slate-500 dark:text-slate-500 capitalize">
                                                {key}
                                            </span>
                                            <span className="block text-base font-semibold text-slate-800 dark:text-slate-200">
                                                {value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Features */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Features</h3>
                                <ul className="grid sm:grid-cols-2 gap-3">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-slate-700 dark:text-slate-300">
                                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>


                            {/* Actions */}
                            <div className="flex flex-col gap-4">
                                <button
                                    onClick={handleWhatsApp}
                                    className="w-full py-4 bg-green-500 text-white rounded-xl font-bold text-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    WhatsApp Inquiry
                                </button>
                            </div>

                            <div className="mt-8">
                                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Tags:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {product.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-sm"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <ScrollReveal animation="scroll-reveal-up" delay={0.3}>
                        <div className="border-t border-slate-200 dark:border-slate-800 pt-16">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">
                                Related Products
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedProducts.map((related) => (
                                    <div
                                        key={related.id}
                                        onClick={() => navigate(`/collections/${related.id}`)}
                                        className="group relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-800 cursor-pointer"
                                    >
                                        <div className="aspect-[4/3] overflow-hidden relative">
                                            <img
                                                src={related.image}
                                                alt={related.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-3">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleQuickView(related);
                                                    }}
                                                    className="px-6 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                                                >
                                                    Quick View
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate(`/collections/${related.id}`);
                                                    }}
                                                    className="px-6 py-2 bg-gold-600 text-white rounded-lg font-semibold hover:bg-gold-700 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                                                >
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors cursor-pointer">
                                                {related.name}
                                            </h3>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                                                {related.material} • {related.size} ft
                                            </p>
                                            <span className="font-bold text-gold-600 dark:text-gold-400 block">
                                                ₹{related.price.toLocaleString()}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                )}
            </div>

            {/* Quick View Modal */}
            {showQuickView && selectedQuickViewProduct && (
                <QuickViewModal
                    product={selectedQuickViewProduct}
                    onClose={() => setShowQuickView(false)}
                />
            )}
        </div>
    );
};

export default ProductDetails;
