import React from "react";
import { Link } from "react-router-dom";

const Sectors = () => {
  const sectors = [
    {
      name: "Hospitality",
      slug: "hospitality",
      icon: "🏨",
      description:
        "Premium carpet solutions for hotels, resorts, and hospitality venues",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
      features: ["Durability", "Luxury Design", "Easy Maintenance"],
    },
    {
      name: "Residential",
      slug: "residential",
      icon: "🏠",
      description: "Elegant flooring for homes and residential properties",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600",
      features: ["Comfort", "Style Variety", "Family-Friendly"],
    },
    {
      name: "Commercial",
      slug: "commercial",
      icon: "🏢",
      description:
        "Professional carpet solutions for offices and commercial spaces",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600",
      features: [
        "High Traffic Resistance",
        "Professional Look",
        "Sound Absorption",
      ],
    },
    {
      name: "Exhibition",
      slug: "exhibition",
      icon: "🎪",
      description: "Specialized carpeting for exhibitions and events",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600",
      features: ["Quick Installation", "Portable", "Custom Branding"],
    },
    {
      name: "Retail",
      slug: "retail",
      icon: "🛍️",
      description: "Attractive and durable flooring for retail environments",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600",
      features: [
        "Brand Enhancement",
        "High Footfall Durability",
        "Visual Appeal",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6 animate-reveal">
            Industries We Serve
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Specialized carpet solutions tailored for diverse sectors and
            industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector) => (
            <Link
              key={sector.slug}
              to={`/sectors/${sector.slug}`}
              className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-4xl">{sector.icon}</span>
                    <h3 className="text-2xl font-bold text-white">
                      {sector.name}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">{sector.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-slate-100 text-sm">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {sector.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                      >
                        <svg
                          className="w-4 h-4 text-gold-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex items-center text-gold-600 dark:text-gold-400 font-semibold group-hover:text-gold-700 dark:group-hover:text-gold-300">
                  Learn More
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sectors;
