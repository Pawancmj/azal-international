import React, { useState } from "react";
import QuickViewModal from "../ui/QuickViewModal";
import SEO from "../ui/SEO";
import ScrollReveal from "../ui/ScrollReveal";
import { useGlobalState } from "../context/GlobalStateContext";

const Collections = () => {
  const { searchQuery, setSearchQuery, filters, updateFilters, clearFilters } =
    useGlobalState();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showQuickView, setShowQuickView] = useState(false);

  // Sample products data - replace with API call
  const allProducts = [
    {
      id: 1,
      name: "Royal Persian Heritage",
      category: "Persian",
      material: "Wool",
      size: "8x10",
      color: "Red",
      price: 2500,
      style: "Traditional",
      image:
        "https://images.unsplash.com/photo-1600166898405-da9535204843?w=400",
      tags: ["luxury", "handmade", "persian"],
    },
    {
      id: 2,
      name: "Modern Geometric",
      category: "Contemporary",
      material: "Synthetic",
      size: "6x9",
      color: "Gray",
      price: 1200,
      style: "Modern",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400",
      tags: ["modern", "geometric", "gray"],
    },
    {
      id: 3,
      name: "Vintage Oriental",
      category: "Oriental",
      material: "Silk",
      size: "9x12",
      color: "Blue",
      price: 3800,
      style: "Vintage",
      image:
        "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=400",
      tags: ["vintage", "silk", "oriental"],
    },
    {
      id: 4,
      name: "Minimalist Beige",
      category: "Contemporary",
      material: "Cotton",
      size: "5x7",
      color: "Beige",
      price: 800,
      style: "Minimalist",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400",
      tags: ["minimalist", "neutral", "cotton"],
    },
    {
      id: 5,
      name: "Luxury Medallion",
      category: "Persian",
      material: "Wool",
      size: "10x14",
      color: "Navy",
      price: 4500,
      style: "Traditional",
      image:
        "https://images.unsplash.com/photo-1600166898405-da9535204843?w=400",
      tags: ["luxury", "traditional", "wool"],
    },
    {
      id: 6,
      name: "Abstract Art",
      category: "Contemporary",
      material: "Synthetic",
      size: "8x10",
      color: "Multi",
      price: 1500,
      style: "Abstract",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400",
      tags: ["abstract", "colorful", "modern"],
    },
  ];

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
    if (
      product.price < filters.collections.price.min ||
      product.price > filters.collections.price.max
    ) {
      return false;
    }

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

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors pt-20">
      <SEO
        title="Collections"
        description="Explore Azal International's diverse collection of premium carpets. From Royal Persian Heritage to Modern Geometric and Vintage Oriental rugs."
        keywords="carpet collections, persian rugs, modern carpets, luxury rugs, online carpet shop"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ScrollReveal>
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Collections
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Discover our premium carpet collections crafted with excellence
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="scroll-reveal-up" threshold={0.01}>
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name, material, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-12 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
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
        </ScrollReveal>

        <div className="flex flex-row gap-3 lg:gap-8">
          {/* Filter Panel */}
          <div className="w-32 md:w-48 lg:w-64 shrink-0 transition-all duration-300">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 md:p-6 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
                <h2 className="text-sm md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 md:mb-0">Filters</h2>
                <button
                  onClick={() => clearFilters("collections")}
                  className="text-xs md:text-sm text-gold-600 hover:text-gold-700 text-left md:text-right"
                >
                  Clear All
                </button>
              </div>

              {/* Material Filter */}
              <div className="mb-4 md:mb-6">
                <h3 className="text-xs md:text-base font-semibold text-gray-900 dark:text-gray-100 mb-2 md:mb-3">Material</h3>
                <div className="space-y-1 md:space-y-2">
                  {["Wool", "Silk", "Cotton", "Synthetic"].map((material) => (
                    <label key={material} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.collections.material.includes(
                          material,
                        )}
                        onChange={(e) =>
                          handleFilterChange(
                            "material",
                            material,
                            e.target.checked,
                          )
                        }
                        className="w-3 h-3 md:w-4 md:h-4 text-gold-600 border-slate-300 dark:border-slate-600 rounded focus:ring-gold-500"
                      />
                      <span className="ml-2 text-xs md:text-base text-slate-700 dark:text-slate-400">{material}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div className="mb-4 md:mb-6">
                <h3 className="text-xs md:text-base font-semibold text-gray-900 dark:text-gray-100 mb-2 md:mb-3">Size</h3>
                <div className="space-y-1 md:space-y-2">
                  {["5x7", "6x9", "8x10", "9x12", "10x14"].map((size) => (
                    <label key={size} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.collections.size.includes(size)}
                        onChange={(e) =>
                          handleFilterChange("size", size, e.target.checked)
                        }
                        className="w-3 h-3 md:w-4 md:h-4 text-gold-600 border-gray-300 dark:border-gray-600 rounded focus:ring-gold-500"
                      />
                      <span className="ml-2 text-xs md:text-base text-gray-700 dark:text-gray-400">{size} ft</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div className="mb-4 md:mb-6">
                <h3 className="text-xs md:text-base font-semibold text-gray-900 dark:text-gray-100 mb-2 md:mb-3">Color</h3>
                <div className="space-y-1 md:space-y-2">
                  {["Red", "Blue", "Gray", "Beige", "Navy", "Multi"].map(
                    (color) => (
                      <label key={color} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.collections.color.includes(color)}
                          onChange={(e) =>
                            handleFilterChange("color", color, e.target.checked)
                          }
                          className="w-3 h-3 md:w-4 md:h-4 text-gold-600 border-gray-300 dark:border-gray-600 rounded focus:ring-gold-500"
                        />
                        <span className="ml-2 text-xs md:text-base text-gray-700 dark:text-gray-400">{color}</span>
                      </label>
                    ),
                  )}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-4 md:mb-6">
                <h3 className="text-xs md:text-base font-semibold text-gray-900 dark:text-gray-100 mb-2 md:mb-3">
                  Price Range
                </h3>
                <div className="space-y-2 md:space-y-4">
                  <div>
                    <label className="text-xs text-gray-600 block">
                      Min: ${filters.collections.price.min}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="10000"
                      step="100"
                      value={filters.collections.price.min}
                      onChange={(e) => handlePriceChange("min", e.target.value)}
                      className="w-full h-1 md:h-2"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 block">
                      Max: ${filters.collections.price.max}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="10000"
                      step="100"
                      value={filters.collections.price.max}
                      onChange={(e) => handlePriceChange("max", e.target.value)}
                      className="w-full h-1 md:h-2"
                    />
                  </div>
                </div>
              </div>

              {/* Style Filter */}
              <div className="mb-4">
                <h3 className="text-xs md:text-base font-semibold text-gray-900 dark:text-gray-100 mb-2 md:mb-3">Style</h3>
                <div className="space-y-1 md:space-y-2">
                  {[
                    "Traditional",
                    "Modern",
                    "Vintage",
                    "Minimalist",
                    "Abstract",
                  ].map((style) => (
                    <label key={style} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.collections.style.includes(style)}
                        onChange={(e) =>
                          handleFilterChange("style", style, e.target.checked)
                        }
                        className="w-3 h-3 md:w-4 md:h-4 text-gold-600 border-gray-300 dark:border-gray-600 rounded focus:ring-gold-500"
                      />
                      <span className="ml-2 text-xs md:text-base text-gray-700 dark:text-gray-400">{style}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
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
                    className="bg-white dark:bg-slate-900 rounded-lg shadow-md border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full"
                  >
                    <div className="relative h-40 md:h-64 overflow-hidden group shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <button
                        onClick={() => handleQuickView(product)}
                        className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex"
                      >
                        <span className="px-6 py-3 bg-white dark:bg-gray-700 dark:text-white text-gray-900 rounded-lg font-semibold">
                          Quick View
                        </span>
                      </button>

                      {/* Mobile Quick View Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuickView(product);
                        }}
                        className="md:hidden absolute bottom-2 right-2 p-2 bg-white dark:bg-gray-700 dark:text-white rounded-full shadow-lg"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </div>
                    <div className="p-3 md:p-6 flex flex-col flex-1">
                      <h3 className="text-sm md:text-lg font-bold text-gray-900 dark:text-gray-100 mb-1 md:mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-2 md:mb-4">
                        {product.material} • {product.size}
                      </p>
                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-sm md:text-2xl font-bold text-gold-600 dark:text-gold-400">
                          ${product.price.toLocaleString()}
                        </span>
                        <button className="hidden md:block px-4 py-2 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-colors text-sm">
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
