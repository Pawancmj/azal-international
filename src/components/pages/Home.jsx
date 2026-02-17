import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import SEO from "../ui/SEO";
import QuickViewModal from "../ui/QuickViewModal";
import { products } from "../../data/products";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const mainRef = useRef(null);

  useGSAP(() => {
    // Hero Animation
    const tl = gsap.timeline();
    tl.fromTo(".hero-title span",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power4.out" }
    )
      .fromTo(".hero-subtitle",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(".hero-btn",
        { scale: 0.9, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" },
        "-=0.5"
      );

    // About Section
    gsap.fromTo(".about-content",
      { x: -50, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 1,
        scrollTrigger: { trigger: ".about-section", start: "top 80%" }
      }
    );
    gsap.fromTo(".about-image",
      { x: 50, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 1,
        scrollTrigger: { trigger: ".about-section", start: "top 80%" }
      }
    );

    // Collections Animation
    gsap.fromTo(".collection-card",
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.2,
        scrollTrigger: {
          trigger: ".collections-section",
          start: "top 75%",
        }
      }
    );

    // Projects Animation
    gsap.fromTo(".project-card",
      { scale: 0.9, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: 0.8, stagger: 0.2,
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top 75%",
        }
      }
    );

    // Sectors Animation
    gsap.fromTo(".sector-card",
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.1,
        scrollTrigger: {
          trigger: ".sectors-section",
          start: "top 80%",
        }
      }
    );

    // Exhibitions Animation
    gsap.fromTo(".exhibition-card",
      { x: -30, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.8, stagger: 0.2,
        scrollTrigger: {
          trigger: ".exhibitions-section",
          start: "top 80%",
        }
      }
    );

  }, { scope: mainRef });

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setShowQuickView(true);
  };

  // Use actual products for featured collections (IDs 1, 2, 3)
  const featuredCollections = products.slice(0, 3);

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
    <div ref={mainRef} className="min-h-screen overflow-hidden">
      <SEO
        title="Home"
        description="AZAL International - Premium carpets and flooring solutions for hospitality, residential, and commercial spaces worldwide. Explore our luxury collections today."
        keywords="luxury carpets, premium flooring, dubai carpets, global flooring solutions, Azal International"
      />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-slate-900 text-white overflow-hidden hero-section">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="http://diningandlivingroom.com/wp-content/uploads/2017/06/8-Dining-Room-Tables-Perfect-for-a-Luxury-Set4.jpg?w=1920"
            alt="Luxury carpet background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 hero-title overflow-hidden">
            <span className="inline-block bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent drop-shadow-sm pb-2">
              Premium Carpets & Flooring Solutions
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-slate-200 hero-subtitle max-w-3xl mx-auto font-light tracking-wide">
            Transforming spaces with luxury, craftsmanship, and sustainability
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/collections"
              className="hero-btn px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-amber-500/30 transition-all transform hover:scale-105"
            >
              Explore Collections
            </Link>
            <Link
              to="/contact"
              className="hero-btn px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full text-lg font-semibold hover:bg-white/20 transition-all transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors about-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="about-content">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 leading-tight">
                Crafting Excellence <br />
                <span className="text-amber-600">Since 1990</span>
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                AZAL International has been a leader in premium carpet
                manufacturing, combining traditional craftsmanship with modern
                innovation to deliver exceptional flooring solutions worldwide.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Our commitment to quality, sustainability, and customer
                satisfaction has made us the preferred choice for hospitality,
                residential, and commercial projects globally.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 border-b-2 border-amber-600 text-amber-600 hover:text-amber-700 font-semibold transition-all group"
              >
                Learn More About Us
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
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
            <div className="grid grid-cols-2 gap-4 relative about-image">
              <div className="space-y-4 pt-12">
                <img
                  src="https://images.unsplash.com/photo-1600166898405-da9535204843?w=500&q=80"
                  alt="Carpet detail"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&q=80"
                  alt="Manufacturing"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors collections-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Featured Collections
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover our curated selection of premium carpets, where art meets functionality.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredCollections.map((collection, idx) => (
              <div
                key={collection.id}
                className="collection-card group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col border border-gray-100 dark:border-gray-700"
              >
                <div className="relative h-72 overflow-hidden shrink-0">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <button
                      onClick={() => handleQuickView(collection)}
                      className="px-6 py-2 bg-white text-gray-900 rounded-full font-semibold hover:bg-amber-50 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                    >
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 line-clamp-1 group-hover:text-amber-600 transition-colors">
                    {collection.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed mb-4 flex-1">
                    {collection.description}
                  </p>
                  <div className="flex items-center text-amber-600 font-medium">
                    <span>View Details</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              to="/collections"
              className="inline-flex items-center px-10 py-4 bg-gray-900 dark:bg-white dark:text-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors projects-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="project-card bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 px-4 py-1.5 bg-amber-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                    {project.sector}
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                </div>
                <div className="p-8 relative">
                  <div className="absolute -top-10 right-8 w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 truncate pr-16">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 flex items-center mb-4 text-sm font-medium">
                    <svg
                      className="w-4 h-4 mr-2 text-amber-500"
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
                  <Link to="/projects" className="text-amber-600 font-semibold hover:text-amber-700 text-sm uppercase tracking-wide">View Case Study</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              to="/projects"
              className="inline-flex items-center px-10 py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Industries / Sectors */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors sectors-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Industries We Serve</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {sectors.map((sector, idx) => (
              <Link
                key={sector.name}
                to={sector.path}
                className="sector-card bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-100 dark:border-slate-700 rounded-2xl p-8 text-center transition-all hover:-translate-y-2 hover:shadow-xl hover:border-amber-500/30 group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">{sector.icon}</div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-amber-600 transition-colors">{sector.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Preview Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900">
          <img src="https://images.unsplash.com/photo-1558603668-6570496b66f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Bespoke Customization
              </h2>
              <p className="text-xl text-blue-100 mb-8 font-light">
                Tailor every detail to match your unique vision. From artisanal materials to complex patterns, we bring your imagination to life.
              </p>
              <div className="space-y-6 mb-10">
                {[
                  { title: "Custom Sizes", desc: "Wall-to-wall or accent rugs" },
                  { title: "Material Choice", desc: "Silk, Wool, Bamboo, & more" },
                  { title: "Design Service", desc: "Professional design assistance" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white">{item.title}</h3>
                      <p className="text-blue-200">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/customization" className="inline-flex items-center px-8 py-4 bg-amber-500 text-white rounded-lg font-bold hover:bg-amber-600 transition-all shadow-lg hover:shadow-amber-500/50">
                Start Customizing
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500 blur-[100px] opacity-20 rounded-full"></div>
              <img src="https://images.unsplash.com/photo-1600166898405-da9535204843?w=800" alt="Customization" className="relative rounded-2xl shadow-2xl border-4 border-white/10 rotate-3 hover:rotate-0 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Exhibition Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors exhibitions-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Upcoming Exhibitions
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Domotex 2026",
                date: "Jan 10-13, 2026",
                location: "Hannover, DE",
                status: "Upcoming",
                icon: "🏛️"
              },
              {
                name: "Heimtextil 2026",
                date: "Jan 14-17, 2026",
                location: "Frankfurt, DE",
                status: "Upcoming",
                icon: "🧵"
              },
              {
                name: "Index Dubai 2026",
                date: "May 27-30, 2026",
                location: "Dubai, UAE",
                status: "Confirmed",
                icon: "🕌"
              },
            ].map((exhibition, index) => (
              <div
                key={index}
                className="exhibition-card group bg-white dark:bg-slate-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 dark:border-slate-800 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl leading-none select-none group-hover:scale-150 transition-transform duration-700">
                  {exhibition.icon}
                </div>

                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-xs font-bold rounded-full mb-4 uppercase tracking-wide">
                    {exhibition.status}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{exhibition.name}</h3>
                  <div className="flex flex-col space-y-2 text-slate-600 dark:text-slate-400">
                    <span className="flex items-center"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>{exhibition.date}</span>
                    <span className="flex items-center"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>{exhibition.location}</span>
                  </div>
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
              className="inline-flex items-center px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
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
                className="flex-1 px-6 py-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Request Catalog
              </button>
            </div>
          </form>
        </div>
      </section>

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

export default Home;
