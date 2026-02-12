import { Link } from "react-router-dom";
import SEO from "../ui/SEO";
import ScrollReveal from "../ui/ScrollReveal";

const Home = () => {
  // Sample data - replace with actual data from API
  const featuredCollections = [
    {
      id: 1,
      name: "Luxury Persian",
      image:
        "https://loopsbylj.com/cdn/shop/files/Velvet_moss.jpg?v=1728237587?w=500",
      description: "Handcrafted elegance",
    },
    {
      id: 2,
      name: "Modern Minimalist",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500",
      description: "Contemporary design",
    },
    {
      id: 3,
      name: "Vintage Heritage",
      image:
        "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=500",
      description: "Timeless classics",
    },
  ];

  const featuredProjects = [
    {
      id: 1,
      name: "Grand Hotel Dubai",
      sector: "Hospitality",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500",
      location: "Dubai, UAE",
    },
    {
      id: 2,
      name: "Corporate Plaza",
      sector: "Commercial",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500",
      location: "London, UK",
    },
    {
      id: 3,
      name: "Luxury Residence",
      sector: "Residential",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500",
      location: "New York, USA",
    },
  ];

  const sectors = [
    { name: "Hospitality", icon: "🏨", path: "/sectors/hospitality" },
    { name: "Residential", icon: "🏠", path: "/sectors/residential" },
    { name: "Commercial", icon: "🏢", path: "/sectors/commercial" },
    { name: "Exhibition", icon: "🎪", path: "/sectors/exhibition" },
    { name: "Retail", icon: "🛍️", path: "/sectors/retail" },
  ];

  const upcomingExhibitions = [
    { name: "Dubai Design Week", date: "March 2026", location: "Dubai" },
    { name: "London Design Fair", date: "April 2026", location: "London" },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Home"
        description="AZAL International - Premium carpets and flooring solutions for hospitality, residential, and commercial spaces worldwide. Explore our luxury collections today."
        keywords="luxury carpets, premium flooring, dubai carpets, global flooring solutions, Azal International"
      />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="http://diningandlivingroom.com/wp-content/uploads/2017/06/8-Dining-Room-Tables-Perfect-for-a-Luxury-Set4.jpg?w=1920"
            alt="Luxury carpet background"
            className="w-full h-full object-cover opacity-15"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="inline-block overflow-hidden">
              <span className="inline-block animate-reveal gold-text-gradient">
                Premium Carpets & Flooring Solutions
              </span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-slate-300 animate-fade-in-up animation-delay-1000">
            Transforming spaces with luxury, craftsmanship, and sustainability
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-2000">
            <Link
              to="/collections"
              className="px-8 py-4 bg-gold-600 hover:bg-gold-700 text-white rounded-lg text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              Explore Collections
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-gold-500/30 text-gold-500 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Floating particles effect (optional) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/10 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white/15 rounded-full animate-float-slow"></div>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 animate-reveal">
                  Crafting Excellence Since 1990
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 animate-fade-in-up">
                  AZAL International has been a leader in premium carpet
                  manufacturing, combining traditional craftsmanship with modern
                  innovation to deliver exceptional flooring solutions worldwide.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-8 animate-fade-in-up animation-delay-1000">
                  Our commitment to quality, sustainability, and customer
                  satisfaction has made us the preferred choice for hospitality,
                  residential, and commercial projects globally.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-all transform hover:translate-x-1 animate-fade-in-up animation-delay-2000"
                >
                  Learn More About Us
                  <svg
                    className="w-5 h-5 ml-2"
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
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1600166898405-da9535204843?w=300"
                  alt="Carpet detail"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300"
                  alt="Manufacturing"
                  className="rounded-lg shadow-lg mt-8"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal threshold={0.05}>
        <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Featured Collections
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Discover our curated selection of premium carpets
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredCollections.map((collection, idx) => (
                <ScrollReveal key={collection.id} animation="scroll-reveal-up" className={`transition-delay-${idx * 200}`}>
                  <div
                    className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={collection.image}
                        alt={collection.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <button className="w-full py-2 bg-white dark:bg-gray-800 dark:text-white text-gray-900 rounded-lg font-semibold">
                            Quick View
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        {collection.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">{collection.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/collections"
                className="inline-flex items-center px-8 py-3 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-all transform hover:scale-105"
              >
                View All Collections
                <svg
                  className="w-5 h-5 ml-2"
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
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Showcasing our finest installations worldwide
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredProjects.map((project, idx) => (
                <ScrollReveal key={project.id} animation="scroll-reveal" className={`transition-delay-${idx * 200}`}>
                  <div
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                  >
                    <div className="relative h-56">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 px-3 py-1 bg-gold-600 text-white text-sm rounded-full">
                        {project.sector}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        {project.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {project.location}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-3 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-all transform hover:scale-105"
              >
                View All Projects
                <svg
                  className="w-5 h-5 ml-2"
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
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal threshold={0.2}>
        <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 animate-reveal">Industries We Serve</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 animate-fade-in-up">
                Specialized solutions for diverse sectors
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {sectors.map((sector, idx) => (
                <ScrollReveal key={sector.name} animation="scroll-reveal-left" className={`transition-delay-${idx * 100}`}>
                  <Link
                    to={sector.path}
                    className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 text-center transition-all hover:scale-105 hover:border-gold-500/50 group"
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{sector.icon}</div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-gold-600">{sector.name}</h3>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/sectors"
                className="inline-flex items-center px-8 py-3 bg-slate-900 dark:bg-gold-600 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-gold-700 transition-all transform hover:scale-105"
              >
                Explore All Sectors
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Customization Preview Section */}
      <section className="py-20 bg-blue-50 dark:bg-blue-900/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Bespoke Customization
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                Tailor every detail of your carpet to match your unique vision. From artisanal materials to complex patterns, we bring your imagination to life.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { title: "Custom Sizes", desc: "Wall-to-wall or accent rugs" },
                  { title: "Material Choice", desc: "Silk, Wool, Bamboo, & more" },
                  { title: "Design Service", desc: "Professional design assistance" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <svg className="w-6 h-6 text-gold-600 dark:text-gold-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/customization" className="inline-flex items-center px-6 py-3 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-all transform hover:scale-105">
                Explore Customization
              </Link>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600166898405-da9535204843?w=800" alt="Customization" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Exhibition Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Upcoming Exhibitions
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-400">
              Meet us at these prestigious events around the world
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Domotex 2026",
                date: "January 10-13, 2026",
                location: "Hannover, Germany",
                venue: "Hannover Exhibition Center",
                status: "Upcoming",
                description:
                  "World's leading trade fair for carpets and floor coverings",
              },
              {
                name: "Heimtextil 2026",
                date: "January 14-17, 2026",
                location: "Frankfurt, Germany",
                venue: "Messe Frankfurt",
                status: "Upcoming",
                description:
                  "International trade fair for home and contract textiles",
              },
              {
                name: "Index Dubai 2026",
                date: "May 27-30, 2026",
                location: "Dubai, UAE",
                venue: "Dubai World Trade Centre",
                status: "Confirmed",
                description:
                  "Leading interior design exhibition in the Middle East",
              },
            ].map((exhibition, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-950 to-gold-900 text-white rounded-xl p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up border border-gold-500/20"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="ml-3 text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
                    {exhibition.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3">{exhibition.name}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-blue-100">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">{exhibition.date}</span>
                  </div>

                  <div className="flex items-center text-blue-100">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">{exhibition.location}</span>
                  </div>

                  <div className="flex items-center text-blue-100">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    <span className="text-sm">{exhibition.venue}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <p className="text-sm text-blue-100">
                    {exhibition.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-green-50 dark:bg-green-900/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Committed to Sustainability
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              We believe in creating beautiful spaces while protecting our
              planet. Our eco-friendly manufacturing processes and sustainable
              materials ensure a greener future for generations to come.
            </p>
            <Link
              to="/about#sustainability"
              className="inline-flex items-center px-8 py-3 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-colors"
            >
              Learn About Our Initiatives
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter/Catalog Request Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-all duration-500 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Request Our Catalog</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Get inspired by our complete collection of premium carpets and
            flooring solutions
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gold-600 hover:bg-gold-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Request Catalog
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
