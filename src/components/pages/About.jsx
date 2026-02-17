import { useRef } from "react";
import { Link } from 'react-router-dom';
import SEO from "../ui/SEO";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import aboutImg1 from "../../assets/about_images/1.png";
import aboutImg2 from "../../assets/about_images/2.png";
import aboutImg3 from "../../assets/about_images/3.png";
import aboutImg4 from "../../assets/about_images/4.png";
import aboutImg5 from "../../assets/about_images/5.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Hero Animation
    const tl = gsap.timeline();
    tl.fromTo(".about-title",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
      .fromTo(".about-quote",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(".about-intro",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      );

    // Section Animations
    const sections = [
      ".legacy-section",
      ".mission-section",
      ".craftsmanship-section",
      ".products-section",
      ".services-section",
      ".cta-section"
    ];

    sections.forEach(section => {
      gsap.fromTo(section,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Staggered Animations for lists/grids
    gsap.fromTo(".product-item",
      { scale: 0.9, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: 0.5, stagger: 0.1,
        scrollTrigger: {
          trigger: ".products-section",
          start: "top 75%",
        }
      }
    );

    gsap.fromTo(".service-card",
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.2,
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 75%",
        }
      }
    );

  }, { scope: containerRef });

  const productsOffered = [
    "Hand Knotted Rugs",
    "Hand Tufted Carpets",
    "Handloom Rugs",
    "Broadloom Carpets",
    "Jute Rugs",
    "Hand Woven Flat weaves",
    "Leather Carpets"
  ];

  const services = [
    {
      title: "Designer team for generating CAD's.",
      icon: "📐"
    },
    {
      title: "Product Sampling.",
      icon: "🧶"
    },
    {
      title: "Worldwide delivery of Rugs and Carpets.",
      icon: "🌎"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-white dark:bg-slate-950 transition-colors pt-20 overflow-hidden">
      <SEO
        title="About Us"
        description="Discover AZAL INTERNATIONAL, where love and passion are woven into every thread. A family legacy dedicated to premium craftsmanship, sustainability, and global rug solutions."
        keywords="rug legacy, family-owned carpet business, sustainable rug manufacturing, premium craftsmanship, global delivery rugs"
      />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="about-title text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-8 font-playfair tracking-tight">
            ABOUT US
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="about-quote text-2xl text-amber-600 font-playfair italic mb-8">
              "Love and passion are woven into every thread."
            </p>
            <p className="about-intro text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              Welcome to <span className="font-bold">AZAL INTERNATIONAL</span>, where love and passion are woven into every thread. Step into our world and discover the story behind our unwavering commitment to craftsmanship, quality, and unparalleled service. With over two decades of experience, we invite you to explore the essence of elegance, a love letter to your home.
            </p>
          </div>
        </div>

        {/* Story / Legacy Section */}
        <section className="mb-24 legacy-section">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 font-playfair">A Family Legacy</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                AZAL INTERNATIONAL is a family legacy, founded on a love for rugs and carpets that spans generations. Our passion drives us to provide the finest quality products and services, each piece a testament to our love for what we do.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                We are a beacon of love in the rug industry, deeply rooted in the artistry and tradition of rug weaving. Our journey began with a vision to create rugs that embody timeless elegance, a love story for your home.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Each rug is a labor of love, meticulously handcrafted by skilled artisans using premium materials sourced from around the globe. From luxurious wool to sumptuous silk, every rug reflects our unwavering commitment to love, excellence, and attention to detail.
              </p>
            </div>
            <div className="relative max-w-md mx-auto">
              <img
                src={aboutImg1}
                alt="Azal Heritage"
                className="rounded-2xl shadow-2xl relative z-10 w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="space-y-24 mb-24 mission-section">
          {/* Mission */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group">
              <img src={aboutImg2} alt="Our Mission" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-10 rounded-3xl border border-slate-100 dark:border-slate-800 transition-all hover:border-amber-500/30 shadow-lg">
              <div className="text-amber-600 mb-6 flex items-center gap-4">
                <span className="text-4xl">🎯</span>
                <h2 className="text-3xl font-bold font-playfair uppercase tracking-widest">Mission</h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  At <span className="font-bold">AZAL INTERNATIONAL</span>, our mission is to create exquisite rugs and carpets that elevate the aesthetic of any environment. We strive to blend timeless techniques with contemporary styles, ensuring that each piece not only serves a functional purpose but also adds a touch of sophistication to homes and businesses.
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  We are dedicated to weaving together quality, craftsmanship, and sustainability in every rug we create. Our mission is to provide our customers with beautiful, functional pieces that elevate their spaces while honoring traditional techniques and eco- friendly practices.
                </p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-slate-900 text-white p-10 rounded-3xl border border-amber-500/20 shadow-2xl relative overflow-hidden">
              <div className="text-amber-500 mb-6 flex items-center gap-4 relative z-10">
                <span className="text-4xl">✨</span>
                <h2 className="text-3xl font-bold font-playfair uppercase tracking-widest">Vision</h2>
              </div>
              <div className="space-y-4 relative z-10 text-slate-300">
                <p className="leading-relaxed">
                  At <span className="font-bold">AZAL INTERNATIONAL</span>, our vision is to redefine the way people experience flooring. We strive to be a leader in sustainable, innovative carpet solutions that blend style, comfort, and durability.
                </p>
                <p>
                  Through cutting-edge designs, exceptional quality, and eco-friendly practices, we aim to transform spaces into warm, inviting environments while making a positive impact on our planet. Our commitment is to inspire, elevate, and create lasting value for our customers, partners, and communities.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
            </div>
            <div className="order-1 md:order-2 relative h-96 rounded-3xl overflow-hidden shadow-2xl group">
              <img src={aboutImg3} alt="Our Vision" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            </div>
          </div>
        </section>

        {/* Craftsmanship Section */}
        <section className="mb-24 craftsmanship-section">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 font-playfair">THE ESSENCE OF CRAFTSMANSHIP</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4 bg-slate-100 dark:bg-slate-900 h-64 flex items-center justify-center">
                <img src={aboutImg4} alt="Artisan at work" className="h-full w-auto object-contain transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100">Masterful Artistry</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Every knot is tied with precision, reflecting centuries of tradition passed down through generations.</p>
              </div>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4 bg-slate-100 dark:bg-slate-900 h-64 flex items-center justify-center">
                <img src={aboutImg5} alt="Finished masterpiece" className="h-full w-auto object-contain transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100">Timeless Elegance</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Designs that transcend trends, creating a lasting legacy of beauty in your home.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Offered */}
        <section className="mb-24 py-16 bg-slate-50 dark:bg-slate-900/50 rounded-3xl px-8 lg:px-12 products-section">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 font-playfair">PRODUCTS OFFERED</h2>
            <p className="text-amber-600 font-bold tracking-widest uppercase">IMAGINATION TO REALITY</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {productsOffered.map((product, i) => (
              <div key={i} className="product-item bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-3 group hover:border-amber-500 transition-colors">
                <span className="w-2 h-2 bg-amber-500 rounded-full group-hover:scale-125 transition-transform"></span>
                <span className="text-slate-800 dark:text-slate-200 font-medium">{product}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Our Services */}
        <section className="mb-24 services-section">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 font-playfair">OUR SERVICES</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="service-card bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-lg text-center group hover:-translate-y-2 transition-all">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="cta-section">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-16 text-center relative overflow-hidden border border-amber-500/20 shadow-2xl">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 font-playfair tracking-wide">Ready to Elevate Your Space?</h2>
              <p className="text-xl text-slate-300 mb-10">
                Connect with our team to bring the elegance of <span className="text-amber-500 font-bold">AZAL INTERNATIONAL</span> into your environment.
              </p>
              <Link to="/contact" className="inline-block px-12 py-5 bg-amber-600 text-white rounded-lg font-bold hover:bg-amber-700 transition-all transform hover:scale-105 shadow-xl shadow-amber-500/20 uppercase tracking-widest text-lg">
                Schedule a Consultation
              </Link>
            </div>
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
