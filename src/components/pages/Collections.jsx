import React, { useState, useRef } from "react";
import QuickViewModal from "../ui/QuickViewModal";
import SEO from "../ui/SEO";
import { useGlobalState } from "../context/GlobalStateContext";
import { products as allProducts } from "../../data/products";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Collections = () => {
  const { searchQuery, setSearchQuery, filters, updateFilters, clearFilters } =
    useGlobalState();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showQuickView, setShowQuickView] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(".collections-header",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(".search-bar",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      );

    gsap.fromTo(".filter-panel",
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.5 }
    );

    // Animate product cards whenever filteredProducts changes (this might need a key or useEffect dependency on the list in a real app, 
    // but GSAP might just run once on mount here. For dynamic lists, simpler CSS transitions or key-based GSAP execution is often better. 
    // Here we'll animate the initial load of the grid container).

    gsap.fromTo(".product-card",
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.1,
        scrollTrigger: {
          trigger: ".product-grid",
          start: "top 80%",
        }
      }
    );

  }, { scope: containerRef });

  // Filter logic
  const filteredProducts = allProducts.filter((product) => {
    // Search filter
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    ) {
      return false;
    }

    // Material filter
    if (
      filters.collections.material.length > 0 &&
      !filters.collections.material.includes(product.material)
    ) {
      return false;
    }

    // Size filter
    if (
      filters.collections.size.length > 0 &&
      !filters.collections.size.includes(product.size)
    ) {
      return false;
    }

    // Color filter
    if (
      filters.collections.color.length > 0 &&
      !filters.collections.color.includes(product.color)
    ) {
      return false;
    }

    // Price filter
    /* if (
      product.price < filters.collections.price.min ||
      product.price > filters.collections.price.max
    ) {
      return false;
    } */

    // Style filter
    if (
      filters.collections.style.length > 0 &&
      !filters.collections.style.includes(product.style)
    ) {
      return false;
    }

    return true;
  });

  const handleFilterChange = (filterType, value, checked) => {
    const currentFilters = filters.collections[filterType];
    let newFilters;

    if (checked) {
      newFilters = [...currentFilters, value];
    } else {
      newFilters = currentFilters.filter((item) => item !== value);
    }

    updateFilters("collections", filterType, newFilters);
  };

  const handlePriceChange = (type, value) => {
    updateFilters("collections", "price", {
      ...filters.collections.price,
      [type]: Number(value),
    });
  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setShowQuickView(true);
  };

  const handleViewDetails = (productId) => {
    navigate(`/collections/${productId}`);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors pt-20">
      <SEO
        title="Collections"
        description="Explore Azal International's diverse collection of premium carpets. From Royal Persian Heritage to Modern Geometric and Vintage Oriental rugs."
        keywords="carpet collections, persian rugs, modern carpets, luxury rugs, online carpet shop"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 collections-header">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Our Collections
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Discover our premium carpet collections crafted with excellence
          </p>
        </div>

        <div className="mb-6 search-bar">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name, material, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-12 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-3 lg:gap-8">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden w-full py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-center gap-2 text-slate-700 dark:text-slate-300 font-semibold mb-4"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>

          {/* Filter Panel */}
          <div className={`lg:w-64 shrink-0 transition-all duration-300 filter-panel ${showFilters ? "block" : "hidden lg:block"
            }`}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Filters</h2>
                <button
                  onClick={() => clearFilters("collections")}
                  className="text-sm text-amber-600 hover:text-amber-700 font-medium"
                >
                  Clear All
                </button>
              </div>

              {/* Material Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Material</h3>
                <div className="space-y-2">
                  {["Wool", "Silk", "Cotton", "Synthetic"].map((material) => (
                    <label key={material} className="flex items-center cursor-pointer group">
                      <div className="relative flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.collections.material.includes(material)}
                          onChange={(e) => handleFilterChange("material", material, e.target.checked)}
                          className="peer h-4 w-4 text-amber-600 border-slate-300 dark:border-slate-600 rounded focus:ring-amber-500"
                        />
                      </div>
                      <span className="ml-2 text-slate-700 dark:text-slate-400 group-hover:text-amber-600 transition-colors">{material}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Size</h3>
                <div className="space-y-2">
                  {["5x7", "6x9", "8x10", "9x12", "10x14"].map((size) => (
                    <label key={size} className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={filters.collections.size.includes(size)}
                        onChange={(e) => handleFilterChange("size", size, e.target.checked)}
                        className="h-4 w-4 text-amber-600 border-gray-300 dark:border-gray-600 rounded focus:ring-amber-500"
                      />
                      <span className="ml-2 text-gray-700 dark:text-gray-400 group-hover:text-amber-600 transition-colors">{size} ft</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Color</h3>
                <div className="space-y-2">
                  {["Red", "Blue", "Gray", "Beige", "Navy", "Multi"].map((color) => (
                    <label key={color} className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={filters.collections.color.includes(color)}
                        onChange={(e) => handleFilterChange("color", color, e.target.checked)}
                        className="h-4 w-4 text-amber-600 border-gray-300 dark:border-gray-600 rounded focus:ring-amber-500"
                      />
                      <span className="ml-2 text-gray-700 dark:text-gray-400 group-hover:text-amber-600 transition-colors">{color}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              {/* <div className="mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Price Range</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600 dark:text-gray-400 block mb-1">
                      Min: ₹{filters.collections.price.min.toLocaleString()}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="50000"
                      step="1000"
                      value={filters.collections.price.min}
                      onChange={(e) => handlePriceChange("min", e.target.value)}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-600"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 dark:text-gray-400 block mb-1">
                      Max: ₹{filters.collections.price.max.toLocaleString()}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="50000"
                      step="1000"
                      value={filters.collections.price.max}
                      onChange={(e) => handlePriceChange("max", e.target.value)}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-600"
                    />
                  </div>
                </div>
              </div> */}

              {/* Style Filter */}
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Style</h3>
                <div className="space-y-2">
                  {["Traditional", "Modern", "Vintage", "Minimalist", "Abstract"].map((style) => (
                    <label key={style} className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={filters.collections.style.includes(style)}
                        onChange={(e) => handleFilterChange("style", style, e.target.checked)}
                        className="h-4 w-4 text-amber-600 border-gray-300 dark:border-gray-600 rounded focus:ring-amber-500"
                      />
                      <span className="ml-2 text-gray-700 dark:text-gray-400 group-hover:text-amber-600 transition-colors">{style}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1 product-grid">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs md:text-base text-gray-600 dark:text-gray-400">
                Showing {filteredProducts.length} results
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="mt-4 text-lg text-gray-600">No products found</p>
                <p className="text-gray-500">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="product-card bg-white dark:bg-slate-900 rounded-lg shadow-md border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full group"
                  >
                    <div className="relative h-40 md:h-64 overflow-hidden shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex gap-4">
                        <button
                          onClick={() => handleQuickView(product)}
                          className="px-6 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                          Quick View
                        </button>
                        <button
                          onClick={() => handleViewDetails(product.id)}
                          className="px-6 py-2 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                        >
                          View Details
                        </button>
                      </div>

                      {/* Mobile Buttons */}
                      <div className="md:hidden absolute bottom-2 right-2 flex gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleQuickView(product);
                          }}
                          className="p-2 bg-white dark:bg-gray-700 dark:text-white rounded-full shadow-lg"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleViewDetails(product.id);
                          }}
                          className="p-2 bg-amber-600 text-white rounded-full shadow-lg"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="p-3 md:p-6 flex flex-col flex-1">
                      <h3 className="text-sm md:text-lg font-bold text-gray-900 dark:text-gray-100 mb-1 md:mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-2 md:mb-4">
                        {product.material} • {product.size} ft
                      </p>
                      <div className="mt-auto flex items-center justify-end">
                        {/* <span className="text-sm md:text-2xl font-bold text-amber-600 dark:text-amber-400">
                          ₹{product.price.toLocaleString()}
                        </span> */}
                        <button
                          onClick={() => handleViewDetails(product.id)}
                          className="hidden md:block px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-sm"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {showQuickView && selectedProduct && (
        <QuickViewModal
          product={selectedProduct}
          onClose={() => setShowQuickView(false)}
        />
      )}
    </div>
  );
};

export default Collections;

