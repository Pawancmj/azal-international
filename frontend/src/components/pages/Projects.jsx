import React, { useState } from "react";
import SEO from "../ui/SEO";
import ScrollReveal from "../ui/ScrollReveal";

const Projects = () => {
  const [filters, setFilters] = useState({
    sector: "all",
    year: "all",
    location: "all",
  });

  const projects = [
    {
      id: 1,
      name: "Grand Hyatt Dubai",
      sector: "Hospitality",
      year: "2024",
      location: "Dubai",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500",
      carpetUsed: "Luxury Persian Collection",
      description: "Premium carpet installation for 500+ rooms",
    },
    {
      id: 2,
      name: "Corporate Tower London",
      sector: "Commercial",
      year: "2023",
      location: "London",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500",
      carpetUsed: "Modern Minimalist",
      description: "Office flooring for 25-floor building",
    },
    {
      id: 3,
      name: "Luxury Villa NYC",
      sector: "Residential",
      year: "2024",
      location: "New York",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500",
      carpetUsed: "Vintage Heritage",
      description: "Custom carpets for luxury residence",
    },
  ];

  const filtered = projects.filter((p) => {
    if (filters.sector !== "all" && p.sector !== filters.sector) return false;
    if (filters.year !== "all" && p.year !== filters.year) return false;
    if (filters.location !== "all" && p.location !== filters.location)
      return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors pt-20">
      <SEO
        title="Our Projects"
        description="Explore Azal International's portfolio of premium carpet installations worldwide, from Grand Hyatt Dubai to luxury villas in New York."
        keywords="carpet projects, luxury hotel flooring, residential carpet installations, commercial flooring portfolio"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ScrollReveal>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">Our Projects</h1>
        </ScrollReveal>

        <div className="mb-8 flex flex-wrap gap-4">
          <select
            value={filters.sector}
            onChange={(e) => setFilters({ ...filters, sector: e.target.value })}
            className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
          >
            <option value="all">All Sectors</option>
            <option value="Hospitality">Hospitality</option>
            <option value="Commercial">Commercial</option>
            <option value="Residential">Residential</option>
            <option value="Exhibition">Exhibition</option>
            <option value="Retail">Retail</option>
          </select>

          <select
            value={filters.year}
            onChange={(e) => setFilters({ ...filters, year: e.target.value })}
            className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
          >
            <option value="all">All Years</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>

          <select
            value={filters.location}
            onChange={(e) =>
              setFilters({ ...filters, location: e.target.value })
            }
            className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
          >
            <option value="all">All Locations</option>
            <option value="Dubai">Dubai</option>
            <option value="London">London</option>
            <option value="New York">New York</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-400 rounded-full text-sm">
                    {project.sector}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{project.year}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{project.location}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  {project.carpetUsed}
                </p>
                <p className="text-slate-700 dark:text-slate-300 mb-4">{project.description}</p>
                <button className="w-full py-2 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
